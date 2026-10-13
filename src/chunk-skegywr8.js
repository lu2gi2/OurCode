import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Tf } from "/$bunfs/root/chunk-4r6b8efh.js";
import { ur } from "/$bunfs/root/chunk-2d9a83dh.js";
import { cmn, dmn } from "/$bunfs/root/chunk-kfzxdfrw.js";
import { Ane } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { XAt } from "/$bunfs/root/chunk-46dhek9m.js";
import { WA, Zst } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { readFile, stat } from "fs/promises";
function I8n() {
    let e = [
        ve()
    ];
    try {
        e.push(Tf());
    } catch  {}
    return (l)=>e.some((n)=>Ane(l, n, true));
}
const h = Se(XAt(), 1);
function imn(e, readFileState) {
    return {
        readFileState,
        bashTools: cmn(e),
        bashHosts: dmn(e)
    };
}
function amn(e, l) {
    let n = l;
    if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) {
        return null;
    }
    let manifestDep;
    try {
        if (n.signals.manifestDeps?.length) {
            manifestDep = n.signals.manifestDeps.map((a)=>({
                    file: new RegExp(a.file, "i"),
                    pattern: new RegExp(a.pattern)
                }));
        }
    } catch (error) {
        t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${error}`, {
            level: "warn"
        });
        return null;
    }
    let hosts = n.signals.hosts?.map((a)=>a.toLowerCase());
    return {
        cli: n.signals.cli,
        hosts,
        filesRead: n.signals.filesRead,
        manifestDep,
        cwd: n.signals.cwd
    };
}
async function lmn(e, l) {
    let { bashTools, bashHosts } = l ?? {};
    if (e.cli && bashTools?.size) {
        let command = e.cli.find((s)=>bashTools.has(s));
        if (command) {
            return {
                signal: "cli",
                command
            };
        }
    }
    if (e.hosts?.length && bashHosts?.size) {
        let host = e.hosts.find((s)=>bashHosts.has(s));
        if (host) {
            return {
                signal: "hosts",
                host
            };
        }
    }
    if (e.cwd?.length) {
        let i = se().replaceAll("\\", "/");
        let s = ur(se())?.replaceAll("\\", "/");
        let f = [
            i
        ];
        if (s && i.startsWith(`${s}/`)) {
            f.push(i.slice(s.length + 1));
        }
        for (let p of e.cwd){
            let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
            if (!g) {
                continue;
            }
            if (f.some((r)=>h.default.isMatch(r, [
                    g,
                    `${g}/**`
                ], {
                    nocase: true,
                    dot: true
                }))) {
                return {
                    signal: "cwd"
                };
            }
        }
    }
    let o = l?.readFileState;
    let a = [];
    if (o && (e.filesRead?.length || e.manifestDep)) {
        let i = I8n();
        a = Zst(o).filter((s)=>!i(s));
    }
    if (e.filesRead?.length && a.length) {
        let i = a.find((s)=>h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, {
                nocase: true,
                dot: true
            }));
        if (i) {
            return {
                signal: "filesRead",
                file: i
            };
        }
    }
    if (e.manifestDep && o && a.length > 0) {
        let i = new Map(o.entries());
        let s = (async ()=>{
            for (let { file, pattern } of e.manifestDep){
                for (let r of a){
                    if (!file.test(r)) {
                        continue;
                    }
                    try {
                        let m = i.get(r);
                        let u = m && WA(m) ? m.content : undefined;
                        if (!u) {
                            if ((await stat(r)).size > 524288) {
                                continue;
                            }
                            u = await readFile(r, "utf8");
                        }
                        if (pattern.test(u)) {
                            return r;
                        }
                    } catch  {}
                }
            }
            return null;
        })();
        let f = await Ut(s, 50, "manifestDep scan").catch(()=>null);
        if (f) {
            return {
                signal: "manifestDep",
                file: f
            };
        }
    }
    return null;
}
export { I8n, imn, amn, lmn };
