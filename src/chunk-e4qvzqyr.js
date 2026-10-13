function bBo(t) {
    return /\bgit\b(?:\s+(?:-C\s+\S+|-c\s+\S+=\S+|--\S+))*\s+commit(?:\s|$)/.test(t);
}
function SBo(t, n, s) {
    if (s !== undefined) {
        return s === 0;
    }
    let e = [
        /\[\w+[^\]]*\]\s+/,
        /create mode/,
        /\d+ files? changed/,
        /\d+ insertions?/,
        /\d+ deletions?/
    ];
    let i = t + n;
    return e.some((o)=>o.test(i));
}
export { bBo, SBo };
