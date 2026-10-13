import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ecr } from "/$bunfs/root/chunk-n4gsaesa.js";
import { Kqe } from "/$bunfs/root/chunk-yq147k4z.js";
import { Hdn } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Vmt } from "/$bunfs/root/chunk-vqyxznfw.js";
import { P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gfe } from "/$bunfs/root/chunk-zckvn1wy.js";
import { RVe, sB } from "/$bunfs/root/chunk-rk838m7w.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { Y_n, g_t, BWt } from "/$bunfs/root/chunk-gw1f0xa7.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const s = {
    light: {
        background: "#f9f9f7",
        foreground: "#000000"
    },
    dark: {
        background: "#1f1f1e",
        foreground: "#ffffff"
    }
};
function JDo(i, n, t) {
    if (!t) {
        return;
    }
    let r;
    if (i === "auto") {
        if (n === undefined) {
            return;
        }
        r = n;
    } else {
        r = BWt(i);
    }
    if (Kqe(r)) {
        return s.light;
    }
    return s.dark;
}
function l() {
    let t = w(4);
    let [i, n] = y(Y_n);
    let r;
    let o;
    if (t[0] === S) {
        r = ()=>g_t(()=>n(Y_n()));
        o = [];
        t[0] = r;
        t[1] = o;
    } else {
        r = t[0];
        o = t[1];
    }
    P(r, o);
    let m;
    if (t[2] !== i) {
        m = JDo(Hdn(), i, Ecr());
        t[2] = i;
        t[3] = m;
    } else {
        m = t[3];
    }
    return m;
}
function uKn(i) {
    let m = w(9);
    let { children, mouseTracking, killRing } = i;
    let surface = l();
    let c;
    if (m[0] !== children || m[1] !== killRing) {
        c = e(Vmt, {
            handle: killRing,
            children
        });
        m[0] = children;
        m[1] = killRing;
        m[2] = c;
    } else {
        c = m[2];
    }
    let children_1 = c;
    if (RVe()) {
        let mouseTracking_1;
        if (m[3] !== mouseTracking) {
            mouseTracking_1 = mouseTracking ?? sB();
            m[3] = mouseTracking;
            m[4] = mouseTracking_1;
        } else {
            mouseTracking_1 = m[4];
        }
        let p;
        if (m[5] !== surface || m[6] !== mouseTracking_1 || m[7] !== children_1) {
            p = e(gfe, {
                mouseTracking: mouseTracking_1,
                surface,
                children: children_1
            });
            m[5] = surface;
            m[6] = mouseTracking_1;
            m[7] = children_1;
            m[8] = p;
        } else {
            p = m[8];
        }
        return p;
    }
    return children_1;
}
function zUs() {
    if (O() === "windows" || a.WT_SESSION) {
        process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
    }
}
export { JDo, uKn, zUs };
