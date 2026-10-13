class e {
    availability = ()=>false;
    register(i) {
        this.availability = i;
    }
    isAvailable() {
        return this.availability();
    }
}
const a = new e;
function n6o(i) {
    a.register(i);
}
function Xb() {
    return a.isAvailable();
}
export { n6o, Xb };
