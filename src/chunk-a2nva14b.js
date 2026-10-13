import { jhn, MOe } from "/$bunfs/root/chunk-3fzyr59r.js";
function ujt(e, n) {
    return {
        targets: e.filter((t)=>jhn(t, n)),
        outOfBandNote: MOe(e, true, n)
    };
}
async function pjt(e, n) {
    let results = await Promise.allSettled(e.map((o)=>n(o.name)));
    let connected = 0;
    for (let o of results){
        if (o.status === "fulfilled" && o.value.client.type === "connected") {
            connected++;
        }
    }
    return {
        results,
        connected
    };
}
export { ujt, pjt };
