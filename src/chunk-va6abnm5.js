import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ape } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Dw } from "/$bunfs/root/chunk-vpp1psvz.js";
import { ktn } from "/$bunfs/root/chunk-dw3y3qpx.js";
import { constants } from "fs";
import { lstat, mkdir, open } from "fs/promises";
import { basename, dirname, isAbsolute, join } from "path";
function f() {
    let storeDir = Dw();
    return {
        storeDir,
        storePath: join(storeDir, ".credentials.json")
    };
}
const constants_O_NONBLOCK = constants.O_NONBLOCK;
const c = 1048576;
async function N(e) {
    try {
        return {
            kind: "open",
            fileHandle: await open(e, constants.O_RDONLY | constants.O_NOFOLLOW | constants_O_NONBLOCK)
        };
    } catch (error) {
        let n = v(error);
        if (n === "ELOOP") {
            return {
                kind: "refused-symlink"
            };
        }
        return {
            kind: "error",
            code: n
        };
    }
}
async function D(e, r) {
    let n = constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC;
    try {
        return {
            kind: "open",
            fileHandle: await open(e, n | constants.O_NOFOLLOW, r)
        };
    } catch (error) {
        let a = v(error);
        if (a === "ELOOP") {
            return {
                kind: "refused-symlink"
            };
        }
        return {
            kind: "error",
            code: a
        };
    }
}
function S(e) {
    return e.length > 0 && !e.includes("\x00") && isAbsolute(e);
}
const B = new Set([
    ".oauth_token",
    ".api_key",
    ".session_ingress_token"
]);
function m(e) {
    if (e === "ENOENT") {
        return {
            state: "absent"
        };
    }
    return {
        state: "read-failed",
        code: e
    };
}
function w(e) {
    if (e === "ENOENT") {
        return "absent";
    }
    return "read-failed";
}
function A(e, r) {
    if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") {
        return "absent";
    }
    if ((e === "EACCES" || e === "EPERM") && r !== "win32") {
        return "absent";
    }
    return "read-failed";
}
async function E(e) {
    let { storePath } = f();
    let n = await N(storePath);
    switch(n.kind){
        case "refused-symlink":
            return {
                state: "refused-symlink"
            };
        case "error":
            if (e(n.code) === "absent") {
                return {
                    state: "absent"
                };
            }
            return {
                state: "read-failed",
                code: n.code
            };
        case "open":
            {
                let { fileHandle } = n;
                let a;
                let uid;
                let mode;
                try {
                    let o = await fileHandle.stat();
                    if (!o.isFile()) {
                        if (o.isDirectory()) {
                            if (e("EISDIR") === "absent") {
                                return {
                                    state: "absent"
                                };
                            }
                            return {
                                state: "read-failed",
                                code: "EISDIR"
                            };
                        }
                        return {
                            state: "corrupt"
                        };
                    }
                    if (o.size > c) {
                        return {
                            state: "corrupt"
                        };
                    }
                    uid = o.uid;
                    mode = o.mode;
                    let i = Buffer.alloc(Math.min(o.size, c) + 1);
                    let d = 0;
                    while(true){
                        let { bytesRead } = await fileHandle.read(i, d, i.length - d, d);
                        if (bytesRead === 0) {
                            break;
                        }
                        d += bytesRead;
                        if (d === i.length) {
                            if (i.length > c) {
                                return {
                                    state: "corrupt"
                                };
                            }
                            let O = Buffer.alloc(c + 1);
                            i.copy(O, 0, 0, d);
                            i = O;
                        }
                    }
                    a = i.toString("utf8", 0, d);
                } catch (error) {
                    let i = v(error);
                    if (e(i) === "absent") {
                        return {
                            state: "absent"
                        };
                    }
                    return {
                        state: "read-failed",
                        code: i
                    };
                } finally{
                    await fileHandle.close().catch(()=>{});
                }
                let u;
                try {
                    u = JSON.parse(a);
                } catch  {
                    return {
                        state: "corrupt"
                    };
                }
                if (u === null) {
                    return {
                        state: "absent"
                    };
                }
                return {
                    state: "present",
                    data: u,
                    uid,
                    mode
                };
            }
    }
}
const y = {
    readCredentials () {
        return E(w);
    },
    readCredentialsStrict () {
        return E((e)=>A(e, "linux"));
    },
    async writeCredentials (e) {
        let { storeDir, storePath } = f();
        try {
            await ie().mkdir(storeDir);
            await Ape(storePath, _(e), {
                mode: 384,
                exactMode: 384
            });
        } catch (error) {
            return {
                state: "write-failed",
                code: v(error)
            };
        }
        return {
            state: "written"
        };
    },
    async deleteCredentials () {
        let { storePath } = f();
        return R(storePath);
    },
    async discardSpentCredentialFile (e) {
        return R(e);
    },
    async readHandoffCredential (e, { symlinkAtPath }) {
        if (!S(e)) {
            return {
                state: "read-failed",
                code: "EINVAL"
            };
        }
        let n;
        if (symlinkAtPath === "follow") {
            try {
                n = await open(e, constants.O_RDONLY | constants_O_NONBLOCK);
            } catch (error) {
                return m(v(error));
            }
        } else {
            let t = await N(e);
            switch(t.kind){
                case "refused-symlink":
                    return {
                        state: "read-failed",
                        code: "ELOOP"
                    };
                case "error":
                    return m(t.code);
                case "open":
                    n = t.fileHandle;
            }
        }
        try {
            if (!(await n.stat()).isFile()) {
                return {
                    state: "read-failed",
                    code: "EINVAL"
                };
            }
            let t = Buffer.alloc(ktn + 1);
            let a = 0;
            while(true){
                let { bytesRead } = await n.read(t, a, t.length - a, a);
                if (bytesRead === 0) {
                    break;
                }
                a += bytesRead;
                if (a > ktn) {
                    return {
                        state: "read-failed",
                        code: "EFBIG"
                    };
                }
            }
            return {
                state: "present",
                contents: t.toString("utf8", 0, a)
            };
        } catch (error) {
            return m(v(error));
        } finally{
            await n.close().catch(()=>{});
        }
    },
    async writeHandoffCredential (e, r) {
        if (!S(e)) {
            return {
                state: "write-failed",
                code: "EINVAL"
            };
        }
        if (!B.has(basename(e))) {
            return {
                state: "write-failed",
                code: "EINVAL"
            };
        }
        try {
            await mkdir(dirname(e), {
                recursive: true,
                mode: 448
            });
        } catch (error) {
            return {
                state: "write-failed",
                code: v(error)
            };
        }
        let n = await D(e, 384);
        switch(n.kind){
            case "refused-symlink":
                return {
                    state: "write-failed",
                    code: "ELOOP"
                };
            case "error":
                return {
                    state: "write-failed",
                    code: n.code
                };
            case "open":
                try {
                    await n.fileHandle.writeFile(r, {
                        encoding: "utf8"
                    });
                    return {
                        state: "written"
                    };
                } catch (error) {
                    return {
                        state: "write-failed",
                        code: v(error)
                    };
                } finally{
                    await n.fileHandle.close().catch(()=>{});
                }
        }
    },
    async probeCredentials () {
        let { storePath } = f();
        let r;
        try {
            r = await lstat(storePath, {
                bigint: true
            });
        } catch (error) {
            let t = v(error);
            if (w(t) === "absent") {
                return {
                    state: "absent"
                };
            }
            return {
                state: "read-failed",
                code: t
            };
        }
        if (r.isSymbolicLink()) {
            return {
                state: "read-failed",
                code: "ELOOP"
            };
        }
        return {
            state: "present",
            version: `${r.dev}:${r.ino}:${r.size}:${r.mtimeNs}`
        };
    }
};
async function R(e) {
    try {
        await ie().unlink(e);
        return {
            state: "deleted"
        };
    } catch (error) {
        let n = v(error);
        if (n === "ENOENT") {
            return {
                state: "deleted"
            };
        }
        return {
            state: "delete-failed",
            code: n
        };
    }
}
const I = Symbol("secureStorage.CredentialsStoreHandle");
function ME(e, r = y) {
    if (j() && e !== undefined) {
        return T(r);
    }
}
function Aat(storageV5) {
    return {
        storageV5,
        credentials: ME(storageV5)
    };
}
function T(e = y) {
    return {
        ...e,
        [I]: "CredentialsStoreHandle"
    };
}
export { ME, Aat };
