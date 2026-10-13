import { RBe, xBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { LY, _xe, aWn, ise, IMt } from "/$bunfs/root/chunk-d2sd20y7.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
const D$r = [
    250,
    500,
    500,
    750,
    1000
];
function g() {
    return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? ise;
}
function C(r) {
    return a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some((e)=>e === "--sdk-url" || e.startsWith("--sdk-url=")) && !LY();
}
const I = 250;
const w = 50;
function d() {
    return IMt(_xe, "OAuth token").token !== null || IMt(aWn, "API key").token !== null;
}
async function LBo(r, { delaysMs = D$r, siblingGraceMs = I, siblingStepMs = w } = {}) {
    if (!C(r)) {
        return;
    }
    let i = performance.now();
    let S = delaysMs.reduce((acc, delaysM)=>acc + delaysM, 0);
    let E = g();
    let { token, miss } = IMt(E, "session ingress token");
    let attempts = 0;
    while(!token && attempts < delaysMs.length){
        let s = delaysMs[attempts];
        t(`[spare-claim] session ingress token file not readable yet (${miss}), re-checking in ${s}ms (${attempts + 1}/${delaysMs.length})`, {
            level: "warn"
        });
        await Q(s);
        attempts++;
        ({ token, miss } = IMt(E, "session ingress token"));
    }
    if (!token) {
        J("error", "cli_worker_lifecycle_claim_token_wait", {
            attempts,
            recovered: false,
            last_miss: miss ?? "other",
            waited_ms: Math.round(performance.now() - i)
        });
        return;
    }
    let u = attempts > 0 ? Math.max(S - (performance.now() - i), siblingGraceMs) : siblingGraceMs;
    let p = performance.now();
    let sibling_attempts = 0;
    let sibling_present = d();
    while(!sibling_present && performance.now() - p < u){
        await Q(siblingStepMs);
        sibling_attempts++;
        sibling_present = d();
    }
    if (attempts > 0 || sibling_attempts > 0) {
        J("info", "cli_worker_lifecycle_claim_token_wait", {
            attempts,
            recovered: true,
            sibling_attempts,
            sibling_present,
            waited_ms: Math.round(performance.now() - i)
        });
    }
}
function NBo() {
    let fd_env_set = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
    if (RBe() !== null) {
        return {
            recovered: false,
            diag: {
                fd_env_set
            }
        };
    }
    let { token, miss } = IMt(g(), "session ingress token");
    if (!token) {
        return {
            recovered: false,
            diag: {
                fd_env_set,
                last_miss: miss ?? "other"
            }
        };
    }
    xBe(token);
    t("Session ingress token re-read from well-known file");
    return {
        recovered: true,
        diag: {
            fd_env_set
        }
    };
}
export { D$r, LBo, NBo };
