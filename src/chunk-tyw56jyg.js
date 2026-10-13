import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { nL } from "/$bunfs/root/chunk-csgqhzkt.js";
import { NOe, E2o } from "/$bunfs/root/chunk-dp3ermzf.js";
export const Vhn = async (o, e)=>{
    let n = e.toolState.get(nL);
    if (o === "consent") {
        try {
            await NOe(n, "agent_design_projects", e.credentials);
            return {
                type: "text",
                value: "Design agent access granted for your Claude Design projects. Use /design revoke to undo."
            };
        } catch (error) {
            return {
                type: "text",
                value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${l(error)}. Try again, or run /design-login to authorize Claude Design for this account.`
            };
        }
    }
    try {
        await E2o(n, "agent_design_projects", e.credentials);
        return {
            type: "text",
            value: "Design agent access revoked for your Claude Design projects."
        };
    } catch (error) {
        return {
            type: "text",
            value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${l(error)}. Try again, or run /design-login to authorize Claude Design for this account.`
        };
    }
};
