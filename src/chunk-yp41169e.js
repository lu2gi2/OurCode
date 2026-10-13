import { Ww } from "/$bunfs/root/chunk-qch5xj2a.js";
import { stripVTControlCharacters } from "util";
function Kd(r) {
    return stripVTControlCharacters(Ww(r)).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}
export { Kd };
