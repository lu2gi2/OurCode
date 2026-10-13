import { e1, t1, Eh, ug, cm, Cv } from "/$bunfs/root/chunk-0ycjphb5.js";
function n() {
    let e = Eh();
    if (e === "opus" && e1() && !Cv(ug())) {
        return {
            alias: "opus[1m]",
            name: "Opus 1M",
            multiplier: 5
        };
    } else if (e === "sonnet" && t1() && !Cv(cm())) {
        return {
            alias: "sonnet[1m]",
            name: "Sonnet 1M",
            multiplier: 5
        };
    }
    return null;
}
function zme(e) {
    let t = n();
    if (!t) {
        return null;
    }
    switch(e){
        case "warning":
            return `/model ${t.alias}`;
        case "tip":
            return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
        default:
            return null;
    }
}
export { zme };
