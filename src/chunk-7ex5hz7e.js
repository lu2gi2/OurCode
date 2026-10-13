import { bjt } from "/$bunfs/root/chunk-d06z8xaz.js";
import { uK, FG } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const s = C(function(p) {
    Object.defineProperty(p, "__esModule", {
        value: true
    });
    p.OTLPTraceExporter = undefined;
    const e = bjt();
    const t = FG();
    const o = uK();
    class c extends o.OTLPExporterBase {
        constructor(u = {}){
            super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u, "TRACES"), t.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
        }
    }
    p.OTLPTraceExporter = c;
});
const l = C(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: true
    });
    r.OTLPTraceExporter = undefined;
    const i = s();
    Object.defineProperty(r, "OTLPTraceExporter", {
        enumerable: true,
        get: function() {
            return i.OTLPTraceExporter;
        }
    });
});
export default l();
