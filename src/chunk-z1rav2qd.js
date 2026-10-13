import { Hy } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
const FBr = Object.freeze({
    isKept: true,
    isDenied: false,
    context: Object.freeze([])
});
function m() {
    let o = Hy();
    return {
        setPromptMentionRunner: o.set,
        runPromptMention: (r)=>{
            let e = o.get();
            if (e) {
                return e(r);
            }
            return r.read(r.raised, "unhooked").then(()=>FBr);
        }
    };
}
const t = ze(m(), (o)=>o.setPromptMentionRunner(null));
const { runPromptMention: XHs, setPromptMentionRunner: JHs } = t;
export { FBr, XHs, JHs };
