import { Fn, k, M6e, RY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { dR, IQt, OQt } from "/$bunfs/root/chunk-md7g8y4m.js";
const Sve = "tengu_violin_willow";
function bun() {
    try {
        let { value, source } = Fn(Sve, false);
        if (RY(source)) {
            return value === true;
        }
        return undefined;
    } catch  {
        return;
    }
}
function xje() {
    try {
        return k(Sve, false);
    } catch  {
        return false;
    }
}
function Pje() {
    return OQt() && bun() === true;
}
function LIe({ cloudClient }) {
    if (IQt()) {
        return "tengu_violin_wood";
    }
    if (cloudClient && bun() === false) {
        return Sve;
    }
}
async function CLr({ cloudClient }) {
    try {
        return await dR() && (!cloudClient || await M6e(Sve));
    } catch  {
        return false;
    }
}
export { Sve, bun, xje, Pje, LIe, CLr };
