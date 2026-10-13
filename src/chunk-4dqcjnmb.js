import { TPe, k8e, gBe } from "/$bunfs/root/chunk-bd805sh6.js";
const g = `[${TPe}]*`;
const a = `[\\s${TPe}]`;
const e = String.raw`\t\n\v\f\r \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000`;
const A = `[^=:${e}]`;
const E = `(?:[${e}]${a}*)?`;
const t = "[A-Za-z0-9_-]";
const n = `${t}{8}${t}*`;
const _ = `\\.eyJ${n}\\.${n}`;
const u = new RegExp(`((?<!${t})(?=${t}+${_})${t}*?)eyJ${n}${_}`, "g");
const R = {
    keyValue: new RegExp("((?:^|[\\s=:])(?=[^=:\\s]+\\s*[=:]\\s*\\S)[^=:\\s]*?(?:secret|key|token|password|credential)[^=:\\s]*\\s*[=:]\\s*)\\S+", "gi"),
    bearer: /(Bearer )\S+/gi,
    basicAuth: /(Authorization:\s*Basic\s+)\S+/gi
};
const l = {
    keyValue: new RegExp(`((?:^|[=:${e}])(?=[${TPe}\\ufeff]*[^=:\\s${TPe}])(?=${A}+${E}[=:]${a}*[^${e}])${A}*?(?:${gBe("secret|key|token|password|credential")})${A}*${E}[=:]${a}*)[^${e}]+`, "gi"),
    bearer: new RegExp(`((?:${gBe("Bearer")})${k8e} [${TPe}\\ufeff]*)[^${e}]+`, "gi"),
    basicAuth: new RegExp(`((?:${gBe("Authorization")})${k8e}:${a}*(?:${gBe("Basic")})${g}\\s${a}*)[^${e}]+`, "gi")
};
const z = /[\p{Cf}\p{Default_Ignorable_Code_Point}\p{Cs}\u2800\ufeff]/u;
function $d(r) {
    let s = c(r, R);
    if (z.test(r)) {
        return c(s, l);
    }
    return s;
}
function c(r, s) {
    return r.replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)[^@/\s]+@/gi, "$1***:***@").replace(s.keyValue, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/\*\*\*:\*\*\*@)(?:[^@/?#\s"',;&>|)\]}`]*@)+/gi, "$1").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "[REDACTED]").replace(s.bearer, "$1[REDACTED]").replace(u, "$1[REDACTED-JWT]").replace(/(gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{82,}|gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]{20,}(?:\.[0-9a-z]{9})?|xox[a-z]-[A-Za-z0-9+/=%_-]{10,}|xapp-[A-Za-z0-9_-]{10,}|xwfp-[A-Za-z0-9_-]{10,}|[Hh][Oo][Oo][Kk][Ss]\.[Ss][Ll][Aa][Cc][Kk]\.[Cc][Oo][Mm]\/(?:services|workflows|triggers)\/[A-Za-z0-9+/_-]{20,}|sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}|EAAA[A-Za-z0-9+/=%_-]{56,}|AIza[A-Za-z0-9_-]{35}|GOCSPX-[A-Za-z0-9_-]{28}|[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,})/g, "[REDACTED-PAT]").replace(s.basicAuth, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)(?!\*\*\*:\*\*\*%40)(?:\*\*\*:\*\*\*@)?(?![^@/?#\s"',;&>|)\]}`]*@)(?:[^@/?#\s"',;&<>|)\]{}`[]*["'`<>{}[\]][^@/?#\s,;&|{}"'`<>[\]()]*(%40)|[^@/?#\s"',;&<>|)\]}`[]+(%40)|(?=[^@/?#\s"',;&<>|)\]}`[]*?(?:%|:[^@/?#\s"',;&<>|)\]}`[]))[^@/?#\s"',;&<>|)\]}`[]+(?=\[REDACTED[-A-Z]*\]))/gi, (S, i, o, p)=>`${i}***:***${o ?? p ?? ""}`);
}
export { $d };
