let r;
let o;
function n() {
    if (r !== undefined && o === "external") {
        return r;
    }
    o = "external";
    r = [];
    return r;
}
function b0o() {
    return n().map((e)=>e.id);
}
function S0o(e) {
    for (let template of n()){
        let a = template.digests.find((i)=>i.sha256 === e);
        if (a) {
            return {
                template,
                label: a.label
            };
        }
    }
}
function G9e(e) {
    return n().find((t)=>t.id === e);
}
function tcn(e) {
    return e.event === "PreToolUse";
}
export { b0o, S0o, G9e, tcn };
