import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { cwe } from "/$bunfs/root/chunk-m007m726.js";
const HAo = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/;
const a = /<command-name>(.*?)<\/command-name>/;
function r8e(e, i) {
    if (e.type !== "user") {
        return;
    }
    if (e.isMeta === true || e.isCompactSummary === true) {
        return;
    }
    let e_message = e.message;
    if (!e_message) {
        return;
    }
    let s_content = e_message.content;
    let o = [];
    if (typeof s_content === "string") {
        o.push(s_content);
    } else if (Array.isArray(s_content)) {
        for (let t of s_content){
            if (!t || typeof t !== "object") {
                continue;
            }
            if (t.type === "tool_result") {
                return;
            }
            if (t.type === "text" && typeof t.text === "string") {
                o.push(t.text);
            }
        }
    }
    for (let t of o){
        let n = cwe(t).replaceAll(`
`, " ").trim();
        if (!n) {
            continue;
        }
        let c = a.exec(n);
        if (c) {
            if (!i.commandFallback) {
                i.commandFallback = c[1];
            }
            continue;
        }
        let u = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(n);
        if (u) {
            return `! ${u[1].trim()}`;
        }
        if (HAo.test(n)) {
            continue;
        }
        if (n.length > 200) {
            n = `${ne(n, 200).trim()}…`;
        }
        return n;
    }
}
export { HAo, r8e };
