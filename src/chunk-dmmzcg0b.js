import { ae, vZ } from "/$bunfs/root/chunk-223dyewd.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { ET, DOn, sKe, got } from "/$bunfs/root/chunk-cmf2ckg9.js";
function gb(r, o, t) {
    let n = DOn(ET);
    let e = sKe(r, o, n);
    if (e === undefined) {
        let i = `${r}:${o}`;
        let s = ET.loggedShortcutFallbacks;
        if (!s.has(i)) {
            s.add(i);
            got(r, o, t, "action_not_found");
        }
        return t;
    }
    if (e === null) {
        return "";
    }
    return e;
}
function h() {
    let r = gb("app:toggleTranscript", "Global", "ctrl+o");
    return ge.dim(`(${r} to expand)`);
}
const d = 3;
const u = 10;
function b(r, o) {
    let t = r.split(`
`);
    let n = [];
    for (let i of t){
        let s = ae(i);
        if (s <= o) {
            n.push(i.trimEnd());
        } else {
            let a = 0;
            while(a < s){
                let c = Bun.sliceAnsi(i, a, a + o);
                n.push(c.trimEnd());
                a += o;
            }
        }
    }
    let e = n.length - d;
    if (e === 1) {
        return {
            aboveTheFold: n.slice(0, d + 1).join(`
`).trimEnd(),
            remainingLines: 0
        };
    }
    return {
        aboveTheFold: n.slice(0, d).join(`
`).trimEnd(),
        remainingLines: Math.max(0, e)
    };
}
function f7r(r, o, t = false) {
    let n = r.trimEnd();
    if (!n) {
        return "";
    }
    let e = Math.max(o - u, 10);
    let i = d * e * 4;
    let s = n.length > i;
    let a = s ? n.slice(0, i) : n;
    let { aboveTheFold, remainingLines } = b(a, e);
    let m = remainingLines;
    if (s) {
        let g = 0;
        let f = -1;
        while(true){
            f = n.indexOf(`
`, f + 1);
            if (f === -1) {
                break;
            }
            g++;
        }
        let p = Math.max(g + 1, Math.ceil(n.length / e));
        m = Math.max(remainingLines, p - d);
    }
    return [
        aboveTheFold,
        m > 0 ? ge.dim(vZ(m) + (t ? "" : ` ${h()}`)) : ""
    ].filter(Boolean).join(`
`);
}
function ED(r, o) {
    if (typeof r !== "string") {
        return false;
    }
    let t = r.trimEnd();
    let n = 0;
    let e = 0;
    for(let l = 0; l <= d; l++){
        n = t.indexOf(`
`, n);
        if (n === -1) {
            break;
        }
        e++;
        n++;
    }
    if (n !== -1 && n < t.length) {
        return true;
    }
    if (o === undefined) {
        return false;
    }
    let i = Math.max(o - u, 10);
    let s = d + 1;
    let a = d * i * 4;
    if (t.length > a) {
        return true;
    }
    if (e === 0) {
        let l = s * i;
        if (t.length <= l) {
            return false;
        }
        return ae(t) > l;
    }
    let c = 0;
    for (let l of t.split(`
`)){
        c += Math.max(1, Math.ceil(ae(l) / i));
        if (c > s) {
            return true;
        }
    }
    return false;
}
export { gb, f7r, ED };
