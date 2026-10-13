// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pl}from"/$bunfs/root/chunk-223dyewd.js";var dh={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function TU(E){return pl(`?${E}h`)}function nK(E){return pl(`?${E}l`)}var tFt=TU(dh.SYNCHRONIZED_UPDATE),nJe=nK(dh.SYNCHRONIZED_UPDATE),SNo=TU(dh.BRACKETED_PASTE),qdn=nK(dh.BRACKETED_PASTE),Kdn=TU(dh.FOCUS_EVENTS),Xmt=nK(dh.FOCUS_EVENTS),wNo=TU(dh.THEME_NOTIFY),Ydn=nK(dh.THEME_NOTIFY),VH=TU(dh.CURSOR_VISIBLE),qH=nK(dh.CURSOR_VISIBLE),Jmt=TU(dh.ALT_SCREEN_CLEAR),Qmt=nK(dh.ALT_SCREEN_CLEAR),Xdn=nK(dh.WIN32_INPUT_MODE),S=TU(dh.MOUSE_NORMAL)+TU(dh.MOUSE_BUTTON)+TU(dh.MOUSE_ANY)+TU(dh.MOUSE_SGR),_=TU(dh.MOUSE_NORMAL)+TU(dh.MOUSE_SGR),Ffe=nK(dh.MOUSE_SGR)+nK(dh.MOUSE_ANY)+nK(dh.MOUSE_BUTTON)+nK(dh.MOUSE_NORMAL),vNo=TU(dh.MOUSE_SGR_PIXELS),ENo=nK(dh.MOUSE_SGR_PIXELS)+TU(dh.MOUSE_SGR);function Jdn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{dh,TU,nK,tFt,nJe,SNo,qdn,Kdn,Xmt,wNo,Ydn,VH,qH,Jmt,Qmt,Xdn,Ffe,vNo,ENo,Jdn};
