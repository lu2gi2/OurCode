import { I5e } from "/$bunfs/root/chunk-2d9a83dh.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { lt, B, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { promisify } from "util";
import { constants, deflateRaw, deflateRawSync, inflateRaw, inflateRawSync } from "zlib";
async function fS(e, t, { concurrency = Number.POSITIVE_INFINITY, stopOnError = true, signal } = {}) {
    return new Promise((resolve, reject)=>{
        if (e[Symbol.iterator] === undefined && e[Symbol.asyncIterator] === undefined) {
            throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);
        }
        if (typeof t !== "function") {
            throw TypeError("Mapper function is required");
        }
        if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) {
            throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
        }
        let a = [];
        let c = [];
        let d = new Map;
        let u = false;
        let S = false;
        let y = false;
        let C = 0;
        let f = 0;
        let b = e[Symbol.iterator] === undefined ? e[Symbol.asyncIterator]() : e[Symbol.iterator]();
        let h = ()=>{
            l(signal.reason);
        };
        let p = ()=>{
            signal?.removeEventListener("abort", h);
        };
        let k = (m)=>{
            resolve(m);
            p();
        };
        let l = (m)=>{
            u = true;
            S = true;
            reject(m);
            p();
        };
        if (signal) {
            if (signal.aborted) {
                l(signal.reason);
            }
            signal.addEventListener("abort", h, {
                once: true
            });
        }
        let E = async ()=>{
            if (S) {
                return;
            }
            let m = await b.next();
            let _ = f;
            f++;
            if (m.done) {
                y = true;
                if (C === 0 && !S) {
                    if (!stopOnError && c.length > 0) {
                        l(AggregateError(c));
                        return;
                    }
                    S = true;
                    if (d.size === 0) {
                        k(a);
                        return;
                    }
                    let g = [];
                    for (let [R, K] of a.entries()){
                        if (d.get(R) === T) {
                            continue;
                        }
                        g.push(K);
                    }
                    k(g);
                }
                return;
            }
            C++;
            (async ()=>{
                try {
                    let g = await m.value;
                    if (S) {
                        return;
                    }
                    let R = await t(g, _);
                    if (R === T) {
                        d.set(_, R);
                    }
                    a[_] = R;
                    C--;
                    await E();
                } catch (error) {
                    if (stopOnError) {
                        l(error);
                    } else {
                        c.push(error);
                        C--;
                        try {
                            await E();
                        } catch (err) {
                            l(err);
                        }
                    }
                }
            })();
        };
        (async ()=>{
            for(let m = 0; m < concurrency; m++){
                try {
                    await E();
                } catch (error) {
                    l(error);
                    break;
                }
                if (y || u) {
                    break;
                }
            }
        })();
    });
}
var T = Symbol("skip");
const chunkSize = 131072;
const Y = 32768;
const Z = 4 * chunkSize;
const X = 32;
const Q = 2;
const I5e_1 = I5e;
const P = 210000;
const ee = 256;
const I = {
    messages: '"messages":[',
    system: '],"system":',
    endOfSystemBlock: '"},{'
};
const te = 1024;
function N(maxStoredBytes = I5e_1) {
    return {
        blocks: new Map,
        storedBytes: 0,
        maxStoredBytes,
        evictedForSpaceCount: 0,
        generation: 0,
        cancelIdleDrop: undefined,
        pooledCompression: Promise.resolve()
    };
}
function Wit(e) {
    e.cancelIdleDrop?.();
    e.cancelIdleDrop = undefined;
    e.blocks.clear();
    e.storedBytes = 0;
    e.generation++;
}
function kuo({ body, level, store, clock }) {
    let blocks = ne(body);
    let keys = re(body, blocks, level);
    let s = clock.monotonicNow();
    let reusedBlockCount = 0;
    let reusedBytes = 0;
    let reused = blocks.map((u, S)=>{
        let y = z(store, keys[S], s);
        if (y !== undefined) {
            reusedBlockCount++;
            reusedBytes += u.end - u.start;
        }
        return y;
    });
    if (store.blocks.size > 0) {
        G(store, clock);
    }
    return {
        body,
        level,
        blocks,
        keys,
        reused,
        reusedBlockCount,
        reusedBytes,
        generation: store.generation
    };
}
function Nhs({ keys, reused }) {
    return keys.some((n, r)=>n !== undefined && reused[r] === undefined);
}
async function $hs(e, t, n, r) {
    let o = await Auo(e, t, n, r);
    let i = Buffer.from([
        31,
        139,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        255
    ]);
    let s = Buffer.alloc(10);
    s[0] = 3;
    s.writeUInt32LE(Bun.hash.crc32(e.body), 2);
    s.writeUInt32LE(e.body.length % 4294967296, 6);
    return Buffer.concat([
        i,
        ...o,
        s
    ]);
}
class zit extends Error {
    fault;
    constructor(e, t){
        super("Request body gzip: a newly compressed block failed its check", t);
        this.fault = e;
    }
}
function Tuo(e) {
    let t = v(e);
    if (t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR") {
        return t;
    }
}
async function Auo(e, t, n, { signal, stopIf, inBackground = false } = {}) {
    let { body, level, blocks, keys, reused, generation } = e;
    let y;
    if (!inBackground && body.length - e.reusedBytes <= Z) {
        y = blocks.map((f, b)=>{
            let h = reused[b];
            if (h !== undefined) {
                return h;
            }
            let p = body.subarray(f.start, f.end);
            let k = x(body, f, level);
            let l = deflateRawSync(p, k);
            try {
                O(p, l, inflateRawSync(l, k));
            } catch (error) {
                throw A(error);
            }
            return l;
        });
    } else {
        let b = (inBackground ? Promise.resolve() : t.pooledCompression).then(()=>{
            signal?.throwIfAborted();
            let h = n.monotonicNow();
            return fS(blocks, async (p, k)=>{
                if (stopIf?.()) {
                    throw Error("Request body gzip: compression stopped");
                }
                if (reused[k] !== undefined) {
                    return reused[k];
                }
                let l = t.generation === generation ? z(t, keys[k], h) : undefined;
                if (l !== undefined) {
                    e.reusedBlockCount++;
                    e.reusedBytes += p.end - p.start;
                    return l;
                }
                let E = body.subarray(p.start, p.end);
                let m = x(body, p, level);
                let _ = await oe(E, m);
                try {
                    O(E, _, await se(_, m));
                } catch (error) {
                    throw A(error);
                }
                return _;
            }, {
                concurrency: inBackground ? Q : X,
                signal
            });
        });
        if (!inBackground) {
            t.pooledCompression = b.then(()=>{}, ()=>{});
        }
        y = await b;
    }
    if (t.generation !== generation) {
        return y;
    }
    let C = n.monotonicNow();
    y.forEach((f, b)=>{
        let h = keys[b];
        if (h !== undefined && !t.blocks.has(h)) {
            let p = f.buffer.byteLength === f.length;
            ae(t, h, p ? f : Buffer.copyBytesFrom(f), C);
        }
    });
    de(t, C);
    G(t, n);
    return y;
}
function ne(body) {
    let t = body.lastIndexOf(I.system);
    let n = t === -1 ? -1 : body.indexOf(I.endOfSystemBlock, t);
    let r = [
        body.indexOf(I.messages),
        t,
        n !== -1 && n - t <= te ? n + 2 : -1,
        body.length
    ];
    let o = [];
    let i = 0;
    for (let s of r){
        if (s <= i) {
            continue;
        }
        for(let start = i; start < s; start += chunkSize){
            o.push({
                start,
                end: Math.min(start + chunkSize, s),
                dictionaryStart: Math.max(start - Y, i)
            });
        }
        i = s;
    }
    return o;
}
function re(body, blocks, level) {
    let r = blocks.map((o)=>{
        if (o.end - o.start === chunkSize) {
            return Bun.SHA256.hash(body.subarray(o.start, o.end), "base64");
        }
    });
    return blocks.map((o, i)=>{
        let s = r[i];
        let a = o.dictionaryStart < o.start ? r[i - 1] : "none";
        if (s === undefined || a === undefined) {
            return undefined;
        }
        return `${level}:${a}:${s}`;
    });
}
function oe(e, t) {
    return promisify(deflateRaw)(e, t);
}
function se(e, t) {
    return promisify(inflateRaw)(e, t);
}
function x(body, t, level) {
    return {
        level,
        finishFlush: constants.Z_SYNC_FLUSH,
        chunkSize,
        ...t.dictionaryStart < t.start && {
            dictionary: body.subarray(t.dictionaryStart, t.start)
        }
    };
}
function A(cause) {
    let t = Tuo(cause);
    if (t === undefined) {
        return cause;
    }
    return new zit(t, {
        cause
    });
}
const ie = 65535;
function O(e, t, n) {
    if (!n.equals(e)) {
        throw new zit("inflates_to_other_bytes");
    }
    if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ie) {
        throw new zit("no_flush_marker");
    }
}
function z(e, t, n) {
    let r = t === undefined ? undefined : e.blocks.get(t);
    if (t === undefined || r === undefined) {
        return;
    }
    e.blocks.delete(t);
    e.blocks.set(t, {
        compressed: r.compressed,
        lastUsedAt: n
    });
    return r.compressed;
}
function ae(e, t, compressed, r) {
    let o = {
        compressed,
        lastUsedAt: r
    };
    e.blocks.set(t, o);
    e.storedBytes += D(o);
}
function de(e, t) {
    for (let [n, r] of e.blocks){
        let o = e.storedBytes > e.maxStoredBytes;
        if (!o && t - r.lastUsedAt < P) {
            return;
        }
        e.blocks.delete(n);
        e.storedBytes -= D(r);
        if (o) {
            e.evictedForSpaceCount++;
        }
    }
}
function G(e, t) {
    let n = new WeakRef(e);
    e.cancelIdleDrop?.();
    e.cancelIdleDrop = t.setTimeout(()=>{
        let r = n.deref();
        if (r !== undefined) {
            Wit(r);
        }
    }, P, {
        unref: true
    });
}
function D(e) {
    return ee + e.compressed.length;
}
function L() {
    return new WeakMap;
}
function Fhs(e, t, n) {
    let r = e.get(t);
    if (r?.fired) {
        return {
            kind: "already_fired"
        };
    }
    let inputTokens = n?.input_tokens ?? 0;
    let cacheReadTokens = n?.cache_read_input_tokens ?? 0;
    let s = n?.cache_creation_input_tokens ?? 0;
    let a = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0);
    let cacheCreationTokens = s > 0 ? s : a;
    if (inputTokens + cacheReadTokens + cacheCreationTokens <= 0) {
        return {
            kind: "no_usage"
        };
    }
    if (inputTokens < 20000 || cacheCreationTokens >= 0.1 * inputTokens) {
        let u = r ?? {
            consecutive: 0,
            fired: false,
            okEmitted: false
        };
        if (!r) {
            e.set(t, u);
        }
        u.consecutive = 0;
        if (!u.okEmitted && cacheReadTokens + cacheCreationTokens > 0) {
            u.okEmitted = true;
            return {
                kind: "confirm"
            };
        }
        return {
            kind: "healthy"
        };
    }
    let d = r ?? {
        consecutive: 0,
        fired: false,
        okEmitted: false
    };
    if (!r) {
        e.set(t, d);
    }
    d.consecutive++;
    if (d.consecutive >= 3) {
        d.fired = true;
        return {
            kind: "fire",
            consecutive: d.consecutive,
            inputTokens,
            cacheReadTokens,
            cacheCreationTokens
        };
    }
    return {
        kind: "counted",
        consecutive: d.consecutive
    };
}
const K4e = "root";
function VD(e) {
    return e ?? "root";
}
const max = 256;
class F {
    promptCacheBreak = {
        previousStateBySource: new Map,
        hydrationAttempted: false,
        pendingPersist: Promise.resolve(),
        latestQueuedPersist: null,
        hashSalt: null,
        summaryForks: new Map,
        parkedAgentBaselines: new Map,
        parkedBy: null,
        classifierLines: new Map,
        classifierCompactions: new Map
    };
    threadDecisionTracker = undefined;
    threadInheritedFields = {
        storedToolsHashByThread: new Map,
        breakerTripped: false
    };
    threadDropRecreate = new Map;
    threadRequestEnds = new Map;
    dumpPrompts = {
        recentRequests: [],
        stateByAgent: new Map,
        retiredInitHashes: new Kc({
            max: 1000
        }),
        appendQueue: Oh()
    };
    requestReplay = {
        chains: new Map,
        unrecordableShapes: new Set
    };
    lastIngressUuidBySession = new Map;
    cacheCoverage = L();
    gzipRequestBody = {
        latchedOff: false,
        rejectedThisProcess: false,
        persistedLatchChecked: false,
        persistedLatchInEffect: false,
        telemetryByClientRequestId: new Kc({
            max
        }),
        dispatchAtByClientRequestId: new Kc({
            max
        }),
        ccrWorkerSkipReasonsLogged: new Set,
        blockStore: N(),
        blocksSwitchedOff: false,
        blocksBuildGeneration: undefined,
        blockGzippedResponses: new WeakSet
    };
    sentPrefix = {
        ledger: undefined,
        mode: undefined,
        persist: Promise.resolve(),
        persisted: undefined,
        pendingSeed: undefined,
        lastReport: new WeakMap,
        lastVerdict: new WeakMap,
        renderEpochs: new WeakMap,
        memoryEpochs: new WeakMap,
        announced: new WeakMap,
        excuse: new WeakMap,
        staged: new WeakMap,
        boundVerdict: new WeakMap
    };
    bindingDrops = {
        seenBlocks: undefined,
        threadsRead: new Kc({
            max: 512
        })
    };
    foreignThinkingKeep = undefined;
    streamFirstByteArmedRequestIds = new Kc({
        max: 64
    });
    skillHealthMap = undefined;
    headerMemberDropsNoted = new Set;
    firedOnceKeys = new Set;
    hasFired(e) {
        return this.firedOnceKeys.has(e);
    }
    markFired(e) {
        this.firedOnceKeys.add(e);
    }
    once(e) {
        if (this.firedOnceKeys.has(e)) {
            return false;
        }
        this.firedOnceKeys.add(e);
        return true;
    }
    resetStreamNoEventsWarningLatch() {
        this.firedOnceKeys.delete("stream_no_events_fallback_warning");
    }
}
const ce = new lt(()=>new F);
function Xs() {
    return ce.of(B());
}
const Cuo = new Set([
    "clear",
    "resume",
    "spare_claim",
    "remote_attach"
]);
function Uhs() {
    return vd((e, t)=>{
        if (t === "cd" || t === "hydrate") {
            return;
        }
        let n = Xs();
        n.resetStreamNoEventsWarningLatch();
        if (Cuo.has(t)) {
            n.threadDropRecreate.delete(K4e);
            n.threadRequestEnds.delete(K4e);
            let r = n.gzipRequestBody;
            Wit(r.blockStore);
            if (r.blocksSwitchedOff === "until_next_conversation") {
                r.blocksSwitchedOff = false;
            }
        }
    });
}
export { fS, Wit, kuo, Nhs, $hs, zit, Tuo, Auo, Fhs, K4e, VD, Xs, Cuo, Uhs };
