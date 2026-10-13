import { uK, FG, gX } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const t = Se(uK());
const e = Se(FG());
const o = Se(gX());
export class OTLPLogExporter extends t.OTLPExporterBase {
    constructor(p = {}){
        super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", {
            "Content-Type": "application/x-protobuf"
        }), e.ProtobufLogsSerializer));
    }
}
