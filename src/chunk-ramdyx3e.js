import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { OS } from "/$bunfs/root/chunk-wtmtca98.js";
import { createInterface } from "readline";
const R = 5;
const bJe = 250;
const aNr = "That answer arrived too quickly after the question to count. Please answer again.";
async function Lje(e, input = process.stdin, { ignoreAnswersWithinMs = 0, reaskPreamble = "" } = {}) {
    if (ignoreAnswersWithinMs > 0) {
        if (await w(input, ignoreAnswersWithinMs)) {
            return false;
        }
    }
    let r = ()=>{};
    let a = new Promise((resolve)=>{
        r = resolve;
    });
    let s = createInterface({
        input,
        output: process.stdout
    });
    let i = 0;
    let c = ()=>{
        let n = performance.now();
        s.question(`${e} [y/N] `, (f)=>{
            if (ignoreAnswersWithinMs > 0 && performance.now() - n < ignoreAnswersWithinMs) {
                if (++i > R) {
                    r(false);
                    s.close();
                    return;
                }
                process.stdout.write(`${reaskPreamble}${aNr}
`);
                c();
                return;
            }
            let l = f.trim().toLowerCase();
            r(l === "y" || l === "yes");
            s.close();
        });
    };
    c();
    s.once("close", ()=>r(false));
    return a;
}
async function w(input, ignoreAnswersWithinMs) {
    let o = "isTTY" in input && input.isTTY === true;
    let d = "isRaw" in input && input.isRaw === true;
    let r = false;
    let a = ()=>{
        r = true;
    };
    let s = ()=>{};
    input.once("end", a);
    input.once("close", a);
    input.on("data", s);
    if (o) {
        OS(input, true);
    }
    try {
        input.resume();
        await Q(ignoreAnswersWithinMs);
    } finally{
        input.removeListener("data", s);
        input.removeListener("end", a);
        input.removeListener("close", a);
        input.pause();
        if (o) {
            OS(input, d);
        }
    }
    return r || "readableEnded" in input && input.readableEnded === true || "destroyed" in input && input.destroyed === true;
}
export { bJe, aNr, Lje };
