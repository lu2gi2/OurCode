import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
function p() {
    return gs({
        value: "",
        active: false,
        launchWarning: null,
        linkSuppliedTexts: new Set,
        submittedLinkPrefill: null,
        vimMode: "INSERT",
        stash: null,
        cameBack: false
    });
}
const a = new lt(()=>p());
function tI(n) {
    return a.of(n);
}
function tfn(n) {
    return tI(n).getState().value;
}
function QIe(n, e) {
    n.setState((t)=>{
        if (t.value === e) {
            return t;
        }
        if (t.value !== "" && e === "") {
            let o = t.value.trim();
            let r = t.launchWarning?.type === "deep-link" && t.launchWarning.text === undefined ? new Set(t.linkSuppliedTexts).add(o) : t.linkSuppliedTexts;
            return {
                ...t,
                value: e,
                launchWarning: null,
                linkSuppliedTexts: r,
                submittedLinkPrefill: r.has(o) ? t.value : null,
                cameBack: false
            };
        }
        return {
            ...t,
            value: e
        };
    });
}
function q$r(n) {
    return tI(n).getState().submittedLinkPrefill;
}
function K$r(n, e, t) {
    tI(n).setState((o)=>{
        let r = t.trim();
        if (r === "" || o.linkSuppliedTexts.has(r) || !o.linkSuppliedTexts.has(e.trim())) {
            return o;
        }
        return {
            ...o,
            linkSuppliedTexts: new Set(o.linkSuppliedTexts).add(r)
        };
    });
}
function QBo(n, e) {
    QIe(tI(n), e);
}
function Y$r(n, stash) {
    n.setState((t)=>{
        if (t.stash === stash) {
            return t;
        }
        return {
            ...t,
            stash
        };
    });
}
function nfn(n, active) {
    n.setState((t)=>{
        if (t.active === active) {
            return t;
        }
        return {
            ...t,
            active
        };
    });
}
function g5n(n, e) {
    nfn(tI(n), e);
}
function ZBo(n, e) {
    n.setState((t)=>{
        let cameBack = e && t.value !== "";
        if (t.cameBack === cameBack) {
            return t;
        }
        return {
            ...t,
            cameBack
        };
    });
}
function dUt(n, vimMode) {
    tI(n).setState((t)=>{
        if (t.vimMode === vimMode) {
            return t;
        }
        return {
            ...t,
            vimMode
        };
    });
}
function h5n(n, e) {
    n.setState((t)=>{
        let o = e.type === "deep-link" ? e.text?.trim() : undefined;
        let r = o === undefined || t.linkSuppliedTexts.has(o) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(o);
        let launchWarning = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
        if (launchWarning === t.launchWarning && r === t.linkSuppliedTexts) {
            return t;
        }
        return {
            ...t,
            launchWarning,
            linkSuppliedTexts: r
        };
    });
}
function X$r(n, e) {
    h5n(tI(n), e);
}
export { tI, tfn, QIe, q$r, K$r, QBo, Y$r, nfn, g5n, ZBo, dUt, h5n, X$r };
