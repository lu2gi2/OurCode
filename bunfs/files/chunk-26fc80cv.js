// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,cs}from"/$bunfs/root/chunk-ctt36bn8.js";import{Q}from"/$bunfs/root/chunk-jtpfgrzr.js";async function ZL(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Q(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("/$bunfs/root/chunk-rc2cqp81.js"),import("/$bunfs/root/chunk-m3z2ahgd.js"),import("/$bunfs/root/chunk-dgvgsxjh.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Q(500)]),await a}catch{}}class o{tasks=[]}var c=new q(()=>new o);function t(){return cs(c).tasks}function bfo(s){t().push(s.catch(()=>{}))}
export{ZL,bfo};
