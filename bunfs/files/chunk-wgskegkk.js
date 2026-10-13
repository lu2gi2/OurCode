// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{f}from"/$bunfs/root/chunk-04d4ftnx.js";import{ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{ou}from"/$bunfs/root/chunk-x47nahfr.js";import{qdt}from"/$bunfs/root/chunk-qk3m4n8a.js";import{cn}from"/$bunfs/root/chunk-9dn6gg6j.js";import{LF,fe}from"/$bunfs/root/chunk-gc7ea4xt.js";import{YNe}from"/$bunfs/root/chunk-vy0qtdrm.js";import{ru}from"/$bunfs/root/chunk-m6z3m7rx.js";function pQe(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!ou()&&qdt("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(LF()||ru())return;let o=ce(),e=YNe(o?.env,"globalConfig"),i=cn("userSettings")?fe("userSettings"):void 0,n=YNe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),f("ca_certs_load","config_read_failed");return}}
export{pQe};
