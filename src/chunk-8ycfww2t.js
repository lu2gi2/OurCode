import { q, cs, LN, Mpt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { GFe, vP } from "/$bunfs/root/chunk-d2sd20y7.js";
import { fPe } from "/$bunfs/root/chunk-t6f6b9d8.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { closeSync, openSync } from "fs";
import { devNull } from "os";
class u {
    line;
}
const l = new q(()=>new u);
function NMo(e = 0) {
    {
        if (!process.argv.includes("--session-tunnel") || !ru()) {
            return;
        }
        fPe((m)=>t(`[session tunnel] ${m}`, {
                level: "warn"
            }));
        let o = GFe(e, "the session tunnel's line of JSON") ?? undefined;
        cs(l).line = o;
        let s = openSync(devNull, "r");
        if (s !== e) {
            closeSync(s);
        }
        let n;
        try {
            n = $o(o ?? "null");
        } catch  {
            n = null;
        }
        let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "";
        let i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
        if (r !== "") {
            vP();
            LN(r);
            Mpt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
        }
        t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token and ${i === "" ? "no" : "an"} agent proxy token`);
        if (i === "") {
            return undefined;
        }
        return i;
    }
}
function $Mo() {
    let e = cs(l);
    let e_line = e.line;
    e.line = undefined;
    return e_line;
}
export { NMo, $Mo };
