import { Whn } from "/$bunfs/root/chunk-vg7yfdrz.js";
import { FG, gX } from "/$bunfs/root/chunk-psf99gkh.js";
import "/$bunfs/root/chunk-wmhcfcyq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const o = Se(Whn());
const p = Se(FG());
const r = Se(gX());
export class OTLPMetricExporter extends o.OTLPMetricExporterBase {
    constructor(e){
        super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
            "Content-Type": "application/x-protobuf"
        }), p.ProtobufMetricsSerializer), e);
    }
}
