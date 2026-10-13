import { bjt } from "/$bunfs/root/chunk-d06z8xaz.js";
import { uK, FG } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const u = C(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: true
    });
    s.OTLPLogExporter = undefined;
    const e = bjt();
    const t = FG();
    const o = uK();
    class p extends o.OTLPExporterBase {
        constructor(L = {}){
            super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L, "LOGS"), t.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
        }
    }
    s.OTLPLogExporter = p;
});
const n = C(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: true
    });
    r.OTLPLogExporter = undefined;
    const i = u();
    Object.defineProperty(r, "OTLPLogExporter", {
        enumerable: true,
        get: function() {
            return i.OTLPLogExporter;
        }
    });
});
export default n();
