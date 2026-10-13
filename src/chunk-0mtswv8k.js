import { x, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Kie, B6 } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { qie } from "/$bunfs/root/chunk-7qnr52x0.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Gi, dG, Va, _m, ll } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, Dh, MN, Vy, T8e } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { eUt } from "/$bunfs/root/chunk-frk0gra8.js";
import { o, M, oe, T, u, Ue, Wr, ue, U, A, qE } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { createHash } from "crypto";
import { constants } from "fs";
import R from "path";
import { open } from "fs/promises";
import { createConnection } from "net";
const N = 120;
function B(e) {
    if (e.length > N) {
        return `${ne(e, N)}...`;
    }
    return e;
}
function _f(e) {
    return T8e(_(B(e)));
}
function g$r(e) {
    if (typeof e === "string") {
        return _f(e);
    }
    let t = _(e) ?? String(e);
    if (t.length <= N) {
        return T8e(t);
    }
    return T8e(_(B(t)));
}
async function qb(e, t, r, i = []) {
    let n = R.resolve(e, t);
    let s = _f(t);
    let anchors = [
        e,
        ...i
    ];
    if (_m(t) && !Va(t) || _m(n) && !Va(n)) {
        throw new x(`${r}: ${s} is an automounter path (macOS /Network, or the bare /net root) \u2014 refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path — refusing it");
    }
    let f = ll(n) || ll(t) && !Gi(n, e);
    if (Gi(t, e) && i.every((h)=>Gi(n, h)) && !f) {
        throw new x(`${r}: ${s} is a network-reaching path (UNC / automount) \u2014 refusing it`, "plugin eval: a repo-authored path is network-reaching — refusing it");
    }
    let d;
    let y = await MN(Vy, n, {
        anchors,
        surfaceNetworkRaw: true,
        unreadableAncestry: "unverified",
        onOutcome: (h)=>{
            if (h.kind === "resolved") {
                d = h.path;
            }
        }
    });
    if (y === Dh) {
        throw new x(`${r}: ${s} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component — refusing it");
    }
    if (y !== undefined) {
        throw new x(`${r}: ${s} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`, "plugin eval: a repo-authored path links to a network-reaching path — refusing it");
    }
    if (d !== undefined && dG(d)) {
        throw new x(`${r}: ${s} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) \u2014 refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory — refusing it");
    }
}
const ee = 8192;
const H = 50000000;
const te = /^[is]*$/;
function G(source) {
    let r = 0;
    let i = 1;
    let n = 0;
    let s = false;
    let a = false;
    let f = false;
    for(let c = 0; c < source.length; c++){
        let g = source[c];
        if (g === "(" || g === ")" || g === "|") {
            return {
                problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
            };
        }
        if (g === "^") {
            if (c !== 0) {
                return {
                    problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
                };
            }
            s = true;
            a = false;
            f = false;
            continue;
        }
        if (g === "$") {
            if (c !== source.length - 1) {
                return {
                    problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
                };
            }
            continue;
        }
        let b = null;
        if (g === "*") {
            b = {
                lo: 0,
                hi: Infinity
            };
        } else if (g === "+") {
            b = {
                lo: 1,
                hi: Infinity
            };
        } else if (g === "?") {
            if (f) {
                f = false;
                continue;
            }
            b = {
                lo: 0,
                hi: 1
            };
        } else if (g === "{") {
            let m = /^\{(\d+)(?:,(\d*))?\}/.exec(source.slice(c));
            if (m) {
                let lo = Number(m[1]);
                let hi = m[2] === undefined ? lo : m[2] === "" ? Infinity : Number(m[2]);
                if (hi < lo) {
                    return {
                        problem: `quantifier ${m[0]} has max < min`
                    };
                }
                b = {
                    lo,
                    hi
                };
                c += m[0].length - 1;
            }
        }
        if (b !== null) {
            if (!a) {
                return {
                    problem: "a quantifier must follow a single character, escape, or class"
                };
            }
            n += (b.hi === Infinity ? b.lo : b.hi) - 1;
            if (b.hi === Infinity) {
                r++;
            } else {
                i *= b.hi - b.lo + 1;
            }
            a = false;
            f = true;
            continue;
        }
        f = false;
        if (g === "\\") {
            let m = source[c + 1];
            if (m === undefined) {
                return {
                    problem: "pattern ends with a lone backslash"
                };
            }
            if (/[1-9]/.test(m) || m === "k") {
                return {
                    problem: 'expect: /regex/ guards use a small dialect — literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(…)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
                };
            }
            a = m !== "b" && m !== "B";
            if (a) {
                n++;
            }
            c++;
            continue;
        }
        if (g === "[") {
            c++;
            while(c < source.length && source[c] !== "]"){
                if (source[c] === "\\") {
                    c++;
                }
                c++;
            }
            if (c >= source.length) {
                return {
                    problem: "unterminated character class"
                };
            }
            a = true;
            n++;
            continue;
        }
        a = true;
        n++;
    }
    if (i > H) {
        return {
            problem: "too many optional/bounded repeats for an expect: guard"
        };
    }
    let d = (c)=>{
        let g = 1;
        for(let b = 1; b <= r; b++){
            g = g * (c + b) / b;
        }
        return (s ? 1 : Math.max(1, c)) * g * i * (c + n);
    };
    let maxSubject = 0;
    let h = ee;
    while(maxSubject < h){
        let c = Math.ceil((maxSubject + h) / 2);
        if (d(c) <= H) {
            maxSubject = c;
        } else {
            h = c - 1;
        }
    }
    if (maxSubject < 16) {
        return {
            problem: "this combination of repeats leaves no useful subject length under the matching budget — use fewer quantifiers"
        };
    }
    return {
        maxSubject,
        problem: null
    };
}
const re = new Set([
    "string",
    "number",
    "bool",
    "boolean",
    "object",
    "array"
]);
function C(e, t) {
    let r = e;
    for (let i of t.split(".")){
        if (r === null || typeof r !== "object") {
            return;
        }
        if (Array.isArray(r)) {
            if (!/^\d+$/.test(i)) {
                return;
            }
            r = r[Number(i)];
            continue;
        }
        r = Object.hasOwn(r, i) ? r[i] : undefined;
    }
    return r;
}
function jgt(e, t, r = "") {
    for (let [i, n] of Object.entries(t)){
        let s = r ? `${r}.${i}` : i;
        let a = C(e, s);
        let f = ie(a, n, s, e);
        if (f !== null) {
            return f;
        }
    }
    return null;
}
function ie(e, t, r, i) {
    if (Array.isArray(t)) {
        if (t.some((s)=>D(e, s))) {
            return null;
        }
        return `${r} = ${E(e)} is not one of [${t.join(", ")}]`;
    }
    if (typeof t === "object" && t !== null) {
        return jgt(i, t, r);
    }
    let n = q(t);
    if (n !== null) {
        let s = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null;
        let a = G(n.source);
        if (!("maxSubject" in a)) {
            return `${r}: ${t} is not a usable guard (${a.problem})`;
        }
        let f = a.maxSubject;
        if (s !== null && s.length > f) {
            return `${r} is ${s.length} characters, more than this /regex/ guard checks (${f})`;
        }
        if (s !== null && n.test(s)) {
            return null;
        }
        return `${r} = ${E(e)} does not match ${t}`;
    }
    if (re.has(t)) {
        let s = t === "boolean" ? "bool" : t;
        if (se(e) === s) {
            return null;
        }
        return `${r} = ${E(e)} is not a ${t}`;
    }
    if (D(e, t)) {
        return null;
    }
    return `${r} = ${E(e)} is not "${t}"`;
}
function D(e, t) {
    if (typeof e === "string") {
        return e === t;
    }
    if (typeof e === "number" || typeof e === "boolean") {
        return String(e) === t;
    }
    return false;
}
function q(e) {
    let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
    if (!t) {
        return null;
    }
    return new RegExp(t[1] ?? "", t[2] ?? "");
}
function se(e) {
    if (Array.isArray(e)) {
        return "array";
    }
    if (e === null || e === undefined) {
        return "missing";
    }
    if (typeof e === "boolean") {
        return "bool";
    }
    return typeof e;
}
function E(e) {
    if (e === undefined) {
        return "(missing)";
    }
    let t = _(e);
    if (t.length > 80) {
        return `${ne(t, 77)}...`;
    }
    return t;
}
const j = 32;
function h$r(e, t = "") {
    let r = [];
    if (t === "") {
        let i = V(e);
        if (i > j) {
            r.push(`expect: ${i} guards is more than the ${j} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`);
            return r;
        }
    }
    for (let [i, n] of Object.entries(e)){
        let s = t ? `${t}.${i}` : i;
        if (Array.isArray(n)) {
            if (n.length === 0) {
                r.push(`expect.${s}: an empty list of allowed values can never be satisfied \u2014 list at least one`);
            }
            continue;
        }
        if (typeof n === "object" && n !== null) {
            r.push(...h$r(n, s));
            continue;
        }
        if (/^\/.*\/[a-z]*$/s.test(n)) {
            try {
                let a = q(n);
                let f = a ? G(a.source) : null;
                if (a && !te.test(a.flags)) {
                    r.push(`expect.${s}: ${n} \u2014 only the i and s flags are supported in expect: guards`);
                } else if (f && f.problem !== null) {
                    r.push(`expect.${s}: ${n} \u2014 ${f.problem}`);
                }
            } catch (error) {
                r.push(`expect.${s}: invalid regular expression ${n} (${error instanceof Error ? error.message : String(error)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`);
            }
        }
    }
    return r;
}
const ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function B3n(e, t, r, i, n = Number.POSITIVE_INFINITY) {
    let reason = null;
    let a = [];
    let f = 0;
    for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)){
        a.push(e.slice(f, y.index));
        f = y.index + y[0].length;
        let h = y[1] ?? "";
        if (h.startsWith("input.")) {
            let m = C(t, h.slice(6));
            let w = m === undefined ? "" : typeof m === "string" ? m : _(m);
            a.push(w.length > n ? `${ne(w, n)}\u2026 [${w.length - n} more characters omitted]` : w);
            continue;
        }
        let c = h.slice(5).trim();
        let g = null;
        c = c.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (m, w)=>{
            let S = C(t, w);
            let F = S === undefined || S === null ? "" : String(S);
            if (!ae.test(F)) {
                g = `{input.${w}} = ${E(S)} is not a plain file-name segment`;
            }
            return F;
        });
        if (g !== null) {
            reason ??= g;
            continue;
        }
        let b = R.resolve(r, c);
        if (!le(r, b)) {
            reason ??= `{{file:${c}}} names a path outside the mock's directory`;
            continue;
        }
        a.push(i(b).then((m)=>{
            if (typeof m !== "string") {
                reason ??= `{{file:${c}}}: ${m.problem}`;
                return "";
            }
            return m;
        }));
    }
    a.push(e.slice(f));
    let d = await Promise.all(a);
    if (reason !== null) {
        return {
            ok: false,
            reason
        };
    }
    return {
        ok: true,
        text: d.join("")
    };
}
function le(e, t) {
    let r = R.relative(e, t);
    return r !== "" && !r.startsWith("..") && !R.isAbsolute(r);
}
function V(e) {
    let t = 0;
    for (let r of Object.values(e)){
        t += typeof r === "object" && r !== null && !Array.isArray(r) ? V(r) : 1;
        if (t > j) {
            break;
        }
    }
    return t;
}
const ZFt = "eval aborted by mock";
const Mve = "mock agent responder failed";
const fe = p(()=>u({
        verdict: U([
            "ok",
            "tool_error",
            "abort"
        ]),
        text: o(),
        replay: U([
            "hit",
            "miss"
        ]).optional()
    }));
const ge = 4194304;
async function Y(agent, t, signal) {
    try {
        let i = await me(agent.socketPath, `${_({
            token: agent.token,
            ...t
        })}
`, signal);
        return fe().parse(X(i));
    } catch (error) {
        process.stderr.write(`eval mock stand-in: agent relay failed: ${l(error)}
`);
        return {
            verdict: "abort",
            text: `${Mve} (harness_unreachable) \u2014 see the eval debug log`
        };
    }
}
function me(path, t, signal) {
    return new Promise((resolve, reject)=>{
        if (signal.aborted) {
            reject(Error("aborted"));
            return;
        }
        let s = createConnection({
            path
        });
        let a = Buffer.alloc(0);
        let f = false;
        let d = (h, c)=>{
            if (f) {
                return;
            }
            f = true;
            signal.removeEventListener("abort", y);
            s.destroy();
            if (h !== null) {
                reject(h);
            } else {
                resolve(c ?? "");
            }
        };
        let y = ()=>d(Error("aborted"));
        signal.addEventListener("abort", y, {
            once: true
        });
        s.once("connect", ()=>s.write(t));
        s.on("data", (h)=>{
            a = Buffer.concat([
                a,
                h
            ]);
            if (a.length > ge) {
                d(Error("relay response too large"));
                return;
            }
            let c = a.indexOf(10);
            if (c !== -1) {
                d(null, a.subarray(0, c).toString("utf8"));
            }
        });
        s.once("error", (h)=>d(h));
        s.once("close", ()=>d(Error("harness closed the relay without answering")));
    });
}
const he = p(()=>{
    let e = qE(()=>Ue([
            o(),
            T(o()),
            ue(o(), e)
        ]));
    let expect = ue(o(), e).nullable();
    let r = Wr("kind", [
        u({
            kind: A("fixed"),
            body: o(),
            isError: M(),
            expect,
            baseDir: o()
        }),
        u({
            kind: A("agent"),
            prompt: o(),
            abortWhen: o().nullable(),
            expect,
            baseDir: o(),
            replay: u({
                mockHash: o(),
                replayDir: o(),
                pinned: ue(o(), o())
            }).default({
                mockHash: "",
                replayDir: "",
                pinned: {}
            })
        })
    ]);
    return u({
        registeredName: o(),
        server: o(),
        nonce: o(),
        callLogPath: o(),
        tools: T(u({
            name: o(),
            description: o(),
            inputSchema: ue(o(), oe())
        })),
        responders: ue(o(), r),
        agent: u({
            socketPath: o(),
            token: o()
        }).nullable()
    });
});
const W = 1048576;
async function FBs(e, t) {
    if (!e) {
        throw Error("missing spec path");
    }
    let r = await ve(e);
    if (t !== undefined && createHash("sha256").update(r).digest("hex") !== t) {
        throw Error("spec file does not match the hash the harness launched this stand-in with — refusing to serve it");
    }
    let i = Se(r);
    let n = be(i);
    let s = new eUt;
    if (!await Z(i.callLogPath, _({
        ready: i.nonce,
        server: i.server
    }))) {
        throw Error("could not write the identity line to the run call log — refusing to serve unidentified");
    }
    await n.connect(s);
    process.stdin.on("end", ()=>void n.close());
    process.stdin.on("error", ()=>void n.close());
}
function be(spec) {
    let t = 0;
    let r = new AbortController;
    let i = {
        spec,
        signal: r.signal
    };
    let n = new qie({
        name: `eval-mock/${spec.server}`,
        version: "1"
    }, {
        capabilities: {
            tools: {}
        }
    });
    n.onclose = ()=>r.abort();
    n.setRequestHandler(Kie, async ()=>({
            tools: spec.tools.map((f)=>({
                    name: f.name,
                    description: f.description,
                    inputSchema: {
                        type: "object",
                        ...f.inputSchema
                    }
                }))
        }));
    let s = Promise.resolve();
    n.setRequestHandler(B6, (f)=>{
        let d = s.then(()=>a(f.params));
        s = d.catch(()=>{});
        return d;
    });
    async function a(params) {
        let f_name = params.name;
        let y = params.arguments ?? {};
        let h = Date.now();
        let c = Object.hasOwn(spec.responders, f_name) ? spec.responders[f_name] : undefined;
        let g = c === undefined ? {
            verdict: "tool_error",
            text: `no mock for ${spec.server}/${f_name}`
        } : await ye(c, y, i, f_name);
        let b = {
            nonce: spec.nonce,
            seq: t++,
            server: spec.server,
            tool: f_name,
            responder: c?.kind ?? "fixed",
            input: we(y),
            verdict: g.verdict,
            output: K(g.text),
            ms: Date.now() - h,
            ...g.replay && {
                replay: g.replay
            }
        };
        if (!await Z(spec.callLogPath, _(b)) && g.verdict === "abort") {
            process.stderr.write(`eval mock stand-in: could not write the abort record to the call log
`);
        }
        switch(g.verdict){
            case "ok":
                return {
                    content: [
                        {
                            type: "text",
                            text: Upn(g.text)
                        }
                    ]
                };
            case "tool_error":
                return {
                    content: [
                        {
                            type: "text",
                            text: Upn(g.text)
                        }
                    ],
                    isError: true
                };
            case "abort":
                return {
                    content: [
                        {
                            type: "text",
                            text: `${ZFt} ${spec.nonce}: ${spec.server}/${f_name} \u2014 ${g.text}`
                        }
                    ],
                    isError: true
                };
        }
    }
    return n;
}
async function ye(e, input, r, tool = "") {
    if (e.expect !== null) {
        let n = jgt(input, e.expect);
        if (n !== null) {
            return {
                verdict: "abort",
                text: `input violates expect: ${n}`
            };
        }
    }
    switch(e.kind){
        case "agent":
            {
                if (!r || r.spec.agent === null) {
                    return {
                        verdict: "tool_error",
                        text: "agent mock responder called without a harness relay"
                    };
                }
                return Y(r.spec.agent, {
                    registeredName: r.spec.registeredName,
                    tool,
                    input
                }, r.signal);
            }
        case "fixed":
            {
                let n = await B3n(e.body, input, e.baseDir, j3n);
                if (!n.ok) {
                    return {
                        verdict: "tool_error",
                        text: n.reason
                    };
                }
                return {
                    verdict: e.isError ? "tool_error" : "ok",
                    text: n.text
                };
            }
    }
}
async function j3n(e) {
    try {
        await qb(R.dirname(e), R.basename(e), "mock fixture");
        let t = await open(e, constants.O_RDONLY | (O() === "windows" ? 0 : constants.O_NONBLOCK));
        try {
            let r = await t.stat();
            if (!r.isFile()) {
                return {
                    problem: "is not a regular file"
                };
            }
            if (r.size > W) {
                return {
                    problem: `is ${r.size} bytes, over the ${W}-byte fixture limit`
                };
            }
            return (await J(t, r.size)).toString("utf8");
        } finally{
            await t.close();
        }
    } catch (error) {
        return {
            problem: z(error) ? "no such fixture" : `could not be read (${v(error) ?? l(error)})`
        };
    }
}
const y$r = 16384;
const L = 16384;
function K(e) {
    if (e.length > L) {
        return `${ne(e, L)}\u2026[truncated]`;
    }
    return e;
}
function we(e) {
    let t = _(e) ?? "";
    if (t.length > L) {
        return K(t);
    }
    return e;
}
async function Z(callLogPath, t) {
    try {
        let r = constants.O_WRONLY | constants.O_APPEND | constants.O_CREAT | (O() === "windows" ? 0 : constants.O_NONBLOCK);
        let i = await open(callLogPath, r, 384);
        try {
            if (!(await i.stat()).isFile()) {
                return false;
            }
            let n = Buffer.from(`${t}
`, "utf8");
            let s = 0;
            while(s < n.length){
                let { bytesWritten } = await i.write(n, s);
                if (bytesWritten <= 0) {
                    return false;
                }
                s += bytesWritten;
            }
            return true;
        } finally{
            await i.close();
        }
    } catch  {
        return false;
    }
}
async function J(e, size) {
    let buffer = Buffer.alloc(size);
    let i = 0;
    while(i < size){
        let { bytesRead } = await e.read({
            buffer,
            offset: i,
            position: i
        });
        if (bytesRead <= 0) {
            break;
        }
        i += bytesRead;
    }
    return buffer.subarray(0, i);
}
function Upn(e) {
    if (ke.test(e.trimStart())) {
        return `${xe}${e.trimStart()}`;
    }
    return e;
}
var xe = "| ";
var ke = new RegExp(`^(?:${ZFt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);
function Se(e) {
    return he().parse(X(e));
}
const Ee = 4194304;
async function ve(e) {
    await qb(R.dirname(e), R.basename(e), "mock spec");
    let t = await open(e, constants.O_RDONLY | (O() === "windows" ? 0 : constants.O_NONBLOCK));
    try {
        let r = await t.stat();
        if (!r.isFile()) {
            throw Error("spec path is not a regular file — refusing to read it");
        }
        if (r.size > Ee) {
            throw Error("spec file is over the size limit the harness writes — refusing to read it");
        }
        return (await J(t, r.size)).toString("utf8");
    } finally{
        await t.close();
    }
}
export { _f, g$r, qb, jgt, h$r, B3n, ZFt, Mve, FBs, j3n, y$r, Upn };
