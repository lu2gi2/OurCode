import { ND, EW } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Jct, Gen } from "/$bunfs/root/chunk-6g4165br.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ma } from "/$bunfs/root/chunk-dzxgwxyz.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
const B = "cyan_FOR_SUBAGENTS_ONLY";
function VP(a) {
    if (!a) {
        return B;
    }
    if (EW(a)) {
        return ND[a];
    }
    return `ansi:${a}`;
}
N();
const format = {
    keyCase: "lower"
};
function _ee(a) {
    let o = w(19);
    let { displayName, qualifier, count, addMargin, fallbackLabel, body } = a;
    let h = count === undefined ? 1 : count;
    let D = addMargin === undefined ? true : addMargin;
    let chord = ma("app:toggleTranscript", "Global", "ctrl+o");
    let A;
    if (o[0] !== displayName || o[1] !== fallbackLabel) {
        A = Jct(displayName) || fallbackLabel;
        o[0] = displayName;
        o[1] = fallbackLabel;
        o[2] = A;
    } else {
        A = o[2];
    }
    let u = A;
    let P;
    if (o[3] !== body) {
        P = body ? Gen(body) : "";
        o[3] = body;
        o[4] = P;
    } else {
        P = o[4];
    }
    let i = P;
    const marginTop = D ? 1 : 0;
    let q;
    if (o[5] === S) {
        q = r(n, {
            "aria-hidden": true,
            children: [
                te.pointerSmall,
                " "
            ]
        });
        o[5] = q;
    } else {
        q = o[5];
    }
    const y = h === 1 ? "Message" : `${h} messages`;
    const T = qualifier ? ` (${qualifier})` : "";
    let p;
    if (o[6] !== i) {
        p = i ? r(n, {
            italic: true,
            children: [
                ": ",
                i
            ]
        }) : "";
        o[6] = i;
        o[7] = p;
    } else {
        p = o[7];
    }
    let l;
    if (o[8] !== chord) {
        l = e(G, {
            chord,
            action: "expand",
            parens: true,
            format
        });
        o[8] = chord;
        o[9] = l;
    } else {
        l = o[9];
    }
    let children;
    if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) {
        children = r(n, {
            dimColor: true,
            children: [
                q,
                y,
                " from @",
                u,
                T,
                p,
                " ",
                l
            ]
        });
        o[10] = u;
        o[11] = l;
        o[12] = y;
        o[13] = T;
        o[14] = p;
        o[15] = children;
    } else {
        children = o[15];
    }
    let v;
    if (o[16] !== children || o[17] !== marginTop) {
        v = e(s, {
            marginTop,
            children
        });
        o[16] = children;
        o[17] = marginTop;
        o[18] = v;
    } else {
        v = o[18];
    }
    return v;
}
export { VP, _ee };
