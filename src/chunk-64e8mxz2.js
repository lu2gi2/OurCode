class r {
    peer;
    closed = false;
    onclose;
    onerror;
    onmessage;
    _setPeer(e) {
        this.peer = e;
    }
    async start() {}
    async send(e) {
        if (this.closed) {
            throw Error("Transport is closed");
        }
        queueMicrotask(()=>{
            this.peer?.onmessage?.(e);
        });
    }
    async close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.onclose?.();
        if (this.peer && !this.peer.closed) {
            this.peer.closed = true;
            this.peer.onclose?.();
        }
    }
}
export function createLinkedTransportPair() {
    let e = new r;
    let s = new r;
    e._setPeer(s);
    s._setPeer(e);
    return [
        e,
        s
    ];
}
