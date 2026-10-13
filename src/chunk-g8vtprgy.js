import { atn } from "/$bunfs/root/chunk-xb9cceab.js";
let a;
function u(e) {
    return e.startsWith(atn) && !e.slice(atn.length).includes("__") || a !== undefined && e === a;
}
function s({ mcpInfo }) {
    if (mcpInfo === undefined) {
        return "unplaced";
    }
    if (mcpInfo.accountMemoryServer === true) {
        return "verified";
    }
    let n = mcpInfo.source ?? (mcpInfo.serverType === "sdk" ? "sdk" : undefined);
    if (n === undefined || n === "sdk") {
        return "unplaced";
    }
    return "other_server";
}
function y(e, o) {
    if (e === "verified" || o === "verified") {
        return "verified";
    }
    if (e === "unplaced" || o === "unplaced") {
        return "unplaced";
    }
    return "other_server";
}
function oV(e) {
    let o = new Set;
    let n = new WeakMap;
    let d = (r)=>{
        let c = n.get(r);
        if (c === undefined) {
            let t = new Map;
            for (let i of r){
                let f = s(i);
                for (let l of [
                    i.name,
                    ...i.aliases ?? []
                ]){
                    t.set(l, y(t.get(l), f));
                }
            }
            c = t;
            n.set(r, c);
        }
        return c;
    };
    return (r)=>{
        if (o.has(r)) {
            return "verified";
        }
        let c = e();
        let t = c === undefined ? "unplaced" : d(c).get(r) ?? "unplaced";
        if (t === "verified") {
            o.add(r);
        }
        return t;
    };
}
function qHn(e) {
    return (o)=>{
        if (e.has(o)) {
            return "verified";
        }
        return "unplaced";
    };
}
function E5(e, o, n) {
    switch(o?.(e)){
        case "verified":
            return true;
        case "other_server":
            return n === "history" && u(e);
        default:
            return u(e);
    }
}
function b_e(e) {
    return E5(e.name, ()=>s(e), "live");
}
export { oV, qHn, E5, b_e };
