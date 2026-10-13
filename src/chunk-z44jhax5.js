import { W, l, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { UBe } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { eh } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { CH } from "/$bunfs/root/chunk-w1n7t02f.js";
import { fn, Up, JW, vn } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { LE } from "/$bunfs/root/chunk-nbx3tg29.js";
import { rHe, tet, aar, vCn, qtt, IDe, r7r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { oi, xQ } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { Ad } from "/$bunfs/root/chunk-4r6b8efh.js";
import { AM } from "/$bunfs/root/chunk-7xekr000.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import * as p from "fs/promises";
import * as f from "path";
async function bKn(n, e) {
    if (e === "builtin") {
        let h = LE(n.name);
        if (!h) {
            throw Error(`Built-in plugin ${n.name} not found`);
        }
        return {
            commands: [],
            agents: [],
            skills: h.skills?.map((_)=>({
                    name: _.name
                })) ?? [],
            hooks: h.hooks ? Object.keys(h.hooks) : [],
            mcpServers: h.mcpServers ? Object.keys(h.mcpServers) : [],
            lspServers: []
        };
    }
    let r = Up(e) || e === eh;
    let o = vn(n.source).name || n.name;
    let m = e === fn ? (await qtt(`${o}@${e}`, undefined, "load"))?.entry ?? (await aar(o, undefined, true))?.entry : undefined;
    let s = r ? undefined : m ?? (await vCn(e, undefined)).plugins.find((h)=>h.name === o);
    if (!s && !r) {
        throw Error(`Plugin ${o} not found in marketplace ${e}`);
    }
    let [commands, agents, skills] = await Promise.all([
        O([
            n.commandsPath,
            ...n.commandsPaths ?? []
        ]),
        O([
            n.agentsPath,
            ...n.agentsPaths ?? []
        ]),
        A([
            n.skillsPath,
            ...n.skillsPaths ?? []
        ], n.name)
    ]);
    let hooks = n.hooksConfig ? Object.keys(n.hooksConfig) : k(s?.hooks);
    let i = n.mcpServers ? Object.keys(n.mcpServers) : D(await M(n));
    let mcpServers = i.length > 0 ? i : k(s?.mcpServers);
    let y = n.lspServers ? Object.keys(n.lspServers) : (await L(n)).concat(k(n.manifest.lspServers));
    let lspServers = y.length > 0 ? D(y) : k(s?.lspServers);
    return {
        commands,
        agents,
        skills,
        hooks,
        mcpServers,
        lspServers
    };
}
async function qUs(n, e, r) {
    let [o, m, s] = await Promise.all([
        Promise.all(n.skills.map((i)=>w(i.path ? f.join(i.path, "SKILL.md") : undefined, E(i, r)))),
        Promise.all(n.agents.map((i)=>w(i.path, i.name))),
        Promise.all(n.commands.map((i)=>w(i.path, E(i, r))))
    ]);
    let u = [
        ...o,
        ...m,
        ...s
    ];
    let a = u.map((i)=>i.alwaysOn).filter(Boolean).join(`
`);
    let d = u.map((i)=>i.onInvoke).filter(Boolean).join(`

`);
    let tokens = {};
    for (let i of e){
        let [P, y] = await Promise.all([
            j(a, i),
            j(d, i)
        ]);
        if (P !== null && y !== null) {
            tokens[i] = {
                always_on: P,
                on_invoke: y
            };
        }
    }
    return {
        tokens,
        inventory: {
            ...n,
            skills: S(n.skills, o),
            agents: S(n.agents, m),
            commands: S(n.commands, s)
        }
    };
}
function KUs(n, e, r, o = 4) {
    if (r !== undefined && e > 0) {
        return Math.round(n / e * r);
    }
    return Ad(" ".repeat(n), o);
}
const v = 1048576;
function E(n, e) {
    if (!e) {
        return n.name;
    }
    return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function w(n, e) {
    if (!n) {
        return {
            alwaysOn: "",
            onInvoke: ""
        };
    }
    let r;
    try {
        r = await b(n, v);
    } catch (error) {
        C(n, error);
        return {
            alwaysOn: "",
            onInvoke: ""
        };
    }
    let { frontmatter, content } = oi(r, n, {
        normalizeKeys: true
    });
    let description = xQ(frontmatter.description, e) ?? rHe(content, "Skill");
    let whenToUse = frontmatter.when_to_use != null ? String(frontmatter.when_to_use) : undefined;
    return {
        alwaysOn: r7r({
            name: e,
            description,
            whenToUse
        }),
        onInvoke: content.trim()
    };
}
async function b(n, e) {
    let r = await p.open(n, "r");
    try {
        let { size } = await r.stat();
        let m = Math.min(size, e);
        let s = Buffer.alloc(m);
        let { bytesRead } = await r.read(s, 0, m, 0);
        return s.toString("utf8", 0, bytesRead);
    } finally{
        await r.close();
    }
}
function S(n, e) {
    return n.map((r, o)=>{
        let m = e[o];
        if (!m) {
            return r;
        }
        return {
            ...r,
            chars: {
                always_on: m.alwaysOn.length,
                on_invoke: m.onInvoke.length
            }
        };
    });
}
async function j(content, e) {
    if (!content) {
        return 0;
    }
    return IDe([
        {
            role: "user",
            content
        }
    ], [], e);
}
function k(n) {
    return [
        n
    ].flat().filter((e)=>e != null && typeof e === "object").flatMap(Object.keys);
}
async function M(n) {
    if (n.isBuiltin) {
        return [];
    }
    let e = [
        await I(await F(n, ".mcp.json"))
    ];
    for (let r of [
        n.manifest.mcpServers ?? []
    ].flat()){
        if (typeof r !== "string") {
            e.push(k(r));
        } else if (!AM(r) && !CH(r) && !UBe(r)) {
            e.push(await I(await tet(n, r)));
        }
    }
    return e.flat();
}
async function I(n) {
    if (n === null) {
        return [];
    }
    try {
        let e = X(await b(n, v));
        if (e == null || typeof e !== "object") {
            return [];
        }
        let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
        if (r == null) {
            return [];
        }
        return Object.keys(r);
    } catch  {
        return [];
    }
}
async function L(n) {
    try {
        let e = await F(n, ".lsp.json");
        if (e === null) {
            return [];
        }
        let r = await p.readFile(e, "utf-8");
        let o = X(r);
        if (o == null || typeof o !== "object") {
            return [];
        }
        return Object.keys(o);
    } catch  {
        return [];
    }
}
async function F(n, e) {
    if (JW(n)) {
        return tet(n, e);
    }
    return f.join(n.path, e);
}
async function O(n) {
    let e = [];
    let r = new Set;
    for (let o of n){
        if (!o) {
            continue;
        }
        let m;
        try {
            m = await p.readdir(o, {
                withFileTypes: true
            });
        } catch (error) {
            C(o, error);
            continue;
        }
        for (let s of m){
            if (s.isFile() && s.name.endsWith(".md")) {
                let u = f.join(o, s.name);
                let a = f.resolve(u);
                if (r.has(a)) {
                    continue;
                }
                r.add(a);
                e.push({
                    name: f.basename(s.name, ".md"),
                    path: u
                });
            }
        }
    }
    return e;
}
async function A(n, e) {
    let r = [];
    let o = new Set;
    let m = (name, u)=>{
        let a = f.resolve(u);
        if (o.has(a)) {
            return;
        }
        o.add(a);
        r.push({
            name,
            path: u
        });
    };
    for (let s of n){
        if (!s) {
            continue;
        }
        try {
            let a = f.join(s, "SKILL.md");
            if ((await p.stat(a)).isFile()) {
                let g = "";
                try {
                    let i = await b(a, v);
                    let { frontmatter } = oi(i, a);
                    let y = typeof frontmatter.name === "string" ? frontmatter.name.trim() : "";
                    g = y.startsWith(`${e}:`) ? y.slice(e.length + 1) : y;
                } catch  {}
                m(g || f.basename(s), s);
                continue;
            }
        } catch  {}
        let u;
        try {
            u = await p.readdir(s, {
                withFileTypes: true
            });
        } catch (error) {
            C(s, error);
            continue;
        }
        for (let a of u){
            if (!a.isDirectory() && !a.isSymbolicLink()) {
                continue;
            }
            let d = f.join(s, a.name);
            try {
                if ((await p.stat(f.join(d, "SKILL.md"))).isFile()) {
                    m(a.name, d);
                }
            } catch  {}
        }
    }
    return r;
}
function C(n, error) {
    t(`Failed to read plugin components from ${n}: ${l(error)}`, {
        level: "error"
    });
    if (xs(error)) {
        return;
    }
    c(W(error));
}
export { bKn, qUs, KUs };
