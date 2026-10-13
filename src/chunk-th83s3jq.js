import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
const a = 50;
function SMe() {
    let s = Oe();
    let t = [];
    let n = 0;
    return {
        publish (line, level, notice) {
            let u = notice === undefined ? {
                line,
                level
            } : {
                line,
                level,
                notice
            };
            if (n === 0) {
                t = [
                    ...t,
                    u
                ].slice(-a);
                return;
            }
            s.emit(u);
        },
        takeBacklog () {
            let e = t;
            t = [];
            return e;
        },
        subscribe (e) {
            n += 1;
            let i = s.subscribe(e);
            return ()=>{
                n -= 1;
                i();
            };
        }
    };
}
export { SMe };
