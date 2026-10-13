class l {
    implementation = null;
    isC4EUpsellCommandEnabled() {
        if (this.implementation === null) {
            return false;
        }
        return this.implementation();
    }
    register(e) {
        this.implementation = e;
    }
}
const Pro = new l;
function ras(e) {
    Pro.register(e.isC4EUpsellCommandEnabled);
}
export { Pro, ras };
