import { zw, $pe, wBe, Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { NIn } from "/$bunfs/root/chunk-cet7cb4b.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
const { floor, random } = Math;
function F(e, n) {
    return e + floor(random() * (n - e + 1));
}
const E = F;
function B(e) {
    const e_length = e.length;
    if (e_length) {
        return e[E(0, e_length - 1)];
    }
}
const b = B;
function V(e, n) {
    return wBe(n, function(i) {
        return e[i];
    });
}
const T = V;
function H(e) {
    if (e == null) {
        return [];
    }
    return T(e, $pe(e));
}
const k = H;
function G(e) {
    return b(k(e));
}
const M = G;
function W(e) {
    const n = zw(e) ? b : M;
    return n(e);
}
const wU = W;
N();
function R$t() {
    let spinnerVerbs = ft().spinnerVerbs;
    if (!spinnerVerbs) {
        return v;
    }
    if (spinnerVerbs.mode === "replace") {
        if (spinnerVerbs.verbs.length > 0) {
            return spinnerVerbs.verbs;
        }
        return v;
    }
    return [
        ...v,
        ...spinnerVerbs.verbs
    ];
}
var v = [
    "Accomplishing",
    "Actioning",
    "Actualizing",
    "Architecting",
    "Baking",
    "Beaming",
    "Beboppin'",
    "Befuddling",
    "Billowing",
    "Blanching",
    "Bloviating",
    "Boogieing",
    "Boondoggling",
    "Booping",
    "Bootstrapping",
    "Brewing",
    "Bunning",
    "Burrowing",
    "Calculating",
    "Canoodling",
    "Caramelizing",
    "Cascading",
    "Catapulting",
    "Cerebrating",
    "Channeling",
    "Choreographing",
    "Churning",
    "Clauding",
    "Coalescing",
    "Cogitating",
    "Combobulating",
    "Composing",
    "Computing",
    "Concocting",
    "Considering",
    "Contemplating",
    "Cooking",
    "Crafting",
    "Creating",
    "Crunching",
    "Crystallizing",
    "Cultivating",
    "Deciphering",
    "Deliberating",
    "Determining",
    "Dilly-dallying",
    "Discombobulating",
    "Doing",
    "Doodling",
    "Drizzling",
    "Ebbing",
    "Effecting",
    "Elucidating",
    "Embellishing",
    "Enchanting",
    "Envisioning",
    "Fermenting",
    "Fiddle-faddling",
    "Finagling",
    "Flambéing",
    "Flibbertigibbeting",
    "Flowing",
    "Flummoxing",
    "Fluttering",
    "Forging",
    "Forming",
    "Frolicking",
    "Frosting",
    "Gallivanting",
    "Galloping",
    "Garnishing",
    "Generating",
    "Gesticulating",
    "Germinating",
    "Gitifying",
    "Grooving",
    "Gusting",
    "Harmonizing",
    "Hashing",
    "Hatching",
    "Herding",
    "Honking",
    "Hullaballooing",
    "Hyperspacing",
    "Ideating",
    "Imagining",
    "Improvising",
    "Incubating",
    "Inferring",
    "Infusing",
    "Ionizing",
    "Jitterbugging",
    "Julienning",
    "Kerfuffling",
    "Kneading",
    "Leavening",
    "Levitating",
    "Lollygagging",
    "Manifesting",
    "Marinating",
    "Meandering",
    "Metamorphosing",
    "Misting",
    "Moonwalking",
    "Moseying",
    "Mulling",
    "Mustering",
    "Musing",
    "Nebulizing",
    "Nesting",
    "Newspapering",
    "Noodling",
    "Nucleating",
    "Onioning",
    "Orbiting",
    "Orchestrating",
    "Osmosing",
    "Perambulating",
    "Percolating",
    "Perusing",
    "Philosophizing",
    "Photosynthesizing",
    "Polishing",
    "Pollinating",
    "Pondering",
    "Pontificating",
    "Pouncing",
    "Precipitating",
    "Prestidigitating",
    "Processing",
    "Proofing",
    "Propagating",
    "Puttering",
    "Puzzling",
    "Quantumizing",
    "Razzle-dazzling",
    "Razzmatazzing",
    "Recombobulating",
    "Reticulating",
    "Roosting",
    "Ruminating",
    "Sautéing",
    "Scampering",
    "Schlepping",
    "Scurrying",
    "Seasoning",
    "Shenaniganing",
    "Shimmying",
    "Simmering",
    "Skedaddling",
    "Sketching",
    "Slithering",
    "Smooshing",
    "Sock-hopping",
    "Spelunking",
    "Spinning",
    "Sprouting",
    "Stewing",
    "Sublimating",
    "Swirling",
    "Swooping",
    "Symbioting",
    "Synthesizing",
    "Tempering",
    "Thinking",
    "Thundering",
    "Tinkering",
    "Tomfoolering",
    "Topsy-turvying",
    "Transfiguring",
    "Transmogrifying",
    "Transmuting",
    "Twisting",
    "Undulating",
    "Unfurling",
    "Unraveling",
    "Vibing",
    "Waddling",
    "Wandering",
    "Warping",
    "Whatchamacalliting",
    "Whirlpooling",
    "Whirring",
    "Whisking",
    "Wibbling",
    "Working",
    "Wrangling",
    "Zesting",
    "Zigzagging"
];
const vdn = "API error";
function w(e) {
    try {
        let malformed = Y(e);
        if (malformed === null || malformed === "not_a_retry_status" || e === null || e.kind !== "retrying") {
            return {
                status: malformed === null ? e : null,
                malformed
            };
        }
        if (![
            e.attempt,
            e.maxRetries,
            e.deadline
        ].every(Number.isFinite)) {
            return {
                status: null,
                malformed: "counters_are_not_numbers"
            };
        }
        let i = e.error;
        let l = typeof i === "object" && i !== null && "status" in i ? i.status : undefined;
        return {
            status: {
                ...e,
                error: {
                    ...U,
                    status: typeof l === "number" && Number.isFinite(l) ? l : undefined
                }
            },
            malformed
        };
    } catch  {
        return {
            status: null,
            malformed: "unreadable"
        };
    }
}
function P(e) {
    c(new O(K[e]));
}
const A = {
    retrying: true,
    stalled: false,
    auto_mode_unavailable: false,
    low_priority_waiting: false
};
var U = {
    message: vdn,
    status: undefined,
    requestId: undefined,
    formatted: vdn,
    connection: null,
    isNetworkDown: false,
    rateLimits: null,
    noResponse: null
};
const C = "Spinner ignored an API retry status it could not draw (session unaffected): ";
const p = "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ";
var K = {
    not_a_retry_status: `${C}it is not an object with a known kind`,
    unreadable: `${C}reading it threw`,
    counters_are_not_numbers: `${C}its error field is unusable and its counters are not numbers`,
    error_is_nullish: `${p}its error field is undefined or null`,
    error_is_a_string: `${p}its error field is a string`,
    error_is_not_an_object: `${p}its error field is a number, boolean, bigint, symbol or function`,
    formatted_is_not_a_string: `${p}error.formatted is set but is not a string`,
    rate_limit_type_is_not_a_string: `${p}error.rateLimits.rateLimitType is set but is not a string`,
    error_is_an_error_instance: `${p}error.formatted is undefined on an Error instance`,
    error_has_no_keys: `${p}error.formatted is undefined on an object with no keys`,
    error_has_api_error_keys: `${p}error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError`,
    error_has_snapshot_keys: `${p}error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot`,
    error_is_another_object: `${p}error.formatted is undefined on another kind of object`
};
class O extends x {
    constructor(e){
        super(e);
        this.name = "MalformedRetryStatusError";
    }
}
function Y(e) {
    if (e === null) {
        return null;
    }
    let n = typeof e === "object" && "kind" in e ? e.kind : undefined;
    if (!q(n)) {
        return "not_a_retry_status";
    }
    if (!A[n]) {
        return null;
    }
    let i = typeof e === "object" && "error" in e ? e.error : undefined;
    if (i === undefined || i === null) {
        return "error_is_nullish";
    }
    if (typeof i === "string") {
        return "error_is_a_string";
    }
    if (typeof i !== "object") {
        return "error_is_not_an_object";
    }
    let l = "formatted" in i ? i.formatted : undefined;
    if (typeof l === "string") {
        let a = "rateLimits" in i ? i.rateLimits : undefined;
        let d = (typeof a === "object" || typeof a === "function") && a !== null && "rateLimitType" in a ? a.rateLimitType : undefined;
        if (d === undefined || d === null || typeof d === "string") {
            return null;
        }
        return "rate_limit_type_is_not_a_string";
    }
    if (l !== undefined) {
        return "formatted_is_not_a_string";
    }
    if (i instanceof Error) {
        return "error_is_an_error_instance";
    }
    if (Object.keys(i).length === 0) {
        return "error_has_no_keys";
    }
    if ("headers" in i || "requestID" in i) {
        return "error_has_api_error_keys";
    }
    if ("connection" in i || "isNetworkDown" in i) {
        return "error_has_snapshot_keys";
    }
    return "error_is_another_object";
}
function q(e) {
    return typeof e === "string" && Object.hasOwn(A, e);
}
const y = Object.freeze({
    mode: "responding",
    overrideMessage: null,
    overrideColor: null,
    overrideShimmerColor: null,
    isCompacting: false,
    compactingHintText: null,
    compactingStartTime: null,
    turnEffort: null,
    turnModel: null,
    retryStatus: null,
    thinkingStartedAt: null,
    outputLimitRecovery: null,
    defaultVerb: ""
});
function g0r({ onMalformedRetryStatus = P } = {}) {
    let n = gs({});
    let i = new Set;
    function l(t, u, { materialize = true } = {}) {
        n.setState((m)=>{
            let h = t in m;
            if (!h && !materialize) {
                return m;
            }
            let R = m[t] ?? {
                ...y,
                defaultVerb: wU(R$t()) ?? ""
            };
            let _ = u(R);
            if (_ === R && h) {
                return m;
            }
            return {
                ...m,
                [t]: _
            };
        });
    }
    function bind(t) {
        function setMode(mode, o) {
            let s = Date.now();
            let outputLimitRecovery = mode === "requesting" ? o ?? null : null;
            l(t, (S)=>{
                if (S.mode === mode && S.outputLimitRecovery === outputLimitRecovery) {
                    return S;
                }
                return {
                    ...S,
                    mode,
                    thinkingStartedAt: mode === "thinking" ? s : null,
                    outputLimitRecovery
                };
            });
        }
        function setMessage(overrideMessage) {
            l(t, (o)=>{
                if (o.overrideMessage === overrideMessage) {
                    return o;
                }
                return {
                    ...o,
                    overrideMessage
                };
            });
        }
        function setColors(overrideColor, overrideShimmerColor) {
            l(t, (s)=>{
                if (s.overrideColor === overrideColor && s.overrideShimmerColor === overrideShimmerColor) {
                    return s;
                }
                return {
                    ...s,
                    overrideColor,
                    overrideShimmerColor
                };
            });
        }
        function setTurnEffort(turnEffort, turnModel = null) {
            l(t, (s)=>{
                if (s.turnEffort === turnEffort && s.turnModel === turnModel) {
                    return s;
                }
                return {
                    ...s,
                    turnEffort,
                    turnModel
                };
            }, {
                materialize: turnEffort !== null || turnModel !== null
            });
        }
        function setRetryStatus(r) {
            let { status, malformed } = w(r);
            if (malformed !== null && !i.has(malformed)) {
                i.add(malformed);
                try {
                    onMalformedRetryStatus(malformed);
                } catch  {}
            }
            l(t, (g)=>{
                if (g.retryStatus === status) {
                    return g;
                }
                return {
                    ...g,
                    retryStatus: status
                };
            });
        }
        function setCompacting(isCompacting, compactingHintText = null) {
            let s = Date.now();
            l(t, (g)=>{
                if (g.isCompacting === isCompacting && g.compactingHintText === compactingHintText) {
                    return g;
                }
                let compactingStartTime = isCompacting ? g.compactingStartTime ?? s : null;
                return {
                    ...g,
                    isCompacting,
                    compactingHintText,
                    compactingStartTime
                };
            });
        }
        function L() {
            l(t, (r)=>{
                if (r.overrideMessage === null && r.overrideColor === null && r.overrideShimmerColor === null && !r.isCompacting && r.compactingHintText === null && r.compactingStartTime === null) {
                    return r;
                }
                return {
                    ...r,
                    overrideMessage: null,
                    overrideColor: null,
                    overrideShimmerColor: null,
                    isCompacting: false,
                    compactingHintText: null,
                    compactingStartTime: null
                };
            });
        }
        function resetOverrides() {
            let defaultVerb = wU(R$t()) ?? "";
            l(t, (o)=>({
                    ...o,
                    overrideMessage: null,
                    overrideColor: null,
                    overrideShimmerColor: null,
                    isCompacting: false,
                    compactingHintText: null,
                    compactingStartTime: null,
                    turnEffort: null,
                    turnModel: null,
                    retryStatus: null,
                    outputLimitRecovery: null,
                    defaultVerb
                }));
        }
        function applyCompactProgress(r) {
            switch(r.type){
                case "hooks_start":
                    setColors("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER");
                    setMessage(r.hookType === "pre_compact" ? "Running PreCompact hooks…" : r.hookType === "post_compact" ? "Running PostCompact hooks…" : NIn);
                    return;
                case "compact_start":
                    setMessage("Compacting conversation");
                    setCompacting(true, r.hintText ?? null);
                    return;
                case "compact_end":
                    L();
                    return;
            }
        }
        return {
            setMode,
            setMessage,
            setColors,
            setTurnEffort,
            setRetryStatus,
            setCompacting,
            resetOverrides,
            applyCompactProgress
        };
    }
    let main = {
        setMode: (t, u)=>bind(Xe()).setMode(t, u),
        setMessage: (t)=>bind(Xe()).setMessage(t),
        setColors: (t, u)=>bind(Xe()).setColors(t, u),
        setTurnEffort: (t, u)=>bind(Xe()).setTurnEffort(t, u),
        setRetryStatus: (t)=>bind(Xe()).setRetryStatus(t),
        setCompacting: (t, u)=>bind(Xe()).setCompacting(t, u),
        resetOverrides: ()=>bind(Xe()).resetOverrides(),
        applyCompactProgress: (t)=>bind(Xe()).applyCompactProgress(t)
    };
    return {
        getSnapshot: n.getSnapshot,
        getState: n.getState,
        setState: n.setState,
        subscribe: n.subscribe,
        get (t) {
            return n.getState()[t ?? Xe()] ?? y;
        },
        bind,
        main,
        evict (t) {
            n.setState((u)=>{
                if (!(t in u)) {
                    return u;
                }
                let { [t]: f, ...rest } = u;
                return rest;
            });
        },
        applyEvent (t) {
            switch(t.kind){
                case "agent-mode":
                    bind(t.agentId).setMode(t.mode, t.outputLimitRecovery);
                    return;
                case "agent-retry-status":
                    bind(t.agentId).setRetryStatus(t.retryStatus);
                    return;
                case "agent-turn-effort":
                    bind(t.agentId).setTurnEffort(t.turnEffort, t.turnModel);
                    return;
                case "main-message":
                    main.setMessage(t.message);
                    return;
                case "main-colors":
                    main.setColors(t.color, t.shimmerColor);
                    return;
            }
        }
    };
}
const CYn = qt(null);
function Ofe() {
    let e = Te(CYn);
    if (!e) {
        throw ReferenceError("useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)");
    }
    return e;
}
function h0r(e) {
    let n = e ?? Xe();
    return Re(Ofe(), (i)=>i[n] ?? y);
}
function y0r(e) {
    return Re(Ofe(), (n)=>(n[e] ?? y).thinkingStartedAt);
}
function _0r(e) {
    return Re(Ofe(), (n)=>(n[e] ?? y).retryStatus);
}
export { wU, R$t, vdn, g0r, CYn, Ofe, h0r, y0r, _0r };
