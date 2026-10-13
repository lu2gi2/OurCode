import { uK, FG, gX } from "/$bunfs/root/chunk-psf99gkh.js";
import { DOe } from "/$bunfs/root/chunk-wmhcfcyq.js";
import { Da, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const l = C(function(y) {
    Object.defineProperty(y, "__esModule", {
        value: true
    });
    y.AggregationTemporalityPreference = undefined;
    let I;
    ((r)=>{
        r[r.DELTA = 0] = "DELTA";
        r[r.CUMULATIVE = 1] = "CUMULATIVE";
        r[r.LOWMEMORY = 2] = "LOWMEMORY";
    })(I = y.AggregationTemporalityPreference || (y.AggregationTemporalityPreference = {}));
});
const s = C(function(M) {
    Object.defineProperty(M, "__esModule", {
        value: true
    });
    M.OTLPMetricExporterBase = M.LowMemoryTemporalitySelector = M.DeltaTemporalitySelector = M.CumulativeTemporalitySelector = undefined;
    const O = Of();
    const e = DOe();
    const o = l();
    const g = uK();
    const _ = Da();
    const b = ()=>e.AggregationTemporality.CUMULATIVE;
    M.CumulativeTemporalitySelector = b;
    const B = (r)=>{
        switch(r){
            case e.InstrumentType.COUNTER:
            case e.InstrumentType.OBSERVABLE_COUNTER:
            case e.InstrumentType.GAUGE:
            case e.InstrumentType.HISTOGRAM:
            case e.InstrumentType.OBSERVABLE_GAUGE:
                return e.AggregationTemporality.DELTA;
            case e.InstrumentType.UP_DOWN_COUNTER:
            case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
                return e.AggregationTemporality.CUMULATIVE;
        }
    };
    M.DeltaTemporalitySelector = B;
    const D = (r)=>{
        switch(r){
            case e.InstrumentType.COUNTER:
            case e.InstrumentType.HISTOGRAM:
                return e.AggregationTemporality.DELTA;
            case e.InstrumentType.GAUGE:
            case e.InstrumentType.UP_DOWN_COUNTER:
            case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
            case e.InstrumentType.OBSERVABLE_COUNTER:
            case e.InstrumentType.OBSERVABLE_GAUGE:
                return e.AggregationTemporality.CUMULATIVE;
        }
    };
    M.LowMemoryTemporalitySelector = D;
    function j() {
        let r = (O.getStringFromEnv("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
        if (r === "cumulative") {
            return M.CumulativeTemporalitySelector;
        }
        if (r === "delta") {
            return M.DeltaTemporalitySelector;
        }
        if (r === "lowmemory") {
            return M.LowMemoryTemporalitySelector;
        }
        _.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${r}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`);
        return M.CumulativeTemporalitySelector;
    }
    function N(r) {
        if (r != null) {
            if (r === o.AggregationTemporalityPreference.DELTA) {
                return M.DeltaTemporalitySelector;
            } else if (r === o.AggregationTemporalityPreference.LOWMEMORY) {
                return M.LowMemoryTemporalitySelector;
            }
            return M.CumulativeTemporalitySelector;
        }
        return j();
    }
    const w = Object.freeze({
        type: e.AggregationType.DEFAULT
    });
    function q(r) {
        return r?.aggregationPreference ?? (()=>w);
    }
    class L extends g.OTLPExporterBase {
        _aggregationTemporalitySelector;
        _aggregationSelector;
        constructor(r, E){
            super(r);
            this._aggregationSelector = q(E);
            this._aggregationTemporalitySelector = N(E?.temporalityPreference);
        }
        selectAggregation(r) {
            return this._aggregationSelector(r);
        }
        selectAggregationTemporality(r) {
            return this._aggregationTemporalitySelector(r);
        }
    }
    M.OTLPMetricExporterBase = L;
});
const v = C(function(d) {
    Object.defineProperty(d, "__esModule", {
        value: true
    });
    d.OTLPMetricExporter = undefined;
    const S = s();
    const x = FG();
    const n = gX();
    class A extends S.OTLPMetricExporterBase {
        constructor(r){
            super(n.createOtlpHttpExportDelegate(n.convertLegacyHttpOptions(r ?? {}, "METRICS", "v1/metrics", {
                "Content-Type": "application/json"
            }), x.JsonMetricsSerializer), r);
        }
    }
    d.OTLPMetricExporter = A;
});
const R = C(function(T) {
    Object.defineProperty(T, "__esModule", {
        value: true
    });
    T.OTLPMetricExporter = undefined;
    const G = v();
    Object.defineProperty(T, "OTLPMetricExporter", {
        enumerable: true,
        get: function() {
            return G.OTLPMetricExporter;
        }
    });
});
const U = C(function(m) {
    Object.defineProperty(m, "__esModule", {
        value: true
    });
    m.OTLPMetricExporter = undefined;
    const h = R();
    Object.defineProperty(m, "OTLPMetricExporter", {
        enumerable: true,
        get: function() {
            return h.OTLPMetricExporter;
        }
    });
});
export const Whn = C(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.OTLPMetricExporterBase = t.LowMemoryTemporalitySelector = t.DeltaTemporalitySelector = t.CumulativeTemporalitySelector = t.AggregationTemporalityPreference = t.OTLPMetricExporter = undefined;
    const F = U();
    Object.defineProperty(t, "OTLPMetricExporter", {
        enumerable: true,
        get: function() {
            return F.OTLPMetricExporter;
        }
    });
    const Y = l();
    Object.defineProperty(t, "AggregationTemporalityPreference", {
        enumerable: true,
        get: function() {
            return Y.AggregationTemporalityPreference;
        }
    });
    const a = s();
    Object.defineProperty(t, "CumulativeTemporalitySelector", {
        enumerable: true,
        get: function() {
            return a.CumulativeTemporalitySelector;
        }
    });
    Object.defineProperty(t, "DeltaTemporalitySelector", {
        enumerable: true,
        get: function() {
            return a.DeltaTemporalitySelector;
        }
    });
    Object.defineProperty(t, "LowMemoryTemporalitySelector", {
        enumerable: true,
        get: function() {
            return a.LowMemoryTemporalitySelector;
        }
    });
    Object.defineProperty(t, "OTLPMetricExporterBase", {
        enumerable: true,
        get: function() {
            return a.OTLPMetricExporterBase;
        }
    });
});
