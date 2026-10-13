import { pd } from "/$bunfs/root/chunk-wff73y2a.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { on, nt, s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Br } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { gf, Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { le, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { R3n, TJe, WFt, zFt, L3n, Aie, QUo } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { EIe } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { el, ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { is, Fr } from "/$bunfs/root/chunk-972pd37y.js";
import { $n, Kst } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { Cl, tn } from "/$bunfs/root/chunk-h8kxxbjq.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { Q0t } from "/$bunfs/root/chunk-tmrtnnjz.js";
import { wXe, t$t } from "/$bunfs/root/chunk-njcs0da2.js";
import { fo } from "/$bunfs/root/chunk-p78rzsw0.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Xt(j) {
    return e(tn.Item, {
        label: $n(j.title),
        meta: Le(j)
    }, j.draft_id);
}
function Jt(ne) {
    return e(tn.Item, {
        label: $n(ne.title),
        meta: Le(ne)
    }, ne.draft_id);
}
const De = [
    "bug",
    "idea",
    "missing_capability"
];
const xt = {
    bug: "bug",
    idea: "idea",
    missing_capability: "missing capability"
};
const Oe = [
    undefined,
    ...WFt
];
const Ne = [
    undefined,
    ...zFt
];
function st(h) {
    if (h === undefined) {
        return "(none)";
    }
    return h.replace(/_/g, " ");
}
function ot(h) {
    return [
        "type",
        "title",
        "area",
        "failure_mode",
        "task_category",
        "details",
        ...h.transcriptAvailable ? [
            "transcript"
        ] : [],
        "send"
    ];
}
const Ke = 500;
const at = 6;
const lt = 3;
const ct = 5;
function fmt({ messages, onDone, abortSignal, onWriteNew }) {
    let [f, C] = y(null);
    let [b, B] = y(0);
    let z = nt();
    let [m, L] = y("list");
    let [o, A] = y(null);
    let [D, H] = y(false);
    let [q, _, M] = pd(0);
    let [T, k, U] = pd(null);
    let [cursorOffset, Q] = y(null);
    let ce = R(-Infinity);
    let [se, E] = y(null);
    let [oe, ue] = y(null);
    let columns = ke().columns - 6;
    let x = on();
    let ae = R(0);
    let j = R(false);
    let ne = R(0);
    let fe = R(false);
    let we = R(false);
    let { storageV5, credentials } = Pe();
    let host = is();
    let ie = Fr((t)=>t.id);
    let hasWriteNew = onWriteNew !== undefined;
    let de = le(async ()=>{
        let { queued } = await Aie(undefined, storageV5).catch(()=>({
                queued: [],
                expired: []
            }));
        QUo(F(queued, (l)=>l.source_session_id === ie));
        C(queued);
        let a = queued.length - (hasWriteNew ? 0 : 1);
        B((l)=>Math.min(l, Math.max(0, a)));
        return queued;
    }, [
        ie,
        hasWriteNew,
        storageV5,
        B
    ]);
    P(()=>{
        de().then((t)=>{
            i("tengu_feedback_queue_opened", {
                queued_count: Br(t.length),
                this_session_count: Br(F(t, (a)=>a.source_session_id === ie))
            });
        });
    }, [
        de,
        ie
    ]);
    let thisSession = (f ?? []).filter((t)=>t.source_session_id === ie);
    let others = (f ?? []).filter((t)=>t.source_session_id !== ie);
    let re = [
        ...thisSession,
        ...others
    ];
    let isSelected = hasWriteNew && b === re.length;
    let Qe = re.length + (hasWriteNew ? 1 : 0);
    let Dt = re[b];
    let Ie = o ? TJe(o.request_ids).length : 0;
    let pe = le((t)=>{
        if (t === undefined) {
            onDone();
        } else {
            onDone(t, {
                display: "system"
            });
        }
    }, [
        onDone
    ]);
    let O = Z(()=>{
        if (o) {
            return ot(o);
        }
        return [];
    }, [
        o
    ]);
    let xe = le((t)=>{
        ae.current = x.now();
        _(t.length - 1);
    }, [
        x,
        _
    ]);
    let p = O[q];
    let he = p === "title" || p === "area" || p === "details";
    let onOpen = le((t)=>{
        A(t);
        H(t.transcriptAvailable);
        E(null);
        k({
            type: t.type,
            title: $n(t.title),
            area: $n(t.area ?? ""),
            failureMode: t.failure_mode,
            taskCategory: t.task_category,
            details: Kst(t.details)
        });
        Q(null);
        ce.current = -Infinity;
        xe(ot(t));
        ne.current = x.now();
        j.current = false;
        we.current = false;
        L("review");
    }, [
        x,
        xe,
        k
    ]);
    let Ze = le(async (t)=>{
        let a = x.now();
        let ne_current = ne.current;
        ne.current = Math.max(a, ne_current);
        if (a - ne_current < Ke || fe.current || j.current) {
            return;
        }
        fe.current = true;
        try {
            await t$t(t, "panel", storageV5).catch(()=>{});
            await de();
            L("list");
            A(null);
        } finally{
            fe.current = false;
        }
    }, [
        de,
        x,
        storageV5
    ]);
    let ve = le((t)=>{
        A(t);
        C((g)=>{
            if (g) {
                return g.map((v)=>{
                    if (v.draft_id === t.draft_id) {
                        return t;
                    }
                    return v;
                });
            }
            return g;
        });
        let { transcriptAvailable, ...rest } = t;
        return L3n(rest, new Date, storageV5).then((g)=>{
            if (!g.success) {
                E(g.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.");
            }
        });
    }, [
        storageV5
    ]);
    let Ce = le(()=>{
        let t = U();
        if (!o || !t) {
            return o;
        }
        let a = $n(o.title);
        let l = $n(o.area ?? "");
        let g = Kst(o.details);
        let title = t.title === a || t.title.trim() === "" ? o.title : t.title.trim();
        let Fe = t.area === l ? o.area ?? "" : t.area.trim();
        let rt = t.details === g ? o.details : t.details.trim() === "" ? "" : t.details;
        if (t.type === o.type && title === o.title && (Fe === "" ? undefined : Fe) === o.area && t.failureMode === o.failure_mode && t.taskCategory === o.task_category && rt === o.details) {
            return o;
        }
        return {
            ...o,
            type: t.type,
            title,
            area: Fe === "" ? undefined : Fe,
            failure_mode: t.failureMode,
            task_category: t.taskCategory,
            details: rt
        };
    }, [
        o,
        U
    ]);
    let et = le(()=>{
        let t = Ce();
        if (t && t !== o) {
            if (o && t.details === "" && o.details !== "" && x.now() - ce.current < Ke) {
                t = {
                    ...t,
                    details: o.details
                };
            }
            ve(t);
        }
    }, [
        Ce,
        o,
        ve,
        x
    ]);
    let V = le((t)=>{
        Q(null);
        E((a)=>{
            if (a === Te) {
                return null;
            }
            return a;
        });
        _((a)=>{
            let l = Math.max(0, Math.min(O.length - 1, a + t));
            if (l !== a && O[l] === "send") {
                ae.current = x.now();
            }
            return l;
        });
    }, [
        O,
        x,
        _
    ]);
    let Tt = le((t, a)=>{
        if (t === "type") {
            k((l)=>{
                if (!l) {
                    return l;
                }
                let g = De.indexOf(l.type);
                let v = De[(g + a + De.length) % De.length];
                if (v) {
                    return {
                        ...l,
                        type: v
                    };
                }
                return l;
            });
        } else if (t === "failure_mode") {
            k((l)=>{
                if (!l) {
                    return l;
                }
                let g = Oe.indexOf(l.failureMode);
                let Oe_length = Oe.length;
                return {
                    ...l,
                    failureMode: Oe[(g + a + Oe_length) % Oe_length]
                };
            });
        } else if (t === "task_category") {
            k((l)=>{
                if (!l) {
                    return l;
                }
                let g = Ne.indexOf(l.taskCategory);
                let Ne_length = Ne.length;
                return {
                    ...l,
                    taskCategory: Ne[(g + a + Ne_length) % Ne_length]
                };
            });
        } else if (t === "transcript") {
            H((l)=>!l);
        }
    }, [
        k
    ]);
    let Rt = le(async ()=>{
        if (!o || j.current || fe.current) {
            return;
        }
        let t = x.now();
        let ae_current = ae.current;
        ae.current = Math.max(t, ae_current);
        if (t - ae_current < Ke) {
            return;
        }
        if (U()?.title.trim() === "") {
            E("Title is blank. Type a title, or press esc on the field to restore it.");
            return;
        }
        let draft = Ce() ?? o;
        j.current = true;
        L("submitting");
        E(null);
        if (draft !== o) {
            await ve(draft);
        }
        let g;
        try {
            g = await wXe({
                draft,
                includeTranscript: D && draft.transcriptAvailable,
                currentSessionMessages: messages,
                signal: abortSignal,
                storageV5,
                host,
                credentials
            });
        } catch  {
            g = {
                success: false,
                error: "Couldn't send feedback. The draft is still queued. Try again later."
            };
        }
        j.current = false;
        if (g.success) {
            await de();
            ue(g.feedbackId);
            L("receipt");
        } else {
            E(g.error);
            if (g.payloadTooLarge) {
                let v = O.indexOf("transcript");
                if (v >= 0) {
                    _(v);
                }
            }
            L("review");
        }
    }, [
        o,
        U,
        D,
        messages,
        abortSignal,
        de,
        x,
        Ce,
        ve,
        storageV5,
        credentials,
        host,
        O,
        _
    ]);
    function onKeyDown(t) {
        if (t.ctrl || t.meta) {
            return;
        }
        if (m === "submitting") {
            t.preventDefault();
            return;
        }
        if (t.key === "escape" && !(m === "review" && he)) {
            return;
        }
        if (m === "receipt") {
            t.preventDefault();
            if ((f?.length ?? 0) > 0) {
                L("list");
                A(null);
            } else {
                pe(`Feedback sent (receipt ${oe})`);
            }
            return;
        }
        if (m === "list") {
            if (!f) {
                t.preventDefault();
                return;
            }
            if (t.key.toLowerCase() === "w" && onWriteNew) {
                t.preventDefault();
                onWriteNew();
                return;
            }
            if (Qe === 0) {
                t.preventDefault();
                pe();
                return;
            }
            if (re.length > 0) {
                return;
            }
            if (t.key === "up" || t.key === "down") {
                t.preventDefault();
            } else if (t.key === "return" && onWriteNew) {
                t.preventDefault();
                onWriteNew();
            } else if (t.key !== "escape") {
                t.preventDefault();
                pe();
            }
            return;
        }
        if (m === "review" && o) {
            if (we.current) {
                t.preventDefault();
                return;
            }
            if (he) {
                if (t.key === "escape") {
                    t.preventDefault();
                    onCancel();
                }
                return;
            }
            let a = O[M()];
            if (t.key === "up") {
                t.preventDefault();
                V(-1);
            } else if (t.key === "down") {
                t.preventDefault();
                V(1);
            } else if (t.key === "left" || t.key === "right") {
                t.preventDefault();
                Tt(a, t.key === "left" ? -1 : 1);
            } else if (t.key === " " && a === "transcript") {
                t.preventDefault();
                H((l)=>!l);
            } else if (t.key === "return") {
                t.preventDefault();
                if (a === "send") {
                    Rt();
                } else {
                    V(1);
                }
            } else if (t.key.toLowerCase() === "d" && a !== "title" && a !== "area" && a !== "details") {
                t.preventDefault();
                Ze(o);
            }
        }
    }
    let onExit = le(()=>{
        if (we.current || j.current || fe.current) {
            return;
        }
        we.current = true;
        et();
        ne.current = -Infinity;
        L("list");
        A(null);
    }, [
        et
    ]);
    let onCancel = le(()=>{
        if (m !== "review") {
            pe();
            return;
        }
        let t = O[M()];
        if (t !== "title" && t !== "area" && t !== "details") {
            onExit();
            return;
        }
        k((a)=>{
            if (a && o) {
                return {
                    ...a,
                    [t]: t === "details" ? Kst(o.details) : $n(o[t] ?? "")
                };
            }
            return a;
        });
        Q(null);
        xe(O);
        E((a)=>{
            if (a === Te) {
                return null;
            }
            return a;
        });
    }, [
        m,
        o,
        O,
        M,
        onExit,
        k,
        xe,
        pe
    ]);
    let it = !(z && re.length > 0);
    let inputGuide = m === "list" ? r(be, {
        children: [
            Qe > 0 && it && e(G, {
                chord: "enter",
                action: isSelected ? "write new feedback" : "review"
            }),
            Dt !== undefined && it && e(G, {
                chord: "d",
                action: "discard"
            }),
            e(G, {
                chord: "esc",
                action: "close"
            })
        ]
    }) : m === "review" ? r(be, {
        children: [
            e(G, {
                chord: [
                    "up",
                    "down"
                ],
                action: "move"
            }),
            (p === "type" || p === "failure_mode" || p === "task_category" || p === "transcript") && e(G, {
                chord: [
                    "left",
                    "right"
                ],
                action: "change"
            }),
            e(G, {
                chord: "enter",
                action: p === "send" ? "send" : "next"
            }),
            p === "details" && e(G, {
                chord: EIe() ? "shift+enter" : "ctrl+j",
                action: "new line"
            }),
            !he && e(G, {
                chord: "d",
                action: "discard"
            }),
            e(G, {
                chord: "esc",
                action: he ? "cancel edit" : "later"
            })
        ]
    }) : null;
    return e(fo, {
        onKeyDown,
        children: r(_e, {
            title: "Feedback drafts",
            onCancel,
            isCancelActive: m !== "submitting" && !he,
            hideInputGuide: m === "receipt" || m === "submitting",
            inputGuide,
            children: [
                m === "list" && f === null && e(n, {
                    dimColor: true,
                    children: "Loading…"
                }),
                m === "list" && f !== null && re.length === 0 && r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        e(n, {
                            children: "No feedback drafts queued."
                        }),
                        e(n, {
                            dimColor: true,
                            children: "Claude drafts feedback at high-signal moments; drafts appear here for your review."
                        }),
                        onWriteNew ? r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                e(vt, {
                                    isSelected
                                }),
                                e(n, {
                                    dimColor: true,
                                    children: "/bug works anytime. Any other key closes this panel."
                                })
                            ]
                        }) : e(n, {
                            dimColor: true,
                            children: "Any key closes this panel."
                        })
                    ]
                }),
                m === "list" && f !== null && re.length > 0 && r(s, {
                    flexDirection: "column",
                    children: [
                        e(Ct, {
                            thisSession,
                            others,
                            hasWriteNew,
                            defaultFocusIndex: b,
                            onFocus: B,
                            onOpen,
                            onWriteNew: ()=>onWriteNew?.(),
                            onDiscard: (t)=>void Ze(t)
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                wrap: "wrap",
                                children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
                            })
                        })
                    ]
                }),
                m === "review" && o && T && r(s, {
                    flexDirection: "column",
                    children: [
                        r(s, {
                            children: [
                                e(K, {
                                    isFocused: p === "type"
                                }),
                                e(n, {
                                    children: "Type: "
                                }),
                                e(ye, {
                                    value: xt[T.type],
                                    isFocused: p === "type"
                                })
                            ]
                        }),
                        e(Me, {
                            label: "Title:",
                            value: T.title,
                            isFocused: p === "title",
                            bold: true,
                            columns,
                            cursorOffset,
                            onChange: (title)=>k((a)=>{
                                    if (a) {
                                        return {
                                            ...a,
                                            title
                                        };
                                    }
                                    return a;
                                }),
                            onCursorChange: Q,
                            onNext: ()=>V(1),
                            onPrev: ()=>V(-1),
                            onExit
                        }),
                        e(Me, {
                            label: "Area:",
                            value: T.area,
                            isFocused: p === "area",
                            dim: true,
                            columns,
                            cursorOffset,
                            onChange: (area)=>k((a)=>{
                                    if (a) {
                                        return {
                                            ...a,
                                            area
                                        };
                                    }
                                    return a;
                                }),
                            onCursorChange: Q,
                            onNext: ()=>V(1),
                            onPrev: ()=>V(-1),
                            onExit
                        }),
                        r(s, {
                            children: [
                                e(K, {
                                    isFocused: p === "failure_mode"
                                }),
                                e(n, {
                                    children: "Failure mode: "
                                }),
                                e(ye, {
                                    value: st(T.failureMode),
                                    isFocused: p === "failure_mode"
                                })
                            ]
                        }),
                        r(s, {
                            children: [
                                e(K, {
                                    isFocused: p === "task_category"
                                }),
                                e(n, {
                                    children: "Task: "
                                }),
                                e(ye, {
                                    value: st(T.taskCategory),
                                    isFocused: p === "task_category"
                                })
                            ]
                        }),
                        e(Me, {
                            label: "Details:",
                            value: T.details,
                            isFocused: p === "details",
                            dim: true,
                            multiline: true,
                            columns,
                            cursorOffset,
                            onChange: (t)=>{
                                let a = Buffer.byteLength(t, "utf8");
                                if (a > R3n && a >= Buffer.byteLength(T.details, "utf8")) {
                                    E(Te);
                                    return;
                                }
                                k((l)=>{
                                    if (l && l.details.trim() !== "" && t.trim() === "") {
                                        ce.current = x.now();
                                    }
                                    if (l) {
                                        return {
                                            ...l,
                                            details: t
                                        };
                                    }
                                    return l;
                                });
                                E((l)=>{
                                    if (l === Te) {
                                        return null;
                                    }
                                    return l;
                                });
                            },
                            onCursorChange: Q,
                            onNext: ()=>V(1),
                            onPrev: ()=>V(-1),
                            onExit
                        }),
                        o.transcriptAvailable ? r(s, {
                            flexDirection: "column",
                            children: [
                                r(s, {
                                    children: [
                                        e(K, {
                                            isFocused: p === "transcript"
                                        }),
                                        e(n, {
                                            children: "Send transcript: "
                                        }),
                                        e(ye, {
                                            value: D ? "yes" : "no",
                                            isFocused: p === "transcript"
                                        }),
                                        r(n, {
                                            dimColor: true,
                                            children: [
                                                " · ",
                                                D ? "sends this conversation to Anthropic" : "report only"
                                            ]
                                        })
                                    ]
                                }),
                                o.source_session_id !== ie && e(s, {
                                    marginLeft: 4,
                                    children: r(n, {
                                        dimColor: true,
                                        wrap: "wrap",
                                        children: [
                                            "from ",
                                            $n(o.cwd),
                                            " · session",
                                            " ",
                                            $n(o.source_session_id)
                                        ]
                                    })
                                })
                            ]
                        }) : r(s, {
                            children: [
                                e(K, {
                                    isFocused: false
                                }),
                                r(n, {
                                    children: [
                                        "Send transcript: ",
                                        e(n, {
                                            dimColor: true,
                                            children: "expired (report only)"
                                        })
                                    ]
                                })
                            ]
                        }),
                        r(s, {
                            marginTop: 1,
                            children: [
                                e(K, {
                                    isFocused: false
                                }),
                                r(n, {
                                    dimColor: true,
                                    wrap: "wrap",
                                    children: [
                                        "Environment info (",
                                        $n(o.os),
                                        ", v",
                                        $n(o.cli_version),
                                        ",",
                                        " ",
                                        $n(o.model),
                                        o.effort !== undefined && r(Y, {
                                            children: [
                                                ", effort",
                                                " ",
                                                $n(o.effort)
                                            ]
                                        }),
                                        o.thinking_type !== undefined && r(Y, {
                                            children: [
                                                ", thinking ",
                                                o.thinking_type,
                                                o.thinking_budget !== undefined && r(Y, {
                                                    children: [
                                                        " (budget ",
                                                        o.thinking_budget,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }),
                                        o.assistant_turn_count !== undefined && r(Y, {
                                            children: [
                                                ", turn ",
                                                o.assistant_turn_count,
                                                o.message_count !== undefined && r(Y, {
                                                    children: [
                                                        "/",
                                                        o.message_count
                                                    ]
                                                }),
                                                o.subagent_count !== undefined && o.subagent_count > 0 && r(Y, {
                                                    children: [
                                                        " ",
                                                        "with ",
                                                        o.subagent_count,
                                                        " ",
                                                        I(o.subagent_count, "subagent")
                                                    ]
                                                })
                                            ]
                                        }),
                                        ", drafted ",
                                        Ft(o.created_at),
                                        " ago)",
                                        Ie > 0 ? ` and ${Ie} API request ${I(Ie, "id")} are` : " is",
                                        " ",
                                        "always attached."
                                    ]
                                })
                            ]
                        }),
                        se && e(s, {
                            marginTop: 1,
                            children: e(es, {
                                error: se
                            })
                        }),
                        r(s, {
                            marginTop: 1,
                            children: [
                                e(K, {
                                    isFocused: p === "send"
                                }),
                                e(n, {
                                    bold: p === "send",
                                    children: "Send feedback"
                                })
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                wrap: "wrap",
                                children: "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config."
                            })
                        })
                    ]
                }),
                m === "submitting" && e(n, {
                    children: "Sending feedback…"
                }),
                m === "receipt" && r(s, {
                    flexDirection: "column",
                    children: [
                        r(n, {
                            color: "success",
                            children: [
                                e(dt, {
                                    status: "success",
                                    withSpace: true
                                }),
                                "Feedback sent (receipt ",
                                oe,
                                "). Thanks!"
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                italic: true,
                                children: "Any key to continue"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
var Te = `That edit would push Details past the ${Math.floor(R3n / 1024)}KB limit. Trim the details first.`;
function ut(h, multiline) {
    return gf(h.replace(/\r\n|\r/g, `
`)).split(`
`).map((c)=>Rn(c)).join(multiline ? `
` : " ");
}
function K(h) {
    let f = w(3);
    let { isFocused } = h;
    const c = isFocused ? "suggestion" : undefined;
    const children = isFocused ? `${te.pointer} ` : "  ";
    let C;
    if (f[0] !== c || f[1] !== children) {
        C = e(n, {
            color: c,
            children
        });
        f[0] = c;
        f[1] = children;
        f[2] = C;
    } else {
        C = f[2];
    }
    return C;
}
function ye(h) {
    let d = w(6);
    let { value, isFocused } = h;
    if (!isFocused) {
        let f;
        if (d[0] !== value) {
            f = e(n, {
                dimColor: true,
                children: value
            });
            d[0] = value;
            d[1] = f;
        } else {
            f = d[1];
        }
        return f;
    }
    let f;
    if (d[2] === S) {
        f = r(n, {
            dimColor: true,
            children: [
                te.triangleLeft,
                " "
            ]
        });
        d[2] = f;
    } else {
        f = d[2];
    }
    let C;
    if (d[3] === S) {
        C = r(n, {
            dimColor: true,
            children: [
                " ",
                te.triangleRight
            ]
        });
        d[3] = C;
    } else {
        C = d[3];
    }
    let b;
    if (d[4] !== value) {
        b = r(n, {
            children: [
                f,
                value,
                C
            ]
        });
        d[4] = value;
        d[5] = b;
    } else {
        b = d[5];
    }
    return b;
}
function Me(h) {
    let q = w(24);
    let { label, value, isFocused, bold, dim, multiline, columns, cursorOffset, onChange, onCursorChange, onNext, onPrev, onExit } = h;
    let H = nt();
    let _;
    if (q[0] !== isFocused) {
        _ = e(K, {
            isFocused
        });
        q[0] = isFocused;
        q[1] = _;
    } else {
        _ = q[1];
    }
    let M;
    if (q[2] !== label) {
        M = e(n, {
            children: label
        });
        q[2] = label;
        q[3] = M;
    } else {
        M = q[3];
    }
    let T;
    if (q[4] !== _ || q[5] !== M) {
        T = r(s, {
            children: [
                _,
                M
            ]
        });
        q[4] = _;
        q[5] = M;
        q[6] = T;
    } else {
        T = q[6];
    }
    let k;
    if (q[7] !== bold || q[8] !== columns || q[9] !== cursorOffset || q[10] !== dim || q[11] !== isFocused || q[12] !== H || q[13] !== multiline || q[14] !== onChange || q[15] !== onCursorChange || q[16] !== onExit || q[17] !== onNext || q[18] !== onPrev || q[19] !== value) {
        k = e(s, {
            marginLeft: 4,
            children: isFocused ? e(s, {
                borderStyle: multiline && !H ? "single" : undefined,
                borderLeft: true,
                borderTop: false,
                borderBottom: false,
                borderRight: false,
                borderDimColor: true,
                paddingLeft: multiline && !H ? 1 : 0,
                children: e(Sr, {
                    value,
                    onChange,
                    columns: multiline && !H ? columns - 2 : columns,
                    onSubmit: onNext,
                    onExit,
                    onHistoryUp: onPrev,
                    onHistoryDown: onNext,
                    cursorOffset: cursorOffset ?? value.length,
                    onChangeCursorOffset: onCursorChange,
                    multiline,
                    inputFilter: (U)=>ut(U, multiline),
                    clearOnSubmit: false,
                    disableCtrlCClear: true,
                    disableBackslashReturn: multiline,
                    disableCursorMovementForUpDownKeys: !multiline,
                    disableEscapeDoublePress: true,
                    showCursor: true,
                    focus: true
                })
            }) : multiline ? e(Q0t, {
                value,
                bold,
                dim,
                columns
            }) : e(n, {
                bold,
                dimColor: dim,
                wrap: "wrap",
                children: $n(value)
            })
        });
        q[7] = bold;
        q[8] = columns;
        q[9] = cursorOffset;
        q[10] = dim;
        q[11] = isFocused;
        q[12] = H;
        q[13] = multiline;
        q[14] = onChange;
        q[15] = onCursorChange;
        q[16] = onExit;
        q[17] = onNext;
        q[18] = onPrev;
        q[19] = value;
        q[20] = k;
    } else {
        k = q[20];
    }
    let W;
    if (q[21] !== T || q[22] !== k) {
        W = r(s, {
            flexDirection: "column",
            children: [
                T,
                k
            ]
        });
        q[21] = T;
        q[22] = k;
        q[23] = W;
    } else {
        W = q[23];
    }
    return W;
}
const label = "+ Write new feedback";
function vt(h) {
    let f = w(3);
    let { isSelected } = h;
    const c = isSelected ? "suggestion" : undefined;
    const d = isSelected ? `${te.pointer} ` : "  ";
    let C;
    if (f[0] !== c || f[1] !== d) {
        C = r(n, {
            color: c,
            children: [
                d,
                label
            ]
        });
        f[0] = c;
        f[1] = d;
        f[2] = C;
    } else {
        C = f[2];
    }
    return C;
}
function Ct(h) {
    let o = w(34);
    let { thisSession, others, hasWriteNew, defaultFocusIndex, onFocus, onOpen, onWriteNew, onDiscard } = h;
    let { rows } = ns(ke());
    let L = el();
    let A;
    if (o[0] !== others || o[1] !== thisSession) {
        A = [
            ...thisSession,
            ...others
        ];
        o[0] = others;
        o[1] = thisSession;
        o[2] = A;
    } else {
        A = o[2];
    }
    let D = A;
    let H = (thisSession.length > 0 ? 1 : 0) + (others.length > 0 ? 1 : 0) + D.length + (hasWriteNew ? 2 : 0);
    let q = Math.max(ct, rows - lt - (L ? 0 : at));
    const visibleCount = H > q ? q - 2 : q;
    let onSelect;
    if (o[3] !== onOpen || o[4] !== onWriteNew || o[5] !== D) {
        onSelect = (T)=>{
            let k = D[T];
            if (k) {
                onOpen(k);
            } else {
                onWriteNew();
            }
        };
        o[3] = onOpen;
        o[4] = onWriteNew;
        o[5] = D;
        o[6] = onSelect;
    } else {
        onSelect = o[6];
    }
    let onRowKeyDown;
    if (o[7] !== onDiscard || o[8] !== D) {
        onRowKeyDown = (W, Q)=>{
            let ce = D[Q];
            if (W.key.toLowerCase() === "d" && ce && !W.ctrl && !W.meta) {
                W.preventDefault();
                onDiscard(ce);
            }
        };
        o[7] = onDiscard;
        o[8] = D;
        o[9] = onRowKeyDown;
    } else {
        onRowKeyDown = o[9];
    }
    let se;
    if (o[10] !== thisSession.length) {
        se = thisSession.length > 0 && e(Cl.Heading, {
            children: e(n, {
                bold: true,
                children: "This session"
            })
        }, "this-session");
        o[10] = thisSession.length;
        o[11] = se;
    } else {
        se = o[11];
    }
    let E;
    if (o[12] !== thisSession) {
        E = thisSession.map(Xt);
        o[12] = thisSession;
        o[13] = E;
    } else {
        E = o[13];
    }
    let oe;
    if (o[14] !== others.length) {
        oe = others.length > 0 && e(Cl.Heading, {
            children: e(n, {
                bold: true,
                children: "Other sessions"
            })
        }, "other-sessions");
        o[14] = others.length;
        o[15] = oe;
    } else {
        oe = o[15];
    }
    let ue;
    if (o[16] !== others) {
        ue = others.map(Jt);
        o[16] = others;
        o[17] = ue;
    } else {
        ue = o[17];
    }
    let ee;
    if (o[18] !== hasWriteNew) {
        ee = hasWriteNew && e(Cl.Heading, {}, "gap");
        o[18] = hasWriteNew;
        o[19] = ee;
    } else {
        ee = o[19];
    }
    let x;
    if (o[20] !== hasWriteNew) {
        x = hasWriteNew && e(tn.Item, {
            label
        }, "write-new");
        o[20] = hasWriteNew;
        o[21] = x;
    } else {
        x = o[21];
    }
    let ae;
    if (o[22] !== defaultFocusIndex || o[23] !== onFocus || o[24] !== x || o[25] !== visibleCount || o[26] !== onSelect || o[27] !== onRowKeyDown || o[28] !== se || o[29] !== E || o[30] !== oe || o[31] !== ue || o[32] !== ee) {
        ae = r(tn, {
            visibleCount,
            defaultFocusIndex,
            overflowHint: "count",
            onFocus,
            onSelect,
            onRowKeyDown,
            children: [
                se,
                E,
                oe,
                ue,
                ee,
                x
            ]
        });
        o[22] = defaultFocusIndex;
        o[23] = onFocus;
        o[24] = x;
        o[25] = visibleCount;
        o[26] = onSelect;
        o[27] = onRowKeyDown;
        o[28] = se;
        o[29] = E;
        o[30] = oe;
        o[31] = ue;
        o[32] = ee;
        o[33] = ae;
    } else {
        ae = o[33];
    }
    return ae;
}
function Le(h) {
    return [
        xt[h.type],
        Ft(h.created_at),
        $n(h.cwd),
        h.transcriptAvailable ? "transcript available" : "transcript expired (report only)"
    ];
}
function Ft(created_at, u = Date.now()) {
    let c = u - Date.parse(created_at);
    if (!Number.isFinite(c) || c < 0) {
        return "now";
    }
    let d = Math.floor(c / 60000);
    if (d < 60) {
        return `${Math.max(1, d)}m`;
    }
    let f = Math.floor(d / 60);
    if (f < 24) {
        return `${f}h`;
    }
    return `${Math.floor(f / 24)}d`;
}
export { fmt };
