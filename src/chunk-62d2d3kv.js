import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Bl } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { FZt, vTs, _R, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { G3e, Ztn, NWn, kO } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { yn, S_, Otn, fe, yg } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { nbe } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { dfo } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { jC, n4, qp } from "/$bunfs/root/chunk-kasbfbhj.js";
function ige() {
    let t = yg();
    let i = n4.flatMap((e)=>qp(e).errors.map((s)=>{
            if (s.file) {
                return s;
            }
            return {
                ...s,
                file: jC(e)
            };
        }));
    let r = ce();
    let o = nbe.filter((e)=>t.settings[e] === undefined && r[e] !== _R[e] && vTs(e, r[e])).map((path)=>({
            file: Bl(),
            path,
            message: FZt(path) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
            severity: "warning",
            suggestion: "Set it with /config, or delete the key from this file"
        }));
    let n = VVr();
    return {
        settings: t.settings,
        errors: [
            ...t.errors,
            ...i,
            ...o,
            ...n.ignored,
            ...n.turnedOff
        ]
    };
}
const c = new Set(Ztn);
function VVr() {
    let ignored = [];
    let turnedOff = [];
    let r = Lo();
    for (let o of r){
        if (!G3e(o)) {
            continue;
        }
        if (o === "projectSettings" && r.includes("userSettings") && S_()) {
            continue;
        }
        let n = fe(o)?.env ?? {};
        let e = [];
        let s = [];
        for (let a of Object.keys(n)){
            let f = a.toUpperCase();
            if (!c.has(f)) {
                continue;
            }
            if (NWn(a, n[a], dfo)) {
                s.push(a);
            } else {
                e.push(a);
            }
        }
        let file = yn(o);
        let g = kO(o);
        if (e.length > 0) {
            ignored.push({
                file,
                path: "env",
                message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
                severity: "warning",
                statusOnly: true
            });
        }
        if (s.length > 0) {
            turnedOff.push({
                file,
                path: "env",
                message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
                severity: "warning",
                statusOnly: true
            });
        }
    }
    return {
        ignored,
        turnedOff
    };
}
function Ozt() {
    return Otn().filter((t)=>!t.preserveOnWrite);
}
function V7e() {
    let t = yn("localSettings");
    return [
        ...ige().errors.filter((r)=>!r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t),
        ...Ozt()
    ];
}
export { ige, VVr, Ozt, V7e };
