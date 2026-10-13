function L(n) {
    return typeof n === "object" && n !== null && !Array.isArray(n);
}
export { L };
