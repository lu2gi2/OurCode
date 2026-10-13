import { iot } from "/$bunfs/root/chunk-yq147k4z.js";
import { dQn, vEe } from "/$bunfs/root/chunk-3pnc3jf8.js";
const L4n = (t)=>(e)=>{
        if (!iot(e)) {
            return {
                error: Error("Theme takes the name of a theme")
            };
        }
        t(e);
    };
const N4n = (t, e, r)=>vEe(dQn(e), t, L4n(e.setTheme), r);
export { L4n, N4n };
