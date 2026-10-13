import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const mze = (n)=>{
    if (Ne(n)) {
        return true;
    }
    if (vs(n)) {
        return false;
    }
};
const mQn = (n)=>n === true || n === "true";
function PWt(n) {
    return `It takes a number${n.min !== undefined || n.max !== undefined ? ` between ${n.min ?? "-∞"} and ${n.max ?? "∞"}` : ""}.`;
}
function IWt(n, e) {
    let r = n.trim();
    let t = Number(r);
    if (r !== "" && Number.isFinite(t) && (e.min === undefined || t >= e.min) && (e.max === undefined || t <= e.max)) {
        return t;
    }
}
const OWt = {};
Mr(OWt, {
    booleanOfInput: ()=>mze,
    default: ()=>OWt,
    isHeldTrue: ()=>mQn,
    numberInputHint: ()=>PWt,
    numberOfInput: ()=>IWt
});
export { mze, mQn, PWt, IWt, OWt };
