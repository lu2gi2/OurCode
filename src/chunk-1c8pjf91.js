const pro = /^[A-Za-z0-9_.:-]{1,128}$/;
function $2(n) {
    if (typeof n === "string" && pro.test(n)) {
        return n;
    }
}
export { pro, $2 };
