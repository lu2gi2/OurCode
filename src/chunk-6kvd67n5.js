const v0n = [
    "mcp__Claude_Preview__",
    "mcp__Claude_Browser__",
    "mcp__remote-devices__Claude_Browser__"
];
const hco = "mcp__claude-device__chrome_";
const L_e = [
    "mcp__claude-in-chrome__",
    "mcp__Claude_in_Chrome__",
    "mcp__remote-devices__claude-in-chrome__",
    "mcp__remote-devices__Claude_in_Chrome__",
    "mcp__claude-device__chrome_",
    ...v0n
];
function r(_) {
    if (!_.startsWith("mcp__claude-device__chrome_")) {
        return null;
    }
    let e = _.slice(27);
    if (e === "" || e.startsWith("_") || e.includes("__")) {
        return null;
    }
    return e;
}
function yco(_) {
    let e = r(_);
    if (e === null) {
        return _;
    }
    return `mcp__claude-in-chrome__${e}`;
}
function Ffs(_, e) {
    let n = r(_);
    if (n !== null && e === `chrome_${n}`) {
        return n;
    }
    return e;
}
const t = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function mhr(_) {
    return _.replace(t, (e)=>{
        if (e === "mcp__claude-device__chrome_") {
            return "mcp__claude-in-chrome__";
        }
        return yco(e);
    });
}
function AB(_) {
    return L_e.some((e)=>_.startsWith(e));
}
function _co(_) {
    return v0n.some((e)=>_.startsWith(e));
}
export { v0n, hco, L_e, yco, Ffs, mhr, AB, _co };
