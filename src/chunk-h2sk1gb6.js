import { cFn, dFn, ISs } from "/$bunfs/root/chunk-09p18edh.js";
import { DPt, HQt, Tmo, Amo } from "/$bunfs/root/chunk-97t027xh.js";
import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { Ode } from "/$bunfs/root/chunk-xn017ebj.js";
import { uFn, pFn } from "/$bunfs/root/chunk-4p0wkc4p.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { goe, hoe, yoe, t7, DT, n7, _oe, KB, r7, aF, boe, Soe, woe, voe, Eoe, o7 } from "/$bunfs/root/chunk-67wg4vkc.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Zx } from "/$bunfs/root/chunk-sw8e7v35.js";
import { $Pt } from "/$bunfs/root/chunk-hx6qdsg5.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qk, $R } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { PassThrough, pipeline, Readable, Transform } from "stream";
function ae(e) {
    let { signer, signer: signer_1 } = e;
    let r = Object.assign(e, {
        eventSigner: signer,
        messageSigner: signer_1
    });
    let eventStreamPayloadHandler = r.eventStreamPayloadHandlerProvider(r);
    return Object.assign(r, {
        eventStreamPayloadHandler
    });
}
const L = Se(goe());
const st = Se(hoe());
const at = Se(yoe());
const O = Se(n7());
class At {
    constructor(){
        this.crc32 = new g;
    }
    update(t) {
        if (HQt(t)) {
            return;
        }
        this.crc32.update(DPt(t));
    }
    digest() {
        return cFn(this, undefined, undefined, function() {
            return dFn(this, function(t) {
                return [
                    2,
                    Tmo(this.crc32.digest())
                ];
            });
        });
    }
    reset() {
        this.crc32 = new g;
    }
}
class g {
    constructor(){
        this.checksum = 4294967295;
    }
    update(t) {
        let o;
        let r;
        try {
            for(var n = ISs(t), s = n.next(); !s.done; s = n.next()){
                const a = s.value;
                this.checksum = this.checksum >>> 8 ^ Bt[(this.checksum ^ a) & 255];
            }
        } catch (error) {
            o = {
                error
            };
        } finally{
            try {
                if (s && !s.done && (r = n.return)) {
                    r.call(n);
                }
            } finally{
                if (o) {
                    throw o.error;
                }
            }
        }
        return this;
    }
    digest() {
        return (this.checksum ^ 4294967295) >>> 0;
    }
}
const yt = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918000,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
];
const Bt = Amo(yt);
const m = Se($Pt());
const ce = Se($Pt());
class h {
    bytes;
    constructor(e){
        this.bytes = e;
        if (e.byteLength !== 8) {
            throw Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(e) {
        if (e > 9223372036854776000 || e < -9223372036854776000) {
            throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
        }
        let t = new Uint8Array(8);
        for(let o = 7, r = Math.abs(Math.round(e)); o > -1 && r > 0; o--, r /= 256){
            t[o] = r;
        }
        if (e < 0) {
            ie(t);
        }
        return new h(t);
    }
    valueOf() {
        let e = this.bytes.slice(0);
        let t = e[0] & 128;
        if (t) {
            ie(e);
        }
        return parseInt(ce.toHex(e), 16) * (t ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function ie(e) {
    for(let t = 0; t < 8; t++){
        e[t] ^= 255;
    }
    for(let t = 7; t > -1; t--){
        e[t]++;
        if (e[t] !== 0) {
            break;
        }
    }
}
class z {
    toUtf8;
    fromUtf8;
    constructor(e, t){
        this.toUtf8 = e;
        this.fromUtf8 = t;
    }
    format(e) {
        let t = [];
        for (let n of Object.keys(e)){
            let s = this.fromUtf8(n);
            t.push(Uint8Array.from([
                s.byteLength
            ]), s, this.formatHeaderValue(e[n]));
        }
        let o = new Uint8Array(t.reduce((acc, item)=>acc + item.byteLength, 0));
        let r = 0;
        for (let n of t){
            o.set(n, r);
            r += n.byteLength;
        }
        return o;
    }
    formatHeaderValue(e) {
        switch(e.type){
            case "boolean":
                return Uint8Array.from([
                    e.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    e.value
                ]);
            case "short":
                let t = new DataView(new ArrayBuffer(3));
                t.setUint8(0, 3);
                t.setInt16(1, e.value, false);
                return new Uint8Array(t.buffer);
            case "integer":
                let o = new DataView(new ArrayBuffer(5));
                o.setUint8(0, 4);
                o.setInt32(1, e.value, false);
                return new Uint8Array(o.buffer);
            case "long":
                let r = new Uint8Array(9);
                r[0] = 5;
                r.set(e.value.bytes, 1);
                return r;
            case "binary":
                let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                n.setUint8(0, 6);
                n.setUint16(1, e.value.byteLength, false);
                let s = new Uint8Array(n.buffer);
                s.set(e.value, 3);
                return s;
            case "string":
                let a = this.fromUtf8(e.value);
                let i = new DataView(new ArrayBuffer(3 + a.byteLength));
                i.setUint8(0, 7);
                i.setUint16(1, a.byteLength, false);
                let c = new Uint8Array(i.buffer);
                c.set(a, 3);
                return c;
            case "timestamp":
                let p = new Uint8Array(9);
                p[0] = 8;
                p.set(h.fromNumber(e.value.valueOf()).bytes, 1);
                return p;
            case "uuid":
                if (!bt.test(e.value)) {
                    throw Error(`Invalid UUID received: ${e.value}`);
                }
                let u = new Uint8Array(17);
                u[0] = 9;
                u.set(m.fromHex(e.value.replace(/\-/g, "")), 1);
                return u;
        }
    }
    parse(e) {
        let t = {};
        let o = 0;
        while(o < e.byteLength){
            let r = e.getUint8(o++);
            let n = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, r));
            o += r;
            switch(e.getUint8(o++)){
                case 0:
                    t[n] = {
                        type: le,
                        value: true
                    };
                    break;
                case 1:
                    t[n] = {
                        type: le,
                        value: false
                    };
                    break;
                case 2:
                    t[n] = {
                        type: Rt,
                        value: e.getInt8(o++)
                    };
                    break;
                case 3:
                    t[n] = {
                        type: Et,
                        value: e.getInt16(o, false)
                    };
                    o += 2;
                    break;
                case 4:
                    t[n] = {
                        type: It,
                        value: e.getInt32(o, false)
                    };
                    o += 4;
                    break;
                case 5:
                    t[n] = {
                        type: Tt,
                        value: new h(new Uint8Array(e.buffer, e.byteOffset + o, 8))
                    };
                    o += 8;
                    break;
                case 6:
                    let s = e.getUint16(o, false);
                    o += 2;
                    t[n] = {
                        type: Gt,
                        value: new Uint8Array(e.buffer, e.byteOffset + o, s)
                    };
                    o += s;
                    break;
                case 7:
                    let a = e.getUint16(o, false);
                    o += 2;
                    t[n] = {
                        type: kt,
                        value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, a))
                    };
                    o += a;
                    break;
                case 8:
                    t[n] = {
                        type: Dt,
                        value: new Date(new h(new Uint8Array(e.buffer, e.byteOffset + o, 8)).valueOf())
                    };
                    o += 8;
                    break;
                case 9:
                    let i = new Uint8Array(e.buffer, e.byteOffset + o, 16);
                    o += 16;
                    t[n] = {
                        type: Pt,
                        value: `${m.toHex(i.subarray(0, 4))}-${m.toHex(i.subarray(4, 6))}-${m.toHex(i.subarray(6, 8))}-${m.toHex(i.subarray(8, 10))}-${m.toHex(i.subarray(10))}`
                    };
                    break;
                default:
                    throw Error("Unrecognized header type tag");
            }
        }
        return t;
    }
}
const _e = {
    boolTrue: 0,
    0: "boolTrue",
    boolFalse: 1,
    1: "boolFalse",
    byte: 2,
    2: "byte",
    short: 3,
    3: "short",
    integer: 4,
    4: "integer",
    long: 5,
    5: "long",
    byteArray: 6,
    6: "byteArray",
    string: 7,
    7: "string",
    timestamp: 8,
    8: "timestamp",
    uuid: 9,
    9: "uuid"
};
const le = "boolean";
const Rt = "byte";
const Et = "short";
const It = "integer";
const Tt = "long";
const Gt = "binary";
const kt = "string";
const Dt = "timestamp";
const Pt = "uuid";
const bt = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
const ue = 4;
const x = ue * 2;
const f = 4;
const Mt = x + f * 2;
function de({ byteLength, byteOffset, buffer }) {
    if (byteLength < Mt) {
        throw Error("Provided message too short to accommodate event stream message overhead");
    }
    let r = new DataView(buffer, byteOffset, byteLength);
    let n = r.getUint32(0, false);
    if (byteLength !== n) {
        throw Error("Reported message length does not match received message length");
    }
    let s = r.getUint32(ue, false);
    let a = r.getUint32(x, false);
    let i = r.getUint32(byteLength - f, false);
    let c = new g().update(new Uint8Array(buffer, byteOffset, x));
    if (a !== c.digest()) {
        throw Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${c.digest()})`);
    }
    c.update(new Uint8Array(buffer, byteOffset + x, byteLength - (x + f)));
    if (i !== c.digest()) {
        throw Error(`The message checksum (${c.digest()}) did not match the expected value of ${i}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + x + f, s),
        body: new Uint8Array(buffer, byteOffset + x + f + s, n - s - (x + f + f))
    };
}
class E {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(e, t){
        this.headerMarshaller = new z(e, t);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(e) {
        this.messageBuffer.push(this.decode(e));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        let e = this.messageBuffer.pop();
        let isEndOfStream = this.isEndOfStream;
        return {
            getMessage () {
                return e;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    getAvailableMessages() {
        let messageBuffer = this.messageBuffer;
        this.messageBuffer = [];
        let isEndOfStream = this.isEndOfStream;
        return {
            getMessages () {
                return messageBuffer;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    encode({ headers, body }) {
        let o = this.headerMarshaller.format(headers);
        let r = o.byteLength + body.byteLength + 16;
        let n = new Uint8Array(r);
        let s = new DataView(n.buffer, n.byteOffset, n.byteLength);
        let a = new g;
        s.setUint32(0, r, false);
        s.setUint32(4, o.byteLength, false);
        s.setUint32(8, a.update(n.subarray(0, 8)).digest(), false);
        n.set(o, 12);
        n.set(body, o.byteLength + 12);
        s.setUint32(r - 4, a.update(n.subarray(8, r - 4)).digest(), false);
        return n;
    }
    decode(e) {
        let { headers, body } = de(e);
        return {
            headers: this.headerMarshaller.parse(headers),
            body
        };
    }
    formatHeaders(e) {
        return this.headerMarshaller.format(e);
    }
}
class Q {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (let e of this.options.inputStream){
            yield this.options.decoder.decode(e);
        }
    }
}
class K {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (let e of this.options.messageStream){
            yield this.options.encoder.encode(e);
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}
class J {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (let e of this.options.messageStream){
            let t = await this.options.deserializer(e);
            if (t === undefined) {
                continue;
            }
            yield t;
        }
    }
}
class Z {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (let e of this.options.inputStream){
            yield this.options.serializer(e);
        }
    }
}
const me = Se(jm());
const pe = (e)=>e.protocol === "ws:" || e.protocol === "wss:";
class Y {
    signer;
    constructor(e){
        this.signer = e.signer;
    }
    presign(e, t = {}) {
        return this.signer.presign(e, t);
    }
    async sign(e, t) {
        if (me.HttpRequest.isInstance(e) && pe(e)) {
            return {
                ...await this.signer.presign({
                    ...e,
                    body: ""
                }, {
                    ...t,
                    expiresIn: 60,
                    unsignableHeaders: new Set(Object.keys(e.headers).filter((r)=>r !== "host"))
                }),
                body: e.body
            };
        } else {
            return this.signer.sign(e, t);
        }
    }
}
const xe = (e)=>{
    let { signer } = e;
    return Object.assign(e, {
        signer: async (o)=>{
            let signer_1 = await signer(o);
            if (wt(signer_1)) {
                return new Y({
                    signer: signer_1
                });
            }
            throw Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
        }
    });
};
var wt = (signer)=>!!signer;
function Ce(e) {
    let t = 0;
    let o = 0;
    let r = null;
    let n = null;
    let s = (i)=>{
        if (typeof i !== "number") {
            throw Error(`Attempted to allocate an event message where size was not a number: ${i}`);
        }
        t = i;
        o = 4;
        r = new Uint8Array(i);
        new DataView(r.buffer).setUint32(0, i, false);
    };
    let a = async function*() {
        let i = e[Symbol.asyncIterator]();
        while(true){
            let { value, done } = await i.next();
            if (done) {
                if (!t) {
                    return;
                } else if (t === o) {
                    yield r;
                } else {
                    throw Error("Truncated event message received.");
                }
                return;
            }
            let u = value.length;
            let _ = 0;
            while(_ < u){
                if (!r) {
                    let T = u - _;
                    if (!n) {
                        n = new Uint8Array(4);
                    }
                    let X = Math.min(4 - o, T);
                    n.set(value.slice(_, _ + X), o);
                    o += X;
                    _ += X;
                    if (o < 4) {
                        break;
                    }
                    s(new DataView(n.buffer).getUint32(0, false));
                    n = null;
                }
                let R = Math.min(t - o, u - _);
                r.set(value.slice(_, _ + R), o);
                o += R;
                _ += R;
                if (t && t === o) {
                    yield r;
                    r = null;
                    t = 0;
                    o = 0;
                }
            }
        }
    };
    return {
        [Symbol.asyncIterator]: a
    };
}
function ve(e, utfEncoder) {
    return async (o)=>{
        let { value } = o.headers[":message-type"];
        if (value === "error") {
            let n = Error(o.headers[":error-message"].value || "UnknownError");
            n.name = o.headers[":error-code"].value;
            throw n;
        } else if (value === "exception") {
            let n = o.headers[":exception-type"].value;
            let s = {
                [n]: o
            };
            let a = await e(s);
            if (a.$unknown) {
                let i = Error(utfEncoder(o.body));
                i.name = n;
                throw i;
            }
            throw a[n];
        } else if (value === "event") {
            let n = {
                [o.headers[":event-type"].value]: o
            };
            let s = await e(n);
            if (s.$unknown) {
                return;
            }
            return s;
        } else {
            throw Error(`Unrecognizable event type: ${o.headers[":event-type"].value}`);
        }
    };
}
class ee {
    eventStreamCodec;
    utfEncoder;
    constructor({ utf8Encoder, utf8Decoder }){
        this.eventStreamCodec = new E(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
    }
    deserialize(e, t) {
        let o = Ce(e);
        return new J({
            messageStream: new Q({
                inputStream: o,
                decoder: this.eventStreamCodec
            }),
            deserializer: ve(t, this.utfEncoder)
        });
    }
    serialize(e, serializer) {
        return new K({
            messageStream: new Z({
                inputStream: e,
                serializer
            }),
            encoder: this.eventStreamCodec,
            includeEndFrame: true
        });
    }
}
const it = Se(Fk());
const B = Se(xb());
const ct = Se(Zx());
const ge = (e)=>Object.assign(e, {
        eventStreamMarshaller: e.eventStreamSerdeProvider(e)
    });
const _t = Se(_oe());
const lt = Se(KB());
const U = Se(aF());
const ut = Se(Rd());
const fe = Se(DT());
const S = Se(xb());
const I = Se(eP());
const httpAuthSchemeParametersProvider = async (e, t, o)=>({
        operation: I.getSmithyContext(t).operation,
        region: await I.normalizeProvider(e.region)() || (()=>{
            throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
function Ft(e) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "bedrock",
            region: e.region
        },
        propertiesExtractor: (config, context)=>({
                signingProperties: {
                    config,
                    context
                }
            })
    };
}
function Lt(e) {
    return {
        schemeId: "smithy.api#httpBearerAuth",
        propertiesExtractor: ({ profile, filepath, configFilepath, ignoreCache }, s)=>({
                identityProperties: {
                    profile,
                    filepath,
                    configFilepath,
                    ignoreCache
                }
            })
    };
}
const Ae = (e)=>{
    let t = [];
    switch(e.operation){
        default:
            t.push(Ft(e));
            t.push(Lt(e));
    }
    return t;
};
const ye = (e)=>{
    let token = S.memoizeIdentityProvider(e.token, S.isIdentityExpired, S.doesIdentityRequireRefresh);
    let o = fe.resolveAwsSdkSigV4Config(e);
    return Object.assign(o, {
        authSchemePreference: I.normalizeProvider(e.authSchemePreference ?? []),
        token
    });
};
const Be = (e)=>Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? false,
        useFipsEndpoint: e.useFipsEndpoint ?? false,
        defaultSigningName: "bedrock"
    });
const Re = {
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
const Ee = {
    name: "@aws-sdk/client-bedrock-runtime",
    description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
    version: "3.936.0",
    scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.936.0",
        "@aws-sdk/credential-provider-node": "3.936.0",
        "@aws-sdk/eventstream-handler-node": "3.936.0",
        "@aws-sdk/middleware-eventstream": "3.936.0",
        "@aws-sdk/middleware-host-header": "3.936.0",
        "@aws-sdk/middleware-logger": "3.936.0",
        "@aws-sdk/middleware-recursion-detection": "3.936.0",
        "@aws-sdk/middleware-user-agent": "3.936.0",
        "@aws-sdk/middleware-websocket": "3.936.0",
        "@aws-sdk/region-config-resolver": "3.936.0",
        "@aws-sdk/token-providers": "3.936.0",
        "@aws-sdk/types": "3.936.0",
        "@aws-sdk/util-endpoints": "3.936.0",
        "@aws-sdk/util-user-agent-browser": "3.936.0",
        "@aws-sdk/util-user-agent-node": "3.936.0",
        "@smithy/config-resolver": "^4.4.3",
        "@smithy/core": "^3.18.5",
        "@smithy/eventstream-serde-browser": "^4.2.5",
        "@smithy/eventstream-serde-config-resolver": "^4.3.5",
        "@smithy/eventstream-serde-node": "^4.2.5",
        "@smithy/fetch-http-handler": "^5.3.6",
        "@smithy/hash-node": "^4.2.5",
        "@smithy/invalid-dependency": "^4.2.5",
        "@smithy/middleware-content-length": "^4.2.5",
        "@smithy/middleware-endpoint": "^4.3.12",
        "@smithy/middleware-retry": "^4.4.12",
        "@smithy/middleware-serde": "^4.2.6",
        "@smithy/middleware-stack": "^4.2.5",
        "@smithy/node-config-provider": "^4.3.5",
        "@smithy/node-http-handler": "^4.4.5",
        "@smithy/protocol-http": "^5.3.5",
        "@smithy/smithy-client": "^4.9.8",
        "@smithy/types": "^4.9.0",
        "@smithy/url-parser": "^4.2.5",
        "@smithy/util-base64": "^4.3.0",
        "@smithy/util-body-length-browser": "^4.2.0",
        "@smithy/util-body-length-node": "^4.2.1",
        "@smithy/util-defaults-mode-browser": "^4.3.11",
        "@smithy/util-defaults-mode-node": "^4.2.14",
        "@smithy/util-endpoints": "^3.2.5",
        "@smithy/util-middleware": "^4.2.5",
        "@smithy/util-retry": "^4.2.5",
        "@smithy/util-stream": "^4.5.6",
        "@smithy/util-utf8": "^4.2.0",
        tslib: "^2.6.2"
    },
    devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
    },
    engines: {
        node: ">=18.0.0"
    },
    typesVersions: {
        "<4.0": {
            "dist-types/*": [
                "dist-types/ts3.4/*"
            ]
        }
    },
    files: [
        "dist-*/**"
    ],
    author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
    repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-bedrock-runtime"
    }
};
const y = Se(DT());
class te extends Transform {
    priorSignature;
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(e){
        super({
            autoDestroy: true,
            readableObjectMode: true,
            writableObjectMode: true,
            ...e
        });
        this.priorSignature = e.priorSignature;
        this.eventStreamCodec = e.eventStreamCodec;
        this.messageSigner = e.messageSigner;
        this.systemClockOffsetProvider = e.systemClockOffsetProvider;
    }
    async _transform(body, t, o) {
        try {
            let r = new Date(Date.now() + await this.systemClockOffsetProvider());
            let headers = {
                ":date": {
                    type: "timestamp",
                    value: r
                }
            };
            let s = await this.messageSigner.sign({
                message: {
                    body,
                    headers
                },
                priorSignature: this.priorSignature
            }, {
                signingDate: r
            });
            this.priorSignature = s.signature;
            let a = this.eventStreamCodec.encode({
                headers: {
                    ...headers,
                    ":chunk-signature": {
                        type: "binary",
                        value: Wt(s.signature)
                    }
                },
                body
            });
            this.push(a);
            return o();
        } catch (error) {
            o(error);
        }
    }
}
function Wt(signature) {
    let t = Buffer.from(signature, "hex");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
class oe {
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(e){
        this.messageSigner = e.messageSigner;
        this.eventStreamCodec = new E(e.utf8Encoder, e.utf8Decoder);
        this.systemClockOffsetProvider = async ()=>e.systemClockOffset ?? 0;
    }
    async handle(e, t, o = {}) {
        let t_request = t.request;
        let { body, query } = t_request;
        if (!(body instanceof Readable)) {
            throw Error("Eventstream payload must be a Readable stream.");
        }
        let a = body;
        t_request.body = new PassThrough({
            objectMode: true
        });
        let priorSignature = t_request.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ?? query?.["X-Amz-Signature"] ?? "";
        let p = new te({
            priorSignature,
            eventStreamCodec: this.eventStreamCodec,
            messageSigner: await this.messageSigner(),
            systemClockOffsetProvider: this.systemClockOffsetProvider
        });
        pipeline(a, p, t_request.body, (_)=>{
            if (_) {
                throw _;
            }
        });
        let u;
        try {
            u = await e(t);
        } catch (error) {
            t_request.body.end();
            throw error;
        }
        return u;
    }
}
const ne = (e)=>new oe(e);
const D = Se(boe());
const v = Se(Fk());
const ze = Se(xb());
async function* Ie(e) {
    let t = false;
    let o = false;
    let r = [];
    e.on("error", (n)=>{
        if (!t) {
            t = true;
        }
        if (n) {
            throw n;
        }
    });
    e.on("data", (n)=>{
        r.push(n);
    });
    e.on("end", ()=>{
        t = true;
    });
    while(!o){
        let n = await new Promise((resolve)=>setTimeout(()=>resolve(r.shift()), 0));
        if (n) {
            yield n;
        }
        o = t && r.length === 0;
    }
}
class lFn {
    universalMarshaller;
    constructor({ utf8Encoder, utf8Decoder }){
        this.universalMarshaller = new ee({
            utf8Decoder,
            utf8Encoder
        });
    }
    deserialize(e, t) {
        let o = typeof e[Symbol.asyncIterator] === "function" ? e : Ie(e);
        return this.universalMarshaller.deserialize(o, t);
    }
    serialize(e, t) {
        return Readable.from(this.universalMarshaller.serialize(e, t));
    }
}
const Te = (e)=>new lFn(e);
const Qe = Se(Soe());
const P = Se(aF());
const C = Se(nP());
const b = Se(kH());
const Ke = Se(woe());
const Je = Se(r7());
const He = Se(DT());
const Ve = Se(voe());
const qe = Se(xb());
const je = Se(Rd());
const $e = Se(GW());
const G = Se($R());
const k = Se(Qk());
const We = Se(t7());
const A = Se(uY());
const Ge = {
    required: false,
    type: "string"
};
const ke = {
    required: true,
    default: false,
    type: "boolean"
};
const url = {
    ref: "Endpoint"
};
const Le = {
    fn: "booleanEquals",
    argv: [
        {
            ref: "UseFIPS"
        },
        true
    ]
};
const Oe = {
    fn: "booleanEquals",
    argv: [
        {
            ref: "UseDualStack"
        },
        true
    ]
};
const d = {};
const Pe = {
    fn: "getAttr",
    argv: [
        {
            ref: "PartitionResult"
        },
        "supportsFIPS"
    ]
};
const be = {
    fn: "booleanEquals",
    argv: [
        true,
        {
            fn: "getAttr",
            argv: [
                {
                    ref: "PartitionResult"
                },
                "supportsDualStack"
            ]
        }
    ]
};
const Me = [
    Le
];
const we = [
    Oe
];
const argv = [
    {
        ref: "Region"
    }
];
const jt = {
    version: "1.0",
    parameters: {
        Region: Ge,
        UseDualStack: ke,
        UseFIPS: ke,
        Endpoint: Ge
    },
    rules: [
        {
            conditions: [
                {
                    fn: "isSet",
                    argv: [
                        url
                    ]
                }
            ],
            rules: [
                {
                    conditions: Me,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: "error"
                },
                {
                    rules: [
                        {
                            conditions: we,
                            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                            type: "error"
                        },
                        {
                            endpoint: {
                                url,
                                properties: d,
                                headers: d
                            },
                            type: "endpoint"
                        }
                    ],
                    type: "tree"
                }
            ],
            type: "tree"
        },
        {
            rules: [
                {
                    conditions: [
                        {
                            fn: "isSet",
                            argv
                        }
                    ],
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "aws.partition",
                                    argv,
                                    assign: "PartitionResult"
                                }
                            ],
                            rules: [
                                {
                                    conditions: [
                                        Le,
                                        Oe
                                    ],
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "booleanEquals",
                                                    argv: [
                                                        true,
                                                        Pe
                                                    ]
                                                },
                                                be
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                                properties: d,
                                                                headers: d
                                                            },
                                                            type: "endpoint"
                                                        }
                                                    ],
                                                    type: "tree"
                                                }
                                            ],
                                            type: "tree"
                                        },
                                        {
                                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    conditions: Me,
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "booleanEquals",
                                                    argv: [
                                                        Pe,
                                                        true
                                                    ]
                                                }
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                                properties: d,
                                                                headers: d
                                                            },
                                                            type: "endpoint"
                                                        }
                                                    ],
                                                    type: "tree"
                                                }
                                            ],
                                            type: "tree"
                                        },
                                        {
                                            error: "FIPS is enabled but this partition does not support FIPS",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    conditions: we,
                                    rules: [
                                        {
                                            conditions: [
                                                be
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                                properties: d,
                                                                headers: d
                                                            },
                                                            type: "endpoint"
                                                        }
                                                    ],
                                                    type: "tree"
                                                }
                                            ],
                                            type: "tree"
                                        },
                                        {
                                            error: "DualStack is enabled but this partition does not support DualStack",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: d,
                                                headers: d
                                            },
                                            type: "endpoint"
                                        }
                                    ],
                                    type: "tree"
                                }
                            ],
                            type: "tree"
                        }
                    ],
                    type: "tree"
                },
                {
                    error: "Invalid Configuration: Missing Region",
                    type: "error"
                }
            ],
            type: "tree"
        }
    ]
};
const Ue = jt;
const $t = new A.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
const Ne = (endpointParams, t = {})=>$t.get(endpointParams, ()=>A.resolveEndpoint(Ue, {
            endpointParams,
            logger: t.logger
        }));
A.customEndpointFunctions.aws = We.awsEndpointFunctions;
const Xe = (e)=>({
        apiVersion: "2023-09-30",
        base64Decoder: e?.base64Decoder ?? G.fromBase64,
        base64Encoder: e?.base64Encoder ?? G.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? false,
        endpointProvider: e?.endpointProvider ?? Ne,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Ae,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4"),
                signer: new He.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#httpBearerAuth",
                identityProvider: (t)=>t.getIdentityProvider("smithy.api#httpBearerAuth"),
                signer: new qe.HttpBearerAuthSigner
            }
        ],
        logger: e?.logger ?? new je.NoOpLogger,
        protocol: e?.protocol ?? new Ve.AwsRestJsonProtocol({
            defaultNamespace: "com.amazonaws.bedrockruntime"
        }),
        serviceId: e?.serviceId ?? "Bedrock Runtime",
        urlParser: e?.urlParser ?? $e.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? k.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? k.toUtf8
    });
const Ze = Se(Rd());
const Ye = Se(Eoe());
const et = Se(Rd());
const tt = (e)=>{
    et.emitWarningIfUnsupportedVersion(process.version);
    let defaultsMode = Ye.resolveDefaultsModeConfig(e);
    let o = ()=>defaultsMode().then(Ze.loadConfigsForDefaultMode);
    let r = Xe(e);
    y.emitWarningIfUnsupportedVersion(process.version);
    let n = {
        profile: e?.profile,
        logger: r.logger,
        signingName: "bedrock"
    };
    return {
        ...r,
        ...e,
        runtime: "node",
        defaultsMode,
        authSchemePreference: e?.authSchemePreference ?? C.loadConfig(y.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, n),
        bodyLengthChecker: e?.bodyLengthChecker ?? Ke.calculateBodyLength,
        credentialDefaultProvider: e?.credentialDefaultProvider ?? Ode,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? D.createDefaultUserAgentProvider({
            serviceId: r.serviceId,
            clientVersion: Ee.version
        }),
        eventStreamPayloadHandlerProvider: e?.eventStreamPayloadHandlerProvider ?? ne,
        eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? Te,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (s)=>s.getIdentityProvider("aws.auth#sigv4"),
                signer: new y.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#httpBearerAuth",
                identityProvider: (s)=>s.getIdentityProvider("smithy.api#httpBearerAuth") || (async (a)=>{
                        try {
                            return await uFn({
                                signingName: "bedrock"
                            })();
                        } catch (i) {
                            return await pFn(a)(a);
                        }
                    }),
                signer: new ze.HttpBearerAuthSigner
            }
        ],
        maxAttempts: e?.maxAttempts ?? C.loadConfig(P.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? C.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
            ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...n
        }),
        requestHandler: b.NodeHttp2Handler.create(e?.requestHandler ?? (async ()=>({
                ...await o(),
                disableConcurrentStreams: true
            }))),
        retryMode: e?.retryMode ?? C.loadConfig({
            ...P.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await o()).retryMode || Je.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? Qe.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? b.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? C.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, n),
        useFipsEndpoint: e?.useFipsEndpoint ?? C.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, n),
        userAgentAppId: e?.userAgentAppId ?? C.loadConfig(D.NODE_APP_ID_CONFIG_OPTIONS, n)
    };
};
const M = Se(o7());
const w = Se(jm());
const F = Se(Rd());
const ot = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials, token })=>({
        setHttpAuthScheme (s) {
            let a = httpAuthSchemes.findIndex((i)=>i.schemeId === s.schemeId);
            if (a === -1) {
                httpAuthSchemes.push(s);
            } else {
                httpAuthSchemes.splice(a, 1, s);
            }
        },
        httpAuthSchemes () {
            return httpAuthSchemes;
        },
        setHttpAuthSchemeProvider (s) {
            httpAuthSchemeProvider = s;
        },
        httpAuthSchemeProvider () {
            return httpAuthSchemeProvider;
        },
        setCredentials (s) {
            credentials = s;
        },
        credentials () {
            return credentials;
        },
        setToken (s) {
            token = s;
        },
        token () {
            return token;
        }
    });
const nt = (e)=>({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
        token: e.token()
    });
const rt = (e, t)=>{
    let o = Object.assign(M.getAwsRegionExtensionConfiguration(e), F.getDefaultExtensionConfiguration(e), w.getHttpHandlerExtensionConfiguration(e), ot(e));
    t.forEach((r)=>r.configure(o));
    return Object.assign(e, M.resolveAwsRegionExtensionConfiguration(o), F.resolveDefaultRuntimeConfig(o), w.resolveHttpHandlerRuntimeConfig(o), nt(o));
};
class MNs extends ut.Client {
    config;
    constructor(...[e]){
        let t = tt(e || {});
        super(t);
        this.initConfig = t;
        let o = Be(t);
        let r = O.resolveUserAgentConfig(o);
        let n = U.resolveRetryConfig(r);
        let s = it.resolveRegionConfig(n);
        let a = L.resolveHostHeaderConfig(s);
        let i = lt.resolveEndpointConfig(a);
        let c = ge(i);
        let p = ye(c);
        let u = ae(p);
        let _ = xe(u);
        let R = rt(_, e?.extensions || []);
        this.config = R;
        this.middlewareStack.use(ct.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(O.getUserAgentPlugin(this.config));
        this.middlewareStack.use(U.getRetryPlugin(this.config));
        this.middlewareStack.use(_t.getContentLengthPlugin(this.config));
        this.middlewareStack.use(L.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(st.getLoggerPlugin(this.config));
        this.middlewareStack.use(at.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(B.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (T)=>new B.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": T.credentials,
                    "smithy.api#httpBearerAuth": T.token
                })
        }));
        this.middlewareStack.use(B.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
const l = Se(Zx());
const dt = Se(Rd());
class iF extends dt.ServiceException {
    constructor(e){
        super(e);
        Object.setPrototypeOf(this, iF.prototype);
    }
}
class W extends iF {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(e){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, W.prototype);
    }
}
class xPt extends iF {
    name = "InternalServerException";
    $fault = "server";
    constructor(e){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...e
        });
        Object.setPrototypeOf(this, xPt.prototype);
    }
}
class PPt extends iF {
    name = "ThrottlingException";
    $fault = "client";
    constructor(e){
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, PPt.prototype);
    }
}
class IPt extends iF {
    name = "ValidationException";
    $fault = "client";
    constructor(e){
        super({
            name: "ValidationException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, IPt.prototype);
    }
}
class N extends iF {
    name = "ConflictException";
    $fault = "client";
    constructor(e){
        super({
            name: "ConflictException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, N.prototype);
    }
}
class H extends iF {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e){
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, H.prototype);
    }
}
class V extends iF {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(e){
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, V.prototype);
    }
}
class OPt extends iF {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(e){
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...e
        });
        Object.setPrototypeOf(this, OPt.prototype);
    }
}
class q extends iF {
    name = "ModelErrorException";
    $fault = "client";
    originalStatusCode;
    resourceName;
    constructor(e){
        super({
            name: "ModelErrorException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, q.prototype);
        this.originalStatusCode = e.originalStatusCode;
        this.resourceName = e.resourceName;
    }
}
class j extends iF {
    name = "ModelNotReadyException";
    $fault = "client";
    $retryable = {};
    constructor(e){
        super({
            name: "ModelNotReadyException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, j.prototype);
    }
}
class MPt extends iF {
    name = "ModelTimeoutException";
    $fault = "client";
    constructor(e){
        super({
            name: "ModelTimeoutException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, MPt.prototype);
    }
}
class HPt extends iF {
    name = "ModelStreamErrorException";
    $fault = "client";
    originalStatusCode;
    originalMessage;
    constructor(e){
        super({
            name: "ModelStreamErrorException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, HPt.prototype);
        this.originalStatusCode = e.originalStatusCode;
        this.originalMessage = e.originalMessage;
    }
}
const Xt = [
    0,
    "com.amazonaws.bedrockruntime",
    "Body",
    8,
    21
];
const zt = [
    -3,
    "com.amazonaws.bedrockruntime",
    "AccessDeniedException",
    {
        error: "client",
        httpError: 403
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(zt, W);
const Qt = [
    3,
    "com.amazonaws.bedrockruntime",
    "AnyToolChoice",
    0,
    [],
    []
];
const Kt = [
    3,
    "com.amazonaws.bedrockruntime",
    "AutoToolChoice",
    0,
    [],
    []
];
const re = [
    3,
    "com.amazonaws.bedrockruntime",
    "CachePointBlock",
    0,
    [
        "type"
    ],
    [
        0
    ]
];
const Jt = [
    3,
    "com.amazonaws.bedrockruntime",
    "Citation",
    0,
    [
        "title",
        "source",
        "sourceContent",
        "location"
    ],
    [
        0,
        0,
        ()=>Mo,
        ()=>Vo
    ]
];
const pt = [
    3,
    "com.amazonaws.bedrockruntime",
    "CitationsConfig",
    0,
    [
        "enabled"
    ],
    [
        2
    ]
];
const Zt = [
    3,
    "com.amazonaws.bedrockruntime",
    "CitationsContentBlock",
    0,
    [
        "content",
        "citations"
    ],
    [
        ()=>Po,
        ()=>bo
    ]
];
const Yt = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ConflictException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Yt, N);
const eo = [
    3,
    "com.amazonaws.bedrockruntime",
    "ConverseTokensRequest",
    0,
    [
        "messages",
        "system",
        "toolConfig",
        "additionalModelRequestFields"
    ],
    [
        [
            ()=>Lo,
            0
        ],
        [
            ()=>Uo,
            0
        ],
        ()=>Ro,
        15
    ]
];
const to = [
    3,
    "com.amazonaws.bedrockruntime",
    "CountTokensRequest",
    0,
    [
        "modelId",
        "input"
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>$o,
            0
        ]
    ]
];
const oo = [
    3,
    "com.amazonaws.bedrockruntime",
    "CountTokensResponse",
    0,
    [
        "inputTokens"
    ],
    [
        1
    ]
];
const mt = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentBlock",
    0,
    [
        "format",
        "name",
        "source",
        "context",
        "citations"
    ],
    [
        0,
        0,
        ()=>zo,
        0,
        ()=>pt
    ]
];
const no = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentCharLocation",
    0,
    [
        "documentIndex",
        "start",
        "end"
    ],
    [
        1,
        1,
        1
    ]
];
const ro = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentChunkLocation",
    0,
    [
        "documentIndex",
        "start",
        "end"
    ],
    [
        1,
        1,
        1
    ]
];
const so = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentPageLocation",
    0,
    [
        "documentIndex",
        "start",
        "end"
    ],
    [
        1,
        1,
        1
    ]
];
const ao = [
    3,
    "com.amazonaws.bedrockruntime",
    "GuardrailConverseImageBlock",
    8,
    [
        "format",
        "source"
    ],
    [
        0,
        [
            ()=>Qo,
            0
        ]
    ]
];
const io = [
    3,
    "com.amazonaws.bedrockruntime",
    "GuardrailConverseTextBlock",
    0,
    [
        "text",
        "qualifiers"
    ],
    [
        0,
        64
    ]
];
const xt = [
    3,
    "com.amazonaws.bedrockruntime",
    "ImageBlock",
    0,
    [
        "format",
        "source"
    ],
    [
        0,
        ()=>Ko
    ]
];
const co = [
    -3,
    "com.amazonaws.bedrockruntime",
    "InternalServerException",
    {
        error: "server",
        httpError: 500
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(co, xPt);
const _o = [
    3,
    "com.amazonaws.bedrockruntime",
    "InvokeModelTokensRequest",
    0,
    [
        "body"
    ],
    [
        [
            ()=>Xt,
            0
        ]
    ]
];
const lo = [
    3,
    "com.amazonaws.bedrockruntime",
    "Message",
    0,
    [
        "role",
        "content"
    ],
    [
        0,
        [
            ()=>wo,
            0
        ]
    ]
];
const uo = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ModelErrorException",
    {
        error: "client",
        httpError: 424
    },
    [
        "message",
        "originalStatusCode",
        "resourceName"
    ],
    [
        0,
        1,
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(uo, q);
const po = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ModelNotReadyException",
    {
        error: "client",
        httpError: 429
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(po, j);
const mo = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ModelStreamErrorException",
    {
        error: "client",
        httpError: 424
    },
    [
        "message",
        "originalStatusCode",
        "originalMessage"
    ],
    [
        0,
        1,
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(mo, HPt);
const xo = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ModelTimeoutException",
    {
        error: "client",
        httpError: 408
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(xo, MPt);
const Co = [
    3,
    "com.amazonaws.bedrockruntime",
    "ReasoningTextBlock",
    8,
    [
        "text",
        "signature"
    ],
    [
        0,
        0
    ]
];
const vo = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ResourceNotFoundException",
    {
        error: "client",
        httpError: 404
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(vo, H);
const se = [
    3,
    "com.amazonaws.bedrockruntime",
    "S3Location",
    0,
    [
        "uri",
        "bucketOwner"
    ],
    [
        0,
        0
    ]
];
const Ct = [
    3,
    "com.amazonaws.bedrockruntime",
    "SearchResultBlock",
    0,
    [
        "source",
        "title",
        "content",
        "citations"
    ],
    [
        0,
        0,
        ()=>Oo,
        ()=>pt
    ]
];
const go = [
    3,
    "com.amazonaws.bedrockruntime",
    "SearchResultContentBlock",
    0,
    [
        "text"
    ],
    [
        0
    ]
];
const fo = [
    3,
    "com.amazonaws.bedrockruntime",
    "SearchResultLocation",
    0,
    [
        "searchResultIndex",
        "start",
        "end"
    ],
    [
        1,
        1,
        1
    ]
];
const ho = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ServiceQuotaExceededException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(ho, V);
const So = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ServiceUnavailableException",
    {
        error: "server",
        httpError: 503
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(So, OPt);
const Ao = [
    3,
    "com.amazonaws.bedrockruntime",
    "SpecificToolChoice",
    0,
    [
        "name"
    ],
    [
        0
    ]
];
const yo = [
    3,
    "com.amazonaws.bedrockruntime",
    "SystemTool",
    0,
    [
        "name"
    ],
    [
        0
    ]
];
const Bo = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ThrottlingException",
    {
        error: "client",
        httpError: 429
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Bo, PPt);
var Ro = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolConfiguration",
    0,
    [
        "tools",
        "toolChoice"
    ],
    [
        ()=>No,
        ()=>en
    ]
];
const Eo = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolResultBlock",
    0,
    [
        "toolUseId",
        "content",
        "status",
        "type"
    ],
    [
        0,
        ()=>Wo,
        0,
        0
    ]
];
const Io = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolSpecification",
    0,
    [
        "name",
        "description",
        "inputSchema"
    ],
    [
        0,
        0,
        ()=>tn
    ]
];
const To = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolUseBlock",
    0,
    [
        "toolUseId",
        "name",
        "input",
        "type"
    ],
    [
        0,
        0,
        15,
        0
    ]
];
const Go = [
    -3,
    "com.amazonaws.bedrockruntime",
    "ValidationException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Go, IPt);
const vt = [
    3,
    "com.amazonaws.bedrockruntime",
    "VideoBlock",
    0,
    [
        "format",
        "source"
    ],
    [
        0,
        ()=>nn
    ]
];
const ko = [
    3,
    "com.amazonaws.bedrockruntime",
    "WebLocation",
    0,
    [
        "url",
        "domain"
    ],
    [
        0,
        0
    ]
];
const Do = [
    -3,
    "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime",
    "BedrockRuntimeServiceException",
    0,
    [],
    []
];
l.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime").registerError(Do, iF);
var Po = [
    1,
    "com.amazonaws.bedrockruntime",
    "CitationGeneratedContentList",
    0,
    ()=>Ho
];
var bo = [
    1,
    "com.amazonaws.bedrockruntime",
    "Citations",
    0,
    ()=>Jt
];
var Mo = [
    1,
    "com.amazonaws.bedrockruntime",
    "CitationSourceContentList",
    0,
    ()=>qo
];
var wo = [
    1,
    "com.amazonaws.bedrockruntime",
    "ContentBlocks",
    0,
    [
        ()=>jo,
        0
    ]
];
const Fo = [
    1,
    "com.amazonaws.bedrockruntime",
    "DocumentContentBlocks",
    0,
    ()=>Xo
];
var Lo = [
    1,
    "com.amazonaws.bedrockruntime",
    "Messages",
    0,
    [
        ()=>lo,
        0
    ]
];
var Oo = [
    1,
    "com.amazonaws.bedrockruntime",
    "SearchResultContentBlocks",
    0,
    ()=>go
];
var Uo = [
    1,
    "com.amazonaws.bedrockruntime",
    "SystemContentBlocks",
    0,
    [
        ()=>Zo,
        0
    ]
];
var Wo = [
    1,
    "com.amazonaws.bedrockruntime",
    "ToolResultContentBlocks",
    0,
    ()=>on
];
var No = [
    1,
    "com.amazonaws.bedrockruntime",
    "Tools",
    0,
    ()=>Yo
];
var Ho = [
    3,
    "com.amazonaws.bedrockruntime",
    "CitationGeneratedContent",
    0,
    [
        "text"
    ],
    [
        0
    ]
];
var Vo = [
    3,
    "com.amazonaws.bedrockruntime",
    "CitationLocation",
    0,
    [
        "web",
        "documentChar",
        "documentPage",
        "documentChunk",
        "searchResultLocation"
    ],
    [
        ()=>ko,
        ()=>no,
        ()=>so,
        ()=>ro,
        ()=>fo
    ]
];
var qo = [
    3,
    "com.amazonaws.bedrockruntime",
    "CitationSourceContent",
    0,
    [
        "text"
    ],
    [
        0
    ]
];
var jo = [
    3,
    "com.amazonaws.bedrockruntime",
    "ContentBlock",
    0,
    [
        "text",
        "image",
        "document",
        "video",
        "toolUse",
        "toolResult",
        "guardContent",
        "cachePoint",
        "reasoningContent",
        "citationsContent",
        "searchResult"
    ],
    [
        0,
        ()=>xt,
        ()=>mt,
        ()=>vt,
        ()=>To,
        ()=>Eo,
        [
            ()=>gt,
            0
        ],
        ()=>re,
        [
            ()=>Jo,
            0
        ],
        ()=>Zt,
        ()=>Ct
    ]
];
var $o = [
    3,
    "com.amazonaws.bedrockruntime",
    "CountTokensInput",
    0,
    [
        "invokeModel",
        "converse"
    ],
    [
        [
            ()=>_o,
            0
        ],
        [
            ()=>eo,
            0
        ]
    ]
];
var Xo = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentContentBlock",
    0,
    [
        "text"
    ],
    [
        0
    ]
];
var zo = [
    3,
    "com.amazonaws.bedrockruntime",
    "DocumentSource",
    0,
    [
        "bytes",
        "s3Location",
        "text",
        "content"
    ],
    [
        21,
        ()=>se,
        0,
        ()=>Fo
    ]
];
var gt = [
    3,
    "com.amazonaws.bedrockruntime",
    "GuardrailConverseContentBlock",
    0,
    [
        "text",
        "image"
    ],
    [
        ()=>io,
        [
            ()=>ao,
            0
        ]
    ]
];
var Qo = [
    3,
    "com.amazonaws.bedrockruntime",
    "GuardrailConverseImageSource",
    8,
    [
        "bytes"
    ],
    [
        21
    ]
];
var Ko = [
    3,
    "com.amazonaws.bedrockruntime",
    "ImageSource",
    0,
    [
        "bytes",
        "s3Location"
    ],
    [
        21,
        ()=>se
    ]
];
var Jo = [
    3,
    "com.amazonaws.bedrockruntime",
    "ReasoningContentBlock",
    8,
    [
        "reasoningText",
        "redactedContent"
    ],
    [
        [
            ()=>Co,
            0
        ],
        21
    ]
];
var Zo = [
    3,
    "com.amazonaws.bedrockruntime",
    "SystemContentBlock",
    0,
    [
        "text",
        "guardContent",
        "cachePoint"
    ],
    [
        0,
        [
            ()=>gt,
            0
        ],
        ()=>re
    ]
];
var Yo = [
    3,
    "com.amazonaws.bedrockruntime",
    "Tool",
    0,
    [
        "toolSpec",
        "systemTool",
        "cachePoint"
    ],
    [
        ()=>Io,
        ()=>yo,
        ()=>re
    ]
];
var en = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolChoice",
    0,
    [
        "auto",
        "any",
        "tool"
    ],
    [
        ()=>Kt,
        ()=>Qt,
        ()=>Ao
    ]
];
var tn = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolInputSchema",
    0,
    [
        "json"
    ],
    [
        15
    ]
];
var on = [
    3,
    "com.amazonaws.bedrockruntime",
    "ToolResultContentBlock",
    0,
    [
        "json",
        "text",
        "image",
        "document",
        "video",
        "searchResult"
    ],
    [
        15,
        0,
        ()=>xt,
        ()=>mt,
        ()=>vt,
        ()=>Ct
    ]
];
var nn = [
    3,
    "com.amazonaws.bedrockruntime",
    "VideoSource",
    0,
    [
        "bytes",
        "s3Location"
    ],
    [
        21,
        ()=>se
    ]
];
const ft = [
    9,
    "com.amazonaws.bedrockruntime",
    "CountTokens",
    {
        http: [
            "POST",
            "/model/{modelId}/count-tokens",
            200
        ]
    },
    ()=>to,
    ()=>oo
];
const ht = Se(KB());
const St = Se(Rd());
class HNs extends St.Command.classBuilder().ep(Re).m(function(e, t, o, r) {
    return [
        ht.getEndpointPlugin(o, e.getEndpointParameterInstructions())
    ];
}).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(ft).build() {
}
export { lFn, MNs, iF, xPt, PPt, IPt, OPt, MPt, HPt, HNs };
