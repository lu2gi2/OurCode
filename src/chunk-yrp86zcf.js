import { Xe, Op, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ta } from "/$bunfs/root/chunk-nj0630nv.js";
import { wt, Mn, kr, FT, Nt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { SI, yT } from "/$bunfs/root/chunk-kasbfbhj.js";
import { randomUUID } from "crypto";
const value = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function fyt() {
    return wt() && Mn()?.billingType !== "usage_based" && Ta() && Op() && !jn() && !Nt();
}
function LWe(e) {
    return fyt() && SI(e) && e.rateLimitType === "five_hour";
}
const r = [
    "five_hour",
    "seven_day",
    "seven_day_overage_included",
    "seven_day_opus",
    "seven_day_sonnet"
];
function uhn(e) {
    return fyt() && SI(e) && e.rateLimitType !== undefined && r.includes(e.rateLimitType);
}
function NWe() {
    switch(kr()){
        case "pro":
            return "pro";
        case "max":
            switch(FT()){
                case "default_claude_max_5x":
                    return "max_5x";
                case "default_claude_max_20x":
                    return "max_20x";
                default:
                    return "max_other";
            }
        default:
            return "other";
    }
}
function $Qe() {
    yT({
        agentId: Xe(),
        mode: "prompt",
        priority: "later",
        value,
        uuid: randomUUID(),
        origin: {
            kind: "auto-continuation"
        },
        isMeta: true,
        skipSlashCommands: true
    });
}
export { fyt, LWe, uhn, NWe, $Qe };
