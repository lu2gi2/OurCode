import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, E, M, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const e = p(()=>u({
        path: o(),
        text: o(),
        chars: E().int().min(0),
        clipped: M().optional()
    }));
function Cfn() {
    return {
        init_references: u({
            docs: T(e()),
            unavailable: T(u({
                path: o(),
                why: o()
            })).optional()
        }).optional()
    };
}
function HUt() {
    return {
        design_system: u({
            url: o().optional(),
            default: o().optional(),
            title: o().optional(),
            store: M().optional(),
            docs: T(e()).optional(),
            unavailable: o().optional()
        }).optional()
    };
}
const t = p(()=>u({
        dir: o(),
        files: T(u({
            path: o(),
            bytes: E()
        })),
        skipped: T(u({
            path: o(),
            reason: o()
        }))
    }));
const Rfn = p(()=>u({
        type: t().optional(),
        system_url: o().optional(),
        system: t().optional(),
        skill_in_result: M(),
        capabilities_skill: M(),
        repl_tool: M().optional()
    }));
export { Cfn, HUt, Rfn };
