import { uK, FG, gX } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const e = Se(uK());
const o = Se(FG());
const r = Se(gX());
export class OTLPTraceExporter extends e.OTLPExporterBase {
    constructor(p = {}){
        super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
            "Content-Type": "application/x-protobuf"
        }), o.ProtobufTraceSerializer));
    }
}
