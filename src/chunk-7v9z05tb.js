import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { xH } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { Mf } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { to } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { iB } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { o, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { qF } from "/$bunfs/root/chunk-yngqe5v3.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants, lstatSync, mkdirSync, unlinkSync, utimesSync, writeFileSync } from "fs";
import { lstat, mkdir, open, readdir, rm, writeFile } from "fs/promises";
import { randomBytes } from "crypto";
import { basename, join, resolve } from "path";
const v_1 = 1;
const te = 8 * Mf;
const re = 900000;
const P = "accepted-";
const S = ".jsonl";
const ne = ".seen";
const C = ".accepting-";
function cJe(e) {
    if (e === null) {
        return null;
    }
    return at(e);
}
const oe = p(()=>u({
        v: A(v_1),
        kind: A("file"),
        path: o(),
        text: o().nullable(),
        sha256: o().regex(/^[0-9a-f]{64}$/).nullable(),
        at: o(),
        by: U([
            "first_attach",
            "own_write",
            "person"
        ])
    }));
const ie = p(()=>u({
        v: A(v_1),
        kind: A("folder"),
        key: o(),
        project: o().nullable(),
        local: o().nullable(),
        legacy: o().nullable(),
        at: o()
    }));
function I(e, a) {
    if (O() === "windows") {
        return L(e) === L(a);
    }
    return e === a;
}
function L(e) {
    return e.replace(/^[a-z](?=:)/, (a)=>a.toUpperCase());
}
function D(e) {
    return to(e.normalize("NFC"));
}
function F(e, a = iB()) {
    return join(a, `${P}settings-${at(D(resolve(e))).slice(0, 32)}${S}`);
}
function x(e, a = iB()) {
    return join(a, `${P}folder-${at(D(e)).slice(0, 32)}${S}`);
}
function M(e) {
    return `${e.slice(0, -S.length)}${ne}`;
}
function T(e) {
    try {
        return qF(e, te);
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    try {
        lstatSync(M(e));
    } catch (error) {
        if (z(error)) {
            return;
        }
        throw error;
    }
    throw Error("record aged out");
}
function j(e) {
    try {
        let a = new Date;
        utimesSync(e, a, a);
    } catch  {}
}
function Ufe(e = iB()) {
    let a = (r, n)=>{
        mkdirSync(e, {
            recursive: true,
            mode: 448
        });
        let t = M(r);
        let g = false;
        try {
            writeFileSync(t, "", {
                mode: 384,
                flag: "wx"
            });
            g = true;
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
        try {
            xH(r, `${_(n)}
`, 384);
        } catch (error) {
            let m;
            try {
                m = lstatSync(r).isFile();
            } catch (err) {
                m = !z(err);
            }
            if (g && !m) {
                try {
                    unlinkSync(t);
                } catch  {}
                try {
                    if (lstatSync(r).isFile()) {
                        writeFileSync(t, "", {
                            mode: 384,
                            flag: "wx"
                        });
                    }
                } catch  {}
            }
            throw error;
        }
        try {
            writeFileSync(t, "", {
                mode: 384,
                flag: "wx"
            });
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    };
    let l = new Set;
    let s = (r, n, t)=>{
        let g = Tr(t);
        if (t.length > g.length + 1 && !l.has(n)) {
            l.add(n);
            try {
                i("tengu_remote_tool_serving", {
                    event: b("accepted_record_has_tail"),
                    record_kind: d(r)
                });
            } catch (error) {
                c(W(error));
            }
        }
        return g;
    };
    return {
        file: (r)=>{
            try {
                let n = T(F(r, e));
                if (n === undefined) {
                    return "none";
                }
                let t = oe().safeParse(X(s("file", r, n)));
                if (!t.success || !I(resolve(t.data.path), resolve(r)) || cJe(t.data.text) !== t.data.sha256) {
                    return "unreadable";
                }
                return {
                    text: t.data.text,
                    sha256: t.data.sha256
                };
            } catch  {
                return "unreadable";
            }
        },
        recordFile: (path, text, by)=>{
            if (text !== null && Buffer.byteLength(text) > Mf) {
                throw Error("accepted settings text exceeds the settings size limit");
            }
            a(F(path, e), {
                v: v_1,
                kind: "file",
                path,
                text,
                sha256: cJe(text),
                at: new Date().toISOString(),
                by
            });
            l.delete(path);
        },
        folder: (r)=>{
            try {
                let n = T(x(r, e));
                if (n === undefined) {
                    return "none";
                }
                let t = ie().safeParse(X(s("folder", r, n)));
                if (!t.success || !I(t.data.key, r)) {
                    return "unreadable";
                }
                let { project, local, legacy } = t.data;
                return {
                    project,
                    local,
                    legacy
                };
            } catch  {
                return "unreadable";
            }
        },
        recordFolder: (r, n)=>{
            a(x(r, e), {
                v: v_1,
                kind: "folder",
                key: r,
                project: n.project,
                local: n.local,
                legacy: n.legacy,
                at: new Date().toISOString()
            });
            l.delete(r);
        },
        noteServed: (r, n)=>{
            j(x(r, e));
            for (let t of n){
                j(F(t, e));
            }
        }
    };
}
async function ae(e) {
    try {
        let a = Date.now() - re;
        for (let l of (await readdir(e))){
            let s = l.lastIndexOf(C);
            if (s <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(l.slice(s + C.length))) {
                continue;
            }
            let r = join(e, l);
            if ((await lstat(r)).mtimeMs < a) {
                await rm(r, {
                    recursive: true,
                    force: true
                });
            }
        }
    } catch  {}
}
async function GNo(e, a) {
    let l = e.dir ?? iB();
    await mkdir(l, {
        recursive: true,
        mode: 448
    });
    await ae(l);
    let s = join(l, `${basename(e.name)}${C}${randomBytes(4).toString("hex")}${S}`);
    await writeFile(s, e.text, {
        mode: 384,
        flag: "wx"
    });
    try {
        let r = await lstat(s);
        if (await a(s)) {
            return "blocked";
        }
        let n;
        try {
            if (O() === "windows" && (await lstat(s)).isSymbolicLink()) {
                return "tampered";
            }
            n = await open(s, constants.O_RDONLY | oa);
            let t = await n.stat();
            if (t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await n.readFile({
                encoding: "utf8"
            }) === e.text) {
                return "allowed";
            }
            return "tampered";
        } catch (error) {
            if (z(error) || v(error) === "ELOOP") {
                return "tampered";
            }
            throw error;
        } finally{
            await n?.close().catch(()=>{});
        }
    } finally{
        await rm(s, {
            recursive: true,
            force: true
        }).catch(()=>{});
    }
}
export { cJe, Ufe, GNo };
