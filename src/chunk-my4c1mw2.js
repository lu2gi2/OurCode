import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Gv } from "/$bunfs/root/chunk-craerjpn.js";
import { D1 } from "/$bunfs/root/chunk-98pm569t.js";
class u {
    buffer = "";
    capturing = false;
    readableHandler = null;
}
const f = new q(()=>new u);
function o() {
    return f.of(B().host);
}
function XBs() {
    let e = o();
    if (!process.stdin.isTTY || e.capturing || Gv("-p") || Gv("--print")) {
        return;
    }
    e.capturing = true;
    e.buffer = "";
    try {
        process.stdin.setEncoding("utf8");
        process.stdin.setRawMode(true);
        process.stdin.ref();
        e.readableHandler = ()=>{
            let n = process.stdin.read();
            while(n !== null){
                if (typeof n === "string") {
                    l(n);
                }
                n = process.stdin.read();
            }
        };
        process.stdin.on("readable", e.readableHandler);
    } catch  {
        e.capturing = false;
    }
}
function l(e) {
    let n = o();
    let t = 0;
    while(t < e.length){
        let a = e[t];
        let i = a.charCodeAt(0);
        if (i === 3) {
            sK();
            process.exit(130);
            return;
        }
        if (i === 4) {
            sK();
            return;
        }
        if (i === 127 || i === 8) {
            if (n.buffer.length > 0) {
                let r = D1(n.buffer);
                n.buffer = n.buffer.slice(0, -(r.length || 1));
            }
            t++;
            continue;
        }
        if (i === 27) {
            t++;
            let r = t < e.length ? e.charCodeAt(t) : -1;
            if (r === 91) {
                t++;
                while(t < e.length && e.charCodeAt(t) < 64){
                    t++;
                }
                if (t < e.length) {
                    t++;
                }
            } else if (r === 93 || r === 80 || r === 88 || r === 94 || r === 95) {
                t++;
                while(t < e.length){
                    let s = e.charCodeAt(t);
                    if (s === 7) {
                        t++;
                        break;
                    }
                    if (s === 27 && t + 1 < e.length && e.charCodeAt(t + 1) === 92) {
                        t += 2;
                        break;
                    }
                    t++;
                }
            } else if (r === 79) {
                t += 2;
            } else if (r !== -1 && r !== 27) {
                t++;
            }
            continue;
        }
        if (i < 32 && i !== 9 && i !== 10 && i !== 13) {
            t++;
            continue;
        }
        if (i === 13) {
            n.buffer += `
`;
            t++;
            continue;
        }
        n.buffer += a;
        t++;
    }
}
function sK() {
    let e = o();
    if (!e.capturing) {
        return;
    }
    e.capturing = false;
    if (e.readableHandler) {
        process.stdin.removeListener("readable", e.readableHandler);
        e.readableHandler = null;
    }
}
function Ygt() {
    sK();
    let e = o();
    let n = e.buffer.trim();
    e.buffer = "";
    return n;
}
function fUt() {
    return o().buffer.trim().length > 0;
}
function mUt(e) {
    o().buffer = e;
}
export { XBs, sK, Ygt, fUt, mUt };
