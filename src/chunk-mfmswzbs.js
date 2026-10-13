import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { xPe, Ms } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Sz } from "/$bunfs/root/chunk-k3tkc302.js";
import { b3e } from "/$bunfs/root/chunk-231n9cft.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
const u = [
    "note",
    "lang"
];
const resultNote = `Note: \`label\` was longer than ${Sz} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;
function Tfn(t) {
    if (!L(t)) {
        return null;
    }
    let a = u.filter((e)=>e in t);
    let n;
    if (typeof t.label === "string" && xPe(t.label) > Sz) {
        let e = t.label.replaceAll(`\r
`, `
`).trim();
        let cut = xPe(e) > Sz;
        n = {
            value: cut ? Ms(e, Sz).trimEnd() : e,
            cut
        };
    }
    let s;
    let d;
    if (t.action === "call_endpoint" && typeof t.body === "string") {
        let e = b3e(mt(t.body, false)).stripped;
        if (Array.isArray(e)) {
            s = "array";
        } else if (e !== null && typeof e === "object") {
            s = "object";
        }
        d = e;
    }
    let l;
    if (t.action === "write_db" && typeof t.data === "string") {
        let e = b3e(mt(t.data, false)).stripped;
        if (L(e)) {
            l = e;
        }
    }
    let r = (t.action === undefined || t.action === "publish") && Array.isArray(t.files) && t.files.some((e)=>typeof e === "string") ? t.files.map((path)=>{
        if (typeof path === "string") {
            return {
                path
            };
        }
        return path;
    }) : undefined;
    if (a.length === 0 && s === undefined && l === undefined && r === undefined && n === undefined) {
        return null;
    }
    let input = {
        ...t
    };
    let i = [];
    for (let e of a){
        delete input[e];
        i.push(`legacy_${e}`);
    }
    if (s !== undefined) {
        input.body = d;
        i.push(`body_json_string_to_${s}`);
    }
    if (l !== undefined) {
        input.data = l;
        i.push("data_json_string_to_object");
    }
    if (r !== undefined) {
        input.files = r;
        i.push("files_string_list");
    }
    if (n !== undefined) {
        input.label = n.value;
        i.push(n.cut ? "label_clamped" : "label_trimmed");
    }
    return {
        input,
        shapeClass: i.join("+"),
        ...n?.cut && {
            resultNote
        }
    };
}
export { Tfn };
