import { DOe } from "/$bunfs/root/chunk-wmhcfcyq.js";
import { Da, bFe, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const E = C(function(w) {
    Object.defineProperty(w, "__esModule", {
        value: true
    });
    w.PrometheusSerializer = undefined;
    const I = Da();
    const o = DOe();
    const P = Of();
    const g = bFe();
    const D = "otel.scope.schema_url";
    function S(e) {
        return e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    }
    function y(e = "") {
        if (typeof e !== "string") {
            e = JSON.stringify(e);
        }
        return S(e).replace(/"/g, "\\\"");
    }
    const H = /[^a-z0-9_]/gi;
    const F = /_{2,}/g;
    function O(e) {
        return e.replace(H, "_").replace(F, "_");
    }
    function j(e, t) {
        if (!e.endsWith("_total") && t.dataPointType === o.DataPointType.SUM && t.isMonotonic) {
            e = `${e}_total`;
        }
        return e;
    }
    function k(e) {
        if (e === Infinity) {
            return "+Inf";
        } else if (e === -Infinity) {
            return "-Inf";
        } else {
            return `${e}`;
        }
    }
    function G(e) {
        switch(e.dataPointType){
            case o.DataPointType.SUM:
                if (e.isMonotonic) {
                    return "counter";
                }
                return "gauge";
            case o.DataPointType.GAUGE:
                return "gauge";
            case o.DataPointType.HISTOGRAM:
                return "histogram";
            default:
                return "untyped";
        }
    }
    function m(e, attributes, r, i, s) {
        let n = false;
        let a = "";
        for (let [u, _] of Object.entries(attributes)){
            let c = O(u);
            n = true;
            a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
        }
        if (s) {
            for (let [u, _] of Object.entries(s)){
                let c = O(u);
                n = true;
                a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
            }
        }
        if (n) {
            e += `{${a}}`;
        }
        return `${e} ${k(r)}${i !== undefined ? ` ${String(i)}` : ""}
`;
    }
    const V = "# no registered metrics";
    class R {
        _prefix;
        _appendTimestamp;
        _additionalAttributes;
        _withResourceConstantLabels;
        _withoutScopeInfo;
        _withoutTargetInfo;
        constructor(e, t = false, r, i, s){
            if (e) {
                this._prefix = `${e}_`;
            }
            this._appendTimestamp = t;
            this._withResourceConstantLabels = r;
            this._withoutScopeInfo = !!s;
            this._withoutTargetInfo = !!i;
        }
        serialize(e) {
            let t = "";
            this._additionalAttributes = this._filterResourceConstantLabels(e.resource.attributes, this._withResourceConstantLabels);
            for (let r of e.scopeMetrics){
                t += this._serializeScopeMetrics(r);
            }
            if (t === "") {
                t += V;
            }
            return this._serializeResource(e.resource) + t;
        }
        _filterResourceConstantLabels(e, t) {
            if (t) {
                let r = {};
                for (let [i, s] of Object.entries(e)){
                    if (i.match(t)) {
                        r[i] = s;
                    }
                }
                return r;
            }
        }
        _serializeScopeMetrics(e) {
            let t = "";
            for (let r of e.metrics){
                t += this._serializeMetricData(r, e.scope) + `
`;
            }
            return t;
        }
        _serializeMetricData(e, t) {
            let r = O(S(e.descriptor.name));
            if (this._prefix) {
                r = `${this._prefix}${r}`;
            }
            let e_dataPointType = e.dataPointType;
            r = j(r, e);
            let s = `# HELP ${r} ${S(e.descriptor.description || "description missing")}`;
            let n = e.descriptor.unit ? `
# UNIT ${r} ${S(e.descriptor.unit)}` : "";
            let a = `# TYPE ${r} ${G(e)}`;
            let u;
            if (this._withoutScopeInfo) {
                u = this._additionalAttributes;
            } else {
                let c = {
                    [g.ATTR_OTEL_SCOPE_NAME]: t.name
                };
                if (t.schemaUrl) {
                    c[D] = t.schemaUrl;
                }
                if (t.version) {
                    c[g.ATTR_OTEL_SCOPE_VERSION] = t.version;
                }
                u = Object.assign(c, this._additionalAttributes);
            }
            let _ = "";
            switch(e_dataPointType){
                case o.DataPointType.SUM:
                case o.DataPointType.GAUGE:
                    {
                        _ = e.dataPoints.map((c)=>this._serializeSingularDataPoint(r, e, c, u)).join("");
                        break;
                    }
                case o.DataPointType.HISTOGRAM:
                    {
                        _ = e.dataPoints.map((c)=>this._serializeHistogramDataPoint(r, e, c, u)).join("");
                        break;
                    }
                default:
                    I.diag.error(`Unrecognizable DataPointType: ${e_dataPointType} for metric "${r}"`);
            }
            return `${s}${n}
${a}
${_}`.trim();
        }
        _serializeSingularDataPoint(e, t, r, i) {
            let s = "";
            let { value, attributes } = r;
            let u = P.hrTimeToMilliseconds(r.endTime);
            s += m(e, attributes, value, this._appendTimestamp ? u : undefined, i);
            return s;
        }
        _serializeHistogramDataPoint(e, t, r, i) {
            let s = "";
            let { attributes, value } = r;
            let u = P.hrTimeToMilliseconds(r.endTime);
            for (let f of [
                "count",
                "sum"
            ]){
                let T = value[f];
                if (T != null) {
                    s += m(`${e}_${f}`, attributes, T, this._appendTimestamp ? u : undefined, i);
                }
            }
            let _ = 0;
            let c = value.buckets.counts.entries();
            let v = false;
            for (let [f, T] of c){
                _ += T;
                let d = value.buckets.boundaries[f];
                if (d === undefined && v) {
                    break;
                }
                if (d === Infinity) {
                    v = true;
                }
                s += m(`${e}_bucket`, attributes, _, this._appendTimestamp ? u : undefined, {
                    ...i,
                    le: d === undefined || d === Infinity ? "+Inf" : String(d)
                });
            }
            return s;
        }
        _serializeResource(e) {
            if (this._withoutTargetInfo === true) {
                return "";
            }
            let t = "target_info";
            let r = `# HELP ${t} Target metadata`;
            let i = `# TYPE ${t} gauge`;
            let s = m(t, e.attributes, 1).trim();
            return `${r}
${i}
${s}
`;
        }
    }
    w.PrometheusSerializer = R;
});
const q = C(function(x) {
    Object.defineProperty(x, "__esModule", {
        value: true
    });
    x.PrometheusExporter = undefined;
    const p = Da();
    const U = Of();
    const h = DOe();
    const L = Le("http");
    const M = E();
    const z = Le("url");
    class l extends h.MetricReader {
        static DEFAULT_OPTIONS = {
            host: undefined,
            port: 9464,
            endpoint: "/metrics",
            prefix: "",
            appendTimestamp: false,
            withResourceConstantLabels: undefined,
            withoutScopeInfo: false,
            withoutTargetInfo: false
        };
        _host;
        _port;
        _baseUrl;
        _endpoint;
        _server;
        _prefix;
        _appendTimestamp;
        _serializer;
        _startServerPromise;
        constructor(e = {}, t = ()=>{}){
            super({
                aggregationSelector: (n)=>({
                        type: h.AggregationType.DEFAULT
                    }),
                aggregationTemporalitySelector: (n)=>h.AggregationTemporality.CUMULATIVE,
                metricProducers: e.metricProducers
            });
            this._host = e.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || l.DEFAULT_OPTIONS.host;
            this._port = e.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || l.DEFAULT_OPTIONS.port;
            this._prefix = e.prefix || l.DEFAULT_OPTIONS.prefix;
            this._appendTimestamp = typeof e.appendTimestamp === "boolean" ? e.appendTimestamp : l.DEFAULT_OPTIONS.appendTimestamp;
            let r = e.withResourceConstantLabels || l.DEFAULT_OPTIONS.withResourceConstantLabels;
            let i = e.withoutScopeInfo || l.DEFAULT_OPTIONS.withoutScopeInfo;
            let s = e.withoutTargetInfo || l.DEFAULT_OPTIONS.withoutTargetInfo;
            this._server = L.createServer(this._requestHandler).unref();
            this._serializer = new M.PrometheusSerializer(this._prefix, this._appendTimestamp, r, s, i);
            this._baseUrl = `http://${this._host}:${this._port}/`;
            this._endpoint = (e.endpoint || l.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1");
            if (e.preventServerStart !== true) {
                this.startServer().then(t, (n)=>{
                    p.diag.error(n);
                    t(n);
                });
            } else if (t) {
                queueMicrotask(t);
            }
        }
        async onForceFlush() {}
        onShutdown() {
            return this.stopServer();
        }
        stopServer() {
            if (!this._server) {
                p.diag.debug("Prometheus stopServer() was called but server was never started.");
                return Promise.resolve();
            } else {
                return new Promise((resolve)=>{
                    this._server.close((t)=>{
                        if (!t) {
                            p.diag.debug("Prometheus exporter was stopped");
                        } else if (t.code !== "ERR_SERVER_NOT_RUNNING") {
                            U.globalErrorHandler(t);
                        }
                        resolve();
                    });
                });
            }
        }
        startServer() {
            this._startServerPromise ??= new Promise((resolve, reject)=>{
                this._server.once("error", reject);
                this._server.listen({
                    port: this._port,
                    host: this._host
                }, ()=>{
                    p.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`);
                    resolve();
                });
            });
            return this._startServerPromise;
        }
        getMetricsRequestHandler(e, t) {
            this._exportMetrics(t);
        }
        _requestHandler = (e, t)=>{
            let r;
            try {
                if (e.url != null) {
                    r = new z.URL(e.url, this._baseUrl).pathname;
                }
            } catch  {
                t.statusCode = 400;
                t.end("Bad Request");
                return;
            }
            if (r === this._endpoint) {
                this._exportMetrics(t);
            } else {
                this._notFound(t);
            }
        };
        _exportMetrics = (e)=>{
            e.statusCode = 200;
            e.setHeader("content-type", "text/plain");
            this.collect().then(({ resourceMetrics, errors })=>{
                if (errors.length) {
                    p.diag.error("PrometheusExporter: metrics collection errors", ...errors);
                }
                e.end(this._serializer.serialize(resourceMetrics));
            }, (t)=>{
                e.end(`# failed to export metrics: ${t}`);
            });
        };
        _notFound = (e)=>{
            e.statusCode = 404;
            e.end();
        };
    }
    x.PrometheusExporter = l;
});
const J = C(function(b) {
    Object.defineProperty(b, "__esModule", {
        value: true
    });
    b.PrometheusSerializer = b.PrometheusExporter = undefined;
    const B = q();
    Object.defineProperty(b, "PrometheusExporter", {
        enumerable: true,
        get: function() {
            return B.PrometheusExporter;
        }
    });
    const X = E();
    Object.defineProperty(b, "PrometheusSerializer", {
        enumerable: true,
        get: function() {
            return X.PrometheusSerializer;
        }
    });
});
export default J();
