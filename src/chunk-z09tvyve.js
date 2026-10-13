let r;
r = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("crypto").then((e)=>e.webcrypto);
async function i(e) {
    return (await r).getRandomValues(new Uint8Array(e));
}
async function l(e) {
    let t = "";
    let c = await i(e);
    for(let n = 0; n < e; n++){
        let o = c[n] % 66;
        t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[o];
    }
    return t;
}
async function s(e) {
    return await l(e);
}
async function u(code_verifier) {
    let a = await (await r).subtle.digest("SHA-256", new TextEncoder().encode(code_verifier));
    return btoa(String.fromCharCode(...new Uint8Array(a))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function w1t(e) {
    if (!e) {
        e = 43;
    }
    if (e < 43 || e > 128) {
        throw `Expected a length between 43 and 128. Received ${e}.`;
    }
    let code_verifier = await s(e);
    let code_challenge = await u(code_verifier);
    return {
        code_verifier,
        code_challenge
    };
}
export { w1t };
