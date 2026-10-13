import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Gb } from "/$bunfs/root/chunk-2mjaqpws.js";
import { s, n, kc, x6 } from "/$bunfs/root/chunk-8524cxt8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Y0 } from "/$bunfs/root/chunk-wvwcne5b.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { us } from "/$bunfs/root/chunk-w72c4p0f.js";
import { iot } from "/$bunfs/root/chunk-yq147k4z.js";
import { Pe, hr, q9, Ldn, Dfe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { TX, aI } from "/$bunfs/root/chunk-cgpqvjrr.js";
import { Te, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { V, Hn } from "/$bunfs/root/chunk-zby5bms5.js";
import { Zn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { qq, $Xe, Kq, tn } from "/$bunfs/root/chunk-h8kxxbjq.js";
import { VXe, dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { E$t, l0r } from "/$bunfs/root/chunk-48q0pbgp.js";
import { T6 } from "/$bunfs/root/chunk-b3rwa6cx.js";
import { hl } from "/$bunfs/root/chunk-vfe1c7a8.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function fo(Do) {
    return Do.settings.syntaxHighlightingDisabled;
}
function xo(fe) {
    return {
        label: fe.name,
        origin: fe.source === "user" ? "custom" : `from ${fe.source.plugin}`,
        value: TX(fe.slug)
    };
}
const value = "__new_custom_theme__";
function gIe(vo) {
    let t = w(109);
    let { onThemeSelect, showIntroText, helpText, showHelpTextBelow, hideEscToCancel, skipExitHandling, onCancel, onCustomTheme } = vo;
    let g = showIntroText === undefined ? false : showIntroText;
    let c = helpText === undefined ? "" : helpText;
    let x = showHelpTextBelow === undefined ? false : showHelpTextBelow;
    let W = hideEscToCancel === undefined ? false : hideEscToCancel;
    let p = skipExitHandling === undefined ? false : skipExitHandling;
    let { storageV5 } = Pe();
    let [Me] = hr();
    let v = q9();
    let { columns } = ke();
    let xt;
    if (t[0] === S) {
        xt = E$t();
        t[0] = xt;
    } else {
        xt = t[0];
    }
    let Le = xt;
    let vt;
    if (t[1] !== Me) {
        vt = Le === null ? l0r(Me) : null;
        t[1] = Me;
        t[2] = vt;
    } else {
        vt = t[2];
    }
    let j = vt;
    let { setPreviewTheme, cancelPreview } = Ldn();
    let d = R(undefined);
    let Tt;
    if (t[3] !== cancelPreview) {
        Tt = (wo)=>{
            let wt = Symbol("commit");
            d.current = wt;
            let Ct = ()=>{
                if (d.current === wt) {
                    d.current = undefined;
                    cancelPreview();
                }
            };
            Promise.resolve(wo).then(Ct, Ct);
        };
        t[3] = cancelPreview;
        t[4] = Tt;
    } else {
        Tt = t[4];
    }
    let T = Tt;
    let bt;
    let St;
    if (t[5] !== cancelPreview) {
        St = ()=>()=>{
                if (d.current === undefined) {
                    cancelPreview();
                }
            };
        bt = [
            cancelPreview
        ];
        t[5] = cancelPreview;
        t[6] = bt;
        t[7] = St;
    } else {
        bt = t[6];
        St = t[7];
    }
    P(St, bt);
    let q = V(fo) ?? false;
    let Ae = Hn();
    Y0("ThemePicker");
    let Re = us("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t");
    let yt;
    if (t[8] !== Ae || t[9] !== storageV5 || t[10] !== q) {
        yt = ()=>{
            if (Le === null) {
                let syntaxHighlightingDisabled = !q;
                Tn("userSettings", {
                    syntaxHighlightingDisabled
                }, undefined, storageV5);
                Ae((kt)=>({
                        ...kt,
                        settings: {
                            ...kt.settings,
                            syntaxHighlightingDisabled
                        }
                    }));
            }
        };
        t[8] = Ae;
        t[9] = storageV5;
        t[10] = q;
        t[11] = yt;
    } else {
        yt = t[11];
    }
    let Ht;
    if (t[12] === S) {
        Ht = {
            context: "ThemePicker"
        };
        t[12] = Ht;
    } else {
        Ht = t[12];
    }
    Ze("theme:toggleSyntaxHighlighting", yt, Ht);
    let Ot;
    if (t[13] !== cancelPreview || t[14] !== onCancel) {
        Ot = ()=>{
            d.current = undefined;
            cancelPreview();
            onCancel?.();
        };
        t[13] = cancelPreview;
        t[14] = onCancel;
        t[15] = Ot;
    } else {
        Ot = t[15];
    }
    let J = Ot;
    let Dt;
    if (t[16] !== J || t[17] !== cancelPreview || t[18] !== p) {
        Dt = p ? J : async ()=>{
            cancelPreview();
            await Zn(0);
        };
        t[16] = J;
        t[17] = cancelPreview;
        t[18] = p;
        t[19] = Dt;
    } else {
        Dt = t[19];
    }
    let It;
    if (t[20] === S) {
        It = {
            context: "Select"
        };
        t[20] = It;
    } else {
        It = t[20];
    }
    Ze("select:cancel", Dt, It);
    let Q = Yo(p ? J : undefined);
    let { customThemes } = Dfe();
    let Et;
    let Mt;
    let Lt;
    let _t;
    let At;
    let Rt;
    let Bt;
    if (t[21] === S) {
        Et = {
            label: "Auto (match terminal)",
            value: "auto"
        };
        Mt = {
            label: "Dark mode",
            value: "dark"
        };
        Lt = {
            label: "Light mode",
            value: "light"
        };
        _t = {
            label: "Dark mode (colorblind-friendly)",
            value: "dark-daltonized"
        };
        At = {
            label: "Light mode (colorblind-friendly)",
            value: "light-daltonized"
        };
        Rt = {
            label: "Dark mode (ANSI colors only)",
            value: "dark-ansi"
        };
        Bt = {
            label: "Light mode (ANSI colors only)",
            value: "light-ansi"
        };
        t[21] = Et;
        t[22] = Mt;
        t[23] = Lt;
        t[24] = _t;
        t[25] = At;
        t[26] = Rt;
        t[27] = Bt;
    } else {
        Et = t[21];
        Mt = t[22];
        Lt = t[23];
        _t = t[24];
        At = t[25];
        Rt = t[26];
        Bt = t[27];
    }
    let Nt;
    if (t[28] !== customThemes || t[29] !== onCustomTheme) {
        let I;
        if (t[31] !== onCustomTheme) {
            I = onCustomTheme ? [
                {
                    label: "New custom theme…",
                    value
                }
            ] : [];
            t[31] = onCustomTheme;
            t[32] = I;
        } else {
            I = t[32];
        }
        Nt = [
            Et,
            Mt,
            Lt,
            _t,
            At,
            Rt,
            Bt,
            ...customThemes.map(xo),
            ...I
        ];
        t[28] = customThemes;
        t[29] = onCustomTheme;
        t[30] = Nt;
    } else {
        Nt = t[30];
    }
    let l = Nt;
    let Z = l.findIndex((Co)=>Co.value === v);
    let [b, $t] = y(l[Math.max(0, Z)]?.value ?? v);
    let [bo, So] = y(false);
    let [Ut, yo] = y(Z !== -1);
    if (!Ut && !bo && Z !== -1) {
        yo(true);
        $t(v);
    }
    let I;
    if (t[33] !== b) {
        I = aI(b);
        t[33] = b;
        t[34] = I;
    } else {
        I = t[34];
    }
    let K = I;
    let Ft;
    if (t[35] !== customThemes || t[36] !== K) {
        Ft = K ? customThemes.find((Po)=>Po.slug === K) : undefined;
        t[35] = customThemes;
        t[36] = K;
        t[37] = Ft;
    } else {
        Ft = t[37];
    }
    let f = Ft;
    let chord = us("theme:editCustom", "ThemePicker", "ctrl+e");
    let Vt;
    if (t[38] !== f || t[39] !== T || t[40] !== onCustomTheme) {
        Vt = ()=>{
            if (f && onCustomTheme && d.current === undefined) {
                T(onCustomTheme(f));
            }
        };
        t[38] = f;
        t[39] = T;
        t[40] = onCustomTheme;
        t[41] = Vt;
    } else {
        Vt = t[41];
    }
    let Gt;
    if (t[42] === S) {
        Gt = {
            context: "ThemePicker"
        };
        t[42] = Gt;
    } else {
        Gt = t[42];
    }
    Ze("theme:editCustom", Vt, Gt);
    let h = Kq();
    let E = Te(Gb);
    let ref = R(null);
    let zt;
    if (t[43] !== h) {
        zt = ()=>{
            let Xt_current = ref.current;
            if (Xt_current === null) {
                return 0;
            }
            let ee = h?.box.current ?? Xt_current;
            while(h === null && ee.parentNode !== undefined){
                ee = ee.parentNode;
            }
            return Math.max(0, x6(Xt_current, ee));
        };
        t[43] = h;
        t[44] = zt;
    } else {
        zt = t[44];
    }
    let ko = kc(zt);
    let te = g ? 0 : ko + (W ? 1 : 0);
    let oe;
    if (t[45] !== g) {
        oe = g ? e(n, {
            children: "Let's get started."
        }) : e(n, {
            bold: true,
            color: "permission",
            children: "Theme"
        });
        t[45] = g;
        t[46] = oe;
    } else {
        oe = t[46];
    }
    let Wt;
    if (t[47] === S) {
        Wt = e(n, {
            bold: true,
            children: "Choose the text style that looks best with your terminal"
        });
        t[47] = Wt;
    } else {
        Wt = t[47];
    }
    let ne;
    if (t[48] !== c || t[49] !== x) {
        ne = c && !x && e(n, {
            dimColor: true,
            children: c
        });
        t[48] = c;
        t[49] = x;
        t[50] = ne;
    } else {
        ne = t[50];
    }
    let ie;
    if (t[51] !== ne) {
        ie = r(s, {
            flexDirection: "column",
            children: [
                Wt,
                ne
            ]
        });
        t[51] = ne;
        t[52] = ie;
    } else {
        ie = t[52];
    }
    const $e = Ut ? "on-saved-theme" : "on-first-theme";
    const defaultFocusIndex = Math.max(0, Z);
    let onFocus;
    if (t[53] !== cancelPreview || t[54] !== b || t[55] !== setPreviewTheme || t[56] !== l) {
        onFocus = (Ho)=>{
            let M = l[Ho]?.value;
            if (M === undefined || M === b || d.current !== undefined) {
                return;
            }
            $t(M);
            So(true);
            if (iot(M)) {
                setPreviewTheme(M);
            } else {
                cancelPreview();
            }
        };
        t[53] = cancelPreview;
        t[54] = b;
        t[55] = setPreviewTheme;
        t[56] = l;
        t[57] = onFocus;
    } else {
        onFocus = t[57];
    }
    let onSelect;
    if (t[58] !== cancelPreview || t[59] !== T || t[60] !== onCustomTheme || t[61] !== onThemeSelect || t[62] !== l) {
        onSelect = (Oo)=>{
            let Fe = l[Oo]?.value;
            if (Fe === undefined || d.current !== undefined) {
                return;
            }
            if (!iot(Fe)) {
                cancelPreview();
                onCustomTheme?.(undefined);
                return;
            }
            T(onThemeSelect(Fe));
        };
        t[58] = cancelPreview;
        t[59] = T;
        t[60] = onCustomTheme;
        t[61] = onThemeSelect;
        t[62] = l;
        t[63] = onSelect;
    } else {
        onSelect = t[63];
    }
    let ae;
    if (t[64] !== l || t[65] !== v) {
        ae = l.map((L)=>e(tn.Item, {
                label: L.label,
                icon: L.value === v ? e(dt, {
                    status: "success",
                    "aria-label": "current:"
                }) : e(n, {
                    "aria-hidden": true,
                    children: " ".repeat(VXe())
                }),
                meta: L.origin === undefined ? undefined : [
                    L.origin
                ]
            }, L.value));
        t[64] = l;
        t[65] = v;
        t[66] = ae;
    } else {
        ae = t[66];
    }
    let re;
    if (t[67] !== $e || t[68] !== defaultFocusIndex || t[69] !== onFocus || t[70] !== onSelect || t[71] !== ae) {
        re = e(tn, {
            defaultFocusIndex,
            onFocus,
            onSelect,
            children: ae
        }, $e);
        t[67] = $e;
        t[68] = defaultFocusIndex;
        t[69] = onFocus;
        t[70] = onSelect;
        t[71] = ae;
        t[72] = re;
    } else {
        re = t[72];
    }
    let me;
    if (t[73] !== oe || t[74] !== ie || t[75] !== re) {
        me = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                oe,
                ie,
                re
            ]
        });
        t[73] = oe;
        t[74] = ie;
        t[75] = re;
        t[76] = me;
    } else {
        me = t[76];
    }
    let patch;
    if (t[77] === S) {
        patch = {
            oldStart: 1,
            newStart: 1,
            oldLines: 3,
            newLines: 3,
            lines: [
                " function greet() {",
                '-  console.log("Hello, World!");',
                '+  console.log("Hello, Claude!");',
                " }"
            ]
        };
        t[77] = patch;
    } else {
        patch = t[77];
    }
    const width = columns - 6;
    let ce;
    if (t[78] !== width) {
        ce = e(hl, {
            paddingX: 0,
            children: e(T6, {
                patch,
                dim: false,
                filePath: "demo.js",
                firstLine: null,
                width
            })
        });
        t[78] = width;
        t[79] = ce;
    } else {
        ce = t[79];
    }
    const Ge = Le === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : q ? `Syntax highlighting disabled (${Re} to enable)` : j ? `Syntax theme: ${j.theme}${j.source ? ` (from ${j.source})` : ""} (${Re} to disable)` : `Syntax highlighting enabled (${Re} to disable)`;
    let de;
    if (t[80] !== Ge) {
        de = r(n, {
            dimColor: true,
            children: [
                " ",
                Ge
            ]
        });
        t[80] = Ge;
        t[81] = de;
    } else {
        de = t[81];
    }
    let he;
    if (t[82] !== ce || t[83] !== de) {
        he = r(s, {
            flexDirection: "column",
            width: "100%",
            children: [
                ce,
                de
            ]
        });
        t[82] = ce;
        t[83] = de;
        t[84] = he;
    } else {
        he = t[84];
    }
    let jt;
    if (t[85] !== me || t[86] !== he) {
        jt = r(s, {
            ref,
            flexDirection: "column",
            gap: 1,
            children: [
                me,
                he
            ]
        });
        t[85] = me;
        t[86] = he;
        t[87] = jt;
    } else {
        jt = t[87];
    }
    let Xe = jt;
    let ue;
    if (t[88] !== h?.rows || t[89] !== te || t[90] !== E) {
        ue = E && {
            ...E,
            rows: Math.max(0, (h?.rows ?? E.rows) - te)
        };
        t[88] = h?.rows;
        t[89] = te;
        t[90] = E;
        t[91] = ue;
    } else {
        ue = t[91];
    }
    const reserve = (h?.reserve ?? qq) + te;
    let ge;
    if (t[92] !== chord || t[93] !== Q || t[94] !== f || t[95] !== c || t[96] !== W || t[97] !== onCustomTheme || t[98] !== x || t[99] !== g || t[100] !== p) {
        ge = !g && r(s, {
            marginTop: 1,
            children: [
                x && c && e(s, {
                    marginLeft: 3,
                    children: e(n, {
                        dimColor: true,
                        children: c
                    })
                }),
                !W && e(s, {
                    children: e(n, {
                        dimColor: true,
                        italic: true,
                        children: Q.pending ? r(Y, {
                            children: [
                                "Press ",
                                Q.keyName,
                                " again to",
                                " ",
                                p ? "cancel" : "exit"
                            ]
                        }) : r(be, {
                            children: [
                                e(G, {
                                    chord: "enter",
                                    action: "select"
                                }),
                                f && onCustomTheme && e(G, {
                                    chord,
                                    action: "edit"
                                }),
                                e(G, {
                                    chord: "escape",
                                    action: "cancel"
                                })
                            ]
                        })
                    })
                })
            ]
        });
        t[92] = chord;
        t[93] = Q;
        t[94] = f;
        t[95] = c;
        t[96] = W;
        t[97] = onCustomTheme;
        t[98] = x;
        t[99] = g;
        t[100] = p;
        t[101] = ge;
    } else {
        ge = t[101];
    }
    let pe;
    if (t[102] !== Xe || t[103] !== reserve || t[104] !== ge) {
        pe = r($Xe, {
            reserve,
            children: [
                Xe,
                ge
            ]
        });
        t[102] = Xe;
        t[103] = reserve;
        t[104] = ge;
        t[105] = pe;
    } else {
        pe = t[105];
    }
    let qt;
    if (t[106] !== ue || t[107] !== pe) {
        qt = e(Gb, {
            value: ue,
            children: pe
        });
        t[106] = ue;
        t[107] = pe;
        t[108] = qt;
    } else {
        qt = t[108];
    }
    return qt;
}
export { gIe };
