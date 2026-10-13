import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-pp3y3t61.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import "/$bunfs/root/chunk-mvz09dzd.js";
import { wi } from "/$bunfs/root/chunk-k3tkc302.js";
import "/$bunfs/root/chunk-1ej05ybf.js";
import "/$bunfs/root/chunk-wtrd0hw3.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import "/$bunfs/root/chunk-79wfew46.js";
export function afterQuickstartSavedLine(t, o, a, d) {
    let e = (i, r)=>typeof i === "string" && typeof r === "string" && i === a(r);
    let s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${so([
        t.saved_pages_dir
    ])}; its result lists them, so those are not attached here.]` : "";
    if (t.not_listed === true) {
        if (s === "") {
            return "";
        }
        return `

${s}`;
    }
    let n = s === "" ? "" : ` ${s}`;
    if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) {
        return `

[A quickstart in this conversation already listed the design systems and saved the files of ${wi(t.saved_system, "(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
    }
    if (s === "") {
        return null;
    }
    return `${d}${n}`;
}
