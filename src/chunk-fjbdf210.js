const n = /^req_[A-Za-z0-9_-]{1,36}$/;
function aoe(t) {
    return typeof t === "string" && n.test(t);
}
export { aoe };
