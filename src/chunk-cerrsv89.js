import { t } from "/$bunfs/root/chunk-bd805sh6.js";
function oc(e, o, r = {}, level = "debug") {
    let n = e === undefined ? "[remote-tools]" : `[remote-tools call=${e}]`;
    let g = Object.entries(r).flatMap(([d, i])=>{
        if (i === undefined) {
            return [];
        }
        return [
            `${d}=${i}`
        ];
    }).join(" ");
    t(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, {
        level
    });
}
function fjt(e) {
    if (e === "outcome_of") {
        return "verbose";
    }
    return "debug";
}
export { oc, fjt };
