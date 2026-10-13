import { ml } from "/$bunfs/root/chunk-qch5xj2a.js";
function As(n, g) {
    if (!n.trim() || !g.trim()) {
        return null;
    }
    let c = ml(g);
    let l = new RegExp(`<${c}(?=[\\s>])`, "gi");
    let e = new RegExp(`<\\/${c}>`, "gi");
    let s = 0;
    while(true){
        l.lastIndex = s;
        let t = l.exec(n);
        e.lastIndex = s;
        let o = e.exec(n);
        if (!t || !o) {
            return null;
        }
        let r = n.indexOf(">", t.index + t[0].length);
        if (r === -1) {
            return null;
        }
        e.lastIndex = r + 1;
        let i = e.exec(n);
        if (!i) {
            return null;
        }
        let a = o.index + o[0].length <= t.index;
        let x = n.slice(r + 1, i.index);
        if (x && !a) {
            return x;
        }
        s = i.index + i[0].length;
    }
}
export { As };
