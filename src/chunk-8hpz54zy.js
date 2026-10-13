import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-9fa34ggx.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-55x53sfe.js";
import "/$bunfs/root/chunk-xbsy70c7.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { gr } from "/$bunfs/root/chunk-w8qk09ve.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { closeSync, fstatSync, openSync, readSync, writeSync } from "fs";
const Y = "[This Claude apps gateway is in load-test mode. This is a canned reply and your request was not sent to a model. If you did not expect this, tell your gateway administrator.] ";
const model = "load-test";
const ce = 3;
const X = "load test   ";
const ue = 20;
const C = 65536;
const de = 32;
const fe = 10000;
const usage = {
    input_tokens: 0,
    output_tokens: 0
};
function J(reply_tokens) {
    return Math.max(1, Math.ceil(reply_tokens / ce));
}
function pe(reply_tokens) {
    let length = J(reply_tokens);
    return [
        {
            type: "message_start",
            message: {
                id: "msg_loadtest",
                type: "message",
                role: "assistant",
                model,
                content: [],
                stop_reason: null,
                stop_sequence: null,
                usage
            }
        },
        {
            type: "content_block_start",
            index: 0,
            content_block: {
                type: "text",
                text: ""
            }
        },
        ...Array.from({
            length
        }, (n, o)=>({
                type: "content_block_delta",
                index: 0,
                delta: {
                    type: "text_delta",
                    text: o === 0 ? Y : X
                }
            })),
        {
            type: "content_block_stop",
            index: 0
        },
        {
            type: "message_delta",
            delta: {
                stop_reason: "end_turn",
                stop_sequence: null
            },
            usage: {
                output_tokens: 0
            }
        },
        {
            type: "message_stop"
        }
    ];
}
function he(t) {
    let r = Buffer.concat([
        [
            ":message-type",
            "event"
        ],
        [
            ":event-type",
            "chunk"
        ],
        [
            ":content-type",
            "application/json"
        ]
    ].map(([o, c])=>Buffer.concat([
            Buffer.from([
                o.length
            ]),
            Buffer.from(o),
            Buffer.from([
                7,
                c.length >> 8,
                c.length & 255
            ]),
            Buffer.from(c)
        ])));
    let n = Buffer.alloc(12 + r.length + t.length + 4);
    n.writeUInt32BE(n.length, 0);
    n.writeUInt32BE(r.length, 4);
    n.writeUInt32BE(Bun.hash.crc32(n.subarray(0, 8)), 8);
    r.copy(n, 12);
    n.set(t, 12 + r.length);
    n.writeUInt32BE(Bun.hash.crc32(n.subarray(0, n.length - 4)), n.length - 4);
    return n;
}
export async function startLoadTest(t, r) {
    if ((await r`SELECT 1 FROM spend WHERE cents > 0 LIMIT 1`).length > 0) {
        throw Error("load_test_mode is on, but the database at store.postgres_url already holds real spend (a spend row above 0 cents). A load test writes made-up developers into it, so it must not share a database with real developers. Point store.postgres_url at its own empty database.");
    }
    return me(t);
}
function m(t, r, n = `${r}s`) {
    return `${t} ${t === 1 ? r : n}`;
}
function me(t, r = fe) {
    let n = pe(t.reply_tokens);
    let o = t.reply_seconds * 1000;
    let c = ye();
    let s = n.map((e)=>he(Buffer.from(_({
            bytes: Buffer.from(_(e)).toString("base64")
        }))));
    let i = n.map((e)=>Buffer.from(`event: ${e.type}
data: ${_(e)}

`));
    let p = _({
        id: "msg_loadtest",
        type: "message",
        role: "assistant",
        model,
        content: [
            {
                type: "text",
                text: Y + X.repeat(Math.max(0, J(t.reply_tokens) - 1))
            }
        ],
        stop_reason: "end_turn",
        stop_sequence: null,
        usage
    });
    let S = Buffer.from(p);
    let d = new Set;
    let y;
    let h = false;
    let E = 0;
    let k = 0;
    let w = 0;
    let T = 0;
    let L = new Set;
    let v = 0;
    let M = 0;
    let A = 0;
    let x = 0;
    let U = 0;
    let B = 0;
    let O = {
        since: 0,
        lastBusyAt: 0,
        arrivals: 0,
        bodies: 0,
        finished: 0,
        hungUp: 0,
        checkFaults: 0,
        writeFaults: 0,
        peakArrivalsPerS: 0,
        peakOpen: 0,
        worstLateMs: 0
    };
    let u = {
        ...O
    };
    function R(e) {
        if (h) {
            return;
        }
        if (!y) {
            E = e;
            y = setInterval(se, ue);
        }
        if (u.since === 0) {
            u.since = e;
        }
    }
    function F(e) {
        if (h) {
            return;
        }
        R(performance.now());
        v++;
        U += e;
        B = Math.max(B, e);
    }
    function I() {
        if (!h) {
            M++;
        }
    }
    function arrived() {
        if (h) {
            return;
        }
        R(performance.now());
        k++;
    }
    function bodyRead(e, l) {
        if (h) {
            return;
        }
        w++;
        T += e;
        L.add(l);
    }
    function spendFault(e) {
        if (h) {
            return;
        }
        R(performance.now());
        if (e === "check") {
            A++;
        } else {
            x++;
        }
    }
    function P(e, l) {
        return `${m(e, "spend check")} failed, ${m(l, "spend write")} failed`;
    }
    function q(e) {
        let l = Math.max(1, (e - E) / 1000);
        let f = k + v + M + A + x + d.size > 0;
        if (f) {
            let g = w > 0 ? T / w / 1000 : 0;
            gr("info", `load test, last ${Math.round(l)} s: ${(k / l).toFixed(1)} requests/s arrived` + (w > 0 ? `, ${(w / l).toFixed(1)}/s with their body read (mean body ${g < 10 ? g.toFixed(1) : Math.round(g)} KB, from ${m(L.size, "developer")})` : "") + `, ${(v / l).toFixed(1)} replies/s finished, ${m(d.size, "reply", "replies")} open now, ${m(M, "client")} hung up early, ${P(A, x)}` + (v > 0 ? `; replies ended ${Math.round(U / v)} ms past reply_seconds on average (worst ${Math.round(B)} ms)` : ""));
            u.lastBusyAt = e;
        }
        u.arrivals += k;
        u.bodies += w;
        u.finished += v;
        u.hungUp += M;
        u.checkFaults += A;
        u.writeFaults += x;
        u.peakArrivalsPerS = Math.max(u.peakArrivalsPerS, k / l);
        u.worstLateMs = Math.max(u.worstLateMs, B);
        E = e;
        k = 0;
        w = 0;
        T = 0;
        L.clear();
        v = 0;
        M = 0;
        A = 0;
        x = 0;
        U = 0;
        B = 0;
        return f;
    }
    function z() {
        if (h) {
            return;
        }
        let e = u;
        if (e.arrivals + e.finished + e.hungUp + e.checkFaults + e.writeFaults > 0) {
            let l = Math.max(0, e.arrivals - e.bodies);
            gr("info", `load test summary, over ${Math.max(1, Math.round((e.lastBusyAt - e.since) / 1000))} s: ${m(e.arrivals, "request")} arrived${l > 0 ? ` (${l} refused before their body was read)` : ""}, ${m(e.finished, "reply", "replies")} finished, ${m(e.hungUp, "client")} hung up early, ${P(e.checkFaults, e.writeFaults)}. Peaks: ${e.peakArrivalsPerS.toFixed(1)} requests/s in the busiest window, ${m(e.peakOpen, "reply", "replies")} open at once.` + (d.size > 0 ? ` ${m(d.size, "reply", "replies")} still open.` : "") + (e.finished > 0 ? ` The worst reply ended ${Math.round(e.worstLateMs)} ms past reply_seconds.` : ""));
        }
        u = {
            ...O
        };
    }
    function close() {
        if (h) {
            return;
        }
        q(performance.now());
        z();
        h = true;
        clearInterval(y);
        y = undefined;
    }
    function se() {
        let e = performance.now();
        if (d.size === 0) {
            y?.unref?.();
        }
        if (e - E >= r) {
            if (!q(e)) {
                z();
                clearInterval(y);
                y = undefined;
            }
        }
    }
    function N(frames, l, f) {
        let headers = {
            "content-type": l
        };
        if (o === 0) {
            let b = Buffer.concat(frames);
            c.receive(b);
            F(0);
            return new Response(b, {
                headers
            });
        }
        let a;
        let W = ()=>{
            if (!d.has(a)) {
                return;
            }
            let b = Math.max(a.sent + 1, Math.min(frames.length, Math.floor((performance.now() - a.startedAt) / o * frames.length)));
            try {
                while(a.sent < b){
                    let K = frames[a.sent++];
                    a.ctrl.enqueue(K);
                    c.receive(K);
                }
            } catch  {
                if (d.delete(a)) {
                    I();
                }
                return;
            }
            if (a.sent === frames.length) {
                d.delete(a);
                try {
                    a.ctrl.close();
                } catch  {}
                F(Math.max(0, performance.now() - a.startedAt - o));
                return;
            }
            let ae = a.startedAt + (a.sent + 1) * o / frames.length;
            a.timer = setTimeout(W, Math.ceil(Math.max(0, ae - performance.now())));
        };
        let oe = new ReadableStream({
            start (ctrl) {
                a = {
                    ctrl,
                    frames,
                    sent: 0,
                    startedAt: performance.now()
                };
                d.add(a);
                if (!h) {
                    u.peakOpen = Math.max(u.peakOpen, d.size);
                }
                R(a.startedAt);
                y?.ref?.();
                a.timer = setTimeout(W, Math.ceil(o / frames.length));
                f?.addEventListener("abort", ()=>{
                    if (d.delete(a)) {
                        clearTimeout(a.timer);
                        I();
                        ctrl.error(f.reason);
                    }
                }, {
                    once: true
                });
            },
            cancel () {
                if (d.delete(a)) {
                    clearTimeout(a.timer);
                    I();
                }
            }
        });
        return new Response(oe, {
            headers
        });
    }
    return {
        fetch: async (e, l)=>{
            l?.signal?.throwIfAborted();
            c.send(l?.body);
            let pathname = new URL(e instanceof Request ? e.url : String(e)).pathname;
            if (pathname.endsWith("/count_tokens") || pathname.includes("count-tokens")) {
                return Response.json({
                    input_tokens: 0
                });
            }
            if (pathname.endsWith("/invoke-with-response-stream")) {
                return N(s, "application/vnd.amazon.eventstream", l?.signal);
            }
            let g = pathname.endsWith("/invoke") || pathname.endsWith(":rawPredict");
            if (pathname.endsWith(":streamRawPredict") || !g && we(l?.body)) {
                return N(i, "text/event-stream", l?.signal);
            }
            c.receive(S);
            F(0);
            return new Response(p, {
                headers: {
                    "content-type": "application/json"
                }
            });
        },
        arrived,
        bodyRead,
        spendFault,
        close,
        socketCostSimulated: c.real
    };
}
function ye() {
    let t = -1;
    let r = -1;
    try {
        t = openSync("/dev/null", "r+");
        r = openSync("/dev/zero", "r");
        if (![
            fstatSync(t),
            fstatSync(r)
        ].every((i)=>i.isCharacterDevice())) {
            throw Error("not a character device");
        }
    } catch  {
        for (let s of [
            t,
            r
        ]){
            if (s >= 0) {
                closeSync(s);
            }
        }
        gr("warn", "load_test_mode: this host has no /dev/null or /dev/zero, so CPU per replica will read about a quarter to a third lower than in production. The load test still runs.");
        return {
            real: false,
            send () {},
            receive () {}
        };
    }
    let n = new Uint8Array(C);
    let o = false;
    let c = (s, i, p)=>{
        if (o) {
            return;
        }
        try {
            writeSync(t, s, i, p);
            readSync(r, n, 0, Math.min(p, n.length), null);
        } catch (error) {
            o = true;
            gr("warn", `load_test_mode: simulating a connection's kernel work failed (${error instanceof Error ? error.message : String(error)}), so it stops here and CPU per replica will read lower than in production. The load test still runs.`);
        }
    };
    return {
        real: true,
        send (s) {
            let i = typeof s === "string" ? Buffer.from(s) : s instanceof ArrayBuffer ? new Uint8Array(s) : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : null;
            if (!i) {
                return;
            }
            for(let p = 0; p < i.length; p += C){
                c(i, p, Math.min(C, i.length - p));
            }
        },
        receive (s) {
            c(s, 0, s.length);
            for(let i = 0; i < de && !o; i++){
                try {
                    writeSync(t, s, 0, 1);
                } catch  {
                    o = true;
                }
            }
        }
    };
}
const V = 34;
const ge = 92;
function Q(t, r, n) {
    let o = 0;
    let c = false;
    for(let s = r; s < n; s++){
        let i = t.charCodeAt(s);
        if (c) {
            if (i === ge) {
                s++;
            } else if (i === V) {
                c = false;
            }
        } else if (i === V) {
            c = true;
        } else if (i === 123 || i === 91) {
            o++;
        } else if (i === 125 || i === 93) {
            o--;
        }
    }
    return o;
}
function we(t) {
    let r = typeof t === "string" ? t : ArrayBuffer.isView(t) ? Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("latin1") : t instanceof ArrayBuffer ? Buffer.from(t).toString("latin1") : "";
    for (let n of r.matchAll(/"stream"\s*:\s*true/g)){
        let o = n.index + n[0].length;
        if (n.index < r.length - o ? Q(r, 0, n.index) === 1 : Q(r, o, r.length) === -1) {
            return true;
        }
    }
    return false;
}
