// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Le}from"/$bunfs/root/chunk-cj4xndke.js";var xWn="HKLM\\SOFTWARE\\Policies\\ClaudeCode",PWn="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Wtn="Settings";var GRs=5000,Hvo=2097152,VRs="/mnt/c/Windows/System32/reg.exe",yH="/mnt/c/Program Files/ClaudeCode";function NMt(){if(process.env.WSL_DISTRO_NAME)return!0;try{let e=Le("fs").readFileSync("/proc/version","utf8").toLowerCase();return e.includes("microsoft")||e.includes("wsl")}catch{return!1}}
export{xWn,PWn,Wtn,GRs,Hvo,VRs,yH,NMt};
