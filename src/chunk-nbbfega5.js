function Lve(t, r) {
    switch(r){
        case "bash":
            return `!${t}`;
        default:
            return t;
    }
}
function R_(t) {
    if (t.startsWith("!")) {
        return "bash";
    }
    return "prompt";
}
function nI(t) {
    if (R_(t) === "prompt") {
        return t;
    }
    return t.slice(1);
}
function Kgt(t) {
    return t === "!";
}
function e1o({ nextValue, value, cursorOffset, mode }) {
    let e = R_(nextValue);
    if (cursorOffset !== 0 || e === "prompt" || e === mode) {
        return false;
    }
    return nextValue.length === value.length + 1 || value.length === 0;
}
export { Lve, R_, nI, Kgt, e1o };
