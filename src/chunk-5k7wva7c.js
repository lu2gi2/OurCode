class i {
    resetters = [];
    built = [];
    lazy(e) {
        let t;
        let r = ()=>{
            t = undefined;
        };
        this.resetters.push(r);
        return ()=>{
            if (t === undefined) {
                t = e();
                this.built.push(r);
            }
            return t;
        };
    }
    builtCount() {
        return this.built.length;
    }
    releaseBuiltSince(e) {
        for (let t of this.built.splice(e)){
            t();
        }
    }
    reset() {
        for (let e of this.resetters){
            e();
        }
        this.built.length = 0;
    }
}
const oCr = new i;
function p(e) {
    return oCr.lazy(e);
}
export { oCr, p };
