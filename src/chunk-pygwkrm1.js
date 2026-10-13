import { Kr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, Oi, X, un, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { KZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { I, ne, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { uo, nAr, vN, CP, Zdt, aq, gxs, Nw, hxs, vS } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Te, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ZP, Zw } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { sa } from "/$bunfs/root/chunk-xj0zmt6h.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Eut } from "/$bunfs/root/chunk-63xa24b4.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Gut, nA } from "/$bunfs/root/chunk-3yz9zdww.js";
import { hpe } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ae, pt, z5e, rn, Epe, Lr } from "/$bunfs/root/chunk-223dyewd.js";
import { Ttn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { s, n, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ze, nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { Cre, $n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { ZX, L5r, Dwt, lqt, $5r, bD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ZC } from "/$bunfs/root/chunk-zc6kefep.js";
import { va } from "/$bunfs/root/chunk-7aeb6f08.js";
import { Lx, Ek, $A, dQ } from "/$bunfs/root/chunk-5ne6jp11.js";
import { V9n } from "/$bunfs/root/chunk-qzmyq9h2.js";
import { Kb } from "/$bunfs/root/chunk-f1pkxrfr.js";
import { B1t, lhn } from "/$bunfs/root/chunk-gfvynar4.js";
import { fGo, ihn, mGo, ahn, U1t } from "/$bunfs/root/chunk-jpx2djwq.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { X9e, jKn, J9e, WKn, Q9e, lHr, uHr, pHr, fHr } from "/$bunfs/root/chunk-st5f55dk.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { tE } from "/$bunfs/root/chunk-972pd37y.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { mYn } from "/$bunfs/root/chunk-qhqaadn8.js";
import { fo } from "/$bunfs/root/chunk-p78rzsw0.js";
import { mo } from "/$bunfs/root/chunk-4wvwjbc4.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Q0 } from "/$bunfs/root/chunk-bs48afk0.js";
import { uyt, K9n } from "/$bunfs/root/chunk-wqwppnjd.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { join, dirname } from "path";
import { mkdir, writeFile } from "fs/promises";
N();
const Yi = 4000;
const Ji = 2000;
const bo = 3;
const wo = [
    Lx,
    Ek,
    $A,
    ZC,
    dQ,
    va
];
async function yo(runId, agentId, { promptFramed } = {}) {
    let u = join(Q0(runId), `agent-${agentId}.jsonl`);
    let c;
    try {
        c = await Eut(u);
    } catch (error) {
        t(`readWorkflowAgentTranscript: ${u} not readable (${error instanceof Error ? error.message : String(error)})`);
        return null;
    }
    let p = c.filter(bD);
    let h = p.findIndex((K)=>K.type === "user");
    let b = h === -1 ? undefined : p[h];
    for(let K = h + 1; h !== -1 && K < p.length; K++){
        let V = p[K];
        if (V === undefined || V.type !== "user" || V.isMeta === true) {
            break;
        }
        b = V;
    }
    let T = b?.type === "user" ? b.message?.content : undefined;
    let A = typeof T === "string" ? T : ds(T).trim();
    let prompt = promptFramed ? fGo(A) : A;
    let C = [];
    let L = ihn();
    let M = new Map;
    let D;
    let W = new Map;
    let q = {
        pendingCreates: new Map,
        tasks: new Map
    };
    let U;
    let finalText = "";
    let E = "";
    for (let [K, V] of p.entries()){
        if (V.type === "user") {
            let B = V.message?.content;
            if (Array.isArray(B)) {
                for (let Q of B){
                    if (!Cn(Q) || Q.type !== "tool_result" || typeof Q.tool_use_id !== "string") {
                        continue;
                    }
                    let ct = Q.is_error === true;
                    ahn(L, Q.tool_use_id, V.isVirtual === true, ct);
                    if (V.isVirtual !== true && L.uses.has(Q.tool_use_id)) {
                        D = Q.tool_use_id;
                    }
                    let content = Gi(Q.content);
                    let ot = content;
                    W.set(Q.tool_use_id, {
                        ...cs(ot, Ji),
                        isError: ct
                    });
                    lqt(q, {
                        tool_use_id: Q.tool_use_id,
                        is_error: ct,
                        content
                    });
                }
            }
            continue;
        }
        if (V.type !== "assistant" || !Array.isArray(V.message?.content)) {
            continue;
        }
        let responseKey = V.message.id || `entry-${K}`;
        E = responseKey;
        D = undefined;
        let st = "";
        for (let B of V.message.content){
            if (!Cn(B)) {
                continue;
            }
            if (B.type === "tool_use" && typeof B.name === "string") {
                mGo(L, {
                    id: B.id,
                    name: B.name
                }, V.isVirtual === true);
                if (V.isVirtual === true && typeof B.id === "string" && D !== undefined) {
                    M.set(B.id, D);
                }
                C.push({
                    id: typeof B.id === "string" ? B.id : "",
                    name: B.name,
                    input: B.input,
                    responseKey
                });
                if (typeof B.id === "string" && B.id !== "") {
                    Dwt(q, B);
                }
                if (B.name === Lx) {
                    U = B.input;
                }
                if (B.name === va && B.input !== undefined) {
                    try {
                        st = _(B.input, null, 2);
                    } catch  {
                        st = String(B.input);
                    }
                }
            } else if (B.type === "text" && typeof B.text === "string") {
                st += B.text;
            }
        }
        if (st) {
            finalText = st;
        }
    }
    let J = C;
    let j = (K)=>false;
    let et = F(J, (K)=>!j(K));
    let toolCalls = J.map((K)=>{
        let fromLastResponse = K.responseKey === E;
        let nt = j(K);
        if (!nt) {
            et--;
        }
        let st = nt || (et < bo || fromLastResponse) && !wo.includes(K.name);
        return {
            name: K.name,
            summary: nt ? "" : U1t(K.input, K.name),
            fromLastResponse,
            fields: st && !nt ? zi(K.input) : [],
            result: Bi(K.id ? W.get(K.id) : undefined, st)
        };
    });
    let mt = $5r(q);
    let tasks = mt.length > 0 ? mt : L5r(U);
    return {
        prompt,
        toolCalls,
        finalText,
        tasks
    };
}
const Vi = {
    head: "",
    lineCount: 0,
    truncatedChars: 0
};
function Bi(o, l) {
    if (!o) {
        return null;
    }
    if (l) {
        return o;
    }
    return {
        ...Vi,
        isError: o.isError
    };
}
function cs(o, l) {
    let a = o.trimEnd();
    let head = a.length > l ? ne(a, l) : a;
    return {
        head,
        lineCount: Lt(a, `
`) + 1,
        truncatedChars: a.length - head.length
    };
}
function Cn(o) {
    return typeof o === "object" && o !== null && typeof o.type === "string";
}
function ds(o) {
    if (!Array.isArray(o)) {
        return "";
    }
    return o.filter(Cn).flatMap((l)=>{
        if (l.type === "text" && typeof l.text === "string") {
            return l.text;
        }
        return [];
    }).join(`
`);
}
function Gi(content) {
    if (typeof content === "string") {
        return content;
    }
    let l = ds(content);
    if (l || !Array.isArray(content)) {
        return l;
    }
    let a = content.filter(Cn);
    if (a.length === 0) {
        return "";
    }
    return `(${a.map((u)=>u.type).join(", ")} content)`;
}
function zi(input) {
    if (input === undefined || input === null) {
        return [];
    }
    return (typeof input === "object" && !Array.isArray(input) ? Object.entries(input) : [
        [
            "input",
            input
        ]
    ]).map(([key, u])=>{
        let c;
        if (typeof u === "string") {
            c = u;
        } else {
            try {
                c = _(u) ?? String(u);
            } catch  {
                c = String(u);
            }
        }
        return {
            key,
            ...cs(c, Yi)
        };
    });
}
const us = "  ";
const Qi = 40;
const ms = 8;
const Xi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g;
const Co = ": ";
function gs(o, l) {
    let a = o.trim();
    if (l < ms || !a.startsWith("{") && !a.startsWith("[")) {
        return null;
    }
    try {
        let u = [];
        xs(u, X(a), 0, undefined, false, l);
        return u;
    } catch  {
        return null;
    }
}
function ko(o, l) {
    let a = Math.floor(Math.max(0, l - ms) / us.length);
    return us.repeat(Math.min(o, a));
}
function hs(o) {
    return o.replace(Xi, (l)=>`\\u${l.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function ps(o) {
    return hs(Oi(o));
}
function To(o, l) {
    if (o === undefined) {
        return [];
    }
    return [
        {
            ...o,
            text: pt(o.text, l - Co.length)
        },
        {
            text: Co,
            dimColor: true
        }
    ];
}
function fs(o, l, a, u, c, p) {
    if (a) {
        let T = ko(l, c);
        o.push([
            {
                text: T
            },
            {
                ...a,
                text: pt(a.text, c - T.length - 1)
            },
            {
                text: ":",
                dimColor: true
            }
        ]);
    }
    let h = ko(a ? l + 1 : l, c);
    let b = c - h.length;
    for (let T of u){
        if (T === "") {
            o.push([
                {
                    text: ""
                }
            ]);
            continue;
        }
        for (let A of z5e(T, b)){
            o.push([
                p ? {
                    text: h + A,
                    color: p
                } : {
                    text: h + A
                }
            ]);
        }
    }
}
function xs(o, l, a, u, c, p) {
    let h = ko(a, p);
    let b = p - h.length;
    let T = c ? "," : "";
    let A = typeof u === "string" ? {
        text: ps(u),
        color: "permission"
    } : undefined;
    if (typeof l === "object" && l !== null) {
        if (a >= Qi) {
            throw RangeError("JSON outcome nested past MAX_DEPTH");
        }
        let M = Array.isArray(l) ? l.map((q, U)=>[
                U,
                q
            ]) : Object.entries(l);
        let [D, W] = Array.isArray(l) ? [
            "[",
            "]"
        ] : [
            "{",
            "}"
        ];
        if (M.length === 0) {
            let q = D + W + T;
            o.push([
                {
                    text: h
                },
                ...To(A, b - q.length),
                {
                    text: q,
                    dimColor: true
                }
            ]);
            return;
        }
        o.push([
            {
                text: h
            },
            ...To(A, b - D.length),
            {
                text: D,
                dimColor: true
            }
        ]);
        for(let q = 0; q < M.length; q++){
            let [U, z] = M[q];
            xs(o, z, a + 1, U, q < M.length - 1, p);
        }
        o.push([
            {
                text: h
            },
            {
                text: W + T,
                dimColor: true
            }
        ]);
        return;
    }
    if (typeof l === "number" && (Number.isInteger(l) ? !Number.isSafeInteger(l) : !Number.isFinite(l))) {
        throw RangeError("JSON outcome number not representable");
    }
    if (typeof l === "string" && l.includes(`
`)) {
        fs(o, a, A ?? (typeof u === "number" ? {
            text: `[${u}]`,
            dimColor: true
        } : undefined), l.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map((M)=>hpe(hs(M))), p, undefined);
        return;
    }
    let k = typeof l === "string" ? ps(l) : String(l);
    let C = typeof l === "string" ? "success" : "warning";
    if ((A === undefined ? 0 : ae(A.text) + Co.length) + ae(k) + T.length <= b) {
        o.push([
            {
                text: h
            },
            ...To(A, b),
            {
                text: k,
                color: C
            },
            ...T ? [
                {
                    text: T,
                    dimColor: true
                }
            ] : []
        ]);
        return;
    }
    fs(o, a, A, [
        k + T
    ], p, C);
}
N();
const Ye = "Use a different name or overwrite.";
async function el(scope, cwd) {
    if (scope === "user") {
        return uyt();
    }
    if (Kr() !== null) {
        f("workflow_save", "project_scope_unavailable");
        throw Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
    }
    let a = Ttn(cwd);
    if (a === null) {
        return join(cwd, ".claude", "workflows");
    }
    let u = (await ZX("workflows", cwd))[0];
    if (u !== undefined) {
        return u;
    }
    return join(a, ".claude", "workflows");
}
async function Ao(o, storageV5) {
    let a = Cre(o.name);
    let u = await el(o.scope, o.cwd);
    let c = join(u, `${a}.js`);
    if (storageV5 !== undefined && o.scope === "user") {
        return nl(storageV5, a, c, o);
    }
    let checkParentDir = o.scope !== "user" && !KZ(dirname(u));
    if (checkParentDir) {
        try {
            await Gut(dirname(dirname(u)), u);
        } catch (error) {
            m("workflow_save", "write_failed");
            throw error;
        }
    }
    await mkdir(u, {
        recursive: true,
        mode: 448
    });
    try {
        if (o.overwrite) {
            await nA(c, o.script, {
                encoding: "utf8",
                mode: 384,
                checkParentDir
            });
        } else {
            await writeFile(c, o.script, {
                encoding: "utf8",
                mode: 384,
                flag: "wx"
            });
        }
    } catch (error) {
        if (!o.overwrite && v(error) === "EEXIST") {
            f("workflow_save", "already_exists");
            throw Error(`Dynamic workflow "${a}" already exists at ${c}. ${Ye}`);
        }
        m("workflow_save", "write_failed");
        throw error;
    }
    return bs(a, c, o);
}
async function bs(name, path, a) {
    K9n();
    let [{ clearCommandMemoizationCaches }, { resetSentSkillNames }] = await Promise.all([
        import("/$bunfs/root/chunk-hnvypg64.js"),
        import("/$bunfs/root/chunk-5hqvnh12.js")
    ]);
    clearCommandMemoizationCaches();
    resetSentSkillNames();
    g("workflow_save");
    i("tengu_workflow_saved", {
        scope: d(a.scope),
        overwrite: a.overwrite,
        script_size_chars: a.script.length
    });
    return {
        name,
        path,
        scope: a.scope
    };
}
async function nl(storageV5, l, a, u) {
    let c = await storageV5.write($e.userConfigDir("workflows", [
        `${l}.js`
    ]), u.script, u.overwrite ? {
        mode: 384,
        publishDiscipline: "atomic"
    } : {
        mode: 384,
        precondition: {
            type: "ifAbsent"
        }
    });
    if (!c.ok) {
        if (!u.overwrite && c.error.code === "AlreadyExists") {
            f("workflow_save", "already_exists");
            throw new x(`Dynamic workflow "${l}" already exists at ${a}. ${Ye}`, "workflow name collision");
        }
        m("workflow_save", "write_failed");
        throw new x(`Workflow save failed: ${c.error.code} (${a})`, "workflow save failed");
    }
    return bs(l, a, u);
}
function wl(ao) {
    return ao.cwd;
}
function yl(xn) {
    if (xn === "project") {
        return "user";
    }
    return "project";
}
function Ift(o) {
    let E = w(54);
    let { script, defaultName, onDone } = o;
    let { storageV5 } = Pe();
    let { columns } = ke();
    let cwd = tE(wl);
    let [b, T] = y(defaultName);
    let [A, onChangeCursorOffset] = y(defaultName.length);
    let [C, L] = y("project");
    let [M, D] = y(false);
    let [W, q] = y(null);
    let [U, z] = y(null);
    let J;
    if (E[0] === S) {
        J = ()=>{
            q(null);
            z(null);
        };
        E[0] = J;
    } else {
        J = E[0];
    }
    let j = J;
    let et;
    if (E[1] === S) {
        et = (dt)=>{
            T(dt);
            j();
        };
        E[1] = et;
    } else {
        et = E[1];
    }
    let onChange = et;
    let bt;
    if (E[2] !== W || E[3] !== cwd || E[4] !== b || E[5] !== onDone || E[6] !== M || E[7] !== C || E[8] !== script || E[9] !== storageV5) {
        bt = ()=>{
            if (M) {
                return;
            }
            let K = b.trim();
            if (!K) {
                return;
            }
            D(true);
            z(null);
            Ao({
                name: K,
                scope: C,
                script,
                overwrite: W !== null,
                cwd
            }, storageV5).then((V)=>{
                onDone(`Dynamic workflow saved to ${V.path}. Invoke as /${V.name} or Workflow({name: "${V.name}"}) in future sessions.`);
            }).catch((nt)=>{
                let st = nt instanceof Error ? nt.message : String(nt);
                if (st.includes(Ye)) {
                    let B = st.match(/at (.+?)\. /);
                    q(B?.[1] ?? "(unknown path)");
                } else {
                    z(st);
                }
                D(false);
            });
        };
        E[2] = W;
        E[3] = cwd;
        E[4] = b;
        E[5] = onDone;
        E[6] = M;
        E[7] = C;
        E[8] = script;
        E[9] = storageV5;
        E[10] = bt;
    } else {
        bt = E[10];
    }
    let onSubmit = bt;
    let ct;
    if (E[11] !== onDone) {
        ct = ()=>onDone();
        E[11] = onDone;
        E[12] = ct;
    } else {
        ct = E[12];
    }
    let H = ct;
    let ot;
    if (E[13] === S) {
        ot = {
            context: "Settings",
            isActive: true
        };
        E[13] = ot;
    } else {
        ot = E[13];
    }
    Ze("confirm:no", H, ot);
    let ft;
    if (E[14] === S) {
        ft = (Et)=>{
            if (Et.key === "tab") {
                Et.preventDefault();
                L(yl);
                j();
            }
        };
        E[14] = ft;
    } else {
        ft = E[14];
    }
    let kt = ft;
    let Bt;
    if (E[15] !== b) {
        Bt = Cre(b.trim() || "workflow");
        E[15] = b;
        E[16] = Bt;
    } else {
        Bt = E[16];
    }
    let Zt = Bt;
    let _t;
    if (E[17] !== C || E[18] !== Zt) {
        _t = C === "project" ? `.claude/workflows/${Zt}.js` : Rs(join(uyt(), `${Zt}.js`));
        E[17] = C;
        E[18] = Zt;
        E[19] = _t;
    } else {
        _t = E[19];
    }
    let wt = _t;
    const Dt = C === "project" ? "Project" : "User";
    let subtitle;
    if (E[20] !== Dt || E[21] !== wt) {
        subtitle = r(n, {
            dimColor: true,
            children: [
                Dt,
                " scope · ",
                wt
            ]
        });
        E[20] = Dt;
        E[21] = wt;
        E[22] = subtitle;
    } else {
        subtitle = E[22];
    }
    const action = W ? "overwrite" : "save";
    let qe;
    if (E[23] !== action) {
        qe = e(G, {
            chord: "enter",
            action
        });
        E[23] = action;
        E[24] = qe;
    } else {
        qe = E[24];
    }
    let so;
    let fn;
    if (E[25] === S) {
        so = e(G, {
            chord: "tab",
            action: "toggle scope"
        });
        fn = e(G, {
            chord: "escape",
            action: "cancel"
        });
        E[25] = so;
        E[26] = fn;
    } else {
        so = E[25];
        fn = E[26];
    }
    let inputGuide;
    if (E[27] !== qe) {
        inputGuide = r(be, {
            children: [
                qe,
                so,
                fn
            ]
        });
        E[27] = qe;
        E[28] = inputGuide;
    } else {
        inputGuide = E[28];
    }
    let mn;
    if (E[29] === S) {
        mn = e(n, {
            children: "Save as:"
        });
        E[29] = mn;
    } else {
        mn = E[29];
    }
    let io;
    if (E[30] === S) {
        io = e(n, {
            children: ">"
        });
        E[30] = io;
    } else {
        io = E[30];
    }
    const focus = !M;
    const showCursor = !M;
    let lt;
    if (E[31] !== columns || E[32] !== A || E[33] !== onSubmit || E[34] !== b || E[35] !== focus || E[36] !== showCursor) {
        lt = r(s, {
            flexDirection: "row",
            gap: 1,
            marginTop: 1,
            children: [
                io,
                e(Sr, {
                    value: b,
                    onChange,
                    onSubmit,
                    focus,
                    showCursor,
                    columns,
                    cursorOffset: A,
                    onChangeCursorOffset
                })
            ]
        });
        E[31] = columns;
        E[32] = A;
        E[33] = onSubmit;
        E[34] = b;
        E[35] = focus;
        E[36] = showCursor;
        E[37] = lt;
    } else {
        lt = E[37];
    }
    let Gt;
    if (E[38] !== W) {
        Gt = W && e(s, {
            marginTop: 1,
            children: r(n, {
                color: "warning",
                children: [
                    W,
                    " already exists. Press Enter again to overwrite, or change the name."
                ]
            })
        });
        E[38] = W;
        E[39] = Gt;
    } else {
        Gt = E[39];
    }
    let ve;
    if (E[40] !== U) {
        ve = U && e(s, {
            marginTop: 1,
            children: e(es, {
                error: U
            })
        });
        E[40] = U;
        E[41] = ve;
    } else {
        ve = E[41];
    }
    let Ae;
    if (E[42] !== M) {
        Ae = M && e(s, {
            marginTop: 1,
            children: e(n, {
                dimColor: true,
                children: "Saving…"
            })
        });
        E[42] = M;
        E[43] = Ae;
    } else {
        Ae = E[43];
    }
    let oe;
    if (E[44] !== lt || E[45] !== Gt || E[46] !== ve || E[47] !== Ae) {
        oe = r(s, {
            flexDirection: "column",
            children: [
                mn,
                lt,
                Gt,
                ve,
                Ae
            ]
        });
        E[44] = lt;
        E[45] = Gt;
        E[46] = ve;
        E[47] = Ae;
        E[48] = oe;
    } else {
        oe = E[48];
    }
    let lo;
    if (E[49] !== H || E[50] !== subtitle || E[51] !== inputGuide || E[52] !== oe) {
        lo = e(fo, {
            onKeyDown: kt,
            children: e(_e, {
                title: "Save dynamic workflow",
                subtitle,
                onCancel: H,
                color: "permission",
                isCancelActive: false,
                inputGuide,
                children: oe
            })
        });
        E[49] = H;
        E[50] = subtitle;
        E[51] = inputGuide;
        E[52] = oe;
        E[53] = lo;
    } else {
        lo = E[53];
    }
    return lo;
}
const $o = 3;
const Po = 100;
const Tl = 12;
const Cl = 6;
function Le(o) {
    return $n(un(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}
function Io({ tasks, expanded, width, indent }) {
    let c = [];
    let p = F(tasks, (k)=>k.status === "completed");
    c.push([
        {
            text: "Tasks",
            bold: true,
            dimColor: true
        },
        {
            text: pt(` \xB7 ${p}/${tasks.length} done`, width - 5),
            dimColor: true
        }
    ]);
    let capped = tasks.length > $o;
    let b = tasks;
    let T = [];
    if (!expanded && capped) {
        let k = [
            ...tasks.filter((L)=>L.status === "in_progress"),
            ...tasks.filter((L)=>L.status === "pending"),
            ...tasks.filter((L)=>L.status === "completed")
        ];
        let C = new Set(k.slice(0, $o));
        b = tasks.filter((L)=>C.has(L));
        T = k.slice($o);
    } else if (expanded && tasks.length > Po) {
        b = tasks.slice(0, Po);
        T = tasks.slice(Po);
    }
    let A = Math.max(4, width - ae(indent) - 2);
    for (let k of b){
        let C = Le(k.content);
        let L = expanded ? z5e(C, A) : [
            pt(C, A)
        ];
        let M = L.length > 0 ? L : [
            ""
        ];
        for (let [D, W] of M.entries()){
            c.push([
                {
                    text: indent
                },
                D === 0 ? kl(k.status) : {
                    text: " "
                },
                {
                    text: ` ${W}`,
                    bold: k.status === "in_progress",
                    dimColor: k.status !== "in_progress"
                }
            ]);
        }
    }
    if (T.length > 0) {
        let k;
        if (expanded) {
            k = `${T.length} more`;
        } else {
            let C = [];
            let L = F(T, (W)=>W.status === "in_progress");
            let M = F(T, (W)=>W.status === "pending");
            let D = F(T, (W)=>W.status === "completed");
            if (L > 0) {
                C.push(`${L} in progress`);
            }
            if (M > 0) {
                C.push(`${M} pending`);
            }
            if (D > 0) {
                C.push(`${D} completed`);
            }
            k = C.join(", ");
        }
        c.push([
            {
                text: pt(`${indent}\u2026 +${k}`, width),
                dimColor: true
            }
        ]);
    }
    return {
        lines: c,
        capped
    };
}
function kl(status) {
    let { icon, color } = mYn(status);
    return {
        text: icon,
        color
    };
}
function Je(o, l) {
    if (o.result === null) {
        if (l && o.fromLastResponse) {
            return "running";
        }
        return "unanswered";
    }
    if (o.result.isError) {
        return "error";
    }
    return "ok";
}
function No({ call, state, width, indent }) {
    let c;
    let p = null;
    switch(state){
        case "running":
            c = {
                text: uo,
                dimColor: true
            };
            p = {
                text: " · running",
                dimColor: true
            };
            break;
        case "unanswered":
            c = {
                text: nAr,
                dimColor: true
            };
            p = {
                text: " · no result",
                dimColor: true
            };
            break;
        case "ok":
            c = {
                text: uo,
                color: "success"
            };
            break;
        case "error":
            c = {
                text: uo,
                color: "error"
            };
            p = {
                text: " · error",
                color: "error"
            };
            break;
    }
    let h = Math.max(1, width - ae(indent) - ae(c.text) - 1 - (p ? ae(p.text) : 0));
    let b = Le(Do(call.name));
    let T = h - ae(b);
    let A = T < 0 ? pt(b, h) : call.summary && T > 3 ? `${b}(${pt(Le(call.summary), T - 2)})` : b;
    return [
        {
            text: indent
        },
        c,
        {
            text: ` ${A}`,
            dimColor: state !== "running"
        },
        ...p ? [
            p
        ] : []
    ];
}
function _s({ call, state, width, indent }) {
    let c = [
        No({
            call,
            state,
            width,
            indent
        })
    ];
    if (wo.includes(call.name)) {
        return c;
    }
    let indent_1 = `${indent}  `;
    Sl(c, call.fields, {
        indent: indent_1,
        width,
        maxLines: Tl
    });
    let h = `${indent_1}${gxs}  `;
    if (call.result && call.result.head === "") {
        c.push([
            {
                text: pt(`${h}(empty)`, width),
                color: call.result.isError ? "error" : undefined,
                dimColor: !call.result.isError
            }
        ]);
    } else if (call.result) {
        Ms(c, call.result, {
            firstPrefix: h,
            restPrefix: " ".repeat(ae(h)),
            width,
            maxLines: Cl,
            color: call.result.isError ? "error" : undefined
        });
    } else if (state === "unanswered") {
        c.push([
            {
                text: pt(`${h}(none recorded)`, width),
                dimColor: true
            }
        ]);
    }
    return c;
}
function Sl(o, fields, { indent, width, maxLines }) {
    let p = maxLines;
    let h = 0;
    let b = 0;
    let restPrefix = `${indent}  `;
    for (let A of fields){
        if (p <= 0) {
            h += A.lineCount;
            continue;
        }
        let k = Le(A.key);
        let C = `${indent}${k}: `;
        if (!(A.lineCount === 1 && A.truncatedChars === 0 && ae(C) + ae(Le(A.head)) <= width) && ae(C) > Math.floor(width / 2)) {
            o.push([
                {
                    text: pt(`${indent}${k}:`, width),
                    dimColor: true
                }
            ]);
            p--;
            C = restPrefix;
            if (p <= 0) {
                h += A.lineCount;
                continue;
            }
        }
        let M = Ms(o, A, {
            firstPrefix: C,
            restPrefix,
            width,
            maxLines: p,
            color: undefined,
            reportHidden: false
        });
        p -= M.lines;
        h += M.hiddenLines;
        b += M.hiddenChars;
    }
    $s(o, indent, width, h, b);
}
function Ms(o, l, { firstPrefix, restPrefix, width, maxLines, color, reportHidden = true }) {
    let T = l.head.split(`
`);
    let A = 0;
    let hiddenLines = Math.max(0, l.lineCount - T.length);
    let C = true;
    let L = Math.max(1, width - ae(restPrefix));
    t: for (let [D, W] of T.entries()){
        let q = Le(W);
        let U = ne(q, (maxLines - A + 1) * width);
        let z = A === 0 ? Math.max(1, width - ae(firstPrefix)) : L;
        let E = z5e(U, z)[0] ?? "";
        let J = U.slice(E.length);
        let j = J ? [
            E,
            ...z5e(J, L)
        ] : [
            E
        ];
        for (let [et, dt] of j.entries()){
            if (A >= maxLines) {
                hiddenLines += T.length - D;
                C = false;
                break t;
            }
            o.push([
                {
                    text: (A === 0 && et === 0 ? firstPrefix : restPrefix) + dt,
                    color,
                    dimColor: color === undefined
                }
            ]);
            A++;
        }
        if (U.length < q.length) {
            hiddenLines += T.length - D;
            C = false;
            break;
        }
    }
    let hiddenChars = C ? l.truncatedChars : 0;
    if (reportHidden) {
        $s(o, restPrefix, width, hiddenLines, hiddenChars);
    }
    return {
        lines: A,
        hiddenLines,
        hiddenChars
    };
}
function $s(o, l, width, u, c) {
    let p = u > 0 ? `\u2026 ${u} more ${I(u, "line")}` : c > 0 ? `\u2026 +${c} chars` : "";
    if (p) {
        o.push([
            {
                text: pt(`${l}${p}`, width),
                dimColor: true
            }
        ]);
    }
}
function Do(o) {
    return o;
}
function fc(A, k) {
    return e(n, {
        color: A.color,
        dimColor: A.dimColor,
        bold: A.bold ?? false,
        children: A.text
    }, k);
}
function mc() {
    return null;
}
function Vt(o, l, a) {
    if (l <= a) {
        return {
            from: 0,
            to: l,
            above: 0,
            below: 0
        };
    }
    let u = Math.floor(a / 2);
    let c = Math.max(0, Math.min(o - u, l - a));
    let p = c + a;
    return {
        from: c,
        to: p,
        above: c,
        below: l - p
    };
}
function $t(o) {
    return o.state === "start" || o.state === "progress";
}
function Nt(o, l) {
    if (o.state === "done") {
        return "done";
    }
    if (o.state === "error") {
        if (o.skipped) {
            return "skipped";
        }
        if (o.blocked) {
            return "blocked";
        }
        return "failed";
    }
    if (!l) {
        return "interrupted";
    }
    if (o.queuedAt != null && o.startedAt == null) {
        return "queued";
    }
    return "running";
}
function dn(o) {
    switch(o){
        case "done":
            return {
                glyph: te.tick,
                color: "success"
            };
        case "failed":
            return {
                glyph: te.cross,
                color: "error"
            };
        case "skipped":
            return {
                glyph: te.cross,
                color: "subtle"
            };
        case "blocked":
            return {
                glyph: te.cross,
                color: "permission"
            };
        case "queued":
        case "interrupted":
            return {
                glyph: nAr,
                color: "subtle"
            };
        case "running":
            return {
                glyph: uo,
                color: "subtle"
            };
    }
}
const Ht = [
    "all",
    "running",
    "queued",
    "failed",
    "done",
    "skipped",
    "blocked",
    "interrupted"
];
function Ue(o, filterLabel) {
    if (filterLabel) {
        return `showing ${o} ${filterLabel}`;
    }
    return `${o} ${I(o, "agent")}`;
}
function no(o, filterLabel) {
    if (o.status === "not-started") {
        return "Not started yet";
    }
    if (filterLabel) {
        return `No ${filterLabel} agents`;
    }
    return "No agents";
}
function Pt(o, l, a) {
    return Math.max(l, Math.min(a, o));
}
function da(o, l) {
    let a = Nt(o, l);
    let model = X9e(o.fallbackModel ?? o.model, undefined);
    let c = [];
    if (o.isolation != null) {
        c.push(o.isolation);
    }
    if (o.tokens != null) {
        c.push(`${Lr(o.tokens)} tok`);
    }
    if (a === "running" && o.lastProgressAt != null) {
        let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
        if (h >= 30) {
            c.push(`idle ${rn(h * 1000)}`);
        }
    }
    if (a === "queued") {
        c.push("queued");
    }
    if (a === "interrupted") {
        c.push("stopped");
    }
    if (a === "skipped") {
        c.push("skipped");
    }
    if (a === "blocked") {
        c.push("blocked");
    }
    if (a === "failed") {
        c.push("failed");
    }
    let p = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : undefined);
    return {
        model,
        stats: c.join(" · "),
        time: p != null ? Epe(p) : ""
    };
}
const $i = 6;
function Ur(o, l, a, workflowActive) {
    if (l <= 0) {
        return [];
    }
    let { model, stats, time } = da(o, workflowActive);
    let b = a ? "permission" : undefined;
    let T = !a;
    let A = (U, z)=>{
        if (z <= 0) {
            return "";
        }
        return pt(U, z);
    };
    let k = time ? A(time, l).padStart(Math.min($i, l)) : "";
    let C = k ? l - ae(k) - 1 : l;
    let L = (U, z)=>{
        if (U && z) {
            return 3;
        }
        return 0;
    };
    let M = model;
    let D = stats;
    if (ae(M) + L(M, D) + ae(D) > C) {
        D = A(D, C - ae(M) - L(M, D));
        if (ae(M) + L(M, D) + ae(D) > C) {
            M = A(M, C - ae(D) - L(M, D));
        }
    }
    let W = M && D ? " · " : "";
    let q = Math.max(0, l - ae(M) - ae(W) - ae(D) - ae(k));
    return [
        {
            text: M,
            color: b,
            dimColor: T
        },
        {
            text: W,
            color: b,
            dimColor: T
        },
        {
            text: D,
            color: b,
            dimColor: T
        },
        {
            text: " ".repeat(q)
        },
        {
            text: k,
            color: b,
            dimColor: T
        }
    ];
}
const ua = 40;
const pa = 30;
function oo(o, l) {
    let a = Math.min(ua, Math.max(22, l - pa), Math.max(4, Math.min(l, Math.max(12, l - $i - 1))));
    let u = o.reduce((acc, item)=>Math.max(acc, ae(item.label)), 0);
    return Math.min(Math.max(12, u), a);
}
function Bs(segs, width) {
    let a = 0;
    for(let u = 0; u < segs.length; u++){
        let seg = segs[u];
        let p = ae(seg.text);
        if (a + p > width) {
            let h = width - a;
            let b = h > 0 ? pt(seg.text, h) : "";
            let T = segs.slice(0, u);
            if (b) {
                T.push({
                    ...seg,
                    text: b
                });
            }
            return {
                segs: T,
                pad: Math.max(0, h - ae(b))
            };
        }
        a += p;
    }
    return {
        segs,
        pad: Math.max(0, width - a)
    };
}
function Se(o) {
    let u = w(7);
    let { segs, width } = o;
    let c;
    let p;
    if (u[0] !== segs || u[1] !== width) {
        let { segs: segs_1, pad } = Bs(segs, width);
        c = segs_1.map(fc);
        p = " ".repeat(pad);
        u[0] = segs;
        u[1] = width;
        u[2] = c;
        u[3] = p;
    } else {
        c = u[2];
        p = u[3];
    }
    let T;
    if (u[4] !== c || u[5] !== p) {
        T = r(Y, {
            children: [
                c,
                p
            ]
        });
        u[4] = c;
        u[5] = p;
        u[6] = T;
    } else {
        T = u[6];
    }
    return T;
}
function xt(o) {
    let u = w(7);
    let { segs, contentWidth } = o;
    let c;
    if (u[0] === S) {
        c = r(n, {
            color: "text",
            children: [
                " ",
                vS.pipe,
                " "
            ]
        });
        u[0] = c;
    } else {
        c = u[0];
    }
    let p;
    if (u[1] !== contentWidth || u[2] !== segs) {
        p = e(Se, {
            segs,
            width: contentWidth
        });
        u[1] = contentWidth;
        u[2] = segs;
        u[3] = p;
    } else {
        p = u[3];
    }
    let h;
    if (u[4] === S) {
        h = r(n, {
            color: "text",
            children: [
                " ",
                vS.pipe
            ]
        });
        u[4] = h;
    } else {
        h = u[4];
    }
    let b;
    if (u[5] !== p) {
        b = r(n, {
            wrap: "truncate-end",
            children: [
                c,
                p,
                h
            ]
        });
        u[5] = p;
        u[6] = b;
    } else {
        b = u[6];
    }
    return b;
}
function St(o, l) {
    let a = o.from > 0 ? te.arrowUp : " ";
    let u = o.to < l ? te.arrowDown : " ";
    return `${a} ${o.from + 1}${hxs}${o.to} of ${l} ${u}`;
}
function qr(o) {
    let u = w(5);
    let { win, total } = o;
    let c;
    if (u[0] !== total || u[1] !== win) {
        c = St(win, total);
        u[0] = total;
        u[1] = win;
        u[2] = c;
    } else {
        c = u[2];
    }
    const p = `  ${c}`;
    let h;
    if (u[3] !== p) {
        h = e(n, {
            dimColor: true,
            wrap: "truncate-end",
            children: p
        });
        u[3] = p;
        u[4] = h;
    } else {
        h = u[4];
    }
    return h;
}
function Hr(o) {
    let k = w(53);
    let { phase, selectedAgent, level, contentWidth, viewport, tight, workflowActive, filterLabel } = o;
    let phase_agents = phase.agents;
    let C;
    if (k[0] !== contentWidth) {
        C = aq.repeat(contentWidth + 2);
        k[0] = contentWidth;
        k[1] = C;
    } else {
        C = k[1];
    }
    let L = C;
    let M;
    let D;
    if (k[2] !== phase_agents || k[3] !== L || k[4] !== contentWidth || k[5] !== filterLabel || k[6] !== level || k[7] !== phase || k[8] !== selectedAgent || k[9] !== tight || k[10] !== viewport || k[11] !== workflowActive) {
        let W = Vt(selectedAgent, phase_agents.length, viewport);
        D = [];
        let q = Ue(phase_agents.length, filterLabel);
        if (tight) {
            let U = pt(` \xB7 ${q}`, Math.max(1, contentWidth - 1));
            let z = Math.max(1, contentWidth - ae(U));
            let E;
            if (k[14] !== phase.title || k[15] !== z) {
                E = pt(phase.title, z);
                k[14] = phase.title;
                k[15] = z;
                k[16] = E;
            } else {
                E = k[16];
            }
            let J;
            if (k[17] !== E) {
                J = {
                    text: E,
                    color: "permission",
                    bold: true
                };
                k[17] = E;
                k[18] = J;
            } else {
                J = k[18];
            }
            let j;
            if (k[19] !== U) {
                j = {
                    text: U,
                    dimColor: true
                };
                k[19] = U;
                k[20] = j;
            } else {
                j = k[20];
            }
            let et;
            if (k[21] !== J || k[22] !== j) {
                et = [
                    J,
                    j
                ];
                k[21] = J;
                k[22] = j;
                k[23] = et;
            } else {
                et = k[23];
            }
            let dt;
            if (k[24] !== contentWidth || k[25] !== et) {
                dt = e(xt, {
                    contentWidth,
                    segs: et
                }, "title");
                k[24] = contentWidth;
                k[25] = et;
                k[26] = dt;
            } else {
                dt = k[26];
            }
            D.push(dt);
        } else {
            D.push(e(xt, {
                contentWidth,
                segs: [
                    {
                        text: pt(phase.title, contentWidth),
                        color: "permission",
                        bold: true
                    }
                ]
            }, "title"));
            D.push(e(xt, {
                contentWidth,
                segs: [
                    {
                        text: pt(q, contentWidth),
                        dimColor: true
                    }
                ]
            }, "count"));
            D.push(e(xt, {
                contentWidth,
                segs: [
                    {
                        text: ""
                    }
                ]
            }, "gap"));
        }
        let mt = D.length;
        if (phase_agents.length === 0) {
            let E;
            if (k[27] !== filterLabel || k[28] !== phase) {
                E = no(phase, filterLabel);
                k[27] = filterLabel;
                k[28] = phase;
                k[29] = E;
            } else {
                E = k[29];
            }
            let J;
            if (k[30] !== E) {
                J = [
                    {
                        text: E,
                        dimColor: true
                    }
                ];
                k[30] = E;
                k[31] = J;
            } else {
                J = k[31];
            }
            let j;
            if (k[32] !== contentWidth || k[33] !== J) {
                j = e(xt, {
                    contentWidth,
                    segs: J
                }, "empty");
                k[32] = contentWidth;
                k[33] = J;
                k[34] = j;
            } else {
                j = k[34];
            }
            D.push(j);
        } else {
            let bt = oo(phase_agents, contentWidth - 5);
            for(let K = W.from; K < W.to; K++){
                let V = phase_agents[K];
                let nt = level === "agents" && K === selectedAgent;
                let { glyph, color } = dn(Nt(V, workflowActive));
                let Q = pt(V.label, bt);
                let ct = " ".repeat(Math.max(0, bt - ae(Q)));
                let H = Math.max(0, contentWidth - (bt + 5));
                D.push(e(xt, {
                    contentWidth,
                    segs: [
                        {
                            text: nt ? te.pointer : " ",
                            color: "permission"
                        },
                        {
                            text: " "
                        },
                        {
                            text: glyph,
                            color
                        },
                        {
                            text: " "
                        },
                        {
                            text: `${Q}${ct}`,
                            color: nt ? "permission" : undefined,
                            dimColor: !nt && $t(V)
                        },
                        {
                            text: " "
                        },
                        ...Ur(V, H, nt, workflowActive)
                    ]
                }, `a-${K}`));
            }
        }
        let ot = D.length - mt;
        for(let ft = ot; ft < viewport; ft++){
            D.push(e(xt, {
                contentWidth,
                segs: [
                    {
                        text: ""
                    }
                ]
            }, `pad-${ft}`));
        }
        if (phase_agents.length > viewport) {
            let Et = ` ${St(W, phase_agents.length)} `;
            let kt = Math.max(0, contentWidth + 2 - ae(Et));
            let E;
            if (k[35] !== kt) {
                E = aq.repeat(kt);
                k[35] = kt;
                k[36] = E;
            } else {
                E = k[36];
            }
            let J;
            if (k[37] !== E) {
                J = r(n, {
                    color: "text",
                    children: [
                        " ",
                        Nw.bottomLeft,
                        E
                    ]
                });
                k[37] = E;
                k[38] = J;
            } else {
                J = k[38];
            }
            let j;
            if (k[39] !== Et) {
                j = e(n, {
                    dimColor: true,
                    children: Et
                });
                k[39] = Et;
                k[40] = j;
            } else {
                j = k[40];
            }
            let et;
            if (k[41] === S) {
                et = e(n, {
                    color: "text",
                    children: Nw.bottomRight
                });
                k[41] = et;
            } else {
                et = k[41];
            }
            let dt;
            if (k[42] !== J || k[43] !== j) {
                dt = r(n, {
                    wrap: "truncate-end",
                    children: [
                        J,
                        j,
                        et
                    ]
                });
                k[42] = J;
                k[43] = j;
                k[44] = dt;
            } else {
                dt = k[44];
            }
            M = dt;
        } else {
            let E;
            if (k[45] !== L) {
                E = r(n, {
                    color: "text",
                    wrap: "truncate-end",
                    children: [
                        " ",
                        Nw.bottomLeft,
                        L,
                        Nw.bottomRight
                    ]
                });
                k[45] = L;
                k[46] = E;
            } else {
                E = k[46];
            }
            M = E;
        }
        k[2] = phase_agents;
        k[3] = L;
        k[4] = contentWidth;
        k[5] = filterLabel;
        k[6] = level;
        k[7] = phase;
        k[8] = selectedAgent;
        k[9] = tight;
        k[10] = viewport;
        k[11] = workflowActive;
        k[12] = M;
        k[13] = D;
    } else {
        M = k[12];
        D = k[13];
    }
    let E;
    if (k[47] !== L) {
        E = r(n, {
            color: "text",
            wrap: "truncate-end",
            children: [
                " ",
                Nw.topLeft,
                L,
                Nw.topRight
            ]
        });
        k[47] = L;
        k[48] = E;
    } else {
        E = k[48];
    }
    let J;
    if (k[49] !== M || k[50] !== D || k[51] !== E) {
        J = r(s, {
            flexDirection: "column",
            children: [
                E,
                D,
                M
            ]
        });
        k[49] = M;
        k[50] = D;
        k[51] = E;
        k[52] = J;
    } else {
        J = k[52];
    }
    return J;
}
function pn(o) {
    let p = w(12);
    let { left, right, leftWidth, rightWidth } = o;
    let h;
    if (p[0] === S) {
        h = r(n, {
            color: "text",
            children: [
                " ",
                vS.pipe,
                " "
            ]
        });
        p[0] = h;
    } else {
        h = p[0];
    }
    let b;
    if (p[1] !== left || p[2] !== leftWidth) {
        b = e(Se, {
            segs: left,
            width: leftWidth
        });
        p[1] = left;
        p[2] = leftWidth;
        p[3] = b;
    } else {
        b = p[3];
    }
    let T;
    if (p[4] === S) {
        T = r(n, {
            color: "text",
            children: [
                " ",
                vS.pipe,
                " "
            ]
        });
        p[4] = T;
    } else {
        T = p[4];
    }
    let A;
    if (p[5] !== right || p[6] !== rightWidth) {
        A = e(Se, {
            segs: right,
            width: rightWidth
        });
        p[5] = right;
        p[6] = rightWidth;
        p[7] = A;
    } else {
        A = p[7];
    }
    let k;
    if (p[8] === S) {
        k = r(n, {
            color: "text",
            children: [
                " ",
                vS.pipe
            ]
        });
        p[8] = k;
    } else {
        k = p[8];
    }
    let C;
    if (p[9] !== b || p[10] !== A) {
        C = r(n, {
            wrap: "truncate-end",
            children: [
                h,
                b,
                T,
                A,
                k
            ]
        });
        p[9] = b;
        p[10] = A;
        p[11] = C;
    } else {
        C = p[11];
    }
    return C;
}
function Jn(o, l) {
    let a = [];
    let u = 0;
    if (l.label) {
        let h = ` ${pt(l.label.text, Math.max(1, o - 2))} `;
        u += ae(h);
        a.push(e(n, {
            color: l.label.color ?? "text",
            bold: l.label.bold,
            children: h
        }, "label"));
    }
    let c = l.tag ? ` ${pt(l.tag, Math.max(0, o - u - 2))} ` : "";
    let p = Math.max(0, o - u - ae(c));
    a.push(e(n, {
        color: "text",
        children: aq.repeat(p)
    }, "dash"));
    if (c) {
        a.push(e(n, {
            dimColor: true,
            children: c
        }, "tag"));
    }
    return a;
}
function Xt(o) {
    let C = w(20);
    let { pos, leftWidth, rightWidth, leftTitle, rightTitle, leftTag, rightTag } = o;
    let T = pos === "top" ? Nw.topLeft : Nw.bottomLeft;
    let A = pos === "top" ? vS.teeDown : vS.teeUp;
    let k = pos === "top" ? Nw.topRight : Nw.bottomRight;
    let L;
    if (C[0] !== T) {
        L = r(n, {
            color: "text",
            children: [
                " ",
                T
            ]
        });
        C[0] = T;
        C[1] = L;
    } else {
        L = C[1];
    }
    const M = leftWidth + 2;
    let D;
    if (C[2] !== leftTag || C[3] !== leftTitle || C[4] !== M) {
        D = Jn(M, {
            label: leftTitle ? {
                text: leftTitle
            } : undefined,
            tag: leftTag
        });
        C[2] = leftTag;
        C[3] = leftTitle;
        C[4] = M;
        C[5] = D;
    } else {
        D = C[5];
    }
    let W;
    if (C[6] !== A) {
        W = e(n, {
            color: "text",
            children: A
        });
        C[6] = A;
        C[7] = W;
    } else {
        W = C[7];
    }
    const q = rightWidth + 2;
    let U;
    if (C[8] !== rightTag || C[9] !== rightTitle || C[10] !== q) {
        U = Jn(q, {
            label: rightTitle ? {
                text: rightTitle
            } : undefined,
            tag: rightTag
        });
        C[8] = rightTag;
        C[9] = rightTitle;
        C[10] = q;
        C[11] = U;
    } else {
        U = C[11];
    }
    let z;
    if (C[12] !== k) {
        z = e(n, {
            color: "text",
            children: k
        });
        C[12] = k;
        C[13] = z;
    } else {
        z = C[13];
    }
    let E;
    if (C[14] !== L || C[15] !== D || C[16] !== W || C[17] !== U || C[18] !== z) {
        E = r(n, {
            wrap: "truncate-end",
            children: [
                L,
                D,
                W,
                U,
                z
            ]
        });
        C[14] = L;
        C[15] = D;
        C[16] = W;
        C[17] = U;
        C[18] = z;
        C[19] = E;
    } else {
        E = C[19];
    }
    return E;
}
function si(o, l, clampedPhase, level, leftWidth) {
    let p = l === clampedPhase;
    let h = o.status === "done";
    let b = o.status === "failed";
    let T = h ? te.tick : b ? te.cross : String(l + 1);
    let A = p ? "permission" : h ? "success" : b ? "error" : "subtle";
    let k = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "";
    let C = level === "phases" && p ? `${te.pointer} ` : "  ";
    let L = ae(C) + ae(T) + 1;
    let M = k ? 1 + ae(k) : 0;
    let D = pt(o.title, Math.max(1, leftWidth - L - M));
    let W = Math.max(0, leftWidth - L - ae(D) - M);
    let q = !p && o.status === "not-started";
    let U = [
        {
            text: C,
            color: p ? "permission" : undefined
        },
        {
            text: T,
            color: A
        },
        {
            text: " "
        },
        {
            text: D,
            color: p ? "permission" : undefined,
            dimColor: q
        },
        {
            text: " ".repeat(W)
        }
    ];
    if (k) {
        U.push({
            text: " "
        }, {
            text: k,
            color: p ? "permission" : "subtle"
        });
    }
    return U;
}
function ii(o, l, clampedAgent, level, rightWidth, p, workflowActive) {
    let b = level === "agents" && l === clampedAgent;
    let { glyph, color } = dn(Nt(o, workflowActive));
    let k = pt(o.label, p);
    let C = " ".repeat(Math.max(0, p - ae(k)));
    let L = Math.max(0, rightWidth - (p + 4));
    return [
        {
            text: b ? te.pointer : " ",
            color: "permission"
        },
        {
            text: glyph,
            color
        },
        {
            text: " "
        },
        {
            text: `${k}${C}`,
            color: b ? "permission" : undefined,
            dimColor: !b && $t(o)
        },
        {
            text: " "
        },
        ...Ur(o, L, b, workflowActive)
    ];
}
function li(o, l, clampedAgent, leftWidth, workflowActive) {
    let p = l === clampedAgent;
    let { glyph, color } = dn(Nt(o, workflowActive));
    let text = pt(o.label, Math.max(1, leftWidth - 4));
    return [
        {
            text: p ? `${te.pointer} ` : "  ",
            color: "permission"
        },
        {
            text: glyph,
            color
        },
        {
            text: " "
        },
        {
            text,
            color: p ? "permission" : undefined,
            dimColor: !p && $t(o)
        }
    ];
}
function Yr(o) {
    let L = w(41);
    let { phases, selectedPhase, clampedPhase, clampedAgent, level, leftWidth, rightWidth, viewport, workflowActive, filterLabel } = o;
    let selectedPhase_agents = selectedPhase.agents;
    let M;
    let D;
    let W;
    let q;
    let U;
    let z;
    let E;
    let J;
    let j;
    let et;
    if (L[0] !== selectedPhase_agents || L[1] !== clampedAgent || L[2] !== clampedPhase || L[3] !== filterLabel || L[4] !== leftWidth || L[5] !== level || L[6] !== phases || L[7] !== rightWidth || L[8] !== selectedPhase || L[9] !== viewport || L[10] !== workflowActive) {
        let dt = Vt(clampedPhase, phases.length, viewport);
        let mt = Vt(clampedAgent, selectedPhase_agents.length, viewport);
        let bt = oo(selectedPhase_agents, rightWidth - 4);
        let K = [];
        for(let V = 0; V < viewport; V++){
            let nt = dt.from + V;
            let st = mt.from + V;
            let B = nt < dt.to ? si(phases[nt], nt, clampedPhase, level, leftWidth) : [];
            let right;
            if (st < mt.to) {
                right = ii(selectedPhase_agents[st], st, clampedAgent, level, rightWidth, bt, workflowActive);
            } else if (selectedPhase_agents.length === 0 && V === 0) {
                right = [
                    {
                        text: no(selectedPhase, filterLabel),
                        dimColor: true
                    }
                ];
            } else {
                right = [];
            }
            K.push(e(pn, {
                left: B,
                right,
                leftWidth,
                rightWidth
            }, V));
        }
        const ct = selectedPhase.title;
        let H;
        if (L[21] !== selectedPhase_agents.length || L[22] !== filterLabel) {
            H = Ue(selectedPhase_agents.length, filterLabel);
            L[21] = selectedPhase_agents.length;
            L[22] = filterLabel;
            L[23] = H;
        } else {
            H = L[23];
        }
        let rightTitle = `${ct} \xB7 ${H}`;
        D = s;
        J = "column";
        if (L[24] !== leftWidth || L[25] !== rightTitle || L[26] !== rightWidth) {
            j = e(Xt, {
                pos: "top",
                leftWidth,
                rightWidth,
                leftTitle: "Phases",
                rightTitle
            });
            L[24] = leftWidth;
            L[25] = rightTitle;
            L[26] = rightWidth;
            L[27] = j;
        } else {
            j = L[27];
        }
        et = K;
        M = Xt;
        W = "bottom";
        q = leftWidth;
        U = rightWidth;
        z = phases.length > viewport ? St(dt, phases.length) : undefined;
        E = selectedPhase_agents.length > viewport ? St(mt, selectedPhase_agents.length) : undefined;
        L[0] = selectedPhase_agents;
        L[1] = clampedAgent;
        L[2] = clampedPhase;
        L[3] = filterLabel;
        L[4] = leftWidth;
        L[5] = level;
        L[6] = phases;
        L[7] = rightWidth;
        L[8] = selectedPhase;
        L[9] = viewport;
        L[10] = workflowActive;
        L[11] = M;
        L[12] = D;
        L[13] = W;
        L[14] = q;
        L[15] = U;
        L[16] = z;
        L[17] = E;
        L[18] = J;
        L[19] = j;
        L[20] = et;
    } else {
        M = L[11];
        D = L[12];
        W = L[13];
        q = L[14];
        U = L[15];
        z = L[16];
        E = L[17];
        J = L[18];
        j = L[19];
        et = L[20];
    }
    let ct;
    if (L[28] !== M || L[29] !== W || L[30] !== q || L[31] !== U || L[32] !== z || L[33] !== E) {
        ct = e(M, {
            pos: W,
            leftWidth: q,
            rightWidth: U,
            leftTag: z,
            rightTag: E
        });
        L[28] = M;
        L[29] = W;
        L[30] = q;
        L[31] = U;
        L[32] = z;
        L[33] = E;
        L[34] = ct;
    } else {
        ct = L[34];
    }
    let H;
    if (L[35] !== D || L[36] !== J || L[37] !== j || L[38] !== et || L[39] !== ct) {
        H = r(D, {
            flexDirection: J,
            children: [
                j,
                et,
                ct
            ]
        });
        L[35] = D;
        L[36] = J;
        L[37] = j;
        L[38] = et;
        L[39] = ct;
        L[40] = H;
    } else {
        H = L[40];
    }
    return H;
}
const Ba = 2;
const Ga = 20;
const _r = bo;
const fi = 100;
const mi = 250;
function Jr(runId, agentId, a, promptFramed) {
    let L = w(13);
    let [c, p] = y(null);
    let b = Te(Zw)?.setTimeout ?? ZP;
    let T = R(undefined);
    let A = R(0);
    let k = R(0);
    let C = R(null);
    let M;
    let D;
    if (L[0] === S) {
        M = ()=>()=>{
                C.current = null;
            };
        D = [];
        L[0] = M;
        L[1] = D;
    } else {
        M = L[0];
        D = L[1];
    }
    P(M, D);
    let W;
    if (L[2] !== agentId || L[3] !== promptFramed || L[4] !== b || L[5] !== runId) {
        W = ()=>{
            if (!runId || !agentId) {
                return;
            }
            C.current = {
                runId,
                agentId
            };
            let q = A.current = A.current + 1;
            let z = ()=>{
                yo(runId, agentId, {
                    promptFramed
                }).catch(mc).then((transcript)=>{
                    if (q > k.current && C.current?.runId === runId && C.current.agentId === agentId) {
                        k.current = q;
                        T.current = agentId;
                        p({
                            agentId,
                            transcript
                        });
                    }
                });
            };
            if (T.current === agentId) {
                return b(z, mi);
            }
            z();
        };
        L[2] = agentId;
        L[3] = promptFramed;
        L[4] = b;
        L[5] = runId;
        L[6] = W;
    } else {
        W = L[6];
    }
    let E;
    if (L[7] !== agentId || L[8] !== promptFramed || L[9] !== a || L[10] !== b || L[11] !== runId) {
        E = [
            runId,
            agentId,
            a,
            promptFramed,
            b
        ];
        L[7] = agentId;
        L[8] = promptFramed;
        L[9] = a;
        L[10] = b;
        L[11] = runId;
        L[12] = E;
    } else {
        E = L[12];
    }
    P(W, E);
    if (!runId || !agentId) {
        return null;
    }
    if (!c || c.agentId !== agentId) {
        return "loading";
    }
    return c.transcript;
}
function $r(o, l) {
    let a = [];
    for (let u of o.split(`
`)){
        if (u === "") {
            a.push("");
            continue;
        }
        for (let c of z5e(u, Math.max(1, l))){
            a.push(c);
        }
    }
    return a;
}
function Ti({ lines, title, body, collapsedLines, expanded, indent, width }) {
    let b = body.length - collapsedLines;
    let T = b >= 2 ? b : 0;
    let A = [
        {
            text: title,
            bold: true,
            dimColor: true
        }
    ];
    if (T > 0) {
        A.push({
            text: pt(` \xB7 ${body.length} lines${expanded ? "" : ` \xB7 ${Zdt} expand`}`, width - ae(title)),
            dimColor: true
        });
    }
    lines.push(A);
    let k = expanded || T === 0 ? body : body.slice(0, collapsedLines);
    for (let C of k){
        lines.push(C);
    }
    if (!expanded && T > 0) {
        lines.push([
            {
                text: pt(`${indent}\u2026 ${T} more ${I(T, "line")}`, width),
                dimColor: true
            }
        ]);
    }
    return T;
}
function Ci(scroll, folds) {
    let a = 0;
    for (let u of folds){
        if (scroll < u.end) {
            break;
        }
        a += u.growth;
    }
    return scroll + a;
}
function ki(scroll, folds) {
    let a = 0;
    for (let u of folds){
        let c = u.end + a;
        if (scroll < c) {
            break;
        }
        if (scroll < c + u.growth) {
            return u.end;
        }
        a += u.growth;
    }
    return scroll - a;
}
const ro = {
    queued: "Queued",
    running: "Running",
    done: "Completed",
    failed: "Failed",
    skipped: "Skipped",
    blocked: "Blocked",
    interrupted: "Stopped"
};
function Si({ agent, status, transcript, expanded, width, nowMs }) {
    let h = [];
    let b = "  ";
    let T = Math.max(8, width - 2);
    let A = transcript === "loading" ? null : transcript;
    let { glyph, color } = dn(status);
    let L = [];
    if (agent.model != null) {
        L.push(X9e(agent.model, agent.fallbackModel));
    }
    if (agent.agentType != null) {
        L.push(agent.agentType);
    }
    if (agent.isolation != null) {
        L.push(agent.isolation === "remote" && agent.remoteSessionId ? `remote ${agent.remoteSessionId}` : agent.isolation);
    }
    if (agent.cached) {
        L.push("from resume journal");
    }
    if (agent.attempt != null && agent.attempt > 1) {
        let H = agent.lastAttemptReason === "throttled" ? agent.label.endsWith(lhn) ? B1t : "throttled" : agent.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
        L.push(`attempt ${agent.attempt} (${H})`);
    }
    let M = ae(glyph) + 1 + ae(ro[status]);
    let D = L.length > 0 ? pt(` \xB7 ${L.join(" · ")}`, Math.max(0, width - M)) : "";
    h.push([
        {
            text: glyph,
            color
        },
        {
            text: " "
        },
        {
            text: ro[status],
            color,
            bold: true
        },
        ...D ? [
            {
                text: D,
                dimColor: true
            }
        ] : []
    ]);
    let W = [];
    if (agent.tokens != null) {
        W.push(`${Lr(agent.tokens)} tok`);
    }
    if (agent.toolCalls != null && agent.toolCalls > 0) {
        W.push(`${agent.toolCalls} ${I(agent.toolCalls, "tool call")}`);
    }
    if (agent.durationMs != null) {
        W.push(rn(agent.durationMs));
    }
    if (status === "queued" && agent.queuedAt != null) {
        W.push(`waiting ${rn(Math.max(0, nowMs - agent.queuedAt))}`);
    }
    if (status === "running" && agent.lastProgressAt != null) {
        let H = Math.floor((nowMs - agent.lastProgressAt) / 1000);
        if (H >= 30) {
            W.push(`idle ${rn(H * 1000)}`);
        }
    }
    if (W.length > 0) {
        h.push([
            {
                text: pt(W.join(" · "), width),
                dimColor: true
            }
        ]);
    }
    h.push([
        {
            text: ""
        }
    ]);
    let q = status !== "queued" && A ? A.toolCalls : [];
    let U = status === "running";
    let z = q.filter((H)=>Je(H, U) === "running");
    let E = q;
    let tasks = A?.tasks ?? [];
    let j = tasks.length > 0 ? Io({
        tasks,
        expanded: false,
        width,
        indent: "  "
    }) : null;
    let et = tasks.length > 0 ? Io({
        tasks,
        expanded: true,
        width,
        indent: "  "
    }) : null;
    let dt = expanded ? et : j;
    let detailExpandable = E.length > 0 || (dt?.capped ?? false);
    let bt = transcript !== "loading" && transcript?.prompt ? transcript.prompt : agent.promptPreview ?? "";
    let body = bt ? $r(bt, T).map((H)=>[
            {
                text: `  ${H}`,
                dimColor: true
            }
        ]) : [
        [
            {
                text: `  ${status === "queued" ? "Available once the agent starts." : transcript === "loading" ? "Loading…" : status === "running" ? "Not available yet (agent still running)." : "Transcript not available."}`,
                dimColor: true
            }
        ]
    ];
    let V = Ti({
        lines: h,
        title: "Prompt",
        body,
        collapsedLines: Ba,
        expanded,
        indent: "  ",
        width
    });
    let nt = V > 0 ? V - 1 : 0;
    let st = nt;
    let folds = [
        {
            end: h.length - (expanded ? st : 0),
            growth: nt
        }
    ];
    h.push([
        {
            text: ""
        }
    ]);
    if (dt && j && et) {
        for (let ot of dt.lines){
            h.push(ot);
        }
        let H = et.lines.length - j.lines.length;
        st += H;
        folds.push({
            end: h.length - (expanded ? st : 0),
            growth: H
        });
        h.push([
            {
                text: ""
            }
        ]);
    }
    if (status !== "queued") {
        let H = E.length - _r;
        let ot = Math.max(0, H - _r);
        while(false){
            H--;
        }
        let ft = E.filter((_t, wt)=>wt >= H || Je(_t, U) === "running");
        let Et = [];
        for (let [_t, wt] of ft.entries()){
            if (_t > 0) {
                Et.push([
                    {
                        text: ""
                    }
                ]);
            }
            let Dt = Je(wt, U);
            Et.push(..._s({
                call: wt,
                state: Dt,
                width,
                indent: "  "
            }));
        }
        let kt = "";
        if (E.length > ft.length) {
            kt = ` \xB7 ${ft.length <= _r ? "last " : ""}${ft.length} of ${E.length} tool calls`;
        }
        let Bt = Math.max(0, width - ae("Activity"));
        let Zt = ` \xB7 ${Zdt} expand`;
        kt = !expanded && detailExpandable && ae(kt) + ae(Zt) <= Bt ? kt + Zt : pt(kt, Bt);
        h.push([
            {
                text: "Activity",
                bold: true,
                dimColor: true
            },
            ...kt ? [
                {
                    text: kt,
                    dimColor: true
                }
            ] : []
        ]);
        if (E.length > 0) {
            if (expanded) {
                for (let wt of Et){
                    h.push(wt);
                }
            } else {
                for (let call of ft){
                    let Dt = Je(call, U);
                    h.push(No({
                        call,
                        state: Dt,
                        width,
                        indent: "  "
                    }));
                }
            }
            let _t = Et.length - ft.length;
            st += _t;
            folds.push({
                end: h.length - (expanded ? st : 0),
                growth: _t
            });
        } else if (agent.lastToolName != null) {
            let _t = agent.lastToolSummary ? `(${agent.lastToolSummary})` : "";
            let wt = Do(agent.lastToolName);
            h.push([
                {
                    text: pt(`  ${wt}${_t}`, width),
                    dimColor: true
                }
            ]);
        } else {
            h.push([
                {
                    text: `  ${status === "running" ? "No tool calls yet." : "No tool calls."}`,
                    dimColor: true
                }
            ]);
        }
        h.push([
            {
                text: ""
            }
        ]);
    }
    let body_1 = [];
    switch(status){
        case "queued":
            body_1.push([
                {
                    text: "  Waiting for an agent slot.",
                    dimColor: true
                }
            ]);
            break;
        case "running":
            body_1.push([
                {
                    text: `${"  "}Still running\u2026`,
                    dimColor: true
                }
            ]);
            break;
        case "interrupted":
            body_1.push([
                {
                    text: "  The workflow stopped before this agent finished.",
                    dimColor: true
                }
            ]);
            break;
        case "skipped":
            body_1.push([
                {
                    text: "  Skipped by user.",
                    dimColor: true
                }
            ]);
            break;
        case "blocked":
        case "failed":
            {
                for (let H of $r(agent.error ?? "failed", T)){
                    body_1.push([
                        {
                            text: `  ${H}`,
                            color: "error"
                        }
                    ]);
                }
                break;
            }
        case "done":
            {
                let H = transcript !== "loading" && transcript?.finalText ? transcript.finalText : agent.resultPreview ?? "";
                if (!H) {
                    body_1.push([
                        {
                            text: `  ${transcript === "loading" ? "Loading…" : "(empty)"}`,
                            dimColor: true
                        }
                    ]);
                    break;
                }
                let ot = gs(H, T);
                if (ot) {
                    for (let ft of ot){
                        body_1.push([
                            {
                                text: "  "
                            },
                            ...ft
                        ]);
                    }
                } else {
                    for (let ft of $r(H, T)){
                        body_1.push([
                            {
                                text: `  ${ft}`
                            }
                        ]);
                    }
                }
                break;
            }
    }
    let ct = Ti({
        lines: h,
        title: "Outcome",
        body: body_1,
        collapsedLines: Ga,
        expanded,
        indent: "  ",
        width
    });
    return {
        lines: h,
        expandable: V > 0 || ct > 0 || detailExpandable,
        folds,
        detailExpandable
    };
}
function Vr(o) {
    let L = w(42);
    let { phase, clampedAgent, agentLabel, detailLines, cardScroll, leftWidth, rightWidth, viewport, workflowActive, filterLabel } = o;
    let phase_agents = phase.agents;
    let M;
    let D;
    let W;
    let q;
    let U;
    let z;
    let E;
    let J;
    let j;
    let et;
    if (L[0] !== agentLabel || L[1] !== phase_agents || L[2] !== cardScroll || L[3] !== clampedAgent || L[4] !== detailLines || L[5] !== filterLabel || L[6] !== leftWidth || L[7] !== phase.title || L[8] !== rightWidth || L[9] !== viewport || L[10] !== workflowActive) {
        let dt = Vt(clampedAgent, phase_agents.length, viewport);
        let mt = Math.max(0, detailLines.length - viewport);
        let bt = Pt(cardScroll, 0, mt);
        let K = Math.min(detailLines.length, bt + viewport);
        let V = [];
        for(let nt = 0; nt < viewport; nt++){
            let st = dt.from + nt;
            let B = st < dt.to ? li(phase_agents[st], st, clampedAgent, leftWidth, workflowActive) : [];
            let Q = bt + nt;
            let right = Q < K ? detailLines[Q] : [];
            V.push(e(pn, {
                left: B,
                right,
                leftWidth,
                rightWidth
            }, nt));
        }
        D = s;
        J = "column";
        const H = phase.title;
        let ot;
        if (L[21] !== phase_agents.length || L[22] !== filterLabel) {
            ot = Ue(phase_agents.length, filterLabel);
            L[21] = phase_agents.length;
            L[22] = filterLabel;
            L[23] = ot;
        } else {
            ot = L[23];
        }
        const leftTitle = `${H} \xB7 ${ot}`;
        if (L[24] !== agentLabel || L[25] !== leftWidth || L[26] !== rightWidth || L[27] !== leftTitle) {
            j = e(Xt, {
                pos: "top",
                leftWidth,
                rightWidth,
                leftTitle,
                rightTitle: agentLabel
            });
            L[24] = agentLabel;
            L[25] = leftWidth;
            L[26] = rightWidth;
            L[27] = leftTitle;
            L[28] = j;
        } else {
            j = L[28];
        }
        et = V;
        M = Xt;
        W = "bottom";
        q = leftWidth;
        U = rightWidth;
        z = phase_agents.length > viewport ? St(dt, phase_agents.length) : undefined;
        E = detailLines.length > viewport ? St({
            from: bt,
            to: K
        }, detailLines.length) : undefined;
        L[0] = agentLabel;
        L[1] = phase_agents;
        L[2] = cardScroll;
        L[3] = clampedAgent;
        L[4] = detailLines;
        L[5] = filterLabel;
        L[6] = leftWidth;
        L[7] = phase.title;
        L[8] = rightWidth;
        L[9] = viewport;
        L[10] = workflowActive;
        L[11] = M;
        L[12] = D;
        L[13] = W;
        L[14] = q;
        L[15] = U;
        L[16] = z;
        L[17] = E;
        L[18] = J;
        L[19] = j;
        L[20] = et;
    } else {
        M = L[11];
        D = L[12];
        W = L[13];
        q = L[14];
        U = L[15];
        z = L[16];
        E = L[17];
        J = L[18];
        j = L[19];
        et = L[20];
    }
    let H;
    if (L[29] !== M || L[30] !== W || L[31] !== q || L[32] !== U || L[33] !== z || L[34] !== E) {
        H = e(M, {
            pos: W,
            leftWidth: q,
            rightWidth: U,
            leftTag: z,
            rightTag: E
        });
        L[29] = M;
        L[30] = W;
        L[31] = q;
        L[32] = U;
        L[33] = z;
        L[34] = E;
        L[35] = H;
    } else {
        H = L[35];
    }
    let ot;
    if (L[36] !== D || L[37] !== J || L[38] !== j || L[39] !== et || L[40] !== H) {
        ot = r(D, {
            flexDirection: J,
            children: [
                j,
                et,
                H
            ]
        });
        L[36] = D;
        L[37] = J;
        L[38] = j;
        L[39] = et;
        L[40] = H;
        L[41] = ot;
    } else {
        ot = L[41];
    }
    return ot;
}
function Br(o) {
    let b = w(43);
    let { agentLabel, position, detailLines, cardScroll, contentWidth, viewport } = o;
    let T;
    if (b[0] !== contentWidth) {
        T = aq.repeat(contentWidth + 2);
        b[0] = contentWidth;
        b[1] = T;
    } else {
        T = b[1];
    }
    let A = T;
    let k = Math.max(0, detailLines.length - viewport);
    let C;
    let L;
    if (b[2] !== agentLabel || b[3] !== A || b[4] !== cardScroll || b[5] !== contentWidth || b[6] !== detailLines || b[7] !== k || b[8] !== position || b[9] !== viewport) {
        let M = Pt(cardScroll, 0, k);
        let D = Math.min(detailLines.length, M + viewport);
        L = [];
        let W = ` \xB7 ${position}`;
        const q = Math.max(1, contentWidth - ae(W));
        let U;
        if (b[12] !== agentLabel || b[13] !== q) {
            U = pt(agentLabel, q);
            b[12] = agentLabel;
            b[13] = q;
            b[14] = U;
        } else {
            U = b[14];
        }
        let z;
        if (b[15] !== U) {
            z = {
                text: U,
                color: "permission",
                bold: true
            };
            b[15] = U;
            b[16] = z;
        } else {
            z = b[16];
        }
        let E;
        if (b[17] !== W) {
            E = {
                text: W,
                dimColor: true
            };
            b[17] = W;
            b[18] = E;
        } else {
            E = b[18];
        }
        let J;
        if (b[19] !== z || b[20] !== E) {
            J = [
                z,
                E
            ];
            b[19] = z;
            b[20] = E;
            b[21] = J;
        } else {
            J = b[21];
        }
        let j;
        if (b[22] !== contentWidth || b[23] !== J) {
            j = e(xt, {
                contentWidth,
                segs: J
            }, "title");
            b[22] = contentWidth;
            b[23] = J;
            b[24] = j;
        } else {
            j = b[24];
        }
        L.push(j);
        for(let et = M; et < D; et++){
            L.push(e(xt, {
                contentWidth,
                segs: detailLines[et]
            }, `l-${et}`));
        }
        for(let dt = D - M; dt < viewport; dt++){
            L.push(e(xt, {
                contentWidth,
                segs: [
                    {
                        text: ""
                    }
                ]
            }, `pad-${dt}`));
        }
        if (detailLines.length > viewport) {
            let mt = ` ${St({
                from: M,
                to: D
            }, detailLines.length)} `;
            let bt = Math.max(0, contentWidth + 2 - ae(mt));
            let K;
            if (b[25] !== bt) {
                K = aq.repeat(bt);
                b[25] = bt;
                b[26] = K;
            } else {
                K = b[26];
            }
            let V;
            if (b[27] !== K) {
                V = r(n, {
                    color: "text",
                    children: [
                        " ",
                        Nw.bottomLeft,
                        K
                    ]
                });
                b[27] = K;
                b[28] = V;
            } else {
                V = b[28];
            }
            let nt;
            if (b[29] !== mt) {
                nt = e(n, {
                    dimColor: true,
                    children: mt
                });
                b[29] = mt;
                b[30] = nt;
            } else {
                nt = b[30];
            }
            let st;
            if (b[31] === S) {
                st = e(n, {
                    color: "text",
                    children: Nw.bottomRight
                });
                b[31] = st;
            } else {
                st = b[31];
            }
            let B;
            if (b[32] !== nt || b[33] !== V) {
                B = r(n, {
                    wrap: "truncate-end",
                    children: [
                        V,
                        nt,
                        st
                    ]
                });
                b[32] = nt;
                b[33] = V;
                b[34] = B;
            } else {
                B = b[34];
            }
            C = B;
        } else {
            let K;
            if (b[35] !== A) {
                K = r(n, {
                    color: "text",
                    wrap: "truncate-end",
                    children: [
                        " ",
                        Nw.bottomLeft,
                        A,
                        Nw.bottomRight
                    ]
                });
                b[35] = A;
                b[36] = K;
            } else {
                K = b[36];
            }
            C = K;
        }
        b[2] = agentLabel;
        b[3] = A;
        b[4] = cardScroll;
        b[5] = contentWidth;
        b[6] = detailLines;
        b[7] = k;
        b[8] = position;
        b[9] = viewport;
        b[10] = C;
        b[11] = L;
    } else {
        C = b[10];
        L = b[11];
    }
    let q;
    if (b[37] !== A) {
        q = r(n, {
            color: "text",
            wrap: "truncate-end",
            children: [
                " ",
                Nw.topLeft,
                A,
                Nw.topRight
            ]
        });
        b[37] = A;
        b[38] = q;
    } else {
        q = b[38];
    }
    let U;
    if (b[39] !== C || b[40] !== L || b[41] !== q) {
        U = r(s, {
            flexDirection: "column",
            children: [
                q,
                L,
                C
            ]
        });
        b[39] = C;
        b[40] = L;
        b[41] = q;
        b[42] = U;
    } else {
        U = b[42];
    }
    return U;
}
function $9e({ workflow, onDone, onBack, onKill, onSkipAgent, onRetryAgent, onPause, onResume, initialPhaseIndex, promptVisibleBelow = false }) {
    sa("workflow-detail-dialog");
    let { availableRows, width, rows } = jKn(promptVisibleBelow);
    let contentWidth = Math.max(12, width - 6);
    let D = J9e(workflow);
    let phases = Z(()=>lHr(workflow), [
        workflow.workflowProgress,
        workflow.phases
    ]);
    let q = Z(()=>uHr(phases, workflow.agentCount), [
        phases,
        workflow.agentCount
    ]);
    let [U, z] = y(()=>{
        if (initialPhaseIndex !== undefined) {
            return Math.max(0, initialPhaseIndex);
        }
        return 0;
    });
    let [E, J] = y(0);
    let [j, et] = y(initialPhaseIndex !== undefined ? "agents" : "phases");
    let [dt, mt] = y(false);
    let [bt, K] = y({
        scroll: 0,
        expanded: false
    });
    let { scroll, expanded } = bt;
    let [st, B] = y("all");
    let clampedPhase = Math.min(U, Math.max(0, phases.length - 1));
    let ct = phases[clampedPhase];
    let workflowActive = workflow.status === "running";
    let ot = Z(()=>{
        if (!ct || st === "all" || j === "phases") {
            return ct;
        }
        return {
            ...ct,
            agents: ct.agents.filter((O)=>Nt(O, workflowActive) === st)
        };
    }, [
        ct,
        st,
        j,
        workflowActive
    ]);
    let ft = ot ? Math.min(E, Math.max(0, ot.agents.length - 1)) : 0;
    let [Et, kt] = y(false);
    let Bt = workflow.script.length > 0;
    let defaultName = Z(()=>{
        if (!Bt) {
            return "";
        }
        let O = Kb(workflow.script);
        if (!("error" in O)) {
            return O.meta.name;
        }
        return Cre(workflow.summary ?? workflow.description);
    }, [
        Bt,
        workflow.script,
        workflow.summary,
        workflow.description
    ]);
    let _t = Z(()=>pHr(workflow), [
        workflow.script,
        workflow.description,
        workflow.summary
    ]);
    let { name, subtext, stats } = fHr(workflow, _t, q, D);
    function pe() {
        K({
            scroll: 0,
            expanded: false
        });
    }
    function qe(O) {
        z((yt)=>Pt(Pt(yt, 0, phases.length - 1) + O, 0, phases.length - 1));
        J(0);
        pe();
    }
    function so(O) {
        if (!ot) {
            return;
        }
        J((yt)=>Pt(Pt(yt, 0, ot.agents.length - 1) + O, 0, ot.agents.length - 1));
        pe();
    }
    function fn(O) {
        K((yt)=>({
                ...yt,
                scroll: Math.max(0, yt.scroll + O)
            }));
    }
    function ee(O) {
        if (j === "phases") {
            qe(O);
            return;
        }
        so(O);
    }
    function mn() {
        mt(false);
        if (j === "agent") {
            et("agents");
            return;
        }
        if (j === "agents") {
            et("phases");
            return;
        }
        if (onBack) {
            onBack();
        } else {
            onDone();
        }
    }
    function io() {
        if (ct && ct.agents.length > 0) {
            J(0);
            B("all");
            et("agents");
        }
    }
    function gn() {
        if (!agent || !ct) {
            return;
        }
        if (st !== "all") {
            B("all");
            J(ct.agents.indexOf(agent));
        }
        pe();
        if (transcript === "loading") {
            mt(true);
        } else {
            et("agent");
        }
    }
    function hn() {
        if (!ct || dt) {
            return;
        }
        let O = new Set(ct.agents.map((yt)=>Nt(yt, workflowActive)));
        B((yt)=>{
            let At = Ht.indexOf(yt);
            for(let re = 0; re < Ht.length; re++){
                At = (At + 1) % Ht.length;
                let as = Ht[At];
                if (as === "all" || O.has(as)) {
                    break;
                }
            }
            return Ht[At];
        });
        J(0);
        pe();
    }
    let agent = j !== "phases" && ot ? ot.agents[ft] : undefined;
    let status = agent ? Nt(agent, workflowActive) : undefined;
    let ve = !!agent && $t(agent) && !!agent.agentId && (!!onSkipAgent || !!onKill);
    let Ae = !!agent && $t(agent) && !!agent.agentId && !!onRetryAgent;
    let oe = width - 9;
    let lo = ot ? Math.max(14, ...ot.agents.map((O)=>4 + ae(O.label))) : 14;
    let ao = Math.max(12, Math.min(30, lo, oe - 30));
    let xn = oe - ao;
    let co = j === "agent" && phases.length > 0 && width >= 64 && xn >= 30;
    let width_1 = co ? xn : contentWidth;
    let transcript = Jr(workflow.workflowRunId, agent?.agentId, agent?.lastProgressAt, agent?.promptFramed);
    let Pi = zr(dt ? fi : null);
    if (dt) {
        if (!agent) {
            mt(false);
        } else if (transcript !== "loading" || Pi) {
            mt(false);
            et("agent");
        }
    }
    let nowMs = status === "queued" || status === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0;
    let Ke = Z(()=>{
        if (j === "agent" && agent && status) {
            return Si({
                agent,
                status,
                transcript,
                expanded,
                width: width_1,
                nowMs
            });
        }
        return {
            lines: [],
            expandable: false,
            folds: [],
            detailExpandable: false
        };
    }, [
        j,
        agent,
        status,
        transcript,
        expanded,
        width_1,
        nowMs
    ]);
    let Ke_lines = Ke.lines;
    function Ii() {
        if (!agent || !$t(agent)) {
            return;
        }
        if (agent.agentId && onSkipAgent) {
            onSkipAgent(agent.agentId);
        } else if (onKill) {
            onKill();
        }
    }
    function Ni() {
        if (agent && $t(agent) && agent.agentId) {
            onRetryAgent?.(agent.agentId);
        }
    }
    nn({
        "confirm:previous": ()=>ee(-1),
        "confirm:next": ()=>ee(1)
    }, {
        context: "Confirmation"
    });
    let po = workflow.status === "running" && !!onPause;
    let go = workflow.status === "paused" && !!workflow.scriptPath && !!workflow.workflowRunId && !!onResume;
    let Xr = workflow.status === "running" && !!onKill && j === "phases";
    function Di() {
        if (po) {
            onPause?.();
        } else if (go) {
            onResume?.(V9n(workflow));
        }
    }
    let Fi = (O)=>{
        if (O.ctrl || O.meta) {
            return;
        }
        if (O.key === "j") {
            O.preventDefault();
            if (j === "agent") {
                fn(1);
            } else {
                ee(1);
            }
        } else if (O.key === "k") {
            O.preventDefault();
            if (j === "agent") {
                fn(-1);
            } else {
                ee(-1);
            }
        } else if (O.key === "return" || O.key === "right") {
            O.preventDefault();
            if (j === "phases") {
                io();
            } else if (j === "agents") {
                gn();
            } else if (O.key === "return" && Ke.expandable) {
                if (!expanded && Ke.detailExpandable) {
                    g("workflow_agent_card_detail");
                }
                let { folds } = Ke;
                K(({ scroll, expanded })=>({
                        expanded: !expanded,
                        scroll: expanded ? ki(scroll, folds) : Ci(scroll, folds)
                    }));
            }
        } else if (O.key === "left") {
            O.preventDefault();
            mn();
        } else if (O.key === "r" && Ae) {
            O.preventDefault();
            Ni();
        } else if (O.key === "x" && ve) {
            O.preventDefault();
            Ii();
        } else if (O.key === "x" && Xr) {
            O.preventDefault();
            onKill?.();
        } else if (O.key === " ") {
            O.preventDefault();
            onDone();
        } else if (O.key === "p" && (po || go)) {
            O.preventDefault();
            Di();
        } else if (O.key === "f" && j === "agents") {
            O.preventDefault();
            hn();
        } else if (O.key === "s" && Bt) {
            O.preventDefault();
            kt(true);
        }
    };
    let yn = phases.length > 0;
    if (Et) {
        return e(Ift, {
            script: workflow.script,
            defaultName,
            onDone: (O)=>{
                if (O) {
                    onDone(O);
                } else {
                    kt(false);
                }
            }
        });
    }
    let tight = availableRows < 18;
    let Zr = availableRows - (tight ? 8 : 11);
    let ts = Math.max(1, Zr - 3);
    let ho = phases.length > ts;
    let ns = ho ? Math.max(1, ts - 1) : phases.length;
    let viewport = Math.max(1, Zr - ns - (ho ? 1 : 0));
    let win = Vt(clampedPhase, phases.length, ns);
    let Ui = Math.max(14, ...phases.map((O, yt)=>{
        let At = O.status === "done" ? te.tick : O.status === "failed" ? te.cross : String(yt + 1);
        let re = O.totalCount > 0 ? `${O.doneCount}/${O.totalCount}` : "";
        return 2 + ae(At) + 1 + ae(O.title) + (re ? 1 + ae(re) : 0);
    }));
    let os = Math.max(12, Math.min(34, Ui, oe - 24));
    let rs = oe - os;
    let qi = j !== "agent" && yn && width >= 64 && rs >= 20;
    let xo = Math.max(1, availableRows - (tight ? 7 : 8));
    let ss = Math.max(3, availableRows - (tight ? 8 : 9));
    let is = co ? xo : ss;
    let scroll_1 = Math.max(0, Ke_lines.length - is);
    if (scroll > scroll_1) {
        K({
            scroll: scroll_1,
            expanded
        });
    }
    let filterLabel = st !== "all" && j !== "phases" ? ro[st].toLowerCase() : undefined;
    let vt = [];
    if (j === "agent") {
        vt.push(`${vN}${CP} agent`);
        if (Ke_lines.length > is) {
            vt.push("j/k scroll");
        }
        if (Ke.expandable) {
            vt.push(`${Zdt} ${expanded ? "collapse" : "expand"}`);
        }
    } else if (yn) {
        vt.push(`${vN}${CP} select`);
    }
    if (ve) {
        vt.push("x stop");
    }
    if (Xr) {
        vt.push("x stop workflow");
    }
    if (Ae) {
        vt.push("r restart");
    }
    if (po) {
        vt.push("p pause");
    } else if (go) {
        vt.push("p resume");
    }
    if (j === "agents" && yn) {
        vt.push(filterLabel ? `f filter: ${filterLabel}` : "f filter");
    }
    vt.push("esc back");
    if (Bt) {
        vt.push("s save");
    }
    let Ki = vt.join(" · ");
    return e(fo, {
        onKeyDown: Fi,
        children: e(_e, {
            title: null,
            hideBorder: true,
            hideInputGuide: true,
            onCancel: mn,
            color: "text",
            children: r(s, {
                flexDirection: "column",
                width,
                minHeight: Math.max(tight ? 8 : 12, Math.min(availableRows - 1, rows - 6)),
                maxHeight: Math.max(tight ? 8 : 11, availableRows - 1),
                overflowY: "hidden",
                children: [
                    !yn ? r(Y, {
                        children: [
                            e(mo, {
                                children: "No agents yet."
                            }),
                            e(s, {
                                flexGrow: 1
                            })
                        ]
                    }) : j === "agent" && agent && ot ? r(Y, {
                        children: [
                            e(Q9e, {
                                name,
                                subtext,
                                stats,
                                width
                            }),
                            !tight && e(s, {
                                height: 1
                            }),
                            co ? e(Vr, {
                                phase: ot,
                                clampedAgent: ft,
                                agentLabel: agent.label,
                                detailLines: Ke_lines,
                                cardScroll: scroll,
                                leftWidth: ao,
                                rightWidth: xn,
                                viewport: xo,
                                workflowActive,
                                filterLabel
                            }) : e(Br, {
                                agentLabel: agent.label,
                                position: `${ft + 1}/${ot.agents.length}`,
                                detailLines: Ke_lines,
                                cardScroll: scroll,
                                contentWidth,
                                viewport: ss
                            }),
                            e(s, {
                                flexGrow: 1
                            })
                        ]
                    }) : qi && ot ? r(Y, {
                        children: [
                            e(Q9e, {
                                name,
                                subtext,
                                stats,
                                width
                            }),
                            !tight && e(s, {
                                height: 1
                            }),
                            e(Yr, {
                                phases,
                                selectedPhase: ot,
                                clampedPhase,
                                clampedAgent: ft,
                                level: j === "phases" ? "phases" : "agents",
                                leftWidth: os,
                                rightWidth: rs,
                                viewport: xo,
                                workflowActive,
                                filterLabel
                            }),
                            e(s, {
                                flexGrow: 1
                            })
                        ]
                    }) : r(Y, {
                        children: [
                            e(Q9e, {
                                name,
                                subtext,
                                stats,
                                width
                            }),
                            !tight && e(s, {
                                height: 1
                            }),
                            phases.slice(win.from, win.to).map((O, yt)=>{
                                let At = win.from + yt;
                                return e(WKn, {
                                    index: At + 1,
                                    title: O.title,
                                    done: O.doneCount,
                                    total: O.totalCount,
                                    status: O.status,
                                    selected: At === clampedPhase
                                }, `${At}-${O.title}`);
                            }),
                            ho && e(qr, {
                                win,
                                total: phases.length
                            }),
                            e(s, {
                                flexGrow: 1
                            }),
                            ot ? e(Hr, {
                                phase: ot,
                                selectedAgent: ft,
                                level: j === "phases" ? "phases" : "agents",
                                contentWidth,
                                viewport,
                                tight,
                                workflowActive,
                                filterLabel
                            }) : null
                        ]
                    }),
                    r(n, {
                        dimColor: true,
                        italic: true,
                        wrap: "truncate-end",
                        children: [
                            " ",
                            Ki
                        ]
                    })
                ]
            })
        })
    });
}
export { Ift, $9e };
