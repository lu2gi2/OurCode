// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B,X8e}from"/$bunfs/root/chunk-ctt36bn8.js";import{j}from"/$bunfs/root/chunk-fcerdfs3.js";import{I$e,ce,gct}from"/$bunfs/root/chunk-0ycjphb5.js";import{ji}from"/$bunfs/root/chunk-9dn6gg6j.js";import{Idt,MMt,Y7,v1,F8,wxe}from"/$bunfs/root/chunk-gc7ea4xt.js";import{Ewo,Etn}from"/$bunfs/root/chunk-bckbp4r1.js";import{roe}from"/$bunfs/root/chunk-vy0qtdrm.js";import{dbs}from"/$bunfs/root/chunk-z363h27n.js";import{tbr}from"/$bunfs/root/chunk-9snc0taf.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new q(()=>new s);function l(){return p.of(B().host)}async function Jxt(t){if(!l().claimSettingsLoad())return;tbr();let e=j()?t?.backend:void 0;if(j()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("/$bunfs/root/chunk-8gdkt9ax.js"),import("/$bunfs/root/chunk-c8knngxy.js"),import("/$bunfs/root/chunk-4cz6t5v8.js"),import("/$bunfs/root/chunk-6nwdda2s.js")]);await r(e),await Promise.all([gct(e),o(e,ji())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await gct();if(await Idt(),await Etn(Ewo),j()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("/$bunfs/root/chunk-r13zb9hg.js"),import("/$bunfs/root/chunk-6879tn62.js"),import("/$bunfs/root/chunk-mt5pc6ed.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}X8e(I$e),roe();let n=dbs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function E$n(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await MMt(v1(),F8(),wxe()),Y7())roe();return e.error}async function afo(t){return await Jxt(t),E$n()}
export{Jxt,E$n,afo};
