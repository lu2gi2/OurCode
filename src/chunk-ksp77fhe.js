import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { sbr, ibr } from "/$bunfs/root/chunk-j5p659br.js";
import { Ufo } from "/$bunfs/root/chunk-0hc5jd2w.js";
import { randomUUID } from "crypto";
const c = "https://browser-intake-us5-datadoghq.com/api/v2/logs";
const p = 30000;
const maxBatchSize = 25;
const timeout = 10000;
const n = 100;
function getFlushIntervalMs() {
    return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || p;
}
async function post(e) {
    if (!Ufo()) {
        t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
            level: "warn"
        });
        return;
    }
    let r = _(e);
    let s = new URLSearchParams({
        ddsource: "browser",
        "dd-api-key": ibr,
        "dd-evp-origin": "browser",
        "dd-evp-origin-version": {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        "dd-request-id": randomUUID()
    });
    try {
        await Wa.post(`${c}?${s}`, r, {
            headers: {
                "Content-Type": "application/json"
            },
            timeout
        });
    } catch (error) {
        if (dd(error) && error.response) {
            t(`dd-error-tracking: intake responded ${error.response.status} (batch=${e.length})`, {
                level: "warn"
            });
        } else {
            t(`dd-error-tracking: intake failed: ${l(error)}`, {
                level: "warn"
            });
        }
    }
}
class i {
    reportsEnqueued = 0;
    capSentinelSent = false;
    cachedUserBucket = undefined;
    sender = sbr({
        maxBatchSize,
        getFlushIntervalMs,
        post
    });
}
const E = new q(()=>new i);
function ZJt() {
    return E.of(B().host);
}
function gfo() {
    return ZJt().reportsEnqueued >= n;
}
function h(e) {
    return {
        ...e,
        message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`,
        error: {
            kind: "ErrorTrackingCapReached",
            message: `per-process cap of ${n} hit`,
            stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
            fingerprint: "cap-reached-sentinel",
            handling: "handled"
        },
        error_frames: undefined
    };
}
function hfo(e) {
    let r = ZJt();
    if (r.reportsEnqueued >= n) {
        return;
    }
    r.reportsEnqueued++;
    if (r.reportsEnqueued === n && !r.capSentinelSent) {
        r.capSentinelSent = true;
        t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
            level: "warn"
        });
        r.sender.enqueue(h(e));
    } else {
        r.sender.enqueue(e);
    }
}
async function Czs() {
    await ZJt().sender.shutdown();
}
export { ZJt, gfo, hfo, Czs };
