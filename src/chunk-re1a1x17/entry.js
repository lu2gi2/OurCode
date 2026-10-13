import { Gi } from "./Gi.js";
import { gd } from "./gd.js";
import { hu } from "./hu.js";
import { vd } from "./vd.js";
import { w1t } from "/$bunfs/root/chunk-z09tvyve.js";
import { OWe } from "/$bunfs/root/chunk-we5wnv65.js";
import { S1t } from "/$bunfs/root/chunk-8ht447pa.js";
import { fO, Y$s } from "/$bunfs/root/chunk-gh6rwdb0.js";
import { uq, Wxe } from "/$bunfs/root/chunk-485vtzdj.js";
import { E5e, lCr, o, fPs, EHt, E, M, Bm, K8, oe, T, u, _t, Ue, Wr, upe, ue, U, A, Ii, qE, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { Uz } from "/$bunfs/root/chunk-85v8km1j.js";
const Ot = "2025-11-25";
const _Qe = [
    Ot,
    "2025-06-18",
    "2025-03-26",
    "2024-11-05",
    "2024-10-07"
];
const r1t = "io.modelcontextprotocol/related-task";
const Fe = "io.modelcontextprotocol/protocolVersion";
const Nt = "io.modelcontextprotocol/clientInfo";
const He = "io.modelcontextprotocol/serverInfo";
const hOe = "io.modelcontextprotocol/clientCapabilities";
const vr = "io.modelcontextprotocol/subscriptionId";
const Mt = "io.modelcontextprotocol/logLevel";
const gt = "2.0";
const Tgn = -32601;
var Qe = qE(()=>Ue([
        o(),
        E(),
        M(),
        Bm(),
        ue(o(), Qe),
        T(Qe)
    ]));
const he = ue(o(), Qe);
const Eo = T(Qe);
const progressToken = Ue([
    o(),
    E().int()
]);
const Rr = o();
const ws = u({
    ttl: E().optional()
});
const o1t = u({
    taskId: o()
});
const zr = _t({
    progressToken: progressToken.optional(),
    [r1t]: o1t.optional()
});
const be = u({
    _meta: zr.optional()
});
const yt = be.extend({
    task: ws.optional()
});
const me = u({
    method: o(),
    params: be.loose().optional()
});
const $e = u({
    _meta: zr.optional()
});
const Ee = u({
    method: o(),
    params: $e.loose().optional()
});
const wr = _t({
    get [He] () {
        return bQe.optional().catch(undefined);
    }
});
const ax = _t({
    _meta: wr.optional()
});
const et = Ue([
    o(),
    E().int()
]);
const $r = u({
    jsonrpc: A(gt),
    id: et,
    ...me.shape
}).strict();
const Er = u({
    jsonrpc: A(gt),
    ...Ee.shape
}).strict();
const jt = u({
    jsonrpc: A(gt),
    id: et,
    result: ax
}).strict();
const At = u({
    jsonrpc: A(gt),
    id: et.optional(),
    error: u({
        code: E().int(),
        message: o(),
        data: oe().optional()
    })
}).strict();
const Gee = Ue([
    $r,
    Er,
    jt,
    At
]);
const Po = Ue([
    jt,
    At
]);
const Pr = ax.strict();
const $s = $e.extend({
    requestId: et.optional(),
    reason: o().optional()
});
const Tr = Ee.extend({
    method: A("notifications/cancelled"),
    params: $s
});
const Es = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: U([
        "light",
        "dark"
    ]).optional()
});
const tt = u({
    icons: T(Es).optional()
});
const xe = u({
    name: o(),
    title: o().optional()
});
var bQe = xe.extend({
    ...xe.shape,
    ...tt.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
});
const $c = upe(u({
    applyDefaults: M().optional()
}), he);
const Ec = pa((e)=>{
    if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0) {
        return {
            form: {}
        };
    }
    return e;
}, upe(u({
    form: $c.optional(),
    url: he.optional()
}), he.optional()));
const Ps = _t({
    list: he.optional(),
    cancel: he.optional(),
    requests: _t({
        sampling: _t({
            createMessage: he.optional()
        }).optional(),
        elicitation: _t({
            create: he.optional()
        }).optional()
    }).optional()
});
const Cs = _t({
    list: he.optional(),
    cancel: he.optional(),
    requests: _t({
        tools: _t({
            call: he.optional()
        }).optional()
    }).optional()
});
const capabilities = u({
    experimental: ue(o(), he).optional(),
    sampling: u({
        context: he.optional(),
        tools: he.optional()
    }).optional(),
    elicitation: Ec.optional(),
    roots: u({
        listChanged: M().optional()
    }).optional(),
    tasks: Ps.optional(),
    extensions: ue(o(), he).optional()
});
const qs = be.extend({
    protocolVersion: o(),
    capabilities,
    clientInfo: bQe
});
const Cr = me.extend({
    method: A("initialize"),
    params: qs
});
const Vht = u({
    experimental: ue(o(), he).optional(),
    logging: he.optional(),
    completions: he.optional(),
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
    tasks: Cs.optional(),
    extensions: ue(o(), he).optional()
});
const SQe = ax.extend({
    protocolVersion: o(),
    capabilities: Vht,
    serverInfo: bQe,
    instructions: o().optional()
});
const kr = Ee.extend({
    method: A("notifications/initialized"),
    params: $e.optional()
});
const Is = me.extend({
    method: A("server/discover"),
    params: be.optional()
});
const AWe = ax.extend({
    supportedVersions: T(o()),
    capabilities: Vht,
    instructions: o().optional()
});
const qr = me.extend({
    method: A("ping"),
    params: be.optional()
});
const Os = u({
    progress: E(),
    total: Ii(E()),
    message: Ii(o())
});
const Ns = u({
    ...$e.shape,
    ...Os.shape,
    progressToken
});
const Ir = Ee.extend({
    method: A("notifications/progress"),
    params: Ns
});
const Ms = be.extend({
    cursor: Rr.optional()
});
const rt = me.extend({
    params: Ms.optional()
});
const st = ax.extend({
    nextCursor: Rr.optional()
});
const Or = u({
    uri: o(),
    mimeType: Ii(o()),
    _meta: ue(o(), oe()).optional()
});
const Nr = Or.extend({
    text: o()
});
const To = o().refine((e)=>{
    try {
        atob(e);
        return true;
    } catch  {
        return false;
    }
}, {
    message: "Invalid Base64 string"
});
const Mr = Or.extend({
    blob: To
});
const role = U([
    "user",
    "assistant"
]);
const Ke = u({
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
const qht = u({
    ...xe.shape,
    ...tt.shape,
    uri: o(),
    description: Ii(o()),
    mimeType: Ii(o()),
    size: Ii(E()),
    annotations: Ke.optional(),
    _meta: Ii(_t({}))
});
const s1t = u({
    ...xe.shape,
    ...tt.shape,
    uriTemplate: o(),
    description: Ii(o()),
    mimeType: Ii(o()),
    annotations: Ke.optional(),
    _meta: Ii(_t({}))
});
const js = rt.extend({
    method: A("resources/list")
});
const CWe = st.extend({
    resources: T(qht)
});
const As = rt.extend({
    method: A("resources/templates/list")
});
const i1t = st.extend({
    resourceTemplates: T(s1t)
});
const Lt = be.extend({
    uri: o()
});
const Ls = Lt;
const Us = me.extend({
    method: A("resources/read"),
    params: Ls
});
const Ds = ax.extend({
    contents: T(Ue([
        Nr,
        Mr
    ]))
});
const Vs = Ee.extend({
    method: A("notifications/resources/list_changed"),
    params: $e.optional()
});
const xs = Lt;
const Fs = me.extend({
    method: A("resources/subscribe"),
    params: xs
});
const Ks = Lt;
const Js = me.extend({
    method: A("resources/unsubscribe"),
    params: Ks
});
const notifications = u({
    toolsListChanged: M().optional(),
    promptsListChanged: M().optional(),
    resourcesListChanged: M().optional(),
    resourceSubscriptions: T(o()).optional()
});
const Gs = be.extend({
    notifications
});
const Bs = me.extend({
    method: A("subscriptions/listen"),
    params: Gs
});
const Ws = $e.extend({
    notifications
});
const Ys = Ee.extend({
    method: A("notifications/subscriptions/acknowledged"),
    params: Ws
});
const _meta = wr.extend({
    [vr]: et
});
const Zs = ax.extend({
    _meta
});
const Qs = $e.extend({
    uri: o()
});
const ea = Ee.extend({
    method: A("notifications/resources/updated"),
    params: Qs
});
const ta = u({
    name: o(),
    description: Ii(o()),
    required: Ii(M())
});
const a1t = u({
    ...xe.shape,
    ...tt.shape,
    description: Ii(o()),
    arguments: Ii(T(ta)),
    _meta: Ii(_t({}))
});
const ra = rt.extend({
    method: A("prompts/list")
});
const l1t = st.extend({
    prompts: T(a1t)
});
const sa = be.extend({
    name: o(),
    arguments: ue(o(), o()).optional()
});
const aa = me.extend({
    method: A("prompts/get"),
    params: sa
});
const Ut = u({
    type: A("text"),
    text: o(),
    annotations: Ke.optional(),
    _meta: ue(o(), oe()).optional()
});
const Dt = u({
    type: A("image"),
    data: To,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: ue(o(), oe()).optional()
});
const Vt = u({
    type: A("audio"),
    data: To,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: ue(o(), oe()).optional()
});
const oa = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: ue(o(), oe()),
    _meta: ue(o(), oe()).optional()
});
const na = u({
    type: A("resource"),
    resource: Ue([
        Nr,
        Mr
    ]),
    annotations: Ke.optional(),
    _meta: ue(o(), oe()).optional()
});
const ia = qht.extend({
    type: A("resource_link")
});
const xt = Ue([
    Ut,
    Dt,
    Vt,
    ia,
    na
]);
const ca = u({
    role,
    content: xt
});
const la = ax.extend({
    description: o().optional(),
    messages: T(ca)
});
const ua = Ee.extend({
    method: A("notifications/prompts/list_changed"),
    params: $e.optional()
});
const da = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
});
const ha = u({
    taskSupport: U([
        "required",
        "optional",
        "forbidden"
    ]).optional()
});
const Kht = u({
    ...xe.shape,
    ...tt.shape,
    description: o().optional(),
    inputSchema: u({
        type: A("object"),
        properties: ue(o(), Qe).optional(),
        required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: _t({
        $schema: o().optional()
    }).optional(),
    annotations: da.optional(),
    execution: ha.optional(),
    _meta: ue(o(), oe()).optional()
});
const ma = rt.extend({
    method: A("tools/list")
});
const RWe = st.extend({
    tools: T(Kht)
});
const Ar = ax.extend({
    content: T(xt).default([]),
    structuredContent: oe().optional(),
    isError: M().optional()
});
const c1t = Ar.or(ax.extend({
    toolResult: oe()
}));
const fa = yt.extend({
    name: o(),
    arguments: ue(o(), oe()).optional()
});
const Sa = me.extend({
    method: A("tools/call"),
    params: fa
});
const ga = Ee.extend({
    method: A("notifications/tools/list_changed"),
    params: $e.optional()
});
const Lr = u({
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
const _a = be.extend({
    level
});
const ya = me.extend({
    method: A("logging/setLevel"),
    params: _a
});
const va = $e.extend({
    level,
    logger: o().optional(),
    data: oe()
});
const ba = Ee.extend({
    method: A("notifications/message"),
    params: va
});
const Ra = u({
    name: o().optional()
});
const za = u({
    hints: T(Ra).optional(),
    costPriority: E().min(0).max(1).optional(),
    speedPriority: E().min(0).max(1).optional(),
    intelligencePriority: E().min(0).max(1).optional()
});
const wa = u({
    mode: U([
        "auto",
        "required",
        "none"
    ]).optional()
});
const $a = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(xt),
    structuredContent: oe().optional(),
    isError: M().optional(),
    _meta: ue(o(), oe()).optional()
});
const Ea = Wr("type", [
    Ut,
    Dt,
    Vt
]);
const St = Wr("type", [
    Ut,
    Dt,
    Vt,
    oa,
    $a
]);
const Pa = u({
    role,
    content: Ue([
        St,
        T(St)
    ]),
    _meta: ue(o(), oe()).optional()
});
const Ta = yt.extend({
    messages: T(Pa),
    modelPreferences: za.optional(),
    systemPrompt: o().optional(),
    includeContext: U([
        "none",
        "thisServer",
        "allServers"
    ]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: T(o()).optional(),
    metadata: he.optional(),
    tools: T(Kht).optional(),
    toolChoice: wa.optional()
});
const Ca = me.extend({
    method: A("sampling/createMessage"),
    params: Ta
});
const ka = ax.extend({
    model: o(),
    stopReason: Ii(U([
        "endTurn",
        "stopSequence",
        "maxTokens"
    ]).or(o())),
    role,
    content: Ea
});
const qa = ax.extend({
    model: o(),
    stopReason: Ii(U([
        "endTurn",
        "stopSequence",
        "maxTokens",
        "toolUse"
    ]).or(o())),
    role,
    content: Ue([
        St,
        T(St)
    ])
});
const Dr = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
});
const Ft = u({
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
const Ht = u({
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
const Vr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
});
const xr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({
        const: o(),
        title: o()
    })),
    default: o().optional()
});
const Fr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
});
const Ia = Ue([
    Vr,
    xr
]);
const Hr = u({
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
const Kr = u({
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
const Oa = Ue([
    Hr,
    Kr
]);
const Na = Ue([
    Fr,
    Ia,
    Oa
]);
const Jr = Ue([
    Na,
    Dr,
    Ft,
    Ht
]);
const Kt = yt.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({
        type: A("object"),
        properties: ue(o(), Jr),
        required: T(o()).optional()
    }).catchall(oe())
});
const d1t = yt.extend({
    mode: A("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
});
const u1t = Ue([
    Kt,
    d1t
]);
const Ma = me.extend({
    method: A("elicitation/create"),
    params: u1t
});
const ja = $e.extend({
    elicitationId: o()
});
const Aa = Ee.extend({
    method: A("notifications/elicitation/complete"),
    params: ja
});
const La = ax.extend({
    action: U([
        "accept",
        "decline",
        "cancel"
    ]),
    content: pa((e)=>{
        if (e === null) {
            return undefined;
        }
        return e;
    }, ue(o(), Ue([
        o(),
        E(),
        M(),
        T(o())
    ])).optional())
});
const Ua = u({
    type: A("ref/resource"),
    uri: o()
});
const Da = u({
    type: A("ref/prompt"),
    name: o()
});
const Va = be.extend({
    ref: Ue([
        Da,
        Ua
    ]),
    argument: u({
        name: o(),
        value: o()
    }),
    context: u({
        arguments: ue(o(), o()).optional()
    }).optional()
});
const xa = me.extend({
    method: A("completion/complete"),
    params: Va
});
const Fa = ax.extend({
    completion: _t({
        values: T(o()).max(100),
        total: Ii(E().int()),
        hasMore: Ii(M())
    })
});
const Ha = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: ue(o(), oe()).optional()
});
const Ka = me.extend({
    method: A("roots/list"),
    params: be.optional()
});
const Ja = ax.extend({
    roots: T(Ha)
});
const Ga = Ee.extend({
    method: A("notifications/roots/list_changed"),
    params: $e.optional()
});
const Co = _t({
    ttl: E().optional(),
    pollInterval: E().optional()
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
const ko = ax.extend({
    task
});
const Wa = $e.merge(task);
const qo = Ee.extend({
    method: A("notifications/tasks/status"),
    params: Wa
});
const Io = me.extend({
    method: A("tasks/get"),
    params: be.extend({
        taskId: o()
    })
});
const Oo = ax.merge(task);
const No = me.extend({
    method: A("tasks/result"),
    params: be.extend({
        taskId: o()
    })
});
const Mo = ax.loose();
const jo = rt.extend({
    method: A("tasks/list")
});
const Ao = st.extend({
    tasks: T(task)
});
const Lo = me.extend({
    method: A("tasks/cancel"),
    params: be.extend({
        taskId: o()
    })
});
const Uo = ax.merge(task);
const Do = Ue([
    qr,
    Cr,
    Is,
    xa,
    ya,
    aa,
    ra,
    js,
    As,
    Us,
    Fs,
    Js,
    Bs,
    Sa,
    ma
]);
const Vo = Ue([
    Tr,
    Ir,
    kr,
    Ga
]);
const xo = Ue([
    Pr,
    ka,
    qa,
    La,
    Ja
]);
const Fo = Ue([
    qr,
    Ca,
    Ma,
    Ka
]);
const Ho = Ue([
    Tr,
    Ir,
    ba,
    ea,
    Vs,
    ga,
    ua,
    Ys,
    Aa
]);
const Ko = Ue([
    Pr,
    SQe,
    AWe,
    Fa,
    la,
    l1t,
    CWe,
    i1t,
    Ds,
    Ar,
    RWe,
    Zs
]);
const ve = EHt().superRefine((e, t)=>{
    if (!URL.canParse(e)) {
        t.addIssue({
            code: uq.custom,
            message: "URL must be parseable",
            fatal: true
        });
        return Uz;
    }
}).refine((e)=>{
    let t = new URL(e);
    return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
});
const OAuthProtectedResourceMetadataSchema = _t({
    resource: o().url(),
    authorization_servers: T(ve).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: T(o()).optional(),
    bearer_methods_supported: T(o()).optional(),
    resource_signing_alg_values_supported: T(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: T(o()).optional(),
    dpop_signing_alg_values_supported: T(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
});
const wQe = _t({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    service_documentation: ve.optional(),
    revocation_endpoint: ve.optional(),
    revocation_endpoint_auth_methods_supported: T(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: T(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    code_challenge_methods_supported: T(o()).optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(undefined)
});
const OpenIdProviderMetadataSchema = _t({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    userinfo_endpoint: ve.optional(),
    jwks_uri: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    acr_values_supported: T(o()).optional(),
    subject_types_supported: T(o()),
    id_token_signing_alg_values_supported: T(o()),
    id_token_encryption_alg_values_supported: T(o()).optional(),
    id_token_encryption_enc_values_supported: T(o()).optional(),
    userinfo_signing_alg_values_supported: T(o()).optional(),
    userinfo_encryption_alg_values_supported: T(o()).optional(),
    userinfo_encryption_enc_values_supported: T(o()).optional(),
    request_object_signing_alg_values_supported: T(o()).optional(),
    request_object_encryption_alg_values_supported: T(o()).optional(),
    request_object_encryption_enc_values_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    display_values_supported: T(o()).optional(),
    claim_types_supported: T(o()).optional(),
    claims_supported: T(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: T(o()).optional(),
    ui_locales_supported: T(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: ve.optional(),
    op_tos_uri: ve.optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(undefined)
});
const Yht = u({
    ...OpenIdProviderMetadataSchema.shape,
    ...wQe.pick({
        code_challenge_methods_supported: true
    }).shape
});
const Xht = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: Wxe().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
}).strip();
const IdJagTokenExchangeResponseSchema = u({
    issued_token_type: A("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: o(),
    token_type: o().optional(),
    expires_in: E().optional(),
    scope: o().optional()
}).strip();
const Jht = u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
});
const $o = ve.optional().or(A("").transform(()=>{}));
const OAuthClientMetadataSchema = u({
    redirect_uris: T(ve),
    token_endpoint_auth_method: o().optional(),
    grant_types: T(o()).optional(),
    response_types: T(o()).optional(),
    application_type: o().optional(),
    client_name: o().optional(),
    client_uri: ve.optional(),
    logo_uri: $o,
    scope: o().optional(),
    contacts: T(o()).optional(),
    tos_uri: $o,
    policy_uri: o().optional(),
    jwks_uri: ve.optional(),
    jwks: K8().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
}).strip();
const OAuthClientInformationSchema = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: E().optional(),
    client_secret_expires_at: E().optional()
}).strip();
const OAuthClientInformationFullSchema = OAuthClientMetadataSchema.merge(OAuthClientInformationSchema);
const OAuthClientRegistrationErrorSchema = u({
    error: o(),
    error_description: o().optional()
}).strip();
const OAuthTokenRevocationRequestSchema = u({
    token: o(),
    token_type_hint: o().optional()
}).strip();
const { create, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getPrototypeOf } = Object;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const Tn = (e, t)=>{
    let r = {};
    for(var s in e){
        defineProperty(r, s, {
            get: e[s],
            enumerable: true
        });
    }
    if (t) {
        defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        });
    }
    return r;
};
const Ic = (e, t, r, s)=>{
    if (t && typeof t === "object" || typeof t === "function") {
        var a = getOwnPropertyNames(t);
        var l;
        for(var n = 0, i = a.length; n < i; n++){
            l = a[n];
            if (!hasOwnProperty.call(e, l) && l !== r) {
                defineProperty(e, l, {
                    get: ((c)=>t[c]).bind(null, l),
                    enumerable: !(s = getOwnPropertyDescriptor(t, l)) || s.enumerable
                });
            }
        }
    }
    return e;
};
const to = (e, t, r)=>{
    r = e != null ? create(getPrototypeOf(e)) : {};
    return Ic(t || !e || !e.__esModule ? defineProperty(r, "default", {
        value: e,
        enumerable: true
    }) : r, e);
};
const SYMBOL_MCP_SDK_ERROR_BRANDS = Symbol.for("mcp.sdk.errorBrands");
function bt(e, t) {
    let r = new Set;
    let s = t;
    while(typeof s === "function"){
        let a = s.mcpBrand;
        if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof a === "string") {
            r.add(a);
        }
        s = Object.getPrototypeOf(s);
    }
    if (r.size === 0) {
        return;
    }
    Object.defineProperty(e, SYMBOL_MCP_SDK_ERROR_BRANDS, {
        value: r,
        enumerable: false,
        configurable: true
    });
}
function Ie(e, t) {
    try {
        if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e, "mcpBrand") && typeof e.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, SYMBOL_MCP_SDK_ERROR_BRANDS)) {
            let r = t[SYMBOL_MCP_SDK_ERROR_BRANDS];
            if (r && typeof r.has === "function" && r.has(e.mcpBrand)) {
                return true;
            }
        }
    } catch  {}
    return Function.prototype[Symbol.hasInstance].call(e, t);
}
const Vee = {
    InvalidRequest: "invalid_request",
    InvalidClient: "invalid_client",
    InvalidGrant: "invalid_grant",
    UnauthorizedClient: "unauthorized_client",
    UnsupportedGrantType: "unsupported_grant_type",
    InvalidScope: "invalid_scope",
    AccessDenied: "access_denied",
    ServerError: "server_error",
    TemporarilyUnavailable: "temporarily_unavailable",
    UnsupportedResponseType: "unsupported_response_type",
    UnsupportedTokenType: "unsupported_token_type",
    InvalidToken: "invalid_token",
    MethodNotAllowed: "method_not_allowed",
    TooManyRequests: "too_many_requests",
    InvalidClientMetadata: "invalid_client_metadata",
    InvalidRedirectUri: "invalid_redirect_uri",
    InsufficientScope: "insufficient_scope",
    InvalidTarget: "invalid_target"
};
const LG = class e extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.OAuthError"
        });
    }
    static [Symbol.hasInstance](t) {
        return Ie(this, t);
    }
    static isInstance(t) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, t);
    }
    constructor(t, r, s){
        super(r);
        this.code = t;
        this.errorUri = s;
        this.name = "OAuthError";
        bt(this, new.target);
    }
    toResponseObject() {
        let t = {
            error: this.code,
            error_description: this.message
        };
        if (this.errorUri) {
            t.error_uri = this.errorUri;
        }
        return t;
    }
    static fromResponse(t) {
        return new e(t.error, t.error_description ?? t.error, t.error_uri);
    }
};
const Ts = {
    NotConnected: "NOT_CONNECTED",
    AlreadyConnected: "ALREADY_CONNECTED",
    NotInitialized: "NOT_INITIALIZED",
    CapabilityNotSupported: "CAPABILITY_NOT_SUPPORTED",
    RequestTimeout: "REQUEST_TIMEOUT",
    ConnectionClosed: "CONNECTION_CLOSED",
    SendFailed: "SEND_FAILED",
    InvalidResult: "INVALID_RESULT",
    UnsupportedResultType: "UNSUPPORTED_RESULT_TYPE",
    InputRequiredRoundsExceeded: "INPUT_REQUIRED_ROUNDS_EXCEEDED",
    ListPaginationExceeded: "LIST_PAGINATION_EXCEEDED",
    MethodNotSupportedByProtocolVersion: "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION",
    EraNegotiationFailed: "ERA_NEGOTIATION_FAILED",
    ClientHttpNotImplemented: "CLIENT_HTTP_NOT_IMPLEMENTED",
    ClientHttpAuthentication: "CLIENT_HTTP_AUTHENTICATION",
    ClientHttpForbidden: "CLIENT_HTTP_FORBIDDEN",
    ClientHttpUnexpectedContent: "CLIENT_HTTP_UNEXPECTED_CONTENT",
    ClientHttpFailedToOpenStream: "CLIENT_HTTP_FAILED_TO_OPEN_STREAM",
    ClientHttpFailedToTerminateSession: "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION"
};
class Hs extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.SdkError"
        });
    }
    static [Symbol.hasInstance](e) {
        return Ie(this, e);
    }
    static isInstance(e) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, e);
    }
    constructor(e, t, r){
        super(t);
        this.code = e;
        this.data = r;
        this.name = "SdkError";
        bt(this, new.target);
    }
}
class aE extends Hs {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.SdkHttpError"
        });
    }
    constructor(e, t, r){
        super(e, t, r);
        this.name = "SdkHttpError";
    }
    get status() {
        return this.data.status;
    }
    get statusText() {
        return this.data.statusText;
    }
}
function Gn(serverUrl) {
    let t = typeof serverUrl === "string" ? new URL(serverUrl) : new URL(serverUrl.href);
    t.hash = "";
    return t;
}
function Bn({ requestedResource, configuredResource }) {
    let r = typeof requestedResource === "string" ? new URL(requestedResource) : new URL(requestedResource.href);
    let s = typeof configuredResource === "string" ? new URL(configuredResource) : new URL(configuredResource.href);
    if (r.origin !== s.origin) {
        return false;
    }
    if (r.pathname.length < s.pathname.length) {
        return false;
    }
    let a = r.pathname.endsWith("/") ? r.pathname : `${r.pathname}/`;
    let n = s.pathname.endsWith("/") ? s.pathname : `${s.pathname}/`;
    return a.startsWith(n);
}
const Wn = "2026-07-28";
const sn = [
    Wn
];
function Ge(e) {
    return e >= Wn;
}
function an(e) {
    return e.filter((t)=>!Ge(t));
}
function rs(e) {
    return e.filter((t)=>Ge(t));
}
function Yn(e) {
    let e_structuredContent = e.structuredContent;
    if (e_structuredContent === undefined) {
        return e;
    }
    if (!(typeof e_structuredContent !== "object" || e_structuredContent === null || Array.isArray(e_structuredContent))) {
        return e;
    }
    if (e.content?.some((r)=>r.type === "text") ?? false) {
        return e;
    }
    return {
        ...e,
        content: [
            ...e.content ?? [],
            {
                type: "text",
                text: JSON.stringify(e_structuredContent)
            }
        ]
    };
}
const Xn = [
    "task",
    "inputRequests",
    "requestState"
];
function Oc(e) {
    if (e === null || typeof e !== "object" || Array.isArray(e) || e.content !== undefined || Xn.some((t)=>t in e)) {
        return e;
    }
    return {
        ...e,
        content: []
    };
}
function Nc() {
    let e = qE(()=>Ue([
            o(),
            E(),
            M(),
            Bm(),
            ue(o(), e),
            T(e)
        ]));
    let t = ue(o(), e);
    let r = Ue([
        o(),
        E().int()
    ]);
    let s = o();
    let a = u({
        ttl: E().optional()
    });
    let n = u({
        taskId: o()
    });
    let i = _t({
        progressToken: r.optional(),
        "io.modelcontextprotocol/related-task": n.optional()
    });
    let l = u({
        _meta: i.optional()
    });
    let c = l.extend({
        task: a.optional()
    });
    let RequestSchema = u({
        method: o(),
        params: l.loose().optional()
    });
    let m = u({
        _meta: i.optional()
    });
    let _ = u({
        method: o(),
        params: m.loose().optional()
    });
    let w = _t({
        _meta: i.optional()
    });
    let RequestIdSchema = Ue([
        o(),
        E().int()
    ]);
    let EmptyResultSchema = w.strict();
    let v = m.extend({
        requestId: RequestIdSchema.optional(),
        reason: o().optional()
    });
    let p = _.extend({
        method: A("notifications/cancelled"),
        params: v
    });
    let h = u({
        src: o(),
        mimeType: o().optional(),
        sizes: T(o()).optional(),
        theme: U([
            "light",
            "dark"
        ]).optional()
    });
    let g = u({
        icons: T(h).optional()
    });
    let f = u({
        name: o(),
        title: o().optional()
    });
    let R = f.extend({
        ...f.shape,
        ...g.shape,
        version: o(),
        websiteUrl: o().optional(),
        description: o().optional()
    });
    let C = upe(u({
        applyDefaults: M().optional()
    }), t);
    let b = pa((we)=>{
        if (we && typeof we === "object" && !Array.isArray(we) && Object.keys(we).length === 0) {
            return {
                form: {}
            };
        }
        return we;
    }, upe(u({
        form: C.optional(),
        url: t.optional()
    }), t.optional()));
    let S = _t({
        list: t.optional(),
        cancel: t.optional(),
        requests: _t({
            sampling: _t({
                createMessage: t.optional()
            }).optional(),
            elicitation: _t({
                create: t.optional()
            }).optional()
        }).optional()
    });
    let k = _t({
        list: t.optional(),
        cancel: t.optional(),
        requests: _t({
            tools: _t({
                call: t.optional()
            }).optional()
        }).optional()
    });
    let L = u({
        experimental: ue(o(), t).optional(),
        sampling: u({
            context: t.optional(),
            tools: t.optional()
        }).optional(),
        elicitation: b.optional(),
        roots: u({
            listChanged: M().optional()
        }).optional(),
        tasks: S.optional(),
        extensions: ue(o(), t).optional()
    });
    let K = l.extend({
        protocolVersion: o(),
        capabilities: L,
        clientInfo: R
    });
    let InitializeRequestSchema = RequestSchema.extend({
        method: A("initialize"),
        params: K
    });
    let F = u({
        experimental: ue(o(), t).optional(),
        logging: t.optional(),
        completions: t.optional(),
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
        tasks: k.optional(),
        extensions: ue(o(), t).optional()
    });
    let InitializeResultSchema = w.extend({
        protocolVersion: o(),
        capabilities: F,
        serverInfo: R,
        instructions: o().optional()
    });
    let InitializedNotificationSchema = _.extend({
        method: A("notifications/initialized"),
        params: m.optional()
    });
    let PingRequestSchema = RequestSchema.extend({
        method: A("ping"),
        params: l.optional()
    });
    let le = u({
        progress: E(),
        total: Ii(E()),
        message: Ii(o())
    });
    let ie = u({
        ...m.shape,
        ...le.shape,
        progressToken: r
    });
    let Se = _.extend({
        method: A("notifications/progress"),
        params: ie
    });
    let PaginatedRequestParamsSchema = l.extend({
        cursor: s.optional()
    });
    let PaginatedRequestSchema = RequestSchema.extend({
        params: PaginatedRequestParamsSchema.optional()
    });
    let PaginatedResultSchema = w.extend({
        nextCursor: s.optional()
    });
    let H = u({
        uri: o(),
        mimeType: Ii(o()),
        _meta: ue(o(), oe()).optional()
    });
    let z = H.extend({
        text: o()
    });
    let I = o().refine((we)=>{
        try {
            atob(we);
            return true;
        } catch  {
            return false;
        }
    }, {
        message: "Invalid Base64 string"
    });
    let j = H.extend({
        blob: I
    });
    let G = U([
        "user",
        "assistant"
    ]);
    let Y = u({
        audience: T(G).optional(),
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
    let re = u({
        ...f.shape,
        ...g.shape,
        uri: o(),
        description: Ii(o()),
        mimeType: Ii(o()),
        size: Ii(E()),
        annotations: Y.optional(),
        _meta: Ii(_t({}))
    });
    let Q = u({
        ...f.shape,
        ...g.shape,
        uriTemplate: o(),
        description: Ii(o()),
        mimeType: Ii(o()),
        annotations: Y.optional(),
        _meta: Ii(_t({}))
    });
    let ListResourcesRequestSchema = PaginatedRequestSchema.extend({
        method: A("resources/list")
    });
    let Pe = PaginatedResultSchema.extend({
        resources: T(re)
    });
    let ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
        method: A("resources/templates/list")
    });
    let V = PaginatedResultSchema.extend({
        resourceTemplates: T(Q)
    });
    let ResourceRequestParamsSchema = l.extend({
        uri: o()
    });
    let X = ResourceRequestParamsSchema;
    let ReadResourceRequestSchema = RequestSchema.extend({
        method: A("resources/read"),
        params: X
    });
    let ee = w.extend({
        contents: T(Ue([
            z,
            j
        ]))
    });
    let pe = _.extend({
        method: A("notifications/resources/list_changed"),
        params: m.optional()
    });
    let _e = ResourceRequestParamsSchema;
    let SubscribeRequestSchema = RequestSchema.extend({
        method: A("resources/subscribe"),
        params: _e
    });
    let ge = ResourceRequestParamsSchema;
    let UnsubscribeRequestSchema = RequestSchema.extend({
        method: A("resources/unsubscribe"),
        params: ge
    });
    let Oe = m.extend({
        uri: o()
    });
    let ye = _.extend({
        method: A("notifications/resources/updated"),
        params: Oe
    });
    let De = u({
        name: o(),
        description: Ii(o()),
        required: Ii(M())
    });
    let Me = u({
        ...f.shape,
        ...g.shape,
        description: Ii(o()),
        arguments: Ii(T(De)),
        _meta: Ii(_t({}))
    });
    let ListPromptsRequestSchema = PaginatedRequestSchema.extend({
        method: A("prompts/list")
    });
    let Be = PaginatedResultSchema.extend({
        prompts: T(Me)
    });
    let We = l.extend({
        name: o(),
        arguments: ue(o(), o()).optional()
    });
    let GetPromptRequestSchema = RequestSchema.extend({
        method: A("prompts/get"),
        params: We
    });
    let it = u({
        type: A("text"),
        text: o(),
        annotations: Y.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let ct = u({
        type: A("image"),
        data: I,
        mimeType: o(),
        annotations: Y.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let lt = u({
        type: A("audio"),
        data: I,
        mimeType: o(),
        annotations: Y.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Gt = u({
        type: A("tool_use"),
        name: o(),
        id: o(),
        input: ue(o(), oe()),
        _meta: ue(o(), oe()).optional()
    });
    let Ye = u({
        type: A("resource"),
        resource: Ue([
            z,
            j
        ]),
        annotations: Y.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Bt = re.extend({
        type: A("resource_link")
    });
    let Ne = Ue([
        it,
        ct,
        lt,
        Bt,
        Ye
    ]);
    let Rt = u({
        role: G,
        content: Ne
    });
    let zt = w.extend({
        description: o().optional(),
        messages: T(Rt)
    });
    let ut = _.extend({
        method: A("notifications/prompts/list_changed"),
        params: m.optional()
    });
    let Wt = u({
        title: o().optional(),
        readOnlyHint: M().optional(),
        destructiveHint: M().optional(),
        idempotentHint: M().optional(),
        openWorldHint: M().optional()
    });
    let ToolExecutionSchema = u({
        taskSupport: U([
            "required",
            "optional",
            "forbidden"
        ]).optional()
    });
    let dt = u({
        ...f.shape,
        ...g.shape,
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
        annotations: Wt.optional(),
        execution: ToolExecutionSchema.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let ListToolsRequestSchema = PaginatedRequestSchema.extend({
        method: A("tools/list")
    });
    let Et = PaginatedResultSchema.extend({
        tools: T(dt)
    });
    let Pt = w.extend({
        content: T(Ne),
        structuredContent: ue(o(), oe()).optional(),
        isError: M().optional()
    });
    let ze = c.extend({
        name: o(),
        arguments: ue(o(), oe()).optional()
    });
    let CallToolRequestSchema = RequestSchema.extend({
        method: A("tools/call"),
        params: ze
    });
    let is = _.extend({
        method: A("notifications/tools/list_changed"),
        params: m.optional()
    });
    let Tt = U([
        "debug",
        "info",
        "notice",
        "warning",
        "error",
        "critical",
        "alert",
        "emergency"
    ]);
    let Xt = l.extend({
        level: Tt
    });
    let SetLevelRequestSchema = RequestSchema.extend({
        method: A("logging/setLevel"),
        params: Xt
    });
    let Qt = m.extend({
        level: Tt,
        logger: o().optional(),
        data: oe()
    });
    let er = _.extend({
        method: A("notifications/message"),
        params: Qt
    });
    let tr = u({
        name: o().optional()
    });
    let rr = u({
        hints: T(tr).optional(),
        costPriority: E().min(0).max(1).optional(),
        speedPriority: E().min(0).max(1).optional(),
        intelligencePriority: E().min(0).max(1).optional()
    });
    let sr = u({
        mode: U([
            "auto",
            "required",
            "none"
        ]).optional()
    });
    let cs = u({
        type: A("tool_result"),
        toolUseId: o().describe("The unique identifier for the corresponding tool call."),
        content: T(Ne),
        structuredContent: u({}).loose().optional(),
        isError: M().optional(),
        _meta: ue(o(), oe()).optional()
    });
    let ar = Wr("type", [
        it,
        ct,
        lt
    ]);
    let Xe = Wr("type", [
        it,
        ct,
        lt,
        Gt,
        cs
    ]);
    let or = u({
        role: G,
        content: Ue([
            Xe,
            T(Xe)
        ]),
        _meta: ue(o(), oe()).optional()
    });
    let nr = c.extend({
        messages: T(or),
        modelPreferences: rr.optional(),
        systemPrompt: o().optional(),
        includeContext: U([
            "none",
            "thisServer",
            "allServers"
        ]).optional(),
        temperature: E().optional(),
        maxTokens: E().int(),
        stopSequences: T(o()).optional(),
        metadata: t.optional(),
        tools: T(dt).optional(),
        toolChoice: sr.optional()
    });
    let ir = RequestSchema.extend({
        method: A("sampling/createMessage"),
        params: nr
    });
    let cr = w.extend({
        model: o(),
        stopReason: Ii(U([
            "endTurn",
            "stopSequence",
            "maxTokens"
        ]).or(o())),
        role: G,
        content: ar
    });
    let CreateMessageResultWithToolsSchema = w.extend({
        model: o(),
        stopReason: Ii(U([
            "endTurn",
            "stopSequence",
            "maxTokens",
            "toolUse"
        ]).or(o())),
        role: G,
        content: Ue([
            Xe,
            T(Xe)
        ])
    });
    let ur = u({
        type: A("boolean"),
        title: o().optional(),
        description: o().optional(),
        default: M().optional()
    });
    let dr = u({
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
    let hr = u({
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
    let mr = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        enum: T(o()),
        default: o().optional()
    });
    let pr = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        oneOf: T(u({
            const: o(),
            title: o()
        })),
        default: o().optional()
    });
    let fr = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        enum: T(o()),
        enumNames: T(o()).optional(),
        default: o().optional()
    });
    let Sr = Ue([
        mr,
        pr
    ]);
    let ht = u({
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
    let mt = u({
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
    let ls = Ue([
        ht,
        mt
    ]);
    let us = Ue([
        fr,
        Sr,
        ls
    ]);
    let ke = Ue([
        us,
        ur,
        dr,
        hr
    ]);
    let qe = c.extend({
        mode: A("form").optional(),
        message: o(),
        requestedSchema: u({
            type: A("object"),
            properties: ue(o(), ke),
            required: T(o()).optional()
        }).catchall(oe())
    });
    let gr = c.extend({
        mode: A("url"),
        message: o(),
        elicitationId: o(),
        url: o().url()
    });
    let je = Ue([
        qe,
        gr
    ]);
    let ds = RequestSchema.extend({
        method: A("elicitation/create"),
        params: je
    });
    let hs = m.extend({
        elicitationId: o()
    });
    let ElicitationCompleteNotificationSchema = _.extend({
        method: A("notifications/elicitation/complete"),
        params: hs
    });
    let ps = w.extend({
        action: U([
            "accept",
            "decline",
            "cancel"
        ]),
        content: pa((we)=>{
            if (we === null) {
                return undefined;
            }
            return we;
        }, ue(o(), Ue([
            o(),
            E(),
            M(),
            T(o())
        ])).optional())
    });
    let fs = u({
        type: A("ref/resource"),
        uri: o()
    });
    let Ss = u({
        type: A("ref/prompt"),
        name: o()
    });
    let gs = l.extend({
        ref: Ue([
            Ss,
            fs
        ]),
        argument: u({
            name: o(),
            value: o()
        }),
        context: u({
            arguments: ue(o(), o()).optional()
        }).optional()
    });
    let CompleteRequestSchema = RequestSchema.extend({
        method: A("completion/complete"),
        params: gs
    });
    let _s = w.extend({
        completion: _t({
            values: T(o()).max(100),
            total: Ii(E().int()),
            hasMore: Ii(M())
        })
    });
    let ys = u({
        uri: o().startsWith("file://"),
        name: o().optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Ct = RequestSchema.extend({
        method: A("roots/list"),
        params: l.optional()
    });
    let yr = w.extend({
        roots: T(ys)
    });
    let RootsListChangedNotificationSchema = _.extend({
        method: A("notifications/roots/list_changed"),
        params: m.optional()
    });
    let TaskCreationParamsSchema = _t({
        ttl: E().optional(),
        pollInterval: E().optional()
    });
    let Rs = U([
        "working",
        "input_required",
        "completed",
        "failed",
        "cancelled"
    ]);
    let Ze = u({
        taskId: o(),
        status: Rs,
        ttl: Ue([
            E(),
            Bm()
        ]),
        createdAt: o(),
        lastUpdatedAt: o(),
        pollInterval: Ii(E()),
        statusMessage: Ii(o())
    });
    let CreateTaskResultSchema = w.extend({
        task: Ze
    });
    let zs = m.merge(Ze);
    let TaskStatusNotificationSchema = _.extend({
        method: A("notifications/tasks/status"),
        params: zs
    });
    let GetTaskRequestSchema = RequestSchema.extend({
        method: A("tasks/get"),
        params: l.extend({
            taskId: o()
        })
    });
    let GetTaskResultSchema = w.merge(Ze);
    let GetTaskPayloadRequestSchema = RequestSchema.extend({
        method: A("tasks/result"),
        params: l.extend({
            taskId: o()
        })
    });
    let GetTaskPayloadResultSchema = w.loose();
    let ListTasksRequestSchema = PaginatedRequestSchema.extend({
        method: A("tasks/list")
    });
    let ListTasksResultSchema = PaginatedResultSchema.extend({
        tasks: T(Ze)
    });
    let CancelTaskRequestSchema = RequestSchema.extend({
        method: A("tasks/cancel"),
        params: l.extend({
            taskId: o()
        })
    });
    return {
        JSONValueSchema: e,
        JSONObjectSchema: t,
        ProgressTokenSchema: r,
        CursorSchema: s,
        TaskMetadataSchema: a,
        RelatedTaskMetadataSchema: n,
        RequestMetaSchema: i,
        BaseRequestParamsSchema: l,
        TaskAugmentedRequestParamsSchema: c,
        RequestSchema,
        NotificationsParamsSchema: m,
        NotificationSchema: _,
        ResultSchema: w,
        RequestIdSchema,
        EmptyResultSchema,
        CancelledNotificationParamsSchema: v,
        CancelledNotificationSchema: p,
        IconSchema: h,
        IconsSchema: g,
        BaseMetadataSchema: f,
        ImplementationSchema: R,
        ClientTasksCapabilitySchema: S,
        ServerTasksCapabilitySchema: k,
        ClientCapabilitiesSchema: L,
        InitializeRequestParamsSchema: K,
        InitializeRequestSchema,
        ServerCapabilitiesSchema: F,
        InitializeResultSchema,
        InitializedNotificationSchema,
        PingRequestSchema,
        ProgressSchema: le,
        ProgressNotificationParamsSchema: ie,
        ProgressNotificationSchema: Se,
        PaginatedRequestParamsSchema,
        PaginatedRequestSchema,
        PaginatedResultSchema,
        ResourceContentsSchema: H,
        TextResourceContentsSchema: z,
        BlobResourceContentsSchema: j,
        RoleSchema: G,
        AnnotationsSchema: Y,
        ResourceSchema: re,
        ResourceTemplateSchema: Q,
        ListResourcesRequestSchema,
        ListResourcesResultSchema: Pe,
        ListResourceTemplatesRequestSchema,
        ListResourceTemplatesResultSchema: V,
        ResourceRequestParamsSchema,
        ReadResourceRequestParamsSchema: X,
        ReadResourceRequestSchema,
        ReadResourceResultSchema: ee,
        ResourceListChangedNotificationSchema: pe,
        SubscribeRequestParamsSchema: _e,
        SubscribeRequestSchema,
        UnsubscribeRequestParamsSchema: ge,
        UnsubscribeRequestSchema,
        ResourceUpdatedNotificationParamsSchema: Oe,
        ResourceUpdatedNotificationSchema: ye,
        PromptArgumentSchema: De,
        PromptSchema: Me,
        ListPromptsRequestSchema,
        ListPromptsResultSchema: Be,
        GetPromptRequestParamsSchema: We,
        GetPromptRequestSchema,
        TextContentSchema: it,
        ImageContentSchema: ct,
        AudioContentSchema: lt,
        ToolUseContentSchema: Gt,
        EmbeddedResourceSchema: Ye,
        ResourceLinkSchema: Bt,
        ContentBlockSchema: Ne,
        PromptMessageSchema: Rt,
        GetPromptResultSchema: zt,
        PromptListChangedNotificationSchema: ut,
        ToolAnnotationsSchema: Wt,
        ToolExecutionSchema,
        ToolSchema: dt,
        ListToolsRequestSchema,
        ListToolsResultSchema: Et,
        CallToolResultSchema: Pt,
        CallToolRequestParamsSchema: ze,
        CallToolRequestSchema,
        ToolListChangedNotificationSchema: is,
        LoggingLevelSchema: Tt,
        SetLevelRequestParamsSchema: Xt,
        SetLevelRequestSchema,
        LoggingMessageNotificationParamsSchema: Qt,
        LoggingMessageNotificationSchema: er,
        ModelHintSchema: tr,
        ModelPreferencesSchema: rr,
        ToolChoiceSchema: sr,
        ToolResultContentSchema: cs,
        SamplingContentSchema: ar,
        SamplingMessageContentBlockSchema: Xe,
        SamplingMessageSchema: or,
        CreateMessageRequestParamsSchema: nr,
        CreateMessageRequestSchema: ir,
        CreateMessageResultSchema: cr,
        CreateMessageResultWithToolsSchema,
        BooleanSchemaSchema: ur,
        StringSchemaSchema: dr,
        NumberSchemaSchema: hr,
        UntitledSingleSelectEnumSchemaSchema: mr,
        TitledSingleSelectEnumSchemaSchema: pr,
        LegacyTitledEnumSchemaSchema: fr,
        SingleSelectEnumSchemaSchema: Sr,
        UntitledMultiSelectEnumSchemaSchema: ht,
        TitledMultiSelectEnumSchemaSchema: mt,
        MultiSelectEnumSchemaSchema: ls,
        EnumSchemaSchema: us,
        PrimitiveSchemaDefinitionSchema: ke,
        ElicitRequestFormParamsSchema: qe,
        ElicitRequestURLParamsSchema: gr,
        ElicitRequestParamsSchema: je,
        ElicitRequestSchema: ds,
        ElicitationCompleteNotificationParamsSchema: hs,
        ElicitationCompleteNotificationSchema,
        ElicitResultSchema: ps,
        ResourceTemplateReferenceSchema: fs,
        PromptReferenceSchema: Ss,
        CompleteRequestParamsSchema: gs,
        CompleteRequestSchema,
        CompleteResultSchema: _s,
        RootSchema: ys,
        ListRootsRequestSchema: Ct,
        ListRootsResultSchema: yr,
        RootsListChangedNotificationSchema,
        TaskCreationParamsSchema,
        TaskStatusSchema: Rs,
        TaskSchema: Ze,
        CreateTaskResultSchema,
        TaskStatusNotificationParamsSchema: zs,
        TaskStatusNotificationSchema,
        GetTaskRequestSchema,
        GetTaskResultSchema,
        GetTaskPayloadRequestSchema,
        GetTaskPayloadResultSchema,
        ListTasksRequestSchema,
        ListTasksResultSchema,
        CancelTaskRequestSchema,
        CancelTaskResultSchema: w.merge(Ze),
        ClientRequestSchema: Ue([
            PingRequestSchema,
            InitializeRequestSchema,
            CompleteRequestSchema,
            SetLevelRequestSchema,
            GetPromptRequestSchema,
            ListPromptsRequestSchema,
            ListResourcesRequestSchema,
            ListResourceTemplatesRequestSchema,
            ReadResourceRequestSchema,
            SubscribeRequestSchema,
            UnsubscribeRequestSchema,
            CallToolRequestSchema,
            ListToolsRequestSchema,
            GetTaskRequestSchema,
            GetTaskPayloadRequestSchema,
            ListTasksRequestSchema,
            CancelTaskRequestSchema
        ]),
        ClientNotificationSchema: Ue([
            p,
            Se,
            InitializedNotificationSchema,
            RootsListChangedNotificationSchema,
            TaskStatusNotificationSchema
        ]),
        ClientResultSchema: Ue([
            EmptyResultSchema,
            cr,
            CreateMessageResultWithToolsSchema,
            ps,
            yr,
            GetTaskResultSchema,
            ListTasksResultSchema,
            CreateTaskResultSchema
        ]),
        ServerRequestSchema: Ue([
            PingRequestSchema,
            ir,
            ds,
            Ct,
            GetTaskRequestSchema,
            GetTaskPayloadRequestSchema,
            ListTasksRequestSchema,
            CancelTaskRequestSchema
        ]),
        ServerNotificationSchema: Ue([
            p,
            Se,
            er,
            ye,
            pe,
            is,
            ut,
            TaskStatusNotificationSchema,
            ElicitationCompleteNotificationSchema
        ]),
        ServerResultSchema: Ue([
            EmptyResultSchema,
            InitializeResultSchema,
            _s,
            zt,
            Be,
            Pe,
            V,
            ee,
            Pt,
            Et,
            GetTaskResultSchema,
            ListTasksResultSchema,
            CreateTaskResultSchema
        ]),
        CallToolResultWireSchema: oe().superRefine((we, Rc)=>{
            if (typeof we !== "object" || we === null || Array.isArray(we) || we.content !== undefined) {
                return;
            }
            for (let Pn of Xn){
                if (Pn in we) {
                    Rc.addIssue({
                        code: "custom",
                        message: `content is required when the body carries '${Pn}' \u2014 another result family cannot default into an empty tools/call success`
                    });
                    return;
                }
            }
        }).transform(Oc).pipe(Pt)
    };
}
let Mc;
function Zn() {
    return Mc ??= Nc();
}
function Qn(e) {
    return e.type !== "object";
}
const jc = new Set([
    "const",
    "enum",
    "default",
    "examples"
]);
const Ac = new Set([
    "properties",
    "patternProperties",
    "$defs",
    "definitions",
    "dependentSchemas"
]);
function Lc(outputSchema) {
    let t = typeof outputSchema.$schema === "string" ? outputSchema.$schema : undefined;
    if (outputSchema.$id !== undefined) {
        return {
            ...t !== undefined && {
                $schema: t
            },
            type: "object",
            properties: {
                result: outputSchema
            },
            required: [
                "result"
            ]
        };
    }
    let r = (s, a)=>{
        if (Array.isArray(s)) {
            return s.map((i)=>r(i, false));
        }
        if (s === null || typeof s !== "object") {
            return s;
        }
        if (!a && s.$id !== undefined) {
            return s;
        }
        let n = {};
        for (let [i, l] of Object.entries(s)){
            if (a) {
                n[i] = r(l, false);
            } else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string") {
                n[i] = l === "#" ? "#/properties/result" : l.startsWith("#/") ? `#/properties/result${l.slice(1)}` : l;
            } else if (jc.has(i)) {
                n[i] = l;
            } else if (Ac.has(i)) {
                n[i] = r(l, true);
            } else {
                n[i] = r(l, false);
            }
        }
        return n;
    };
    return {
        ...t !== undefined && {
            $schema: t
        },
        type: "object",
        properties: {
            result: r(outputSchema, false)
        },
        required: [
            "result"
        ]
    };
}
const ei = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "tasks/get": null,
    "tasks/result": null,
    "tasks/list": null,
    "tasks/cancel": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
};
const ti = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/initialized": null,
    "notifications/roots/list_changed": null,
    "notifications/tasks/status": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/elicitation/complete": null
};
const Uc = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
};
let ro;
function on() {
    if (ro) {
        return ro;
    }
    let e = Zn();
    ro = {
        requestSchemas: {
            ping: e.PingRequestSchema,
            initialize: e.InitializeRequestSchema,
            "completion/complete": e.CompleteRequestSchema,
            "logging/setLevel": e.SetLevelRequestSchema,
            "prompts/get": e.GetPromptRequestSchema,
            "prompts/list": e.ListPromptsRequestSchema,
            "resources/list": e.ListResourcesRequestSchema,
            "resources/templates/list": e.ListResourceTemplatesRequestSchema,
            "resources/read": e.ReadResourceRequestSchema,
            "resources/subscribe": e.SubscribeRequestSchema,
            "resources/unsubscribe": e.UnsubscribeRequestSchema,
            "tools/call": e.CallToolRequestSchema,
            "tools/list": e.ListToolsRequestSchema,
            "tasks/get": e.GetTaskRequestSchema,
            "tasks/result": e.GetTaskPayloadRequestSchema,
            "tasks/list": e.ListTasksRequestSchema,
            "tasks/cancel": e.CancelTaskRequestSchema,
            "sampling/createMessage": e.CreateMessageRequestSchema,
            "elicitation/create": e.ElicitRequestSchema,
            "roots/list": e.ListRootsRequestSchema
        },
        notificationSchemas: {
            "notifications/cancelled": e.CancelledNotificationSchema,
            "notifications/progress": e.ProgressNotificationSchema,
            "notifications/initialized": e.InitializedNotificationSchema,
            "notifications/roots/list_changed": e.RootsListChangedNotificationSchema,
            "notifications/tasks/status": e.TaskStatusNotificationSchema,
            "notifications/message": e.LoggingMessageNotificationSchema,
            "notifications/resources/updated": e.ResourceUpdatedNotificationSchema,
            "notifications/resources/list_changed": e.ResourceListChangedNotificationSchema,
            "notifications/tools/list_changed": e.ToolListChangedNotificationSchema,
            "notifications/prompts/list_changed": e.PromptListChangedNotificationSchema,
            "notifications/elicitation/complete": e.ElicitationCompleteNotificationSchema
        },
        resultSchemas: {
            ping: e.EmptyResultSchema,
            initialize: e.InitializeResultSchema,
            "completion/complete": e.CompleteResultSchema,
            "logging/setLevel": e.EmptyResultSchema,
            "prompts/get": e.GetPromptResultSchema,
            "prompts/list": e.ListPromptsResultSchema,
            "resources/list": e.ListResourcesResultSchema,
            "resources/templates/list": e.ListResourceTemplatesResultSchema,
            "resources/read": e.ReadResourceResultSchema,
            "resources/subscribe": e.EmptyResultSchema,
            "resources/unsubscribe": e.EmptyResultSchema,
            "tools/call": e.CallToolResultWireSchema,
            "tools/list": e.ListToolsResultSchema,
            "sampling/createMessage": e.CreateMessageResultWithToolsSchema,
            "elicitation/create": e.ElicitResultSchema,
            "roots/list": e.ListRootsResultSchema
        }
    };
    return ro;
}
function ri(e) {
    return Object.prototype.hasOwnProperty.call(ei, e);
}
function si(e) {
    return Object.prototype.hasOwnProperty.call(ti, e);
}
function Dc(e) {
    return Object.prototype.hasOwnProperty.call(Uc, e);
}
function Vc(e) {
    if (Dc(e)) {
        return on().resultSchemas[e];
    }
}
function xc(e) {
    if (ri(e)) {
        return on().requestSchemas[e];
    }
}
function Fc(e) {
    if (si(e)) {
        return on().notificationSchemas[e];
    }
}
const Ph = Object.keys(ei);
const Th = Object.keys(ti);
function Qo(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
function so(e, t) {
    if (e === undefined) {
        return {
            ok: false,
            reason: "not-in-era"
        };
    }
    let r = e.safeParse(t);
    if (r.success) {
        return {
            ok: true,
            value: r.data
        };
    }
    return {
        ok: false,
        reason: "invalid",
        message: String(r.error)
    };
}
const An = {
    ok: false,
    reason: "not-in-era"
};
function Ln(e) {
    return Qo(e) && Qo(e.outputSchema) && Qn(e.outputSchema);
}
function Un(e) {
    return e;
}
const nn = {
    era: "2025-11-25",
    hasRequestMethod: ri,
    hasNotificationMethod: si,
    validateRequest: (e, t)=>so(xc(e), t),
    validateResult: (e, t)=>so(Vc(e), t),
    validateNotification: (e, t)=>so(Fc(e), t),
    hasInputRequestMethod: ()=>false,
    validateInputRequest: ()=>An,
    validateInputResponse: ()=>An,
    samplingResultVariant: (e, t)=>{
        let r = Zn();
        return so(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
    },
    outboundEnvelope: (e)=>{},
    validateEnvelopeMeta: (e)=>[],
    projectCallToolResult (e, t) {
        let r = Yn(e);
        let r_structuredContent = r.structuredContent;
        if (r_structuredContent === undefined) {
            return r;
        }
        let a = typeof r_structuredContent !== "object" || r_structuredContent === null || Array.isArray(r_structuredContent);
        let n = t !== undefined && Qn(t);
        if (!a && !n) {
            return r;
        }
        return {
            ...r,
            structuredContent: {
                result: r_structuredContent
            }
        };
    },
    decodeResult (e, t) {
        if (Qo(t) && "resultType" in t) {
            let r = {
                ...t
            };
            delete r.resultType;
            return {
                kind: "complete",
                result: Un(r)
            };
        }
        return {
            kind: "complete",
            result: Un(t)
        };
    },
    encodeResult (e, t) {
        if (e !== "tools/list") {
            return t;
        }
        let t_tools = t.tools;
        if (!Array.isArray(t_tools) || !t_tools.some((s)=>Ln(s))) {
            return t;
        }
        return {
            ...t,
            tools: t_tools.map((s)=>{
                if (Ln(s)) {
                    return {
                        ...s,
                        outputSchema: Lc(s.outputSchema)
                    };
                }
                return s;
            })
        };
    },
    encodeErrorCode: (e)=>{
        if (e === -32002) {
            return -32602;
        }
        return e;
    },
    checkInboundEnvelope: (e)=>{}
};
function Hc() {
    let e = qE(()=>Ue([
            o(),
            E(),
            M(),
            Bm(),
            ue(o(), e),
            T(e)
        ]));
    let t = ue(o(), e);
    let r = Ue([
        o(),
        E().int()
    ]);
    let s = o();
    let a = Ue([
        o(),
        E().int()
    ]);
    let n = U([
        "user",
        "assistant"
    ]);
    let i = U([
        "debug",
        "info",
        "notice",
        "warning",
        "error",
        "critical",
        "alert",
        "emergency"
    ]);
    let l = o().refine((fe)=>{
        try {
            atob(fe);
            return true;
        } catch  {
            return false;
        }
    }, {
        message: "Invalid Base64 string"
    });
    let c = u({
        ttl: E().optional()
    });
    let d = u({
        taskId: o()
    });
    let m = _t({
        progressToken: r.optional(),
        "io.modelcontextprotocol/related-task": d.optional()
    });
    let _ = u({
        _meta: m.optional()
    });
    let w = _.extend({
        task: c.optional()
    });
    let P = u({
        _meta: m.optional()
    });
    let y = u({
        method: o(),
        params: P.loose().optional()
    });
    let v = u({
        src: o(),
        mimeType: o().optional(),
        sizes: T(o()).optional(),
        theme: U([
            "light",
            "dark"
        ]).optional()
    });
    let p = u({
        icons: T(v).optional()
    });
    let h = u({
        name: o(),
        title: o().optional()
    });
    let ImplementationSchema = h.extend({
        ...h.shape,
        ...p.shape,
        version: o(),
        websiteUrl: o().optional(),
        description: o().optional()
    });
    let f = upe(u({
        applyDefaults: M().optional()
    }), t);
    let R = pa((fe)=>{
        if (fe && typeof fe === "object" && !Array.isArray(fe) && Object.keys(fe).length === 0) {
            return {
                form: {}
            };
        }
        return fe;
    }, upe(u({
        form: f.optional(),
        url: t.optional()
    }), t.optional()));
    let C = _t({
        list: t.optional(),
        cancel: t.optional(),
        requests: _t({
            sampling: _t({
                createMessage: t.optional()
            }).optional(),
            elicitation: _t({
                create: t.optional()
            }).optional()
        }).optional()
    });
    let b = _t({
        list: t.optional(),
        cancel: t.optional(),
        requests: _t({
            tools: _t({
                call: t.optional()
            }).optional()
        }).optional()
    });
    let ClientCapabilitiesSchema = u({
        experimental: ue(o(), t).optional(),
        sampling: u({
            context: t.optional(),
            tools: t.optional()
        }).optional(),
        elicitation: R.optional(),
        roots: u({
            listChanged: M().optional()
        }).optional(),
        tasks: C.optional(),
        extensions: ue(o(), t).optional()
    });
    let ServerCapabilitiesSchema = u({
        experimental: ue(o(), t).optional(),
        logging: t.optional(),
        completions: t.optional(),
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
        tasks: b.optional(),
        extensions: ue(o(), t).optional()
    });
    let L = u({
        progress: E(),
        total: Ii(E()),
        message: Ii(o())
    });
    let K = u({
        ...P.shape,
        ...L.shape,
        progressToken: r
    });
    let N = y.extend({
        method: A("notifications/progress"),
        params: K
    });
    let F = P.extend({
        level: i,
        logger: o().optional(),
        data: oe()
    });
    let W = y.extend({
        method: A("notifications/message"),
        params: F
    });
    let B = u({
        uri: o(),
        mimeType: Ii(o()),
        _meta: ue(o(), oe()).optional()
    });
    let se = B.extend({
        text: o()
    });
    let le = B.extend({
        blob: l
    });
    let ie = u({
        audience: T(n).optional(),
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
    let Se = u({
        ...h.shape,
        ...p.shape,
        uri: o(),
        description: Ii(o()),
        mimeType: Ii(o()),
        size: Ii(E()),
        annotations: ie.optional(),
        _meta: Ii(_t({}))
    });
    let ae = u({
        ...h.shape,
        ...p.shape,
        uriTemplate: o(),
        description: Ii(o()),
        mimeType: Ii(o()),
        annotations: ie.optional(),
        _meta: Ii(_t({}))
    });
    let O = y.extend({
        method: A("notifications/resources/list_changed"),
        params: P.optional()
    });
    let D = P.extend({
        uri: o()
    });
    let H = y.extend({
        method: A("notifications/resources/updated"),
        params: D
    });
    let z = u({
        name: o(),
        description: Ii(o()),
        required: Ii(M())
    });
    let I = u({
        ...h.shape,
        ...p.shape,
        description: Ii(o()),
        arguments: Ii(T(z)),
        _meta: Ii(_t({}))
    });
    let j = y.extend({
        method: A("notifications/prompts/list_changed"),
        params: P.optional()
    });
    let G = u({
        type: A("text"),
        text: o(),
        annotations: ie.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Y = u({
        type: A("image"),
        data: l,
        mimeType: o(),
        annotations: ie.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let re = u({
        type: A("audio"),
        data: l,
        mimeType: o(),
        annotations: ie.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Q = u({
        type: A("tool_use"),
        name: o(),
        id: o(),
        input: ue(o(), oe()),
        _meta: ue(o(), oe()).optional()
    });
    let ce = u({
        type: A("resource"),
        resource: Ue([
            se,
            le
        ]),
        annotations: ie.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Pe = Se.extend({
        type: A("resource_link")
    });
    let q = Ue([
        G,
        Y,
        re,
        Pe,
        ce
    ]);
    let V = u({
        role: n,
        content: q
    });
    let x = u({
        title: o().optional(),
        readOnlyHint: M().optional(),
        destructiveHint: M().optional(),
        idempotentHint: M().optional(),
        openWorldHint: M().optional()
    });
    let X = y.extend({
        method: A("notifications/tools/list_changed"),
        params: P.optional()
    });
    let Z = u({
        name: o().optional()
    });
    let ee = u({
        hints: T(Z).optional(),
        costPriority: E().min(0).max(1).optional(),
        speedPriority: E().min(0).max(1).optional(),
        intelligencePriority: E().min(0).max(1).optional()
    });
    let pe = u({
        mode: U([
            "auto",
            "required",
            "none"
        ]).optional()
    });
    let _e = u({
        type: A("boolean"),
        title: o().optional(),
        description: o().optional(),
        default: M().optional()
    });
    let Re = u({
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
    let ge = u({
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
    let de = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        enum: T(o()),
        default: o().optional()
    });
    let Oe = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        oneOf: T(u({
            const: o(),
            title: o()
        })),
        default: o().optional()
    });
    let ye = u({
        type: A("string"),
        title: o().optional(),
        description: o().optional(),
        enum: T(o()),
        enumNames: T(o()).optional(),
        default: o().optional()
    });
    let De = Ue([
        de,
        Oe
    ]);
    let Me = u({
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
    let Ve = u({
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
    let Be = Ue([
        Me,
        Ve
    ]);
    let We = Ue([
        ye,
        De,
        Be
    ]);
    let nt = Ue([
        We,
        _e,
        Re,
        ge
    ]);
    let it = w.extend({
        mode: A("form").optional(),
        message: o(),
        requestedSchema: u({
            type: A("object"),
            properties: ue(o(), nt),
            required: T(o()).optional()
        }).catchall(oe())
    });
    let ct = u({
        type: A("ref/resource"),
        uri: o()
    });
    let lt = u({
        type: A("ref/prompt"),
        name: o()
    });
    let Gt = u({
        uri: o().startsWith("file://"),
        name: o().optional(),
        _meta: ue(o(), oe()).optional()
    });
    let S_shape = ClientCapabilitiesSchema.shape;
    let ClientCapabilities2026Schema = u({
        experimental: S_shape.experimental,
        sampling: S_shape.sampling,
        elicitation: S_shape.elicitation,
        roots: S_shape.roots,
        extensions: S_shape.extensions
    });
    let k_shape = ServerCapabilitiesSchema.shape;
    let Rt = u({
        experimental: k_shape.experimental,
        logging: k_shape.logging,
        completions: k_shape.completions,
        prompts: k_shape.prompts,
        resources: k_shape.resources,
        tools: k_shape.tools,
        extensions: k_shape.extensions
    });
    let zt = _t({
        progressToken: r.optional(),
        [Fe]: o(),
        [Nt]: ImplementationSchema.optional(),
        [hOe]: ClientCapabilities2026Schema,
        [Mt]: i.optional()
    });
    let ut = u({
        ...h.shape,
        ...p.shape,
        description: o().optional(),
        inputSchema: _t({
            $schema: o().optional(),
            type: A("object")
        }),
        outputSchema: _t({
            $schema: o().optional()
        }).optional(),
        annotations: x.optional(),
        _meta: ue(o(), oe()).optional()
    });
    let Wt = u({
        type: A("tool_result"),
        toolUseId: o(),
        content: T(q),
        structuredContent: oe().optional(),
        isError: M().optional(),
        _meta: ue(o(), oe()).optional()
    });
    let wt = Ue([
        G,
        Y,
        re,
        Q,
        Wt
    ]);
    let dt = u({
        role: n,
        content: Ue([
            wt,
            T(wt)
        ]),
        _meta: ue(o(), oe()).optional()
    });
    let ResultTypeSchema = o();
    let ResultMetaSchema = _t({
        [He]: ImplementationSchema.optional().catch(undefined)
    });
    let _meta = ResultMetaSchema.optional();
    function ze(fe) {
        return _t({
            _meta,
            resultType: ResultTypeSchema.default("complete"),
            ...fe
        });
    }
    let Yt = ze({});
    let PaginatedResultSchema = ze({
        nextCursor: s.optional()
    });
    let Tt = ze({
        content: T(q),
        structuredContent: oe().optional(),
        isError: M().optional()
    });
    let Xt = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ]),
        tools: T(ut),
        nextCursor: s.optional()
    });
    let Zt = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ]),
        prompts: T(I),
        nextCursor: s.optional()
    });
    let Qt = ze({
        description: o().optional(),
        messages: T(V)
    });
    let er = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ]),
        resources: T(Se),
        nextCursor: s.optional()
    });
    let tr = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ]),
        resourceTemplates: T(ae),
        nextCursor: s.optional()
    });
    let rr = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ]),
        contents: T(Ue([
            se,
            le
        ]))
    });
    let sr = ze({
        completion: u({
            values: T(o()).max(100),
            total: E().int().optional(),
            hasMore: M().optional()
        }).loose()
    });
    let CacheableResultSchema = ze({
        ttlMs: E().int().min(0),
        cacheScope: U([
            "public",
            "private"
        ])
    });
    let DiscoverResultSchema = ze({
        ttlMs: E().int().min(0).catch(0),
        cacheScope: U([
            "public",
            "private"
        ]).catch("private"),
        supportedVersions: T(o()),
        capabilities: Rt,
        instructions: o().optional()
    });
    let Xe = u({
        messages: T(dt),
        modelPreferences: ee.optional(),
        systemPrompt: o().optional(),
        includeContext: U([
            "none",
            "thisServer",
            "allServers"
        ]).optional(),
        temperature: E().optional(),
        maxTokens: E().int(),
        stopSequences: T(o()).optional(),
        metadata: t.optional(),
        tools: T(ut).optional(),
        toolChoice: pe.optional()
    });
    let or = u({
        method: A("sampling/createMessage"),
        params: Xe
    });
    let nr = u({
        method: A("roots/list"),
        params: u({
            _meta: ue(o(), oe()).optional()
        }).optional()
    });
    let ir = u({
        ...dt.shape,
        model: o(),
        stopReason: o().optional()
    });
    let cr = u({
        roots: T(Gt)
    });
    let lr = u({
        action: U([
            "accept",
            "decline",
            "cancel"
        ]),
        content: ue(o(), Ue([
            o(),
            E(),
            M(),
            T(o())
        ])).optional()
    });
    let ur = u({
        mode: A("url"),
        message: o(),
        url: o().url()
    });
    let dr = Ue([
        it,
        ur
    ]);
    let hr = u({
        method: A("elicitation/create"),
        params: dr
    });
    let InputRequestSchema = Ue([
        or,
        nr,
        hr
    ]);
    let InputResponseSchema = Ue([
        ir,
        cr,
        lr
    ]);
    let InputRequestsSchema = ue(o(), InputRequestSchema);
    let InputResponsesSchema = ue(o(), InputResponseSchema);
    let InputRequiredResultSchema = ze({
        inputRequests: InputRequestsSchema.optional(),
        requestState: o().optional()
    });
    let mt = {
        inputResponses: InputResponsesSchema.optional(),
        requestState: o().optional()
    };
    let InputResponseRequestParamsSchema = u({
        _meta: zt,
        ...mt
    });
    let us = _t({
        progressToken: r.optional()
    });
    function ke(fe, ft) {
        return u({
            method: A(fe),
            params: u({
                _meta: zt,
                ...ft
            })
        });
    }
    function qe(fe, ft) {
        return u({
            method: A(fe),
            params: u({
                _meta: us.optional(),
                ...ft
            }).optional()
        });
    }
    let gr = {
        name: o(),
        arguments: ue(o(), oe()).optional(),
        ...mt
    };
    let je = {
        cursor: s.optional()
    };
    let CallToolRequestSchema = ke("tools/call", gr);
    let ListToolsRequestSchema = ke("tools/list", je);
    let ListPromptsRequestSchema = ke("prompts/list", je);
    let GetPromptRequestSchema = ke("prompts/get", {
        name: o(),
        arguments: ue(o(), o()).optional(),
        ...mt
    });
    let ListResourcesRequestSchema = ke("resources/list", je);
    let ListResourceTemplatesRequestSchema = ke("resources/templates/list", je);
    let ReadResourceRequestSchema = ke("resources/read", {
        uri: o(),
        ...mt
    });
    let _r = {
        ref: Ue([
            lt,
            ct
        ]),
        argument: u({
            name: o(),
            value: o()
        }),
        context: u({
            arguments: ue(o(), o()).optional()
        }).optional()
    };
    let CompleteRequestSchema = ke("completion/complete", _r);
    let DiscoverRequestSchema = ke("server/discover", {});
    let Ct = u({
        toolsListChanged: M().optional(),
        promptsListChanged: M().optional(),
        resourcesListChanged: M().optional(),
        resourceSubscriptions: T(o()).optional()
    });
    let yr = {
        notifications: Ct
    };
    let SubscriptionsListenRequestSchema = ke("subscriptions/listen", yr);
    let bs = ResultMetaSchema.extend({
        "io.modelcontextprotocol/subscriptionId": a
    });
    let SubscriptionsListenResultSchema = _t({
        _meta: bs,
        resultType: ResultTypeSchema.default("complete")
    });
    let dispatchRequestSchemas = {
        "tools/call": qe("tools/call", gr),
        "tools/list": qe("tools/list", je),
        "prompts/get": qe("prompts/get", {
            name: o(),
            arguments: ue(o(), o()).optional()
        }),
        "prompts/list": qe("prompts/list", je),
        "resources/list": qe("resources/list", je),
        "resources/templates/list": qe("resources/templates/list", je),
        "resources/read": qe("resources/read", {
            uri: o()
        }),
        "completion/complete": qe("completion/complete", _r),
        "server/discover": qe("server/discover", {}),
        "subscriptions/listen": qe("subscriptions/listen", yr)
    };
    function Te(fe) {
        return _t({
            _meta,
            ...fe
        });
    }
    let dispatchResultSchemas = {
        "tools/call": Te({
            content: T(q),
            structuredContent: oe().optional(),
            isError: M().optional()
        }),
        "tools/list": Te({
            ttlMs: E().int().min(0),
            cacheScope: U([
                "public",
                "private"
            ]),
            tools: T(ut),
            nextCursor: s.optional()
        }),
        "prompts/get": Te({
            description: o().optional(),
            messages: T(V)
        }),
        "prompts/list": Te({
            ttlMs: E().int().min(0),
            cacheScope: U([
                "public",
                "private"
            ]),
            prompts: T(I),
            nextCursor: s.optional()
        }),
        "resources/list": Te({
            ttlMs: E().int().min(0),
            cacheScope: U([
                "public",
                "private"
            ]),
            resources: T(Se),
            nextCursor: s.optional()
        }),
        "resources/templates/list": Te({
            ttlMs: E().int().min(0),
            cacheScope: U([
                "public",
                "private"
            ]),
            resourceTemplates: T(ae),
            nextCursor: s.optional()
        }),
        "resources/read": Te({
            ttlMs: E().int().min(0),
            cacheScope: U([
                "public",
                "private"
            ]),
            contents: T(Ue([
                se,
                le
            ]))
        }),
        "completion/complete": Te({
            completion: u({
                values: T(o()).max(100),
                total: E().int().optional(),
                hasMore: M().optional()
            }).loose()
        }),
        "server/discover": Te({
            ttlMs: E().int().min(0).catch(0),
            cacheScope: U([
                "public",
                "private"
            ]).catch("private"),
            supportedVersions: T(o()),
            capabilities: Rt,
            instructions: o().optional()
        }),
        "subscriptions/listen": Te({})
    };
    let NotificationMetaSchema = _t({
        "io.modelcontextprotocol/subscriptionId": a.optional()
    });
    let SubscriptionsAcknowledgedNotificationSchema = u({
        method: A("notifications/subscriptions/acknowledged"),
        params: u({
            _meta: NotificationMetaSchema.optional(),
            notifications: Ct
        })
    });
    let qt = u({
        _meta: NotificationMetaSchema.optional(),
        requestId: a,
        reason: o().optional()
    });
    let It = u({
        method: A("notifications/cancelled"),
        params: qt
    });
    let notificationSchemas2026 = {
        "notifications/cancelled": It,
        "notifications/progress": N,
        "notifications/message": W,
        "notifications/resources/updated": H,
        "notifications/resources/list_changed": O,
        "notifications/tools/list_changed": X,
        "notifications/prompts/list_changed": j,
        "notifications/subscriptions/acknowledged": SubscriptionsAcknowledgedNotificationSchema
    };
    let Ce = (result)=>u({
            jsonrpc: A("2.0"),
            id: Ue([
                o(),
                E().int()
            ]),
            result
        }).strict();
    return {
        JSONValueSchema: e,
        JSONObjectSchema: t,
        ProgressTokenSchema: r,
        CursorSchema: s,
        RequestIdSchema: a,
        RoleSchema: n,
        LoggingLevelSchema: i,
        TaskMetadataSchema: c,
        RelatedTaskMetadataSchema: d,
        RequestMetaSchema: m,
        BaseRequestParamsSchema: _,
        TaskAugmentedRequestParamsSchema: w,
        NotificationsParamsSchema: P,
        NotificationSchema: y,
        IconSchema: v,
        IconsSchema: p,
        BaseMetadataSchema: h,
        ImplementationSchema,
        ClientTasksCapabilitySchema: C,
        ServerTasksCapabilitySchema: b,
        ClientCapabilitiesSchema,
        ServerCapabilitiesSchema,
        ProgressSchema: L,
        ProgressNotificationParamsSchema: K,
        ProgressNotificationSchema: N,
        LoggingMessageNotificationParamsSchema: F,
        LoggingMessageNotificationSchema: W,
        ResourceContentsSchema: B,
        TextResourceContentsSchema: se,
        BlobResourceContentsSchema: le,
        AnnotationsSchema: ie,
        ResourceSchema: Se,
        ResourceTemplateSchema: ae,
        ResourceListChangedNotificationSchema: O,
        ResourceUpdatedNotificationParamsSchema: D,
        ResourceUpdatedNotificationSchema: H,
        PromptArgumentSchema: z,
        PromptSchema: I,
        PromptListChangedNotificationSchema: j,
        TextContentSchema: G,
        ImageContentSchema: Y,
        AudioContentSchema: re,
        ToolUseContentSchema: Q,
        EmbeddedResourceSchema: ce,
        ResourceLinkSchema: Pe,
        ContentBlockSchema: q,
        PromptMessageSchema: V,
        ToolAnnotationsSchema: x,
        ToolListChangedNotificationSchema: X,
        ModelHintSchema: Z,
        ModelPreferencesSchema: ee,
        ToolChoiceSchema: pe,
        BooleanSchemaSchema: _e,
        StringSchemaSchema: Re,
        NumberSchemaSchema: ge,
        UntitledSingleSelectEnumSchemaSchema: de,
        TitledSingleSelectEnumSchemaSchema: Oe,
        LegacyTitledEnumSchemaSchema: ye,
        SingleSelectEnumSchemaSchema: De,
        UntitledMultiSelectEnumSchemaSchema: Me,
        TitledMultiSelectEnumSchemaSchema: Ve,
        MultiSelectEnumSchemaSchema: Be,
        EnumSchemaSchema: We,
        PrimitiveSchemaDefinitionSchema: nt,
        ElicitRequestFormParamsSchema: it,
        ResourceTemplateReferenceSchema: ct,
        PromptReferenceSchema: lt,
        RootSchema: Gt,
        ClientCapabilities2026Schema,
        ServerCapabilities2026Schema: Rt,
        RequestMetaEnvelopeSchema: zt,
        ToolSchema: ut,
        ToolResultContentSchema: Wt,
        SamplingMessageContentBlockSchema: wt,
        SamplingMessageSchema: dt,
        ResultTypeSchema,
        ResultMetaSchema,
        ResultSchema: Yt,
        PaginatedResultSchema,
        CallToolResultSchema: Tt,
        ListToolsResultSchema: Xt,
        ListPromptsResultSchema: Zt,
        GetPromptResultSchema: Qt,
        ListResourcesResultSchema: er,
        ListResourceTemplatesResultSchema: tr,
        ReadResourceResultSchema: rr,
        CompleteResultSchema: sr,
        CacheableResultSchema,
        DiscoverResultSchema,
        CreateMessageRequestParamsSchema: Xe,
        CreateMessageRequestSchema: or,
        ListRootsRequestSchema: nr,
        CreateMessageResultSchema: ir,
        ListRootsResultSchema: cr,
        ElicitResultSchema: lr,
        ElicitRequestURLParamsSchema: ur,
        ElicitRequestParamsSchema: dr,
        ElicitRequestSchema: hr,
        InputRequestSchema,
        InputResponseSchema,
        InputRequestsSchema,
        InputResponsesSchema,
        InputRequiredResultSchema,
        InputResponseRequestParamsSchema,
        CallToolRequestSchema,
        ListToolsRequestSchema,
        ListPromptsRequestSchema,
        GetPromptRequestSchema,
        ListResourcesRequestSchema,
        ListResourceTemplatesRequestSchema,
        ReadResourceRequestSchema,
        CompleteRequestSchema,
        DiscoverRequestSchema,
        SubscriptionFilterSchema: Ct,
        SubscriptionsListenRequestSchema,
        SubscriptionsListenResultMetaSchema: bs,
        SubscriptionsListenResultSchema,
        dispatchRequestSchemas,
        dispatchResultSchemas,
        NotificationMetaSchema,
        SubscriptionsAcknowledgedNotificationSchema,
        CancelledNotificationParamsSchema: qt,
        CancelledNotificationSchema: It,
        notificationSchemas2026,
        JSONRPCResultResponseSchema: Ce(Yt),
        CallToolResultResponseSchema: Ce(Ue([
            Tt,
            InputRequiredResultSchema
        ])),
        ListToolsResultResponseSchema: Ce(Xt),
        ListPromptsResultResponseSchema: Ce(Zt),
        GetPromptResultResponseSchema: Ce(Ue([
            Qt,
            InputRequiredResultSchema
        ])),
        ListResourcesResultResponseSchema: Ce(er),
        ListResourceTemplatesResultResponseSchema: Ce(tr),
        ReadResourceResultResponseSchema: Ce(Ue([
            rr,
            InputRequiredResultSchema
        ])),
        CompleteResultResponseSchema: Ce(sr),
        DiscoverResultResponseSchema: Ce(DiscoverResultSchema)
    };
}
let Kc;
function vt() {
    return Kc ??= Hc();
}
const Jc = [
    "tools/list",
    "prompts/list",
    "resources/list",
    "resources/templates/list",
    "resources/read",
    "server/discover"
];
function Gc(e) {
    return Jc.includes(e);
}
const cn = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Bc(e) {
    return e[cn];
}
function ai(ttlMs) {
    return typeof ttlMs === "number" && Number.isSafeInteger(ttlMs) && ttlMs >= 0;
}
function oi(cacheScope) {
    return cacheScope === "public" || cacheScope === "private";
}
const pi = {
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
    ResourceNotFound: -32002,
    [-32002]: "ResourceNotFound",
    MissingRequiredClientCapability: -32021,
    [-32021]: "MissingRequiredClientCapability",
    UnsupportedProtocolVersion: -32022,
    [-32022]: "UnsupportedProtocolVersion",
    UrlElicitationRequired: -32042,
    [-32042]: "UrlElicitationRequired"
};
const Ol = class e extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.ProtocolError"
        });
    }
    static [Symbol.hasInstance](t) {
        return Ie(this, t);
    }
    static isInstance(t) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, t);
    }
    constructor(t, r, s){
        super(r);
        this.code = t;
        this.data = s;
        this.name = "ProtocolError";
        bt(this, new.target);
    }
    static fromError(t, r, s) {
        if (t === pi.UrlElicitationRequired && s) {
            let a = s;
            if (a.elicitations) {
                return new ii(a.elicitations, r);
            }
        }
        if (t === pi.UnsupportedProtocolVersion && s) {
            let a = s;
            if (Array.isArray(a.supported) && typeof a.requested === "string") {
                return new co({
                    supported: a.supported,
                    requested: a.requested
                }, r);
            }
        }
        if (t === pi.InvalidParams || t === pi.ResourceNotFound) {
            let a = s;
            if (typeof a?.uri === "string" && (t === pi.ResourceNotFound || Object.keys(a).length === 1)) {
                return new ni(a.uri, r);
            }
        }
        if (t === pi.MissingRequiredClientCapability && s) {
            let a = s;
            if (a.requiredCapabilities !== null && typeof a.requiredCapabilities === "object" && !Array.isArray(a.requiredCapabilities)) {
                return new ci({
                    requiredCapabilities: a.requiredCapabilities
                }, r);
            }
        }
        return new e(t, r, s);
    }
};
var ni = class extends Ol {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.ResourceNotFoundError"
        });
    }
    constructor(uri, t = `Resource not found: ${uri}`){
        super(pi.InvalidParams, t, {
            uri
        });
    }
    get uri() {
        return this.data.uri;
    }
};
var ii = class extends Ol {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.UrlElicitationRequiredError"
        });
    }
    constructor(elicitations, t = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`){
        super(pi.UrlElicitationRequired, t, {
            elicitations
        });
    }
    get elicitations() {
        return this.data?.elicitations ?? [];
    }
};
var co = class extends Ol {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.UnsupportedProtocolVersionError"
        });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`){
        super(pi.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
        return this.data.supported;
    }
    get requested() {
        return this.data.requested;
    }
};
var ci = class extends Ol {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.MissingRequiredClientCapabilityError"
        });
    }
    constructor(e, t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`){
        super(pi.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
        return this.data.requiredCapabilities;
    }
};
const Wc = 0;
const Yc = "private";
const Xc = [
    "tools/call",
    "prompts/get",
    "resources/read"
];
function Zc(e, t) {
    let t_resultType = t.resultType;
    if (t_resultType === undefined) {
        return {
            ...t,
            resultType: "complete"
        };
    }
    if (t_resultType === "complete") {
        return t;
    }
    if (Xc.includes(e)) {
        return t;
    }
    throw new Ol(pi.InternalError, `Handler for ${e} returned resultType '${String(t_resultType)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`);
}
function Qc(e, t) {
    let r = Bc(t);
    if (t.resultType !== "complete" || !Gc(e)) {
        if (r === undefined) {
            return t;
        }
        return al(t);
    }
    let s = t;
    let ttlMs = ai(s.ttlMs) ? s.ttlMs : rl(r);
    let cacheScope = oi(s.cacheScope) ? s.cacheScope : sl(r);
    let i = {
        ...s,
        ttlMs,
        cacheScope
    };
    delete i[cn];
    return i;
}
function el(e__meta) {
    return e__meta !== null && typeof e__meta === "object" && !Array.isArray(e__meta);
}
function tl(e, t) {
    if (t === undefined) {
        return e;
    }
    let e__meta = e._meta;
    if (e__meta === undefined) {
        return {
            ...e,
            _meta: {
                [He]: t
            }
        };
    }
    if (!el(e__meta)) {
        return e;
    }
    if (e__meta[He] !== undefined) {
        return e;
    }
    return {
        ...e,
        _meta: {
            ...e__meta,
            [He]: t
        }
    };
}
function rl(e) {
    if (e !== undefined && ai(e.ttlMs)) {
        return e.ttlMs;
    }
    return Wc;
}
function sl(e) {
    if (e !== undefined && oi(e.cacheScope)) {
        return e.cacheScope;
    }
    return Yc;
}
function al(e) {
    let t = {
        ...e
    };
    delete t[cn];
    return t;
}
const ol = [
    "elicitation/create",
    "sampling/createMessage",
    "roots/list"
];
let ao;
function li() {
    if (ao) {
        return ao;
    }
    let e = vt();
    ao = {
        request: {
            "elicitation/create": u({
                method: A("elicitation/create"),
                params: e.ElicitRequestParamsSchema
            }),
            "sampling/createMessage": u({
                method: A("sampling/createMessage"),
                params: e.CreateMessageRequestParamsSchema
            }),
            "roots/list": u({
                method: A("roots/list"),
                params: _t({}).optional()
            })
        },
        response: {
            "elicitation/create": e.ElicitResultSchema,
            "sampling/createMessage": e.CreateMessageResultSchema,
            "roots/list": e.ListRootsResultSchema
        }
    };
    return ao;
}
function ui(e) {
    return ol.includes(e);
}
function inputRequestSchema(e) {
    if (ui(e)) {
        return li().request[e];
    }
}
function nl(e) {
    if (ui(e)) {
        return li().response[e];
    }
}
const ln = {
    "tools/call": null,
    "tools/list": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "completion/complete": null,
    "server/discover": null,
    "subscriptions/listen": null
};
const di = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/subscriptions/acknowledged": null
};
function hi(e) {
    return Object.prototype.hasOwnProperty.call(ln, e);
}
function mi(e) {
    return Object.prototype.hasOwnProperty.call(di, e);
}
function il(e) {
    return Object.prototype.hasOwnProperty.call(ln, e);
}
function cl(e) {
    if (hi(e)) {
        return vt().dispatchRequestSchemas[e];
    }
}
function ll(e) {
    if (il(e)) {
        return vt().dispatchResultSchemas[e];
    }
}
function ul(e) {
    if (mi(e)) {
        return vt().notificationSchemas2026[e];
    }
}
const Ch = Object.keys(ln);
const kh = Object.keys(di);
function Zr(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Yr(e, t) {
    if (e === undefined) {
        return {
            ok: false,
            reason: "not-in-era"
        };
    }
    let r = e.safeParse(t);
    if (r.success) {
        return {
            ok: true,
            value: r.data
        };
    }
    return {
        ok: false,
        reason: "invalid",
        message: String(r.error)
    };
}
const dl = {
    ok: false,
    reason: "not-in-era"
};
const hl = [
    Fe,
    hOe
];
function ml(e, t) {
    let r = t;
    let s = false;
    let a = ()=>{
        if (!s) {
            r = {
                ...r
            };
            s = true;
        }
        return r;
    };
    let t_tools = t.tools;
    if (e === "tools/list" && Array.isArray(t_tools) && t_tools.some((l)=>Zr(l) && "execution" in l)) {
        a().tools = t_tools.map((l)=>{
            if (!Zr(l) || !("execution" in l)) {
                return l;
            }
            let c = {
                ...l
            };
            delete c.execution;
            return c;
        });
    }
    let t_capabilities = t.capabilities;
    if (Zr(t_capabilities) && "tasks" in t_capabilities) {
        let l = {
            ...t_capabilities
        };
        delete l.tasks;
        a().capabilities = l;
    }
    return r;
}
const pl = "io.modelcontextprotocol/tasks";
const fl = new Set([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
]);
function Sl(result) {
    if (result === null || typeof result !== "object" || Array.isArray(result)) {
        return false;
    }
    return typeof result.taskId === "string" && result.taskId.length > 0 && fl.has(result.status) && typeof result.createdAt === "string" && typeof result.lastUpdatedAt === "string" && (result.ttlMs === null || typeof result.ttlMs === "number") && (result.pollIntervalMs === undefined || typeof result.pollIntervalMs === "number");
}
const un = {
    era: "2026-07-28",
    hasRequestMethod: hi,
    hasNotificationMethod: mi,
    hasInputRequestMethod: (e)=>inputRequestSchema(e) !== undefined,
    validateRequest: (e, t)=>Yr(cl(e), t),
    validateResult: (e, t)=>Yr(ll(e), t),
    validateNotification: (e, t)=>Yr(ul(e), t),
    validateInputRequest: (e, t)=>Yr(inputRequestSchema(e), t),
    validateInputResponse: (e, t)=>Yr(nl(e), t),
    samplingResultVariant: ()=>dl,
    outboundEnvelope (e) {
        return {
            [Fe]: e.protocolVersion,
            [Nt]: e.clientInfo,
            [hOe]: e.clientCapabilities,
            ...e.logLevel !== undefined && {
                [Mt]: e.logLevel
            }
        };
    },
    validateEnvelopeMeta (e) {
        let t = [];
        for (let s of hl){
            if (!(s in e)) {
                t.push({
                    key: s,
                    problem: "missing"
                });
            }
        }
        let r = vt().RequestMetaEnvelopeSchema.safeParse(e);
        if (!r.success) {
            for (let s of r.error.issues){
                let a = s.path.map(String);
                let n = a.length > 0 ? a.join(".") : "_meta";
                if (a.length === 1 && t.some((i)=>i.key === n && i.problem === "missing")) {
                    continue;
                }
                t.push({
                    key: n,
                    problem: s.message
                });
            }
        }
        return t;
    },
    projectCallToolResult: (e)=>Yn(e),
    inputRequestSchema,
    decodeResult (e, t) {
        if (!Zr(t)) {
            return {
                kind: "invalid",
                error: new Hs(Ts.InvalidResult, `Invalid result for ${e}: not an object`, {
                    method: e
                })
            };
        }
        let t_resultType = t.resultType;
        if (t_resultType === undefined) {
            return {
                kind: "invalid",
                error: new Hs(Ts.InvalidResult, `Invalid result for ${e}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
                    method: e,
                    violation: "missing-resultType"
                })
            };
        }
        if (typeof t_resultType !== "string") {
            return {
                kind: "invalid",
                error: new Hs(Ts.InvalidResult, `Invalid result for ${e}: non-string resultType`, {
                    method: e,
                    resultType: t_resultType
                })
            };
        }
        if (t_resultType === "input_required") {
            let i = t.inputRequests;
            let inputRequests = Zr(i) ? i : {};
            let requestState = t.requestState;
            if (Object.keys(inputRequests).length === 0 && typeof requestState !== "string") {
                return {
                    kind: "invalid",
                    error: new Hs(Ts.InvalidResult, `Invalid result for ${e}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
                        method: e,
                        violation: "input-required-missing-both"
                    })
                };
            }
            return {
                kind: "input_required",
                inputRequests,
                ...typeof requestState === "string" && {
                    requestState
                }
            };
        }
        if (t_resultType === "task") {
            return {
                kind: "task",
                result: t
            };
        }
        if (t_resultType !== "complete") {
            return {
                kind: "invalid",
                error: new Hs(Ts.UnsupportedResultType, `Unsupported result type '${t_resultType}' for ${e}`, {
                    resultType: t_resultType,
                    method: e
                })
            };
        }
        let s = gl();
        let a = Object.hasOwn(s, e) ? s[e] : undefined;
        if (a !== undefined) {
            let i = a.safeParse(t);
            if (!i.success) {
                return {
                    kind: "invalid",
                    error: new Hs(Ts.InvalidResult, `Invalid result for ${e}: ${i.error}`, {
                        method: e
                    })
                };
            }
        }
        let n = {
            ...t
        };
        delete n.resultType;
        return {
            kind: "complete",
            result: n
        };
    },
    encodeResult (e, t, r) {
        return tl(Qc(e, Zc(e, ml(e, t))), r);
    },
    encodeErrorCode: (e)=>{
        if (e === -32002) {
            return -32602;
        }
        return e;
    },
    checkInboundEnvelope (e) {
        if (e.envelope === undefined) {
            return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
        }
        let t = vt().RequestMetaEnvelopeSchema.safeParse(e.envelope);
        if (!t.success) {
            return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((r)=>r.message).join("; ")}`;
        }
    }
};
var oo;
function gl() {
    if (oo) {
        return oo;
    }
    let e = vt();
    oo = {
        "tools/call": e.CallToolResultSchema,
        "tools/list": e.ListToolsResultSchema,
        "prompts/get": e.GetPromptResultSchema,
        "prompts/list": e.ListPromptsResultSchema,
        "resources/list": e.ListResourcesResultSchema,
        "resources/templates/list": e.ListResourceTemplatesResultSchema,
        "resources/read": e.ReadResourceResultSchema,
        "completion/complete": e.CompleteResultSchema,
        "server/discover": e.DiscoverResultSchema
    };
    return oo;
}
const lo = "2026-07-28";
function Je(e) {
    if (e !== undefined && Ge(e)) {
        return un;
    }
    return nn;
}
function Dn(classification) {
    if (classification.revision !== undefined) {
        return Je(classification.revision).era;
    }
    if (classification.era === "modern") {
        return un.era;
    }
    return nn.era;
}
function Wo(e) {
    return fi.some((t)=>t.hasRequestMethod(e));
}
function Yo(e) {
    return fi.some((t)=>t.hasNotificationMethod(e));
}
var fi = [
    nn,
    un
];
const _l = Tn({
    AnnotationsSchema: ()=>Ke,
    AudioContentSchema: ()=>Vt,
    BaseMetadataSchema: ()=>xe,
    BaseRequestParamsSchema: ()=>be,
    BlobResourceContentsSchema: ()=>Mr,
    BooleanSchemaSchema: ()=>Dr,
    CallToolRequestParamsSchema: ()=>fa,
    CallToolRequestSchema: ()=>Sa,
    CallToolResultSchema: ()=>Ar,
    CancelTaskRequestSchema: ()=>Lo,
    CancelTaskResultSchema: ()=>Uo,
    CancelledNotificationParamsSchema: ()=>$s,
    CancelledNotificationSchema: ()=>Tr,
    ClientCapabilitiesSchema: ()=>capabilities,
    ClientNotificationSchema: ()=>Vo,
    ClientRequestSchema: ()=>Do,
    ClientResultSchema: ()=>xo,
    ClientTasksCapabilitySchema: ()=>Ps,
    CompatibilityCallToolResultSchema: ()=>c1t,
    CompleteRequestParamsSchema: ()=>Va,
    CompleteRequestSchema: ()=>xa,
    CompleteResultSchema: ()=>Fa,
    ContentBlockSchema: ()=>xt,
    CreateMessageRequestParamsSchema: ()=>Ta,
    CreateMessageRequestSchema: ()=>Ca,
    CreateMessageResultSchema: ()=>ka,
    CreateMessageResultWithToolsSchema: ()=>qa,
    CreateTaskResultSchema: ()=>ko,
    CursorSchema: ()=>Rr,
    DiscoverRequestSchema: ()=>Is,
    DiscoverResultSchema: ()=>AWe,
    ElicitRequestFormParamsSchema: ()=>Kt,
    ElicitRequestParamsSchema: ()=>u1t,
    ElicitRequestSchema: ()=>Ma,
    ElicitRequestURLParamsSchema: ()=>d1t,
    ElicitResultSchema: ()=>La,
    ElicitationCompleteNotificationParamsSchema: ()=>ja,
    ElicitationCompleteNotificationSchema: ()=>Aa,
    EmbeddedResourceSchema: ()=>na,
    EmptyResultSchema: ()=>Pr,
    EnumSchemaSchema: ()=>Na,
    GetPromptRequestParamsSchema: ()=>sa,
    GetPromptRequestSchema: ()=>aa,
    GetPromptResultSchema: ()=>la,
    GetTaskPayloadRequestSchema: ()=>No,
    GetTaskPayloadResultSchema: ()=>Mo,
    GetTaskRequestSchema: ()=>Io,
    GetTaskResultSchema: ()=>Oo,
    IconSchema: ()=>Es,
    IconsSchema: ()=>tt,
    ImageContentSchema: ()=>Dt,
    ImplementationSchema: ()=>bQe,
    InitializeRequestParamsSchema: ()=>qs,
    InitializeRequestSchema: ()=>Cr,
    InitializeResultSchema: ()=>SQe,
    InitializedNotificationSchema: ()=>kr,
    JSONArraySchema: ()=>Eo,
    JSONObjectSchema: ()=>he,
    JSONRPCErrorResponseSchema: ()=>At,
    JSONRPCMessageSchema: ()=>Gee,
    JSONRPCNotificationSchema: ()=>Er,
    JSONRPCRequestSchema: ()=>$r,
    JSONRPCResponseSchema: ()=>Po,
    JSONRPCResultResponseSchema: ()=>jt,
    JSONValueSchema: ()=>Qe,
    LegacyTitledEnumSchemaSchema: ()=>Fr,
    ListChangedOptionsBaseSchema: ()=>Lr,
    ListPromptsRequestSchema: ()=>ra,
    ListPromptsResultSchema: ()=>l1t,
    ListResourceTemplatesRequestSchema: ()=>As,
    ListResourceTemplatesResultSchema: ()=>i1t,
    ListResourcesRequestSchema: ()=>js,
    ListResourcesResultSchema: ()=>CWe,
    ListRootsRequestSchema: ()=>Ka,
    ListRootsResultSchema: ()=>Ja,
    ListTasksRequestSchema: ()=>jo,
    ListTasksResultSchema: ()=>Ao,
    ListToolsRequestSchema: ()=>ma,
    ListToolsResultSchema: ()=>RWe,
    LoggingLevelSchema: ()=>level,
    LoggingMessageNotificationParamsSchema: ()=>va,
    LoggingMessageNotificationSchema: ()=>ba,
    ModelHintSchema: ()=>Ra,
    ModelPreferencesSchema: ()=>za,
    MultiSelectEnumSchemaSchema: ()=>Oa,
    NotificationSchema: ()=>Ee,
    NotificationsParamsSchema: ()=>$e,
    NumberSchemaSchema: ()=>Ht,
    PaginatedRequestParamsSchema: ()=>Ms,
    PaginatedRequestSchema: ()=>rt,
    PaginatedResultSchema: ()=>st,
    PingRequestSchema: ()=>qr,
    PrimitiveSchemaDefinitionSchema: ()=>Jr,
    ProgressNotificationParamsSchema: ()=>Ns,
    ProgressNotificationSchema: ()=>Ir,
    ProgressSchema: ()=>Os,
    ProgressTokenSchema: ()=>progressToken,
    PromptArgumentSchema: ()=>ta,
    PromptListChangedNotificationSchema: ()=>ua,
    PromptMessageSchema: ()=>ca,
    PromptReferenceSchema: ()=>Da,
    PromptSchema: ()=>a1t,
    ReadResourceRequestParamsSchema: ()=>Ls,
    ReadResourceRequestSchema: ()=>Us,
    ReadResourceResultSchema: ()=>Ds,
    RelatedTaskMetadataSchema: ()=>o1t,
    RequestIdSchema: ()=>et,
    RequestMetaSchema: ()=>zr,
    RequestSchema: ()=>me,
    ResourceContentsSchema: ()=>Or,
    ResourceLinkSchema: ()=>ia,
    ResourceListChangedNotificationSchema: ()=>Vs,
    ResourceRequestParamsSchema: ()=>Lt,
    ResourceSchema: ()=>qht,
    ResourceTemplateReferenceSchema: ()=>Ua,
    ResourceTemplateSchema: ()=>s1t,
    ResourceUpdatedNotificationParamsSchema: ()=>Qs,
    ResourceUpdatedNotificationSchema: ()=>ea,
    ResultMetaObjectSchema: ()=>wr,
    ResultSchema: ()=>ax,
    RoleSchema: ()=>role,
    RootSchema: ()=>Ha,
    RootsListChangedNotificationSchema: ()=>Ga,
    SamplingContentSchema: ()=>Ea,
    SamplingMessageContentBlockSchema: ()=>St,
    SamplingMessageSchema: ()=>Pa,
    ServerCapabilitiesSchema: ()=>Vht,
    ServerNotificationSchema: ()=>Ho,
    ServerRequestSchema: ()=>Fo,
    ServerResultSchema: ()=>Ko,
    ServerTasksCapabilitySchema: ()=>Cs,
    SetLevelRequestParamsSchema: ()=>_a,
    SetLevelRequestSchema: ()=>ya,
    SingleSelectEnumSchemaSchema: ()=>Ia,
    StringSchemaSchema: ()=>Ft,
    SubscribeRequestParamsSchema: ()=>xs,
    SubscribeRequestSchema: ()=>Fs,
    SubscriptionFilterSchema: ()=>notifications,
    SubscriptionsAcknowledgedNotificationParamsSchema: ()=>Ws,
    SubscriptionsAcknowledgedNotificationSchema: ()=>Ys,
    SubscriptionsListenRequestParamsSchema: ()=>Gs,
    SubscriptionsListenRequestSchema: ()=>Bs,
    SubscriptionsListenResultMetaSchema: ()=>_meta,
    SubscriptionsListenResultSchema: ()=>Zs,
    TaskAugmentedRequestParamsSchema: ()=>yt,
    TaskCreationParamsSchema: ()=>Co,
    TaskMetadataSchema: ()=>ws,
    TaskSchema: ()=>task,
    TaskStatusNotificationParamsSchema: ()=>Wa,
    TaskStatusNotificationSchema: ()=>qo,
    TaskStatusSchema: ()=>status,
    TextContentSchema: ()=>Ut,
    TextResourceContentsSchema: ()=>Nr,
    TitledMultiSelectEnumSchemaSchema: ()=>Kr,
    TitledSingleSelectEnumSchemaSchema: ()=>xr,
    ToolAnnotationsSchema: ()=>da,
    ToolChoiceSchema: ()=>wa,
    ToolExecutionSchema: ()=>ha,
    ToolListChangedNotificationSchema: ()=>ga,
    ToolResultContentSchema: ()=>$a,
    ToolSchema: ()=>Kht,
    ToolUseContentSchema: ()=>oa,
    UnsubscribeRequestParamsSchema: ()=>Ks,
    UnsubscribeRequestSchema: ()=>Js,
    UntitledMultiSelectEnumSchemaSchema: ()=>Hr,
    UntitledSingleSelectEnumSchemaSchema: ()=>Vr
});
const aX = (e)=>$r.safeParse(e).success;
const h9n = (e)=>Er.safeParse(e).success;
const Xve = (e)=>jt.safeParse(e).success;
const mme = (e)=>At.safeParse(e).success;
const Si = (e)=>typeof e === "object" && e !== null && !Array.isArray(e) && e.resultType === "input_required";
const dn = (e)=>Cr.safeParse(e).success;
const y9n = (e)=>kr.safeParse(e).success;
const yl = "Mcp-Param-";
const Vn = "x-mcp-header";
const vl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const bl = new Set([
    "string",
    "integer",
    "boolean",
    "number"
]);
function hn(inputSchema) {
    let declarations = [];
    let r = new Map;
    let s = (n, path, l)=>{
        if (n === null || typeof n !== "object") {
            return;
        }
        let c = n;
        if (Vn in c) {
            if (!l || path.length === 0) {
                return `${no(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
            }
            let headerName = c[Vn];
            if (typeof headerName !== "string" || headerName.length === 0) {
                return `${no(path)}: x-mcp-header MUST be a non-empty string`;
            }
            if (!vl.test(headerName)) {
                return `${no(path)}: x-mcp-header '${headerName}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
            }
            let _ = typeof c.type === "string" ? c.type : undefined;
            if (_ === undefined || !bl.has(_)) {
                return `${no(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${_ ?? "<none>"}`;
            }
            let w = headerName.toLowerCase();
            let P = r.get(w);
            if (P !== undefined) {
                return `x-mcp-header '${headerName}' is not case-insensitively unique (also declared as '${P}')`;
            }
            r.set(w, headerName);
            declarations.push({
                path,
                headerName,
                type: _
            });
        }
        let c_properties = c.properties;
        if (c_properties !== null && typeof c_properties === "object") {
            for (let [m, _] of Object.entries(c_properties)){
                let w = s(_, [
                    ...path,
                    m
                ], l);
                if (w !== undefined) {
                    return w;
                }
            }
        }
        for (let m of Rl){
            let _ = c[m];
            if (_ === undefined) {
                continue;
            }
            let w = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && zl.has(m) ? Object.values(_) : [
                _
            ];
            for (let P of w){
                let y = s(P, [
                    ...path,
                    `<${m}>`
                ], false);
                if (y !== undefined) {
                    return y;
                }
            }
        }
    };
    let reason = s(inputSchema, [], true);
    if (reason === undefined) {
        return {
            valid: true,
            declarations
        };
    }
    return {
        valid: false,
        reason
    };
}
var Rl = [
    "items",
    "prefixItems",
    "contains",
    "additionalProperties",
    "unevaluatedProperties",
    "unevaluatedItems",
    "propertyNames",
    "patternProperties",
    "dependentSchemas",
    "oneOf",
    "anyOf",
    "allOf",
    "not",
    "if",
    "then",
    "else",
    "$defs",
    "definitions"
];
var zl = new Set([
    "patternProperties",
    "dependentSchemas",
    "$defs",
    "definitions"
]);
function no(path) {
    if (path.length === 0) {
        return "<root>";
    }
    return path.join(".");
}
const gi = "=?base64?";
const _i = "?=";
function wl(e) {
    if (typeof e === "string") {
        return e;
    }
    if (typeof e === "boolean") {
        if (e) {
            return "true";
        }
        return "false";
    }
    if (typeof e === "number") {
        if (!Number.isFinite(e)) {
            return;
        }
        if (Number.isInteger(e) && !Number.isSafeInteger(e)) {
            return;
        }
        return String(e);
    }
}
function $l(e) {
    if (e.length === 0) {
        return true;
    }
    if (e.startsWith(gi) && e.endsWith(_i)) {
        return true;
    }
    if (e !== e.trim()) {
        return true;
    }
    for(let t = 0; t < e.length; t++){
        let r = e.codePointAt(t);
        if (r === 9 || r >= 32 && r <= 126) {
            continue;
        }
        return true;
    }
    return false;
}
function El(e) {
    let t = new TextEncoder().encode(e);
    let r = "";
    for (let s of t){
        r += String.fromCodePoint(s);
    }
    return btoa(r);
}
function uo(e) {
    if ($l(e)) {
        return `${gi}${El(e)}${_i}`;
    }
    return e;
}
function Pl(e, path) {
    let r = e;
    for (let s of path){
        if (r === null || typeof r !== "object") {
            return;
        }
        r = r[s];
    }
    return r;
}
function yi(declarations, t) {
    let r = {};
    for (let s of declarations){
        let a = Pl(t, s.path);
        if (a === undefined || a === null) {
            continue;
        }
        let n = wl(a);
        if (n === undefined) {
            continue;
        }
        r[`${yl}${s.headerName}`] = uo(n);
    }
    return r;
}
const Jt = -32020;
const qh = [
    {
        rung: "http-method",
        order: 1,
        evaluatedAt: "edge",
        codes: [
            -32000
        ],
        conformance: [],
        rationale: "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read."
    },
    {
        rung: "jsonrpc-shape",
        order: 2,
        evaluatedAt: "edge",
        codes: [
            pi.InvalidRequest
        ],
        conformance: [
            "server-stateless"
        ],
        rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
    },
    {
        rung: "era-classification",
        order: 3,
        evaluatedAt: "edge",
        codes: [
            Jt,
            pi.UnsupportedProtocolVersion
        ],
        conformance: [
            "server-stateless",
            "http-header-validation",
            "http-custom-header-server-validation"
        ],
        rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
    },
    {
        rung: "envelope",
        order: 4,
        evaluatedAt: "edge",
        codes: [
            pi.InvalidParams
        ],
        conformance: [
            "server-stateless"
        ],
        rationale: "A present envelope claim with a malformed envelope — and a missing envelope on a request whose protocol-version header names a modern revision — is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
    },
    {
        rung: "method-registry",
        order: 5,
        evaluatedAt: "dispatch",
        codes: [
            pi.MethodNotFound
        ],
        conformance: [
            "server-stateless"
        ],
        rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision’s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
    },
    {
        rung: "request-params",
        order: 6,
        evaluatedAt: "dispatch",
        codes: [
            pi.InvalidParams
        ],
        conformance: [],
        rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
    },
    {
        rung: "standard-header-validation",
        order: 7,
        evaluatedAt: "pre-dispatch",
        codes: [
            Jt
        ],
        conformance: [
            "http-header-validation"
        ],
        rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers — presence, sentinel decoding, and `Mcp-Name` ↔ body cross-check — are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier’s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5–6) are consulted."
    },
    {
        rung: "client-capabilities",
        order: 8,
        evaluatedAt: "pre-dispatch",
        codes: [
            pi.MissingRequiredClientCapability
        ],
        conformance: [
            "server-stateless"
        ],
        rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced — pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
    },
    {
        rung: "param-header-validation",
        order: 9,
        evaluatedAt: "pre-dispatch",
        codes: [
            Jt
        ],
        conformance: [
            "http-custom-header-server-validation"
        ],
        rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool’s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
    }
];
const Ih = {
    [pi.ParseError]: 400,
    [pi.InvalidRequest]: 400,
    [pi.MethodNotFound]: 404,
    [pi.UnsupportedProtocolVersion]: 400,
    [pi.MissingRequiredClientCapability]: 400,
    [Jt]: 400
};
function ho(e, t) {
    return lCr(e, t);
}
function Xr(e) {
    return new Set(e.flatMap((t)=>Object.keys(t.shape)));
}
function en(e) {
    if (e == null) {
        return false;
    }
    let t = typeof e;
    if (t !== "object" && t !== "function") {
        return false;
    }
    if (!("~standard" in e)) {
        return false;
    }
    return typeof e["~standard"]?.validate === "function";
}
let xn = false;
const target = "draft-2020-12";
function Tl(requestedSchema, io_1 = "input") {
    let r = requestedSchema["~standard"];
    let s;
    if (r.jsonSchema) {
        s = r.jsonSchema[io_1]({
            target
        });
    } else if (r.vendor === "zod") {
        if (!("_zod" in requestedSchema)) {
            throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
        }
        if (!xn) {
            xn = true;
            console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
        }
        s = E5e(requestedSchema, {
            target,
            io: io_1
        });
    } else {
        throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
    }
    if (io_1 === "output") {
        if (s.type !== undefined) {
            return s;
        }
        if (vi(s)) {
            return {
                type: "object",
                ...s
            };
        }
        return s;
    }
    if (s.type !== undefined && s.type !== "object") {
        throw Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`);
    }
    return {
        type: "object",
        ...s
    };
}
function vi(e) {
    if ("properties" in e || "patternProperties" in e || "additionalProperties" in e || "required" in e) {
        return true;
    }
    for (let t of [
        "oneOf",
        "anyOf",
        "allOf"
    ]){
        let r = e[t];
        if (Array.isArray(r) && r.length > 0) {
            return r.every((s)=>s !== null && typeof s === "object" && (s.type === "object" || vi(s)));
        }
    }
    return false;
}
function Cl(e) {
    if (!e.path?.length) {
        return e.message;
    }
    return `${e.path.map((t)=>String(typeof t === "object" ? t.key : t)).join(".")}: ${e.message}`;
}
async function Xo(e, t) {
    let r = await e["~standard"].validate(t);
    if (r.issues && r.issues.length > 0) {
        return {
            success: false,
            error: r.issues.map((s)=>Cl(s)).join(", ")
        };
    }
    return {
        success: true,
        data: r.value
    };
}
function kl(e) {
    let t = E5e(e, {
        target,
        io: "input"
    });
    if (typeof t.pattern === "string") {
        return t.pattern;
    }
}
const ql = /\\\.\\d\{(\d+)\}/;
function Il(e) {
    let t = ql.exec(e);
    let r = [
        undefined,
        -1,
        0
    ];
    if (t) {
        r.push(Number(t[1]));
    }
    return [
        false,
        true
    ].flatMap((local)=>[
            false,
            true
        ].flatMap((offset)=>r.map((precision)=>fO({
                    local,
                    offset,
                    precision
                }))));
}
function Nl(format, t) {
    let r;
    switch(format){
        case "email":
            r = [
                fPs()
            ];
            break;
        case "uri":
            r = [
                EHt()
            ];
            break;
        case "date":
            r = [
                Y$s()
            ];
            break;
        case "date-time":
            r = Il(t);
            break;
    }
    return new Set(r.map((s)=>kl(s)).filter((s)=>s !== undefined));
}
function Ml(format, t, r) {
    if (r !== "zod") {
        return true;
    }
    return Nl(format, t).has(t);
}
function es(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function jl(requestedSchema) {
    try {
        return Tl(requestedSchema, "input");
    } catch (error) {
        let r = error instanceof Error ? error.message : String(error);
        throw new Ol(pi.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
    }
}
const Al = new Set([
    "$comment",
    "deprecated",
    "description",
    "examples",
    "readOnly",
    "title",
    "writeOnly"
]);
function mn(e) {
    return Al.has(e) || e.startsWith("x-");
}
const Ll = new Set([
    "$schema",
    ...Object.keys(Kt.shape.requestedSchema.shape)
]);
const Fn = {
    string: Xr([
        Ft,
        Vr,
        xr,
        Fr
    ]),
    number: Xr([
        Ht
    ]),
    integer: Xr([
        Ht
    ]),
    boolean: Xr([
        Dr
    ]),
    array: Xr([
        Hr,
        Kr
    ])
};
const Ul = new Set(Ft.shape.format.unwrap().options);
function Dl(e, t, vendor, s) {
    if (!es(e)) {
        return e;
    }
    let a = typeof e.type === "string" && Object.hasOwn(Fn, e.type) ? Fn[e.type] : undefined;
    if (a === undefined) {
        return e;
    }
    let n = {};
    for (let [i, l] of Object.entries(e)){
        if (a.has(i) || mn(i)) {
            n[i] = l;
        } else if (i === "pattern" && e.type === "string" && typeof e.format === "string") {
            if (!Ul.has(e.format)) {
                n[i] = l;
            } else if (typeof l !== "string" || !Ml(e.format, l, vendor)) {
                s.push(`${t}.${i}`);
            }
        } else {
            s.push(`${t}.${i}`);
        }
    }
    return n;
}
function Vl(e, vendor) {
    let r = {};
    let s = [];
    for (let [a, n] of Object.entries(e)){
        if (a === "properties" && es(n)) {
            r[a] = Object.fromEntries(Object.entries(n).map(([i, l])=>[
                    i,
                    Dl(l, `properties.${i}`, vendor, s)
                ]));
        } else if (Ll.has(a)) {
            r[a] = n;
        } else if (!mn(a)) {
            s.push(a);
        }
    }
    if (s.length > 0) {
        throw new Ol(pi.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
    }
    return r;
}
function xl(e, message) {
    if (!es(e.properties)) {
        return message;
    }
    let r = Object.entries(e.properties).filter(([, s])=>!ho(Jr, s).success).map(([s])=>`properties.${s}`);
    if (r.length > 0) {
        return r.join(", ");
    }
    return message;
}
function rn(e, t, r = "") {
    if (Array.isArray(e) && Array.isArray(t)) {
        return e.flatMap((s, a)=>rn(s, t[a], `${r}[${a}]`));
    }
    if (!es(e) || !es(t)) {
        return [];
    }
    return Object.entries(e).flatMap(([s, a])=>{
        let n = r ? `${r}.${s}` : s;
        if (!Object.prototype.hasOwnProperty.call(t, s)) {
            if (mn(s)) {
                return [];
            }
            return [
                n
            ];
        }
        return rn(a, t[s], n);
    });
}
function Fl(e) {
    if (!en(e.requestedSchema)) {
        return {
            ...e,
            mode: "form",
            requestedSchema: e.requestedSchema
        };
    }
    let vendor = e.requestedSchema["~standard"].vendor;
    let r = Vl(jl(e.requestedSchema), vendor);
    let s = ho(Kt.shape.requestedSchema, r);
    if (!s.success) {
        throw new Ol(pi.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${xl(r, s.error.message)}`);
    }
    let a = rn(r, s.data);
    if (a.length > 0) {
        throw new Ol(pi.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
    }
    let n = (s.data.required ?? []).filter((i)=>!Object.prototype.hasOwnProperty.call(s.data.properties, i));
    if (n.length > 0) {
        throw new Ol(pi.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
    }
    return {
        ...e,
        mode: "form",
        requestedSchema: s.data
    };
}
function Hl(e) {
    let t = e.inputRequests !== undefined && Object.keys(e.inputRequests).length > 0;
    let r = typeof e.requestState === "string";
    if (!t && !r) {
        throw TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
    }
    return {
        resultType: "input_required",
        ...e.inputRequests !== undefined && {
            inputRequests: e.inputRequests
        },
        ...e.requestState !== undefined && {
            requestState: e.requestState
        }
    };
}
const Oh = Object.assign(Hl, {
    elicit (e) {
        try {
            return {
                method: "elicitation/create",
                params: Fl(e)
            };
        } catch (error) {
            throw error instanceof Ol ? TypeError(error.message, {
                cause: error
            }) : error;
        }
    },
    elicitUrl (e) {
        return {
            method: "elicitation/create",
            params: {
                ...e,
                mode: "url"
            }
        };
    },
    createMessage (e) {
        return {
            method: "sampling/createMessage",
            params: e
        };
    },
    listRoots () {
        return {
            method: "roots/list"
        };
    }
});
const Kl = true;
const Jl = 10;
const Gl = 250;
function bi(e) {
    return {
        autoFulfill: e?.autoFulfill ?? Kl,
        maxRounds: e?.maxRounds ?? Jl
    };
}
function Bl(originalParams, inputResponses, requestState) {
    let s = inputResponses !== undefined && Object.keys(inputResponses).length > 0;
    if (!s && requestState === undefined) {
        return originalParams;
    }
    return {
        ...originalParams,
        ...s && {
            inputResponses
        },
        ...requestState !== undefined && {
            requestState
        }
    };
}
function Wl(method, maxRounds) {
    return `Multi-round-trip request '${method}' still required input after ${maxRounds} rounds (inputRequired.maxRounds)`;
}
function Yl(e, signal) {
    return new Promise((resolve, reject)=>{
        if (signal?.aborted) {
            reject(signal.reason instanceof Hs ? signal.reason : new Hs(Ts.RequestTimeout, String(signal.reason)));
            return;
        }
        let a = setTimeout(()=>{
            signal?.removeEventListener("abort", n);
            resolve();
        }, e);
        let n = ()=>{
            clearTimeout(a);
            reject(signal?.reason instanceof Hs ? signal.reason : new Hs(Ts.RequestTimeout, String(signal?.reason)));
        };
        signal?.addEventListener("abort", n, {
            once: true
        });
    });
}
function Xl(signal) {
    let t = new AbortController;
    let r = ()=>t.abort(signal?.reason);
    signal?.addEventListener("abort", r, {
        once: true
    });
    if (signal?.aborted) {
        t.abort(signal.reason);
    }
    return {
        signal: t.signal,
        abort: (s)=>t.abort(s),
        dispose: ()=>signal?.removeEventListener("abort", r)
    };
}
async function Zl(e) {
    let { config, method, originalParams, requestOptions, hooks, signal } = e;
    let l = e.flowStartedAt ?? Date.now();
    let e_firstPayload = e.firstPayload;
    let progress = 0;
    while(true){
        progress += 1;
        if (progress > config.maxRounds) {
            throw new Hs(Ts.InputRequiredRoundsExceeded, Wl(method, config.maxRounds), {
                rounds: config.maxRounds,
                lastResult: {
                    inputRequests: e_firstPayload.inputRequests,
                    ...e_firstPayload.requestState !== undefined && {
                        requestState: e_firstPayload.requestState
                    }
                }
            });
        }
        requestOptions.onprogress?.({
            progress,
            message: `Fulfilling input required by '${method}' (round ${progress})`
        });
        let m = Object.entries(e_firstPayload.inputRequests ?? {});
        let _;
        if (m.length > 0) {
            let y = Xl(signal);
            try {
                let v = await Promise.all(m.map(async ([p, h])=>{
                    try {
                        return [
                            p,
                            await hooks.dispatchInputRequest(p, h, y.signal)
                        ];
                    } catch (error) {
                        y.abort(error);
                        throw error;
                    }
                }));
                _ = Object.fromEntries(v);
            } finally{
                y.dispose();
            }
        } else {
            await Yl(Gl, signal);
        }
        let w = {
            ...requestOptions.timeout !== undefined && {
                timeout: requestOptions.timeout
            }
        };
        if (requestOptions.maxTotalTimeout !== undefined) {
            let y = Date.now() - l;
            let v = requestOptions.maxTotalTimeout - y;
            if (v <= 0) {
                throw new Hs(Ts.RequestTimeout, "Maximum total timeout exceeded", {
                    maxTotalTimeout: requestOptions.maxTotalTimeout,
                    totalElapsed: y
                });
            }
            w.maxTotalTimeout = v;
        }
        let P = await hooks.retry(Bl(originalParams, _, e_firstPayload.requestState), w);
        if (Si(P)) {
            e_firstPayload = {
                inputRequests: P.inputRequests ?? {},
                ...P.requestState !== undefined && {
                    requestState: P.requestState
                }
            };
            continue;
        }
        return P;
    }
}
const Ql = [
    "AnnotationsSchema",
    "AudioContentSchema",
    "BaseMetadataSchema",
    "BlobResourceContentsSchema",
    "BooleanSchemaSchema",
    "CallToolRequestSchema",
    "CallToolRequestParamsSchema",
    "CallToolResultSchema",
    "CancelledNotificationSchema",
    "CancelledNotificationParamsSchema",
    "CancelTaskRequestSchema",
    "CancelTaskResultSchema",
    "ClientCapabilitiesSchema",
    "ClientNotificationSchema",
    "ClientRequestSchema",
    "ClientResultSchema",
    "CompatibilityCallToolResultSchema",
    "CompleteRequestSchema",
    "CompleteRequestParamsSchema",
    "CompleteResultSchema",
    "ContentBlockSchema",
    "CreateMessageRequestSchema",
    "CreateMessageRequestParamsSchema",
    "CreateMessageResultSchema",
    "CreateMessageResultWithToolsSchema",
    "CreateTaskResultSchema",
    "CursorSchema",
    "DiscoverRequestSchema",
    "DiscoverResultSchema",
    "ElicitationCompleteNotificationSchema",
    "ElicitationCompleteNotificationParamsSchema",
    "ElicitRequestSchema",
    "ElicitRequestFormParamsSchema",
    "ElicitRequestParamsSchema",
    "ElicitRequestURLParamsSchema",
    "ElicitResultSchema",
    "EmbeddedResourceSchema",
    "EmptyResultSchema",
    "EnumSchemaSchema",
    "GetPromptRequestSchema",
    "GetPromptRequestParamsSchema",
    "GetPromptResultSchema",
    "GetTaskPayloadRequestSchema",
    "GetTaskPayloadResultSchema",
    "GetTaskRequestSchema",
    "GetTaskResultSchema",
    "IconSchema",
    "IconsSchema",
    "ImageContentSchema",
    "ImplementationSchema",
    "InitializedNotificationSchema",
    "InitializeRequestSchema",
    "InitializeRequestParamsSchema",
    "InitializeResultSchema",
    "JSONArraySchema",
    "JSONObjectSchema",
    "JSONRPCErrorResponseSchema",
    "JSONRPCMessageSchema",
    "JSONRPCNotificationSchema",
    "JSONRPCRequestSchema",
    "JSONRPCResponseSchema",
    "JSONRPCResultResponseSchema",
    "JSONValueSchema",
    "LegacyTitledEnumSchemaSchema",
    "ListPromptsRequestSchema",
    "ListPromptsResultSchema",
    "ListResourcesRequestSchema",
    "ListResourcesResultSchema",
    "ListResourceTemplatesRequestSchema",
    "ListResourceTemplatesResultSchema",
    "ListRootsRequestSchema",
    "ListRootsResultSchema",
    "ListTasksRequestSchema",
    "ListTasksResultSchema",
    "ListToolsRequestSchema",
    "ListToolsResultSchema",
    "LoggingLevelSchema",
    "LoggingMessageNotificationSchema",
    "LoggingMessageNotificationParamsSchema",
    "ModelHintSchema",
    "ModelPreferencesSchema",
    "MultiSelectEnumSchemaSchema",
    "NotificationSchema",
    "NumberSchemaSchema",
    "PaginatedRequestSchema",
    "PaginatedRequestParamsSchema",
    "PaginatedResultSchema",
    "PingRequestSchema",
    "PrimitiveSchemaDefinitionSchema",
    "ProgressSchema",
    "ProgressNotificationSchema",
    "ProgressNotificationParamsSchema",
    "ProgressTokenSchema",
    "PromptSchema",
    "PromptArgumentSchema",
    "PromptListChangedNotificationSchema",
    "PromptMessageSchema",
    "PromptReferenceSchema",
    "ReadResourceRequestSchema",
    "ReadResourceRequestParamsSchema",
    "ReadResourceResultSchema",
    "RelatedTaskMetadataSchema",
    "RequestSchema",
    "RequestIdSchema",
    "RequestMetaSchema",
    "ResourceSchema",
    "ResourceContentsSchema",
    "ResourceLinkSchema",
    "ResourceListChangedNotificationSchema",
    "ResourceRequestParamsSchema",
    "ResourceTemplateSchema",
    "ResourceTemplateReferenceSchema",
    "ResourceUpdatedNotificationSchema",
    "ResourceUpdatedNotificationParamsSchema",
    "ResultMetaObjectSchema",
    "ResultSchema",
    "RoleSchema",
    "RootSchema",
    "RootsListChangedNotificationSchema",
    "SamplingContentSchema",
    "SamplingMessageSchema",
    "SamplingMessageContentBlockSchema",
    "ServerCapabilitiesSchema",
    "ServerNotificationSchema",
    "ServerRequestSchema",
    "ServerResultSchema",
    "SetLevelRequestSchema",
    "SetLevelRequestParamsSchema",
    "SingleSelectEnumSchemaSchema",
    "StringSchemaSchema",
    "SubscribeRequestSchema",
    "SubscribeRequestParamsSchema",
    "SubscriptionFilterSchema",
    "SubscriptionsAcknowledgedNotificationSchema",
    "SubscriptionsAcknowledgedNotificationParamsSchema",
    "SubscriptionsListenRequestSchema",
    "SubscriptionsListenRequestParamsSchema",
    "SubscriptionsListenResultSchema",
    "SubscriptionsListenResultMetaSchema",
    "TaskAugmentedRequestParamsSchema",
    "TaskCreationParamsSchema",
    "TaskMetadataSchema",
    "TaskSchema",
    "TaskStatusSchema",
    "TaskStatusNotificationSchema",
    "TaskStatusNotificationParamsSchema",
    "TextContentSchema",
    "TextResourceContentsSchema",
    "TitledMultiSelectEnumSchemaSchema",
    "TitledSingleSelectEnumSchemaSchema",
    "ToolSchema",
    "ToolAnnotationsSchema",
    "ToolChoiceSchema",
    "ToolExecutionSchema",
    "ToolListChangedNotificationSchema",
    "ToolResultContentSchema",
    "ToolUseContentSchema",
    "UnsubscribeRequestSchema",
    "UnsubscribeRequestParamsSchema",
    "UntitledMultiSelectEnumSchemaSchema",
    "UntitledSingleSelectEnumSchemaSchema"
];
const eu = {
    IdJagTokenExchangeResponseSchema,
    OAuthClientInformationFullSchema,
    OAuthClientInformationSchema,
    OAuthClientMetadataSchema,
    OAuthClientRegistrationErrorSchema,
    OAuthErrorResponseSchema: Jht,
    OAuthMetadataSchema: wQe,
    OAuthProtectedResourceMetadataSchema,
    OAuthTokenRevocationRequestSchema,
    OAuthTokensSchema: Xht,
    OpenIdProviderDiscoveryMetadataSchema: Yht,
    OpenIdProviderMetadataSchema
};
const Ri = {};
const zi = {};
function wi(e, t) {
    let r = e.slice(0, -6);
    Ri[r] = t;
    zi[r] = (s)=>t.safeParse(s).success;
}
for (let e of Ql){
    wi(e, _l[e]);
}
for (let [e, t] of Object.entries(eu)){
    wi(e, t);
}
const tu = Object.freeze(Ri);
const $i = Object.freeze(zi);
function ru(e) {
    switch(e){
        case "initialize":
        case "notifications/initialized":
            return Je(undefined);
        case "server/discover":
            return Je(lo);
        default:
            return;
    }
}
const ss = 60000;
const su = [
    Fe,
    Nt,
    hOe,
    Mt
];
const au = [
    "inputResponses",
    "requestState"
];
function Hn(message, t) {
    let e_params = message.params;
    if (!Qr(e_params)) {
        return {
            message,
            lifted: {}
        };
    }
    let r__meta = e_params._meta;
    let a = Qr(r__meta) ? su.filter((c)=>c in r__meta) : [];
    let n = t === "request" ? au.filter((c)=>c in e_params) : [];
    if (a.length === 0 && n.length === 0) {
        return {
            message,
            lifted: {}
        };
    }
    let lifted = {};
    let l = {
        ...e_params
    };
    if (a.length > 0 && Qr(r__meta)) {
        let c = {};
        let d = {
            ...r__meta
        };
        for (let m of a){
            c[m] = r__meta[m];
            delete d[m];
        }
        lifted.envelope = c;
        if (Object.keys(d).length > 0) {
            l._meta = d;
        } else {
            delete l._meta;
        }
    }
    for (let c of n){
        if (c === "inputResponses") {
            lifted.inputResponses = l[c];
        }
        if (c === "requestState") {
            lifted.requestState = l[c];
        }
        delete l[c];
    }
    return {
        message: {
            ...message,
            params: l
        },
        lifted
    };
}
function Kn(e, method) {
    let r = e.validateResult(method, undefined);
    if (!r.ok && r.reason === "not-in-era") {
        return;
    }
    return {
        "~standard": {
            version: 1,
            vendor: "mcp-wire-codec",
            validate (s) {
                let a = e.validateResult(method, s);
                if (a.ok) {
                    return {
                        value: a.value
                    };
                }
                return {
                    issues: [
                        {
                            message: a.reason === "invalid" ? a.message : `not-in-era: ${method}`
                        }
                    ]
                };
            }
        }
    };
}
function pn(e) {
    return ()=>e;
}
const ou = pn(undefined);
let nu;
class Ei {
    _transport;
    _requestMessageId = 0;
    _requestHandlers = new Map;
    _requestHandlerAbortControllers = new Map;
    _notificationHandlers = new Map;
    _responseHandlers = new Map;
    _progressHandlers = new Map;
    _timeoutInfo = new Map;
    _pendingDebouncedNotifications = new Set;
    _negotiatedProtocolVersion;
    static{
        nu = (e, t)=>{
            e._negotiatedProtocolVersion = t;
        };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e){
        this._options = e;
        this._supportedProtocolVersions = e?.supportedProtocolVersions ?? _Qe;
        this.setNotificationHandler("notifications/cancelled", (t)=>{
            this._oncancel(t);
        });
        this.setNotificationHandler("notifications/progress", (t)=>{
            this._onprogress(t);
        });
        this.setRequestHandler("ping", (t)=>({}));
    }
    _shouldDropInbound(e) {}
    _outboundMetaEnvelope() {}
    _envelopeOutbound(e) {
        let t = this._outboundMetaEnvelope();
        if (t === undefined) {
            return e;
        }
        let r = e.params ?? {};
        return {
            ...e,
            params: {
                ...r,
                _meta: {
                    ...t,
                    ...r._meta
                }
            }
        };
    }
    _resolveNonCompleteResult(e, t) {
        return Promise.reject(new Hs(Ts.UnsupportedResultType, `Unsupported result type '${e.kind}' for ${t.request.method}`, {
            resultType: e.kind,
            method: t.request.method
        }));
    }
    _getRequestHandler(e) {
        return this._requestHandlers.get(e);
    }
    async _oncancel(e) {
        if (!e.params.requestId) {
            return;
        }
        this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
    }
    _setupTimeout(e, t, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
        this._timeoutInfo.set(e, {
            timeoutId: setTimeout(onTimeout, t),
            startTime: Date.now(),
            timeout: t,
            maxTotalTimeout,
            resetTimeoutOnProgress,
            onTimeout
        });
    }
    _resetTimeout(e) {
        let t = this._timeoutInfo.get(e);
        if (!t) {
            return false;
        }
        let r = Date.now() - t.startTime;
        if (t.maxTotalTimeout && r >= t.maxTotalTimeout) {
            this._timeoutInfo.delete(e);
            throw new Hs(Ts.RequestTimeout, "Maximum total timeout exceeded", {
                maxTotalTimeout: t.maxTotalTimeout,
                totalElapsed: r
            });
        }
        clearTimeout(t.timeoutId);
        t.timeoutId = setTimeout(t.onTimeout, t.timeout);
        return true;
    }
    _cleanupTimeout(e) {
        let t = this._timeoutInfo.get(e);
        if (t) {
            clearTimeout(t.timeoutId);
            this._timeoutInfo.delete(e);
        }
    }
    async connect(e) {
        this._transport = e;
        let t = this.transport?.onclose;
        this._transport.onclose = ()=>{
            try {
                t?.();
            } finally{
                this._onclose();
            }
        };
        let r = this.transport?.onerror;
        this._transport.onerror = (a)=>{
            r?.(a);
            this._onerror(a);
        };
        let s = this._transport?.onmessage;
        this._transport.onmessage = (a, n)=>{
            s?.(a, n);
            if (Xve(a) || mme(a)) {
                this._onresponse(a);
            } else if (aX(a)) {
                this._onrequest(a, n);
            } else if (h9n(a)) {
                this._onnotification(a, n);
            } else {
                this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
            }
        };
        e.setSupportedProtocolVersions?.(this._supportedProtocolVersions);
        await this._transport.start();
    }
    _onclose() {
        let _responseHandlers = this._responseHandlers;
        this._responseHandlers = new Map;
        this._progressHandlers.clear();
        this._pendingDebouncedNotifications.clear();
        for (let s of this._timeoutInfo.values()){
            clearTimeout(s.timeoutId);
        }
        this._timeoutInfo.clear();
        let _requestHandlerAbortControllers = this._requestHandlerAbortControllers;
        this._requestHandlerAbortControllers = new Map;
        let r = new Hs(Ts.ConnectionClosed, "Connection closed");
        this._transport = undefined;
        try {
            this.onclose?.();
        } finally{
            for (let s of _responseHandlers.values()){
                s(r);
            }
            for (let s of _requestHandlerAbortControllers.values()){
                s.abort(r);
            }
        }
    }
    _onerror(e) {
        this.onerror?.(e);
    }
    _onnotification(e, t) {
        let { message } = Hn(e, "notification");
        let s = this._negotiatedWireCodec();
        if (t?.classification === undefined && this._shouldDropInbound(e) === "drop") {
            return;
        }
        if (t?.classification !== undefined) {
            let i = Dn(t.classification);
            if (i !== s.era) {
                this._onerror(Error(`Era mismatch on inbound notification '${message.method}': classified as ${i} but this instance serves ${s.era}`));
                return;
            }
        }
        if (Yo(message.method) && !s.hasNotificationMethod(message.method)) {
            return;
        }
        let a = this._notificationHandlers.get(message.method);
        let fallbackNotificationHandler = this.fallbackNotificationHandler;
        if (a === undefined && fallbackNotificationHandler === undefined) {
            return;
        }
        Promise.resolve().then(()=>{
            if (a === undefined) {
                return fallbackNotificationHandler(message);
            }
            return a(message, s);
        }).catch((i)=>this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
    }
    _onrequest(e, t) {
        let { message, lifted } = Hn(e, "request");
        let a = this._negotiatedWireCodec();
        if (t?.classification === undefined && this._shouldDropInbound(e) === "drop") {
            this._onerror(Error(`Dropped inbound request '${e.method}': not servable on this connection's protocol era`));
            return;
        }
        let _transport = this._transport;
        let i = (code, message_1, h)=>{
            let g = {
                jsonrpc: "2.0",
                id: message.id,
                error: {
                    code,
                    message: message_1,
                    ...h !== undefined && {
                        data: h
                    }
                }
            };
            _transport?.send(g).catch((f)=>this._onerror(Error(`Failed to send an error response: ${f}`)));
        };
        if (t?.classification !== undefined) {
            let v = Dn(t.classification);
            if (v !== a.era) {
                this._onerror(Error(`Era mismatch on inbound request '${message.method}': classified as ${v} but this instance serves ${a.era}`));
                let requested = t.classification.revision ?? v;
                i(pi.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
                    supported: this._supportedProtocolVersions,
                    requested
                });
                return;
            }
        }
        if (Wo(message.method) && !a.hasRequestMethod(message.method)) {
            i(pi.MethodNotFound, "Method not found");
            return;
        }
        let l = this._requestHandlers.get(message.method) ?? this.fallbackRequestHandler;
        if (l === undefined) {
            i(pi.MethodNotFound, "Method not found");
            return;
        }
        let c = a.checkInboundEnvelope(lifted);
        if (c !== undefined) {
            i(pi.InvalidParams, c);
            return;
        }
        let notify = (v, p)=>this._notificationViaCodec(this._resolveOutboundCodec(v.method), v, {
                ...p,
                relatedRequestId: message.id
            });
        let m = (v, p, h)=>this._requestWithSchemaViaCodec(this._resolveOutboundCodec(v.method), v, p, {
                ...h,
                relatedRequestId: message.id
            });
        let _ = new AbortController;
        this._requestHandlerAbortControllers.set(message.id, _);
        let w = lifted.inputResponses === undefined ? undefined : iu(lifted.inputResponses);
        let P = {
            sessionId: _transport?.sessionId,
            mcpReq: {
                id: message.id,
                method: message.method,
                _meta: message.params?._meta,
                ...lifted.envelope !== undefined && {
                    envelope: lifted.envelope
                },
                ...w !== undefined && {
                    inputResponses: w.accepted
                },
                ...w !== undefined && w.droppedKeys.length > 0 && {
                    droppedInputResponseKeys: w.droppedKeys
                },
                requestState: lifted.requestState === undefined ? ou : pn(lifted.requestState),
                signal: _.signal,
                send: (v, p, h)=>{
                    let g = this._resolveOutboundCodec(v.method);
                    this._assertOutboundRequestInEra(g, v.method);
                    if (en(p)) {
                        return m(v, p, h);
                    }
                    let f = Kn(g, v.method);
                    if (f === undefined) {
                        throw TypeError(`'${v.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
                    }
                    return m(v, f, p);
                },
                notify
            },
            http: t?.authInfo ? {
                authInfo: t.authInfo
            } : undefined
        };
        let y = this.buildContext(P, t);
        Promise.resolve().then(()=>l(message, y)).then(async (v)=>{
            if (_.signal.aborted) {
                return;
            }
            let p;
            try {
                p = a.encodeResult(message.method, v, this._outboundServerInfo());
            } catch (error) {
                this._onerror(Error(`Failed to encode result for ${message.method}: ${error}`));
                i(pi.InternalError, "Internal error");
                return;
            }
            let h = {
                result: p,
                jsonrpc: "2.0",
                id: message.id
            };
            await _transport?.send(h);
        }, async (v)=>{
            if (_.signal.aborted) {
                return;
            }
            let p = Number.isSafeInteger(v.code) ? v.code : pi.InternalError;
            let h = {
                jsonrpc: "2.0",
                id: message.id,
                error: {
                    code: a.encodeErrorCode(p),
                    message: v.message ?? "Internal error",
                    ...v.data !== undefined && {
                        data: v.data
                    }
                }
            };
            await _transport?.send(h);
        }).catch((v)=>this._onerror(Error(`Failed to send response: ${v}`))).finally(()=>{
            if (this._requestHandlerAbortControllers.get(message.id) === _) {
                this._requestHandlerAbortControllers.delete(message.id);
            }
        });
    }
    _onprogress(e) {
        let { progressToken, ...rest } = e.params;
        let s = Number(progressToken);
        let a = this._progressHandlers.get(s);
        if (!a) {
            this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
            return;
        }
        let n = this._responseHandlers.get(s);
        let i = this._timeoutInfo.get(s);
        if (i && n && i.resetTimeoutOnProgress) {
            try {
                this._resetTimeout(s);
            } catch (error) {
                this._responseHandlers.delete(s);
                this._progressHandlers.delete(s);
                this._cleanupTimeout(s);
                n(error);
                return;
            }
        }
        a(rest);
    }
    _onresponse(e) {
        let t = Number(e.id);
        let r = this._responseHandlers.get(t);
        if (r === undefined) {
            this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
            return;
        }
        this._responseHandlers.delete(t);
        this._cleanupTimeout(t);
        this._progressHandlers.delete(t);
        if (Xve(e)) {
            r(e);
        } else {
            r(Ol.fromError(e.error.code, e.error.message, e.error.data));
        }
    }
    get transport() {
        return this._transport;
    }
    async close() {
        await this._transport?.close();
    }
    request(e, t, r) {
        let s = this._resolveOutboundCodec(e.method);
        this._assertOutboundRequestInEra(s, e.method);
        if (en(t)) {
            return this._requestWithSchemaViaCodec(s, e, t, r);
        }
        let a = Kn(s, e.method);
        if (a === undefined) {
            throw TypeError(`'${e.method}' is not a spec method; pass a result schema as the second argument to request().`);
        }
        return this._requestWithSchemaViaCodec(s, e, a, t);
    }
    _negotiatedWireCodec() {
        return Je(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
        return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
        if (this._negotiatedProtocolVersion === undefined) {
            let t = ru(e);
            if (t) {
                return t;
            }
        }
        return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, t) {
        if (t.startsWith("tasks/")) {
            return;
        }
        if (Wo(t) && !e.hasRequestMethod(t)) {
            throw new Hs(Ts.MethodNotSupportedByProtocolVersion, `Method '${t}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
                method: t,
                era: e.era
            });
        }
    }
    _requestWithSchema(e, t, r) {
        let s = this._resolveOutboundCodec(e.method);
        this._assertOutboundRequestInEra(s, e.method);
        return this._requestWithSchemaViaCodec(s, e, t, r);
    }
    _requestWithSchemaViaCodec(codec, request, resultSchema, options) {
        let { relatedRequestId, resumptionToken, onresumptiontoken, headers } = options ?? {};
        let flowStartedAt = Date.now();
        let d;
        let m;
        return new Promise((resolve, reject)=>{
            let P = (b)=>{
                reject(b);
            };
            if (!this._transport) {
                P(Error("Not connected"));
                return;
            }
            if (this._options?.enforceStrictCapabilities === true) {
                try {
                    this.assertCapabilityForMethod(request.method);
                } catch (error) {
                    P(error);
                    return;
                }
            }
            if (options?.signal?.aborted) {
                let b = options.signal.reason;
                throw b instanceof Hs ? b : new Hs(Ts.RequestTimeout, String(b));
            }
            let y = codec.era === lo && this._transport.hasPerRequestStream === true ? new AbortController : undefined;
            let v = this._requestMessageId++;
            m = v;
            let p = {
                ...request,
                jsonrpc: "2.0",
                id: v
            };
            if (options?.onprogress) {
                this._progressHandlers.set(v, options.onprogress);
                p.params = {
                    ...request.params,
                    _meta: {
                        ...request.params?._meta,
                        progressToken: v
                    }
                };
            }
            let h = this._envelopeOutbound(p);
            let g = false;
            let f = (b)=>{
                if (g) {
                    return;
                }
                this._progressHandlers.delete(v);
                if (y === undefined) {
                    this._transport?.send(this._envelopeOutbound({
                        jsonrpc: "2.0",
                        method: "notifications/cancelled",
                        params: {
                            requestId: v,
                            reason: String(b)
                        }
                    }), {
                        relatedRequestId,
                        resumptionToken,
                        onresumptiontoken
                    }).catch((S)=>this._onerror(Error(`Failed to send cancellation: ${S}`)));
                } else {
                    y.abort();
                }
                reject(b instanceof Hs ? b : new Hs(Ts.RequestTimeout, String(b)));
            };
            this._responseHandlers.set(v, (b)=>{
                if (options?.signal?.aborted) {
                    return;
                }
                g = true;
                if (b instanceof Error) {
                    return reject(b);
                }
                let S;
                try {
                    S = codec.decodeResult(request.method, b.result);
                } catch (error) {
                    return reject(error instanceof Error ? error : Error(String(error)));
                }
                if (S.kind === "invalid") {
                    return reject(S.error);
                }
                if (S.kind === "task") {
                    if (options?.allowTask === true && this._capabilities?.extensions?.[pl] !== undefined && Sl(S.result)) {
                        return resolve(S.result);
                    }
                    return reject(new Hs(Ts.UnsupportedResultType, `Unsupported result type 'task' for ${request.method}`, {
                        method: request.method
                    }));
                }
                if (S.kind === "input_required") {
                    if (options?.allowInputRequired === true) {
                        return resolve(du(S));
                    }
                    let L = {
                        codec,
                        request,
                        resultSchema,
                        options,
                        flowStartedAt,
                        retry: (K, N)=>this._requestWithSchemaViaCodec(codec, K === undefined ? {
                                method: request.method
                            } : {
                                method: request.method,
                                params: K
                            }, resultSchema, N)
                    };
                    return resolve(this._resolveNonCompleteResult(S, L));
                }
                let S_result = S.result;
                Xo(resultSchema, S_result).then((L)=>{
                    if (L.success) {
                        resolve(L.data);
                    } else {
                        reject(new Hs(Ts.InvalidResult, `Invalid result for ${request.method}: ${L.error}`));
                    }
                }, reject);
            });
            d = ()=>f(options?.signal?.reason);
            options?.signal?.addEventListener("abort", d, {
                once: true
            });
            let R = options?.timeout ?? ss;
            let C = ()=>f(new Hs(Ts.RequestTimeout, "Request timed out", {
                    timeout: R
                }));
            this._setupTimeout(v, R, options?.maxTotalTimeout, C, options?.resetTimeoutOnProgress ?? false);
            this._transport.send(h, {
                relatedRequestId,
                resumptionToken,
                onresumptiontoken,
                headers,
                requestSignal: y?.signal
            }).catch((b)=>{
                this._progressHandlers.delete(v);
                reject(b);
            });
        }).finally(()=>{
            if (d) {
                options?.signal?.removeEventListener("abort", d);
            }
            if (m !== undefined) {
                this._responseHandlers.delete(m);
                this._cleanupTimeout(m);
            }
        });
    }
    async notification(e, t) {
        return this._notificationViaCodec(this._resolveOutboundCodec(e.method), e, t);
    }
    async _notificationViaCodec(e, t, r) {
        if (!this._transport) {
            throw new Hs(Ts.NotConnected, "Not connected");
        }
        if (Yo(t.method) && !e.hasNotificationMethod(t.method)) {
            throw new Hs(Ts.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
                method: t.method,
                era: e.era
            });
        }
        this.assertNotificationCapability(t.method);
        let s = this._envelopeOutbound({
            jsonrpc: "2.0",
            ...t
        });
        if ((this._options?.debouncedNotificationMethods ?? []).includes(t.method) && !t.params && !r?.relatedRequestId) {
            if (this._pendingDebouncedNotifications.has(t.method)) {
                return;
            }
            this._pendingDebouncedNotifications.add(t.method);
            Promise.resolve().then(()=>{
                this._pendingDebouncedNotifications.delete(t.method);
                if (!this._transport) {
                    return;
                }
                this._transport?.send(s, r).catch((a)=>this._onerror(a));
            });
            return;
        }
        await this._transport.send(s, r);
    }
    setRequestHandler(e, t, r) {
        this.assertRequestHandlerCapability(e);
        let s;
        if (typeof t === "function") {
            if (!Wo(e)) {
                throw TypeError(`'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
            }
            s = (a, n)=>{
                let i = this._negotiatedWireCodec();
                let l = i.validateRequest(e, a);
                if (!l.ok && l.reason === "not-in-era") {
                    l = i.validateInputRequest(e, a);
                }
                if (!l.ok) {
                    if (l.reason === "not-in-era") {
                        throw new Ol(pi.InternalError, `No wire schema for ${e} in the resolved era`);
                    }
                    throw Error(l.message);
                }
                return Promise.resolve(t(l.value, n));
            };
        } else if (r) {
            s = async (a, n)=>{
                let i = await Xo(t.params, {
                    ...a.params
                });
                if (!i.success) {
                    throw new Ol(pi.InvalidParams, `Invalid params for ${e}: ${i.error}`);
                }
                return r(i.data, n);
            };
        } else {
            throw TypeError("setRequestHandler: handler is required");
        }
        this._requestHandlers.set(e, this._wrapHandler(e, s));
    }
    _wrapHandler(e, t) {
        return t;
    }
    _outboundServerInfo() {}
    removeRequestHandler(e) {
        this._requestHandlers.delete(e);
    }
    assertCanSetRequestHandler(e) {
        if (this._requestHandlers.has(e)) {
            throw Error(`A request handler for ${e} already exists, which would be overridden`);
        }
    }
    setNotificationHandler(e, t, r) {
        if (typeof t === "function") {
            if (!Yo(e)) {
                throw TypeError(`'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
            }
            this._notificationHandlers.set(e, (s, a)=>{
                let n = a.validateNotification(e, s);
                if (!n.ok) {
                    if (n.reason === "not-in-era") {
                        throw new Ol(pi.InternalError, `No wire schema for ${e} in the resolved era`);
                    }
                    throw Error(n.message);
                }
                return Promise.resolve(t(n.value));
            });
            return;
        }
        if (!r) {
            throw TypeError("setNotificationHandler: handler is required");
        }
        this._notificationHandlers.set(e, async (s)=>{
            let a = await Xo(t.params, {
                ...s.params
            });
            if (!a.success) {
                throw new Ol(pi.InvalidParams, `Invalid params for notification ${e}: ${a.error}`);
            }
            await r(a.data, s);
        });
    }
    removeNotificationHandler(e) {
        this._notificationHandlers.delete(e);
    }
}
function Qr(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Pi(_capabilities, t) {
    let r = {
        ..._capabilities
    };
    for(let s in t){
        let a = s;
        let n = t[a];
        if (n === undefined) {
            continue;
        }
        let i = r[a];
        r[a] = Qr(i) && Qr(n) ? {
            ...i,
            ...n
        } : n;
    }
    return r;
}
function io(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function iu(inputResponses) {
    let accepted = {};
    let droppedKeys = [];
    if (!io(inputResponses)) {
        return {
            accepted,
            droppedKeys
        };
    }
    for (let [s, a] of Object.entries(inputResponses)){
        if (!io(a) || "method" in a || "result" in a) {
            droppedKeys.push(s);
            continue;
        }
        accepted[s] = a;
    }
    return {
        accepted,
        droppedKeys
    };
}
function Jn(e) {
    throw new Hs(Ts.SendFailed, `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function cu(e, t, r, s, sessionId) {
    return {
        sessionId,
        mcpReq: {
            id: e,
            method: t,
            _meta: r?._meta,
            requestState: pn(undefined),
            signal: s,
            send: ()=>Jn("send"),
            notify: ()=>Jn("notify")
        }
    };
}
async function lu(e, codec, r, s, a) {
    if (!io(s) || typeof s.method !== "string") {
        throw new Hs(Ts.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, {
            key: r
        });
    }
    let s_method = s.method;
    if (!codec.hasInputRequestMethod(s_method)) {
        throw new Hs(Ts.InvalidResult, `Invalid input request '${r}': '${s_method}' is not an embedded request the ${codec.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, {
            key: r,
            method: s_method
        });
    }
    let i = e.getRequestHandler(s_method);
    if (i === undefined) {
        throw new Hs(Ts.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${s_method}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, {
            key: r,
            method: s_method
        });
    }
    let l = io(s.params) ? s.params : undefined;
    return await i({
        jsonrpc: "2.0",
        id: r,
        method: s_method,
        ...l !== undefined && {
            params: l
        }
    }, e.buildContext(cu(r, s_method, l, a, e.sessionId)));
}
function uu(options, t) {
    return {
        ...options?.signal !== undefined && {
            signal: options.signal
        },
        ...options?.onprogress !== undefined && {
            onprogress: options.onprogress
        },
        ...options?.resetTimeoutOnProgress !== undefined && {
            resetTimeoutOnProgress: options.resetTimeoutOnProgress
        },
        ...options?.headers !== undefined && {
            headers: options.headers
        },
        ...t.timeout !== undefined && {
            timeout: t.timeout
        },
        ...t.maxTotalTimeout !== undefined && {
            maxTotalTimeout: t.maxTotalTimeout
        },
        ...options?.allowTask === true && {
            allowTask: true
        },
        allowInputRequired: true
    };
}
function Ti(e, config, r, s) {
    let { codec, request, options, flowStartedAt } = s;
    let firstPayload = {
        inputRequests: r.inputRequests,
        ...r.requestState !== undefined && {
            requestState: r.requestState
        }
    };
    let hooks = {
        dispatchInputRequest: (m, _, w)=>lu(e, codec, m, _, w),
        retry: (m, _)=>s.retry(m, uu(options, _))
    };
    return Zl({
        config,
        method: request.method,
        originalParams: request.params,
        firstPayload,
        flowStartedAt,
        signal: options?.signal,
        requestOptions: {
            ...options?.timeout !== undefined && {
                timeout: options.timeout
            },
            ...options?.maxTotalTimeout !== undefined && {
                maxTotalTimeout: options.maxTotalTimeout
            },
            ...options?.onprogress !== undefined && {
                onprogress: options.onprogress
            }
        },
        hooks
    });
}
function du(e) {
    return {
        resultType: "input_required",
        inputRequests: e.inputRequests,
        ...e.requestState !== undefined && {
            requestState: e.requestState
        }
    };
}
const mu = to(hu(), 1);
function Ci(contentType) {
    if (!contentType) {
        return;
    }
    try {
        return mu.parse(contentType).type;
    } catch  {
        let t = (contentType.split(";", 1)[0] ?? "").trim().toLowerCase();
        if (t === "" || contentType.slice(t.length).includes(",")) {
            return;
        }
        return t;
    }
}
const ki = 10485760;
class w1r {
    _buffer;
    _maxBufferSize;
    constructor(e){
        this._maxBufferSize = e?.maxBufferSize ?? ki;
    }
    append(e) {
        if ((this._buffer?.length ?? 0) + e.length > this._maxBufferSize) {
            this.clear();
            throw Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
        }
        this._buffer = this._buffer ? Buffer.concat([
            this._buffer,
            e
        ]) : e;
    }
    readMessage() {
        while(this._buffer){
            let e = this._buffer.indexOf(`
`);
            if (e === -1) {
                return null;
            }
            let t = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
            this._buffer = this._buffer.subarray(e + 1);
            try {
                return _9n(t);
            } catch (error) {
                if (error instanceof SyntaxError) {
                    continue;
                }
                throw error;
            }
        }
        return null;
    }
    clear() {
        this._buffer = undefined;
    }
}
function _9n(e) {
    return Gee.parse(JSON.parse(e));
}
function v1r(e) {
    return JSON.stringify(e) + `
`;
}
function ts(e) {
    if (!e) {
        return {};
    }
    if (e instanceof Headers) {
        return Object.fromEntries(e.entries());
    }
    if (Array.isArray(e)) {
        return Object.fromEntries(e);
    }
    return {
        ...e
    };
}
function p1t(e = fetch, t) {
    if (!t) {
        return e;
    }
    return async (r, s)=>e(r, {
            ...t,
            ...s,
            headers: s?.headers ? {
                ...ts(t.headers),
                ...ts(s.headers)
            } : t.headers
        });
}
const bd = Gi();
const Rd = gd();
const zd = to(vd(), 1);
const wd = new Set([
    "https://json-schema.org/draft/2020-12/schema",
    "http://json-schema.org/draft/2020-12/schema"
]);
const zd_default = zd.default;
function Ed() {
    let e = new Rd.Ajv2020({
        strict: false,
        validateFormats: true,
        validateSchema: false,
        allErrors: true
    });
    zd_default(e);
    return e;
}
class f1t {
    _ajv;
    _userAjv;
    constructor(e){
        this._userAjv = e !== undefined;
        this._ajv = e;
    }
    get ajv() {
        return this._ajv ??= Ed();
    }
    getValidator(e) {
        if (!this._userAjv && "$schema" in e && typeof e.$schema === "string" && !wd.has(e.$schema.replace(/#$/, ""))) {
            let s = e.$schema.slice(0, 200);
            throw Error(`JSON Schema declares an unsupported dialect ("$schema": "${s}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`);
        }
        let ajv = this.ajv;
        let r = "$id" in e && typeof e.$id === "string" ? ajv.getSchema(e.$id) ?? ajv.compile(e) : ajv.compile(e);
        return (s)=>{
            if (r(s)) {
                return {
                    valid: true,
                    data: s,
                    errorMessage: undefined
                };
            }
            return {
                valid: false,
                data: undefined,
                errorMessage: ajv.errorsText(r.errors)
            };
        };
    }
}
const bd_Ajv = bd.Ajv;
const Yi = false;
class ns extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.OAuthClientFlowError"
        });
    }
    static [Symbol.hasInstance](e) {
        return Ie(this, e);
    }
    static isInstance(e) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, e);
    }
    constructor(e){
        super(e);
        this.name = new.target.name;
        bt(this, new.target);
    }
}
class vQe extends ns {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.IssuerMismatchError"
        });
    }
    kind;
    expected;
    received;
    constructor(e, t, r){
        super(`Issuer mismatch in ${e === "metadata" ? "authorization server metadata (RFC 8414 §3.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`);
        this.kind = e;
        this.expected = t;
        this.received = r;
    }
}
class b9n extends ns {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.RegistrationRejectedError"
        });
    }
    status;
    body;
    submittedMetadata;
    constructor(e){
        super(`Dynamic Client Registration rejected (HTTP ${e.status}): ${e.body}`);
        this.status = e.status;
        this.body = e.body;
        this.submittedMetadata = e.submittedMetadata;
    }
}
class dc extends ns {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.InsecureTokenEndpointError"
        });
    }
    tokenEndpoint;
    constructor(e){
        super(`Refusing to send credentials to non-https token endpoint '${e}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`);
        this.tokenEndpoint = e;
    }
}
class _n extends ns {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.AuthorizationServerMismatchError"
        });
    }
    constructor(e, t){
        super(`Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`);
        this.recordedIssuer = e;
        this.currentIssuer = t;
    }
}
class Xi extends ns {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.InsufficientScopeError"
        });
    }
    requiredScope;
    resourceMetadataUrl;
    errorDescription;
    constructor(e){
        super(`Insufficient scope${e.requiredScope ? `: required "${e.requiredScope}"` : ""}`);
        this.requiredScope = e.requiredScope;
        this.resourceMetadataUrl = e.resourceMetadataUrl;
        this.errorDescription = e.errorDescription;
    }
}
function Zi(e, issuer, r) {
    if (e === undefined) {
        return;
    }
    if (e.issuer === undefined) {
        if (r?.canPersistStamp !== false) {
            console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
        }
        return e;
    }
    if (hc(e.issuer, issuer)) {
        return e;
    }
}
function hc(e, issuer) {
    return e === issuer || e.endsWith("/") && e.slice(0, -1) === issuer || issuer.endsWith("/") && issuer.slice(0, -1) === e;
}
function mc(e) {
    if (e == null) {
        return false;
    }
    let t = e;
    return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function Pd(authProvider, t, r) {
    let { resourceMetadataUrl, scope } = yOe(t.response);
    if (await Qht(authProvider, {
        serverUrl: t.serverUrl,
        resourceMetadataUrl,
        scope,
        fetchFn: t.fetchFn,
        ...r
    }) !== "AUTHORIZED") {
        throw new lx;
    }
}
function pc(authProvider, t) {
    return {
        token: async ()=>(await authProvider.tokens())?.access_token,
        onUnauthorized: async (r)=>Pd(authProvider, r, t)
    };
}
var lx = class extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.UnauthorizedError"
        });
    }
    static [Symbol.hasInstance](e) {
        return Ie(this, e);
    }
    static isInstance(e) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, e);
    }
    constructor(e){
        super(e ?? "Unauthorized");
        this.name = "UnauthorizedError";
        bt(this, new.target);
    }
};
function Ro(e) {
    return e?.authorization_response_iss_parameter_supported === true;
}
function zo({ iss, expectedIssuer, issParameterSupported }) {
    if (expectedIssuer === undefined) {
        return;
    }
    if (iss === undefined) {
        if (issParameterSupported) {
            throw new vQe("authorization_response", expectedIssuer, undefined);
        }
        return;
    }
    if (iss !== expectedIssuer) {
        throw new vQe("authorization_response", expectedIssuer, iss);
    }
}
function yn(...e) {
    let t = new Set;
    for (let r of e){
        if (!r) {
            continue;
        }
        for (let s of r.split(/\s+/)){
            if (s) {
                t.add(s);
            }
        }
    }
    if (t.size > 0) {
        return [
            ...t
        ].join(" ");
    }
}
function Td(e, t) {
    if (!e) {
        return false;
    }
    let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
    for (let s of e.split(/\s+/)){
        if (s && !r.has(s)) {
            return true;
        }
    }
    return false;
}
async function fc(e, t, _oauthProvider, s, a) {
    if (typeof e === "string") {
        return {
            authorizationCode: e,
            iss: t
        };
    }
    let n = e.get("iss") ?? undefined;
    let i = e.get("code");
    if (i) {
        return {
            authorizationCode: i,
            iss: n
        };
    }
    let l = (await _oauthProvider.discoveryState?.())?.authorizationServerMetadata;
    if (!l) {
        try {
            l = (await w9n(s, a)).authorizationServerMetadata;
        } catch  {
            l = undefined;
        }
    }
    if (!l) {
        throw new lx("Authorization callback failed and the issuer could not be verified");
    }
    zo({
        iss: n,
        expectedIssuer: l.issuer,
        issParameterSupported: Ro(l)
    });
    let c = e.get("error");
    if (c) {
        throw new LG(c, e.get("error_description") ?? c, e.get("error_uri") ?? undefined);
    }
    throw new lx("Authorization callback contained neither `code` nor `error`");
}
function Cd(token_endpoint_auth_method) {
    return [
        "client_secret_basic",
        "client_secret_post",
        "none"
    ].includes(token_endpoint_auth_method);
}
const vn = "code";
const bn = "S256";
function kd(clientInformation, t) {
    let r = clientInformation.client_secret !== undefined;
    if ("token_endpoint_auth_method" in clientInformation && clientInformation.token_endpoint_auth_method && Cd(clientInformation.token_endpoint_auth_method) && (t.length === 0 || t.includes(clientInformation.token_endpoint_auth_method))) {
        return clientInformation.token_endpoint_auth_method;
    }
    if (t.length === 0) {
        if (r) {
            return "client_secret_basic";
        }
        return "none";
    }
    if (r && t.includes("client_secret_basic")) {
        return "client_secret_basic";
    }
    if (r && t.includes("client_secret_post")) {
        return "client_secret_post";
    }
    if (t.includes("none")) {
        return "none";
    }
    if (r) {
        return "client_secret_post";
    }
    return "none";
}
function qd(e, { client_id, client_secret }, r, tokenRequestParams) {
    switch(e){
        case "client_secret_basic":
            Id(client_id, client_secret, r);
            return;
        case "client_secret_post":
            Od(client_id, client_secret, tokenRequestParams);
            return;
        case "none":
            Nd(client_id, tokenRequestParams);
            return;
        default:
            throw Error(`Unsupported client authentication method: ${e}`);
    }
}
function Id(client_id, client_secret, r) {
    if (!client_secret) {
        throw Error("client_secret_basic authentication requires a client_secret");
    }
    let s = btoa(`${client_id}:${client_secret}`);
    r.set("Authorization", `Basic ${s}`);
}
function Od(client_id, client_secret, tokenRequestParams) {
    tokenRequestParams.set("client_id", client_id);
    if (client_secret) {
        tokenRequestParams.set("client_secret", client_secret);
    }
}
function Nd(client_id, tokenRequestParams) {
    tokenRequestParams.set("client_id", client_id);
}
function Sc(hostname) {
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]" || hostname === "::1";
}
function Md(e) {
    let t = new URL(String(e));
    if (t.protocol !== "https:" && !Sc(t.hostname)) {
        throw new dc(t.href);
    }
    return t;
}
function jd(redirect_uris) {
    for (let t of redirect_uris ?? []){
        let r;
        try {
            r = new URL(t);
        } catch  {
            continue;
        }
        if (r.protocol !== "http:" && r.protocol !== "https:") {
            return "native";
        }
        if (Sc(r.hostname)) {
            return "native";
        }
    }
    return "web";
}
function Ad(e) {
    let e_clientMetadata = e.clientMetadata;
    return {
        ...e_clientMetadata,
        grant_types: e_clientMetadata.grant_types ?? (e.redirectUrl === undefined ? undefined : [
            "authorization_code",
            "refresh_token"
        ]),
        application_type: e_clientMetadata.application_type ?? jd(e_clientMetadata.redirect_uris)
    };
}
async function Qi(e) {
    let t = e instanceof Response ? e.status : undefined;
    let r = e instanceof Response ? await e.text() : e;
    try {
        let s = Jht.parse(JSON.parse(r));
        return LG.fromResponse(s);
    } catch (error) {
        let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
        return new LG(Vee.ServerError, a);
    }
}
async function Qht(e, t) {
    try {
        return await Rn(e, t);
    } catch (error) {
        if (error instanceof LG) {
            if (error.code === Vee.InvalidClient || error.code === Vee.UnauthorizedClient) {
                await e.invalidateCredentials?.("client");
                await e.invalidateCredentials?.("tokens");
                return await Rn(e, t);
            } else if (error.code === Vee.InvalidGrant) {
                await e.invalidateCredentials?.("tokens");
                return await Rn(e, t);
            }
        }
        throw error;
    }
}
function Ld({ requestedScope, resourceMetadata, authServerMetadata, clientMetadata }) {
    let n = requestedScope || resourceMetadata?.scopes_supported?.join(" ") || clientMetadata.scope;
    if (n && authServerMetadata?.scopes_supported?.includes("offline_access") && !n.split(" ").includes("offline_access") && clientMetadata.grant_types?.includes("refresh_token")) {
        n = `${n} offline_access`;
    }
    return n;
}
async function Rn(e, { serverUrl, authorizationCode, iss, scope, resourceMetadataUrl, fetchFn, skipIssuerMetadataValidation, forceReauthorization }) {
    let clientMetadata = Ad(e);
    let m = await e.discoveryState?.();
    let _;
    let w;
    let P;
    let y;
    let v = resourceMetadataUrl;
    if (!v && m?.resourceMetadataUrl) {
        v = new URL(m.resourceMetadataUrl);
    }
    if (m?.authorizationServerUrl) {
        w = m.authorizationServerUrl;
        _ = m.resourceMetadata;
        P = m.authorizationServerMetadata ?? await Zht(w, {
            fetchFn,
            skipIssuerValidation: skipIssuerMetadataValidation
        });
        if (!_) {
            try {
                _ = await S9n(serverUrl, {
                    resourceMetadataUrl: v
                }, fetchFn);
            } catch (error) {
                if (error instanceof TypeError) {
                    throw error;
                }
            }
        }
        if (P !== m.authorizationServerMetadata || _ !== m.resourceMetadata) {
            await e.saveDiscoveryState?.({
                authorizationServerUrl: String(w),
                resourceMetadataUrl: v?.toString(),
                resourceMetadata: _,
                authorizationServerMetadata: P
            });
        }
    } else {
        let N = await w9n(serverUrl, {
            resourceMetadataUrl: v,
            fetchFn,
            skipIssuerMetadataValidation
        });
        w = N.authorizationServerUrl;
        P = N.authorizationServerMetadata;
        _ = N.resourceMetadata;
        y = {
            authorizationServerUrl: String(w),
            resourceMetadataUrl: v?.toString(),
            resourceMetadata: _,
            authorizationServerMetadata: P
        };
    }
    let issuer = P?.issuer ?? String(w);
    let h = {
        issuer
    };
    await e.saveAuthorizationServerUrl?.(issuer);
    if (authorizationCode !== undefined) {
        let N = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
        if (N === undefined) {
            if (e.saveDiscoveryState !== undefined) {
                throw new _n("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", issuer);
            }
            console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) — see docs/migration/upgrade-to-v2.md §SEP-2352.");
        } else if (!hc(N, issuer)) {
            throw new _n(N, issuer);
        }
    }
    if (y) {
        await e.saveDiscoveryState?.(y);
    }
    let resource = await Dd(serverUrl, e, _);
    if (resource) {
        await e.saveResourceUrl?.(String(resource));
    }
    let f = Ld({
        requestedScope: scope,
        resourceMetadata: _,
        authServerMetadata: P,
        clientMetadata: e.clientMetadata
    });
    let R = await Promise.resolve(e.clientInformation(h));
    let clientInformation = Zi(R, issuer, {
        canPersistStamp: e.saveClientInformation !== undefined
    });
    if (clientInformation === undefined && R?.issuer && e.saveClientInformation === undefined) {
        throw new _n(R.issuer, issuer);
    }
    if (clientInformation && clientInformation.issuer === undefined) {
        clientInformation = {
            ...clientInformation,
            issuer
        };
        await e.saveClientInformation?.(clientInformation, h);
    }
    if (!clientInformation) {
        if (authorizationCode !== undefined) {
            throw Error("Existing OAuth client information is required when exchanging an authorization code");
        }
        let N = P?.client_id_metadata_document_supported === true;
        let client_id = e.clientMetadataUrl;
        if (client_id && !Ud(client_id)) {
            throw new LG(Vee.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${client_id}`);
        }
        if (N && client_id) {
            clientInformation = {
                client_id,
                issuer
            };
            await e.saveClientInformation?.(clientInformation, h);
        } else {
            if (!e.saveClientInformation) {
                throw Error("OAuth client information must be saveable for dynamic registration");
            }
            clientInformation = {
                ...await Jd(w, {
                    metadata: P,
                    clientMetadata,
                    scope: f,
                    fetchFn
                }),
                issuer
            };
            await e.saveClientInformation(clientInformation, h);
        }
    }
    let b = !e.redirectUrl;
    if (authorizationCode !== undefined || b) {
        if (authorizationCode !== undefined) {
            zo({
                iss,
                expectedIssuer: P?.issuer,
                issParameterSupported: Ro(P)
            });
        }
        let N = await Kd(e, w, {
            metadata: P,
            resource,
            authorizationCode,
            iss,
            scope: f,
            fetchFn
        });
        await e.saveTokens({
            ...N,
            issuer
        }, h);
        return "AUTHORIZED";
    }
    let S = Zi(await e.tokens(h), issuer);
    if (S && S.issuer === undefined) {
        S = {
            ...S,
            issuer
        };
        await e.saveTokens(S, h);
    }
    if (S?.refresh_token && !forceReauthorization) {
        try {
            let N = await k1r(w, {
                metadata: P,
                clientInformation,
                refreshToken: S.refresh_token,
                resource,
                addClientAuthentication: e.addClientAuthentication,
                fetchFn
            });
            await e.saveTokens({
                ...N,
                issuer
            }, h);
            return "AUTHORIZED";
        } catch (error) {
            if (error instanceof dc) {
                throw error;
            }
            if (!(error instanceof LG) || error.code === Vee.ServerError) ;
            else {
                throw error;
            }
        }
    }
    let state = e.state ? await e.state() : undefined;
    let { authorizationUrl, codeVerifier } = await E1r(w, {
        metadata: P,
        clientInformation,
        state,
        redirectUrl: e.redirectUrl,
        scope: f,
        resource
    });
    await e.saveCodeVerifier(codeVerifier);
    await e.redirectToAuthorization(authorizationUrl);
    return "REDIRECT";
}
function Ud(client_id) {
    if (!client_id) {
        return false;
    }
    try {
        let t = new URL(client_id);
        return t.protocol === "https:" && t.pathname !== "/";
    } catch  {
        return false;
    }
}
async function Dd(serverUrl, t, r) {
    let requestedResource = Gn(serverUrl);
    if (t.validateResourceURL) {
        return await t.validateResourceURL(requestedResource, r?.resource);
    }
    if (!r) {
        return;
    }
    if (!Bn({
        requestedResource,
        configuredResource: r.resource
    })) {
        throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource} (or origin)`);
    }
    return new URL(r.resource);
}
function yOe(e) {
    let t = e.headers.get("WWW-Authenticate");
    if (!t) {
        return {};
    }
    let [r, s] = t.split(" ");
    if (r?.toLowerCase() !== "bearer" || !s) {
        return {};
    }
    let a = yo(e, "resource_metadata") || undefined;
    let n;
    if (a) {
        try {
            n = new URL(a);
        } catch  {}
    }
    let i = yo(e, "scope") || undefined;
    let l = yo(e, "error") || undefined;
    let errorDescription = yo(e, "error_description") || undefined;
    return {
        resourceMetadataUrl: n,
        scope: i,
        error: l,
        errorDescription
    };
}
function yo(e, t) {
    let r = e.headers.get("WWW-Authenticate");
    if (!r) {
        return null;
    }
    let s = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`);
    let a = r.match(s);
    if (a) {
        let n = a[1] || a[2];
        if (n) {
            return n;
        }
    }
    return null;
}
async function S9n(e, t, r = fetch) {
    let s = await Fd(e, "oauth-protected-resource", r, {
        protocolVersion: t?.protocolVersion,
        metadataUrl: t?.resourceMetadataUrl
    });
    if (!s || s.status === 404) {
        await s?.text?.().catch(()=>{});
        throw Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
    }
    if (!s.ok) {
        await s.text?.().catch(()=>{});
        throw Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
    }
    return OAuthProtectedResourceMetadataSchema.parse(await s.json());
}
async function gc(e, t, r = fetch) {
    try {
        return await r(e, {
            headers: t
        });
    } catch (error) {
        if (!(error instanceof TypeError) || !Yi) {
            throw error;
        }
        if (t) {
            try {
                return await r(e, {});
            } catch (err) {
                if (!(err instanceof TypeError)) {
                    throw err;
                }
                return;
            }
        }
        return;
    }
}
function Vd(e, t = "", r = {}) {
    if (t.endsWith("/")) {
        t = t.slice(0, -1);
    }
    if (r.prependPathname) {
        return `${t}/.well-known/${e}`;
    }
    return `/.well-known/${e}${t}`;
}
async function ec(e, t, r = fetch) {
    return await gc(e, {
        "MCP-Protocol-Version": t
    }, r);
}
function xd(e, pathname) {
    if (!e) {
        return true;
    }
    if (pathname === "/") {
        return false;
    }
    return e.status >= 400 && e.status < 500 || e.status === 502;
}
async function Fd(e, t, r, s) {
    let a = new URL(e);
    let n = s?.protocolVersion ?? Ot;
    let i;
    if (s?.metadataUrl) {
        i = new URL(s.metadataUrl);
    } else {
        let c = Vd(t, a.pathname);
        i = new URL(c, s?.metadataServerUrl ?? a);
        i.search = a.search;
    }
    let l = await ec(i, n, r);
    if (!s?.metadataUrl && xd(l, a.pathname)) {
        l = await ec(new URL(`/.well-known/${t}`, a), n, r);
    }
    return l;
}
function Hd(e) {
    let t = typeof e === "string" ? new URL(e) : e;
    let r = t.pathname !== "/";
    let s = [];
    if (!r) {
        s.push({
            url: new URL("/.well-known/oauth-authorization-server", t.origin),
            type: "oauth"
        }, {
            url: new URL("/.well-known/openid-configuration", t.origin),
            type: "oidc"
        });
        return s;
    }
    let t_pathname = t.pathname;
    if (t_pathname.endsWith("/")) {
        t_pathname = t_pathname.slice(0, -1);
    }
    s.push({
        url: new URL(`/.well-known/oauth-authorization-server${t_pathname}`, t.origin),
        type: "oauth"
    }, {
        url: new URL(`/.well-known/openid-configuration${t_pathname}`, t.origin),
        type: "oidc"
    }, {
        url: new URL(`${t_pathname}/.well-known/openid-configuration`, t.origin),
        type: "oidc"
    });
    return s;
}
async function Zht(e, { fetchFn = fetch, protocolVersion = Ot, skipIssuerValidation = false } = {}) {
    let a = {
        "MCP-Protocol-Version": protocolVersion,
        Accept: "application/json"
    };
    let n = Hd(e);
    for (let { url, type } of n){
        let c = await gc(url, a, fetchFn);
        if (!c) {
            continue;
        }
        if (!c.ok) {
            await c.text?.().catch(()=>{});
            if (c.status >= 400 && c.status < 500 || c.status === 502) {
                continue;
            }
            throw Error(`HTTP ${c.status} trying to load ${type === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
        }
        let d = type === "oauth" ? wQe.parse(await c.json()) : Yht.parse(await c.json());
        if (!skipIssuerValidation) {
            let m = typeof e === "string" ? e : e.href;
            if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) {
                throw new vQe("metadata", m, d.issuer);
            }
        }
        return d;
    }
}
async function w9n(e, t) {
    let r;
    let authorizationServerUrl;
    try {
        r = await S9n(e, {
            resourceMetadataUrl: t?.resourceMetadataUrl
        }, t?.fetchFn);
        if (r.authorization_servers && r.authorization_servers.length > 0) {
            authorizationServerUrl = r.authorization_servers[0];
        }
    } catch (error) {
        if (error instanceof TypeError) {
            throw error;
        }
    }
    if (!authorizationServerUrl) {
        authorizationServerUrl = String(new URL("/", e));
    }
    let authorizationServerMetadata = await Zht(authorizationServerUrl, {
        fetchFn: t?.fetchFn,
        skipIssuerValidation: t?.skipIssuerMetadataValidation
    });
    return {
        authorizationServerUrl,
        authorizationServerMetadata,
        resourceMetadata: r
    };
}
async function E1r(e, { metadata, clientInformation, redirectUrl, scope, state, resource }) {
    let authorizationUrl;
    if (metadata) {
        authorizationUrl = new URL(metadata.authorization_endpoint);
        if (!metadata.response_types_supported.includes(vn)) {
            throw Error(`Incompatible auth server: does not support response type ${vn}`);
        }
        if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(bn)) {
            throw Error(`Incompatible auth server: does not support code challenge method ${bn}`);
        }
    } else {
        authorizationUrl = new URL("/authorize", e);
    }
    let c = await w1t();
    let { code_verifier, code_challenge } = c;
    authorizationUrl.searchParams.set("response_type", vn);
    authorizationUrl.searchParams.set("client_id", clientInformation.client_id);
    authorizationUrl.searchParams.set("code_challenge", code_challenge);
    authorizationUrl.searchParams.set("code_challenge_method", bn);
    authorizationUrl.searchParams.set("redirect_uri", String(redirectUrl));
    if (state) {
        authorizationUrl.searchParams.set("state", state);
    }
    if (scope) {
        authorizationUrl.searchParams.set("scope", scope);
    }
    if (scope?.split(" ").includes("offline_access")) {
        authorizationUrl.searchParams.append("prompt", "consent");
    }
    if (resource) {
        authorizationUrl.searchParams.set("resource", resource.href);
    }
    return {
        authorizationUrl,
        codeVerifier: code_verifier
    };
}
function _c(authorizationCode, code_verifier, r) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code: authorizationCode,
        code_verifier,
        redirect_uri: String(r)
    });
}
async function En(e, { metadata, tokenRequestParams, clientInformation, addClientAuthentication, resource, fetchFn }) {
    let l = Md(metadata?.token_endpoint ?? new URL("/token", e));
    let c = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (resource) {
        tokenRequestParams.set("resource", resource.href);
    }
    if (addClientAuthentication) {
        await addClientAuthentication(c, tokenRequestParams, l, metadata);
    } else if (clientInformation) {
        qd(kd(clientInformation, metadata?.token_endpoint_auth_methods_supported ?? []), clientInformation, c, tokenRequestParams);
    }
    let d = await (fetchFn ?? fetch)(l, {
        method: "POST",
        headers: c,
        body: tokenRequestParams
    });
    if (!d.ok) {
        throw await Qi(d);
    }
    let m = await d.json();
    try {
        return Xht.parse(m);
    } catch (error) {
        if (typeof m === "object" && m !== null && "error" in m) {
            throw await Qi(JSON.stringify(m));
        }
        throw error;
    }
}
async function Hzo(e, { metadata, clientInformation, authorizationCode, iss, codeVerifier, redirectUri, resource, addClientAuthentication, fetchFn }) {
    zo({
        iss,
        expectedIssuer: metadata?.issuer,
        issParameterSupported: Ro(metadata)
    });
    return En(e, {
        metadata,
        tokenRequestParams: _c(authorizationCode, codeVerifier, redirectUri),
        clientInformation,
        addClientAuthentication,
        resource,
        fetchFn
    });
}
async function k1r(e, { metadata, clientInformation, refreshToken, resource, addClientAuthentication, fetchFn }) {
    return {
        refresh_token: refreshToken,
        ...await En(e, {
            metadata,
            tokenRequestParams: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken
            }),
            clientInformation,
            addClientAuthentication,
            resource,
            fetchFn
        })
    };
}
async function Kd(e, t, { metadata, resource, authorizationCode, iss, scope, fetchFn } = {}) {
    if (authorizationCode !== undefined) {
        zo({
            iss,
            expectedIssuer: metadata?.issuer,
            issParameterSupported: Ro(metadata)
        });
    }
    let c = scope ?? e.clientMetadata.scope;
    let tokenRequestParams;
    if (e.prepareTokenRequest) {
        tokenRequestParams = await e.prepareTokenRequest(c);
    }
    if (!tokenRequestParams) {
        if (!authorizationCode) {
            throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
        }
        if (!e.redirectUrl) {
            throw Error("redirectUrl is required for authorization_code flow");
        }
        tokenRequestParams = _c(authorizationCode, await e.codeVerifier(), e.redirectUrl);
    }
    let m = await e.clientInformation({
        issuer: metadata?.issuer ?? String(t)
    });
    return En(t, {
        metadata,
        tokenRequestParams,
        clientInformation: m ?? undefined,
        addClientAuthentication: e.addClientAuthentication,
        resource,
        fetchFn
    });
}
async function Jd(e, { metadata, clientMetadata, scope, fetchFn }) {
    let n;
    if (metadata) {
        if (!metadata.registration_endpoint) {
            throw Error("Incompatible auth server: does not support dynamic client registration");
        }
        n = new URL(metadata.registration_endpoint);
    } else {
        n = new URL("/register", e);
    }
    let submittedMetadata = {
        ...clientMetadata,
        ...scope === undefined ? {} : {
            scope
        }
    };
    let l = await (fetchFn ?? fetch)(n, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(submittedMetadata)
    });
    if (!l.ok) {
        throw new b9n({
            status: l.status,
            body: await l.text(),
            submittedMetadata
        });
    }
    return OAuthClientInformationFullSchema.parse(await l.json());
}
const vo = new Set([
    "tools/list",
    "prompts/list",
    "resources/list",
    "resources/templates/list",
    "server/discover"
]);
class Gd {
    _entries = new Map;
    _maxEntries;
    _stamp = 0;
    _cappedSize = 0;
    constructor(e){
        this._maxEntries = e?.maxEntries ?? 512;
    }
    get size() {
        return this._entries.size;
    }
    get(e) {
        return this._entries.get(zn(e));
    }
    set(e, t) {
        let r = zn(e);
        let s = vo.has(e.method);
        let a = !this._entries.has(r);
        if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
            for (let i of this._entries.keys()){
                if (!vo.has(i.slice(0, i.indexOf("\x00")))) {
                    this._entries.delete(i);
                    this._cappedSize--;
                    break;
                }
            }
        }
        let stamp = ++this._stamp;
        this._entries.set(r, {
            ...t,
            stamp
        });
        if (a && !s) {
            this._cappedSize++;
        }
        return stamp;
    }
    delete(e) {
        if (this._entries.delete(zn(e)) && !vo.has(e.method)) {
            this._cappedSize--;
        }
    }
    evict(e) {
        let t = `${e}\x00`;
        let r = vo.has(e);
        for (let s of this._entries.keys()){
            if (s.startsWith(t)) {
                this._entries.delete(s);
                if (!r) {
                    this._cappedSize--;
                }
            }
        }
    }
    clear() {
        this._entries.clear();
        this._cappedSize = 0;
    }
}
function zn(e) {
    return `${e.method}\x00${JSON.stringify([
        e.partition ?? "",
        e.params ?? ""
    ])}`;
}
function wn(e, t) {
    if (t === undefined) {
        return e;
    }
    return `${e}\x00${t}`;
}
const Bd = 86400000;
class Wd {
    _evictionGeneration = new Map;
    _toolIndex;
    _toolOutputValidatorIndex;
    _serverIdentity = "";
    constructor(e, t, r = ()=>{}, s = "", a = Date.now){
        this._store = e;
        this._isUserSupplied = t;
        this._reportError = r;
        this._cachePartition = s;
        this._now = a;
    }
    now() {
        return this._now();
    }
    setServerIdentity(e) {
        this._serverIdentity = e;
    }
    _partitionFor(e) {
        return JSON.stringify([
            this._serverIdentity,
            e === "public" ? "" : this._cachePartition
        ]);
    }
    async _probe(e, t) {
        let r = {
            method: e,
            params: t ?? ""
        };
        let s = this._partitionFor("private");
        let a = await this._store.get({
            ...r,
            partition: s
        });
        if (a !== undefined) {
            return a;
        }
        let n = this._partitionFor("public");
        if (n === s) {
            return;
        }
        let i = await this._store.get({
            ...r,
            partition: n
        });
        if (i?.scope === "public") {
            return i;
        }
    }
    async evict(e) {
        this._evictionGeneration.set(e, (this._evictionGeneration.get(e) ?? 0) + 1);
        await this._deleteBoth(e, "");
    }
    async _deleteBoth(e, t) {
        let r = this._partitionFor("private");
        let s = this._partitionFor("public");
        try {
            await this._store.delete({
                method: e,
                params: t,
                partition: r
            });
        } catch (error) {
            this._reportError(error);
        }
        if (s !== r) {
            try {
                await this._store.delete({
                    method: e,
                    params: t,
                    partition: s
                });
            } catch (error) {
                this._reportError(error);
            }
        }
    }
    async evictKey(e, t) {
        let r = wn(e, t);
        let s = this._evictionGeneration.get(r);
        if (s !== undefined) {
            this._evictionGeneration.set(r, s + 1);
        }
        await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
        let r = wn(e, t);
        let s = this._evictionGeneration.get(r) ?? 0;
        this._evictionGeneration.set(r, s);
        return s;
    }
    async write(e, t, r, s) {
        if ((this._evictionGeneration.get(wn(e, s?.params)) ?? 0) !== r) {
            return;
        }
        let a = s?.params ?? "";
        let n = this._partitionFor("private");
        let i = this._partitionFor("public");
        let l = (s?.scope ?? "private") === "public" ? i : n;
        try {
            await this._store.set({
                method: e,
                params: a,
                partition: l
            }, {
                value: Yd(t),
                expiresAt: s?.expiresAt,
                scope: s?.scope
            });
        } catch (error) {
            this._reportError(error);
        }
        if (i !== n) {
            try {
                await this._store.delete({
                    method: e,
                    params: a,
                    partition: l === n ? i : n
                });
            } catch (error) {
                this._reportError(error);
            }
        }
    }
    async read(e, t) {
        let r = await this._probe(e, t);
        if (r?.expiresAt === undefined || !(r.expiresAt > this.now())) {
            return;
        }
        try {
            let s = JSON.parse(r.value);
            if (typeof s !== "object" || s === null || Array.isArray(s)) {
                throw TypeError("cached document is not an object");
            }
            return {
                value: s
            };
        } catch (error) {
            this._reportError(error);
            await this._deleteBoth(e, t ?? "");
            return;
        }
    }
    resetForReconnect() {
        if (!this._isUserSupplied) {
            this._store.clear();
        }
        this._evictionGeneration.clear();
        this._toolIndex = undefined;
        this._toolOutputValidatorIndex = undefined;
        this._serverIdentity = "";
    }
    async toolDefinition(e) {
        let t = await this._probe("tools/list");
        if (t === undefined) {
            this._toolIndex = undefined;
            return;
        }
        if (this._toolIndex?.stamp !== t.stamp) {
            let r = this._decodeListTools(t);
            let s = new Map;
            if (r !== undefined) {
                for (let a of r.tools){
                    s.set(a.name, a);
                }
            }
            this._toolIndex = {
                stamp: t.stamp,
                byName: s
            };
        }
        return this._toolIndex.byName.get(e);
    }
    async outputValidator(e, t) {
        let r = await this._probe("tools/list");
        if (r === undefined) {
            this._toolOutputValidatorIndex = undefined;
            return;
        }
        if (this._toolOutputValidatorIndex?.stamp !== r.stamp) {
            let s = this._decodeListTools(r) ?? {
                tools: []
            };
            let a = new Map;
            for (let n of s.tools){
                let i = t(n);
                if (i !== undefined) {
                    a.set(n.name, i);
                }
            }
            this._toolOutputValidatorIndex = {
                stamp: r.stamp,
                byName: a
            };
        }
        return this._toolOutputValidatorIndex.byName.get(e);
    }
    _decodeListTools(e) {
        try {
            let t = JSON.parse(e.value);
            if (!Array.isArray(t?.tools) || !t.tools.every((r)=>r !== null && typeof r === "object")) {
                throw TypeError("cached tools/list document has a malformed tools array");
            }
            return t;
        } catch (error) {
            this._reportError(error);
            return;
        }
    }
}
function Yd(e) {
    let t;
    try {
        t = JSON.stringify(e);
    } catch (error) {
        throw TypeError(`cache value is not JSON-serializable: ${error instanceof Error ? error.message : String(error)}`);
    }
    if (typeof t !== "string") {
        throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
    }
    return t;
}
const Xd = -32022;
const Zd = new Set([
    -32001,
    -32020,
    -32021
]);
function Qd(e, t) {
    switch(e.kind){
        case "result":
            return eh(e.result, t);
        case "rpc-error":
            return yc(e, t);
        case "http-error":
            return th(e, t);
        case "network-error":
            return tc(e.error, t);
        case "auth-required":
            return {
                kind: "error",
                error: e.error
            };
        case "closed":
            if (t.transportKind === "stdio") {
                return {
                    kind: "legacy"
                };
            }
            return tc(Error("Connection closed during the version negotiation probe"), t);
        case "timeout":
            if (t.transportKind === "stdio") {
                return {
                    kind: "legacy"
                };
            }
            return {
                kind: "error",
                error: new Hs(Ts.RequestTimeout, `Version negotiation probe timed out after ${e.timeoutMs}ms`, {
                    timeout: e.timeoutMs
                })
            };
        case "id-mismatch":
        case "malformed":
        case "stream-end":
            return {
                kind: "legacy"
            };
    }
}
function eh(result, t) {
    let r = Je(lo).validateResult("server/discover", result);
    if (!r.ok) {
        return {
            kind: "legacy"
        };
    }
    let supportedVersions = r.value.supportedVersions;
    let a = t.clientModernVersions.find((n)=>supportedVersions.includes(n));
    if (a !== undefined) {
        return {
            kind: "modern",
            version: a,
            discover: r.value
        };
    }
    if (t.fallbackAvailable) {
        return {
            kind: "legacy"
        };
    }
    return {
        kind: "error",
        error: new co({
            supported: [
                ...supportedVersions
            ],
            requested: t.requestedVersion
        })
    };
}
function yc({ code, message, data }, t) {
    if (code === Xd) {
        let supported = vc(data);
        if (supported === undefined) {
            return {
                kind: "legacy"
            };
        }
        let i = new co({
            supported,
            requested: ah(data) ?? t.requestedVersion
        }, message);
        let l = rs(supported);
        let c = t.clientModernVersions.find((d)=>l.includes(d));
        if (c !== undefined) {
            return {
                kind: "corrective",
                version: c,
                error: i
            };
        }
        if (l.length > 0) {
            return {
                kind: "error",
                error: i
            };
        }
        if (t.fallbackAvailable) {
            return {
                kind: "legacy"
            };
        }
        return {
            kind: "error",
            error: i
        };
    }
    if (Zd.has(code)) {
        return {
            kind: "legacy"
        };
    }
    return {
        kind: "legacy"
    };
}
function th(e, t) {
    let r = oh(e.body);
    if (r !== undefined) {
        return yc(r, t);
    }
    return {
        kind: "legacy"
    };
}
function tc(cause, t) {
    if (t.environment === "browser" && rh(cause)) {
        return {
            kind: "legacy"
        };
    }
    return {
        kind: "error",
        error: new Hs(Ts.EraNegotiationFailed, `Version negotiation probe failed: ${sh(cause)}`, {
            cause
        })
    };
}
function rh(cause) {
    return cause instanceof TypeError || cause instanceof Error && cause.name === "TypeError";
}
function sh(cause) {
    if (cause instanceof Error) {
        return cause.message;
    }
    return String(cause);
}
function vc(data) {
    if (typeof data !== "object" || data === null) {
        return;
    }
    let e_supported = data.supported;
    if (!Array.isArray(e_supported) || e_supported.length === 0 || !e_supported.every((r)=>typeof r === "string")) {
        return;
    }
    return e_supported;
}
function ah(data) {
    if (typeof data !== "object" || data === null) {
        return;
    }
    let e_requested = data.requested;
    if (typeof e_requested === "string") {
        return e_requested;
    }
}
function oh(body) {
    if (body === undefined || body === "") {
        return;
    }
    let t;
    try {
        t = JSON.parse(body);
    } catch  {
        return;
    }
    if (typeof t !== "object" || t === null) {
        return;
    }
    let t_error = t.error;
    if (typeof t_error !== "object" || t_error === null) {
        return;
    }
    let { code, message, data } = t_error;
    if (typeof code !== "number") {
        return;
    }
    return {
        code,
        message: typeof message === "string" ? message : "",
        data
    };
}
const nh = "legacy";
function ih(_versionNegotiation, _supportedProtocolVersionsOption) {
    let r = _versionNegotiation?.mode ?? nh;
    if (r === "legacy") {
        return {
            kind: "legacy"
        };
    }
    let probe = _versionNegotiation?.probe ?? {};
    if (typeof r === "object") {
        if (!Ge(r.pin)) {
            throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
        }
        return {
            kind: "pin",
            version: r.pin,
            probe
        };
    }
    let a = _supportedProtocolVersionsOption ? rs(_supportedProtocolVersionsOption) : [];
    return {
        kind: "auto",
        modernVersions: a.length > 0 ? a : [
            ...sn
        ],
        fallbackAvailable: _supportedProtocolVersionsOption ? an(_supportedProtocolVersionsOption).length > 0 : true,
        probe
    };
}
function rc() {
    let e = globalThis;
    if (e.window !== undefined && e.document !== undefined) {
        return "browser";
    }
    return "node";
}
function sc(e) {
    if ("stderr" in e && "pid" in e) {
        return "stdio";
    }
    return "http";
}
const ch = class e {
    _pending;
    _probeCounter = 0;
    _transportKind;
    _issuedIds = new Set;
    _errorSinceSend;
    _savedOnMessage;
    _savedOnError;
    _savedOnClose;
    _closeDelivered = false;
    constructor(t){
        this._transport = t;
        this._savedOnMessage = t.onmessage;
        this._savedOnError = t.onerror;
        this._savedOnClose = t.onclose;
    }
    static async open(t, r) {
        let s = new e(t);
        s._transportKind = r;
        t.onmessage = (a)=>{
            let s__pending = s._pending;
            if (s__pending !== undefined && (Xve(a) || mme(a)) && a.id === s__pending.id) {
                s._pending = undefined;
                if (Xve(a)) {
                    s__pending.resolve({
                        kind: "response",
                        result: a.result
                    });
                } else {
                    s__pending.resolve({
                        kind: "response",
                        error: a.error
                    });
                }
                return;
            }
            if (s__pending !== undefined && s._transportKind === "http" && (Xve(a) || mme(a)) && !s._issuedIds.has(a.id)) {
                s._pending = undefined;
                let i = ac(JSON.stringify(a.id));
                let l = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(s__pending.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`);
                l.name = "McpProbeIdMismatchError";
                s._savedOnError?.(l);
                s__pending.resolve({
                    kind: "id-mismatch"
                });
                return;
            }
        };
        t.onerror = (a)=>{
            if (s._pending !== undefined && s._errorSinceSend === undefined) {
                s._errorSinceSend = a;
            }
            let s__pending = s._pending;
            if (s__pending !== undefined && s._transportKind === "http" && oc(a)) {
                setTimeout(()=>{
                    if (s._pending !== s__pending) {
                        return;
                    }
                    s._pending = undefined;
                    let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${ac(a instanceof Error ? a.message : String(a))}) \u2014 treating the server as pre-2026-07-28`);
                    i.name = "McpProbeMalformedReplyError";
                    s._savedOnError?.(i);
                    s__pending.resolve({
                        kind: "malformed"
                    });
                }, 0);
            }
            s._savedOnError?.(a);
        };
        t.onclose = ()=>{
            let s__pending = s._pending;
            if (s__pending !== undefined) {
                s._pending = undefined;
                s__pending.resolve({
                    kind: "closed"
                });
            }
            s._closeDelivered = true;
            s._savedOnClose?.();
        };
        try {
            await t.start();
        } catch (error) {
            s.detach();
            throw error;
        }
        return s;
    }
    async exchange(t, r) {
        let s = `server-discover-probe-${++this._probeCounter}`;
        this._issuedIds.add(s);
        this._errorSinceSend = undefined;
        return new Promise((resolvePromise)=>{
            let n = false;
            let resolve = (c)=>{
                if (n) {
                    return;
                }
                n = true;
                clearTimeout(l);
                if (this._pending?.id === s) {
                    this._pending = undefined;
                }
                resolvePromise(c);
            };
            let l = setTimeout(()=>resolve({
                    kind: "timeout"
                }), r);
            this._pending = {
                id: s,
                resolve
            };
            this._transport.send(t(s), {
                onRequestStreamEnd: ()=>{
                    setTimeout(()=>{
                        let _errorSinceSend = this._errorSinceSend;
                        if (_errorSinceSend !== undefined && !oc(_errorSinceSend)) {
                            resolve({
                                kind: "send-error",
                                error: _errorSinceSend instanceof Error ? _errorSinceSend : Error(String(_errorSinceSend))
                            });
                            return;
                        }
                        resolve({
                            kind: "stream-end"
                        });
                    }, 0);
                }
            }).catch((c)=>resolve({
                    kind: "send-error",
                    error: c
                }));
        });
    }
    detach() {
        this._pending = undefined;
        this._transport.onmessage = this._savedOnMessage;
        this._transport.onerror = this._savedOnError;
        if (this._closeDelivered && this._savedOnClose !== undefined) {
            let t = this._savedOnClose;
            let r = this._transport;
            let s = false;
            let a = ()=>{
                if (!s) {
                    s = true;
                    return;
                }
                t();
            };
            r.onclose = a;
            $n.set(r, ()=>{
                if (r.onclose === a) {
                    r.onclose = t;
                }
            });
        } else {
            this._transport.onclose = this._savedOnClose;
        }
    }
    release() {
        this.detach();
        let _transport = this._transport;
        let t_start = _transport.start;
        let s = true;
        _transport.start = async ()=>{
            if (s) {
                s = false;
                _transport.start = t_start;
                return;
            }
            return t_start.call(_transport);
        };
    }
};
var $n = new WeakMap;
function ac(e) {
    let t = String(e);
    if (t.length <= 200) {
        return t;
    }
    let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
    return `${t.slice(0, r)}\u2026 [truncated]`;
}
function oc(e) {
    if (e instanceof SyntaxError) {
        return true;
    }
    return typeof e === "object" && e !== null && (e.name === "ZodError" || Array.isArray(e.issues));
}
function nc(e) {
    let t = $n.get(e);
    $n.delete(e);
    t?.();
}
function lh(e, requestedVersion, clientInfo, clientCapabilities) {
    return {
        jsonrpc: "2.0",
        id: e,
        method: "server/discover",
        params: {
            _meta: Je(requestedVersion).outboundEnvelope({
                protocolVersion: requestedVersion,
                clientInfo,
                clientCapabilities
            })
        }
    };
}
function uh(e, timeoutMs) {
    switch(e.kind){
        case "response":
            if (e.error === undefined) {
                return {
                    kind: "result",
                    result: e.result
                };
            }
            return {
                kind: "rpc-error",
                ...e.error
            };
        case "send-error":
            {
                let r = e.error;
                if (r instanceof aE) {
                    let s = r.data?.text;
                    return {
                        kind: "http-error",
                        status: r.data.status,
                        body: typeof s === "string" ? s : undefined
                    };
                }
                if (r instanceof lx || r instanceof Error && r.name === "UnauthorizedError") {
                    return {
                        kind: "auth-required",
                        error: r
                    };
                }
                return {
                    kind: "network-error",
                    error: r
                };
            }
        case "closed":
            return {
                kind: "closed"
            };
        case "id-mismatch":
            return {
                kind: "id-mismatch"
            };
        case "malformed":
            return {
                kind: "malformed"
            };
        case "stream-end":
            return {
                kind: "stream-end"
            };
        case "timeout":
            return {
                kind: "timeout",
                timeoutMs
            };
    }
}
async function bc(e, t) {
    let r = e.probe.timeoutMs ?? t.defaultTimeoutMs;
    let s = Math.max(0, e.probe.maxRetries ?? 0);
    let clientModernVersions = e.kind === "pin" ? [
        e.version
    ] : e.modernVersions;
    let fallbackAvailable = e.kind === "auto" && e.fallbackAvailable;
    let i = await ch.open(t.transport, t.transportKind);
    let l = async ()=>{
        let requestedVersion = clientModernVersions[0];
        let m = false;
        let _ = s;
        while(true){
            let w = await i.exchange((v)=>lh(v, requestedVersion, t.clientInfo, t.capabilities), r);
            if (w.kind === "timeout" && _ > 0) {
                _--;
                continue;
            }
            let P = uh(w, r);
            if (P.kind === "timeout") {
                t.transport._anthropicProbeTimedOut = true;
            }
            let y = Qd(P, {
                clientModernVersions,
                requestedVersion,
                fallbackAvailable,
                environment: t.environment,
                transportKind: t.transportKind
            });
            switch(y.kind){
                case "modern":
                    return {
                        era: "modern",
                        version: y.version,
                        discover: y.discover
                    };
                case "corrective":
                    if (m) {
                        throw y.error;
                    }
                    m = true;
                    requestedVersion = y.version;
                    continue;
                case "legacy":
                    {
                        if (P.kind === "id-mismatch" || P.kind === "malformed" || P.kind === "stream-end") {
                            t.transport._anthropicProbeLegacyEvidence = P.kind;
                        }
                        let v = P.kind === "closed" ? "the connection closed during the server/discover probe" : undefined;
                        if (e.kind === "pin") {
                            throw new Hs(Ts.EraNegotiationFailed, v === undefined ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${v} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`);
                        }
                        if (!e.fallbackAvailable) {
                            throw new Hs(Ts.EraNegotiationFailed, v === undefined ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${v} and this client supports no pre-2026-07-28 protocol version to fall back to`);
                        }
                        if (v !== undefined && t.disposableProbe !== true) {
                            throw new Hs(Ts.EraNegotiationFailed, `Version negotiation failed: ${v} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`);
                        }
                        return {
                            era: "legacy"
                        };
                    }
                case "error":
                    throw y.error;
            }
        }
    };
    let c;
    try {
        c = await l();
    } catch (error) {
        i.detach();
        throw error;
    }
    i.release();
    return c;
}
function dh(e) {
    let t = Object.getPrototypeOf(e);
    if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) {
        return;
    }
    let e__serverParams = e._serverParams;
    if (typeof e__serverParams === "object" && e__serverParams !== null && typeof e__serverParams.command === "string") {
        return e__serverParams;
    }
}
async function hh(e, t, r, s) {
    let n = new t.constructor({
        ...r,
        stderr: "ignore"
    });
    let t_close = t.close;
    let l = false;
    let c;
    let d = new Promise((resolve, reject)=>{
        c = ()=>reject(ic());
    });
    t.close = async ()=>{
        l = true;
        c?.();
        return t_close.call(t);
    };
    let m;
    try {
        let _ = bc(e, {
            ...s,
            transport: n,
            transportKind: "stdio",
            disposableProbe: true
        });
        _.catch(()=>{});
        m = await Promise.race([
            _,
            d
        ]);
    } finally{
        await mh(n);
        t.close = t_close;
    }
    if (l) {
        throw ic();
    }
    return m;
}
function ic() {
    return new Hs(Ts.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function mh(e) {
    try {
        let t = e._dispose;
        await (typeof t === "function" ? t.call(e) : e.close());
    } catch  {}
}
function cc(e) {
    let t = e._meta?.[He];
    if ($i.Implementation(t)) {
        return t;
    }
}
function bo(e, t) {
    if (!e || t === null || typeof t !== "object") {
        return;
    }
    if (e.type === "object" && e.properties && typeof e.properties === "object") {
        let r = t;
        let s = e.properties;
        for (let a of Object.keys(s)){
            let n = s[a];
            if (r[a] === undefined && Object.prototype.hasOwnProperty.call(n, "default")) {
                r[a] = n.default;
            }
            if (r[a] !== undefined) {
                bo(n, r[a]);
            }
        }
    }
    if (Array.isArray(e.anyOf)) {
        for (let r of e.anyOf){
            if (typeof r !== "boolean") {
                bo(r, t);
            }
        }
    }
    if (Array.isArray(e.oneOf)) {
        for (let r of e.oneOf){
            if (typeof r !== "boolean") {
                bo(r, t);
            }
        }
    }
}
function ph(elicitation) {
    if (!elicitation) {
        return {
            supportsFormMode: false,
            supportsUrlMode: false
        };
    }
    let t = elicitation.form !== undefined;
    let supportsUrlMode = elicitation.url !== undefined;
    return {
        supportsFormMode: t || !t && !supportsUrlMode,
        supportsUrlMode
    };
}
function fh(prior) {
    if (typeof prior === "object" && prior !== null) {
        if (prior.kind === "legacy" && !("supportedVersions" in prior) && !("discover" in prior)) {
            return prior;
        }
        if (prior.kind === "modern" && AWe.safeParse(prior.discover).success) {
            return prior;
        }
    }
    throw new Hs(Ts.EraNegotiationFailed, "connect({ prior }): unrecognized prior — expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
const lc = {
    "notifications/tools/list_changed": [
        "tools/list"
    ],
    "notifications/prompts/list_changed": [
        "prompts/list"
    ],
    "notifications/resources/list_changed": [
        "resources/list",
        "resources/templates/list"
    ]
};
const Sh = 64;
class T1r extends Ei {
    _serverCapabilities;
    _serverVersion;
    _capabilities;
    _instructions;
    _jsonSchemaValidator;
    _cache;
    _defaultCacheTtlMs;
    _listMaxPages;
    _listChangedDebounceTimers = new Map;
    _listChangedConfig;
    _enforceStrictCapabilities;
    _versionNegotiation;
    _supportedProtocolVersionsOption;
    _inputRequiredDriverConfig;
    _listenState = new Map;
    _nextListenId = 0;
    _autoOpenedSubscription;
    _discoverResult;
    _resetConnectionState() {
        this._negotiatedProtocolVersion = undefined;
        this._serverCapabilities = undefined;
        this._serverVersion = undefined;
        this._instructions = undefined;
        this._discoverResult = undefined;
        this._autoOpenedSubscription = undefined;
        if (this._listenState.size > 0) {
            let e = new Hs(Ts.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
            for (let t of this._listenState.values()){
                t.settle({
                    cause: "remote",
                    error: e
                });
            }
        }
        this._listenState.clear();
        for (let e of this._listChangedDebounceTimers.values()){
            clearTimeout(e);
        }
        this._listChangedDebounceTimers.clear();
        this._cache.resetForReconnect();
    }
    async close() {
        try {
            await super.close();
        } finally{
            this._resetConnectionState();
        }
    }
    constructor(e, t){
        super(t);
        this._clientInfo = e;
        this._capabilities = t?.capabilities ? {
            ...t.capabilities
        } : {};
        this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new f1t;
        this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? false;
        this._versionNegotiation = t?.versionNegotiation;
        this._supportedProtocolVersionsOption = t?.supportedProtocolVersions;
        this._inputRequiredDriverConfig = bi(t?.inputRequired);
        this._cache = new Wd(t?.responseCacheStore ?? new Gd, t?.responseCacheStore !== undefined, (r)=>this._reportStoreError(r), t?.cachePartition ?? "");
        this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0;
        this._listMaxPages = t?.listMaxPages ?? Sh;
        if (t?.listChanged) {
            this._listChangedConfig = t.listChanged;
        }
    }
    buildContext(e, t) {
        return e;
    }
    _shouldDropInbound(e) {
        if (this._negotiatedProtocolVersion !== undefined && Ge(this._negotiatedProtocolVersion) && aX(e)) {
            return "drop";
        }
    }
    _outboundMetaEnvelope() {
        let _negotiatedProtocolVersion = this._negotiatedProtocolVersion;
        if (_negotiatedProtocolVersion === undefined) {
            return;
        }
        return this._wireCodec().outboundEnvelope({
            protocolVersion: _negotiatedProtocolVersion,
            clientInfo: this._clientInfo,
            clientCapabilities: this._capabilities
        });
    }
    _resolveNonCompleteResult(e, t) {
        if (!this._inputRequiredDriverConfig.autoFulfill) {
            return Promise.reject(new Hs(Ts.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, {
                resultType: "input_required",
                method: t.request.method
            }));
        }
        return Ti({
            getRequestHandler: (r)=>this._getRequestHandler(r),
            buildContext: (r)=>this.buildContext(r, undefined),
            sessionId: this.transport?.sessionId
        }, this._inputRequiredDriverConfig, e, t);
    }
    _setupListChangedHandlers(e) {
        if (e.tools && this._serverCapabilities?.tools?.listChanged) {
            this._setupListChangedHandler("tools", "notifications/tools/list_changed", e.tools, async ()=>(await this.listTools(undefined, {
                    cacheMode: "refresh"
                })).tools);
        }
        if (e.prompts && this._serverCapabilities?.prompts?.listChanged) {
            this._setupListChangedHandler("prompts", "notifications/prompts/list_changed", e.prompts, async ()=>(await this.listPrompts(undefined, {
                    cacheMode: "refresh"
                })).prompts);
        }
        if (e.resources && this._serverCapabilities?.resources?.listChanged) {
            this._setupListChangedHandler("resources", "notifications/resources/list_changed", e.resources, async ()=>(await this.listResources(undefined, {
                    cacheMode: "refresh"
                })).resources);
        }
    }
    registerCapabilities(e) {
        if (this.transport) {
            throw Error("Cannot register capabilities after connecting to transport");
        }
        this._capabilities = Pi(this._capabilities, e);
    }
    setVersionNegotiation(e) {
        if (this.transport) {
            throw Error("Cannot configure version negotiation after connecting to transport");
        }
        this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
        if (e === "elicitation/create") {
            return async (r, s)=>{
                let a = Je(this._negotiatedProtocolVersion);
                let n = a.validateRequest("elicitation/create", r);
                if (!n.ok && n.reason === "not-in-era") {
                    n = a.validateInputRequest("elicitation/create", r);
                }
                if (!n.ok) {
                    throw new Ol(n.reason === "not-in-era" ? pi.InternalError : pi.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
                }
                let { params } = n.value;
                params.mode = params.mode ?? "form";
                let { supportsFormMode, supportsUrlMode } = ph(this._capabilities.elicitation);
                if (params.mode === "form" && !supportsFormMode) {
                    throw new Ol(pi.InvalidParams, "Client does not support form-mode elicitation requests");
                }
                if (params.mode === "url" && !supportsUrlMode) {
                    throw new Ol(pi.InvalidParams, "Client does not support URL-mode elicitation requests");
                }
                let d = await t(r, s);
                let m = a.validateResult("elicitation/create", d);
                if (!m.ok && m.reason === "not-in-era") {
                    m = a.validateInputResponse("elicitation/create", d);
                }
                if (!m.ok) {
                    throw new Ol(m.reason === "not-in-era" ? pi.InternalError : pi.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
                }
                let m_value = m.value;
                let w = params.mode === "form" ? params.requestedSchema : undefined;
                if (params.mode === "form" && m_value.action === "accept" && m_value.content && w && this._capabilities.elicitation?.form?.applyDefaults) {
                    try {
                        bo(w, m_value.content);
                    } catch  {}
                }
                return m_value;
            };
        }
        if (e === "sampling/createMessage") {
            return async (r, s)=>{
                let a = Je(this._negotiatedProtocolVersion);
                let n = a.validateRequest("sampling/createMessage", r);
                if (!n.ok && n.reason === "not-in-era") {
                    n = a.validateInputRequest("sampling/createMessage", r);
                }
                if (!n.ok) {
                    throw new Ol(n.reason === "not-in-era" ? pi.InternalError : pi.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
                }
                let { params } = n.value;
                let l = await t(r, s);
                let c = Boolean(params.tools || params.toolChoice);
                let d = a.samplingResultVariant(c, l);
                if (!d.ok && d.reason === "not-in-era") {
                    d = a.validateInputResponse("sampling/createMessage", l);
                }
                if (!d.ok) {
                    throw new Ol(d.reason === "not-in-era" ? pi.InternalError : pi.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
                }
                return d.value;
            };
        }
        return t;
    }
    assertCapability(e, t) {
        if (!this._serverCapabilities?.[e]) {
            throw new Hs(Ts.CapabilityNotSupported, `Server does not support ${e} (required for ${t})`);
        }
    }
    async connect(e, t) {
        if (t?.prior != null) {
            return this._connectFromPrior(e, fh(t.prior), t);
        }
        let r = ih(this._versionNegotiation, this._supportedProtocolVersionsOption);
        if (r.kind !== "legacy") {
            return this._connectNegotiated(e, r, t);
        }
        return this._connectPlainLegacy(e, t);
    }
    async _connectPlainLegacy(e, t) {
        await super.connect(e);
        if (e.sessionId !== undefined) {
            let r = this._negotiatedProtocolVersion;
            if (r !== undefined) {
                e.setProtocolVersion?.(r);
            }
            return;
        }
        this._resetConnectionState();
        await this._legacyHandshake(e, t);
    }
    async _legacyHandshake(e, t, r = true) {
        let s = an(this._supportedProtocolVersions);
        try {
            let protocolVersion = s[0];
            if (protocolVersion === undefined) {
                throw new Hs(Ts.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
            }
            let n = await this.request({
                method: "initialize",
                params: {
                    protocolVersion,
                    capabilities: this._capabilities,
                    clientInfo: this._clientInfo
                }
            }, t);
            if (n === undefined) {
                throw Error(`Server sent invalid initialize result: ${n}`);
            }
            if (!s.includes(n.protocolVersion)) {
                throw Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
            }
            this._serverCapabilities = n.capabilities;
            this._serverVersion = n.serverInfo;
            this._cache.setServerIdentity(this._deriveServerIdentity(e));
            if (e.setProtocolVersion) {
                e.setProtocolVersion(n.protocolVersion);
            }
            this._instructions = n.instructions;
            await this.notification({
                method: "notifications/initialized"
            });
            this._negotiatedProtocolVersion = n.protocolVersion;
            if (this._listChangedConfig) {
                this._setupListChangedHandlers(this._listChangedConfig);
            }
        } catch (error) {
            if (r) {
                this.close();
            }
            throw error;
        }
    }
    async _discoverAfterRejectedInitialize(e, t, r, s) {
        let a = r.kind === "auto" && e._anthropicProbeTimedOut === true && t instanceof Ol;
        let n = a && t.code === pi.UnsupportedProtocolVersion ? vc(t.data) : undefined;
        let i = !a ? undefined : n === undefined ? r.modernVersions[0] : r.modernVersions.find((l)=>n.includes(l));
        if (i === undefined) {
            this.close();
            throw t;
        }
        try {
            this._negotiatedProtocolVersion = i;
            let discover = await this.discover({
                ...s,
                timeout: Math.min(3000, r.probe.timeoutMs ?? s?.timeout ?? ss)
            });
            if (!discover.supportedVersions.includes(i)) {
                throw Error(`the second server/discover does not offer ${i}`);
            }
            return {
                era: "modern",
                version: i,
                discover
            };
        } catch (error) {
            e._anthropicRediscoverError = error;
            this._negotiatedProtocolVersion = undefined;
            this.close();
            throw t;
        }
    }
    async _connectNegotiated(e, t, r) {
        if (e.sessionId !== undefined) {
            await super.connect(e);
            let a = this._negotiatedProtocolVersion;
            if (a !== undefined && e.setProtocolVersion) {
                e.setProtocolVersion(a);
            }
            return;
        }
        this._resetConnectionState();
        let s;
        try {
            let transportKind = sc(e);
            let n = {
                clientInfo: this._clientInfo,
                capabilities: this._capabilities,
                environment: rc(),
                defaultTimeoutMs: r?.timeout ?? ss
            };
            let i = transportKind === "stdio" ? dh(e) : undefined;
            s = i === undefined ? await bc(t, {
                ...n,
                transport: e,
                transportKind
            }) : await hh(t, e, i, n);
        } catch (error) {
            await e.close().catch(()=>{});
            nc(e);
            throw error;
        }
        nc(e);
        await super.connect(e);
        if (s.era === "legacy") {
            try {
                await this._legacyHandshake(e, r, false);
                return;
            } catch (error) {
                s = await this._discoverAfterRejectedInitialize(e, error, t, r);
            }
        }
        this._serverCapabilities = s.discover.capabilities;
        this._serverVersion = cc(s.discover);
        this._cache.setServerIdentity(this._deriveServerIdentity(e));
        this._instructions = s.discover.instructions;
        this._discoverResult = s.discover;
        this._negotiatedProtocolVersion = s.version;
        if (e.setProtocolVersion) {
            e.setProtocolVersion(s.version);
        }
        if (this._listChangedConfig) {
            let a = this._listChangedConfig;
            let n = this._serverCapabilities;
            let i = {
                ...a.tools && n?.tools?.listChanged && {
                    tools: a.tools
                },
                ...a.prompts && n?.prompts?.listChanged && {
                    prompts: a.prompts
                },
                ...a.resources && n?.resources?.listChanged && {
                    resources: a.resources
                }
            };
            let l = true;
            try {
                this._setupListChangedHandlers(i);
            } catch (error) {
                l = false;
                this.onerror?.(error instanceof Error ? error : Error(String(error)));
            }
            let c = l ? {
                ...i.tools && {
                    toolsListChanged: true
                },
                ...i.prompts && {
                    promptsListChanged: true
                },
                ...i.resources && {
                    resourcesListChanged: true
                }
            } : {};
            if (Object.keys(c).length > 0) {
                let d = new AbortController;
                let m = ()=>d.abort(r?.signal?.reason);
                if (r?.signal?.aborted) {
                    m();
                }
                r?.signal?.addEventListener("abort", m);
                try {
                    this._autoOpenedSubscription = await this.listen(c, {
                        timeout: r?.timeout,
                        signal: d.signal
                    });
                } catch (error) {
                    if (r?.signal?.aborted) {
                        await this.close().catch(()=>{});
                        throw error;
                    }
                    this.onerror?.(error instanceof Error ? error : Error(String(error)));
                } finally{
                    r?.signal?.removeEventListener("abort", m);
                }
            }
        }
    }
    async _connectFromPrior(e, t, r) {
        if (t.kind === "legacy") {
            return this._connectPlainLegacy(e, r);
        }
        let t_discover = t.discover;
        this._resetConnectionState();
        let _supportedProtocolVersionsOption = this._supportedProtocolVersionsOption;
        let n = (_supportedProtocolVersionsOption && rs(_supportedProtocolVersionsOption).length > 0 ? rs(_supportedProtocolVersionsOption) : sn).find((i)=>t_discover.supportedVersions.includes(i));
        if (n === undefined) {
            throw new Hs(Ts.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
        }
        await super.connect(e);
        this._discoverResult = t_discover;
        this._serverCapabilities = t_discover.capabilities;
        this._serverVersion = cc(t_discover);
        this._cache.setServerIdentity(this._deriveServerIdentity(e));
        this._instructions = t_discover.instructions;
        this._negotiatedProtocolVersion = n;
        e.setProtocolVersion?.(n);
        if (this._listChangedConfig) {
            try {
                this._setupListChangedHandlers(this._listChangedConfig);
            } catch (error) {
                this.onerror?.(error instanceof Error ? error : Error(String(error)));
            }
        }
    }
    getServerCapabilities() {
        return this._serverCapabilities;
    }
    getServerVersion() {
        return this._serverVersion;
    }
    _deriveServerIdentity(e) {
        let _serverVersion = this._serverVersion;
        if (_serverVersion !== undefined) {
            return `${_serverVersion.name}@${_serverVersion.version}`;
        }
        return e.sessionId ?? `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    getNegotiatedProtocolVersion() {
        return this._negotiatedProtocolVersion;
    }
    getProtocolEra() {
        let _negotiatedProtocolVersion = this._negotiatedProtocolVersion;
        if (_negotiatedProtocolVersion === undefined) {
            return;
        }
        if (Ge(_negotiatedProtocolVersion)) {
            return "modern";
        }
        return "legacy";
    }
    getInstructions() {
        return this._instructions;
    }
    getDiscoverResult() {
        return this._discoverResult;
    }
    assertCapabilityForMethod(e) {
        switch(e){
            case "logging/setLevel":
                if (!this._serverCapabilities?.logging) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support logging (required for ${e})`);
                }
                break;
            case "prompts/get":
            case "prompts/list":
                if (!this._serverCapabilities?.prompts) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support prompts (required for ${e})`);
                }
                break;
            case "resources/list":
            case "resources/templates/list":
            case "resources/read":
            case "resources/subscribe":
            case "resources/unsubscribe":
                if (!this._serverCapabilities?.resources) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support resources (required for ${e})`);
                }
                if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e})`);
                }
                break;
            case "tools/call":
            case "tools/list":
                if (!this._serverCapabilities?.tools) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support tools (required for ${e})`);
                }
                break;
            case "completion/complete":
                if (!this._serverCapabilities?.completions) {
                    throw new Hs(Ts.CapabilityNotSupported, `Server does not support completions (required for ${e})`);
                }
                break;
            case "initialize":
                break;
            case "server/discover":
                break;
            case "ping":
                break;
        }
    }
    assertNotificationCapability(e) {
        switch(e){
            case "notifications/roots/list_changed":
                if (!this._capabilities.roots?.listChanged) {
                    throw new Hs(Ts.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e})`);
                }
                break;
            case "notifications/initialized":
                break;
            case "notifications/cancelled":
                break;
            case "notifications/progress":
                break;
        }
    }
    assertRequestHandlerCapability(e) {
        switch(e){
            case "sampling/createMessage":
                if (!this._capabilities.sampling) {
                    throw new Hs(Ts.CapabilityNotSupported, `Client does not support sampling capability (required for ${e})`);
                }
                break;
            case "elicitation/create":
                if (!this._capabilities.elicitation) {
                    throw new Hs(Ts.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e})`);
                }
                break;
            case "roots/list":
                if (!this._capabilities.roots) {
                    throw new Hs(Ts.CapabilityNotSupported, `Client does not support roots capability (required for ${e})`);
                }
                break;
            case "ping":
                break;
        }
    }
    async ping(e) {
        return this.request({
            method: "ping"
        }, e);
    }
    async discover(e) {
        let t = await this._requestWithSchema({
            method: "server/discover"
        }, AWe, e);
        this._discoverResult = t;
        return t;
    }
    async complete(e, t) {
        return this.request({
            method: "completion/complete",
            params: e
        }, t);
    }
    async setLoggingLevel(level, t) {
        return this.request({
            method: "logging/setLevel",
            params: {
                level
            }
        }, t);
    }
    async getPrompt(e, t) {
        return this.request({
            method: "prompts/get",
            params: e
        }, t);
    }
    async listPrompts(e, t) {
        if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) {
            console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list");
            return {
                prompts: []
            };
        }
        if (e?.cursor !== undefined) {
            return this.request({
                method: "prompts/list",
                params: e
            }, t);
        }
        let r = await this._serveFromCache("prompts/list", undefined, t);
        if (r !== undefined) {
            return r;
        }
        return this._listAllPages("prompts/list", e, t, (s, a)=>s.prompts.push(...a.prompts));
    }
    async listResources(e, t) {
        if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) {
            console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list");
            return {
                resources: []
            };
        }
        if (e?.cursor !== undefined) {
            return this.request({
                method: "resources/list",
                params: e
            }, t);
        }
        let r = await this._serveFromCache("resources/list", undefined, t);
        if (r !== undefined) {
            return r;
        }
        return this._listAllPages("resources/list", e, t, (s, a)=>s.resources.push(...a.resources));
    }
    async listResourceTemplates(e, t) {
        if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) {
            console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list");
            return {
                resourceTemplates: []
            };
        }
        if (e?.cursor !== undefined) {
            return this.request({
                method: "resources/templates/list",
                params: e
            }, t);
        }
        let r = await this._serveFromCache("resources/templates/list", undefined, t);
        if (r !== undefined) {
            return r;
        }
        return this._listAllPages("resources/templates/list", e, t, (s, a)=>s.resourceTemplates.push(...a.resourceTemplates));
    }
    async _listAllPages(e, t, r, s, a) {
        let n = r?.cacheMode === "bypass";
        let i = this._cache.captureGeneration(e);
        let l = await this.request({
            method: e,
            ...t && {
                params: {
                    ...t
                }
            }
        }, r);
        let l_nextCursor = l.nextCursor;
        let d = new Set;
        let m = 1;
        while(l_nextCursor !== undefined && !d.has(l_nextCursor)){
            if (this._listMaxPages !== 0 && m >= this._listMaxPages) {
                throw new Hs(Ts.ListPaginationExceeded, `${e}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, {
                    method: e,
                    listMaxPages: this._listMaxPages
                });
            }
            d.add(l_nextCursor);
            let _ = await this.request({
                method: e,
                params: {
                    ...t,
                    cursor: l_nextCursor
                }
            }, r);
            s(l, _);
            l_nextCursor = _.nextCursor;
            m++;
        }
        delete l.nextCursor;
        a?.(l);
        if (n) {
            return l;
        }
        await this._cache.write(e, l, i, this._freshness(l));
        return l;
    }
    _freshness(e, t) {
        let r = e;
        let s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs;
        let a = r.cacheScope === "public" ? "public" : "private";
        return {
            expiresAt: this._cache.now() + Math.min(Math.max(0, s), Bd),
            scope: a,
            params: t
        };
    }
    async _serveFromCache(e, t, r) {
        if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") {
            return;
        }
        let s = await this._cache.read(e, t).catch((a)=>void this._reportStoreError(a));
        if (s !== undefined) {
            if (r?.signal?.aborted) {
                let a = r.signal.reason;
                throw a instanceof Hs ? a : new Hs(Ts.RequestTimeout, String(a));
            }
            return s.value;
        }
    }
    _reportStoreError(e) {
        this.onerror?.(e instanceof Error ? e : Error(String(e)));
    }
    _compileOutputValidator(e) {
        if (!e.outputSchema) {
            return;
        }
        try {
            return {
                ok: true,
                validator: this._jsonSchemaValidator.getValidator(e.outputSchema)
            };
        } catch (compileError) {
            return {
                ok: false,
                compileError
            };
        }
    }
    async _resolveXMcpHeaderScan(e, t) {
        let r = t ?? await this._cache.toolDefinition(e);
        if (r === undefined) {
            return undefined;
        }
        return hn(r.inputSchema);
    }
    async readResource(e, t) {
        let r = await this._serveFromCache("resources/read", e.uri, t);
        if (r !== undefined) {
            return r;
        }
        let s = this._cache.captureGeneration("resources/read", e.uri);
        let a = await this.request({
            method: "resources/read",
            params: e
        }, t);
        if (t?.cacheMode !== "bypass") {
            let n = this._freshness(a, e.uri);
            if (n.expiresAt > this._cache.now()) {
                await this._cache.write("resources/read", a, s, n);
            } else if (t?.cacheMode === "refresh") {
                await this._cache.evictKey("resources/read", e.uri);
            }
        }
        return a;
    }
    async subscribeResource(e, t) {
        return this.request({
            method: "resources/subscribe",
            params: e
        }, t);
    }
    async unsubscribeResource(e, t) {
        return this.request({
            method: "resources/unsubscribe",
            params: e
        }, t);
    }
    async listen(notifications, t) {
        if (this.transport === undefined) {
            throw new Hs(Ts.NotConnected, "Not connected");
        }
        let _negotiatedProtocolVersion = this._negotiatedProtocolVersion;
        if (_negotiatedProtocolVersion === undefined || !Ge(_negotiatedProtocolVersion)) {
            throw new Hs(Ts.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${_negotiatedProtocolVersion ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, {
                method: "subscriptions/listen",
                protocolVersion: _negotiatedProtocolVersion
            });
        }
        if (t?.signal?.aborted) {
            let g = t.signal.reason;
            throw g instanceof Hs ? g : new Hs(Ts.RequestTimeout, String(g));
        }
        let s = new AbortController;
        let a = `listen:${this._nextListenId++}`;
        let n = "opening";
        let i;
        let l;
        let c;
        let d;
        let m = new Promise((resolve, reject)=>{
            c = resolve;
            d = reject;
        });
        m.catch(()=>{});
        let _;
        let closed = new Promise((resolve)=>{
            _ = resolve;
        });
        let settle = (g)=>{
            if (n === "closed") {
                return;
            }
            let f = n === "opening";
            if (i !== undefined) {
                clearTimeout(i);
                i = undefined;
            }
            if ("ack" in g) {
                n = "open";
                c(g.ack);
                return;
            }
            n = "closed";
            if (l !== undefined) {
                t?.signal?.removeEventListener("abort", l);
            }
            this._listenState.delete(a);
            s.abort();
            _(g.cause);
            if (f) {
                d(g.error ?? new Hs(Ts.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
            }
        };
        let y = async ()=>{
            s.abort();
            await this.notification({
                method: "notifications/cancelled",
                params: {
                    requestId: a
                }
            }).catch(()=>{});
        };
        let close = async ()=>{
            if (n === "closed") {
                return;
            }
            settle({
                cause: "local"
            });
            await y();
        };
        this._listenState.set(a, {
            settle
        });
        let p = t?.timeout ?? ss;
        i = setTimeout(()=>{
            settle({
                cause: "remote",
                error: new Hs(Ts.RequestTimeout, "subscriptions/listen ack timed out", {
                    timeout: p
                })
            });
            y().catch(()=>{});
        }, p);
        if (t?.signal) {
            let g = t.signal;
            l = ()=>{
                if (n === "closed") {
                    return;
                }
                let g_reason = g.reason;
                settle({
                    cause: "local",
                    error: g_reason instanceof Error ? g_reason : Error(String(g_reason ?? "Aborted"))
                });
                y().catch(()=>{});
            };
            g.addEventListener("abort", l, {
                once: true
            });
        }
        let h = {
            jsonrpc: "2.0",
            id: a,
            method: "subscriptions/listen",
            params: {
                _meta: {
                    ...this._outboundMetaEnvelope()
                },
                notifications
            }
        };
        try {
            await this.transport.send(h, {
                requestSignal: s.signal,
                onRequestStreamEnd: ()=>settle({
                        cause: "remote",
                        error: Error("subscriptions/listen: stream ended")
                    })
            });
        } catch (error) {
            settle({
                cause: "remote",
                error: error instanceof Error ? error : Error(String(error))
            });
        }
        return {
            honoredFilter: await m,
            close,
            closed
        };
    }
    get autoOpenedSubscription() {
        return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
        let r = Object.hasOwn(lc, e.method) ? lc[e.method] : undefined;
        if (e.method === "notifications/resources/updated") {
            let s = e.params?.uri;
            if (typeof s === "string") {
                this._cache.evictKey("resources/read", s);
            }
        } else if (r !== undefined) {
            for (let s of r){
                this._cache.evict(s);
            }
        }
        if (e.method === "notifications/subscriptions/acknowledged") {
            let s = e.params?._meta?.[vr];
            let a = typeof s === "string" ? this._listenState.get(s) : undefined;
            if (a !== undefined) {
                let n = this._wireCodec().validateNotification("notifications/subscriptions/acknowledged", e);
                a.settle({
                    ack: n.ok ? n.value.params.notifications : {}
                });
                return;
            }
        }
        if (e.method === "notifications/cancelled") {
            let s = e.params?.requestId;
            let a = typeof s === "string" ? this._listenState.get(s) : undefined;
            if (a !== undefined) {
                a.settle({
                    cause: "remote",
                    error: Error("subscriptions/listen: server cancelled the subscription")
                });
                return;
            }
        }
        super._onnotification(e, t);
    }
    _onresponse(e) {
        let t = e.id;
        let r = typeof t === "string" ? this._listenState.get(t) : undefined;
        if (r !== undefined) {
            if (mme(e)) {
                r.settle({
                    cause: "remote",
                    error: Ol.fromError(e.error.code, e.error.message, e.error.data)
                });
            } else {
                r.settle({
                    cause: "graceful",
                    error: new Hs(Ts.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging")
                });
            }
            return;
        }
        super._onresponse(e);
    }
    _onclose() {
        if (this._listenState.size > 0) {
            let e = new Hs(Ts.ConnectionClosed, "Connection closed");
            for (let t of this._listenState.values()){
                t.settle({
                    cause: "remote",
                    error: e
                });
            }
            this._listenState.clear();
        }
        super._onclose();
    }
    async callTool(e, t) {
        let r = this.getProtocolEra() === "modern" && rc() !== "browser";
        let s = async ()=>{
            if (!r) {
                return t;
            }
            let c;
            try {
                c = await this._resolveXMcpHeaderScan(e.name, t?.toolDefinition);
            } catch (error) {
                this._reportStoreError(error);
            }
            if (!c?.valid || c.declarations.length === 0) {
                return t;
            }
            let d = yi(c.declarations, e.arguments);
            if (Object.keys(d).length === 0) {
                return t;
            }
            return {
                ...t,
                headers: {
                    ...t?.headers,
                    ...d
                }
            };
        };
        let a = t?.toolDefinition === undefined ? await this._cache.outputValidator(e.name, (c)=>this._compileOutputValidator(c)).catch((c)=>void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition);
        let n = ()=>{
            if (a === undefined || a.ok) {
                return;
            }
            let a_compileError = a.compileError;
            let d = (a_compileError instanceof Error ? a_compileError.message : String(a_compileError)).slice(0, 200);
            throw new Ol(pi.InvalidParams, `Tool '${e.name}' has an invalid outputSchema: ${d}`);
        };
        n();
        let i;
        try {
            i = await this.request({
                method: "tools/call",
                params: e
            }, await s());
        } catch (error) {
            let d = error instanceof Ol && error.code === Jt;
            if (!r || !d || t?.toolDefinition !== undefined) {
                throw error;
            }
            let m = {
                signal: t?.signal,
                timeout: t?.timeout,
                cacheMode: "refresh"
            };
            await this._cache.evict("tools/list");
            await this.listTools(undefined, m).catch((_)=>this._reportStoreError(_));
            a = await this._cache.outputValidator(e.name, (_)=>this._compileOutputValidator(_)).catch((_)=>void this._reportStoreError(_));
            n();
            i = await this.request({
                method: "tools/call",
                params: e
            }, await s());
        }
        if (t?.allowTask === true && i.resultType === "task") {
            return i;
        }
        let l = a !== undefined && a.ok ? a.validator : undefined;
        if (l) {
            if (i.structuredContent === undefined && !i.isError) {
                throw new Ol(pi.InvalidRequest, `Tool ${e.name} has an output schema but did not return structured content`);
            }
            if (i.structuredContent !== undefined && !i.isError) {
                try {
                    let c = l(i.structuredContent);
                    if (!c.valid) {
                        throw new Ol(pi.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
                    }
                } catch (error) {
                    if (error instanceof Ol) {
                        throw error;
                    }
                    throw new Ol(pi.InvalidParams, `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`);
                }
            }
        }
        return i;
    }
    async listTools(e, t) {
        if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) {
            console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list");
            return {
                tools: []
            };
        }
        if (e?.cursor !== undefined) {
            let s = await this.request({
                method: "tools/list",
                params: e
            }, t);
            this._excludeInvalidXMcpHeaderTools(s);
            return s;
        }
        let r = await this._serveFromCache("tools/list", undefined, t);
        if (r !== undefined) {
            return r;
        }
        return this._listAllPages("tools/list", e, t, (s, a)=>s.tools.push(...a.tools), (s)=>this._excludeInvalidXMcpHeaderTools(s));
    }
    _excludeInvalidXMcpHeaderTools(e) {
        if (this.getProtocolEra() !== "modern" || !this.transport || sc(this.transport) === "stdio") {
            return;
        }
        let t = e.tools.filter((r)=>{
            let s = hn(r.inputSchema);
            if (!s.valid) {
                console.warn(`[mcp-sdk] excluding tool '${r.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`);
                return false;
            }
            return true;
        });
        if (t.length !== e.tools.length) {
            e.tools = t;
        }
    }
    _setupListChangedHandler(e, t, r, s) {
        let a = ho(Lr, r);
        if (!a.success) {
            throw Error(`Invalid ${e} listChanged options: ${a.error.message}`);
        }
        if (typeof r.onChanged !== "function") {
            throw TypeError(`Invalid ${e} listChanged options: onChanged must be a function`);
        }
        let { autoRefresh, debounceMs } = a.data;
        let { onChanged } = r;
        let c = async ()=>{
            if (!autoRefresh) {
                onChanged(null, null);
                return;
            }
            try {
                onChanged(null, await s());
            } catch (error) {
                onChanged(error instanceof Error ? error : Error(String(error)), null);
            }
        };
        let d = ()=>{
            if (debounceMs) {
                let m = this._listChangedDebounceTimers.get(e);
                if (m) {
                    clearTimeout(m);
                }
                let _ = setTimeout(c, debounceMs);
                this._listChangedDebounceTimers.set(e, _);
            } else {
                c();
            }
        };
        this.setNotificationHandler(t, d);
    }
    async sendRootsListChanged() {
        return this.notification({
            method: "notifications/roots/list_changed"
        });
    }
}
class v9n extends Error {
    static{
        Object.defineProperty(this, "mcpBrand", {
            value: "mcp.SseError"
        });
    }
    static [Symbol.hasInstance](e) {
        return Ie(this, e);
    }
    static isInstance(e) {
        if (typeof this !== "function") {
            throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
        }
        return Ie(this, e);
    }
    constructor(e, t, r){
        super(`SSE error: ${t}`);
        this.code = e;
        this.event = r;
        bt(this, new.target);
    }
}
class Agn {
    _eventSource;
    _endpoint;
    _abortController;
    _url;
    _resourceMetadataUrl;
    _scope;
    _eventSourceInit;
    _requestInit;
    _authProvider;
    _oauthProvider;
    _skipIssuerMetadataValidation;
    _fetch;
    _fetchWithInit;
    _protocolVersion;
    onclose;
    onerror;
    onmessage;
    constructor(e, t){
        this._url = e;
        this._resourceMetadataUrl = undefined;
        this._scope = undefined;
        this._eventSourceInit = t?.eventSourceInit;
        this._requestInit = t?.requestInit;
        this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation;
        if (mc(t?.authProvider)) {
            this._oauthProvider = t.authProvider;
            this._authProvider = pc(t.authProvider, {
                skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
            });
        } else {
            this._authProvider = t?.authProvider;
        }
        this._fetch = t?.fetch;
        this._fetchWithInit = p1t(t?.fetch, t?.requestInit);
    }
    _last401Response;
    async _commonHeaders() {
        let e = {};
        let t = await this._authProvider?.token();
        if (t) {
            e.Authorization = `Bearer ${t}`;
        }
        if (this._protocolVersion) {
            e["mcp-protocol-version"] = this._protocolVersion;
        }
        let r = ts(this._requestInit?.headers);
        return new Headers({
            ...e,
            ...r
        });
    }
    _startOrAuth() {
        let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
        return new Promise((resolve, reject)=>{
            this._eventSource = new OWe(this._url.href, {
                ...this._eventSourceInit,
                fetch: async (s, a)=>{
                    let n = await this._commonHeaders();
                    n.set("Accept", "text/event-stream");
                    let i = await e(s, {
                        ...a,
                        headers: n
                    });
                    if (i.status === 401) {
                        this._last401Response = i;
                        if (i.headers.has("www-authenticate")) {
                            let { resourceMetadataUrl, scope } = yOe(i);
                            this._resourceMetadataUrl = resourceMetadataUrl;
                            this._scope = scope;
                        }
                    }
                    return i;
                }
            });
            this._abortController = new AbortController;
            this._eventSource.onerror = (s)=>{
                if (s.code === 401 && this._authProvider) {
                    if (this._authProvider.onUnauthorized && this._last401Response) {
                        let response = this._last401Response;
                        this._last401Response = undefined;
                        this._eventSource?.close();
                        this._authProvider.onUnauthorized({
                            response,
                            serverUrl: this._url,
                            fetchFn: this._fetchWithInit
                        }).then(()=>this._startOrAuth().then(resolve, reject), (l)=>{
                            this.onerror?.(l);
                            reject(l);
                        });
                        return;
                    }
                    let n = new lx;
                    reject(n);
                    this.onerror?.(n);
                    return;
                }
                let a = new v9n(s.code, s.message, s);
                reject(a);
                this.onerror?.(a);
            };
            this._eventSource.onopen = ()=>{};
            this._eventSource.addEventListener("endpoint", (s)=>{
                let a = s;
                try {
                    this._endpoint = new URL(a.data, this._url);
                    if (this._endpoint.origin !== this._url.origin) {
                        throw Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
                    }
                } catch (error) {
                    reject(error);
                    this.onerror?.(error);
                    this.close();
                    return;
                }
                resolve();
            });
            this._eventSource.onmessage = (s)=>{
                let a = s;
                let n;
                try {
                    n = Gee.parse(JSON.parse(a.data));
                } catch (error) {
                    this.onerror?.(error);
                    return;
                }
                this.onmessage?.(n);
            };
        });
    }
    async start() {
        if (this._eventSource) {
            throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        return await this._startOrAuth();
    }
    async finishAuth(e, t) {
        if (!this._oauthProvider) {
            throw new lx("finishAuth requires an OAuthClientProvider");
        }
        let { authorizationCode, iss } = await fc(e, t, this._oauthProvider, this._url, {
            fetchFn: this._fetchWithInit,
            resourceMetadataUrl: this._resourceMetadataUrl
        });
        if (await Qht(this._oauthProvider, {
            serverUrl: this._url,
            authorizationCode,
            iss,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit,
            skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
        }) !== "AUTHORIZED") {
            throw new lx("Failed to authorize");
        }
    }
    async close() {
        this._abortController?.abort();
        this._eventSource?.close();
        this.onclose?.();
    }
    async send(e) {
        return this._send(e, false);
    }
    async _send(e, t) {
        if (!this._endpoint) {
            throw new Hs(Ts.NotConnected, "Not connected");
        }
        try {
            let r = await this._commonHeaders();
            r.set("content-type", "application/json");
            let s = {
                ...this._requestInit,
                method: "POST",
                headers: r,
                body: JSON.stringify(e),
                signal: this._abortController?.signal
            };
            let a = await (this._fetch ?? fetch)(this._endpoint, s);
            if (!a.ok) {
                if (a.status === 401 && this._authProvider) {
                    if (a.headers.has("www-authenticate")) {
                        let { resourceMetadataUrl, scope } = yOe(a);
                        this._resourceMetadataUrl = resourceMetadataUrl;
                        this._scope = scope;
                    }
                    if (this._authProvider.onUnauthorized && !t) {
                        await this._authProvider.onUnauthorized({
                            response: a,
                            serverUrl: this._url,
                            fetchFn: this._fetchWithInit
                        });
                        await a.text?.().catch(()=>{});
                        return this._send(e, true);
                    }
                    await a.text?.().catch(()=>{});
                    if (t) {
                        throw new aE(Ts.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
                            status: 401,
                            statusText: a.statusText
                        });
                    }
                    throw new lx;
                }
                let n = await a.text?.().catch(()=>null);
                throw Error(`Error POSTing to endpoint (HTTP ${a.status}): ${n}`);
            }
            await a.text?.().catch(()=>{});
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
    }
    setProtocolVersion(e) {
        this._protocolVersion = e;
    }
}
const gh = 1;
const _h = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
};
const yh = new Set([
    "authorization",
    "content-type",
    "mcp-protocol-version",
    "mcp-method",
    "mcp-name",
    "mcp-session-id"
]);
function uc(e, requestSignal) {
    if (typeof AbortSignal.any === "function") {
        return AbortSignal.any([
            e,
            requestSignal
        ]);
    }
    let r = new AbortController;
    if (e.aborted) {
        r.abort(e.reason);
        return r.signal;
    }
    if (requestSignal.aborted) {
        r.abort(requestSignal.reason);
        return r.signal;
    }
    let s = ()=>{
        e.removeEventListener("abort", a);
        requestSignal.removeEventListener("abort", n);
    };
    function a() {
        s();
        r.abort(e.reason);
    }
    function n() {
        s();
        r.abort(requestSignal.reason);
    }
    e.addEventListener("abort", a, {
        once: true
    });
    requestSignal.addEventListener("abort", n, {
        once: true
    });
    return r.signal;
}
class m1t {
    _abortController;
    _url;
    _resourceMetadataUrl;
    _scope;
    _requestInit;
    _authProvider;
    _oauthProvider;
    _skipIssuerMetadataValidation;
    _fetch;
    _fetchWithInit;
    _sessionId;
    _reconnectionOptions;
    _protocolVersion;
    _onInsufficientScope;
    _maxStepUpRetries;
    _serverRetryMs;
    _reconnectionScheduler;
    _cancelReconnection;
    onclose;
    onerror;
    onmessage;
    hasPerRequestStream = true;
    constructor(e, t){
        this._url = e;
        this._resourceMetadataUrl = undefined;
        this._scope = undefined;
        this._requestInit = t?.requestInit;
        this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation;
        if (mc(t?.authProvider)) {
            this._oauthProvider = t.authProvider;
            this._authProvider = pc(t.authProvider, {
                skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
            });
        } else {
            this._authProvider = t?.authProvider;
        }
        this._fetch = t?.fetch;
        this._fetchWithInit = p1t(t?.fetch, t?.requestInit);
        this._sessionId = t?.sessionId;
        this._protocolVersion = t?.protocolVersion;
        this._reconnectionOptions = t?.reconnectionOptions ?? _h;
        this._reconnectionScheduler = t?.reconnectionScheduler;
        this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize";
        this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? gh);
    }
    async _stepUpAuthorize(e, t) {
        if (this._onInsufficientScope === "throw") {
            throw new Xi({
                requiredScope: e.scope,
                resourceMetadataUrl: e.resourceMetadataUrl,
                errorDescription: e.errorDescription
            });
        }
        if (!this._oauthProvider) {
            throw new Xi({
                requiredScope: e.scope,
                resourceMetadataUrl: e.resourceMetadataUrl,
                errorDescription: e.errorDescription
            });
        }
        if (t >= this._maxStepUpRetries) {
            throw new aE(Ts.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, {
                status: 403,
                statusText: e.statusText ?? "Forbidden",
                text: e.text
            });
        }
        if (e.resourceMetadataUrl) {
            this._resourceMetadataUrl = e.resourceMetadataUrl;
        }
        let r = await this._oauthProvider.tokens();
        let s = yn(this._scope, r?.scope, e.scope);
        this._scope = s;
        let forceReauthorization = Td(s, r?.scope);
        return Qht(this._oauthProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: s,
            forceReauthorization,
            fetchFn: this._fetchWithInit,
            skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
        });
    }
    async _commonHeaders() {
        let e = {};
        let t = await this._authProvider?.token();
        if (t) {
            e.Authorization = `Bearer ${t}`;
        }
        if (this._sessionId) {
            e["mcp-session-id"] = this._sessionId;
        }
        if (this._protocolVersion) {
            e["mcp-protocol-version"] = this._protocolVersion;
        }
        let r = ts(this._requestInit?.headers);
        return new Headers({
            ...e,
            ...r
        });
    }
    _applyBodyDerivedHeaders(e, t) {
        if (Array.isArray(t) || !aX(t)) {
            return;
        }
        let r = t.params?._meta?.[Fe];
        if (typeof r !== "string") {
            return;
        }
        e.set("mcp-protocol-version", r);
        e.set("mcp-method", t.method);
        let t_params = t.params;
        let a = t.method === "resources/read" ? typeof t_params?.uri === "string" ? t_params.uri : undefined : typeof t_params?.name === "string" ? t_params.name : undefined;
        if (a !== undefined) {
            e.set("mcp-name", uo(a));
        }
        let n = t.method.startsWith("tasks/") && typeof t_params?.taskId === "string" ? t_params.taskId : undefined;
        if (n !== undefined) {
            e.set("mcp-name", uo(n));
        }
    }
    _isModernEnvelopedRequest(e) {
        if (Array.isArray(e) || !aX(e)) {
            return false;
        }
        let t = e.params?._meta?.[Fe];
        return typeof t === "string" && Ge(t);
    }
    async _startOrAuthSse(e, t = false, r = 0) {
        let { resumptionToken, requestSignal } = e;
        let n = ()=>this._abortController?.signal.aborted === true || requestSignal?.aborted === true;
        try {
            let i = await this._commonHeaders();
            let l = [
                ...i.get("accept")?.split(",").map((_)=>_.trim().toLowerCase()) ?? [],
                "text/event-stream"
            ];
            i.set("accept", [
                ...new Set(l)
            ].join(", "));
            if (resumptionToken) {
                i.set("last-event-id", resumptionToken);
            }
            let c = this._abortController?.signal;
            let d = requestSignal !== undefined && c !== undefined ? uc(c, requestSignal) : requestSignal ?? c;
            let m = await (this._fetch ?? fetch)(this._url, {
                ...this._requestInit,
                method: "GET",
                headers: i,
                signal: d
            });
            if (!m.ok) {
                if (m.status === 401 && this._authProvider) {
                    if (m.headers.has("www-authenticate")) {
                        let { resourceMetadataUrl, scope } = yOe(m);
                        this._resourceMetadataUrl = resourceMetadataUrl;
                        this._scope = yn(this._scope, scope);
                    }
                    if (this._authProvider.onUnauthorized && !t) {
                        await this._authProvider.onUnauthorized({
                            response: m,
                            serverUrl: this._url,
                            fetchFn: this._fetchWithInit
                        });
                        await m.text?.().catch(()=>{});
                        return this._startOrAuthSse(e, true, r);
                    }
                    await m.text?.().catch(()=>{});
                    if (t) {
                        throw new aE(Ts.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
                            status: 401,
                            statusText: m.statusText
                        });
                    }
                    throw new lx;
                }
                if (m.status === 403) {
                    let { resourceMetadataUrl, scope, error, errorDescription } = yOe(m);
                    if (error === "insufficient_scope") {
                        let text = await m.text?.().catch(()=>null);
                        if (await this._stepUpAuthorize({
                            scope,
                            resourceMetadataUrl,
                            errorDescription,
                            statusText: m.statusText,
                            text
                        }, r) !== "AUTHORIZED") {
                            throw new lx;
                        }
                        return this._startOrAuthSse(e, t, r + 1);
                    }
                }
                await m.text?.().catch(()=>{});
                if (m.status === 405) {
                    e.onRequestStreamEnd?.();
                    return;
                }
                throw new aE(Ts.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${m.statusText}`, {
                    status: m.status,
                    statusText: m.statusText
                });
            }
            this._handleSseStream(m.body, e, true);
        } catch (error) {
            if (!n()) {
                this.onerror?.(error);
            }
            throw error;
        }
    }
    _getNextReconnectionDelay(e) {
        if (this._serverRetryMs !== undefined) {
            return this._serverRetryMs;
        }
        let initialReconnectionDelay = this._reconnectionOptions.initialReconnectionDelay;
        let reconnectionDelayGrowFactor = this._reconnectionOptions.reconnectionDelayGrowFactor;
        let maxReconnectionDelay = this._reconnectionOptions.maxReconnectionDelay;
        return Math.min(initialReconnectionDelay * reconnectionDelayGrowFactor ** e, maxReconnectionDelay);
    }
    _scheduleReconnection(e, t = 0) {
        let maxRetries = this._reconnectionOptions.maxRetries;
        if (t >= maxRetries) {
            this.onerror?.(Error(`Maximum reconnection attempts (${maxRetries}) exceeded.`));
            e.onRequestStreamEnd?.();
            return;
        }
        let s = this._getNextReconnectionDelay(t);
        let a = ()=>{
            this._cancelReconnection = undefined;
            if (this._abortController?.signal.aborted || e.requestSignal?.aborted) {
                return;
            }
            this._startOrAuthSse(e).catch((n)=>{
                if (this._abortController?.signal.aborted || e.requestSignal?.aborted) {
                    return;
                }
                this.onerror?.(Error(`Failed to reconnect SSE stream: ${n instanceof Error ? n.message : String(n)}`));
                try {
                    this._scheduleReconnection(e, t + 1);
                } catch (error) {
                    this.onerror?.(error instanceof Error ? error : Error(String(error)));
                }
            });
        };
        if (this._reconnectionScheduler) {
            let n = this._reconnectionScheduler(a, s, t);
            this._cancelReconnection = typeof n === "function" ? n : undefined;
        } else {
            let n = setTimeout(a, s);
            this._cancelReconnection = ()=>clearTimeout(n);
        }
    }
    _handleSseStream(e, t, r) {
        if (!e) {
            t.onRequestStreamEnd?.();
            return;
        }
        let { onresumptiontoken, replayMessageId, requestSignal, onRequestStreamEnd } = t;
        let l = ()=>this._abortController?.signal.aborted === true || requestSignal?.aborted === true;
        let resumptionToken;
        let d = false;
        let m = false;
        (async ()=>{
            try {
                let w = e.pipeThrough(new TextDecoderStream).pipeThrough(new S1t({
                    onRetry: (P)=>{
                        this._serverRetryMs = P;
                    }
                })).getReader();
                while(true){
                    let { value, done } = await w.read();
                    if (done) {
                        break;
                    }
                    if (value.id) {
                        resumptionToken = value.id;
                        d = true;
                        onresumptiontoken?.(value.id);
                    }
                    if (!value.data) {
                        continue;
                    }
                    if (!value.event || value.event === "message") {
                        try {
                            let v = Gee.parse(JSON.parse(value.data));
                            if (Xve(v) || mme(v)) {
                                m = true;
                                if (replayMessageId !== undefined) {
                                    v.id = replayMessageId;
                                }
                            }
                            this.onmessage?.(v);
                        } catch (error) {
                            this.onerror?.(error);
                        }
                    }
                }
                if ((r || d) && !m && this._abortController && !l()) {
                    this._scheduleReconnection({
                        resumptionToken,
                        onresumptiontoken,
                        replayMessageId,
                        requestSignal,
                        onRequestStreamEnd
                    }, 0);
                } else if (!l()) {
                    onRequestStreamEnd?.();
                }
            } catch (error) {
                if (l()) {
                    return;
                }
                this.onerror?.(Error(`SSE stream disconnected: ${error}`));
                if ((r || d) && !m && this._abortController && !l()) {
                    try {
                        this._scheduleReconnection({
                            resumptionToken,
                            onresumptiontoken,
                            replayMessageId,
                            requestSignal,
                            onRequestStreamEnd
                        }, 0);
                    } catch (err) {
                        this.onerror?.(Error(`Failed to reconnect: ${err instanceof Error ? err.message : String(err)}`));
                        onRequestStreamEnd?.();
                    }
                } else {
                    onRequestStreamEnd?.();
                }
            }
        })();
    }
    async start() {
        if (this._abortController) {
            throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        this._abortController = new AbortController;
    }
    async finishAuth(e, t) {
        if (!this._oauthProvider) {
            throw new lx("finishAuth requires an OAuthClientProvider");
        }
        let { authorizationCode, iss } = await fc(e, t, this._oauthProvider, this._url, {
            fetchFn: this._fetchWithInit,
            resourceMetadataUrl: this._resourceMetadataUrl
        });
        if (await Qht(this._oauthProvider, {
            serverUrl: this._url,
            authorizationCode,
            iss,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit,
            skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
        }) !== "AUTHORIZED") {
            throw new lx("Failed to authorize");
        }
    }
    async close() {
        try {
            this._cancelReconnection?.();
        } finally{
            this._cancelReconnection = undefined;
            this._abortController?.abort();
            this.onclose?.();
        }
    }
    async send(e, t) {
        return this._send(e, t, false);
    }
    async _send(e, t, r, s = 0) {
        try {
            let { resumptionToken, onresumptiontoken } = t || {};
            if (resumptionToken) {
                this._startOrAuthSse({
                    resumptionToken,
                    replayMessageId: aX(e) ? e.id : undefined,
                    requestSignal: t?.requestSignal
                }).catch((p)=>this.onerror?.(p));
                return;
            }
            let i = await this._commonHeaders();
            this._applyBodyDerivedHeaders(i, e);
            let l = Array.isArray(e) ? e.some((p)=>dn(p)) : dn(e);
            if (l) {
                i.delete("mcp-session-id");
            }
            if (t?.headers !== undefined) {
                for (let [p, h] of Object.entries(t.headers)){
                    if (yh.has(p.toLowerCase())) {
                        continue;
                    }
                    i.set(p, h);
                }
            }
            i.set("content-type", "application/json");
            let c = [
                ...i.get("accept")?.split(",").map((p)=>p.trim().toLowerCase()) ?? [],
                "application/json",
                "text/event-stream"
            ];
            i.set("accept", [
                ...new Set(c)
            ].join(", "));
            let d = this._abortController?.signal;
            let m = t?.requestSignal !== undefined && d !== undefined ? uc(d, t.requestSignal) : t?.requestSignal ?? d;
            let _ = {
                ...this._requestInit,
                method: "POST",
                headers: i,
                body: JSON.stringify(e),
                signal: m
            };
            let w = await (this._fetch ?? fetch)(this._url, _);
            if (l && w.ok) {
                this._sessionId = w.headers.get("mcp-session-id") || undefined;
            }
            if (!w.ok) {
                if (w.status === 401 && this._authProvider) {
                    if (w.headers.has("www-authenticate")) {
                        let { resourceMetadataUrl, scope } = yOe(w);
                        this._resourceMetadataUrl = resourceMetadataUrl;
                        this._scope = yn(this._scope, scope);
                    }
                    if (this._authProvider.onUnauthorized && !r) {
                        await this._authProvider.onUnauthorized({
                            response: w,
                            serverUrl: this._url,
                            fetchFn: this._fetchWithInit
                        });
                        await w.text?.().catch(()=>{});
                        return this._send(e, t, true, s);
                    }
                    await w.text?.().catch(()=>{});
                    if (r) {
                        throw new aE(Ts.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
                            status: 401,
                            statusText: w.statusText
                        });
                    }
                    throw new lx;
                }
                let text = await w.text?.().catch(()=>null);
                if (w.status === 403) {
                    let { resourceMetadataUrl, scope, error, errorDescription } = yOe(w);
                    if (error === "insufficient_scope") {
                        if (await this._stepUpAuthorize({
                            scope,
                            resourceMetadataUrl,
                            errorDescription,
                            statusText: w.statusText,
                            text
                        }, s) !== "AUTHORIZED") {
                            throw new lx;
                        }
                        return this._send(e, t, r, s + 1);
                    }
                }
                if (w.status === 400 && typeof text === "string" && this._isModernEnvelopedRequest(e)) {
                    try {
                        let h = Gee.parse(JSON.parse(text));
                        let g = (Array.isArray(e) ? e : [
                            e
                        ]).filter((f)=>aX(f));
                        if (mme(h) && g.some((f)=>f.id === h.id)) {
                            this.onmessage?.(h);
                            return;
                        }
                    } catch  {}
                }
                throw new aE(Ts.ClientHttpNotImplemented, `Error POSTing to endpoint: ${text}`, {
                    status: w.status,
                    statusText: w.statusText,
                    text
                });
            }
            if (w.status === 202) {
                await w.text?.().catch(()=>{});
                if (y9n(e)) {
                    this._startOrAuthSse({
                        resumptionToken: undefined
                    }).catch((p)=>this.onerror?.(p));
                }
                return;
            }
            let P = (Array.isArray(e) ? e : [
                e
            ]).some((p)=>"method" in p && "id" in p && p.id !== undefined);
            let contentType = w.headers.get("content-type");
            let v = Ci(contentType);
            if (P) {
                if (v === "text/event-stream") {
                    this._handleSseStream(w.body, {
                        onresumptiontoken,
                        requestSignal: t?.requestSignal,
                        onRequestStreamEnd: t?.onRequestStreamEnd
                    }, false);
                } else if (v === "application/json") {
                    let p = await w.json();
                    let h = Array.isArray(p) ? p.map((g)=>Gee.parse(g)) : [
                        Gee.parse(p)
                    ];
                    for (let g of h){
                        this.onmessage?.(g);
                    }
                } else {
                    await w.text?.().catch(()=>{});
                    throw new Hs(Ts.ClientHttpUnexpectedContent, `Unexpected content type: ${contentType}`, {
                        contentType
                    });
                }
            } else {
                await w.text?.().catch(()=>{});
            }
        } catch (error) {
            if (t?.requestSignal?.aborted !== true) {
                this.onerror?.(error);
            }
            throw error;
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    async terminateSession() {
        if (!this._sessionId) {
            return;
        }
        try {
            let headers = await this._commonHeaders();
            let t = {
                ...this._requestInit,
                method: "DELETE",
                headers,
                signal: this._abortController?.signal
            };
            let r = await (this._fetch ?? fetch)(this._url, t);
            await r.text?.().catch(()=>{});
            if (!r.ok && r.status !== 405) {
                throw new aE(Ts.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, {
                    status: r.status,
                    statusText: r.statusText
                });
            }
            this._sessionId = undefined;
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
    }
    setProtocolVersion(e) {
        this._protocolVersion = e;
    }
    get protocolVersion() {
        return this._protocolVersion;
    }
    async resumeStream(resumptionToken, t) {
        await this._startOrAuthSse({
            resumptionToken,
            onresumptiontoken: t?.onresumptiontoken
        });
    }
}
export { _Qe, r1t, hOe, Tgn, o1t, ax, Gee, bQe, Vht, SQe, AWe, qht, s1t, CWe, i1t, a1t, l1t, Kht, RWe, c1t, d1t, u1t, wQe, Yht, Xht, Jht, Vee, LG, Ts, Hs, aE, pi, Ol, aX, h9n, Xve, mme, y9n, w1r, _9n, v1r, p1t, f1t, vQe, b9n, lx, Qht, yOe, S9n, Zht, w9n, E1r, Hzo, k1r, T1r, v9n, Agn, m1t };
