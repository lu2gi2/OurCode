import { K, cr, Kr, EC, Kxo, Km, Swe, m6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { KZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { YF } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Gut, nA } from "/$bunfs/root/chunk-3yz9zdww.js";
import { nse } from "/$bunfs/root/chunk-t0b6khh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { randomUUID } from "crypto";
import { readFileSync } from "fs";
import { mkdir } from "fs/promises";
import { join } from "path";
const k = [
    {
        min: 0,
        max: 59
    },
    {
        min: 0,
        max: 23
    },
    {
        min: 1,
        max: 31
    },
    {
        min: 1,
        max: 12
    },
    {
        min: 0,
        max: 6
    }
];
function x(r, { min, max }) {
    let i = new Set;
    for (let a of r.split(",")){
        let o = a.match(/^\*(?:\/(\d+))?$/);
        if (o) {
            let u = o[1] ? parseInt(o[1], 10) : 1;
            if (u < 1) {
                return null;
            }
            for(let f = min; f <= max; f += u){
                i.add(f);
            }
            continue;
        }
        let d = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
        if (d) {
            let u = parseInt(d[1], 10);
            let f = parseInt(d[2], 10);
            let g = d[3] ? parseInt(d[3], 10) : 1;
            let y = min === 0 && max === 6;
            let l = y ? 7 : max;
            if (u > f || g < 1 || u < min || f > l) {
                return null;
            }
            for(let m = u; m <= f; m += g){
                i.add(y && m === 7 ? 0 : m);
            }
            continue;
        }
        if (a.match(/^\d+$/)) {
            let u = parseInt(a, 10);
            if (min === 0 && max === 6 && u === 7) {
                u = 0;
            }
            if (u < min || u > max) {
                return null;
            }
            i.add(u);
            continue;
        }
        return null;
    }
    if (i.size === 0) {
        return null;
    }
    return Array.from(i).sort((a, o)=>a - o);
}
function V2(r) {
    let s = r.trim().split(/\s+/);
    if (s.length !== 5) {
        return null;
    }
    let n = [];
    for(let e = 0; e < 5; e++){
        let i = x(s[e], k[e]);
        if (!i) {
            return null;
        }
        n.push(i);
    }
    return {
        minute: n[0],
        hour: n[1],
        dayOfMonth: n[2],
        month: n[3],
        dayOfWeek: n[4]
    };
}
function kAt(r, s) {
    let n = new Set(r.minute);
    let e = new Set(r.hour);
    let i = new Set(r.dayOfMonth);
    let a = new Set(r.month);
    let o = new Set(r.dayOfWeek);
    let d = r.dayOfMonth.length === 31;
    let p = r.dayOfWeek.length === 7;
    let u = new Date(s.getTime());
    u.setSeconds(0, 0);
    u.setMinutes(u.getMinutes() + 1);
    let f = 527040;
    for(let g = 0; g < f; g++){
        let y = u.getMonth() + 1;
        if (!a.has(y)) {
            u.setMonth(u.getMonth() + 1, 1);
            u.setHours(0, 0, 0, 0);
            continue;
        }
        let l = u.getDate();
        let m = u.getDay();
        if (!(d && p ? true : d ? o.has(m) : p ? i.has(l) : i.has(l) || o.has(m))) {
            u.setDate(u.getDate() + 1);
            u.setHours(0, 0, 0, 0);
            continue;
        }
        if (!e.has(u.getHours())) {
            u.setHours(u.getHours() + 1, 0, 0, 0);
            continue;
        }
        if (!n.has(u.getMinutes())) {
            u.setMinutes(u.getMinutes() + 1);
            continue;
        }
        return u;
    }
    return null;
}
const b = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
function T(r, s) {
    return new Date(2000, 0, 1, s, r).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}
function w(r, s) {
    let n = new Date;
    n.setUTCHours(s, r, 0, 0);
    return n.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short"
    });
}
function FA(r, s) {
    let n = s?.utc ?? false;
    let e = r.trim().split(/\s+/);
    if (e.length !== 5) {
        return r;
    }
    let [i, a, o, d, p] = e;
    if (a === "*" && o === "*" && d === "*" && p === "*") {
        if (i === "*") {
            return "Every minute";
        }
        let l = i.match(/^\*\/(\d+)$/);
        if (l) {
            let m = parseInt(l[1], 10);
            if (m === 1) {
                return "Every minute";
            }
            return `Every ${m} minutes`;
        }
    }
    if (i.match(/^\d+$/) && a === "*" && o === "*" && d === "*" && p === "*") {
        let l = parseInt(i, 10);
        if (l === 0) {
            return "Every hour";
        }
        return `Every hour at :${l.toString().padStart(2, "0")}`;
    }
    let u = a.match(/^\*\/(\d+)$/);
    if (i.match(/^\d+$/) && u && o === "*" && d === "*" && p === "*") {
        let l = parseInt(u[1], 10);
        let m = parseInt(i, 10);
        let h = m === 0 ? "" : ` at :${m.toString().padStart(2, "0")}`;
        if (l === 1) {
            return `Every hour${h}`;
        }
        return `Every ${l} hours${h}`;
    }
    if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) {
        return r;
    }
    let f = parseInt(i, 10);
    let g = parseInt(a, 10);
    let y = n ? w : T;
    if (o === "*" && d === "*" && p === "*") {
        return `Every day at ${y(f, g)}`;
    }
    if (o === "*" && d === "*" && p.match(/^\d$/)) {
        let l = parseInt(p, 10) % 7;
        let m;
        if (n) {
            let h = new Date;
            let M = (l - h.getUTCDay() + 7) % 7;
            h.setUTCDate(h.getUTCDate() + M);
            h.setUTCHours(g, f, 0, 0);
            m = b[h.getDay()];
        } else {
            m = b[l];
        }
        if (m) {
            return `Every ${m} at ${y(f, g)}`;
        }
    }
    if (o === "*" && d === "*" && p === "1-5") {
        return `Weekdays at ${y(f, g)}`;
    }
    return r;
}
function eLe(r) {
    let s = r.trim();
    if (s === "") {
        return {
            error: "required"
        };
    }
    let n = s.match(/^(\d+)\s*([smhd])$/i);
    if (n) {
        let e = parseInt(n[1], 10);
        let i = n[2].toLowerCase();
        if (e < 1) {
            return {
                error: "interval must be at least 1"
            };
        }
        let a;
        switch(i){
            case "s":
                return {
                    error: "minimum interval is 1 minute"
                };
            case "m":
                if (e > 59) {
                    return {
                        error: "minute interval must be 1–59 (use hours instead)"
                    };
                }
                a = e === 1 ? "* * * * *" : `*/${e} * * * *`;
                break;
            case "h":
                if (e > 23) {
                    return {
                        error: "hour interval must be 1–23 (use days instead)"
                    };
                }
                a = e === 1 ? "0 * * * *" : `0 */${e} * * *`;
                break;
            case "d":
                if (e === 1) {
                    a = "0 0 * * *";
                    break;
                }
                if (e > 28) {
                    return {
                        error: "day interval must be 1–28 (use a cron expression)"
                    };
                }
                a = `0 0 */${e} * *`;
                break;
            default:
                return {
                    error: "unknown interval unit"
                };
        }
        return {
            cron: a,
            human: FA(a)
        };
    }
    if (V2(s) !== null) {
        return {
            cron: s,
            human: FA(s)
        };
    }
    return {
        error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)"
    };
}
const rMn = 300000;
const D = /^\*\/\d+ \* \* \* \*$/;
const A = join(".claude", "scheduled_tasks.json");
function vAe(r) {
    return join(r ?? cr(), A);
}
function oMn(r) {
    return r === undefined && Kr() !== null;
}
async function S5t(r) {
    if (oMn(r)) {
        return [];
    }
    let s = ie();
    let n;
    try {
        n = await s.readFile(vAe(r), {
            encoding: "utf-8"
        });
    } catch (error) {
        if (jt(error)) {
            return [];
        }
        c(error);
        return [];
    }
    let e = mt(n, false);
    if (!e || typeof e !== "object") {
        return [];
    }
    let i = e;
    if (!Array.isArray(i.tasks)) {
        return [];
    }
    let a = [];
    for (let o of i.tasks){
        if (!o || typeof o.id !== "string" || typeof o.cron !== "string" || typeof o.prompt !== "string" || typeof o.createdAt !== "number") {
            t(`[ScheduledTasks] skipping malformed task: ${_(o)}`);
            continue;
        }
        if (!V2(o.cron)) {
            t(`[ScheduledTasks] skipping task ${o.id} with invalid cron '${o.cron}'`);
            continue;
        }
        a.push({
            id: o.id,
            cron: o.cron,
            prompt: o.prompt,
            createdAt: o.createdAt,
            ...typeof o.lastFiredAt === "number" && {
                lastFiredAt: o.lastFiredAt
            },
            ...o.recurring && {
                recurring: true
            },
            ...o.permanent && {
                permanent: true
            },
            ...typeof o.createdBySessionId === "string" && {
                createdBySessionId: o.createdBySessionId
            },
            ...typeof o.createdByPid === "number" && {
                createdByPid: o.createdByPid
            },
            ...typeof o.createdByProcStart === "string" && {
                createdByProcStart: o.createdByProcStart
            },
            ...typeof o.createdInProject === "string" && {
                createdInProject: o.createdInProject
            }
        });
    }
    return a;
}
function Boo(r) {
    return EC() || Kxo(r ?? cr());
}
function cfr(r) {
    if (oMn(r)) {
        return false;
    }
    if (Boo(r)) {
        return false;
    }
    let s;
    try {
        s = readFileSync(vAe(r), "utf-8");
    } catch  {
        return false;
    }
    let n = mt(s, false);
    if (!n || typeof n !== "object") {
        return false;
    }
    let n_tasks = n.tasks;
    return Array.isArray(n_tasks) && n_tasks.length > 0;
}
async function sMn(r, s) {
    if (oMn(s)) {
        throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
    }
    let n = s ?? cr();
    let checkParentDir = !KZ(join(n, ".claude"));
    if (checkParentDir) {
        await Gut(n, join(n, ".claude"));
    }
    await mkdir(join(n, ".claude"), {
        recursive: true
    });
    let i = {
        tasks: r.map(({ durable, ...rest })=>rest)
    };
    await nA(vAe(n), _(i, null, 2) + `
`, {
        encoding: "utf-8",
        allowSymlink: !checkParentDir,
        checkParentDir,
        stagingDir: join(n, ".claude", YF)
    });
}
async function vot(cron, prompt, n, e, agentId) {
    let id = randomUUID().slice(0, 8);
    let o = {
        id,
        cron,
        prompt,
        createdAt: Date.now(),
        ...n && {
            recurring: true
        }
    };
    if (!e) {
        Swe({
            ...o,
            ...agentId && {
                agentId
            }
        });
        return id;
    }
    let d = await S5t();
    d.push({
        ...o,
        createdBySessionId: K(),
        createdByPid: process.pid,
        createdByProcStart: nse(),
        createdInProject: cr()
    });
    await sMn(d);
    return id;
}
async function e_e(r, s) {
    if (r.length === 0) {
        return;
    }
    if (s === undefined && m6(r) === r.length) {
        return;
    }
    let n = new Set(r);
    let e = await S5t(s);
    let i = e.filter((a)=>!n.has(a.id));
    if (i.length === e.length) {
        return;
    }
    await sMn(i, s);
}
async function Dcs(r, s, n) {
    if (r.length === 0) {
        return;
    }
    let e = new Set(r);
    let i = await S5t(n);
    let a = false;
    for (let o of i){
        if (e.has(o.id)) {
            o.lastFiredAt = s;
            a = true;
        }
    }
    if (!a) {
        return;
    }
    await sMn(i, n);
}
async function nre(r) {
    let s = await S5t(r);
    if (r !== undefined) {
        return s;
    }
    let n = Km().map((e)=>({
            ...e,
            durable: false
        }));
    return [
        ...s,
        ...n
    ];
}
function fKe(r, s) {
    let n = V2(r);
    if (!n) {
        return null;
    }
    let e = kAt(n, new Date(s));
    if (e) {
        return e.getTime();
    }
    return null;
}
const c5 = {
    recurringFrac: 0.5,
    recurringCapMs: 1800000,
    oneShotMaxMs: 90000,
    oneShotFloorMs: 0,
    oneShotMinuteMod: 30,
    recurringMaxAgeMs: 604800000,
    cacheLeadMs: 15000
};
function C(r) {
    let s = parseInt(r.slice(0, 8), 16) / 4294967296;
    if (Number.isFinite(s)) {
        return s;
    }
    return 0;
}
function w5t(r, s, n, e = c5) {
    let i = fKe(r, s);
    if (i === null) {
        return null;
    }
    let a = fKe(r, i);
    if (a === null) {
        return i;
    }
    let o = a - i;
    if (D.test(r) && e.cacheLeadMs > 0 && e.cacheLeadMs < o && o >= rMn && o - e.cacheLeadMs < rMn) {
        return s + o - e.cacheLeadMs;
    }
    let d = Math.min(C(n) * e.recurringFrac * o, e.recurringCapMs);
    return i + d;
}
function iMn(r, s, n, e = c5) {
    let i = fKe(r, s);
    if (i === null) {
        return null;
    }
    if (new Date(i).getMinutes() % e.oneShotMinuteMod !== 0) {
        return i;
    }
    let a = e.oneShotFloorMs + C(n) * (e.oneShotMaxMs - e.oneShotFloorMs);
    return Math.max(i - a, s);
}
function Lcs(r, s) {
    return r.filter((n)=>{
        let e = fKe(n.cron, n.createdAt);
        return e !== null && e < s;
    });
}
export { V2, kAt, FA, eLe, rMn, vAe, oMn, S5t, Boo, cfr, sMn, vot, e_e, Dcs, nre, fKe, c5, w5t, iMn, Lcs };
