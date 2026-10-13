import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Ke } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { El, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { vr, Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { RO, FCr } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Ti, yde } from "/$bunfs/root/chunk-gr4a0fky.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { jr, Ir, le, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { aJ, yD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { is } from "/$bunfs/root/chunk-972pd37y.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { fmt } from "/$bunfs/root/chunk-kws8vn2z.js";
import { XMo, JMo } from "/$bunfs/root/chunk-tmrtnnjz.js";
import { dfe, A9e, Tqn } from "/$bunfs/root/chunk-5eqja8yr.js";
import { Zwe } from "/$bunfs/root/chunk-4n7np37s.js";
import { fo } from "/$bunfs/root/chunk-p78rzsw0.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { zG } from "/$bunfs/root/chunk-a2x2kqsc.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
N();
const go = 7250;
const ho = 200;
const Xe = "https://github.com/anthropics/claude-code/issues";
const ye = {
    session: "this session only",
    day: "this session + this project’s other sessions from the last 24 hours",
    week: "this session + this project’s other sessions from the last 7 days"
};
const options = [
    {
        label: "This session only",
        value: "session"
    },
    {
        label: "This session + the last 24 hours",
        value: "day"
    },
    {
        label: "This session + the last 7 days",
        value: "week"
    }
];
const J = {
    post: {
        consentAction: "submit",
        consentIntro: "This report will include:",
        consentFooter: "We may use these to debug related issues and improve Claude Code.",
        submitting: "Submitting report…"
    },
    bundle: {
        consentAction: "save",
        consentIntro: "An archive will be saved to disk containing:",
        consentFooter: "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
        submitting: "Saving bundle…"
    },
    share: {
        consentAction: "share",
        consentIntro: "This shared conversation will include:",
        consentFooter: "A shareable link will be created so you can post the conversation for debugging and support.",
        submitting: "Uploading share…"
    }
};
function Se(l) {
    let o = gs({
        status: "none"
    });
    let { subscribe, getSnapshot } = o;
    if (l === "share") {
        return {
            subscribe,
            getSnapshot,
            start () {},
            deliver () {},
            save () {},
            fail () {},
            abandon () {}
        };
    }
    return {
        subscribe,
        getSnapshot,
        start () {
            o.setState(()=>({
                    status: "sending"
                }));
        },
        deliver (g) {
            o.setState(()=>({
                    status: "delivered",
                    referenceId: g
                }));
        },
        save (g, bundlePath) {
            o.setState(()=>({
                    status: "saved",
                    referenceId: g,
                    bundlePath
                }));
        },
        fail (reason) {
            o.setState((h)=>{
                if (h.status === "delivered" || h.status === "saved") {
                    return h;
                }
                return {
                    status: "failed",
                    reason
                };
            });
        },
        abandon () {
            o.setState((g)=>{
                if (g.status === "sending") {
                    return {
                        status: "none"
                    };
                }
                return g;
            });
        }
    };
}
async function kt(l, o) {
    try {
        await l();
    } finally{
        o.abandon();
    }
}
function vt({ abortController, messages, initialDescription, onDone, applyMessageOp, backgroundTasks = {}, mode = "post", readFileState, surveyFeedbackSource, command = "/feedback", send }) {
    let { storageV5, credentials } = Pe();
    let host = is();
    let [Ce, _] = y("userInput");
    let [cursorOffset, onChangeCursorOffset] = y(0);
    let [K, _t] = y(initialDescription ?? "");
    let [Pt, ve] = y(null);
    let [Ut, $t] = y(null);
    let [Tt, oe] = y(null);
    let [x] = y(()=>send ?? Se(mode));
    let Ot = Re(x);
    let [xt, et] = y(false);
    let [Et, Lt] = y(null);
    let E = Et ?? Ot;
    let Q = mode !== "share" && !xt && E.status !== "none";
    let Bt = Q && E.status !== "failed";
    let Nt = E.status === "sending" ? "submitting" : "done";
    let v = Bt ? Nt : Ce;
    let Ht = Q && E.status === "failed" ? E.reason : null;
    let error = Tt ?? Ht;
    let se = Q && (E.status === "delivered" || E.status === "saved") ? E.referenceId : Pt;
    let me = Q && E.status === "saved" ? E.bundlePath : Ut;
    let ie = Mt();
    let tt = ie ? vr()?.sessionId ?? null : null;
    let [gitStatePromise] = y(()=>{
        if (ie) {
            return Promise.resolve(null);
        }
        return RO().then((p)=>{
            if (p) {
                return FCr();
            }
            return null;
        }).catch(()=>null);
    });
    let [ot, Wt] = y(null);
    let [ce, zt] = y("session");
    let transcripts = V((p)=>p.transcripts);
    let columns = ke().columns - 4;
    let vo = Zwe();
    let fe = k("tengu_amber_lynx", false);
    let st = le(async ()=>{
        _("submitting");
        oe(null);
        ve(null);
        x.start();
        let p = (T)=>{
            oe(T);
            _("userInput");
            x.fail(T);
        };
        if (mode === "bundle") {
            let T = await Tqn({
                messages,
                description: K,
                surface: "cli",
                scope: ce,
                backgroundTasks,
                transcripts,
                signal: abortController.signal,
                surveyFeedbackSource,
                storageV5,
                host
            });
            if (abortController.signal.aborted) {
                return;
            }
            if (T.success) {
                ve(T.bundleId);
                $t(T.zipPath);
                _("done");
                x.save(T.bundleId, T.zipPath);
            } else {
                p(`Couldn't save the feedback bundle to disk: ${T.error}`);
            }
            return;
        }
        let [R, Jt] = await Promise.all([
            A9e({
                messages,
                description: K,
                surface: "cli",
                scope: ce,
                backgroundTasks,
                transcripts,
                signal: abortController.signal,
                surveyFeedbackSource,
                storageV5,
                host,
                credentials
            }),
            fe ? Promise.resolve(null) : Ct(K, abortController.signal, credentials)
        ]);
        if (abortController.signal.aborted) {
            return;
        }
        Wt(Jt);
        if (R.success) {
            ve(R.feedbackId);
            _("done");
            x.deliver(R.feedbackId);
        } else if (R.isZdrOrg) {
            p("Feedback collection is not available for organizations with custom data retention policies.");
        } else if (R.failureReason === "auth_error") {
            p("Couldn't send feedback: not signed in. Run /login, then retry.");
        } else if (R.failureReason === "policy_blocked") {
            p(yde(command) ?? "Feedback is disabled by your organization's policy.");
        } else {
            let T = R.statusCode ? ` (server returned ${R.statusCode})` : R.failureReason === "timeout" ? " (request timed out)" : R.failureReason === "network_error" ? " (couldn't reach the service)" : "";
            p(`Couldn't send feedback${T}. If it keeps failing, you can file at ${Xe} instead.`);
        }
    }, [
        K,
        messages,
        fe,
        backgroundTasks,
        transcripts,
        abortController,
        mode,
        ce,
        storageV5,
        credentials,
        x,
        host
    ]);
    let Vt = le(()=>kt(st, x), [
        st,
        x
    ]);
    let onCancel = le(()=>{
        if (Q) {
            let p = x.getSnapshot();
            Lt((R)=>R ?? p);
        }
        abortController.abort();
        onDone("Feedback / bug report cancelled", {
            display: "system"
        });
    }, [
        onDone,
        abortController,
        x,
        Q
    ]);
    let wo = le(()=>{
        _("done");
    }, []);
    let Fo = le((p)=>{
        oe(p);
        _("userInput");
    }, []);
    Ze("confirm:no", onCancel, {
        context: "Settings",
        isActive: v === "userInput"
    });
    let qt = v === "done" || error && v !== "userInput";
    function onKeyDown(p) {
        if (p.ctrl || p.meta) {
            return;
        }
        if (v === "done") {
            p.preventDefault();
            if (mode === "share") {
                return;
            }
            if (!fe && p.key === "return" && ot) {
                let R = St(se ?? "", ot, K);
                Fs(R);
            }
            if (error) {
                onDone("Error submitting feedback / bug report", {
                    display: "system"
                });
            } else if (mode === "bundle" && me) {
                onDone(`Feedback bundle saved to \`${me}\``, {
                    display: "system"
                });
            } else {
                onDone("Feedback / bug report submitted", {
                    display: "system"
                });
            }
            return;
        }
        if (error && v !== "userInput") {
            p.preventDefault();
            onDone("Error submitting feedback / bug report", {
                display: "system"
            });
            return;
        }
        if (v === "consent") {
            if (p.key === "left") {
                p.preventDefault();
                _(mode === "share" || ie ? "userInput" : "scope");
                return;
            }
            if (p.key === "return" || p.key === " ") {
                p.preventDefault();
                Vt();
            }
        }
    }
    return e(fo, {
        onKeyDown,
        children: r(_e, {
            title: "Submit feedback / bug report",
            onCancel,
            isCancelActive: v !== "userInput" && !qt,
            hideInputGuide: v === "done",
            inputGuide: v === "userInput" ? r(be, {
                children: [
                    e(G, {
                        chord: "enter",
                        action: "continue"
                    }),
                    e(ut, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel"
                    })
                ]
            }) : v === "scope" ? r(be, {
                children: [
                    e(G, {
                        chord: "enter",
                        action: "choose"
                    }),
                    e(ut, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel"
                    })
                ]
            }) : v === "consent" ? r(be, {
                children: [
                    e(G, {
                        chord: "enter",
                        action: J[mode].consentAction
                    }),
                    e(G, {
                        chord: "left",
                        action: "change"
                    }),
                    e(ut, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel"
                    })
                ]
            }) : null,
            children: [
                v === "userInput" && r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        e(n, {
                            children: "Describe the issue below:"
                        }),
                        e(Sr, {
                            value: K,
                            onChange: (p)=>{
                                _t(p);
                                et(true);
                                if (error) {
                                    oe(null);
                                }
                            },
                            columns,
                            onSubmit: (p)=>{
                                et(true);
                                if (mode !== "share" && p.trim() === "") {
                                    oe("Please describe the issue before submitting.");
                                    return;
                                }
                                oe(null);
                                _(mode === "share" || ie ? "consent" : "scope");
                            },
                            onExitMessage: (p)=>{
                                if (p) {
                                    abortController.abort();
                                    onDone("Feedback cancelled", {
                                        display: "system"
                                    });
                                }
                            },
                            cursorOffset,
                            onChangeCursorOffset,
                            showCursor: true,
                            focus: true
                        }),
                        error && r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                e(es, {
                                    error
                                }),
                                e(n, {
                                    dimColor: true,
                                    children: "Edit and press Enter to retry, or Esc to cancel"
                                })
                            ]
                        })
                    ]
                }),
                v === "scope" && r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        e(n, {
                            children: "How much session history should we include?"
                        }),
                        e(Ve, {
                            options,
                            defaultFocusValue: ce,
                            onChange: (p)=>{
                                zt(p);
                                _("consent");
                            },
                            onCancel
                        })
                    ]
                }),
                v === "consent" && r(s, {
                    flexDirection: "column",
                    children: [
                        e(n, {
                            children: J[mode].consentIntro
                        }),
                        r(s, {
                            marginLeft: 2,
                            flexDirection: "column",
                            children: [
                                r(n, {
                                    children: [
                                        "- Your feedback / bug description:",
                                        " ",
                                        e(n, {
                                            dimColor: true,
                                            children: K
                                        })
                                    ]
                                }),
                                r(n, {
                                    children: [
                                        "- Environment info:",
                                        " ",
                                        r(n, {
                                            dimColor: true,
                                            children: [
                                                a.platform,
                                                ", ",
                                                a.terminal,
                                                ", v",
                                                {
                                                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                                                    PACKAGE_URL: "@anthropic-ai/claude-code",
                                                    README_URL: "https://code.claude.com/docs/en/overview",
                                                    VERSION: "2.1.296",
                                                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                                                    BUILD_TIME: "2026-10-09T01:31:52Z",
                                                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                                                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                                    DD_SOURCEMAP_GROUP: "default"
                                                }.VERSION,
                                                ""
                                            ]
                                        })
                                    ]
                                }),
                                mode !== "share" && ie && r(n, {
                                    children: [
                                        "- Remote workspace:",
                                        " ",
                                        r(n, {
                                            dimColor: true,
                                            children: [
                                                tt ? `session ${tt}; ` : "",
                                                "git metadata is not collected from this machine"
                                            ]
                                        })
                                    ]
                                }),
                                mode !== "share" && e(jr, {
                                    fallback: null,
                                    children: e(Je, {
                                        gitStatePromise
                                    })
                                }),
                                r(n, {
                                    children: [
                                        "- Session transcript:",
                                        " ",
                                        e(n, {
                                            dimColor: true,
                                            children: mode === "share" ? ye.session : ye[ce]
                                        })
                                    ]
                                }),
                                mode !== "share" && r(n, {
                                    children: [
                                        "- Recent error messages:",
                                        " ",
                                        e(n, {
                                            dimColor: true,
                                            children: "up to the last 100 since you launched Claude Code (may include file paths)"
                                        })
                                    ]
                                })
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                wrap: "wrap",
                                dimColor: true,
                                children: J[mode].consentFooter
                            })
                        })
                    ]
                }),
                v === "submitting" && mode !== "share" && e(s, {
                    flexDirection: "row",
                    gap: 1,
                    children: e(n, {
                        children: J[mode].submitting
                    })
                }),
                v === "done" && mode === "bundle" && r(s, {
                    flexDirection: "column",
                    children: [
                        r(n, {
                            color: "success",
                            children: [
                                e(dt, {
                                    status: "success",
                                    withSpace: true
                                }),
                                "Feedback bundle saved"
                            ]
                        }),
                        me && r(s, {
                            marginTop: 1,
                            flexDirection: "column",
                            children: [
                                r(n, {
                                    children: [
                                        "Bundle: ",
                                        e(n, {
                                            dimColor: true,
                                            children: me
                                        })
                                    ]
                                }),
                                r(n, {
                                    children: [
                                        "Reference ID: ",
                                        e(n, {
                                            dimColor: true,
                                            children: se
                                        })
                                    ]
                                }),
                                e(s, {
                                    marginTop: 1,
                                    children: e(n, {
                                        wrap: "wrap",
                                        children: "Send this file to your Anthropic account representative or attach it to your support request."
                                    })
                                })
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                children: "Press any key to close"
                            })
                        })
                    ]
                }),
                v === "done" && mode === "post" && (fe || Q ? r(s, {
                    flexDirection: "column",
                    children: [
                        error ? e(es, {
                            error
                        }) : r(n, {
                            color: "success",
                            children: [
                                e(dt, {
                                    status: "success",
                                    withSpace: true
                                }),
                                "Feedback sent"
                            ]
                        }),
                        se && r(Y, {
                            children: [
                                e(s, {
                                    marginTop: 1,
                                    children: r(n, {
                                        children: [
                                            "Reference ID: ",
                                            e(n, {
                                                dimColor: true,
                                                children: se
                                            })
                                        ]
                                    })
                                }),
                                e(s, {
                                    marginTop: 1,
                                    children: e(n, {
                                        wrap: "wrap",
                                        children: "If you're working with Anthropic support, please include the ID above."
                                    })
                                })
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                italic: true,
                                children: "Any key to close"
                            })
                        })
                    ]
                }) : r(s, {
                    flexDirection: "column",
                    children: [
                        error ? e(es, {
                            error
                        }) : e(n, {
                            color: "success",
                            children: "Thank you for your report!"
                        }),
                        se && r(n, {
                            dimColor: true,
                            children: [
                                "Feedback ID: ",
                                se
                            ]
                        }),
                        e(s, {
                            marginTop: 1,
                            children: e(n, {
                                dimColor: true,
                                italic: true,
                                children: r(be, {
                                    children: [
                                        e(G, {
                                            chord: "enter",
                                            action: "open GitHub issue"
                                        }),
                                        e(n, {
                                            children: "any key to close"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })),
                null
            ]
        })
    });
}
function St(l, o, i) {
    let u = ne(ps(o), ho);
    let g = ps(i);
    let h = Zwe();
    let f = `${Xe}/new?title=${encodeURIComponent(u)}&labels=user-reported,bug&body=`;
    let D = encodeURIComponent(`**Bug Description**
`);
    let C = encodeURIComponent(`

**Environment Info**
- Platform: ${a.platform}
- Terminal: ${a.terminal}
- Version: ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION || "unknown"}
- Feedback ID: ${l}
`);
    let A = encodeURIComponent(g);
    let q = go - f.length - D.length - C.length;
    if (A.length > q) {
        let te = encodeURIComponent(`\u2026

**Note:** The description was shortened to fit GitHub's link length limit. The full description was sent to Anthropic with the feedback report; its Feedback ID is below.`);
        let pe = 50;
        let ae = q - te.length - 50;
        A = "";
        for (let Ce of g){
            let _ = encodeURIComponent(Ce);
            if (A.length + _.length > ae) {
                break;
            }
            A += _;
        }
        A += te;
    }
    return f + D + A + C;
}
async function Ct(userPrompt, signal, credentials) {
    try {
        let u = await yD({
            systemPrompt: Ti([
                "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.",
                "Claude Code is an agentic coding CLI based on the Anthropic API.",
                "The title should:",
                "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title",
                "- Be concise, specific and descriptive of the actual problem",
                "- Use technical terminology appropriate for a software issue",
                '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)',
                "- Be direct and clear for developers to understand the problem",
                '- If you cannot determine a clear issue, use "Bug Report: [brief description]"',
                "- Any LLM API errors are from the Anthropic API, not from any other model provider",
                "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination",
                'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"'
            ]),
            userPrompt,
            signal,
            options: {
                hasAppendSystemPrompt: false,
                toolChoice: undefined,
                isNonInteractiveSession: false,
                agents: [],
                querySource: "feedback",
                mcpTools: [],
                agentContext: El(),
                credentials
            }
        });
        let g = u.message.content[0]?.type === "text" ? u.message.content[0].text : "Bug Report";
        if (aJ(g)) {
            return qe(userPrompt);
        }
        if (yo(g)) {
            return qe(userPrompt);
        }
        return g;
    } catch (error) {
        if (Ke(error)) {
            t("Feedback title generation via Haiku aborted, using fallback", {
                level: "debug"
            });
        } else {
            c(error);
        }
        return qe(userPrompt);
    }
}
const bo = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function yo(l) {
    let o = l.trim();
    return o === "" || bo.test(o);
}
function qe(userPrompt) {
    let o = Tr(userPrompt);
    if (o.length <= 60 && o.length > 5) {
        return o;
    }
    let i = o.slice(0, 60);
    if (o.length > 60) {
        let u = i.lastIndexOf(" ");
        if (u > 30) {
            i = i.slice(0, u);
        }
        i += "...";
    }
    if (i.length < 10) {
        return "Bug Report";
    }
    return i;
}
function Je(l) {
    let g = w(8);
    let { gitStatePromise } = l;
    let i = Ir(gitStatePromise);
    if (!i) {
        return null;
    }
    const i_branchName = i.branchName;
    let h;
    if (g[0] !== i.commitHash) {
        h = i.commitHash ? `, ${i.commitHash.slice(0, 7)}` : "";
        g[0] = i.commitHash;
        g[1] = h;
    } else {
        h = g[1];
    }
    const f = i.remoteUrl ? ` @ ${i.remoteUrl}` : "";
    const D = !i.isHeadOnRemote && ", not synced";
    const C = !i.isClean && ", has local changes";
    let A;
    if (g[2] !== i.branchName || g[3] !== h || g[4] !== f || g[5] !== D || g[6] !== C) {
        A = r(n, {
            children: [
                "- Git repo metadata:",
                " ",
                r(n, {
                    dimColor: true,
                    children: [
                        i_branchName,
                        h,
                        f,
                        D,
                        C
                    ]
                })
            ]
        });
        g[2] = i.branchName;
        g[3] = h;
        g[4] = f;
        g[5] = D;
        g[6] = C;
        g[7] = A;
    } else {
        A = g[7];
    }
    return A;
}
function bHs(l, abortController, messages, applyMessageOp, initialDescription = "", backgroundTasks = {}, readFileState, command = "/feedback") {
    let C = dfe(command);
    if (C.kind === "disabled") {
        l(C.reason);
        return null;
    }
    let surveyFeedbackSource = JMo() ?? undefined;
    let send = Se(C.kind);
    return e(vt, {
        abortController,
        messages,
        initialDescription,
        onDone: l,
        applyMessageOp,
        backgroundTasks,
        mode: C.kind,
        readFileState,
        surveyFeedbackSource,
        command,
        send
    });
}
function Qe(l, o, i, u) {
    return bHs(l, lr(), o.messages, o.applyMessageOp, i, {
        ...o.taskRegistry.all()
    }, o.readFileState, u);
}
async function $4n(l, o, i, u = "/feedback") {
    let g = i?.trim() === "public" ? "" : i || "";
    return Qe(l, o, g, u);
}
function At(l) {
    let h = w(10);
    let { onDone, caller, manualDialog } = l;
    let g = Re(manualDialog);
    let f;
    if (h[0] !== caller.messages) {
        f = ()=>[
                ...caller.messages
            ];
        h[0] = caller.messages;
        h[1] = f;
    } else {
        f = h[1];
    }
    let [D] = y(f);
    if (g !== undefined) {
        return g;
    }
    let onWriteNew;
    if (h[2] !== caller || h[3] !== manualDialog || h[4] !== onDone) {
        onWriteNew = ()=>{
            if (manualDialog.getState() !== undefined) {
                return;
            }
            let A = Qe(onDone, caller, "", "/feedback");
            manualDialog.setState(()=>A);
        };
        h[2] = caller;
        h[3] = manualDialog;
        h[4] = onDone;
        h[5] = onWriteNew;
    } else {
        onWriteNew = h[5];
    }
    let q;
    if (h[6] !== D || h[7] !== onDone || h[8] !== onWriteNew) {
        q = e(fmt, {
            messages: D,
            onDone,
            onWriteNew
        });
        h[6] = D;
        h[7] = onDone;
        h[8] = onWriteNew;
        h[9] = q;
    } else {
        q = h[9];
    }
    return q;
}
async function pBs(l, caller, i) {
    if (zG() && !i?.trim() && !XMo()) {
        return e(At, {
            onDone: l,
            caller,
            manualDialog: gs(undefined)
        });
    }
    return $4n(l, caller, i);
}
export { bHs, $4n, pBs };
