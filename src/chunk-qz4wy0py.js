import { rte, W6 } from "/$bunfs/root/chunk-k09mhqd6.js";
import { ote } from "/$bunfs/root/chunk-2p9g5q54.js";
function lT(config, e) {
    let n = {
        name: e.client.name,
        config
    };
    return {
        ...e,
        client: rte(e.client, config),
        ...e.tools !== undefined && {
            tools: W6(n, e.tools)
        },
        ...e.commands !== undefined && {
            commands: ote(n, e.commands)
        }
    };
}
export { lT };
