import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { rst } from "/$bunfs/root/chunk-vmjcjnmq.js";
import { w_e, mDn, wst } from "/$bunfs/root/chunk-bcy16nn4.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
const T = new q(()=>({}));
function R() {
    return T.of(B().host);
}
function Mce() {
    return R().door !== undefined;
}
const E = 1024;
const I = 32;
const Kmr = 1024;
const D = 256;
const O = /^[-\d"]/;
const U = 65536;
const j = 128;
const k = 16;
const x = 1024;
function x8t() {
    let { door } = R();
    if (door === undefined) {
        return;
    }
    let c = new Map;
    let f = new Map;
    let p = (e)=>{
        if (typeof e === "string" && e.length <= I && !c.has(e) && !f.has(e)) {
            return Number(e);
        }
        return e;
    };
    let a = (e)=>{
        c.delete(e);
        f.delete(e);
    };
    let l = (url, s, i = {
        any: false,
        lastMayBeShortError: false
    })=>({
            read (n) {
                let n_length = n.length;
                i.lastMayBeShortError = s && !i.any && n_length <= x;
                i.any = true;
                let most = door.mostMembers(undefined, url);
                if (i.lastMayBeShortError) {
                    most = Math.max(most, k);
                }
                let r = !mDn(n, Kmr);
                let d = r ? undefined : w_e(n, most, Math.min(most, N));
                let m;
                if (d === undefined) {
                    let g = wst(n, v);
                    let h = g?.has("method") ? undefined : g?.get("id");
                    let id = h !== undefined && h.length <= D && O.test(h) ? S(h) : undefined;
                    let w = p(id);
                    let asked = c.get(w) ?? f.get(w);
                    if (asked !== undefined) {
                        m = {
                            id,
                            asked
                        };
                        most = door.mostMembers(asked, url);
                        d = r ? undefined : w_e(n, most);
                    }
                }
                let sent = d === undefined ? undefined : S(n);
                if (d !== undefined && sent !== undefined) {
                    return {
                        sent,
                        size: {
                            ...d,
                            length: n_length
                        }
                    };
                }
                if (d !== undefined && m === undefined) {
                    let size = {
                        ...d,
                        length: n_length
                    };
                    if (i.lastMayBeShortError && size.members <= k) {
                        return {
                            sent: undefined,
                            size
                        };
                    }
                    door.chargeUnasked(url, size.members);
                    if (door.judge(n, undefined, url, size) === undefined) {
                        return {
                            standIn: undefined
                        };
                    }
                    return {
                        sent: undefined,
                        size
                    };
                }
                a(p(m?.id));
                return {
                    standIn: door.standInForUnparsed(m, url, r ? {
                        reason: "nesting"
                    } : d === undefined ? {
                        reason: "members",
                        most
                    } : {
                        reason: "not_json"
                    })
                };
            },
            chargeUnasked ({ members }) {
                door.chargeUnasked(url, members);
            },
            judge (n, o, t) {
                let r = L(n) && n.method === undefined ? p(n.id) : undefined;
                let d = c.get(r);
                let m = d ?? f.get(r);
                if (i.lastMayBeShortError && o.members <= k && !t && m === undefined && L(n) && n.method === undefined && (n.result === undefined || n.result === null)) {
                    return n;
                }
                if (d !== undefined) {
                    c.delete(r);
                    if (f.size >= E) {
                        f.delete(f.keys().next().value);
                    }
                    f.set(r, {
                        ...d,
                        answeredBefore: true
                    });
                }
                if ((m === undefined || m.answeredBefore) && !t) {
                    door.chargeUnasked(url, o.members);
                }
                let M = door.judge(n, m, url, o);
                if (M !== n) {
                    a(r);
                }
                return M;
            }
        });
    return {
        noteRequests (e) {
            if (typeof e !== "string") {
                return;
            }
            let s = S(e);
            let i = Array.isArray(s) ? s : [
                s
            ];
            for (let n of i){
                if (!L(n)) {
                    continue;
                }
                let { id, method, params } = n;
                if (id !== undefined && typeof method === "string") {
                    if (c.size >= E) {
                        c.delete(c.keys().next().value);
                    }
                    let tool = method === "tools/call" && L(params) ? params.name : undefined;
                    c.set(id, {
                        method,
                        ...typeof tool === "string" && {
                            tool
                        }
                    });
                }
            }
        },
        judging ({ url, isGet, ok, contentType }) {
            let o = l(url, !ok && !isGet);
            let t = (contentType ?? "").toLowerCase();
            if (t.includes("text/event-stream") || isGet && ok) {
                return {
                    through: F(o),
                    contentType: "text/event-stream"
                };
            }
            return {
                through: z(o),
                contentType: t.includes("application/json") ? "application/json" : undefined
            };
        }
    };
}
var v = new Set([
    "id",
    "method"
]);
var N = 8;
function b(u) {
    return u.replace(/^\uFEFF+/, "");
}
function S(u) {
    try {
        return X(u);
    } catch  {
        return;
    }
}
function z({ read, chargeUnasked, judge }) {
    let p = [];
    return new TransformStream({
        transform (a) {
            p.push(a);
        },
        flush (a) {
            let l = read(b(new TextDecoder().decode(Buffer.concat(p))));
            if ("standIn" in l) {
                a.enqueue(new TextEncoder().encode(_(l.standIn ?? null)));
                return;
            }
            let { sent, size } = l;
            if (typeof sent !== "object" || sent === null) {
                for (let o of p){
                    a.enqueue(o);
                }
                return;
            }
            if (Array.isArray(sent)) {
                chargeUnasked(size);
            }
            if (Array.isArray(sent) && sent.length > j) {
                a.enqueue(new TextEncoder().encode("null"));
                return;
            }
            let i;
            let n;
            if (Array.isArray(sent)) {
                let o = sent;
                let t = o.map((r)=>judge(r, size, true)).filter((r)=>r !== undefined);
                i = t;
                n = t.length === o.length && o.every((r, d)=>r === t[d]);
            } else {
                i = judge(sent, size, false);
                n = i === sent;
            }
            if (n) {
                for (let o of p){
                    a.enqueue(o);
                }
                return;
            }
            a.enqueue(new TextEncoder().encode(_(i ?? null)));
        }
    });
}
function F({ read, judge }) {
    let f = new TextDecoder;
    let p = new TextEncoder;
    let a = "";
    let l = rst({
        onRetry (s) {
            a += `retry: ${s}

`;
        },
        onEvent ({ id, event, data }) {
            let o = event;
            let t = data;
            if (data !== "" && (o === undefined || o === "message")) {
                let r = read(b(data));
                let d = "standIn" in r ? undefined : r.sent;
                let m = "standIn" in r ? r.standIn : d === undefined ? undefined : judge(d, r.size, false);
                if (!("standIn" in r) && d === undefined) {
                    t = "!";
                } else if (m === undefined) {
                    o = "dropped";
                    t = "";
                } else if (m !== d) {
                    t = _(m);
                } else {
                    t = data.replaceAll(`
`, " ");
                }
            } else if (data.length > U) {
                t = "";
            }
            a += (o === undefined ? "" : `event: ${o}
`) + (id === undefined ? "" : `id: ${id}
`) + t.split(`
`).map((r)=>`data: ${r}
`).join("") + `
`;
        }
    });
    let e = (s)=>{
        if (a !== "") {
            s.enqueue(p.encode(a));
            a = "";
        }
    };
    return new TransformStream({
        transform (s, i) {
            l.feed(f.decode(s, {
                stream: true
            }));
            e(i);
        },
        flush (s) {
            l.feed(f.decode());
            e(s);
        }
    });
}
export { Mce, Kmr, x8t };
