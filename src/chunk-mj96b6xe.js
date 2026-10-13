import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { FR, c8e } from "/$bunfs/root/chunk-craerjpn.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { T0 } from "/$bunfs/root/chunk-srmqtve7.js";
const i = 1000;
function ERr(e = process.argv.slice(2)) {
    return c8e(e) && FR("--output-format", e) === "stream-json";
}
function nBe() {
    return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function kRr(e, t = process.argv.slice(2)) {
    let r = FR("--session-id", t);
    return (FR("--sdk-url", t) === undefined ? Jt(r) : r) || e;
}
function mDt({ sessionId, message, reason, resultIndex = 0 }) {
    return {
        ...T0(sessionId, [
            message
        ]),
        ...reason !== undefined && {
            startup_failure_reason: reason
        },
        ...resultIndex !== null && {
            result_index: resultIndex
        }
    };
}
async function YY(e) {
    if (nBe()) {
        await TRr([
            mDt({
                ...e,
                sessionId: kRr(e.sessionId)
            })
        ]);
    }
}
async function TRr(e) {
    let process_stdout = process.stdout;
    if (!ERr() || process_stdout.writableEnded || process_stdout.destroyed) {
        return false;
    }
    let r = e.map((s)=>JSON.stringify(s) + `
`).join("");
    let n = (s)=>{};
    let o = new Promise((resolve)=>{
        n = resolve;
    });
    process_stdout.once("error", ()=>n(false));
    try {
        process_stdout.write(r, (s)=>n(!s));
    } catch  {
        return false;
    }
    return await Ge(o, i) ?? false;
}
export { ERr, nBe, kRr, mDt, YY, TRr };
