const Y1e = "tengu_wise_bear_copy";
function yLo(e) {
    switch(e){
        case "five_hour":
            return "session";
        case "seven_day":
            return "weekly";
        case "seven_day_opus":
        case "seven_day_sonnet":
        case "seven_day_overage_included":
            return "model";
        default:
            return;
    }
}
function rDr(e) {
    return typeof e === "object" && e !== null && Reflect.get(e, "only_if_unused_reset") === true;
}
function _Lo(e, i, u, s) {
    if (typeof e !== "object" || e === null) {
        return;
    }
    if (rDr(e) && s !== true) {
        return;
    }
    let n = Reflect.get(e, `note_${i}`);
    if (typeof n !== "string") {
        return;
    }
    let t = u(n);
    if (t && !(t.endsWith("…") && !n.trimEnd().endsWith("…"))) {
        return t;
    }
}
export { Y1e, yLo, rDr, _Lo };
