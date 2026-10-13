import { Me, GFn } from "/$bunfs/root/chunk-b97fvbrv.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { bFn, mY, zSs, Gd, Aoe, YSs, RV, AFn, ybe, DSr, ago, tlt, YQt, JSs, jNs, lgo, $Ye as budgetMs, rP, _be, QSs, $Sr, rlt, JCe, Sgo, GNs, wgo, cws } from "/$bunfs/root/chunk-30jbnw20.js";
import { LT, Hgo } from "/$bunfs/root/chunk-fzmwt34b.js";
import { nwr, Cgo, llt, QPt } from "/$bunfs/root/chunk-nbx3tg29.js";
import { oo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { isProxy } from "util/types";
import { AsyncLocalStorage } from "async_hooks";
const _ = (type)=>type === "engine" || type === "Svg";
const I = (e)=>e === "Button" || e === "Input" || e === "Select" || e === "Markdown";
const ke = (type)=>type === "Button" || !_(type) && type !== "Client" && type !== "Raster" && type !== "Image" && !I(type);
function D(e, t) {
    let { children } = e;
    if (Array.isArray(children) && ke(e.type)) {
        return children.flatMap(t);
    }
    return [];
}
const F = (e)=>{
    if (L(e)) {
        return e.plugin;
    }
};
function zmo(e) {
    if (!L(e)) {
        return [];
    }
    let t = e;
    if (t.type !== "Client") {
        return D(t, zmo);
    }
    let { props } = t;
    let o = F(t.client);
    let n = L(props) ? props.key : undefined;
    let module = L(props) ? props.module : undefined;
    if (typeof o === "string" && o !== "" && typeof n === "string" && typeof module === "string") {
        return [
            {
                plugin: o,
                module,
                key: n
            }
        ];
    }
    return [];
}
function ve(e) {
    if (!Array.isArray(e)) {
        return;
    }
    let t = e.map((o)=>{
        if (typeof o === "object" && o !== null && "value" in o) {
            return o.value;
        }
    });
    if (t.every((o)=>typeof o === "string")) {
        return t;
    }
}
function FPt(e) {
    if (typeof e !== "object" || !e || Array.isArray(e)) {
        return [];
    }
    let t = e;
    let t_type = t.type;
    let o = D(t, FPt);
    if (!I(t_type)) {
        return o;
    }
    let { press, props } = t;
    if (!(typeof press === "object" && press !== null)) {
        return o;
    }
    let { plugin, handle } = press;
    let element = props?.key;
    if (!(typeof plugin === "string" && typeof handle === "number" && typeof element === "string")) {
        return o;
    }
    let pressableLinks = props?.pressableLinks;
    let H = Array.isArray(pressableLinks) && pressableLinks.every((v)=>typeof v === "string");
    let options = t_type === "Select" ? ve(props?.options) : undefined;
    return [
        {
            tag: t_type,
            plugin,
            handle,
            element,
            ...H && {
                pressableLinks
            },
            ...options !== undefined && {
                options
            }
        },
        ...o
    ];
}
const ie = (e)=>`${e.plugin}\x00client\x00${e.key}\x00${e.module}`;
const yt = ()=>({
        seen: new Set,
        groups: new Map,
        counted: new WeakSet
    });
const fSr = (e)=>`${e.plugin}\x00scope\x00${e.scope}`;
const hFn = (e)=>e === "Box" || e === "Text";
function UPt(e) {
    let t = L(e) ? e.scope : undefined;
    if (typeof t === "string") {
        return t;
    }
}
function Te(e) {
    let t = L(e) ? e : {};
    let { hover, press, group } = t;
    let i = UPt(hover);
    let t_type = t.type;
    let u = L(press) && typeof press.handle === "number" ? press : undefined;
    let c = I(t_type) ? u : hFn(t_type) ? group : undefined;
    let g = F(c);
    return [
        ...i !== undefined && typeof g === "string" && g !== "" ? [
            {
                plugin: g,
                scope: i
            }
        ] : [],
        ...D(t, Te)
    ];
}
const LQt = String.fromCharCode(0);
const me = (e)=>[
        "image",
        e.plugin,
        e.key ?? ""
    ].join(LQt);
function G(key, t, r) {
    let o = r === "Raster";
    let n = o ? "a Raster" : "an Image";
    let i = o ? "cells" : "source";
    return `returned ${n} it did not draw (${String(t)}/${String(key)}); a render hook may keep the ones next(e) returned and change their ${i}, not which plugin or key they name`;
}
const he = (e, t)=>({
        ...e,
        image: {
            plugin: t
        }
    });
const we = {
    stampOf: (e)=>e.image,
    restamp: he,
    seenKeyOf: (e, t)=>{
        let key = e.props.key;
        if (key === undefined || typeof key === "string") {
            return me({
                plugin: t,
                key
            });
        }
    },
    refusal: (e, t)=>G(e.props.key, t, "Image")
};
function He(e) {
    if (!L(e)) {
        return [];
    }
    let t = e;
    if (t.type !== "Image") {
        return D(t, He);
    }
    let { props } = t;
    let o = F(t.image);
    let n = L(props) ? props.key : undefined;
    if (typeof o === "string" && o !== "") {
        return [
            {
                plugin: o,
                key: typeof n === "string" ? n : undefined
            }
        ];
    }
    return [];
}
function Re(e) {
    return e === "onPress" || e === "onEvent";
}
const Se = (e)=>LT(e) && typeof e.type === "string";
const q = (e)=>typeof e === "string" || _(e.type);
const z = (e)=>I(e.type) && "press" in e && L(e.press);
const Ee = (e)=>hFn(e.type);
function V(e, t) {
    let r = Object.getOwnPropertyDescriptor(e, t);
    if (r && "value" in r) {
        return r.value;
    }
}
function ae(e, t, r) {
    e.set(t, r);
    return r;
}
function Mt(result, name) {
    let r = new WeakMap;
    function o(p) {
        if (Array.isArray(p)) {
            let u = V(p, "length");
            let c = typeof u === "number" ? u : 0;
            let g = ae(r, p, []);
            for(let x = 0; x < c; x += 1){
                g[x] = i(V(p, String(x)));
            }
            return g;
        }
        let m = ae(r, p, {});
        for (let u of Object.keys(p)){
            if (u !== "__proto__") {
                m[u] = n(u, V(p, u));
            }
        }
        return m;
    }
    function n(p, m) {
        if (!isProxy(m) && typeof m === "function" && Re(p)) {
            return m;
        }
        return i(m);
    }
    function i(p) {
        if (isProxy(p)) {
            throw new Me(`${name}: returned a drawing that holds a Proxy; an element, its props and its hover are plain objects and arrays`);
        }
        let m = Array.isArray(p) || LT(p);
        if (typeof p === "function") {
            throw new Me(`${name}: returned a drawing with a function where plain data goes; a closure rides only in an element's onPress or onEvent`);
        }
        if (!m && L(p)) {
            throw new Me(`${name}: returned a drawing that holds an object that is not plain data (a class instance); an element, its props and its hover are plain objects and arrays`);
        }
        if (m) {
            return r.get(p) ?? o(p);
        }
        return p;
    }
    return i(result);
}
const fe = (plugin, handle)=>`${plugin}\x00${handle}`;
const ue = (e)=>[
        "raster",
        e.plugin,
        e.key
    ].join(LQt);
const Oe = (e, t)=>({
        ...e,
        raster: {
            plugin: t
        }
    });
const Fe = {
    stampOf: (e)=>e.raster,
    restamp: Oe,
    seenKeyOf: (e, t)=>{
        let key = e.props.key;
        if (typeof key === "string") {
            return ue({
                plugin: t,
                key
            });
        }
    },
    refusal: (e, t)=>G(e.props.key, t, "Raster")
};
function Pe(e) {
    if (!L(e)) {
        return [];
    }
    let t = e;
    if (t.type !== "Raster") {
        return D(t, Pe);
    }
    let { props } = t;
    let o = F(t.raster);
    let n = L(props) ? props.key : undefined;
    if (typeof o === "string" && o !== "" && typeof n === "string") {
        return [
            {
                plugin: o,
                key: n
            }
        ];
    }
    return [];
}
function Ae(e, handle) {
    let r = {
        plugin: e.press.plugin,
        handle
    };
    switch(e.type){
        case "Button":
            return {
                ...e,
                press: r
            };
        case "Input":
            return {
                type: "Input",
                props: e.props,
                press: r
            };
        case "Select":
            return {
                type: "Select",
                props: e.props,
                press: r
            };
        case "Markdown":
            return {
                type: "Markdown",
                props: e.props,
                press: r
            };
    }
}
function K(e, t) {
    let r = e;
    let o = "children" in r ? r.children : undefined;
    if (Array.isArray(o)) {
        return {
            ...e,
            children: o.map(t)
        };
    }
    return e;
}
function le(e, t) {
    if (q(e)) {
        return e;
    }
    if (z(e)) {
        let r = t(e.press.plugin, e.press.handle);
        if (r === undefined) {
            return e;
        }
        return Ae(e, r);
    }
    return K(e, (r)=>le(r, t));
}
const DNs = (e, t)=>le(e, t);
const je = (e, plugin)=>({
        ...e,
        client: {
            plugin
        }
    });
function Ne(e, t) {
    let r = F(e.client);
    let key = e.props.key;
    let module = e.props.module;
    if (r === "" || r === undefined) {
        return je(e, t.plugin);
    }
    if (!(typeof r === "string" && typeof key === "string" && typeof module === "string" && t.seen.has(ie({
        plugin: r,
        key,
        module
    })))) {
        throw new Me(`${t.plugin}: returned a Client it did not draw (${String(r)}/${String(key)} ${String(module)}); a render hook may keep the ones next(e) returned and change their props, not which plugin, key or module they name`);
    }
    return e;
}
const Ce = (e, plugin)=>({
        ...e,
        group: {
            plugin
        }
    });
function Y(e, t, type) {
    let o = fSr(t);
    let n = e.groups.get(o) ?? 0;
    if (n < 1) {
        throw new Me(`${e.plugin}: returned a ${type} in another plugin's hover scope that next(e) did not hand it; a render hook may keep the ones next(e) returned and restyle them, not join another plugin's group`);
    }
    e.groups.set(o, n - 1);
}
function De(e, t) {
    let r = UPt(e.hover);
    if (r === undefined) {
        return e;
    }
    let o = F(e.group);
    if (o === "" || o === undefined || o === t.plugin) {
        return Ce(e, t.plugin);
    }
    Y(t, {
        plugin: String(o),
        scope: r
    }, e.type);
    return e;
}
function J(e, t, r) {
    let o = F(r.stampOf(e));
    if (o === "" || o === undefined) {
        return r.restamp(e, t.plugin);
    }
    let i = typeof o === "string" ? r.seenKeyOf(e, o) : undefined;
    if (!(i !== undefined && t.seen.has(i))) {
        throw new Me(`${t.plugin}: ${r.refusal(e, o)}`);
    }
    return e;
}
const Ie = (e, t)=>J(e, t, we);
const Le = {
    Button: "a Button",
    Input: "an Input",
    Select: "a Select",
    Markdown: "a Markdown"
};
const $e = (e, t)=>J(e, t, Fe);
function Be(e, plugin, handle) {
    let o = {
        plugin,
        handle
    };
    switch(e.type){
        case "Button":
            {
                let n = {
                    type: "Button",
                    props: e.props,
                    press: o
                };
                let p = e.hover === undefined ? n : {
                    ...n,
                    hover: e.hover
                };
                if (e.children === undefined) {
                    return p;
                }
                return {
                    ...p,
                    children: e.children
                };
            }
        case "Input":
            return {
                type: "Input",
                props: e.props,
                press: o
            };
        case "Select":
            return {
                type: "Select",
                props: e.props,
                press: o
            };
        case "Markdown":
            return {
                type: "Markdown",
                props: e.props,
                press: o
            };
    }
}
const We = {
    Button: "returned a Button without an onPress function; a render hook draws one with <Button key label onPress>",
    Input: "returned an Input without an onSubmit function; a render hook draws one with <Input key onSubmit>",
    Select: "returned a Select without an onSelect function; a render hook draws one with <Select key options onSelect>",
    Markdown: "returned a pressable Markdown without an onLinkPress function; a render hook draws one with <Markdown key text onLinkPress>"
};
function Q(e, t) {
    if (q(e)) {
        return e;
    }
    if (e.type === "Client") {
        return Ne(e, t);
    }
    if (e.type === "Raster") {
        return $e(e, t);
    }
    if (e.type === "Image") {
        return Ie(e, t);
    }
    if (!z(e)) {
        let S = Ee(e) ? De(e, t) : e;
        return K(S, (s)=>Q(s, t));
    }
    let { press, onPress, onEvent } = e;
    let i = e.type === "Button";
    let p = i ? onPress : onEvent;
    let m = i ? K(e, (S)=>Q(S, t)) : e;
    if (typeof press !== "object" || press === null) {
        return m;
    }
    let { handle, plugin } = press;
    if (typeof handle !== "number") {
        return m;
    }
    if (plugin === "") {
        if (typeof p !== "function") {
            throw new Me(`${t.plugin}: ${We[m.type]}`);
        }
        t.take(handle, p);
        return Be(m, t.plugin, handle);
    }
    if (typeof plugin !== "string" || !t.seen.has(fe(plugin, handle))) {
        throw new Me(`${t.plugin}: returned ${Le[m.type]} it did not draw (${String(plugin)}#${handle}); a render hook may keep the ones next(e) returned, not address another plugin's`);
    }
    let { hover } = m;
    let v = UPt(hover);
    if (v !== undefined && plugin !== t.plugin) {
        Y(t, {
            plugin,
            scope: v
        }, m.type);
    }
    return m;
}
const dr = ({ tree, ...rest })=>Q(tree, rest);
const Ke = ()=>oo(mY, (e, t)=>zSs(t));
function Ue(e) {
    let t = "kind" in e;
    let r = "value" in e;
    if (t) {
        return "ui.input";
    }
    if (r) {
        return "ui.select";
    }
    return "ui.press";
}
function _e(e, t) {
    let r = e.answering.getStore();
    if (r !== undefined && r.isLive && Date.now() < r.answersUntil && (r.event === "session.start" || r.environmentId === t)) {
        return r.event;
    }
}
const Sr = (e, t)=>({
        event: Ue(t),
        isLive: true,
        answersUntil: Date.now() + _be,
        environmentId: e
    });
function ce(leftOut, t) {
    let r = leftOut?.find((o)=>o.environmentId === t);
    return {
        leftOut: r?.registrations,
        told: r?.told,
        causes: r?.causes
    };
}
function Or(e, t) {
    let r = new WeakMap;
    let o = new WeakSet;
    return (n)=>{
        let { stamp, environments } = e;
        if (stamp === undefined) {
            return QPt(n);
        }
        let m = stamp;
        let u = Atomics.load(m, rlt);
        let c = new Map;
        let g = (a)=>Atomics.store(m, rlt, a ?? u);
        function x(a, v) {
            g(a);
            let k = v();
            let S = a !== undefined && typeof k === "object" && k !== null;
            if (S) {
                Hgo(k, new Set((LT(k) ? Object.values(k) : []).filter((f)=>LT(f) && r.has(f))));
            }
            if (S && Object.isFrozen(k)) {
                r.set(k, a);
            }
            return k;
        }
        function H(a, v) {
            if (!c.has(a)) {
                let k = [
                    ...environments
                ].filter(([, S])=>S.name === a);
                c.set(a, k.length === 1 ? k[0]?.[0] : undefined);
            }
            return x(c.get(a), v);
        }
        try {
            return n((a)=>{
                g(a ? r.get(a) : undefined);
                return a !== undefined && o.has(a);
            }, H, (a)=>{
                let v = x(t, a);
                if (r.has(v)) {
                    o.add(v);
                }
                return v;
            });
        } finally{
            Atomics.store(m, rlt, u);
        }
    };
}
function de(e) {
    let t = e.serving.getStore();
    if (t !== undefined && e.servingLive.has(t.callId)) {
        return t.callers;
    }
    return [];
}
function qe(e, environment, { result, resolver }) {
    if (isProxy(result)) {
        throw new Me("the ui.resolve answer is a Proxy; a table of elements is a plain object");
    }
    if (!L(result)) {
        return result;
    }
    let i = Object.create(null);
    for (let p of Reflect.ownKeys(result)){
        if (typeof p !== "string" || p === "then" || p === "__proto__") {
            continue;
        }
        let m = Reflect.getOwnPropertyDescriptor(result, p);
        if (m?.enumerable !== true) {
            continue;
        }
        let u = m.value;
        let c = !isProxy(u) && typeof u === "function";
        let g = c && bFn.nameOf(u) === p;
        i[p] = !c ? undefined : g ? u : (x)=>GNs(e.stamp, ()=>cws(e.stamp, [
                    ...de(e),
                    resolver
                ], ()=>environment.invokeSync(u, x)));
    }
    return i;
}
const Cr = (hostOps, hostStreamOps, stamp)=>({
        environments: new Map,
        loading: new Map,
        dispatching: new AsyncLocalStorage,
        framing: new AsyncLocalStorage,
        serving: new AsyncLocalStorage,
        answering: new AsyncLocalStorage,
        servingLive: new Set,
        toldUnder: new Map,
        hostOps,
        hostStreamOps,
        presses: new Map,
        taking: new Map,
        resolving: new Map,
        stamp
    });
function te({ environment, name, event, e: e_1 }) {
    try {
        return environment.argumentFor(e_1);
    } catch (error) {
        throw new Me(`${name}: ${event}: could not be given its argument: ${l(error)}`);
    }
}
function re(e) {
    let t = new WeakMap;
    return (r)=>{
        let o = t.get(r) ?? te({
            ...e,
            e: r
        });
        t.set(r, o);
        return o;
    };
}
const M = (e, t)=>`${e}\x00${t}`;
function $r(e, t, r) {
    let o = e.taking.get(t);
    e.taking.delete(t);
    if (o === undefined) {
        return;
    }
    let n = new Set;
    for (let { plugin, handle } of FPt(r)){
        for (let [m, u] of e.environments){
            if (u.name === plugin) {
                n.add(M(m, handle));
            }
        }
    }
    for (let i of o){
        if (!n.has(i)) {
            e.presses.delete(i);
        }
    }
}
function Br(e, t) {
    for (let r of e.toldUnder.get(t) ?? []){
        r.isTold = false;
    }
    e.toldUnder.delete(t);
}
function A(e, t) {
    let r = e.environments.get(t);
    if (r === undefined) {
        throw new Me(`environment ${t} is not loaded`);
    }
    return r;
}
function ze(e, t) {
    let r = e.framing.getStore();
    if (r?.environmentId === t) {
        return r.registration;
    }
}
const U = (e, t)=>YSs({
        next: ()=>t(()=>e.next()),
        return: ()=>t(()=>e.return(undefined))
    });
function oe({ name, nextTo }, t) {
    for (let n of t){
        if (nwr(n) && !nextTo.has(n)) {
            throw new Me(`${name}: next.to("${n}") refused: its hooks module does not spell ${Cgo(n)} in a literal the scan reads (host rule)`);
        }
    }
}
function Je(e, t, r) {
    let { environmentId, name } = t;
    let tree = Mt(t.result, name);
    if (Se(tree)) {
        return dr({
            tree,
            plugin: name,
            seen: r.seen,
            groups: r.groups,
            take: (p, m)=>{
                let u = M(environmentId, p);
                e.presses.set(u, m);
                let c = e.dispatching.getStore();
                if (c !== undefined) {
                    e.taking.get(c)?.add(u);
                }
            }
        });
    }
    return tree;
}
function N(e, t, r) {
    let o = e.framing.getStore();
    if (o?.environmentId === t && o.isTold === true) {
        return new Me(`${e.environments.get(t)?.name}: ${r} refused: a .catch asked because re-entry left its hook out answers and calls its own next(), nothing else`);
    }
}
function W(e, { environmentId, event, resolver, leftOut, told, causes, ended, caughtAnswered, endedReached }, r) {
    let { environment, name, tier, answersForEngine } = A(e, environmentId);
    let S = r ?? environment.activation.registrations.get(event, {
        leftOut,
        told,
        causes
    });
    if (!S) {
        throw new Me(`${name}: no ${event} handler`);
    }
    let { run, catch: _catch } = S;
    function y(result, w) {
        if (resolver !== undefined) {
            return qe(e, environment, {
                result,
                resolver
            });
        }
        if (event === "ui.render") {
            return Je(e, {
                environmentId,
                name,
                result
            }, w);
        }
        return environment.leaving(result, event);
    }
    function T() {
        let d = N(e, environmentId, "next()");
        if (d !== undefined) {
            throw d;
        }
    }
    function h(d, { seen, groups, counted }) {
        function xe(b) {
            if (event === "ui.render" && Se(b) && !counted.has(b)) {
                counted.add(b);
                for (let C of FPt(b)){
                    seen.add(fe(C.plugin, C.handle));
                }
                for (let C of zmo(b)){
                    seen.add(ie(C));
                }
                for (let C of Pe(b)){
                    seen.add(ue(C));
                }
                for (let C of He(b)){
                    seen.add(me(C));
                }
                for (let C of Te(b)){
                    let ge = fSr(C);
                    groups.set(ge, (groups.get(ge) ?? 0) + 1);
                }
            }
            return b;
        }
        return environment.nextFor(ybe({
            call: async (b)=>{
                T();
                environment.freezeForNext(GFn(b, name));
                return xe(await d(b));
            },
            to: async (b, ...pe)=>{
                T();
                environment.freezeForNext(GFn(b, name));
                oe(A(e, environmentId), pe);
                return xe(await tlt(b, d, pe));
            },
            signal: d.signal,
            is: d.is,
            event: d.event,
            origin: d.origin,
            trace: ()=>d.trace,
            budget: ()=>d.budget,
            caught: AFn(d)
        }), event);
    }
    let R = re({
        environment,
        name,
        event
    });
    async function j(d, w, O) {
        let B = yt();
        return y(await d(R(w), h(O, B)), B);
    }
    async function E(ended, w, O) {
        endedReached?.(environmentId, w);
        if (ended.called) {
            await O(w).then(undefined, ()=>{});
        }
        throw new Me(ended.reason);
    }
    return {
        name,
        environmentId,
        tier,
        ...answersForEngine && {
            answersForEngine
        },
        ..._catch && {
            catch: async (d, w)=>{
                let O = await j(_catch, d, w);
                if (O !== undefined) {
                    caughtAnswered?.(environmentId);
                }
                return O;
            }
        },
        run: (d, w)=>{
            if (ended === undefined) {
                return j(run, d, w);
            }
            return E(ended, d, w);
        }
    };
}
function Qe(e) {
    let t = e.serving.getStore();
    if (t !== undefined && e.servingLive.has(t.callId)) {
        return t.callId;
    }
}
const ne = (e, t)=>({
        environmentId: t,
        dispatchId: e.dispatching.getStore(),
        registration: ze(e, t),
        serving: Qe(e),
        rootEvent: _e(e, t)
    });
const po = (e, t)=>(r, o, n)=>{
        let i = N(e, t, `$.${r}`);
        if (i !== undefined) {
            return Promise.reject(i);
        }
        let p = ()=>e.hostOps({
                ...ne(e, t),
                op: r,
                args: o,
                signal: n
            });
        if (JCe(r)) {
            return p();
        }
        return lgo(p);
    };
function se(e, { environmentId, call }, o) {
    let n = o.next.bind(o);
    return Object.defineProperty(o, "next", {
        configurable: true,
        value: (...i)=>{
            let p = N(e, environmentId, call);
            if (p === undefined) {
                return n(...i);
            }
            return Promise.reject(p);
        }
    });
}
const ao = (e, t)=>(r, o, n)=>{
        let i = new AbortController;
        let p = n === undefined ? i.signal : AbortSignal.any([
            n,
            i.signal
        ]);
        let call = `$.${r}`;
        let u = N(e, t, call);
        let c = u === undefined ? U(e.hostStreamOps({
            ...ne(e, t),
            op: r,
            args: o,
            signal: p
        }), lgo) : undefined;
        async function* g() {
            if (c === undefined) {
                throw u;
            }
            try {
                return yield* c;
            } catch (error) {
                if (i.signal.aborted) {
                    return;
                }
                throw error;
            }
        }
        return se(e, {
            environmentId: t,
            call
        }, QSs(RV(g), ()=>i.abort(new Me(`${r}: the stream was let go`))));
    };
function fo(e, { event, leftOut }, [o, n]) {
    let { environment, name } = A(e, o);
    return environment.activation.registrations.catches(event, te({
        environment,
        name,
        event,
        e: n
    }), leftOut?.find((m)=>m.environmentId === o)?.registrations);
}
function co(e, { environmentId, request, core }) {
    let i = {
        surface: request.surface,
        component: request.component
    };
    let p = A(e, environmentId);
    return rP({
        e: i,
        handlers: request.environments.filter((m)=>e.environments.has(m)).map((m)=>W(e, {
                environmentId: m,
                event: "ui.resolve",
                resolver: environmentId
            })),
        site: Gd["ui.resolve"],
        bottom: ()=>Promise.resolve(core),
        origin: {
            plugin: p.name,
            tier: p.tier
        }
    });
}
const vo = (e, t)=>{
    e.delete(t);
};
const To = ()=>({
        event: "session.start",
        isLive: true,
        answersUntil: Number.POSITIVE_INFINITY
    });
function Xe({ body, isOpened, beneath }, o) {
    let n = 0;
    async function* i() {
        try {
            let x = yield* body;
            if (x !== undefined || isOpened()) {
                return x;
            }
            return yield* beneath();
        } finally{
            o.isTold = false;
        }
    }
    let p = i();
    let m = p.next.bind(p);
    let u = p.return.bind(p);
    async function c(...x) {
        n += 1;
        try {
            return await m(...x);
        } finally{
            n -= 1;
        }
    }
    function g(x) {
        let H = n === 0;
        let a = u(x);
        if (H) {
            return a;
        }
        a.catch(()=>{});
        return Promise.resolve({
            done: true,
            value: undefined
        });
    }
    return Object.defineProperties(p, {
        next: {
            configurable: true,
            value: c
        },
        return: {
            configurable: true,
            value: g
        }
    });
}
function ye(e, t) {
    let { environmentId, event, leftOut, told, causes } = t;
    let { environment, name, tier } = A(e, environmentId);
    let g = re({
        environment,
        name,
        event
    });
    function x(a, v) {
        let k = a;
        function S(s, f) {
            if (v !== undefined) {
                return v.once(()=>s(v.raised));
            }
            environment.freezeForNext(GFn(f, name));
            let y = N(e, environmentId, "next()");
            if (y !== undefined) {
                throw y;
            }
            return se(e, {
                environmentId,
                call: "next()"
            }, s(f));
        }
        return environment.streamNextFor(DSr({
            ...YQt(a),
            ...v && {
                caught: JSs(a.budget.ms, v.cause)
            },
            call: (s)=>S(k, s),
            to: (s, ...f)=>{
                oe(A(e, environmentId), f);
                return S((y)=>ago(y, k, f), s);
            }
        }));
    }
    let H = (a, v)=>U(v, (k)=>e.framing.run(a, k));
    return environment.activation.registrations.streamClauses(event, {
        leftOut,
        told,
        causes
    }).map((a)=>{
        if (a.kind === "value") {
            return jNs(W(e, t, a.hook));
        }
        let { registration } = a;
        let k = a.isTold === true;
        let S = (f)=>async (raised, T)=>{
                let h = {
                    environmentId,
                    registration,
                    isTold: k
                };
                let R;
                let once = (d)=>R ??= d();
                let body = H(h, await f(g(raised), x(T, k ? {
                    once,
                    raised,
                    cause: causes?.[registration]
                } : undefined)));
                if (k) {
                    return Xe({
                        body,
                        isOpened: ()=>R !== undefined,
                        beneath: ()=>T(raised)
                    }, h);
                }
                return body;
            };
        let a_catch = a.catch;
        return {
            name,
            environmentId,
            tier,
            run: S(a.open),
            ...a_catch !== undefined && {
                catch: S(a_catch)
            },
            ...k && {
                budgetMs
            }
        };
    });
}
function Fo(e, { request, hostNext, signal }) {
    let { event, leftOut, environments } = request;
    let handlers = environments.flatMap((c)=>ye(e, {
            environmentId: c,
            event,
            ...ce(leftOut, c)
        }));
    let bottom = (c, g, x = llt)=>hostNext(c, g, x);
    return {
        e: request.payload,
        handlers,
        site: Aoe(event, request.raise),
        signal,
        isHopFold: true,
        bottom,
        origin: request.origin,
        floors: request.floors
    };
}
function jo(e, t, r) {
    let o = {
        ...t,
        isTold: true
    };
    let n = e.dispatching.getStore();
    if (n !== undefined) {
        e.toldUnder.get(n)?.add(o);
    }
    return e.framing.run(o, r);
}
function Gmo({ hostOps, hostStreamOps, stamp, createEnvironment }) {
    let n = Cr(hostOps, hostStreamOps, stamp);
    let i = createEnvironment ?? Sgo;
    let { environments, loading, dispatching, framing, serving, answering, presses } = n;
    async function within(s, f, y) {
        if (f === "ui.render") {
            n.taking.set(s, new Set);
        }
        let T;
        let R = f === "session.start" ? To() : undefined;
        n.toldUnder.set(s, new Set);
        try {
            T = await dispatching.run(s, ()=>answering.run(R, y));
            return T;
        } finally{
            if (R !== undefined) {
                R.isLive = false;
            }
            $r(n, s, T);
            Br(n, s);
        }
    }
    async function dispatch(s, f, y) {
        let T = new Set;
        let h = new Map;
        let result = await within(s.id, s.event, ()=>rP({
                e: s.payload,
                handlers: s.environments.map((d)=>W(n, {
                        environmentId: d,
                        event: s.event,
                        ...ce(s.leftOut, d),
                        ended: s.ended,
                        caughtAnswered: (w)=>T.add(w),
                        endedReached: (w, O)=>h.set(w, O)
                    })),
                site: Aoe(s.event, s.raise),
                signal: y,
                isHopFold: true,
                bottom: (d, w, O = llt)=>f(d, w, O),
                origin: s.origin,
                floors: s.floors,
                cutAt: s.cutAt
            }));
        let j = [
            ...h
        ].find(([d])=>d === s.ended?.kept);
        let E = j !== undefined && !T.has(j[0]) && !fo(n, s, j);
        return {
            result,
            ...s.ended !== undefined && {
                answered: [
                    ...T
                ]
            },
            ...E && {
                unmatched: true
            }
        };
    }
    let withinSteps = (s, f)=>U(f, (y)=>dispatching.run(s, ()=>answering.run(undefined, y)));
    return {
        currentDispatch: ()=>dispatching.getStore(),
        opFailureOf: (s)=>Array.from(environments.values(), (f)=>f.environment.opFailureOf(s)).find((f)=>f !== undefined),
        ownsValue: (s)=>Array.from(environments.values()).some((f)=>f.environment.ownsValue(s)),
        has: (s)=>environments.has(s),
        async load (s, f) {
            let y = new AbortController;
            loading.set(s, y);
            let environment;
            try {
                environment = await i(po(n, s), f, {
                    stamp: stamp ? {
                        view: stamp,
                        environmentId: s
                    } : undefined,
                    signal: y.signal,
                    hostStream: ao(n, s),
                    framed: (registration, R, j)=>{
                        let E = j === "told";
                        let d = {
                            environmentId: s,
                            registration
                        };
                        if (E) {
                            return jo(n, d, R);
                        }
                        return framing.run({
                            ...d,
                            isTold: false
                        }, R);
                    },
                    toldRefusal: (h)=>N(n, s, h),
                    blamedFor: ()=>de(n)[0],
                    blamedWalk: Or(n, s)
                });
            } finally{
                loading.delete(s);
            }
            environments.set(s, {
                environment,
                name: f.pluginName,
                tier: f.tier,
                nextTo: new Set(f.scan.nextTo ?? []),
                answersForEngine: wgo(f.modulePath)
            });
            return {
                registered: environment.activation.registrations.registered
            };
        },
        unload (s) {
            loading.get(s)?.abort();
            loading.delete(s);
            let f = environments.get(s);
            if (f) {
                environments.delete(s);
                n.resolving.delete(s);
                f.environment.dispose();
            }
            for (let y of presses.keys()){
                if (y.startsWith(M(s, 0).slice(0, -1))) {
                    presses.delete(y);
                }
            }
        },
        dispatch,
        dispatchStream: (s, hostNext, y)=>RV(withinSteps(s.id, $Sr(Fo(n, {
                request: s,
                hostNext,
                signal: y
            })))),
        link: (s)=>W(n, s),
        linkStreams: (s)=>ye(n, s),
        within,
        withinSteps,
        async resolveTables (s, f) {
            let { environment } = A(n, s);
            let T = (n.resolving.get(s) ?? 0) + 1;
            n.resolving.set(s, T);
            let h = Ke();
            let R = await Promise.all(f.map(async (E)=>({
                    surface: E.surface,
                    component: E.component,
                    answer: await co(n, {
                        environmentId: s,
                        request: E,
                        core: h[E.surface]
                    })
                })));
            if (environments.get(s)?.environment === environment && n.resolving.get(s) === T) {
                environment.storeResolved(R);
            }
        },
        build: (s, f, y)=>{
            A(n, s).environment.activation.finalize(f, y);
        },
        callInterface (s, { name, method, args }, h) {
            let { environment } = A(n, s);
            if (h) {
                n.servingLive.add(h.callId);
            }
            let j = h ? setTimeout(vo, _be, n.servingLive, h.callId) : undefined;
            function E() {
                clearTimeout(j);
                if (h) {
                    n.servingLive.delete(h.callId);
                }
            }
            let d = ()=>cws(stamp, h?.callers ?? [], ()=>environment.activation.callInterface(name, method, environment.cloneIn(args))).then(environment.leaving);
            try {
                return framing.run(undefined, ()=>answering.run(undefined, ()=>serving.run(h, d))).finally(E);
            } catch (error) {
                E();
                throw error;
            }
        },
        press (s, f, y) {
            let { environment } = A(n, s);
            let h = presses.get(M(s, f));
            if (h === undefined) {
                return Promise.reject(new Me(`ui.press/ui.input/ui.select: no handler is held under handle ${f}`));
            }
            let R = Sr(s, y);
            return framing.run(undefined, ()=>answering.run(R, ()=>environment.invoke(h, [
                        environment.cloneIn(y)
                    ]).then(()=>{}).finally(()=>{
                        R.isLive = false;
                    })));
        },
        releasePresses: (s, f)=>{
            for (let y of f){
                presses.delete(M(s, y));
            }
        }
    };
}
function pY(e, t) {
    let r = e.get(t);
    e.delete(t);
    return r;
}
function NQt(e, t) {
    for (let r of e.values()){
        r.reject(new Me(t));
    }
    e.clear();
}
const mSr = 0;
const Vmo = 2;
const qmo = 1;
const LNs = 3;
export { FPt, zmo, fSr, hFn, UPt, LQt, DNs, Gmo, mSr, LNs, Vmo, qmo, NQt, pY };
