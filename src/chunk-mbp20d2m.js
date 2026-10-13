import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { $t, pxe } from "/$bunfs/root/chunk-xb9cceab.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
const r = 5000;
function l1r(e, flagSource, negotiationDenylisted, listed) {
    let s = {
        sentAhead: false,
        flagSource,
        negotiationDenylisted,
        listed,
        listChangedBeforeHandler: false,
        handlerRegistered: false
    };
    $t().toolsListAhead.set(e, s);
    return s;
}
function fzo(e, t, o) {
    e.page = t;
    e.pageSentAtMs = o;
}
function mzo(e) {
    if (e.page !== undefined) {
        e.expiry = setTimeout(n, r, e);
        e.expiry.unref?.();
    }
}
function c1r(e) {
    n(e);
}
function gzo(e) {
    let t = $t().toolsListAhead.get(e);
    if (t?.page === undefined || t.pageSentAtMs === undefined) {
        return;
    }
    let o = {
        page: t.page,
        sentAtMs: t.pageSentAtMs
    };
    n(t);
    return o;
}
function hzo(e, t) {
    try {
        let o = $t().toolsListAhead.get(e);
        if (o !== undefined && o.firstPageMark === undefined) {
            o.firstPageMark = pxe(t) ?? "unmarked";
        }
    } catch  {}
}
function yzo(e, t) {
    let o = $t().toolsListAhead.get(e);
    if (o !== undefined) {
        o.earlyAnswer = t;
    }
}
function d1r(e) {
    let t = $t().toolsListAhead.get(e);
    if (t === undefined) {
        return;
    }
    n(t);
    if (t.sentAhead && !t.handlerRegistered) {
        t.listChangedBeforeHandler = true;
    }
}
function _zo(e) {
    let t = $t().toolsListAhead.get(e);
    if (t === undefined) {
        return false;
    }
    t.handlerRegistered = true;
    let t_listChangedBeforeHandler = t.listChangedBeforeHandler;
    t.listChangedBeforeHandler = false;
    return t_listChangedBeforeHandler;
}
function Hht(e) {
    if (e === undefined) {
        return {};
    }
    return {
        toolsListAhead: e.sentAhead,
        toolsListAheadListed: e.listed,
        toolsListAheadFlagSource: d(e.flagSource),
        ...e.earlyAnswer !== undefined && {
            toolsListAheadEarlyAnswer: d(e.earlyAnswer)
        },
        ...e.firstPageMark !== undefined && {
            toolsListFirstPageMark: d(e.firstPageMark)
        }
    };
}
function bzo(e) {
    let t = $t().toolsListAhead.get(hi(e.client));
    if (t === undefined) {
        return {};
    }
    return {
        ...Hht(t),
        negotiationDenylisted: t.negotiationDenylisted
    };
}
function n(e) {
    clearTimeout(e.expiry);
    e.page = undefined;
    e.pageSentAtMs = undefined;
    e.expiry = undefined;
}
export { l1r, fzo, mzo, c1r, gzo, hzo, yzo, d1r, _zo, Hht, bzo };
