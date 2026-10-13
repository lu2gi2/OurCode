function Mse(t) {
    let e = 0;
    for(let n = 0; n < t.length; n++){
        e = (e << 5) - e + t.charCodeAt(n) | 0;
    }
    return e;
}
function tU(t) {
    return Bun.hash(t).toString();
}
function o2n(t, e) {
    return Bun.hash(e, Bun.hash(t)).toString();
}
const VRr = "pasted_content";
const von = 4;
const qOs = '<pasted_content id="';
const TCo = `">
`;
const KOs = '</pasted_content id="';
function s2n(t) {
    return `<pasted_content id="${t}">
`;
}
function Eon(t) {
    return `</pasted_content id="${t}">
`;
}
function ACo(t) {
    if (t.length !== 4) {
        return false;
    }
    for(let e = 0; e < t.length; e++){
        let n = t.charCodeAt(e);
        if (!(n >= 48 && n <= 57 || n >= 97 && n <= 102)) {
            return false;
        }
    }
    return true;
}
const CCo = /[([{"'`]/;
const RCo = /[)\]}"'`.,;:!?]/;
function xCo(t, e = 0, n = t.length) {
    let s = e;
    while(s < n && RCo.test(t[s])){
        s++;
    }
    return s >= n || /\s/.test(t[s]);
}
function xDt(t) {
    let e = [];
    let n = 0;
    let s = 0;
    while(true){
        let c = t.indexOf('<pasted_content id="', s);
        if (c === -1) {
            break;
        }
        let r = c + 20;
        let id = t.slice(r, r + 4);
        if (!ACo(id) || !t.startsWith(`">
`, r + 4)) {
            s = r;
            continue;
        }
        let i = r + 4 + 3;
        let f = Eon(id).slice(0, -1);
        let l = t.indexOf(`
${f}`, i - 1) + 1;
        if (l === 0) {
            break;
        }
        let E = c;
        for(let d = 0; d < 2 && E > n && t[E - 1] === `
`; d++){
            E--;
        }
        if (E > n) {
            e.push({
                kind: "text",
                text: t.slice(n, E)
            });
        }
        n = l + f.length;
        for(let d = 0; d < 2 && t[n] === `
`; d++){
            n++;
        }
        e.push({
            kind: "block",
            id,
            body: t.slice(i, l - 1),
            raw: t.slice(E, n)
        });
        s = n;
    }
    if (n < t.length) {
        e.push({
            kind: "text",
            text: t.slice(n)
        });
    }
    return e;
}
function cwe(t) {
    let e = xDt(t);
    if (e.length === 1 && e[0].kind === "text") {
        return t;
    }
    return e.map((n)=>{
        if (n.kind === "text") {
            return n.text;
        }
        return n.body;
    }).join("");
}
function PCo(t, e) {
    let n = xDt(t);
    if (!n.some((r)=>r.kind === "block" && r.id === e)) {
        return t;
    }
    let s = "";
    let c = false;
    for (let [r, o] of n.entries()){
        let i = n[r + 1];
        let T = i?.kind === "block" && i.id === e;
        if (o.kind === "text" || o.id !== e) {
            let a = o.kind === "text" ? o.text : o.raw;
            if (c) {
                a = a.replace(/^\s+/, "");
            }
            if (T && i.body.includes(`
`)) {
                a = a.replace(/\s+$/, "");
            }
            if (a === "") {
                continue;
            }
            if (c && s !== "") {
                s += `
`;
            }
            s += a;
            c = false;
            continue;
        }
        let f = o.body.includes(`
`);
        let l = s.length;
        while(l > 0 && CCo.test(s[l - 1])){
            l--;
        }
        let E = l === 0 || /\s/.test(s[l - 1]);
        if ((f || c || !E) && s !== "") {
            s += `
`;
        }
        s += o.body;
        let d = i === undefined ? "" : i.kind === "text" ? i.text : i.raw;
        c = f || T || /^\s\s/.test(d) || !xCo(d);
    }
    return s;
}
export { Mse, tU, o2n, VRr, von, qOs, TCo, KOs, s2n, Eon, ACo, CCo, RCo, xCo, xDt, cwe, PCo };
