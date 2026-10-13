import { extname } from "path";
const G4e = "<!--claude-mermaid-runtime-begin:";
const Qdo = "<!--claude-mermaid-runtime-end-->";
const Uyr = "<!--claude-hljs-runtime-begin:";
const Zdo = "<!--claude-hljs-runtime-end-->";
const eNn = "<!-- chart-runtime -->";
const Byr = "<!-- /chart-runtime -->";
const sxt = "/_runtime/mermaid-11.16.1.min.js";
const ths = '<script src="/_runtime/mermaid-11.16.1.min.js">';
const nhs = ' src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"';
const sde = "<!-- frame-runtime -->";
const G_e = "<!-- /frame-runtime -->";
function rhs(t) {
    return t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->") || t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->") || t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->");
}
function Oit(t) {
    if (/<\/script/i.test(t)) {
        return "bundle contains </script";
    }
    if (Wyr(t)) {
        return "bundle contains <!-- together with <script (double-escaped state)";
    }
    if (/<base\s+href="\/_f\//i.test(t)) {
        return "bundle matches the stale /_f/ base-tag strip regex";
    }
    if (/\sdata-frame-runtime="/i.test(t)) {
        return "bundle matches the stale data-frame-runtime strip regex";
    }
    if (t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->")) {
        return "bundle contains a mermaid runtime sentinel";
    }
    if (t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->")) {
        return "bundle contains an hljs runtime sentinel";
    }
    if (t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->")) {
        return "bundle contains the chart-runtime sentinel";
    }
    if (t.includes("<!-- frame-runtime -->") || t.includes("<!-- /frame-runtime -->")) {
        return "bundle contains a frame-runtime serve sentinel";
    }
    return null;
}
const jyr = new Set([
    " ",
    "\t",
    `
`,
    "\f",
    "\r",
    "/",
    ">"
]);
function N5(t) {
    let e = 0;
    let t_length = t.length;
    while(e < t_length && s(t.charCodeAt(e))){
        e++;
    }
    while(t_length > e && s(t.charCodeAt(t_length - 1))){
        t_length--;
    }
    if (e === 0 && t_length === t.length) {
        return t;
    }
    return t.slice(e, t_length);
}
function s(t) {
    return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function tNn(t, e) {
    if (!e.length) {
        return t;
    }
    let n = "";
    let i = 0;
    for (let [r, o] of e){
        n += t.slice(i, r);
        i = o;
    }
    return n + t.slice(i);
}
function Wyr(t) {
    return t.includes("<!--") && /<script/i.test(t);
}
const A = /<\/script(?=[\t\n\f\r />])/i;
const M = /<\/style(?=[\t\n\f\r />])/i;
function g(t, e) {
    let n = t.match(e);
    if (!n) {
        return null;
    }
    let i = n.index ?? 0;
    let r = i + n[0].length;
    let o = t.indexOf(">", r);
    if (o === -1 || /['"]/.test(t.slice(r, o))) {
        return null;
    }
    return {
        data: i,
        after: o + 1
    };
}
function euo(t) {
    let e = g(t, A);
    if (!e || Wyr(t.slice(0, e.data))) {
        return -1;
    }
    return e.after;
}
function ohs(t) {
    return g(t, M);
}
const m = 16;
const a = ' data-id="';
const nNn = a.length + m + 1;
const ZXt = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}";
const b = new RegExp(`^${ZXt}$`);
const ide = `${a}${ZXt}"`;
function PNe(t, e) {
    if (!t.startsWith(a, e)) {
        return 0;
    }
    let n = e + a.length;
    let i = n + m;
    if (t.charCodeAt(i) === 34 && b.test(t.slice(n, i))) {
        return nNn;
    }
    return 0;
}
function _(t, e, n) {
    if (t.startsWith(n, e)) {
        return n.length;
    }
    let i = n.length - 1;
    if (!t.startsWith(n.slice(0, i), e)) {
        return 0;
    }
    let r = PNe(t, e + i);
    if (r && t.charCodeAt(e + i + r) === 62) {
        return i + r + 1;
    }
    return 0;
}
function rNn(t, e) {
    return _(t, e, "<script>");
}
function shs(t, e) {
    return _(t, e, "<style>");
}
const E = new RegExp('<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"', "y");
function ihs(t, e) {
    E.lastIndex = e;
    let n = E.exec(t);
    if (n === null) {
        return null;
    }
    let i = e + n[0].length;
    if (t.charCodeAt(i) === 62) {
        return {
            len: i + 1 - e,
            annotated: false
        };
    }
    let r = PNe(t, i);
    if (r && t.charCodeAt(i + r) === 62) {
        return {
            len: i + r + 1 - e,
            annotated: true
        };
    }
    return null;
}
function eJt(t) {
    let e = N5(t);
    if (!e.length) {
        return -1;
    }
    let n = 0;
    while(e.length){
        let i = rNn(e, 0);
        if (!i) {
            return -1;
        }
        if (i > 8) {
            n++;
        }
        let r = euo(e.slice(i));
        if (r < 0) {
            return -1;
        }
        e = N5(e.slice(i + r));
    }
    return n;
}
function V_e(t, e) {
    let n = 0;
    let i = e;
    while(i < t.length){
        let r = t.charCodeAt(i);
        if (n === 3) {
            if (r === 34 || r === 39) {
                let o = t.indexOf(r === 34 ? '"' : "'", i + 1);
                if (o < 0) {
                    return -1;
                }
                i = o + 1;
                n = 5;
                continue;
            }
            if (s(r)) {
                i++;
                continue;
            }
            if (r === 62) {
                return i + 1;
            }
            n = 4;
            i++;
            continue;
        }
        if (r === 62) {
            return i + 1;
        }
        if (s(r)) {
            n = n === 1 || n === 2 ? 2 : 0;
        } else if (r === 47 && n !== 4) {
            n = 0;
        } else if (r === 61 && (n === 1 || n === 2)) {
            n = 3;
        } else {
            n = n === 4 ? 4 : 1;
        }
        i++;
    }
    return -1;
}
const R = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".mjs": "text/javascript",
    ".json": "application/json",
    ".map": "application/json",
    ".geojson": "application/json",
    ".webmanifest": "application/manifest+json",
    ".txt": "text/plain",
    ".md": "text/markdown",
    ".csv": "text/csv",
    ".xml": "application/xml",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".ico": "image/vnd.microsoft.icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".otf": "font/otf",
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
    ".ogg": "audio/ogg",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".pdf": "application/pdf",
    ".wasm": "application/wasm",
    ...{}
};
function Y4(t) {
    return R[oNn(extname(t))];
}
function oNn(t) {
    return t.replace(/[A-Z]/g, (e)=>e.toLowerCase());
}
function GD(t) {
    let e = t.indexOf(";");
    return oNn(N5(e >= 0 ? t.slice(0, e) : t));
}
const D = new Set([
    "text/markdown",
    "application/json",
    "application/manifest+json",
    "text/css",
    "text/plain",
    "text/csv"
]);
const C = new Set([
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "font/woff2",
    "font/woff",
    "font/ttf",
    "font/otf"
]);
function tuo(t) {
    let e = GD(t);
    return !D.has(e) && !C.has(e);
}
const v = /[\u2028\u2029\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
function $5(t) {
    return Array.from(t, (e)=>{
        let n = e.codePointAt(0) ?? 0;
        if (n <= 31 || n >= 127 && n <= 159 || v.test(e)) {
            return " ";
        }
        return e;
    }).join("");
}
const zyr = ".workshop.md";
function nuo(t) {
    return t.endsWith(zyr);
}
function tJt(t) {
    return t.endsWith(".workshop.html");
}
function sNn(t) {
    return tJt(t) || nuo(t);
}
const ruo = new Set([
    "text/html",
    "application/xhtml+xml",
    "application/xml",
    "text/xml",
    "image/svg+xml"
]);
const ixt = new Set([
    ...ruo,
    ...[]
]);
const Gyr = "image/svg+xml";
const nJt = new Set([
    ...ixt
].filter((t)=>t !== Gyr));
const ahs = new Set([
    "text/html",
    ...[]
]);
const rJt = new Set([
    "text/javascript",
    "application/javascript",
    "application/wasm"
]);
const ouo = new Set([
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/css",
    "application/json",
    "application/manifest+json",
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "font/woff",
    "font/woff2",
    "font/ttf",
    "font/otf",
    "application/font-woff",
    "application/font-woff2",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "video/ogg"
]);
function Cf(t) {
    return JSON.stringify(t).replace(/[^\x20-\x7e]|[<>]/gu, y);
}
function y(t) {
    return t.split("").map((e)=>`\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
const O = [
    "pages",
    "styles",
    "scripts",
    "data",
    "images",
    "fonts",
    "media",
    "documents"
];
function I(t) {
    if (t === "text/html") {
        return "pages";
    }
    if (t === "text/css") {
        return "styles";
    }
    if (t === "text/javascript" || t === "application/javascript" || t === "application/wasm") {
        return "scripts";
    }
    if (t.startsWith("image/")) {
        return "images";
    }
    if (t.startsWith("font/")) {
        return "fonts";
    }
    if (t.startsWith("audio/") || t.startsWith("video/")) {
        return "media";
    }
    if (t === "application/pdf") {
        return "documents";
    }
    return "data";
}
const P = O.flatMap((t)=>{
    let e = Object.entries(R).filter(([, n])=>I(n) === t).map(([n])=>n);
    if (e.length > 0) {
        return [
            `${t} ${e.join(" ")}`
        ];
    }
    return [];
}).join("; ");
const S = "Nothing was published because one file is of a type artifacts don't serve: ";
const l = " (contentType ";
const N = ") — the served spelling is exactly ";
const T = ") — that extension is already served as ";
const u = `Served types, by extension (a file named with one of these needs no contentType): ${P}.`;
const w = 'A source, config, log or other text file goes as text/plain (contentType "text/plain", or a .txt name) or rendered into the page.';
const f = "A document or archive (.docx .xlsx .pptx .zip) can't be attached from here yet under any contentType: render what the page needs from it into the page, or link to where it already lives; a data: or blob: download link is not a way around this (the viewer blocks page-initiated downloads).";
function suo(t, e, n, i) {
    let r = `${S}${t} ${Cf(e)}${l}${Cf(n)}`;
    if (i !== undefined) {
        return `${r}${N}${Cf(i)}, lowercase with no parameters. Publish again with that contentType.`;
    }
    let o = Y4(e);
    if (o !== undefined && I(o) !== null) {
        return `${r}${T}${Cf(o)}. Publish again with no contentType on that file.`;
    }
    return `${r}). ${u} Publish again with every file as a served type. ${w} ${f}`;
}
function oJt(t, e) {
    let n = oNn(extname(e));
    let i = n === "" ? "no extension to infer a served type from" : `extension ${Cf(n)} is not served`;
    if (t === "files") {
        return `files: ${Cf(e)} (no contentType, and ${i}) \u2014 nothing was published. ${u} Publish again with every file as a served type. ${w} ${f}`;
    }
    return `file_path: ${Cf(e)} (${i}) \u2014 nothing was published. ${u} Rename a text or data file to one of these (.txt .json .csv), or make another file the \`file_path\` and list this one under \`files\` with contentType "text/plain". ${f}`;
}
const x = /"(?:[^"\\]|\\.)*"/y;
function c(t, e) {
    x.lastIndex = e;
    let n = x.exec(t);
    if (n === null) {
        return;
    }
    try {
        let raw = JSON.parse(n[0]);
        if (typeof raw === "string") {
            return {
                raw,
                end: e + n[0].length
            };
        }
        return undefined;
    } catch  {
        return;
    }
}
function lhs(t) {
    for (let e of [
        "supporting file",
        "file"
    ]){
        let n = `${S}${e} `;
        if (!t.startsWith(n)) {
            continue;
        }
        let i = c(t, n.length);
        if (i === undefined || !t.startsWith(l, i.end)) {
            return;
        }
        let r = c(t, i.end + l.length);
        if (r === undefined || !/^[\x20-\x7e]{1,127}$/.test(r.raw)) {
            return;
        }
        let o = t.startsWith(N, r.end) ? GD(r.raw) : undefined;
        if (t !== suo(e, i.raw, r.raw, o)) {
            return;
        }
        let p = Cf(i.raw);
        if (o !== undefined || t.startsWith(T, r.end)) {
            return `Not published: ${p} was given a file type label artifacts don't recognize. Claude can fix the label and publish again.`;
        }
        return `Not published: ${p} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`;
    }
    for (let e of [
        "files",
        "file_path"
    ]){
        let n = `${e}: `;
        if (!t.startsWith(n)) {
            continue;
        }
        let i = c(t, n.length);
        if (i === undefined || t !== oJt(e, i.raw)) {
            return;
        }
        let r = Cf(i.raw);
        if (e === "files") {
            return `Not published: ${r} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`;
        }
        return `Not published: ${r} is a type of file artifacts can't include. Claude can convert or rename it and publish again.`;
    }
}
export { G4e, Qdo, Uyr, Zdo, eNn, Byr, sxt, ths, nhs, sde, G_e, rhs, Oit, jyr, N5, tNn, Wyr, euo, ohs, nNn, ZXt, ide, PNe, rNn, shs, ihs, eJt, V_e, Y4, oNn, GD, tuo, $5, zyr, nuo, tJt, sNn, ruo, ixt, Gyr, nJt, ahs, rJt, ouo, Cf, suo, oJt, lhs };
