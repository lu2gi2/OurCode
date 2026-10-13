import { jBt, Cmn } from "/$bunfs/root/chunk-c8hf55rn.js";
import e from "process";
class UBt {
    constructor(t = e.stdin, r = e.stdout){
        this._stdin = t;
        this._stdout = r;
        this._readBuffer = new jBt;
        this._started = false;
        this._ondata = (s)=>{
            this._readBuffer.append(s);
            this.processReadBuffer();
        };
        this._onerror = (s)=>{
            this.onerror?.(s);
        };
    }
    async start() {
        if (this._started) {
            throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
        }
        this._started = true;
        this._stdin.on("data", this._ondata);
        this._stdin.on("error", this._onerror);
    }
    processReadBuffer() {
        while(true){
            try {
                let t = this._readBuffer.readMessage();
                if (t === null) {
                    break;
                }
                this.onmessage?.(t);
            } catch (error) {
                this.onerror?.(error);
            }
        }
    }
    async close() {
        this._stdin.off("data", this._ondata);
        this._stdin.off("error", this._onerror);
        if (this._stdin.listenerCount("data") === 0) {
            this._stdin.pause();
        }
        this._readBuffer.clear();
        this.onclose?.();
    }
    send(t) {
        return new Promise((resolve)=>{
            let s = Cmn(t);
            if (this._stdout.write(s)) {
                resolve();
            } else {
                this._stdout.once("drain", resolve);
            }
        });
    }
}
export { UBt };
