import { rL } from "/$bunfs/root/chunk-vw7x8ctj.js";
class jBt {
    append(e) {
        this._buffer = this._buffer ? Buffer.concat([
            this._buffer,
            e
        ]) : e;
    }
    readMessage() {
        if (!this._buffer) {
            return null;
        }
        let e = this._buffer.indexOf(`
`);
        if (e === -1) {
            return null;
        }
        let r = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(e + 1);
        return t1r(r);
    }
    clear() {
        this._buffer = undefined;
    }
}
function t1r(e) {
    return rL.parse(JSON.parse(e));
}
function Cmn(e) {
    return JSON.stringify(e) + `
`;
}
export { jBt, t1r, Cmn };
