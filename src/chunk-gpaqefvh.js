import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function aw(a) {
    let l = w(2);
    let { url } = a;
    let t;
    if (l[0] !== url) {
        t = r(n, {
            dimColor: true,
            children: [
                "Learn more: ",
                e(Wt, {
                    url
                })
            ]
        });
        l[0] = url;
        l[1] = t;
    } else {
        t = l[1];
    }
    return t;
}
export { aw };
