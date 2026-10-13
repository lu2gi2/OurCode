import { Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
function ncn(e, n = new Date) {
    let r = a(n);
    let t = c(g(e));
    if (t) {
        return `${r}-${t}.txt`;
    }
    return `conversation-${r}.txt`;
}
function a(e) {
    let n = e.getFullYear();
    let r = String(e.getMonth() + 1).padStart(2, "0");
    let t = String(e.getDate()).padStart(2, "0");
    let s = String(e.getHours()).padStart(2, "0");
    let i = String(e.getMinutes()).padStart(2, "0");
    let o = String(e.getSeconds()).padStart(2, "0");
    return `${n}-${r}-${t}-${s}${i}${o}`;
}
function g(e) {
    let n = e.find((s)=>s.type === "user");
    if (!n || n.type !== "user") {
        return "";
    }
    let r = n.message?.content;
    let t = "";
    if (typeof r === "string") {
        t = r.trim();
    } else if (Array.isArray(r)) {
        let s = r.findLast((i)=>i.type === "text");
        if (s && "text" in s) {
            t = s.text.trim();
        }
    }
    t = Tr(t);
    if (t.length > 50) {
        t = `${t.substring(0, 49)}…`;
    }
    return t;
}
function c(e) {
    return e.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
export { ncn };
