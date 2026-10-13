import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { lt, K, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Pd, _Ot, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _, ON, X, $o, wd, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Lt, FP } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Mg, MR } from "/$bunfs/root/chunk-2d9a83dh.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ae, vZ } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Pz } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ipe } from "/$bunfs/root/chunk-52bcnmbr.js";
import { F7 } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { b3e } from "/$bunfs/root/chunk-231n9cft.js";
import { Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { dg, Suo, ude, vuo } from "/$bunfs/root/chunk-s7aawpq2.js";
import { a$, eir, pDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Sv, e0n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { DW, LW } from "/$bunfs/root/chunk-y9c4grt0.js";
import { jD } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { S$e, Coe, XCe, YM, v$e } from "/$bunfs/root/chunk-30jbnw20.js";
import { fw } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Uc } from "/$bunfs/root/chunk-zc6kefep.js";
import { pu } from "/$bunfs/root/chunk-7sgatswa.js";
import { D1t, N9n, j1r, $ie, W1r, z1r, G1r, V1r, $9n, nhn, L1t, F9n, N1t, iGo, U9n, q1r, aGo, lGo, $1t, rhn, ohn, F1t } from "/$bunfs/root/chunk-y10by25k.js";
import { thn } from "/$bunfs/root/chunk-mce42fz5.js";
import { Kb } from "/$bunfs/root/chunk-f1pkxrfr.js";
import { fBr } from "/$bunfs/root/chunk-0fbzbyyq.js";
import { EOe } from "/$bunfs/root/chunk-11z0d6qs.js";
import { Q0 } from "/$bunfs/root/chunk-bs48afk0.js";
import { _Go, LQe, TOe, j1t } from "/$bunfs/root/chunk-wqwppnjd.js";
import { W1t } from "/$bunfs/root/chunk-asddjczd.js";
import { u7r } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { hE } from "/$bunfs/root/chunk-59xjawk6.js";
import { qM } from "/$bunfs/root/chunk-0xz61zj0.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, Hf, M, Bm, oe, T, u, De, _t, Ue, Wr, ue, U, A, qE } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { randomUUID } from "crypto";
import { basename, resolve, dirname, join } from "path";
import * as Vr from "vm";
import { appendFile, mkdir, readFile } from "fs/promises";
function Tr(input, { apply }) {
    if (!L(input)) {
        return null;
    }
    let e_args = input.args;
    if (typeof e_args !== "string") {
        return null;
    }
    let a = e_args.trimStart()[0];
    if (a !== "{" && a !== "[") {
        return null;
    }
    let args;
    try {
        args = b3e(X(e_args)).stripped;
    } catch  {
        return null;
    }
    if (args === null || typeof args !== "object") {
        return null;
    }
    let h = typeof input.name === "string" ? "_named" : "";
    let k = Array.isArray(args) ? "args_json_string_to_array" : "args_json_string_to_object";
    if (!apply) {
        return {
            input,
            shapeClass: `${k}${h}_detect_only`
        };
    }
    return {
        input: {
            ...input,
            args
        },
        shapeClass: `${k}${h}`
    };
}
const jr = [
    "live",
    "pending",
    "done",
    "failed",
    "retracted"
];
const N = -1;
function Ar(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e) && typeof e.$var === "string";
}
function Je(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e) && typeof e.$atleast === "number";
}
function Te(e) {
    let r = Pt().safeParse(e);
    if (!r.success || Je(r.data)) {
        throw new x('a pattern must be a JSON object (nested objects as subsets, arrays exact, v("x") binds)', "world: not a pattern");
    }
    return r.data;
}
function Fr(e) {
    if (Je(e)) {
        let r = e.$atleast;
        if (!Number.isSafeInteger(r) || r < 0) {
            throw new x("atleast(N, pattern): N must be a non-negative integer", "world: bad threshold count");
        }
        return {
            $atleast: r,
            of: Te(e.of)
        };
    }
    return Te(e);
}
const Lr = new Set([
    "addr",
    "by",
    "status",
    "at",
    "in"
]);
const kt = new Set([
    "live",
    "done"
]);
const bt = 100000;
const yt = 20000;
const xr = 32;
function zr(e) {
    return Array.isArray(e);
}
function Er(e) {
    return Array.isArray(e);
}
function Rt(e, r) {
    return Object.is(e, r) || _(e) === _(r);
}
function qe(e, r, n = {}) {
    if (e === null || typeof e !== "object") {
        if (Object.is(e, r)) {
            return n;
        }
        return undefined;
    }
    if (Ar(e)) {
        if (r === undefined) {
            return;
        }
        if (Object.hasOwn(n, e.$var)) {
            if (Rt(n[e.$var], r)) {
                return n;
            }
            return undefined;
        }
        return {
            ...n,
            [e.$var]: r
        };
    }
    if (zr(e)) {
        if (!Array.isArray(r) || r.length !== e.length) {
            return;
        }
        let w = n;
        for(let h = 0; h < e.length && w; h++){
            w = qe(e[h], r[h], w);
        }
        return w;
    }
    if (r === null || typeof r !== "object" || Array.isArray(r)) {
        return;
    }
    let s = e;
    let a = n;
    for (let w of Object.keys(s)){
        if (w === "__proto__") {
            continue;
        }
        let h = Object.hasOwn(r, w) ? r[w] : undefined;
        a = qe(s[w], h, a);
        if (!a) {
            return;
        }
    }
    return a;
}
function Dr(e) {
    return {
        ...e.fact,
        addr: e.addr,
        by: e.by,
        in: e.in,
        status: e.status,
        ...e.kind === "eval" && {
            value: e.value,
            error: e.error
        }
    };
}
function or(e) {
    if (e === null || typeof e !== "object") {
        return false;
    }
    if (Ar(e)) {
        return true;
    }
    if (zr(e)) {
        return e.some(or);
    }
    return Object.values(e).some(or);
}
function vt(e, r) {
    return qe(e, Dr(r)) !== undefined;
}
function St(e) {
    return Object.prototype.hasOwnProperty.call(e, "status");
}
function It(e, r) {
    return sr(e, r) !== undefined;
}
function sr(e, r) {
    if (!St(e) && !kt.has(r.status)) {
        return;
    }
    return qe(e, Dr(r));
}
const ar = p(()=>_t({
        topic: o().min(1)
    }).refine((e)=>!Object.keys(e).some((r)=>Lr.has(r)), {
        message: "a fact may not carry a reserved key"
    }));
var Pt = p(()=>{
    let e = qE(()=>Ue([
            o(),
            E(),
            M(),
            Bm(),
            T(e),
            ue(o(), e)
        ]));
    return ue(o(), e);
});
function xe(e) {
    let r = ar().safeParse(e);
    if (r.success) {
        return r.data;
    }
    let n = e !== null && typeof e === "object" ? Object.keys(e).find((s)=>Lr.has(s)) : undefined;
    if (n !== undefined) {
        throw new x(`a fact may not carry \`${n}\` \u2014 the host sets it on the row`, "world: fact carries a reserved key");
    }
    throw new x("a fact must be an object with a non-empty string `topic`", "world: not a fact");
}
function $r(e) {
    try {
        return Pd(l(e));
    } catch  {
        return "non-stringifiable error";
    }
}
class lr {
    rows = [];
    rules = new Map;
    fired = new Set;
    evalControllers = new Map;
    firingsInFlight = new Map;
    childrenOf = new Map;
    pendingIn = new Map;
    rowsUnder = new Map;
    idleWaiters = new Map;
    listeners = new Set;
    maxRows;
    maxRowsPerScope;
    schedule;
    constructor(e = {}){
        this.maxRows = e.maxRows ?? bt;
        this.maxRowsPerScope = e.maxRowsPerScope ?? yt;
        this.schedule = e.schedule ?? ((r)=>this.yieldingSchedule(r));
    }
    sinceYield = 0;
    yieldWatch = false;
    backlog;
    yieldingSchedule(e) {
        if (this.backlog !== undefined) {
            this.backlog.push(e);
            return;
        }
        if (!this.yieldWatch) {
            this.yieldWatch = true;
            setImmediate(()=>{
                this.yieldWatch = false;
                this.sinceYield = 0;
            });
        }
        if (++this.sinceYield < xr) {
            queueMicrotask(e);
            return;
        }
        this.backlog = [
            e
        ];
        setImmediate(()=>this.drainBacklog());
    }
    drainBacklog() {
        let backlog = this.backlog;
        if (backlog === undefined) {
            return;
        }
        let r = backlog.splice(0, xr);
        this.sinceYield = r.length;
        if (!this.yieldWatch) {
            this.yieldWatch = true;
            setImmediate(()=>{
                this.yieldWatch = false;
                this.sinceYield = 0;
            });
        }
        if (backlog.length === 0) {
            this.backlog = undefined;
        } else {
            setImmediate(()=>this.drainBacklog());
        }
        for (let n of r){
            n();
        }
    }
    subscribe(e) {
        this.listeners.add(e);
        return ()=>{
            this.listeners.delete(e);
        };
    }
    get isFull() {
        return this.rows.length >= this.maxRows;
    }
    pending(e = N) {
        return this.pendingIn.get(e) ?? 0;
    }
    isIdle(e = N) {
        return this.pending(e) === 0;
    }
    within(e, r) {
        if (r === N) {
            return true;
        }
        let n = e;
        while(n !== N){
            if (n === r) {
                return true;
            }
            n = this.rows[n]?.in ?? N;
        }
        return false;
    }
    restore(e) {
        if (this.rows.length > 0) {
            throw new x("restore() on a non-empty world", "world: restore on a non-empty world");
        }
        for (let r of e){
            if (r.addr !== this.rows.length) {
                throw new x(`restore(): row ${r.addr} out of order`, "world: restore out of order");
            }
            this.rows.push(r);
            this.topOf.push(r.in === N ? r.addr : this.topOf[r.in]);
            let n = this.childrenOf.get(r.in);
            if (n) {
                n.push(r.addr);
            } else {
                this.childrenOf.set(r.in, [
                    r.addr
                ]);
            }
            let s = this.topScopeOf(r.in);
            if (s !== N) {
                this.rowsUnder.set(s, (this.rowsUnder.get(s) ?? 0) + 1);
            }
        }
    }
    put(e, r, n = {}) {
        return this.append(e, r, "live", "put", this.writeScopeOf(n)).addr;
    }
    read(e, r = {}) {
        let n = this.scopeOf(r);
        return this.rows.filter((s)=>this.within(s.addr, n) && It(e, s));
    }
    on(pattern, fn, n, s = {}) {
        let a = this.writeScopeOf(s);
        let w = this.append({
            topic: "sub",
            pattern
        }, n, "live", "sub", a);
        if (w.status === "retracted") {
            return w.addr;
        }
        let h = {
            addr: w.addr,
            pattern,
            in: a,
            fn
        };
        this.rules.set(w.addr, h);
        if (Je(pattern)) {
            this.maybeFireThreshold(h, pattern);
            return w.addr;
        }
        let length = this.rows.length;
        for(let y = 0; y < length; y++){
            if (!this.rules.has(h.addr)) {
                break;
            }
            this.maybeFire(h, this.rows[y]);
        }
        return w.addr;
    }
    retract(e) {
        let r = this.rows[e];
        if (!r || r.status === "retracted") {
            return false;
        }
        let n = [];
        let s = [];
        let a = [
            {
                at: e,
                underEval: false
            }
        ];
        while(a.length > 0){
            let { at, underEval } = a.pop();
            let k = this.rows[at];
            let y = underEval ? this.firingsInFlight.get(at) : undefined;
            let R = false;
            if (y) {
                for (let H of y){
                    if (H.heldAt !== undefined) {
                        let P = this.rows[H.heldAt];
                        if (P !== undefined && !this.isRetractedScope(P.in)) {
                            continue;
                        }
                    }
                    H.released = true;
                    y.delete(H);
                    R = true;
                    this.adjustPending(at, -1);
                }
                if (y.size === 0) {
                    this.firingsInFlight.delete(at);
                }
            }
            if (k.status === "retracted") {
                if (underEval) {
                    if (R) {
                        s.push(at);
                    }
                    for (let H of this.childrenOf.get(at) ?? []){
                        a.push({
                            at: H,
                            underEval: true
                        });
                    }
                }
                continue;
            }
            k.status = "retracted";
            this.rules.delete(at);
            let I = this.evalControllers.get(at);
            let wasInFlight = I !== undefined;
            if (I) {
                this.evalControllers.delete(at);
                I.abort();
                this.adjustPending(at, -1);
            }
            wasInFlight ||= R || (y?.size ?? 0) > 0;
            n.push({
                row: k,
                wasInFlight
            });
            let underEval_1 = underEval || k.kind === "eval";
            for (let H of this.childrenOf.get(at) ?? []){
                a.push({
                    at: H,
                    underEval: underEval_1
                });
            }
        }
        for(let w = n.length - 1; w >= 0; w--){
            let { row, wasInFlight } = n[w];
            this.emit({
                kind: "retracted",
                row
            });
            this.deliver(row);
            if (wasInFlight) {
                s.push(row.addr);
            }
        }
        for (let w of s){
            this.wakeIdle(w);
        }
        return true;
    }
    eval(e, r, n, s = {}) {
        let a = this.append(e, n, "pending", "eval", this.writeScopeOf(s));
        if (a.status !== "pending") {
            return a.addr;
        }
        let w = new AbortController;
        this.evalControllers.set(a.addr, w);
        this.adjustPending(a.addr, 1);
        let h;
        try {
            h = Promise.resolve(r(w.signal));
        } catch (error) {
            h = Promise.reject(error);
        }
        h.then((k)=>this.settle(a, {
                value: k
            }), (k)=>this.settle(a, {
                error: $r(k)
            }));
        return a.addr;
    }
    settled(e) {
        let r = this.rows[e];
        if (!r) {
            return Promise.reject(new x(`no row at ${e}`, "world: settled() on a missing row"));
        }
        if (r.status !== "pending") {
            return Promise.resolve(r);
        }
        return new Promise((resolvePromise)=>{
            let s = this.subscribe((a)=>{
                if ((a.kind === "settled" || a.kind === "retracted") && a.row.addr === e) {
                    s();
                    resolvePromise(a.row);
                }
            });
        });
    }
    whenIdle(e = N) {
        if (this.isIdle(e)) {
            return Promise.resolve();
        }
        return new Promise((resolvePromise)=>{
            let n = this.idleWaiters.get(e);
            if (n) {
                n.push(resolvePromise);
            } else {
                this.idleWaiters.set(e, [
                    resolvePromise
                ]);
            }
        });
    }
    scopeOf(e) {
        let r = e.in ?? N;
        if (r !== N && !this.rows[r]) {
            throw new x(`no row at ${r} to place in`, "world: placement names a missing row");
        }
        return r;
    }
    writeScopeOf(e) {
        let r = this.scopeOf(e);
        if (this.isRetractedScope(r)) {
            throw new x(`row ${r} is retracted; nothing can be placed inside it`, "world: placement inside a retracted scope");
        }
        return r;
    }
    isRetractedScope(e) {
        let r = e;
        while(r !== N){
            let n = this.rows[r];
            if (!n) {
                return false;
            }
            if (n.status === "retracted") {
                return true;
            }
            r = n.in;
        }
        return false;
    }
    append(fact, r, status, kind, a) {
        if (this.rows.length >= this.maxRows) {
            throw new x(`world full (${this.maxRows} rows) \u2014 a rule is probably putting the fact it fires on`, "world: full");
        }
        let w = {
            addr: this.rows.length,
            kind,
            fact,
            by: r,
            in: a,
            at: Date.now(),
            status
        };
        this.rows.push(w);
        this.topOf.push(a === N ? w.addr : this.topOf[a]);
        let h = this.childrenOf.get(a);
        if (h) {
            h.push(w.addr);
        } else {
            this.childrenOf.set(a, [
                w.addr
            ]);
        }
        this.emit({
            kind: "put",
            row: w
        });
        let scope = this.topScopeOf(a);
        if (scope !== N) {
            let y = (this.rowsUnder.get(scope) ?? 0) + 1;
            this.rowsUnder.set(scope, y);
            if (y > this.maxRowsPerScope) {
                t(`world: scope ${scope} exceeded ${this.maxRowsPerScope} rows \u2014 a rule is probably putting the fact it fires on; retracting it`, {
                    level: "warn"
                });
                this.emit({
                    kind: "runaway",
                    scope
                });
                if (this.rows[scope].status !== "retracted") {
                    this.retract(scope);
                }
            }
        }
        this.deliver(w);
        return w;
    }
    topOf = [];
    topScopeOf(e) {
        if (e === N) {
            return N;
        }
        return this.topOf[e];
    }
    settle(e, r) {
        if (e.status !== "pending") {
            return;
        }
        this.evalControllers.delete(e.addr);
        if ("error" in r) {
            e.status = "failed";
            e.error = r.error;
        } else {
            e.status = "done";
            e.value = r.value;
        }
        this.adjustPending(e.addr, -1);
        this.emit({
            kind: "settled",
            row: e
        });
        this.deliver(e);
        this.wakeIdle(e.addr);
    }
    deliver(e) {
        for (let r of Array.from(this.rules.values())){
            if (this.rules.has(r.addr)) {
                this.maybeFire(r, e);
            }
        }
    }
    maybeFire(e, r) {
        if (Je(e.pattern)) {
            if (this.within(r.addr, e.in) && vt(e.pattern.of, r)) {
                this.maybeFireThreshold(e, e.pattern);
            }
            return;
        }
        if (!this.within(r.addr, e.in)) {
            return;
        }
        let n = sr(e.pattern, r);
        if (!n) {
            return;
        }
        let s = `${e.addr}:${r.addr}:${r.status}`;
        if (this.fired.has(s)) {
            return;
        }
        this.fired.add(s);
        this.fire(e, r, n, r.addr);
    }
    maybeFireThreshold(e, r) {
        let n = new Map;
        for (let s of this.rows){
            if (!this.within(s.addr, e.in)) {
                continue;
            }
            let bindings = sr(r.of, s);
            if (!bindings) {
                continue;
            }
            let w = _(bindings) ?? "";
            let h = n.get(w);
            if (h) {
                h.rows.push(s);
            } else {
                n.set(w, {
                    bindings,
                    rows: [
                        s
                    ]
                });
            }
        }
        if (n.size === 0 && !or(r.of)) {
            n.set("{}", {
                bindings: {},
                rows: []
            });
        }
        for (let [s, a] of n){
            if (a.rows.length < r.$atleast) {
                continue;
            }
            let w = `${e.addr}:group:${s}`;
            if (this.fired.has(w)) {
                continue;
            }
            this.fired.add(w);
            this.fire(e, a.rows, a.bindings, a.rows[0]?.addr ?? -1);
        }
    }
    supportOf(e, r) {
        let n = Er(r) ? r : [
            r
        ];
        if (n.length === 0) {
            return e.in;
        }
        let s = new Set;
        for(let h = n[0].addr; h !== e.in && h !== N; h = this.rows[h].in){
            s.add(h);
        }
        s.add(e.in);
        let addr = n[0].addr;
        for(let h = 1; h < n.length; h++){
            let k = n[h].addr;
            while(!s.has(k)){
                k = this.rows[k].in;
            }
            for(let y = addr; y !== k; y = this.rows[y].in){
                s.delete(y);
            }
            addr = k;
        }
        let w = addr;
        while(w !== e.in && this.rows[w].status === "retracted"){
            w = this.rows[w].in;
        }
        return w;
    }
    fire(e, r, n, on) {
        this.adjustPending(e.addr, 1);
        let a = {
            released: false,
            heldAt: undefined
        };
        let w = {
            keep: (R)=>{
                a.heldAt = R;
            }
        };
        let h = this.firingsInFlight.get(e.addr);
        if (h) {
            h.add(a);
        } else {
            this.firingsInFlight.set(e.addr, new Set([
                a
            ]));
        }
        let k = Er(r) ? undefined : r;
        let y = k?.status;
        new Promise((resolvePromise)=>this.schedule(resolvePromise)).then(()=>{
            if (k !== undefined && k.status !== y) {
                return;
            }
            return e.fn(r, n, this.supportOf(e, r), w);
        }).catch((R)=>{
            let I = $r(R);
            t(`world rule ${e.addr} threw on row ${on}: ${I}`, {
                level: "warn"
            });
            if (!this.isRetractedScope(e.in)) {
                try {
                    this.append({
                        topic: "error",
                        kind: "rule",
                        rule: e.addr,
                        on,
                        message: I
                    }, "host", "live", "put", e.in);
                } catch  {}
            }
        }).finally(()=>{
            if (a.released) {
                return;
            }
            a.released = true;
            let R = this.firingsInFlight.get(e.addr);
            if (R) {
                R.delete(a);
                if (R.size === 0) {
                    this.firingsInFlight.delete(e.addr);
                }
            }
            this.adjustPending(e.addr, -1);
            this.wakeIdle(e.addr);
        });
    }
    adjustPending(e, r) {
        let n = e;
        while(true){
            this.pendingIn.set(n, (this.pendingIn.get(n) ?? 0) + r);
            if (n === N) {
                return;
            }
            n = this.rows[n]?.in ?? N;
        }
    }
    wakeIdle(e) {
        let r = e;
        while(true){
            if (this.isIdle(r)) {
                let n = this.idleWaiters.get(r);
                if (n) {
                    this.idleWaiters.delete(r);
                    for (let s of n){
                        s();
                    }
                }
            }
            if (r === N) {
                return;
            }
            r = this.rows[r]?.in ?? N;
        }
    }
    emit(e) {
        for (let r of this.listeners){
            try {
                r(e);
            } catch (error) {
                t(`world listener threw: ${l(error)}`, {
                    level: "warn"
                });
            }
        }
    }
}
const Ye = [
    "user",
    "model",
    "stop",
    "runaway",
    "pause"
];
async function Ge(e, r) {
    let n;
    try {
        let w = e.runInContext(r.vmContext, S$e(D1t));
        n = await r.settle(w);
    } catch (error) {
        let thrown = r.errorInfo(error);
        if (thrown.stack) {
            t(`Workflow v2 script error stack:
${thrown.stack}`, {
                level: "error"
            });
        }
        return {
            error: _Ot(thrown),
            thrown
        };
    }
    let s = n.v;
    if (typeof s === "function") {
        return {
            error: "workflow result cannot be a function"
        };
    }
    if (s === null || typeof s !== "object") {
        if (typeof s === "bigint" || typeof s === "symbol") {
            return {
                error: `workflow result is not JSON-serializable (a ${typeof s})`
            };
        }
        return {
            value: s
        };
    }
    let a = r.sanitize(s);
    try {
        let w;
        try {
            w = wd(a);
        } catch  {
            w = X(_(a) ?? "null");
        }
        _(w);
        return {
            value: w
        };
    } catch  {
        return {
            error: "workflow result is not JSON-serializable (a circular reference?)"
        };
    }
}
function dr(world, r, n) {
    let s = world.rows[r]?.in ?? N;
    while(s !== N && s !== n){
        let a = world.rows[s];
        if (!a) {
            return false;
        }
        if (a.kind === "eval" && a.fact.topic === "workflow" && a.fact.child === true) {
            return true;
        }
        s = a.in;
    }
    return false;
}
function ur(world, { addr, by }, n) {
    while(true){
        if (!by.startsWith("rule:")) {
            return addr;
        }
        let w = Number(by.slice(5));
        if (!Number.isSafeInteger(w) || w < 0 || w >= addr || !world.within(w, n)) {
            return;
        }
        let h = world.rows[w];
        if (!h) {
            return;
        }
        addr = w;
        by = h.by;
    }
}
function cr(world, r, n) {
    return !dr(world, r.addr, n) && ur(world, r, n) !== undefined;
}
function Nr(e) {
    let { ctx, world, killSignal } = e;
    let ctx_childWorkflow = ctx.childWorkflow;
    let { clone } = ctx.vmBoundary;
    let h = V1r();
    let k = new Map;
    let y = new Map;
    function R() {
        return new x("Workflow aborted", "workflow v2: child workflow retracted by kill");
    }
    function I(P) {
        return world.settled(P).then(async (D)=>{
            let Z = k.get(P);
            k.delete(P);
            switch(D.status){
                case "done":
                    {
                        await world.whenIdle(P);
                        if (killSignal.aborted) {
                            throw R();
                        }
                        if (world.rows[P]?.status === "retracted") {
                            return null;
                        }
                        let le = world.read({
                            topic: "result"
                        }, {
                            in: P
                        }).filter((ee)=>cr(world, ee, P)).map((ee)=>ee.fact);
                        if (le.length > 0) {
                            return clone(le);
                        }
                        return clone(D.value);
                    }
                case "failed":
                    {
                        if (Z) {
                            throw XCe(Z.message, Z.name, Z.rendered);
                        }
                        throw new x(D.error ?? "child workflow failed", "workflow v2: awaited child workflow failed");
                    }
                case "retracted":
                    if (killSignal.aborted) {
                        throw R();
                    }
                    return null;
                default:
                    return null;
            }
        });
    }
    function W(error, D) {
        if (error instanceof Error) {
            return {
                name: error.name,
                message: error.message
            };
        }
        let Z = (D ?? e.errorInfo)(error);
        return {
            name: Z.name,
            message: Z.message
        };
    }
    function cut(P) {
        let D = y.get(P);
        if (D) {
            D.cutRequested = true;
            return;
        }
        world.retract(P);
    }
    async function workflow(P, D, Z) {
        if (ctx_childWorkflow.abortSignal?.aborted) {
            return new Promise(()=>{});
        }
        let le = {
            in: P.in
        };
        let ee = P.by;
        if (world.isRetractedScope(le.in)) {
            if (killSignal.aborted) {
                throw R();
            }
            return null;
        }
        let de;
        let he;
        try {
            de = ctx_childWorkflow.intakeClone(D);
        } catch (error) {
            he = {
                error
            };
        }
        let me = xe({
            topic: "workflow",
            ...typeof de === "string" ? {
                name: de
            } : de !== null && typeof de === "object" && "scriptPath" in de && typeof de.scriptPath === "string" ? {
                scriptPath: de.scriptPath
            } : {},
            founding: true,
            child: true
        });
        let re = new AbortController;
        let length = world.rows.length;
        let C = world.subscribe((V)=>{
            if (V.kind === "retracted" && V.row.addr === length) {
                C();
                y.delete(length);
                re.abort();
            }
        });
        y.set(length, {
            cutRequested: false
        });
        async function te() {
            let V;
            let J;
            let ge;
            let Pe;
            let q;
            try {
                if (he) {
                    throw he.error;
                }
                let ke = await W1r(ctx_childWorkflow, de);
                if (re.signal.aborted) {
                    return;
                }
                let Re = $ie(ke.scriptBody);
                if (!Re.ok) {
                    let _e = `workflow('${ke.childName}'): ${Re.error}`;
                    throw Error(_e);
                }
                J = ke.childName;
                Pe = Re.vmScript;
                ge = h(J);
                let timers = N9n(ctx_childWorkflow.abortSignal ? AbortSignal.any([
                    ctx_childWorkflow.abortSignal,
                    re.signal
                ]) : re.signal);
                e.registerTimers(timers);
                q = z1r(ctx_childWorkflow, J, ge, timers);
                V = q.errorInfo;
                timers.bindVMInvoke(Vr.runInContext("(fn => { fn() })", q.childCtx));
                for (let [_e, je] of [
                    [
                        "parallel",
                        ctx_childWorkflow.hooks.parallel
                    ],
                    [
                        "pipeline",
                        ctx_childWorkflow.hooks.pipeline
                    ]
                ]){
                    let Be = je;
                    let Fe = (...Oe)=>{
                        if (re.signal.aborted) {
                            return new Promise(()=>{});
                        }
                        return Be(...Oe);
                    };
                    Object.defineProperty(q.childCtx, _e, {
                        value: q.asyncWrap(v$e(Fe)),
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                Object.defineProperty(q.childCtx, "args", {
                    value: Z === undefined ? undefined : q.clone(Z),
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
                let Se = y.get(length)?.cutRequested === true;
                y.delete(length);
                if (Se) {
                    world.retract(length);
                    return;
                }
                ctx_childWorkflow.hooks.reservePhase(ge, "child");
                ctx_childWorkflow.hooks.log(`${Pz} running dynamic workflow ${J}`);
                let rr = {
                    vmContext: q.childCtx,
                    hooks: {
                        ...ctx_childWorkflow.hooks,
                        agent: q.agent
                    },
                    childSpawnMemoRef: {},
                    vmToStr: q.toStr,
                    vmOwnString: q.ownString,
                    vmStringify: q.stringify,
                    timers,
                    vmBoundary: {
                        clone: q.clone,
                        call: q.call,
                        settle: q.settle,
                        sanitize: q.sanitize,
                        asyncWrap: q.asyncWrap
                    },
                    childWorkflow: ctx_childWorkflow
                };
                e.installWords(rr, length, re.signal, P.spawnMemo);
            } catch (error) {
                y.delete(length);
                re.abort();
                let { name, message } = W(error, V);
                let Se = Pd(message);
                k.set(length, {
                    name,
                    message: Se,
                    rendered: `${name}: ${Se}`
                });
                ctx_childWorkflow.hooks.log(`${Pz} workflow() failed to start: ${Se}`);
                throw new x(Se, "workflow v2: child workflow failed to start");
            }
            let pe = await Ge(Pe, {
                vmContext: q.childCtx,
                settle: q.settle,
                sanitize: q.sanitize,
                errorInfo: q.errorInfo
            });
            if (re.signal.aborted) {
                return;
            }
            if (pe.thrown) {
                k.set(length, {
                    name: pe.thrown.name,
                    message: Pd(pe.thrown.message),
                    rendered: pe.error
                });
                ctx_childWorkflow.hooks.log(`${Pz} ${J} failed: ${pe.error}`);
                throw new x(pe.error, "workflow v2: child workflow script failed");
            }
            if (pe.error !== undefined) {
                ctx_childWorkflow.hooks.log(`${Pz} ${J} failed: ${pe.error}`);
                throw new x(pe.error, "workflow v2: child workflow result refused");
            }
            ctx_childWorkflow.hooks.log(`${Pz} ${J} done`);
            return pe.value;
        }
        let ye;
        try {
            ye = world.eval(me, (V)=>{
                V.addEventListener("abort", ()=>re.abort(), {
                    once: true
                });
                return te();
            }, ee, le);
        } catch (error) {
            C();
            y.delete(length);
            if (!world.isRetractedScope(le.in)) {
                let { message } = W(error, undefined);
                let ge = typeof me.name === "string" ? me.name : typeof me.scriptPath === "string" ? `workflow(${me.scriptPath})` : "workflow()";
                ctx_childWorkflow.hooks.recordFailure(`${Pz} ${ge}: ${Pd(message)}`);
                ctx_childWorkflow.hooks.log(`${Pz} workflow() failed to start: ${Pd(message)}`);
            }
            throw error;
        }
        if (ye !== length) {
            C();
            y.delete(length);
            throw new x(`child workflow row landed at ${ye}, expected ${length}`, "workflow v2: child founding address mismatch");
        }
        return I(ye);
    }
    return {
        workflow,
        cut
    };
}
function Ot(e) {
    return Array.isArray(e);
}
function Ve(e) {
    return {
        addr: e.addr,
        by: e.by,
        status: e.status,
        value: e.value,
        error: e.error,
        fact: e.fact
    };
}
function Wt(e) {
    if (e === undefined || e === null) {
        return false;
    }
    if (typeof e !== "object" || Array.isArray(e)) {
        throw TypeError("placement options must be an object: {top: true} or nothing");
    }
    let r = e;
    if (Object.keys(r).some((n)=>n !== "top")) {
        throw TypeError("unknown placement option — the only one is top (a boolean)");
    }
    if (r.top !== undefined && typeof r.top !== "boolean") {
        throw TypeError("placement option top must be a boolean");
    }
    return r.top === true;
}
function fr(ctx, world, n, killSignal, { scopeSignal, inheritedSpawnMemo } = {}) {
    let { clone, call, settle, sanitize, asyncWrap } = ctx.vmBoundary;
    let { vmContext, hooks } = ctx;
    let errorInfo = Coe(vmContext);
    let P = {
        by: "script",
        in: n,
        memo: "chain"
    };
    let D = P;
    function Z(v, S) {
        let O = D;
        D = v;
        try {
            return S();
        } finally{
            D = O;
        }
    }
    let le = {
        in: n
    };
    let ee = (v, S)=>{
        if (Wt(S)) {
            return le;
        }
        return {
            in: v.in
        };
    };
    let de = Vr.runInContext("(() => { const freeze = Object.freeze; return (put, read, on, retract, agent, workflow) => freeze({ put, read, on, retract, agent, workflow }) })()", vmContext);
    function he(v) {
        let S;
        try {
            S = settle(v());
        } catch (error) {
            return Promise.reject(me(error));
        }
        return S.then((O)=>B(O.v), (O)=>{
            throw me(O);
        });
    }
    function me(v) {
        return re(errorInfo(v));
    }
    function re(v) {
        return new x(v.message ? `${v.name}: ${v.message}` : v.name, "workflow v2: VM code threw");
    }
    function B(v) {
        let S = sanitize(v);
        if (S === null || typeof S !== "object") {
            return S;
        }
        let O = _(S);
        if (O === undefined) {
            return undefined;
        }
        return X(O);
    }
    function C(v, S) {
        if (typeof v !== "function") {
            throw new x(S, "workflow v2: word expected a function");
        }
    }
    let te = ()=>killSignal.aborted || scopeSignal?.aborted === true;
    let ye = (v)=>v.memo === "chain" && world.rows[n]?.status !== "pending";
    let V = YM((v)=>{
        if (te()) {
            return clone([]);
        }
        let S = Te(B(v) ?? {});
        return clone(world.read(S, le).map(Ve));
    });
    function J(v) {
        return te() || world.isRetractedScope(v.in) && !ke(v);
    }
    function ge(v) {
        return YM((S, O)=>{
            let Y = v();
            if (J(Y)) {
                return -1;
            }
            let fe = ee(Y, B(O));
            if (world.isRetractedScope(fe.in)) {
                return -1;
            }
            return world.put(xe(B(S)), Y.by, fe);
        });
    }
    function Pe(v) {
        return YM((S, O, Y)=>{
            let fe = v();
            if (J(fe)) {
                return -1;
            }
            let ie = Fr(B(S) ?? {});
            C(O, "on() expects a function");
            let Ie = ee(fe, B(Y));
            if (world.isRetractedScope(Ie.in)) {
                return -1;
            }
            let We = -1;
            We = world.on(ie, (Le, tr, Ke, He)=>{
                let nr = Ot(Le) ? Le.map(Ve) : Ve(Le);
                let ze = {
                    by: `rule:${We}`,
                    in: Ke,
                    memo: "none"
                };
                pe.set(ze, He);
                let Ce = _r(ze);
                return Z(ze, ()=>he(()=>call(O, clone(nr), clone(tr), Ce)));
            }, fe.by, Ie);
            return We;
        });
    }
    let q = new WeakMap;
    let pe = new WeakMap;
    function ke(v) {
        let S = q.get(v);
        if (S === undefined) {
            return false;
        }
        let O = world.rows[S];
        return O !== undefined && !world.isRetractedScope(O.in);
    }
    function Re(v) {
        return YM((S)=>{
            if (typeof S !== "number" || !Number.isSafeInteger(S)) {
                throw TypeError("retract() expects an address (a number)");
            }
            if (te() || S === n || !world.within(S, n)) {
                return false;
            }
            let O = v();
            if (!ke(O) && world.isRetractedScope(O.in)) {
                return false;
            }
            let Y = world.within(O.in, S);
            let fe = Y ? pe.get(O) : undefined;
            let ie = Y ? q.get(O) : undefined;
            fe?.keep(S);
            let Ie = world.retract(S);
            if (Y && Ie) {
                if (ie === undefined || world.within(ie, S)) {
                    q.set(O, S);
                }
                fe?.keep(q.get(O));
            } else if (Y) {
                fe?.keep(ie);
            }
            return Ie;
        });
    }
    let ve = new Set;
    let Se = new Map;
    function rr(v) {
        return world.settled(v).then((S)=>{
            switch(S.status){
                case "done":
                    return clone(S.value);
                case "failed":
                    {
                        if (ve.has(v)) {
                            return null;
                        }
                        let O = Se.get(v);
                        if (O) {
                            throw XCe(O.message, O.name);
                        }
                        throw new x(S.error ?? "agent failed", "workflow v2: awaited agent failed");
                    }
                case "retracted":
                    if (killSignal.aborted) {
                        throw new x("Workflow aborted", "workflow v2: awaited agent retracted by kill");
                    }
                    if (scopeSignal?.aborted) {
                        return new Promise(()=>{});
                    }
                    return null;
                default:
                    return null;
            }
        });
    }
    let _e = asyncWrap(v$e(async (v)=>v));
    let je = Vr.runInContext("(() => { const P = Promise; return () => new P(() => {}) })()", vmContext);
    function Be(v) {
        return YM((S, O)=>{
            if (te()) {
                return call(je);
            }
            let Y = v();
            if (ye(Y)) {
                return call(je);
            }
            if (!ke(Y) && world.isRetractedScope(Y.in)) {
                return call(_e, null);
            }
            let fe = B(O);
            let ie = fe !== null && typeof fe === "object" && !Array.isArray(fe) ? fe : {};
            let Ie = ctx.vmToStr(S);
            let label = typeof ie.label === "string" ? ie.label : ne(Ie, 60).replace(/\s+/g, " ").trim();
            let Le = ie.fact !== null && typeof ie.fact === "object" && !Array.isArray(ie.fact) ? ie.fact : {};
            let tr = xe({
                ...Le,
                topic: "agent",
                label,
                ...typeof ie.phase === "string" && {
                    phase: ie.phase
                }
            });
            let Ke = ee(Y, ie.top === undefined ? undefined : {
                top: ie.top
            });
            if (world.isRetractedScope(Ke.in)) {
                return call(_e, null);
            }
            let length = world.rows.length;
            let nr = world.eval(tr, (ze)=>hooks.agent(S, O, ze, Fe(Y), scopeSignal).then((Ce)=>{
                    if (Ce === null || Ce === undefined) {
                        ve.add(length);
                        throw new x("agent produced no result (skipped, blocked, or gave up after retries)", "workflow v2: agent resolved without a result");
                    }
                    return B(Ce);
                }, (Ce)=>{
                    let Cr = errorInfo(Ce);
                    Se.set(length, Cr);
                    throw re(Cr);
                }), Y.by, Ke);
            return call(_e, rr(nr));
        });
    }
    function Fe(v) {
        if (v.memo === "none") {
            return new L1t;
        }
        if (inheritedSpawnMemo !== undefined) {
            return inheritedSpawnMemo;
        }
        let S = world.rows[n];
        if (S === undefined || S.status === "pending") {
            return undefined;
        }
        return new L1t;
    }
    let Oe = ()=>D;
    ctx.childSpawnMemoRef.get = ()=>Fe(D);
    let dt = ge(Oe);
    let ut = Pe(Oe);
    let ct = Re(Oe);
    let ft = Be(Oe);
    function _r(v) {
        let S = ()=>{
            if (D === P) {
                return v;
            }
            return D;
        };
        return de(ge(S), V, Pe(S), Re(S), Be(S), Or(S));
    }
    let pt = YM((v)=>{
        if (typeof v !== "string" || v === "") {
            throw new x("v(name) expects a non-empty string", "workflow v2: v() expects a name");
        }
        return clone({
            $var: v
        });
    });
    let mt = YM((v, S)=>{
        let of = Te(B(S) ?? {});
        if (typeof v !== "number" || !Number.isSafeInteger(v) || v < 0) {
            throw new x("atleast(N, pattern) expects a non-negative integer", "workflow v2: atleast() expects a count");
        }
        return clone({
            $atleast: v,
            of
        });
    });
    for (let [v, S] of [
        [
            "put",
            dt
        ],
        [
            "read",
            V
        ],
        [
            "on",
            ut
        ],
        [
            "retract",
            ct
        ],
        [
            "agent",
            ft
        ],
        [
            "v",
            pt
        ],
        [
            "atleast",
            mt
        ],
        [
            j1r,
            YM(()=>_r(D))
        ]
    ]){
        Object.defineProperty(vmContext, v, {
            value: S,
            writable: false,
            enumerable: true,
            configurable: false
        });
    }
    let Pr = new Set;
    let { workflow, cut } = scopeSignal ? {
        workflow: ()=>G1r(),
        cut: ()=>{}
    } : Nr({
        ctx,
        world,
        killSignal,
        installWords: (v, S, scopeSignal_1, inheritedSpawnMemo_1)=>{
            fr(v, world, S, killSignal, {
                scopeSignal: scopeSignal_1,
                inheritedSpawnMemo: inheritedSpawnMemo_1
            });
        },
        registerTimers: (v)=>{
            Pr.add(v);
        },
        errorInfo
    });
    function Or(v) {
        return YM((S, O)=>{
            if (te()) {
                return call(je);
            }
            let Y = v();
            if (ye(Y)) {
                return call(je);
            }
            if (J(Y)) {
                return call(_e, null);
            }
            let fe = {
                in: Y.in,
                by: Y.by,
                spawnMemo: Fe(Y)
            };
            let ie = asyncWrap(v$e((Ie, We)=>workflow(fe, Ie, We)));
            return call(ie, S, O);
        });
    }
    Object.defineProperty(vmContext, "workflow", {
        value: Or(Oe),
        writable: false,
        enumerable: true,
        configurable: false
    });
    Vr.runInContext("delete globalThis.eval", vmContext);
    return {
        as (v, S) {
            return Z({
                by: v,
                in: n,
                memo: "none"
            }, S);
        },
        clearChildTimers () {
            for (let v of Pr){
                v.clear();
            }
        },
        cutChild: cut
    };
}
const Ct = 1000;
const Tt = 5000;
const via = "model";
const Mr = "killed (runaway): the run exceeded the per-run row cap — usually a rule putting the fact it fires on. Its facts are readable with read {status:'retracted'}; fix the rule (or split a genuinely larger workload) before launching again.";
function xt(reason) {
    return Ye.find((r)=>r === reason) ?? "unknown";
}
class Qe {
    runId;
    vmScript;
    world;
    controller = new AbortController;
    ctx;
    words;
    vmErrorInfo;
    logs = [];
    log(e) {
        if (this.logs.length < Ct) {
            this.logs.push(Pd(e));
        }
    }
    sink;
    killed = false;
    killedSize;
    foreignArtifactContentAtKill = false;
    scope = -1;
    priorScopes = [];
    retractPriorLives() {
        for (let e of this.priorScopes){
            this.world.retract(e);
        }
    }
    reportedRows = 0;
    reportedLogs = 0;
    reportedFailures = 0;
    reopen;
    onUnfounded;
    constructor(e, r, n){
        this.runId = e;
        this.vmScript = r;
        this.world = n;
    }
    static lost(e, r, n, s = []) {
        let a = new Qe(e, undefined, r);
        a.scope = n;
        a.priorScopes = s;
        a.retractPriorLives();
        a.lostOnResume = true;
        let w = a.killRecord();
        if (w !== undefined || r.isRetractedScope(n)) {
            a.kill("stop");
            if (w !== undefined) {
                a.killedSize = w;
            }
        }
        return a;
    }
    lostOnResume = false;
    get isLost() {
        return this.lostOnResume;
    }
    get founded() {
        return this.scope >= 0;
    }
    get isKilled() {
        return this.killed;
    }
    get carriedForeignArtifactContent() {
        return this.foreignArtifactContentAtKill || this.ctx?.hooks.getForeignArtifactContent() === true;
    }
    get isActive() {
        return this.scope >= 0 && !this.world.isIdle(this.scope);
    }
    state() {
        if (this.killed) {
            return "killed";
        }
        if (this.lostOnResume) {
            return "lost";
        }
        if (this.isActive) {
            return "open";
        }
        return "settled";
    }
    get wasSteered() {
        return this.steered;
    }
    steered = false;
    afterKillReported = false;
    noteCallAfterKill(e) {
        if (!this.killed || this.lostOnResume || this.afterKillReported || this.killedSize === undefined) {
            return;
        }
        this.afterKillReported = true;
        g("workflow_after_kill", {
            next_action: d(e),
            seconds_since_kill: Math.round((Date.now() - this.killedSize.at) / 1000)
        });
    }
    msSinceLaunch() {
        let e = this.world.rows[this.scope];
        if (e) {
            return Date.now() - e.at;
        }
        return 0;
    }
    get pending() {
        if (this.scope < 0) {
            return 0;
        }
        return this.world.pending(this.scope);
    }
    status() {
        if (this.scope < 0) {
            return {
                rows: 0,
                pending: 0
            };
        }
        return {
            rows: this.world.read({}, {
                in: this.scope
            }).length,
            pending: this.pending
        };
    }
    kill(reason) {
        this.killed = true;
        this.controller.abort();
        if (this.scope >= 0 && !this.world.isRetractedScope(this.scope)) {
            let r = this.status();
            this.killedSize = {
                at: Date.now(),
                reason,
                ...r,
                rules: F(this.world.read({
                    topic: "sub"
                }, {
                    in: this.scope
                }), (a)=>a.kind === "sub"),
                agents: this.ctx?.hooks.getAgentCount() ?? 0
            };
            if (!this.lostOnResume) {
                g("workflow_kill", {
                    reason: d(reason),
                    rows: r.rows,
                    agents: this.killedSize.agents,
                    ms_since_launch: this.msSinceLaunch()
                });
            }
            this.world.retract(this.scope);
            let { at, ...rest } = this.killedSize;
            try {
                if (this.killRecord() === undefined) {
                    this.world.put({
                        topic: "run",
                        runId: this.runId,
                        killed: true,
                        ...rest
                    }, "host", {
                        in: N
                    });
                }
            } catch (error) {
                if (this.world.isFull) {
                    t(`workflow v2: kill record for ${this.runId} skipped \u2014 the world is full`);
                } else {
                    c(error);
                }
            }
        }
        this.foreignArtifactContentAtKill = this.carriedForeignArtifactContent;
        this.ctx = undefined;
        this.words = undefined;
    }
    killRecord() {
        let e = this.killRecordRow();
        if (!e) {
            return;
        }
        return {
            at: Ne(e.at),
            reason: xt(e.fact.reason),
            rows: Ne(e.fact.rows),
            pending: Ne(e.fact.pending),
            rules: Ne(e.fact.rules),
            agents: Ne(e.fact.agents)
        };
    }
    cutUnawaitedScriptChildren() {
        let words = this.words;
        if (!words) {
            return;
        }
        for (let r of this.world.rows){
            if (r.status === "retracted" || r.by !== "script" || r.in !== this.scope || r.kind !== "eval" || r.fact.topic !== "workflow" || r.fact.child !== true) {
                continue;
            }
            if (r.status === "pending" || this.childHasOwnWork(r.addr)) {
                words.cutChild(r.addr);
            }
        }
    }
    childHasOwnWork(e) {
        if (this.world.isIdle(e)) {
            return false;
        }
        let rows = this.world.rows;
        for(let n = e + 1; n < rows.length; n++){
            let row = rows[n];
            if (!(row.status === "pending" || row.kind === "sub" && !this.world.isIdle(row.addr)) || !this.world.within(row.addr, e) || !cr(this.world, row, e)) {
                continue;
            }
            return true;
        }
        return false;
    }
    killRecordRow() {
        return this.world.read({
            topic: "run",
            runId: this.runId,
            killed: true
        }, {
            in: N
        }).find((e)=>e.in === N && e.kind === "put" && e.by === "host");
    }
    async run(e, r, n, s) {
        this.sink = n;
        let a = Date.now();
        if (this.scope < 0) {
            try {
                let C;
                try {
                    C = s.journal ? await s.journal.load() : undefined;
                } catch (error) {
                    m("workflow_run", "journal_load_failed", {
                        duration_ms: Date.now() - a
                    });
                    throw error;
                }
                if (this.killed) {
                    let te = Date.now() - a;
                    f("workflow_run", "killed", {
                        agents: 0,
                        rows: 0,
                        duration_ms: te,
                        reopened: false,
                        error_results: 0
                    });
                    return {
                        result: [],
                        agentCount: 0,
                        logs: [],
                        failures: [],
                        durationMs: te
                    };
                }
                try {
                    this.found(e, r, s, C);
                } catch (error) {
                    this.scope = -1;
                    this.priorScopes = [];
                    this.ctx = undefined;
                    this.words = undefined;
                    m("workflow_run", "founding_failed", {
                        duration_ms: Date.now() - a
                    });
                    throw error;
                }
            } finally{
                if (this.scope < 0) {
                    this.onUnfounded?.();
                }
                this.onUnfounded = undefined;
            }
        }
        await Promise.race([
            this.world.whenIdle(this.scope),
            this.aborted()
        ]);
        this.ctx?.timers.clear();
        this.words?.clearChildTimers();
        let reportedRows = this.reportedRows;
        this.reportedRows = this.world.rows.length;
        let h = this.world.rows[this.scope];
        let error = h?.status === "failed" && this.scope >= reportedRows ? h.error : this.killedSize?.reason === "runaway" && !this.reportedRunaway ? Mr : undefined;
        let y = error === Mr;
        if (y) {
            this.reportedRunaway = true;
        }
        let R = {
            in: this.scope
        };
        let I = (C)=>C.addr >= reportedRows && this.ownRow(C);
        let logs = this.logs.slice(this.reportedLogs);
        this.reportedLogs = this.logs.length;
        let G = this.ctx?.hooks.getFailures() ?? [];
        let H = this.world.read({
            topic: "script",
            status: "failed"
        }, R).filter((C)=>I(C) && C.addr !== this.scope);
        let P = [
            ...this.world.read({
                topic: "workflow",
                status: "failed"
            }, R),
            ...this.world.read({
                topic: "workflow",
                status: "retracted"
            }, R)
        ].filter((C)=>C.addr >= reportedRows && C.kind === "eval" && C.fact.child === true && C.error !== undefined).sort((C, te)=>C.addr - te.addr);
        let failures = [
            ...G.slice(this.reportedFailures),
            ...this.world.read({
                topic: "error"
            }, R).filter(I).map((C)=>Pd(`error: ${_(C.fact)}`)),
            ...H.map((C)=>Pd(`script error: ${C.error ?? ""}`)),
            ...P.map((C)=>Pd(`${Pz} ${typeof C.fact.name === "string" ? C.fact.name : typeof C.fact.scriptPath === "string" ? `workflow(${C.fact.scriptPath})` : "workflow()"}: ${C.error ?? ""}`))
        ];
        this.reportedFailures = G.length;
        let Z = this.world.read({
            topic: "result"
        }, R).filter(I).map((C)=>C.fact);
        let le = Z.length === 0 && h?.status === "done" && this.scope >= reportedRows;
        let ee = le ? h.value : undefined;
        let de = le ? ee : Z.length === 0 && error !== undefined ? null : Z;
        let he = le ? Array.isArray(ee) ? ee : ee === undefined || ee === null ? [] : [
            ee
        ] : Z;
        let me = le && Array.isArray(ee) && ee.length === 0 ? 1 : he.length;
        let agentCount = this.killedSize?.agents ?? this.ctx?.hooks.getAgentCount() ?? 0;
        let durationMs = Date.now() - a;
        this.logSettlement({
            result: me,
            errorResults: F(he, Et),
            scriptError: error === undefined ? undefined : y ? "runaway" : "script_failed",
            errors: F(this.world.read({
                topic: "error"
            }, R), I) + H.length + P.length,
            agentCount,
            durationMs
        });
        return {
            result: de,
            agentCount,
            logs,
            failures,
            ...this.carriedForeignArtifactContent && {
                foreignArtifactContent: true
            },
            usageLimitDenial: this.ctx?.hooks.takeUsageLimitDenial(),
            durationMs,
            ...error !== undefined && {
                error
            }
        };
    }
    logSettlement(e) {
        let r = {
            agents: e.agentCount,
            rows: this.killedSize?.rows ?? this.world.read({}, {
                in: this.scope
            }).length,
            duration_ms: e.durationMs,
            reopened: this.settlements > 0,
            error_results: e.errorResults
        };
        this.settlements++;
        if (e.scriptError !== undefined) {
            m("workflow_run", e.scriptError, r);
            return;
        }
        if (this.killed) {
            f("workflow_run", "killed", r);
            return;
        }
        if (e.result > e.errorResults) {
            g("workflow_run", {
                ...r,
                rule_errors: e.errors
            });
            return;
        }
        if (e.errorResults > 0) {
            m("workflow_run", "error_result", r);
            return;
        }
        f("workflow_run", e.errors > 0 ? "rule_error" : "no_result", r);
    }
    settlements = 0;
    reportedRunaway = false;
    requireOp(e) {
        try {
            this.requireOpen();
            this.requireFounded();
        } catch (error) {
            m("workflow_steer", this.killed ? "killed" : this.lostOnResume ? "lost_on_resume" : "not_founded", {
                verb: d(e)
            });
            throw error;
        }
    }
    put(e) {
        this.requireOp("put");
        let r = this.world.put(xe(e), via, {
            in: this.scope
        });
        this.steered = true;
        return r;
    }
    retract(e) {
        this.requireOp("retract");
        if (e === this.scope || !this.world.within(e, this.scope)) {
            return false;
        }
        let r = this.world.retract(e);
        if (r) {
            this.steered = true;
        }
        return r;
    }
    read(e) {
        if (this.scope < 0) {
            return [];
        }
        let r = Te(e ?? {});
        return [
            ...this.priorScopes,
            this.scope
        ].flatMap((n)=>this.world.read(r, {
                in: n
            }).map(Ve));
    }
    markSteer() {
        let e = {
            rows: this.world.rows.length,
            retracted: 0,
            pendingAgents: new Set
        };
        for (let r of this.rowsInRun()){
            if (r.status === "retracted") {
                e.retracted++;
            } else if (r.status === "pending" && Ur(r)) {
                e.pendingAgents.add(r.addr);
            }
        }
        return e;
    }
    reportSteer(e, r) {
        if (this.scope < 0) {
            return;
        }
        let rows_put = 0;
        let s = 0;
        let agents_spawned = 0;
        let agents_aborted = 0;
        for (let h of this.rowsInRun()){
            let k = h.addr >= r.rows;
            if (k && h.kind === "put") {
                rows_put++;
            }
            if (h.status === "retracted") {
                s++;
            }
            if (!Ur(h)) {
                continue;
            }
            if (k) {
                agents_spawned++;
            }
            if (h.status === "retracted" && (k || r.pendingAgents.has(h.addr))) {
                agents_aborted++;
            }
        }
        g("workflow_steer", {
            verb: d(e),
            rows_put,
            rows_retracted: s - r.retracted,
            agents_spawned,
            agents_aborted,
            ms_since_launch: this.msSinceLaunch(),
            run_state: d(this.state())
        });
    }
    ownRow(e) {
        if (e.by === "host" && e.fact.topic === "error" && e.fact.kind === "rule") {
            return true;
        }
        if (!this.inChildWorkflow(e.addr)) {
            return true;
        }
        let r = ur(this.world, e, this.scope);
        return r !== undefined && !this.inChildWorkflow(r);
    }
    inChildWorkflow(e) {
        return dr(this.world, e, this.scope);
    }
    rowsInRun() {
        if (this.scope < 0) {
            return [];
        }
        return this.world.rows.filter((e)=>this.world.within(e.addr, this.scope));
    }
    beginScript(e) {
        this.requireOp("script");
        if (!this.ctx || !this.words) {
            m("workflow_steer", "no_context", {
                verb: b("script")
            });
            return {
                error: "run has no context yet"
            };
        }
        let r = $ie(e, {
            bindWords: true
        });
        if (!r.ok) {
            m("workflow_steer", "compile_failed", {
                verb: b("script")
            });
            return {
                error: r.error
            };
        }
        let n = this.evalScript(r.vmScript, {
            topic: "script",
            via
        }, via, {
            in: this.scope
        }, via);
        this.steered = true;
        return {
            addr: n
        };
    }
    async awaitScript(e) {
        await Promise.race([
            this.world.settled(e),
            Q(Tt)
        ]);
        let r = this.world.rows[e];
        if (r.status === "failed") {
            return {
                error: r.error
            };
        }
        return {};
    }
    async script(e) {
        let r = this.beginScript(e);
        if ("error" in r) {
            return {
                error: r.error
            };
        }
        let n = await this.awaitScript(r.addr);
        return {
            addr: r.addr,
            ...n
        };
    }
    killReason() {
        return this.killedSize?.reason ?? this.killRecord()?.reason ?? "unknown";
    }
    requireOpen() {
        if (this.killed) {
            throw new x(`workflow run ${this.runId} was killed`, "workflow v2: run op on a killed run");
        }
    }
    requireFounded() {
        if (this.scope < 0) {
            throw new x(`workflow run ${this.runId} is not founded`, "workflow v2: run-op on an unfounded run");
        }
        if (this.lostOnResume) {
            throw new x(`workflow run ${this.runId} was restored from the journal on resume; its rules and work are gone \u2014 read its facts, or launch again`, "workflow v2: run op on a lost run");
        }
    }
    aborted() {
        let signal = this.controller.signal;
        if (signal.aborted) {
            return Promise.resolve();
        }
        return new Promise((resolvePromise)=>{
            signal.addEventListener("abort", ()=>resolvePromise(), {
                once: true
            });
        });
    }
    found(e, r, n, s) {
        let a = {
            ...e,
            abortController: this.controller
        };
        let w = F9n(a, r, (k)=>{
            if (k.type === "progress" && k.data.type === "workflow_log") {
                this.log(k.data.message);
            }
            this.sink?.onProgress(k);
        }, this.runId, (k, y)=>this.sink?.onAgentController(k, y), n.args, n.seedPhaseTitles, n.tokenBudget, n.journal, s, n.workflowName, n.invokingRequestId, n.parentPromptId, (k)=>this.sink?.onRateLimitWait?.(k));
        this.ctx = w;
        this.vmErrorInfo = Coe(w.vmContext);
        this.priorScopes = this.world.rows.filter((k)=>pr(k) && k.fact.runId === this.runId).map((k)=>k.addr);
        this.scope = this.world.rows.length;
        let h = this.world.subscribe((k)=>{
            if (k.kind === "runaway" && k.scope === this.scope) {
                h();
                this.kill("runaway");
            }
        });
        this.controller.signal.addEventListener("abort", h, {
            once: true
        });
        try {
            this.words = fr(w, this.world, this.scope, this.controller.signal);
            if (!this.vmScript) {
                throw new x("a run restored from the journal cannot be founded", "workflow v2: found() on a lost run");
            }
            let k = this.evalScript(this.vmScript, {
                topic: "script",
                founding: true,
                runId: this.runId
            }, "host", {
                in: N
            });
            if (k !== this.scope) {
                throw new x(`founding row landed at ${k}, expected ${this.scope}`, "workflow v2: founding address mismatch");
            }
            this.retractPriorLives();
            let y = this.killRecordRow();
            if (y !== undefined) {
                this.world.retract(y.addr);
            }
            this.world.settled(this.scope).then((R)=>{
                if (R.status === "retracted" || this.controller.signal.aborted) {
                    return;
                }
                this.cutUnawaitedScriptChildren();
            });
        } catch (error) {
            h();
            throw error;
        }
    }
    evalScript(e, r, n, s, a) {
        let ctx = this.ctx;
        let words = this.words;
        let k = {
            vmContext: ctx.vmContext,
            settle: ctx.vmBoundary.settle,
            sanitize: ctx.vmBoundary.sanitize,
            errorInfo: this.vmErrorInfo
        };
        let y = ()=>Ge(e, k);
        return this.world.eval(r, ()=>(a === undefined ? y() : words.as(a, y)).then((R)=>{
                if (R.error) {
                    throw new x(R.error, "workflow v2: script failed");
                }
                return R.value;
            }), n, s);
    }
}
function pr(e) {
    return e.in === N && e.kind === "eval" && e.by === "host" && e.fact.topic === "script" && e.fact.founding === true;
}
function Ur(e) {
    return e.kind === "eval" && e.fact.topic === "agent";
}
function Et(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e) && e.error !== undefined;
}
function Ne(e) {
    if (typeof e === "number" && Number.isFinite(e)) {
        return e;
    }
    return 0;
}
class Ee {
    byId = new Map;
}
function Br(e, r) {
    let n = new Map;
    for (let a of e.rows){
        if (!pr(a) || a.status === "pending" || typeof a.fact.runId !== "string") {
            continue;
        }
        let w = n.get(a.fact.runId);
        if (w) {
            w.push(a);
        } else {
            n.set(a.fact.runId, [
                a
            ]);
        }
    }
    let s = 0;
    for (let [a, w] of n){
        if (r.byId.has(a)) {
            continue;
        }
        let h = w.at(-1);
        r.byId.set(a, Qe.lost(a, e, h.addr, w.slice(0, -1).map((k)=>k.addr)));
        s++;
    }
    return s;
}
const $t = 600000;
class Kr {
    byName = new Map;
}
function Hr({ toolState, taskRegistry, name, runId, now = Date.now() }) {
    if (name === undefined) {
        return;
    }
    let byName = toolState.get(Kr).byName;
    let h = byName.get(name);
    byName.set(name, {
        runId,
        at: now
    });
    if (!h || now - h.at > $t) {
        return;
    }
    let k = toolState.get(Ee).byId.get(h.runId);
    g("workflow_relaunch_soon", {
        name: d(name),
        seconds_since_prev: Math.round((now - h.at) / 1000),
        prev_state: d(k ? k.state() : jt(taskRegistry, h.runId)),
        prev_was_steered: k?.wasSteered ?? false
    });
}
function jt(taskRegistry, runId) {
    for (let n of Object.values(taskRegistry.all())){
        if (n.type !== "local_workflow" || n.workflowRunId !== runId) {
            continue;
        }
        switch(n.status){
            case "pending":
            case "running":
                return "open";
            case "killed":
                return "killed";
            case "completed":
            case "failed":
            case "paused":
                return "settled";
        }
    }
    return "unknown";
}
function Me(e) {
    if (typeof e.runId !== "string") {
        return;
    }
    let r = e.put !== undefined || typeof e.retract === "number" || e.read !== undefined;
    return {
        runId: e.runId,
        ...e.put !== undefined && {
            put: e.put
        },
        ...typeof e.retract === "number" && {
            retract: e.retract
        },
        ...e.read !== undefined && {
            read: e.read
        },
        ...!r && typeof e.script === "string" && e.script !== "" && {
            script: e.script
        }
    };
}
const Lo = p(()=>u({
        verb: U([
            "put",
            "retract",
            "read",
            "script"
        ]),
        addr: E().optional(),
        retracted: M().optional(),
        rows: T(oe()).optional(),
        rowsTotal: E().optional(),
        foreignArtifactContent: M().optional(),
        error: o().optional(),
        reopened: M(),
        status: u({
            pending: E()
        }),
        killed: u({
            at: E(),
            reason: U([
                ...Ye,
                "unknown"
            ]).catch("unknown"),
            rows: E(),
            pending: E(),
            rules: E(),
            agents: E()
        }).optional()
    }));
function mr(e) {
    let r = [];
    if (e.put !== undefined) {
        r.push("put");
    }
    if (e.retract !== undefined) {
        r.push("retract");
    }
    if (e.read !== undefined) {
        r.push("read");
    }
    if (e.script !== undefined) {
        r.push("script");
    }
    if (r.length === 1) {
        return r[0];
    }
}
const Nt = p(()=>{
    let e = Hf().nonnegative();
    return Wr("k", [
        u({
            k: A("put"),
            addr: e,
            kind: U([
                "put",
                "eval",
                "sub"
            ]),
            fact: ar(),
            by: o(),
            in: Hf().min(N),
            at: E().finite(),
            status: U(jr)
        }).refine((r)=>r.in < r.addr, {
            message: "`in` must be ROOT or an earlier address"
        }),
        u({
            k: A("settled"),
            addr: e,
            status: U([
                "done",
                "failed"
            ]),
            value: oe().optional(),
            error: o().optional()
        }),
        u({
            k: A("retracted"),
            addr: e
        })
    ]);
});
const Yr = "world.jsonl";
const maxBytes = 4194304;
function Gr() {
    let e = LW();
    return join(e, K(), Yr);
}
function Xr(e) {
    let r = dirname(e);
    let n = DW(dirname(r));
    if (n === undefined || basename(e) !== Yr) {
        return;
    }
    let s = $e.sessionJournal(n, basename(r), "world");
    if (Mg(s) === undefined) {
        return s;
    }
}
function Zr(e, r, n) {
    let s = Xr(r);
    let a = false;
    let w = false;
    let h = Promise.resolve();
    let k = (R)=>{
        h = h.then(async ()=>{
            if (w) {
                return;
            }
            if (j() && n !== undefined && s !== undefined) {
                let I = await n.append(s, [
                    {
                        data: ON(R)
                    }
                ]);
                if (!I.ok) {
                    t(`world journal append failed: ${gt(I.error)}`, {
                        level: "warn"
                    });
                    throw Error("world journal append failed", {
                        cause: I.error
                    });
                }
                return;
            }
            if (!a) {
                await mkdir(dirname(r), {
                    recursive: true
                });
                a = true;
            }
            await appendFile(r, ON(R));
        }).catch((I)=>{
            w = true;
            y();
            f("workflow_journal", "append_failed");
            t(`world journal append failed; the writer detaches and this session's later rows stay in memory only: ${I}`, {
                level: "warn"
            });
        });
    };
    let y = e.subscribe((R)=>{
        switch(R.kind){
            case "put":
                {
                    let { addr, kind, fact, by, at, status } = R.row;
                    k({
                        k: "put",
                        addr,
                        kind,
                        fact,
                        by,
                        in: R.row.in,
                        at,
                        status
                    });
                    return;
                }
            case "settled":
                {
                    let { addr, status, value, error } = R.row;
                    if (status === "done") {
                        k({
                            k: "settled",
                            addr,
                            status,
                            value
                        });
                    } else if (status === "failed") {
                        k({
                            k: "settled",
                            addr,
                            status,
                            error
                        });
                    }
                    return;
                }
            case "retracted":
                k({
                    k: "retracted",
                    addr: R.row.addr
                });
                return;
            case "runaway":
                return;
        }
    });
    return ()=>{
        y();
        return h;
    };
}
async function Qr(e, r) {
    let n = Xr(e);
    if (j() && r !== undefined && n !== undefined) {
        let k = await Ut(r, n);
        if (k === undefined) {
            return {
                lines: [],
                skipped: 0
            };
        }
        let y = qr(k);
        let R = await r.statMeta(n);
        if (!R.ok) {
            t(`world journal stat failed: ${gt(R.error)}`, {
                level: "warn"
            });
            throw Error("world journal stat failed", {
                cause: R.error
            });
        }
        if ((R.value.storedBytes ?? R.value.size) > R.value.size) {
            return {
                lines: y.lines,
                skipped: y.skipped + 1
            };
        }
        return y;
    }
    let s;
    try {
        s = await readFile(e, "utf8");
    } catch (error) {
        if (z(error)) {
            return {
                lines: [],
                skipped: 0
            };
        }
        throw error;
    }
    let a = s.split(`
`);
    let w = s.length > 0 && !s.endsWith(`
`);
    if (w) {
        a.pop();
    }
    let h = qr(a);
    if (w) {
        return {
            lines: h.lines,
            skipped: h.skipped + 1
        };
    }
    return h;
}
function qr(e) {
    let lines = [];
    let n = new Set;
    let skipped = 0;
    for (let a of e){
        if (!a) {
            continue;
        }
        let w;
        try {
            w = $o(a);
        } catch  {
            skipped++;
            continue;
        }
        let h = Nt().safeParse(w);
        if (!h.success) {
            skipped++;
            continue;
        }
        if (h.data.k === "put") {
            if (n.has(h.data.addr)) {
                skipped++;
                continue;
            }
            n.add(h.data.addr);
        }
        lines.push(h.data);
    }
    if (skipped > 0) {
        t(`world journal: skipped ${skipped} malformed or invalid line(s)`, {
            level: "warn"
        });
    }
    return {
        lines,
        skipped
    };
}
function et(lines) {
    let r = 0;
    for (let n of lines){
        if (n.addr >= r) {
            r = n.addr + 1;
        }
    }
    return r;
}
async function Ut(e, r) {
    let n = new TextDecoder("utf-8", {
        ignoreBOM: true
    });
    let s = [];
    let fromSeq;
    while(true){
        let w = await e.readRecords(r, {
            ...fromSeq !== undefined && {
                fromSeq
            },
            maxBytes
        });
        if (!w.ok) {
            if (w.error.code === "NotFound") {
                return;
            }
            t(`world journal read failed: ${gt(w.error)}`, {
                level: "warn"
            });
            throw Error("world journal read failed", {
                cause: w.error
            });
        }
        for (let k of w.value.items){
            let y = n.decode(k.data);
            s.push(y.endsWith(`
`) ? y.slice(0, -1) : y);
        }
        let h = w.value.nextSeq;
        if (h === undefined) {
            return s;
        }
        if (fromSeq !== undefined && h <= fromSeq) {
            throw Error("world journal read cursor failed to advance");
        }
        fromSeq = h;
    }
}
function rt(e, lines) {
    if (e.rows.length > 0) {
        throw Error("replayWorldJournal: the world is not empty");
    }
    let n = new Map;
    let s = new Map;
    let a = new Set;
    for (let h of lines){
        switch(h.k){
            case "put":
                n.set(h.addr, h);
                break;
            case "settled":
                s.set(h.addr, h);
                break;
            case "retracted":
                a.add(h.addr);
                break;
        }
    }
    let w = [];
    for(let h = 0; h < n.size; h++){
        let k = n.get(h);
        if (!k) {
            break;
        }
        let y = {
            addr: h,
            kind: k.kind,
            fact: k.fact,
            by: k.by,
            in: k.in,
            at: k.at,
            status: k.status
        };
        let R = s.get(h);
        if (R) {
            y.status = R.status;
            if (R.status === "done") {
                y.value = R.value;
            } else {
                y.error = R.error;
            }
        }
        if (a.has(h)) {
            y.status = "retracted";
        } else if (y.kind === "sub" && y.status === "live") {
            y.status = "retracted";
        } else if (y.status === "pending") {
            y.status = "failed";
            y.error = "lost on resume";
        }
        w.push(y);
    }
    e.restore(w);
    return w.length;
}
const tt = new lt(()=>new lr);
function gr(e) {
    return tt.of(e);
}
class nt {
    opened;
    unsubscribe;
}
const hr = new lt(()=>new nt);
const Bt = new lt(()=>new Map);
function kr(e, r) {
    let n = hr.of(e);
    if (n.opened) {
        return n.opened;
    }
    if (n.unsubscribe === undefined) {
        let s = K();
        n.unsubscribe = vd((a, w)=>{
            if (w === "cd" || w === "hydrate" || a === s) {
                return;
            }
            n.unsubscribe?.();
            hr.drop(e);
            tt.drop(e);
        });
    }
    n.opened = (async ()=>{
        let s = gr(e);
        let a = Gr();
        let w = Bt.of(e);
        let h = w.get(a);
        if (h !== undefined) {
            f("workflow_journal", "writer_reclaimed");
            t(`world journal at ${a} had a writer from before a session switch; the re-entered session reclaims the file and the pre-switch world stops journaling`, {
                level: "warn"
            });
            await h();
            if (w.get(a) === h) {
                w.delete(a);
            }
        }
        let restored = 0;
        let y = false;
        let R = false;
        try {
            let { lines, skipped } = await Qr(a, r);
            if (lines.length > 0 && s.rows.length === 0) {
                restored = rt(s, lines);
            }
            y = skipped === 0 && restored === et(lines) && s.rows.length === restored;
        } catch (error) {
            R = true;
            t(`world journal replay failed: ${error}`, {
                level: "warn"
            });
        }
        if (hr.peek(e) !== n) {
            return kr(e, r);
        }
        if (!y) {
            f("workflow_journal", R ? "replay_failed" : "not_whole");
            t(`world journal at ${a} is not whole after replay (${restored} rows restored); the world stays in memory for this session`, {
                level: "warn"
            });
            if (R) {
                n.opened = undefined;
            }
            return {
                restored,
                attached: false
            };
        }
        w.set(a, Zr(s, a, r));
        g("workflow_journal");
        return {
            restored,
            attached: true
        };
    })();
    return n.opened;
}
const br = 80;
const qt = new Set([
    "args"
]);
async function st(e) {
    await kr(e.session, e.storageV5);
    Br(gr(e.session), e.toolState.get(Ee));
}
function we() {}
function yr(e, tools) {
    if (e.name === undefined && (e.script !== undefined || e.scriptPath !== undefined) && EOe(tools)) {
        return `
Load the \`${qM}\` skill for the script reference if you have not, fix the script, and retry.`;
    }
    return "";
}
function it() {
    return "";
}
const Yt = "script contains control characters that would be hidden in the approval dialog";
const Gt = p(()=>De({
        script: o().max(Sv).refine(MR, Yt).optional().describe(`Self-contained workflow script. Must begin with \`export const meta = { name, description, phases }\` (pure literal, no computed values) followed by the script body using agent()/parallel()/pipeline()/phase().${we()?.SCRIPT_DESCRIPTION_V2 ?? ""}`),
        name: o().refine((e)=>FP(e) === e, "contains control or invisible format characters").optional().describe("Name of a predefined workflow (built-in or from .claude/workflows/). Resolves to a self-contained script."),
        description: o().optional().describe("Ignored — set the workflow description in the script's `meta` block."),
        title: o().optional().describe("Ignored — set the workflow title in the script's `meta` block."),
        args: oe().optional().describe("Optional input value exposed to the script as the global `args`, verbatim. Pass arrays/objects as actual JSON values, NOT as a " + "JSON-encoded string — a stringified list breaks `args.filter`/" + "`args.map` in the script. Use for parameterized named workflows (e.g. a research question)."),
        scriptPath: o().refine((e)=>FP(e) === e, "contains control or invisible format characters").optional().describe("Path to a workflow script file on disk. Every Workflow invocation persists its script under the session directory and returns the path in the tool result. To iterate, edit that file with Write/Edit and re-invoke Workflow with the same `scriptPath` instead of re-sending the full script. Takes precedence over `script` and `name`."),
        resumeFromRunId: o().regex(/^wf_[a-z0-9-]{6,}$/).optional().describe(`Run ID of a prior Workflow invocation to resume from. Completed agent() calls with unchanged (prompt, opts) return their cached results instantly; only edited or new calls re-run. Same-session only. Stop the prior run first (${Uc}) before resuming.`),
        ...we()?.runOpFields() ?? {},
        ...false
    }).refine((e)=>e.script || e.name || e.scriptPath || e.runId, {
        message: "Must provide script, name, scriptPath, or runId"
    }));
const Xt = p(()=>u({
        status: U([
            "async_launched",
            "remote_launched",
            ...we() ? [
                we().RUN_OP_STATUS
            ] : []
        ]),
        taskId: o(),
        taskType: U([
            "local_workflow",
            "remote_agent"
        ]).optional().describe("TaskType of the registered background task — 'local_workflow' for in-process runs, 'remote_agent' when remote:true dispatches to CCR. Set on all new writes; absent only on transcripts written before this field existed."),
        workflowName: o().optional().describe("meta.name from the workflow script — same value as task_started.workflow_name. Set on all new writes; absent only on transcripts written before this field existed."),
        runId: o().optional().describe("Local workflow run identifier for resumeFromRunId. Absent for remote_launched (the CCR session URL is the resume handle there) and on transcripts written before this field existed."),
        summary: o().optional(),
        transcriptDir: o().optional().describe("Directory where subagent transcripts are written during execution"),
        scriptPath: o().optional().describe("Path to the persisted workflow script for this invocation. Editable via Write/Edit; pass back as `scriptPath` to re-run without resending the script."),
        sessionUrl: o().optional().describe("CCR session URL when status is remote_launched"),
        warning: o().optional().describe("Non-blocking heads-up (e.g. local git state diverges from the pushed branch the cloud session will clone)"),
        error: o().optional().describe("Set if syntax check failed"),
        ...we()?.runOpOutputFields() ?? {}
    }));
class be extends Error {
    constructor(e){
        super(e);
        this.name = "WorkflowInputError";
    }
}
async function Rr(e, r, storageV5) {
    if (e.scriptPath) {
        let s;
        let resolvedScriptPath;
        if (e.script) {
            s = e.script;
            resolvedScriptPath = resolve(se(), e.scriptPath);
        } else {
            let w = await nhn(e.scriptPath, r);
            if ("error" in w) {
                return w;
            }
            s = w.script;
            resolvedScriptPath = w.path;
        }
        if (W1t().some((w)=>w.script === s || w.v2Script === s)) {
            return {
                script: s,
                resolvedScriptPath,
                source: "built-in",
                scriptMatchesDefinition: true
            };
        }
        return {
            script: s,
            resolvedScriptPath
        };
    }
    if (e.name) {
        let s = await j1t(e.name, se(), storageV5);
        if (!s) {
            let a = (await TOe(se(), storageV5)).map((w)=>w.name).join(", ");
            return {
                error: `Workflow "${e.name}" not found. Available: ${a || "(none)"}`
            };
        }
        return {
            script: e.script ?? s.script,
            source: s.source,
            scriptMatchesDefinition: e.script === undefined || e.script === s.script
        };
    }
    if (e.script) {
        return {
            script: e.script
        };
    }
    return {
        error: "Must provide script, name, or scriptPath"
    };
}
const vr = {
    result: false,
    message: "Tool dispatch was retracted by a server fallback; the input may be truncated.",
    errorCode: 7
};
function Sr(e, r) {
    return {
        get session () {
            return e.session;
        },
        get storageV5 () {
            return e.storageV5;
        },
        get credentials () {
            return e.credentials;
        },
        get agentId () {
            return e.agentId;
        },
        get agentContext () {
            return e.agentContext;
        },
        get taskRegistry () {
            return e.taskRegistry;
        },
        get toolState () {
            return e.toolState;
        },
        get tools () {
            return e.tools;
        },
        get messages () {
            return e.messages;
        },
        get permissions () {
            return e.permissions;
        },
        get toolUseId () {
            return r.toolUseId;
        },
        get signal () {
            return r.signal;
        },
        get abortController () {
            return {
                signal: r.signal
            };
        }
    };
}
function Zt(e) {
    if (!e.runEngine) {
        throw Error("Workflow: launching needs the executor (call.runEngine)");
    }
    return e.runEngine;
}
export const WorkflowTool = Kt({
    name: pu,
    aliases: [
        "RunWorkflow"
    ],
    searchHint: "orchestrate subagents with deterministic JavaScript workflow",
    enablesCodeExecution: true,
    backgrounding: "never",
    maxResultSizeChars: 100000,
    isEnabled: ()=>dg(),
    async prompt (e) {
        return fBr(EOe(e?.tools)) + u7r(ce().workflowSizeGuideline, ude()) + it();
    },
    async description (e, r) {
        return fBr(EOe(r?.tools)) + u7r(ce().workflowSizeGuideline, ude()) + it();
    },
    get inputSchema () {
        return Gt();
    },
    get outputSchema () {
        return Xt();
    },
    coerceInput: (e)=>Tr(e, {
            apply: vuo()
        }),
    streamedInputRepairExemptKeys: ()=>{
        if (vuo()) {
            return undefined;
        }
        return qt;
    },
    toAutoClassifierInput (e) {
        let r = we();
        if (r && typeof e.runId === "string") {
            return r.runOpClassifierInput(e);
        }
        if (e.script && e.scriptPath) {
            return `${e.script}

scriptPath: ${e.scriptPath}`;
        }
        if (e.script && e.name) {
            return `${e.script}

name: ${e.name}`;
        }
        return e.script || e.scriptPath || e.name || "";
    },
    userFacingName () {
        return "Workflow";
    },
    getToolUseSummary (e) {
        let r = e ? Me(e) : undefined;
        if (r && we()) {
            return `workflow ${r.runId} \xB7 ${mr(r) ?? "?"}`;
        }
        if (e?.scriptPath) {
            let n = basename(FP(e.scriptPath));
            if (e.script) {
                return `${n} \xB7 ${Ae(e.script)}`;
            }
            return n;
        }
        if (e?.name) {
            if (e.script) {
                return `dynamic workflow: ${FP(e.name)} \xB7 ${Ae(e.script)}`;
            }
            return `dynamic workflow: ${FP(e.name)}`;
        }
        if (!e?.script) {
            return null;
        }
        return Ae(e.script);
    },
    create (e) {
        return {
            async validateInput (r, n) {
                let s = Sr(e, n);
                if (F7(s.signal)) {
                    return vr;
                }
                let cause = Suo();
                if (cause !== undefined) {
                    let remedy = {
                        kind: "feature_disabled",
                        feature: "workflows",
                        cause
                    };
                    if (cause === "managed_settings") {
                        return {
                            result: false,
                            message: "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
                            errorCode: 5,
                            remedy
                        };
                    }
                    return {
                        result: false,
                        message: 'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
                        errorCode: 6,
                        remedy
                    };
                }
                if (typeof r.runId === "string") {
                    let y = we();
                    if (!y) {
                        return {
                            result: false,
                            message: "runId is not a field of this tool here.",
                            errorCode: 9
                        };
                    }
                    await st(s);
                    let R = await y.validateRunOp(r, s);
                    if (R) {
                        return R;
                    }
                }
                if (LQe()) {
                    let y = [
                        r.script && "script",
                        r.scriptPath && "scriptPath",
                        r.resumeFromRunId && "resumeFromRunId",
                        r.remote && "remote"
                    ].filter((R)=>Boolean(R));
                    if (y.length > 0) {
                        return {
                            result: false,
                            message: `This session restricts the Workflow tool to named workflows (${_Go} is set). Not allowed here: ${y.join(", ")}. Invoke as {name, args} only.`,
                            errorCode: 8
                        };
                    }
                }
                if (r.scriptPath) {
                    let y = $9n(r.scriptPath, s);
                    if (y !== null) {
                        return {
                            result: false,
                            message: y,
                            errorCode: 15
                        };
                    }
                }
                let w;
                if (r.resumeFromRunId) {
                    let y = Ir(r.resumeFromRunId, s);
                    if (y) {
                        return {
                            result: false,
                            message: y,
                            errorCode: 3
                        };
                    }
                    let R = await U9n(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(N1t));
                    if (F7(s.signal)) {
                        return vr;
                    }
                    if (R.kind === "refused") {
                        return {
                            result: false,
                            message: R.message,
                            errorCode: 16
                        };
                    }
                    if (r.scriptPath) {
                        w = q1r(R, r.scriptPath);
                    }
                }
                let h = await Rr(r, s, s.storageV5);
                if ("error" in h && w !== undefined) {
                    h = await Rr({
                        ...r,
                        script: w
                    }, s, s.storageV5);
                }
                if (F7(s.signal)) {
                    return vr;
                }
                if ("error" in h) {
                    if (r.name && !r.scriptPath) {
                        m("workflow_resolve", "not_found");
                    }
                    return {
                        result: false,
                        message: h.error,
                        errorCode: 1
                    };
                }
                if (r.name && !r.scriptPath) {
                    g("workflow_resolve");
                }
                if (!MR(h.script)) {
                    return {
                        result: false,
                        message: `${r.scriptPath ? `Workflow script file ${r.scriptPath}` : `The file of workflow "${r.name}"`} contains a control character that an approval prompt cannot show, such as an escape byte or a carriage return that is not part of a CRLF line ending. Remove it from the file and try again.`,
                        errorCode: 17
                    };
                }
                let k = Kb(h.script);
                if ("error" in k) {
                    return {
                        result: false,
                        message: `Invalid workflow script: ${k.error}${yr(r, s.tools)}`,
                        errorCode: 2
                    };
                }
                if (r.script && thn(k.scriptBody)) {
                    return {
                        result: false,
                        message: `Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.${yr(r, s.tools)}`,
                        errorCode: 4
                    };
                }
                return {
                    result: true
                };
            },
            async checkPermissions (r, n) {
                let s = Sr(e, n);
                let a = s.permissions();
                let w = Me(r) !== undefined;
                let ruleContent = r.scriptPath || w ? undefined : r.name;
                let k = (P)=>{
                    if (ruleContent) {
                        return jD(a, pu, P).get(ruleContent);
                    }
                };
                let y = k("deny");
                if (y) {
                    return {
                        behavior: "deny",
                        message: `Workflow ${ruleContent} blocked by permission rules`,
                        decisionReason: {
                            type: "rule",
                            rule: y
                        }
                    };
                }
                let R = w ? Me(r) : undefined;
                if (R && mr(R) === "read") {
                    return {
                        behavior: "allow",
                        updatedInput: r,
                        decisionReason: {
                            type: "other",
                            reason: ipe
                        }
                    };
                }
                let I = r;
                if (w) ;
                else if (r.scriptPath) {
                    let P = await nhn(r.scriptPath, s);
                    let D = "error" in P && r.resumeFromRunId && $9n(r.scriptPath, s) === null ? q1r(await U9n(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(N1t)), r.scriptPath) : undefined;
                    if (D !== undefined) {
                        I = {
                            ...r,
                            script: D
                        };
                    } else if ("error" in P) {
                        return {
                            behavior: "deny",
                            message: P.error,
                            decisionReason: {
                                type: "other",
                                reason: "workflow scriptPath outside the readable set"
                            }
                        };
                    } else {
                        I = {
                            ...r,
                            script: P.script
                        };
                    }
                } else if (r.name) {
                    let P = await j1t(r.name, se(), s.storageV5);
                    I = {
                        ...r,
                        script: P?.script
                    };
                }
                let message = w && we()?.RUN_OP_CONSENT_MESSAGE || "Review dynamic workflow before running";
                let G = k("ask");
                if (G) {
                    return {
                        behavior: "ask",
                        message,
                        updatedInput: I,
                        decisionReason: {
                            type: "rule",
                            rule: G
                        }
                    };
                }
                let H = k("allow");
                if (H) {
                    return {
                        behavior: "allow",
                        updatedInput: I,
                        decisionReason: {
                            type: "rule",
                            rule: H
                        }
                    };
                }
                return {
                    behavior: "ask",
                    message,
                    updatedInput: I,
                    ...ruleContent && {
                        suggestions: [
                            {
                                type: "addRules",
                                rules: [
                                    {
                                        toolName: pu,
                                        ruleContent
                                    }
                                ],
                                behavior: "allow",
                                destination: "localSettings"
                            }
                        ]
                    }
                };
            },
            async call (r, n) {
                let s = Sr(e, n);
                let { parentMessage } = n;
                if (s.agentId !== undefined && a$(s.agentId)) {
                    m("subagent_launch", "workflow_spawner_stop_pending");
                    throw new be("This agent has been stopped and its stop is still completing; it cannot launch workflows or act on existing runs.");
                }
                if (typeof r.runId === "string") {
                    let V = we();
                    if (!V) {
                        throw new be("runId is not a field of this tool here.");
                    }
                    await st(s);
                    let J = await V.callRunOp(r, s);
                    if (J) {
                        return {
                            data: {
                                status: V.RUN_OP_STATUS,
                                taskId: "",
                                runId: J.runId,
                                runOp: J.runOp
                            }
                        };
                    }
                }
                if (r.resumeFromRunId) {
                    let V = Ir(r.resumeFromRunId, s);
                    if (V) {
                        throw new be(V);
                    }
                    let J = await aGo(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(N1t));
                    if (J !== null) {
                        throw new be(J);
                    }
                }
                let w = await Rr(r, s, s.storageV5);
                if ("error" in w) {
                    throw new be(w.error);
                }
                let { script, source, resolvedScriptPath } = w;
                let R = (script)=>{
                    let J = r.resumeFromRunId == null ? undefined : lGo(r.resumeFromRunId, s.toolState, s.taskRegistry);
                    if (J === "") {
                        throw new be("This workflow run hides its script, and this session has not loaded that script yet. If its background resume is still running, wait for it; if that resume failed, start a new run without resumeFromRunId.");
                    }
                    if (J !== undefined && J !== at(script)) {
                        throw new be("This workflow run hides its script, so it can only be resumed with its original script file, unedited. To run a changed script, start a new run without resumeFromRunId.");
                    }
                    return J;
                };
                R(script);
                let scriptIsVerbatimBuiltIn = source === "built-in" && w.scriptMatchesDefinition === true;
                let W = Kb(script);
                if ("error" in W) {
                    throw new be(`Invalid workflow script: ${W.error}`);
                }
                let G = r.resumeFromRunId ?? `wf_${randomUUID().slice(0, 12)}`;
                let taskId = hE("local_workflow");
                let description = W.meta.description;
                let name = W.meta.name;
                let Z = $ie(W.scriptBody);
                if (!Z.ok) {
                    m("task_local_workflow", "compile_failed");
                    return {
                        data: {
                            status: "async_launched",
                            taskId,
                            taskType: "local_workflow",
                            workflowName: name,
                            runId: G,
                            summary: description,
                            error: `${Z.error}${yr(r, s.tools)}`
                        }
                    };
                }
                let transcriptDir = Q0(G);
                let scriptPath = resolvedScriptPath ?? e0n(name, G, script, s.storageV5);
                iGo(G, scriptPath, script, s.toolState.get(N1t));
                let de = r.scriptPath ? undefined : source;
                let source_1 = r.scriptPath ? "scriptPath" : source ?? "inline";
                let me = rhn(name, de, scriptIsVerbatimBuiltIn);
                let re = ohn(W.meta.description, de, scriptIsVerbatimBuiltIn);
                i("tengu_workflow_launched", {
                    invocation_mode: b(r.scriptPath ? "scriptPath" : r.name ? "named" : "inline"),
                    workflow_source: d(source_1),
                    workflow_name: me,
                    workflow_description: re,
                    phase_count: W.meta.phases?.length ?? 0,
                    launched_from_subagent: s.agentId != null,
                    has_args: r.args != null,
                    is_resume: r.resumeFromRunId != null,
                    script_size_chars: script.length
                });
                if (r.resumeFromRunId == null) {
                    Hr({
                        toolState: s.toolState,
                        taskRegistry: s.taskRegistry,
                        name: $1t(de, scriptIsVerbatimBuiltIn) ? eir(name) : undefined,
                        runId: G
                    });
                }
                let B = {
                    workflowRunId: G,
                    script,
                    scriptPath,
                    args: r.args,
                    meta: W.meta,
                    vmScript: Z.vmScript,
                    toolUseId: s.toolUseId,
                    transcriptDir,
                    telemetry: {
                        source: source_1,
                        name: me,
                        description: re,
                        scriptIsVerbatimBuiltIn
                    },
                    invokingRequestId: parentMessage?.requestId,
                    parentPromptId: pDe(s.messages(), s.agentContext)
                };
                let C = Zt(n);
                let te = (V)=>C(F1t, V);
                if (r.resumeFromRunId) {
                    let V = Ir(r.resumeFromRunId, s);
                    if (V) {
                        m("task_local_workflow", "resume_collision");
                        throw new be(V);
                    }
                }
                let ye = R(script) !== undefined;
                te({
                    ...B,
                    taskId,
                    isResume: r.resumeFromRunId != null,
                    ...ye && {
                        withholdScriptFromSdkEvents: true
                    }
                });
                return {
                    data: {
                        status: "async_launched",
                        taskId,
                        taskType: "local_workflow",
                        workflowName: name,
                        runId: G,
                        summary: description,
                        transcriptDir,
                        scriptPath
                    }
                };
            }
        };
    },
    renderToolUseMessage (e, { verbose }) {
        let n = Me(e);
        let s = we();
        if (n && s) {
            return s.renderRunOp(n, verbose);
        }
        if (e.scriptPath) {
            let a = FP(e.scriptPath);
            let w = verbose ? a : basename(a);
            if (!e.script) {
                return w;
            }
            if (verbose) {
                return `${a}
${e.script}`;
            }
            return `${w} \xB7 ${Ae(e.script)}`;
        }
        if (e.name) {
            let a = FP(e.name);
            if (!e.script) {
                return `dynamic workflow: ${a}`;
            }
            if (verbose) {
                return `dynamic workflow: ${a}
${e.script}`;
            }
            return `dynamic workflow: ${a} \xB7 ${Ae(e.script)}`;
        }
        if (!e.script) {
            return null;
        }
        if (verbose) {
            return e.script;
        }
        return Ae(e.script);
    },
    mapToolResultToToolResultBlockParam (e, tool_use_id) {
        if (e.error) {
            return {
                tool_use_id,
                type: "tool_result",
                content: `Workflow script has a syntax error and was not launched:
${e.error}`,
                is_error: true
            };
        }
        let n = we()?.runOpToolResultText(e.runId, e.runOp);
        if (n) {
            return {
                tool_use_id,
                type: "tool_result",
                content: n.content,
                is_error: n.isError
            };
        }
        if (e.status === "remote_launched") {
            return {
                tool_use_id,
                type: "tool_result",
                content: `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` + (e.summary ? `Summary: ${e.summary}
` : "") + (e.warning ? `Warning: ${e.warning}
` : "") + `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
                is_error: false
            };
        }
        let s = e.summary ? `
Summary: ${e.summary}` : "";
        let a = e.transcriptDir ? `
Transcript dir: ${e.transcriptDir}` : "";
        let w = e.scriptPath ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)` : "";
        let h = e.runId && e.scriptPath ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results (cached results may themselves be empty \u2014 inspect journal.jsonl before assuming there is something to recover).` : "";
        e.runId;
        let k = "";
        let content = `Workflow launched in background. Task ID: ${e.taskId}${s}${a}${w}${h}${k}

You will be notified when it completes. Use /workflows to watch live progress.`;
        return {
            tool_use_id,
            type: "tool_result",
            content,
            is_error: false
        };
    }
});
function Ae(script) {
    let r = Kb(script);
    if (!("error" in r)) {
        return FP(r.meta.description);
    }
    let n = script.split(`
`).find((k)=>k.trim()) ?? ne(script, 40);
    let s = ae(n) > br || n.length > br ? `${ne(n, br - 1)}…` : n;
    let a = Lt(script, `
`) + 1;
    let w = vZ(a - 1);
    let h = FP(s);
    if (w) {
        return `${h} ${w}`;
    }
    return h;
}
function Ir(resumeFromRunId, r) {
    for (let [s, a] of Object.entries(r.taskRegistry?.all() ?? {})){
        if (a.type !== "local_workflow" || a.workflowRunId !== resumeFromRunId) {
            continue;
        }
        if (a.status === "running") {
            return `Workflow ${resumeFromRunId} is still running (task ${s}). Stop it first with ${Uc}({taskId: "${s}"}) before resuming.`;
        }
        if (!fw(s)) {
            if (a.status === "paused") {
                return `Workflow ${resumeFromRunId} is paused but its run has not exited yet (task ${s}); its agents are being stopped. Resuming now would run two copies of its agents against the same journal \u2014 wait for it to exit.`;
            }
            return `Workflow ${resumeFromRunId} is not running but its run has not exited yet (task ${s}). Resuming now would run two copies of its agents against the same journal. Run ${Uc}({taskId: "${s}"}) on it or wait for it to exit.`;
        }
    }
    let n = r.toolState.get(Ee).byId.get(resumeFromRunId);
    if (n !== undefined && !n.isKilled && n.isActive) {
        return `Workflow ${resumeFromRunId} is still running. Wait for it to settle, or stop it first with ${Uc}, before resuming.`;
    }
}
