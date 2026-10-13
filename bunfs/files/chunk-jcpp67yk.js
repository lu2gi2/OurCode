// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{L}from"/$bunfs/root/chunk-6q0v3ahc.js";var Gn="SendMessage",ftn="ccd_session_mgmt",bdt=200,sTr=["type","recipient","recipient_kind","content","request_id","approve"];function iwo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function TMt(e){if(!L(e)||!iwo(e)||!sTr.some((n)=>(n in e)))return;let o={...e};for(let n of sTr)delete o[n];return o}
export{Gn,ftn,bdt,sTr,iwo,TMt};
