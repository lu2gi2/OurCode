import { St, X, $o, oA, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { vm, FCn, ulr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { xie, pUr, fUr } from "/$bunfs/root/chunk-88j0mx70.js";
import { iI, CWr, PWr, QXn, Ujt } from "/$bunfs/root/chunk-pytdy9pt.js";
import { Xp } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { o, E, M, u } from "/$bunfs/root/chunk-smx21d0k.js";
const _ = 1;
const UIr = "upgrade_relay_marker";
function k(subtype) {
    return subtype === UIr;
}
const h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const S = p(()=>u({
        schema_version: E().int(),
        conversation_uuid: o().regex(h),
        anchor_line_uuid: o().regex(h),
        anthropic_version: o().regex(/^\d{4}-\d{2}-\d{2}$/),
        model: o().min(1).optional(),
        automation_tools: M().optional().catch(undefined)
    }));
const y = 16384;
function MVn(e) {
    if (Buffer.byteLength(e, "utf8") > y) {
        return {
            ok: false,
            reason: `marker exceeds the ${y}-byte cap`
        };
    }
    let i;
    try {
        i = X(e);
    } catch  {
        return {
            ok: false,
            reason: "marker is not valid JSON"
        };
    }
    let a = u({
        schema_version: E().int()
    }).loose().safeParse(i);
    if (!a.success) {
        return {
            ok: false,
            reason: "marker has no integer schema_version"
        };
    }
    if (a.data.schema_version > _) {
        return {
            ok: false,
            reason: `marker schema_version ${a.data.schema_version} exceeds this consumer's ceiling ${_}`
        };
    }
    if (a.data.schema_version < 1) {
        return {
            ok: false,
            reason: `marker schema_version ${a.data.schema_version} is below the producer's floor of 1`
        };
    }
    let s = S().safeParse(i);
    if (!s.success) {
        return {
            ok: false,
            reason: `marker shape invalid: ${s.error.issues[0]?.message ?? "unknown issue"}`
        };
    }
    return {
        ok: true,
        marker: s.data
    };
}
const w = p(()=>u({
        type: o().optional(),
        subtype: o().optional(),
        uuid: o().optional(),
        content: o().optional()
    }).loose());
const v = {
    armed: false,
    code: "latch_not_inactive",
    reason: "teleport state is not inactive"
};
function ofe(e) {
    J(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
const T = 67108864;
function x(e) {
    try {
        let i = $o(e);
        let a = w().safeParse(i);
        if (a.success) {
            return a.data;
        }
        return null;
    } catch  {
        return null;
    }
}
function L({ rawSeedLines, liveMessages, ingressOrigin, remoteSessionId }) {
    if (iI().status !== "inactive") {
        return v;
    }
    let d = null;
    for(let c = rawSeedLines.length - 1; c >= 0; c--){
        let m = rawSeedLines[c];
        if (m.trim() === "") {
            continue;
        }
        let l = x(m);
        if (l?.type === "system" && k(l.subtype)) {
            d = l;
            break;
        }
    }
    if (d === null) {
        return {
            armed: false,
            code: "no_marker_line",
            reason: "no teleport marker line in the seed transcript"
        };
    }
    let d_uuid = d.uuid;
    let d_content = d.content;
    if (typeof d_uuid !== "string" || typeof d_content !== "string") {
        return {
            armed: false,
            code: "marker_line_shape",
            reason: "marker line is missing its uuid or string content"
        };
    }
    return HVn({
        markerLineUuid: d_uuid,
        markerContent: d_content,
        liveMessages,
        ingressOrigin,
        remoteSessionId
    });
}
function HVn({ markerLineUuid, markerContent, liveMessages, ingressOrigin, remoteSessionId }) {
    if (iI().status !== "inactive") {
        return v;
    }
    let r = MVn(markerContent);
    if (!r.ok) {
        return {
            armed: false,
            code: "marker_refused",
            reason: r.reason
        };
    }
    let n = liveMessages.map((l)=>l.uuid);
    let c = n.indexOf(r.marker.anchor_line_uuid);
    if (c === -1) {
        return {
            armed: false,
            code: "anchor_not_in_view",
            reason: "marker anchor line uuid is not present in the hydrated view"
        };
    }
    if (n.indexOf(r.marker.anchor_line_uuid, c + 1) !== -1) {
        return {
            armed: false,
            code: "anchor_not_unique",
            reason: "marker anchor line uuid occurs more than once in the hydrated view — refusing a possibly planted duplicate"
        };
    }
    if (liveMessages.slice(c + 1).some((l)=>l.type === "attachment" && l.attachment.type === "thinking_stripped" && ulr(l.attachment) === undefined)) {
        return {
            armed: false,
            code: "relay_already_ended",
            reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view"
        };
    }
    let preAnchorLineUuids = n.slice(0, c + 1);
    CWr({
        status: "active",
        marker: r.marker,
        markerLineUuid,
        preAnchorLineUuids,
        ingressOrigin,
        remoteSessionId
    });
    t(`teleport relay armed (server-driven): marker line ${markerLineUuid}, anchor ${r.marker.anchor_line_uuid}, ${preAnchorLineUuids.length} guarded pre-anchor lines`);
    return {
        armed: true
    };
}
function kUs(e, i) {
    QXn();
    if (!fUr()) {
        ofe({
            outcome: "absent"
        });
        return;
    }
    if (i) {
        b(`boot_unreached_${e}`);
        return;
    }
    f("upgrade_teleport_cache", `boot_unreached_${e}`);
    ofe({
        outcome: "refused",
        error_code: `boot_unreached_${e}`
    });
    t(`teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`, {
        level: "warn"
    });
}
async function O(e, i) {
    let a = vm(e);
    let s = Xp(a, i);
    if (s !== undefined) {
        let r = await FCn(s.key, T, s.backend).catch((n)=>{
            t(`teleport relay seed read through storage threw; falling back to the file: ${String(n)}`, {
                level: "warn"
            });
        });
        if (r === null) {
            throw Error("seed transcript stream not found");
        }
        if (r?.ok) {
            return r.content;
        }
        if (r !== undefined) {
            let n = "telemetryCode" in r.error ? r.error.telemetryCode : undefined;
            if (n === "ELOOP" || n === "ENXIO") {
                t(`teleport relay seed read refused by storage (${n}); the file is not re-read directly`, {
                    level: "warn"
                });
                throw Error("seed transcript refused by storage: a linked or indirect transcript file is not read");
            }
            t(`teleport relay seed read through storage failed (${r.error.code}); falling back to the file`, {
                level: "warn"
            });
        }
    }
    let { content } = await oA(a, T);
    return content;
}
async function TUs(e, liveMessages, a, s) {
    try {
        let d = xie();
        if (!d) {
            let cause = pUr();
            if (cause !== null) {
                f("upgrade_teleport_cache", "env_config_refused");
                ofe({
                    outcome: "refused",
                    error_code: "env_config_refused",
                    cause
                });
                t(`teleport relay carriers present but env config refused (${cause}) \u2014 standard path`, {
                    level: "warn"
                });
            } else {
                ofe({
                    outcome: "absent"
                });
            }
            return;
        }
        try {
            let r = await O(e, a);
            let n = L({
                rawSeedLines: r.split(`
`),
                liveMessages,
                ingressOrigin: d.ingressOrigin,
                remoteSessionId: d.remoteSessionId
            });
            if (s && !n.armed && n.code === "no_marker_line") {
                b(n.code);
            } else if (!n.armed) {
                f("upgrade_teleport_cache", n.code);
                ofe({
                    outcome: "refused",
                    error_code: n.code
                });
                t(`teleport relay not armed: ${n.reason}`);
            } else {
                g("upgrade_teleport_cache");
                ofe({
                    outcome: "armed"
                });
            }
        } catch (error) {
            f("upgrade_teleport_cache", "boot_failed");
            ofe({
                outcome: "refused",
                error_code: "boot_failed"
            });
            t(`teleport relay boot failed: ${String(error)}`, {
                level: "warn"
            });
        }
    } finally{
        QXn();
    }
}
function b(e) {
    St(Ujt);
    PWr(e);
    ofe({
        outcome: "awaiting_handoff"
    });
    t(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
export { UIr, MVn, ofe, HVn, kUs, TUs };
