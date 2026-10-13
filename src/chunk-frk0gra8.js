import { UBt } from "/$bunfs/root/chunk-sd3r47sk.js";
class eUt extends UBt {
    constructor(t, e){
        super(t, e);
        let o = this._ondata;
        this._ondata = (r)=>o(typeof r === "string" ? Buffer.from(r, "utf8") : r);
    }
}
export { eUt };
