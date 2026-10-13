import { OEs, TTs } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ww } from "/$bunfs/root/chunk-4r6b8efh.js";
import { hPe } from "/$bunfs/root/chunk-x47nahfr.js";
import { yt } from "/$bunfs/root/chunk-f41czxrs.js";
import { va, EMn, C4 } from "/$bunfs/root/chunk-7aeb6f08.js";
import { pu } from "/$bunfs/root/chunk-7sgatswa.js";
import { jx } from "/$bunfs/root/chunk-ae0vw9s3.js";
import { VI, zfs, Gfs, Vfs, qfs } from "/$bunfs/root/chunk-xs3re09e.js";
import { Sl } from "/$bunfs/root/chunk-qbxhbxwh.js";
const DD = "EnterWorktree";
const eR = "ReportFindings";
const Goo = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
const TAe = "ShareOnboardingGuide";
const Voo = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
const BRIEF_TOOL_NAME = import.meta.require("/$bunfs/root/chunk-szrqhvvw.js").BRIEF_TOOL_NAME;
const d = new Set([
    eR,
    pu,
    TAe
]);
const c = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`;
const m = " Until fetched, only the name is known — there is no parameter schema, so the tool cannot be invoked.";
const p = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`;
const h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;
function d5(e, r) {
    return OEs(e.name) ?? tLe(e, r);
}
function tLe(e, r) {
    if (e.alwaysLoad === true) {
        return false;
    }
    if (O(e, r)) {
        return false;
    }
    if (EMn()) {
        return false;
    }
    return T(e);
}
function T(e) {
    if (e.isMcp === true) {
        return true;
    }
    if (zfs() && ww(e, d)) {
        return true;
    }
    if (ww(e, Gfs())) {
        return true;
    }
    return e.shouldDefer === true;
}
function O(e, r) {
    return s(e, r) || E(e) || l(e);
}
function s(e, r = VI()) {
    if (ww(e, r)) {
        return true;
    }
    if (e.isMcp === true) {
        return false;
    }
    if (e.name === Sl) {
        return true;
    }
    if (e.name === va) {
        return true;
    }
    if (e.name === yt) {
        let t = import.meta.require("/$bunfs/root/chunk-f5j5kjk9.js");
        if (t.isForkSubagentEnabled()) {
            return true;
        }
    }
    if (e.name === BRIEF_TOOL_NAME) {
        return true;
    }
    if (l(e) && !qfs()) {
        return true;
    }
    return false;
}
function E(e) {
    return e.isMcp !== true && e.name === DD && a.CLAUDE_CODE_SESSION_KIND === "bg";
}
function l(e) {
    return e.isMcp !== true && e.name === jx && hPe();
}
function ore(e, r, t, { toolSearchAbsent = false, placements = "hooks", nonDeferrableBuiltins } = {}) {
    let i = placements === "hooks" ? OEs(e.name) : undefined;
    if (i !== undefined) {
        return i;
    }
    if (toolSearchAbsent) {
        if (r === undefined) {
            return false;
        }
    } else if (r === undefined) {
        if (placements === "hooks") {
            return d5(e, nonDeferrableBuiltins);
        }
        return tLe(e, nonDeferrableBuiltins);
    }
    if (t !== undefined && C4(t)) {
        return false;
    }
    if (s(e, nonDeferrableBuiltins)) {
        return false;
    }
    return !r.has(e.name);
}
function qoo(e) {
    let r = Vfs(e.name) ?? e.whenToUse;
    if (r !== undefined && d5(e)) {
        return `${e.name}: ${r}`;
    }
    return e.name;
}
function ufr() {
    return c + (TTs() ? p : m) + h;
}
export { DD, eR, Goo, TAe, Voo, d5, tLe, ore, qoo, ufr };
