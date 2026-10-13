import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import { rY } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Bfe, Aje, pLr } from "/$bunfs/root/chunk-daj64yn4.js";
import { cEo, yxs, _xs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const U = C(function(ke, M) {
    const Fe = Le("path");
    M.exports = {
        isSupported: false
    };
});
const h = {
    pxPerToken: 28,
    maxTargetPx: 1568,
    maxTargetTokens: 1568
};
function I(o, pxPerToken) {
    return Math.floor((o - 1) / pxPerToken) + 1;
}
function R(o, r, pxPerToken) {
    return I(o, pxPerToken) * I(r, pxPerToken);
}
function P(o, r, i) {
    let { pxPerToken, maxTargetPx, maxTargetTokens } = i;
    if (o <= maxTargetPx && r <= maxTargetPx && R(o, r, pxPerToken) <= maxTargetTokens) {
        return [
            o,
            r
        ];
    }
    if (r > o) {
        let [n, s] = P(r, o, i);
        return [
            s,
            n
        ];
    }
    let g = o / r;
    let b = o;
    let e = 1;
    while(true){
        if (e + 1 === b) {
            return [
                e,
                Math.max(Math.round(e / g), 1)
            ];
        }
        let n = Math.floor((e + b) / 2);
        let s = Math.max(Math.round(n / g), 1);
        if (n <= maxTargetPx && R(n, s, pxPerToken) <= maxTargetTokens) {
            e = n;
        } else {
            b = n;
        }
    }
}
const v = 0.1;
const D = 1;
const B = `Scale factor in [${v}, ${D}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;
function c() {
    let o = rY();
    if (o.inputModule) {
        return o.inputModule;
    }
    let r = U();
    if (!r.isSupported) {
        throw Error("@ant/computer-use-input is not supported on this platform");
    }
    return o.inputModule = r;
}
const E = 0.75;
const L = 5000;
function w(o, r, i) {
    let d = Math.round(o * i);
    let p = Math.round(r * i);
    return P(d, p, h);
}
async function T() {
    let { stdout, code } = await it("pbpaste", [], {
        useCwd: false
    });
    if (code !== 0) {
        throw Error(`pbpaste exited with code ${code}`);
    }
    return stdout;
}
async function x(input) {
    let { code } = await it("pbcopy", [], {
        input,
        useCwd: false
    });
    if (code !== 0) {
        throw Error(`pbcopy exited with code ${code}`);
    }
}
function F(o) {
    if (o.length !== 1) {
        return false;
    }
    let r = o[0].toLowerCase();
    return r === "escape" || r === "esc";
}
const _ = 50;
const N = 50;
async function A(o, r, i) {
    await o.moveMouse(r, i, false);
    await Q(_);
}
async function k(o, r) {
    let i;
    while((i = r.pop()) !== undefined){
        try {
            await o.key(i, "release");
        } catch  {}
    }
}
async function O(o, r, i) {
    let d = [];
    try {
        for (let p of r){
            await o.key(p, "press");
            d.push(p);
        }
        return await i();
    } finally{
        await k(o, d);
    }
}
async function H(o, r) {
    let i;
    try {
        i = await T();
    } catch  {
        t("[computer-use] pbpaste before paste failed; proceeding without restore");
    }
    try {
        await x(r);
        if (await T() !== r) {
            throw Error("Clipboard write did not round-trip.");
        }
        await o.keys([
            "command",
            "v"
        ]);
        await Q(100);
    } finally{
        if (typeof i === "string") {
            try {
                await x(i);
            } catch  {
                t("[computer-use] clipboard restore after paste failed");
            }
        }
    }
}
async function z(o, r, i, d) {
    if (!d) {
        await A(o, r, i);
        return;
    }
    let p = await o.mouseLocation();
    let f = r - p.x;
    let g = i - p.y;
    let b = Math.hypot(f, g);
    if (b < 1) {
        return;
    }
    let e = Math.min(b / 2000, 0.5);
    if (e < 0.03) {
        await A(o, r, i);
        return;
    }
    let n = 60;
    let s = 1000 / n;
    let a = Math.floor(e * n);
    for(let u = 1; u <= a; u++){
        let m = u / a;
        let y = 1 - (1 - m) ** 3;
        await o.moveMouse(Math.round(p.x + f * y), Math.round(p.y + g * y), false);
        if (u < a) {
            await Q(s);
        }
    }
    await Q(_);
}
export function createCliExecutor(o) {
    throw Error("createCliExecutor called on linux. Computer control is macOS-only.");
}
export async function unhideComputerUseApps(o) {
    if (o.length === 0) {
        return;
    }
    await Bfe().apps.unhide([
        ...o
    ]);
}
