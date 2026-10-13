import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { fN, BT, dOt, fz, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { wP, Ch, tse } from "/$bunfs/root/chunk-6g4165br.js";
import { Qr } from "/$bunfs/root/chunk-tw5t5h13.js";
import { L7, IAs } from "/$bunfs/root/chunk-sk5bs87n.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { kg, M8t, _Q as listLive, S5 } from "/$bunfs/root/chunk-xyr83dxa.js";
const Y = 16;
const E = 64;
function b(e, n) {
    if (e.startedAt !== n.startedAt) {
        return e.startedAt < n.startedAt;
    }
    let s = e.procStart ?? "";
    let i = n.procStart ?? "";
    if (s !== i) {
        return s < i;
    }
    return e.pid < n.pid;
}
function L(e, live, pid) {
    return live.filter((i)=>i.pid !== pid && i.name !== undefined && i.procStart !== undefined && Qr(i.name) === e);
}
function D(live) {
    return new Set(live.flatMap((n)=>{
        if (n.name === undefined) {
            return [];
        }
        return [
            Qr(n.name)
        ];
    }));
}
function O(e, n, s = L7) {
    let i = (r)=>`${ne(e, wP - r.length - 1)}-${r}`;
    for(let r = 0; r < Y; r++){
        let o = i(s());
        if (!n.has(Qr(o))) {
            return o;
        }
    }
    for(let r = 2;; r++){
        let o = i(`${s()}-${r}`);
        if (!n.has(Qr(o))) {
            return o;
        }
    }
}
function F(e) {
    let { desiredName, self, live, moment, slug } = e;
    let d = e.suffixBase ?? desiredName;
    let p = Qr(desiredName);
    if (!p) {
        return {
            kind: "keep"
        };
    }
    let c = L(p, live, self.pid);
    let holders = moment === "rename" ? c : moment === "startup" ? c.filter((u)=>b(u, self)) : c.filter((u)=>b({
            ...u,
            startedAt: u.nameSince ?? u.startedAt
        }, {
            ...self,
            startedAt: self.nameSince ?? self.startedAt
        }));
    if (holders.length === 0) {
        return {
            kind: "keep"
        };
    }
    return {
        kind: "yield",
        newName: O(d, D(live), slug),
        holders
    };
}
class A {
    correspondents = new Map;
    senderMode = null;
    userTypedName = undefined;
    hasAdopter = false;
    lastYield = undefined;
    yielded = Oe();
    pendingYield = undefined;
    noteCorrespondent(e, pid, procStart) {
        if (!e || Ch(e).scheme !== "uds") {
            return;
        }
        this.correspondents.delete(e);
        this.correspondents.set(e, {
            pid,
            procStart
        });
        if (this.correspondents.size > E) {
            let i = this.correspondents.keys().next().value;
            if (i !== undefined) {
                this.correspondents.delete(i);
            }
        }
    }
    announceYield(e, n) {
        this.pendingYield = [
            e,
            n
        ];
        this.yielded.emit(e, n);
    }
    reset() {
        this.correspondents.clear();
        this.lastYield = undefined;
        this.yielded.clear();
        this.pendingYield = undefined;
        this.senderMode = null;
        this.userTypedName = undefined;
        this.hasAdopter = false;
    }
}
const U = new q(()=>new A);
function wE() {
    return U.of(B().host);
}
function Aro() {
    let e = BT();
    if (e !== undefined && (e.source === "user" || e.source === "collision") && wE().userTypedName === e.name) {
        return e.name;
    }
}
function Cro(e, n, s) {
    wE().noteCorrespondent(e, n, s);
}
function Apr() {
    let e = wE();
    let e_pendingYield = e.pendingYield;
    e.pendingYield = undefined;
    return e_pendingYield;
}
const x = {
    whenRegistered: dOt,
    listLive
};
function N() {
    return k("tengu_session_name_uniqueness", true);
}
async function z3t(e, moment, s = x, suffixBase = e) {
    if (!N()) {
        return {
            name: e,
            yielded: false
        };
    }
    suffixBase = C(suffixBase) ?? suffixBase;
    if (!await s.whenRegistered()) {
        return {
            name: e,
            yielded: false
        };
    }
    try {
        let live = await s.listLive();
        let self = live.find((a)=>a.pid === process.pid);
        if (!self) {
            return {
                name: e,
                yielded: false
            };
        }
        let d = F({
            desiredName: e,
            self,
            live,
            moment,
            slug: s.slug,
            suffixBase
        });
        if (d.kind === "keep") {
            return {
                name: e,
                yielded: false
            };
        }
        let p = z(e, self);
        let c = ci(p !== undefined && Qr(p) !== Qr(e) ? p : d.newName) || d.newName;
        t(`[session-name] "${e}" is held by live pid ${d.holders[0]?.pid}; this session takes "${c}"`, {
            level: "info"
        });
        g("session_name_collision");
        wE().lastYield = {
            base: Qr(suffixBase),
            name: c
        };
        return {
            name: c,
            yielded: true
        };
    } catch (error) {
        t(`[session-name] uniqueness check failed, keeping "${e}": ${l(error)}`, {
            level: "warn"
        });
        m("session_name_collision", "check_failed");
        return {
            name: e,
            yielded: false
        };
    }
}
function z(e, self) {
    let s = Vqe(e, self.name);
    if (s !== undefined) {
        return s;
    }
    let n_name = self.name;
    let r = n_name === undefined ? undefined : T(n_name);
    if (n_name === undefined || r === undefined) {
        return;
    }
    let o = C(e) ?? e;
    let d = ne(o, wP - r.suffix.length - 1);
    if (r.base.toLowerCase() === d.toLowerCase()) {
        return n_name;
    }
}
function T(e) {
    let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
    if (!n || !IAs(n[1].toLowerCase())) {
        return;
    }
    let base = e.slice(0, e.length - n[0].length);
    if (base.length > 0) {
        return {
            base,
            suffix: n[0].slice(1)
        };
    }
}
function Vqe(e, n) {
    if (!N()) {
        return;
    }
    let lastYield = wE().lastYield;
    let i = C(e) ?? e;
    if (lastYield !== undefined && n !== undefined && Qr(lastYield.name) === Qr(n) && lastYield.base === Qr(i)) {
        return n;
    }
}
function w(e) {
    let n = BT();
    return n !== undefined && Qr(n.name) === Qr(e);
}
function C(e) {
    return T(e)?.base;
}
const I = 3000;
function R(e) {
    setTimeout(e, I).unref();
}
async function Rro(e) {
    let { sessionNameArg, interactive, writeName, onRenamed, deps } = e;
    let d = e.scheduleRecheck ?? R;
    if (sessionNameArg && interactive) {
        wE().userTypedName = sessionNameArg;
    }
    if (sessionNameArg) {
        await writeName(sessionNameArg, e.sessionNameArgSource ?? "user");
    }
    let p = BT();
    if (!interactive || !p || p.source === "derived") {
        return;
    }
    let c = async (a, u, S = a)=>{
        if (u && !w(a)) {
            return;
        }
        let f = await z3t(a, u ? "recheck" : "startup", deps, S);
        if (!w(a)) {
            return;
        }
        if (!f.yielded) {
            if (!u) {
                d(()=>void c(a, true));
            }
            return;
        }
        if (wE().userTypedName === a) {
            wE().userTypedName = f.name;
        }
        await writeName(f.name, "collision");
        onRenamed?.(f.name, a);
        wE().announceYield(f.name, a);
        if (!u) {
            d(()=>void c(f.name, true, a));
        }
    };
    await c(p.name, false);
}
function lOn(e) {
    let { name, onYield, deps } = e;
    let r = e.suffixBase ?? name;
    (e.scheduleRecheck ?? R)(()=>{
        (async ()=>{
            if (!w(name)) {
                return;
            }
            let d = await z3t(name, "recheck", deps, r);
            if (!d.yielded || !w(name)) {
                return;
            }
            if (wE().userTypedName === name) {
                wE().userTypedName = d.name;
            }
            await onYield(d.name, name);
        })();
    });
}
function Cpr(e, n, s) {
    let i = BT();
    if (i === undefined || i.source === "derived" || i.source === "auto") {
        return;
    }
    if (i.source === "collision" && Vqe(e?.name ?? n, i.name) !== undefined) {
        return;
    }
    let r = Qr(i.name);
    if (e !== undefined && r === Qr(e.name) || r === Qr(n) || r === Qr(s)) {
        return;
    }
    return i;
}
async function $ye(e, n, s = {}) {
    let deps = s.deps ?? x;
    let r = e ? ci(e) : "";
    if (!r) {
        return;
    }
    let o = fN();
    let o_adoptions = o.adoptions;
    let p = ++o.restores;
    let c = ()=>o.adoptions === o_adoptions && (!s.yieldToLaterRestore || o.restores === p);
    if (!await deps.whenRegistered() || !c()) {
        return;
    }
    if (s.autoOnly) {
        await fz(r, n, "auto");
        return;
    }
    let a = BT();
    if (a !== undefined && a.source !== "auto" && a.source !== "derived" && Qr(a.name) === Qr(r)) {
        return;
    }
    let u = await z3t(r, "rename", deps);
    if (!c() || Cpr(a, r, u.name)) {
        return;
    }
    let onYield = async (f, h)=>{
        await fz(f, n, "collision");
        wE().announceYield(f, h);
    };
    if (!u.yielded) {
        await fz(r, n, s.source);
        lOn({
            name: r,
            deps,
            onYield
        });
        return;
    }
    await fz(u.name, n, "collision");
    if (wE().userTypedName === r) {
        wE().userTypedName = u.name;
    }
    lOn({
        name: u.name,
        suffixBase: r,
        deps,
        onYield
    });
    if (u.name === a?.name) {
        return;
    }
    wE().announceYield(u.name, r);
}
async function xro(e, n, s, i, r = M8t, o = x.listLive) {
    if (!N() || !xi() || wE().correspondents.size === 0) {
        return;
    }
    let d = S5();
    let [p, c, a] = [
        e,
        n,
        s
    ].map(ci);
    let u = `This session was renamed from "${p}" to "${c}" ("${a}" is held by another live session on this machine). Address this one as "${c}" from now on.`;
    let S;
    try {
        S = new Map((await o(i)).map((f)=>[
                f.pid,
                f.sock
            ]));
    } catch (error) {
        t(`[session-name] rename notice skipped: registry unreadable (${v(error) ?? l(error)})`);
        return;
    }
    await Promise.all([
        ...wE().correspondents
    ].map(async ([f, { pid, procStart }])=>{
        let { scheme, target } = Ch(f);
        if (scheme !== "uds" || !target || d !== undefined && tse(target, d) || S.get(pid) !== target) {
            return;
        }
        try {
            await r(target, u, i, c, undefined, undefined, wE().senderMode?.(), {
                trackReceipts: false,
                expectPeerPid: pid,
                ...procStart !== undefined && {
                    expectPeerProcStart: procStart
                }
            });
        } catch (error) {
            t(`[session-name] rename notice to ${kg(f)} failed: ${v(error) ?? "send error"}`);
        }
    }));
}
export { wE, Aro, Cro, Apr, z3t, Vqe, Rro, lOn, Cpr, $ye, xro };
