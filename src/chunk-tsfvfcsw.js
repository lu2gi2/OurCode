import { Yy } from "/$bunfs/root/chunk-24agvrd9.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Kd } from "/$bunfs/root/chunk-yp41169e.js";
function Mm(r) {
    console.error(ge.red(r));
}
function an(r, e = "cli_error") {
    if (r) {
        Mm(r);
    }
    Yy(e);
    process.exit(1);
}
function QL(r) {
    if (r) {
        process.stdout.write(r + `
`);
    }
    process.exit(0);
}
function XJt(r) {
    process.exit(r);
}
async function Yu(r) {
    await new Promise((resolve)=>{
        process.stdout.write(r, ()=>resolve());
    });
}
function HE(r) {
    process.stderr.write(ge.yellow(Kd(r)) + `
`);
}
async function nF() {
    try {
        let { flushAnalyticsSinks } = await import("/$bunfs/root/chunk-88x2y7v3.js");
        await flushAnalyticsSinks();
    } catch  {}
}
async function xo(r) {
    await nF();
    process.exit(r);
}
async function Vo(r) {
    if (r) {
        Mm(r);
    }
    await nF();
    return an();
}
async function DE(r) {
    if (r) {
        process.stdout.write(r + `
`);
    }
    await nF();
    return QL();
}
export { Mm, an, QL, XJt, Yu, HE, nF, xo, Vo, DE };
