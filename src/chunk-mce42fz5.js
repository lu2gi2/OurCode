import { B1r } from "/$bunfs/root/chunk-y10by25k.js";
import { dlt } from "/$bunfs/root/chunk-zdj680mx.js";
function thn(i) {
    let { parse } = dlt();
    let r = B1r();
    let t = false;
    try {
        let a = parse(i, {
            ecmaVersion: "latest",
            sourceType: "module",
            allowAwaitOutsideFunction: true,
            allowReturnOutsideFunction: true
        });
        r.simple(a, {
            MemberExpression (e) {
                if (e.computed || e.object.type !== "Identifier" || e.property.type !== "Identifier") {
                    return;
                }
                let name = e.object.name;
                let name_1 = e.property.name;
                if (name === "Date" && name_1 === "now" || name === "Math" && name_1 === "random") {
                    t = true;
                }
            },
            NewExpression (e) {
                if (e.callee.type === "Identifier" && e.callee.name === "Date" && e.arguments.length === 0) {
                    t = true;
                }
            }
        });
    } catch  {
        return false;
    }
    return t;
}
export { thn };
