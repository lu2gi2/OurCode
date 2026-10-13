import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Un } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { phr, fhr } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
const S = [
    "userSettings",
    "projectSettings",
    "localSettings",
    "flagSettings",
    "cliArg",
    "session"
];
function s(l) {
    if (l === Be) {
        return Be;
    }
    if (l === Ct) {
        return Ct;
    }
    return null;
}
function m(l, ruleContent) {
    let o = s(l);
    if (o === null) {
        return null;
    }
    if (ruleContent === undefined || ruleContent === "" || /^[\s*]+$/.test(ruleContent)) {
        return "bare";
    }
    if (o === Be ? phr(o, ruleContent) : fhr(o, ruleContent)) {
        return "dangerous_prefix";
    }
    return "scoped";
}
function p(l) {
    let e = {};
    let o = 0;
    for (let r of S){
        for (let t of l[r] ?? []){
            let { toolName, ruleContent } = Un(t);
            let n = s(toolName);
            if (n === null) {
                continue;
            }
            let u = m(n, ruleContent);
            if (u === null) {
                continue;
            }
            let a = `${r}_${n}_${u}`;
            e[a] = (e[a] ?? 0) + 1;
            o++;
        }
    }
    e.total_shell_allow_rules = o;
    return e;
}
function vjo(l) {
    i("tengu_shell_allow_rules_at_init", p(l));
}
function a8n(l) {
    for (let e of l){
        if (e.type !== "addRules" || e.behavior !== "allow") {
            continue;
        }
        for (let o of e.rules){
            let r = s(o.toolName);
            if (r === null) {
                continue;
            }
            let t = m(o.toolName, o.ruleContent);
            if (t === null) {
                continue;
            }
            i("tengu_shell_allow_rule_added", {
                toolName: d(r),
                category: d(t),
                destination: d(e.destination)
            });
        }
    }
}
export { vjo, a8n };
