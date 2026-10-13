import { em, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function XP(r) {
    if (typeof r === "string") {
        return r;
    }
    if (typeof r === "number") {
        return String(r);
    }
    if (!r) {
        return "";
    }
    if (Array.isArray(r)) {
        return r.map(XP).join("");
    }
    if (em(r)) {
        return XP(r.props.children);
    }
    return "";
}
export { XP };
