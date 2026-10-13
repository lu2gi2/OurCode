// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Qe}from"/$bunfs/root/chunk-qch5xj2a.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{it}from"/$bunfs/root/chunk-h7cbghgp.js";import{Zoe}from"/$bunfs/root/chunk-6g4165br.js";var c="it2";class u{inITerm2=null;it2Command="it2";recordInITerm2(e){this.inITerm2=e}recordIt2Command(e){this.it2Command=e}}function I(){return{cachedDetectionResult:null,backendsRegistered:!1,inProcessFallbackActive:!1,TmuxBackendClass:null,ITermBackendClass:null,tmuxBackend:null,itermBackend:null,terminalProbes:new u}}var g_e=I();var d=a.TMUX,T=a.TMUX_PANE;function HHn(){return!!d}async function bre(){return HHn()}function Qmr(){return T||null}function Zmr(){if(!d)return null;return Qe(d,",")||null}async function TLe(){return(await it(Zoe,["-V"])).code===0}function w5(e=g_e){let{terminalProbes:o}=e;if(o.inITerm2!==null)return o.inITerm2;let s=a.TERM_PROGRAM,i=!!a.ITERM_SESSION_ID,l=a.terminal==="iTerm.app",n=s==="iTerm.app"||i||l;return o.recordInITerm2(n),n}function Gio(e=g_e){return e.terminalProbes.it2Command}async function cCt(e=g_e){let o=a.SHELL||"/bin/zsh",s=await it(o,["-lc",`command -v ${c}`],{useCwd:!1,timeout:2000}),i=s.code===0?s.stdout.split(`
`).map((m)=>m.trim()).filter(Boolean).at(-1)??"":"",l=async(m)=>it(m,["session","list"]),n=i||c,r=await l(n);if(i&&r.code!==0&&(r.code===127||/ENOENT/i.test(r.error??"")))n=c,r=await l(n);if(r.code!==0)return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr||r.error||"no stderr"}. `+(i?"it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled "+"(Preferences > General > Magic > Enable Python API).":"it2 was not found on PATH (including login-shell PATH).")),!1;return e.terminalProbes.recordIt2Command(n),!0}
export{g_e,HHn,bre,Qmr,Zmr,TLe,w5,Gio,cCt};
