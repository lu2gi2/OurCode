import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Lm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, R, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ma, by, Dc, ms } from "/$bunfs/root/chunk-wff73y2a.js";
import { $n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { Qwe } from "/$bunfs/root/chunk-sffxexfq.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function me() {
    i("tengu_claude_md_includes_dialog_shown", {});
}
function ge(Ce, De) {
    return r(n, {
        dimColor: true,
        wrap: "truncate-middle",
        children: [
            "  ",
            $n(Ce.path)
        ]
    }, De);
}
function Ocn(hasClaudeMdExternalIncludesApproved, h, o) {
    Lm((a)=>({
            ...a,
            hasClaudeMdExternalIncludesApproved,
            hasClaudeMdExternalIncludesWarningShown: true
        }), o);
    i(hasClaudeMdExternalIncludesApproved ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", {
        source: d(h)
    });
}
function I4n(g) {
    let t = w(37);
    let { onDone, isStandaloneDialog, externalIncludes } = g;
    let { storageV5 } = Pe();
    let z;
    if (t[0] === S) {
        z = [];
        t[0] = z;
    } else {
        z = t[0];
    }
    P(me, z);
    let c = Ma();
    let { refusedWithin, noteRefused, epoch } = ms();
    let H;
    if (t[1] !== c || t[2] !== noteRefused || t[3] !== refusedWithin) {
        H = function y() {
            if (c() || refusedWithin()) {
                noteRefused();
                return true;
            }
            return false;
        };
        t[1] = c;
        t[2] = noteRefused;
        t[3] = refusedWithin;
        t[4] = H;
    } else {
        H = t[4];
    }
    let refuseInput = H;
    let openedAt = by();
    let j = Dc(epoch);
    let J;
    if (t[5] !== externalIncludes) {
        J = externalIncludes ?? [];
        t[5] = externalIncludes;
        t[6] = J;
    } else {
        J = t[6];
    }
    let f = J;
    let Q;
    if (t[7] !== f) {
        Q = f.length <= Qwe ? f : f.slice(0, Qwe - 2);
        t[7] = f;
        t[8] = Q;
    } else {
        Q = t[8];
    }
    let X = Q;
    let O = f.slice(X.length);
    let Z = R(false);
    let ee;
    if (t[9] !== c || t[10] !== noteRefused || t[11] !== onDone || t[12] !== refusedWithin || t[13] !== storageV5) {
        ee = (Ie)=>{
            if (c() || refusedWithin()) {
                noteRefused();
                return;
            }
            if (Z.current) {
                return;
            }
            Z.current = true;
            Ocn(Ie === "yes", "dialog", storageV5);
            onDone();
        };
        t[9] = c;
        t[10] = noteRefused;
        t[11] = onDone;
        t[12] = refusedWithin;
        t[13] = storageV5;
        t[14] = ee;
    } else {
        ee = t[14];
    }
    let l = ee;
    let te;
    if (t[15] !== l) {
        te = ()=>{
            l("no");
        };
        t[15] = l;
        t[16] = te;
    } else {
        te = t[16];
    }
    let W = te;
    const M = _e;
    const title = "Allow external CLAUDE.md file imports?";
    const color = "warning";
    const hideBorder = !isStandaloneDialog;
    const hideInputGuide = !isStandaloneDialog;
    let x;
    if (t[17] === S) {
        x = e(n, {
            children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories."
        });
        t[17] = x;
    } else {
        x = t[17];
    }
    const F = externalIncludes && externalIncludes.length > 0 && r(s, {
        flexDirection: "column",
        children: [
            e(n, {
                dimColor: true,
                children: "External imports:"
            }),
            X.map(ge),
            O.length > 0 ? r(Y, {
                children: [
                    r(n, {
                        dimColor: true,
                        wrap: "truncate",
                        children: [
                            "  ",
                            "… +",
                            O.length,
                            " ",
                            I(O.length, "import"),
                            " not shown."
                        ]
                    }),
                    r(n, {
                        dimColor: true,
                        wrap: "truncate",
                        children: [
                            "  ",
                            "Yes covers those too, plus any this project adds later."
                        ]
                    })
                ]
            }) : null
        ]
    });
    let oe;
    if (t[18] === S) {
        oe = r(n, {
            dimColor: true,
            children: [
                "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks",
                " ",
                e(Wt, {
                    url: "https://code.claude.com/docs/en/security"
                }),
                " "
            ]
        });
        t[18] = oe;
    } else {
        oe = t[18];
    }
    let onConfirm;
    let D;
    if (t[19] !== l) {
        onConfirm = ()=>l("yes");
        D = ()=>l("no");
        t[19] = l;
        t[20] = onConfirm;
        t[21] = D;
    } else {
        onConfirm = t[20];
        D = t[21];
    }
    let E;
    if (t[22] !== j.remountKey || t[23] !== refuseInput || t[24] !== openedAt || t[25] !== onConfirm || t[26] !== D) {
        E = e(or, {
            refuseInput,
            openedAt,
            hideIndexes: true,
            confirmLabel: "Yes, allow external imports",
            cancelLabel: "No, disable external imports",
            cancelFirst: true,
            focus: "cancel",
            onConfirm,
            onCancel: D
        }, j.remountKey);
        t[22] = j.remountKey;
        t[23] = refuseInput;
        t[24] = openedAt;
        t[25] = onConfirm;
        t[26] = D;
        t[27] = E;
    } else {
        E = t[27];
    }
    let ne;
    if (t[28] !== M || t[29] !== W || t[30] !== isStandaloneDialog || t[31] !== hideInputGuide || t[32] !== x || t[33] !== F || t[34] !== E || t[35] !== hideBorder) {
        ne = r(M, {
            title,
            color,
            onCancel: W,
            exitOnCtrlCD: isStandaloneDialog,
            hideBorder,
            hideInputGuide,
            children: [
                x,
                F,
                oe,
                E
            ]
        });
        t[28] = M;
        t[29] = W;
        t[30] = isStandaloneDialog;
        t[31] = hideInputGuide;
        t[32] = x;
        t[33] = F;
        t[34] = E;
        t[35] = hideBorder;
        t[36] = ne;
    } else {
        ne = t[36];
    }
    return ne;
}
export { Ocn, I4n };
