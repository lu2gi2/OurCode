import { gp, Txo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ho, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { AIt, Qvs, bY, Tho, Eh, KUn, Nlt, z$e, G$e, We } from "/$bunfs/root/chunk-0ycjphb5.js";
import { XPn, Aye } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Ht } from "/$bunfs/root/chunk-77t63btp.js";
const px = {
    fable: "Fable",
    sonnet: "Sonnet",
    opus: "Opus",
    haiku: "Haiku"
};
async function Lyt(l, r) {
    let f;
    try {
        return await Promise.race([
            r,
            new Promise((resolve)=>{
                f = setTimeout((o, s)=>{
                    t(`[3p-probe] ${s} hit ${XPn}ms deadline; proceeding without it`);
                    o([]);
                }, XPn, resolve, l);
            })
        ]);
    } finally{
        clearTimeout(f);
    }
}
function u(l) {
    switch(l){
        case "ANTHROPIC_DEFAULT_SONNET_MODEL":
            return a.ANTHROPIC_DEFAULT_SONNET_MODEL !== undefined && !bY("sonnet");
        case "ANTHROPIC_DEFAULT_OPUS_MODEL":
            return a.ANTHROPIC_DEFAULT_OPUS_MODEL !== undefined && !bY("opus");
        case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
            return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== undefined && !bY("haiku");
        case "ANTHROPIC_SMALL_FAST_MODEL":
            return a.ANTHROPIC_SMALL_FAST_MODEL !== undefined;
        default:
            return false;
    }
}
function m(envVar, r) {
    switch(envVar){
        case "ANTHROPIC_DEFAULT_SONNET_MODEL":
            a.set("ANTHROPIC_DEFAULT_SONNET_MODEL", r);
            break;
        case "ANTHROPIC_DEFAULT_OPUS_MODEL":
            a.set("ANTHROPIC_DEFAULT_OPUS_MODEL", r);
            break;
        default:
            return;
    }
    AIt(envVar, r);
    Qvs(envVar, r);
}
function LXn() {
    Txo({
        sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL !== undefined && !bY("sonnet"),
        opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL !== undefined && !bY("opus")
    });
}
async function gWr(l) {
    LXn();
    let r = l?.pendingUserModel?.trim();
    let n = KUn(r === "default" || r === "inherit" || r === "" ? undefined : r ?? undefined);
    let o = z$e();
    let s = n != null && n !== "" ? n : r !== undefined && n == null ? o ?? undefined : Eh() ?? o ?? undefined;
    switch(Ie()){
        case "bedrock":
            return {
                lines: await k(s),
                hasHardFailure: false
            };
        case "vertex":
            return {
                lines: await p(s),
                hasHardFailure: false
            };
        case "mantle":
            {
                let e = false;
                if (o !== null) {
                    let _ = Ht(o.trim().toLowerCase());
                    e = !(_ === "opus" || _ === "best" || We(_) === We(Ho[Nlt].firstParty)) && G$e();
                }
                let c = n != null && n !== "" || Eh() != null || e;
                return T(c);
            }
        default:
            return {
                lines: [],
                hasHardFailure: false
            };
    }
}
async function k(l) {
    let { checkBedrockDefaultAvailability, seedEnvDefaultForUserPin } = await import("/$bunfs/root/chunk-bf5xxzxy.js");
    let n = seedEnvDefaultForUserPin(l);
    if (n && !u(n.envVar)) {
        m(n.envVar, n.value);
    }
    let o = await Lyt("bedrock-fallback", checkBedrockDefaultAvailability());
    let s = [];
    for (let e of o){
        if (u(e.envVar)) {
            continue;
        }
        process.env[e.envVar] = e.fallbackBedrockId;
        AIt(e.envVar, e.fallbackBedrockId);
        if (e.tier === "sonnet") {
            Tho("bedrock", e.fallbackBedrockId, Aye);
        }
        if (e.tier === "haiku") {
            if (!u("ANTHROPIC_DEFAULT_HAIKU_MODEL")) {
                process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
            }
        }
        if (e.crossTier) {
            process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName;
            process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
        }
        i("tengu_bedrock_default_fallback", {
            tier: d(e.tier),
            default_key: d(e.defaultKey),
            fallback_key: d(e.fallbackKey),
            cross_tier: b(e.crossTier ? "true" : "false")
        });
        s.push(e.crossTier ? `${px[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${px[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
    }
    return s;
}
async function p(l) {
    let { checkVertexDefaultAvailability, seedEnvDefaultForUserPin } = await import("/$bunfs/root/chunk-s2m29jt0.js");
    let n = seedEnvDefaultForUserPin(l);
    if (n && !u(n.envVar)) {
        m(n.envVar, n.value);
    }
    let o = await Lyt("vertex-fallback", checkVertexDefaultAvailability());
    let s = [];
    for (let e of o){
        if (u(e.envVar)) {
            continue;
        }
        process.env[e.envVar] = e.fallbackVertexId;
        AIt(e.envVar, e.fallbackVertexId);
        if (e.tier === "sonnet") {
            Tho("vertex", e.fallbackVertexId, Aye);
        }
        if (e.tier === "haiku") {
            if (!u("ANTHROPIC_DEFAULT_HAIKU_MODEL")) {
                process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
            }
        }
        if (e.crossTier) {
            process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName;
            process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`;
        }
        i("tengu_vertex_default_fallback", {
            tier: d(e.tier),
            default_key: d(e.defaultKey),
            fallback_key: d(e.fallbackKey),
            cross_tier: b(e.crossTier ? "true" : "false")
        });
        s.push(e.crossTier ? `${px[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${px[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
    }
    return s;
}
async function T(userPinned) {
    let { checkMantleDefaultAvailability } = await import("/$bunfs/root/chunk-ezwqngye.js");
    let f = await Lyt("mantle-fallback", checkMantleDefaultAvailability(undefined, {
        userPinned
    }));
    let lines = [];
    let hasHardFailure = false;
    let mantleOverride;
    for (let e of f){
        if (e.kind === "adminPin") {
            if (!userPinned) {
                gp(e.adminMantleId);
                mantleOverride = e.adminMantleId;
            }
        } else if (e.kind === "pinRefuted") {
            if (!userPinned) {
                gp(e.workingMantleId);
                mantleOverride = e.workingMantleId;
                i("tengu_mantle_default_fallback", {
                    default_key: d(e.defaultKey),
                    fallback_key: d(e.workingKey),
                    admin_pin_refuted: b("true")
                });
                lines.push(`${px[e.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${e.workingName} for this session`);
            }
        } else if (e.kind === "fallback") {
            let c = false;
            if (!u(e.envVar)) {
                process.env[e.envVar] = e.fallbackMantleId;
                AIt(e.envVar, e.fallbackMantleId);
                c = true;
            }
            if (!userPinned) {
                gp(e.fallbackMantleId);
                mantleOverride = e.fallbackMantleId;
                c = true;
            }
            if (c) {
                i("tengu_mantle_default_fallback", {
                    default_key: d(e.defaultKey),
                    fallback_key: d(e.fallbackKey)
                });
                lines.push(`${px[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
            }
        } else {
            hasHardFailure = true;
            i("tengu_mantle_default_fallback", {
                default_key: b("exhausted")
            });
            lines.push(`${px[e.tier]}: no accessible model (tried ${e.triedNames.join(", ")}). Enable ${e.defaultName} in Amazon Bedrock (Mantle).`);
        }
    }
    return {
        lines,
        hasHardFailure,
        mantleOverride
    };
}
export { px, Lyt, LXn, gWr };
