import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Oo } from "/$bunfs/root/chunk-tvwsdq27.js";
import { Ma, by, ms } from "/$bunfs/root/chunk-wff73y2a.js";
import { g$, jg } from "/$bunfs/root/chunk-kasbfbhj.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { XHr, B9, JHr, QHr } from "/$bunfs/root/chunk-a4d86mbj.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function onCancel() {}
function U9e(ae) {
    let i = w(55);
    let { offer, entry, credentials, onDone } = ae;
    let [Q, fe] = y(false);
    let x = R(false);
    let g = Ma(Oo);
    let { refusedWithin, noteRefused } = ms();
    let V = by();
    let E;
    let k;
    let m;
    let refuseInput;
    let H;
    let X;
    let openedAt;
    let windowMs;
    let hideIndexes;
    let confirmLabel;
    let cancelLabel;
    let title;
    let T;
    let color;
    let onConfirm;
    if (i[0] !== Q || i[1] !== credentials || i[2] !== entry || i[3] !== g || i[4] !== noteRefused || i[5] !== offer || i[6] !== onDone || i[7] !== refusedWithin || i[8] !== V) {
        X = Sn;
        Le: {
            let c = g$();
            let u = B9(offer);
            let l;
            if (i[24] !== offer) {
                l = XHr(offer);
                i[24] = offer;
                i[25] = l;
            } else {
                l = i[25];
            }
            let q = l;
            let h;
            if (i[26] !== g || i[27] !== noteRefused || i[28] !== refusedWithin) {
                h = function p() {
                    if (g() || refusedWithin(Oo)) {
                        noteRefused();
                        return true;
                    }
                    return false;
                };
                i[26] = g;
                i[27] = noteRefused;
                i[28] = refusedWithin;
                i[29] = h;
            } else {
                h = i[29];
            }
            let p = h;
            let F;
            if (i[30] !== entry || i[31] !== offer || i[32] !== onDone || i[33] !== p) {
                F = function m() {
                    if (x.current || p()) {
                        return;
                    }
                    x.current = true;
                    onDone(JHr(entry, offer));
                };
                i[30] = entry;
                i[31] = offer;
                i[32] = onDone;
                i[33] = p;
                i[34] = F;
            } else {
                F = i[34];
            }
            m = F;
            onConfirm = function D() {
                if (x.current || p()) {
                    return;
                }
                x.current = true;
                fe(true);
                QHr(entry, credentials, offer).then(onDone).catch(()=>{
                    onDone({
                        outcome: "unavailable",
                        text: jg(offer.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
                    });
                });
            };
            if (Q) {
                let L;
                if (i[35] === S) {
                    L = e(n, {
                        dimColor: true,
                        children: "Resetting your limits… this usually takes a few seconds"
                    });
                    i[35] = L;
                } else {
                    L = i[35];
                }
                X = e(_e, {
                    title: jg(c.confirmTitle, u),
                    onCancel,
                    exitOnCtrlCD: true,
                    color: "suggestion",
                    hideInputGuide: true,
                    children: L
                });
                break Le;
            }
            k = _e;
            title = jg(c.confirmTitle, u);
            T = m;
            color = "suggestion";
            let L;
            if (i[36] !== q) {
                L = q === undefined ? null : e(n, {
                    children: q
                });
                i[36] = q;
                i[37] = L;
            } else {
                L = i[37];
            }
            H = r(s, {
                flexDirection: "column",
                children: [
                    L,
                    e(n, {
                        children: jg(c.confirmBody, u)
                    }),
                    e(n, {
                        dimColor: true,
                        children: jg(c.confirmDetail, u)
                    })
                ]
            });
            E = or;
            refuseInput = p;
            openedAt = V;
            windowMs = Oo;
            hideIndexes = true;
            confirmLabel = jg(c.confirmYes, u);
            cancelLabel = jg(c.confirmNo, u);
        }
        i[0] = Q;
        i[1] = credentials;
        i[2] = entry;
        i[3] = g;
        i[4] = noteRefused;
        i[5] = offer;
        i[6] = onDone;
        i[7] = refusedWithin;
        i[8] = V;
        i[9] = E;
        i[10] = k;
        i[11] = m;
        i[12] = refuseInput;
        i[13] = H;
        i[14] = X;
        i[15] = openedAt;
        i[16] = windowMs;
        i[17] = hideIndexes;
        i[18] = confirmLabel;
        i[19] = cancelLabel;
        i[20] = title;
        i[21] = T;
        i[22] = color;
        i[23] = onConfirm;
    } else {
        E = i[9];
        k = i[10];
        m = i[11];
        refuseInput = i[12];
        H = i[13];
        X = i[14];
        openedAt = i[15];
        windowMs = i[16];
        hideIndexes = i[17];
        confirmLabel = i[18];
        cancelLabel = i[19];
        title = i[20];
        T = i[21];
        color = i[22];
        onConfirm = i[23];
    }
    if (X !== Sn) {
        return X;
    }
    let l;
    if (i[38] !== E || i[39] !== m || i[40] !== refuseInput || i[41] !== openedAt || i[42] !== windowMs || i[43] !== hideIndexes || i[44] !== confirmLabel || i[45] !== cancelLabel || i[46] !== onConfirm) {
        l = e(E, {
            refuseInput,
            openedAt,
            windowMs,
            hideIndexes,
            confirmLabel,
            cancelLabel,
            onConfirm,
            onCancel: m
        });
        i[38] = E;
        i[39] = m;
        i[40] = refuseInput;
        i[41] = openedAt;
        i[42] = windowMs;
        i[43] = hideIndexes;
        i[44] = confirmLabel;
        i[45] = cancelLabel;
        i[46] = onConfirm;
        i[47] = l;
    } else {
        l = i[47];
    }
    let h;
    if (i[48] !== k || i[49] !== H || i[50] !== l || i[51] !== title || i[52] !== T || i[53] !== color) {
        h = r(k, {
            title,
            onCancel: T,
            color,
            children: [
                H,
                l
            ]
        });
        i[48] = k;
        i[49] = H;
        i[50] = l;
        i[51] = title;
        i[52] = T;
        i[53] = color;
        i[54] = h;
    } else {
        h = i[54];
    }
    return h;
}
export { U9e };
