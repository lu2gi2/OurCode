import { $u } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { $p } from "/$bunfs/root/chunk-9xenmz7v.js";
import { QJt, aY } from "/$bunfs/root/chunk-4n16n64p.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { readdir, stat } from "fs/promises";
import { join, sep } from "path";
const o = Se(ty(), 1);
function s5() {
    if (!$u()) {
        return false;
    }
    let r = QJt() + sep;
    return process.execPath.startsWith(r);
}
function uu(r = {}) {
    return E4(H0e(r));
}
function H0e(r = {}) {
    if (!r.pinToCurrentBinary && s5()) {
        let t = zqe();
        return {
            cmd: t,
            prefixArgs: [],
            target: t
        };
    }
    if ($u()) {
        return {
            cmd: process.execPath,
            prefixArgs: [],
            target: process.execPath
        };
    }
    let target = process.argv[1];
    if (!target) {
        return {
            cmd: process.execPath,
            prefixArgs: [],
            target: process.execPath
        };
    }
    return {
        cmd: process.execPath,
        prefixArgs: [
            target
        ],
        target
    };
}
function zqe() {
    return join(aY(), "claude");
}
function E4(r) {
    let e = $p();
    if (e.length === 0 || r.cmd === e[0]) {
        return r;
    }
    return {
        cmd: e[0],
        prefixArgs: [
            ...e.slice(1),
            r.cmd,
            ...r.prefixArgs
        ],
        target: r.target
    };
}
async function tAt() {
    let r = QJt();
    let e;
    try {
        e = await readdir(r);
    } catch  {
        return null;
    }
    let t = e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
    for (let n of t){
        let i = join(r, n);
        try {
            let s = await stat(i);
            if (s.isFile() && s.size > 0) {
                return i;
            }
        } catch  {}
    }
    return null;
}
export { s5, uu, H0e, zqe, E4, tAt };
