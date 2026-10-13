import { Qk } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Ji } from "/$bunfs/root/chunk-cj4xndke.js";
class x {
    marshaller;
    serializer;
    deserializer;
    serdeContext;
    defaultContentType;
    constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }){
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
    }
    async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        let marshaller = this.marshaller;
        let d = requestSchema.getEventStreamMember();
        let p = requestSchema.getMemberSchema(d);
        let serializer = this.serializer;
        let defaultContentType = this.defaultContentType;
        let h = Symbol("initialRequestMarker");
        let S = {
            async *[Symbol.asyncIterator] () {
                if (initialRequest) {
                    let headers = {
                        ":event-type": {
                            type: "string",
                            value: "initial-request"
                        },
                        ":message-type": {
                            type: "string",
                            value: "event"
                        },
                        ":content-type": {
                            type: "string",
                            value: defaultContentType
                        }
                    };
                    serializer.write(requestSchema, initialRequest);
                    let body = serializer.flush();
                    yield {
                        [h]: true,
                        headers,
                        body
                    };
                }
                for await (let r of eventStream){
                    yield r;
                }
            }
        };
        return marshaller.serialize(S, (r)=>{
            if (r[h]) {
                return {
                    headers: r.headers,
                    body: r.body
                };
            }
            let t = Object.keys(r).find((s)=>s !== "__type") ?? "";
            let { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(t, p, r);
            return {
                headers: {
                    ":event-type": {
                        type: "string",
                        value: eventType
                    },
                    ":message-type": {
                        type: "string",
                        value: "event"
                    },
                    ":content-type": {
                        type: "string",
                        value: explicitPayloadContentType ?? defaultContentType
                    },
                    ...additionalHeaders
                },
                body
            };
        });
    }
    async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        let marshaller = this.marshaller;
        let d = responseSchema.getEventStreamMember();
        let y = responseSchema.getMemberSchema(d).getMemberSchemas();
        let f = Symbol("initialResponseMarker");
        let h = marshaller.deserialize(response.body, async (t)=>{
            let e = Object.keys(t).find((l)=>l !== "__type") ?? "";
            let body = t[e].body;
            if (e === "initial-response") {
                let l = await this.deserializer.read(responseSchema, body);
                delete l[d];
                return {
                    [f]: true,
                    ...l
                };
            } else if (e in y) {
                let l = y[e];
                if (l.isStructSchema()) {
                    let c = {};
                    let u = false;
                    for (let [s, v] of l.structIterator()){
                        let { eventHeader, eventPayload } = v.getMergedTraits();
                        u = u || Boolean(eventHeader || eventPayload);
                        if (eventPayload) {
                            if (v.isBlobSchema()) {
                                c[s] = body;
                            } else if (v.isStringSchema()) {
                                c[s] = (this.serdeContext?.utf8Encoder ?? z.toUtf8)(body);
                            } else if (v.isStructSchema()) {
                                c[s] = await this.deserializer.read(v, body);
                            }
                        } else if (eventHeader) {
                            let b = t[e].headers[s]?.value;
                            if (b != null) {
                                if (v.isNumericSchema()) {
                                    if (b && typeof b === "object" && "bytes" in b) {
                                        c[s] = BigInt(b.toString());
                                    } else {
                                        c[s] = Number(b);
                                    }
                                } else {
                                    c[s] = b;
                                }
                            }
                        }
                    }
                    if (u) {
                        return {
                            [e]: c
                        };
                    }
                }
                return {
                    [e]: await this.deserializer.read(l, body)
                };
            } else {
                return {
                    $unknown: t
                };
            }
        });
        let S = h[Symbol.asyncIterator]();
        let r = await S.next();
        if (r.done) {
            return h;
        }
        if (r.value?.[f]) {
            if (!responseSchema) {
                throw Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
            }
            for (let [t, e] of Object.entries(r.value)){
                initialResponseContainer[t] = e;
            }
        }
        return {
            async *[Symbol.asyncIterator] () {
                if (!r?.value?.[f]) {
                    yield r.value;
                }
                while(true){
                    let { done, value } = await S.next();
                    if (done) {
                        break;
                    }
                    yield value;
                }
            }
        };
    }
    writeEventBody(a, i, o) {
        let serializer = this.serializer;
        let eventType = a;
        let p = null;
        let explicitPayloadContentType;
        let f = i.getSchema()[4].includes(a);
        let additionalHeaders = {};
        if (!f) {
            let [t, e] = o[a];
            eventType = t;
            serializer.write(15, e);
        } else {
            let t = i.getMemberSchema(a);
            if (t.isStructSchema()) {
                for (let [e, n] of t.structIterator()){
                    let { eventHeader, eventPayload } = n.getMergedTraits();
                    if (eventPayload) {
                        p = e;
                        break;
                    } else if (eventHeader) {
                        let u = o[a][e];
                        let s = "binary";
                        if (n.isNumericSchema()) {
                            if (u >= -2147483648 && u <= 2147483647) {
                                s = "integer";
                            } else {
                                s = "long";
                            }
                        } else if (n.isTimestampSchema()) {
                            s = "timestamp";
                        } else if (n.isStringSchema()) {
                            s = "string";
                        } else if (n.isBooleanSchema()) {
                            s = "boolean";
                        }
                        if (u != null) {
                            additionalHeaders[e] = {
                                type: s,
                                value: u
                            };
                            delete o[a][e];
                        }
                    }
                }
                if (p !== null) {
                    let e = t.getMemberSchema(p);
                    if (e.isBlobSchema()) {
                        explicitPayloadContentType = "application/octet-stream";
                    } else if (e.isStringSchema()) {
                        explicitPayloadContentType = "text/plain";
                    }
                    serializer.write(e, o[a][p]);
                } else {
                    serializer.write(t, o[a]);
                }
            } else {
                throw Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            }
        }
        let S = serializer.flush();
        return {
            body: typeof S === "string" ? (this.serdeContext?.utf8Decoder ?? z.fromUtf8)(S) : S,
            eventType,
            explicitPayloadContentType,
            additionalHeaders
        };
    }
}
let z;
export let EventStreamSerde;
const M = Ji(()=>{
    z = Qk();
    EventStreamSerde = x;
});
M();
