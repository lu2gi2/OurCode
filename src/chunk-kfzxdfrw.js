import { u_ } from "/$bunfs/root/chunk-4r6b8efh.js";
function* i(n) {
    for (let s of n){
        if (s.type === "assistant" && Array.isArray(s.message.content)) {
            for (let e of s.message.content){
                if (e.type === "tool_use" && u_.includes(e.name)) {
                    let { input } = e;
                    if (typeof input === "object" && input !== null && "command" in input && typeof input.command === "string") {
                        yield input.command;
                    }
                }
            }
        }
    }
}
function cmn(n) {
    let s = new Set;
    for (let e of i(n)){
        let t = m(e);
        if (t) {
            s.add(t);
        }
    }
    return s;
}
const a = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
function c(n) {
    if (!n) {
        return [];
    }
    let s = [];
    for (let e of n.matchAll(a)){
        let t = e[1].toLowerCase();
        let o = t.lastIndexOf("@");
        if (o !== -1) {
            t = t.slice(o + 1);
        }
        let r = t.indexOf(":");
        if (r !== -1) {
            t = t.slice(0, r);
        }
        if (t) {
            s.push(t);
        }
    }
    return s;
}
function dmn(n) {
    let s = new Set;
    for (let e of i(n)){
        for (let t of c(e)){
            s.add(t);
        }
    }
    return s;
}
function EWo(n) {
    let s = new Set;
    for (let e of n){
        if (e.type === "assistant" && Array.isArray(e.message.content)) {
            for (let t of e.message.content){
                if (t.type === "tool_use") {
                    s.add(t.name);
                }
            }
        }
    }
    return s;
}
const f = new Set([
    "sudo"
]);
function m(n) {
    if (!n) {
        return;
    }
    let s = n.trim().split(/\s+/);
    for (let e of s){
        if (/^[A-Za-z_]\w*=/.test(e)) {
            continue;
        }
        if (f.has(e)) {
            continue;
        }
        return e;
    }
}
export { cmn, dmn, EWo };
