// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{hz}from"/$bunfs/root/chunk-0ycjphb5.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{c5}from"/$bunfs/root/chunk-tzz3htys.js";import{E,u}from"/$bunfs/root/chunk-smx21d0k.js";var o=60000,r=1800000,t=2592000000,i=p(()=>u({recurringFrac:E().min(0).max(1),recurringCapMs:E().int().min(0).max(r),oneShotMaxMs:E().int().min(0).max(r),oneShotFloorMs:E().int().min(0).max(r),oneShotMinuteMod:E().int().min(1).max(60),recurringMaxAgeMs:E().int().min(0).max(t).default(c5.recurringMaxAgeMs),cacheLeadMs:E().int().min(0).max(60000).default(c5.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function Gve(){let n=hz("tengu_kairos_cron_config",c5,o),e=i().safeParse(n);return e.success?e.data:c5}
export{Gve};
