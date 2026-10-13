import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ze, nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { MXe } from "/$bunfs/root/chunk-2x1qjg9q.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Go(jo) {
    return ae(jo.label);
}
function $o(Ko) {
    return Ko !== null;
}
function pj(Xe) {
    let o = w(107);
    let { title, subtitle, fields, values, onChange, onSubmit, onCancel, submitLabel } = Xe;
    let B = submitLabel === undefined ? "Save" : submitLabel;
    let f = fields.length + 1;
    let [d, h] = y(0);
    let _;
    if (o[0] !== fields[0] || o[1] !== values) {
        _ = ()=>{
            let re = fields[0];
            if (re?.type === "text") {
                return (values[re.key] ?? "").length;
            }
            return 0;
        };
        o[0] = fields[0];
        o[1] = values;
        o[2] = _;
    } else {
        _ = o[2];
    }
    let [R, j] = y(_);
    let u = d < fields.length ? fields[d] : null;
    let De = u?.type === "text";
    let M;
    if (o[3] !== fields) {
        M = Math.max(...fields.map(Go));
        o[3] = fields;
        o[4] = M;
    } else {
        M = o[4];
    }
    let labelWidth = M;
    let I;
    if (o[5] !== values) {
        I = function F(U) {
            if (U.type !== "text") {
                return null;
            }
            let P = values[U.key] ?? "";
            if (U.required && P.trim() === "") {
                return `${U.label} is required`;
            }
            if (U.validate) {
                return U.validate(P, values);
            }
            return null;
        };
        o[5] = values;
        o[6] = I;
    } else {
        I = o[6];
    }
    let F = I;
    let Te;
    if (o[7] !== F || o[8] !== fields) {
        Te = fields.map(F).find($o);
        o[7] = F;
        o[8] = fields;
        o[9] = Te;
    } else {
        Te = o[9];
    }
    let b = Te;
    let E;
    if (o[10] !== fields || o[11] !== d || o[12] !== f || o[13] !== values) {
        E = function m(Re) {
            let Se = Math.max(0, Math.min(f - 1, Re));
            if (Se === d) {
                return;
            }
            h(Se);
            let Ye = fields[Se];
            if (Ye?.type === "text") {
                j((values[Ye.key] ?? "").length);
            }
        };
        o[10] = fields;
        o[11] = d;
        o[12] = f;
        o[13] = values;
        o[14] = E;
    } else {
        E = o[14];
    }
    let m = E;
    let je;
    if (o[15] !== b || o[16] !== onSubmit) {
        je = function D() {
            if (b) {
                return;
            }
            onSubmit();
        };
        o[15] = b;
        o[16] = onSubmit;
        o[17] = je;
    } else {
        je = o[17];
    }
    let D = je;
    let Ke;
    if (o[18] !== u || o[19] !== onChange || o[20] !== values) {
        Ke = function ee(zo) {
            if (u?.type !== "select") {
                return;
            }
            let u_options = u.options;
            let Jo = values[u.key] ?? u_options[0]?.value ?? "";
            let Xo = u_options.findIndex((Qo)=>Qo.value === Jo);
            let eo = u_options[(Xo + zo + u_options.length) % u_options.length];
            if (eo) {
                onChange(u.key, eo.value);
            }
        };
        o[18] = u;
        o[19] = onChange;
        o[20] = values;
        o[21] = Ke;
    } else {
        Ke = o[21];
    }
    let ee = Ke;
    let se;
    let de;
    if (o[22] !== d || o[23] !== m) {
        de = ()=>m(d - 1);
        se = ()=>m(d + 1);
        o[22] = d;
        o[23] = m;
        o[24] = se;
        o[25] = de;
    } else {
        se = o[24];
        de = o[25];
    }
    let ue;
    if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== D) {
        ue = ()=>{
            if (d === f - 1) {
                D();
            } else {
                m(d + 1);
            }
        };
        o[26] = d;
        o[27] = m;
        o[28] = f;
        o[29] = D;
        o[30] = ue;
    } else {
        ue = o[30];
    }
    let oo;
    if (o[31] !== onCancel || o[32] !== se || o[33] !== ue || o[34] !== de) {
        oo = {
            "select:previous": de,
            "select:next": se,
            "select:accept": ue,
            "select:cancel": onCancel
        };
        o[31] = onCancel;
        o[32] = se;
        o[33] = ue;
        o[34] = de;
        o[35] = oo;
    } else {
        oo = o[35];
    }
    const Me = !De;
    let to;
    if (o[36] !== Me) {
        to = {
            context: "Select",
            isActive: Me
        };
        o[36] = Me;
        o[37] = to;
    } else {
        to = o[37];
    }
    nn(oo, to);
    let lo;
    if (o[38] === S) {
        lo = {
            context: "Settings"
        };
        o[38] = lo;
    } else {
        lo = o[38];
    }
    Ze("confirm:no", onCancel, lo);
    MXe();
    let io;
    if (o[39] !== ee) {
        io = {
            "tabs:previous": ()=>ee(-1),
            "tabs:next": ()=>ee(1)
        };
        o[39] = ee;
        o[40] = io;
    } else {
        io = o[40];
    }
    const Ae = u?.type === "select";
    let no;
    if (o[41] !== Ae) {
        no = {
            context: "Tabs",
            isActive: Ae
        };
        o[41] = Ae;
        o[42] = no;
    } else {
        no = o[42];
    }
    nn(io, no);
    let O = u ? values[u.key] ?? "" : "";
    let ro;
    if (o[43] !== u || o[44] !== O || o[45] !== values) {
        ro = u?.type === "text" && u.validate ? u.validate(O, values) : null;
        o[43] = u;
        o[44] = O;
        o[45] = values;
        o[46] = ro;
    } else {
        ro = o[46];
    }
    let error = ro;
    let so;
    if (o[47] !== error || o[48] !== u || o[49] !== O || o[50] !== values) {
        so = !error && u?.hint ? u.hint(O, values) : undefined;
        o[47] = error;
        o[48] = u;
        o[49] = O;
        o[50] = values;
        o[51] = so;
    } else {
        so = o[51];
    }
    let ce = so;
    let fe;
    if (o[52] !== R || o[53] !== fields || o[54] !== d || o[55] !== labelWidth || o[56] !== m || o[57] !== onCancel || o[58] !== onChange || o[59] !== D || o[60] !== values) {
        let z;
        if (o[62] !== R || o[63] !== fields.length || o[64] !== d || o[65] !== labelWidth || o[66] !== m || o[67] !== onCancel || o[68] !== onChange || o[69] !== D || o[70] !== values) {
            z = (field, oe)=>{
                let isFocused = oe === d;
                let value = values[field.key] ?? "";
                return e(Ee, {
                    field,
                    value,
                    isFocused,
                    labelWidth,
                    cursor: R,
                    setCursor: j,
                    onChange: (_o)=>onChange(field.key, _o),
                    onCancel,
                    onUp: ()=>m(oe - 1),
                    onDown: ()=>m(oe + 1),
                    onEnter: ()=>{
                        if (oe === fields.length - 1) {
                            D();
                        } else {
                            m(oe + 1);
                        }
                    }
                }, field.key);
            };
            o[62] = R;
            o[63] = fields.length;
            o[64] = d;
            o[65] = labelWidth;
            o[66] = m;
            o[67] = onCancel;
            o[68] = onChange;
            o[69] = D;
            o[70] = values;
            o[71] = z;
        } else {
            z = o[71];
        }
        fe = fields.map(z);
        o[52] = R;
        o[53] = fields;
        o[54] = d;
        o[55] = labelWidth;
        o[56] = m;
        o[57] = onCancel;
        o[58] = onChange;
        o[59] = D;
        o[60] = values;
        o[61] = fe;
    } else {
        fe = o[61];
    }
    const z = d === f - 1 ? "suggestion" : undefined;
    const Ue = d === f - 1 ? te.pointer : " ";
    let pe;
    if (o[72] !== z || o[73] !== Ue) {
        pe = r(n, {
            color: z,
            children: [
                Ue,
                " "
            ]
        });
        o[72] = z;
        o[73] = Ue;
        o[74] = pe;
    } else {
        pe = o[74];
    }
    const bold = d === f - 1;
    const qe = !!b;
    let ve;
    if (o[75] !== B || o[76] !== bold || o[77] !== qe) {
        ve = e(n, {
            bold,
            dimColor: qe,
            children: B
        });
        o[75] = B;
        o[76] = bold;
        o[77] = qe;
        o[78] = ve;
    } else {
        ve = o[78];
    }
    let ge;
    if (o[79] !== b || o[80] !== d || o[81] !== f) {
        ge = b && d === f - 1 && r(n, {
            color: "error",
            children: [
                " · ",
                b
            ]
        });
        o[79] = b;
        o[80] = d;
        o[81] = f;
        o[82] = ge;
    } else {
        ge = o[82];
    }
    let Ce;
    if (o[83] !== pe || o[84] !== ve || o[85] !== ge) {
        Ce = r(s, {
            marginTop: 1,
            children: [
                pe,
                ve,
                ge
            ]
        });
        o[83] = pe;
        o[84] = ve;
        o[85] = ge;
        o[86] = Ce;
    } else {
        Ce = o[86];
    }
    let he;
    if (o[87] !== error || o[88] !== ce) {
        he = e(s, {
            marginTop: 1,
            minHeight: 1,
            children: error ? e(es, {
                error
            }) : ce ? e(n, {
                dimColor: true,
                children: ce
            }) : e(n, {
                children: " "
            })
        });
        o[87] = error;
        o[88] = ce;
        o[89] = he;
    } else {
        he = o[89];
    }
    let uo;
    if (o[90] === S) {
        uo = e(G, {
            chord: [
                "up",
                "down"
            ],
            action: "move"
        });
        o[90] = uo;
    } else {
        uo = o[90];
    }
    let Fe;
    if (o[91] !== u?.type) {
        Fe = u?.type === "select" && e(G, {
            chord: [
                "left",
                "right"
            ],
            action: "change"
        });
        o[91] = u?.type;
        o[92] = Fe;
    } else {
        Fe = o[92];
    }
    let co;
    let ao;
    if (o[93] === S) {
        co = e(G, {
            chord: "enter",
            action: "continue"
        });
        ao = e(G, {
            chord: "escape",
            action: "cancel"
        });
        o[93] = co;
        o[94] = ao;
    } else {
        co = o[93];
        ao = o[94];
    }
    let ye;
    if (o[95] !== Fe) {
        ye = e(s, {
            marginTop: 1,
            children: e(n, {
                dimColor: true,
                children: r(be, {
                    children: [
                        uo,
                        Fe,
                        co,
                        ao
                    ]
                })
            })
        });
        o[95] = Fe;
        o[96] = ye;
    } else {
        ye = o[96];
    }
    let xe;
    if (o[97] !== fe || o[98] !== Ce || o[99] !== he || o[100] !== ye) {
        xe = r(s, {
            flexDirection: "column",
            children: [
                fe,
                Ce,
                he,
                ye
            ]
        });
        o[97] = fe;
        o[98] = Ce;
        o[99] = he;
        o[100] = ye;
        o[101] = xe;
    } else {
        xe = o[101];
    }
    let fo;
    if (o[102] !== onCancel || o[103] !== subtitle || o[104] !== xe || o[105] !== title) {
        fo = e(_e, {
            title,
            subtitle,
            onCancel,
            hideInputGuide: true,
            isCancelActive: false,
            children: xe
        });
        o[102] = onCancel;
        o[103] = subtitle;
        o[104] = xe;
        o[105] = title;
        o[106] = fo;
    } else {
        fo = o[106];
    }
    return fo;
}
function Ee(Xe) {
    let h = w(44);
    let { field, value, isFocused, labelWidth, cursor, setCursor, onChange, onCancel, onUp, onDown, onEnter } = Xe;
    let o;
    if (h[0] !== field.label || h[1] !== labelWidth) {
        o = " ".repeat(Math.max(0, labelWidth - ae(field.label)));
        h[0] = field.label;
        h[1] = labelWidth;
        h[2] = o;
    } else {
        o = h[2];
    }
    let _ = o;
    let re;
    if (h[3] !== field.required || h[4] !== field.type || h[5] !== value) {
        re = field.type === "text" && field.required && value.trim() === "";
        h[3] = field.required;
        h[4] = field.type;
        h[5] = value;
        h[6] = re;
    } else {
        re = h[6];
    }
    let R = re;
    const j = isFocused ? "suggestion" : undefined;
    const u = isFocused ? te.pointer : " ";
    let De;
    if (h[7] !== j || h[8] !== u) {
        De = r(n, {
            color: j,
            children: [
                u,
                " "
            ]
        });
        h[7] = j;
        h[8] = u;
        h[9] = De;
    } else {
        De = h[9];
    }
    let M = De;
    const A = !isFocused;
    let I;
    if (h[10] !== R) {
        I = R ? e(n, {
            color: "error",
            children: "*"
        }) : " ";
        h[10] = R;
        h[11] = I;
    } else {
        I = h[11];
    }
    let U;
    if (h[12] !== field.label || h[13] !== _ || h[14] !== A || h[15] !== I) {
        U = r(n, {
            dimColor: A,
            children: [
                field.label,
                I,
                _,
                " "
            ]
        });
        h[12] = field.label;
        h[13] = _;
        h[14] = A;
        h[15] = I;
        h[16] = U;
    } else {
        U = h[16];
    }
    let P = U;
    if (field.type === "select") {
        let F;
        if (h[17] !== field.options || h[18] !== value) {
            F = field.options.find((Te)=>Te.value === value) ?? field.options[0];
            h[17] = field.options;
            h[18] = value;
            h[19] = F;
        } else {
            F = h[19];
        }
        let b = F;
        let E;
        if (h[20] !== isFocused || h[21] !== b?.label || h[22] !== value) {
            E = isFocused ? r(n, {
                children: [
                    r(n, {
                        dimColor: true,
                        children: [
                            te.triangleLeft,
                            " "
                        ]
                    }),
                    b?.label ?? value,
                    r(n, {
                        dimColor: true,
                        children: [
                            " ",
                            te.triangleRight
                        ]
                    })
                ]
            }) : e(n, {
                children: b?.label ?? value
            });
            h[20] = isFocused;
            h[21] = b?.label;
            h[22] = value;
            h[23] = E;
        } else {
            E = h[23];
        }
        let Re;
        if (h[24] !== P || h[25] !== M || h[26] !== E) {
            Re = r(s, {
                children: [
                    M,
                    P,
                    E
                ]
            });
            h[24] = P;
            h[25] = M;
            h[26] = E;
            h[27] = Re;
        } else {
            Re = h[27];
        }
        return Re;
    }
    let F;
    if (h[28] !== cursor || h[29] !== field.mask || h[30] !== field.placeholder || h[31] !== isFocused || h[32] !== onCancel || h[33] !== onChange || h[34] !== onDown || h[35] !== onEnter || h[36] !== onUp || h[37] !== setCursor || h[38] !== value) {
        F = isFocused ? e(Sr, {
            value,
            onChange,
            onSubmit: ()=>onEnter(),
            onExit: onCancel,
            onHistoryUp: onUp,
            onHistoryDown: onDown,
            placeholder: field.placeholder,
            mask: field.mask,
            columns: 60,
            cursorOffset: cursor,
            onChangeCursorOffset: setCursor,
            disableCursorMovementForUpDownKeys: true,
            disableEscapeDoublePress: true,
            focus: true,
            showCursor: true
        }) : value ? e(n, {
            children: field.mask ? field.mask.repeat(Math.min(ae(value), 60)) : value
        }) : e(n, {
            dimColor: true,
            children: field.placeholder ?? ""
        });
        h[28] = cursor;
        h[29] = field.mask;
        h[30] = field.placeholder;
        h[31] = isFocused;
        h[32] = onCancel;
        h[33] = onChange;
        h[34] = onDown;
        h[35] = onEnter;
        h[36] = onUp;
        h[37] = setCursor;
        h[38] = value;
        h[39] = F;
    } else {
        F = h[39];
    }
    let E;
    if (h[40] !== P || h[41] !== M || h[42] !== F) {
        E = r(s, {
            children: [
                M,
                P,
                F
            ]
        });
        h[40] = P;
        h[41] = M;
        h[42] = F;
        h[43] = E;
    } else {
        E = h[43];
    }
    return E;
}
export { pj };
