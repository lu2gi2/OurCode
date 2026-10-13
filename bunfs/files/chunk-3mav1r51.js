// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,O0}from"/$bunfs/root/chunk-ctt36bn8.js";import{ap}from"/$bunfs/root/chunk-0ycjphb5.js";import{j$r,W$r}from"/$bunfs/root/chunk-dt7gs57m.js";import{cl}from"/$bunfs/root/chunk-ghmnmzfd.js";class i{activePark=null}var s=new q(()=>new i);async function V9e(r,e,n,a){if(!ap())return!1;let o=s.of(r),t=await j$r(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=O0(()=>{if(ap())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),W$r(e,t.prior,t.storageV5).catch(cl)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{V9e};
