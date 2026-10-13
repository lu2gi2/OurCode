// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{nU}from"/$bunfs/root/chunk-bd805sh6.js";import{_q,nr,i8e,ho}from"/$bunfs/root/chunk-wew3321y.js";import{qY}from"/$bunfs/root/chunk-zwxj12s4.js";function Kxe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",IPs={github:nr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function IP(r){if(r=Kxe(r),ho(r))return"github";let t=i8e(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function Mut(r){let t=r.trim();if(_q(t)||nU(t)||qY(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function yrn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!nU(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{Kxe,IPs,IP,Mut,yrn};
