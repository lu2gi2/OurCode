import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
const o = /\u2028|\u2029/g;
function Zfe(n) {
    return _(n).replace(o, (r)=>{
        if (r === "\u2028") {
            return "\\u2028";
        }
        return "\\u2029";
    });
}
export { Zfe };
