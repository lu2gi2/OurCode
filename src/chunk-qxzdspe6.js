import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Ny, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { o, E, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { randomBytes, timingSafeEqual } from "crypto";
import { unlinkSync } from "fs";
import { mkdir, open, readdir, unlink } from "fs/promises";
import { homedir } from "os";
import { dirname, join } from "path";
const v = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/;
const c = 4096;
const x = p(()=>u({
        version: A(1),
        pid: E().int().positive(),
        procStart: o().min(1),
        nonceSha256: o()
    }));
function m() {
    return join(homedir(), ".claude", "state", "unattended-serving-runs");
}
function a(n) {
    return join(m(), `${n}.json`);
}
async function Ijs() {
    try {
        let procStart = await Ny();
        if (procStart === undefined) {
            return;
        }
        let e = randomBytes(32).toString("hex");
        let r = a(process.pid);
        await mkdir(dirname(r), {
            recursive: true,
            mode: 448
        });
        await En(r, `${_({
            version: 1,
            pid: process.pid,
            procStart,
            nonceSha256: at(e)
        })}
`, 384);
        await j();
        process.once("exit", ()=>{
            try {
                unlinkSync(r);
            } catch  {}
        });
        return {
            token: `${process.pid}.${e}`,
            remove: async ()=>{
                try {
                    await unlink(r);
                } catch  {}
            }
        };
    } catch (error) {
        t(`unattended run grant: not recorded (${l(error)})`, {
            level: "warn"
        });
        return;
    }
}
async function EGr(n) {
    try {
        let e = n === undefined ? null : v.exec(n);
        if (!e) {
            return false;
        }
        let r = Number(e[1]);
        let i = await z(a(r));
        if (i === undefined || i.pid !== r || !T(i.nonceSha256, at(e[2])) || !_a(r)) {
            return false;
        }
        return await Fl(r, {
            skipCache: true
        }) === i.procStart;
    } catch  {
        return false;
    }
}
async function z(n) {
    let e;
    try {
        e = await open(n, "r");
        let r = Buffer.alloc(c + 1);
        let { bytesRead } = await e.read(r, 0, r.length, 0);
        if (bytesRead > c) {
            return;
        }
        let s = x().safeParse(X(r.subarray(0, bytesRead).toString("utf8")));
        if (s.success) {
            return s.data;
        }
        return undefined;
    } catch  {
        return;
    } finally{
        await e?.close().catch(()=>{});
    }
}
function T(nonceSha256, e) {
    let r = Buffer.from(nonceSha256);
    let i = Buffer.from(e);
    return r.length === i.length && timingSafeEqual(r, i);
}
async function j() {
    try {
        for (let n of (await readdir(m()))){
            let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(n)?.[1]);
            if (Number.isInteger(e) && !_a(e)) {
                await unlink(a(e)).catch(()=>{});
            }
        }
    } catch  {}
}
export { Ijs, EGr };
