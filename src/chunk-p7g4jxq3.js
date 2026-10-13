import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { v, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { HP } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { tc } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Fb } from "/$bunfs/root/chunk-2d9a83dh.js";
import { lstat, readdir, rmdir, unlink } from "fs/promises";
import { dirname, join } from "path";
const qVr = "images";
const KVr = /^(\d+)\.[a-z]+$/;
async function AYo(a, p) {
    let e = {
        removed: 0,
        errors: 0
    };
    let r = ie();
    let n;
    let i;
    try {
        n = await r.realpath(p ?? tc());
        i = await r.readdir(n);
    } catch  {
        return e;
    }
    let o = K();
    for (let t of i){
        if (!t.isDirectory()) {
            continue;
        }
        let s = join(n, t.name);
        let c;
        try {
            c = await r.readdir(s);
        } catch  {
            continue;
        }
        for (let m of c){
            if (!m.isDirectory() || m.name === o || Jt(m.name) === null) {
                continue;
            }
            let d = join(s, m.name, qVr);
            try {
                let f = await r.lstat(d);
                if (!f.isDirectory() || f.mtime >= a) {
                    continue;
                }
                if (await I(d, a)) {
                    e.removed++;
                }
            } catch (error) {
                if (!jt(error)) {
                    e.errors++;
                }
            }
        }
    }
    return e;
}
async function I(a, p) {
    let e = await Fb(a, [
        a
    ], {
        leaf: "replace"
    });
    try {
        await e.recheckBeforeWrite();
        let r = await lstat(e.ioPath);
        if (!r.isDirectory() || r.mtime >= p) {
            return false;
        }
        let n = join(a, "any");
        let i = await Fb(n, [
            n
        ], {
            leaf: "replace"
        });
        try {
            let o = dirname(i.ioPath);
            await i.recheckBeforeWrite();
            for (let t of (await readdir(o))){
                let s = t.lastIndexOf(".tmp.");
                let c = s === -1 ? t : t.slice(0, s);
                if (!KVr.test(c) || s !== -1 && !HP(t, c)) {
                    continue;
                }
                await i.recheckBeforeWrite();
                await unlink(join(o, t)).catch(()=>{});
            }
        } finally{
            await i.close();
        }
        await e.recheckBeforeWrite();
        try {
            await rmdir(e.ioPath);
        } catch (error) {
            let t = v(error);
            if (t === "ENOTEMPTY" || t === "EEXIST") {
                return false;
            }
            throw error;
        }
        return true;
    } finally{
        await e.close();
    }
}
export { qVr, KVr, AYo };
