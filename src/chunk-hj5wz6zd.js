function GL(n) {
    if (typeof n === "string") {
        return n.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
    }
    return "";
}
function V4e(n) {
    if (typeof n === "string") {
        return n.replace(/(?![\n\t])[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
    }
    return "";
}
export { GL, V4e };
