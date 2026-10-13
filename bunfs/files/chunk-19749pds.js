// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{jt}from"/$bunfs/root/chunk-m1rt7wpr.js";import{Ae,ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{it}from"/$bunfs/root/chunk-h7cbghgp.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as l}from"path";async function u(e,a){await Ae((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function tUt(e){await Ae((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ce();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function nUt(){return l(s(),"Library","Preferences","com.apple.Terminal.plist")}async function mBo(e){let a=nUt(),r=`${a}.bak`;try{let{code:n}=await it("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await it("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(jt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return c(n),null}}async function Bpn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await tUt(e),{status:"no_backup"};try{await i(r)}catch{return await tUt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await it("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await it("killall",["cfprefsd"]),await tUt(e),{status:"restored"}}catch(o){if(jt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else c(o);return await tUt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{tUt,nUt,mBo,Bpn};
