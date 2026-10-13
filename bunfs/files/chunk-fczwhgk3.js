// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{zc}from"/$bunfs/root/chunk-bmzhpr9h.js";import{k}from"/$bunfs/root/chunk-0ycjphb5.js";import{sn,Fp}from"/$bunfs/root/chunk-0c6rtmqc.js";import{o,T,u}from"/$bunfs/root/chunk-smx21d0k.js";var l=p(()=>T(u({marketplace:o(),plugin:o()})));function nXn(){let e=k("tengu_harbor_ledger",[]),n=l().safeParse(e);return n.success?n.data:[]}function QN(){return sn("allow_channels")&&k("tengu_harbor",!1)}function wyt(){if(!k("tengu_harbor",!1))return!0;let e=Fp("allow_channels");return e!==null&&e!=="cache_miss"&&e!=="route_missing"}function Z1t(e){if(!e)return!1;let{name:n,marketplace:r}=zc(e);if(!r)return!1;return nXn().some((t)=>t.plugin===n&&t.marketplace===r)}
export{nXn,QN,wyt,Z1t};
