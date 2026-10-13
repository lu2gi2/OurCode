import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const l = [
    "·",
    "✢",
    "✳",
    "✶",
    "✻",
    "✻"
];
const g = [
    "·",
    "✢",
    "✳",
    "✶",
    "✻",
    "✽"
];
const p = [
    "·",
    "✢",
    "*",
    "✶",
    "✻",
    "✽"
];
const d = [
    ...l,
    ...l.toReversed()
];
const y = [
    ...g,
    ...g.toReversed()
];
const f = [
    ...p,
    ...p.toReversed()
];
function Idn() {
    if (a.TERM === "xterm-ghostty") {
        return l;
    }
    return p;
}
function TIe() {
    if (a.TERM === "xterm-ghostty") {
        return d;
    }
    return f;
}
const T = 8;
function hA(r) {
    return Math.round(r * T) / T;
}
function L$t(r) {
    return hA(r / 360) * 360;
}
function AIe(r, t) {
    return (1 - Math.cos(2 * Math.PI * r / t)) / 2;
}
function Fh(r, t, i) {
    return {
        r: Math.round(r.r + (t.r - r.r) * i),
        g: Math.round(r.g + (t.g - r.g) * i),
        b: Math.round(r.b + (t.b - r.b) * i)
    };
}
function bm(r) {
    return `rgb(${r.r},${r.g},${r.b})`;
}
function N$t(r) {
    let t = (r % 360 + 360) % 360;
    let i = 0.7;
    let m = 0.6;
    let e = (1 - Math.abs(0.19999999999999996)) * 0.7;
    let n = e * (1 - Math.abs(t / 60 % 2 - 1));
    let R = 0.6 - e / 2;
    let o = 0;
    let s = 0;
    let u = 0;
    if (t < 60) {
        o = e;
        s = n;
    } else if (t < 120) {
        o = n;
        s = e;
    } else if (t < 180) {
        s = e;
        u = n;
    } else if (t < 240) {
        s = n;
        u = e;
    } else if (t < 300) {
        o = n;
        u = e;
    } else {
        o = e;
        u = n;
    }
    return {
        r: Math.round((o + R) * 255),
        g: Math.round((s + R) * 255),
        b: Math.round((u + R) * 255)
    };
}
function ab(r) {
    let t = r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
    if (t) {
        return {
            r: parseInt(t[1], 10),
            g: parseInt(t[2], 10),
            b: parseInt(t[3], 10)
        };
    }
    return null;
}
export { Idn, TIe, hA, L$t, AIe, Fh, bm, N$t, ab };
