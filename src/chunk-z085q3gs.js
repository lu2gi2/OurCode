import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { UTo, KE, Crn } from "/$bunfs/root/chunk-2d9a83dh.js";
import { T5, vQ, wDn, vDn } from "/$bunfs/root/chunk-qnrk8yjg.js";
import { kZe } from "/$bunfs/root/chunk-v747ynjy.js";
import { $L } from "/$bunfs/root/chunk-gsr2devr.js";
import { o, E, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { randomUUID } from "crypto";
import { lstat, mkdir, readdir, stat, unlink, writeFile } from "fs/promises";
import { basename, dirname, isAbsolute, join, resolve } from "path";
const X = vDn * 24 * 60 * 60 * 1000;
const U = "file-transfers";
function S(r) {
    t(`[peer-file-transfer] ${r}`);
}
function yGe(r) {
    let e = basename(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment";
    let n = e.lastIndexOf(".");
    let a = n > 0 && e.length - n <= 16 ? e.slice(n) : "";
    let s = a ? e.slice(0, n) : e;
    let l = 200 - a.length;
    return (s.length > l ? s.slice(0, l) : s) + a;
}
function Gwn(r, e) {
    return `[SendFile: "${yGe(r)}" was not delivered \u2014 ${e}]`;
}
function Vwn(r) {
    return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${vQ} per message]`;
}
function qwn(r, e) {
    if (typeof e.file_size === "number" && r.length !== e.file_size) {
        return false;
    }
    return at(r) === e.sha256;
}
function ler(r, file_count, verified_count) {
    i("tengu_send_file_received", {
        transport: d(r),
        file_count,
        verified_count
    });
    if (verified_count === file_count) {
        g("peer_file_receive");
    } else if (verified_count > 0) {
        f("peer_file_receive", "partial_failed");
    } else {
        m("peer_file_receive", "all_failed");
    }
}
async function zX(r, e) {
    try {
        let a = await stat(r);
        if (!a.isFile() || a.size > e) {
            return null;
        }
    } catch  {
        return null;
    }
    let n;
    try {
        n = await Crn(r);
    } catch  {
        return null;
    }
    try {
        let a = await n.stat();
        if (!a.isFile() || a.size > e) {
            return null;
        }
        let s = await KE(n, e, a.size);
        if (s.overLimit) {
            return null;
        }
        return s.bytes;
    } catch  {
        return null;
    } finally{
        await n.close().catch(()=>{});
    }
}
function cer(r, e) {
    if (!e) {
        return r;
    }
    let n = /^<cross-session-message\b[^>]*>\n?/.exec(r);
    if (n) {
        return n[0] + e + r.slice(n[0].length);
    }
    return e + r;
}
function WGt() {
    return join(ve(), U);
}
function Y() {
    return $L();
}
const G = /^[0-9a-f]{64}$/;
const V = p(()=>u({
        path: o(),
        file_name: o(),
        file_size: E().int().nonnegative(),
        sha256: o().regex(G),
        media_type: o().optional()
    }));
const Z = p(()=>T(V()));
async function H4r(r) {
    let e = await zX(r, T5);
    if (e === null) {
        throw new x(wDn, "peer file transfer: source unreadable or over the size limit");
    }
    let sha256 = at(e);
    let a = WGt();
    await mkdir(a, {
        recursive: true,
        mode: 448
    });
    let file_name = basename(r);
    let path = join(a, `${sha256.slice(0, 8)}-${randomUUID().slice(0, 8)}-${yGe(file_name)}`);
    await writeFile(path, e, {
        mode: 384
    });
    return {
        path,
        file_name,
        file_size: e.length,
        sha256,
        media_type: kZe(file_name)
    };
}
async function D4r() {
    let r = WGt();
    try {
        let e = await readdir(r);
        let n = Date.now() - X;
        for (let a of e.slice(0, 200)){
            let s = join(r, a);
            try {
                let l = await stat(s);
                if (l.isFile() && l.mtimeMs < n) {
                    await unlink(s);
                }
            } catch  {}
        }
    } catch  {}
}
const q = {
    prefix: "",
    received: 0,
    verified: 0
};
async function sWs(r) {
    let e = Z().safeParse(r);
    if (!e.success || e.data.length === 0) {
        if (!e.success) {
            S(`ignoring malformed file_attachments: ${e.error.message}`);
        }
        return q;
    }
    let n = [];
    let e_data = e.data;
    if (e_data.length > vQ) {
        n.push(Vwn(e_data.length - vQ));
        e_data = e_data.slice(0, vQ);
    }
    let s = Y();
    let l = WGt();
    let z = false;
    let D = [];
    let verified = 0;
    for (let c of e_data){
        let h = (F)=>{
            S(`${c.file_name}: ${F}`);
            n.push(Gwn(c.file_name, F));
        };
        if (Bn(c.path) || UTo(c.path) || !isAbsolute(c.path)) {
            h("invalid transfer path");
            continue;
        }
        let _ = resolve(c.path);
        let P = dirname(_);
        if (Bn(_) || UTo(_) || basename(P) !== U) {
            h("transfer path is outside the file-transfer spool");
            continue;
        }
        try {
            if (!(await lstat(P)).isDirectory() || !(await lstat(_)).isFile()) {
                h("the transfer copy is not a regular file");
                continue;
            }
        } catch  {
            h("the transfer copy could not be read (it may have expired)");
            continue;
        }
        let w = await zX(_, T5);
        if (w === null) {
            h("the transfer copy could not be read (it may have expired)");
            continue;
        }
        if (!qwn(w, c)) {
            h("it failed integrity verification");
            continue;
        }
        let v = join(s, `${c.sha256.slice(0, 8)}-${randomUUID().slice(0, 8)}-${yGe(c.file_name)}`);
        try {
            if (!z) {
                await mkdir(s, {
                    recursive: true,
                    mode: 448
                });
                z = true;
            }
            await writeFile(v, w, {
                mode: 384,
                flag: "wx"
            });
        } catch (error) {
            h("it could not be written to the uploads directory");
            S(`write ${v} failed: ${error}`);
            continue;
        }
        verified++;
        D.push(`@"${v}"`);
        if (P === l) {
            unlink(_).catch(()=>{});
        }
    }
    let A = [
        ...D,
        ...n
    ];
    return {
        prefix: A.length > 0 ? `${A.join(" ")} ` : "",
        received: e_data.length,
        verified
    };
}
export { yGe, Gwn, Vwn, qwn, ler, zX, cer, WGt, H4r, D4r, sWs };
