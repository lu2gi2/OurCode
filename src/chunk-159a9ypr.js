class OEe {
    #t = new Map;
    #e = new Map;
    #s = false;
    told(t, s, e) {
        t.noteModelToldAway(e);
        if (t.awayEpisode(e) === undefined) {
            return;
        }
        this.#n(t);
        let i = s ?? "";
        let n = this.#e.get(i);
        if (n !== undefined) {
            n.add(e);
            return;
        }
        let d = [
            ...this.#e.keys()
        ].find((o)=>o !== "");
        if (this.#e.size >= 64 && d !== undefined) {
            this.#e.delete(d);
        }
        this.#e.set(i, new Set([
            e
        ]));
    }
    takeReturn(t, s, e) {
        let i = s ?? "";
        let n = this.#e.get(i);
        if (n?.has(e) !== true || t.awayEpisode(e) !== undefined) {
            return;
        }
        let d = t.takeBackNote(e);
        if (d?.toldModel === true) {
            let r = this.#t.keys().next().value;
            if (!this.#t.has(e) && this.#t.size >= 256 && r !== undefined) {
                this.#t.delete(r);
            }
            this.#t.set(e, d);
        }
        let o = this.#t.get(e);
        if (o === undefined) {
            return;
        }
        this.#i(i, n, e);
        return o.sinceHeardMs;
    }
    clear() {
        this.#t.clear();
        this.#e.clear();
    }
    #i(t, s, e) {
        s.delete(e);
        if (s.size === 0) {
            this.#e.delete(t);
        }
    }
    #n(t) {
        if (this.#s) {
            return;
        }
        this.#s = true;
        t.onAwayEpisodeDropped((s)=>{
            this.#t.delete(s);
            for (let [e, i] of [
                ...this.#e
            ]){
                this.#i(e, i, s);
            }
        });
    }
}
export { OEe };
