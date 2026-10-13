import { fO } from "/$bunfs/root/chunk-gh6rwdb0.js";
import { o, E, M, Bm, oe, T, u, _t, Ue, Wr, upe, ue, U, A, Ii, _u, pa } from "/$bunfs/root/chunk-smx21d0k.js";
const uEe = "2025-11-25";
const hWr = "2025-03-26";
const yX = [
    uEe,
    "2025-06-18",
    "2025-03-26",
    "2024-11-05",
    "2024-10-07"
];
const Rme = "io.modelcontextprotocol/related-task";
const R = "2.0";
const e = _u((t)=>t !== null && (typeof t === "object" || typeof t === "function"));
const progressToken = Ue([
    o(),
    E().int()
]);
const w = o();
const ee = _t({
    ttl: E().optional(),
    pollInterval: E().optional()
});
const F = u({
    ttl: E().optional()
});
const $Xn = u({
    taskId: o()
});
const y = _t({
    progressToken: progressToken.optional(),
    [Rme]: $Xn.optional()
});
const s = u({
    _meta: y.optional()
});
const z = s.extend({
    task: F.optional()
});
const yWr = (t)=>z.safeParse(t).success;
const n = u({
    method: o(),
    params: s.loose().optional()
});
const i = u({
    _meta: y.optional()
});
const r = u({
    method: o(),
    params: i.loose().optional()
});
const result = _t({
    _meta: y.optional()
});
const id = Ue([
    o(),
    E().int()
]);
const v = u({
    jsonrpc: A(R),
    id,
    ...n.shape
}).strict();
const fK = (t)=>v.safeParse(t).success;
const J = u({
    jsonrpc: A(R),
    ...r.shape
}).strict();
const Ijt = (t)=>J.safeParse(t).success;
const j = u({
    jsonrpc: A(R),
    id,
    result
}).strict();
const Zee = (t)=>j.safeParse(t).success;
const fi = {
    ConnectionClosed: -32000,
    [-32000]: "ConnectionClosed",
    RequestTimeout: -32001,
    [-32001]: "RequestTimeout",
    ParseError: -32700,
    [-32700]: "ParseError",
    InvalidRequest: -32600,
    [-32600]: "InvalidRequest",
    MethodNotFound: -32601,
    [-32601]: "MethodNotFound",
    InvalidParams: -32602,
    [-32602]: "InvalidParams",
    InternalError: -32603,
    [-32603]: "InternalError",
    UrlElicitationRequired: -32042,
    [-32042]: "UrlElicitationRequired"
};
const P = u({
    jsonrpc: A(R),
    id: id.optional(),
    error: u({
        code: E().int(),
        message: o(),
        data: oe().optional()
    })
}).strict();
const pEe = (t)=>P.safeParse(t).success;
const rL = Ue([
    v,
    J,
    j,
    P
]);
const ne = Ue([
    j,
    P
]);
const fEe = result.strict();
const H = i.extend({
    requestId: id.optional(),
    reason: o().optional()
});
const iyn = r.extend({
    method: A("notifications/cancelled"),
    params: H
});
const W = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: U([
        "light",
        "dark"
    ]).optional()
});
const d = u({
    icons: T(W).optional()
});
const l = u({
    name: o(),
    title: o().optional()
});
const ayn = l.extend({
    ...l.shape,
    ...d.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
});
const K = upe(u({
    applyDefaults: M().optional()
}), ue(o(), oe()));
const Y = pa((t)=>{
    if (t && typeof t === "object" && !Array.isArray(t)) {
        if (Object.keys(t).length === 0) {
            return {
                form: {}
            };
        }
    }
    return t;
}, upe(u({
    form: K.optional(),
    url: e.optional()
}), ue(o(), oe()).optional()));
const Q = _t({
    list: e.optional(),
    cancel: e.optional(),
    requests: _t({
        sampling: _t({
            createMessage: e.optional()
        }).optional(),
        elicitation: _t({
            create: e.optional()
        }).optional()
    }).optional()
});
const X = _t({
    list: e.optional(),
    cancel: e.optional(),
    requests: _t({
        tools: _t({
            call: e.optional()
        }).optional()
    }).optional()
});
const capabilities = u({
    experimental: ue(o(), e).optional(),
    sampling: u({
        context: e.optional(),
        tools: e.optional()
    }).optional(),
    elicitation: Y.optional(),
    roots: u({
        listChanged: M().optional()
    }).optional(),
    tasks: Q.optional(),
    extensions: ue(o(), e).optional()
});
const tt = s.extend({
    protocolVersion: o(),
    capabilities,
    clientInfo: ayn
});
const lyn = n.extend({
    method: A("initialize"),
    params: tt
});
const FXn = (t)=>lyn.safeParse(t).success;
const UXn = u({
    experimental: ue(o(), e).optional(),
    logging: e.optional(),
    completions: e.optional(),
    prompts: u({
        listChanged: M().optional()
    }).optional(),
    resources: u({
        subscribe: M().optional(),
        listChanged: M().optional()
    }).optional(),
    tools: u({
        listChanged: M().optional()
    }).optional(),
    tasks: X.optional(),
    extensions: ue(o(), e).optional()
});
const e7e = result.extend({
    protocolVersion: o(),
    capabilities: UXn,
    serverInfo: ayn,
    instructions: o().optional()
});
const cyn = r.extend({
    method: A("notifications/initialized"),
    params: i.optional()
});
const _Wr = (t)=>cyn.safeParse(t).success;
const dyn = n.extend({
    method: A("ping"),
    params: s.optional()
});
const et = u({
    progress: E(),
    total: Ii(E()),
    message: Ii(o())
});
const ot = u({
    ...i.shape,
    ...et.shape,
    progressToken
});
const uyn = r.extend({
    method: A("notifications/progress"),
    params: ot
});
const nt = s.extend({
    cursor: w.optional()
});
const x = n.extend({
    params: nt.optional()
});
const h = result.extend({
    nextCursor: w.optional()
});
const status = U([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
]);
const task = u({
    taskId: o(),
    status,
    ttl: Ue([
        E(),
        Bm()
    ]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: Ii(E()),
    statusMessage: Ii(o())
});
const xme = result.extend({
    task
});
const st = i.merge(task);
const Ojt = r.extend({
    method: A("notifications/tasks/status"),
    params: st
});
const pyn = n.extend({
    method: A("tasks/get"),
    params: s.extend({
        taskId: o()
    })
});
const fyn = result.merge(task);
const myn = n.extend({
    method: A("tasks/result"),
    params: s.extend({
        taskId: o()
    })
});
const ae = result.loose();
const gyn = x.extend({
    method: A("tasks/list")
});
const hyn = h.extend({
    tasks: T(task)
});
const yyn = n.extend({
    method: A("tasks/cancel"),
    params: s.extend({
        taskId: o()
    })
});
const bWr = result.merge(task);
const B = u({
    uri: o(),
    mimeType: Ii(o()),
    _meta: ue(o(), oe()).optional()
});
const G = B.extend({
    text: o()
});
const k = o().refine((t)=>{
    try {
        atob(t);
        return true;
    } catch  {
        return false;
    }
}, {
    message: "Invalid Base64 string"
});
const D = B.extend({
    blob: k
});
const role = U([
    "user",
    "assistant"
]);
const p = u({
    audience: T(role).optional(),
    priority: E().min(0).max(1).optional(),
    lastModified: Ue([
        fO({
            offset: true
        }),
        fO({
            offset: true,
            precision: -1
        })
    ]).optional()
});
const _yn = u({
    ...l.shape,
    ...d.shape,
    uri: o(),
    description: Ii(o()),
    mimeType: Ii(o()),
    size: Ii(E()),
    annotations: p.optional(),
    _meta: Ii(_t({}))
});
const BXn = u({
    ...l.shape,
    ...d.shape,
    uriTemplate: o(),
    description: Ii(o()),
    mimeType: Ii(o()),
    annotations: p.optional(),
    _meta: Ii(_t({}))
});
const mDs = x.extend({
    method: A("resources/list")
});
const XWe = h.extend({
    resources: T(_yn)
});
const gDs = x.extend({
    method: A("resources/templates/list")
});
const Mjt = h.extend({
    resourceTemplates: T(BXn)
});
const q = s.extend({
    uri: o()
});
const hDs = n.extend({
    method: A("resources/read"),
    params: q
});
const jXn = result.extend({
    contents: T(Ue([
        G,
        D
    ]))
});
const Hjt = r.extend({
    method: A("notifications/resources/list_changed"),
    params: i.optional()
});
const ct = n.extend({
    method: A("resources/subscribe"),
    params: q
});
const pt = n.extend({
    method: A("resources/unsubscribe"),
    params: q
});
const mt = i.extend({
    uri: o()
});
const zt = r.extend({
    method: A("notifications/resources/updated"),
    params: mt
});
const ut = u({
    name: o(),
    description: Ii(o()),
    required: Ii(M())
});
const WXn = u({
    ...l.shape,
    ...d.shape,
    description: Ii(o()),
    arguments: Ii(T(ut)),
    _meta: Ii(_t({}))
});
const yDs = x.extend({
    method: A("prompts/list")
});
const Djt = h.extend({
    prompts: T(WXn)
});
const dt = s.extend({
    name: o(),
    arguments: ue(o(), o()).optional()
});
const _Ds = n.extend({
    method: A("prompts/get"),
    params: dt
});
const C = u({
    type: A("text"),
    text: o(),
    annotations: p.optional(),
    _meta: ue(o(), oe()).optional()
});
const O = u({
    type: A("image"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: ue(o(), oe()).optional()
});
const N = u({
    type: A("audio"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: ue(o(), oe()).optional()
});
const xt = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: ue(o(), oe()),
    _meta: ue(o(), oe()).optional()
});
const ht = u({
    type: A("resource"),
    resource: Ue([
        G,
        D
    ]),
    annotations: p.optional(),
    _meta: ue(o(), oe()).optional()
});
const gt = _yn.extend({
    type: A("resource_link")
});
const content_1 = Ue([
    C,
    O,
    N,
    gt,
    ht
]);
const St = u({
    role,
    content: content_1
});
const zXn = result.extend({
    description: o().optional(),
    messages: T(St)
});
const Ljt = r.extend({
    method: A("notifications/prompts/list_changed"),
    params: i.optional()
});
const bt = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
});
const Rt = u({
    taskSupport: U([
        "required",
        "optional",
        "forbidden"
    ]).optional()
});
const byn = u({
    ...l.shape,
    ...d.shape,
    description: o().optional(),
    inputSchema: u({
        type: A("object"),
        properties: ue(o(), e).optional(),
        required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: u({
        type: A("object"),
        properties: ue(o(), e).optional(),
        required: T(o()).optional()
    }).catchall(oe()).optional(),
    annotations: bt.optional(),
    execution: Rt.optional(),
    _meta: ue(o(), oe()).optional()
});
const Kie = x.extend({
    method: A("tools/list")
});
const $yt = h.extend({
    tools: T(byn)
});
const Pme = result.extend({
    content: T(content_1).default([]),
    structuredContent: ue(o(), oe()).optional(),
    isError: M().optional()
});
const SWr = Pme.or(result.extend({
    toolResult: oe()
}));
const ft = z.extend({
    name: o(),
    arguments: ue(o(), oe()).optional()
});
const B6 = n.extend({
    method: A("tools/call"),
    params: ft
});
const Njt = r.extend({
    method: A("notifications/tools/list_changed"),
    params: i.optional()
});
const wWr = u({
    autoRefresh: M().default(true),
    debounceMs: E().int().nonnegative().default(300)
});
const level = U([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency"
]);
const yt = s.extend({
    level
});
const GXn = n.extend({
    method: A("logging/setLevel"),
    params: yt
});
const jt = i.extend({
    level,
    logger: o().optional(),
    data: oe()
});
const Pt = r.extend({
    method: A("notifications/message"),
    params: jt
});
const Tt = u({
    name: o().optional()
});
const kt = u({
    hints: T(Tt).optional(),
    costPriority: E().min(0).max(1).optional(),
    speedPriority: E().min(0).max(1).optional(),
    intelligencePriority: E().min(0).max(1).optional()
});
const qt = u({
    mode: U([
        "auto",
        "required",
        "none"
    ]).optional()
});
const Ct = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(content_1).default([]),
    structuredContent: u({}).loose().optional(),
    isError: M().optional(),
    _meta: ue(o(), oe()).optional()
});
const content = Wr("type", [
    C,
    O,
    N
]);
const b = Wr("type", [
    C,
    O,
    N,
    xt,
    Ct
]);
const Nt = u({
    role,
    content: Ue([
        b,
        T(b)
    ]),
    _meta: ue(o(), oe()).optional()
});
const It = z.extend({
    messages: T(Nt),
    modelPreferences: kt.optional(),
    systemPrompt: o().optional(),
    includeContext: U([
        "none",
        "thisServer",
        "allServers"
    ]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: T(o()).optional(),
    metadata: e.optional(),
    tools: T(byn).optional(),
    toolChoice: qt.optional()
});
const VXn = n.extend({
    method: A("sampling/createMessage"),
    params: It
});
const JWe = result.extend({
    model: o(),
    stopReason: Ii(U([
        "endTurn",
        "stopSequence",
        "maxTokens"
    ]).or(o())),
    role,
    content
});
const Fyt = result.extend({
    model: o(),
    stopReason: Ii(U([
        "endTurn",
        "stopSequence",
        "maxTokens",
        "toolUse"
    ]).or(o())),
    role,
    content: Ue([
        b,
        T(b)
    ])
});
const Et = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
});
const Lt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: E().optional(),
    maxLength: E().optional(),
    format: U([
        "email",
        "uri",
        "date",
        "date-time"
    ]).optional(),
    default: o().optional()
});
const wt = u({
    type: U([
        "number",
        "integer"
    ]),
    title: o().optional(),
    description: o().optional(),
    minimum: E().optional(),
    maximum: E().optional(),
    default: E().optional()
});
const Mt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
});
const vt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({
        const: o(),
        title: o()
    })),
    default: o().optional()
});
const Ut = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
});
const At = Ue([
    Mt,
    vt
]);
const Jt = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: E().optional(),
    maxItems: E().optional(),
    items: u({
        type: A("string"),
        enum: T(o())
    }),
    default: T(o()).optional()
});
const Bt = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: E().optional(),
    maxItems: E().optional(),
    items: u({
        anyOf: T(u({
            const: o(),
            title: o()
        }))
    }),
    default: T(o()).optional()
});
const Gt = Ue([
    Jt,
    Bt
]);
const Dt = Ue([
    Ut,
    At,
    Gt
]);
const Vt = Ue([
    Dt,
    Et,
    Lt,
    wt
]);
const Ft = z.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({
        type: A("object"),
        properties: ue(o(), Vt),
        required: T(o()).optional()
    })
});
const qXn = z.extend({
    mode: A("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
});
const Ht = Ue([
    Ft,
    qXn
]);
const WOe = n.extend({
    method: A("elicitation/create"),
    params: Ht
});
const $t = i.extend({
    elicitationId: o()
});
const Uyt = r.extend({
    method: A("notifications/elicitation/complete"),
    params: $t
});
const zOe = result.extend({
    action: U([
        "accept",
        "decline",
        "cancel"
    ]),
    content: pa((t)=>{
        if (t === null) {
            return undefined;
        }
        return t;
    }, ue(o(), Ue([
        o(),
        E(),
        M(),
        T(o())
    ])).optional())
});
const Wt = u({
    type: A("ref/resource"),
    uri: o()
});
const Kt = u({
    type: A("ref/prompt"),
    name: o()
});
const Yt = s.extend({
    ref: Ue([
        Kt,
        Wt
    ]),
    argument: u({
        name: o(),
        value: o()
    }),
    context: u({
        arguments: ue(o(), o()).optional()
    }).optional()
});
const bDs = n.extend({
    method: A("completion/complete"),
    params: Yt
});
function ljs(t) {
    if (t.params.ref.type !== "ref/prompt") {
        throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`);
    }
}
function cjs(t) {
    if (t.params.ref.type !== "ref/resource") {
        throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`);
    }
}
const KXn = result.extend({
    completion: _t({
        values: T(o()).max(100),
        total: Ii(E().int()),
        hasMore: Ii(M())
    })
});
const Qt = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: ue(o(), oe()).optional()
});
const YXn = n.extend({
    method: A("roots/list"),
    params: s.optional()
});
const XXn = result.extend({
    roots: T(Qt)
});
const Xt = r.extend({
    method: A("notifications/roots/list_changed"),
    params: i.optional()
});
const se = Ue([
    dyn,
    lyn,
    bDs,
    GXn,
    _Ds,
    yDs,
    mDs,
    gDs,
    hDs,
    ct,
    pt,
    B6,
    Kie,
    pyn,
    myn,
    gyn,
    yyn
]);
const ie = Ue([
    iyn,
    uyn,
    cyn,
    Xt,
    Ojt
]);
const re = Ue([
    fEe,
    JWe,
    Fyt,
    zOe,
    XXn,
    fyn,
    hyn,
    xme
]);
const ce = Ue([
    dyn,
    VXn,
    WOe,
    YXn,
    pyn,
    myn,
    gyn,
    yyn
]);
const le = Ue([
    iyn,
    uyn,
    Pt,
    zt,
    Hjt,
    Njt,
    Ljt,
    Ojt,
    Uyt
]);
const pe = Ue([
    fEe,
    e7e,
    KXn,
    zXn,
    Djt,
    XWe,
    Mjt,
    jXn,
    Pme,
    $yt,
    fyn,
    hyn,
    xme
]);
class Zs extends Error {
    constructor(t, c, m){
        super(`MCP error ${t}: ${c}`);
        this.code = t;
        this.data = m;
        this.name = "McpError";
    }
    static fromError(t, c, m) {
        if (t === fi.UrlElicitationRequired && m) {
            let L = m;
            if (L.elicitations) {
                return new V(L.elicitations, c);
            }
        }
        return new Zs(t, c, m);
    }
}
class V extends Zs {
    constructor(elicitations, c = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`){
        super(fi.UrlElicitationRequired, c, {
            elicitations
        });
    }
    get elicitations() {
        return this.data?.elicitations ?? [];
    }
}
export { uEe, hWr, yX, Rme, $Xn, yWr, fK, Ijt, Zee, fi, pEe, rL, fEe, iyn, ayn, lyn, FXn, UXn, e7e, cyn, _Wr, dyn, uyn, xme, Ojt, pyn, fyn, myn, gyn, hyn, yyn, bWr, _yn, BXn, mDs, XWe, gDs, Mjt, hDs, jXn, Hjt, WXn, yDs, Djt, _Ds, zXn, Ljt, byn, Kie, $yt, Pme, SWr, B6, Njt, wWr, level as $jt, GXn, VXn, JWe, Fyt, qXn, WOe, Uyt, zOe, bDs, ljs, cjs, KXn, YXn, XXn, Zs };
