import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Zo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { o, M, u } from "/$bunfs/root/chunk-smx21d0k.js";
export const pte = Zo({
    kind: "goal_proposal",
    payload: p(()=>u({
            condition: o()
        })),
    result: p(()=>u({
            approved: M(),
            explicit: M().optional()
        })),
    default: {
        approved: false
    }
});
