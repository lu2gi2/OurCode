import { le, P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function tk(r) {
    let [t, n] = y({
        attempts: 0,
        refused: null
    });
    let refuse = le((refused)=>{
        n((a)=>({
                attempts: a.attempts + 1,
                refused
            }));
    }, []);
    let answer = le((e)=>{
        if (r(e) === false) {
            refuse(e);
            return false;
        }
        return true;
    }, [
        r,
        refuse
    ]);
    P(()=>{
        if (t.refused !== null) {
            n((e)=>({
                    attempts: e.attempts,
                    refused: null
                }));
        }
    }, [
        t.refused
    ]);
    return {
        answer,
        refuse,
        refused: t.refused,
        attempts: t.attempts
    };
}
export { tk };
