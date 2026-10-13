const EUe = String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;
function ape(e) {
    return new RegExp(EUe).test(e);
}
function Ynn(e) {
    let n = [];
    let r = 0;
    for (let t of e.matchAll(new RegExp(EUe, "g"))){
        n.push(e.slice(r, t.index));
        r = t.index + t[0].length;
    }
    n.push(e.slice(r));
    return n;
}
function Xnn(e) {
    return e.replace(new RegExp(EUe, "g"), (n)=>"x".repeat(n.length));
}
function jxe(e) {
    return e.replace(new RegExp(EUe, "g"), (n, r)=>`\${${r}}`);
}
export { EUe, ape, Ynn, Xnn, jxe };
