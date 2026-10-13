import { Xe, rj } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { tt, k, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { AP as children } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ae, pt, Uut, rn, Bw, Bs, DR } from "/$bunfs/root/chunk-223dyewd.js";
import { z5, Vxt } from "/$bunfs/root/chunk-gr4a0fky.js";
import { on, nt, s, n, ia } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { bU, jH, bc } from "/$bunfs/root/chunk-p0ey0vwr.js";
import { zg } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { V, Wo } from "/$bunfs/root/chunk-zby5bms5.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Idn, TIe, hA, AIe, Fh, bm, ab } from "/$bunfs/root/chunk-9qns2dz5.js";
import { hrr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { pJt } from "/$bunfs/root/chunk-tf8026s8.js";
import { Vve } from "/$bunfs/root/chunk-7y0q4jme.js";
import { _G } from "/$bunfs/root/chunk-03fdf89f.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { mie } from "/$bunfs/root/chunk-gja823pp.js";
import { fYn } from "/$bunfs/root/chunk-qhqaadn8.js";
import { wU, R$t, vdn, h0r } from "/$bunfs/root/chunk-c12xka2p.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { HXe, nk } from "/$bunfs/root/chunk-e5j8wt4p.js";
import { rE, Ife } from "/$bunfs/root/chunk-ew3x58jj.js";
import { fie } from "/$bunfs/root/chunk-477j19cb.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { Sg, vu } from "/$bunfs/root/chunk-0v20st7x.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { jLr, WLr, pgt } from "/$bunfs/root/chunk-vzk31yq7.js";
import { umn, TWo } from "/$bunfs/root/chunk-0ky2aqjs.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
const Vt = 150;
function Zt(l) {
    let _ = w(8);
    let { tone, text } = l;
    let o = vu();
    let c = nt();
    let reducedMotion = o || c;
    let [h, C] = ia(reducedMotion ? null : Vt);
    const frame = Math.floor(C / Vt);
    let E;
    if (_[0] !== reducedMotion || _[1] !== frame || _[2] !== text || _[3] !== tone) {
        E = e(HXe, {
            state: "live",
            tone,
            text,
            linkify: false,
            frame,
            reducedMotion
        });
        _[0] = reducedMotion;
        _[1] = frame;
        _[2] = text;
        _[3] = tone;
        _[4] = E;
    } else {
        E = _[4];
    }
    let L;
    if (_[5] !== h || _[6] !== E) {
        L = e(s, {
            ref: h,
            flexDirection: "column",
            children: E
        });
        _[5] = h;
        _[6] = E;
        _[7] = L;
    } else {
        L = _[7];
    }
    return L;
}
N();
const Re = {
    r: 171,
    g: 43,
    b: 63
};
function S$t(l) {
    let u = w(97);
    let { message, mode, messageColor, glimmerIndex, flashOpacity, shimmerColor, stalledIntensity, thinkingIntensity } = l;
    let _ = stalledIntensity === undefined ? 0 : stalledIntensity;
    let E = thinkingIntensity === undefined ? 0 : thinkingIntensity;
    let L = Vb();
    let segments_1;
    if (u[0] !== message) {
        segments_1 = [];
        for (const { segment } of ra().segment(message)){
            segments_1.push({
                segment,
                width: ae(segment)
            });
        }
        u[0] = message;
        u[1] = segments_1;
    } else {
        segments_1 = u[1];
    }
    let messageWidth_1;
    if (u[2] !== message) {
        messageWidth_1 = ae(message);
        u[2] = message;
        u[3] = messageWidth_1;
    } else {
        messageWidth_1 = u[3];
    }
    let b;
    if (u[4] !== segments_1 || u[5] !== messageWidth_1) {
        b = {
            segments: segments_1,
            messageWidth: messageWidth_1
        };
        u[4] = segments_1;
        u[5] = messageWidth_1;
        u[6] = b;
    } else {
        b = u[6];
    }
    let { segments, messageWidth } = b;
    if (!message) {
        return null;
    }
    if (_ > 0) {
        let A = L[messageColor];
        let x;
        if (u[7] !== A || u[8] !== message || u[9] !== _) {
            x = Sn;
            Mt: {
                let ot = A ? ab(A) : null;
                if (ot) {
                    let J = Fh(ot, Re, hA(_));
                    let W = bm(J);
                    let f;
                    if (u[11] !== W || u[12] !== message) {
                        f = e(n, {
                            color: W,
                            children: message
                        });
                        u[11] = W;
                        u[12] = message;
                        u[13] = f;
                    } else {
                        f = u[13];
                    }
                    let p;
                    if (u[14] !== W) {
                        p = e(n, {
                            color: W,
                            children: " "
                        });
                        u[14] = W;
                        u[15] = p;
                    } else {
                        p = u[15];
                    }
                    let M;
                    if (u[16] !== f || u[17] !== p) {
                        M = r(Y, {
                            children: [
                                f,
                                p
                            ]
                        });
                        u[16] = f;
                        u[17] = p;
                        u[18] = M;
                    } else {
                        M = u[18];
                    }
                    x = M;
                    break Mt;
                }
            }
            u[7] = A;
            u[8] = message;
            u[9] = _;
            u[10] = x;
        } else {
            x = u[10];
        }
        if (x !== Sn) {
            return x;
        }
        let U = _ > 0.5 ? "error" : messageColor;
        let f;
        if (u[19] !== U || u[20] !== message) {
            f = e(n, {
                color: U,
                children: message
            });
            u[19] = U;
            u[20] = message;
            u[21] = f;
        } else {
            f = u[21];
        }
        let p;
        if (u[22] !== U) {
            p = e(n, {
                color: U,
                children: " "
            });
            u[22] = U;
            u[23] = p;
        } else {
            p = u[23];
        }
        let M;
        if (u[24] !== f || u[25] !== p) {
            M = r(Y, {
                children: [
                    f,
                    p
                ]
            });
            u[24] = f;
            u[25] = p;
            u[26] = M;
        } else {
            M = u[26];
        }
        return M;
    }
    if (E > 0) {
        let St = L[messageColor];
        let x;
        if (u[27] !== St || u[28] !== message || u[29] !== L.warning || u[30] !== E) {
            x = Sn;
            ut: {
                let X = St ? ab(St) : null;
                let q = ab(L.warning);
                if (X && q) {
                    let ct = Fh(X, q, hA(E));
                    let D = bm(ct);
                    let f;
                    if (u[32] !== D || u[33] !== message) {
                        f = e(n, {
                            color: D,
                            children: message
                        });
                        u[32] = D;
                        u[33] = message;
                        u[34] = f;
                    } else {
                        f = u[34];
                    }
                    let p;
                    if (u[35] !== D) {
                        p = e(n, {
                            color: D,
                            children: " "
                        });
                        u[35] = D;
                        u[36] = p;
                    } else {
                        p = u[36];
                    }
                    let M;
                    if (u[37] !== f || u[38] !== p) {
                        M = r(Y, {
                            children: [
                                f,
                                p
                            ]
                        });
                        u[37] = f;
                        u[38] = p;
                        u[39] = M;
                    } else {
                        M = u[39];
                    }
                    x = M;
                    break ut;
                }
            }
            u[27] = St;
            u[28] = message;
            u[29] = L.warning;
            u[30] = E;
            u[31] = x;
        } else {
            x = u[31];
        }
        if (x !== Sn) {
            return x;
        }
        let Q = E > 0.5 ? "warning" : messageColor;
        let f;
        if (u[40] !== Q || u[41] !== message) {
            f = e(n, {
                color: Q,
                children: message
            });
            u[40] = Q;
            u[41] = message;
            u[42] = f;
        } else {
            f = u[42];
        }
        let p;
        if (u[43] !== Q) {
            p = e(n, {
                color: Q,
                children: " "
            });
            u[43] = Q;
            u[44] = p;
        } else {
            p = u[44];
        }
        let M;
        if (u[45] !== f || u[46] !== p) {
            M = r(Y, {
                children: [
                    f,
                    p
                ]
            });
            u[45] = f;
            u[46] = p;
            u[47] = M;
        } else {
            M = u[47];
        }
        return M;
    }
    if (mode === "tool-use") {
        let gt = L[messageColor];
        let ft = L[shimmerColor];
        let x;
        if (u[48] !== gt || u[49] !== flashOpacity || u[50] !== message || u[51] !== messageColor || u[52] !== ft) {
            x = Sn;
            dt: {
                let ht = gt ? ab(gt) : null;
                let Lt = ft ? ab(ft) : null;
                if (ht && Lt) {
                    let At = Fh(ht, Lt, hA(flashOpacity));
                    const f = e(n, {
                        color: bm(At),
                        children: message
                    });
                    let p;
                    if (u[54] !== messageColor) {
                        p = e(n, {
                            color: messageColor,
                            children: " "
                        });
                        u[54] = messageColor;
                        u[55] = p;
                    } else {
                        p = u[55];
                    }
                    let M;
                    if (u[56] !== f || u[57] !== p) {
                        M = r(Y, {
                            children: [
                                f,
                                p
                            ]
                        });
                        u[56] = f;
                        u[57] = p;
                        u[58] = M;
                    } else {
                        M = u[58];
                    }
                    x = M;
                    break dt;
                }
            }
            u[48] = gt;
            u[49] = flashOpacity;
            u[50] = message;
            u[51] = messageColor;
            u[52] = ft;
            u[53] = x;
        } else {
            x = u[53];
        }
        if (x !== Sn) {
            return x;
        }
        let rt = flashOpacity > 0.5 ? shimmerColor : messageColor;
        let f;
        if (u[59] !== rt || u[60] !== message) {
            f = e(n, {
                color: rt,
                children: message
            });
            u[59] = rt;
            u[60] = message;
            u[61] = f;
        } else {
            f = u[61];
        }
        let p;
        if (u[62] !== messageColor) {
            p = e(n, {
                color: messageColor,
                children: " "
            });
            u[62] = messageColor;
            u[63] = p;
        } else {
            p = u[63];
        }
        let M;
        if (u[64] !== f || u[65] !== p) {
            M = r(Y, {
                children: [
                    f,
                    p
                ]
            });
            u[64] = f;
            u[65] = p;
            u[66] = M;
        } else {
            M = u[66];
        }
        return M;
    }
    let kt = glimmerIndex - 1;
    let xt = glimmerIndex + 1;
    if (kt >= messageWidth || xt < 0) {
        let x;
        if (u[67] !== message || u[68] !== messageColor) {
            x = e(n, {
                color: messageColor,
                children: message
            });
            u[67] = message;
            u[68] = messageColor;
            u[69] = x;
        } else {
            x = u[69];
        }
        let f;
        if (u[70] !== messageColor) {
            f = e(n, {
                color: messageColor,
                children: " "
            });
            u[70] = messageColor;
            u[71] = f;
        } else {
            f = u[71];
        }
        let p;
        if (u[72] !== x || u[73] !== f) {
            p = r(Y, {
                children: [
                    x,
                    f
                ]
            });
            u[72] = x;
            u[73] = f;
            u[74] = p;
        } else {
            p = u[74];
        }
        return p;
    }
    let wt = Math.max(0, kt);
    let z;
    let it;
    let at;
    if (u[75] !== wt || u[76] !== segments || u[77] !== xt) {
        let lt = 0;
        it = "";
        at = "";
        z = "";
        for (const { segment, width } of segments){
            if (lt + width <= wt) {
                it = it + segment;
            } else if (lt > xt) {
                z = z + segment;
            } else {
                at = at + segment;
            }
            lt = lt + width;
        }
        u[75] = wt;
        u[76] = segments;
        u[77] = xt;
        u[78] = z;
        u[79] = it;
        u[80] = at;
    } else {
        z = u[78];
        it = u[79];
        at = u[80];
    }
    let x;
    if (u[81] !== it || u[82] !== messageColor) {
        x = it && e(n, {
            color: messageColor,
            children: it
        });
        u[81] = it;
        u[82] = messageColor;
        u[83] = x;
    } else {
        x = u[83];
    }
    let f;
    if (u[84] !== at || u[85] !== shimmerColor) {
        f = e(n, {
            color: shimmerColor,
            children: at
        });
        u[84] = at;
        u[85] = shimmerColor;
        u[86] = f;
    } else {
        f = u[86];
    }
    let p;
    if (u[87] !== z || u[88] !== messageColor) {
        p = z && e(n, {
            color: messageColor,
            children: z
        });
        u[87] = z;
        u[88] = messageColor;
        u[89] = p;
    } else {
        p = u[89];
    }
    let M;
    if (u[90] !== messageColor) {
        M = e(n, {
            color: messageColor,
            children: " "
        });
        u[90] = messageColor;
        u[91] = M;
    } else {
        M = u[91];
    }
    let Ct;
    if (u[92] !== x || u[93] !== f || u[94] !== p || u[95] !== M) {
        Ct = r(Y, {
            children: [
                x,
                f,
                p,
                M
            ]
        });
        u[92] = x;
        u[93] = f;
        u[94] = p;
        u[95] = M;
        u[96] = Ct;
    } else {
        Ct = u[96];
    }
    return Ct;
}
N();
function He() {
    return {
        toolWindowStart: null,
        toolWindowEnd: null,
        thinkingBurstStart: null,
        wasThinking: false
    };
}
function Ue(l, t) {
    let { toolWindowStart, toolWindowEnd, thinkingBurstStart } = l;
    if (t.hasActiveTools) {
        if (toolWindowStart === null || toolWindowEnd !== null) {
            toolWindowStart = t.now;
        }
        toolWindowEnd = null;
    } else if (toolWindowStart !== null && toolWindowEnd === null) {
        toolWindowEnd = t.now;
    }
    if (!t.hasActiveTools && t.thinkingStatus !== null) {
        toolWindowStart = null;
        toolWindowEnd = null;
    }
    if (t.isThinking) {
        if (!l.wasThinking) {
            thinkingBurstStart = t.now;
        }
    } else {
        thinkingBurstStart = null;
    }
    return {
        toolWindowStart,
        toolWindowEnd,
        thinkingBurstStart,
        wasThinking: t.isThinking
    };
}
function Ke(l, t) {
    if (t.showToolCallTimer && t.hasActiveTools && l.toolWindowStart !== null) {
        let m = t.now - l.toolWindowStart;
        if (m >= 2000) {
            return {
                kind: "tool-running",
                toolMs: m
            };
        }
    }
    if (t.outputLimitRecovery !== null && !t.hasActiveTools) {
        return {
            kind: "recovering",
            recovery: t.outputLimitRecovery
        };
    }
    if (t.showToolCallTimer && !t.hasActiveTools && t.thinkingStatus === null && l.toolWindowStart !== null && l.toolWindowEnd !== null) {
        let m = l.toolWindowEnd - l.toolWindowStart;
        if (m >= 2000) {
            return {
                kind: "tool-done",
                toolMs: m
            };
        }
    }
    if (t.thinkingStatus === "thinking" && !t.hasActiveTools) {
        return {
            kind: "thinking",
            thinkingMs: l.thinkingBurstStart !== null ? t.now - l.thinkingBurstStart : 0
        };
    }
    if (typeof t.thinkingStatus === "number") {
        return {
            kind: "thought-for",
            thoughtMs: t.thinkingStatus
        };
    }
    return {
        kind: "none"
    };
}
function qe(l, t) {
    if (t.hasActiveTools) {
        return 0;
    }
    if (!t.isThinking || l.thinkingBurstStart === null) {
        return 0;
    }
    let m = t.now - l.thinkingBurstStart;
    return Math.min(Math.max((m - 10000) / 10000, 0), 1);
}
N();
function ze(l, response_length, m = false, o = false, agentId) {
    let g = R(l);
    let h = R(response_length);
    let C = R(0);
    let B = R(l);
    let _ = R(agentId);
    if (response_length > h.current || _.current !== agentId) {
        _.current = agentId;
        g.current = l;
        h.current = response_length;
        C.current = 0;
        B.current = l;
    } else if (response_length < h.current) {
        h.current = response_length;
    }
    let timeSinceLastToken;
    if (m) {
        timeSinceLastToken = 0;
        g.current = l;
    } else {
        timeSinceLastToken = l - g.current;
    }
    let isStalled = timeSinceLastToken > 10000 && !m;
    let u = isStalled ? Math.min((timeSinceLastToken - 10000) / 10000, 1) : 0;
    if (!o && (u > 0 || C.current > 0)) {
        let H = l - B.current;
        if (H >= 50) {
            let O = Math.floor(H / 50);
            let b = C.current;
            for(let v = 0; v < O; v++){
                let T = u - b;
                if (Math.abs(T) < 0.01) {
                    b = u;
                    break;
                }
                b += T * 0.1;
            }
            C.current = b;
            B.current = l;
        }
    } else {
        C.current = u;
        B.current = l;
    }
    let stalledIntensity = o ? u : C.current;
    return {
        isStalled,
        stalledIntensity,
        timeSinceLastToken
    };
}
const Fn = [
    10000,
    45000,
    300000
];
const Kn = 2000;
const qn = 2000;
const zn = 200;
const le = 10;
const Yn = 10000;
const Jn = 20000;
const Qn = 30000;
const Zn = 45000;
function Xn(l) {
    let t = AIe(l, qn);
    return Math.round(t * (Idn().length - 1));
}
function to(thoughtMs) {
    return `thought for ${Math.max(1, Math.round(thoughtMs / 1000))}s`;
}
function eo({ attempt, limit }) {
    if (attempt > 1) {
        return `picking the thought back up (${attempt} of ${limit})`;
    }
    return "picking the thought back up";
}
function no(thinkingMs) {
    if (thinkingMs >= Zn) {
        return "deep in thought";
    }
    if (thinkingMs >= Qn) {
        return "thinking some more";
    }
    if (thinkingMs >= Jn) {
        return "thinking more";
    }
    if (thinkingMs >= Yn) {
        return "still thinking";
    }
    return "thinking";
}
function oo(l) {
    return hA((Math.sin(l / 1000 * Math.PI) + 1) / 2);
}
function Ye({ mode, reducedMotion, hasActiveTools, responseLength, message, overrideColor, loadingStartTime, totalPausedMs, pauseStartTime, thinkingStatus, effortSuffix, isCompacting, compactingStartTime, showToolCallTimer, outputLimitRecovery = null, agentId, glimmerParked = false }) {
    let [viewportRef, T] = ia(reducedMotion ? null : mode === "requesting" && !glimmerParked ? 50 : 100);
    let now = Date.now();
    let elapsedMs = isCompacting && compactingStartTime !== null ? Math.max(0, now - compactingStartTime) : pauseStartTime !== null ? pauseStartTime - loadingStartTime - totalPausedMs : now - loadingStartTime - totalPausedMs;
    let J = R(He());
    let W = {
        now,
        isThinking: mode === "thinking",
        hasActiveTools,
        thinkingStatus,
        showToolCallTimer,
        outputLimitRecovery
    };
    J.current = Ue(J.current, W);
    let statusText = Ke(J.current, W);
    let p = qe(J.current, W);
    let response_length = responseLength;
    let Mt = hasActiveTools || mode === "thinking" || isCompacting && mode !== "responding" || pauseStartTime !== null;
    let { isStalled, stalledIntensity, timeSinceLastToken } = ze(T, response_length, Mt, reducedMotion, agentId);
    let q = R(new Set);
    let ct = R(0);
    let D = R(agentId);
    if (D.current !== agentId) {
        D.current = agentId;
        q.current = new Set;
        ct.current = 0;
    }
    if (timeSinceLastToken === 0) {
        if (q.current.size > 0) {
            i("tengu_spinner_stall_cleared", {
                max_stall_ms: Math.round(ct.current),
                mode: d(mode),
                override_color: overrideColor != null,
                response_length,
                thresholds_fired: q.current.size
            });
            q.current = new Set;
            ct.current = 0;
        }
    } else {
        if (timeSinceLastToken > ct.current) {
            ct.current = timeSinceLastToken;
        }
        for (let threshold_ms of Fn){
            if (timeSinceLastToken >= threshold_ms && !q.current.has(threshold_ms)) {
                q.current.add(threshold_ms);
                i("tengu_spinner_stalled_ui", {
                    threshold_ms,
                    mode: d(mode),
                    override_color: overrideColor != null,
                    time_since_last_token_ms: Math.round(timeSinceLastToken),
                    response_length,
                    render_loop_dark: timeSinceLastToken - threshold_ms > 5000
                });
            }
        }
    }
    let frame = reducedMotion ? 0 : Xn(T);
    let Q = mode === "requesting" ? 50 : zn;
    let glimmerMessageWidth = Z(()=>ae(message), [
        message
    ]);
    let ft = glimmerMessageWidth + 2 * le;
    let ht = Math.floor(T / Q);
    let glimmerIndex = reducedMotion ? -100 : isStalled ? -100 : mode === "requesting" ? ht % ft - le : glimmerMessageWidth + le - ht % ft;
    let flashOpacity = reducedMotion ? 0 : mode === "tool-use" ? oo(T) : 0;
    let dt = R(response_length);
    let rt = R(T);
    let kt = R(agentId);
    if (kt.current !== agentId || Math.abs(response_length - dt.current) > Kn) {
        kt.current = agentId;
        dt.current = response_length;
        rt.current = T;
    }
    if (reducedMotion) {
        dt.current = response_length;
        rt.current = T;
    } else {
        let et = Math.floor((T - rt.current) / 50);
        if (et > 0) {
            rt.current += et * 50;
            for(let Et = 0; Et < et; Et++){
                let yt = response_length - dt.current;
                if (yt === 0) {
                    break;
                }
                let Ot = Math.abs(yt);
                let Bt;
                if (Ot < 70) {
                    Bt = 3;
                } else if (Ot < 200) {
                    Bt = Math.max(8, Math.ceil(Ot * 0.15));
                } else {
                    Bt = 50;
                }
                dt.current = yt > 0 ? Math.min(dt.current + Bt, response_length) : Math.max(dt.current - Bt, response_length);
            }
        }
    }
    let dt_current = dt.current;
    let wt = Math.round(dt_current / 4);
    let z = R(0);
    let it = R(T);
    if (mode !== "thinking" || hasActiveTools) {
        z.current = 0;
        it.current = T;
    } else if (!reducedMotion && (p > 0 || z.current > 0)) {
        let et = T - it.current;
        if (et >= 50) {
            let Et = Math.floor(et / 50);
            let yt = z.current;
            for(let Ot = 0; Ot < Et; Ot++){
                let Bt = p - yt;
                if (Math.abs(Bt) < 0.01) {
                    yt = p;
                    break;
                }
                yt += Bt * 0.1;
            }
            z.current = yt;
            it.current = T;
        }
    } else {
        z.current = p;
        it.current = T;
    }
    let thinkingIntensity = reducedMotion ? p : z.current;
    let timerText = rn(elapsedMs);
    let timerWidth = ae(timerText);
    let totalTokens = wt;
    let tokenCount = Bs(totalTokens);
    let _t = `${te.arrowDown} ${tokenCount} tokens`;
    let tokensWidth = ae(_t);
    let progressiveThinkingBase = statusText.kind === "thinking" ? no(statusText.thinkingMs) : "thinking";
    let thinkingText;
    switch(statusText.kind){
        case "tool-running":
            thinkingText = `running tool for ${rn(statusText.toolMs)}`;
            break;
        case "tool-done":
            thinkingText = `ran tool for ${rn(statusText.toolMs)}`;
            break;
        case "recovering":
            thinkingText = eo(statusText.recovery);
            break;
        case "thinking":
            thinkingText = `${progressiveThinkingBase}${effortSuffix}`;
            break;
        case "thought-for":
            thinkingText = to(statusText.thoughtMs);
            break;
        case "none":
            thinkingText = null;
            break;
    }
    let thinkingWidth = thinkingText ? ae(thinkingText) : 0;
    return {
        viewportRef,
        time: T,
        elapsedMs,
        frame,
        glimmerIndex,
        flashOpacity,
        stalledIntensity,
        thinkingIntensity,
        statusText,
        progressiveThinkingBase,
        thinkingText,
        thinkingWidth,
        timerText,
        timerWidth,
        totalTokens,
        tokenCount,
        tokensWidth,
        glimmerMessageWidth
    };
}
function Je(mode) {
    let [t, m] = y(null);
    let o = R(null);
    let c = R([]);
    let g = on();
    P(()=>{
        if (mode === "thinking") {
            if (o.current === null) {
                for (let h of c.current){
                    h();
                }
                c.current = [];
                o.current = Date.now();
                m("thinking");
            }
        } else if (o.current !== null) {
            let h = Date.now() - o.current;
            let C = Math.max(0, 2000 - h);
            o.current = null;
            let B = ()=>{
                m(h);
                c.current.push(g.setTimeout(()=>m(null), 2000));
            };
            if (C > 0) {
                c.current.push(g.setTimeout(B, C));
            } else {
                B();
            }
        }
    }, [
        mode,
        g
    ]);
    P(()=>()=>{
            for (let h of c.current){
                h();
            }
            c.current = [];
        }, []);
    return t;
}
const ro = ae(" · ");
const Qe = ae("thinking");
const io = 16000;
const so = {
    r: 153,
    g: 153,
    b: 153
};
const ao = {
    r: 185,
    g: 185,
    b: 185
};
const Ze = 3000;
const lo = 2;
function co(time, thinkingIntensity, m) {
    let o = (time - Ze) / 1000;
    let c = time < Ze ? 0 : (Math.sin(o * Math.PI * 2 / lo) + 1) / 2;
    let g = Fh(so, ao, hA(c));
    return bm(m && thinkingIntensity > 0 ? Fh(g, m, hA(thinkingIntensity)) : g);
}
function cn({ mode, reducedMotion, hasActiveTools, responseLengthRef, message, messageColor, shimmerColor, overrideColor, loadingStartTimeRef, totalPausedMsRef, pauseStartTimeRef, spinnerSuffix, verbose, columns, thinkingStatus, effortSuffix, isCompacting = false, compactingStartTime = null, showToolCallTimer = false, retryStatus = null, outputLimitRecovery = null, agentId }) {
    let J = Ye({
        mode,
        reducedMotion,
        hasActiveTools,
        responseLength: responseLengthRef.current,
        message,
        overrideColor,
        loadingStartTime: loadingStartTimeRef.current,
        totalPausedMs: totalPausedMsRef.current,
        pauseStartTime: pauseStartTimeRef.current,
        thinkingStatus,
        effortSuffix,
        isCompacting,
        compactingStartTime,
        showToolCallTimer,
        outputLimitRecovery,
        agentId
    });
    let W = Vb();
    let f = nt();
    let p = nk(verbose);
    let { viewportRef, time, elapsedMs, frame, glimmerIndex, flashOpacity, stalledIntensity, thinkingIntensity, statusText, progressiveThinkingBase, timerText, timerWidth, totalTokens, tokenCount, tokensWidth, glimmerMessageWidth } = J;
    let { thinkingText, thinkingWidth } = J;
    let xt = glimmerMessageWidth + 2;
    let wt = ro;
    let z = thinkingText !== null;
    let it = verbose || z || isCompacting || totalTokens > 0 || elapsedMs > io || Boolean(spinnerSuffix);
    let at = columns - xt - 5;
    let lt = z && at > thinkingWidth;
    if (!lt && z && statusText.kind === "thinking" && (effortSuffix || progressiveThinkingBase !== "thinking")) {
        if (at > Qe) {
            thinkingText = "thinking";
            thinkingWidth = Qe;
            lt = true;
        }
    }
    let bt = lt ? thinkingWidth + wt : 0;
    let Rt = it && at > bt + timerWidth;
    let Ct = bt + (Rt ? timerWidth + wt : 0);
    let _t = it && totalTokens > 0 && at > Ct + tokensWidth;
    let Wt = lt && statusText.kind === "thinking" && !spinnerSuffix && !Rt && !_t;
    let It = thinkingIntensity > 0 ? ab(W.warning) : null;
    let st = co(time, thinkingIntensity, It);
    let K = !It && thinkingIntensity > 0.5 ? "warning" : undefined;
    let et = thinkingIntensity > 0 ? "warning" : undefined;
    let Et = [
        ...spinnerSuffix ? [
            e(n, {
                dimColor: true,
                children: spinnerSuffix
            }, "suffix")
        ] : [],
        ...!f && Rt ? [
            e(n, {
                dimColor: true,
                children: timerText
            }, "elapsedTime")
        ] : [],
        ...!f && _t ? [
            r(s, {
                flexDirection: "row",
                children: [
                    e(mn, {
                        mode
                    }),
                    r(n, {
                        dimColor: true,
                        children: [
                            tokenCount,
                            " tokens"
                        ]
                    })
                ]
            }, "tokens")
        ] : [],
        ...!f && lt && thinkingText ? [
            statusText.kind === "thinking" && !reducedMotion ? e(n, {
                color: K ?? st,
                children: Wt ? `(${thinkingText})` : thinkingText
            }, "thinking") : e(n, {
                dimColor: !et,
                color: et,
                children: thinkingText
            }, "thinking")
        ] : []
    ];
    let yt = Et.length > 0 ? Wt ? e(be, {
        children: Et
    }) : r(Y, {
        children: [
            e(n, {
                dimColor: true,
                children: "("
            }),
            e(be, {
                children: Et
            }),
            e(n, {
                dimColor: true,
                children: ")"
            })
        ]
    }) : null;
    if (isCompacting && retryStatus === null && p) {
        return e(s, {
            ref: viewportRef,
            flexDirection: "column",
            marginTop: 1,
            width: "100%",
            children: e(Zt, {
                tone: "dim",
                text: message.replace(/\u2026$/, "")
            })
        });
    }
    return e(s, {
        ref: viewportRef,
        flexDirection: "column",
        width: "100%",
        children: e(s, {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 1,
            width: "100%",
            children: retryStatus ? e(rdn, {
                status: retryStatus,
                columns
            }) : r(Y, {
                children: [
                    e(fie, {
                        frame,
                        messageColor,
                        stalledIntensity: overrideColor ? 0 : stalledIntensity,
                        thinkingIntensity: overrideColor ? 0 : thinkingIntensity,
                        reducedMotion,
                        time
                    }),
                    e(S$t, {
                        message,
                        mode,
                        messageColor,
                        glimmerIndex,
                        flashOpacity,
                        shimmerColor,
                        stalledIntensity: overrideColor ? 0 : stalledIntensity,
                        thinkingIntensity: overrideColor ? 0 : thinkingIntensity
                    }),
                    yt
                ]
            })
        })
    });
}
function rdn(l) {
    let c = w(57);
    let { status, columns } = l;
    let o = Math.max(0, Math.ceil((status.deadline - Date.now()) / 1000)) * 1000;
    let g;
    if (c[0] !== status.kind) {
        g = status.kind === "low_priority_waiting" ? z5().waitBanner : null;
        c[0] = status.kind;
        c[1] = g;
    } else {
        g = c[1];
    }
    let h = g;
    const mostSignificantOnly = o >= 300000;
    let B;
    if (c[2] !== o || c[3] !== mostSignificantOnly) {
        B = rn(o, {
            mostSignificantOnly
        });
        c[2] = o;
        c[3] = mostSignificantOnly;
        c[4] = B;
    } else {
        B = c[4];
    }
    let _ = B;
    let E;
    if (c[5] === S) {
        E = e(s, {
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: e(n, {
                color: "error",
                children
            })
        });
        c[5] = E;
    } else {
        E = c[5];
    }
    let L = E;
    if (status.kind === "stalled") {
        let u;
        if (c[6] === S) {
            u = e(n, {
                color: "error",
                children: "Waiting for API response"
            });
            c[6] = u;
        } else {
            u = c[6];
        }
        let I;
        if (c[7] !== _) {
            I = r(Y, {
                children: [
                    L,
                    r(s, {
                        flexShrink: 1,
                        children: [
                            u,
                            r(n, {
                                dimColor: true,
                                children: [
                                    " · will retry in ",
                                    _,
                                    " · check your network"
                                ]
                            })
                        ]
                    })
                ]
            });
            c[7] = _;
            c[8] = I;
        } else {
            I = c[8];
        }
        return I;
    }
    if (status.kind === "low_priority_waiting") {
        let H = ` \xB7 next try in ${_} \xB7 attempt ${status.attempt} \xB7 esc to interrupt`;
        let O = Math.max(10, columns - 2 - ae(H) - 2);
        let u;
        if (c[9] === S) {
            u = e(s, {
                "aria-hidden": true,
                flexWrap: "wrap",
                height: 1,
                width: 2,
                children: e(n, {
                    color: "warning",
                    children
                })
            });
            c[9] = u;
        } else {
            u = c[9];
        }
        const I = h ?? "";
        let b;
        if (c[10] !== O || c[11] !== I) {
            b = pt(I, O);
            c[10] = O;
            c[11] = I;
            c[12] = b;
        } else {
            b = c[12];
        }
        let v;
        if (c[13] !== b) {
            v = e(n, {
                color: "warning",
                children: b
            });
            c[13] = b;
            c[14] = v;
        } else {
            v = c[14];
        }
        let T;
        if (c[15] !== H) {
            T = e(n, {
                dimColor: true,
                children: H
            });
            c[15] = H;
            c[16] = T;
        } else {
            T = c[16];
        }
        let A;
        if (c[17] !== v || c[18] !== T) {
            A = r(Y, {
                children: [
                    u,
                    r(s, {
                        flexShrink: 1,
                        children: [
                            v,
                            T
                        ]
                    })
                ]
            });
            c[17] = v;
            c[18] = T;
            c[19] = A;
        } else {
            A = c[19];
        }
        return A;
    }
    if (status.kind === "auto_mode_unavailable") {
        let u;
        if (c[20] === S) {
            u = e(n, {
                color: "error",
                children: "Auto mode check unavailable"
            });
            c[20] = u;
        } else {
            u = c[20];
        }
        const I = ` \xB7 next try in ${_} \xB7 attempt ${status.attempt}/${status.maxRetries} \xB7 `;
        let b;
        if (c[21] === S) {
            b = e(G, {
                chord: "escape",
                action: "interrupt",
                format: {
                    keyCase: "lower"
                }
            });
            c[21] = b;
        } else {
            b = c[21];
        }
        let v;
        if (c[22] !== I) {
            v = r(Y, {
                children: [
                    L,
                    r(s, {
                        flexShrink: 1,
                        children: [
                            u,
                            r(n, {
                                dimColor: true,
                                children: [
                                    I,
                                    b
                                ]
                            })
                        ]
                    })
                ]
            });
            c[22] = I;
            c[23] = v;
        } else {
            v = c[23];
        }
        return v;
    }
    let noResponse = status.error.noResponse;
    if (noResponse) {
        let ot = status.attempt >= status.maxRetries;
        let u;
        if (c[24] !== noResponse.retryWaitMs) {
            u = Bw(noResponse.retryWaitMs);
            c[24] = noResponse.retryWaitMs;
            c[25] = u;
        } else {
            u = c[25];
        }
        let J = u;
        let W = ot ? ` \xB7 retrying once, waiting up to ${J}` : ` \xB7 retrying, waiting up to ${J} \xB7 attempt ${status.attempt}/${status.maxRetries}`;
        let f = Math.max(10, columns - 2 - ae(W) - 2);
        let I;
        if (c[26] !== noResponse.waitedMs) {
            I = Bw(noResponse.waitedMs);
            c[26] = noResponse.waitedMs;
            c[27] = I;
        } else {
            I = c[27];
        }
        const b = `No response from the API after ${I}`;
        let v;
        if (c[28] !== f || c[29] !== b) {
            v = pt(b, f);
            c[28] = f;
            c[29] = b;
            c[30] = v;
        } else {
            v = c[30];
        }
        let T;
        if (c[31] !== v) {
            T = e(n, {
                color: "error",
                children: v
            });
            c[31] = v;
            c[32] = T;
        } else {
            T = c[32];
        }
        let A;
        if (c[33] !== W) {
            A = e(n, {
                dimColor: true,
                children: W
            });
            c[33] = W;
            c[34] = A;
        } else {
            A = c[34];
        }
        let p;
        if (c[35] !== A || c[36] !== T) {
            p = r(s, {
                children: [
                    T,
                    A
                ]
            });
            c[35] = A;
            c[36] = T;
            c[37] = p;
        } else {
            p = c[37];
        }
        let M;
        if (c[38] === S) {
            M = e(n, {
                dimColor: true,
                children: "A proxy or gateway that buffers streaming responses can cause this · set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait"
            });
            c[38] = M;
        } else {
            M = c[38];
        }
        let Mt;
        if (c[39] !== p) {
            Mt = r(Y, {
                children: [
                    L,
                    r(s, {
                        flexBasis: 0,
                        flexDirection: "column",
                        flexGrow: 1,
                        flexShrink: 1,
                        children: [
                            p,
                            M
                        ]
                    })
                ]
            });
            c[39] = p;
            c[40] = Mt;
        } else {
            Mt = c[40];
        }
        return Mt;
    }
    let rateLimits = status.error.rateLimits;
    let u;
    if (c[41] !== rateLimits) {
        u = rateLimits?.resetsAt ? ` (${DR(rateLimits.resetsAt)})` : "";
        c[41] = rateLimits;
        c[42] = u;
    } else {
        u = c[42];
    }
    let X = ` \xB7 Retrying in ${_}${u} \xB7 attempt ${status.attempt}/${status.maxRetries}`;
    let q = status.attempt >= Math.min(3, status.maxRetries) || status.error.isNetworkDown || status.error.connection?.isSSLError || rateLimits;
    let I;
    if (c[43] !== rateLimits || c[44] !== q || c[45] !== status.error.formatted) {
        let ct = rateLimits?.rateLimitType ? Vxt(rateLimits.rateLimitType) : "usage limit";
        I = !q ? vdn : rateLimits ? `${ct[0]?.toUpperCase()}${ct.slice(1)} reached` : status.error.formatted;
        c[43] = rateLimits;
        c[44] = q;
        c[45] = status.error.formatted;
        c[46] = I;
    } else {
        I = c[46];
    }
    let D = I;
    let ut = Math.max(10, columns - 2 - ae(X) - 2);
    let b;
    if (c[47] !== ut || c[48] !== D) {
        b = pt(D, ut);
        c[47] = ut;
        c[48] = D;
        c[49] = b;
    } else {
        b = c[49];
    }
    let Q = b;
    let v;
    if (c[50] !== Q) {
        v = e(n, {
            color: "error",
            children: Q
        });
        c[50] = Q;
        c[51] = v;
    } else {
        v = c[51];
    }
    let T;
    if (c[52] !== X) {
        T = e(n, {
            dimColor: true,
            children: X
        });
        c[52] = X;
        c[53] = T;
    } else {
        T = c[53];
    }
    let A;
    if (c[54] !== v || c[55] !== T) {
        A = r(Y, {
            children: [
                L,
                r(s, {
                    flexShrink: 1,
                    children: [
                        v,
                        T
                    ]
                })
            ]
        });
        c[54] = v;
        c[55] = T;
        c[56] = A;
    } else {
        A = c[56];
    }
    return A;
}
function mn(l) {
    let m = w(2);
    let { mode } = l;
    switch(mode){
        case "tool-input":
        case "tool-use":
        case "responding":
        case "thinking":
            {
                let o;
                if (m[0] === S) {
                    o = e(s, {
                        width: 2,
                        children: e(n, {
                            "aria-hidden": true,
                            dimColor: true,
                            children: te.arrowDown
                        })
                    });
                    m[0] = o;
                } else {
                    o = m[0];
                }
                return o;
            }
        case "requesting":
            {
                let o;
                if (m[1] === S) {
                    o = e(s, {
                        width: 2,
                        children: e(n, {
                            "aria-hidden": true,
                            dimColor: true,
                            children: te.arrowUp
                        })
                    });
                    m[1] = o;
                } else {
                    o = m[1];
                }
                return o;
            }
    }
}
function lr(f) {
    return f.isBriefOnly;
}
function cr(p) {
    return p.viewingAgentTaskId;
}
function mr(L) {
    return L.settings.prefersReducedMotion;
}
const Te = /(\u2026|\.\.\.)$/;
const suffix_1 = "…";
function uYn(l) {
    let b = w(22);
    let { mode, overrideMessage, overrideColor, overrideShimmerColor, isCompacting, compactingHintText, compactingStartTime, turnEffort, turnModel, retryStatus, outputLimitRecovery, defaultVerb } = h0r(l.agentId);
    let I = V(lr);
    let H = V(cr);
    let a_CLAUDE_CODE_BRIEF = a.CLAUDE_CODE_BRIEF;
    let v;
    let T;
    if (b[0] !== defaultVerb || b[1] !== mode || b[2] !== overrideMessage || b[3] !== l.agentId) {
        v = ()=>({
                requestId: l.agentId ?? "main",
                props: {
                    word: defaultVerb,
                    message: overrideMessage,
                    suffix: suffix_1,
                    mode
                }
            });
        T = [
            l.agentId,
            defaultVerb,
            overrideMessage,
            mode
        ];
        b[0] = defaultVerb;
        b[1] = mode;
        b[2] = overrideMessage;
        b[3] = l.agentId;
        b[4] = v;
        b[5] = T;
    } else {
        v = b[4];
        T = b[5];
    }
    let A = bc.useRenderInput("Spinner", v, T);
    let x;
    if (b[6] !== I || b[7] !== H) {
        x = rj() && (a_CLAUDE_CODE_BRIEF || k("tengu_kairos_brief", false)) && I && !H;
        b[6] = I;
        b[7] = H;
        b[8] = x;
    } else {
        x = b[8];
    }
    let ot = x;
    let J;
    if (b[9] !== ot || b[10] !== compactingHintText || b[11] !== compactingStartTime || b[12] !== isCompacting || b[13] !== mode || b[14] !== outputLimitRecovery || b[15] !== overrideColor || b[16] !== overrideShimmerColor || b[17] !== l || b[18] !== retryStatus || b[19] !== turnEffort || b[20] !== turnModel) {
        J = (W)=>{
            if (ot) {
                return e(_n, {
                    mode,
                    overrideMessage: W.props.message
                });
            }
            return e(Cn, {
                ...l,
                mode,
                overrideMessage: W.props.message,
                overrideColor,
                overrideShimmerColor,
                isCompacting,
                compactingHintText,
                compactingStartTime,
                turnEffort,
                turnModel,
                retryStatus,
                outputLimitRecovery,
                defaultVerb: W.props.word,
                suffix: W.props.suffix ?? suffix_1
            });
        };
        b[9] = ot;
        b[10] = compactingHintText;
        b[11] = compactingStartTime;
        b[12] = isCompacting;
        b[13] = mode;
        b[14] = outputLimitRecovery;
        b[15] = overrideColor;
        b[16] = overrideShimmerColor;
        b[17] = l;
        b[18] = retryStatus;
        b[19] = turnEffort;
        b[20] = turnModel;
        b[21] = J;
    } else {
        J = b[21];
    }
    return bc.useRenderHook(A, J);
}
function Cn({ mode, loadingStartTimeRef, totalPausedMsRef, pauseStartTimeRef, responseLengthRef, overrideColor, overrideShimmerColor, overrideMessage, isCompacting, compactingHintText, compactingStartTime, spinnerSuffix, verbose, hasActiveTools = false, turnEffort, turnModel, retryStatus, outputLimitRecovery, defaultVerb, suffix, agentId }) {
    let ot = ql();
    let J = nt();
    let reducedMotion = Sg(ot.prefersReducedMotion) || J;
    let f = V((K)=>K.spinnerTip);
    let p = V((K)=>K.spinnerTipLabel);
    let M = V((K)=>K.briefTranscript);
    let Mt = V((K)=>K.expandedView) === "tasks";
    let U = ke();
    let St = nk(verbose) ? Ife : 0;
    let columns = Math.max(1, U.columns - St);
    let tasks = mie();
    let thinkingStatus = Je(mode);
    let D = agentId === undefined || agentId === Xe();
    let ut = D ? tasks?.find((K)=>K.status !== "pending" && K.status !== "completed") : undefined;
    let Q = D ? ar(tasks) : undefined;
    let [gt] = y(()=>wU(R$t()) ?? "Working");
    let ft = ut ? [
        ut.activeForm,
        ut.subject
    ].map((K)=>K?.replace(/\s+/g, " ").trim()).find(Boolean) : undefined;
    let ht = overrideMessage ?? (ft === undefined ? undefined : Uut(ft, columns)) ?? (defaultVerb || gt);
    let message = suffix === suffix_1 && Te.test(ht) ? ht : ht + suffix;
    P(()=>{
        let K = `spinner-${mode}`;
        _G.startCLIActivity(K);
        return ()=>{
            _G.endCLIActivity(K);
        };
    }, [
        mode
    ]);
    let dt = rE();
    let effortSuffix = pJt(turnModel ?? tt(), dt, turnEffort ?? undefined);
    let kt = pauseStartTimeRef.current !== null ? pauseStartTimeRef.current - loadingStartTimeRef.current - totalPausedMsRef.current : Date.now() - loadingStartTimeRef.current - totalPausedMsRef.current;
    let xt = "claude";
    let wt = "claudeShimmer";
    let messageColor = overrideColor ?? xt;
    let shimmerColor = overrideShimmerColor ?? wt;
    let showToolCallTimer = k("tengu_shining_fractals", false);
    let lt = false;
    let bt = ot.spinnerTipsEnabled !== false;
    let Rt = bt && kt > 1800000;
    let Ct = bt && kt > 30000 && !ce().btwUseCount;
    let _t = lt ? f : Vve() ? f : Rt && !Q ? "Use /clear to start fresh when switching topics and free up context" : Ct && !Q ? "Use /btw to ask a quick side question without interrupting Claude's current work" : f;
    let It = Q ? `Next: ${Q.subject.replace(/\s+/g, " ").trim()}` : f === umn && M ? TWo : _t ? `${_t === f && p ? p : "Tip"}: ${_t}` : undefined;
    let st;
    if (retryStatus?.kind === "retrying") {
        let K = retryStatus.error.status === 529 || retryStatus.error.formatted.toLowerCase().includes("overload");
        let et = retryStatus.attempt >= Math.min(3, retryStatus.maxRetries);
        if (K && et) {
            st = hrr().trim();
        }
    }
    return r(s, {
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
        paddingLeft: St,
        children: [
            e(cn, {
                mode,
                reducedMotion,
                hasActiveTools,
                responseLengthRef,
                message,
                messageColor,
                shimmerColor,
                overrideColor,
                loadingStartTimeRef,
                totalPausedMsRef,
                pauseStartTimeRef,
                spinnerSuffix,
                verbose,
                columns,
                thinkingStatus,
                effortSuffix,
                isCompacting,
                compactingStartTime,
                showToolCallTimer,
                retryStatus,
                outputLimitRecovery,
                agentId
            }),
            D && Mt && tasks && tasks.length > 0 ? e(s, {
                width: "100%",
                flexDirection: "column",
                children: e(Fe, {
                    children: e(fYn, {
                        tasks
                    })
                })
            }) : isCompacting && compactingHintText ? e(s, {
                width: "100%",
                flexDirection: "column",
                children: e(Fe, {
                    children: e(n, {
                        dimColor: true,
                        children: compactingHintText
                    })
                })
            }) : retryStatus ? st ? e(s, {
                width: "100%",
                flexDirection: "column",
                children: e(Fe, {
                    children: e(n, {
                        dimColor: true,
                        children: st
                    })
                })
            }) : null : It ? e(s, {
                width: "100%",
                flexDirection: "column",
                children: e(Fe, {
                    children: e(n, {
                        dimColor: true,
                        wrap: Q ? "truncate-end" : "wrap",
                        children: It
                    })
                })
            }) : null
        ]
    });
}
const vt = 2;
const jt = 3;
const er = 12;
const nr = 1;
function Qt(columns, t, m) {
    let rightText = t > 0 ? `${t} in background` : "";
    let c = columns - vt - jt;
    let g = c - (rightText ? 1 + ae(rightText) : 0);
    if (rightText && g < (m ? er : nr)) {
        return {
            labelBudget: c,
            rightText: ""
        };
    }
    return {
        labelBudget: g,
        rightText
    };
}
function _n({ mode, overrideMessage }) {
    let m = ql();
    let o = nt();
    let c = Sg(m.prefersReducedMotion) || o;
    let [g] = y(()=>wU(R$t()) ?? "Working");
    let h = V((p)=>p.remoteConnectionStatus);
    P(()=>{
        let p = `spinner-${mode}`;
        _G.startCLIActivity(p);
        return ()=>{
            _G.endCLIActivity(p);
        };
    }, [
        mode
    ]);
    let [, C] = ia(c ? null : 120);
    let B = V((p)=>F(Object.values(p.tasks), zg) + p.remoteBackgroundTasks.length);
    let _ = h === "reconnecting" || h === "disconnected";
    let { columns } = ke();
    let { labelBudget, rightText } = Qt(columns, B, _);
    let I = pt(overrideMessage ?? g, labelBudget);
    let H = pt(h === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget);
    let O = _ ? H : I;
    let b = Math.floor(C / 300) % 3;
    let v = c ? Te.test(O) ? "   " : "…  " : ".".repeat(b + 1).padEnd(3);
    let T = Z(()=>ae(I), [
        I
    ]);
    let A = c || _ ? -100 : WLr(Math.floor(C / jLr), T);
    let { before, shimmer, after } = pgt(I, A);
    let W = (_ ? ae(H) : T) + jt;
    let f = Math.max(1, columns - vt - W - ae(rightText));
    return r(s, {
        flexDirection: "row",
        width: "100%",
        marginTop: 1,
        paddingLeft: vt,
        children: [
            _ ? e(n, {
                color: "error",
                children: H + v
            }) : r(Y, {
                children: [
                    before ? e(n, {
                        dimColor: true,
                        children: before
                    }) : null,
                    shimmer ? e(n, {
                        children: shimmer
                    }) : null,
                    after ? e(n, {
                        dimColor: true,
                        children: after
                    }) : null,
                    e(n, {
                        dimColor: true,
                        children: v
                    })
                ]
            }),
            rightText ? r(Y, {
                children: [
                    e(n, {
                        children: " ".repeat(f)
                    }),
                    e(n, {
                        color: "subtle",
                        children: rightText
                    })
                ]
            }) : null
        ]
    });
}
function o0r() {
    let l = V((E)=>E.remoteConnectionStatus);
    let t = V((E)=>F(Object.values(E.tasks), zg) + E.remoteBackgroundTasks.length);
    let { columns } = ke();
    let o = l === "reconnecting" || l === "disconnected";
    let { labelBudget, rightText } = Qt(columns, t, o);
    let h = l === "reconnecting" ? 1 : 0;
    let C = pt(l === "reconnecting" ? "Reconnecting" : "Disconnected", labelBudget + jt - h);
    let B = !o ? "" : l === "reconnecting" && !C.endsWith("…") ? `${C}…` : C;
    if (!B && !rightText) {
        return e(s, {
            height: 2
        });
    }
    let _ = Math.max(1, columns - vt - ae(B) - ae(rightText));
    return e(s, {
        marginTop: 1,
        paddingLeft: vt,
        children: r(n, {
            children: [
                B ? e(n, {
                    color: "error",
                    children: B
                }) : null,
                rightText ? r(Y, {
                    children: [
                        e(n, {
                            children: " ".repeat(_)
                        }),
                        e(n, {
                            color: "subtle",
                            children: rightText
                        })
                    ]
                }) : null
            ]
        })
    });
}
function ui() {
    let c = w(9);
    let l = nt();
    let t = Sg(Wo(mr)) || l;
    let [m, o] = ia(t ? null : 120);
    if (t) {
        let g;
        if (c[0] === S) {
            g = e(n, {
                color: "text",
                children: "●"
            });
            c[0] = g;
        } else {
            g = c[0];
        }
        let h;
        if (c[1] !== m) {
            h = e(s, {
                ref: m,
                "aria-hidden": true,
                flexWrap: "wrap",
                height: 1,
                width: 2,
                children: g
            });
            c[1] = m;
            c[2] = h;
        } else {
            h = c[2];
        }
        return h;
    }
    let g;
    if (c[3] === S) {
        g = TIe();
        c[3] = g;
    } else {
        g = c[3];
    }
    let C = g;
    let B = Math.floor(o / 120) % C.length;
    const h = C[B];
    let _;
    if (c[4] !== h) {
        _ = e(n, {
            color: "text",
            children: h
        });
        c[4] = h;
        c[5] = _;
    } else {
        _ = c[5];
    }
    let E;
    if (c[6] !== m || c[7] !== _) {
        E = e(s, {
            ref: m,
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: _
        });
        c[6] = m;
        c[7] = _;
        c[8] = E;
    } else {
        E = c[8];
    }
    return E;
}
function ZLo({ entries, responseLength, event }) {
    if (event.type === "start") {
        entries.push({
            id: event.id,
            ttftMs: event.ttftMs,
            firstTokenTime: Date.now(),
            lastTokenTime: Date.now(),
            responseLengthBaseline: responseLength,
            endResponseLength: responseLength
        });
        return responseLength;
    }
    let o = event.id != null ? entries.find((c)=>c.id === event.id) : entries.findLast((c)=>c.id == null);
    if (!o) {
        return responseLength;
    }
    if (event.type === "content_block_start") {
        o.thinkingTokenEstimate = 0;
        o.thinkingBlockBaseline = responseLength;
        o.sawEstimatedTokensThisBlock = false;
        return responseLength;
    }
    if (event.type === "thinking_progress") {
        o.sawEstimatedTokensThisBlock = true;
        o.thinkingTokenEstimate = (o.thinkingTokenEstimate ?? 0) + event.estimatedTokensDelta;
        if (o.outputTokens == null && event.id == null) {
            let c = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
            return Math.max(responseLength, c + o.thinkingTokenEstimate * 4);
        }
        return responseLength;
    }
    if (event.type === "thinking_signature") {
        if (event.chars > 0 && o.outputTokens == null) {
            o.lastTokenTime = Date.now();
            if (o.sawEstimatedTokensThisBlock) {
                o.thinkingTokenEstimate = Math.max(o.thinkingTokenEstimate ?? 0, Math.ceil(event.chars / 4));
                let g = o.thinkingBlockBaseline ?? o.responseLengthBaseline;
                let h = Math.max(responseLength, g + o.thinkingTokenEstimate * 4);
                o.endResponseLength = h;
                return h;
            }
            let c = responseLength + event.chars;
            o.endResponseLength = c;
            return c;
        }
        return responseLength;
    }
    o.outputTokens = event.outputTokens;
    o.lastTokenTime = Date.now();
    if (event.id == null) {
        return Math.max(responseLength, o.responseLengthBaseline + event.outputTokens * 4);
    }
    return responseLength;
}
function ar(tasks) {
    if (!tasks) {
        return;
    }
    let t = tasks.filter((o)=>o.status === "pending");
    if (t.length === 0) {
        return;
    }
    let m = new Set(tasks.filter((o)=>o.status !== "completed").map((o)=>o.id));
    return t.find((o)=>!o.blockedBy.some((c)=>m.has(c))) ?? t[0];
}
export { S$t, rdn, uYn, o0r, ui, ZLo };
