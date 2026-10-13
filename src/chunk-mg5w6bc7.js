import { Eu } from "/$bunfs/root/chunk-4nfvaqps.js";
import { s, n, Ya, kG } from "/$bunfs/root/chunk-8524cxt8.js";
import { Oo, rc } from "/$bunfs/root/chunk-tvwsdq27.js";
import { I, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { jF, sZ, FEo, UEo, BEo, jEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { P, Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { dx } from "/$bunfs/root/chunk-271a0dc5.js";
import { ob } from "/$bunfs/root/chunk-jsagwt7j.js";
import { tk } from "/$bunfs/root/chunk-z7kvmbpw.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Ma, by, Dc, ms } from "/$bunfs/root/chunk-wff73y2a.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { ba } from "/$bunfs/root/chunk-kkhj7m58.js";
import { dA } from "/$bunfs/root/chunk-ekgmkp7n.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function bt(Jt) {
    return Jt + 1;
}
function vt(zt, _t) {
    return r(s, {
        paddingLeft: 2,
        flexDirection: "row",
        children: [
            e(n, {
                dimColor: true,
                children: "· "
            }),
            e(n, {
                children: zt
            })
        ]
    }, _t);
}
function Ct(Pt, Wt) {
    return r(s, {
        paddingLeft: 2,
        flexDirection: "row",
        children: [
            e(n, {
                dimColor: true,
                children: "· "
            }),
            e(n, {
                children: Pt
            })
        ]
    }, `tail-${Wt}`);
}
const z = 20;
const zn = 40;
const _n = 14;
const Pn = 4;
const Wn = 6;
function Q(t, columns) {
    let u = Math.max(1, columns - Wn);
    return Lt(Eu(t, u, "wrap"), `
`) + 1;
}
function dn(rows, columns, u) {
    let h = _n + u.reduce((acc, item)=>acc + Q(item, columns), 0);
    return Math.min(zn, rows - h);
}
function H(t, d, u, h, m, l) {
    let p = u ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)";
    let o = (h > 0 ? `, ${h} executing ${I(h, "a command", "commands")}` : "") + (m > 0 ? `, ${m} ${I(m, "sandbox setting")}` : "") + (l > 0 ? `, ${l} ${I(l, "isolation setting")}` : "");
    if (d) {
        return `\u22EF and ${t} more not shown ${p}${o} \u2014 choose No unless you expected every one of these settings`;
    }
    return `${t} ${I(t, "setting")} not shown ${p}${o} \u2014 choose No unless you expected every one of these settings`;
}
function cn(head, columns, u) {
    if (head.length === 0) {
        return {
            head: [],
            tail: [],
            elided: 0
        };
    }
    let h = head.map((i)=>Q(i, columns));
    let m = h.reduce((acc, item)=>acc + item, 0);
    let l = Math.max(Q(H(head.length, true, false, head.length, head.length, head.length), columns), Q(H(head.length, true, true, head.length, head.length, head.length), columns));
    if (head.length <= z && m <= Math.max(u, l)) {
        return {
            head,
            tail: [],
            elided: 0
        };
    }
    let p = l;
    let o = 0;
    let t_length = head.length;
    let g = (i)=>p + h[i] <= u;
    if (g(0)) {
        p += h[0];
        o = 1;
    }
    while(t_length - 1 >= Math.max(o, head.length - Pn) && t_length - 1 > 0 && g(t_length - 1)){
        t_length--;
        p += h[t_length];
    }
    while(o < t_length && o + (head.length - t_length) < z && g(o)){
        p += h[o];
        o++;
    }
    return {
        head: head.slice(0, o),
        tail: head.slice(t_length),
        elided: t_length - o
    };
}
function ln(t, { commandRows, sandboxRows, isolationRows, envRows, categoryRows }) {
    let p = F(Object.values(t.payloadSlots), (g)=>g?.shellSettings.hooks !== undefined);
    let o = commandRows.length - p;
    let a = [];
    if (o > 0) {
        a.push(`${I(o, "command setting")} \xD7${o}`);
    }
    if (sandboxRows.length > 0) {
        a.push(`${I(sandboxRows.length, "sandbox setting")} \xD7${sandboxRows.length}`);
    }
    if (isolationRows.length > 0) {
        a.push(`${I(isolationRows.length, "isolation setting")} \xD7${isolationRows.length}`);
    }
    if (envRows.length > 0) {
        a.push(`${I(envRows.length, "env var")} \xD7${envRows.length}`);
    }
    if (categoryRows.length > 0 || p > 0) {
        a.push("hooks");
    }
    return a.join(", ");
}
const ee = {
    intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine."
};
const un = {
    intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice: "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent."
};
const hn = {
    intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
    listLabel: ee.listLabel,
    advice: ee.advice,
    risk: "these can change where Claude Code runs or what it can connect to."
};
const v = Oo;
function hNt(t) {
    let d = w(2);
    let u;
    if (d[0] !== t) {
        u = e(Je, {
            ...t
        }, t.reveal);
        d[0] = t;
        d[1] = u;
    } else {
        u = d[1];
    }
    return u;
}
function Je(t) {
    let i = w(98);
    let { settings, baseline, reveal, onAccept, onReject, wouldTakeAnswer } = t;
    let o = reveal === "login_handoff";
    let { columns, rows } = ke();
    let f;
    let copy_1;
    let hiddenLine_1;
    let ze;
    let removedLine_1;
    let riskLine_1;
    let _e;
    let Pe;
    let An;
    if (i[0] !== baseline || i[1] !== columns || i[2] !== settings || i[3] !== rows) {
        let En = jF(settings);
        let W = FEo(baseline, En);
        let q = sZ(W.changed) ? W.changed : En;
        copy_1 = UEo(q, settings) ? un : BEo(q, settings) ? hn : ee;
        let We = q === W.changed ? W.unchangedCount : 0;
        let T = W.removedCount;
        hiddenLine_1 = We > 0 ? `\uFF0B ${We} other active ${I(We, "setting")} unchanged since your last approval` : null;
        let Y;
        if (i[13] !== T) {
            Y = T > 0 ? `\u2212 ${T} previously approved ${I(T, "setting")} no longer ${T === 1 ? "requires" : "require"} approval` : null;
            i[13] = T;
            i[14] = Y;
        } else {
            Y = i[14];
        }
        removedLine_1 = Y;
        let In = jEo(q);
        riskLine_1 = `Approving applies: ${ln(q, In)} \u2014 ${copy_1.risk}`;
        let kt = dn(rows, columns, [
            copy_1.intro,
            copy_1.advice,
            riskLine_1,
            ...hiddenLine_1 ? [
                hiddenLine_1
            ] : [],
            ...removedLine_1 ? [
                removedLine_1
            ] : []
        ]);
        let { commandRows, sandboxRows, isolationRows, envRows, categoryRows } = In;
        f = commandRows;
        Pe = sandboxRows;
        ze = isolationRows;
        _e = [
            ...f,
            ...Pe,
            ...ze,
            ...envRows,
            ...categoryRows
        ];
        An = cn(_e, columns, kt);
        i[0] = baseline;
        i[1] = columns;
        i[2] = settings;
        i[3] = rows;
        i[4] = f;
        i[5] = copy_1;
        i[6] = hiddenLine_1;
        i[7] = ze;
        i[8] = removedLine_1;
        i[9] = riskLine_1;
        i[10] = _e;
        i[11] = Pe;
        i[12] = An;
    } else {
        f = i[4];
        copy_1 = i[5];
        hiddenLine_1 = i[6];
        ze = i[7];
        removedLine_1 = i[8];
        riskLine_1 = i[9];
        _e = i[10];
        Pe = i[11];
        An = i[12];
    }
    let B = An;
    let length = B.head.length;
    let Fe = _e.length - B.tail.length;
    let elidedCommandCount_1 = Math.max(0, Math.min(f.length, Fe) - length);
    let Ye = f.length + Pe.length;
    let elidedSandboxCount_1 = Math.max(0, Math.min(Ye, Fe) - Math.max(f.length, length));
    let It = Ye + ze.length;
    let elidedIsolationCount_1 = Math.max(0, Math.min(It, Fe) - Math.max(Ye, length));
    let Y;
    if (i[15] !== copy_1 || i[16] !== elidedCommandCount_1 || i[17] !== elidedIsolationCount_1 || i[18] !== elidedSandboxCount_1 || i[19] !== hiddenLine_1 || i[20] !== removedLine_1 || i[21] !== riskLine_1 || i[22] !== B) {
        Y = {
            ...B,
            elidedCommandCount: elidedCommandCount_1,
            elidedSandboxCount: elidedSandboxCount_1,
            elidedIsolationCount: elidedIsolationCount_1,
            copy: copy_1,
            riskLine: riskLine_1,
            hiddenLine: hiddenLine_1,
            removedLine: removedLine_1
        };
        i[15] = copy_1;
        i[16] = elidedCommandCount_1;
        i[17] = elidedIsolationCount_1;
        i[18] = elidedSandboxCount_1;
        i[19] = hiddenLine_1;
        i[20] = removedLine_1;
        i[21] = riskLine_1;
        i[22] = B;
        i[23] = Y;
    } else {
        Y = i[23];
    }
    let { head, tail, elided, elidedCommandCount, elidedSandboxCount, elidedIsolationCount, copy, riskLine, hiddenLine, removedLine } = Y;
    let ne;
    if (i[24] !== onAccept || i[25] !== onReject) {
        ne = (Mt)=>{
            if (Mt === "confirm") {
                return onAccept();
            }
            return onReject();
        };
        i[24] = onAccept;
        i[25] = onReject;
        i[26] = ne;
    } else {
        ne = i[26];
    }
    let j = tk(ne);
    let He = Ma(v);
    let { refusedWithin, noteRefused, epoch } = ms();
    let openedAt = by();
    let [jt, Dt] = y(0);
    let te;
    if (i[27] === S) {
        te = ()=>{
            Dt(bt);
        };
        i[27] = te;
    } else {
        te = i[27];
    }
    let oe;
    if (i[28] !== settings) {
        oe = [
            settings
        ];
        i[28] = settings;
        i[29] = oe;
    } else {
        oe = i[29];
    }
    P(te, oe);
    let Nt = Dc(`${epoch}:${jt}`, v);
    let Mn;
    if (i[30] !== o || i[31] !== He || i[32] !== noteRefused || i[33] !== refusedWithin) {
        Mn = function A() {
            if (!o) {
                return false;
            }
            if (He() || refusedWithin(v)) {
                noteRefused();
                return true;
            }
            return false;
        };
        i[30] = o;
        i[31] = He;
        i[32] = noteRefused;
        i[33] = refusedWithin;
        i[34] = Mn;
    } else {
        Mn = i[34];
    }
    let A = Mn;
    let Tn;
    if (i[35] !== A || i[36] !== wouldTakeAnswer) {
        Tn = function ae() {
            if (A()) {
                return true;
            }
            return wouldTakeAnswer?.() === false;
        };
        i[35] = A;
        i[36] = wouldTakeAnswer;
        i[37] = Tn;
    } else {
        Tn = i[37];
    }
    let refuseInput = Tn;
    let jn;
    if (i[38] !== j || i[39] !== A) {
        jn = function C(Ot) {
            if (A()) {
                return;
            }
            j.answer(Ot);
        };
        i[38] = j;
        i[39] = A;
        i[40] = jn;
    } else {
        jn = i[40];
    }
    let C = jn;
    let Dn;
    if (i[41] !== C) {
        Dn = ()=>C("cancel");
        i[41] = C;
        i[42] = Dn;
    } else {
        Dn = i[42];
    }
    let Nn;
    if (i[43] === S) {
        Nn = {
            context: "Confirmation"
        };
        i[43] = Nn;
    } else {
        Nn = i[43];
    }
    Ze("confirm:no", Dn, Nn);
    let de;
    if (i[44] !== copy.intro) {
        de = e(n, {
            children: copy.intro
        });
        i[44] = copy.intro;
        i[45] = de;
    } else {
        de = i[45];
    }
    let ce;
    if (i[46] !== copy.listLabel) {
        ce = e(n, {
            dimColor: true,
            children: copy.listLabel
        });
        i[46] = copy.listLabel;
        i[47] = ce;
    } else {
        ce = i[47];
    }
    let le;
    if (i[48] !== head) {
        le = head.map(vt);
        i[48] = head;
        i[49] = le;
    } else {
        le = i[49];
    }
    let ue;
    if (i[50] !== elided || i[51] !== elidedCommandCount || i[52] !== elidedIsolationCount || i[53] !== elidedSandboxCount || i[54] !== head.length || i[55] !== tail.length) {
        ue = elided > 0 && e(s, {
            paddingLeft: 2,
            children: e(n, {
                color: "warning",
                children: H(elided, head.length + tail.length > 0, head.length + tail.length === z, elidedCommandCount, elidedSandboxCount, elidedIsolationCount)
            })
        });
        i[50] = elided;
        i[51] = elidedCommandCount;
        i[52] = elidedIsolationCount;
        i[53] = elidedSandboxCount;
        i[54] = head.length;
        i[55] = tail.length;
        i[56] = ue;
    } else {
        ue = i[56];
    }
    let he;
    if (i[57] !== tail) {
        he = tail.map(Ct);
        i[57] = tail;
        i[58] = he;
    } else {
        he = i[58];
    }
    let me;
    if (i[59] !== hiddenLine) {
        me = hiddenLine && e(s, {
            paddingLeft: 2,
            children: e(n, {
                dimColor: true,
                children: hiddenLine
            })
        });
        i[59] = hiddenLine;
        i[60] = me;
    } else {
        me = i[60];
    }
    let pe;
    if (i[61] !== removedLine) {
        pe = removedLine && e(s, {
            paddingLeft: 2,
            children: e(n, {
                dimColor: true,
                children: removedLine
            })
        });
        i[61] = removedLine;
        i[62] = pe;
    } else {
        pe = i[62];
    }
    let ge;
    if (i[63] !== ce || i[64] !== le || i[65] !== ue || i[66] !== he || i[67] !== me || i[68] !== pe) {
        ge = r(s, {
            flexDirection: "column",
            children: [
                ce,
                le,
                ue,
                he,
                me,
                pe
            ]
        });
        i[63] = ce;
        i[64] = le;
        i[65] = ue;
        i[66] = he;
        i[67] = me;
        i[68] = pe;
        i[69] = ge;
    } else {
        ge = i[69];
    }
    let fe;
    if (i[70] !== copy.advice) {
        fe = e(n, {
            children: copy.advice
        });
        i[70] = copy.advice;
        i[71] = fe;
    } else {
        fe = i[71];
    }
    let we;
    if (i[72] !== riskLine) {
        we = e(n, {
            color: "warning",
            children: riskLine
        });
        i[72] = riskLine;
        i[73] = we;
    } else {
        we = i[73];
    }
    const on = o ? `${j.attempts}:${Nt.remountKey}` : `${j.attempts}`;
    const windowMs = o ? v : undefined;
    const focus = o ? "cancel" : j.refused ?? "confirm";
    let onConfirm;
    let onCancel;
    if (i[74] !== C) {
        onConfirm = ()=>C("confirm");
        onCancel = ()=>C("cancel");
        i[74] = C;
        i[75] = onConfirm;
        i[76] = onCancel;
    } else {
        onConfirm = i[75];
        onCancel = i[76];
    }
    let Ce;
    if (i[77] !== o || i[78] !== refuseInput || i[79] !== openedAt || i[80] !== on || i[81] !== windowMs || i[82] !== focus || i[83] !== onConfirm || i[84] !== onCancel) {
        Ce = e(or, {
            openedAt,
            windowMs,
            refuseInput,
            confirmLabel: "Yes, I trust these settings",
            cancelLabel: "No, exit Claude Code",
            cancelFirst: o,
            focus,
            hideIndexes: o,
            onConfirm,
            onCancel
        }, on);
        i[77] = o;
        i[78] = refuseInput;
        i[79] = openedAt;
        i[80] = on;
        i[81] = windowMs;
        i[82] = focus;
        i[83] = onConfirm;
        i[84] = onCancel;
        i[85] = Ce;
    } else {
        Ce = i[85];
    }
    const action = o ? "select" : "confirm";
    let Re;
    if (i[86] !== action) {
        Re = e(G, {
            chord: "enter",
            action
        });
        i[86] = action;
        i[87] = Re;
    } else {
        Re = i[87];
    }
    let On;
    if (i[88] === S) {
        On = e(G, {
            chord: "escape",
            action: "exit"
        });
        i[88] = On;
    } else {
        On = i[88];
    }
    let xe;
    if (i[89] !== Re) {
        xe = e(dA, {
            children: r(be, {
                children: [
                    Re,
                    On
                ]
            })
        });
        i[89] = Re;
        i[90] = xe;
    } else {
        xe = i[90];
    }
    let Jn;
    if (i[91] !== de || i[92] !== ge || i[93] !== fe || i[94] !== we || i[95] !== Ce || i[96] !== xe) {
        Jn = e(ba, {
            color: "warning",
            titleColor: "warning",
            title: "Managed settings require approval",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                paddingTop: 1,
                children: [
                    de,
                    ge,
                    fe,
                    we,
                    Ce,
                    xe
                ]
            })
        });
        i[91] = de;
        i[92] = ge;
        i[93] = fe;
        i[94] = we;
        i[95] = Ce;
        i[96] = xe;
        i[97] = Jn;
    } else {
        Jn = i[97];
    }
    return Jn;
}
const Yft = (settings, d, baseline)=>new Promise((resolve, reject)=>{
        let l = false;
        let p = null;
        function o(a) {
            return p !== null && !rc(a, p);
        }
        (async ()=>{
            let { rerender, unmount, waitUntilExit } = await kG(e(ob, {
                children: e(kn, {
                    settings,
                    baseline,
                    onAccept: (f)=>{
                        if (!o(f)) {
                            return false;
                        }
                        l = true;
                        resolve("approved");
                        rerender(null);
                        if (!d) {
                            unmount();
                        }
                    },
                    onReject: (f)=>{
                        if (!o(f)) {
                            return false;
                        }
                        l = true;
                        resolve("rejected");
                        rerender(null);
                        if (!d) {
                            unmount();
                        }
                    }
                })
            }, "managed-settings-security"), dx(false));
            p = Date.now();
            await waitUntilExit();
            if (!l) {
                let f = Error("Managed-settings consent dialog exited without an answer");
                c(f);
                reject(f);
            }
        })().catch((a)=>{
            c(a);
            reject(a);
        });
    });
function kn(t) {
    let p = w(11);
    let { settings, baseline, onAccept, onReject } = t;
    let l = Ya();
    let onAccept_1;
    if (p[0] !== l || p[1] !== onAccept) {
        onAccept_1 = ()=>onAccept(l);
        p[0] = l;
        p[1] = onAccept;
        p[2] = onAccept_1;
    } else {
        onAccept_1 = p[2];
    }
    let onReject_1;
    if (p[3] !== l || p[4] !== onReject) {
        onReject_1 = ()=>onReject(l);
        p[3] = l;
        p[4] = onReject;
        p[5] = onReject_1;
    } else {
        onReject_1 = p[5];
    }
    let g;
    if (p[6] !== baseline || p[7] !== settings || p[8] !== onAccept_1 || p[9] !== onReject_1) {
        g = e(hNt, {
            settings,
            baseline,
            reveal: "default",
            onAccept: onAccept_1,
            onReject: onReject_1
        });
        p[6] = baseline;
        p[7] = settings;
        p[8] = onAccept_1;
        p[9] = onReject_1;
        p[10] = g;
    } else {
        g = p[10];
    }
    return g;
}
export { hNt, Yft };
