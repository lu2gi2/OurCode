import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import { ht } from "/$bunfs/root/chunk-6dwnw6av.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
const e = "claudecode/editResult";
const l = "1";
export function asksForEditResult(o, t) {
    return o === ht && sr(t) && t[e] === l;
}
export async function withEditResult(o, t) {
    if (o.isError === true || t.subagentFrameResult === undefined) {
        return o;
    }
    try {
        if (await t.subagentFrameResultHolds?.() === false) {
            return o;
        }
    } catch (error) {
        c(error);
        return o;
    }
    return {
        ...o,
        _meta: {
            ...o._meta,
            [e]: t.subagentFrameResult
        }
    };
}
