import { eo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Eq } from "/$bunfs/root/chunk-etbngzss.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { sep } from "path";
function u() {
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) {
        return false;
    }
    return !qn();
}
function UCs() {
    return a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !a.CLAUDE_CODE_BYOC_ENABLE_DATADOG;
}
function l() {
    return a.CLAUDE_CODE_CUSTOM_OAUTH_URL !== undefined;
}
function Fy() {
    return u() || eo() !== null || Eq() || l();
}
function BCs() {
    return u() || eo() !== null || l();
}
function W7() {
    return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL;
}
function JV() {
    if (W7()) {
        return false;
    }
    return Eq();
}
const awo = new Set([
    ".git",
    "hooks",
    ".husky",
    ".githooks",
    "node_modules",
    ".vscode",
    ".idea",
    "head",
    "config",
    "objects",
    "refs",
    ".claude",
    "skills",
    "commands",
    "agents",
    ".cargo",
    ".devcontainer",
    ".yarn",
    ".mvn"
]);
const mtn = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/;
const lwo = new RegExp(mtn, "g");
function ul(e) {
    return c(e, true);
}
function Kjn(e) {
    return c(e, false);
}
function c(e, o) {
    let n = e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s");
    let t = n.replace(lwo, "");
    return (o ? t.replace(/:.*$/, "") : t).replace(/[. ]+$/, "") || n;
}
function cwo(e) {
    return false;
}
function D8(e, o, n) {
    let t = e.slice(o.length).split(sep);
    let i = t.length - 1;
    for(let r = 0; r < t.length; r++){
        let s = ul(t[r]);
        if (awo.has(s) || cwo(s)) {
            return true;
        }
        if (r === i && n?.has(s)) {
            return true;
        }
    }
    return false;
}
export { UCs, Fy, BCs, W7, JV, awo, mtn, lwo, ul, Kjn, cwo, D8 };
