import { StringDecoder } from "string_decoder";
const p = 1048576;
function QNt(o, r) {
    let d = new StringDecoder("utf8");
    let e = "";
    let t = false;
    let l = (i)=>{
        if (t) {
            return;
        }
        e += typeof i === "string" ? i : d.write(i);
        let f;
        while((f = e.indexOf(`
`)) >= 0){
            let c = e.slice(0, f);
            e = e.slice(f + 1);
            if (c) {
                r(c);
            }
        }
        if (e.length > p) {
            t = true;
            e = "";
            if ("destroy" in o) {
                o.destroy();
            }
        }
    };
    let n = ()=>{
        if (t) {
            return;
        }
        e += d.end();
        if (e) {
            r(e);
            e = "";
        }
    };
    o.on("data", l);
    o.on("end", n);
    o.on("close", n);
    return ()=>{
        o.off("data", l);
        o.off("end", n);
        o.off("close", n);
    };
}
export { QNt };
