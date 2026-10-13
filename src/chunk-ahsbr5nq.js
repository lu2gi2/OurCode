const o = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    colon: ":",
    semi: ";",
    sol: "/",
    Tab: "\t",
    NewLine: `
`
};
function s(n) {
    return n.replace(/&(?:#[xX]([0-9a-fA-F]+);?|#(\d+);?|([a-zA-Z][a-zA-Z0-9]*);)/g, (r, t, e, i)=>{
        if (t !== undefined) {
            return String.fromCodePoint(parseInt(t, 16));
        }
        if (e !== undefined) {
            return String.fromCodePoint(parseInt(e, 10));
        }
        if (i in o) {
            return o[i];
        }
        return r;
    });
}
function AZe(n) {
    let r;
    try {
        r = s(n);
    } catch  {
        return false;
    }
    if (/&(?:#|[a-zA-Z][a-zA-Z0-9]*;)/.test(r)) {
        return false;
    }
    let t;
    try {
        t = new URL(r, "https://artifact.invalid/");
    } catch  {
        return false;
    }
    return t.protocol === "https:" || t.protocol === "http:" || t.protocol === "mailto:";
}
export { AZe };
