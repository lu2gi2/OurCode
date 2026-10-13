import { OY, mi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ur } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ve, Ng } from "/$bunfs/root/chunk-6kc68p18.js";
import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { nw } from "/$bunfs/root/chunk-223dyewd.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { BLe, Xlo, j_, Ygr } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { xxn, Okt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Tet } from "/$bunfs/root/chunk-kasbfbhj.js";
import { join } from "path";
function c(t) {
    return ur(t) !== null;
}
function qln(t, o, n = "  ") {
    let r = join(ve(), "CLAUDE.md");
    let s = join(o, "CLAUDE.md");
    let i = join(o, ".claude", "CLAUDE.md");
    let p = join(o, "CLAUDE.local.md");
    let f = t.some((e)=>e.path === r);
    let g = t.some((e)=>e.path === s);
    let y = [
        ...t.filter((e)=>e.type !== "AutoMem" && !Tet(e.path)).map((e)=>({
                ...e,
                exists: true
            })),
        ...f ? [] : [
            {
                path: r,
                type: "User",
                content: "",
                exists: false
            }
        ],
        ...g ? [] : [
            {
                path: s,
                type: "Project",
                content: "",
                exists: false
            }
        ]
    ];
    let h = c(o);
    let u = new Map;
    return y.map((e)=>{
        let d = os(e.path);
        let a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
        u.set(e.path, a);
        let b = a > 0 ? Ei(n, a - 1) : "";
        let kind = e.type === "User" && e.path === r ? "user" : e.type === "Project" && e.path === s ? "project" : a === 0 && e.type === "Project" && e.path === i ? "project-alt" : a === 0 && e.type === "Local" && e.path === p ? "local" : "other";
        let label = kind === "user" ? "User instructions" : kind === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d;
        let description = e.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : kind === "project" ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md` : e.parent ? "@-imported" : "";
        return {
            kind,
            path: e.path,
            label,
            description,
            exists: e.exists
        };
    });
}
function Kln() {
    let t = [
        {
            kind: "auto",
            path: mi(),
            label: "Open auto-memory folder",
            description: ""
        }
    ];
    if (OY() && Xlo()) {
        t.push({
            kind: "team",
            path: j_(),
            label: "Open team memory folder",
            description: ""
        });
    }
    return t;
}
function Yln(t, o = (n)=>n) {
    let n = [];
    for (let r of t){
        if (r.memory) {
            n.push({
                kind: "agent",
                path: Ygr(r.agentType, r.memory),
                label: `Open ${o(r.agentType)} agent memory`,
                description: `${r.memory} scope`
            });
        }
    }
    return n;
}
function m0o() {
    let t = Okt();
    if (t === "open" || t === "pending") {
        return t;
    }
    if (t === "account_off" || t === "local_memory_off") {
        let o = xxn();
        if (o === "denied") {
            return "closed";
        }
        return o;
    }
    return "closed";
}
function P1e() {
    return BLe();
}
function g0o() {
    return false;
}
const Xln = "can't be turned on here; use a session started outside Claude Code";
function Jln({ enabled, modelDisabled, safeMode, raiseAllowed }) {
    if (modelDisabled && !enabled) {
        return {
            status: "unavailable for current model",
            detail: "",
            dim: true,
            toggleable: false
        };
    }
    if (safeMode) {
        return {
            status: "off in safe mode",
            detail: `${Ng()} to re-enable`,
            dim: true,
            toggleable: false
        };
    }
    if (!enabled && !raiseAllowed) {
        return {
            status: "off",
            detail: Xln,
            dim: true,
            toggleable: false
        };
    }
    return {
        status: enabled ? "on" : "off",
        detail: "",
        dim: false,
        toggleable: !modelDisabled
    };
}
function Qln({ autoMemoryOn, enabled, running, lastDreamAt, raiseAllowed, heldDetail }) {
    if (!autoMemoryOn) {
        return {
            status: "off while auto-memory is off",
            detail: "",
            dim: true,
            toggleable: false
        };
    }
    if (heldDetail !== undefined) {
        return {
            status: enabled ? "on" : "off",
            detail: heldDetail,
            dim: true,
            toggleable: false
        };
    }
    if (!enabled && !raiseAllowed) {
        return {
            status: "off",
            detail: Xln,
            dim: true,
            toggleable: false
        };
    }
    let detail = running ? "running" : lastDreamAt === null ? "" : lastDreamAt === 0 ? "never" : `last ran ${nw(new Date(lastDreamAt))}`;
    return {
        status: enabled ? "on" : "off",
        detail,
        dim: false,
        toggleable: true
    };
}
export { qln, Kln, Yln, m0o, P1e, g0o, Xln, Jln, Qln };
