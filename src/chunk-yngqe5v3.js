import { h9, yo, ie, R0, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { isUtf8 } from "buffer";
import { open } from "fs/promises";
function f(n, e, r) {
    uPe(n.statSync(e), e, r);
}
function uPe(n, e, r) {
    if (n.isDirectory()) {
        throw Object.assign(Error("EISDIR: illegal operation on a directory, read"), {
            code: "EISDIR",
            errno: -21,
            syscall: "read",
            path: e
        });
    }
    if (!n.isFile()) {
        throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"), {
            code: "ERR_NOT_REGULAR_FILE",
            path: e
        });
    }
    if (r !== undefined && n.size > r) {
        throw Object.assign(Error("File exceeds maxBytes limit"), {
            code: "ERR_FILE_TOO_LARGE",
            path: e,
            size: n.size,
            maxBytes: r
        });
    }
}
function UIs(n, e) {
    if (n.isFile() && Number(n.nlink) > 1) {
        throw Object.assign(Error("File has more than one hard link"), {
            code: "ERR_MULTIPLE_LINKS",
            path: e
        });
    }
}
function fRr(size, e, r) {
    if (r === undefined) {
        return;
    }
    if (size > r) {
        throw Object.assign(Error("File exceeds maxBytes limit"), {
            code: "ERR_FILE_TOO_LARGE",
            path: e,
            size,
            maxBytes: r
        });
    }
}
function l9(n) {
    return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function z1(n) {
    return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function TGn(n) {
    if (n.byteLength === 0) {
        return "utf8";
    }
    if (n.byteLength >= 2) {
        if (n[0] === 255 && n[1] === 254) {
            return "utf16le";
        }
    }
    if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) {
        return "utf8";
    }
    return "utf8";
}
function IAo(n, e) {
    return e === "utf8" && !isUtf8(n);
}
function twe(n) {
    let e = TGn(n.subarray(0, 4096));
    return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function OAo(n) {
    let { buffer, bytesRead } = ie().readSync(n, {
        length: 4096
    });
    return TGn(buffer.subarray(0, bytesRead));
}
function AGn(n) {
    let e = 0;
    let r = 0;
    for(let i = 0; i < n.length; i++){
        if (n[i] === `
`) {
            if (i > 0 && n[i - 1] === "\r") {
                e++;
            } else {
                r++;
            }
        }
    }
    if (e > r) {
        return "CRLF";
    }
    return "LF";
}
function MAo(n, e) {
    let r = ie();
    let { resolvedPath, isSymlink } = yo(r, n);
    if (isSymlink) {
        t(`Reading through symlink: ${n} -> ${resolvedPath}`);
    }
    f(r, n, e);
    let o = OAo(n);
    let c;
    if (e === undefined) {
        c = r.readFileSync(n, {
            encoding: o
        });
    } else {
        let { buffer, bytesRead } = r.readSync(n, {
            length: e + 1
        });
        fRr(bytesRead, n, e);
        c = buffer.subarray(0, bytesRead).toString(o);
    }
    let l = AGn(c.slice(0, 4096));
    return {
        content: c.replaceAll(`\r
`, `
`),
        encoding: o,
        lineEndings: l
    };
}
function qF(n, e) {
    return MAo(n, e).content;
}
async function E_(n, e) {
    let r = ie();
    let { resolvedPath, isSymlink } = yo(r, n);
    if (isSymlink) {
        t(`Reading through symlink: ${n} -> ${resolvedPath}`);
    }
    uPe(await r.stat(n), n, e);
    await using o = await open(n, h9());
    return await nwe(o, n, e);
}
async function nwe(n, e, r) {
    uPe(await n.stat(), e, r);
    let i = r === undefined ? await n.readFile() : await R0(n, r + 1, "file");
    fRr(i.length, e, r);
    let s = TGn(i.subarray(0, 4096));
    let o = i.toString(s);
    let c = AGn(o.slice(0, 4096));
    return {
        content: o.replaceAll(`\r
`, `
`),
        encoding: s,
        lineEndings: c,
        ...IAo(i, s) && {
            lossyDecode: true
        }
    };
}
export { uPe, UIs, fRr, l9, z1, TGn, IAo, twe, OAo, AGn, MAo, qF, E_, nwe };
