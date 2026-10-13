import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Hk, Ic } from "/$bunfs/root/chunk-4r6b8efh.js";
import { ht } from "/$bunfs/root/chunk-6dwnw6av.js";
import { sq, qs, R1 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { vH } from "/$bunfs/root/chunk-52bcnmbr.js";
import { yse, Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Jen } from "/$bunfs/root/chunk-231n9cft.js";
import { TB } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { jA, JLe } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, M, oe, T, u, De, Ue, ZT, ue, ppe, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Uz } from "/$bunfs/root/chunk-85v8km1j.js";
const z = 524288;
const C = {
    mode: "serialized",
    additionalWorkingDirectories: "serialized",
    trustedNetworkDirectories: "serialized",
    alwaysAllowRules: "serialized",
    alwaysDenyRules: "serialized",
    alwaysAskRules: "serialized",
    strippedDangerousRules: "serialized",
    prePlanMode: "serialized",
    modeBeforeRewrite: "serialized",
    restricted: "serialized_as_restriction",
    blockReadsOutsideWorkingDirectories: "serialized_as_restriction",
    bashCommandClamps: "serialized_as_restriction",
    toolAliases: "serialized_as_restriction",
    servedCall: "set_by_deserialize",
    sandboxAutoAllowSuspended: "set_by_deserialize",
    chromeClassifierFloorEnabled: "not_serialized",
    chromeNavigationClassifierEnabled: "not_serialized",
    chromeClickClassifierEnabled: "not_serialized",
    chromeHostToolAsksEnabled: "not_serialized",
    canAutoClassifierRun: "not_serialized",
    proactivityBaseline: "not_serialized",
    startupModeDecidedByProactivityLevel: "not_serialized",
    isAutoModeAvailable: "not_serialized",
    isBypassPermissionsModeAvailable: "not_serialized",
    shouldAvoidPermissionPrompts: "not_serialized",
    awaitAutomatedChecksBeforeDialog: "not_serialized",
    mcpPermissionModeOverrides: "not_serialized",
    mcpAskForTools: "not_serialized",
    builtInToolsDisabled: "not_serialized",
    toolsKeptByLaunchList: "not_serialized",
    pollEventDeliveryGuard: "not_serialized",
    isRemoteMode: "not_serialized"
};
const P = {
    restricted: false,
    blockReadsOutsideWorkingDirectories: false,
    bashCommandClamps: [],
    toolAliases: {}
};
const g = Object.keys(P);
const J = Object.entries(C).flatMap(([e, s])=>{
    if (s === "serialized") {
        return [
            e
        ];
    }
    return [];
});
const y = p(()=>U(vH));
const R = p(()=>U(TB));
const c = p(()=>o().min(1));
const m = p(()=>ppe(R(), T(o())));
const U0t = 4096;
const AIr = p(()=>o().max(U0t).refine((e)=>e.startsWith("/") && !e.includes("\x00")));
const _ = p(()=>Ue([
        A(false),
        ZT([]),
        De({})
    ]));
const E = p(()=>u({
        restricted: M(),
        blockReadsOutsideWorkingDirectories: M(),
        bashCommandClamps: T(T(o())),
        toolAliases: ue(c(), c())
    }).catchall(_()));
function CIr(e) {
    let s = sr(e) ? e.restrictions : undefined;
    return sr(s) && Object.values(qs(s, g)).some((i)=>!_().safeParse(i).success);
}
function f({ $map }) {
    return new Set($map.map(([s])=>s)).size === $map.length;
}
const h = p(()=>De({
        mode: y(),
        additionalWorkingDirectories: De({
            $map: T(ZT([
                AIr(),
                De({
                    path: o(),
                    source: R()
                })
            ]))
        }).refine(f).refine(({ $map })=>$map.every(([s, { path }])=>s === path)),
        trustedNetworkDirectories: De({
            $map: T(ZT([
                c(),
                T(c())
            ]))
        }).refine(f).optional(),
        alwaysAllowRules: m(),
        alwaysDenyRules: m(),
        alwaysAskRules: m(),
        strippedDangerousRules: m().optional(),
        prePlanMode: y().optional(),
        modeBeforeRewrite: y().optional(),
        restrictions: E()
    }));
const ZBe = p(()=>oe().transform((input, s)=>{
        let i = h().safeParse(input);
        let n = i.success ? Object.entries(sr(input) ? input : {}).filter(([r, a])=>r === "__proto__" || Jen(a)).map(([r])=>({
                path: [
                    r
                ],
                message: "a key named __proto__"
            })) : i.error.issues;
        s.issues.push(...n.slice(0, 1).map(({ path, message })=>({
                code: "custom",
                path,
                message,
                input
            })));
        if (i.success && n.length === 0) {
            return i.data;
        }
        return Uz;
    }));
function e1e(e) {
    return e !== undefined && Hk(e) > z;
}
function S({ restrictions, additionalWorkingDirectories, trustedNetworkDirectories, ...rest }) {
    return {
        ...Ic(),
        ...rest,
        additionalWorkingDirectories: new Map(additionalWorkingDirectories.$map),
        ...trustedNetworkDirectories && {
            trustedNetworkDirectories: new Map(trustedNetworkDirectories.$map)
        },
        ...R1(restrictions, g),
        servedCall: true,
        sandboxAutoAllowSuspended: true
    };
}
function t1e(e, s, i) {
    let n = S(e);
    let r = (a)=>Object.fromEntries(TB.map((d)=>[
                d,
                [
                    ...n[a][d] ?? [],
                    ...(s[a][d] ?? []).filter((l)=>{
                        if (!sq.test(l)) {
                            return true;
                        }
                        t(`Ignoring the launch ${a === "alwaysDenyRules" ? "deny" : "ask"} rule "${l}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, {
                            level: "warn"
                        });
                        return false;
                    }).flatMap((l)=>[
                            l,
                            ...x(l, i)
                        ])
                ]
            ]));
    return {
        ...n,
        alwaysDenyRules: r("alwaysDenyRules"),
        alwaysAskRules: r("alwaysAskRules")
    };
}
function x(e, s) {
    let { toolName, ruleContent } = Un(e);
    if (ruleContent === undefined || toolName !== rt && toolName !== ht) {
        return [];
    }
    let { relativePattern, root } = JLe(ruleContent, s);
    if (root !== null) {
        return [];
    }
    return [
        _n({
            toolName,
            ruleContent: `/${yse(`${jA(s)}/`, {
                escapeGlobs: true
            })}**/${relativePattern}`
        })
    ];
}
export { U0t, AIr, CIr, ZBe, e1e, t1e };
