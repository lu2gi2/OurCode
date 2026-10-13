import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, en, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { sKe, iKe } from "/$bunfs/root/chunk-cmf2ckg9.js";
N();
function pNo(n) {
    let t = J[n.name];
    let key = {
        upArrow: t === "upArrow",
        downArrow: t === "downArrow",
        leftArrow: t === "leftArrow",
        rightArrow: t === "rightArrow",
        pageDown: t === "pageDown",
        pageUp: t === "pageUp",
        wheelUp: false,
        wheelDown: false,
        home: t === "home",
        end: t === "end",
        return: t === "return",
        escape: t === "escape",
        tab: t === "tab",
        backspace: t === "backspace",
        delete: t === "delete",
        ctrl: n.ctrl,
        shift: n.shift,
        super: n.superKey,
        meta: n.meta
    };
    return {
        input: n.name === "enter" ? `
` : [
            ...n.key
        ].length === 1 ? n.key : "",
        key
    };
}
var J = {
    up: "upArrow",
    down: "downArrow",
    left: "leftArrow",
    right: "rightArrow",
    pagedown: "pageDown",
    pageup: "pageUp",
    home: "home",
    end: "end",
    return: "return",
    escape: "escape",
    tab: "tab",
    backspace: "backspace",
    delete: "delete"
};
const Q = [
    [
        "escape",
        "escape"
    ],
    [
        "return",
        "return"
    ],
    [
        "tab",
        "tab"
    ],
    [
        "backspace",
        "backspace"
    ],
    [
        "delete",
        "delete"
    ],
    [
        "upArrow",
        "up"
    ],
    [
        "downArrow",
        "down"
    ],
    [
        "leftArrow",
        "left"
    ],
    [
        "rightArrow",
        "right"
    ],
    [
        "pageUp",
        "pageup"
    ],
    [
        "pageDown",
        "pagedown"
    ],
    [
        "wheelUp",
        "wheelup"
    ],
    [
        "wheelDown",
        "wheeldown"
    ],
    [
        "home",
        "home"
    ],
    [
        "end",
        "end"
    ]
];
function C(n, t) {
    return {
        name: Q.find(([r])=>t[r])?.[1] ?? (n === `
` ? "enter" : ""),
        key: n,
        ctrl: t.ctrl,
        shift: t.shift,
        meta: t.meta,
        superKey: t.super
    };
}
function ae() {}
function D$t() {
    return {
        decls: new WeakMap,
        scopesChanged: Oe(),
        preemptiveScopes: new Map,
        swallowAll: new Map,
        keyDispatchTrace: Oe()
    };
}
const u = qt(null);
function zmt(n) {
    let a = w(27);
    let { bindings, pendingChordRef, pendingChord, setPendingChord, activeContexts, registerActiveContext, unregisterActiveContext, handlerRegistryRef, preDispatchRef, singleKeyEventRef, keyHandlerRegistry, children } = n;
    let resolve;
    if (a[0] !== bindings || a[1] !== pendingChordRef) {
        resolve = (se, de, ge)=>iKe(C(se, de), ge, bindings, pendingChordRef.current);
        a[0] = bindings;
        a[1] = pendingChordRef;
        a[2] = resolve;
    } else {
        resolve = a[2];
    }
    let getDisplayText;
    if (a[3] !== bindings) {
        getDisplayText = (ce, pe)=>sKe(ce, pe, bindings);
        a[3] = bindings;
        a[4] = getDisplayText;
    } else {
        getDisplayText = a[4];
    }
    let registerHandler;
    if (a[5] !== handlerRegistryRef) {
        registerHandler = (s)=>{
            let handlerRegistryRef_current = handlerRegistryRef.current;
            if (!handlerRegistryRef_current) {
                return ae;
            }
            if (!handlerRegistryRef_current.has(s.action)) {
                handlerRegistryRef_current.set(s.action, new Set);
            }
            handlerRegistryRef_current.get(s.action).add(s);
            return ()=>{
                let S = handlerRegistryRef_current.get(s.action);
                if (S) {
                    S.delete(s);
                    if (S.size === 0) {
                        handlerRegistryRef_current.delete(s.action);
                    }
                }
            };
        };
        a[5] = handlerRegistryRef;
        a[6] = registerHandler;
    } else {
        registerHandler = a[6];
    }
    let registerPreDispatch;
    if (a[7] !== preDispatchRef) {
        registerPreDispatch = (z)=>{
            preDispatchRef.current.add(z);
            return ()=>preDispatchRef.current.delete(z);
        };
        a[7] = preDispatchRef;
        a[8] = registerPreDispatch;
    } else {
        registerPreDispatch = a[8];
    }
    let singleKeyEvent;
    if (a[9] !== singleKeyEventRef) {
        singleKeyEvent = ()=>singleKeyEventRef.current;
        a[9] = singleKeyEventRef;
        a[10] = singleKeyEvent;
    } else {
        singleKeyEvent = a[10];
    }
    let Y;
    if (a[11] !== activeContexts || a[12] !== bindings || a[13] !== keyHandlerRegistry || a[14] !== pendingChord || a[15] !== registerActiveContext || a[16] !== setPendingChord || a[17] !== resolve || a[18] !== getDisplayText || a[19] !== registerHandler || a[20] !== registerPreDispatch || a[21] !== singleKeyEvent || a[22] !== unregisterActiveContext) {
        Y = {
            resolve,
            setPendingChord,
            getDisplayText,
            bindings,
            pendingChord,
            activeContexts,
            registerActiveContext,
            unregisterActiveContext,
            registerHandler,
            registerPreDispatch,
            singleKeyEvent,
            keyHandlerRegistry
        };
        a[11] = activeContexts;
        a[12] = bindings;
        a[13] = keyHandlerRegistry;
        a[14] = pendingChord;
        a[15] = registerActiveContext;
        a[16] = setPendingChord;
        a[17] = resolve;
        a[18] = getDisplayText;
        a[19] = registerHandler;
        a[20] = registerPreDispatch;
        a[21] = singleKeyEvent;
        a[22] = unregisterActiveContext;
        a[23] = Y;
    } else {
        Y = a[23];
    }
    let j = Y;
    let I;
    if (a[24] !== children || a[25] !== j) {
        I = e(u.Provider, {
            value: j,
            children
        });
        a[24] = children;
        a[25] = j;
        a[26] = I;
    } else {
        I = a[26];
    }
    return I;
}
function Lc() {
    return Te(u);
}
function Y0(n, t) {
    let h = w(5);
    let i = t === undefined ? true : t;
    let r = Lc();
    let c;
    let p;
    if (h[0] !== n || h[1] !== i || h[2] !== r) {
        c = ()=>{
            if (!r || !i) {
                return;
            }
            r.registerActiveContext(n);
            return ()=>{
                r.unregisterActiveContext(n);
            };
        };
        p = [
            n,
            r,
            i
        ];
        h[0] = n;
        h[1] = i;
        h[2] = r;
        h[3] = c;
        h[4] = p;
    } else {
        c = h[3];
        p = h[4];
    }
    en(c, p);
}
export { pNo, D$t, zmt, Lc, Y0 };
