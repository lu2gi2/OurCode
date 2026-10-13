import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { uo, snn, LSe, eut, Nb, XT } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n, ia, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { us } from "/$bunfs/root/chunk-w72c4p0f.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { RC } from "/$bunfs/root/chunk-v5cd9p17.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { ts } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { wU } from "/$bunfs/root/chunk-c12xka2p.js";
import { Sg } from "/$bunfs/root/chunk-0v20st7x.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { pgt } from "/$bunfs/root/chunk-vzk31yq7.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Jo(R) {
    return R.split(`
`).map(Ne);
}
function Go(C, A) {
    return e(n, {
        color: C.color,
        children: C.text
    }, A);
}
function Xo(k, U) {
    return e(n, {
        dimColor: k.dim,
        children: k.segments.map(Go)
    }, U);
}
function Qo() {
    return [];
}
function Wo(Ue, de) {
    return Ue.x - de.x;
}
function Zo(E, He) {
    let M = 0;
    return e(s, {
        height: 1,
        children: E.map((_, j)=>{
            let Me = Math.max(0, _.x - M);
            M = Math.max(M, _.x) + 1;
            return r(n, {
                children: [
                    " ".repeat(Me),
                    e(n, {
                        color: _.color,
                        children: _.char
                    })
                ]
            }, j);
        })
    }, He);
}
function Oo(c) {
    return (c + 1) % J.length;
}
const Y = 3000;
const V = 48;
const height = 3;
function z(p) {
    let u = w(10);
    let { live, boxRef, children } = p;
    let l;
    if (u[0] !== children) {
        l = e(s, {
            flexDirection: "column",
            width: V - 4,
            height,
            children
        });
        u[0] = children;
        u[1] = l;
    } else {
        l = u[1];
    }
    const dimColor = !live;
    const color = live ? "claude" : undefined;
    const h = live ? `${XT} try it` : `  ${snn} demo`;
    let f;
    if (u[2] !== dimColor || u[3] !== color || u[4] !== h) {
        f = e(s, {
            position: "absolute",
            marginLeft: V - 12,
            children: e(n, {
                dimColor,
                color,
                children: h
            })
        });
        u[2] = dimColor;
        u[3] = color;
        u[4] = h;
        u[5] = f;
    } else {
        f = u[5];
    }
    let b;
    if (u[6] !== boxRef || u[7] !== l || u[8] !== f) {
        b = r(s, {
            ref: boxRef,
            borderStyle: "round",
            borderColor: "inactive",
            paddingX: 1,
            width: V,
            height: height + 2,
            children: [
                l,
                f
            ]
        });
        u[6] = boxRef;
        u[7] = l;
        u[8] = f;
        u[9] = b;
    } else {
        b = u[9];
    }
    return b;
}
const io = /\[(\w+):([^\]]*)\]/g;
function Ne(p) {
    let dim = p.startsWith("#");
    let a = dim ? p.slice(1) : p;
    let segments = [];
    let u = 0;
    for (let l of a.matchAll(io)){
        if (l.index > u) {
            segments.push({
                text: a.slice(u, l.index)
            });
        }
        segments.push({
            text: l[2],
            color: l[1]
        });
        u = l.index + l[0].length;
    }
    if (u < a.length) {
        segments.push({
            text: a.slice(u)
        });
    }
    if (segments.length === 0) {
        segments.push({
            text: ""
        });
    }
    return {
        dim,
        segments
    };
}
function v(p) {
    let b = w(4);
    let { frames } = p;
    let a = frames.map(Jo);
    let o = Sg(ql().prefersReducedMotion);
    let [u, l] = ia(o ? null : Y);
    let x = Math.floor(l / Y) % a.length;
    let g = a[x];
    const h = z;
    const f = g.map(Xo);
    let c;
    if (b[0] !== h || b[1] !== u || b[2] !== f) {
        c = e(h, {
            boxRef: u,
            children: f
        });
        b[0] = h;
        b[1] = u;
        b[2] = f;
        b[3] = c;
    } else {
        c = b[3];
    }
    return c;
}
var J = [
    {
        label: "default",
        symbol: "",
        color: "text"
    },
    {
        label: "accept edits on",
        symbol: eut,
        color: "autoAccept"
    },
    {
        label: "plan mode on",
        symbol: LSe,
        color: "planMode"
    },
    {
        label: "auto mode on",
        symbol: eut,
        color: "warning"
    }
];
const X = 80;
const Ke = 60;
const Q = 1400;
const L = 16;
const marginLeft = 60;
const Te = 100;
const yo = [
    XT,
    Nb,
    uo,
    "·"
];
const xo = [
    "claude",
    "success",
    "warning",
    "suggestion",
    "autoAccept"
];
function Ye(p) {
    let t = [];
    for(let a = 0; a < p; a++){
        t.push({
            x: Math.floor(Math.random() * Te),
            delay: Math.random() * 400,
            speed: 0.7 + Math.random() * 0.6,
            char: wU(yo),
            color: wU(xo)
        });
    }
    return t;
}
function H(p) {
    let a = w(6);
    let { onDone } = p;
    let o;
    if (a[0] === S) {
        o = Ye(40);
        a[0] = o;
    } else {
        o = a[0];
    }
    let u = o;
    let l = Sg(ql().prefersReducedMotion);
    let [x, g] = ia(l ? null : Ke);
    let [h] = y(g);
    let f = g - h;
    let b;
    if (a[1] !== onDone) {
        b = [
            onDone
        ];
        a[1] = onDone;
        a[2] = b;
    } else {
        b = a[2];
    }
    zr(onDone, Q + 600, b);
    let c;
    if (a[3] !== f || a[4] !== x) {
        let R = Array.from({
            length: L
        }, Qo);
        for (const C of u){
            let A = Math.max(0, f - C.delay);
            let k = Math.floor(A / Q * L * C.speed);
            if (k >= 0 && k < L) {
                R[k].push(C);
            }
        }
        for (const U of R){
            U.sort(Wo);
        }
        c = e(s, {
            ref: x,
            position: "absolute",
            marginLeft,
            flexDirection: "column",
            width: Te,
            height: L,
            children: R.map(Zo)
        });
        a[3] = f;
        a[4] = x;
        a[5] = c;
    } else {
        c = a[5];
    }
    return c;
}
function ee(p) {
    let h = w(14);
    let { text } = p;
    let a = ae(text);
    let o = Sg(ql().prefersReducedMotion);
    let [u, l] = ia(o ? null : X);
    let x = a + 20;
    let g = Math.floor(l / X) % x - 10;
    let f;
    if (h[0] !== g || h[1] !== text) {
        f = pgt(text, g);
        h[0] = g;
        h[1] = text;
        h[2] = f;
    } else {
        f = h[2];
    }
    let { before, shimmer, after } = f;
    let C;
    if (h[3] !== before) {
        C = e(n, {
            bold: true,
            color: "claude",
            children: before
        });
        h[3] = before;
        h[4] = C;
    } else {
        C = h[4];
    }
    let A;
    if (h[5] !== shimmer) {
        A = e(n, {
            bold: true,
            color: "claudeShimmer",
            children: shimmer
        });
        h[5] = shimmer;
        h[6] = A;
    } else {
        A = h[6];
    }
    let k;
    if (h[7] !== after) {
        k = e(n, {
            bold: true,
            color: "claude",
            children: after
        });
        h[7] = after;
        h[8] = k;
    } else {
        k = h[8];
    }
    let U;
    if (h[9] !== u || h[10] !== C || h[11] !== A || h[12] !== k) {
        U = r(s, {
            ref: u,
            children: [
                C,
                A,
                k
            ]
        });
        h[9] = u;
        h[10] = C;
        h[11] = A;
        h[12] = k;
        h[13] = U;
    } else {
        U = h[13];
    }
    return U;
}
function oe() {
    let u = w(11);
    let [p, t] = y(0);
    let a = J[p];
    let o = us("confirm:cycleMode", "Confirmation", "shift+tab");
    let l;
    let x;
    if (u[0] === S) {
        l = {
            "confirm:cycleMode": ()=>t(Oo)
        };
        x = {
            context: "Confirmation"
        };
        u[0] = l;
        u[1] = x;
    } else {
        l = u[0];
        x = u[1];
    }
    nn(l, x);
    let g;
    if (u[2] !== o) {
        g = r(n, {
            dimColor: true,
            children: [
                "Press ",
                o,
                " now",
                `

`
            ]
        });
        u[2] = o;
        u[3] = g;
    } else {
        g = u[3];
    }
    const h = a.symbol ? `${a.symbol} ` : "  ";
    let f;
    if (u[4] !== a.color || u[5] !== a.label || u[6] !== h) {
        f = r(n, {
            color: a.color,
            children: [
                h,
                a.label
            ]
        });
        u[4] = a.color;
        u[5] = a.label;
        u[6] = h;
        u[7] = f;
    } else {
        f = u[7];
    }
    let b;
    if (u[8] !== g || u[9] !== f) {
        b = e(z, {
            live: true,
            children: r(n, {
                children: [
                    g,
                    f
                ]
            })
        });
        u[8] = g;
        u[9] = f;
        u[10] = b;
    } else {
        b = u[10];
    }
    return b;
}
function B(p) {
    let a = w(2);
    let { children } = p;
    let o;
    if (a[0] !== children) {
        o = e(n, {
            bold: true,
            color: "claude",
            children
        });
        a[0] = children;
        a[1] = o;
    } else {
        o = a[1];
    }
    return o;
}
function m(p) {
    let a = w(2);
    let { children } = p;
    let o;
    if (a[0] !== children) {
        o = e(n, {
            color: "suggestion",
            children
        });
        a[0] = children;
        a[1] = o;
    } else {
        o = a[1];
    }
    return o;
}
const qO = [
    {
        id: "at-mentions",
        title: "Talk to your codebase",
        tagline: "@ files, line refs",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Type ",
                        e(B, {
                            children: "@"
                        }),
                        " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering — no more pasting code."
                    ]
                }),
                e(v, {
                    frames: [
                        `> what does [suggestion:@]
#type a file name\u2026`,
                        `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`,
                        `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`,
                        `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`
                    ]
                }),
                r(n, {
                    children: [
                        "Reference specific lines with ",
                        e(m, {
                            children: "src/app.ts:42"
                        }),
                        " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor."
                    ]
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "Also try: ",
                        e(m, {
                            children: "@folder/"
                        }),
                        " to attach a whole directory tree."
                    ]
                })
            ]
        })
    },
    {
        id: "modes",
        title: "Steer with modes",
        tagline: "shift+tab, plan, auto",
        body: e(Je, {})
    },
    {
        id: "undo",
        title: "Undo anything",
        tagline: "/rewind, Esc-Esc",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Claude checkpoints your files before every edit. Press",
                        " ",
                        e(B, {
                            children: "Esc Esc"
                        }),
                        " (double-tap) to open ",
                        e(m, {
                            children: "/rewind"
                        }),
                        " and roll back to any prior state — code, conversation, or both."
                    ]
                }),
                e(v, {
                    frames: [
                        `[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`,
                        `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`,
                        `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`
                    ]
                }),
                e(n, {
                    children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean."
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "Also: ",
                        e(m, {
                            children: "/clear"
                        }),
                        " wipes conversation but keeps files.",
                        " ",
                        e(m, {
                            children: "/branch"
                        }),
                        " forks the conversation to try two approaches."
                    ]
                })
            ]
        })
    },
    {
        id: "background",
        title: "Run in the background",
        tagline: "tasks, /tasks",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Long builds and test suites do not have to block you. Add",
                        " ",
                        e(B, {
                            children: "&"
                        }),
                        " to any bash command and it runs in the background — you keep chatting, Claude notifies you when it finishes."
                    ]
                }),
                e(v, {
                    frames: [
                        `> run the test suite [claude:&]
#task started in background`,
                        `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`,
                        `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`,
                        `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`
                    ]
                }),
                r(n, {
                    children: [
                        "Run ",
                        e(m, {
                            children: "/tasks"
                        }),
                        " to see everything in flight. Claude can read task output mid-run and react to failures automatically."
                    ]
                }),
                e(n, {
                    dimColor: true,
                    children: "Subagents also run as tasks — it is all one queue."
                })
            ]
        })
    },
    {
        id: "memory",
        title: "Teach Claude your rules",
        tagline: "CLAUDE.md, /memory",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Drop a ",
                        e(m, {
                            children: "CLAUDE.md"
                        }),
                        " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."
                    ]
                }),
                e(v, {
                    frames: [
                        `#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`,
                        `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`,
                        `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`
                    ]
                }),
                r(n, {
                    children: [
                        "Run ",
                        e(m, {
                            children: "/init"
                        }),
                        " to generate a starter CLAUDE.md from your codebase. Run ",
                        e(m, {
                            children: "/memory"
                        }),
                        " to edit it inline."
                    ]
                }),
                e(n, {
                    dimColor: true,
                    children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides."
                })
            ]
        })
    },
    {
        id: "mcp",
        title: "Extend with tools",
        tagline: "MCP, /mcp",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ",
                        e(m, {
                            children: "/mcp"
                        }),
                        " to browse and connect servers."
                    ]
                }),
                e(v, {
                    frames: [
                        `> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`,
                        `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`,
                        `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`
                    ]
                }),
                e(n, {
                    children: 'Once connected, tools appear automatically — ask Claude to "check my calendar" or "search our Notion" and it just works.'
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "From your shell:",
                        " ",
                        e(m, {
                            children: "claude mcp add my-server -- npx some-mcp-pkg"
                        }),
                        " to wire one up without leaving the terminal."
                    ]
                })
            ]
        })
    },
    {
        id: "automate",
        title: "Automate your workflow",
        tagline: "skills, hooks",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Save a prompt to ",
                        e(m, {
                            children: ".claude/skills/deploy/SKILL.md"
                        }),
                        " and it becomes ",
                        e(m, {
                            children: "/deploy"
                        }),
                        " — type it, Claude runs it. Run",
                        " ",
                        e(m, {
                            children: "/skills"
                        }),
                        " to see what you have."
                    ]
                }),
                e(v, {
                    frames: [
                        `> [suggestion:/deploy] staging
#\u25D0 skill: deploy`,
                        `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`,
                        `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`
                    ]
                }),
                r(n, {
                    children: [
                        "Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ",
                        e(m, {
                            children: "/hooks"
                        }),
                        " to see what fires when."
                    ]
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "Run ",
                        e(m, {
                            children: "/install-github-app"
                        }),
                        " to let Claude review PRs when tagged."
                    ]
                })
            ]
        })
    },
    {
        id: "subagents",
        title: "Multiply yourself",
        tagline: "subagents",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                e(n, {
                    children: 'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.'
                }),
                e(v, {
                    frames: [
                        `> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`,
                        `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`,
                        `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`,
                        `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`
                    ]
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "Subagents run in isolated context. For true parallel sessions on separate branches, launch with ",
                        e(m, {
                            children: "claude --worktree"
                        }),
                        "."
                    ]
                })
            ]
        })
    },
    {
        id: "cross-device",
        title: "Code from anywhere",
        tagline: "/remote-control, /teleport",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Run ",
                        e(m, {
                            children: "/remote-control"
                        }),
                        " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control."
                    ]
                }),
                e(v, {
                    frames: [
                        `> [suggestion:/remote-control]
#\u25D0 connecting\u2026`,
                        `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`,
                        `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`,
                        `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`
                    ]
                }),
                r(n, {
                    children: [
                        "Run ",
                        e(m, {
                            children: "/teleport"
                        }),
                        " to move a session between here and the cloud — send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history."
                    ]
                }),
                e(n, {
                    dimColor: true,
                    children: "Kick off a long task, close your laptop, check progress from your phone."
                })
            ]
        })
    },
    {
        id: "model-dial",
        title: "Dial the model",
        tagline: "/model, /effort",
        body: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(n, {
                    children: [
                        "Run ",
                        e(m, {
                            children: "/model"
                        }),
                        " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."
                    ]
                }),
                e(v, {
                    frames: [
                        `> [suggestion:/effort] high
#effort set to [claude:high]`,
                        `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`,
                        `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`
                    ]
                }),
                r(n, {
                    children: [
                        e(m, {
                            children: "/effort"
                        }),
                        " controls how long Claude thinks before answering.",
                        " ",
                        e(B, {
                            children: "high"
                        }),
                        " for tricky bugs, ",
                        e(B, {
                            children: "low"
                        }),
                        " when you just need a quick edit."
                    ]
                }),
                r(n, {
                    dimColor: true,
                    children: [
                        "Also: ",
                        e(m, {
                            children: "/fast"
                        }),
                        " toggles fast mode — same model, faster output."
                    ]
                })
            ]
        })
    }
];
function ne() {
    let p = w(1);
    let t;
    if (p[0] === S) {
        t = e(n, {
            dimColor: true,
            italic: true,
            children: r(be, {
                children: [
                    e(G, {
                        chord: [
                            "up",
                            "down"
                        ],
                        action: "select"
                    }),
                    e(G, {
                        chord: "enter",
                        action: "open"
                    }),
                    e(G, {
                        chord: "escape",
                        action: "close"
                    })
                ]
            })
        });
        p[0] = t;
    } else {
        t = p[0];
    }
    return t;
}
function se() {
    let p = w(1);
    let t;
    if (p[0] === S) {
        t = e(n, {
            dimColor: true,
            italic: true,
            children: r(be, {
                children: [
                    e(G, {
                        chord: "enter",
                        action: "mark done"
                    }),
                    e(G, {
                        chord: "escape",
                        action: "back"
                    })
                ]
            })
        });
        p[0] = t;
    } else {
        t = p[0];
    }
    return t;
}
function Je() {
    let p = w(9);
    let t;
    let a;
    if (p[0] === S) {
        t = r(n, {
            children: [
                "Press ",
                e(B, {
                    children: "shift+tab"
                }),
                " to cycle permission modes. Each mode changes how much Claude asks before acting:"
            ]
        });
        a = e(oe, {});
        p[0] = t;
        p[1] = a;
    } else {
        t = p[0];
        a = p[1];
    }
    let o;
    if (p[2] === S) {
        o = r(n, {
            children: [
                e(n, {
                    color: "success",
                    children: "default"
                }),
                " — ask before every edit"
            ]
        });
        p[2] = o;
    } else {
        o = p[2];
    }
    let u;
    if (p[3] === S) {
        u = r(n, {
            children: [
                e(n, {
                    color: "autoAccept",
                    children: "accept edits"
                }),
                " — edit freely, ask for commands"
            ]
        });
        p[3] = u;
    } else {
        u = p[3];
    }
    let l;
    if (p[4] === S) {
        l = r(n, {
            children: [
                e(n, {
                    color: "planMode",
                    children: "plan"
                }),
                " — research and propose, never touch files"
            ]
        });
        p[4] = l;
    } else {
        l = p[4];
    }
    let x;
    if (p[5] === S) {
        x = r(s, {
            flexDirection: "column",
            paddingLeft: 2,
            children: [
                o,
                u,
                l,
                r(n, {
                    children: [
                        e(n, {
                            color: "warning",
                            children: "auto"
                        }),
                        " — Claude decides what is safe"
                    ]
                })
            ]
        });
        p[5] = x;
    } else {
        x = p[5];
    }
    let g;
    if (p[6] === S) {
        g = e(n, {
            color: "planMode",
            children: "plan"
        });
        p[6] = g;
    } else {
        g = p[6];
    }
    let h;
    if (p[7] === S) {
        h = e(n, {
            color: "warning",
            children: "auto"
        });
        p[7] = h;
    } else {
        h = p[7];
    }
    let f;
    if (p[8] === S) {
        f = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                t,
                a,
                x,
                r(n, {
                    dimColor: true,
                    children: [
                        "Use ",
                        g,
                        " for big refactors you want to review first. Use ",
                        h,
                        " for long unattended tasks. Run ",
                        e(m, {
                            children: "/permissions"
                        }),
                        " to pre-allow specific commands so Claude stops asking about them."
                    ]
                })
            ]
        });
        p[8] = f;
    } else {
        f = p[8];
    }
    return f;
}
N();
function kt(Rt) {
    return qO.some((Tt)=>Tt.id === Rt);
}
function wt() {
    let Pt = ce().powerupsUnlocked ?? [];
    return new Set(Pt.filter(kt));
}
function Oft(p) {
    let c = w(48);
    let { onExit } = p;
    let { storageV5 } = Pe();
    let [o, u] = y(wt);
    let [l, x] = y(null);
    let [g, h] = y(qO[0].id);
    let [f, b] = y(false);
    let R;
    if (c[0] === S) {
        R = ()=>b(false);
        c[0] = R;
    } else {
        R = c[0];
    }
    let onDone = R;
    let A;
    if (c[1] !== o) {
        A = function U(k) {
            h(k.id);
            x(k);
            i("tengu_powerup_lesson_opened", {
                lesson_id: d(k.id),
                was_already_unlocked: o.has(k.id),
                unlocked_count: o.size
            });
        };
        c[1] = o;
        c[2] = A;
    } else {
        A = c[2];
    }
    let U = A;
    let Ue;
    if (c[3] !== storageV5 || c[4] !== o) {
        Ue = function M(de) {
            if (o.has(de)) {
                return;
            }
            let E = new Set(o).add(de);
            u(E);
            Ae((He)=>({
                    ...He,
                    powerupsUnlocked: [
                        ...E
                    ]
                }), storageV5);
            i("tengu_powerup_lesson_completed", {
                lesson_id: d(de),
                unlocked_count: E.size,
                all_unlocked: E.size === qO.length
            });
            if (E.size === qO.length) {
                b(true);
            }
        };
        c[3] = storageV5;
        c[4] = o;
        c[5] = Ue;
    } else {
        Ue = c[5];
    }
    let M = Ue;
    let _;
    if (c[6] !== o) {
        _ = qO.map((j)=>{
            let Me = o.has(j.id);
            let Se = `${Me ? te.tick : te.circle} ${j.title}`;
            return {
                label: Me ? e(n, {
                    color: "success",
                    children: Se
                }) : Se,
                value: j.id,
                description: j.tagline
            };
        });
        c[6] = o;
        c[7] = _;
    } else {
        _ = c[7];
    }
    let options = _;
    if (l) {
        let isUnlocked;
        if (c[8] !== o || c[9] !== l.id) {
            isUnlocked = o.has(l.id);
            c[8] = o;
            c[9] = l.id;
            c[10] = isUnlocked;
        } else {
            isUnlocked = c[10];
        }
        let onDone_1;
        if (c[11] !== M || c[12] !== l.id) {
            onDone_1 = ()=>{
                M(l.id);
                x(null);
            };
            c[11] = M;
            c[12] = l.id;
            c[13] = onDone_1;
        } else {
            onDone_1 = c[13];
        }
        let onBack;
        if (c[14] === S) {
            onBack = ()=>x(null);
            c[14] = onBack;
        } else {
            onBack = c[14];
        }
        let I;
        if (c[15] !== isUnlocked || c[16] !== onDone_1 || c[17] !== l) {
            I = e(Be, {
                lesson: l,
                isUnlocked,
                onDone: onDone_1,
                onBack
            });
            c[15] = isUnlocked;
            c[16] = onDone_1;
            c[17] = l;
            c[18] = I;
        } else {
            I = c[18];
        }
        return I;
    }
    let ue = o.size === qO.length;
    let P;
    if (c[19] !== ue) {
        P = ue ? e(ee, {
            text: "All powered up"
        }) : e(n, {
            bold: true,
            color: "claude",
            children: "Power-ups"
        });
        c[19] = ue;
        c[20] = P;
    } else {
        P = c[20];
    }
    let D;
    if (c[21] !== o.size) {
        D = r(n, {
            dimColor: true,
            children: [
                " ",
                o.size,
                "/",
                qO.length,
                " unlocked",
                " "
            ]
        });
        c[21] = o.size;
        c[22] = D;
    } else {
        D = c[22];
    }
    const ratio = o.size / qO.length;
    let I;
    if (c[23] !== ratio) {
        I = e(RC, {
            ratio,
            width: 16,
            fillColor: "claude",
            emptyColor: "inactive"
        });
        c[23] = ratio;
        c[24] = I;
    } else {
        I = c[24];
    }
    let me;
    if (c[25] !== P || c[26] !== D || c[27] !== I) {
        me = r(s, {
            marginBottom: 1,
            children: [
                P,
                D,
                I
            ]
        });
        c[25] = P;
        c[26] = D;
        c[27] = I;
        c[28] = me;
    } else {
        me = c[28];
    }
    const Ee = ue ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
    let pe;
    if (c[29] !== Ee) {
        pe = e(s, {
            marginBottom: 1,
            children: e(n, {
                dimColor: true,
                wrap: "wrap",
                children: Ee
            })
        });
        c[29] = Ee;
        c[30] = pe;
    } else {
        pe = c[30];
    }
    let onChange;
    if (c[31] !== U) {
        onChange = (Ct)=>{
            let eo = qO.find((vt)=>vt.id === Ct);
            if (eo) {
                U(eo);
            }
        };
        c[31] = U;
        c[32] = onChange;
    } else {
        onChange = c[32];
    }
    let onCancel;
    if (c[33] !== onExit) {
        onCancel = ()=>onExit("Power-ups closed");
        c[33] = onExit;
        c[34] = onCancel;
    } else {
        onCancel = c[34];
    }
    let ge;
    if (c[35] !== options || c[36] !== g || c[37] !== onChange || c[38] !== onCancel) {
        ge = e(Ve, {
            options,
            hideIndexes: true,
            visibleOptionCount: qO.length,
            defaultFocusValue: g,
            onChange,
            onCancel
        });
        c[35] = options;
        c[36] = g;
        c[37] = onChange;
        c[38] = onCancel;
        c[39] = ge;
    } else {
        ge = c[39];
    }
    let oo;
    if (c[40] === S) {
        oo = e(s, {
            marginTop: 1,
            children: e(ne, {})
        });
        c[40] = oo;
    } else {
        oo = c[40];
    }
    let ye;
    if (c[41] !== f) {
        ye = f && e(H, {
            onDone
        });
        c[41] = f;
        c[42] = ye;
    } else {
        ye = c[42];
    }
    let to;
    if (c[43] !== pe || c[44] !== ge || c[45] !== ye || c[46] !== me) {
        to = e(ts, {
            color: "claude",
            children: r(s, {
                flexDirection: "column",
                children: [
                    me,
                    pe,
                    ge,
                    oo,
                    ye
                ]
            })
        });
        c[43] = pe;
        c[44] = ge;
        c[45] = ye;
        c[46] = me;
        c[47] = to;
    } else {
        to = c[47];
    }
    return to;
}
function Be(p) {
    let l = w(15);
    let { lesson, isUnlocked, onDone, onBack } = p;
    let x;
    if (l[0] !== onBack || l[1] !== onDone) {
        x = {
            "confirm:yes": onDone,
            "confirm:no": onBack
        };
        l[0] = onBack;
        l[1] = onDone;
        l[2] = x;
    } else {
        x = l[2];
    }
    let g;
    if (l[3] === S) {
        g = {
            context: "Confirmation"
        };
        l[3] = g;
    } else {
        g = l[3];
    }
    nn(x, g);
    const status = isUnlocked ? "success" : "pending";
    let f;
    if (l[4] !== status) {
        f = e(dt, {
            status,
            withSpace: true
        });
        l[4] = status;
        l[5] = f;
    } else {
        f = l[5];
    }
    let b;
    if (l[6] !== lesson.title) {
        b = e(n, {
            bold: true,
            color: "claude",
            children: lesson.title
        });
        l[6] = lesson.title;
        l[7] = b;
    } else {
        b = l[7];
    }
    let c;
    if (l[8] !== f || l[9] !== b) {
        c = r(s, {
            children: [
                f,
                b
            ]
        });
        l[8] = f;
        l[9] = b;
        l[10] = c;
    } else {
        c = l[10];
    }
    let R;
    if (l[11] === S) {
        R = e(se, {});
        l[11] = R;
    } else {
        R = l[11];
    }
    let C;
    if (l[12] !== lesson.body || l[13] !== c) {
        C = e(ts, {
            color: "claude",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    c,
                    lesson.body,
                    R
                ]
            })
        });
        l[12] = lesson.body;
        l[13] = c;
        l[14] = C;
    } else {
        C = l[14];
    }
    return C;
}
export { qO, Oft };
