class o {
    gate = null;
    register(e) {
        this.gate = e;
    }
    isOpen() {
        return this.gate?.() === true;
    }
}
const r = new o;
function Yhs(e) {
    r.register(e);
}
function Xhs() {
    return r.isOpen();
}
export { Yhs, Xhs };
