// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Oe}from"/$bunfs/root/chunk-j27d47mr.js";import{gs}from"/$bunfs/root/chunk-ghreee2m.js";import{ze}from"/$bunfs/root/chunk-xgw72tt1.js";var t={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Oe();mainLoopBusy=gs({busy:!1});blockingToolProgress=gs({active:!1});dialogHostUnmounted=gs({unmounted:!1});onScreenBlockingDialog=gs({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Oe();feedbackNotice=gs(t);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1;configRowsSeen=new Set;configRowNotices=new Map}var Sa=ze(new n,(e)=>{e.configRowsSeen.clear(),e.configRowNotices.clear(),e.mainLoopBusy.setState((o)=>o.busy?{busy:!1}:o)});
export{Sa};
