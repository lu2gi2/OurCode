import { UP, we, nT, aU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { tVn, y0t, oVn, sVn, iVn, aVn, Jv, BBe, Qpe, Qv, ih } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { bl, FM, $co } from "/$bunfs/root/chunk-4521ay78.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { o, oe, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { join, resolve, isAbsolute } from "path";
import { readFileSync, statSync } from "fs";
function F4(e, r, t = Date.now()) {
    return Number.isFinite(e) && Math.abs(t - e) < r;
}
const eXt = "cache";
function PT() {
    return resolve(we(), bl());
}
function OQ() {
    return join(PT(), eXt);
}
function T0n() {
    return D([
        resolve(ve(), "plugins"),
        resolve(ve(), "cowork_plugins"),
        PT(),
        ...FM().map((e)=>resolve(we(), e))
    ]);
}
function v() {
    return D([
        ...nT(),
        ...aU()
    ].map((e)=>resolve(we(), e)));
}
function Kfs(e) {
    let r = v();
    if (r.length === 0) {
        return false;
    }
    if (BBe(e, {
        allowLocalWsl: true
    })) {
        return true;
    }
    let roots = r.join("\x00");
    let i = st();
    let i_inlinePluginRootsComparableMemo = i.inlinePluginRootsComparableMemo;
    if (i_inlinePluginRootsComparableMemo?.roots !== roots || !F4(i_inlinePluginRootsComparableMemo.at, x)) {
        i_inlinePluginRootsComparableMemo = {
            roots,
            comparable: r.map((s)=>Qv(s, {
                    foldCase: true
                })),
            at: Date.now()
        };
        i.inlinePluginRootsComparableMemo = i_inlinePluginRootsComparableMemo;
    }
    let C = Qv(e, {
        foldCase: true,
        knownNotSuspect: true
    });
    return i_inlinePluginRootsComparableMemo.comparable.some((s)=>ih(s, C, {
            alreadyComparable: true
        }));
}
var x = 30000;
const W = 4194304;
const N = p(()=>u({
        sourceCommand: o().optional().catch(undefined),
        sourceProducerPath: o().optional().catch(undefined),
        previousProducerPaths: T(oe()).transform((e)=>e.filter((r)=>typeof r === "string")).optional().catch(undefined)
    }).passthrough());
function Oco(e) {
    let r = st();
    let r_commandProducerDirsDenied = r.commandProducerDirsDenied;
    let i = S();
    r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
    let n = i === "undeterminable" ? undefined : i;
    r.commandProducerDirsScannedAt = Date.now();
    r.commandProducerDirsComparable = null;
    for (let C of new Set(e)){
        let s;
        try {
            let m = join(C, "installed_plugins.json");
            let f = statSync(m);
            if (!f.isFile() || f.size > W) {
                continue;
            }
            let l = readFileSync(m, "utf8");
            s = JSON.parse(l);
        } catch  {
            continue;
        }
        let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : undefined;
        if (typeof a !== "object" || a === null) {
            continue;
        }
        for (let m of Object.values(a)){
            if (!Array.isArray(m)) {
                continue;
            }
            for (let f of m){
                let l = N().safeParse(f);
                if (!l.success) {
                    continue;
                }
                for (let g of [
                    l.data.sourceProducerPath,
                    ...l.data.previousProducerPaths ?? []
                ]){
                    let d = g === undefined ? undefined : Qpe(g);
                    let b = d === undefined ? undefined : R(d, n);
                    if (b !== undefined) {
                        r_commandProducerDirsDenied.add(b);
                    }
                }
            }
        }
    }
    return [
        ...r_commandProducerDirsDenied
    ];
}
function v4e(e, { emit = true } = {}) {
    let t = S();
    let i = R(Qpe(e), t === "undeterminable" ? undefined : t);
    if (i === undefined) {
        return;
    }
    let commandProducerDirsDenied = st().commandProducerDirsDenied;
    if (commandProducerDirsDenied.has(i)) {
        return;
    }
    commandProducerDirsDenied.add(i);
    st().commandProducerDirsComparable = null;
    if (emit) {
        dNe();
    }
}
function dNe() {
    try {
        st().commandProducerDirsChanged.emit();
    } catch (error) {
        c(error);
    }
}
const Mco = UP(()=>st().commandProducerDirsChanged);
function Yfs(e, r, t, { maxAgeMs = 0 } = {}) {
    let n = st();
    if (!(maxAgeMs > 0 && Date.now() - n.commandProducerDirsScannedAt < maxAgeMs) || n.commandProducerDirsComparable === null) {
        let a = {
            foldCase: true
        };
        let m = Qv(we(), a);
        let f = Qv(t, a);
        let l = r.map((d)=>Qv(d, a)).filter((d)=>!ih(d, m, {
                alreadyComparable: true
            }));
        let g = Oco(r).map((d)=>Qv(d, a));
        n.commandProducerDirsComparable = [
            ...l,
            ...g
        ];
        n.commandProducerDirsNeedCanonicalCandidate = g.length > 0 || l.some((d)=>!ih(f, d, {
                alreadyComparable: true
            }));
    }
    if (n.commandProducerDirsWslProviderUndeterminable && (y0t(Qpe(e)) !== undefined || y0t(Qv(e, {
        foldCase: true
    })) !== undefined)) {
        return true;
    }
    if (n.commandProducerDirsComparable.length === 0) {
        return false;
    }
    if (n.commandProducerDirsNeedCanonicalCandidate && BBe(isAbsolute(e) ? e : resolve(e), {
        allowLocalWsl: true
    })) {
        return true;
    }
    let s = n.commandProducerDirsNeedCanonicalCandidate ? Qv(e, {
        foldCase: true,
        knownNotSuspect: true
    }) : resolve(e).normalize("NFC").toLowerCase();
    return n.commandProducerDirsComparable.some((a)=>ih(a, s, {
            alreadyComparable: true
        }));
}
function S() {
    let e = st();
    let root = PT();
    let e_wslProviderOfPluginsRootMemo = e.wslProviderOfPluginsRootMemo;
    if (e_wslProviderOfPluginsRootMemo?.root === root && F4(e_wslProviderOfPluginsRootMemo.at, I)) {
        return e_wslProviderOfPluginsRootMemo.value;
    }
    let i = $co(root);
    if (i === "undeterminable") {
        return "undeterminable";
    }
    let n = i === undefined ? undefined : {
        prefix: i.prefix
    };
    e.wslProviderOfPluginsRootMemo = {
        root,
        value: n,
        at: Date.now()
    };
    return n;
}
var I = 30000;
function R(e, r) {
    let t = iVn(e, {
        exactDots: true
    }) ?? (r === undefined ? undefined : sVn(e, r.prefix));
    if (t !== undefined) {
        return t;
    }
    if (isAbsolute(e)) {
        if (!tVn(e) && (!Jv(e) || oVn(e))) {
            return e;
        }
        return undefined;
    }
    return aVn(e, {
        exactDots: true
    });
}
export { F4, eXt, PT, OQ, T0n, Kfs, Oco, v4e, dNe, Mco, Yfs };
