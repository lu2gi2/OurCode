class a {
    availability = ()=>false;
    register(i) {
        this.availability = i;
    }
    isAvailable() {
        return this.availability();
    }
}
const e = new a;
function cus(i) {
    e.register(i);
}
function SLe() {
    return e.isAvailable();
}
export { cus, SLe };
