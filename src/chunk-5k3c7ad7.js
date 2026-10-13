function Ede(n) {
    return typeof n === "string" && /^[a-z0-9_]{1,64}$/.test(n);
}
export { Ede };
