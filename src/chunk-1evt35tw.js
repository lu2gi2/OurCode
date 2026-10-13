import { trn } from "/$bunfs/root/chunk-6bjtvbt8.js";
function E8t(t, e) {
    let n = t.get(e);
    if (n) {
        return n;
    }
    let i = l(e);
    let o;
    for (let [c, s] of t){
        let r = l(c);
        if (!r.includes("*")) {
            if (r === i) {
                return s;
            }
        } else if (o === undefined && f(r, i)) {
            o = s;
        }
    }
    return o;
}
function l(t) {
    if (!t.startsWith("domain:")) {
        return t;
    }
    return `domain:${t.slice(7).toLowerCase().replace(/(?<=[^*.])\.+(?=(:\d+)?$)/, "")}`;
}
const a = ".:";
function f(t, e) {
    if (!t.startsWith("domain:") || !e.startsWith("domain:")) {
        return false;
    }
    if (t === "domain:*") {
        return true;
    }
    let n = u(t.slice(7));
    let i = u(e.slice(7));
    if (!n.startsWith("*.")) {
        return trn(n, i, a);
    }
    let o = n.slice(2);
    let c = 1;
    for (let d of o){
        if (a.includes(d)) {
            c++;
        }
    }
    let i_length = i.length;
    while(c > 0 && i_length > 0){
        i_length--;
        if (a.includes(i.charAt(i_length))) {
            c--;
        }
    }
    let r = i.slice(0, i_length + 1);
    return c === 0 && !r.startsWith(".") && !r.includes("..") && !r.includes(":") && trn(o, i.slice(i_length + 1), a);
}
function u(t) {
    return t.replace(/[^\0-\x7f]/g, (e)=>{
        let n = e.toUpperCase();
        if (n.length === 1 && n.charCodeAt(0) > 127) {
            return n;
        }
        return e;
    });
}
function ius(t, e) {
    let n = l(`domain:${t}`);
    let i = l(`domain:${e}`);
    if (n.includes("*")) {
        return f(n, i);
    }
    return n === i;
}
export { E8t, ius };
