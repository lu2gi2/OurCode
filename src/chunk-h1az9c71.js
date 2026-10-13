import { ya, Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
function IFo() {
    try {
        let { value, source } = Fn("tengu_radiant_heron", false);
        switch(source){
            case "payload":
            case "override":
                return value === true;
            case "disabled":
                return false;
            case "fallback":
                if (ya()) {
                    return false;
                }
                return "unknown";
            case "disk":
                return "unknown";
        }
    } catch  {
        return "unknown";
    }
}
function OFo() {
    return k("tengu_radiant_heron", false);
}
export { IFo, OFo };
