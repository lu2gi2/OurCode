import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, Eq } from "/$bunfs/root/chunk-etbngzss.js";
import { Uw, jv } from "/$bunfs/root/chunk-55x53sfe.js";
import { ol, bn, yl, Yi, r0, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { zzn } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { YA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { zy } from "/$bunfs/root/chunk-7qc48pza.js";
import m from "ws";
const R = '{"type":"KeepAlive"}';
const U = '{"type":"CloseStream"}';
const L = "/api/ws/speech_to_text/voice_stream";
const F = 8000;
const x = {
    safety: 5000,
    noData: 1500
};
function A(e, o, d) {
    if (typeof e === "number" && Number.isInteger(e) && e >= o && e <= d) {
        return String(e);
    }
    return "unknown";
}
function z(e) {
    return Vr(e)?.toLowerCase() ?? "unknown";
}
const timeout = 1500;
async function Cjr() {
    if (Tt() || Eq()) {
        return "skipped_privacy";
    }
    try {
        let e = await At.get(`${dn().BASE_API_URL}/api/hello`, {
            headers: {
                "User-Agent": r0()
            },
            timeout,
            validateStatus: ()=>true,
            maxRedirects: 0
        });
        let o = A(e.status, 100, 599);
        if (e.headers["cf-mitigated"] !== undefined) {
            return `cf_mitigated_${o}`;
        }
        return `http_${o}`;
    } catch (error) {
        let o = At.isAxiosError(error) ? error.code : undefined;
        if (o === "ECONNABORTED" || o === "ETIMEDOUT") {
            return "timeout";
        }
        return "fetch_failed";
    }
}
function N() {
    if (a.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) {
        return true;
    }
    return k("tengu_brick_follow", false);
}
function Rjr() {
    if (!ol()) {
        return false;
    }
    let e = bn();
    return e !== null && e.accessToken !== null;
}
const B = 1024;
function H(keyterms) {
    let o = new Set;
    let d = [];
    let u = 0;
    for (let C of keyterms){
        let p = C.replace(/,/g, " ").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim();
        if (!p || o.has(p)) {
            continue;
        }
        let E = p.length + (d.length > 0 ? 1 : 0);
        if (u + E > B) {
            break;
        }
        o.add(p);
        d.push(p);
        u += E;
    }
    return d.join(",");
}
function W() {}
async function xjr(e, o, credentials) {
    let u;
    if (j() && credentials !== undefined) {
        await Yi({
            credentials
        });
        u = await yl(credentials);
    } else {
        await Yi();
        u = bn();
    }
    if (!u?.accessToken) {
        t("[voice_stream] No OAuth token available");
        return null;
    }
    let C = W() ?? dn().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
    let p = N();
    let E = new URLSearchParams({
        encoding: "linear16",
        sample_rate: "16000",
        channels: "1",
        endpointing_ms: "300",
        utterance_end_ms: "1000",
        language: o?.language ?? "en",
        use_conversation_engine: "true",
        ...p && {
            forward_interims: "typed"
        }
    });
    let T = `${C}${L}?${E.toString()}`;
    t(`[voice_stream] Connecting to ${T}`);
    let headers = {
        Authorization: `Bearer ${u.accessToken}`,
        "User-Agent": r0(),
        "x-app": "cli",
        "anthropic-client-platform": zy()
    };
    if (o?.keyterms?.length) {
        let r = H(o.keyterms);
        if (r) {
            headers["x-config-keyterms"] = r;
        }
    }
    let V = Uw();
    let P = {
        headers,
        proxy: jv(T),
        tls: V || undefined
    };
    zzn(T, m);
    let s = new m(T, P);
    let f = null;
    let y = false;
    let w = false;
    let S = false;
    let g = false;
    let O = false;
    let _ = null;
    let v = null;
    let b = {
        send (r) {
            if (s.readyState !== m.OPEN) {
                return;
            }
            if (S) {
                t(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
                return;
            }
            t(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`);
            s.send(Buffer.from(r));
        },
        finalize () {
            if (g || S) {
                return Promise.resolve("ws_already_closed");
            }
            g = true;
            return new Promise((resolve)=>{
                let c = setTimeout(()=>_?.("safety_timeout"), x.safety);
                let n = setTimeout(()=>_?.("no_data_timeout"), x.noData);
                v = ()=>{
                    clearTimeout(n);
                    v = null;
                };
                _ = (i)=>{
                    clearTimeout(c);
                    clearTimeout(n);
                    _ = null;
                    v = null;
                    if (l) {
                        t(`[voice_stream] Promoting unreported interim before ${i} resolve`);
                        let M = l;
                        l = "";
                        e.onTranscript(M, true);
                    }
                    t(`[voice_stream] Finalize resolved via ${i}`);
                    resolve(i);
                };
                if (s.readyState === m.CLOSED || s.readyState === m.CLOSING) {
                    _("ws_already_closed");
                    return;
                }
                setTimeout(()=>{
                    S = true;
                    if (s.readyState === m.OPEN) {
                        t("[voice_stream] Sending CloseStream (finalize)");
                        s.send(U);
                    }
                }, 0);
            });
        },
        close () {
            S = true;
            if (f) {
                clearInterval(f);
                f = null;
            }
            y = false;
            if (s.readyState === m.OPEN) {
                s.close();
            }
        },
        isConnected () {
            return y && s.readyState === m.OPEN;
        }
    };
    s.on("open", ()=>{
        t("[voice_stream] WebSocket connected");
        y = true;
        w = true;
        t("[voice_stream] Sending initial KeepAlive");
        s.send(R);
        f = setInterval((r)=>{
            if (r.readyState === m.OPEN) {
                t("[voice_stream] Sending periodic KeepAlive");
                r.send(R);
            }
        }, F, s);
        e.onReady(b);
    });
    let l = "";
    function h(r) {
        if (!l) {
            return;
        }
        t(`[voice_stream] Promoting unreported interim to final (${r})`);
        let c = l;
        l = "";
        e.onTranscript(c, true);
    }
    s.on("message", (r)=>{
        let c = r.toString();
        t(`[voice_stream] Message received (${String(c.length)} chars)`);
        let n;
        try {
            n = X(c);
        } catch  {
            return;
        }
        switch(n.type){
            case "TranscriptInterim":
            case "TranscriptText":
                {
                    let i = n.data;
                    t(`[voice_stream] ${n.type} (${String(i?.length ?? 0)} chars)`);
                    if (S) {
                        v?.();
                    }
                    if (i) {
                        l = i;
                        e.onTranscript(i, false);
                    }
                    break;
                }
            case "TranscriptEndpoint":
                {
                    t(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
                    let i = l;
                    l = "";
                    if (i) {
                        e.onTranscript(i, true);
                    }
                    if (S) {
                        _?.("post_closestream_endpoint");
                    }
                    break;
                }
            case "TranscriptError":
                {
                    let i = n.description ?? n.error_code ?? "unknown transcription error";
                    t(`[voice_stream] TranscriptError: ${i}`);
                    h("TranscriptError");
                    if (!g) {
                        e.onError(i);
                    }
                    break;
                }
            case "error":
                {
                    let i = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
                    t(`[voice_stream] Server error: ${i}`);
                    h("server error");
                    if (!g) {
                        e.onError(i);
                    }
                    break;
                }
            default:
                break;
        }
    });
    s.on("close", (r, c)=>{
        let n = c?.toString() ?? "";
        t(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`);
        y = false;
        if (f) {
            clearInterval(f);
            f = null;
        }
        h("ws close");
        _?.("ws_close");
        if (!g && !O && r !== 1000 && r !== 1005) {
            e.onError(`Connection closed: code ${String(r)}${n ? ` \u2014 ${n}` : ""}`, w ? undefined : {
                connectFailureCode: `ws_closed_${A(r, 1000, 4999)}`
            });
        }
        e.onClose();
    });
    s.on("unexpected-response", (r, c)=>{
        let n = c.statusCode ?? 0;
        if (n === 101) {
            t("[voice_stream] unexpected-response fired with 101; ignoring");
            return;
        }
        t(`[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`);
        O = true;
        c.resume();
        r.destroy?.();
        if (g) {
            return;
        }
        e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, {
            fatal: n >= 400 && n < 500,
            connectFailureCode: c.headers["cf-mitigated"] !== undefined ? `cf_mitigated_${A(n, 100, 599)}` : `upgrade_rejected_${A(n, 100, 599)}`
        });
    });
    s.on("error", (r)=>{
        t(`[voice_stream] WebSocket error: ${r.message}`, {
            level: "error"
        });
        h("ws error");
        if (!g) {
            e.onError(`Voice stream connection error: ${r.message}`, w ? undefined : {
                connectFailureCode: `ws_error_${z(r)}`
            });
        }
    });
    return b;
}
export { Cjr, Rjr, xjr };
