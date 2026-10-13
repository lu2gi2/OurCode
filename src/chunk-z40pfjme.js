import { m5e } from "/$bunfs/root/chunk-k7dkeqsc.js";
import { ne, Qe, FP, dy } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { nPe, L1 } from "/$bunfs/root/chunk-98pm569t.js";
const b = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
};
const I = {
    weekday: "short",
    calendar: "gregory"
};
const M = {
    weekday: "long",
    calendar: "gregory"
};
const N = {
    month: "short",
    calendar: "gregory"
};
const x = {
    month: "long",
    calendar: "gregory"
};
function P(t, e, { locale, timeZone }) {
    let g = L1("en-US", nPe(b, timeZone)).formatToParts(e);
    let i = {};
    for (let T of g){
        i[T.type] = T.value;
    }
    let u = Number(i.year);
    let n = Number(i.month);
    let c = Number(i.day);
    let m = Number(i.hour);
    let p = (m + 11) % 12 + 1;
    let h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
    return t.replace(/%(-?)([\s\S])/g, (T, f, O)=>{
        switch(O){
            case "Y":
                return String(u);
            case "y":
                return s(u % 100, f);
            case "C":
                return s(Math.floor(u / 100), f);
            case "m":
                return s(n, f);
            case "d":
                return s(c, f);
            case "e":
                return y(c, f);
            case "j":
                return _(A(u, n, c), f);
            case "u":
                return String(h === 0 ? 7 : h);
            case "w":
                return String(h);
            case "H":
                return s(m, f);
            case "k":
                return y(m, f);
            case "I":
                return s(p, f);
            case "l":
                return y(p, f);
            case "M":
                return s(Number(i.minute), f);
            case "S":
                return s(Number(i.second), f);
            case "p":
                if (m < 12) {
                    return "AM";
                }
                return "PM";
            case "P":
                if (m < 12) {
                    return "am";
                }
                return "pm";
            case "s":
                return String(Math.floor(e.getTime() / 1000));
            case "a":
                return d(e, locale, timeZone, I);
            case "A":
                return d(e, locale, timeZone, M);
            case "b":
            case "h":
                return d(e, locale, timeZone, N);
            case "B":
                return d(e, locale, timeZone, x);
            case "Z":
                return i.timeZoneName ?? "";
            case "z":
                return Z(e, u, n, c, m, i);
            case "F":
                return `${u}-${s(n, "")}-${s(c, "")}`;
            case "D":
                return `${s(n, "")}/${s(c, "")}/${s(u % 100, "")}`;
            case "T":
                return `${s(m, "")}:${i.minute}:${i.second}`;
            case "R":
                return `${s(m, "")}:${i.minute}`;
            case "r":
                return `${s(p, "")}:${i.minute}:${i.second} ${m < 12 ? "AM" : "PM"}`;
            case "%":
                return "%";
            default:
                return T;
        }
    });
}
function s(t, e) {
    if (e) {
        return String(t);
    }
    return String(t).padStart(2, "0");
}
function _(t, e) {
    if (e) {
        return String(t);
    }
    return String(t).padStart(3, "0");
}
function y(t, e) {
    if (e) {
        return String(t);
    }
    return String(t).padStart(2, " ");
}
function A(t, e, r) {
    return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function d(t, locale, timeZone, o) {
    return L1(locale, nPe(o, timeZone)).format(t);
}
function Z(t, e, r, o, g, i) {
    let u = Date.UTC(e, r - 1, o, g, Number(i.minute), Number(i.second));
    let n = Math.floor(t.getTime() / 1000) * 1000;
    let c = Math.round((u - n) / 60000);
    let m = c < 0 ? "-" : "+";
    let p = Math.abs(c);
    return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
const F = 100;
function gQn(t) {
    return ne(FP(dy(t)), F);
}
function C(t, e) {
    let preset = m5e.find((i)=>i === t);
    if (preset === "24-hour-utc") {
        return {
            kind: "preset",
            preset,
            timeZone: "UTC"
        };
    }
    let o = k(e);
    if (preset) {
        return {
            kind: "preset",
            preset,
            timeZone: o
        };
    }
    let pattern = gQn(t);
    if (pattern.includes("%")) {
        return {
            kind: "pattern",
            pattern,
            timeZone: o
        };
    }
    return {
        kind: "preset",
        preset: "auto",
        timeZone: o
    };
}
function k(t) {
    if (!t) {
        return;
    }
    try {
        L1("en-US", {
            timeZone: t
        });
        return t;
    } catch  {
        return;
    }
}
function D(t, preset, r) {
    switch(preset){
        case "auto":
            return nPe(t, r);
        case "12-hour":
            return nPe({
                ...t,
                hourCycle: "h12"
            }, r);
        case "24-hour":
        case "24-hour-utc":
            return nPe({
                ...t,
                hourCycle: "h23"
            }, r);
    }
}
function hQn(t, e, r, o) {
    let g = L1(r, D(e, t.preset, t.timeZone));
    if (t.preset !== "24-hour-utc") {
        return g.format(o);
    }
    let i = g.formatToParts(o);
    let u = i.findLastIndex((n)=>n.type === "minute" || n.type === "second");
    return i.map((n, c)=>{
        if (c === u) {
            return `${n.value}Z`;
        }
        return n.value;
    }).join("");
}
function l(t, e, r, locale) {
    return ne(P(t, r, {
        locale,
        timeZone: e
    }), F);
}
const L = {
    "2-digit": {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h12"
    },
    numeric: {
        hour: "numeric",
        minute: "2-digit",
        hourCycle: "h12"
    }
};
function RKo(t, e, r, o = "2-digit") {
    if (t.kind === "pattern") {
        return l(t.pattern, t.timeZone, e, r);
    }
    return hQn(t, L[o], "en-US", e);
}
const E = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
};
function xKo(t, e, r, o) {
    let g = t.timeZone ?? o;
    if (t.kind === "pattern") {
        return l(t.pattern, g, e, r);
    }
    let i = D(E, t.preset, g);
    let u = L1("en-US", i).formatToParts(e);
    let n = {};
    for (let p of u){
        n[p.type] = p.value;
    }
    let c = n.dayPeriod ? ` ${n.dayPeriod}` : "";
    let m = "";
    if (t.preset === "24-hour-utc") {
        m = "Z";
    } else if (n.timeZoneName) {
        m = ` ${n.timeZoneName}`;
    }
    return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
const S = new Map;
function gze() {
    let t = a.LC_ALL || a.LC_TIME || a.LANG || "";
    if (S.has(t)) {
        return S.get(t);
    }
    let e = R(t);
    S.set(t, e);
    return e;
}
function R(t) {
    if (!t || t === "C" || t === "POSIX") {
        return;
    }
    let e = Qe(Qe(t, "."), "@");
    if (!e) {
        return;
    }
    let r = e.replaceAll("_", "-");
    try {
        new Intl.DateTimeFormat(r);
        return r;
    } catch  {
        return;
    }
}
function d_t() {
    return C(hs("timeFormat", "auto").value, hs("timeZone", "").value);
}
function PKo(t, e, r) {
    return l(t, e, r, gze());
}
export { gze, gQn, hQn, RKo, xKo, d_t, PKo };
