import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Wne } from "/$bunfs/root/chunk-28f6aa40.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { readFile, stat } from "fs/promises";
import { join } from "path";
const lbt = "mcp-skill-archives";
const h = "meta.json";
const RSn = "SKILL.md";
const v = 86400000;
const k = p(()=>u({
        uri: o().optional(),
        cacheKey: o(),
        declaredDigest: o().optional(),
        fetchedAt: E()
    }));
function S() {
    return join(ve(), lbt);
}
function d(e, r) {
    return $e.userConfigDir(lbt, [
        e,
        r,
        RSn
    ]);
}
function w(e) {
    return $e.userConfigDir(lbt, [
        e,
        h
    ]);
}
function C(e) {
    return Wne(join(e, h), ()=>k().nullable(), {
        defaultValue: null,
        ensureDir: true
    });
}
function y(e, name, uri) {
    let i = at(`${e}\x00${uri}`).slice(0, 8);
    let a = name.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, 64);
    return `${In(e)}--${a}--${i}`;
}
function xSn(e) {
    if (!e) {
        return;
    }
    let r = /^(?:sha256:)?([0-9a-fA-F]{64})$/.exec(e.trim());
    if (r) {
        return r[1].toLowerCase();
    }
}
async function YVr(e) {
    try {
        return await C(e).read();
    } catch  {
        return null;
    }
}
async function I(slugDir, r) {
    await C(slugDir).write(r);
}
async function L(e, r) {
    let n = await e.read([
        w(r)
    ]);
    if (!n.ok) {
        return null;
    }
    let i = n.value.items[0];
    if (!i.found) {
        return null;
    }
    let a;
    try {
        a = X(Buffer.from(i.value).toString("utf8"));
    } catch (error) {
        t(`mcpSkillCache: meta.json for ${r} is not valid JSON: ${error}`, {
            level: "warn"
        });
        return null;
    }
    let c = k().nullable().safeParse(a);
    if (!c.success) {
        t(`mcpSkillCache: meta.json for ${r} failed schema validation: ${c.error.message}`, {
            level: "warn"
        });
        return null;
    }
    return c.data;
}
async function B(e, slug, n) {
    let i = await e.write(w(slug), _(n), {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
    });
    if (!i.ok) {
        throw new x(`meta.json write failed: ${gt(i.error)}`, "MCP skill cache meta.json write failed");
    }
}
async function CYo(e, r, n) {
    let i = y(e, r.name, r.uri);
    let a = join(S(), i);
    let c = {
        hit: false,
        slugDir: a
    };
    let cacheKey;
    let f = xSn(r.digest ?? undefined);
    if (f) {
        cacheKey = f;
    } else {
        let l = n ? await L(n, i) : await YVr(a);
        if (!l || Date.now() - l.fetchedAt >= v) {
            return c;
        }
        cacheKey = l.cacheKey;
    }
    if (n) {
        let l = await n.read([
            d(i, cacheKey)
        ]);
        if (!l.ok) {
            return c;
        }
        let g = l.value.items[0];
        if (g.found) {
            return {
                hit: true,
                cacheKey,
                skillMd: Buffer.from(g.value).toString("utf8")
            };
        }
        return c;
    }
    let M = join(a, cacheKey);
    try {
        let skillMd = await readFile(join(M, RSn), "utf8");
        return {
            hit: true,
            cacheKey,
            skillMd
        };
    } catch  {
        return c;
    }
}
async function XVr(e, r, n, i) {
    if (i) {
        return (await i.statMeta(d(e, r))).ok;
    }
    return stat(join(n, RSn)).then((a)=>a.isFile()).catch(()=>false);
}
async function RYo(e, r, n, i) {
    let slug = y(e, r.name, r.uri);
    let c = join(S(), slug);
    let keyDir = join(c, n);
    let alreadyCached = await XVr(slug, n, keyDir, i);
    if (alreadyCached) {
        re(e, `Skill '${r.name}' content unchanged \u2014 reusing ${keyDir}`);
    }
    return {
        slug,
        slugDir: c,
        keyDir,
        alreadyCached
    };
}
async function F(e, r, n) {
    for (let i of [
        [
            r,
            n
        ],
        [
            r
        ]
    ]){
        let a = $e.userConfigDir(lbt, i);
        if ((await e.statMeta(a)).ok) {
            t(`[mcp-skills] replacing a stray file at ${lbt}/${i.join("/")} with the cache directory`);
            let c = await e.delete(a);
            if (!c.ok) {
                t(`[mcp-skills] could not remove it: ${gt(c.error)}`);
            }
            return c.ok;
        }
    }
    return false;
}
async function xYo(e, r, n, i) {
    let a = d(r, n);
    let c = {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
    };
    let s = await e.write(a, i, c);
    if (!s.ok && s.error.code === "Failed" && (s.error.telemetryCode === "ENOTDIR" || s.error.telemetryCode === "ENOENT") && await F(e, r, n)) {
        s = await e.write(a, i, c);
    }
    if (!s.ok) {
        throw new x(`SKILL.md write failed: ${gt(s.error)}`, "MCP skill cache SKILL.md write failed");
    }
}
async function PYo(e, r, cacheKey, i) {
    let a = {
        uri: r.uri,
        cacheKey,
        declaredDigest: xSn(r.digest ?? undefined),
        fetchedAt: Date.now()
    };
    if (j() && i) {
        await B(i, e.slug, a);
        return;
    }
    await I(e.slugDir, a);
}
export { lbt, RSn, xSn, YVr, CYo, XVr, RYo, xYo, PYo };
