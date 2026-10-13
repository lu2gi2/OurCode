import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { _7 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { qt, le, Te, P, Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { px } from "/$bunfs/root/chunk-e2vrg5f2.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { ui } from "/$bunfs/root/chunk-6gb840dt.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Ht } from "/$bunfs/root/chunk-77t63btp.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Sn(Co) {
    return Co + 1;
}
function Dn(ho) {
    return ho.slice(0, -1);
}
function Tn(yo) {
    return yo - 1;
}
const ve = qt(null);
function ije(x) {
    let h = w(40);
    let { steps, stepProps, initialData, onComplete, onCancel, children, title, showStepCounter, exitOnCtrlCD } = x;
    let I;
    if (h[0] !== initialData) {
        I = initialData === undefined ? {} : initialData;
        h[0] = initialData;
        h[1] = I;
    } else {
        I = h[1];
    }
    let M = I;
    let showStepCounter_1 = showStepCounter === undefined ? true : showStepCounter;
    let se = exitOnCtrlCD === undefined ? false : exitOnCtrlCD;
    let [v, c] = y(0);
    let [f, i] = y(M);
    let [k, V] = y(false);
    let J;
    if (h[2] === S) {
        J = [];
        h[2] = J;
    } else {
        J = h[2];
    }
    let [O, Ce] = y(J);
    let en;
    let tn;
    if (h[3] !== k || h[4] !== onComplete || h[5] !== f) {
        en = ()=>{
            if (k) {
                Ce([]);
                onComplete(f);
            }
        };
        tn = [
            k,
            f,
            onComplete
        ];
        h[3] = k;
        h[4] = onComplete;
        h[5] = f;
        h[6] = en;
        h[7] = tn;
    } else {
        en = h[6];
        tn = h[7];
    }
    P(en, tn);
    let nn;
    if (h[8] !== v || h[9] !== O || h[10] !== steps.length) {
        nn = ()=>{
            if (v < steps.length - 1) {
                if (O.length > 0) {
                    Ce((mo)=>[
                            ...mo,
                            v
                        ]);
                }
                c(Sn);
            } else {
                V(true);
            }
        };
        h[8] = v;
        h[9] = O;
        h[10] = steps.length;
        h[11] = nn;
    } else {
        nn = h[11];
    }
    let goNext = nn;
    let on;
    if (h[12] !== v || h[13] !== O || h[14] !== onCancel) {
        on = ()=>{
            if (O.length > 0) {
                let rn = O.at(-1);
                if (rn !== undefined) {
                    Ce(Dn);
                    c(rn);
                }
            } else if (v > 0) {
                c(Tn);
            } else if (onCancel) {
                onCancel();
            }
        };
        h[12] = v;
        h[13] = O;
        h[14] = onCancel;
        h[15] = on;
    } else {
        on = h[15];
    }
    let goBack = on;
    let an;
    if (h[16] !== v || h[17] !== steps.length) {
        an = (ct)=>{
            if (ct >= 0 && ct < steps.length) {
                Ce((go)=>[
                        ...go,
                        v
                    ]);
                c(ct);
            }
        };
        h[16] = v;
        h[17] = steps.length;
        h[18] = an;
    } else {
        an = h[18];
    }
    let goToStep = an;
    let sn;
    if (h[19] !== onCancel) {
        sn = ()=>{
            Ce([]);
            if (onCancel) {
                onCancel();
            }
        };
        h[19] = onCancel;
        h[20] = sn;
    } else {
        sn = h[20];
    }
    let cancel = sn;
    let ln = Yo(se ? undefined : cancel);
    let pendingExitHint = ln.pending ? `Press ${ln.keyName} again to ${se ? "exit" : "cancel"}` : null;
    let dn;
    if (h[21] === S) {
        dn = (xo)=>{
            i((bo)=>({
                    ...bo,
                    ...xo
                }));
        };
        h[21] = dn;
    } else {
        dn = h[21];
    }
    let updateWizardData = dn;
    let pn;
    if (h[22] !== cancel || h[23] !== v || h[24] !== goBack || h[25] !== goNext || h[26] !== goToStep || h[27] !== pendingExitHint || h[28] !== showStepCounter_1 || h[29] !== steps.length || h[30] !== title || h[31] !== f) {
        pn = {
            currentStepIndex: v,
            totalSteps: steps.length,
            wizardData: f,
            setWizardData: i,
            updateWizardData,
            goNext,
            goBack,
            goToStep,
            cancel,
            title,
            showStepCounter: showStepCounter_1,
            pendingExitHint
        };
        h[22] = cancel;
        h[23] = v;
        h[24] = goBack;
        h[25] = goNext;
        h[26] = goToStep;
        h[27] = pendingExitHint;
        h[28] = showStepCounter_1;
        h[29] = steps.length;
        h[30] = title;
        h[31] = f;
        h[32] = pn;
    } else {
        pn = h[32];
    }
    let gt = pn;
    let Ie = steps[v];
    if (!Ie || k) {
        return null;
    }
    let ze;
    if (h[33] !== Ie || h[34] !== children || h[35] !== stepProps) {
        ze = children || e(Ie, {
            ...stepProps
        });
        h[33] = Ie;
        h[34] = children;
        h[35] = stepProps;
        h[36] = ze;
    } else {
        ze = h[36];
    }
    let cn;
    if (h[37] !== gt || h[38] !== ze) {
        cn = e(ve.Provider, {
            value: gt,
            children: ze
        });
        h[37] = gt;
        h[38] = ze;
        h[39] = cn;
    } else {
        cn = h[39];
    }
    return cn;
}
N();
function Bu() {
    let x = Te(ve);
    if (!x) {
        throw Error("useWizard must be used within a WizardProvider");
    }
    return x;
}
function ud(x) {
    let c = w(15);
    let { title, color, children, subtitle, footerText } = x;
    let color_1 = color === undefined ? "suggestion" : color;
    let { currentStepIndex, totalSteps, title: title_1, showStepCounter, goBack, pendingExitHint } = Bu();
    let B = title || title_1 || "Wizard";
    let se = showStepCounter !== false ? ` (${currentStepIndex + 1}/${totalSteps})` : "";
    const title_2 = `${B}${se}`;
    let f;
    if (c[0] !== children || c[1] !== color_1 || c[2] !== goBack || c[3] !== subtitle || c[4] !== title_2) {
        f = e(_e, {
            title: title_2,
            subtitle,
            onCancel: goBack,
            color: color_1,
            hideInputGuide: true,
            isCancelActive: false,
            children
        });
        c[0] = children;
        c[1] = color_1;
        c[2] = goBack;
        c[3] = subtitle;
        c[4] = title_2;
        c[5] = f;
    } else {
        f = c[5];
    }
    let i;
    if (c[6] !== currentStepIndex || c[7] !== footerText || c[8] !== pendingExitHint) {
        i = pendingExitHint ?? footerText ?? r(be, {
            children: [
                e(G, {
                    chord: [
                        "up",
                        "down"
                    ],
                    action: "navigate"
                }),
                e(G, {
                    chord: "enter",
                    action: "select"
                }),
                e(ut, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: currentStepIndex > 0 ? "go back" : "cancel"
                })
            ]
        });
        c[6] = currentStepIndex;
        c[7] = footerText;
        c[8] = pendingExitHint;
        c[9] = i;
    } else {
        i = c[9];
    }
    let k;
    if (c[10] !== i) {
        k = e(s, {
            marginLeft: 2,
            marginTop: 1,
            children: e(n, {
                dimColor: true,
                children: i
            })
        });
        c[10] = i;
        c[11] = k;
    } else {
        k = c[11];
    }
    let V;
    if (c[12] !== f || c[13] !== k) {
        V = r(Y, {
            children: [
                f,
                k
            ]
        });
        c[12] = f;
        c[13] = k;
        c[14] = V;
    } else {
        V = c[14];
    }
    return V;
}
const z0 = [
    "sonnet",
    "opus",
    "haiku",
    "fable"
];
function Oe() {
    return {
        sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL,
        opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL,
        haiku: a.ANTHROPIC_DEFAULT_HAIKU_MODEL,
        fable: a.ANTHROPIC_DEFAULT_FABLE_MODEL
    };
}
N();
function Rmt({ provider, onPins }) {
    let { goBack, goNext, wizardData } = Bu();
    let t = Z(()=>provider.resolveTierDefaults(wizardData), []);
    let u = Z(()=>Oe(), []);
    let [l, d] = y(()=>Object.fromEntries(z0.map((i)=>[
                i,
                u[i] ?? t[i].auto ?? t[i].fallback
            ])));
    let [g, h] = y({
        sonnet: "pending",
        opus: "pending",
        haiku: "pending",
        fable: "pending"
    });
    let [I, M] = y("summary");
    let B = z0.map((i)=>e(it, {
            candidate: l[i],
            probe: (k)=>provider.probe(wizardData, k),
            onState: (k)=>h((V)=>({
                        ...V,
                        [i]: k
                    }))
        }, i));
    if (I !== "summary") {
        let tier = I.picking;
        return r(Y, {
            children: [
                B,
                e(Zt, {
                    tier,
                    provider,
                    wizardData,
                    fallback: t[tier].fallback,
                    current: l[tier],
                    existingPin: u[tier],
                    onPick: (k)=>{
                        d((O)=>({
                                ...O,
                                [tier]: k
                            }));
                        let V = z0.indexOf(tier);
                        let picking = z0[V + 1];
                        M(picking ? {
                            picking
                        } : "summary");
                    },
                    onCancel: ()=>M("summary")
                }, tier)
            ]
        });
    }
    let v = z0.every((i)=>g[i] !== "pending") && z0.some((i)=>g[i] !== "pending" && g[i].ok);
    let c = v && z0.some((i)=>{
        let k = g[i];
        return k !== "pending" && k.ok && _7(l[i]);
    });
    let onChange = (i)=>{
        if (i === "manual") {
            M({
                picking: "sonnet"
            });
            return;
        }
        if (i === "pin" || i === "pin1m") {
            let k = (V)=>{
                let J = g[V];
                if (J === "pending" || !J.ok) {
                    return;
                }
                let O = l[V];
                if (i === "pin1m" && _7(O)) {
                    return Kt(O);
                }
                return O;
            };
            onPins({
                pinSonnet: k("sonnet"),
                pinOpus: k("opus"),
                pinHaiku: k("haiku"),
                pinFable: k("fable")
            });
        } else {
            onPins({
                pinSonnet: undefined,
                pinOpus: undefined,
                pinHaiku: undefined,
                pinFable: undefined
            });
        }
        goNext();
    };
    return r(Y, {
        children: [
            B,
            e(ud, {
                subtitle: "Pin model versions",
                children: r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        e(n, {
                            children: provider.intro
                        }),
                        r(s, {
                            flexDirection: "column",
                            children: [
                                e(n, {
                                    dimColor: true,
                                    children: "Each candidate is tested with a one-token request:"
                                }),
                                z0.map((i)=>e(st, {
                                        label: px[i],
                                        modelId: l[i],
                                        state: g[i],
                                        reasonLabel: provider.reasonLabel
                                    }, i))
                            ]
                        }),
                        e(Ve, {
                            options: [
                                ...v ? [
                                    {
                                        label: "Pin the working models",
                                        value: "pin"
                                    }
                                ] : [],
                                ...c ? [
                                    {
                                        label: "Pin the working models with 1M context",
                                        value: "pin1m"
                                    }
                                ] : [],
                                {
                                    label: "Choose different models…",
                                    value: "manual"
                                },
                                {
                                    label: "Skip — use Claude Code defaults (auto-updates)",
                                    value: "skip"
                                }
                            ],
                            onChange,
                            onCancel: goBack
                        })
                    ]
                })
            })
        ]
    });
}
function Kt(x) {
    if (/\[1m\]$/i.test(x)) {
        return x;
    }
    return `${x}[1m]`;
}
function it(x) {
    let b = w(6);
    let { candidate, probe, onState } = x;
    let t;
    if (b[0] !== candidate || b[1] !== onState || b[2] !== probe) {
        t = ()=>{
            let u = false;
            onState("pending");
            probe(candidate).then((l)=>{
                if (!u) {
                    onState(l);
                }
            });
            return ()=>{
                u = true;
            };
        };
        b[0] = candidate;
        b[1] = onState;
        b[2] = probe;
        b[3] = t;
    } else {
        t = b[3];
    }
    let d;
    if (b[4] !== candidate) {
        d = [
            candidate
        ];
        b[4] = candidate;
        b[5] = d;
    } else {
        d = b[5];
    }
    P(t, d);
    return null;
}
function Zt({ tier, provider, wizardData, fallback, current, existingPin, onPick, onCancel }) {
    let d = Z(()=>{
        let c = provider.listTierCandidates(tier, wizardData);
        for (let f of [
            fallback,
            current,
            existingPin
        ]){
            if (f && !c.includes(f)) {
                c.push(f);
            }
        }
        return c;
    }, [
        tier,
        fallback,
        current,
        existingPin
    ]);
    let [g, h] = y(()=>Object.fromEntries(d.map((c)=>[
                c,
                "pending"
            ])));
    P(()=>{
        let c = false;
        for (let f of d){
            provider.probe(wizardData, f).then((i)=>{
                if (!c) {
                    h((k)=>({
                            ...k,
                            [f]: i
                        }));
                }
            });
        }
        return ()=>{
            c = true;
        };
    }, []);
    let I = d.every((c)=>g[c] !== "pending");
    let M = (c)=>{
        let f = g[c];
        return f !== undefined && f !== "pending" && f.ok;
    };
    let B = Z(()=>{
        if (!I) {
            return d;
        }
        return [
            ...d
        ].sort((c, f)=>(M(c) ? 0 : 1) - (M(f) ? 0 : 1));
    }, [
        d,
        g,
        I
    ]);
    let options = B.map((c)=>({
            value: c,
            label: e(at, {
                id: c,
                state: g[c] ?? "pending",
                reasonLabel: provider.reasonLabel,
                suffix: c === existingPin ? "(currently pinned)" : c === fallback ? "(built-in default)" : c === current ? "(selected)" : undefined
            })
        }));
    let v = ()=>{
        for (let c of provider.preferOnSettle ?? []){
            let f = c === "current" ? current : fallback;
            if (M(f)) {
                return f;
            }
        }
        return B.find(M);
    };
    return e(ud, {
        subtitle: `Pin ${px[tier]} model`,
        children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                e(n, {
                    dimColor: true,
                    children: provider.pickerSubtitle(tier, wizardData)
                }),
                e(Ve, {
                    options,
                    defaultValue: I ? v() : current,
                    onChange: onPick,
                    onCancel
                }, I ? "settled" : "pending")
            ]
        })
    });
}
function at(x) {
    let t = w(19);
    let { id, state, suffix, reasonLabel } = x;
    if (state === "pending") {
        let u;
        if (t[0] === S) {
            u = e(dt, {
                status: "pending",
                withSpace: true
            });
            t[0] = u;
        } else {
            u = t[0];
        }
        let l;
        if (t[1] !== suffix) {
            l = suffix && r(n, {
                dimColor: true,
                children: [
                    " ",
                    suffix
                ]
            });
            t[1] = suffix;
            t[2] = l;
        } else {
            l = t[2];
        }
        let d;
        if (t[3] !== id || t[4] !== l) {
            d = r(n, {
                children: [
                    u,
                    id,
                    l
                ]
            });
            t[3] = id;
            t[4] = l;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    if (state.ok) {
        let u;
        if (t[6] === S) {
            u = e(dt, {
                status: "success",
                withSpace: true
            });
            t[6] = u;
        } else {
            u = t[6];
        }
        let l;
        if (t[7] !== suffix) {
            l = suffix && r(n, {
                dimColor: true,
                children: [
                    " ",
                    suffix
                ]
            });
            t[7] = suffix;
            t[8] = l;
        } else {
            l = t[8];
        }
        let d;
        if (t[9] !== id || t[10] !== l) {
            d = r(n, {
                children: [
                    u,
                    id,
                    l
                ]
            });
            t[9] = id;
            t[10] = l;
            t[11] = d;
        } else {
            d = t[11];
        }
        return d;
    }
    let u;
    if (t[12] === S) {
        u = e(dt, {
            status: "error",
            withSpace: true
        });
        t[12] = u;
    } else {
        u = t[12];
    }
    const l = suffix && ` ${suffix}`;
    const d = reasonLabel[state.reason];
    let g;
    if (t[13] !== d) {
        g = r(n, {
            color: "error",
            children: [
                "(",
                d,
                ")"
            ]
        });
        t[13] = d;
        t[14] = g;
    } else {
        g = t[14];
    }
    let h;
    if (t[15] !== id || t[16] !== l || t[17] !== g) {
        h = r(n, {
            dimColor: true,
            children: [
                u,
                id,
                l,
                " ",
                g
            ]
        });
        t[15] = id;
        t[16] = l;
        t[17] = g;
        t[18] = h;
    } else {
        h = t[18];
    }
    return h;
}
function st(x) {
    let t = w(26);
    let { label, modelId, state, reasonLabel } = x;
    if (state === "pending") {
        let u;
        let l;
        if (t[0] === S) {
            u = e(n, {
                children: "  "
            });
            l = e(ui, {});
            t[0] = u;
            t[1] = l;
        } else {
            u = t[0];
            l = t[1];
        }
        let d;
        if (t[2] !== label) {
            d = label.padEnd(7);
            t[2] = label;
            t[3] = d;
        } else {
            d = t[3];
        }
        let g;
        if (t[4] !== modelId || t[5] !== d) {
            g = r(s, {
                children: [
                    u,
                    l,
                    r(n, {
                        children: [
                            " ",
                            d,
                            "→ ",
                            modelId
                        ]
                    })
                ]
            });
            t[4] = modelId;
            t[5] = d;
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    if (state.ok) {
        let u;
        if (t[7] === S) {
            u = e(dt, {
                status: "success",
                withSpace: true
            });
            t[7] = u;
        } else {
            u = t[7];
        }
        let l;
        if (t[8] !== label) {
            l = label.padEnd(7);
            t[8] = label;
            t[9] = l;
        } else {
            l = t[9];
        }
        let d;
        if (t[10] !== modelId) {
            d = e(n, {
                color: "success",
                children: modelId
            });
            t[10] = modelId;
            t[11] = d;
        } else {
            d = t[11];
        }
        let g;
        if (t[12] !== l || t[13] !== d) {
            g = r(n, {
                children: [
                    "  ",
                    u,
                    l,
                    "→ ",
                    d
                ]
            });
            t[12] = l;
            t[13] = d;
            t[14] = g;
        } else {
            g = t[14];
        }
        return g;
    }
    let u;
    if (t[15] === S) {
        u = e(dt, {
            status: "error",
            withSpace: true
        });
        t[15] = u;
    } else {
        u = t[15];
    }
    let l;
    if (t[16] !== label) {
        l = label.padEnd(7);
        t[16] = label;
        t[17] = l;
    } else {
        l = t[17];
    }
    let d;
    if (t[18] !== modelId) {
        d = e(n, {
            dimColor: true,
            children: modelId
        });
        t[18] = modelId;
        t[19] = d;
    } else {
        d = t[19];
    }
    const g = reasonLabel[state.reason];
    let h;
    if (t[20] !== g) {
        h = r(n, {
            color: "error",
            children: [
                "(",
                g,
                ")"
            ]
        });
        t[20] = g;
        t[21] = h;
    } else {
        h = t[21];
    }
    let I;
    if (t[22] !== l || t[23] !== d || t[24] !== h) {
        I = r(n, {
            children: [
                "  ",
                u,
                l,
                "→ ",
                d,
                " ",
                h
            ]
        });
        t[22] = l;
        t[23] = d;
        t[24] = h;
        t[25] = I;
    } else {
        I = t[25];
    }
    return I;
}
async function tdn(x, o, m) {
    let p;
    try {
        p = await x();
    } catch (error) {
        return {
            ok: false,
            reason: m(error)
        };
    }
    try {
        await p.messages.create({
            model: Ht(o),
            max_tokens: 1,
            messages: [
                {
                    role: "user",
                    content: "."
                }
            ]
        });
        return {
            ok: true
        };
    } catch (error) {
        let t = error?.status;
        if (t === 401) {
            return {
                ok: false,
                reason: "auth"
            };
        }
        if (t === 403) {
            return {
                ok: false,
                reason: "permission"
            };
        }
        if (t === 400 || t === 404) {
            return {
                ok: false,
                reason: "model"
            };
        }
        if (t === 429) {
            return {
                ok: true
            };
        }
        if (t === undefined) {
            return {
                ok: false,
                reason: "network"
            };
        }
        return {
            ok: false,
            reason: "other"
        };
    }
}
export { ije, Bu, ud, z0, Rmt, tdn };
