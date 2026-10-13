import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Zi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ht, Xt, Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, E, T, De } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { createHash } from "crypto";
const d9e = "anthropic/returnToolOutput";
const CVn = [
    2
];
const SMo = 4194304;
function wIr() {
    return true;
}
function Cin(e) {
    return sr(e) && e.tool_host_interface !== undefined;
}
const d = 64;
const l = 1024;
const a = 1024;
const c = 65536;
const i = p(()=>T(E().int()).max(d));
const y = p(()=>T(o().min(1).max(a)).max(l).refine((e)=>e.reduce((acc, item)=>acc + item.length, 0) <= c));
const f = p(()=>De({
        versions: i(),
        deny_rules_digest: o().regex(/^[0-9a-f]{64}$/)
    }));
function wMo(e) {
    let n = s(e)?.[d9e];
    if (n === undefined) {
        return {
            kind: "absent"
        };
    }
    let t = i().safeParse(s(n)?.versions);
    if (!t.success) {
        return {
            kind: "malformed"
        };
    }
    if (m(t.data).length === 0) {
        return {
            kind: "no_shared_version",
            versions: t.data
        };
    }
    let r = f().safeParse(n);
    if (r.success) {
        return {
            kind: "requested",
            denyRulesDigest: r.data.deny_rules_digest
        };
    }
    return {
        kind: "malformed"
    };
}
function m(data) {
    return CVn.filter((n)=>data.includes(n));
}
const O = {
    [Be]: [
        rt,
        ht
    ],
    [ht]: [
        rt
    ],
    [Xt]: [
        ht,
        rt
    ],
    [Zi]: [
        ht,
        rt
    ]
};
const g = D([
    Be,
    ...Object.values(O).flat()
]);
function vIr(e) {
    return D(e.map(Un).filter(({ toolName, ruleContent })=>ruleContent !== undefined && g.includes(toolName)).map(_n)).toSorted();
}
function EIr(e) {
    return y().safeParse(e).success;
}
function vMo(e) {
    return createHash("sha256").update(_(e)).digest("hex");
}
function EMo({ tools, denyRules }) {
    return {
        versions: [
            ...CVn
        ],
        tools: [
            ...tools
        ],
        deny_rules: vIr(denyRules)
    };
}
function s(e) {
    if (sr(e)) {
        return e;
    }
}
export { d9e, CVn, SMo, wIr, Cin, wMo, vIr, EIr, vMo, EMo };
