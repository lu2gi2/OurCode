import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ma } from "/$bunfs/root/chunk-dzxgwxyz.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function ut(y) {
    let x = w(5);
    let { action, context, fallback, description, parens, bold } = y;
    let chord = ma(action, context, fallback);
    let a;
    if (x[0] !== bold || x[1] !== chord || x[2] !== description || x[3] !== parens) {
        a = e(G, {
            chord,
            action: description,
            parens,
            bold
        });
        x[0] = bold;
        x[1] = chord;
        x[2] = description;
        x[3] = parens;
        x[4] = a;
    } else {
        a = x[4];
    }
    return a;
}
export { ut };
