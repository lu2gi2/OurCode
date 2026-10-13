// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{zd,SXt,V$}from"/$bunfs/root/chunk-4r6b8efh.js";import{se}from"/$bunfs/root/chunk-7mawjt4q.js";import{jW}from"/$bunfs/root/chunk-b7w13qrv.js";import{randomBytes as l}from"crypto";function gUs(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return RVn(e?.content??"",t.data,e?.is_error===!0)}function RVn(o,t,e=!1,r=[]){return V$({envelope:{v:zd,outcome:"completed",target:$0t(),is_error:e,content:SXt(o),output:t,...r.length>0&&{notes:r}},content:o})}function $0t(){return{name:jW(),working_dir:se()}}
export{gUs,RVn,$0t};
