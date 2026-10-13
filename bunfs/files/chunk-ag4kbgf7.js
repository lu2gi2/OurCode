// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Whn}from"/$bunfs/root/chunk-vg7yfdrz.js";import{FG,gX}from"/$bunfs/root/chunk-psf99gkh.js";import"/$bunfs/root/chunk-wmhcfcyq.js";import{Se}from"/$bunfs/root/chunk-cj4xndke.js";var o=Se(Whn()),p=Se(FG()),r=Se(gX());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
