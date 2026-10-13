import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i, js } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { OF, dC } from "/$bunfs/root/chunk-pp3y3t61.js";
import { _Se } from "/$bunfs/root/chunk-wtrd0hw3.js";
const r = "tengu_org_policy_denied";
function l(o, n) {
    let e = dC(o);
    if (e === null || e === "unregistered") {
        return null;
    }
    return {
        org_policy_key: d(o),
        org_policy_deny_kind: d(e),
        org_policy_taint_named: _Se(OF()).length > 0,
        surface: d(n)
    };
}
function BA(o, n) {
    let e = l(o, n);
    if (e) {
        i(r, e);
    }
}
async function CW(o, n) {
    let e = l(o, n);
    if (e) {
        await js(r, e);
    }
}
export { BA, CW };
