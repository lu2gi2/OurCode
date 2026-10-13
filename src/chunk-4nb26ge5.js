import { dy } from "/$bunfs/root/chunk-qch5xj2a.js";
import { U8, RWn, Lv, cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { uS } from "/$bunfs/root/chunk-9fvky64k.js";
import { Ls } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Mo, rKe, i5t } from "/$bunfs/root/chunk-rhjwzamj.js";
import { wx, Bge, hHe, KGe, mVt, OEn, uVe } from "/$bunfs/root/chunk-kasbfbhj.js";
const tgt = [
    "on",
    "name-only",
    "user-invocable-only",
    "off"
];
function x(e) {
    return e.type === "prompt" && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp");
}
function sLr(e) {
    let n = OEn(e);
    if (n) {
        return {
            value: n.value,
            source: n.source === "policySettings" ? "policy" : "flag"
        };
    }
    if (!Bge(e.name)) {
        return {
            value: e.disableModelInvocation ? "user-invocable-only" : "on",
            source: "reserved-name"
        };
    }
    if (e.disableModelInvocation) {
        return {
            value: "user-invocable-only",
            source: "author"
        };
    }
    if (e.source === "plugin") {
        return {
            value: "on",
            source: "plugin"
        };
    }
}
function F(e, { skipLocalBareKey = false } = {}) {
    if (e.loadedFrom === "mcp") {
        let a = [
            e.name,
            ...mVt(e)
        ];
        for (let y of [
            "projectSettings",
            "userSettings"
        ]){
            if (!cn(y)) {
                continue;
            }
            let m = KGe(fe(y)?.skillOverrides, a);
            if (m !== undefined) {
                return m;
            }
        }
        return;
    }
    let i = (a)=>{
        if (cn(a)) {
            return fe(a)?.skillOverrides;
        }
    };
    let o = (a)=>wx(i("projectSettings"), a) ?? wx(i("userSettings"), a);
    let t = hHe(e);
    let f = skipLocalBareKey ? undefined : wx(fe("localSettings")?.skillOverrides, t);
    return o(e.name) ?? (t != null ? f ?? o(t) : undefined);
}
function b(e, localOverrides) {
    if (e.loadedFrom === "mcp") {
        return KGe(localOverrides, [
            e.name,
            ...mVt(e)
        ]);
    }
    return wx(localOverrides, e.name);
}
function MIe(e, n) {
    if (n === "syncedSkills") {
        return U8;
    }
    switch(e){
        case "mcp":
        case "plugin":
            return e;
        case "memoryStore":
            return "memory store";
        case "bundled":
        case "builtin":
            return "built-in";
        default:
            return Lv(e);
    }
}
function wje(e) {
    let n = i5t(e);
    if (n !== undefined && Mo(e) === n) {
        return n;
    }
    return e.name;
}
function iLr(e, n) {
    let i = n.filter((l)=>l.loadedFrom !== "syncedSkills");
    let o = [];
    for (let l of e){
        let S = l.unqualifiedName;
        if (l.loadedFrom !== "syncedSkills" || S === undefined || rKe(l) !== undefined) {
            continue;
        }
        let bare = dy(S);
        let u = Ls(S, i);
        let O = uS(S);
        let v = (g)=>[
                g.name,
                Mo(g),
                ...g.aliases ?? []
            ];
        let C = (g)=>v(g).find((R)=>uS(R) === O);
        let d = u ?? i.find((g)=>C(g));
        if (!d) {
            o.push({
                bare,
                sentence: `Your claude.ai skill can't use /${bare} in this session.`,
                held: false,
                userCanFree: false,
                renameNeedsNameLine: false
            });
            continue;
        }
        let p = d.type === "prompt" ? d : undefined;
        let k = p?.skillRoot !== undefined ? "skill" : `command file ${dy(d.name)}.md`;
        let c;
        let s = "";
        let renameNeedsNameLine = false;
        if (d.kind === "workflow") {
            c = "a workflow";
        } else if (d.loadedFrom === "plugin") {
            c = "a command from a plugin";
        } else {
            switch(RWn(d)){
                case "user":
                    {
                        let g = p?.skillRoot !== undefined ? ` in ${dy(Rs(p.skillRoot))}` : "";
                        c = `your own ${k}${g}`;
                        renameNeedsNameLine = d.loadedFrom === "skills";
                        s = renameNeedsNameLine ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
                        break;
                    }
                case "project":
                    c = `this project's ${k}`;
                    break;
                case "managed":
                    c = `a ${k} your organization manages`;
                    break;
                case "plugin":
                    c = "a command from a plugin";
                    break;
                case "remote":
                    c = d.loadedFrom === "mcp" ? "a skill from an MCP server" : d.isMcp ? "a prompt from an MCP server" : "another command";
                    break;
                case "builtin":
                case "bundled":
                    c = "a built-in Claude Code command";
                    break;
                default:
                    c = "another command";
            }
        }
        let w = `/${dy(C(d) ?? d.name)}`;
        let sentence = u !== undefined ? `/${bare} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}` : `/${bare} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
        o.push({
            bare,
            sentence,
            held: true,
            userCanFree: s !== "",
            renameNeedsNameLine
        });
    }
    if (o.length === 0) {
        return;
    }
    if (o.length === 1) {
        return o[0].sentence;
    }
    let t = o.every((l)=>l.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session";
    let f = `${L(o)} ${t}, so they don't run your claude.ai skills.`;
    let a = o.filter((l)=>l.userCanFree);
    if (a.length === 0) {
        return f;
    }
    let y = a.some((l)=>l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename";
    let m = a.length === 1 ? "one" : "ones";
    return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}
function L(e) {
    let n = e.map((i)=>`/${i.bare}`);
    if (n.length === 1) {
        return n[0];
    }
    if (n.length <= 4) {
        return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
    }
    return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}
function vje(e, { sortByTokens = false } = {}) {
    let i = e.filter(x);
    if (sortByTokens) {
        let o = new Map(i.map((t)=>[
                t,
                uVe(t)
            ]));
        return i.sort((t, f)=>(o.get(f) ?? 0) - (o.get(t) ?? 0) || wje(t).localeCompare(wje(f)));
    }
    return i.sort((o, t)=>MIe(o.source, o.loadedFrom).localeCompare(MIe(t.source, t.loadedFrom)) || wje(o).localeCompare(wje(t)));
}
function g6n() {
    return Object.assign(Object.create(null), fe("localSettings")?.skillOverrides);
}
function Eje(e, localOverrides = g6n()) {
    let lowerTier = new Map;
    let locked = new Map;
    for (let t of e){
        let f = F(t);
        if (f) {
            lowerTier.set(t.name, f);
        }
        let a = sLr(t);
        if (a) {
            locked.set(t, a);
        }
    }
    return {
        localOverrides,
        lowerTier,
        locked
    };
}
function kje(e, n) {
    let i = Object.create(null);
    for (let o of e){
        if (Object.hasOwn(i, o.name)) {
            continue;
        }
        i[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
    }
    return i;
}
function lFt(e, n, { localOverrides, lowerTier, locked }) {
    let a = new Set(Array.from(locked.keys(), (r)=>r.name));
    let y = new Set(a);
    let diff = Object.create(null);
    let writes = 0;
    let effectiveChanged = 0;
    for (let r of e){
        if (y.has(r.name)) {
            continue;
        }
        y.add(r.name);
        let u = wx(n, r.name) ?? "on";
        let O = lowerTier.get(r.name) ?? "on";
        let v = b(r, localOverrides) ?? O;
        if (r.loadedFrom === "mcp") {
            if (u === v) {
                continue;
            }
            let p = false;
            let k = u === O ? undefined : u;
            if (k !== wx(localOverrides, r.name) || Object.hasOwn(diff, r.name)) {
                diff[r.name] = k;
                p = true;
            }
            for (let c of mVt(r)){
                if (wx(localOverrides, c) === undefined) {
                    continue;
                }
                for (let s of e){
                    if (s.name === r.name || s.loadedFrom !== "mcp" || !mVt(s).includes(c) || Object.hasOwn(diff, s.name)) {
                        continue;
                    }
                    let h = b(s, localOverrides);
                    if ((a.has(s.name) || (wx(n, s.name) ?? "on") === (h ?? lowerTier.get(s.name) ?? "on")) && h !== undefined) {
                        diff[s.name] = h;
                    }
                }
                diff[c] = undefined;
                p = true;
            }
            if (p) {
                writes++;
            }
            effectiveChanged++;
            continue;
        }
        let C = r.loadedFrom === "syncedSkills" ? hHe(r) : undefined;
        if (C != null && wx(localOverrides, C) !== undefined && u !== v) {
            let p = F(r, {
                skipLocalBareKey: true
            }) ?? "on";
            let k = u === p ? undefined : u;
            if (k !== wx(localOverrides, r.name)) {
                diff[r.name] = k;
            }
            diff[C] = undefined;
            writes++;
            effectiveChanged++;
            continue;
        }
        if (r.loadedFrom === "syncedSkills" && u === v) {
            continue;
        }
        let d = u === O ? undefined : u;
        if (d !== wx(localOverrides, r.name)) {
            diff[r.name] = d;
            writes++;
        }
        if (u !== v) {
            effectiveChanged++;
        }
    }
    return {
        diff,
        writes,
        effectiveChanged
    };
}
export { tgt, sLr, MIe, wje, iLr, vje, g6n, Eje, kje, lFt };
