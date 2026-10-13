import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function xAs(n) {
    switch(n){
        case "hipaa":
            return "HIPAA";
        case "zdr":
            return "ZDR (Zero Data Retention)";
        default:
            t(`Unknown compliance_taint '${n}' from policyLimits`, {
                level: "warn"
            });
            return r;
    }
}
var r = "Organization policy";
const Wct = "Per your organization's policy, some features are limited";
const cjn = "HIPAA configured";
const o = new Set([
    "hipaa",
    "zdr"
]);
function Den(n) {
    return o.has(n) || false;
}
function Len(n) {
    let e = D(n);
    let i = e.filter(Den);
    if (i.length === e.length) {
        return i;
    }
    t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, {
        level: "warn"
    });
    return [
        ...i,
        r
    ];
}
const a = new Set([
    "hipaa"
]);
function _Se(n) {
    return D(n).filter((e)=>a.has(e));
}
export { xAs, Wct, cjn, Den, Len, _Se };
