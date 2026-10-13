import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { createServer } from "http";
function b1t(n) {
    let r = Array.isArray(n) ? n[0] : n;
    if (r) {
        return r;
    }
}
const range = O() === "windows" ? {
    min: 39152,
    max: 49151
} : {
    min: 49152,
    max: 65535
};
const fallback = 3118;
const p = {
    range,
    fallback
};
function IWe(n = fallback) {
    return `http://localhost:${n}/callback`;
}
function P() {
    let a_MCP_OAUTH_CALLBACK_PORT = a.MCP_OAUTH_CALLBACK_PORT;
    if (a_MCP_OAUTH_CALLBACK_PORT !== undefined && a_MCP_OAUTH_CALLBACK_PORT <= 65535) {
        return a_MCP_OAUTH_CALLBACK_PORT;
    }
}
async function eEe(n, r = p) {
    let t = P();
    if (t) {
        return t;
    }
    if (n && await u(n)) {
        return n;
    }
    let { min, max } = r.range;
    let i = max - min + 1;
    let l = Math.min(i, 100);
    for(let d = 0; d < l; d++){
        let c = min + Math.floor(Math.random() * i);
        if (await u(c)) {
            return c;
        }
    }
    if (await u(r.fallback)) {
        return r.fallback;
    }
    let s = await m(0);
    if (s !== undefined) {
        return s;
    }
    throw Error("No available ports for OAuth redirect");
}
async function u(n) {
    return await m(n) !== undefined;
}
async function m(n) {
    try {
        return await new Promise((resolve, reject)=>{
            let e = createServer();
            e.once("error", reject);
            e.listen(n, "127.0.0.1", ()=>{
                let o = e.address();
                let i = typeof o === "object" && o ? o.port : undefined;
                e.close(()=>{
                    if (i !== undefined) {
                        return resolve(i);
                    }
                    return reject(Error("no address on bound server"));
                });
            });
        });
    } catch  {
        return;
    }
}
export { b1t, IWe, eEe };
