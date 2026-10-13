import { Whn } from "/$bunfs/root/chunk-vg7yfdrz.js";
import { bjt } from "/$bunfs/root/chunk-d06z8xaz.js";
import { FG } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const u = C(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: true
    });
    i.OTLPMetricExporter = undefined;
    const o = Whn();
    const e = bjt();
    const c = FG();
    class p extends o.OTLPMetricExporterBase {
        constructor(t){
            super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"), c.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), t);
        }
    }
    i.OTLPMetricExporter = p;
});
const n = C(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: true
    });
    r.OTLPMetricExporter = undefined;
    const l = u();
    Object.defineProperty(r, "OTLPMetricExporter", {
        enumerable: true,
        get: function() {
            return l.OTLPMetricExporter;
        }
    });
});
export default n();
