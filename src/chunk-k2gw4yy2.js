import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Jee, fXn, Eyt, iEe, mXn } from "/$bunfs/root/chunk-6w83p5r5.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { fo } from "/$bunfs/root/chunk-p78rzsw0.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Oe() {
    i("tengu_grove_privacy_settings_viewed", {});
}
const children = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
function Q() {
    let a = w(9);
    let f;
    if (a[0] === S) {
        f = r(n, {
            children: [
                "An update to our Consumer Terms and Privacy Policy will take effect on",
                " ",
                e(n, {
                    bold: true,
                    children: "October 8, 2025"
                }),
                ". You can accept the updated terms today."
            ]
        });
        a[0] = f;
    } else {
        f = a[0];
    }
    let c;
    if (a[1] === S) {
        c = e(n, {
            children: "What's changing?"
        });
        a[1] = c;
    } else {
        c = a[1];
    }
    let p;
    let g;
    if (a[2] === S) {
        p = e(n, {
            children: "· "
        });
        g = e(n, {
            bold: true,
            children: "Help improve our AI models "
        });
        a[2] = p;
        a[3] = g;
    } else {
        p = a[2];
        g = a[3];
    }
    let A;
    if (a[4] === S) {
        A = e(s, {
            paddingLeft: 1,
            children: r(n, {
                children: [
                    p,
                    g,
                    r(n, {
                        children: [
                            "— Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (",
                            e(Wt, {
                                url: "https://claude.ai/settings/data-privacy-controls"
                            }),
                            ")."
                        ]
                    })
                ]
            })
        });
        a[4] = A;
    } else {
        A = a[4];
    }
    let o;
    if (a[5] === S) {
        o = r(s, {
            flexDirection: "column",
            children: [
                c,
                A,
                e(s, {
                    paddingLeft: 1,
                    children: r(n, {
                        children: [
                            e(n, {
                                children: "· "
                            }),
                            e(n, {
                                bold: true,
                                children: "Updates to data retention "
                            }),
                            e(n, {
                                children: "— To help us improve our AI models and safety protections, we're extending data retention to 5 years."
                            })
                        ]
                    })
                })
            ]
        });
        a[5] = o;
    } else {
        o = a[5];
    }
    let l;
    if (a[6] === S) {
        l = e(Wt, {
            url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
        });
        a[6] = l;
    } else {
        l = a[6];
    }
    let u;
    if (a[7] === S) {
        u = e(Wt, {
            url: "https://anthropic.com/legal/terms"
        });
        a[7] = u;
    } else {
        u = a[7];
    }
    let t;
    if (a[8] === S) {
        t = r(Y, {
            children: [
                f,
                o,
                r(n, {
                    children: [
                        "Learn more (",
                        l,
                        ") or read the updated Consumer Terms (",
                        u,
                        ") and Privacy Policy (",
                        e(Wt, {
                            url: "https://anthropic.com/legal/privacy"
                        }),
                        ")"
                    ]
                })
            ]
        });
        a[8] = t;
    } else {
        t = a[8];
    }
    return t;
}
function X() {
    let a = w(7);
    let f;
    if (a[0] === S) {
        f = e(n, {
            children: "We've updated our Consumer Terms and Privacy Policy."
        });
        a[0] = f;
    } else {
        f = a[0];
    }
    let c;
    if (a[1] === S) {
        c = e(n, {
            children: "What's changing?"
        });
        a[1] = c;
    } else {
        c = a[1];
    }
    let p;
    if (a[2] === S) {
        p = r(s, {
            flexDirection: "column",
            children: [
                e(n, {
                    bold: true,
                    children: "Help improve our AI models"
                }),
                e(n, {
                    children: "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"
                }),
                e(Wt, {
                    url: "https://claude.ai/settings/data-privacy-controls"
                })
            ]
        });
        a[2] = p;
    } else {
        p = a[2];
    }
    let g;
    if (a[3] === S) {
        g = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                c,
                p,
                r(s, {
                    flexDirection: "column",
                    children: [
                        e(n, {
                            bold: true,
                            children: "How this affects data retention"
                        }),
                        e(n, {
                            children: "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime."
                        })
                    ]
                })
            ]
        });
        a[3] = g;
    } else {
        g = a[3];
    }
    let A;
    if (a[4] === S) {
        A = e(Wt, {
            url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
        });
        a[4] = A;
    } else {
        A = a[4];
    }
    let o;
    if (a[5] === S) {
        o = e(Wt, {
            url: "https://anthropic.com/legal/terms"
        });
        a[5] = o;
    } else {
        o = a[5];
    }
    let l;
    if (a[6] === S) {
        l = r(Y, {
            children: [
                f,
                g,
                r(n, {
                    children: [
                        "Learn more (",
                        A,
                        ") or read the updated Consumer Terms (",
                        o,
                        ") and Privacy Policy (",
                        e(Wt, {
                            url: "https://anthropic.com/legal/privacy"
                        }),
                        ")"
                    ]
                })
            ]
        });
        a[6] = l;
    } else {
        l = a[6];
    }
    return l;
}
function hKn(a) {
    let t = w(38);
    let { showIfAlreadyViewed, location, onDone } = a;
    let [g, A] = y(null);
    let [o, l] = y(null);
    let { credentials } = Pe();
    let h;
    let O;
    if (t[0] !== credentials || t[1] !== location || t[2] !== onDone || t[3] !== showIfAlreadyViewed) {
        h = ()=>{
            let T = async function T() {
                let [R, I] = await Promise.all([
                    Jee(credentials),
                    iEe(credentials)
                ]);
                let v = I.success ? I.data : null;
                l(v);
                let m = mXn(R, I, showIfAlreadyViewed);
                A(m);
                if (!m) {
                    onDone("skip_rendering");
                    return;
                }
                fXn(credentials);
                i("tengu_grove_policy_viewed", {
                    location: d(location),
                    dismissable: v?.notice_is_grace_period
                });
            };
            T();
        };
        O = [
            showIfAlreadyViewed,
            location,
            onDone,
            credentials
        ];
        t[0] = credentials;
        t[1] = location;
        t[2] = onDone;
        t[3] = showIfAlreadyViewed;
        t[4] = h;
        t[5] = O;
    } else {
        h = t[4];
        O = t[5];
    }
    P(h, O);
    if (g === null) {
        return null;
    }
    if (!g) {
        return null;
    }
    let E;
    if (t[6] !== credentials || t[7] !== o?.notice_is_grace_period || t[8] !== onDone) {
        E = async function _(k) {
            F: switch(k){
                case "accept_opt_in":
                    {
                        await Eyt(true, credentials);
                        i("tengu_grove_policy_submitted", {
                            state: true,
                            dismissable: o?.notice_is_grace_period
                        });
                        break F;
                    }
                case "accept_opt_out":
                    {
                        await Eyt(false, credentials);
                        i("tengu_grove_policy_submitted", {
                            state: false,
                            dismissable: o?.notice_is_grace_period
                        });
                        break F;
                    }
                case "defer":
                    {
                        i("tengu_grove_policy_dismissed", {
                            state: true
                        });
                        break F;
                    }
                case "escape":
                    {
                        i("tengu_grove_policy_escaped", {});
                    }
            }
            onDone(k);
        };
        t[6] = credentials;
        t[7] = o?.notice_is_grace_period;
        t[8] = onDone;
        t[9] = E;
    } else {
        E = t[9];
    }
    let _ = E;
    let de;
    if (t[10] !== o?.domain_excluded) {
        de = o?.domain_excluded ? [
            {
                label: "Accept terms · Help improve our AI models: OFF (for emails with your domain)",
                value: "accept_opt_out"
            }
        ] : [
            {
                label: "Accept terms · Help improve our AI models: ON",
                value: "accept_opt_in"
            },
            {
                label: "Accept terms · Help improve our AI models: OFF",
                value: "accept_opt_out"
            }
        ];
        t[10] = o?.domain_excluded;
        t[11] = de;
    } else {
        de = t[11];
    }
    let Z = de;
    let pe;
    if (t[12] !== o?.notice_is_grace_period || t[13] !== _) {
        pe = function C() {
            if (o?.notice_is_grace_period) {
                _("defer");
                return;
            }
            _("escape");
        };
        t[12] = o?.notice_is_grace_period;
        t[13] = _;
        t[14] = pe;
    } else {
        pe = t[14];
    }
    let onCancel = pe;
    const exitOnCtrlCD = location !== "settings";
    let ue;
    if (t[15] === S) {
        ue = r(be, {
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
        });
        t[15] = ue;
    } else {
        ue = t[15];
    }
    let V;
    if (t[16] !== o?.notice_is_grace_period) {
        V = e(s, {
            flexDirection: "column",
            gap: 1,
            flexGrow: 1,
            children: o?.notice_is_grace_period ? e(Q, {}) : e(X, {})
        });
        t[16] = o?.notice_is_grace_period;
        t[17] = V;
    } else {
        V = t[17];
    }
    let me;
    if (t[18] === S) {
        me = e(s, {
            flexShrink: 0,
            children: e(n, {
                color: "professionalBlue",
                children
            })
        });
        t[18] = me;
    } else {
        me = t[18];
    }
    let L;
    if (t[19] !== V) {
        L = r(s, {
            flexDirection: "row",
            children: [
                V,
                me
            ]
        });
        t[19] = V;
        t[20] = L;
    } else {
        L = t[20];
    }
    let ge;
    if (t[21] === S) {
        ge = r(s, {
            flexDirection: "column",
            children: [
                e(n, {
                    bold: true,
                    children: "Please select how you'd like to continue"
                }),
                e(n, {
                    children: "Your choice takes effect immediately upon confirmation."
                })
            ]
        });
        t[21] = ge;
    } else {
        ge = t[21];
    }
    let B;
    if (t[22] !== o?.notice_is_grace_period) {
        B = o?.notice_is_grace_period ? [
            {
                label: "Not now",
                value: "defer"
            }
        ] : [];
        t[22] = o?.notice_is_grace_period;
        t[23] = B;
    } else {
        B = t[23];
    }
    let options;
    if (t[24] !== Z || t[25] !== B) {
        options = [
            ...Z,
            ...B
        ];
        t[24] = Z;
        t[25] = B;
        t[26] = options;
    } else {
        options = t[26];
    }
    let onChange;
    if (t[27] !== _) {
        onChange = (Se)=>_(Se);
        t[27] = _;
        t[28] = onChange;
    } else {
        onChange = t[28];
    }
    let U;
    if (t[29] !== onCancel || t[30] !== options || t[31] !== onChange) {
        U = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                ge,
                e(Ve, {
                    options,
                    onChange,
                    onCancel
                })
            ]
        });
        t[29] = onCancel;
        t[30] = options;
        t[31] = onChange;
        t[32] = U;
    } else {
        U = t[32];
    }
    let fe;
    if (t[33] !== onCancel || t[34] !== L || t[35] !== U || t[36] !== exitOnCtrlCD) {
        fe = r(_e, {
            title: "Updates to Consumer Terms and Policies",
            color: "professionalBlue",
            onCancel,
            exitOnCtrlCD,
            inputGuide: ue,
            children: [
                L,
                U
            ]
        });
        t[33] = onCancel;
        t[34] = L;
        t[35] = U;
        t[36] = exitOnCtrlCD;
        t[37] = fe;
    } else {
        fe = t[37];
    }
    return fe;
}
function yKn(a) {
    let l = w(21);
    let { settings, domainExcluded, onDone } = a;
    let [g, A] = y(settings.grove_enabled);
    let { credentials } = Pe();
    let u;
    if (l[0] === S) {
        u = [];
        l[0] = u;
    } else {
        u = l[0];
    }
    P(Oe, u);
    let t;
    if (l[1] !== credentials || l[2] !== domainExcluded || l[3] !== g) {
        t = function R(h) {
            if (h.ctrl || h.meta) {
                return;
            }
            if (!domainExcluded && (h.key === "tab" || h.key === "return" || h.key === " ")) {
                h.preventDefault();
                let O = !g;
                A(O);
                Eyt(O, credentials);
            }
        };
        l[1] = credentials;
        l[2] = domainExcluded;
        l[3] = g;
        l[4] = t;
    } else {
        t = l[4];
    }
    let onKeyDown = t;
    let I;
    if (l[5] === S) {
        I = e(n, {
            color: "error",
            children: "false"
        });
        l[5] = I;
    } else {
        I = l[5];
    }
    let v = I;
    if (domainExcluded) {
        let m;
        if (l[6] === S) {
            m = e(n, {
                color: "error",
                children: "false (for emails with your domain)"
            });
            l[6] = m;
        } else {
            m = l[6];
        }
        v = m;
    } else if (g) {
        let m;
        if (l[7] === S) {
            m = e(n, {
                color: "success",
                children: "true"
            });
            l[7] = m;
        } else {
            m = l[7];
        }
        v = m;
    }
    let m;
    if (l[8] !== domainExcluded) {
        m = domainExcluded ? e(G, {
            chord: "escape",
            action: "cancel"
        }) : r(be, {
            children: [
                e(G, {
                    chord: [
                        "enter",
                        "tab",
                        "space"
                    ],
                    action: "toggle"
                }),
                e(G, {
                    chord: "escape",
                    action: "cancel"
                })
            ]
        });
        l[8] = domainExcluded;
        l[9] = m;
    } else {
        m = l[9];
    }
    let T;
    if (l[10] === S) {
        T = r(n, {
            children: [
                "Review and manage your privacy settings at",
                " ",
                e(Wt, {
                    url: "https://claude.ai/settings/data-privacy-controls"
                })
            ]
        });
        l[10] = T;
    } else {
        T = l[10];
    }
    let E;
    if (l[11] === S) {
        E = e(s, {
            width: 44,
            children: e(n, {
                bold: true,
                children: "Help improve our AI models"
            })
        });
        l[11] = E;
    } else {
        E = l[11];
    }
    let k;
    if (l[12] !== v) {
        k = r(s, {
            children: [
                E,
                e(s, {
                    children: v
                })
            ]
        });
        l[12] = v;
        l[13] = k;
    } else {
        k = l[13];
    }
    let F;
    if (l[14] !== onKeyDown || l[15] !== k) {
        F = r(fo, {
            gap: 1,
            onKeyDown,
            children: [
                T,
                k
            ]
        });
        l[14] = onKeyDown;
        l[15] = k;
        l[16] = F;
    } else {
        F = l[16];
    }
    let _;
    if (l[17] !== onDone || l[18] !== m || l[19] !== F) {
        _ = e(_e, {
            title: "Data privacy",
            color: "professionalBlue",
            onCancel: onDone,
            inputGuide: m,
            children: F
        });
        l[17] = onDone;
        l[18] = m;
        l[19] = F;
        l[20] = _;
    } else {
        _ = l[20];
    }
    return _;
}
export { hKn, yKn };
