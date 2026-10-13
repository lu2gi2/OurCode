class oD {
    #e = new Map;
    get(e) {
        let t = this.#e.get(e);
        if (t instanceof e) {
            return t;
        }
        let n = new e;
        this.#e.set(e, n);
        return n;
    }
}
export { oD };
