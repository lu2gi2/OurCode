import { $Pt } from "/$bunfs/root/chunk-hx6qdsg5.js";
import { u$e } from "/$bunfs/root/chunk-5448kecb.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import { pDt, Qk, $R, owe } from "/$bunfs/root/chunk-dze6yaxw.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const Zx = C(function(vr) {
    const Pr = jm();
    const Ae = eP();
    const Z = (e)=>{
        if (typeof e === "function") {
            return e();
        }
        return e;
    };
    const pe = (e, t, r, s, n)=>({
            name: t,
            namespace: e,
            traits: r,
            input: s,
            output: n
        });
    const Nr = (e)=>(t, r)=>async (s)=>{
                let { response } = await t(s);
                let { operationSchema } = Ae.getSmithyContext(r);
                let [, a, o, c, u, h] = operationSchema ?? [];
                try {
                    let f = await e.protocol.deserializeResponse(pe(a, o, c, u, h), {
                        ...e,
                        ...r
                    }, response);
                    return {
                        response,
                        output: f
                    };
                } catch (error) {
                    Object.defineProperty(error, "$response", {
                        value: response,
                        enumerable: false,
                        writable: false,
                        configurable: false
                    });
                    if (!("$metadata" in error)) {
                        try {
                            error.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
                        } catch (l) {
                            if (!r.logger || r.logger?.constructor?.name === "NoOpLogger") {
                                console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                            } else {
                                r.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                            }
                        }
                        if (typeof error.$responseBodyText !== "undefined") {
                            if (error.$response) {
                                error.$response.body = error.$responseBodyText;
                            }
                        }
                        try {
                            if (Pr.HttpResponse.isInstance(response)) {
                                let { headers = {} } = response;
                                let m = Object.entries(headers);
                                error.$metadata = {
                                    httpStatusCode: response.statusCode,
                                    requestId: me(/^x-[\w-]+-request-?id$/, m),
                                    extendedRequestId: me(/^x-[\w-]+-id-2$/, m),
                                    cfId: me(/^x-[\w-]+-cf-id$/, m)
                                };
                            }
                        } catch (l) {}
                    }
                    throw error;
                }
            };
    var me = (e, t)=>(t.find(([r])=>r.match(e)) || [
            undefined,
            undefined
        ])[1];
    const zr = (e)=>(t, r)=>async (s)=>{
                let { operationSchema } = Ae.getSmithyContext(r);
                let [, i, a, o, c, u] = operationSchema ?? [];
                let endpoint = r.endpointV2?.url && e.urlParser ? async ()=>e.urlParser(r.endpointV2.url) : e.endpoint;
                let request = await e.protocol.serializeRequest(pe(i, a, o, c, u), s.input, {
                    ...e,
                    ...r,
                    endpoint
                });
                return t({
                    ...s,
                    request
                });
            };
    const De = {
        name: "deserializerMiddleware",
        step: "deserialize",
        tags: [
            "DESERIALIZER"
        ],
        override: true
    };
    const qe = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: [
            "SERIALIZER"
        ],
        override: true
    };
    function Ar(e) {
        return {
            applyToStack: (t)=>{
                t.add(zr(e), qe);
                t.add(Nr(e), De);
                e.protocol.setSerdeContext(e);
            }
        };
    }
    class w {
        name;
        namespace;
        traits;
        static assign(e, t) {
            return Object.assign(e, t);
        }
        static [Symbol.hasInstance](e) {
            let t = this.prototype.isPrototypeOf(e);
            if (!t && typeof e === "object" && e !== null) {
                return e.symbol === this.symbol;
            }
            return t;
        }
        getName() {
            return `${this.namespace}#${this.name}`;
        }
    }
    class K extends w {
        static symbol = Symbol.for("@smithy/lis");
        name;
        traits;
        valueSchema;
        symbol = K.symbol;
    }
    const Dr = (e, t, r, s)=>w.assign(new K, {
            name: t,
            namespace: e,
            traits: r,
            valueSchema: s
        });
    class X extends w {
        static symbol = Symbol.for("@smithy/map");
        name;
        traits;
        keySchema;
        valueSchema;
        symbol = X.symbol;
    }
    const qr = (e, t, r, keySchema, n)=>w.assign(new X, {
            name: t,
            namespace: e,
            traits: r,
            keySchema,
            valueSchema: n
        });
    class ee extends w {
        static symbol = Symbol.for("@smithy/ope");
        name;
        traits;
        input;
        output;
        symbol = ee.symbol;
    }
    const jr = (e, t, r, s, n)=>w.assign(new ee, {
            name: t,
            namespace: e,
            traits: r,
            input: s,
            output: n
        });
    class k extends w {
        static symbol = Symbol.for("@smithy/str");
        name;
        traits;
        memberNames;
        memberList;
        symbol = k.symbol;
    }
    const Ur = (e, t, r, s, n)=>w.assign(new k, {
            name: t,
            namespace: e,
            traits: r,
            memberNames: s,
            memberList: n
        });
    class te extends k {
        static symbol = Symbol.for("@smithy/err");
        ctor;
        symbol = te.symbol;
    }
    const Lr = (e, t, r, s, n, i)=>w.assign(new te, {
            name: t,
            namespace: e,
            traits: r,
            memberNames: s,
            memberList: n,
            ctor: null
        });
    function L(e) {
        if (typeof e === "object") {
            return e;
        }
        e = e | 0;
        let t = {};
        let r = 0;
        for (let s of [
            "httpLabel",
            "idempotent",
            "idempotencyToken",
            "sensitive",
            "httpPayload",
            "httpResponseCode",
            "httpQueryParams"
        ]){
            if ((e >> r++ & 1) === 1) {
                t[s] = 1;
            }
        }
        return t;
    }
    class M {
        ref;
        memberName;
        static symbol = Symbol.for("@smithy/nor");
        symbol = M.symbol;
        name;
        schema;
        _isMemberSchema;
        traits;
        memberTraits;
        normalizedTraits;
        constructor(e, t){
            this.ref = e;
            this.memberName = t;
            let r = [];
            let s = e;
            let n = e;
            this._isMemberSchema = false;
            while(le(s)){
                r.push(s[1]);
                s = s[0];
                n = Z(s);
                this._isMemberSchema = true;
            }
            if (r.length > 0) {
                this.memberTraits = {};
                for(let i = r.length - 1; i >= 0; --i){
                    let a = r[i];
                    Object.assign(this.memberTraits, L(a));
                }
            } else {
                this.memberTraits = 0;
            }
            if (n instanceof M) {
                let i = this.memberTraits;
                Object.assign(this, n);
                this.memberTraits = {
                    ...i,
                    ...n.getMemberTraits(),
                    ...this.getMemberTraits()
                };
                this.normalizedTraits = undefined;
                this.memberName = t ?? n.memberName;
                return;
            }
            this.schema = Z(n);
            if (je(this.schema)) {
                this.name = `${this.schema[1]}#${this.schema[2]}`;
                this.traits = this.schema[3];
            } else {
                this.name = this.memberName ?? String(n);
                this.traits = 0;
            }
            if (this._isMemberSchema && !t) {
                throw Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
            }
        }
        static [Symbol.hasInstance](e) {
            let t = this.prototype.isPrototypeOf(e);
            if (!t && typeof e === "object" && e !== null) {
                return e.symbol === this.symbol;
            }
            return t;
        }
        static of(e) {
            let t = Z(e);
            if (t instanceof M) {
                return t;
            }
            if (le(t)) {
                let [r, s] = t;
                if (r instanceof M) {
                    Object.assign(r.getMergedTraits(), L(s));
                    return r;
                }
                throw Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e, null, 2)}.`);
            }
            return new M(t);
        }
        getSchema() {
            let schema = this.schema;
            if (schema[0] === 0) {
                return schema[4];
            }
            return schema;
        }
        getName(e = false) {
            let { name } = this;
            if (!e && name && name.includes("#")) {
                return name.split("#")[1];
            }
            return name || undefined;
        }
        getMemberName() {
            return this.memberName;
        }
        isMemberSchema() {
            return this._isMemberSchema;
        }
        isListSchema() {
            let e = this.getSchema();
            if (typeof e === "number") {
                return e >= 64 && e < 128;
            }
            return e[0] === 1;
        }
        isMapSchema() {
            let e = this.getSchema();
            if (typeof e === "number") {
                return e >= 128 && e <= 255;
            }
            return e[0] === 2;
        }
        isStructSchema() {
            let e = this.getSchema();
            return e[0] === 3 || e[0] === -3;
        }
        isBlobSchema() {
            let e = this.getSchema();
            return e === 21 || e === 42;
        }
        isTimestampSchema() {
            let e = this.getSchema();
            return typeof e === "number" && e >= 4 && e <= 7;
        }
        isUnitSchema() {
            return this.getSchema() === "unit";
        }
        isDocumentSchema() {
            return this.getSchema() === 15;
        }
        isStringSchema() {
            return this.getSchema() === 0;
        }
        isBooleanSchema() {
            return this.getSchema() === 2;
        }
        isNumericSchema() {
            return this.getSchema() === 1;
        }
        isBigIntegerSchema() {
            return this.getSchema() === 17;
        }
        isBigDecimalSchema() {
            return this.getSchema() === 19;
        }
        isStreaming() {
            let { streaming } = this.getMergedTraits();
            return !!streaming || this.getSchema() === 42;
        }
        isIdempotencyToken() {
            let e = (n)=>(n & 4) === 4 || !!n?.idempotencyToken;
            let { normalizedTraits, traits, memberTraits } = this;
            return e(normalizedTraits) || e(traits) || e(memberTraits);
        }
        getMergedTraits() {
            return this.normalizedTraits ?? (this.normalizedTraits = {
                ...this.getOwnTraits(),
                ...this.getMemberTraits()
            });
        }
        getMemberTraits() {
            return L(this.memberTraits);
        }
        getOwnTraits() {
            return L(this.traits);
        }
        getKeySchema() {
            let [e, t] = [
                this.isDocumentSchema(),
                this.isMapSchema()
            ];
            if (!e && !t) {
                throw Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
            }
            let r = this.getSchema();
            let s = e ? 15 : r[4] ?? 0;
            return U([
                s,
                0
            ], "key");
        }
        getValueSchema() {
            let e = this.getSchema();
            let [t, r, s] = [
                this.isDocumentSchema(),
                this.isMapSchema(),
                this.isListSchema()
            ];
            let n = typeof e === "number" ? 63 & e : e && typeof e === "object" && (r || s) ? e[3 + e[0]] : t ? 15 : undefined;
            if (n != null) {
                return U([
                    n,
                    0
                ], r ? "value" : "member");
            }
            throw Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
        }
        getMemberSchema(e) {
            let t = this.getSchema();
            if (this.isStructSchema() && t[4].includes(e)) {
                let r = t[4].indexOf(e);
                let s = t[5][r];
                return U(le(s) ? s : [
                    s,
                    0
                ], e);
            }
            if (this.isDocumentSchema()) {
                return U([
                    15,
                    0
                ], e);
            }
            throw Error(`@smithy/core/schema - ${this.getName(true)} has no no member=${e}.`);
        }
        getMemberSchemas() {
            let e = {};
            try {
                for (let [t, r] of this.structIterator()){
                    e[t] = r;
                }
            } catch (t) {}
            return e;
        }
        getEventStreamMember() {
            if (this.isStructSchema()) {
                for (let [e, t] of this.structIterator()){
                    if (t.isStreaming() && t.isStructSchema()) {
                        return e;
                    }
                }
            }
            return "";
        }
        *structIterator() {
            if (this.isUnitSchema()) {
                return;
            }
            if (!this.isStructSchema()) {
                throw Error("@smithy/core/schema - cannot iterate non-struct schema.");
            }
            let e = this.getSchema();
            for(let t = 0; t < e[4].length; ++t){
                yield [
                    e[4][t],
                    U([
                        e[5][t],
                        0
                    ], e[4][t])
                ];
            }
        }
    }
    function U(e, memberName) {
        if (e instanceof M) {
            return Object.assign(e, {
                memberName,
                _isMemberSchema: true
            });
        }
        return new M(e, memberName);
    }
    var le = (e)=>Array.isArray(e) && e.length === 2;
    var je = (e)=>Array.isArray(e) && e.length >= 5;
    class F extends w {
        static symbol = Symbol.for("@smithy/sim");
        name;
        schemaRef;
        traits;
        symbol = F.symbol;
    }
    const kr = (e, t, r, s)=>w.assign(new F, {
            name: t,
            namespace: e,
            traits: s,
            schemaRef: r
        });
    const Fr = (e, t, r, s)=>w.assign(new F, {
            name: t,
            namespace: e,
            traits: r,
            schemaRef: s
        });
    const Hr = {
        BLOB: 21,
        STREAMING_BLOB: 42,
        BOOLEAN: 2,
        STRING: 0,
        NUMERIC: 1,
        BIG_INTEGER: 17,
        BIG_DECIMAL: 19,
        DOCUMENT: 15,
        TIMESTAMP_DEFAULT: 4,
        TIMESTAMP_DATE_TIME: 5,
        TIMESTAMP_HTTP_DATE: 6,
        TIMESTAMP_EPOCH_SECONDS: 7,
        LIST_MODIFIER: 64,
        MAP_MODIFIER: 128
    };
    class _ {
        namespace;
        schemas;
        exceptions;
        static registries = new Map;
        constructor(e, t = new Map, r = new Map){
            this.namespace = e;
            this.schemas = t;
            this.exceptions = r;
        }
        static for(e) {
            if (!_.registries.has(e)) {
                _.registries.set(e, new _(e));
            }
            return _.registries.get(e);
        }
        register(e, t) {
            let r = this.normalizeShapeId(e);
            _.for(r.split("#")[0]).schemas.set(r, t);
        }
        getSchema(e) {
            let t = this.normalizeShapeId(e);
            if (!this.schemas.has(t)) {
                throw Error(`@smithy/core/schema - schema not found for ${t}`);
            }
            return this.schemas.get(t);
        }
        registerError(e, t) {
            let r = e;
            let s = _.for(r[1]);
            s.schemas.set(`${r[1]}#${r[2]}`, r);
            s.exceptions.set(r, t);
        }
        getErrorCtor(e) {
            let t = e;
            return _.for(t[1]).exceptions.get(t);
        }
        getBaseException() {
            for (let e of this.exceptions.keys()){
                if (Array.isArray(e)) {
                    let [, t, r] = e;
                    let s = `${t}#${r}`;
                    if (s.startsWith("smithy.ts.sdk.synthetic.") && s.endsWith("ServiceException")) {
                        return e;
                    }
                }
            }
        }
        find(e) {
            return [
                ...this.schemas.values()
            ].find(e);
        }
        clear() {
            this.schemas.clear();
            this.exceptions.clear();
        }
        normalizeShapeId(e) {
            if (e.includes("#")) {
                return e;
            }
            return `${this.namespace}#${e}`;
        }
    }
    vr.ErrorSchema = te;
    vr.ListSchema = K;
    vr.MapSchema = X;
    vr.NormalizedSchema = M;
    vr.OperationSchema = ee;
    vr.SCHEMA = Hr;
    vr.Schema = w;
    vr.SimpleSchema = F;
    vr.StructureSchema = k;
    vr.TypeRegistry = _;
    vr.deref = Z;
    vr.deserializerMiddlewareOption = De;
    vr.error = Lr;
    vr.getSchemaSerdePlugin = Ar;
    vr.isStaticSchema = je;
    vr.list = Dr;
    vr.map = qr;
    vr.op = jr;
    vr.operation = pe;
    vr.serializerMiddlewareOption = qe;
    vr.sim = kr;
    vr.simAdapter = Fr;
    vr.struct = Ur;
    vr.translateTraits = L;
});
const ye = C(function(He) {
    Object.defineProperty(He, "__esModule", {
        value: true
    });
    He.ChecksumStream = undefined;
    const Ue = $R();
    const ke = Le("stream");
    class Fe extends ke.Duplex {
        expectedChecksum;
        checksumSourceLocation;
        checksum;
        source;
        base64Encoder;
        constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }){
            super();
            if (typeof source.pipe === "function") {
                this.source = source;
            } else {
                throw Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
            }
            this.base64Encoder = base64Encoder ?? Ue.toBase64;
            this.expectedChecksum = expectedChecksum;
            this.checksum = checksum;
            this.checksumSourceLocation = checksumSourceLocation;
            this.source.pipe(this);
        }
        _read(e) {}
        _write(e, t, r) {
            try {
                this.checksum.update(e);
                this.push(e);
            } catch (error) {
                return r(error);
            }
            return r();
        }
        async _final(e) {
            try {
                let t = await this.checksum.digest();
                let r = this.base64Encoder(t);
                if (this.expectedChecksum !== r) {
                    return e(Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${r}" in response header "${this.checksumSourceLocation}".`));
                }
            } catch (error) {
                return e(error);
            }
            this.push(null);
            return e();
        }
    }
    He.ChecksumStream = Fe;
});
const B = C(function(Je) {
    Object.defineProperty(Je, "__esModule", {
        value: true
    });
    Je.isBlob = Je.isReadableStream = undefined;
    const ps = (e)=>typeof ReadableStream === "function" && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream);
    Je.isReadableStream = ps;
    const ys = (e)=>typeof Blob === "function" && (e?.constructor?.name === Blob.name || e instanceof Blob);
    Je.isBlob = ys;
});
const Ye = C(function(Qe) {
    Object.defineProperty(Qe, "__esModule", {
        value: true
    });
    Qe.ChecksumStream = undefined;
    const gs = typeof ReadableStream === "function" ? ReadableStream : function() {};
    class Ve extends gs {
    }
    Qe.ChecksumStream = Ve;
});
const rt = C(function(et) {
    Object.defineProperty(et, "__esModule", {
        value: true
    });
    et.createChecksumStream = undefined;
    const Ze = $R();
    const Ke = B();
    const Xe = Ye();
    const Ss = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder })=>{
        if (!Ke.isReadableStream(source)) {
            throw Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
        }
        let i = base64Encoder ?? Ze.toBase64;
        if (typeof TransformStream !== "function") {
            throw Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
        }
        let a = new TransformStream({
            start () {},
            async transform (c, u) {
                checksum.update(c);
                u.enqueue(c);
            },
            async flush (c) {
                let u = await checksum.digest();
                let h = i(u);
                if (expectedChecksum !== h) {
                    let f = Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${h}" in response header "${checksumSourceLocation}".`);
                    c.error(f);
                } else {
                    c.terminate();
                }
            }
        });
        source.pipeThrough(a);
        let a_readable = a.readable;
        Object.setPrototypeOf(a_readable, Xe.ChecksumStream.prototype);
        return a_readable;
    };
    et.createChecksumStream = Ss;
});
const at = C(function(ot) {
    Object.defineProperty(ot, "__esModule", {
        value: true
    });
    ot.createChecksumStream = ws;
    var st = B();
    var nt = ye();
    var it = rt();
    function ws(e) {
        if (typeof ReadableStream === "function" && st.isReadableStream(e.source)) {
            return it.createChecksumStream(e);
        }
        return new nt.ChecksumStream(e);
    }
});
const be = C(function(ut) {
    Object.defineProperty(ut, "__esModule", {
        value: true
    });
    ut.ByteArrayCollector = undefined;
    class ct {
        allocByteArray;
        byteLength = 0;
        byteArrays = [];
        constructor(e){
            this.allocByteArray = e;
        }
        push(e) {
            this.byteArrays.push(e);
            this.byteLength += e.byteLength;
        }
        flush() {
            if (this.byteArrays.length === 1) {
                let r = this.byteArrays[0];
                this.reset();
                return r;
            }
            let e = this.allocByteArray(this.byteLength);
            let t = 0;
            for(let r = 0; r < this.byteArrays.length; ++r){
                let byteArray = this.byteArrays[r];
                e.set(byteArray, t);
                t += byteArray.byteLength;
            }
            this.reset();
            return e;
        }
        reset() {
            this.byteArrays = [];
            this.byteLength = 0;
        }
    }
    ut.ByteArrayCollector = ct;
});
const bt = C(function(pt) {
    Object.defineProperty(pt, "__esModule", {
        value: true
    });
    pt.createBufferedReadable = undefined;
    pt.createBufferedReadableStream = dt;
    pt.merge = mt;
    pt.flush = re;
    pt.sizeOf = N;
    pt.modeOf = lt;
    var ft = be();
    function dt(e, t, r) {
        let s = e.getReader();
        let n = false;
        let i = 0;
        let a = [
            "",
            new ft.ByteArrayCollector((u)=>new Uint8Array(u))
        ];
        let o = -1;
        let pull = async (u)=>{
            let { value, done } = await s.read();
            let d = value;
            if (done) {
                if (o !== -1) {
                    let l = re(a, o);
                    if (N(l) > 0) {
                        u.enqueue(l);
                    }
                }
                u.close();
            } else {
                let l = lt(d, false);
                if (o !== l) {
                    if (o >= 0) {
                        u.enqueue(re(a, o));
                    }
                    o = l;
                }
                if (o === -1) {
                    u.enqueue(d);
                    return;
                }
                let m = N(d);
                i += m;
                let p = N(a[o]);
                if (m >= t && p === 0) {
                    u.enqueue(d);
                } else {
                    let S = mt(a, o, d);
                    if (!n && i > t * 2) {
                        n = true;
                        r?.warn(`@smithy/util-stream - stream chunk size ${m} is below threshold of ${t}, automatically buffering.`);
                    }
                    if (S >= t) {
                        u.enqueue(re(a, o));
                    } else {
                        await pull(u);
                    }
                }
            }
        };
        return new ReadableStream({
            pull
        });
    }
    pt.createBufferedReadable = dt;
    function mt(e, t, r) {
        switch(t){
            case 0:
                e[0] += r;
                return N(e[0]);
            case 1:
            case 2:
                e[t].push(r);
                return N(e[t]);
        }
    }
    function re(e, t) {
        switch(t){
            case 0:
                let r = e[0];
                e[0] = "";
                return r;
            case 1:
            case 2:
                return e[t].flush();
        }
        throw Error(`@smithy/util-stream - invalid index ${t} given to flush()`);
    }
    function N(e) {
        return e?.byteLength ?? e?.length ?? 0;
    }
    function lt(e, t = true) {
        if (t && typeof Buffer !== "undefined" && e instanceof Buffer) {
            return 2;
        }
        if (e instanceof Uint8Array) {
            return 1;
        }
        if (typeof e === "string") {
            return 0;
        }
        return -1;
    }
});
const xt = C(function(wt) {
    Object.defineProperty(wt, "__esModule", {
        value: true
    });
    wt.createBufferedReadable = Os;
    var gt = Le("stream");
    var se = be();
    var y = bt();
    var St = B();
    function Os(e, t, r) {
        if (St.isReadableStream(e)) {
            return y.createBufferedReadableStream(e, t, r);
        }
        let s = new gt.Readable({
            read () {}
        });
        let n = false;
        let i = 0;
        let a = [
            "",
            new se.ByteArrayCollector((c)=>new Uint8Array(c)),
            new se.ByteArrayCollector((c)=>Buffer.from(new Uint8Array(c)))
        ];
        let o = -1;
        e.on("data", (c)=>{
            let u = y.modeOf(c, true);
            if (o !== u) {
                if (o >= 0) {
                    s.push(y.flush(a, o));
                }
                o = u;
            }
            if (o === -1) {
                s.push(c);
                return;
            }
            let h = y.sizeOf(c);
            i += h;
            let f = y.sizeOf(a[o]);
            if (h >= t && f === 0) {
                s.push(c);
            } else {
                let d = y.merge(a, o, c);
                if (!n && i > t * 2) {
                    n = true;
                    r?.warn(`@smithy/util-stream - stream chunk size ${h} is below threshold of ${t}, automatically buffering.`);
                }
                if (d >= t) {
                    s.push(y.flush(a, o));
                }
            }
        });
        e.on("end", ()=>{
            if (o !== -1) {
                let c = y.flush(a, o);
                if (y.sizeOf(c) > 0) {
                    s.push(c);
                }
            }
            s.push(null);
        });
        return s;
    }
});
const Mt = C(function(Et) {
    Object.defineProperty(Et, "__esModule", {
        value: true
    });
    Et.getAwsChunkedEncodingStream = undefined;
    const Tt = Le("stream");
    const Rs = (e, { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher })=>{
        let o = base64Encoder !== undefined && checksumAlgorithmFn !== undefined && checksumLocationName !== undefined && streamHasher !== undefined;
        let c = o ? streamHasher(checksumAlgorithmFn, e) : undefined;
        let u = new Tt.Readable({
            read: ()=>{}
        });
        e.on("data", (h)=>{
            let f = bodyLengthChecker(h) || 0;
            u.push(`${f.toString(16)}\r
`);
            u.push(h);
            u.push(`\r
`);
        });
        e.on("end", async ()=>{
            u.push(`0\r
`);
            if (o) {
                let h = base64Encoder(await c);
                u.push(`${checksumLocationName}:${h}\r
`);
                u.push(`\r
`);
            }
            u.push(null);
        });
        return u;
    };
    Et.getAwsChunkedEncodingStream = Rs;
});
const Ot = C(function(Ct) {
    Object.defineProperty(Ct, "__esModule", {
        value: true
    });
    Ct.headStream = Bs;
    async function Bs(e, t) {
        let r = 0;
        let s = [];
        let n = e.getReader();
        let i = false;
        while(!i){
            let { done, value } = await n.read();
            if (value) {
                s.push(value);
                r += value?.byteLength ?? 0;
            }
            if (r >= t) {
                break;
            }
            i = done;
        }
        n.releaseLock();
        let a = new Uint8Array(Math.min(t, r));
        let o = 0;
        for (let c of s){
            if (c.byteLength > a.byteLength - o) {
                a.set(c.subarray(0, a.byteLength - o), o);
                break;
            } else {
                a.set(c, o);
            }
            o += c.length;
        }
        return a;
    }
});
const zt = C(function(Pt) {
    Object.defineProperty(Pt, "__esModule", {
        value: true
    });
    Pt.headStream = undefined;
    const $t = Le("stream");
    const Rt = Ot();
    const Bt = B();
    const Ps = (e, t)=>{
        if (Bt.isReadableStream(e)) {
            return Rt.headStream(e, t);
        }
        return new Promise((resolve, reject)=>{
            let n = new It;
            n.limit = t;
            e.pipe(n);
            e.on("error", (i)=>{
                n.end();
                reject(i);
            });
            n.on("error", reject);
            n.on("finish", function() {
                let i = new Uint8Array(Buffer.concat(this.buffers));
                resolve(i);
            });
        });
    };
    Pt.headStream = Ps;
    class It extends $t.Writable {
        buffers = [];
        limit = Infinity;
        bytesBuffered = 0;
        _write(e, t, r) {
            this.buffers.push(e);
            this.bytesBuffered += e.byteLength ?? 0;
            if (this.bytesBuffered >= this.limit) {
                let s = this.bytesBuffered - this.limit;
                let n = this.buffers[this.buffers.length - 1];
                this.buffers[this.buffers.length - 1] = n.subarray(0, n.byteLength - s);
                this.emit("finish");
            }
            r();
        }
    }
});
const Ht = C(function(kt) {
    Object.defineProperty(kt, "__esModule", {
        value: true
    });
    kt.sdkStreamMixin = undefined;
    const qt = owe();
    const jt = $R();
    const Ut = $Pt();
    const Lt = Qk();
    const ne = B();
    const At = "The stream has already been transformed.";
    const Ns = (e)=>{
        if (!Dt(e) && !ne.isReadableStream(e)) {
            let n = e?.__proto__?.constructor?.name || e;
            throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${n}`);
        }
        let t = false;
        let r = async ()=>{
            if (t) {
                throw Error(At);
            }
            t = true;
            return await qt.streamCollector(e);
        };
        let s = (n)=>{
            if (typeof n.stream !== "function") {
                throw Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
            }
            return n.stream();
        };
        return Object.assign(e, {
            transformToByteArray: r,
            transformToString: async (n)=>{
                let i = await r();
                if (n === "base64") {
                    return jt.toBase64(i);
                } else if (n === "hex") {
                    return Ut.toHex(i);
                } else if (n === undefined || n === "utf8" || n === "utf-8") {
                    return Lt.toUtf8(i);
                } else if (typeof TextDecoder === "function") {
                    return new TextDecoder(n).decode(i);
                } else {
                    throw Error("TextDecoder is not available, please make sure polyfill is provided.");
                }
            },
            transformToWebStream: ()=>{
                if (t) {
                    throw Error(At);
                }
                t = true;
                if (Dt(e)) {
                    return s(e);
                } else if (ne.isReadableStream(e)) {
                    return e;
                } else {
                    throw Error(`Cannot transform payload to web stream, got ${e}`);
                }
            }
        });
    };
    kt.sdkStreamMixin = Ns;
    var Dt = (e)=>typeof Blob === "function" && e instanceof Blob;
});
const Yt = C(function(Qt) {
    Object.defineProperty(Qt, "__esModule", {
        value: true
    });
    Qt.sdkStreamMixin = undefined;
    const Jt = kH();
    const Wt = pDt();
    const z = Le("stream");
    const Vt = Ht();
    const vt = "The stream has already been transformed.";
    const zs = (e)=>{
        if (!(e instanceof z.Readable)) {
            try {
                return Vt.sdkStreamMixin(e);
            } catch (s) {
                let n = e?.__proto__?.constructor?.name || e;
                throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${n}`);
            }
        }
        let t = false;
        let r = async ()=>{
            if (t) {
                throw Error(vt);
            }
            t = true;
            return await Jt.streamCollector(e);
        };
        return Object.assign(e, {
            transformToByteArray: r,
            transformToString: async (s)=>{
                let n = await r();
                if (s === undefined || Buffer.isEncoding(s)) {
                    return Wt.fromArrayBuffer(n.buffer, n.byteOffset, n.byteLength).toString(s);
                } else {
                    return new TextDecoder(s).decode(n);
                }
            },
            transformToWebStream: ()=>{
                if (t) {
                    throw Error(vt);
                }
                if (e.readableFlowing !== null) {
                    throw Error("The stream has been consumed by other callbacks.");
                }
                if (typeof z.Readable.toWeb !== "function") {
                    throw Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
                }
                t = true;
                return z.Readable.toWeb(e);
            }
        });
    };
    Qt.sdkStreamMixin = zs;
});
const Kt = C(function(Zt) {
    Object.defineProperty(Zt, "__esModule", {
        value: true
    });
    Zt.splitStream = As;
    async function As(e) {
        if (typeof e.stream === "function") {
            e = e.stream();
        }
        return e.tee();
    }
});
const tr = C(function(er) {
    Object.defineProperty(er, "__esModule", {
        value: true
    });
    er.splitStream = qs;
    var ie = Le("stream");
    var Xt = Kt();
    var oe = B();
    async function qs(e) {
        if (oe.isReadableStream(e) || oe.isBlob(e)) {
            return Xt.splitStream(e);
        }
        let t = new ie.PassThrough;
        let r = new ie.PassThrough;
        e.pipe(t);
        e.pipe(r);
        return [
            t,
            r
        ];
    }
});
const Nmo = C(function(b) {
    const rr = $R();
    const sr = Qk();
    const nr = ye();
    const ir = at();
    const or = xt();
    const ar = Mt();
    const cr = zt();
    const ur = Yt();
    const hr = tr();
    const fr = B();
    class H extends Uint8Array {
        static fromString(e, t = "utf-8") {
            if (typeof e === "string") {
                if (t === "base64") {
                    return H.mutate(rr.fromBase64(e));
                }
                return H.mutate(sr.fromUtf8(e));
            }
            throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
        }
        static mutate(e) {
            Object.setPrototypeOf(e, H.prototype);
            return e;
        }
        transformToString(e = "utf-8") {
            if (e === "base64") {
                return rr.toBase64(this);
            }
            return sr.toUtf8(this);
        }
    }
    b.Uint8ArrayBlobAdapter = H;
    Object.keys(nr).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return nr[e];
                }
            });
        }
    });
    Object.keys(ir).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return ir[e];
                }
            });
        }
    });
    Object.keys(or).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return or[e];
                }
            });
        }
    });
    Object.keys(ar).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return ar[e];
                }
            });
        }
    });
    Object.keys(cr).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return cr[e];
                }
            });
        }
    });
    Object.keys(ur).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return ur[e];
                }
            });
        }
    });
    Object.keys(hr).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return hr[e];
                }
            });
        }
    });
    Object.keys(fr).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(b, e)) {
            Object.defineProperty(b, e, {
                enumerable: true,
                get: function() {
                    return fr[e];
                }
            });
        }
    });
});
const yr = C(function(lr) {
    Object.defineProperty(lr, "__esModule", {
        value: true
    });
    lr.randomUUID = undefined;
    const mr = u$e();
    const dr = mr.__importDefault(Le("crypto"));
    lr.randomUUID = dr.default.randomUUID.bind(dr.default);
});
const $mo = C(function(ks) {
    const br = yr();
    const g = Array.from({
        length: 256
    }, (e, t)=>t.toString(16).padStart(2, "0"));
    const Ls = ()=>{
        if (br.randomUUID) {
            return br.randomUUID();
        }
        let e = new Uint8Array(16);
        crypto.getRandomValues(e);
        e[6] = e[6] & 15 | 64;
        e[8] = e[8] & 63 | 128;
        return `${g[e[0]] + g[e[1]] + g[e[2]] + g[e[3]]}-${g[e[4]]}${g[e[5]]}-${g[e[6]]}${g[e[7]]}-${g[e[8]]}${g[e[9]]}-${g[e[10]]}${g[e[11]]}${g[e[12]]}${g[e[13]]}${g[e[14]]}${g[e[15]]}`;
    };
    ks.v4 = Ls;
});
const NPt = C(function(Cr) {
    const Hs = $mo();
    const vs = (e, t, r = (s)=>s)=>e;
    const Js = (e)=>{
        switch(e){
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw Error(`Unable to parse boolean value "${e}"`);
        }
    };
    const Ws = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e === "number") {
            if (e === 0 || e === 1) {
                V.warn(ce(`Expected boolean, got ${typeof e}: ${e}`));
            }
            if (e === 0) {
                return false;
            }
            if (e === 1) {
                return true;
            }
        }
        if (typeof e === "string") {
            let t = e.toLowerCase();
            if (t === "false" || t === "true") {
                V.warn(ce(`Expected boolean, got ${typeof e}: ${e}`));
            }
            if (t === "false") {
                return false;
            }
            if (t === "true") {
                return true;
            }
        }
        if (typeof e === "boolean") {
            return e;
        }
        throw TypeError(`Expected boolean, got ${typeof e}: ${e}`);
    };
    const J = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e === "string") {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) {
                if (String(t) !== String(e)) {
                    V.warn(ce(`Expected number but observed string: ${e}`));
                }
                return t;
            }
        }
        if (typeof e === "number") {
            return e;
        }
        throw TypeError(`Expected number, got ${typeof e}: ${e}`);
    };
    const Vs = Math.ceil(340282346638528860000000000000000000000);
    const ae = (e)=>{
        let t = J(e);
        if (t !== undefined && !Number.isNaN(t) && t !== Infinity && t !== -Infinity) {
            if (Math.abs(t) > Vs) {
                throw TypeError(`Expected 32-bit float, got ${e}`);
            }
        }
        return t;
    };
    const W = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (Number.isInteger(e) && !Number.isNaN(e)) {
            return e;
        }
        throw TypeError(`Expected integer, got ${typeof e}: ${e}`);
    };
    const Qs = W;
    const Se = (e)=>Te(e, 32);
    const we = (e)=>Te(e, 16);
    const xe = (e)=>Te(e, 8);
    var Te = (e, t)=>{
        let r = W(e);
        if (r !== undefined && Gs(r, t) !== r) {
            throw TypeError(`Expected ${t}-bit integer, got ${e}`);
        }
        return r;
    };
    var Gs = (e, t)=>{
        switch(t){
            case 32:
                return Int32Array.of(e)[0];
            case 16:
                return Int16Array.of(e)[0];
            case 8:
                return Int8Array.of(e)[0];
        }
    };
    const Ys = (e, t)=>{
        if (e === null || e === undefined) {
            if (t) {
                throw TypeError(`Expected a non-null value for ${t}`);
            }
            throw TypeError("Expected a non-null value");
        }
        return e;
    };
    const Sr = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e === "object" && !Array.isArray(e)) {
            return e;
        }
        let t = Array.isArray(e) ? "array" : typeof e;
        throw TypeError(`Expected object, got ${t}: ${e}`);
    };
    const Zs = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e === "string") {
            return e;
        }
        if ([
            "boolean",
            "number",
            "bigint"
        ].includes(typeof e)) {
            V.warn(ce(`Expected string, got ${typeof e}: ${e}`));
            return String(e);
        }
        throw TypeError(`Expected string, got ${typeof e}: ${e}`);
    };
    const Ks = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        let t = Sr(e);
        let r = Object.entries(t).filter(([, s])=>s != null).map(([s])=>s);
        if (r.length === 0) {
            throw TypeError("Unions must have exactly one non-null member. None were found.");
        }
        if (r.length > 1) {
            throw TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
        }
        return t;
    };
    const Ee = (e)=>{
        if (typeof e === "string") {
            return J(q(e));
        }
        return J(e);
    };
    const Xs = Ee;
    const wr = (e)=>{
        if (typeof e === "string") {
            return ae(q(e));
        }
        return ae(e);
    };
    const en = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    var q = (e)=>{
        let t = e.match(en);
        if (t === null || t[0].length !== e.length) {
            throw TypeError("Expected real number, got implicit NaN");
        }
        return parseFloat(e);
    };
    const _e = (e)=>{
        if (typeof e === "string") {
            return xr(e);
        }
        return J(e);
    };
    const tn = _e;
    const rn = _e;
    const sn = (e)=>{
        if (typeof e === "string") {
            return xr(e);
        }
        return ae(e);
    };
    var xr = (e)=>{
        switch(e){
            case "NaN":
                return NaN;
            case "Infinity":
                return Infinity;
            case "-Infinity":
                return -Infinity;
            default:
                throw Error(`Unable to parse float value: ${e}`);
        }
    };
    const Tr = (e)=>{
        if (typeof e === "string") {
            return W(q(e));
        }
        return W(e);
    };
    const nn = Tr;
    const on = (e)=>{
        if (typeof e === "string") {
            return Se(q(e));
        }
        return Se(e);
    };
    const A = (e)=>{
        if (typeof e === "string") {
            return we(q(e));
        }
        return we(e);
    };
    const Er = (e)=>{
        if (typeof e === "string") {
            return xe(q(e));
        }
        return xe(e);
    };
    var ce = (e)=>String(TypeError(e).stack || e).split(`
`).slice(0, 5).filter((t)=>!t.includes("stackTraceWarning")).join(`
`);
    var V = {
        warn: console.warn
    };
    const an = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const Me = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    function cn(e) {
        let t = e.getUTCFullYear();
        let r = e.getUTCMonth();
        let s = e.getUTCDay();
        let n = e.getUTCDate();
        let i = e.getUTCHours();
        let a = e.getUTCMinutes();
        let o = e.getUTCSeconds();
        let c = n < 10 ? `0${n}` : `${n}`;
        let u = i < 10 ? `0${i}` : `${i}`;
        let h = a < 10 ? `0${a}` : `${a}`;
        let f = o < 10 ? `0${o}` : `${o}`;
        return `${an[s]}, ${c} ${Me[r]} ${t} ${u}:${h}:${f} GMT`;
    }
    const un = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    const hn = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e !== "string") {
            throw TypeError("RFC-3339 date-times must be expressed as strings");
        }
        let t = un.exec(e);
        if (!t) {
            throw TypeError("Invalid RFC-3339 date-time value");
        }
        let [r, s, n, i, a, o, c, u] = t;
        let h = A(D(s));
        let f = E(n, "month", 1, 12);
        let d = E(i, "day", 1, 31);
        return v(h, f, d, {
            hours: a,
            minutes: o,
            seconds: c,
            fractionalMilliseconds: u
        });
    };
    const fn = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    const dn = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e !== "string") {
            throw TypeError("RFC-3339 date-times must be expressed as strings");
        }
        let t = fn.exec(e);
        if (!t) {
            throw TypeError("Invalid RFC-3339 date-time value");
        }
        let [r, s, n, i, a, o, c, u, h] = t;
        let f = A(D(s));
        let d = E(n, "month", 1, 12);
        let l = E(i, "day", 1, 31);
        let m = v(f, d, l, {
            hours: a,
            minutes: o,
            seconds: c,
            fractionalMilliseconds: u
        });
        if (h.toUpperCase() != "Z") {
            m.setTime(m.getTime() - Mn(h));
        }
        return m;
    };
    const mn = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    const ln = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    const pn = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    const yn = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        if (typeof e !== "string") {
            throw TypeError("RFC-7231 date-times must be expressed as strings");
        }
        let t = mn.exec(e);
        if (t) {
            let [r, s, n, i, a, o, c, u] = t;
            return v(A(D(i)), ge(n), E(s, "day", 1, 31), {
                hours: a,
                minutes: o,
                seconds: c,
                fractionalMilliseconds: u
            });
        }
        t = ln.exec(e);
        if (t) {
            let [r, s, n, i, a, o, c, u] = t;
            return wn(v(gn(i), ge(n), E(s, "day", 1, 31), {
                hours: a,
                minutes: o,
                seconds: c,
                fractionalMilliseconds: u
            }));
        }
        t = pn.exec(e);
        if (t) {
            let [r, s, n, i, a, o, c, u] = t;
            return v(A(D(u)), ge(s), E(n.trimLeft(), "day", 1, 31), {
                hours: i,
                minutes: a,
                seconds: o,
                fractionalMilliseconds: c
            });
        }
        throw TypeError("Invalid RFC-7231 date-time value");
    };
    const bn = (e)=>{
        if (e === null || e === undefined) {
            return;
        }
        let t;
        if (typeof e === "number") {
            t = e;
        } else if (typeof e === "string") {
            t = Ee(e);
        } else if (typeof e === "object" && e.tag === 1) {
            t = e.value;
        } else {
            throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        }
        if (Number.isNaN(t) || t === Infinity || t === -Infinity) {
            throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
        }
        return new Date(Math.round(t * 1000));
    };
    var v = (e, t, r, s)=>{
        let n = t - 1;
        Tn(e, n, r);
        return new Date(Date.UTC(e, n, r, E(s.hours, "hour", 0, 23), E(s.minutes, "minute", 0, 59), E(s.seconds, "seconds", 0, 60), _n(s.fractionalMilliseconds)));
    };
    var gn = (e)=>{
        let t = new Date().getUTCFullYear();
        let r = Math.floor(t / 100) * 100 + A(D(e));
        if (r < t) {
            return r + 100;
        }
        return r;
    };
    const Sn = 1576800000000;
    var wn = (e)=>{
        if (e.getTime() - new Date().getTime() > Sn) {
            return new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()));
        }
        return e;
    };
    var ge = (e)=>{
        let t = Me.indexOf(e);
        if (t < 0) {
            throw TypeError(`Invalid month: ${e}`);
        }
        return t + 1;
    };
    const xn = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    var Tn = (e, t, r)=>{
        let s = xn[t];
        if (t === 1 && En(e)) {
            s = 29;
        }
        if (r > s) {
            throw TypeError(`Invalid day for ${Me[t]} in ${e}: ${r}`);
        }
    };
    var En = (e)=>e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
    var E = (e, t, r, s)=>{
        let n = Er(D(e));
        if (n < r || n > s) {
            throw TypeError(`${t} must be between ${r} and ${s}, inclusive`);
        }
        return n;
    };
    var _n = (fractionalMilliseconds)=>{
        if (fractionalMilliseconds === null || fractionalMilliseconds === undefined) {
            return 0;
        }
        return wr(`0.${fractionalMilliseconds}`) * 1000;
    };
    var Mn = (e)=>{
        let t = e[0];
        let r = 1;
        if (t == "+") {
            r = 1;
        } else if (t == "-") {
            r = -1;
        } else {
            throw TypeError(`Offset direction, ${t}, must be "+" or "-"`);
        }
        let s = Number(e.substring(1, 3));
        let n = Number(e.substring(4, 6));
        return r * (s * 60 + n) * 60 * 1000;
    };
    var D = (e)=>{
        let t = 0;
        while(t < e.length - 1 && e.charAt(t) === "0"){
            t++;
        }
        if (t === 0) {
            return e;
        }
        return e.slice(t);
    };
    const I = function(t) {
        return Object.assign(new String(t), {
            deserializeJSON () {
                return JSON.parse(String(t));
            },
            toString () {
                return String(t);
            },
            toJSON () {
                return String(t);
            }
        });
    };
    I.from = (e)=>{
        if (e && typeof e === "object" && (e instanceof I || "deserializeJSON" in e)) {
            return e;
        } else if (typeof e === "string" || Object.getPrototypeOf(e) === String.prototype) {
            return I(String(e));
        }
        return I(JSON.stringify(e));
    };
    I.fromObject = I.from;
    function Cn(e) {
        if (e.includes(",") || e.includes('"')) {
            e = `"${e.replace(/"/g, "\\\"")}"`;
        }
        return e;
    }
    const Ce = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?";
    const Oe = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)";
    const $e = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?";
    const _r = "(\\d?\\d)";
    const Mr = "(\\d{4})";
    const On = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
    const $n = new RegExp(`^${Ce}, ${_r} ${Oe} ${Mr} ${$e} GMT$`);
    const Rn = new RegExp(`^${Ce}, ${_r}-${Oe}-(\\d\\d) ${$e} GMT$`);
    const Bn = new RegExp(`^${Ce} ${Oe} ( [1-9]|\\d\\d) ${$e} ${Mr}$`);
    const In = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const Pn = (e)=>{
        if (e == null) {
            return;
        }
        let t = NaN;
        if (typeof e === "number") {
            t = e;
        } else if (typeof e === "string") {
            if (!/^-?\d*\.?\d+$/.test(e)) {
                throw TypeError("parseEpochTimestamp - numeric string invalid.");
            }
            t = Number.parseFloat(e);
        } else if (typeof e === "object" && e.tag === 1) {
            t = e.value;
        }
        if (isNaN(t) || Math.abs(t) === Infinity) {
            throw TypeError("Epoch timestamps must be valid finite numbers.");
        }
        return new Date(Math.round(t * 1000));
    };
    const Nn = (e)=>{
        if (e == null) {
            return;
        }
        if (typeof e !== "string") {
            throw TypeError("RFC3339 timestamps must be strings");
        }
        let t = On.exec(e);
        if (!t) {
            throw TypeError(`Invalid RFC3339 timestamp format ${e}`);
        }
        let [, r, s, n, i, a, o, , c, u] = t;
        O(s, 1, 12);
        O(n, 1, 31);
        O(i, 0, 23);
        O(a, 0, 59);
        O(o, 0, 60);
        let h = new Date(Date.UTC(Number(r), Number(s) - 1, Number(n), Number(i), Number(a), Number(o), Number(c) ? Math.round(parseFloat(`0.${c}`) * 1000) : 0));
        h.setUTCFullYear(Number(r));
        if (u.toUpperCase() != "Z") {
            let [, f, d, l] = /([+-])(\d\d):(\d\d)/.exec(u) || [
                undefined,
                "+",
                0,
                0
            ];
            let m = f === "-" ? 1 : -1;
            h.setTime(h.getTime() + m * (Number(d) * 60 * 60 * 1000 + Number(l) * 60 * 1000));
        }
        return h;
    };
    const zn = (e)=>{
        if (e == null) {
            return;
        }
        if (typeof e !== "string") {
            throw TypeError("RFC7231 timestamps must be strings.");
        }
        let t;
        let r;
        let s;
        let n;
        let i;
        let a;
        let o;
        let c;
        if (c = $n.exec(e)) {
            [, t, r, s, n, i, a, o] = c;
        } else if (c = Rn.exec(e)) {
            [, t, r, s, n, i, a, o] = c;
            s = (Number(s) + 1900).toString();
        } else if (c = Bn.exec(e)) {
            [, r, t, n, i, a, o, s] = c;
        }
        if (s && a) {
            let u = Date.UTC(Number(s), In.indexOf(r), Number(t), Number(n), Number(i), Number(a), o ? Math.round(parseFloat(`0.${o}`) * 1000) : 0);
            O(t, 1, 31);
            O(n, 0, 23);
            O(i, 0, 59);
            O(a, 0, 60);
            let h = new Date(u);
            h.setUTCFullYear(Number(s));
            return h;
        }
        throw TypeError(`Invalid RFC7231 date-time value ${e}.`);
    };
    function O(e, t, r) {
        let s = Number(e);
        if (s < t || s > r) {
            throw Error(`Value ${s} out of range [${t}, ${r}]`);
        }
    }
    function An(e, t, r) {
        if (r <= 0 || !Number.isInteger(r)) {
            throw Error(`Invalid number of delimiters (${r}) for splitEvery.`);
        }
        let s = e.split(t);
        if (r === 1) {
            return s;
        }
        let n = [];
        let i = "";
        for(let a = 0; a < s.length; a++){
            if (i === "") {
                i = s[a];
            } else {
                i += t + s[a];
            }
            if ((a + 1) % r === 0) {
                n.push(i);
                i = "";
            }
        }
        if (i !== "") {
            n.push(i);
        }
        return n;
    }
    const Dn = (e)=>{
        let e_length = e.length;
        let r = [];
        let s = false;
        let n;
        let i = 0;
        for(let a = 0; a < e_length; ++a){
            let o = e[a];
            switch(o){
                case '"':
                    if (n !== "\\") {
                        s = !s;
                    }
                    break;
                case ",":
                    if (!s) {
                        r.push(e.slice(i, a));
                        i = a + 1;
                    }
                    break;
            }
            n = o;
        }
        r.push(e.slice(i));
        return r.map((a)=>{
            a = a.trim();
            let a_length = a.length;
            if (a_length < 2) {
                return a;
            }
            if (a[0] === '"' && a[a_length - 1] === '"') {
                a = a.slice(1, a_length - 1);
            }
            return a.replace(/\\"/g, '"');
        });
    };
    const gr = /^-?\d*(\.\d+)?$/;
    class ue {
        string;
        type;
        constructor(e, t){
            this.string = e;
            this.type = t;
            if (!gr.test(e)) {
                throw Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".');
            }
        }
        toString() {
            return this.string;
        }
        static [Symbol.hasInstance](e) {
            if (!e || typeof e !== "object") {
                return false;
            }
            let t = e;
            return ue.prototype.isPrototypeOf(e) || t.type === "bigDecimal" && gr.test(t.string);
        }
    }
    function qn(e) {
        return new ue(String(e), "bigDecimal");
    }
    Object.defineProperty(Cr, "generateIdempotencyToken", {
        enumerable: true,
        get: function() {
            return Hs.v4;
        }
    });
    Cr.LazyJsonString = I;
    Cr.NumericValue = ue;
    Cr._parseEpochTimestamp = Pn;
    Cr._parseRfc3339DateTimeWithOffset = Nn;
    Cr._parseRfc7231DateTime = zn;
    Cr.copyDocumentWithTransform = vs;
    Cr.dateToUtcString = cn;
    Cr.expectBoolean = Ws;
    Cr.expectByte = xe;
    Cr.expectFloat32 = ae;
    Cr.expectInt = Qs;
    Cr.expectInt32 = Se;
    Cr.expectLong = W;
    Cr.expectNonNull = Ys;
    Cr.expectNumber = J;
    Cr.expectObject = Sr;
    Cr.expectShort = we;
    Cr.expectString = Zs;
    Cr.expectUnion = Ks;
    Cr.handleFloat = tn;
    Cr.limitedParseDouble = _e;
    Cr.limitedParseFloat = rn;
    Cr.limitedParseFloat32 = sn;
    Cr.logger = V;
    Cr.nv = qn;
    Cr.parseBoolean = Js;
    Cr.parseEpochTimestamp = bn;
    Cr.parseRfc3339DateTime = hn;
    Cr.parseRfc3339DateTimeWithOffset = dn;
    Cr.parseRfc7231DateTime = yn;
    Cr.quoteHeader = Cn;
    Cr.splitEvery = An;
    Cr.splitHeader = Dn;
    Cr.strictParseByte = Er;
    Cr.strictParseDouble = Ee;
    Cr.strictParseFloat = Xs;
    Cr.strictParseFloat32 = wr;
    Cr.strictParseInt = nn;
    Cr.strictParseInt32 = on;
    Cr.strictParseLong = Tr;
    Cr.strictParseShort = A;
});
const Vat = C(function(Ci) {
    const he = Nmo();
    const T = Zx();
    const x = NPt();
    const Q = jm();
    const fe = $R();
    const Re = Qk();
    const P = async (e = new Uint8Array, t)=>{
        if (e instanceof Uint8Array) {
            return he.Uint8ArrayBlobAdapter.mutate(e);
        }
        if (!e) {
            return he.Uint8ArrayBlobAdapter.mutate(new Uint8Array);
        }
        let r = t.streamCollector(e);
        return he.Uint8ArrayBlobAdapter.mutate(await r);
    };
    function G(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, (t)=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    class j {
        serdeContext;
        setSerdeContext(e) {
            this.serdeContext = e;
        }
    }
    class de extends j {
        options;
        constructor(e){
            super();
            this.options = e;
        }
        getRequestType() {
            return Q.HttpRequest;
        }
        getResponseType() {
            return Q.HttpResponse;
        }
        setSerdeContext(e) {
            this.serdeContext = e;
            this.serializer.setSerdeContext(e);
            this.deserializer.setSerdeContext(e);
            if (this.getPayloadCodec()) {
                this.getPayloadCodec().setSerdeContext(e);
            }
        }
        updateServiceEndpoint(e, t) {
            if ("url" in t) {
                e.protocol = t.url.protocol;
                e.hostname = t.url.hostname;
                e.port = t.url.port ? Number(t.url.port) : undefined;
                e.path = t.url.pathname;
                e.fragment = t.url.hash || undefined;
                e.username = t.url.username || undefined;
                e.password = t.url.password || undefined;
                if (!e.query) {
                    e.query = {};
                }
                for (let [r, s] of t.url.searchParams.entries()){
                    e.query[r] = s;
                }
                return e;
            } else {
                e.protocol = t.protocol;
                e.hostname = t.hostname;
                e.port = t.port ? Number(t.port) : undefined;
                e.path = t.path;
                e.query = {
                    ...t.query
                };
                return e;
            }
        }
        setHostPrefix(e, t, r) {
            let s = T.NormalizedSchema.of(t.input);
            let n = T.translateTraits(t.traits ?? {});
            if (n.endpoint) {
                let i = n.endpoint?.[0];
                if (typeof i === "string") {
                    let a = [
                        ...s.structIterator()
                    ].filter(([, o])=>o.getMergedTraits().hostLabel);
                    for (let [o] of a){
                        let c = r[o];
                        if (typeof c !== "string") {
                            throw Error(`@smithy/core/schema - ${o} in input must be a string as hostLabel.`);
                        }
                        i = i.replace(`{${o}}`, c);
                    }
                    e.hostname = i + e.hostname;
                }
            }
        }
        deserializeMetadata(e) {
            return {
                httpStatusCode: e.statusCode,
                requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
                extendedRequestId: e.headers["x-amz-id-2"],
                cfId: e.headers["x-amz-cf-id"]
            };
        }
        async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
            return (await this.loadEventStreamCapability()).serializeEventStream({
                eventStream,
                requestSchema,
                initialRequest
            });
        }
        async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
            return (await this.loadEventStreamCapability()).deserializeEventStream({
                response,
                responseSchema,
                initialResponseContainer
            });
        }
        async loadEventStreamCapability() {
            let { EventStreamSerde } = await import("/$bunfs/root/chunk-7dev6yqq.js");
            return new EventStreamSerde({
                marshaller: this.getEventStreamMarshaller(),
                serializer: this.serializer,
                deserializer: this.deserializer,
                serdeContext: this.serdeContext,
                defaultContentType: this.getDefaultContentType()
            });
        }
        getDefaultContentType() {
            throw Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
        }
        async deserializeHttpMessage(e, t, r, s, n) {
            return [];
        }
        getEventStreamMarshaller() {
            let serdeContext = this.serdeContext;
            if (!serdeContext.eventStreamMarshaller) {
                throw Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
            }
            return serdeContext.eventStreamMarshaller;
        }
    }
    class Or extends de {
        async serializeRequest(e, t, r) {
            let s = {
                ...t ?? {}
            };
            let serializer = this.serializer;
            let i = {};
            let a = {};
            let o = await r.endpoint();
            let c = T.NormalizedSchema.of(e?.input);
            let u = c.getSchema();
            let h = false;
            let f;
            let d = new Q.HttpRequest({
                protocol: "",
                hostname: "",
                port: undefined,
                path: "",
                fragment: undefined,
                query: i,
                headers: a,
                body: undefined
            });
            if (o) {
                this.updateServiceEndpoint(d, o);
                this.setHostPrefix(d, e, s);
                let l = T.translateTraits(e.traits);
                if (l.http) {
                    d.method = l.http[0];
                    let [m, p] = l.http[1].split("?");
                    if (d.path == "/") {
                        d.path = m;
                    } else {
                        d.path += m;
                    }
                    let S = new URLSearchParams(p ?? "");
                    Object.assign(i, Object.fromEntries(S));
                }
            }
            for (let [l, m] of c.structIterator()){
                let p = m.getMergedTraits() ?? {};
                let S = s[l];
                if (S == null && !m.isIdempotencyToken()) {
                    continue;
                }
                if (p.httpPayload) {
                    if (m.isStreaming()) {
                        if (m.isStructSchema()) {
                            if (s[l]) {
                                f = await this.serializeEventStream({
                                    eventStream: s[l],
                                    requestSchema: c
                                });
                            }
                        } else {
                            f = S;
                        }
                    } else {
                        serializer.write(m, S);
                        f = serializer.flush();
                    }
                    delete s[l];
                } else if (p.httpLabel) {
                    serializer.write(m, S);
                    let R = serializer.flush();
                    if (d.path.includes(`{${l}+}`)) {
                        d.path = d.path.replace(`{${l}+}`, R.split("/").map(G).join("/"));
                    } else if (d.path.includes(`{${l}}`)) {
                        d.path = d.path.replace(`{${l}}`, G(R));
                    }
                    delete s[l];
                } else if (p.httpHeader) {
                    serializer.write(m, S);
                    a[p.httpHeader.toLowerCase()] = String(serializer.flush());
                    delete s[l];
                } else if (typeof p.httpPrefixHeaders === "string") {
                    for (let [R, Y] of Object.entries(S)){
                        let httpHeader = p.httpPrefixHeaders + R;
                        serializer.write([
                            m.getValueSchema(),
                            {
                                httpHeader
                            }
                        ], Y);
                        a[httpHeader.toLowerCase()] = serializer.flush();
                    }
                    delete s[l];
                } else if (p.httpQuery || p.httpQueryParams) {
                    this.serializeQuery(m, S, i);
                    delete s[l];
                } else {
                    h = true;
                }
            }
            if (h && s) {
                serializer.write(u, s);
                f = serializer.flush();
            }
            d.headers = a;
            d.query = i;
            d.body = f;
            return d;
        }
        serializeQuery(e, t, r) {
            let serializer = this.serializer;
            let n = e.getMergedTraits();
            if (n.httpQueryParams) {
                for (let [i, a] of Object.entries(t)){
                    if (!(i in r)) {
                        let o = e.getValueSchema();
                        Object.assign(o.getMergedTraits(), {
                            ...n,
                            httpQuery: i,
                            httpQueryParams: undefined
                        });
                        this.serializeQuery(o, a, r);
                    }
                }
                return;
            }
            if (e.isListSchema()) {
                let i = !!e.getMergedTraits().sparse;
                let a = [];
                for (let o of t){
                    serializer.write([
                        e.getValueSchema(),
                        n
                    ], o);
                    let c = serializer.flush();
                    if (i || c !== undefined) {
                        a.push(c);
                    }
                }
                r[n.httpQuery] = a;
            } else {
                serializer.write([
                    e,
                    n
                ], t);
                r[n.httpQuery] = serializer.flush();
            }
        }
        async deserializeResponse(e, t, r) {
            let deserializer = this.deserializer;
            let n = T.NormalizedSchema.of(e.output);
            let i = {};
            if (r.statusCode >= 300) {
                let o = await P(r.body, t);
                if (o.byteLength > 0) {
                    Object.assign(i, await deserializer.read(15, o));
                }
                await this.handleError(e, t, r, i, this.deserializeMetadata(r));
                throw Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
            }
            for(let o in r.headers){
                let c = r.headers[o];
                delete r.headers[o];
                r.headers[o.toLowerCase()] = c;
            }
            let a = await this.deserializeHttpMessage(n, t, r, i);
            if (a.length) {
                let o = await P(r.body, t);
                if (o.byteLength > 0) {
                    let c = await deserializer.read(n, o);
                    for (let u of a){
                        i[u] = c[u];
                    }
                }
            } else if (a.discardResponseBody) {
                await P(r.body, t);
            }
            i.$metadata = this.deserializeMetadata(r);
            return i;
        }
        async deserializeHttpMessage(e, t, r, s, n) {
            let i;
            if (s instanceof Set) {
                i = n;
            } else {
                i = s;
            }
            let a = true;
            let deserializer = this.deserializer;
            let c = T.NormalizedSchema.of(e);
            let u = [];
            for (let [h, f] of c.structIterator()){
                let d = f.getMemberTraits();
                if (d.httpPayload) {
                    a = false;
                    if (f.isStreaming()) {
                        if (f.isStructSchema()) {
                            i[h] = await this.deserializeEventStream({
                                response: r,
                                responseSchema: c
                            });
                        } else {
                            i[h] = he.sdkStreamMixin(r.body);
                        }
                    } else if (r.body) {
                        let m = await P(r.body, t);
                        if (m.byteLength > 0) {
                            i[h] = await deserializer.read(f, m);
                        }
                    }
                } else if (d.httpHeader) {
                    let l = String(d.httpHeader).toLowerCase();
                    let m = r.headers[l];
                    if (m != null) {
                        if (f.isListSchema()) {
                            let p = f.getValueSchema();
                            p.getMergedTraits().httpHeader = l;
                            let S;
                            if (p.isTimestampSchema() && p.getSchema() === 4) {
                                S = x.splitEvery(m, ",", 2);
                            } else {
                                S = x.splitHeader(m);
                            }
                            let R = [];
                            for (let Y of S){
                                R.push(await deserializer.read(p, Y.trim()));
                            }
                            i[h] = R;
                        } else {
                            i[h] = await deserializer.read(f, m);
                        }
                    }
                } else if (d.httpPrefixHeaders !== undefined) {
                    i[h] = {};
                    for (let [l, m] of Object.entries(r.headers)){
                        if (l.startsWith(d.httpPrefixHeaders)) {
                            let p = f.getValueSchema();
                            p.getMergedTraits().httpHeader = l;
                            i[h][l.slice(d.httpPrefixHeaders.length)] = await deserializer.read(p, m);
                        }
                    }
                } else if (d.httpResponseCode) {
                    i[h] = r.statusCode;
                } else {
                    u.push(h);
                }
            }
            u.discardResponseBody = a;
            return u;
        }
    }
    class $r extends de {
        async serializeRequest(e, t, r) {
            let serializer = this.serializer;
            let n = {};
            let i = {};
            let a = await r.endpoint();
            let o = T.NormalizedSchema.of(e?.input);
            let c = o.getSchema();
            let u;
            let h = new Q.HttpRequest({
                protocol: "",
                hostname: "",
                port: undefined,
                path: "/",
                fragment: undefined,
                query: n,
                headers: i,
                body: undefined
            });
            if (a) {
                this.updateServiceEndpoint(h, a);
                this.setHostPrefix(h, e, t);
            }
            let f = {
                ...t
            };
            if (t) {
                let d = o.getEventStreamMember();
                if (d) {
                    if (f[d]) {
                        let initialRequest = {};
                        for (let [m, p] of o.structIterator()){
                            if (m !== d && f[m]) {
                                serializer.write(p, f[m]);
                                initialRequest[m] = serializer.flush();
                            }
                        }
                        u = await this.serializeEventStream({
                            eventStream: f[d],
                            requestSchema: o,
                            initialRequest
                        });
                    }
                } else {
                    serializer.write(c, f);
                    u = serializer.flush();
                }
            }
            h.headers = i;
            h.query = n;
            h.body = u;
            h.method = "POST";
            return h;
        }
        async deserializeResponse(e, t, r) {
            let deserializer = this.deserializer;
            let n = T.NormalizedSchema.of(e.output);
            let initialResponseContainer = {};
            if (r.statusCode >= 300) {
                let o = await P(r.body, t);
                if (o.byteLength > 0) {
                    Object.assign(initialResponseContainer, await deserializer.read(15, o));
                }
                await this.handleError(e, t, r, initialResponseContainer, this.deserializeMetadata(r));
                throw Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
            }
            for(let o in r.headers){
                let c = r.headers[o];
                delete r.headers[o];
                r.headers[o.toLowerCase()] = c;
            }
            let a = n.getEventStreamMember();
            if (a) {
                initialResponseContainer[a] = await this.deserializeEventStream({
                    response: r,
                    responseSchema: n,
                    initialResponseContainer
                });
            } else {
                let o = await P(r.body, t);
                if (o.byteLength > 0) {
                    Object.assign(initialResponseContainer, await deserializer.read(n, o));
                }
            }
            initialResponseContainer.$metadata = this.deserializeMetadata(r);
            return initialResponseContainer;
        }
    }
    const Rr = (e, t, r, s, n, i)=>{
        if (t != null && t[r] !== undefined) {
            let a = s();
            if (a.length <= 0) {
                throw Error(`Empty value provided for input HTTP label: ${r}.`);
            }
            e = e.replace(n, i ? a.split("/").map((o)=>G(o)).join("/") : G(a));
        } else {
            throw Error(`No value provided for input HTTP label: ${r}.`);
        }
        return e;
    };
    function Mi(e, t) {
        return new Be(e, t);
    }
    class Be {
        input;
        context;
        query = {};
        method = "";
        headers = {};
        path = "";
        body = null;
        hostname = "";
        resolvePathStack = [];
        constructor(e, t){
            this.input = e;
            this.context = t;
        }
        async build() {
            let { hostname, protocol = "https", port, path } = await this.context.endpoint();
            this.path = path;
            for (let n of this.resolvePathStack){
                n(this.path);
            }
            return new Q.HttpRequest({
                protocol,
                hostname: this.hostname || hostname,
                port,
                method: this.method,
                path: this.path,
                query: this.query,
                body: this.body,
                headers: this.headers
            });
        }
        hn(e) {
            this.hostname = e;
            return this;
        }
        bp(e) {
            this.resolvePathStack.push((t)=>{
                this.path = `${t?.endsWith("/") ? t.slice(0, -1) : t || ""}` + e;
            });
            return this;
        }
        p(e, t, r, s) {
            this.resolvePathStack.push((n)=>{
                this.path = Rr(n, this.input, e, t, r, s);
            });
            return this;
        }
        h(e) {
            this.headers = e;
            return this;
        }
        q(e) {
            this.query = e;
            return this;
        }
        b(e) {
            this.body = e;
            return this;
        }
        m(e) {
            this.method = e;
            return this;
        }
    }
    function Ie(e, t) {
        if (t.timestampFormat.useTrait) {
            if (e.isTimestampSchema() && (e.getSchema() === 5 || e.getSchema() === 6 || e.getSchema() === 7)) {
                return e.getSchema();
            }
        }
        let { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = e.getMergedTraits();
        return (t.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : undefined : undefined) ?? t.timestampFormat.default;
    }
    class Pe extends j {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        read(e, t) {
            let r = T.NormalizedSchema.of(e);
            if (r.isListSchema()) {
                return x.splitHeader(t).map((s)=>this.read(r.getValueSchema(), s));
            }
            if (r.isBlobSchema()) {
                return (this.serdeContext?.base64Decoder ?? fe.fromBase64)(t);
            }
            if (r.isTimestampSchema()) {
                switch(Ie(r, this.settings)){
                    case 5:
                        return x._parseRfc3339DateTimeWithOffset(t);
                    case 6:
                        return x._parseRfc7231DateTime(t);
                    case 7:
                        return x._parseEpochTimestamp(t);
                    default:
                        console.warn("Missing timestamp format, parsing value with Date constructor:", t);
                        return new Date(t);
                }
            }
            if (r.isStringSchema()) {
                let s = r.getMergedTraits().mediaType;
                let n = t;
                if (s) {
                    if (r.getMergedTraits().httpHeader) {
                        n = this.base64ToUtf8(n);
                    }
                    if (s === "application/json" || s.endsWith("+json")) {
                        n = x.LazyJsonString.from(n);
                    }
                    return n;
                }
            }
            if (r.isNumericSchema()) {
                return Number(t);
            }
            if (r.isBigIntegerSchema()) {
                return BigInt(t);
            }
            if (r.isBigDecimalSchema()) {
                return new x.NumericValue(t, "bigDecimal");
            }
            if (r.isBooleanSchema()) {
                return String(t).toLowerCase() === "true";
            }
            return t;
        }
        base64ToUtf8(e) {
            return (this.serdeContext?.utf8Encoder ?? Re.toUtf8)((this.serdeContext?.base64Decoder ?? fe.fromBase64)(e));
        }
    }
    class Br extends j {
        codecDeserializer;
        stringDeserializer;
        constructor(e, t){
            super();
            this.codecDeserializer = e;
            this.stringDeserializer = new Pe(t);
        }
        setSerdeContext(e) {
            this.stringDeserializer.setSerdeContext(e);
            this.codecDeserializer.setSerdeContext(e);
            this.serdeContext = e;
        }
        read(e, t) {
            let r = T.NormalizedSchema.of(e);
            let s = r.getMergedTraits();
            let n = this.serdeContext?.utf8Encoder ?? Re.toUtf8;
            if (s.httpHeader || s.httpResponseCode) {
                return this.stringDeserializer.read(r, n(t));
            }
            if (s.httpPayload) {
                if (r.isBlobSchema()) {
                    let i = this.serdeContext?.utf8Decoder ?? Re.fromUtf8;
                    if (typeof t === "string") {
                        return i(t);
                    }
                    return t;
                } else if (r.isStringSchema()) {
                    if ("byteLength" in t) {
                        return n(t);
                    }
                    return t;
                }
            }
            return this.codecDeserializer.read(r, t);
        }
    }
    class Ne extends j {
        settings;
        stringBuffer = "";
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t) {
            let r = T.NormalizedSchema.of(e);
            switch(typeof t){
                case "object":
                    if (t === null) {
                        this.stringBuffer = "null";
                        return;
                    }
                    if (r.isTimestampSchema()) {
                        if (!(t instanceof Date)) {
                            throw Error(`@smithy/core/protocols - received non-Date value ${t} when schema expected Date in ${r.getName(true)}`);
                        }
                        switch(Ie(r, this.settings)){
                            case 5:
                                this.stringBuffer = t.toISOString().replace(".000Z", "Z");
                                break;
                            case 6:
                                this.stringBuffer = x.dateToUtcString(t);
                                break;
                            case 7:
                                this.stringBuffer = String(t.getTime() / 1000);
                                break;
                            default:
                                console.warn("Missing timestamp format, using epoch seconds", t);
                                this.stringBuffer = String(t.getTime() / 1000);
                        }
                        return;
                    }
                    if (r.isBlobSchema() && "byteLength" in t) {
                        this.stringBuffer = (this.serdeContext?.base64Encoder ?? fe.toBase64)(t);
                        return;
                    }
                    if (r.isListSchema() && Array.isArray(t)) {
                        let i = "";
                        for (let a of t){
                            this.write([
                                r.getValueSchema(),
                                r.getMergedTraits()
                            ], a);
                            let o = this.flush();
                            let c = r.getValueSchema().isTimestampSchema() ? o : x.quoteHeader(o);
                            if (i !== "") {
                                i += ", ";
                            }
                            i += c;
                        }
                        this.stringBuffer = i;
                        return;
                    }
                    this.stringBuffer = JSON.stringify(t, null, 2);
                    break;
                case "string":
                    let s = r.getMergedTraits().mediaType;
                    let n = t;
                    if (s) {
                        if (s === "application/json" || s.endsWith("+json")) {
                            n = x.LazyJsonString.from(n);
                        }
                        if (r.getMergedTraits().httpHeader) {
                            this.stringBuffer = (this.serdeContext?.base64Encoder ?? fe.toBase64)(n.toString());
                            return;
                        }
                    }
                    this.stringBuffer = t;
                    break;
                default:
                    if (r.isIdempotencyToken()) {
                        this.stringBuffer = x.generateIdempotencyToken();
                    } else {
                        this.stringBuffer = String(t);
                    }
            }
        }
        flush() {
            let stringBuffer = this.stringBuffer;
            this.stringBuffer = "";
            return stringBuffer;
        }
    }
    class Ir {
        codecSerializer;
        stringSerializer;
        buffer;
        constructor(e, t, r = new Ne(t)){
            this.codecSerializer = e;
            this.stringSerializer = r;
        }
        setSerdeContext(e) {
            this.codecSerializer.setSerdeContext(e);
            this.stringSerializer.setSerdeContext(e);
        }
        write(e, t) {
            let r = T.NormalizedSchema.of(e);
            let s = r.getMergedTraits();
            if (s.httpHeader || s.httpLabel || s.httpQuery) {
                this.stringSerializer.write(r, t);
                this.buffer = this.stringSerializer.flush();
                return;
            }
            return this.codecSerializer.write(r, t);
        }
        flush() {
            if (this.buffer !== undefined) {
                let e = this.buffer;
                this.buffer = undefined;
                return e;
            }
            return this.codecSerializer.flush();
        }
    }
    Ci.FromStringShapeDeserializer = Pe;
    Ci.HttpBindingProtocol = Or;
    Ci.HttpInterceptingShapeDeserializer = Br;
    Ci.HttpInterceptingShapeSerializer = Ir;
    Ci.HttpProtocol = de;
    Ci.RequestBuilder = Be;
    Ci.RpcProtocol = $r;
    Ci.SerdeContext = j;
    Ci.ToStringShapeSerializer = Ne;
    Ci.collectBody = P;
    Ci.determineTimestampFormat = Ie;
    Ci.extendedEncodeURIComponent = G;
    Ci.requestBuilder = Mi;
    Ci.resolvedPath = Rr;
});
export { Nmo, Zx, $mo, NPt, Vat };
