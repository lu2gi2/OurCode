import { CY, Fn } from "/$bunfs/root/chunk-0ycjphb5.js";
function ld(t, { safe }) {
    try {
        let { value, source } = Fn(t, safe);
        if (value === !safe && source === "payload" && !CY()) {
            return !safe;
        }
        return safe;
    } catch  {
        return safe;
    }
}
export { ld };
