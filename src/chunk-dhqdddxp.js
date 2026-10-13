import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { Me, eRe } from "/$bunfs/root/chunk-b97fvbrv.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { er, Uk, g$e, HYe, SFn, qQt, Qat, z_, tO, S$e, Coe, BYe, ews, tws, nws, ZQt, WSr, bgo, xFn, aws, lws } from "/$bunfs/root/chunk-30jbnw20.js";
import { E$e, Ll } from "/$bunfs/root/chunk-fzmwt34b.js";
import { Ss } from "/$bunfs/root/chunk-17w0r6ry.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { D2 } from "/$bunfs/root/chunk-7xekr000.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { prt, g4, Aeo, tTt, $dr, Fdr, Udr, Bdr, jdr, IPn, Wdr, zdr, nce, h4, kye, jPn, Tye, aur, lur, cur, _to, dur, uur, zPn, H6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Z3 } from "/$bunfs/root/chunk-z56h13z4.js";
import { hFn, UPt } from "/$bunfs/root/chunk-rvt09mwm.js";
import { RYt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { X2t, _tt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { Grt } from "/$bunfs/root/chunk-1evd9xcd.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import * as ie from "vm";
const Bje = ze(gs({
    focusedId: null
}), (r)=>r.setState(()=>({
            focusedId: null
        })));
const vpn = (focusedId)=>Bje.setState((i)=>{
        if (i.focusedId === focusedId) {
            return i;
        }
        return {
            focusedId
        };
    });
const cBo = (r)=>Bje.setState((i)=>{
        if (i.focusedId === r) {
            return {
                focusedId: null
            };
        }
        return i;
    });
function KNr(r = {}) {
    let i = r.run ?? H6t;
    let f = r.schedule ?? ((m)=>{
        let d = setTimeout(m, eg);
        return ()=>{
            clearTimeout(d);
        };
    });
    let w = r.warn ?? ((m)=>{
        t(m, {
            level: "warn"
        });
    });
    let p = new Map;
    let T;
    let a = 0;
    function u() {
        T = undefined;
        let m = [
            ...p.values()
        ];
        p.clear();
        for (let { message, reply } of m){
            a += 1;
            i(message).then(reply, (k)=>{
                w(`ui.message ${message.plugin}/${message.message.element}: the chain threw (${l(k)}); no reply`);
            });
        }
    }
    return {
        post (m, message, reply) {
            p.set(m, {
                message,
                reply
            });
            T ??= f(u);
        },
        cancel (m) {
            p.delete(m);
            if (p.size === 0 && T !== undefined) {
                T();
                T = undefined;
            }
        },
        dispatched: ()=>a
    };
}
const Qe = KNr();
const YNr = (r, i)=>`${r}\x00client\x00${i}`;
const Ie = (r)=>({
        component: r.component,
        requestId: YNr(r.requestId, r.key),
        surface: r.surface
    });
const te = (plugin, i, f)=>`Client ${i}: ${cur(plugin, i, f)}`;
const j = (r)=>{
    if (r === HYe) {
        return 1;
    }
    return 0;
};
function Ee(r, component) {
    let site = {
        surface: r.drawing.surface,
        component,
        requestId: r.requestId
    };
    return {
        site,
        bornAt: Tye(site),
        holders: 0
    };
}
const ye = (plugin, i)=>({
        plugin,
        handle: i
    });
function Ce(plugin, i, f) {
    function w(p) {
        if (!L(p)) {
            return p;
        }
        let { props, hover, children, held } = p;
        let d = {
            type: p.type
        };
        if (props !== undefined) {
            d.props = props;
        }
        if (hover !== undefined) {
            d.hover = hover;
        }
        if (hFn(p.type) && UPt(hover) !== undefined) {
            d.group = {
                plugin
            };
        }
        if (typeof held === "number") {
            d.press = ye(plugin, f(held));
        }
        if ((typeof held !== "number" || p.type === "Button") && Array.isArray(children)) {
            d.children = children.map(w);
        }
        return d;
    }
    return E$e(w(Qat(X(i))));
}
const re = (r)=>[
        r.plugin,
        r.surface,
        r.requestId,
        r.key
    ].join(" ");
const ne = 20;
const se = 8;
const Se = 3;
const ge = (r)=>({
        plugin: r.plugin,
        module: r.module,
        component: r.drawing.component,
        requestId: r.requestId,
        key: r.element
    });
const ke = (r, i)=>({
        id: re(r),
        plugin: r.plugin,
        module: r.module,
        element: r.key,
        drawing: Ie(r),
        requestId: r.requestId,
        clock: r.clock,
        props: r.props,
        handedProps: r.props,
        columns: 0,
        rows: 0,
        surface: undefined,
        snapshot: {
            status: "loading"
        },
        listeners: new Set,
        held: [],
        holders: 1,
        dialogHolders: j(r.component),
        rowSite: j(r.component) === 0 ? r.component : undefined,
        drawnSite: undefined,
        isOverBudget: false,
        isDirty: false,
        isRendering: false,
        unpromptedRenders: 0,
        renderTimer: undefined,
        measurings: 0,
        frameOutcome: "unmeasured",
        isUnsettled: false,
        terminal: i,
        selfDrawnTimer: undefined,
        renderedAt: i,
        thrownAt: undefined,
        toldLast: undefined,
        isDestroyed: false,
        destroyTimer: undefined,
        mountGeneration: 0,
        heldIn: new Map,
        environmentId: undefined
    });
const N = (r, i, f)=>kye({
        key: [
            `${r.plugin}#${r.environmentId}`,
            `Client ${r.module}`,
            i
        ].join(" "),
        lead: r.plugin,
        text: te(r.plugin, r.module, f)
    });
const ve = {
    instance: `its region changed size on each of ${se} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`,
    frame: `the Clients on screen were measured again in ${ne} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns`
};
const Co = (r, i)=>N(r, `unsettled ${i}`, ve[i]);
function U() {
    let r = Z3.get();
    return [
        r?.columns,
        r?.rows,
        r?.conversationColumns
    ].join("x");
}
function vo(r = aur()) {
    return (i)=>void r(i).catch((f)=>{
            Ll().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${l(f)})`, "warn");
        });
}
function Ae(r, i) {
    let { name, message } = ZQt(r) ? r : i(r);
    if (message.trim() !== "") {
        return message;
    }
    if (name === "Error") {
        return lur;
    }
    return name;
}
const De = (r)=>`Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
const be = ({ pluginName, environmentId, owns })=>X2t((w, p)=>{
        if (!(owns(p) || owns(w))) {
            return;
        }
        let text = De(nce(xFn(w)));
        try {
            h4({
                key: `${pluginName}#${environmentId} Client rejection`,
                lead: pluginName,
                text
            });
        } catch (error) {
            t(`${pluginName}: the fault could not be said: ${l(error)}`, {
                level: "error"
            });
        }
        return `${pluginName}: ${text}`;
    });
const $e = (r)=>ZQt(r) && v(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
const he = 1000;
const _e = 60000;
const Fe = "__surface__.run()";
const je = (r, tick)=>({
        ...r,
        timers: new Map,
        tick
    });
async function zo({ pluginName, pluginRoot, environmentId, surfaceModules }, i = {}) {
    let a = false;
    let { sandbox, context } = aws();
    let d = BYe(context, {
        arrayLengthCap: undefined
    });
    let y = (o)=>E$e(d(o));
    let k = nws(context, pluginRoot);
    let owns = tws(context);
    let C = Coe(context);
    let { intoEnvironment } = WSr(C, k, owns);
    let E = lws(context, intoEnvironment);
    Object.assign(sandbox, {
        console: ews(E, `[${pluginName}] surface`)
    });
    let ae = be({
        pluginName,
        environmentId,
        owns
    });
    let S = new Map;
    let M = 0;
    let fe = 0;
    function A(o) {
        let n = S.get(o);
        if (!n) {
            throw new Me(`${pluginName}: no client instance ${o}`);
        }
        return n;
    }
    function me(o, n) {
        let s = A(o);
        let c = `${pluginName}: Client ${s.module}: post: the data`;
        if (n.length > SFn) {
            throw new Me(`${c} serializes to ${n.length} characters, over the ${SFn} limit; not sent`);
        }
        let x = X(n);
        let g = qQt(x);
        if (g !== undefined) {
            throw new Me(`${c} ${g}; not sent`);
        }
        s.host.post(x);
    }
    function V(o, n) {
        let s = A(o);
        let c = ++fe;
        s.timers.set(c, s.host.startTimer(n, ()=>{
            if (S.get(o)?.timers.has(c) === true) {
                s.tick(c);
            }
        }));
        return c;
    }
    let R = z_({
        schedule: tO(E((o)=>{
            S.get(o)?.host.schedule();
        })),
        post: tO(E(me)),
        startTimer: tO(E(V)),
        stopTimer: tO(E((o, n)=>{
            let s = S.get(o);
            s?.timers.get(n)?.();
            s?.timers.delete(n);
        })),
        fault: tO(E((o, n)=>{
            let s = S.get(o);
            if (s === undefined) {
                t(`${pluginName}: Client: a promise an instance since unmounted returned was rejected: ${nce(n)}`, {
                    level: "warn"
                });
                return;
            }
            s.host.fault(new Me(`${pluginName}: Client ${s.module}: a promise it returned was rejected: ${n}`));
        }))
    });
    let { mount, setProps, resize, stage, dropHeld, hasListener, unmount } = ie.runInContext(Uk(dur), context)(R, y(uur()));
    let de = new ie.Script(Uk(Fe), {
        filename: `${pluginName} surface`
    });
    let ce = i.budgetMs ?? he;
    let evaluateOptions = S$e(he, i.budgetMs);
    let Q = (o)=>{
        if ($e(o)) {
            return `ran longer than its ${ce}ms budget`;
        }
        return Ae(o, C);
    };
    let Z = (o, n)=>new Me(`${pluginName}: Client ${o}: ${Q(n)}`);
    function H(o, n, s) {
        if (a) {
            throw eRe(pluginName);
        }
        stage(o.id, n, s === undefined ? undefined : y(s));
        try {
            return de.runInContext(context, evaluateOptions);
        } catch (error) {
            throw Z(o.module, error);
        }
    }
    let ee = bgo({
        args: {
            pluginName,
            pluginRoot,
            linked: surfaceModules.flatMap((o)=>o.linked),
            links: surfaceModules.flatMap((o)=>o.links)
        },
        context,
        isScanned: true,
        stamped: (o)=>o(),
        evaluateOptions
    });
    let G = i.readyMs ?? _tt;
    let D = new Map;
    for (let o of surfaceModules){
        D.set(o.module, await F(o));
    }
    async function F(o) {
        try {
            let exports = await Ut(ee.load(o.modulePath, o.source), G, `its top level did not settle in ${G}ms`);
            return {
                component: o.component,
                exports
            };
        } catch (error) {
            return {
                error: new Me(`${pluginName}: Client ${o.module}: the surface module did not load: ${Q(error)}`)
            };
        }
    }
    function z(o) {
        if (!S.delete(o.id)) {
            return;
        }
        for (let n of o.timers.values()){
            n();
        }
        o.timers.clear();
        if (!a) {
            unmount(o.id);
        }
    }
    function oe(o) {
        let n = D.get(o);
        if (!n) {
            let g = [
                ...D.keys()
            ].join(", ") || "none";
            throw new Me(`${pluginName}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`);
        }
        if ("error" in n) {
            throw n.error;
        }
        let { component, exports } = n;
        let x = Object.hasOwn(exports, component) && exports[component];
        if (typeof x !== "function") {
            throw new Me(`${pluginName}: Client ${o}: its export ${component} is not a function (props, surface) => tree`);
        }
        return x;
    }
    function K(o) {
        if (!a) {
            o();
        }
    }
    function mount_1(o) {
        let { props, host } = o;
        if (a) {
            throw eRe(pluginName);
        }
        let c = oe(o.module);
        let id = ++M;
        let g = je({
            id,
            module: o.module,
            host
        }, (h)=>{
            H(g, "tick", h);
        });
        S.set(id, g);
        mount(id, c, y(props));
        return {
            id,
            render: ()=>{
                let h = H(g, "render");
                if (typeof h !== "string") {
                    throw Z(o.module, Error("the module returned no tree"));
                }
                return h;
            },
            setProps: (h)=>K(()=>setProps(id, y(h))),
            resize: (h, I)=>K(()=>resize(id, h, I)),
            pointer: (h)=>{
                H(g, "pointer", h);
            },
            key: (h)=>{
                H(g, "key", h);
            },
            runHeld: (h, event)=>{
                H(g, "held", {
                    handle: h,
                    event
                });
            },
            dropHeld: (h)=>K(()=>dropHeld(id, y(h))),
            hasPointerListener: ()=>!a && hasListener(id, "pointer"),
            hasKeyListener: ()=>!a && hasListener(id, "key"),
            unmount: ()=>z(g)
        };
    }
    return {
        pluginName,
        environmentId,
        mount: mount_1,
        dispose () {
            if (a) {
                return;
            }
            for (let o of [
                ...S.values()
            ]){
                z(o);
            }
            setTimeout(ae, _e).unref();
            a = true;
        },
        isDisposed: ()=>a
    };
}
const Le = (environmentId, loading)=>({
        environmentId,
        loading,
        loaded: undefined
    });
const Be = ze(Ss(), (r)=>r.set(undefined));
function qe() {
    let r = new Map;
    let i = Oe();
    let f;
    function w(a, u) {
        if (r.get(a) === u) {
            r.delete(a);
        }
        u.loading.then((d)=>{
            d.dispose();
            prt.forget(a);
            t(`surface environment of ${a} (environment ${u.environmentId}) disposed`);
        }, ()=>{});
        queueMicrotask(()=>i.emit(a));
    }
    function sweep() {
        let a = new Map(st().loadedModules.map((u)=>[
                u.name,
                u.environmentId
            ]));
        for (let [u, m] of [
            ...r
        ]){
            if (a.get(u) !== m.environmentId) {
                w(u, m);
            }
        }
    }
    function T(pluginName) {
        let u = Grt(pluginName);
        if (!u) {
            return Promise.reject(new Me(`${pluginName}: Client: the plugin is not loaded`));
        }
        let m = r.get(pluginName);
        if (m?.environmentId === u.environmentId) {
            return m.loading;
        }
        if (m) {
            w(pluginName, m);
        }
        let { surfaceModules, pluginRoot } = u.args;
        if (!surfaceModules || surfaceModules.length === 0) {
            return Promise.reject(new Me(`${pluginName}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
        }
        let budgetMs = Be.get();
        let { environmentId } = u;
        let C = Le(environmentId, zo({
            pluginName,
            pluginRoot,
            environmentId,
            surfaceModules
        }, budgetMs === undefined ? {} : {
            budgetMs
        }).then((P)=>{
            C.loaded = P;
            t(`surface environment of ${pluginName} (environment ${environmentId}) loaded ` + surfaceModules.map((E)=>E.module).join(", "));
            return P;
        }));
        r.set(pluginName, C);
        return C.loading;
    }
    return {
        environmentFor (a) {
            f ??= RYt(sweep);
            return T(a);
        },
        sweep,
        onDisposed: i.subscribe,
        disposeAll () {
            for (let [a, u] of [
                ...r
            ]){
                w(a, u);
            }
            f?.();
            f = undefined;
        },
        count: ()=>r.size
    };
}
const Ge = qe();
function XNr(r = {}) {
    let i = r.environments ?? Ge;
    let f = r.port ?? Qe;
    let w = r.raiseFault ?? vo();
    let p = new Map;
    let T;
    let a = 0;
    let u = false;
    let m;
    function d(e, o) {
        e.snapshot = o;
        for (let n of e.listeners){
            n();
        }
    }
    function y(e) {
        S(e, e.held);
        e.held = [];
    }
    function k(e) {
        e.mountGeneration += 1;
        R(e);
        e.isDirty = false;
        e.isOverBudget = false;
        e.thrownAt = undefined;
        e.drawnSite = undefined;
        tTt.dropClient(A(e));
        if (e.renderTimer) {
            clearImmediate(e.renderTimer);
            e.renderTimer = undefined;
        }
        clearImmediate(e.selfDrawnTimer);
        _(e);
        e.measurings = 0;
        e.frameOutcome = "unmeasured";
        e.isUnsettled = false;
        g4.holdDrawing(e.plugin, e.drawing, []);
        y(e);
        e.surface?.unmount();
        e.surface = undefined;
        f.cancel(e.id);
        cBo(e.id);
    }
    function O(e, o, n) {
        let s = te(e.plugin, e.module, o);
        let c = `${e.plugin}: ${s}`;
        Ll().log(`${c}; ${n}`, "warn");
        D2(e.plugin, s, e.toldLast === s ? "once" : "again");
        e.toldLast = s;
        return c;
    }
    function C(e, o, phase) {
        let reason = l(o);
        let text = O(e, reason, "the instance unmounted");
        let x = new Map(e.heldIn);
        k(e);
        d(e, {
            status: "failed",
            text
        });
        w(_to(ge(e), e.drawing.surface, {
            phase,
            reason,
            sites: ()=>[
                    ...e.heldIn.values()
                ].filter((g)=>g.holders > 0).map((g)=>({
                        site: g.site,
                        bornAt: (x.get(g.site.component) ?? g).bornAt
                    }))
        }));
    }
    let P = (e, o)=>`${o} ${er({
            props: e.handedProps
        })}`;
    function E(e, o) {
        if (!e.surface || e.isDestroyed) {
            return;
        }
        try {
            o();
        } catch (error) {
            C(e, error, "run");
        }
    }
    function ae(e, surface) {
        let n = [];
        let s = [];
        let c = [];
        let x = 0;
        try {
            let g = Ce(e.plugin, surface.render(), (environmentHandle)=>{
                let surfaceHandle = prt.hold(e.plugin, (xe)=>{
                    R(e);
                    E(e, ()=>surface.runHeld(environmentHandle, xe));
                });
                n.push({
                    surfaceHandle,
                    environmentHandle
                });
                return surfaceHandle;
            });
            let h = jdr(g, undefined, {
                surface: e.drawing.surface,
                within: F(e),
                measured: (I)=>{
                    x = I;
                }
            });
            if (h !== undefined) {
                throw new Me(`returned a tree that does not validate (${h})`);
            }
            return [
                zdr(Wdr(IPn(g, (I)=>N(e, "borderStyle", jPn(I))), (I)=>{
                    s.push(I);
                }), e.drawing.surface, (I)=>{
                    c.push(I);
                }),
                n,
                x,
                s,
                c
            ];
        } catch (error) {
            S(e, n);
            throw error;
        }
    }
    function S(e, o) {
        prt.release(e.plugin, o.map((n)=>n.surfaceHandle));
        e.surface?.dropHeld(o.map((n)=>n.environmentHandle));
    }
    function M(e) {
        let { surface } = e;
        if (!surface || e.isDestroyed) {
            return;
        }
        e.isDirty = false;
        e.isRendering = true;
        e.renderedAt = U();
        let n;
        try {
            n = ae(e, surface);
        } catch (error) {
            C(e, error, "render");
            return;
        } finally{
            e.isRendering = false;
        }
        let [s, c, x, g, h] = n;
        let I = F(e) === HYe;
        if (I && !tTt.fits(A(e), x)) {
            e.isOverBudget = true;
            S(e, c);
            O(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${g$e}`, "the frame before it kept");
            return;
        }
        e.isOverBudget = false;
        let e_held = e.held;
        e.held = c;
        let tree = Aeo(s, e.drawing);
        S(e, e_held);
        e.drawnSite = F(e);
        d(e, {
            status: "drawn",
            tree
        });
        for (let b of g){
            N(e, $dr(b), Fdr(b));
        }
        for (let b of h){
            N(e, `${e.drawing.surface} ${Udr(b)}`, Bdr(b));
        }
        if (I) {
            tTt.recordClient(A(e), x);
        }
    }
    function fe(e) {
        for (let o of p.values()){
            if (o.isOverBudget && o.requestId === e && !o.isDirty && !o.isDestroyed && o.surface !== undefined) {
                o.isDirty = true;
                o.unpromptedRenders = 0;
                o.renderTimer = setImmediate(V, o);
            }
        }
    }
    let A = (e)=>({
            requestId: e.requestId,
            plugin: e.plugin,
            key: e.element
        });
    function me(e) {
        if (e.isDirty || e.isDestroyed || !e.surface) {
            return;
        }
        if (e.unpromptedRenders >= Se) {
            let o = new Me(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
            if (e.isRendering) {
                throw o;
            }
            C(e, o, "run");
            return;
        }
        e.isDirty = true;
        e.renderTimer = setImmediate(V, e);
    }
    function V(e) {
        e.renderTimer = undefined;
        if (e.isDirty) {
            e.unpromptedRenders += 1;
            clearImmediate(e.selfDrawnTimer);
            e.selfDrawnTimer = setImmediate(_, e);
            M(e);
        }
    }
    function R(e) {
        for (let o of p.values()){
            if (o.plugin === e.plugin) {
                o.unpromptedRenders = 0;
            }
        }
    }
    function pe(e, o) {
        let e_mountGeneration = e.mountGeneration;
        f.post(e.id, zPn(ge(e), e.drawing.surface, o), (s)=>{
            if (s.props !== undefined && !e.isDestroyed && e.mountGeneration === e_mountGeneration) {
                W(e, s.props);
            }
        });
    }
    function ue(e, o) {
        if (e.isDestroyed || e.surface) {
            return;
        }
        if (e.thrownAt !== undefined) {
            if (e.thrownAt === P(e, U())) {
                return;
            }
            e.thrownAt = undefined;
            e.props = e.handedProps;
            for (let [n, s] of e.heldIn){
                if (s.holders > 0) {
                    e.heldIn.set(n, {
                        ...s,
                        bornAt: Tye(s.site)
                    });
                }
            }
        }
        try {
            e.environmentId = o.environmentId;
            e.surface = o.mount({
                module: e.module,
                props: e.props,
                host: {
                    schedule: ()=>me(e),
                    post: (n)=>pe(e, n),
                    startTimer: (n, s)=>e.clock.every(n, ()=>{
                            R(e);
                            E(e, s);
                        }),
                    fault: (n)=>E(e, ()=>{
                            throw n;
                        })
                }
            });
            e.surface.resize(e.columns, e.rows);
        } catch (error) {
            C(e, error, "load");
            return;
        }
        M(e);
    }
    function B(e) {
        e.mountGeneration += 1;
        let e_mountGeneration = e.mountGeneration;
        let n = ()=>e.mountGeneration === e_mountGeneration && !e.isDestroyed;
        i.environmentFor(e.plugin).then((s)=>{
            if (n()) {
                ue(e, s);
            }
        }, (s)=>{
            if (n()) {
                C(e, s, "load");
            }
        });
    }
    function W(e, o) {
        if (er(o) === er(e.props)) {
            return;
        }
        e.props = o;
        R(e);
        E(e, ()=>{
            e.surface?.setProps(o);
        });
        M(e);
    }
    function Y(e, o) {
        e.handedProps = o;
        W(e, o);
    }
    function q(e) {
        if (e.isDestroyed) {
            return;
        }
        e.isDestroyed = true;
        clearTimeout(e.destroyTimer);
        k(e);
        if (p.get(e.id) === e) {
            p.delete(e.id);
        }
    }
    function J() {
        m = undefined;
        a = 0;
        for (let e of p.values()){
            e.isUnsettled &&= e.frameOutcome !== "measured";
            e.measurings = 0;
            e.frameOutcome = "unmeasured";
        }
    }
    function de(e) {
        let o = e.measurings >= (e.isUnsettled ? 1 : se);
        let n = e.measurings > 0 && a > ne;
        if (o) {
            return "instance";
        }
        if (n) {
            return "frame";
        }
    }
    function ce(e, o) {
        e.frameOutcome = "passed over";
        e.surface?.resize(e.columns, e.rows);
        if (!e.isUnsettled) {
            e.isUnsettled = true;
            Co(e, o);
        }
    }
    function _(e) {
        e.selfDrawnTimer = undefined;
    }
    function Q(e) {
        if (e.holders === 0) {
            q(e);
        }
    }
    function Z(e, o) {
        if (o.columns === e.columns && o.rows === e.rows) {
            return;
        }
        let n = U();
        let s = n !== e.terminal;
        let c = u && !s && e.measurings > 0;
        e.terminal = n;
        e.columns = o.columns;
        e.rows = o.rows;
        if (c) {
            a += 1;
            u = false;
        }
        let x = s ? undefined : de(e);
        if (x !== undefined) {
            ce(e, x);
            return;
        }
        if (!s) {
            e.measurings += 1;
        }
        if (e.frameOutcome === "unmeasured") {
            e.frameOutcome = "measured";
        }
        m ??= setImmediate(J);
        if (s || e.selfDrawnTimer === undefined) {
            R(e);
        }
        if (e.surface) {
            e.surface.resize(o.columns, o.rows);
            M(e);
        }
    }
    function H(e, component) {
        D(e, component, -1);
        e.holders = Math.max(0, e.holders - 1);
        e.dialogHolders = Math.max(0, e.dialogHolders - j(component));
        if (e.holders === 0 && !e.isDestroyed) {
            clearTimeout(e.destroyTimer);
            e.destroyTimer = setTimeout(Q, 0, e);
        } else if (!ee(e)) {
            G(e);
        }
    }
    function ee(e) {
        return e.surface === undefined || e.drawnSite === F(e);
    }
    function G(e) {
        R(e);
        tTt.dropClient(A(e));
        e.drawnSite = undefined;
        if (e.snapshot.status === "drawn") {
            d(e, {
                status: "loading"
            });
        }
        M(e);
    }
    function D(e, o, n) {
        let s = e.heldIn.get(o) ?? Ee(e, o);
        e.heldIn.set(o, {
            ...s,
            holders: Math.max(0, s.holders + n)
        });
    }
    function F(e) {
        if (e.dialogHolders > 0) {
            return HYe;
        }
        return e.rowSite ?? e.drawing.component;
    }
    let z = (e, component)=>({
            id: e.id,
            plugin: e.plugin,
            module: e.module,
            subscribe: (n)=>{
                e.listeners.add(n);
                return ()=>e.listeners.delete(n);
            },
            getSnapshot: ()=>e.snapshot,
            setProps: (n)=>Y(e, n),
            laidOut: ()=>{
                u = true;
            },
            resize: (columns, rows)=>Z(e, {
                    columns,
                    rows
                }),
            pointer: (n)=>{
                R(e);
                E(e, ()=>e.surface?.pointer(n));
            },
            key: (n)=>{
                R(e);
                E(e, ()=>e.surface?.key(n));
            },
            acceptsPointer: ()=>e.surface?.hasPointerListener() === true,
            acceptsKeys: ()=>e.surface?.hasKeyListener() === true,
            threw: (n)=>{
                if (e.surface === undefined || e.isDestroyed) {
                    return;
                }
                C(e, n, "render");
                e.thrownAt = P(e, e.renderedAt);
            },
            drawnAgain: ()=>{
                if (e.thrownAt !== undefined && e.thrownAt !== P(e, U()) && e.holders > 0) {
                    return B(e);
                }
            },
            release: ()=>H(e, component)
        });
    function remountPlugin(e) {
        for (let o of p.values()){
            if (o.plugin !== e || o.isDestroyed) {
                continue;
            }
            k(o);
            o.toldLast = undefined;
            d(o, {
                status: "loading"
            });
            if (o.holders > 0) {
                B(o);
            }
        }
    }
    function K(e, o) {
        clearTimeout(e.destroyTimer);
        e.destroyTimer = undefined;
        e.holders += 1;
        D(e, o.component, 1);
        e.clock = o.clock;
        let n = j(o.component);
        e.dialogHolders += n;
        e.rowSite = n === 0 ? o.component : e.rowSite;
        if (ee(e)) {
            Y(e, o.props);
        } else {
            e.handedProps = o.props;
            e.props = o.props;
            E(e, ()=>{
                e.surface?.setProps(o.props);
            });
            G(e);
        }
        return z(e, o.component);
    }
    return {
        acquire (e) {
            T ??= [
                i.onDisposed(remountPlugin),
                tTt.onFreed(fe)
            ];
            let o = p.get(re(e));
            if (o !== undefined && !o.isDestroyed && o.module === e.module) {
                return K(o, e);
            }
            if (o) {
                q(o);
            }
            let s = ke(e, U());
            p.set(s.id, s);
            D(s, e.component, 1);
            B(s);
            return z(s, e.component);
        },
        remountPlugin,
        count: ()=>p.size,
        dispose () {
            for (let e of T ?? []){
                e();
            }
            T = undefined;
            clearImmediate(m);
            J();
            for (let e of p.values()){
                clearImmediate(e.selfDrawnTimer);
                _(e);
            }
        }
    };
}
const dBo = XNr();
export { KNr, YNr, Bje, vpn, cBo, XNr, dBo };
