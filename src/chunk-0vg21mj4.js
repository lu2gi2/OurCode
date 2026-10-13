import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Oi, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { pqr } from "/$bunfs/root/chunk-0x17099a.js";
import { kMe } from "/$bunfs/root/chunk-pyer8nyr.js";
import { lae } from "/$bunfs/root/chunk-nc91yayz.js";
import { createHash } from "crypto";
const E = "anthropic.ccr.client_event.v1";
const jcs_lib = "claude-code-jcs@1";
function _(rest) {
    let n = [];
    let o = [];
    let i = (e)=>{
        if (e === null || typeof e === "boolean" || typeof e === "string") {
            n.push(Oi(e));
        } else if (typeof e === "number") {
            if (!Number.isFinite(e)) {
                throw Error("canonicalJson: non-finite number");
            }
            n.push(String(e));
        } else if (Array.isArray(e)) {
            n.push("[");
            o.push({
                values: Array.from(e, (s)=>{
                    if (s === undefined) {
                        return null;
                    }
                    return s;
                }),
                next: 0
            });
        } else if (typeof e === "object") {
            let s = e;
            let names = Object.keys(s).filter((d)=>s[d] !== undefined).sort();
            n.push("{");
            o.push({
                names,
                values: names.map((d)=>s[d]),
                next: 0
            });
        } else {
            throw Error("canonicalJson: a value with no JSON form");
        }
    };
    i(rest);
    while(o.length > 0){
        let e = o.at(-1);
        if (e.next === e.values.length) {
            n.push(e.names ? "}" : "]");
            o.pop();
            continue;
        }
        if (e.next > 0) {
            n.push(",");
        }
        if (e.names) {
            n.push(`${Oi(e.names[e.next])}:`);
        }
        let s = e.values[e.next];
        e.next += 1;
        i(s);
    }
    return n.join("");
}
function h(r, { uuid, type, ...rest }) {
    let s = createHash("sha256").update(_(rest), "utf8").digest();
    return Buffer.concat([
        Buffer.from(E, "utf8"),
        f,
        Buffer.from(r, "utf8"),
        f,
        Buffer.from(uuid, "utf8"),
        f,
        Buffer.from(type, "utf8"),
        f,
        s
    ]);
}
var f = Buffer.from([
    0
]);
function S(rowPk, key) {
    let kid = kMe + rowPk;
    let i = false;
    return {
        noteSignFailure: ()=>{
            if (i) {
                return false;
            }
            i = true;
            return true;
        },
        sign: async (e, s)=>({
                kid,
                signature: (await key.sign(h(e, s))).toString("base64"),
                jcs_lib
            })
    };
}
async function C({ accountUuid, boundDeviceUuid, credentials, held }) {
    return y(await jzt(accountUuid, credentials, v(held?.rowPk, boundDeviceUuid) ? held : undefined), boundDeviceUuid);
}
async function Xjs(r, n) {
    let o = await lae(n).catch(()=>{});
    if (o?.status !== "resolved") {
        return;
    }
    let i = await jzt(o.accountUuid, n);
    let e;
    let s = 0;
    let c = 0;
    let d = (a, u)=>{
        let p = ++s;
        a.then((w)=>{
            if (p > c) {
                c = p;
                e = u(w);
            }
        }, ()=>{});
    };
    d(r, (a)=>{
        if (a === undefined) {
            return undefined;
        }
        return y(i, a);
    });
    if (i.status === "loaded") {
        return {
            sign: async (a, u)=>e?.sign(a, u),
            noteSignFailure: ()=>e?.noteSignFailure() ?? false,
            rebind: (a)=>d(a, (u)=>{
                    if (u !== undefined && v(i.rowPk, u)) {
                        return e ?? y(i, u);
                    }
                })
        };
    }
}
async function W7n(boundDeviceUuid, credentials, held) {
    let i = await lae(credentials).catch(()=>{});
    if (i?.status === "resolved") {
        return C({
            accountUuid: i.accountUuid,
            boundDeviceUuid,
            credentials,
            held
        });
    }
}
async function lqr(r, n) {
    let o = await lae(n).catch(()=>{});
    if (o?.status !== "resolved") {
        return;
    }
    let i = await jzt(o.accountUuid, n);
    if (i.status !== "loaded" || !v(i.rowPk, r)) {
        return;
    }
    g("client_event_signer");
    return S(i.rowPk, i.key);
}
async function jzt(r, n, o) {
    if (o?.accountUuid === r) {
        return {
            status: "loaded",
            rowPk: o.rowPk,
            key: o.key
        };
    }
    try {
        let i = await pqr(r, n);
        if (i === undefined) {
            return {
                status: "no_device_key"
            };
        }
        return {
            status: "loaded",
            rowPk: i.rowPk,
            key: i.key
        };
    } catch (error) {
        t(`[clientEventSigner] could not load the device key: ${l(error)}`);
        return {
            status: "load_failed"
        };
    }
}
function v(r, n) {
    return r === n.toLowerCase();
}
function y(r, n) {
    switch(r.status){
        case "no_device_key":
        case "load_failed":
            m("client_event_signer", r.status);
            return;
        case "loaded":
            if (!v(r.rowPk, n)) {
                m("client_event_signer", "bound_elsewhere");
                return;
            }
            g("client_event_signer");
            return S(r.rowPk, r.key);
    }
}
export { Xjs, W7n, lqr, jzt };
