import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { fwe, Rq, NPe, zRo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, ll } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { zy } from "/$bunfs/root/chunk-7qc48pza.js";
import { stat } from "fs/promises";
const timeout = 5000;
const client_id = fwe();
const y = {
    teardown: ()=>{},
    pulseIfClientPresent: ()=>{}
};
async function A() {
    let a_CLAUDE_CLIENT_PRESENCE_FILE = a.CLAUDE_CLIENT_PRESENCE_FILE;
    if (!a_CLAUDE_CLIENT_PRESENCE_FILE) {
        return false;
    }
    if (Bn(a_CLAUDE_CLIENT_PRESENCE_FILE) && !ll(a_CLAUDE_CLIENT_PRESENCE_FILE)) {
        return false;
    }
    try {
        await stat(a_CLAUDE_CLIENT_PRESENCE_FILE);
        return true;
    } catch (error) {
        if (!z(error)) {
            t(`[presence] client-presence-marker stat failed: ${error}`);
        }
        return false;
    }
}
function wln(sessionId, baseUrl, getAuthHeaders, onUnauthorized = ()=>Promise.resolve(false)) {
    if (Tt()) {
        return y;
    }
    let u = {
        sessionId,
        baseUrl,
        getAuthHeaders,
        onUnauthorized
    };
    let r = `[presence session=${sessionId}]`;
    let connected_at = null;
    let d = 0;
    let m = Promise.resolve();
    let g = async (e, n)=>{
        let sentHeaders = await u.getAuthHeaders();
        if (sentHeaders === null) {
            t(`${r} ${e} skipped (no credential to send under)`);
            return null;
        }
        if (!qn()) {
            t(`${r} ${e} skipped (non-first-party provider)`);
            return null;
        }
        let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
        t(`${r} ${e} \u2192 ${E}`);
        return At.post(E, {
            client_id,
            ...n
        }, {
            headers: {
                ...sentHeaders,
                "anthropic-version": "2023-06-01",
                "anthropic-client-platform": zy()
            },
            timeout,
            validateStatus: ()=>true
        }).then((i)=>{
            if (i.status >= 400) {
                t(`${r} ${e} got ${i.status}`);
            }
            return {
                status: i.status,
                sentHeaders
            };
        }, (i)=>{
            t(`${r} ${e} failed: ${At.isAxiosError(i) ? i.code ?? "request_error" : "error"}`);
            return null;
        });
    };
    let P = async (e)=>{
        let n = e.clear === true ? "clear" : "pulse";
        if (!qn()) {
            t(`${r} ${n} skipped (non-first-party provider)`);
            return;
        }
        try {
            let s = await g(n, e);
            if (s?.status === 401 && await u.onUnauthorized(s.sentHeaders)) {
                t(`${r} ${n} retrying after credential refresh`);
                await g(n, e);
            }
        } catch (error) {
            t(`${r} ${n} skipped (credential unavailable: ${error instanceof Error ? error.name : "error"})`);
        }
    };
    let v = ()=>{
        let e = Date.now();
        d = e;
        connected_at ??= new Date(e).toISOString();
        let n = P({
            connected_at
        });
        m = m.then(()=>n);
        return n;
    };
    let h = ()=>{
        if (NPe() === false) {
            t(`${r} pulse skipped (terminal blurred)`);
            return;
        }
        if (Date.now() - d < timeout) {
            return;
        }
        v();
    };
    let w = Rq(h);
    let C = zRo(()=>{
        let e = NPe();
        t(`${r} terminal focus \u2192 ${e === undefined ? "unknown" : e ? "focused" : "blurred"}`);
        if (e === true) {
            h();
        }
    });
    t(`${r} wired`);
    let f = false;
    return {
        teardown () {
            if (f) {
                return;
            }
            f = true;
            w?.();
            w = null;
            C?.();
            C = null;
            if (connected_at !== null) {
                m.then(()=>P({
                        clear: true
                    }));
            }
            connected_at = null;
        },
        pulseIfClientPresent () {
            if (f || Date.now() - d < timeout) {
                return;
            }
            A().then((e)=>{
                if (e && !f && Date.now() - d >= timeout) {
                    t(`${r} client-presence-marker active \u2192 pulse`);
                    v();
                }
            });
        }
    };
}
export { wln };
