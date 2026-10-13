import { Fye, dB } from "/$bunfs/root/chunk-yq147k4z.js";
function Wn(e, r, o = "foreground") {
    return (t)=>{
        if (!e) {
            return t;
        }
        if (e.startsWith("rgb(") || e.startsWith("#") || e.startsWith("ansi256(") || e.startsWith("ansi:")) {
            return Fye(t, e, o);
        }
        let i = typeof r === "string" ? dB(r) : r;
        return Fye(t, i[e], o);
    };
}
export { Wn };
