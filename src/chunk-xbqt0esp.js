import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { nt, n, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Qc } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { xYn, Mi as selectedValue, Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
N();
const z = 500;
function b$t(L = z) {
    let r = Qc();
    return zr(L, r);
}
function or(L) {
    let a = w(32);
    let { onConfirm, onCancel, confirmLabel, cancelLabel, cancelFirst, focus, hideIndexes, refuseInput, openedAt, windowMs, armAfterMs } = L;
    let s = confirmLabel === undefined ? "Yes" : confirmLabel;
    let i = cancelLabel === undefined ? "No" : cancelLabel;
    let v = cancelFirst === undefined ? false : cancelFirst;
    let j = focus === undefined ? "confirm" : focus;
    let hideIndexes_1 = hideIndexes === undefined ? false : hideIndexes;
    let [E] = y(j);
    let l = b$t(armAfterMs ?? null) || armAfterMs === undefined;
    if (nt()) {
        const windowMs_1 = windowMs ?? armAfterMs;
        let t;
        if (a[0] !== i || a[1] !== s || a[2] !== onCancel || a[3] !== onConfirm || a[4] !== openedAt || a[5] !== refuseInput || a[6] !== windowMs_1) {
            t = e(xYn, {
                confirmLabel: s,
                cancelLabel: i,
                onConfirm,
                onCancel,
                refuseInput,
                openedAt,
                windowMs: windowMs_1
            });
            a[0] = i;
            a[1] = s;
            a[2] = onCancel;
            a[3] = onConfirm;
            a[4] = openedAt;
            a[5] = refuseInput;
            a[6] = windowMs_1;
            a[7] = t;
        } else {
            t = a[7];
        }
        return t;
    }
    let c;
    if (a[8] !== s || a[9] !== l) {
        c = l ? s : e(n, {
            dimColor: true,
            children: s
        });
        a[8] = s;
        a[9] = l;
        a[10] = c;
    } else {
        c = a[10];
    }
    let t;
    if (a[11] !== c) {
        t = {
            label: c,
            value: "confirm"
        };
        a[11] = c;
        a[12] = t;
    } else {
        t = a[12];
    }
    let m = t;
    let f;
    if (a[13] !== i || a[14] !== l) {
        f = l ? i : e(n, {
            dimColor: true,
            children: i
        });
        a[13] = i;
        a[14] = l;
        a[15] = f;
    } else {
        f = a[15];
    }
    let k;
    if (a[16] !== f) {
        k = {
            label: f,
            value: "cancel"
        };
        a[16] = f;
        a[17] = k;
    } else {
        k = a[17];
    }
    let d = k;
    let options;
    if (a[18] !== d || a[19] !== v || a[20] !== m) {
        options = v ? [
            d,
            m
        ] : [
            m,
            d
        ];
        a[18] = d;
        a[19] = v;
        a[20] = m;
        a[21] = options;
    } else {
        options = a[21];
    }
    const isDisabled = !l;
    let onChange;
    if (a[22] !== onCancel || a[23] !== onConfirm) {
        onChange = (ee)=>{
            if (ee === "confirm") {
                return onConfirm();
            }
            return onCancel();
        };
        a[22] = onCancel;
        a[23] = onConfirm;
        a[24] = onChange;
    } else {
        onChange = a[24];
    }
    let q;
    if (a[25] !== hideIndexes_1 || a[26] !== onCancel || a[27] !== E || a[28] !== options || a[29] !== isDisabled || a[30] !== onChange) {
        q = e(Ve, {
            options,
            selectedValue,
            hideIndexes: hideIndexes_1,
            isDisabled,
            defaultFocusValue: E,
            onChange,
            onCancel
        });
        a[25] = hideIndexes_1;
        a[26] = onCancel;
        a[27] = E;
        a[28] = options;
        a[29] = isDisabled;
        a[30] = onChange;
        a[31] = q;
    } else {
        q = a[31];
    }
    return q;
}
export { b$t, or };
