const l = [];
class $me {
    #n = ()=>l;
    #l = ()=>true;
    #t = ()=>false;
    #e = l;
    #s = ()=>false;
    #o;
    #i = new WeakMap;
    provide(o, t = ()=>true, e = ()=>false) {
        this.#n = o;
        this.#l = t;
        this.#t = e;
        this.#o = undefined;
    }
    presentUntilAnnounced(o, t) {
        this.#e = o;
        this.#s = t;
        this.#o = undefined;
    }
    presentable() {
        return this.#l();
    }
    tools() {
        let source = this.#n();
        if (this.#e.some(({ machine })=>this.#t(machine))) {
            let e = this.#e.filter(({ machine })=>!this.#t(machine));
            this.#e = e.length > 0 ? e : l;
        }
        let pending = this.#s() ? this.#e : l;
        if (this.#o === undefined || this.#o.source !== source || this.#o.pending !== pending) {
            let e = [
                ...source,
                ...pending.filter(({ tool, machine })=>!source.some((i)=>i.machine === machine && i.tool.name === tool.name))
            ];
            for (let { tool, machine } of e){
                this.#i.set(tool, machine);
            }
            this.#o = {
                source,
                pending,
                tools: e.map(({ tool })=>tool)
            };
        }
        return this.#o.tools;
    }
    machineFor(o) {
        this.tools();
        return this.#i.get(o);
    }
}
function bEe(o) {
    return o.toolState?.get($me).tools() ?? a;
}
var a = [];
export { $me, bEe };
