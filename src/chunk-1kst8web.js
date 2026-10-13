import { un } from "/$bunfs/root/chunk-bd805sh6.js";
import { Vdn } from "/$bunfs/root/chunk-066dgc2r.js";
import { qt, en, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { yA, kG } from "/$bunfs/root/chunk-8524cxt8.js";
import { Y, e } from "/$bunfs/root/chunk-vybw69ke.js";
import { PassThrough } from "stream";
N();
function value() {}
const Omt = qt(false);
function qP(r) {
    let i = w(5);
    let { children } = r;
    let { exit } = yA();
    let a;
    let o;
    if (i[0] !== exit) {
        a = ()=>{
            let d = setTimeout(exit, 0);
            return ()=>clearTimeout(d);
        };
        o = [
            exit
        ];
        i[0] = exit;
        i[1] = a;
        i[2] = o;
    } else {
        a = i[1];
        o = i[2];
    }
    en(a, o);
    let c;
    if (i[3] !== children) {
        c = e(Y, {
            children
        });
        i[3] = children;
        i[4] = c;
    } else {
        c = i[4];
    }
    return c;
}
async function KP(r, t) {
    r.render(e(qP, {
        children: t
    }));
    await r.waitUntilExit();
}
async function cje(r, { columns, storageV5 }) {
    let i = "";
    let a = false;
    let stdout = new PassThrough;
    if (columns !== undefined) {
        stdout.columns = columns;
    }
    stdout.on("data", (c)=>{
        if (a) {
            return;
        }
        a = true;
        i = c.toString();
    });
    await (await kG(e(qP, {
        children: e(Omt.Provider, {
            value: true,
            children: e(Vdn, {
                value,
                children: r
            })
        })
    }), {
        stdout,
        patchConsole: false
    }, {
        storageV5
    })).waitUntilExit();
    return i;
}
async function gdn(r, t) {
    let n = await cje(r, t);
    return un(n);
}
export { Omt, qP, KP, cje, gdn };
