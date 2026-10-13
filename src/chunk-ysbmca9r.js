import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Pe, hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { kO } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { vr, Mt, al } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { tc } from "/$bunfs/root/chunk-zwxj12s4.js";
import { ws, Lv, DSe } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Uy, yn, fe, ta, Z7, ZFe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Hi, nt, s, n, JP } from "/$bunfs/root/chunk-8524cxt8.js";
import { jr, Ir, P, en, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Qc } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { $h, EIe } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { V, Hn } from "/$bunfs/root/chunk-zby5bms5.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { Xte, gL, mJo, Qte, VHe, nor, O_, Nes, ki } from "/$bunfs/root/chunk-kasbfbhj.js";
import { xu } from "/$bunfs/root/chunk-tvg3w9xe.js";
import { AV, qS as maxUnits, Bi, VB, Ai, fQt } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { $n, jd, R5 } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { NM, Bc, xm } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { eDn, tDn } from "/$bunfs/root/chunk-ypkrahyx.js";
import { sb, La, xmt, _y } from "/$bunfs/root/chunk-2x1qjg9q.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { ove } from "/$bunfs/root/chunk-jsagwt7j.js";
import { yy, nb } from "/$bunfs/root/chunk-dx2w0vga.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { tE } from "/$bunfs/root/chunk-972pd37y.js";
import { vXe } from "/$bunfs/root/chunk-wnzzzstq.js";
import { $Ee, q7e, Nzt, X7e, YG } from "/$bunfs/root/chunk-qhm95egx.js";
import { VWe, ux, UG, Gie } from "/$bunfs/root/chunk-4096w6mw.js";
import { $0, _i } from "/$bunfs/root/chunk-5vwnqjtz.js";
import { KLt } from "/$bunfs/root/chunk-hytxr5dg.js";
import { dA } from "/$bunfs/root/chunk-ekgmkp7n.js";
import { Hr } from "/$bunfs/root/chunk-wmf7fpt3.js";
import { rp } from "/$bunfs/root/chunk-ae7cvb2h.js";
import { ts } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { JN } from "/$bunfs/root/chunk-pzrwvyt4.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { o, oe, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
import { open } from "fs/promises";
import { constants, closeSync, mkdirSync, openSync, writeSync } from "fs";
import { randomBytes } from "crypto";
import { join, dirname } from "path";
N();
function nd({ rule, source }, C) {
    return {
        value: String(C),
        label: rule,
        description: source
    };
}
function rd() {}
const Mr = [
    {
        kind: "allow",
        title: "Allow",
        empty: "No allow rules"
    },
    {
        kind: "ask",
        title: "Ask",
        empty: "No ask rules"
    },
    {
        kind: "deny",
        title: "Deny",
        empty: "No deny rules"
    },
    {
        kind: "additionalDirectories",
        title: "Workspace",
        empty: "No additional working directories"
    }
];
const Nu = p(()=>{
    let g = T(o()).catch([]);
    let i = u({
        source: o(),
        settings: u({
            permissions: u({
                allow: g,
                ask: g,
                deny: g,
                additionalDirectories: g
            }).optional().catch(undefined)
        }).catch({
            permissions: undefined
        })
    });
    return u({
        sources: T(i.nullable().catch(null)),
        errors: T(oe()).optional().catch(undefined)
    });
});
const Hu = /[\u200b\u200e\u200f\u2060\ufeff]/g;
function zi(g) {
    return $n(g.replace(Hu, "\uFFFD"));
}
async function Ji(g, signal) {
    try {
        let m = JN("get_settings", Nu(), await g.sendControlRequest({
            subtype: "get_settings"
        }, {
            signal
        }));
        if (!m) {
            return {
                kind: "unreadable",
                reason: "the cloud session sent a reply this version can't display"
            };
        }
        let d = {
            allow: [],
            ask: [],
            deny: [],
            additionalDirectories: []
        };
        for (let a of m.sources){
            if (a === null) {
                continue;
            }
            let { source, settings } = a;
            let f = ws.find((b)=>b === source);
            let source_1 = f ? Lv(f) : zi(ne(source, 40)) + (source.length > 40 ? "…" : "");
            for (let { kind } of Mr){
                for (let E of settings.permissions?.[kind] ?? []){
                    d[kind].push({
                        rule: zi(E),
                        source: source_1
                    });
                }
            }
        }
        return {
            kind: "read",
            rules: d,
            skippedFiles: m.errors?.length ?? 0
        };
    } catch (error) {
        return {
            kind: "unreadable",
            reason: $n(l(error))
        };
    }
}
function Tr(g) {
    let d = w(19);
    let { onExit, rulesRead } = g;
    let a;
    if (d[0] !== onExit) {
        a = ()=>onExit();
        d[0] = onExit;
        d[1] = a;
    } else {
        a = d[1];
    }
    let h;
    if (d[2] === S) {
        h = {
            context: "Settings"
        };
        d[2] = h;
    } else {
        h = d[2];
    }
    Ze("confirm:no", a, h);
    let v;
    if (d[3] !== onExit) {
        v = ()=>onExit();
        d[3] = onExit;
        d[4] = v;
    } else {
        v = d[4];
    }
    let f = Yo(v);
    let x;
    if (d[5] !== onExit || d[6] !== rulesRead) {
        x = Mr.map(({ kind, title, empty })=>e(La, {
                id: kind,
                title,
                children: e(jr, {
                    fallback: e(Hr, {
                        message: "Reading the cloud session's rules…"
                    }),
                    children: e(Pr, {
                        rulesRead,
                        kind,
                        empty,
                        onExit
                    })
                })
            }, kind));
        d[5] = onExit;
        d[6] = rulesRead;
        d[7] = x;
    } else {
        x = d[7];
    }
    let b;
    if (d[8] !== x) {
        b = e(sb, {
            title: "Permissions",
            color: "permission",
            navFromContent: true,
            children: x
        });
        d[8] = x;
        d[9] = b;
    } else {
        b = d[9];
    }
    let M;
    if (d[10] === S) {
        M = e(n, {
            dimColor: true,
            wrap: "wrap-trim",
            children: "Read-only here: these are the cloud session's rules, from its settings files (rules it added for itself this session aren't listed). To change them, ask Claude to edit .claude/settings.json in the session. Commands Claude runs on this computer follow this computer's rules — /permissions in a local session edits those."
        });
        d[10] = M;
    } else {
        M = d[10];
    }
    let B;
    if (d[11] !== f.keyName || d[12] !== f.pending) {
        B = f.pending ? `Press ${f.keyName} again to close` : r(be, {
            children: [
                e(G, {
                    chord: [
                        "up",
                        "down"
                    ],
                    action: "navigate"
                }),
                e(G, {
                    chord: [
                        "left",
                        "right"
                    ],
                    action: "switch"
                }),
                e(G, {
                    chord: "escape",
                    action: "close"
                })
            ]
        });
        d[11] = f.keyName;
        d[12] = f.pending;
        d[13] = B;
    } else {
        B = d[13];
    }
    let A;
    if (d[14] !== B) {
        A = r(s, {
            marginTop: 1,
            flexDirection: "column",
            children: [
                M,
                e(n, {
                    dimColor: true,
                    children: B
                })
            ]
        });
        d[14] = B;
        d[15] = A;
    } else {
        A = d[15];
    }
    let k;
    if (d[16] !== b || d[17] !== A) {
        k = r(ts, {
            color: "permission",
            children: [
                b,
                A
            ]
        });
        d[16] = b;
        d[17] = A;
        d[18] = k;
    } else {
        k = d[18];
    }
    return k;
}
function Pr(g) {
    let v = w(11);
    let { rulesRead, kind, empty, onExit } = g;
    let h = Ir(rulesRead);
    if (h.kind === "unreadable") {
        let f;
        if (v[0] !== h.reason) {
            f = r(n, {
                color: "error",
                children: [
                    "Couldn't read the cloud session's rules: ",
                    h.reason
                ]
            });
            v[0] = h.reason;
            v[1] = f;
        } else {
            f = v[1];
        }
        return f;
    }
    let x = h.rules[kind];
    let f;
    if (v[2] !== h.skippedFiles) {
        f = h.skippedFiles > 0 && r(n, {
            color: "warning",
            wrap: "wrap-trim",
            children: [
                h.skippedFiles,
                " settings ",
                I(h.skippedFiles, "file"),
                " in the session failed to parse; rules from",
                " ",
                I(h.skippedFiles, "it", "them"),
                " aren't listed."
            ]
        });
        v[2] = h.skippedFiles;
        v[3] = f;
    } else {
        f = v[3];
    }
    let b;
    if (v[4] !== empty || v[5] !== onExit || v[6] !== x) {
        b = x.length === 0 ? e(n, {
            dimColor: true,
            children: empty
        }) : e(kr, {
            rules: x,
            onExit
        });
        v[4] = empty;
        v[5] = onExit;
        v[6] = x;
        v[7] = b;
    } else {
        b = v[7];
    }
    let E;
    if (v[8] !== f || v[9] !== b) {
        E = r(s, {
            flexDirection: "column",
            children: [
                f,
                b
            ]
        });
        v[8] = f;
        v[9] = b;
        v[10] = E;
    } else {
        E = v[10];
    }
    return E;
}
function kr(g) {
    let v = w(10);
    let { rules, onExit } = g;
    let { headerFocused, focusHeader } = _y();
    let { rows } = ke();
    let f;
    if (v[0] !== rules) {
        f = rules.map(nd);
        v[0] = rules;
        v[1] = f;
    } else {
        f = v[1];
    }
    const x = Math.max(3, Math.min(10, rows - 14));
    let b;
    if (v[2] !== onExit) {
        b = ()=>onExit();
        v[2] = onExit;
        v[3] = b;
    } else {
        b = v[3];
    }
    let E;
    if (v[4] !== focusHeader || v[5] !== headerFocused || v[6] !== f || v[7] !== x || v[8] !== b) {
        E = e(Ve, {
            options: f,
            visibleOptionCount: x,
            hideIndexes: true,
            isDisabled: headerFocused,
            onUpFromFirstItem: focusHeader,
            onChange: rd,
            onCancel: b
        });
        v[4] = focusHeader;
        v[5] = headerFocused;
        v[6] = f;
        v[7] = x;
        v[8] = b;
        v[9] = E;
    } else {
        E = v[9];
    }
    return E;
}
N();
function sd(source) {
    return source === "projectSettings" || source === "policySettings" || source === "command";
}
function dn(source) {
    return VHe(source);
}
function Zi(g, shadowedBy, rule) {
    let d = dn(shadowedBy.source);
    let a = dn(rule.source);
    let toolName = shadowedBy.ruleValue.toolName;
    if (g === "deny") {
        return `Remove the "${toolName}" deny rule from ${d}, or remove the specific allow rule from ${a}`;
    }
    return `Remove the "${toolName}" ask rule from ${d}, or remove the specific allow rule from ${a}`;
}
function id(rule, i, m) {
    let { toolName, ruleContent } = rule.ruleValue;
    if (ruleContent === undefined) {
        return {
            shadowed: false
        };
    }
    let h = i.find((v)=>v.ruleValue.toolName === toolName && v.ruleValue.ruleContent === undefined);
    if (!h) {
        return {
            shadowed: false
        };
    }
    if (toolName === Be && m.sandboxAutoAllowEnabled) {
        if (!sd(h.source)) {
            return {
                shadowed: false
            };
        }
    }
    return {
        shadowed: true,
        shadowedBy: h,
        shadowType: "ask"
    };
}
function ld(rule, i) {
    let { toolName, ruleContent } = rule.ruleValue;
    if (ruleContent === undefined) {
        return {
            shadowed: false
        };
    }
    let a = i.find((h)=>h.ruleValue.toolName === toolName && h.ruleValue.ruleContent === undefined);
    if (!a) {
        return {
            shadowed: false
        };
    }
    return {
        shadowed: true,
        shadowedBy: a,
        shadowType: "deny"
    };
}
function Dr(g, i) {
    let m = [];
    let d = NM(g);
    let a = xm(g);
    let h = Bc(g);
    for (let rule of d){
        let f = ld(rule, h);
        if (f.shadowed) {
            let b = dn(f.shadowedBy.source);
            m.push({
                rule,
                reason: `Blocked by "${f.shadowedBy.ruleValue.toolName}" deny rule (from ${b})`,
                shadowedBy: f.shadowedBy,
                shadowType: "deny",
                fix: Zi("deny", f.shadowedBy, rule)
            });
            continue;
        }
        let x = id(rule, a, i);
        if (x.shadowed) {
            let b = dn(x.shadowedBy.source);
            m.push({
                rule,
                reason: `Shadowed by "${x.shadowedBy.ruleValue.toolName}" ask rule (from ${b})`,
                shadowedBy: x.shadowedBy,
                shadowType: "ask",
                fix: Zi("ask", x.shadowedBy, rule)
            });
        }
    }
    return m;
}
function Ut(g) {
    let m = w(13);
    let { ruleValue } = g;
    let d;
    let a;
    let dimColor;
    let v;
    let f;
    let x;
    if (m[0] !== ruleValue) {
        x = Sn;
        b: {
            a = KLt(ruleValue);
            if (!a) {
                x = null;
                break b;
            }
            d = n;
            dimColor = true;
            v = a.prefix;
            f = a.emphasis !== undefined && e(n, {
                bold: true,
                children: $0(a.emphasis)
            });
        }
        m[0] = ruleValue;
        m[1] = d;
        m[2] = a;
        m[3] = dimColor;
        m[4] = v;
        m[5] = f;
        m[6] = x;
    } else {
        d = m[1];
        a = m[2];
        dimColor = m[3];
        v = m[4];
        f = m[5];
        x = m[6];
    }
    if (x !== Sn) {
        return x;
    }
    let E;
    if (m[7] !== d || m[8] !== a.suffix || m[9] !== dimColor || m[10] !== v || m[11] !== f) {
        E = r(d, {
            dimColor,
            children: [
                v,
                f,
                a.suffix
            ]
        });
        m[7] = d;
        m[8] = a.suffix;
        m[9] = dimColor;
        m[10] = v;
        m[11] = f;
        m[12] = E;
    } else {
        E = m[12];
    }
    return E;
}
function Cd(Q) {
    return r(s, {
        flexDirection: "column",
        children: [
            e(n, {
                bold: true,
                children: _n(Q)
            }),
            e(Ut, {
                ruleValue: Q
            })
        ]
    }, _n(Q));
}
function el(g) {
    switch(g){
        case "localSettings":
            return {
                label: "Project settings (local)",
                description: `Saved in ${kO("localSettings")}`,
                value: g
            };
        case "projectSettings":
            return {
                label: "Project settings",
                description: `Checked in at ${kO("projectSettings")}`,
                value: g
            };
        case "userSettings":
            return {
                label: "User settings",
                description: "Saved in at ~/.claude/settings.json",
                value: g
            };
    }
}
function mn(g) {
    let x = w(27);
    let { onAddRules, onCancel, ruleValues, ruleBehavior, initialContext, setToolPermissionContext } = g;
    let { storageV5 } = Pe();
    let b;
    if (x[0] === S) {
        b = DSe.map(el);
        x[0] = b;
    } else {
        b = x[0];
    }
    let options = b;
    let C;
    if (x[1] !== initialContext || x[2] !== onAddRules || x[3] !== onCancel || x[4] !== ruleBehavior || x[5] !== ruleValues || x[6] !== setToolPermissionContext || x[7] !== storageV5) {
        C = (O)=>{
            if (O === "cancel") {
                onCancel();
                return;
            } else if (DSe.includes(O)) {
                let M = O;
                let B = jd(initialContext, {
                    type: "addRules",
                    rules: ruleValues,
                    behavior: ruleBehavior,
                    destination: M
                });
                R5({
                    type: "addRules",
                    rules: ruleValues,
                    behavior: ruleBehavior,
                    destination: M
                }, storageV5).catch(c);
                setToolPermissionContext(B);
                let k = ruleValues.map((A)=>({
                        ruleValue: A,
                        ruleBehavior,
                        source: M
                    }));
                let sandboxAutoAllowEnabled = qe.isSandboxingEnabled() && qe.isAutoAllowBashIfSandboxedEnabled();
                let q = Dr(B, {
                    sandboxAutoAllowEnabled
                }).filter((H)=>ruleValues.some((pe)=>pe.toolName === H.rule.ruleValue.toolName && pe.ruleContent === H.rule.ruleValue.ruleContent));
                onAddRules(k, q);
            }
        };
        x[1] = initialContext;
        x[2] = onAddRules;
        x[3] = onCancel;
        x[4] = ruleBehavior;
        x[5] = ruleValues;
        x[6] = setToolPermissionContext;
        x[7] = storageV5;
        x[8] = C;
    } else {
        C = x[8];
    }
    let ye = C;
    let ee;
    if (x[9] !== ruleValues.length) {
        ee = I(ruleValues.length, "rule");
        x[9] = ruleValues.length;
        x[10] = ee;
    } else {
        ee = x[10];
    }
    let J = `Add ${ruleBehavior} permission ${ee}`;
    let ue;
    if (x[11] !== ruleValues) {
        ue = ruleValues.map(Cd);
        x[11] = ruleValues;
        x[12] = ue;
    } else {
        ue = x[12];
    }
    let K;
    if (x[13] !== ue) {
        K = e(s, {
            flexDirection: "column",
            paddingX: 2,
            children: ue
        });
        x[13] = ue;
        x[14] = K;
    } else {
        K = x[14];
    }
    const re = ruleValues.length === 1 ? "Where should this rule be saved?" : "Where should these rules be saved?";
    let se;
    if (x[15] !== re) {
        se = e(n, {
            children: re
        });
        x[15] = re;
        x[16] = se;
    } else {
        se = x[16];
    }
    let he;
    if (x[17] !== ye) {
        he = e(Ve, {
            options,
            onChange: ye
        });
        x[17] = ye;
        x[18] = he;
    } else {
        he = x[18];
    }
    let z;
    if (x[19] !== se || x[20] !== he) {
        z = r(s, {
            flexDirection: "column",
            marginY: 1,
            children: [
                se,
                he
            ]
        });
        x[19] = se;
        x[20] = he;
        x[21] = z;
    } else {
        z = x[21];
    }
    let Ce;
    if (x[22] !== onCancel || x[23] !== K || x[24] !== z || x[25] !== J) {
        Ce = r(_e, {
            title: J,
            onCancel,
            color: "permission",
            children: [
                K,
                z
            ]
        });
        x[22] = onCancel;
        x[23] = K;
        x[24] = z;
        x[25] = J;
        x[26] = Ce;
    } else {
        Ce = x[26];
    }
    return Ce;
}
N();
function pn(g) {
    let x = w(18);
    let { onCancel, onSubmit, ruleBehavior } = g;
    let [a, h] = y("");
    let [v, f] = y(0);
    let b;
    if (x[0] === S) {
        b = {
            context: "Settings"
        };
        x[0] = b;
    } else {
        b = x[0];
    }
    Ze("confirm:no", onCancel, b);
    let { columns } = ke();
    let C = columns - 6;
    let O;
    if (x[1] !== onSubmit || x[2] !== ruleBehavior) {
        O = (M)=>{
            let B = M.trim();
            if (B.length === 0) {
                return;
            }
            let A = Un(B);
            onSubmit(A, ruleBehavior);
        };
        x[1] = onSubmit;
        x[2] = ruleBehavior;
        x[3] = O;
    } else {
        O = x[3];
    }
    let k = O;
    const U = `Add ${ruleBehavior} permission rule`;
    let H;
    if (x[4] === S) {
        H = r(be, {
            children: [
                e(G, {
                    chord: "enter",
                    action: "submit"
                }),
                e(G, {
                    chord: "escape",
                    action: "cancel"
                })
            ]
        });
        x[4] = H;
    } else {
        H = x[4];
    }
    let pe;
    if (x[5] === S) {
        pe = e(JP, {});
        x[5] = pe;
    } else {
        pe = x[5];
    }
    let q;
    let ye;
    if (x[6] === S) {
        q = e(n, {
            bold: true,
            children: _n({
                toolName: O_.name
            })
        });
        ye = e(n, {
            bold: false,
            children: " or "
        });
        x[6] = q;
        x[7] = ye;
    } else {
        q = x[6];
        ye = x[7];
    }
    let ee;
    if (x[8] === S) {
        ee = r(n, {
            children: [
                "Permission rules are a tool name, optionally followed by a specifier in parentheses.",
                pe,
                "e.g.,",
                " ",
                q,
                ye,
                e(n, {
                    bold: true,
                    children: _n({
                        toolName: ki.name,
                        ruleContent: "ls *"
                    })
                })
            ]
        });
        x[8] = ee;
    } else {
        ee = x[8];
    }
    let J;
    if (x[9] !== v || x[10] !== k || x[11] !== a || x[12] !== C) {
        J = r(s, {
            flexDirection: "column",
            children: [
                ee,
                e(s, {
                    borderDimColor: true,
                    borderStyle: "round",
                    marginY: 1,
                    paddingLeft: 1,
                    children: e(Sr, {
                        showCursor: true,
                        focus: true,
                        value: a,
                        onChange: h,
                        onSubmit: k,
                        placeholder: `Enter permission rule${te.ellipsis}`,
                        columns: C,
                        cursorOffset: v,
                        onChangeCursorOffset: f
                    })
                })
            ]
        });
        x[9] = v;
        x[10] = k;
        x[11] = a;
        x[12] = C;
        x[13] = J;
    } else {
        J = x[13];
    }
    let ue;
    if (x[14] !== onCancel || x[15] !== U || x[16] !== J) {
        ue = e(_e, {
            title: U,
            onCancel,
            color: "permission",
            isCancelActive: false,
            inputGuide: H,
            children: J
        });
        x[14] = onCancel;
        x[15] = U;
        x[16] = J;
        x[17] = ue;
    } else {
        ue = x[17];
    }
    return ue;
}
N();
function Jd() {
    return new Set;
}
function Zd() {
    return new Set;
}
function ec(Ro) {
    return Ro.display;
}
function oc(on, Zt) {
    if (on.withheld) {
        return Zt;
    }
    return -1;
}
function nc(xo) {
    return xo >= 0;
}
function rc(So) {
    return So.text;
}
function sc(At) {
    if (At.reason) {
        return Ai(Bi(At.reason).text).replace(/\s+/g, " ").trim();
    }
}
function Cn(g) {
    let v = w(14);
    let { onHeaderFocusChange, onStateChange } = g;
    let { getDenials } = ove();
    let [a] = y(getDenials);
    let h = a.length === 0;
    let f;
    let x;
    if (v[0] !== h || v[1] !== onHeaderFocusChange) {
        f = ()=>{
            if (h) {
                onHeaderFocusChange(true);
            }
        };
        x = [
            h,
            onHeaderFocusChange
        ];
        v[0] = h;
        v[1] = onHeaderFocusChange;
        v[2] = f;
        v[3] = x;
    } else {
        f = v[2];
        x = v[3];
    }
    P(f, x);
    let b;
    let E;
    if (v[4] !== a || v[5] !== h || v[6] !== onStateChange) {
        b = ()=>{
            if (h) {
                onStateChange({
                    approved: new Set,
                    retry: new Set,
                    denials: a
                });
            }
        };
        E = [
            h,
            a,
            onStateChange
        ];
        v[4] = a;
        v[5] = h;
        v[6] = onStateChange;
        v[7] = b;
        v[8] = E;
    } else {
        b = v[7];
        E = v[8];
    }
    en(b, E);
    if (h) {
        let C;
        if (v[9] === S) {
            C = e(n, {
                dimColor: true,
                children: "No recent denials. Commands denied by the auto mode classifier will appear here."
            });
            v[9] = C;
        } else {
            C = v[9];
        }
        return C;
    }
    let C;
    if (v[10] !== a || v[11] !== onHeaderFocusChange || v[12] !== onStateChange) {
        C = e(Wr, {
            denials: a,
            onHeaderFocusChange,
            onStateChange
        });
        v[10] = a;
        v[11] = onHeaderFocusChange;
        v[12] = onStateChange;
        v[13] = C;
    } else {
        C = v[13];
    }
    return C;
}
function Wr(g) {
    let v = w(46);
    let { denials, onHeaderFocusChange, onStateChange } = g;
    let { headerFocused, focusHeader } = _y();
    let f;
    let x;
    if (v[0] !== headerFocused || v[1] !== onHeaderFocusChange) {
        f = ()=>{
            onHeaderFocusChange(headerFocused);
        };
        x = [
            headerFocused,
            onHeaderFocusChange
        ];
        v[0] = headerFocused;
        v[1] = onHeaderFocusChange;
        v[2] = f;
        v[3] = x;
    } else {
        f = v[2];
        x = v[3];
    }
    P(f, x);
    let [b, E] = y(Jd);
    let [C, O] = y(Zd);
    let [M, B] = y(0);
    let A;
    let k;
    if (v[4] !== b || v[5] !== denials || v[6] !== onStateChange || v[7] !== C) {
        A = ()=>{
            onStateChange({
                approved: b,
                retry: C,
                denials
            });
        };
        k = [
            b,
            C,
            denials,
            onStateChange
        ];
        v[4] = b;
        v[5] = denials;
        v[6] = onStateChange;
        v[7] = C;
        v[8] = A;
        v[9] = k;
    } else {
        A = v[8];
        k = v[9];
    }
    P(A, k);
    let U;
    if (v[10] !== denials) {
        U = fQt(denials.map(ec), {
            maxUnits
        });
        v[10] = denials;
        v[11] = U;
    } else {
        U = v[11];
    }
    let H = U;
    let pe;
    if (v[12] !== H) {
        pe = new Set(H.map(oc).filter(nc));
        v[12] = H;
        v[13] = pe;
    } else {
        pe = v[13];
    }
    let q = pe;
    let ye;
    if (v[14] !== q) {
        ye = (ee)=>{
            let J = Number(ee);
            if (q.has(J)) {
                return;
            }
            E((ue)=>{
                let K = new Set(ue);
                if (K.has(J)) {
                    K.delete(J);
                } else {
                    K.add(J);
                }
                return K;
            });
        };
        v[14] = q;
        v[15] = ye;
    } else {
        ye = v[15];
    }
    let re = ye;
    let se;
    if (v[16] === S) {
        se = (he)=>{
            B(Number(he));
        };
        v[16] = se;
    } else {
        se = v[16];
    }
    let onFocus = se;
    let Ce;
    if (v[17] !== M || v[18] !== headerFocused || v[19] !== q) {
        Ce = function Ge(Q) {
            if (headerFocused) {
                return;
            }
            if (Q.ctrl || Q.meta || Q.shift) {
                return;
            }
            if (Q.key !== "r") {
                return;
            }
            Q.preventDefault();
            if (q.has(M)) {
                return;
            }
            O((rt)=>{
                let Re = new Set(rt);
                if (Re.has(M)) {
                    Re.delete(M);
                } else {
                    Re.add(M);
                }
                return Re;
            });
            E((Xe)=>{
                if (Xe.has(M)) {
                    return Xe;
                }
                let He = new Set(Xe);
                He.add(M);
                return He;
            });
        };
        v[17] = M;
        v[18] = headerFocused;
        v[19] = q;
        v[20] = Ce;
    } else {
        Ce = v[20];
    }
    let Ge = Ce;
    let de;
    if (v[21] !== H) {
        de = H.map(rc);
        v[21] = H;
        v[22] = de;
    } else {
        de = v[22];
    }
    let Je = de;
    let et;
    if (v[23] !== denials) {
        et = denials.map(sc);
        v[23] = denials;
        v[24] = et;
    } else {
        et = v[24];
    }
    let je = et;
    let tt;
    if (v[25] !== b || v[26] !== denials || v[27] !== Je || v[28] !== je || v[29] !== C) {
        let Qe;
        if (v[31] !== b || v[32] !== Je || v[33] !== je || v[34] !== C) {
            Qe = (Ue, Ee)=>{
                let Oe = b.has(Ee);
                let children = C.has(Ee) ? " (retry)" : "";
                let description = je[Ee];
                return {
                    label: r(n, {
                        children: [
                            e(dt, {
                                status: Oe ? "success" : "error",
                                withSpace: true
                            }),
                            Je[Ee],
                            e(n, {
                                dimColor: true,
                                children
                            })
                        ]
                    }),
                    value: String(Ee),
                    ...description && {
                        description,
                        dimDescription: true
                    }
                };
            };
            v[31] = b;
            v[32] = Je;
            v[33] = je;
            v[34] = C;
            v[35] = Qe;
        } else {
            Qe = v[35];
        }
        tt = denials.map(Qe);
        v[25] = b;
        v[26] = denials;
        v[27] = Je;
        v[28] = je;
        v[29] = C;
        v[30] = tt;
    } else {
        tt = v[30];
    }
    let $e = tt;
    let Qe;
    if (v[36] === S) {
        Qe = e(n, {
            children: "Commands recently denied by the auto mode classifier."
        });
        v[36] = Qe;
    } else {
        Qe = v[36];
    }
    const Co = Math.min(10, $e.length);
    let Et;
    if (v[37] !== focusHeader || v[38] !== re || v[39] !== headerFocused || v[40] !== $e || v[41] !== Co) {
        Et = e(s, {
            marginTop: 1,
            children: e(Ve, {
                options: $e,
                onChange: re,
                onFocus,
                visibleOptionCount: Co,
                isDisabled: headerFocused,
                onUpFromFirstItem: focusHeader
            })
        });
        v[37] = focusHeader;
        v[38] = re;
        v[39] = headerFocused;
        v[40] = $e;
        v[41] = Co;
        v[42] = Et;
    } else {
        Et = v[42];
    }
    let tn;
    if (v[43] !== Ge || v[44] !== Et) {
        tn = r(s, {
            flexDirection: "column",
            onKeyDown: Ge,
            children: [
                Qe,
                Et
            ]
        });
        v[43] = Ge;
        v[44] = Et;
        v[45] = tn;
    } else {
        tn = v[45];
    }
    return tn;
}
function Rn(g) {
    let v = w(15);
    let { directoryPath, onRemove, onCancel, permissionContext, setPermissionContext } = g;
    let f;
    if (v[0] !== directoryPath || v[1] !== onRemove || v[2] !== permissionContext || v[3] !== setPermissionContext) {
        f = ()=>{
            let x = jd(permissionContext, {
                type: "removeDirectories",
                directories: [
                    directoryPath
                ],
                destination: "session"
            });
            setPermissionContext(x);
            onRemove();
        };
        v[0] = directoryPath;
        v[1] = onRemove;
        v[2] = permissionContext;
        v[3] = setPermissionContext;
        v[4] = f;
    } else {
        f = v[4];
    }
    let b = f;
    let E;
    if (v[5] !== directoryPath) {
        E = e(s, {
            marginX: 2,
            flexDirection: "column",
            children: e(n, {
                bold: true,
                children: directoryPath
            })
        });
        v[5] = directoryPath;
        v[6] = E;
    } else {
        E = v[6];
    }
    let C;
    if (v[7] === S) {
        C = e(n, {
            children: "Claude Code will no longer have access to files in this directory."
        });
        v[7] = C;
    } else {
        C = v[7];
    }
    let O;
    if (v[8] !== b || v[9] !== onCancel) {
        O = e(or, {
            focus: "cancel",
            hideIndexes: true,
            onConfirm: b,
            onCancel
        });
        v[8] = b;
        v[9] = onCancel;
        v[10] = O;
    } else {
        O = v[10];
    }
    let M;
    if (v[11] !== onCancel || v[12] !== E || v[13] !== O) {
        M = r(_e, {
            title: "Remove directory from workspace?",
            onCancel,
            color: "error",
            children: [
                E,
                C,
                O
            ]
        });
        v[11] = onCancel;
        v[12] = E;
        v[13] = O;
        v[14] = M;
    } else {
        M = v[14];
    }
    return M;
}
N();
function Ac(He) {
    return He.originalCwd;
}
function Mc(path) {
    return {
        path,
        isCurrent: false,
        isDeletable: true
    };
}
function Pc(de) {
    return de.path;
}
function kc(Je) {
    return $n(Je);
}
function wn(g) {
    let b = w(31);
    let { onExit, toolPermissionContext, onRequestAddDirectory, onRequestRemoveDirectory, onHeaderFocusChange } = g;
    let { headerFocused, focusHeader } = _y();
    let x = tE(Ac);
    let E;
    let C;
    if (b[0] !== headerFocused || b[1] !== onHeaderFocusChange) {
        E = ()=>{
            onHeaderFocusChange(headerFocused);
        };
        C = [
            headerFocused,
            onHeaderFocusChange
        ];
        b[0] = headerFocused;
        b[1] = onHeaderFocusChange;
        b[2] = E;
        b[3] = C;
    } else {
        E = b[2];
        C = b[3];
    }
    P(E, C);
    let O;
    if (b[4] !== toolPermissionContext.additionalWorkingDirectories) {
        O = Array.from(toolPermissionContext.additionalWorkingDirectories.keys()).map(Mc);
        b[4] = toolPermissionContext.additionalWorkingDirectories;
        b[5] = O;
    } else {
        O = b[5];
    }
    let M = O;
    let B;
    if (b[6] !== M || b[7] !== onRequestAddDirectory || b[8] !== onRequestRemoveDirectory) {
        B = (A)=>{
            if (A === "add-directory") {
                onRequestAddDirectory();
                return;
            }
            let U = M.find((k)=>k.path === A);
            if (U && U.isDeletable) {
                onRequestRemoveDirectory(U.path);
            }
        };
        b[6] = M;
        b[7] = onRequestAddDirectory;
        b[8] = onRequestRemoveDirectory;
        b[9] = B;
    } else {
        B = b[9];
    }
    let H = B;
    let pe;
    if (b[10] !== onExit) {
        pe = ()=>onExit("Workspace dialog dismissed", {
                display: "system"
            });
        b[10] = onExit;
        b[11] = pe;
    } else {
        pe = b[11];
    }
    let q = pe;
    let ye;
    if (b[12] !== M) {
        let ee = VB(M.map(Pc), kc);
        let K = M.map((J, ue)=>({
                label: ee[ue],
                value: J.path
            }));
        ye = (K.push({
            label: `Add directory${te.ellipsis}`,
            value: "add-directory"
        }), K);
        b[12] = M;
        b[13] = ye;
    } else {
        ye = b[13];
    }
    let re = ye;
    let se;
    if (b[14] !== x) {
        se = $n(x);
        b[14] = x;
        b[15] = se;
    } else {
        se = b[15];
    }
    const he = `-  ${se}`;
    let z;
    if (b[16] !== he) {
        z = e(n, {
            children: he
        });
        b[16] = he;
        b[17] = z;
    } else {
        z = b[17];
    }
    let Ce;
    if (b[18] === S) {
        Ce = e(n, {
            dimColor: true,
            children: "(Original working directory)"
        });
        b[18] = Ce;
    } else {
        Ce = b[18];
    }
    let Q;
    if (b[19] !== z) {
        Q = r(s, {
            flexDirection: "row",
            marginTop: 1,
            marginLeft: 2,
            gap: 1,
            children: [
                z,
                Ce
            ]
        });
        b[19] = z;
        b[20] = Q;
    } else {
        Q = b[20];
    }
    const rt = Math.min(10, re.length);
    let Re;
    if (b[21] !== focusHeader || b[22] !== q || b[23] !== H || b[24] !== headerFocused || b[25] !== re || b[26] !== rt) {
        Re = e(Ve, {
            options: re,
            onChange: H,
            onCancel: q,
            visibleOptionCount: rt,
            onUpFromFirstItem: focusHeader,
            isDisabled: headerFocused,
            hidePromptWhileDisabled: true
        });
        b[21] = focusHeader;
        b[22] = q;
        b[23] = H;
        b[24] = headerFocused;
        b[25] = re;
        b[26] = rt;
        b[27] = Re;
    } else {
        Re = b[27];
    }
    let Xe;
    if (b[28] !== Q || b[29] !== Re) {
        Xe = r(s, {
            flexDirection: "column",
            marginBottom: 1,
            children: [
                Q,
                Re
            ]
        });
        b[28] = Q;
        b[29] = Re;
        b[30] = Xe;
    } else {
        Xe = b[30];
    }
    return Xe;
}
function No(g) {
    return (i)=>`${g}_${i instanceof We ? i.code : "error"}`;
}
const Ke = [
    "allow",
    "soft_deny",
    "hard_deny",
    "environment"
];
function ve() {
    let g = Z7();
    let i = [];
    for (let m of ZFe){
        let d = fe(m);
        if (!d) {
            continue;
        }
        let a = g.safeParse(d.autoMode);
        if (!a.success) {
            continue;
        }
        for (let h of Ke){
            let v = a.data[h];
            if (!v) {
                continue;
            }
            v.forEach((text, index)=>{
                if (text === xu) {
                    return;
                }
                if (h === "environment" && text.startsWith("### ")) {
                    i.push({
                        text,
                        section: h,
                        source: m,
                        index,
                        structure: true
                    });
                    return;
                }
                i.push({
                    text,
                    section: h,
                    source: m,
                    index
                });
            });
        }
    }
    return i;
}
async function qr(g, expected, storageV5) {
    return Zr("auto_mode_rule_edit", ()=>Ho("environment", (d)=>{
            if (d.length !== expected.length || d.some((v, f)=>v !== expected[f])) {
                return {
                    refuse: "The environment changed since this screen loaded — reopen the tab to see the current entries."
                };
            }
            let { entries, problem } = wl(g.join(`
`));
            if (problem !== null) {
                return {
                    refuse: problem
                };
            }
            return entries;
        }, storageV5), No("add"));
}
function Yr() {
    let g = fe("userSettings");
    if (!g) {
        return [];
    }
    let i = Z7().safeParse(g.autoMode);
    if (!i.success) {
        return [];
    }
    return i.data.environment ?? [];
}
function zr(content) {
    return wl(content).problem;
}
function wl(g) {
    let entries = El(g.split(`
`).map((d)=>jt(d)).filter((d)=>d.length > 0));
    if (entries.length === 0) {
        return {
            entries,
            problem: null
        };
    }
    let m = X7e("environment", entries);
    if (m !== null) {
        return {
            entries,
            problem: m
        };
    }
    return {
        entries,
        problem: null
    };
}
function me() {
    if (!Xte()) {
        let a = {
            enabled: true,
            control: "internalTemplate"
        };
        return {
            allow: a,
            soft_deny: a,
            hard_deny: a,
            environment: a
        };
    }
    let g = Z7();
    let i = new Set;
    let m = {};
    for (let a of ZFe){
        let h = fe(a);
        if (!h) {
            continue;
        }
        let v = g.safeParse(h.autoMode);
        if (!v.success) {
            continue;
        }
        let f = {};
        for (let x of Ke){
            if (v.data[x]?.length) {
                f[x] = v.data[x];
            }
        }
        m[a] = f;
    }
    let d = {};
    for (let a of Ke){
        let h = ZFe.map((b)=>({
                source: b,
                values: m[b]?.[a] ?? []
            })).filter((b)=>b.values.length > 0);
        if (h.length === 0) {
            d[a] = {
                enabled: true,
                control: "empty"
            };
            continue;
        }
        if (a === "environment") {
            let b = h.find((E)=>E.values.includes(xu));
            d[a] = b ? {
                enabled: true,
                control: "otherSource",
                source: b.source
            } : {
                enabled: false,
                control: "otherSource",
                source: h[0].source
            };
            continue;
        }
        let v = m.userSettings?.[a] ?? [];
        let f = h.find((b)=>b.source !== "userSettings" && b.values.includes(xu));
        let x = a === "soft_deny" && i.has("userSettings");
        if (!f && x) {
            d[a] = {
                enabled: true,
                control: "otherSource",
                source: "userSettings"
            };
            continue;
        }
        if (f) {
            d[a] = {
                enabled: true,
                control: "otherSource",
                source: f.source
            };
            continue;
        }
        if (v.length > 0) {
            d[a] = {
                enabled: v.includes(xu),
                control: "user"
            };
            continue;
        }
        d[a] = {
            enabled: false,
            control: "otherSource",
            source: h[0].source
        };
    }
    return d;
}
async function Xr(g, i, storageV5) {
    let d = false;
    return Zr("auto_mode_rule_edit", ()=>Ho(g, (a)=>{
            if (!Xte()) {
                return {
                    refuse: "Built-in rules cannot be disabled on internal-template sessions — they are always in effect."
                };
            }
            if (g === "environment") {
                return {
                    refuse: "The environment is a single replaceable document — write your own version to replace the built-in default, or delete your entries to restore it."
                };
            }
            let h = a.filter((v)=>v !== xu);
            if (i) {
                return [
                    xu,
                    ...h
                ];
            }
            if (h.length === 0 && !d) {
                return {
                    refuse: "An empty section cannot hold the off state — add a rule to this section first."
                };
            }
            return h;
        }, storageV5), No("toggle"));
}
function El(g) {
    return g.filter((i, m)=>{
        if (!i.startsWith("### ")) {
            return true;
        }
        let d = g[m + 1];
        return d !== undefined && !d.startsWith("### ");
    });
}
class We extends Error {
    code;
    constructor(g, i){
        super(i);
        this.code = g;
        this.name = "AutoModeRuleWriteError";
    }
}
async function Ho(g, i, m) {
    let d = yn("userSettings");
    if (!d) {
        throw new We("no_user_settings_path", "Could not resolve the user settings file path.");
    }
    let { settings, errors } = Uy(d);
    if (settings === null && errors.length > 0) {
        throw new We("settings_file_invalid", "the settings file has a validation error or cannot be read, so its auto mode rules are not in effect; fix it (Claude Code names the problem at startup), then try again.");
    }
    let v = false;
    let f = 0;
    let x = null;
    let b = null;
    let { error } = await ta("userSettings", (C)=>{
        v = false;
        f = 0;
        x = null;
        b = null;
        let O = C?.autoMode;
        if (Array.isArray(O)) {
            x = "the existing autoMode value in the settings file is an array — fix or remove it, then try again.";
            return null;
        }
        if (O !== undefined && !Z7().safeParse(O).success) {
            x = "the existing autoMode value in the settings file does not match the expected shape — fix or remove it, then try again.";
            return null;
        }
        let M = O !== null && typeof O === "object" ? O : undefined;
        let B = Array.isArray(M?.[g]) ? M[g].filter((H)=>typeof H === "string") : [];
        let A = i(B);
        if (A !== null && !Array.isArray(A)) {
            b = A.refuse;
            return null;
        }
        let k = (H)=>H.length - (H.includes(xu) ? 1 : 0);
        if (A !== null && k(A) > $Ee && k(A) > k(B)) {
            f = k(B);
            return null;
        }
        if (A === null) {
            v = true;
            return null;
        }
        let U = {};
        U.autoMode = {
            [g]: A
        };
        return U;
    }, undefined, m);
    if (x) {
        throw new We("settings_file_invalid", x);
    }
    if (b !== null) {
        throw new We("invalid_input", b);
    }
    if (f) {
        throw new We("invalid_input", `autoMode.${g} already has ${f} entries; the maximum is ${$Ee}.`);
    }
    if (v) {
        throw new We("entry_not_found", "That rule changed on disk while the dialog was open — close and reopen /permissions, then try again.");
    }
    if (error) {
        let C = Nzt(error, d, "/permissions");
        throw new We(C.code, C.message);
    }
}
function jt(g) {
    return YG(g);
}
function co(section, i) {
    try {
        Gr(section, jt(i));
        return null;
    } catch (error) {
        if (error instanceof We) {
            return error.message;
        }
        return String(error);
    }
}
function Gr(g, i) {
    if (i === xu) {
        throw new We("invalid_input", `"${xu}" is reserved \u2014 it splices the built-in rules in and cannot be added as a rule.`);
    }
    if (i.length > q7e) {
        throw new We("invalid_input", `the rule is ${i.length} characters; the maximum is ${q7e}.`);
    }
    let m = i.split(`
`);
    if (g === "environment" && m.some((a)=>a.startsWith("### "))) {
        throw new We("invalid_input", "'### ' lines are environment section headers (structure, not entries) and cannot be written here.");
    }
    let d = X7e(g, m);
    if (d) {
        throw new We("invalid_input", d);
    }
}
async function Jr(section, i, storageV5) {
    return Zr("auto_mode_rule_edit", ()=>Tc(section, i, storageV5), No("add"));
}
async function Tc(section, i, storageV5) {
    let d = jt(i);
    Gr(section, d);
    return Ho(section, (a)=>{
        if (section === "environment" && Xte()) {
            return {
                refuse: "The environment is edited as a document — use Edit environment on the Auto mode tab."
            };
        }
        if (section !== "environment" && a.length === 0) {
            return [
                xu,
                d
            ];
        }
        return [
            ...a,
            d
        ];
    }, storageV5);
}
async function es(section, index, text, d, storageV5) {
    return Zr("auto_mode_rule_edit", ()=>Dc(section, index, text, d, storageV5), No("update"));
}
async function Dc(section, index, text, d, storageV5) {
    let h = jt(d);
    Gr(section, h);
    return Ho(section, (v)=>{
        if (text === xu) {
            return {
                refuse: `"${xu}" is splice plumbing, not an editable rule.`
            };
        }
        if (section === "environment" && text.startsWith("### ")) {
            return {
                refuse: "'### ' lines are environment section headers (structure, not entries) and cannot be edited here."
            };
        }
        if (v[index] !== text) {
            return null;
        }
        let f = [
            ...v
        ];
        f[index] = h;
        return f;
    }, storageV5);
}
async function os(section, index, text, storageV5) {
    return Zr("auto_mode_rule_edit", ()=>Fc(section, index, text, storageV5), No("delete"));
}
async function Fc(section, index, text, storageV5) {
    return Ho(section, (a)=>{
        if (text === xu) {
            return {
                refuse: `"${xu}" is splice plumbing, not a deletable rule.`
            };
        }
        if (section === "environment" && text.startsWith("### ")) {
            return {
                refuse: "'### ' lines are environment section headers (structure, not entries) and cannot be deleted here."
            };
        }
        if (a[index] !== text) {
            return null;
        }
        let h = [
            ...a.slice(0, index),
            ...a.slice(index + 1)
        ];
        if (section === "environment") {
            return El(h);
        }
        return h;
    }, storageV5);
}
N();
function Mm(uu) {
    return uu.section !== "environment";
}
function Pm(sn) {
    return [
        gt(sn),
        sn
    ];
}
function km(vi) {
    return vi.text;
}
function Tm(du) {
    return Ai(Bi(du).text);
}
function Dm(bi) {
    return bi.section === "environment";
}
function Fm(fr) {
    return {
        tag: fr.legacy ? "legacy" : En(fr.source),
        text: Ai(Bi(fr.text).text)
    };
}
function Om(cu) {
    return {
        tag: null,
        text: Ai(Bi(cu).text)
    };
}
function $m(mu) {
    return mu.source;
}
function Bm(Ci) {
    return Ci.source === "userSettings";
}
function _m(pu) {
    return pu.source !== "userSettings";
}
function Vm(ko) {
    let ln = ie(ko.section);
    let Ri = ko.legacy ? "legacy" : En(ko.source);
    if (!Ri) {
        return e(n, {
            color: Ie(ko.section),
            children: ln.padEnd(xe)
        });
    }
    return r(Y, {
        children: [
            e(n, {
                color: Ie(ko.section),
                children: ln
            }),
            e(n, {
                dimColor: true,
                children: ` \xB7 ${Ri}`.padEnd(xe - ln.length)
            })
        ]
    });
}
function Im(To) {
    if (To) {
        return ` \xB7 ${To}`.padEnd(xe);
    }
    return " ".repeat(xe);
}
function Lm(fu, hu) {
    return [
        fu,
        hu
    ];
}
function hs() {
    let g = w(1);
    let i;
    if (g[0] === S) {
        let m = gL();
        i = Object.fromEntries(Ke.map((d)=>[
                d,
                m[d]?.length ?? 0
            ]));
        g[0] = i;
    } else {
        i = g[0];
    }
    return i;
}
function ie(g) {
    switch(g){
        case "allow":
            return "Soft allow";
        case "soft_deny":
            return "Soft deny";
        case "hard_deny":
            return "Hard deny";
        case "environment":
            return "Environment";
    }
}
function Ie(g) {
    switch(g){
        case "allow":
            return "success";
        case "soft_deny":
            return "warning";
        case "hard_deny":
            return "error";
        case "environment":
            return;
    }
}
function Te(g) {
    switch(g){
        case "userSettings":
            return "user settings";
        case "flagSettings":
            return "the --settings flag";
        case "policySettings":
            return "managed settings";
    }
}
function yt(g) {
    let i = [
        "userSettings",
        "flagSettings",
        "policySettings"
    ];
    return Ke.flatMap((m)=>{
        let d = g.filter((a)=>a.section === m);
        return i.flatMap((a)=>d.filter((h)=>h.source === a));
    });
}
function gt(g) {
    return `${g.section}:${g.source}:${g.legacy ? "legacy-" : ""}${g.index}`;
}
function En(source) {
    switch(source){
        case "userSettings":
            return null;
        case "flagSettings":
            return "flag";
        case "policySettings":
            return "org";
    }
}
var xe = 20;
function $c(g, i) {
    let m = [];
    let d = "";
    let a = 0;
    for (let { segment } of ra().segment(g)){
        let v = ae(segment);
        if (a + v > i && d.length > 0) {
            m.push(d);
            d = "";
            a = 0;
        }
        d += segment;
        a += v;
    }
    if (d.length > 0) {
        m.push(d);
    }
    return m;
}
const Ml = 5;
function An(g, i) {
    if (ae(g) <= i) {
        return g;
    }
    let m = "";
    let d = 0;
    for (let { segment } of ra().segment(g)){
        let h = ae(segment);
        if (d + h > i - 1) {
            break;
        }
        m += segment;
        d += h;
    }
    return `${m}\u2026`;
}
function Pl(g, i) {
    let m = [];
    let d = "";
    let a = 0;
    let h = ()=>{
        if (d.length > 0) {
            m.push(d);
            d = "";
            a = 0;
        }
    };
    for (let v of g.split(" ")){
        let f = ae(v) > i ? $c(v, i) : [
            v
        ];
        for (let x of f){
            let b = ae(x);
            if (a === 0) {
                d = x;
                a = b;
            } else if (a + 1 + b <= i) {
                d = `${d} ${x}`;
                a += 1 + b;
            } else {
                h();
                d = x;
                a = b;
            }
        }
    }
    h();
    return m.join(`
${" ".repeat(xe)}`);
}
function On(g) {
    let A = w(64);
    let { entries, searchQuery, isSearchMode, isFocused, onAddNew, onSelectEntry, onCancel, onHeaderFocusChange, cursorOffset, defaultFocusValue, builtinsState, onSelectBuiltins, onSelectEnvironment } = g;
    let B = hs();
    let k;
    if (A[0] === S) {
        k = gL().environment ?? [];
        A[0] = k;
    } else {
        k = A[0];
    }
    let U = k;
    let H = xmt();
    let { columns } = ke();
    let { headerFocused, focusHeader, blurHeader } = _y();
    let J = R(null);
    let ue;
    let K;
    if (A[1] !== blurHeader || A[2] !== headerFocused || A[3] !== isSearchMode) {
        ue = ()=>{
            if (isSearchMode && headerFocused) {
                blurHeader(J.current);
            }
        };
        K = [
            isSearchMode,
            headerFocused,
            blurHeader
        ];
        A[1] = blurHeader;
        A[2] = headerFocused;
        A[3] = isSearchMode;
        A[4] = ue;
        A[5] = K;
    } else {
        ue = A[4];
        K = A[5];
    }
    P(ue, K);
    $h(J, isSearchMode);
    let re = headerFocused && !isSearchMode;
    let se;
    let he;
    if (A[6] !== re || A[7] !== onHeaderFocusChange) {
        se = ()=>{
            onHeaderFocusChange(re);
        };
        he = [
            re,
            onHeaderFocusChange
        ];
        A[6] = re;
        A[7] = onHeaderFocusChange;
        A[8] = se;
        A[9] = he;
    } else {
        se = A[8];
        he = A[9];
    }
    P(se, he);
    let z = builtinsState.environment.control !== "internalTemplate";
    let Ce;
    if (A[10] !== entries || A[11] !== z) {
        Ce = z ? entries.filter(Mm) : entries;
        A[10] = entries;
        A[11] = z;
        A[12] = Ce;
    } else {
        Ce = A[12];
    }
    let Q = Ce;
    let rt;
    if (A[13] !== Q) {
        rt = new Map(Q.map(Pm));
        A[13] = Q;
        A[14] = rt;
    } else {
        rt = A[14];
    }
    let Re = rt;
    let Xe;
    if (A[15] !== builtinsState || A[16] !== B || A[17] !== entries || A[18] !== z || A[19] !== Q || A[20] !== searchQuery || A[21] !== H || A[22] !== columns) {
        let He = searchQuery.toLowerCase();
        let de = yt(Q).filter((Ge)=>!searchQuery || Ge.text.toLowerCase().includes(He));
        let Je = VB(de.map(km), Tm);
        let et = z ? yt(entries).filter(Dm) : [];
        let je = et.length > 0;
        let tt = je ? et.map(Fm) : U.map(Om);
        let Qe = builtinsState.environment;
        let Ue = D(et.map($m)).map(Te).join(" and ");
        let Ee = et.some(Bm);
        let Oe = et.some(_m);
        let De = !Oe ? "enter to edit" : Ee ? "enter to edit your entries" : "enter to add your own";
        let X = !je ? `Built-in default document${Qe.control === "otherSource" ? ` \xB7 kept by ${Te(Qe.source ?? "userSettings")}` : ""} \xB7 enter to edit` : `${Qe.enabled ? "Extends" : "Replaces"} the built-in default \xB7 from ${Ue} \xB7 ${De}`;
        let $e;
        if (A[24] !== builtinsState) {
            $e = (Co)=>{
                let Et = builtinsState[Co];
                if (Co === "environment") {
                    return Et.control === "internalTemplate";
                }
                return !(Et.control === "otherSource" && !Et.enabled);
            };
            A[24] = builtinsState;
            A[25] = $e;
        } else {
            $e = A[25];
        }
        let tn = $e;
        let on = searchQuery.length > 0 && tt.some((Ro)=>Ro.text.toLowerCase().includes(He));
        let Zt = z && (searchQuery ? on : true);
        let xo = de.length + (Zt ? 1 : 0) + (searchQuery ? 0 : 1 + F(Ke, tn));
        let So = String(xo).length + 2;
        let At = Math.max(1, (H ?? columns - 4) - 4 - So - xe);
        let ur = Vm;
        let Pt;
        if (A[26] !== At) {
            Pt = (Ot)=>{
                let $t = Pl(Ot, At);
                let wo = $t.split(`
`);
                if (wo.length <= 3) {
                    return $t;
                }
                return wo.slice(0, 3).join(`
`) + `
${" ".repeat(xe)}\u2026 (+${wo.length - 3} lines)`;
            };
            A[26] = At;
            A[27] = Pt;
        } else {
            Pt = A[27];
        }
        let eo = Pt;
        let mi = (Eo, ci)=>({
                label: r(n, {
                    children: [
                        ur(Eo),
                        Eo.structure ? e(n, {
                            dimColor: true,
                            children: eo(Je[ci] ?? "")
                        }) : eo(Je[ci] ?? "")
                    ]
                }),
                value: gt(Eo)
            });
        let pi = Im;
        let hi = ()=>{
            let dr = tt.slice(0, Ml);
            let cr = tt.length - dr.length;
            return {
                label: r(n, {
                    children: [
                        e(n, {
                            color: Ie("environment"),
                            children: "Environment".padEnd(xe)
                        }),
                        e(n, {
                            dimColor: true,
                            children: An(X, At)
                        }),
                        dr.map((fi, iu)=>e(n, {
                                dimColor: true,
                                children: `
${pi(fi.tag)}${An(fi.text, At)}`
                            }, iu)),
                        cr > 0 ? e(n, {
                            dimColor: true,
                            children: `
${" ".repeat(xe)}\u2026 (+${cr} more ${cr === 1 ? "line" : "lines"})`
                        }) : null
                    ]
                }),
                value: "environment-document"
            };
        };
        let Bt;
        if (A[28] !== builtinsState || A[29] !== B) {
            Bt = (lt)=>{
                let _t = builtinsState[lt];
                let yi = _t.enabled ? "[x]" : "[ ]";
                let lu = B[lt] ?? 0;
                if (_t.control === "internalTemplate") {
                    return {
                        label: r(n, {
                            children: [
                                e(n, {
                                    color: Ie(lt),
                                    children: ie(lt).padEnd(xe)
                                }),
                                lt === "environment" ? "Built-in environment" : "Built-in rules",
                                e(n, {
                                    dimColor: true,
                                    children: ""
                                })
                            ]
                        }),
                        value: `builtins:${lt}`
                    };
                }
                return {
                    label: r(n, {
                        children: [
                            e(n, {
                                color: Ie(lt),
                                children: ie(lt).padEnd(xe)
                            }),
                            `${yi} Built-in rules`,
                            r(n, {
                                dimColor: true,
                                children: [
                                    ` \xB7 ${lu}${_t.enabled ? "" : " · off"}`,
                                    _t.control === "user" || _t.control === "empty" ? "" : ` \xB7 from ${Te(_t.source ?? "policySettings")}`
                                ]
                            })
                        ]
                    }),
                    value: `builtins:${lt}`
                };
            };
            A[28] = builtinsState;
            A[29] = B;
            A[30] = Bt;
        } else {
            Bt = A[30];
        }
        let au = Bt;
        Xe = searchQuery ? [
            ...de.map(mi),
            ...Zt ? [
                hi()
            ] : []
        ] : [
            {
                label: `Add a new rule${te.ellipsis}`,
                value: "add-new-rule"
            },
            ...Ke.flatMap((nn)=>{
                if (nn === "environment" && z) {
                    return [
                        hi()
                    ];
                }
                let Ao = de.map(Lm).filter(([Vt])=>Vt.section === nn).map(([gi, to])=>mi(gi, to));
                if (tn(nn)) {
                    return [
                        au(nn),
                        ...Ao
                    ];
                }
                return Ao;
            })
        ];
        A[15] = builtinsState;
        A[16] = B;
        A[17] = entries;
        A[18] = z;
        A[19] = Q;
        A[20] = searchQuery;
        A[21] = H;
        A[22] = columns;
        A[23] = Xe;
    } else {
        Xe = A[23];
    }
    let mt = Xe;
    const $e = isSearchMode ? 0 : undefined;
    let Pt;
    if (A[31] !== blurHeader || A[32] !== isSearchMode) {
        Pt = isSearchMode ? ()=>blurHeader(J.current) : undefined;
        A[31] = blurHeader;
        A[32] = isSearchMode;
        A[33] = Pt;
    } else {
        Pt = A[33];
    }
    let Bt;
    if (A[34] === S) {
        Bt = e(n, {
            wrap: "wrap-trim",
            children: "Extra rules for the auto mode classifier. Rules are plain sentences; new rules are saved to your user settings."
        });
        A[34] = Bt;
    } else {
        Bt = A[34];
    }
    const Ye = isSearchMode && !headerFocused;
    let It;
    if (A[35] !== cursorOffset || A[36] !== isFocused || A[37] !== searchQuery || A[38] !== Ye || A[39] !== H) {
        It = e(s, {
            marginBottom: 1,
            marginTop: 1,
            flexDirection: "column",
            children: e(nb, {
                query: searchQuery,
                isFocused: Ye,
                isTerminalFocused: isFocused,
                width: H,
                cursorOffset
            })
        });
        A[35] = cursorOffset;
        A[36] = isFocused;
        A[37] = searchQuery;
        A[38] = Ye;
        A[39] = H;
        A[40] = It;
    } else {
        It = A[40];
    }
    let oo;
    if (A[41] !== blurHeader || A[42] !== Re || A[43] !== headerFocused || A[44] !== onAddNew || A[45] !== onHeaderFocusChange || A[46] !== onSelectBuiltins || A[47] !== onSelectEntry || A[48] !== onSelectEnvironment) {
        oo = (Lt)=>{
            if (headerFocused) {
                blurHeader();
                onHeaderFocusChange(false);
            }
            if (Lt === "add-new-rule") {
                onAddNew();
                return;
            }
            if (Lt === "environment-document") {
                onSelectEnvironment();
                return;
            }
            if (Lt.startsWith("builtins:")) {
                onSelectBuiltins(Lt.slice(9));
                return;
            }
            let mr = Re.get(Lt);
            if (mr) {
                onSelectEntry(mr);
            }
        };
        A[41] = blurHeader;
        A[42] = Re;
        A[43] = headerFocused;
        A[44] = onAddNew;
        A[45] = onHeaderFocusChange;
        A[46] = onSelectBuiltins;
        A[47] = onSelectEntry;
        A[48] = onSelectEnvironment;
        A[49] = oo;
    } else {
        oo = A[49];
    }
    const Ae = Math.min(10, mt.length);
    const Mo = isSearchMode || headerFocused;
    const rn = !isSearchMode;
    let Po;
    if (A[50] !== defaultFocusValue || A[51] !== focusHeader || A[52] !== onCancel || A[53] !== mt || A[54] !== oo || A[55] !== Ae || A[56] !== Mo || A[57] !== rn) {
        Po = e(Ve, {
            options: mt,
            defaultFocusValue,
            onChange: oo,
            onCancel,
            visibleOptionCount: Ae,
            isDisabled: Mo,
            hidePromptWhileDisabled: true,
            pointerWhileDisabled: rn,
            onUpFromFirstItem: focusHeader
        });
        A[50] = defaultFocusValue;
        A[51] = focusHeader;
        A[52] = onCancel;
        A[53] = mt;
        A[54] = oo;
        A[55] = Ae;
        A[56] = Mo;
        A[57] = rn;
        A[58] = Po;
    } else {
        Po = A[58];
    }
    let pr;
    if (A[59] !== Pt || A[60] !== It || A[61] !== Po || A[62] !== $e) {
        pr = r(s, {
            ref: J,
            flexDirection: "column",
            tabIndex: $e,
            onFocus: Pt,
            children: [
                Bt,
                It,
                Po
            ]
        });
        A[59] = Pt;
        A[60] = It;
        A[61] = Po;
        A[62] = $e;
        A[63] = pr;
    } else {
        pr = A[63];
    }
    return pr;
}
N();
function cp(X) {
    return `- ${X}`;
}
async function Gl(section, i) {
    let path = join(tc(), `${tDn}${section}-${randomBytes(8).toString("hex")}.md`);
    let d = await open(path, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 384);
    try {
        await d.writeFile(i, "utf8");
    } finally{
        await d.close();
    }
    return {
        opened: VWe(path),
        path
    };
}
function qo(section) {
    let a = w(5);
    let [i, m] = y(null);
    let d = R(false);
    let h;
    if (a[0] !== section) {
        h = (v)=>{
            if (d.current) {
                return;
            }
            d.current = true;
            Gl(section, v).then(({ opened, path })=>{
                m(opened ? `opening ${path}` : ux() ? `wrote ${path} \u2014 the editor could not be launched` : `wrote ${path} \u2014 no $VISUAL/$EDITOR set`);
            }).catch((E)=>{
                m(`could not write the file: ${E instanceof Error ? E.message : String(E)}`);
            }).finally(()=>{
                d.current = false;
            });
        };
        a[0] = section;
        a[1] = h;
    } else {
        h = a[1];
    }
    let C = h;
    let f;
    if (a[2] !== C || a[3] !== i) {
        f = [
            i,
            C
        ];
        a[2] = C;
        a[3] = i;
        a[4] = f;
    } else {
        f = a[4];
    }
    return f;
}
function Rt(g) {
    let h = w(13);
    let { entry, onCancel } = g;
    let [d, a] = qo(entry.section);
    if (entry.text.length <= AV) {
        return null;
    }
    let v;
    if (h[0] === S) {
        v = [
            {
                label: `View the full text in editor${UG() ? ` (${UG()})` : ""}`,
                value: "editor"
            },
            {
                label: "Cancel",
                value: "cancel"
            }
        ];
        h[0] = v;
    } else {
        v = h[0];
    }
    let f;
    if (h[1] !== entry.text || h[2] !== a || h[3] !== onCancel) {
        f = (x)=>{
            if (x === "editor") {
                a(entry.text);
            } else {
                onCancel();
            }
        };
        h[1] = entry.text;
        h[2] = a;
        h[3] = onCancel;
        h[4] = f;
    } else {
        f = h[4];
    }
    let b;
    if (h[5] !== onCancel || h[6] !== f) {
        b = e(Ve, {
            options: v,
            onChange: f,
            onCancel
        });
        h[5] = onCancel;
        h[6] = f;
        h[7] = b;
    } else {
        b = h[7];
    }
    let E;
    if (h[8] !== d) {
        E = d !== null && e(n, {
            dimColor: true,
            wrap: "wrap-trim",
            children: d
        });
        h[8] = d;
        h[9] = E;
    } else {
        E = h[9];
    }
    let C;
    if (h[10] !== b || h[11] !== E) {
        C = r(Y, {
            children: [
                b,
                E
            ]
        });
        h[10] = b;
        h[11] = E;
        h[12] = C;
    } else {
        C = h[12];
    }
    return C;
}
function Le(g) {
    let m = w(25);
    let { entry } = g;
    let d;
    if (m[0] !== entry.text) {
        d = Bi(entry.text);
        m[0] = entry.text;
        m[1] = d;
    } else {
        d = m[1];
    }
    let a = d;
    let h;
    if (m[2] !== a.text) {
        h = e(n, {
            bold: true,
            wrap: "wrap-trim",
            children: a.text
        });
        m[2] = a.text;
        m[3] = h;
    } else {
        h = m[3];
    }
    let v;
    if (m[4] !== a.needsGutter || m[5] !== h) {
        v = e(_i, {
            multiline: a.needsGutter,
            children: h
        });
        m[4] = a.needsGutter;
        m[5] = h;
        m[6] = v;
    } else {
        v = m[6];
    }
    let f;
    if (m[7] !== entry.section) {
        f = Ie(entry.section);
        m[7] = entry.section;
        m[8] = f;
    } else {
        f = m[8];
    }
    let x;
    if (m[9] !== entry.section) {
        x = ie(entry.section);
        m[9] = entry.section;
        m[10] = x;
    } else {
        x = m[10];
    }
    let b;
    if (m[11] !== f || m[12] !== x) {
        b = e(n, {
            color: f,
            children: x
        });
        m[11] = f;
        m[12] = x;
        m[13] = b;
    } else {
        b = m[13];
    }
    const E = entry.structure ? "section header" : "rule";
    let C;
    if (m[14] !== entry.source) {
        C = Te(entry.source);
        m[14] = entry.source;
        m[15] = C;
    } else {
        C = m[15];
    }
    let O;
    if (m[16] !== E || m[17] !== C) {
        O = r(n, {
            dimColor: true,
            children: [
                " ",
                E,
                " for the auto mode classifier · From ",
                C
            ]
        });
        m[16] = E;
        m[17] = C;
        m[18] = O;
    } else {
        O = m[18];
    }
    let M;
    if (m[19] !== b || m[20] !== O) {
        M = r(n, {
            children: [
                b,
                O
            ]
        });
        m[19] = b;
        m[20] = O;
        m[21] = M;
    } else {
        M = m[21];
    }
    let B;
    if (m[22] !== M || m[23] !== v) {
        B = r(s, {
            flexDirection: "column",
            marginX: 2,
            children: [
                v,
                M
            ]
        });
        m[22] = M;
        m[23] = v;
        m[24] = B;
    } else {
        B = m[24];
    }
    return B;
}
function Ln(g) {
    let h = w(78);
    let { entry, onEdit, onDelete, onCancel } = g;
    let v;
    if (h[0] === S) {
        v = {
            context: "Confirmation"
        };
        h[0] = v;
    } else {
        v = h[0];
    }
    Ze("confirm:no", onCancel, v);
    let f;
    if (h[1] === S) {
        f = e(s, {
            marginLeft: 3,
            children: e(dA, {
                children: e(G, {
                    chord: "escape",
                    action: "cancel"
                })
            })
        });
        h[1] = f;
    } else {
        f = h[1];
    }
    let x = f;
    if (entry.legacy) {
        let b;
        if (h[2] !== entry) {
            b = e(Le, {
                entry
            });
            h[2] = entry;
            h[3] = b;
        } else {
            b = h[3];
        }
        const E = entry.source === "userSettings" ? "This editor writes only the modern keys — move the rule to autoMode.soft_deny in your settings file to manage it here." : `It is delivered by ${Te(entry.source)} and cannot be modified here.`;
        let C;
        if (h[4] !== E) {
            C = r(n, {
                italic: true,
                children: [
                    "",
                    "This rule comes from the legacy autoMode.deny key, which the classifier still enforces as a soft deny.",
                    " ",
                    E
                ]
            });
            h[4] = E;
            h[5] = C;
        } else {
            C = h[5];
        }
        let O;
        if (h[6] !== entry || h[7] !== onCancel) {
            O = e(Rt, {
                entry,
                onCancel
            });
            h[6] = entry;
            h[7] = onCancel;
            h[8] = O;
        } else {
            O = h[8];
        }
        let M;
        if (h[9] !== b || h[10] !== C || h[11] !== O) {
            M = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            b,
                            C,
                            O
                        ]
                    }),
                    x
                ]
            });
            h[9] = b;
            h[10] = C;
            h[11] = O;
            h[12] = M;
        } else {
            M = h[12];
        }
        return M;
    }
    if (entry.structure) {
        let b;
        if (h[13] !== entry) {
            b = e(Le, {
                entry
            });
            h[13] = entry;
            h[14] = b;
        } else {
            b = h[14];
        }
        let E;
        if (h[15] !== entry.source) {
            E = entry.source !== "userSettings" ? `It is delivered by ${Te(entry.source)} and cannot be modified here.` : Qte() ? "Re-run /auto-mode-setup to restructure, or edit your settings file directly." : "Edit your settings file directly to restructure.";
            h[15] = entry.source;
            h[16] = E;
        } else {
            E = h[16];
        }
        let C;
        if (h[17] !== E) {
            C = r(n, {
                italic: true,
                children: [
                    "A section header that organizes the environment entries below it; it renders into the classifier prompt as written.",
                    " ",
                    E
                ]
            });
            h[17] = E;
            h[18] = C;
        } else {
            C = h[18];
        }
        let O;
        if (h[19] !== entry || h[20] !== onCancel) {
            O = e(Rt, {
                entry,
                onCancel
            });
            h[19] = entry;
            h[20] = onCancel;
            h[21] = O;
        } else {
            O = h[21];
        }
        let M;
        if (h[22] !== b || h[23] !== C || h[24] !== O) {
            M = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            b,
                            C,
                            O
                        ]
                    }),
                    x
                ]
            });
            h[22] = b;
            h[23] = C;
            h[24] = O;
            h[25] = M;
        } else {
            M = h[25];
        }
        return M;
    }
    if (entry.source === "policySettings") {
        let b;
        if (h[26] !== entry) {
            b = e(Le, {
                entry
            });
            h[26] = entry;
            h[27] = b;
        } else {
            b = h[27];
        }
        let E;
        if (h[28] === S) {
            E = r(n, {
                italic: true,
                children: [
                    "This rule is configured by managed settings and cannot be modified.",
                    `
`,
                    "Contact your system administrator for more information."
                ]
            });
            h[28] = E;
        } else {
            E = h[28];
        }
        let C;
        if (h[29] !== entry || h[30] !== onCancel) {
            C = e(Rt, {
                entry,
                onCancel
            });
            h[29] = entry;
            h[30] = onCancel;
            h[31] = C;
        } else {
            C = h[31];
        }
        let O;
        if (h[32] !== b || h[33] !== C) {
            O = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            b,
                            E,
                            C
                        ]
                    }),
                    x
                ]
            });
            h[32] = b;
            h[33] = C;
            h[34] = O;
        } else {
            O = h[34];
        }
        return O;
    }
    if (entry.source === "flagSettings") {
        let b;
        if (h[35] !== entry) {
            b = e(Le, {
                entry
            });
            h[35] = entry;
            h[36] = b;
        } else {
            b = h[36];
        }
        let E;
        if (h[37] === S) {
            E = e(n, {
                italic: true,
                children: "This rule comes from a read-only source (the --settings flag) and cannot be modified here."
            });
            h[37] = E;
        } else {
            E = h[37];
        }
        let C;
        if (h[38] !== entry || h[39] !== onCancel) {
            C = e(Rt, {
                entry,
                onCancel
            });
            h[38] = entry;
            h[39] = onCancel;
            h[40] = C;
        } else {
            C = h[40];
        }
        let O;
        if (h[41] !== b || h[42] !== C) {
            O = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            b,
                            E,
                            C
                        ]
                    }),
                    x
                ]
            });
            h[41] = b;
            h[42] = C;
            h[43] = O;
        } else {
            O = h[43];
        }
        return O;
    }
    let b;
    if (h[44] !== entry.section || h[45] !== entry.text) {
        b = co(entry.section, entry.text);
        h[44] = entry.section;
        h[45] = entry.text;
        h[46] = b;
    } else {
        b = h[46];
    }
    let B = b;
    if (B !== null) {
        let E;
        if (h[47] !== entry) {
            E = e(Le, {
                entry
            });
            h[47] = entry;
            h[48] = E;
        } else {
            E = h[48];
        }
        let C;
        if (h[49] !== B) {
            C = r(n, {
                italic: true,
                children: [
                    "This rule cannot be edited here: ",
                    B,
                    `
`,
                    "Edit it in your settings file, or delete it here."
                ]
            });
            h[49] = B;
            h[50] = C;
        } else {
            C = h[50];
        }
        let O;
        if (h[51] === S) {
            O = [
                {
                    label: "Delete",
                    value: "delete"
                },
                {
                    label: "Cancel",
                    value: "cancel"
                }
            ];
            h[51] = O;
        } else {
            O = h[51];
        }
        let M;
        if (h[52] !== onCancel || h[53] !== onDelete) {
            M = (A)=>{
                if (A === "delete") {
                    onDelete();
                } else {
                    onCancel();
                }
            };
            h[52] = onCancel;
            h[53] = onDelete;
            h[54] = M;
        } else {
            M = h[54];
        }
        let k;
        if (h[55] !== onCancel || h[56] !== M) {
            k = e(Ve, {
                options: O,
                onChange: M,
                onCancel
            });
            h[55] = onCancel;
            h[56] = M;
            h[57] = k;
        } else {
            k = h[57];
        }
        let U;
        if (h[58] !== E || h[59] !== C || h[60] !== k) {
            U = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            E,
                            C,
                            k
                        ]
                    }),
                    x
                ]
            });
            h[58] = E;
            h[59] = C;
            h[60] = k;
            h[61] = U;
        } else {
            U = h[61];
        }
        return U;
    }
    let E;
    if (h[62] !== entry) {
        E = e(Le, {
            entry
        });
        h[62] = entry;
        h[63] = E;
    } else {
        E = h[63];
    }
    let C;
    if (h[64] !== entry.section) {
        C = entry.section === "environment" && r(n, {
            italic: true,
            children: [
                "Environment entries describe this machine and project for the classifier.",
                Qte() ? " Re-run /auto-mode-setup to rebuild them from scratch." : ""
            ]
        });
        h[64] = entry.section;
        h[65] = C;
    } else {
        C = h[65];
    }
    let O;
    if (h[66] === S) {
        O = [
            {
                label: "Edit",
                value: "edit"
            },
            {
                label: "Delete",
                value: "delete"
            },
            {
                label: "Cancel",
                value: "cancel"
            }
        ];
        h[66] = O;
    } else {
        O = h[66];
    }
    let M;
    if (h[67] !== onCancel || h[68] !== onDelete || h[69] !== onEdit) {
        M = (H)=>{
            if (H === "edit") {
                onEdit();
            } else if (H === "delete") {
                onDelete();
            } else {
                onCancel();
            }
        };
        h[67] = onCancel;
        h[68] = onDelete;
        h[69] = onEdit;
        h[70] = M;
    } else {
        M = h[70];
    }
    let k;
    if (h[71] !== onCancel || h[72] !== M) {
        k = e(Ve, {
            options: O,
            onChange: M,
            onCancel
        });
        h[71] = onCancel;
        h[72] = M;
        h[73] = k;
    } else {
        k = h[73];
    }
    let U;
    if (h[74] !== E || h[75] !== C || h[76] !== k) {
        U = r(Y, {
            children: [
                r(rp, {
                    color: "permission",
                    title: "Rule details",
                    children: [
                        E,
                        C,
                        k
                    ]
                }),
                x
            ]
        });
        h[74] = E;
        h[75] = C;
        h[76] = k;
        h[77] = U;
    } else {
        U = h[77];
    }
    return U;
}
const Jm = 3200;
function la(g) {
    if (g) {
        return Number.POSITIVE_INFINITY;
    }
    return Jm;
}
function Nn(g) {
    let v = w(83);
    let { section, state, onToggle, onCancel } = g;
    let h = Hi();
    let f;
    if (v[0] === S) {
        f = {
            context: "Settings"
        };
        v[0] = f;
    } else {
        f = v[0];
    }
    Ze("confirm:no", onCancel, f);
    let [x, b] = qo(section);
    let E;
    let C;
    let O;
    let M;
    let B;
    let A;
    let flexDirection;
    let marginX;
    let marginY;
    let gap;
    let q;
    let ye;
    let ee;
    if (v[1] !== h || v[2] !== section || v[3] !== state.control || v[4] !== state.enabled) {
        B = gL()[section] ?? [];
        let J;
        if (v[18] === S) {
            J = e(dA, {
                children: e(G, {
                    chord: "esc",
                    action: "cancel"
                })
            });
            v[18] = J;
        } else {
            J = v[18];
        }
        M = J;
        O = state.control === "user";
        C = rp;
        q = "permission";
        ye = "Built-in rules";
        let ue;
        if (v[19] !== section) {
            ue = Ie(section);
            v[19] = section;
            v[20] = ue;
        } else {
            ue = v[20];
        }
        let K;
        if (v[21] !== section) {
            K = ie(section);
            v[21] = section;
            v[22] = K;
        } else {
            K = v[22];
        }
        let re;
        if (v[23] !== ue || v[24] !== K) {
            re = e(n, {
                color: ue,
                children: K
            });
            v[23] = ue;
            v[24] = K;
            v[25] = re;
        } else {
            re = v[25];
        }
        const se = `${B.length} built-in ${B.length === 1 ? "rule" : "rules"} \xB7 ${state.enabled ? "in effect" : "switched off"}`;
        let he;
        if (v[26] !== se) {
            he = r(n, {
                dimColor: true,
                children: [
                    " ",
                    "·",
                    " ",
                    se
                ]
            });
            v[26] = se;
            v[27] = he;
        } else {
            he = v[27];
        }
        if (v[28] !== re || v[29] !== he) {
            ee = r(n, {
                children: [
                    re,
                    he
                ]
            });
            v[28] = re;
            v[29] = he;
            v[30] = ee;
        } else {
            ee = v[30];
        }
        E = s;
        flexDirection = "column";
        marginX = 2;
        marginY = 1;
        gap = 1;
        let z = la(h);
        A = [];
        let Ce = 0;
        for (const Q of B){
            if (Ce + Q.length > z && A.length > 0) {
                break;
            }
            A.push(Q);
            Ce = Ce + Q.length;
        }
        if (A.length === 1 && A[0].length > z) {
            let rt = A[0].length - z;
            A[0] = `${ne(A[0], z)}\u2026 +${rt} more characters \u2014 View in editor for the full text.`;
        }
        v[1] = h;
        v[2] = section;
        v[3] = state.control;
        v[4] = state.enabled;
        v[5] = E;
        v[6] = C;
        v[7] = O;
        v[8] = M;
        v[9] = B;
        v[10] = A;
        v[11] = flexDirection;
        v[12] = marginX;
        v[13] = marginY;
        v[14] = gap;
        v[15] = q;
        v[16] = ye;
        v[17] = ee;
    } else {
        E = v[5];
        C = v[6];
        O = v[7];
        M = v[8];
        B = v[9];
        A = v[10];
        flexDirection = v[11];
        marginX = v[12];
        marginY = v[13];
        gap = v[14];
        q = v[15];
        ye = v[16];
        ee = v[17];
    }
    let Re = B.length - A.length;
    let J;
    if (v[31] !== A || v[32] !== state.enabled) {
        J = A.map((Xe, He)=>r(n, {
                dimColor: true,
                strikethrough: !state.enabled,
                wrap: "wrap-trim",
                children: [
                    "- ",
                    Xe
                ]
            }, He));
        v[31] = A;
        v[32] = state.enabled;
        v[33] = J;
    } else {
        J = v[33];
    }
    let ue;
    if (v[34] !== Re) {
        ue = Re > 0 && r(n, {
            dimColor: true,
            italic: true,
            children: [
                "… +",
                Re,
                " more ",
                Re === 1 ? "rule" : "rules",
                " — run `claude auto-mode defaults` to print the full set."
            ]
        });
        v[34] = Re;
        v[35] = ue;
    } else {
        ue = v[35];
    }
    let K;
    if (v[36] !== ue || v[37] !== J) {
        K = r(Y, {
            children: [
                J,
                ue
            ]
        });
        v[36] = ue;
        v[37] = J;
        v[38] = K;
    } else {
        K = v[38];
    }
    const re = K;
    let se;
    if (v[39] !== E || v[40] !== re || v[41] !== flexDirection || v[42] !== marginX || v[43] !== marginY || v[44] !== gap) {
        se = e(E, {
            flexDirection,
            marginX,
            marginY,
            gap,
            children: re
        });
        v[39] = E;
        v[40] = re;
        v[41] = flexDirection;
        v[42] = marginX;
        v[43] = marginY;
        v[44] = gap;
        v[45] = se;
    } else {
        se = v[45];
    }
    let he;
    if (v[46] !== state.control) {
        he = state.control === "empty" && e(n, {
            italic: true,
            children: "This section has no configured rules, so the built-ins apply. Add a rule to customize it."
        });
        v[46] = state.control;
        v[47] = he;
    } else {
        he = v[47];
    }
    let Ge;
    if (v[48] !== state.control || v[49] !== state.enabled || v[50] !== state.source) {
        Ge = state.control === "otherSource" && e(n, {
            italic: true,
            children: state.enabled ? `Kept on by ${Te(state.source ?? "policySettings")} \u2014 it cannot be switched off here.` : `Replaced by rules from ${Te(state.source ?? "policySettings")}. This control follows that configuration; add your own rules to customize the section.`
        });
        v[48] = state.control;
        v[49] = state.enabled;
        v[50] = state.source;
        v[51] = Ge;
    } else {
        Ge = v[51];
    }
    let de;
    if (v[52] !== O || v[53] !== state.enabled) {
        de = O ? [
            {
                label: state.enabled ? "Disable built-in rules for this section" : "Enable built-in rules for this section",
                value: "toggle"
            }
        ] : [];
        v[52] = O;
        v[53] = state.enabled;
        v[54] = de;
    } else {
        de = v[54];
    }
    let Je;
    let et;
    if (v[55] === S) {
        Je = {
            label: `View in editor${UG() ? ` (${UG()})` : ""}`,
            value: "editor"
        };
        et = {
            label: "Cancel",
            value: "cancel"
        };
        v[55] = Je;
        v[56] = et;
    } else {
        Je = v[55];
        et = v[56];
    }
    let je;
    if (v[57] !== de) {
        je = [
            ...de,
            Je,
            et
        ];
        v[57] = de;
        v[58] = je;
    } else {
        je = v[58];
    }
    let tt;
    if (v[59] !== b || v[60] !== onCancel || v[61] !== onToggle || v[62] !== B) {
        tt = (Qe)=>{
            if (Qe === "toggle") {
                onToggle();
            } else if (Qe === "editor") {
                b(B.map(cp).join(`

`));
            } else {
                onCancel();
            }
        };
        v[59] = b;
        v[60] = onCancel;
        v[61] = onToggle;
        v[62] = B;
        v[63] = tt;
    } else {
        tt = v[63];
    }
    let Ue;
    if (v[64] !== onCancel || v[65] !== je || v[66] !== tt) {
        Ue = e(Ve, {
            options: je,
            onChange: tt,
            onCancel
        });
        v[64] = onCancel;
        v[65] = je;
        v[66] = tt;
        v[67] = Ue;
    } else {
        Ue = v[67];
    }
    let Ee;
    if (v[68] !== x) {
        Ee = x !== null && e(n, {
            dimColor: true,
            wrap: "wrap-trim",
            children: x
        });
        v[68] = x;
        v[69] = Ee;
    } else {
        Ee = v[69];
    }
    let Oe;
    if (v[70] !== C || v[71] !== se || v[72] !== he || v[73] !== Ge || v[74] !== Ue || v[75] !== Ee || v[76] !== q || v[77] !== ye || v[78] !== ee) {
        Oe = r(C, {
            color: q,
            title: ye,
            children: [
                ee,
                se,
                he,
                Ge,
                Ue,
                Ee
            ]
        });
        v[70] = C;
        v[71] = se;
        v[72] = he;
        v[73] = Ge;
        v[74] = Ue;
        v[75] = Ee;
        v[76] = q;
        v[77] = ye;
        v[78] = ee;
        v[79] = Oe;
    } else {
        Oe = v[79];
    }
    let De;
    if (v[80] !== M || v[81] !== Oe) {
        De = r(Y, {
            children: [
                Oe,
                M
            ]
        });
        v[80] = M;
        v[81] = Oe;
        v[82] = De;
    } else {
        De = v[82];
    }
    return De;
}
function Kn(g) {
    let h = w(19);
    let { entry, isLastInSection, onConfirm, onCancel } = g;
    let v;
    if (h[0] === S) {
        v = {
            context: "Confirmation"
        };
        h[0] = v;
    } else {
        v = h[0];
    }
    Ze("confirm:no", onCancel, v);
    let f;
    if (h[1] === S) {
        f = e(n, {
            bold: true,
            color: "error",
            children: "Delete auto mode rule?"
        });
        h[1] = f;
    } else {
        f = h[1];
    }
    let x;
    if (h[2] !== entry) {
        x = e(Le, {
            entry
        });
        h[2] = entry;
        h[3] = x;
    } else {
        x = h[3];
    }
    let b;
    if (h[4] !== entry || h[5] !== isLastInSection) {
        b = isLastInSection && ` This is your last ${ie(entry.section).toLowerCase()} rule \u2014 without it, only the built-in rules apply for this section.`;
        h[4] = entry;
        h[5] = isLastInSection;
        h[6] = b;
    } else {
        b = h[6];
    }
    let E;
    if (h[7] !== b) {
        E = r(n, {
            children: [
                "Are you sure you want to delete this rule? The classifier stops applying it on your next request.",
                b
            ]
        });
        h[7] = b;
        h[8] = E;
    } else {
        E = h[8];
    }
    let C;
    if (h[9] !== onCancel || h[10] !== onConfirm) {
        C = e(or, {
            focus: "cancel",
            hideIndexes: true,
            onConfirm,
            onCancel
        });
        h[9] = onCancel;
        h[10] = onConfirm;
        h[11] = C;
    } else {
        C = h[11];
    }
    let O;
    if (h[12] !== x || h[13] !== E || h[14] !== C) {
        O = r(s, {
            flexDirection: "column",
            gap: 1,
            borderStyle: "round",
            paddingLeft: 1,
            paddingRight: 1,
            borderColor: "error",
            children: [
                f,
                x,
                E,
                C
            ]
        });
        h[12] = x;
        h[13] = E;
        h[14] = C;
        h[15] = O;
    } else {
        O = h[15];
    }
    let M;
    if (h[16] === S) {
        M = e(s, {
            marginLeft: 3,
            children: e(dA, {
                children: r(be, {
                    children: [
                        e(G, {
                            chord: "enter",
                            action: "confirm"
                        }),
                        e(G, {
                            chord: "escape",
                            action: "cancel"
                        })
                    ]
                })
            })
        });
        h[16] = M;
    } else {
        M = h[16];
    }
    let B;
    if (h[17] !== O) {
        B = r(Y, {
            children: [
                O,
                M
            ]
        });
        h[17] = O;
        h[18] = B;
    } else {
        B = h[18];
    }
    return B;
}
N();
function Op(x) {
    return {
        label: ie(x),
        value: x,
        description: pa(x),
        dimDescription: true
    };
}
function inputFilter(He) {
    return He.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
}
function pa(g) {
    switch(g){
        case "allow":
            return "Actions the classifier lets run without blocking";
        case "soft_deny":
            return "Actions the classifier blocks, unless a soft allow rule or your explicit direction applies";
        case "hard_deny":
            return "Actions the classifier always blocks — soft allow rules cannot override";
        case "environment":
            return "Facts about this machine or project the classifier should take into account";
    }
}
function Ms(draftLines) {
    let i = mJo(`${eDn}${randomBytes(8).toString("hex")}.md`);
    if (i === null) {
        return {
            content: null,
            problem: null
        };
    }
    try {
        mkdirSync(dirname(i), {
            recursive: true,
            mode: 448
        });
        let d = openSync(i, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 384);
        try {
            writeSync(d, draftLines.join(`
`), null, "utf8");
        } finally{
            closeSync(d);
        }
    } catch (error) {
        return {
            content: null,
            problem: `could not write the file: ${error instanceof Error ? error.message : String(error)}`
        };
    }
    let m = Gie(i);
    if (m.error !== undefined) {
        return {
            content: null,
            problem: m.error
        };
    }
    if (m.content === null) {
        return {
            content: null,
            problem: "the editor returned no content — reopen to try again."
        };
    }
    return {
        content: m.content === null ? null : m.content.replace(/\r\n/g, `
`).replace(/\r/g, `
`),
        problem: null
    };
}
function qn(g) {
    let d = w(8);
    let { onCancel, onPick } = g;
    let a;
    if (d[0] === S) {
        a = e(s, {
            flexDirection: "column",
            marginBottom: 1,
            children: e(n, {
                children: "What kind of rule is this?"
            })
        });
        d[0] = a;
    } else {
        a = d[0];
    }
    let h;
    if (d[1] === S) {
        h = Ke.map(Op);
        d[1] = h;
    } else {
        h = d[1];
    }
    let v;
    if (d[2] !== onCancel || d[3] !== onPick) {
        v = e(Ve, {
            options: h,
            onChange: onPick,
            onCancel
        });
        d[2] = onCancel;
        d[3] = onPick;
        d[4] = v;
    } else {
        v = d[4];
    }
    let f;
    if (d[5] !== onCancel || d[6] !== v) {
        f = r(_e, {
            title: "Add auto mode rule",
            onCancel,
            color: "permission",
            children: [
                a,
                v
            ]
        });
        d[5] = onCancel;
        d[6] = v;
        d[7] = f;
    } else {
        f = d[7];
    }
    return f;
}
function Yn(g) {
    let C = w(28);
    let { section, initialValue, onCancel, onSubmit } = g;
    let [h, v] = y(initialValue ?? "");
    let [f, x] = y(initialValue ? initialValue.length : 0);
    let [b, E] = y(null);
    let O;
    if (C[0] === S) {
        O = {
            context: "Settings"
        };
        C[0] = O;
    } else {
        O = C[0];
    }
    Ze("confirm:no", onCancel, O);
    let { columns } = ke();
    let B = columns - 6;
    let A;
    if (C[1] !== onSubmit || C[2] !== section) {
        A = (k)=>{
            let U = k.trim();
            if (U.length === 0) {
                return;
            }
            let H = co(section, U);
            if (H !== null) {
                E(H);
                return;
            }
            onSubmit(U);
        };
        C[1] = onSubmit;
        C[2] = section;
        C[3] = A;
    } else {
        A = C[3];
    }
    let pe = A;
    let q = initialValue !== undefined;
    let ye = section === "environment" ? "Deploys from this machine only reach the staging cluster." : "Database Writes: UPDATE statements against the local dev database.";
    let ee;
    if (C[4] !== section) {
        ee = ie(section).toLowerCase();
        C[4] = section;
        C[5] = ee;
    } else {
        ee = C[5];
    }
    const J = `${q ? "Edit" : "Add"} ${ee} rule`;
    let ue;
    if (C[6] === S) {
        ue = e(G, {
            chord: "enter",
            action: "save"
        });
        C[6] = ue;
    } else {
        ue = C[6];
    }
    let K;
    if (C[7] === S) {
        K = r(be, {
            children: [
                ue,
                e(G, {
                    chord: EIe() ? "shift+enter" : "ctrl+j",
                    action: "new line"
                }),
                e(G, {
                    chord: "escape",
                    action: "cancel"
                })
            ]
        });
        C[7] = K;
    } else {
        K = C[7];
    }
    let re;
    if (C[8] === S) {
        re = e(JP, {});
        C[8] = re;
    } else {
        re = C[8];
    }
    let se;
    if (C[9] !== ye) {
        se = r(n, {
            children: [
                "Write the rule as a plain sentence. A short label up front helps, e.g.,",
                re,
                e(n, {
                    bold: true,
                    children: ye
                })
            ]
        });
        C[9] = ye;
        C[10] = se;
    } else {
        se = C[10];
    }
    let he;
    if (C[11] === S) {
        he = (z)=>{
            E(null);
            v(z);
        };
        C[11] = he;
    } else {
        he = C[11];
    }
    let Ce;
    if (C[12] !== f || C[13] !== pe || C[14] !== h || C[15] !== B) {
        Ce = e(s, {
            borderDimColor: true,
            borderStyle: "round",
            marginY: 1,
            paddingLeft: 1,
            children: e(Sr, {
                showCursor: true,
                focus: true,
                multiline: true,
                disableBackslashReturn: true,
                maxVisibleLines: 8,
                inputFilter,
                value: h,
                onChange: he,
                onSubmit: pe,
                placeholder: `Enter rule${te.ellipsis}`,
                columns: B,
                cursorOffset: f,
                onChangeCursorOffset: x
            })
        });
        C[12] = f;
        C[13] = pe;
        C[14] = h;
        C[15] = B;
        C[16] = Ce;
    } else {
        Ce = C[16];
    }
    let Q;
    if (C[17] !== b) {
        Q = b !== null && e(n, {
            color: "error",
            wrap: "wrap-trim",
            children: b
        });
        C[17] = b;
        C[18] = Q;
    } else {
        Q = C[18];
    }
    let rt;
    if (C[19] === S) {
        rt = e(n, {
            dimColor: true,
            children: "Saved to your user settings file"
        });
        C[19] = rt;
    } else {
        rt = C[19];
    }
    let Re;
    if (C[20] !== Ce || C[21] !== Q || C[22] !== se) {
        Re = r(s, {
            flexDirection: "column",
            children: [
                se,
                Ce,
                Q,
                rt
            ]
        });
        C[20] = Ce;
        C[21] = Q;
        C[22] = se;
        C[23] = Re;
    } else {
        Re = C[23];
    }
    let Xe;
    if (C[24] !== onCancel || C[25] !== Re || C[26] !== J) {
        Xe = e(_e, {
            title: J,
            onCancel,
            color: "permission",
            isCancelActive: false,
            inputGuide: K,
            children: Re
        });
        C[24] = onCancel;
        C[25] = Re;
        C[26] = J;
        C[27] = Xe;
    } else {
        Xe = C[27];
    }
    return Xe;
}
function Nh(Wy) {
    return Wy.toolPermissionContext;
}
function Hh() {
    return me();
}
function Uh() {
    return ve();
}
function ey(Lu) {
    return [
        _(Lu),
        Lu
    ];
}
function Wh(Ky) {
    return new Map(Ky.map(ey));
}
function Kh(jy) {
    return jy.ruleString;
}
function jh(Qy) {
    return $0(Qy);
}
function Qh(qy) {
    return qy !== undefined;
}
function qh(Yy) {
    return Yy.display;
}
function Yh(zy) {
    return zy.display;
}
function zh(Xy) {
    return ge.bold(Xy.text);
}
function Xh(Gy) {
    return Gy.value !== "add-new-rule";
}
function Gh(Jy) {
    return Jy.value;
}
function Jh(Zy) {
    return Zy.replace(/\n+$/, "");
}
function Zh(eg) {
    return eg.section !== "environment";
}
function li(g) {
    let m = w(4);
    let { rule } = g;
    let d;
    if (m[0] !== rule.source) {
        d = VHe(rule.source);
        m[0] = rule.source;
        m[1] = d;
    } else {
        d = m[1];
    }
    const a = `From ${d}`;
    let h;
    if (m[2] !== a) {
        h = e(n, {
            dimColor: true,
            children: a
        });
        m[2] = a;
        m[3] = h;
    } else {
        h = m[3];
    }
    return h;
}
function ba(ruleBehavior) {
    switch(ruleBehavior){
        case "allow":
            return "allowed";
        case "deny":
            return "denied";
        case "ask":
            return "ask";
    }
}
function ai(g) {
    let a = w(37);
    let { rule, onDelete, onCancel } = g;
    let h;
    if (a[0] === S) {
        h = {
            context: "Confirmation"
        };
        a[0] = h;
    } else {
        h = a[0];
    }
    Ze("confirm:no", onCancel, h);
    let v;
    if (a[1] !== rule.ruleValue) {
        v = $0(_n(rule.ruleValue));
        a[1] = rule.ruleValue;
        a[2] = v;
    } else {
        v = a[2];
    }
    let f;
    if (a[3] !== v) {
        f = e(n, {
            bold: true,
            children: v
        });
        a[3] = v;
        a[4] = f;
    } else {
        f = a[4];
    }
    let x;
    if (a[5] !== rule.ruleValue) {
        x = e(Ut, {
            ruleValue: rule.ruleValue
        });
        a[5] = rule.ruleValue;
        a[6] = x;
    } else {
        x = a[6];
    }
    let b;
    if (a[7] !== rule) {
        b = e(li, {
            rule
        });
        a[7] = rule;
        a[8] = b;
    } else {
        b = a[8];
    }
    let E;
    if (a[9] !== f || a[10] !== x || a[11] !== b) {
        E = r(s, {
            flexDirection: "column",
            marginX: 2,
            children: [
                f,
                x,
                b
            ]
        });
        a[9] = f;
        a[10] = x;
        a[11] = b;
        a[12] = E;
    } else {
        E = a[12];
    }
    let C = E;
    let O;
    if (a[13] === S) {
        O = e(s, {
            marginLeft: 3,
            children: e(dA, {
                children: e(G, {
                    chord: "escape",
                    action: "cancel"
                })
            })
        });
        a[13] = O;
    } else {
        O = a[13];
    }
    let M = O;
    if (rule.source === "policySettings") {
        let B;
        if (a[14] === S) {
            B = r(n, {
                italic: true,
                children: [
                    "This rule is configured by managed settings and cannot be modified.",
                    `
`,
                    "Contact your system administrator for more information."
                ]
            });
            a[14] = B;
        } else {
            B = a[14];
        }
        let A;
        if (a[15] !== C) {
            A = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            C,
                            B
                        ]
                    }),
                    M
                ]
            });
            a[15] = C;
            a[16] = A;
        } else {
            A = a[16];
        }
        return A;
    }
    if (rule.source === "flagSettings" || rule.source === "command") {
        const B = rule.source === "flagSettings" ? "the --settings flag" : "a slash command";
        let A;
        if (a[17] !== B) {
            A = r(n, {
                italic: true,
                children: [
                    "This rule comes from a read-only source (",
                    B,
                    ") and cannot be modified here."
                ]
            });
            a[17] = B;
            a[18] = A;
        } else {
            A = a[18];
        }
        let k;
        if (a[19] !== C || a[20] !== A) {
            k = r(Y, {
                children: [
                    r(rp, {
                        color: "permission",
                        title: "Rule details",
                        children: [
                            C,
                            A
                        ]
                    }),
                    M
                ]
            });
            a[19] = C;
            a[20] = A;
            a[21] = k;
        } else {
            k = a[21];
        }
        return k;
    }
    let B;
    if (a[22] !== rule.ruleBehavior) {
        B = ba(rule.ruleBehavior);
        a[22] = rule.ruleBehavior;
        a[23] = B;
    } else {
        B = a[23];
    }
    let A;
    if (a[24] !== B) {
        A = r(n, {
            bold: true,
            color: "error",
            children: [
                "Delete ",
                B,
                " tool?"
            ]
        });
        a[24] = B;
        a[25] = A;
    } else {
        A = a[25];
    }
    let k;
    if (a[26] === S) {
        k = e(n, {
            children: "Are you sure you want to delete this permission rule?"
        });
        a[26] = k;
    } else {
        k = a[26];
    }
    let U;
    if (a[27] !== onCancel || a[28] !== onDelete) {
        U = e(or, {
            focus: "cancel",
            hideIndexes: true,
            onConfirm: onDelete,
            onCancel
        });
        a[27] = onCancel;
        a[28] = onDelete;
        a[29] = U;
    } else {
        U = a[29];
    }
    let H;
    if (a[30] !== C || a[31] !== U || a[32] !== A) {
        H = r(s, {
            flexDirection: "column",
            gap: 1,
            borderStyle: "round",
            paddingLeft: 1,
            paddingRight: 1,
            borderColor: "error",
            children: [
                A,
                C,
                k,
                U
            ]
        });
        a[30] = C;
        a[31] = U;
        a[32] = A;
        a[33] = H;
    } else {
        H = a[33];
    }
    let pe;
    if (a[34] === S) {
        pe = e(s, {
            marginLeft: 3,
            children: e(dA, {
                children: r(be, {
                    children: [
                        e(G, {
                            chord: "enter",
                            action: "confirm"
                        }),
                        e(G, {
                            chord: "escape",
                            action: "cancel"
                        })
                    ]
                })
            })
        });
        a[34] = pe;
    } else {
        pe = a[34];
    }
    let q;
    if (a[35] !== H) {
        q = r(Y, {
            children: [
                H,
                pe
            ]
        });
        a[35] = H;
        a[36] = q;
    } else {
        q = a[36];
    }
    return q;
}
function ui(g) {
    let A = w(37);
    let { options, searchQuery, isSearchMode, isFocused, onSelect, onCancel, lastFocusedRuleKey, cursorOffset, onHeaderFocusChange } = g;
    let E = xmt();
    let { headerFocused, focusHeader, blurHeader } = _y();
    let B = R(null);
    let k;
    let U;
    if (A[0] !== blurHeader || A[1] !== headerFocused || A[2] !== isSearchMode) {
        k = ()=>{
            if (isSearchMode && headerFocused) {
                blurHeader(B.current);
            }
        };
        U = [
            isSearchMode,
            headerFocused,
            blurHeader
        ];
        A[0] = blurHeader;
        A[1] = headerFocused;
        A[2] = isSearchMode;
        A[3] = k;
        A[4] = U;
    } else {
        k = A[3];
        U = A[4];
    }
    P(k, U);
    $h(B, isSearchMode);
    let H = headerFocused && !isSearchMode;
    let pe;
    let q;
    if (A[5] !== H || A[6] !== onHeaderFocusChange) {
        pe = ()=>{
            onHeaderFocusChange(H);
        };
        q = [
            H,
            onHeaderFocusChange
        ];
        A[5] = H;
        A[6] = onHeaderFocusChange;
        A[7] = pe;
        A[8] = q;
    } else {
        pe = A[7];
        q = A[8];
    }
    P(pe, q);
    const ye = isSearchMode ? 0 : undefined;
    let ee;
    if (A[9] !== blurHeader || A[10] !== isSearchMode) {
        ee = isSearchMode ? ()=>blurHeader(B.current) : undefined;
        A[9] = blurHeader;
        A[10] = isSearchMode;
        A[11] = ee;
    } else {
        ee = A[11];
    }
    const J = isSearchMode && !headerFocused;
    let ue;
    if (A[12] !== cursorOffset || A[13] !== isFocused || A[14] !== searchQuery || A[15] !== J || A[16] !== E) {
        ue = e(s, {
            marginBottom: 1,
            flexDirection: "column",
            children: e(nb, {
                query: searchQuery,
                isFocused: J,
                isTerminalFocused: isFocused,
                width: E,
                cursorOffset
            })
        });
        A[12] = cursorOffset;
        A[13] = isFocused;
        A[14] = searchQuery;
        A[15] = J;
        A[16] = E;
        A[17] = ue;
    } else {
        ue = A[17];
    }
    let K;
    if (A[18] !== blurHeader || A[19] !== headerFocused || A[20] !== onHeaderFocusChange || A[21] !== onSelect) {
        K = (re)=>{
            if (headerFocused) {
                blurHeader();
                onHeaderFocusChange(false);
            }
            onSelect(re);
        };
        A[18] = blurHeader;
        A[19] = headerFocused;
        A[20] = onHeaderFocusChange;
        A[21] = onSelect;
        A[22] = K;
    } else {
        K = A[22];
    }
    const se = Math.min(10, options.length);
    const he = isSearchMode || headerFocused;
    const z = !isSearchMode;
    let Ce;
    if (A[23] !== focusHeader || A[24] !== lastFocusedRuleKey || A[25] !== onCancel || A[26] !== options || A[27] !== he || A[28] !== z || A[29] !== K || A[30] !== se) {
        Ce = e(Ve, {
            options,
            onChange: K,
            onCancel,
            visibleOptionCount: se,
            isDisabled: he,
            hidePromptWhileDisabled: true,
            pointerWhileDisabled: z,
            defaultFocusValue: lastFocusedRuleKey,
            onUpFromFirstItem: focusHeader
        });
        A[23] = focusHeader;
        A[24] = lastFocusedRuleKey;
        A[25] = onCancel;
        A[26] = options;
        A[27] = he;
        A[28] = z;
        A[29] = K;
        A[30] = se;
        A[31] = Ce;
    } else {
        Ce = A[31];
    }
    let Q;
    if (A[32] !== Ce || A[33] !== ye || A[34] !== ee || A[35] !== ue) {
        Q = r(s, {
            ref: B,
            flexDirection: "column",
            tabIndex: ye,
            onFocus: ee,
            children: [
                ue,
                Ce
            ]
        });
        A[32] = Ce;
        A[33] = ye;
        A[34] = ee;
        A[35] = ue;
        A[36] = Q;
    } else {
        Q = A[36];
    }
    return Q;
}
function Jt(g) {
    let i = w(23);
    let m;
    let d;
    let a;
    let h;
    if (i[0] !== g) {
        ({ tab: h, getRulesOptions: m, handleToolSelect: d, ...a } = g);
        i[0] = g;
        i[1] = m;
        i[2] = d;
        i[3] = a;
        i[4] = h;
    } else {
        m = i[1];
        d = i[2];
        a = i[3];
        h = i[4];
    }
    const flexShrink = h === "allow" ? 0 : undefined;
    let f;
    if (i[5] === S) {
        f = {
            allow: "Claude Code won't ask before using allowed tools.",
            ask: "Claude Code will always ask for confirmation before using these tools.",
            deny: "Claude Code will always reject requests to use denied tools."
        };
        i[5] = f;
    } else {
        f = i[5];
    }
    const x = f[h];
    let b;
    if (i[6] !== x) {
        b = e(n, {
            children: x
        });
        i[6] = x;
        i[7] = b;
    } else {
        b = i[7];
    }
    let E;
    if (i[8] !== m || i[9] !== a.searchQuery || i[10] !== h) {
        E = m(h, a.searchQuery);
        i[8] = m;
        i[9] = a.searchQuery;
        i[10] = h;
        i[11] = E;
    } else {
        E = i[11];
    }
    let onSelect;
    if (i[12] !== d || i[13] !== h) {
        onSelect = (O)=>d(O, h);
        i[12] = d;
        i[13] = h;
        i[14] = onSelect;
    } else {
        onSelect = i[14];
    }
    let M;
    if (i[15] !== a || i[16] !== E.options || i[17] !== onSelect) {
        M = e(ui, {
            options: E.options,
            onSelect,
            ...a
        });
        i[15] = a;
        i[16] = E.options;
        i[17] = onSelect;
        i[18] = M;
    } else {
        M = i[18];
    }
    let B;
    if (i[19] !== flexShrink || i[20] !== b || i[21] !== M) {
        B = r(s, {
            flexDirection: "column",
            flexShrink,
            children: [
                b,
                M
            ]
        });
        i[19] = flexShrink;
        i[20] = b;
        i[21] = M;
        i[22] = B;
    } else {
        B = i[22];
    }
    return B;
}
function di(g) {
    let f = w(226);
    let { onExit, initialTab, onRetryDenials } = g;
    let { storageV5 } = Pe();
    let { getDenials, removeDenial } = ove();
    let x;
    if (f[0] !== getDenials) {
        x = getDenials();
        f[0] = getDenials;
        f[1] = x;
    } else {
        x = f[1];
    }
    let b = x.length > 0;
    let defaultTab = initialTab ?? (b ? "recent" : "allow");
    let [C, onTabChange] = y(defaultTab);
    let M;
    if (f[2] === S) {
        M = [];
        f[2] = M;
    } else {
        M = f[2];
    }
    let [B, A] = y(M);
    let k = V(Nh);
    let U = Hn();
    let H = Qc();
    let [pe] = hr();
    let q;
    if (f[3] === S) {
        q = {
            approved: new Set,
            retry: new Set,
            denials: []
        };
        f[3] = q;
    } else {
        q = f[3];
    }
    let ye = R(q);
    let ee;
    if (f[4] === S) {
        ee = (J)=>{
            ye.current = J;
        };
        f[4] = ee;
    } else {
        ee = f[4];
    }
    let onStateChange = ee;
    let [K, re] = y();
    let [se, he] = y();
    let [z, Ce] = y(null);
    let [Q, rt] = y(null);
    let [Re, Xe] = y(false);
    let [He, Ge] = y(null);
    let [de, Je] = y(false);
    let et = nt();
    let [je, tt] = y();
    let [Qe, Ue] = y(Hh);
    let [Ee, Oe] = y(Uh);
    let [De, X] = y(null);
    let [$e, Co] = y(!b);
    let Et;
    if (f[5] === S) {
        Et = (tn)=>{
            Co(tn);
        };
        f[5] = Et;
    } else {
        Et = f[5];
    }
    let onHeaderFocusChange = Et;
    let on = Wh;
    let allow;
    if (f[6] !== k) {
        allow = on(NM(k));
        f[6] = k;
        f[7] = allow;
    } else {
        allow = f[7];
    }
    let deny;
    if (f[8] !== k) {
        deny = on(Bc(k));
        f[8] = k;
        f[9] = deny;
    } else {
        deny = f[9];
    }
    let ask;
    if (f[10] !== k) {
        ask = on(xm(k));
        f[10] = k;
        f[11] = ask;
    } else {
        ask = f[11];
    }
    let At;
    if (f[12] !== allow || f[13] !== deny || f[14] !== ask) {
        At = {
            allow,
            deny,
            ask
        };
        f[12] = allow;
        f[13] = deny;
        f[14] = ask;
        f[15] = At;
    } else {
        At = f[15];
    }
    let ur = At;
    let Pt;
    if (f[16] !== ur) {
        Pt = (Ot, $t)=>{
            let wo = $t === undefined ? "" : $t;
            let rulesByKey = Ot === "allow" || Ot === "deny" || Ot === "ask" ? ur[Ot] : new Map;
            let Eo = [];
            if (Ot !== "workspace" && Ot !== "recent" && Ot !== "automode" && !wo) {
                Eo.push({
                    label: `Add a new rule${te.ellipsis}`,
                    value: "add-new-rule"
                });
            }
            let iu = Array.from(rulesByKey.keys()).sort((ci, mi)=>{
                let pi = rulesByKey.get(ci);
                let dr = rulesByKey.get(mi);
                if (pi && dr) {
                    let cr = _n(pi.ruleValue).toLowerCase();
                    let fi = _n(dr.ruleValue).toLowerCase();
                    return cr.localeCompare(fi);
                }
                return 0;
            });
            let hi = wo.toLowerCase();
            let Bt = [];
            for (const ruleKey of iu){
                let _t = rulesByKey.get(ruleKey);
                if (_t) {
                    let ruleString = _n(_t.ruleValue);
                    if (wo && !ruleString.toLowerCase().includes(hi)) {
                        continue;
                    }
                    Bt.push({
                        ruleKey,
                        ruleString
                    });
                }
            }
            let lu = VB(Bt.map(Kh), jh);
            for (const [au, nn] of Bt.entries()){
                Eo.push({
                    label: lu[au],
                    value: nn.ruleKey
                });
            }
            return {
                options: Eo,
                rulesByKey
            };
        };
        f[16] = ur;
        f[17] = Pt;
    } else {
        Pt = f[17];
    }
    let getRulesOptions = Pt;
    let Vt = !K && !z && !Q && !Re && !He && !De;
    const $t = Vt && de;
    let It;
    if (f[18] === S) {
        It = ()=>{
            Je(false);
        };
        f[18] = It;
    } else {
        It = f[18];
    }
    let gi;
    if (f[19] !== $t) {
        gi = {
            isActive: $t,
            onExit: It
        };
        f[19] = $t;
        f[20] = gi;
    } else {
        gi = f[20];
    }
    let { query, setQuery, cursorOffset, handleKeyDown, handlePaste } = yy(gi);
    let mr;
    if (f[21] !== de || f[22] !== Vt || f[23] !== handleKeyDown || f[24] !== setQuery) {
        mr = (Ae)=>{
            if (!Vt) {
                return;
            }
            if (de) {
                handleKeyDown(Ae);
                return;
            }
            if (Ae.ctrl || Ae.meta) {
                return;
            }
            if (Ae.key === "/") {
                Ae.preventDefault();
                Je(true);
                setQuery("");
            } else if (!Ae.defaultPrevented && Ae.key.length === 1 && Ae.key !== "j" && Ae.key !== "k" && Ae.key !== "m" && Ae.key !== "i" && Ae.key !== "r" && Ae.key !== " ") {
                Ae.preventDefault();
                Je(true);
                setQuery(Ae.key);
            }
        };
        f[21] = de;
        f[22] = Vt;
        f[23] = handleKeyDown;
        f[24] = setQuery;
        f[25] = mr;
    } else {
        mr = f[25];
    }
    let Mo = mr;
    let rn;
    if (f[26] !== getRulesOptions) {
        rn = (Po, pr)=>{
            let { rulesByKey } = getRulesOptions(pr);
            if (Po === "add-new-rule") {
                Ce(pr);
                return;
            } else {
                re(rulesByKey.get(Po));
                return;
            }
        };
        f[26] = getRulesOptions;
        f[27] = rn;
    } else {
        rn = f[27];
    }
    let handleToolSelect = rn;
    let vi;
    if (f[28] === S) {
        vi = ()=>{
            Ce(null);
        };
        f[28] = vi;
    } else {
        vi = f[28];
    }
    let du = vi;
    let bi;
    if (f[29] === S) {
        bi = (fr, ruleBehavior)=>{
            rt({
                ruleValue: fr,
                ruleBehavior
            });
            Ce(null);
        };
        f[29] = bi;
    } else {
        bi = f[29];
    }
    let onSubmit = bi;
    let Ci;
    if (f[30] !== pe) {
        Ci = (pu, ko)=>{
            rt(null);
            for (const ln of pu){
                A((Ri)=>[
                        ...Ri,
                        `Added ${ln.ruleBehavior} rule ${ge.bold($0(_n(ln.ruleValue)))}`
                    ]);
            }
            for (const To of ko){
                let fu = To.shadowType === "deny" ? "blocked" : "shadowed";
                A((hu)=>[
                        ...hu,
                        Wn("warning", pe)(`${te.warning} Warning: ${$0(_n(To.rule.ruleValue))} is ${fu}`),
                        ge.dim(`  ${To.reason}`),
                        ge.dim(`  Fix: ${To.fix}`)
                    ]);
            }
        };
        f[30] = pe;
        f[31] = Ci;
    } else {
        Ci = f[31];
    }
    let onAddRules = Ci;
    let yu;
    if (f[32] === S) {
        yu = ()=>{
            rt(null);
        };
        f[32] = yu;
    } else {
        yu = f[32];
    }
    let ty = yu;
    let gu;
    if (f[33] === S) {
        gu = ()=>Xe(true);
        f[33] = gu;
    } else {
        gu = f[33];
    }
    let onRequestAddDirectory = gu;
    let vu;
    if (f[34] === S) {
        vu = (ny)=>Ge(ny);
        f[34] = vu;
    } else {
        vu = f[34];
    }
    let onRequestRemoveDirectory = vu;
    let bu;
    if (f[35] !== B || f[36] !== onExit || f[37] !== onRetryDenials || f[38] !== removeDenial) {
        bu = ()=>{
            let ye_current = ye.current;
            let Cu = (sy)=>Array.from(sy).map((iy)=>ye_current.denials[iy]).filter(Qh);
            let Ru = Cu(ye_current.retry);
            if (Ru.length > 0) {
                let wi = Ru.map(qh);
                onRetryDenials(wi);
                onExit(undefined, {
                    shouldQuery: true,
                    metaMessages: [
                        `Permission granted for: ${wi.join(", ")}. You may now retry ${wi.length === 1 ? "this command" : "these commands"} if you would like.`
                    ]
                });
                return;
            }
            let Ei = Cu(ye_current.approved);
            if (Ei.length > 0 || B.length > 0) {
                for (const ly of Ei){
                    removeDenial(ly);
                }
                let an = Ei.map(Yh);
                let ay = fQt(an, {
                    maxUnits
                });
                let uy = an.length > 0 ? [
                    `Approved ${ay.map(zh).join(", ")}`
                ] : [];
                onExit([
                    ...uy,
                    ...B
                ].join(`
`), an.length > 0 ? {
                    metaMessages: [
                        `Permission granted for: ${an.join(", ")}. You may now retry ${an.length === 1 ? "this command" : "these commands"} if you would like.`
                    ]
                } : undefined);
            } else {
                onExit("Permissions dialog dismissed", {
                    display: "system"
                });
            }
        };
        f[35] = B;
        f[36] = onExit;
        f[37] = onRetryDenials;
        f[38] = removeDenial;
        f[39] = bu;
    } else {
        bu = f[39];
    }
    let no = bu;
    const Mi = Vt && !de;
    let Su;
    if (f[40] !== Mi) {
        Su = {
            context: "Settings",
            isActive: Mi
        };
        f[40] = Mi;
        f[41] = Su;
    } else {
        Su = f[41];
    }
    Ze("confirm:no", no, Su);
    let wu;
    if (f[42] !== B || f[43] !== onExit) {
        wu = ()=>{
            if (B.length > 0) {
                onExit(B.join(`
`));
                return;
            }
            onExit("Permissions dialog dismissed", {
                display: "system"
            });
        };
        f[42] = B;
        f[43] = onExit;
        f[44] = wu;
    } else {
        wu = f[44];
    }
    let Do = Yo(wu, undefined, Vt);
    let Eu;
    if (f[45] !== getRulesOptions || f[46] !== K || f[47] !== U || f[48] !== storageV5 || f[49] !== k) {
        Eu = ()=>{
            if (!K) {
                return;
            }
            let { options } = getRulesOptions(K.ruleBehavior);
            let cy = _(K);
            let yr = options.filter(Xh).map(Gh);
            let un = yr.indexOf(cy);
            let Pi;
            if (un !== -1) {
                if (un < yr.length - 1) {
                    Pi = yr[un + 1];
                } else if (un > 0) {
                    Pi = yr[un - 1];
                }
            }
            he(Pi);
            let Au = $0(_n(K.ruleValue));
            let K_ruleBehavior = K.ruleBehavior;
            nor({
                rule: K,
                initialContext: k,
                setToolPermissionContext (py) {
                    U((fy)=>({
                            ...fy,
                            toolPermissionContext: py
                        }));
                },
                storageV5
            }).then(()=>{
                A((hy)=>[
                        ...hy,
                        `Deleted ${K_ruleBehavior} rule ${ge.bold(Au)}`
                    ]);
            }).catch((gy)=>{
                c(gy);
                A((vy)=>[
                        ...vy,
                        `Could not delete ${ge.bold(Au)} \u2014 the rule is unchanged`
                    ]);
            });
            re(undefined);
        };
        f[45] = getRulesOptions;
        f[46] = K;
        f[47] = U;
        f[48] = storageV5;
        f[49] = k;
        f[50] = Eu;
    } else {
        Eu = f[50];
    }
    let Ti = Eu;
    let Mu;
    if (f[51] !== storageV5) {
        Mu = (draftLines, expected)=>{
            if (ux() === undefined) {
                X({
                    mode: "env-problem",
                    problem: "No editor is configured — set $VISUAL or $EDITOR, then reopen /permissions to edit the environment.",
                    draftLines,
                    expected,
                    canReopen: false
                });
                return;
            }
            let so = Ms(draftLines);
            if (so.problem !== null) {
                X({
                    mode: "env-problem",
                    problem: so.problem,
                    draftLines,
                    expected,
                    canReopen: true
                });
                return;
            }
            if (so.content === null) {
                X({
                    mode: "env-problem",
                    problem: "The environment could not be opened for editing: this session has no session directory to hold the working file. Edit autoMode.environment in your settings file directly.",
                    draftLines,
                    expected,
                    canReopen: false
                });
                return;
            }
            let Pu = Jh;
            if (Pu(so.content) === Pu(draftLines.join(`
`))) {
                X({
                    mode: "env-problem",
                    problem: 'No changes detected — nothing was saved. If your editor opened in a separate window without waiting, configure it to wait (for example "code --wait"), then reopen.',
                    draftLines,
                    expected,
                    canReopen: true
                });
                return;
            }
            let ku = zr(so.content);
            if (ku !== null) {
                X({
                    mode: "env-problem",
                    problem: ku,
                    draftLines: so.content.split(`
`),
                    expected,
                    canReopen: true
                });
                return;
            }
            qr(so.content.split(`
`), expected, storageV5).then(()=>{
                Oe(ve());
                Ue(me());
                A((by)=>[
                        ...by,
                        expected.length === 0 ? "Replaced the built-in auto mode environment with your own document" : "Saved your auto mode environment document"
                    ]);
            }).catch((Di)=>{
                t(`auto mode env save failed: ${String(Di)}`, {
                    level: "error"
                });
                Oe(ve());
                Ue(me());
                A((Cy)=>[
                        ...Cy,
                        `Could not save the environment \u2014 ${Di instanceof Error ? Di.message : "nothing was changed"}`
                    ]);
            });
            X(null);
        };
        f[51] = storageV5;
        f[52] = Mu;
    } else {
        Mu = f[52];
    }
    let kt = Mu;
    let Tu;
    if (f[53] !== kt) {
        Tu = ()=>{
            let Fi = Yr();
            if (Fi.length === 0 && me().environment.enabled) {
                X({
                    mode: "env-first-confirm"
                });
            } else {
                kt(Fi, Fi);
            }
        };
        f[53] = kt;
        f[54] = Tu;
    } else {
        Tu = f[54];
    }
    let Oo = Tu;
    if (De?.mode === "pick-section") {
        let L;
        if (f[55] === S) {
            L = ()=>X(null);
            f[55] = L;
        } else {
            L = f[55];
        }
        let W;
        if (f[56] !== Oo) {
            W = e(qn, {
                onCancel: L,
                onPick: (Du)=>{
                    if (Du === "environment" && Xte()) {
                        Oo();
                        return;
                    }
                    X({
                        mode: "input",
                        section: Du
                    });
                }
            });
            f[56] = Oo;
            f[57] = W;
        } else {
            W = f[57];
        }
        return W;
    }
    if (De?.mode === "env-first-confirm") {
        let L;
        let W;
        if (f[58] === S) {
            L = ()=>X(null);
            W = e(n, {
                wrap: "wrap-trim",
                children: "Writing your own environment replaces the built-in default document — the classifier context that defines trusted hosts, sensitive targets, and repository scope. The editor starts from the full default text so you can edit rather than rewrite; deleting all your environment entries later restores the default."
            });
            f[58] = L;
            f[59] = W;
        } else {
            L = f[58];
            W = f[59];
        }
        let j;
        if (f[60] !== kt) {
            j = ()=>kt(gL().environment ?? [], []);
            f[60] = kt;
            f[61] = j;
        } else {
            j = f[61];
        }
        let ce;
        if (f[62] === S) {
            ce = ()=>X(null);
            f[62] = ce;
        } else {
            ce = f[62];
        }
        let we;
        if (f[63] !== j) {
            we = r(_e, {
                title: "Replace the built-in environment?",
                color: "permission",
                onCancel: L,
                children: [
                    W,
                    e(or, {
                        focus: "cancel",
                        hideIndexes: true,
                        onConfirm: j,
                        onCancel: ce
                    })
                ]
            });
            f[63] = j;
            f[64] = we;
        } else {
            we = f[64];
        }
        return we;
    }
    if (De?.mode === "env-problem") {
        let { problem, draftLines, expected, canReopen } = De;
        let L;
        if (f[65] === S) {
            L = ()=>X(null);
            f[65] = L;
        } else {
            L = f[65];
        }
        let W;
        if (f[66] !== problem) {
            W = e(n, {
                color: "error",
                wrap: "wrap-trim",
                children: problem
            });
            f[66] = problem;
            f[67] = W;
        } else {
            W = f[67];
        }
        let j;
        if (f[68] !== canReopen) {
            j = canReopen ? [
                {
                    label: `Reopen in ${UG() ?? "your editor"}`,
                    value: "reopen"
                }
            ] : [];
            f[68] = canReopen;
            f[69] = j;
        } else {
            j = f[69];
        }
        let ce;
        if (f[70] === S) {
            ce = {
                label: "Cancel",
                value: "cancel"
            };
            f[70] = ce;
        } else {
            ce = f[70];
        }
        let we;
        if (f[71] !== j) {
            we = [
                ...j,
                ce
            ];
            f[71] = j;
            f[72] = we;
        } else {
            we = f[72];
        }
        let st;
        if (f[73] !== draftLines || f[74] !== expected || f[75] !== kt) {
            st = (Ry)=>{
                if (Ry === "reopen") {
                    kt(draftLines, expected);
                } else {
                    X(null);
                }
            };
            f[73] = draftLines;
            f[74] = expected;
            f[75] = kt;
            f[76] = st;
        } else {
            st = f[76];
        }
        let io;
        if (f[77] === S) {
            io = ()=>X(null);
            f[77] = io;
        } else {
            io = f[77];
        }
        let lo;
        if (f[78] !== we || f[79] !== st) {
            lo = e(Ve, {
                options: we,
                onChange: st,
                onCancel: io
            });
            f[78] = we;
            f[79] = st;
            f[80] = lo;
        } else {
            lo = f[80];
        }
        let ao;
        if (f[81] !== W || f[82] !== lo) {
            ao = r(_e, {
                title: "Edit environment",
                color: "permission",
                onCancel: L,
                children: [
                    W,
                    lo
                ]
            });
            f[81] = W;
            f[82] = lo;
            f[83] = ao;
        } else {
            ao = f[83];
        }
        return ao;
    }
    if (De?.mode === "input") {
        let { section, editing } = De;
        let L;
        if (f[84] !== section) {
            L = ie(section).toLowerCase();
            f[84] = section;
            f[85] = L;
        } else {
            L = f[85];
        }
        let gr = L;
        const initialValue = editing?.text;
        let j;
        if (f[86] !== editing) {
            j = ()=>X(editing ? {
                    mode: "details",
                    entry: editing
                } : null);
            f[86] = editing;
            f[87] = j;
        } else {
            j = f[87];
        }
        let ce;
        if (f[88] !== editing || f[89] !== gr || f[90] !== section || f[91] !== storageV5) {
            ce = (xy)=>{
                let $o = jt(xy);
                if (editing && $o === editing.text) {
                    X(null);
                    return;
                }
                if (editing) {
                    es(section, editing.index, editing.text, $o, storageV5).then(()=>{
                        Oe(ve());
                        Ue(me());
                        A((Sy)=>[
                                ...Sy,
                                `Updated auto mode ${gr} rule ${ge.bold(Ai(Bi($o).text))}`
                            ]);
                    }).catch((Li)=>{
                        t(`auto mode rule update failed: ${String(Li)}`, {
                            level: "error"
                        });
                        Oe(ve());
                        Ue(me());
                        A((wy)=>[
                                ...wy,
                                `Could not update ${ge.bold(Ai(Bi(editing.text).text))} \u2014 ${Li instanceof Error ? Li.message : "the rule is unchanged"}`
                            ]);
                    });
                } else {
                    Jr(section, $o, storageV5).then(()=>{
                        Oe(ve());
                        Ue(me());
                        A((Ey)=>[
                                ...Ey,
                                `Added auto mode ${gr} rule ${ge.bold(Ai(Bi($o).text))}`
                            ]);
                    }).catch((Ni)=>{
                        t(`auto mode rule add failed: ${String(Ni)}`, {
                            level: "error"
                        });
                        Oe(ve());
                        Ue(me());
                        A((Ay)=>[
                                ...Ay,
                                `Could not add ${ge.bold(Ai(Bi($o).text))} \u2014 ${Ni instanceof Error ? Ni.message : "nothing was saved"}`
                            ]);
                    });
                }
                X(null);
            };
            f[88] = editing;
            f[89] = gr;
            f[90] = section;
            f[91] = storageV5;
            f[92] = ce;
        } else {
            ce = f[92];
        }
        let we;
        if (f[93] !== section || f[94] !== initialValue || f[95] !== j || f[96] !== ce) {
            we = e(Yn, {
                section,
                initialValue,
                onCancel: j,
                onSubmit: ce
            });
            f[93] = section;
            f[94] = initialValue;
            f[95] = j;
            f[96] = ce;
            f[97] = we;
        } else {
            we = f[97];
        }
        return we;
    }
    if (De?.mode === "builtins") {
        let Tt = De.section;
        let state = Qe[Tt];
        let onToggle;
        if (f[98] !== Tt || f[99] !== state.enabled || f[100] !== storageV5) {
            onToggle = ()=>{
                let Ui = !state.enabled;
                Xr(Tt, Ui, storageV5).then(()=>{
                    Oe(ve());
                    Ue(me());
                    A((My)=>[
                            ...My,
                            `${Ui ? "Enabled" : "Disabled"} the built-in auto mode ${ie(Tt).toLowerCase()} rules`
                        ]);
                }).catch((Wi)=>{
                    t(`auto mode builtins toggle failed: ${String(Wi)}`, {
                        level: "error"
                    });
                    Oe(ve());
                    Ue(me());
                    A((Py)=>[
                            ...Py,
                            `Could not ${Ui ? "enable" : "disable"} the built-in ${ie(Tt).toLowerCase()} rules \u2014 ${Wi instanceof Error ? Wi.message : "nothing was changed"}`
                        ]);
                });
                X(null);
            };
            f[98] = Tt;
            f[99] = state.enabled;
            f[100] = storageV5;
            f[101] = onToggle;
        } else {
            onToggle = f[101];
        }
        let W;
        if (f[102] === S) {
            W = ()=>X(null);
            f[102] = W;
        } else {
            W = f[102];
        }
        let j;
        if (f[103] !== Tt || f[104] !== state || f[105] !== onToggle) {
            j = e(Nn, {
                section: Tt,
                state,
                onToggle,
                onCancel: W
            });
            f[103] = Tt;
            f[104] = state;
            f[105] = onToggle;
            f[106] = j;
        } else {
            j = f[106];
        }
        return j;
    }
    if (De?.mode === "details") {
        let { entry } = De;
        let onEdit;
        let W;
        if (f[107] !== entry) {
            onEdit = ()=>{
                X({
                    mode: "input",
                    section: entry.section,
                    editing: entry
                });
            };
            W = ()=>X({
                    mode: "delete",
                    entry
                });
            f[107] = entry;
            f[108] = onEdit;
            f[109] = W;
        } else {
            onEdit = f[108];
            W = f[109];
        }
        let j;
        if (f[110] === S) {
            j = ()=>X(null);
            f[110] = j;
        } else {
            j = f[110];
        }
        let ce;
        if (f[111] !== entry || f[112] !== onEdit || f[113] !== W) {
            ce = e(Ln, {
                entry,
                onEdit,
                onDelete: W,
                onCancel: j
            });
            f[111] = entry;
            f[112] = onEdit;
            f[113] = W;
            f[114] = ce;
        } else {
            ce = f[114];
        }
        return ce;
    }
    if (De?.mode === "delete") {
        let { entry } = De;
        let L;
        if (f[115] !== entry.section) {
            L = (Ki)=>Ki.section === entry.section && !(Ki.structure && Ki.source === "userSettings");
            f[115] = entry.section;
            f[116] = L;
        } else {
            L = f[116];
        }
        let W;
        if (f[117] !== Ee || f[118] !== L) {
            W = F(Ee, L);
            f[117] = Ee;
            f[118] = L;
            f[119] = W;
        } else {
            W = f[119];
        }
        const isLastInSection = W === 1;
        let ce;
        if (f[120] !== Ee || f[121] !== entry || f[122] !== storageV5) {
            ce = ()=>{
                let ky = yt(Ee).indexOf(entry);
                os(entry.section, entry.index, entry.text, storageV5).then(()=>{
                    let ji = ve();
                    Oe(ji);
                    Ue(me());
                    let Ty = Xte() ? ji.filter(Zh) : ji;
                    let Fu = yt(Ty);
                    let Ou = Fu[Math.min(Math.max(ky, 0), Fu.length - 1)];
                    tt(Ou ? gt(Ou) : undefined);
                    A((Dy)=>[
                            ...Dy,
                            `Deleted auto mode ${ie(entry.section).toLowerCase()} rule ${ge.bold(Ai(Bi(entry.text).text))}`
                        ]);
                }).catch((Qi)=>{
                    t(`auto mode rule delete failed: ${String(Qi)}`, {
                        level: "error"
                    });
                    Oe(ve());
                    Ue(me());
                    A((Fy)=>[
                            ...Fy,
                            `Could not delete ${ge.bold(Ai(Bi(entry.text).text))} \u2014 ${Qi instanceof Error ? Qi.message : "the rule is unchanged"}`
                        ]);
                });
                X(null);
            };
            f[120] = Ee;
            f[121] = entry;
            f[122] = storageV5;
            f[123] = ce;
        } else {
            ce = f[123];
        }
        let we;
        if (f[124] !== entry) {
            we = ()=>X({
                    mode: "details",
                    entry
                });
            f[124] = entry;
            f[125] = we;
        } else {
            we = f[125];
        }
        let st;
        if (f[126] !== entry || f[127] !== isLastInSection || f[128] !== ce || f[129] !== we) {
            st = e(Kn, {
                entry,
                isLastInSection,
                onConfirm: ce,
                onCancel: we
            });
            f[126] = entry;
            f[127] = isLastInSection;
            f[128] = ce;
            f[129] = we;
            f[130] = st;
        } else {
            st = f[130];
        }
        return st;
    }
    if (K) {
        let L;
        if (f[131] === S) {
            L = ()=>re(undefined);
            f[131] = L;
        } else {
            L = f[131];
        }
        let W;
        if (f[132] !== Ti || f[133] !== K) {
            W = e(ai, {
                rule: K,
                onDelete: Ti,
                onCancel: L
            });
            f[132] = Ti;
            f[133] = K;
            f[134] = W;
        } else {
            W = f[134];
        }
        return W;
    }
    if (z && z !== "workspace" && z !== "recent" && z !== "automode") {
        let L;
        if (f[135] !== z) {
            L = e(pn, {
                onCancel: du,
                onSubmit,
                ruleBehavior: z
            });
            f[135] = z;
            f[136] = L;
        } else {
            L = f[136];
        }
        return L;
    }
    if (Q) {
        let ruleValues;
        if (f[137] !== Q.ruleValue) {
            ruleValues = [
                Q.ruleValue
            ];
            f[137] = Q.ruleValue;
            f[138] = ruleValues;
        } else {
            ruleValues = f[138];
        }
        let setToolPermissionContext;
        if (f[139] !== U) {
            setToolPermissionContext = (Oy)=>{
                U(($y)=>({
                        ...$y,
                        toolPermissionContext: Oy
                    }));
            };
            f[139] = U;
            f[140] = setToolPermissionContext;
        } else {
            setToolPermissionContext = f[140];
        }
        let j;
        if (f[141] !== onAddRules || f[142] !== ruleValues || f[143] !== setToolPermissionContext || f[144] !== k || f[145] !== Q.ruleBehavior) {
            j = e(mn, {
                onAddRules,
                onCancel: ty,
                ruleValues,
                ruleBehavior: Q.ruleBehavior,
                initialContext: k,
                setToolPermissionContext
            });
            f[141] = onAddRules;
            f[142] = ruleValues;
            f[143] = setToolPermissionContext;
            f[144] = k;
            f[145] = Q.ruleBehavior;
            f[146] = j;
        } else {
            j = f[146];
        }
        return j;
    }
    if (Re) {
        let onAddDirectory;
        if (f[147] !== U || f[148] !== storageV5 || f[149] !== k) {
            onAddDirectory = ($u, qi)=>{
                let Bu = {
                    type: "addDirectories",
                    directories: [
                        $u
                    ],
                    destination: qi ? "localSettings" : "session"
                };
                let By = jd(k, Bu);
                U((Vy)=>({
                        ...Vy,
                        toolPermissionContext: By
                    }));
                if (qi) {
                    R5(Bu, storageV5).catch(c);
                }
                A((Iy)=>[
                        ...Iy,
                        `Added directory ${ge.bold($n($u))} to workspace${qi ? " and saved to local settings" : " for this session"}`
                    ]);
                Xe(false);
            };
            f[147] = U;
            f[148] = storageV5;
            f[149] = k;
            f[150] = onAddDirectory;
        } else {
            onAddDirectory = f[150];
        }
        let W;
        if (f[151] === S) {
            W = ()=>Xe(false);
            f[151] = W;
        } else {
            W = f[151];
        }
        let j;
        if (f[152] !== onAddDirectory || f[153] !== k) {
            j = e(vXe, {
                onAddDirectory,
                onCancel: W,
                permissionContext: k
            });
            f[152] = onAddDirectory;
            f[153] = k;
            f[154] = j;
        } else {
            j = f[154];
        }
        return j;
    }
    if (He) {
        let onRemove;
        if (f[155] !== He) {
            onRemove = ()=>{
                A((Ly)=>[
                        ...Ly,
                        `Removed directory ${ge.bold(He)} from workspace`
                    ]);
                Ge(null);
            };
            f[155] = He;
            f[156] = onRemove;
        } else {
            onRemove = f[156];
        }
        let W;
        if (f[157] === S) {
            W = ()=>Ge(null);
            f[157] = W;
        } else {
            W = f[157];
        }
        let setPermissionContext;
        if (f[158] !== U) {
            setPermissionContext = (Ny)=>{
                U((Hy)=>({
                        ...Hy,
                        toolPermissionContext: Ny
                    }));
            };
            f[158] = U;
            f[159] = setPermissionContext;
        } else {
            setPermissionContext = f[159];
        }
        let ce;
        if (f[160] !== He || f[161] !== onRemove || f[162] !== setPermissionContext || f[163] !== k) {
            ce = e(Rn, {
                directoryPath: He,
                onRemove,
                onCancel: W,
                permissionContext: k,
                setPermissionContext
            });
            f[160] = He;
            f[161] = onRemove;
            f[162] = setPermissionContext;
            f[163] = k;
            f[164] = ce;
        } else {
            ce = f[164];
        }
        return ce;
    }
    let L;
    if (f[165] !== getRulesOptions || f[166] !== no || f[167] !== handleToolSelect || f[168] !== de || f[169] !== H || f[170] !== se || f[171] !== cursorOffset || f[172] !== query) {
        L = {
            searchQuery: query,
            isSearchMode: de,
            isFocused: H,
            onCancel: no,
            lastFocusedRuleKey: se,
            cursorOffset,
            getRulesOptions,
            handleToolSelect,
            onHeaderFocusChange
        };
        f[165] = getRulesOptions;
        f[166] = no;
        f[167] = handleToolSelect;
        f[168] = de;
        f[169] = H;
        f[170] = se;
        f[171] = cursorOffset;
        f[172] = query;
        f[173] = L;
    } else {
        L = f[173];
    }
    let Dt = L;
    let hidden = !Vt;
    const navFromContent = !de;
    let j;
    if (f[174] === S) {
        j = e(La, {
            id: "recent",
            title: "Recently denied",
            children: e(Cn, {
                onHeaderFocusChange,
                onStateChange
            })
        }, "recent");
        f[174] = j;
    } else {
        j = f[174];
    }
    let ce;
    if (f[175] !== Dt) {
        ce = e(La, {
            id: "allow",
            title: "Allow",
            children: e(Jt, {
                tab: "allow",
                ...Dt
            })
        }, "allow");
        f[175] = Dt;
        f[176] = ce;
    } else {
        ce = f[176];
    }
    let we;
    if (f[177] !== Dt) {
        we = e(La, {
            id: "ask",
            title: "Ask",
            children: e(Jt, {
                tab: "ask",
                ...Dt
            })
        }, "ask");
        f[177] = Dt;
        f[178] = we;
    } else {
        we = f[178];
    }
    let st;
    if (f[179] !== Dt) {
        st = e(La, {
            id: "deny",
            title: "Deny",
            children: e(Jt, {
                tab: "deny",
                ...Dt
            })
        }, "deny");
        f[179] = Dt;
        f[180] = st;
    } else {
        st = f[180];
    }
    let io;
    if (f[181] !== Qe || f[182] !== Ee || f[183] !== no || f[184] !== de || f[185] !== H || f[186] !== je || f[187] !== cursorOffset || f[188] !== query || f[189] !== Oo || f[190] !== k.isAutoModeAvailable) {
        io = k.isAutoModeAvailable !== false ? [
            e(La, {
                id: "automode",
                title: "Auto mode",
                children: e(On, {
                    entries: Ee,
                    searchQuery: query,
                    isSearchMode: de,
                    isFocused: H,
                    cursorOffset,
                    defaultFocusValue: je,
                    builtinsState: Qe,
                    onSelectBuiltins: (_u)=>{
                        tt(`builtins:${_u}`);
                        X({
                            mode: "builtins",
                            section: _u
                        });
                    },
                    onAddNew: ()=>X({
                            mode: "pick-section"
                        }),
                    onSelectEntry: (entry)=>{
                        tt(gt(entry));
                        X({
                            mode: "details",
                            entry
                        });
                    },
                    onSelectEnvironment: ()=>{
                        tt("environment-document");
                        Oo();
                    },
                    onCancel: no,
                    onHeaderFocusChange
                })
            }, "automode")
        ] : [];
        f[181] = Qe;
        f[182] = Ee;
        f[183] = no;
        f[184] = de;
        f[185] = H;
        f[186] = je;
        f[187] = cursorOffset;
        f[188] = query;
        f[189] = Oo;
        f[190] = k.isAutoModeAvailable;
        f[191] = io;
    } else {
        io = f[191];
    }
    let lo;
    if (f[192] === S) {
        lo = e(n, {
            wrap: "wrap-trim",
            children: "Claude Code can read files in the workspace, and make edits when auto-accept edits is on."
        });
        f[192] = lo;
    } else {
        lo = f[192];
    }
    let ao;
    if (f[193] !== onExit || f[194] !== k) {
        ao = e(La, {
            id: "workspace",
            title: "Workspace",
            children: r(s, {
                flexDirection: "column",
                children: [
                    lo,
                    e(wn, {
                        onExit,
                        toolPermissionContext: k,
                        onRequestAddDirectory,
                        onRequestRemoveDirectory,
                        onHeaderFocusChange
                    })
                ]
            })
        }, "workspace");
        f[193] = onExit;
        f[194] = k;
        f[195] = ao;
    } else {
        ao = f[195];
    }
    let br;
    if (f[196] !== ce || f[197] !== we || f[198] !== st || f[199] !== io || f[200] !== ao) {
        br = [
            j,
            ce,
            we,
            st,
            ...io,
            ao
        ];
        f[196] = ce;
        f[197] = we;
        f[198] = st;
        f[199] = io;
        f[200] = ao;
        f[201] = br;
    } else {
        br = f[201];
    }
    let Cr;
    if (f[202] !== defaultTab || f[203] !== $e || f[204] !== hidden || f[205] !== C || f[206] !== navFromContent || f[207] !== br) {
        Cr = e(sb, {
            title: "Permissions",
            color: "permission",
            defaultTab,
            selectedTab: C,
            onTabChange,
            hidden,
            initialHeaderFocused: $e,
            navFromContent,
            children: br
        });
        f[202] = defaultTab;
        f[203] = $e;
        f[204] = hidden;
        f[205] = C;
        f[206] = navFromContent;
        f[207] = br;
        f[208] = Cr;
    } else {
        Cr = f[208];
    }
    let Rr;
    if (f[209] !== defaultTab || f[210] !== Do.keyName || f[211] !== Do.pending || f[212] !== b || f[213] !== $e || f[214] !== et || f[215] !== de) {
        Rr = Do.pending ? `Press ${Do.keyName} again to cancel` : $e ? e(Y, {
            children: "←/→ to switch · ↓ to select · Esc to cancel"
        }) : de ? e(Y, {
            children: "Type to filter · Enter/↓ to select · ↑ to tabs · Esc to clear"
        }) : b && defaultTab === "recent" ? r(Y, {
            children: [
                "Enter to approve · r to retry ·",
                " ",
                et ? "" : "↑/↓ to navigate · ",
                "Esc to cancel"
            ]
        }) : r(Y, {
            children: [
                et ? "" : "↑/↓ to navigate · Enter to select · ",
                "←/→ to switch · Esc to cancel"
            ]
        });
        f[209] = defaultTab;
        f[210] = Do.keyName;
        f[211] = Do.pending;
        f[212] = b;
        f[213] = $e;
        f[214] = et;
        f[215] = de;
        f[216] = Rr;
    } else {
        Rr = f[216];
    }
    let xr;
    if (f[217] !== Rr) {
        xr = e(s, {
            marginTop: 1,
            children: e(n, {
                dimColor: true,
                children: Rr
            })
        });
        f[217] = Rr;
        f[218] = xr;
    } else {
        xr = f[218];
    }
    let wr;
    if (f[219] !== Cr || f[220] !== xr) {
        wr = r(ts, {
            color: "permission",
            children: [
                Cr,
                xr
            ]
        });
        f[219] = Cr;
        f[220] = xr;
        f[221] = wr;
    } else {
        wr = f[221];
    }
    let Iu;
    if (f[222] !== Mo || f[223] !== handlePaste || f[224] !== wr) {
        Iu = e(s, {
            flexDirection: "column",
            onKeyDown: Mo,
            onPaste: handlePaste,
            children: wr
        });
        f[222] = Mo;
        f[223] = handlePaste;
        f[224] = wr;
        f[225] = Iu;
    } else {
        Iu = f[225];
    }
    return Iu;
}
export const call = async (g, i)=>{
    if (Mt()) {
        let m = vr();
        if (!m || !al()) {
            g("Permission rules aren't available over this remote connection");
            return null;
        }
        return e(Tr, {
            onExit: g,
            rulesRead: Ji(m, i.abortController.signal)
        });
    }
    return e(di, {
        onExit: g,
        onRetryDenials: (m)=>{
            i.applyMessageOp({
                type: "append",
                messages: [
                    Nes(m)
                ]
            });
        }
    });
};
