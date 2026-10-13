import { realpathSync } from "fs";
import { cwd } from "process";
function o(n) {
    return n;
}
function iOo() {
    let n = "";
    if (typeof process !== "undefined" && typeof process.cwd === "function" && typeof realpathSync === "function") {
        try {
            let e = cwd();
            try {
                n = o(realpathSync(e));
            } catch  {
                n = o(e);
            }
        } catch  {}
    }
    return n;
}
const q2n = iOo();
const c = (()=>{
    if (typeof process === "undefined" || typeof process.cwd !== "function") {
        return null;
    }
    try {
        return process.cwd();
    } catch  {
        return null;
    }
})();
function Bpt() {
    if (c === null) {
        return null;
    }
    let CLAUDE_CODE_SESSION_KIND = process.env.CLAUDE_CODE_SESSION_KIND;
    if (CLAUDE_CODE_SESSION_KIND !== undefined && String(CLAUDE_CODE_SESSION_KIND).trim() === "bg") {
        return null;
    }
    return c;
}
let t;
function j() {
    return t === true;
}
function bMs(n) {
    let e = n === true;
    if (t === undefined) {
        t = e;
        return "pinned";
    }
    if (t === e) {
        return "unchanged";
    }
    return "conflict";
}
export { iOo, q2n, Bpt, j, bMs };
