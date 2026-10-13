import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, v, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { cOn, dB, k4 } from "/$bunfs/root/chunk-yq147k4z.js";
import { Wne } from "/$bunfs/root/chunk-28f6aa40.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { o, u, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { bC } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { readdir, readFile, stat } from "fs/promises";
import { basename, extname, join } from "path";
import { isDeepStrictEqual } from "util";
class N {
    customThemeBases = undefined;
    userThemes = undefined;
    pluginThemes = gs([]);
    systemTheme = undefined;
    systemThemeChanged = Oe();
    onSystemThemeChange = this.systemThemeChanged.subscribe;
    customThemeBase(e) {
        return this.customThemeBases?.get(e);
    }
    addCustomThemeBases(e) {
        this.customThemeBases ??= new Map;
        for (let r of e){
            this.customThemeBases.set(r.slug, r.base);
        }
    }
    commitUserThemes(e) {
        this.customThemeBases = new Map(e.map((r)=>[
                r.slug,
                r.base
            ]));
        this.addCustomThemeBases(this.pluginThemes.getState());
        if (this.userThemes === undefined || !isDeepStrictEqual(this.userThemes, e)) {
            this.userThemes = e;
        }
        return this.userThemes;
    }
    cachedUserThemes() {
        return this.userThemes ?? [];
    }
    cachedSystemTheme() {
        return this.systemTheme;
    }
    setSystemTheme(e) {
        if (this.systemTheme === e) {
            return;
        }
        this.systemTheme = e;
        this.systemThemeChanged.emit();
    }
}
const A = new q(()=>new N);
function OU() {
    return A.of(B().host);
}
const k = "custom:";
const P = 262144;
function AGr(e) {
    return OU().customThemeBase(e);
}
function EQn() {
    return OU().cachedUserThemes();
}
function CGr(e) {
    let r = OU();
    return r.cachedUserThemes().find((s)=>s.slug === e) ?? r.pluginThemes.getState().find((s)=>s.slug === e);
}
function v7e() {
    return join(ve(), "themes");
}
function TX(e) {
    return `${k}${e}`;
}
function aI(e) {
    if (e.startsWith(k)) {
        return e.slice(k.length);
    }
    return null;
}
function E(slug, r, source) {
    let i;
    try {
        i = X(r);
    } catch  {
        t(`[theme] ${slug}.json: invalid JSON`, {
            level: "warn"
        });
        return;
    }
    if (typeof i !== "object" || i === null || Array.isArray(i)) {
        return;
    }
    let m = i;
    let base = cOn(m.base) ? m.base : "dark";
    let name = typeof m.name === "string" ? m.name : slug;
    let overrides = {};
    if (typeof m.overrides === "object" && m.overrides !== null) {
        let T = dB(base);
        for (let [g, y] of Object.entries(m.overrides)){
            if (Object.hasOwn(T, g) && k4(y)) {
                overrides[g] = y;
            }
        }
    }
    return {
        slug,
        name,
        base,
        overrides,
        source
    };
}
async function b(e, r, s, i, m, h) {
    if (i && m) {
        let n;
        try {
            n = await i.read([
                m
            ]);
        } catch (error) {
            if (h) {
                h.readErrors++;
            }
            t(`[theme] failed to read ${e}: ${l(error)}`, {
                level: "warn"
            });
            return;
        }
        if (!n.ok) {
            if (h) {
                h.readErrors++;
            }
            t(`[theme] failed to read ${e}: ${gt(n.error)}`, {
                level: "warn"
            });
            return;
        }
        let T = n.value.items[0];
        if (T?.found) {
            return E(r, Buffer.from(T.value).toString("utf8"), s);
        }
        return undefined;
    }
    let c;
    try {
        if ((await stat(e)).size > P) {
            t(`[theme] ${e} exceeds 256KB; skipping`, {
                level: "warn"
            });
            return;
        }
        c = await readFile(e, "utf8");
    } catch (error) {
        if (!z(error)) {
            t(`[theme] failed to read ${e}`, {
                level: "warn"
            });
        }
        return;
    }
    return E(r, c, s);
}
async function kQn(e, r, s = "") {
    return await R(e, r, s) ?? [];
}
async function R(e, r, s, i) {
    if (i && r === "user" && e === v7e()) {
        let c = {
            namespace: "userConfigDir",
            dir: "themes"
        };
        let n = [];
        let T = await Wi((cursor)=>i.listEntries(c, cursor === undefined ? undefined : {
                cursor
            }), (a)=>{
            for (let f of a){
                if (f.kind !== "key") {
                    continue;
                }
                let d = f.key.namespace === "userConfigDir" ? f.key.relPath.at(-1) ?? "" : "";
                if (extname(d) !== ".json") {
                    continue;
                }
                if ((f.size ?? 0) > P) {
                    t(`[theme] ${join(e, d)} exceeds 256KB; skipping`, {
                        level: "warn"
                    });
                    continue;
                }
                n.push({
                    slug: s + basename(d, ".json"),
                    name: d
                });
            }
        }).catch((a)=>{
            t(`[theme] list themes failed: ${l(a)}; keeping the previously loaded themes (if any)`, {
                level: "warn"
            });
            return null;
        });
        if (T === null) {
            return null;
        }
        switch(T.status){
            case "done":
                break;
            case "error":
                t(`[theme] list themes failed: ${gt(T.error)}; keeping the previously loaded themes (if any)`, {
                    level: "warn"
                });
                return null;
            case "capped":
                t(`[theme] list themes exceeded ${Yf} pages; keeping the previously loaded themes (if any)`, {
                    level: "warn"
                });
                return null;
        }
        if (n.length === 0) {
            return [];
        }
        let g = n.map((a)=>$e.userConfigDir("themes", [
                a.name
            ]));
        let y;
        try {
            y = await i.read(g);
        } catch (error) {
            t(`[theme] batched theme read failed: ${l(error)}`, {
                level: "warn"
            });
        }
        let C = [];
        if (y?.ok) {
            for (let [a, f] of y.value.items.entries()){
                if (!f.found) {
                    continue;
                }
                let d = E(n[a].slug, Buffer.from(f.value).toString("utf8"), r);
                if (d) {
                    C.push(d);
                }
            }
            return C;
        }
        let x = {
            readErrors: 0
        };
        for (let [a, f] of n.entries()){
            let d = await b(join(e, f.name), f.slug, r, i, g[a], x);
            if (d) {
                C.push(d);
            }
        }
        if (C.length === 0 && x.readErrors > 0) {
            t(`[theme] could not read any of ${n.length} listed theme files; keeping the previously loaded themes (if any)`, {
                level: "warn"
            });
            return null;
        }
        return C;
    }
    let m;
    try {
        m = await readdir(e);
    } catch (error) {
        if (v(error) === "ENOTDIR") {
            let n = await b(e, s + basename(e, ".json"), r);
            if (n) {
                return [
                    n
                ];
            }
            return [];
        }
        if (!jt(error)) {
            t(`[theme] readdir ${e} failed`, {
                level: "warn"
            });
        }
        return [];
    }
    let h = [];
    for (let c of m){
        if (extname(c) !== ".json") {
            continue;
        }
        let n = await b(join(e, c), s + basename(c, ".json"), r);
        if (n) {
            h.push(n);
        }
    }
    return h;
}
const h_t = bC(async (e)=>{
    let r = OU();
    let s = br("themes") ? [] : await R(v7e(), "user", "", e) ?? r.cachedUserThemes();
    s.sort((i, m)=>i.name.localeCompare(m.name));
    return r.commitUserThemes(s);
});
const U = p(()=>u({
        name: o(),
        base: o(),
        overrides: ue(o(), o())
    }));
async function jWt(e, r) {
    let s = {
        name: e.name,
        base: e.base,
        overrides: e.overrides
    };
    let i = `${e.slug}.json`;
    if (j() && r !== undefined && fr(i)) {
        let m = _(s, null, 2) + `
`;
        let h = await r.write($e.userConfigDir("themes", [
            i
        ]), m, {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask()
        });
        if (!h.ok) {
            t(`[theme] v5 save ${e.slug} failed: ${gt(h.error)}`, {
                level: "warn"
            });
            throw Error("theme save failed");
        }
        return;
    }
    await Wne(join(v7e(), `${e.slug}.json`), U, {
        defaultValue: ()=>({
                name: e.slug,
                base: "dark",
                overrides: {}
            }),
        ensureDir: true,
        indent: 2,
        trailingNewline: true
    }).write(s);
}
function RGr(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme";
}
function TQn(e) {
    if (br("themes")) {
        return ()=>{};
    }
    let r = Sw.watch(v7e(), {
        persistent: true,
        ignoreInitial: true,
        depth: 0,
        awaitWriteFinish: {
            stabilityThreshold: 300,
            pollInterval: 100
        },
        ignorePermissionErrors: true
    });
    r.on("add", e);
    r.on("change", e);
    r.on("unlink", e);
    r.on("error", (s)=>t(`[theme] watcher error: ${l(s)}`, {
            level: "warn"
        }));
    return ()=>void r.close();
}
export { OU, AGr, EQn, CGr, v7e, TX, aI, kQn, h_t, jWt, RGr, TQn };
