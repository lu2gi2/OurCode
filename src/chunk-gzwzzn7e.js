import { K, eo, f6, nT } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Ih } from "/$bunfs/root/chunk-z0brrd3r.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { Fpn } from "/$bunfs/root/chunk-fceamqhp.js";
import { Ll, a7t } from "/$bunfs/root/chunk-fzmwt34b.js";
import { lF, Toe, mY, m$e, gbe, GPt, EFn, kFn, Mde, VPt, RV, z_, tO, Z5, cgo, b$e, LSr, dgo, w$e, jYe, pgo, ygo, t7t, _go, sws, iws, JSr } from "/$bunfs/root/chunk-30jbnw20.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { ewr, Ago, n7t, $Fn, gS, Zg, LE } from "/$bunfs/root/chunk-nbx3tg29.js";
import { lwr } from "/$bunfs/root/chunk-17w0r6ry.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { Pi, lm, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { rm, $ne, CM, ZJ } from "/$bunfs/root/chunk-7xekr000.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { Enr, knr, vet, bwt, ga, sJ, Gor, Vor, T2e, TAn, Rsr, xsr, v9r, v7o, Isr, k7o, Fsr, mne } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g4, Zkt, gPn, hPn, yPn, RL, x6t, dTt, Ydr, Xdr, Jdr, Qdr, Zdr, sqe, zPn, H6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { fis, mis } from "/$bunfs/root/chunk-t3a00vfa.js";
import { KFt, CJe, jje, Wje, YFt, XFt, JFt } from "/$bunfs/root/chunk-4m492zgj.js";
import { KNr, YNr, XNr } from "/$bunfs/root/chunk-dhqdddxp.js";
import { QFt } from "/$bunfs/root/chunk-5fxy91x8.js";
import { qFt } from "/$bunfs/root/chunk-r3qrrxa1.js";
import { c$r, Cpn, Rpn, xpn, Ppn, Ipn, Opn, Mpn, Hpn, Dpn, Lpn, Npn, $pn, d$r, u$r } from "/$bunfs/root/chunk-0cv1s4md.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { Xl } from "/$bunfs/root/chunk-mhg15z8n.js";
import { Je } from "/$bunfs/root/chunk-kw599e0m.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, M, oe, T, u, Ue, Wr, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { resolve, join, basename, relative, posix, sep, isAbsolute } from "path";
import { mkdir, writeFile, mkdtemp, rm as rm_1, readdir, readFile } from "fs/promises";
import { isDeepStrictEqual } from "util";
import { setTimeout as setTimeout_1, setImmediate as setImmediate_1 } from "timers/promises";
import { tmpdir, availableParallelism } from "os";
import * as Gt from "vm";
const te = {};
Mr(te, {
    CHILD_ARGV_LENGTH: ()=>CHILD_ARGV_LENGTH,
    IS_WORKTREE_LAUNCH: ()=>Cpn,
    LATE_TURNS: ()=>LATE_TURNS,
    PLUGIN_TEST_USAGE: ()=>qFt,
    SAVE_FAILURE: ()=>Lpn,
    SIGN_IN_MARGIN_MS: ()=>Ppn,
    default: ()=>te,
    earlyFetchVetoed: ()=>xpn,
    endPluginTest: ()=>Fpn,
    fetchRefreshesSignIn: ()=>Opn,
    flagClientQuieted: ()=>Mpn,
    isSavedSwitchOf: ()=>Dpn,
    isTeardown: ()=>isTeardown,
    pluginTestFormOf: ()=>c$r,
    pluginTestGatesOf: ()=>d$r,
    pluginTestMain: ()=>pluginTestMain,
    pluginTestRefusal: ()=>u$r,
    runChild: ()=>runChild,
    safeMessageOf: ()=>safeMessageOf,
    savedFlags: ()=>Hpn,
    sessionHoldsEarlyFetch: ()=>Rpn,
    signInNearsExpiry: ()=>Ipn,
    switchFetched: ()=>$pn,
    switchSaveSettled: ()=>Npn
});
export var CHILD_ARGV_LENGTH = 3;
var ne = (bare, register)=>(args, host, bounds)=>_go({
            bare,
            args,
            host,
            bounds,
            isInstallingGlobals: false,
            loaded: ()=>Promise.resolve({
                    register
                })
        });
async function lo(e, r, n) {
    let s = join(e, "hooks", "register.js");
    await mkdir(join(e, ".claude-plugin"), {
        recursive: true
    });
    await mkdir(join(e, "hooks"));
    await writeFile(join(e, ".claude-plugin", "plugin.json"), `{"name":"${r}"}
`);
    await writeFile(join(e, "hooks", "hooks.json"), `{"modules":["./register.js"]}
`);
    await writeFile(s, n);
    return s;
}
var Z = "test";
async function me(e, r) {
    let dir = join(e, Z);
    let s = r.map((f)=>{
        let m = n7t(f) ? "async function* () {}" : "() => undefined";
        return `  on(${_(f)}, ${m})`;
    }).join(`
`);
    let modulePath = await lo(dir, Z, `export function register(on) {
${s}
}
`);
    return {
        dir,
        modulePath
    };
}
var fe = (hook_event_name, r)=>({
        session_id: K(),
        transcript_path: "",
        cwd: se(),
        ...L(r) ? r : {},
        hook_event_name
    });
function le(e, signal) {
    let n = e.slice(8);
    if (n === "PreToolUse") {
        throw new Me("$.classic.PreToolUse is no call on the engine's $: the engine raises it inside tool.call, so a test calls $.tool.call");
    }
    if (!Enr(n)) {
        throw new Me(`$.${e} is no call on the engine's $`);
    }
    return (i)=>knr({
            hookInput: fe(n, i),
            signal
        });
}
const ce = ()=>ewr.filter(Enr).map((e)=>[
            e,
            false
        ]);
function de(rest, denials) {
    let n = denials.of(rest.ref);
    if (n !== undefined && rest.deny === undefined && (rest.result === undefined || rest.result === n.made.result)) {
        return {
            deny: n.made.text
        };
    }
    return rest;
}
function xe(e, deny, n) {
    let s = deny || `Hook PreToolUse:${e.tool} ${vet("deny")} this tool`;
    let result = `Error: ${s}`;
    return {
        ref: n.keep(Mde(e), {
            result,
            text: s
        }),
        result,
        text: s,
        isError: true
    };
}
const ye = (e, updatedInput)=>lF([
        "agentId",
        "consent",
        kFn
    ], VPt(e.tool, e.tool_use_id, updatedInput), e);
const ke = (e, r)=>({
        name: "core",
        isCore: true,
        budgetMs: 0,
        async run (n, s) {
            let i = VPt(n.tool, n.tool_use_id, Mde(n));
            let { deny, updatedInput } = await dgo(i, CM("classic.PreToolUse", e), {
                signal: s.signal,
                origin: ZJ(e),
                bottom: ()=>Promise.resolve({})
            });
            if (typeof deny === "string") {
                return xe(i, deny, r);
            }
            return s(updatedInput ? ye(n, updatedInput) : n);
        }
    });
var Mo = (e, r = b$e())=>{
    if (Xl("classic.PreToolUse")) {
        return {
            "tool.call": ke(e, r)
        };
    }
    return {};
};
const Te = Object.freeze({
    isHookable: true,
    keep: ()=>{},
    arrived: ()=>{}
});
function we(content, r) {
    let n = new Set(CJe(jje(r)));
    let s = CJe(content);
    return D(content.flatMap((i, f)=>{
        let m = s[f];
        if (m !== undefined && !n.has(m)) {
            return [
                i.type
            ];
        }
        return [];
    }));
}
const co = (e)=>e.content.map((r)=>{
        if (typeof r.text === "string") {
            return r.text;
        }
        return "";
    });
const Ee = new Set([
    "poll_events"
]);
function attachment(e, r) {
    let n = Ee.has(e.name ?? "");
    let s = Wje(co(e), r);
    if (n) {
        return e.content;
    }
    return s.map((i)=>({
            type: "text",
            text: i
        }));
}
const system = (e, r)=>[
        Wje(co(e), r).join(`
`)
    ].filter((n)=>n !== "").map((n)=>({
            type: "text",
            text: n
        }));
function Oe(content, r) {
    let n = Array.isArray(content) ? content : undefined;
    if (r === undefined) {
        return content;
    }
    return YFt(n, r);
}
function ve(e, isError) {
    let { is_error, ...rest } = e;
    if (isError === (is_error === true)) {
        return e;
    }
    return {
        ...rest,
        ...isError && {
            is_error: true
        }
    };
}
function Ae(e, r) {
    if (r.kind === "tool-result" && e.type === "tool_result") {
        return ve({
            ...e,
            content: Oe(e.content, r.content)
        }, r.isError);
    }
    return e;
}
const Ce = (e, text)=>({
        type: "text",
        text,
        ...e.type === "assistant" && {
            citations: null
        }
    });
function Pe(e, r) {
    if (r.kind === "text") {
        return [
            Ce(e, r.text)
        ];
    }
    let n = e.content.slice(r.index, r.index + 1);
    if (e.type === "assistant") {
        return n;
    }
    return n.map((i)=>Ae(i, r));
}
const Co = (e, r)=>r.flatMap((n)=>Pe(e, n));
const Po = Object.freeze({
    user: Co,
    assistant: Co,
    attachment,
    system
});
function Re(message, r) {
    if (!(GPt(message) === undefined && Object.hasOwn(Po, message.type) && jje(message.content).length === message.content.length)) {
        return r;
    }
    let s = XFt(message.content, jje(r.content));
    return {
        ...message,
        content: Po[message.type](message, s)
    };
}
function _e(e, message, n) {
    if (n === message || isDeepStrictEqual(n.content, message.content)) {
        return;
    }
    let i = we(e.message.content, message.content);
    let f = `session.append: the ${e.door} row ${e.uuid} is stored `;
    let g = i.includes("tool_result") ? " To scrub a tool result, pass on a tool_result with the same tool_use_id and new content." : "";
    if (i.length > 0) {
        return `${f}with its ${i.join(", ")} kept, as a session stores it. A session pins tool_use, tool_result, thinking and unknown blocks (a request pairs each tool call with its result and carries thinking as signed), so no hook drops one or changes its id.` + g;
    }
    return `${f}as a session stores it, not as the hooks left it: a pinned block a hook changed is put back as raised, new or changed media and empty texts are not kept, a response's new text carries citations: null, a notice is one text, and an attachment rendered per request stays as raised.`;
}
function Ie(e, r) {
    let message = Re(e.message, r.message);
    let s = _e(e, r.message, message);
    if (s !== undefined) {
        Ll().log(s, "warn");
    }
    return {
        message,
        uuid: e.uuid
    };
}
const be = (e)=>async (r)=>{
        if (EFn(e)) {
            return KFt(r, Te);
        }
        return Ie(e, r);
    };
var withheldFloor = Object.freeze({
    "session.append": be
});
function xo(e, signal) {
    let [n = "", s = ""] = e.split(".");
    if (n === "classic") {
        return le(e, signal);
    }
    let i = sJ({
        signal,
        withheldCore: Mo(),
        withheldFloor
    });
    let f = _s(i, n);
    let m = L(f) ? _s(f, s) : undefined;
    if (typeof m !== "function") {
        throw new Me(`$.${e} is no call on the engine's $`);
    }
    return m;
}
var qr = ()=>[
        ...Object.entries(sJ()).map(([e, r])=>[
                e,
                Object.keys(r).map((n)=>[
                        n,
                        n7t(`${e}.${n}`)
                    ])
            ]),
        [
            "classic",
            ce()
        ]
    ];
function mo({ act, tag, plugin, key, requestId, surface }) {
    let m = g4.hostedButtonsOf(plugin, key).filter(({ button })=>button.tag === tag && (surface === undefined || button.surface === surface) && (requestId === undefined || button.requestId === requestId));
    let [g, ...h] = m;
    if (!g) {
        throw new Me(`$.ui.${act}: no ${tag} of ${plugin} keyed ${JSON.stringify(key)} is drawn${surface === undefined ? "" : ` on the ${surface} surface`}; render or mount the tree that holds it first`);
    }
    if (h.length > 0) {
        throw new Me(`${`$.ui.${act}: ${plugin} holds ${m.length} ${tag}s keyed ${JSON.stringify(key)}, in ` + m.map((k)=>`${k.button.requestId} on ${k.button.surface}`).join(", ")}; name the requestId or the surface`);
    }
    return g;
}
function yo(name, source) {
    let n = /^(async\s+)?register\s*\(/.exec(source);
    if (n) {
        return `export ${n[1] ?? ""}function ${source.slice(n[1]?.length ?? 0)}
`;
    }
    let s = /^(async\s+)?function\s*[\w$]*\s*\(/.exec(source);
    if (s) {
        return `export ${s[1] ?? ""}function register(${source.slice(s[0].length)}
`;
    }
    let i = /^(async\s*)?(?:\(([^)]*)\)|([\w$]+))\s*=>\s*\{/.exec(source);
    if (i) {
        let f = i[1] !== undefined;
        let m = i[2] ?? i[3] ?? "";
        return `export ${f ? "async " : ""}function register(${m}) {${source.slice(i[0].length)}
`;
    }
    throw new Me(`test(name, { plugins }): ${name}'s register is written \`register(on) { ... }\``);
}
async function Fe(e, { name, source }) {
    let s = join(e, name);
    await lo(s, name, yo(name, source));
    return s;
}
function Ne({ plugin, key, text, kind, requestId, surface }) {
    let m = mo({
        act: "input",
        tag: "Input",
        plugin,
        key,
        requestId,
        surface
    });
    return gPn({
        plugin,
        handle: m.hosted,
        element: key,
        component: m.button.component,
        surface: m.button.surface,
        kind: kind ?? "submit",
        value: text
    });
}
var on = p(()=>u({
        plugin: o(),
        key: o(),
        text: o(),
        kind: U([
            "change",
            "submit"
        ]).optional(),
        requestId: o().optional(),
        surface: o().refine(m$e, "is not a surface").optional()
    }));
var ze = true;
const je = (e)=>typeof e === "string" && Object.hasOwn(gbe, e);
const _o = `${Z}: `;
function Le({ plugin, event, reason, skip }) {
    let f = plugin === Z && skip?.kind === "shape";
    let m = reason.startsWith(_o) ? reason.slice(_o.length) : reason;
    if (f) {
        return {
            text: m,
            event
        };
    }
}
var pn = p(()=>{
    let e = o().optional();
    let query = u({
        type: o().optional(),
        key: o().optional(),
        text: Ue([
            o(),
            u({
                source: o(),
                flags: o()
            })
        ]).optional(),
        in: e
    });
    let n = A(true).optional();
    return Wr("act", [
        u({
            act: A("drawn"),
            in: e
        }),
        u({
            act: A("find"),
            query
        }),
        u({
            act: A("findAll"),
            query
        }),
        u({
            act: A("press"),
            key: o(),
            plugin: o().optional(),
            link: u({
                href: o()
            }).optional()
        }),
        u({
            act: A("input"),
            key: o(),
            text: o(),
            kind: U([
                "change",
                "submit"
            ]).optional(),
            plugin: o().optional()
        }),
        u({
            act: A("select"),
            key: o(),
            value: o(),
            plugin: o().optional()
        }),
        u({
            act: A("key"),
            event: u({
                key: o(),
                ctrl: n,
                shift: n,
                meta: n
            }),
            in: e
        }),
        u({
            act: A("pointer"),
            event: u({
                type: U([
                    "down",
                    "move",
                    "up",
                    "enter",
                    "leave"
                ]),
                x: E(),
                y: E(),
                button: U([
                    "left",
                    "middle",
                    "right"
                ]).optional(),
                shift: n,
                alt: n,
                ctrl: n
            }),
            in: e
        }),
        u({
            act: A("post"),
            data: oe(),
            in: e
        }),
        u({
            act: A("advance"),
            ms: E().nonnegative()
        }),
        u({
            act: A("resize"),
            columns: E().int().nonnegative(),
            rows: E().int().nonnegative(),
            in: e
        }),
        u({
            act: A("redraw"),
            props: ue(o(), oe()).optional()
        }),
        u({
            act: A("unmount")
        })
    ]);
});
var an = p(()=>u({
        plugin: o(),
        surface: o().refine(m$e, "is not a surface"),
        component: o().refine(je, "is not a component"),
        props: ue(o(), oe()),
        requestId: o().optional(),
        viewport: u({
            columns: E().int().nonnegative(),
            rows: E().int().nonnegative(),
            isFullscreen: M().optional()
        }).optional()
    }));
var Be = {
    input: {
        element: "Input",
        reaches: "an Input's onSubmit"
    },
    select: {
        element: "Select",
        reaches: "a Select's onSelect"
    },
    key: {
        element: "Client",
        reaches: "a Client's onKey"
    },
    pointer: {
        element: "Client",
        reaches: "a Client's onPointer"
    },
    post: {
        element: "Client",
        reaches: "a Client's surface.post"
    },
    advance: {
        element: "Client",
        reaches: "a Client's surface.every"
    },
    resize: {
        element: "Client",
        reaches: "a Client's region"
    }
};
function De(tree) {
    let r = [];
    function n(s) {
        if (!L(s)) {
            return;
        }
        let i = L(s.props) ? s.props : {};
        let f = L(s.client) ? s.client : {};
        let { key, module } = i;
        let f_plugin = f.plugin;
        if (s.type === "Client" && typeof f_plugin === "string" && typeof key === "string" && typeof module === "string") {
            r.push({
                plugin: f_plugin,
                key,
                module,
                props: i.props
            });
            return;
        }
        if (Array.isArray(s.children)) {
            for (let y of s.children){
                n(y);
            }
        }
    }
    n(tree);
    return r;
}
var Ke = (input)=>({
        component: input.component,
        requestId: input.requestId,
        surface: input.surface
    });
function Io(e) {
    if (typeof e === "string") {
        return e;
    }
    if (!L(e)) {
        return "";
    }
    let r = L(e.props) ? e.props : {};
    let n = (y)=>{
        if (typeof r[y] === "string") {
            return r[y];
        }
        return "";
    };
    let s = e.type === "Button";
    let i = e.type === "Link";
    let f = e.type === "Markdown";
    let m = e.type === "Code";
    let g = e.type === "Input";
    return (s && Array.isArray(e.children) && e.children.length > 0 ? "" : s ? n("label") : i ? n("label") || n("href") : f ? n("text") : m ? n("source") : g ? n("value") : "") + (Array.isArray(e.children) ? e.children : []).map(Io).join("");
}
var Ge = (e, r)=>{
    if (typeof r === "string") {
        return e.includes(r);
    }
    return r.test(e);
};
function bo(e, query) {
    let { key, text } = query;
    let r_type = query.type;
    let f = [];
    let g = typeof text === "object" ? new RegExp(text.source, text.flags) : text;
    let h = (y)=>g === undefined || Ge(y, g);
    function k(y) {
        if (!L(y) || typeof y.type !== "string") {
            return;
        }
        let props = L(y.props) ? {
            ...y.props
        } : {};
        let N = typeof props.key === "string" ? props.key : undefined;
        let children = Array.isArray(y.children) ? y.children : [];
        let b = Io(y);
        if ((r_type === undefined || y.type === r_type) && (key === undefined || N === key) && h(b)) {
            f.push({
                type: y.type,
                key: N,
                props,
                text: b,
                children
            });
        }
        for (let G of children){
            k(G);
        }
    }
    k(e);
    return f;
}
const $o = 10000;
function qe() {
    let e = new Set;
    let r = 0;
    function every(f, tick) {
        let ms = Math.max(eg, f);
        let h = {
            ms,
            dueAt: r + ms,
            tick
        };
        e.add(h);
        return ()=>{
            e.delete(h);
        };
    }
    function advance(f) {
        let m = r + f;
        let g = 0;
        while(true){
            let h = [
                ...e
            ].reduce((acc, item)=>Math.min(acc, item.dueAt), Number.POSITIVE_INFINITY);
            if (h > m) {
                break;
            }
            r = h;
            for (let k of [
                ...e
            ]){
                if (k.dueAt <= r && e.has(k)) {
                    g += 1;
                    if (g > $o) {
                        throw new Me(`advance(${f}): ${$o} timer ticks fired and more were due; advance in smaller steps, or check for an \`every\` the module re-arms on each tick`);
                    }
                    k.dueAt = r + k.ms;
                    k.tick();
                }
            }
        }
        r = m;
    }
    return {
        clock: {
            every
        },
        advance
    };
}
var Ve = ()=>KNr({
        run: (e)=>H6t(e),
        schedule: (e)=>{
            let r = setImmediate(e);
            return ()=>{
                clearImmediate(r);
            };
        },
        warn: (e)=>{
            Ll().log(e, "warn");
        }
    });
var We = (e, r)=>({
        surface: e.surface,
        component: e.component,
        requestId: e.requestId ?? `mount-${r}`,
        ...e.viewport !== undefined && {
            viewport: e.viewport
        },
        props: e.props
    });
var Fo = 2000;
var Qe = ({ plugin, input, port })=>({
        plugin,
        input,
        drawn: {
            tree: undefined
        },
        registry: XNr({
            port
        }),
        clients: [],
        frame: qe(),
        version: "",
        unsubscribe: ()=>{},
        isStale: false
    });
function Xe(input) {
    let r = Ke(input);
    for (let n of g4.holdersOf(r)){
        let { released } = g4.holdDrawing(n, r, []);
        Zkt(n, released, r);
    }
}
function Ze(e) {
    let port = Ve();
    let n = new Map;
    let s = 0;
    function i(d) {
        let c = n.get(d);
        if (!c) {
            throw new Me("this drawing was unmounted");
        }
        return c;
    }
    let f = (d)=>sqe(RL().getState(), d);
    let m = (instance, c)=>new Promise((resolvePromise)=>{
            let v = ()=>instance.getSnapshot().status !== "loading";
            if (v()) {
                resolvePromise(true);
                return;
            }
            let S = instance.subscribe(()=>{
                if (v()) {
                    clearTimeout(z);
                    S();
                    resolvePromise(true);
                }
            });
            let z = setTimeout((C, V)=>{
                C();
                V(false);
            }, c, S, resolvePromise);
        });
    function g(d) {
        let d_clients = d.clients;
        d.clients = [];
        for (let x of d_clients){
            x.instance.release();
        }
    }
    async function h(d) {
        let { instance } = d;
        let x = await m(instance, Fo);
        let v = instance.getSnapshot();
        if (!x) {
            throw new Me(`${d.plugin}'s Client ${d.module} (keyed ${JSON.stringify(d.key)}) drew nothing in ${Fo} ms (a dialog Client past its row budget draws nothing; the report says so)`);
        }
        if (v.status === "failed") {
            throw new Me(v.text);
        }
    }
    let k = (d, c)=>d.plugin === c.plugin && d.key === c.key;
    function y({ input, registry, frame }, c) {
        let instance = registry.acquire({
            ...c,
            component: input.component,
            requestId: input.requestId,
            surface: input.surface,
            clock: frame.clock
        });
        instance.resize(input.viewport?.columns ?? 0, input.viewport?.rows ?? 0);
        return {
            ...c,
            instance
        };
    }
    async function F(d, tree) {
        let x = De(tree);
        let v = (C)=>x.some((V)=>k(V, C) && V.module === C.module);
        for (let C of d.clients){
            if (!v(C)) {
                C.instance.release();
            }
        }
        let S = d.clients.filter(v);
        for (let C of x){
            S.find((V)=>k(V, C))?.instance.setProps(C.props);
        }
        let z = x.filter((C)=>!S.some((V)=>k(V, C))).map((C)=>y(d, C));
        d.clients = [
            ...S,
            ...z
        ];
        for (let C of z){
            await h(C);
        }
    }
    async function N(d, c) {
        d.input = c;
        d.version = f(c);
        d.isStale = false;
        let tree = await e.render(c);
        if (tree === Toe) {
            let v = `ui.render (${c.component}) refused: `;
            d.drawn = {
                refused: `${d.plugin} drew nothing on the ${c.surface} surface: ` + (e.told.findLast((S)=>S.includes(v)) ?? `the tree its hooks returned for ${c.component} did not validate by that surface's rules (the report says why)`)
            };
            g(d);
            return;
        }
        d.drawn = {
            tree
        };
        await F(d, tree);
    }
    function P(d) {
        if ("refused" in d.drawn) {
            throw new Me(d.drawn.refused);
        }
        return d.drawn.tree;
    }
    function b(d, c) {
        let { surface } = d.input;
        let { element, reaches } = Be[c];
        if (!mY[surface].includes(element)) {
            throw new Me(`${c}: the ${surface} surface draws no ${element}; ${c} reaches ${reaches}, so it is not an act on this surface`);
        }
    }
    function j(d, c, x) {
        P(d);
        let v = d.clients.filter((C)=>c === undefined || C.key === c);
        let [S, ...z] = v;
        if (!S) {
            let C = c === undefined ? "" : ` keyed ${JSON.stringify(c)}`;
            throw new Me(`${x}: the drawing holds no Client${C}`);
        }
        if (z.length > 0) {
            throw new Me(`${`${x}: the drawing holds ${v.length} Clients (` + v.map((C)=>C.key).join(", ")}); name one with \`in\``);
        }
        return S;
    }
    function G(d) {
        let c = d.instance.getSnapshot();
        if (c.status === "failed") {
            throw new Me(c.text);
        }
        if (c.status !== "drawn") {
            throw new Me(`${d.plugin}: Client ${d.module} has drawn nothing`);
        }
        return c.tree;
    }
    let W = (d, c, x)=>{
        if (c === undefined) {
            return P(d);
        }
        return G(j(d, c, x));
    };
    function J(d, c) {
        P(d);
        let { component, requestId, surface } = d.input;
        let z = new Set([
            requestId,
            ...d.clients.map((po)=>YNr(requestId, po.key))
        ]);
        let C = g4.hostedButtonsOf(c.plugin, c.key).filter(({ button })=>button.tag === c.tag && button.surface === surface && button.component === component && z.has(button.requestId));
        let [V, ...nr] = C;
        let re = `${c.plugin} keyed ${JSON.stringify(c.key)}`;
        if (!V) {
            throw new Me(`${c.act}: no ${c.tag} of ${re} is drawn in this ${component} on the ${surface} surface`);
        }
        if (nr.length > 0) {
            throw new Me(`${c.act}: ${C.length} ${c.tag}s of ${re} are drawn in this drawing; key each once`);
        }
        return V;
    }
    function ao(d, c) {
        n.delete(d);
        c.unsubscribe();
        g(c);
        Xe(c.input);
        c.registry.dispose();
    }
    async function w(d, c) {
        ao(d, c);
        await setTimeout_1(0);
    }
    async function O(d) {
        if (!d.isStale) {
            return;
        }
        try {
            await N(d, d.input);
        } catch (error) {
            d.drawn = {
                refused: l(error)
            };
            g(d);
        }
    }
    function H(d) {
        if ([
            ...n.values()
        ].some(({ input })=>input.surface === d.surface && input.component === d.component && input.requestId === d.requestId)) {
            throw new Me(`$.ui.mount: ${d.component} ${d.requestId} is mounted on the ${d.surface} surface already; unmount it first, or name another requestId for a second instance`);
        }
    }
    async function mount(d) {
        s += 1;
        let c = s;
        let input = We(d, c);
        H(input);
        let v = Qe({
            plugin: d.plugin,
            input,
            port
        });
        n.set(c, v);
        v.unsubscribe = RL().subscribe(()=>{
            if (f(v.input) !== v.version) {
                v.isStale = true;
            }
        });
        try {
            await N(v, input);
            P(v);
        } catch (error) {
            if (n.has(c)) {
                await w(c, v);
            }
            throw error instanceof Me ? new Me(`$.ui.mount: ${error.message}`) : error;
        }
        if (!n.has(c)) {
            throw new Me("$.ui.mount: the test ended while the drawing was being raised");
        }
        return c;
    }
    function q(d, c, data) {
        let { component, requestId, surface } = d.input;
        port.post(c.instance.id, zPn({
            ...c,
            component,
            requestId
        }, surface, data), (C)=>{
            if (C.props !== undefined) {
                c.instance.setProps(C.props);
            }
        });
    }
    async function act(d, c) {
        let x = i(d);
        if (!(c.act === "redraw" || c.act === "unmount")) {
            await O(x);
        }
        let { component, surface } = x.input;
        switch(c.act){
            case "drawn":
                return W(x, c.in, "drawn");
            case "find":
                return bo(W(x, c.query.in, "find"), c.query)[0];
            case "findAll":
                return bo(W(x, c.query.in, "findAll"), c.query);
            case "press":
                {
                    let C = c.plugin ?? x.plugin;
                    let tag = c.link === undefined ? "Button" : "Markdown";
                    return hPn({
                        plugin: C,
                        handle: J(x, {
                            plugin: C,
                            key: c.key,
                            tag,
                            act: "press"
                        }).hosted,
                        surface,
                        link: c.link
                    });
                }
            case "input":
                {
                    b(x, "input");
                    let C = c.plugin ?? x.plugin;
                    return gPn({
                        plugin: C,
                        handle: J(x, {
                            plugin: C,
                            key: c.key,
                            tag: "Input",
                            act: "input"
                        }).hosted,
                        element: c.key,
                        component,
                        surface,
                        kind: c.kind ?? "submit",
                        value: c.text
                    });
                }
            case "select":
                {
                    b(x, "select");
                    let C = c.plugin ?? x.plugin;
                    return yPn({
                        plugin: C,
                        handle: J(x, {
                            plugin: C,
                            key: c.key,
                            tag: "Select",
                            act: "select"
                        }).hosted,
                        element: c.key,
                        component,
                        surface,
                        value: c.value
                    });
                }
            case "key":
                b(x, "key");
                j(x, c.in, "key").instance.key(c.event);
                return;
            case "pointer":
                b(x, "pointer");
                j(x, c.in, "pointer").instance.pointer(c.event);
                return;
            case "post":
                b(x, "post");
                q(x, j(x, c.in, "post"), c.data);
                return;
            case "advance":
                b(x, "advance");
                P(x);
                x.frame.advance(c.ms);
                return;
            case "resize":
                b(x, "resize");
                j(x, c.in, "resize").instance.resize(c.columns, c.rows);
                return;
            case "redraw":
                await N(x, {
                    ...x.input,
                    props: c.props ?? x.input.props
                });
                P(x);
                return;
            case "unmount":
                await w(d, x);
                return;
        }
    }
    return {
        mount,
        act,
        async refresh () {
            for (let d of n.values()){
                await O(d);
            }
        },
        releaseAll () {
            for (let [d, c] of [
                ...n
            ]){
                ao(d, c);
            }
        }
    };
}
async function ot(plugins, dir) {
    await Isr(plugins.filter((n)=>n.path === dir));
    await Isr(plugins);
}
const from = {
    prepend: "policy",
    append: "policy"
};
var tt = (prepend, append)=>({
        prepend,
        append,
        from,
        shadowed: [],
        outermost: []
    });
function rt(e, plugins) {
    let n = (s)=>e.filter((i, f)=>plugins[f]?.tier === s).map((i)=>i.source);
    return {
        managedIds: new Set([
            ...n("prepend"),
            ...n("append")
        ]),
        order: tt(n("prepend").map(_r), n("append").map(_r))
    };
}
var nt = true;
async function No(e, r) {
    let n = basename(e);
    let { plugin, errors } = await mne(e, `${n}@claude-plugin-test`, nt, n);
    let f = r === "builtin";
    let m = [
        ...xr().builtinPlugins.keys()
    ].some((g)=>lm(g, plugin.name));
    if (f && m) {
        throw new Me(`${plugin.name} cannot load in the builtin tier: this Claude Code bundles a plugin of that name, and would load its copy`);
    }
    if (plugin.modulePath === undefined) {
        let g = errors.map((F)=>F.type).join(", ");
        let h = g === "" ? "" : ` (${g})`;
        if (!await readdir(e).then(()=>true, ()=>false)) {
            throw new Me(`${e}: no such plugin folder`);
        }
        let y = await readFile(join(e, "hooks", "hooks.json")).then(()=>true, ()=>false);
        throw new Me(y ? `${e}: no hooks module to load; hooks/hooks.json names none in "modules"${h}` : `${e}: no hooks module to load; there is no hooks/hooks.json naming one in "modules"`);
    }
    if (f) {
        return {
            ...plugin,
            source: `${plugin.name}@${Pi}`
        };
    }
    return plugin;
}
async function it({ plugins }) {
    let r = await Promise.all(plugins.map((i)=>No(i.dir, i.tier)));
    let n = new Set;
    for (let { name } of r){
        if (n.has(name)) {
            throw new Me(`test(name, { plugins }): ${name} is loaded twice`);
        }
        n.add(name);
    }
    let management = rt(r, plugins);
    return {
        plugins: Fsr(r, management.managedIds, management.order),
        management
    };
}
function pt({ plugin, key, requestId, surface, link }) {
    let f = mo({
        act: "press",
        tag: link === undefined ? "Button" : "Markdown",
        plugin,
        key,
        requestId,
        surface
    });
    return hPn({
        plugin,
        handle: f.hosted,
        surface: f.button.surface,
        link
    });
}
function at(e) {
    let r = st();
    let n = new Set(r.loadedModules.map((m)=>m.name));
    let s = e.filter((m)=>!n.has(m));
    if (s.length === 0) {
        return;
    }
    let i = r.pendingUiLog.filter((m)=>s.includes(m.plugin)).map((m)=>`${m.plugin}: ${m.text}`);
    let f = i.length === 0;
    throw new Me(f ? `${s.join(", ")}: hooks module did not load` : i.join(`
`));
}
var ft = (e, isEnded, n)=>({
        log (s, i) {
            if (i && !/^hooks? (chain )?failed: /.test(s)) {
                e(s);
            }
        },
        hookFailed (s) {
            if (s.environmentId !== undefined && isEnded(s.environmentId)) {
                return;
            }
            let f = s.skip?.kind === "unapplied" ? "hook" : "hook was skipped";
            let m = Le(s);
            e(`${s.plugin}'s ${s.event} ${f}: ${s.reason}`);
            if (m !== undefined) {
                n(m);
            }
        }
    });
function ut(plugins) {
    let r = plugins.flatMap((n)=>{
        if (Zg(n.source) && LE(n.name) === undefined) {
            return [
                n.name
            ];
        }
        return [];
    });
    for (let n of r){
        gS({
            name: n,
            description: `${n}, seated in the builtin tier by its test`
        });
    }
    return ()=>{
        for (let n of r){
            xr().builtinPlugins.delete(n);
        }
    };
}
function lt({ plugin, key, value, requestId, surface }) {
    let f = mo({
        act: "select",
        tag: "Select",
        plugin,
        key,
        requestId,
        surface
    });
    return yPn({
        plugin,
        handle: f.hosted,
        element: key,
        component: f.button.component,
        surface: f.button.surface,
        value
    });
}
var ct = (e)=>lwr.set(e);
var dt = (e)=>JSr.set(e);
var gt = (e)=>Gor.set(e);
var rs = (e)=>LSr.set(e);
var maxRetries = 3;
function fs({ root, bare, spec, isEnded }) {
    let i = new AbortController;
    let f = st();
    let m = Ll();
    let f_uiLogSink = f.uiLogSink;
    let h = nT();
    let k = $ne.get();
    let told = [];
    let F = (H)=>{
        told.push(H);
    };
    let failed;
    let P = (H)=>{
        failed ??= H;
    };
    let b;
    let j;
    let G = [];
    let W;
    a7t(ft(F, isEnded, P));
    let mounts = Ze({
        render: async (H)=>{
            await w();
            return xo("ui.render", i.signal)(H);
        },
        told
    });
    async function ao(H, R) {
        let q = await mkdtemp(join(tmpdir(), "claude-plugin-test-"));
        b = q;
        let io = await Promise.all(spec.plugins.map(async (S)=>({
                dir: await Fe(q, S),
                tier: S.tier
            })));
        let d = await me(q, H);
        let c = await it({
            plugins: [
                {
                    dir: root,
                    tier: spec.tier
                },
                ...io,
                {
                    dir: d.dir,
                    tier: "builtin"
                }
            ]
        });
        W = ut(c.plugins);
        ct(c.management);
        let x = c.plugins.find((S)=>S.path === root);
        if (spec.options && x) {
            gt({
                pluginId: rm(x),
                options: spec.options
            });
        }
        dt(new Map([
            [
                d.modulePath,
                ne(bare, R)
            ]
        ]));
        f.pendingUiLog = [];
        let v = c.plugins.map((S)=>S.path);
        f6(v);
        $ne.set(v);
        await ot(c.plugins, d.dir);
        G = f.loadedModules.map((S)=>S.environmentId);
        at(c.plugins.map((S)=>S.name));
        TAn((S)=>F(`${S.plugin}: ${S.text}`));
    }
    async function w() {
        if (!j) {
            throw Error("the engine is used before its load");
        }
        await j;
    }
    async function close() {
        i.abort();
        mounts.releaseAll();
        try {
            if (j) {
                await j.catch(()=>{});
                await Isr([]);
            }
        } finally{
            W?.();
            dt(undefined);
            Ydr();
            ct(undefined);
            gt(undefined);
            a7t(m);
            f.uiLogSink = f_uiLogSink;
            f6(h);
            $ne.set(k);
            if (b !== undefined) {
                await rm_1(b, {
                    recursive: true,
                    force: true,
                    maxRetries
                }).catch((R)=>t(`claude plugin test: ${b} was not removed: ` + l(R), {
                        level: "warn"
                    }));
            }
        }
        return {
            told: told.length === 0 ? "" : `the engine reported:
${told.map((R)=>`  ${R}`).join(`
`)}`,
            ...failed !== undefined && {
                failed
            }
        };
    }
    return {
        load: (H, R)=>j ??= ao(H, R),
        ready: async ()=>{
            await j?.catch(()=>{});
        },
        call: async (H, R)=>{
            await w();
            return xo(H, i.signal)(R);
        },
        stream: (H, R)=>RV(async function*() {
                await w();
                return yield* xo(H, i.signal)(R);
            }()),
        press: async (H)=>{
            await w();
            return pt(H);
        },
        input: async (H)=>{
            await w();
            return Ne(H);
        },
        select: async (H)=>{
            await w();
            return lt(H);
        },
        mounts,
        environmentIds: ()=>G,
        close
    };
}
var cs = p(()=>u({
        plugin: o(),
        key: o(),
        requestId: o().optional(),
        surface: o().refine(m$e, "is not a surface").optional(),
        link: u({
            href: o()
        }).optional()
    }));
function gs(e) {
    if (typeof e === "string" || e === undefined) {
        return e;
    }
    if ("sessionId" in e) {
        return e.sessionId;
    }
    return e.agentId;
}
function ht(args, plugin, n) {
    let s = {
        kind: "plugin",
        name: plugin
    };
    switch(n){
        case "command.run":
            {
                let i = args;
                return {
                    ...i,
                    args: i.args ?? "",
                    origin: i.origin ?? s,
                    presentation: i.presentation ?? bwt(undefined)
                };
            }
        case "prompt.fill":
            {
                let i = args;
                return {
                    ...i,
                    mode: i.mode ?? "replace",
                    origin: i.origin ?? s
                };
            }
        case "prompt.suggest":
            {
                let i = args;
                return {
                    ...i,
                    origin: i.origin ?? s
                };
            }
        case "prompt.submit":
            {
                let { asUser, ...rest } = args;
                return {
                    ...rest,
                    wait: rest.wait ?? false,
                    origin: rest.origin ?? (asUser === true ? {
                        ...s,
                        asUser: true
                    } : s)
                };
            }
        case "session.send":
            {
                let i = args;
                return {
                    ...i,
                    to: gs(i.to),
                    origin: i.origin ?? s
                };
            }
        case "session.append":
            return JFt(args, plugin);
        default:
            return args;
    }
}
var jo = {
    "tool.call": "tool.call",
    "tool.check": "tool.check",
    "agent.spawn": "agent.spawn",
    "ui.ask": "tool.call",
    "command.run": "command.run",
    "config.set": "config.set",
    "telemetry.log": "telemetry.log",
    "telemetry.mark": "telemetry.mark",
    "prompt.submit": "prompt.submit",
    "prompt.fill": "prompt.fill",
    "prompt.suggest": "prompt.suggest",
    "prompt.compose": "prompt.compose",
    "session.compact": "session.compact",
    "session.send": "session.send",
    "session.append": "session.append"
};
async function Tt(e, r, n) {
    if (e === "tool.call") {
        let { isReadOnly, ...rest } = r;
        return de(rest, n.denials);
    }
    if (e === "telemetry.log" || e === "telemetry.mark") {
        return xsr(n.caller, e, r);
    }
    if (e !== "prompt.fill") {
        return r;
    }
    let { isFilled } = r;
    let { text, cursor } = await Rsr(n.caller, n.scan);
    return {
        isFilled,
        text,
        cursor
    };
}
var bottom = {
    run: (e, r)=>{
        x6t(r.plugin, "steady");
        x6t(r.plugin, "live");
        return Promise.resolve();
    }
};
const Et = {
    check: Xdr,
    run: Qdr
};
const Ht = {
    check: Jdr,
    run: async (e, r)=>{
        let n = await Zdr(e, r);
        let s = Date.now();
        dTt("steady", s);
        dTt("live", s);
        return n;
    }
};
var St = {
    "state.get": Et,
    "state.set": Ht
};
function Ot({ op, args, caller }, raise, scan) {
    if (op === "ui.invalidate") {
        let g = args;
        return T2e({
            event: "ui.invalidate",
            args: g,
            caller,
            raise,
            ...g.event === "ui.render" && {
                bottom
            }
        });
    }
    if (Ago(op)) {
        let bottom_1 = $Fn(op) ? St[op] : undefined;
        return T2e({
            event: op,
            args,
            caller,
            raise,
            ...bottom_1 !== undefined && {
                bottom: bottom_1
            }
        });
    }
    let f = Object.hasOwn(jo, op) ? jo[op] : undefined;
    if (!f) {
        return cgo({
            event: op
        });
    }
    let denials = b$e();
    return ga(f, {
        origin: caller.origin,
        signal: caller.signal,
        withheldCore: Mo(caller.origin, denials),
        withheldFloor
    })(ht(args, caller.plugin, f)).then((g)=>Tt(f, g, {
            caller,
            scan,
            denials
        }));
}
function vs() {
    a.set("CLAUDE_CODE_HOOKS_SAME_THREAD", ze);
    st().hookRegistration ??= Promise.resolve();
    rs(Ot);
}
function Ms(plugins) {
    let r = new Set([
        Z
    ]);
    for (let { name, source } of plugins){
        if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) {
            throw new Me(`test(name, { plugins }): "${name}" is no plugin name (lowercase letters, digits and dashes)`);
        }
        if (r.has(name)) {
            let i = name === Z;
            throw new Me(i ? `test(name, { plugins }): "${name}" is the name the hooks of the test load under; name the plugin otherwise` : `test(name, { plugins }): "${name}" is named twice`);
        }
        yo(name, source);
        r.add(name);
    }
}
var Ps = p(()=>u({
        plugin: o(),
        key: o(),
        value: o(),
        requestId: o().optional(),
        surface: o().refine(m$e, "is not a surface").optional()
    }));
const Lo = ()=>U([
        "prepend",
        "user",
        "append",
        "builtin"
    ]);
var $s = p(()=>u({
        tier: Lo(),
        plugins: T(u({
            name: o(),
            tier: Lo(),
            source: o()
        })),
        options: ue(o(), Ue([
            o(),
            E(),
            M(),
            T(o())
        ])).optional()
    }));
var vt = [
    "PATH",
    "HOME",
    "USERPROFILE",
    "SystemRoot",
    "TMPDIR",
    "TEMP",
    "TMP",
    "LANG",
    "LC_ALL",
    "TERM",
    "NO_COLOR",
    "FORCE_COLOR",
    "USER_TYPE",
    "CLAUDE_CONFIG_DIR",
    ...fis
];
function js(e) {
    let r = {};
    for (let n of vt){
        let s = e[n];
        if (s !== undefined) {
            r[n] = s;
        }
    }
    return r;
}
function Ls(e) {
    if (eo() === null) {
        return e;
    }
    return {
        ...e,
        DISABLE_GROWTHBOOK: "1"
    };
}
var timeout = 600000;
var Mt = p(()=>u({
        file: o(),
        results: T(u({
            title: o(),
            ms: E(),
            failure: o().nullable()
        })).readonly(),
        error: o().optional()
    }));
var Ct = 3;
function Do(e) {
    let { msg, name } = w$e(e);
    if (msg === "") {
        return name;
    }
    return msg;
}
var to = (file, error)=>({
        file,
        results: [],
        error
    });
var ho = (failure)=>({
        title: "the file ran to its end",
        ms: 0,
        failure
    });
var Uo = "index.js";
const Pt = "/$bunfs/root/kit-modules.js-c792dea0.txt.zst";
const Rt = Je(Pt, import.meta.dirname);
const _t = Rt;
const Ko = "//// ";
var It = ()=>new Map(_t.split(`
${Ko}`).map((e, r)=>{
        if (r === 0) {
            return e.slice(Ko.length);
        }
        return e;
    }).map((e)=>{
        let r = e.indexOf(`
`);
        return [
            e.slice(0, r),
            e.slice(r + 1)
        ];
    }));
var To = "@/src/plugins/functionHooks/plugin-test/testing";
function bt(e, r, n) {
    let s = e === To || e.startsWith(`${To}/`);
    let i = e === "." || e.startsWith("./");
    if (!s && !i) {
        throw new Me(`the kit's ${r} imports ${e}, which is outside the kit`);
    }
    let f = s ? e.slice(To.length + 1) : posix.join(posix.dirname(r), e);
    let m = posix.normalize(f === "" ? "." : f);
    let g = [
        m,
        `${m}.js`,
        posix.join(m, "index.js")
    ].find(n);
    if (g === undefined) {
        throw new Me(`the kit's ${r} imports ${e}, which is no module of it`);
    }
    return g;
}
var identifier = "claude-code/testing";
var $t = (e)=>e.slice(identifier.length + 1);
async function ri(context) {
    let r = It();
    let n = new Map;
    let s = new Map;
    let importModuleDynamically = sws(context);
    function f(k) {
        let y = n.get(k) ?? new Gt.SourceTextModule(r.get(k) ?? "", {
            context,
            identifier: `${identifier}/${k}`,
            importModuleDynamically
        });
        n.set(k, y);
        return y;
    }
    async function m(k, y) {
        let F = $t(y.identifier);
        let N = bt(k, F, (P)=>r.has(P));
        if (N !== F) {
            await g(N);
        }
        return f(N);
    }
    function g(k) {
        let y = s.get(k) ?? f(k).link(m);
        s.set(k, y);
        return y;
    }
    await g(Uo);
    let h = f(Uo);
    await h.evaluate();
    return h.namespace;
}
var zt = 2;
function Eo(e) {
    let r = e.path.map(String);
    let n = (r[0] === "seeds" ? r.slice(1) : r).join(".");
    let s = n === "" ? "" : `${n}: `;
    switch(e.code){
        case "unrecognized_keys":
            return `${s}unknown key ` + e.keys.map((i)=>`"${i}"`).join(", ");
        case "invalid_type":
            return `${s}expected ${e.expected}`;
        case "invalid_value":
            return `${s}expected one of ${e.values.map(String).join(", ")}`;
        case "invalid_key":
            return s + e.issues.map((i)=>Eo({
                    ...i,
                    path: []
                })).join(", ");
        case "invalid_union":
            return s + e.errors.map((i)=>i.map(Eo).join(", ")).join("; or ");
        case "custom":
        case "too_big":
        case "too_small":
        case "invalid_format":
        case "not_multiple_of":
        case "invalid_element":
            return `${s}${e.message}`;
    }
}
var Ho = (e)=>{
    if (typeof e === "string") {
        return X(e);
    }
    return null;
};
function oo(e, r, n) {
    let s = e.safeParse(Ho(r));
    if (!s.success) {
        throw new Me(`${n}: ${s.error.issues.map(Eo).join("; ")}`);
    }
    return s.data;
}
var jt = p(()=>T(o()));
var Lt = (environment)=>(r)=>tO(environment.bare.wrapMethod(r));
function qo(e, r, n) {
    let { bare } = e.environment;
    let f = Vor() ? t7t(bare, bare.leavingCopy(r), (m)=>v9r(n, m)) : r;
    return v7o(f, n);
}
function Bt(e) {
    let { register, holding } = L(e) ? e : {};
    if (typeof holding !== "function") {
        throw new Me("load: { register, holding } from the seat");
    }
    return {
        register,
        holding: ()=>{
            let s = Number(holding());
            if (Number.isFinite(s)) {
                return s;
            }
            return 0;
        }
    };
}
var Dt = 500;
function Ut(e) {
    let { environment, root } = e;
    let { bare } = environment;
    let i = Lt(environment);
    let f = ygo(bare);
    let m = new Map;
    let g = new Map;
    let h = new Set;
    let k = 0;
    function y(w) {
        let O = typeof w === "number" ? m.get(w) : undefined;
        if (!O) {
            throw new Me("this test has ended");
        }
        return O;
    }
    let F = (w)=>Promise.all([
            ...m.values()
        ].map(w));
    async function N() {
        await F((w)=>w.ready());
        await setImmediate_1();
    }
    async function P() {
        await N();
        await F((w)=>w.mounts.refresh());
        await N();
    }
    let b = (w)=>!h.has(w);
    let j = ()=>[
            ...g.values()
        ].some((w)=>w() > 0);
    async function G() {
        await N();
        let w;
        let O = performance.now();
        let H = k7o(b);
        while(H.acting > 0){
            let R = H.epoch !== w;
            if (!R && (j() || performance.now() - O >= Dt)) {
                break;
            }
            if (R) {
                w = H.epoch;
                O = performance.now();
            }
            await setTimeout_1(zt);
            H = k7o(b);
        }
        await P();
    }
    async function W(w) {
        let O = await w;
        await G();
        return bare.vmClone(O);
    }
    async function J(w) {
        let O = y(w);
        m.delete(w);
        g.delete(w);
        for (let H of O.environmentIds()){
            h.add(H);
        }
        return bare.vmClone(await O.close());
    }
    return {
        host: z_({
            open: i((w)=>{
                let spec = oo($s(), w, "test()");
                Ms(spec.plugins);
                k += 1;
                m.set(k, fs({
                    root,
                    bare,
                    spec,
                    isEnded: (H)=>h.has(H)
                }));
                return k;
            }),
            load: i((w, O, H)=>{
                let R = y(w);
                let { register, holding } = Bt(H);
                g.set(w, holding);
                return R.load(oo(jt(), O, "on()"), register);
            }),
            call: i(async (w, O, H)=>bare.vmClone(await y(w).call(String(O), qo(e, H, `$.${String(O)} argument`)))),
            stream: i((w, O, H)=>f(y(w).stream(String(O), qo(e, H, `$.${String(O)} argument`)))),
            press: i((w, O)=>W(y(w).press(oo(cs(), O, "$.ui.press()")))),
            input: i((w, O)=>W(y(w).input(oo(on(), O, "$.ui.input()")))),
            select: i((w, O)=>W(y(w).select(oo(Ps(), O, "$.ui.select()")))),
            mount: i(async (w, O)=>{
                let H = oo(an(), O, "$.ui.mount()");
                let R = y(w);
                await R.ready();
                let q = await R.mounts.mount(H);
                await G();
                return q;
            }),
            mounted: i(async (w, O, H)=>{
                let R = oo(pn(), H, "a mounted drawing");
                let q = y(w);
                if (typeof O !== "number") {
                    throw new Me("this drawing was unmounted");
                }
                if (R.act === "drawn" || R.act === "find" || R.act === "findAll") {
                    await G();
                    return bare.vmClone(await q.mounts.act(O, R));
                }
                return W(q.mounts.act(O, R));
            }),
            close: i(J),
            settle: i(()=>G()),
            now: i(()=>performance.now())
        }),
        dispose: async ()=>{
            for (let w of [
                ...m.keys()
            ]){
                await J(w);
            }
        }
    };
}
function Kt(e) {
    let r = Ho(e);
    if (!(Array.isArray(r) && r.every((s)=>L(s) && typeof s.title === "string" && typeof s.ms === "number" && (s.failure === null || typeof s.failure === "string")))) {
        throw new Me("the kit answered results of the wrong shape");
    }
    return r;
}
var Vo = [
    "describe",
    "expect",
    "mock",
    "test",
    "tier"
];
async function hi(environment, root) {
    let { call, bare } = environment;
    let { host, dispose } = Ut({
        environment,
        root
    });
    let m = await ri(bare.context);
    await call(m.install, host, _(qr()));
    return {
        module: new Gt.SyntheticModule([
            ...Vo
        ], function() {
            for (let h of Vo){
                this.setExport(h, m[h]);
            }
        }, {
            context: bare.context,
            identifier
        }),
        run: async ()=>Kt(await call(m.run)),
        dispose
    };
}
const no = {
    tab: 9,
    space: 32,
    delete: 127,
    c1Last: 159,
    radix: 16,
    digits: 4
};
var so = (e)=>[
        ...e
    ].map((r)=>{
        let n = r.charCodeAt(0);
        let s = n < no.space && n !== no.tab || n >= no.delete && n <= no.c1Last;
        let i = n.toString(no.radix).padStart(no.digits, "0");
        if (s) {
            return `\\u${i}`;
        }
        return r;
    }).join("");
function Vt(wrapMethod) {
    let r = ()=>tO(wrapMethod((...n)=>{
            process.stderr.write(n.map(jYe).join(" ").split(`
`).map(so).join(`
`) + `
`);
        }));
    return z_({
        log: r(),
        info: r(),
        warn: r(),
        error: r(),
        debug: r()
    });
}
function Wt({ live, id, fire, fn, args }) {
    live.delete(id);
    fire(fn, args);
}
var Jt = 2147483647;
var Qt = (globals, clearAll, thrown)=>({
        globals,
        clearAll,
        thrown
    });
function Xt(wrapMethod, r) {
    let live = new Map;
    let id = 0;
    let i = [];
    let fire = (h, k)=>{
        r(h, ...k).catch((y)=>{
            i = [
                ...i,
                l(y)
            ];
        });
    };
    let m = (h)=>tO(wrapMethod((fn, y, ...F)=>{
            if (typeof fn !== "function") {
                throw new Me("a timer takes a function");
            }
            let N = Number.isFinite(y) && Number(y) > 0 ? Number(y) : 0;
            let P = Math.min(N, Jt);
            id += 1;
            live.set(id, h ? setInterval(fire, P, fn, F) : setTimeout(Wt, P, {
                live,
                id,
                fire,
                fn,
                args: F
            }));
            return id;
        }));
    let g = tO(wrapMethod((h)=>{
        let k = typeof h === "number" ? live.get(h) : undefined;
        if (k) {
            live.delete(h);
            clearInterval(k);
        }
    }));
    return Qt({
        setTimeout: m(false),
        setInterval: m(true),
        clearTimeout: g,
        clearInterval: g
    }, ()=>{
        for (let h of live.values()){
            clearInterval(h);
        }
        live.clear();
    }, ()=>i);
}
function Ri(pluginRoot) {
    let bare = pgo(pluginRoot);
    let { vmCall, vmSettle, fromEnvironment, wrapMethod } = bare;
    async function call(h, ...k) {
        try {
            return (await vmSettle(vmCall(h, ...k))).v;
        } catch (error) {
            throw fromEnvironment(error);
        }
    }
    let g = Xt(wrapMethod, call);
    Object.assign(bare.globals, {
        console: Vt(wrapMethod),
        ...g.globals
    });
    return {
        bare,
        call,
        dispose: g.clearAll,
        thrown: g.thrown
    };
}
async function Fi(pluginRoot, file) {
    let n = Ri(pluginRoot);
    let s = await hi(n, pluginRoot);
    let i = (m)=>to(file, Do(m));
    let f = (m)=>to(file, `its tests did not finish: ${Do(m)}`);
    try {
        let m = await iws({
            args: {
                modulePath: file,
                pluginName: relative(pluginRoot, file),
                pluginRoot,
                source: await readFile(file, {
                    encoding: "utf8"
                }),
                linked: [],
                links: []
            },
            context: n.bare.context,
            isScanned: false,
            stamped: (y)=>y(),
            virtual: new Map([
                [
                    identifier,
                    s.module
                ]
            ])
        }).then(()=>{}, i);
        if (m) {
            return m;
        }
        let g = await s.run().then((results)=>{
            if (results.length === 0) {
                return to(file, "it declares no test(): nothing ran");
            }
            return {
                file,
                results
            };
        }, f);
        for(let y = 0; y < Ct; y += 1){
            await Q(0);
        }
        let h = n.thrown();
        if (h.length === 0) {
            return g;
        }
        return {
            ...g,
            results: [
                ...g.results,
                ho(`a timer callback threw: ${h.join(`
`)}`)
            ]
        };
    } finally{
        await s.dispose();
        n.dispose();
    }
}
function Yt(e, stdout, exitCode) {
    let s = stdout.split(`
`).findLast((g)=>g.startsWith(QFt));
    let i = Mt().safeParse(s === undefined ? null : mt(s.slice(QFt.length)));
    let f = i.success && i.data.file === e ? i.data : undefined;
    if (f === undefined) {
        return to(e, `its run ended without a report (exit code ${exitCode ?? "?"})`);
    }
    if (exitCode === 0) {
        return f;
    }
    return {
        ...f,
        results: [
            ...f.results,
            ho(`its run exited with code ${exitCode ?? "?"} after reporting: a rejection nothing handled, or a throw after its test ended`)
        ]
    };
}
var or = /^\s+at (?:.+ \()?(?:\S+:\d+:\d+|native)\)?$/;
var er = (e, r)=>e.includes(r);
function Wo(e, root) {
    let n = e.split(`
`);
    let s = n.findLastIndex((m)=>!or.test(m)) + 1;
    let i = n.slice(s).filter((m)=>er(m, root)).map((m)=>m.replaceAll(`${root}${sep}`, "").replaceAll(`${root}/`, ""));
    let f = [
        ...n.slice(0, s),
        ...i
    ];
    return f.slice(0, f.findLastIndex((m)=>m.trim() !== "") + 1).map((m)=>`  ${so(m)}`).join(`
`);
}
function tr(e, root) {
    let n = [
        "",
        `${so(relative(root, e.file))}:`
    ];
    if (e.error !== undefined) {
        n.push("(fail) the file did not load", Wo(e.error, root));
    }
    for (let s of e.results){
        let i = `[${s.ms.toFixed(2)}ms]`;
        let f = s.failure === null;
        let m = so(s.title);
        n.push(...f ? [
            `(pass) ${m} ${i}`
        ] : [
            `(fail) ${m} ${i}`,
            Wo(s.failure ?? "", root)
        ]);
    }
    return `${n.join(`
`)}
`;
}
function rr() {
    if (mis()) {
        return {
            DISABLE_GROWTHBOOK: "1"
        };
    }
    return {};
}
async function qi(cwd, r) {
    let n = uu({
        pinToCurrentBinary: true
    });
    try {
        let s = await Ih(n.cmd, [
            ...n.prefixArgs,
            "plugin",
            "test",
            "--file",
            r,
            cwd
        ], {
            cwd,
            env: {
                ...js(Ls(bs())),
                ...rr()
            },
            extendEnv: false,
            stdin: "ignore",
            stdout: "pipe",
            stderr: "inherit",
            reject: false,
            timeout,
            toolCgroupClass: "plugin",
            windowsHide: true
        });
        if (s.timedOut === true) {
            return to(r, `it did not finish: its run passed ${timeout} ms and was killed, its results with it; a test that never yields (a loop with no await) outlasts its own timeout`);
        }
        return Yt(r, s.stdout, s.exitCode);
    } catch (error) {
        return to(r, `its child did not run: ${l(error)}`);
    }
}
async function Ji({ root, files, runFile, write }) {
    let i = performance.now();
    let f = Math.max(1, Math.min(files.length, availableParallelism()));
    let m = [];
    let g = 0;
    function h() {
        let P = files[g];
        g += 1;
        if (P === undefined) {
            return;
        }
        let b = runFile(P);
        m.push(b);
        b.then(h, h);
    }
    for(let P = 0; P < f; P += 1){
        h();
    }
    let k = 0;
    let y = 0;
    for(let P = 0; P < files.length; P += 1){
        while(!m[P]){
            await Promise.race(m);
        }
        let b = await m[P];
        write(tr(b, root));
        let j = b.results.filter((G)=>G.failure !== null);
        k += b.results.length - j.length;
        y += j.length + (b.error === undefined ? 0 : 1);
    }
    let F = ((performance.now() - i) / Z5).toFixed(2);
    let N = k + y;
    write(`
 ${k} pass
 ${y} fail
Ran ${N} ${I(N, "test")} across ${files.length} ${I(files.length, "file")}. [${F}s]
`);
    if (y === 0) {
        return 0;
    }
    return 1;
}
var Jo = 1000;
async function Yi(root) {
    let r = [];
    let n = [
        root
    ];
    for(let s = n.pop(); s !== undefined; s = n.pop()){
        let i = await readdir(s, {
            withFileTypes: true
        });
        for (let f of i){
            let m = join(s, f.name);
            let g = f.name === "node_modules" || f.name.startsWith(".");
            let h = f.isFile() && /\.test\.tsx?$/.test(f.name);
            if (f.isDirectory() && !g) {
                n.push(m);
            }
            if (h) {
                r.push(m);
            }
            if (r.length > Jo) {
                throw new Me(`more than ${Jo} test files under ${root}; name a narrower folder`);
            }
        }
    }
    return r.toSorted();
}
export var isTeardown = (e)=>/ its environment was unloaded$/.test(e);
export var LATE_TURNS = 3;
export var safeMessageOf = (e)=>w$e(e).msg;
export async function runChild({ file, dir, write }) {
    let s = relative(dir, file);
    if (!(s !== "" && !s.startsWith("..") && !isAbsolute(s))) {
        process.stderr.write(`claude plugin test: ${file} is not in ${dir}
`);
        return 1;
    }
    let f = [];
    function m(g) {
        let h = safeMessageOf(g);
        if (!isTeardown(h)) {
            f.push(h);
        }
    }
    process.on("unhandledRejection", m);
    vs();
    try {
        let g = await Fi(dir, file);
        for(let F = 0; F < LATE_TURNS; F += 1){
            await Q(0);
        }
        let h = f.length === 0;
        let k = ho(`a rejection nothing handled: ${f.join(`
`)}`);
        let y = h ? g : {
            ...g,
            results: [
                ...g.results,
                k
            ]
        };
        write(`${QFt}${_(y)}
`);
    } finally{
        process.off("unhandledRejection", m);
    }
    return 0;
}
export async function pluginTestMain(e) {
    let write = (k)=>{
        process.stdout.write(k);
    };
    if (e.includes("--help") || e.includes("-h")) {
        write(qFt);
        return 0;
    }
    let [n, s, i] = e;
    if (n === "--file" && e.length === CHILD_ARGV_LENGTH && s !== undefined && i !== undefined) {
        return Fpn(await runChild({
            file: s,
            dir: i,
            write
        }));
    }
    let root = resolve(se(), e[0] ?? ".");
    let g = await No(root, "user").then(()=>{}, (k)=>l(k));
    if (g !== undefined) {
        process.stderr.write(`claude plugin test: ${g}
`);
        return 1;
    }
    let files = await Yi(root).catch((k)=>{
        process.stderr.write(`claude plugin test: ${l(k)}
`);
    });
    if (!files) {
        return 1;
    }
    if (files.length === 0) {
        process.stderr.write(`claude plugin test: no *.test.ts or *.test.tsx under ${root}
`);
        return 1;
    }
    return Ji({
        root,
        files,
        runFile: (k)=>qi(root, k),
        write
    });
}
export { Cpn as IS_WORKTREE_LAUNCH, qFt as PLUGIN_TEST_USAGE, Lpn as SAVE_FAILURE, Ppn as SIGN_IN_MARGIN_MS, te as default, xpn as earlyFetchVetoed, Fpn as endPluginTest, Opn as fetchRefreshesSignIn, Mpn as flagClientQuieted, Dpn as isSavedSwitchOf, c$r as pluginTestFormOf, d$r as pluginTestGatesOf, u$r as pluginTestRefusal, Hpn as savedFlags, Rpn as sessionHoldsEarlyFetch, Ipn as signInNearsExpiry, $pn as switchFetched, Npn as switchSaveSettled };
