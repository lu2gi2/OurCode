import { qxr } from "/$bunfs/root/chunk-ctt36bn8.js";
const ND = {
    red: "red_FOR_SUBAGENTS_ONLY",
    blue: "blue_FOR_SUBAGENTS_ONLY",
    green: "green_FOR_SUBAGENTS_ONLY",
    yellow: "yellow_FOR_SUBAGENTS_ONLY",
    purple: "purple_FOR_SUBAGENTS_ONLY",
    orange: "orange_FOR_SUBAGENTS_ONLY",
    pink: "pink_FOR_SUBAGENTS_ONLY",
    cyan: "cyan_FOR_SUBAGENTS_ONLY"
};
const U_ = Object.keys(ND);
function EW(e) {
    return e !== undefined && U_.includes(e);
}
function uLe(e) {
    return e.userOverride ?? e.agentDefinitionColor;
}
function pLe(e) {
    if (e === "general-purpose") {
        return;
    }
    let n = qxr().get(e);
    if (n && U_.includes(n)) {
        return ND[n];
    }
}
function Kot(e, o) {
    let n = qxr();
    if (!o) {
        n.delete(e);
        return;
    }
    if (U_.includes(o)) {
        n.set(e, o);
    }
}
export { ND, U_, EW, uLe, pLe, Kot };
