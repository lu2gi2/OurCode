import { cr, Kr, Ee, nT, aU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, ot, W, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { po, ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X, ie, hf, Dpe, iA, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { jw, Aa, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { CH } from "/$bunfs/root/chunk-w1n7t02f.js";
import { O1, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { KF, ss } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Zl, Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { j1 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { yn, fe, Tn, ta } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { uR } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Ss, ZPt } from "/$bunfs/root/chunk-17w0r6ry.js";
import { wh, uNe } from "/$bunfs/root/chunk-4521ay78.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { Av, LT, i7t, Dgo, Lgo, Ll, ult, WFn, zFn, ZCe } from "/$bunfs/root/chunk-fzmwt34b.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { QA, Aoe, y$e, Hde, KCe, zSr, wgo } from "/$bunfs/root/chunk-30jbnw20.js";
import { mws } from "/$bunfs/root/chunk-nbx3tg29.js";
import { Wne } from "/$bunfs/root/chunk-28f6aa40.js";
import { K2, WI, Y2 } from "/$bunfs/root/chunk-pp9kr3hb.js";
import { Fde, Ioe, eIt } from "/$bunfs/root/chunk-pjqd7qee.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { isAbsolute, normalize, dirname, join, basename, resolve } from "path";
import { inflateRawSync } from "zlib";
import { createHash } from "crypto";
import { chmod, writeFile, lstat, rmdir } from "fs/promises";
import { homedir } from "os";
import { AsyncLocalStorage } from "async_hooks";
const V = {
    MAX_FILE_SIZE: 536870912,
    MAX_TOTAL_SIZE: 1073741824,
    MAX_FILE_COUNT: 100000,
    MAX_COMPRESSION_RATIO: 50
};
function $In(e) {
    if (CH(e)) {
        return false;
    }
    for (let n of e.split(/[/\\]/)){
        if (/^\.\. [ .]*$/.test(n)) {
            return false;
        }
    }
    let r = normalize(e);
    if (isAbsolute(r)) {
        return false;
    }
    return true;
}
function ut(e, r) {
    r.fileCount++;
    let error;
    if (r.fileCount > V.MAX_FILE_COUNT) {
        error = `Archive contains too many files: ${r.fileCount} (max: ${V.MAX_FILE_COUNT})`;
    }
    let s = Et(e.name, 120);
    if (!$In(e.name)) {
        error = `Unsafe file path detected: "${s}". Path traversal or absolute paths are not allowed.`;
    }
    let i = e.originalSize || 0;
    if (i > V.MAX_FILE_SIZE) {
        error = `File "${s}" is too large: ${Math.round(i / 1024 / 1024)}MB (max: ${Math.round(V.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
    }
    r.totalUncompressedSize += i;
    if (r.totalUncompressedSize > V.MAX_TOTAL_SIZE) {
        error = `Archive total size is too large: ${Math.round(r.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(V.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
    }
    let f = r.totalUncompressedSize / r.compressedSize;
    if (f > V.MAX_COMPRESSION_RATIO) {
        error = `Suspicious compression ratio detected: ${f.toFixed(1)}:1 (max: ${V.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
    }
    if (error) {
        return {
            isValid: false,
            error
        };
    }
    return {
        isValid: true
    };
}
async function Oqe(e) {
    let r = {
        fileCount: 0,
        totalUncompressedSize: 0,
        compressedSize: e.length,
        errors: []
    };
    let n = Ht(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), (s)=>{
        let i = ut(s, r);
        if (!i.isValid) {
            throw new x(i.error, "MCPB zip entry validation failed");
        }
    });
    t(`Zip extraction completed: ${r.fileCount} files, ${Math.round(r.totalUncompressedSize / 1024)}KB uncompressed`);
    return n;
}
const gt = 101010256;
const ht = 101075792;
const yt = 117853008;
const xt = 33639248;
const kt = 65557;
const wt = 2048;
const bt = 0;
const St = 8;
function I(e) {
    if (e === undefined) {
        return Error("invalid zip data");
    }
    return new x(`invalid zip data: ${e}`, "invalid zip data");
}
function j(e, r) {
    if (r + 2 > e.length) {
        throw I();
    }
    return e[r] | e[r + 1] << 8;
}
function N(e, r) {
    if (r + 4 > e.length) {
        throw I();
    }
    return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
}
function ve(e, r) {
    return N(e, r) + N(e, r + 4) * 4294967296;
}
function Ot(e) {
    let r = "";
    for(let n = 0; n < e.length; n += 16384){
        r += String.fromCharCode(...e.subarray(n, n + 16384));
    }
    return r;
}
function Ht(e, r) {
    let n = {};
    let s = e.length - 22;
    while(s < 0 || N(e, s) !== gt){
        if (s <= 0 || e.length - s > kt) {
            throw I();
        }
        s--;
    }
    let i = j(e, s + 8);
    if (i === 0) {
        return n;
    }
    let f = N(e, s + 16);
    let m = false;
    if ((f === 4294967295 || i === 65535) && s >= 20 && N(e, s - 20) === yt) {
        let g = N(e, s - 12);
        if (g + 56 <= e.length && N(e, g) === ht) {
            m = true;
            i = N(e, g + 32);
            f = N(e, g + 48);
        }
    }
    let d = new TextDecoder;
    for(let g = 0; g < i; g++){
        if (N(e, f) !== xt) {
            throw I();
        }
        let h = j(e, f + 8);
        let k = j(e, f + 10);
        let w = j(e, f + 28);
        let y = j(e, f + 30);
        let T = j(e, f + 32);
        let H = f + 46;
        if (H + w > e.length) {
            throw I();
        }
        let C = e.subarray(H, H + w);
        let M = h & wt ? d.decode(C) : Ot(C);
        let S = N(e, f + 20);
        let originalSize = N(e, f + 24);
        let b = N(e, f + 42);
        let P = H + w;
        if (m && S === 4294967295) {
            let F = P + y;
            let R = P;
            while(R + 4 <= F && j(e, R) !== 1){
                R += 4 + j(e, R + 2);
            }
            if (R + 28 > F) {
                throw I();
            }
            originalSize = ve(e, R + 4);
            S = ve(e, R + 12);
            b = ve(e, R + 20);
        }
        f = P + y + T;
        r({
            name: M,
            originalSize
        });
        let U = b + 30 + j(e, b + 26) + j(e, b + 28);
        if (U + S > e.length) {
            throw I();
        }
        let ue = e.subarray(U, U + S);
        if (k === bt) {
            if (S !== originalSize) {
                throw I("stored entry size mismatch");
            }
            n[M] = ue.slice();
        } else if (k === St) {
            if (S === 0 && originalSize === 0) {
                n[M] = new Uint8Array(0);
                continue;
            }
            let F;
            try {
                F = inflateRawSync(ue, {
                    maxOutputLength: Math.max(originalSize, 1),
                    chunkSize: Math.min(Math.max(originalSize, 64), 1048576)
                });
            } catch (error) {
                let A = error.code;
                throw I(typeof A === "string" && A.startsWith("Z_") ? A : "entry larger than declared");
            }
            n[M] = new Uint8Array(F.buffer, F.byteOffset, F.byteLength);
        } else {
            throw I(`unsupported compression method ${k}`);
        }
    }
    return n;
}
const Mqe = 493;
function b3t(e) {
    let r = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
    let n = {};
    let s = Math.max(0, r.length - 22 - 65535);
    let i = -1;
    for(let d = r.length - 22; d >= s; d--){
        if (r.readUInt32LE(d) === 101010256) {
            i = d;
            break;
        }
    }
    if (i < 0) {
        return n;
    }
    let f = r.readUInt16LE(i + 10);
    let m = r.readUInt32LE(i + 16);
    for(let d = 0; d < f; d++){
        if (m + 46 > r.length || r.readUInt32LE(m) !== 33639248) {
            break;
        }
        let g = r.readUInt16LE(m + 4);
        let h = r.readUInt16LE(m + 28);
        let k = r.readUInt16LE(m + 30);
        let w = r.readUInt16LE(m + 32);
        let y = r.readUInt32LE(m + 38);
        let T = r.toString("utf8", m + 46, m + 46 + h);
        if (g >> 8 === 3) {
            let H = y >>> 16 & 65535;
            if (H) {
                n[T] = H;
            }
        }
        m += 46 + h + k + w;
    }
    return n;
}
async function Mt(e) {
    let { McpbManifestSchema } = await import("/$bunfs/root/chunk-8d6gtjen.js");
    let n = McpbManifestSchema.safeParse(e);
    if (!n.success) {
        let s = n.error.flatten();
        let i = [
            ...Object.entries(s.fieldErrors).map(([f, m])=>`${f}: ${m?.join(", ")}`),
            ...s.formErrors || []
        ].filter(Boolean).join("; ");
        throw new x(`Invalid manifest: ${i}`, "MCPB manifest schema validation failed");
    }
    return n.data;
}
async function Ct(e) {
    let r;
    try {
        r = X(e);
    } catch (error) {
        throw Error(`Invalid JSON in manifest.json: ${l(error)}`);
    }
    return Mt(r);
}
async function Te(e) {
    let r = new TextDecoder().decode(e);
    return Ct(r);
}
function Ue(e) {
    let r = e?.platform ?? O();
    let HOME = e?.homedir ?? homedir();
    let s = e?.env ?? process.env;
    let i = {
        HOME,
        DESKTOP: join(HOME, "Desktop"),
        DOCUMENTS: join(HOME, "Documents"),
        DOWNLOADS: join(HOME, "Downloads")
    };
    switch(r){
        case "windows":
            {
                let f = s.USERPROFILE || HOME;
                return {
                    HOME,
                    DESKTOP: join(f, "Desktop"),
                    DOCUMENTS: join(f, "Documents"),
                    DOWNLOADS: join(f, "Downloads")
                };
            }
        case "linux":
        case "wsl":
            return {
                HOME,
                DESKTOP: s.XDG_DESKTOP_DIR || i.DESKTOP,
                DOCUMENTS: s.XDG_DOCUMENTS_DIR || i.DOCUMENTS,
                DOWNLOADS: s.XDG_DOWNLOAD_DIR || i.DOWNLOADS
            };
        case "macos":
        default:
            {
                if (r === "unknown") {
                    t("Unknown platform detected, using default paths");
                }
                return i;
            }
    }
}
const $t = p(()=>u({
        source: o(),
        contentHash: o(),
        extractedPath: o(),
        cachedAt: o(),
        lastChecked: o(),
        sourceMtimeMs: E().optional()
    }));
function AM(e) {
    return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function Le(e) {
    return e.startsWith("http://") || e.startsWith("https://");
}
function kis(e) {
    return AM(e) && !Le(e);
}
function je(e) {
    return join(e, ".mcpb-cache");
}
function Dt(e, r) {
    let n = createHash("md5").update(r).digest("hex").substring(0, 8);
    return join(e, `${n}.metadata.json`);
}
function Ie(e, r) {
    return Wne(Dt(e, r), ()=>$t().nullable(), {
        defaultValue: null,
        indent: 2
    });
}
function Be(e, r) {
    return `${e}/${r}`;
}
async function Mye(e, r, n) {
    try {
        let s = Fde(e).mcpServers?.[r];
        let i = (await Jn().readAsync(n))?.pluginSecrets?.[Be(e, r)];
        if (!s && !i) {
            return null;
        }
        t(`Loaded user config for ${e}/${r} (settings + secureStorage)`);
        return {
            ...s,
            ...i
        };
    } catch (error) {
        t(`Failed to load user config for ${e}/${r}: ${error}`, {
            level: "error"
        });
        return null;
    }
}
async function qrt(e, r, n, s, i, f) {
    try {
        let m = {};
        let d = {};
        for (let [M, S] of Object.entries(n)){
            if (s[M]?.sensitive === true) {
                d[M] = String(S);
            } else {
                m[M] = S;
            }
        }
        let g = new Set(Object.keys(d));
        let h = new Set(Object.keys(m));
        let k = Be(e, r);
        let w = 0;
        let y = await Jn().mutate((M)=>{
            let S = M.pluginSecrets?.[k];
            let L = S ? Av(S, (b, P)=>!h.has(P)) : undefined;
            w = L && S ? Object.keys(S).length - Object.keys(L).length : 0;
            if (Object.keys(d).length === 0 && w === 0) {
                return M;
            }
            return {
                ...M,
                pluginSecrets: {
                    ...M.pluginSecrets,
                    [k]: {
                        ...L,
                        ...d
                    }
                }
            };
        }, f);
        if (!y.success) {
            throw Error(`Failed to save sensitive config to secure storage for ${k}`);
        }
        if (y.warning) {
            t(`Server secrets save warning: ${y.warning}`, {
                level: "warn"
            });
        }
        if (w > 0) {
            t(`saveMcpServerUserConfig: scrubbed ${w} stale non-sensitive key(s) from secureStorage for ${k}`);
        }
        let T = fe("userSettings")?.pluginConfigs;
        let pluginConfigs = {};
        let C = 0;
        for (let M of Ioe(e)){
            let S = Object.keys(T?.[M]?.mcpServers?.[r] ?? {}).filter((P)=>g.has(P));
            let L = Object.fromEntries(S.map((P)=>[
                    P,
                    undefined
                ]));
            let b = M === e ? m : {};
            if (Object.keys(b).length > 0 || S.length > 0) {
                pluginConfigs[M] = {
                    mcpServers: {
                        [r]: {
                            ...b,
                            ...L
                        }
                    }
                };
                C += S.length;
            }
        }
        if (Object.keys(pluginConfigs).length > 0) {
            let M = await Tn("userSettings", {
                pluginConfigs
            }, undefined, i);
            if (M.error) {
                throw M.error;
            }
            if (C > 0) {
                t(`saveMcpServerUserConfig: scrubbed ${C} plaintext sensitive key(s) from settings.json for ${e}/${r}`);
            }
        }
        t(`Saved user config for ${e}/${r} (${Object.keys(m).length} non-sensitive, ${Object.keys(d).length} sensitive)`);
    } catch (error) {
        let d = W(error);
        t(`Failed to save user config for ${e}/${r}: ${d.message}`, {
            level: "error"
        });
        throw Error(`Failed to save user configuration for ${e}/${r}: ${d.message}`);
    }
}
function n5(e, r) {
    let errors = [];
    for (let [s, i] of Object.entries(r)){
        let f = _s(e, s);
        if (i.required && (f === undefined || f === "")) {
            errors.push(`${i.title || s} is required but not provided`);
            continue;
        }
        if (f === undefined || f === "") {
            continue;
        }
        if (i.type === "string") {
            if (Array.isArray(f)) {
                if (!i.multiple) {
                    errors.push(`${i.title || s} must be a string, not an array`);
                } else if (!f.every((m)=>typeof m === "string")) {
                    errors.push(`${i.title || s} must be an array of strings`);
                }
            } else if (typeof f !== "string") {
                errors.push(`${i.title || s} must be a string`);
            } else if (i.options !== undefined && !i.options.includes(f)) {
                errors.push(`${i.title || s} must be one of: ${i.options.join(", ")}`);
            }
        } else if (i.type === "number" && typeof f !== "number") {
            errors.push(`${i.title || s} must be a number`);
        } else if (i.type === "boolean" && typeof f !== "boolean") {
            errors.push(`${i.title || s} must be a boolean`);
        } else if ((i.type === "file" || i.type === "directory") && typeof f !== "string") {
            errors.push(`${i.title || s} must be a path string`);
        }
        if (i.type === "number" && typeof f === "number") {
            if (i.min !== undefined && f < i.min) {
                errors.push(`${i.title || s} must be at least ${i.min}`);
            }
            if (i.max !== undefined && f > i.max) {
                errors.push(`${i.title || s} must be at most ${i.max}`);
            }
        }
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
async function ge(e, extensionPath, userConfig = {}) {
    let { getMcpConfigForManifest } = await import("/$bunfs/root/chunk-8d6gtjen.js");
    let i = await getMcpConfigForManifest({
        manifest: e,
        extensionPath,
        systemDirs: Ue(),
        userConfig,
        pathSeparator: "/"
    });
    if (!i) {
        let f = ot(Error(`Failed to generate MCP server configuration from manifest "${e.name}"`), "MCPB manifest: failed to generate MCP server configuration");
        c(f);
        throw f;
    }
    return i;
}
async function Ve(e, source) {
    try {
        return await Ie(e, source).read();
    } catch (error) {
        t(`Failed to load MCPB cache metadata: ${error}`, {
            level: "error"
        });
        return null;
    }
}
async function Pe(e, source, n) {
    await ie().mkdir(e);
    await Ie(e, source).write(n);
}
async function Lt(source, r, n) {
    let s = hf(source);
    t(`Downloading MCPB from ${s}`);
    if (n) {
        n(`Downloading ${s}...`);
    }
    let i = performance.now();
    let f = false;
    try {
        let d = await (O1(source) ? K2.get : Wa.get)(source, {
            timeout: 120000,
            responseType: "arraybuffer",
            maxRedirects: 5,
            onDownloadProgress: (h)=>{
                if (h.total && n) {
                    let k = Math.round(h.loaded / h.total * 100);
                    n(`Downloading... ${k}%`);
                }
            }
        });
        let g = new Uint8Array(d.data);
        WI("mcpb", source, "success", performance.now() - i);
        f = true;
        await writeFile(r, Buffer.from(g));
        t(`Downloaded ${g.length} bytes to ${r}`);
        if (n) {
            n("Download complete");
        }
        return g;
    } catch (error) {
        if (!f) {
            WI("mcpb", source, "failure", performance.now() - i, Y2(error));
        }
        let d = iA(Dpe(l(error), source, s));
        let g = Error(`Failed to download MCPB file from ${s}: ${d}`);
        t(`Failed to download MCPB file from ${s}: ${d}`, {
            level: "error"
        });
        throw g;
    }
}
async function Ft(e, extractedPath, n, s) {
    if (s) {
        s("Extracting files...");
    }
    await ie().mkdir(extractedPath);
    let i = 0;
    let f = Object.entries(e).filter(([d])=>!d.endsWith("/"));
    let f_length = f.length;
    for (let [d, g] of f){
        let h = join(extractedPath, d);
        let k = dirname(h);
        if (k !== extractedPath) {
            await ie().mkdir(k);
        }
        if (d.endsWith(".json") || d.endsWith(".js") || d.endsWith(".ts") || d.endsWith(".txt") || d.endsWith(".md") || d.endsWith(".yml") || d.endsWith(".yaml")) {
            let T = new TextDecoder().decode(g);
            await writeFile(h, T, "utf-8");
        } else {
            await writeFile(h, Buffer.from(g));
        }
        let y = n[d];
        if (y && y & 73) {
            await chmod(h, y & Mqe).catch(()=>{});
        }
        i++;
        if (s && i % 10 === 0) {
            s(`Extracted ${i}/${f_length} files`);
        }
    }
    t(`Extracted ${i} files to ${extractedPath}`);
    if (s) {
        s(`Extraction complete (${i} files)`);
    }
}
async function Rt(source, r) {
    let n = ie();
    let s = je(r);
    let i = await Ve(s, source);
    if (!i) {
        return true;
    }
    try {
        await n.stat(i.extractedPath);
    } catch (error) {
        if (v(error) === "ENOENT") {
            t(`MCPB extraction path missing: ${i.extractedPath}`);
        } else {
            t(`MCPB extraction path inaccessible: ${i.extractedPath}: ${error}`, {
                level: "error"
            });
        }
        return true;
    }
    if (!Le(source)) {
        let f = join(r, source);
        let m = join(r, hf(source));
        let d;
        try {
            d = await n.stat(f);
        } catch (error) {
            if (v(error) === "ENOENT") {
                t(`MCPB source file missing: ${m}`);
            } else {
                t(`MCPB source file inaccessible: ${m}: ${Dpe(String(error), f, m)}`, {
                    level: "error"
                });
            }
            return true;
        }
        if (i.sourceMtimeMs === undefined) {
            return true;
        }
        let g = Math.floor(d.mtimeMs);
        if (g !== i.sourceMtimeMs) {
            t(`MCPB file modified: mtime ${new Date(g).toISOString()} != cached ${new Date(i.sourceMtimeMs).toISOString()}`);
            return true;
        }
    }
    return false;
}
async function Hqe(source, r, n, s, i, f, m, d) {
    let g = hf(source);
    let h = ie();
    let k = je(r);
    await h.mkdir(k);
    t(`Loading MCPB from source: ${g}`);
    let w = await Ve(k, source);
    if (w && !await Rt(source, r)) {
        t(`Using cached MCPB from ${w.extractedPath} (hash: ${w.contentHash})`);
        let F = join(w.extractedPath, "manifest.json");
        let R;
        try {
            R = await h.readFile(F, {
                encoding: "utf-8"
            });
        } catch (error) {
            if (z(error)) {
                let G = Error(`Cached manifest not found: ${F}`);
                c(G);
                throw G;
            }
            throw error;
        }
        let A = new TextEncoder().encode(R);
        let _ = await Te(A);
        if (_.user_config && Object.keys(_.user_config).length > 0) {
            let K = _.name;
            let G = await Mye(n, K, d);
            let Ne = i || G || {};
            let Ce = n5(Ne, _.user_config);
            if (f || !Ce.valid) {
                return {
                    status: "needs-config",
                    manifest: _,
                    extractedPath: w.extractedPath,
                    contentHash: w.contentHash,
                    configSchema: _.user_config,
                    existingConfig: G || {},
                    validationErrors: Ce.valid ? [] : Ce.errors
                };
            }
            if (i) {
                await qrt(n, K, i, _.user_config ?? {}, m, d);
            }
            let lt = await ge(_, w.extractedPath, Ne);
            return {
                manifest: _,
                mcpConfig: lt,
                extractedPath: w.extractedPath,
                contentHash: w.contentHash
            };
        }
        let He = await ge(_, w.extractedPath);
        return {
            manifest: _,
            mcpConfig: He,
            extractedPath: w.extractedPath,
            contentHash: w.contentHash
        };
    }
    let y;
    let T;
    let sourceMtimeMs;
    if (Le(source)) {
        let F = createHash("md5").update(source).digest("hex").substring(0, 8);
        T = join(k, `${F}.mcpb`);
        y = await Lt(source, T, s);
    } else {
        let F = join(r, source);
        if (s) {
            s(`Loading ${g}...`);
        }
        try {
            y = await h.readFileBytes(F);
            T = F;
            sourceMtimeMs = Math.floor((await h.stat(F)).mtimeMs);
        } catch (error) {
            let A = join(r, g);
            if (z(error)) {
                let _ = Error(`MCPB file not found: ${A}`);
                t(`MCPB file not found: ${A}`, {
                    level: "error"
                });
                throw _;
            }
            throw F === A ? error : new x(Dpe(l(error), F, A), "MCPB local file read failed");
        }
    }
    let contentHash = createHash("sha256").update(y).digest("hex").substring(0, 16);
    t(`MCPB content hash: ${contentHash}`);
    if (s) {
        s("Extracting MCPB archive...");
    }
    let M = await Oqe(Buffer.from(y));
    let S = b3t(y);
    let L = M["manifest.json"];
    if (!L) {
        let F = Error("No manifest.json found in MCPB file");
        t(`No manifest.json found in MCPB file: ${T}`, {
            level: "error"
        });
        throw F;
    }
    let b = await Te(L);
    t(`MCPB manifest: ${b.name} v${b.version} by ${b.author.name}`);
    if (!b.server) {
        let F = ot(Error(`MCPB manifest for "${b.name}" does not define a server configuration`), "MCPB manifest does not define a server configuration");
        c(F);
        throw F;
    }
    let extractedPath = join(k, contentHash);
    await Ft(M, extractedPath, S, s);
    if (b.user_config && Object.keys(b.user_config).length > 0) {
        let F = b.name;
        let R = await Mye(n, F, d);
        let A = i || R || {};
        let _ = n5(A, b.user_config);
        if (f || !_.valid) {
            let G = {
                source,
                contentHash,
                extractedPath,
                cachedAt: new Date().toISOString(),
                lastChecked: new Date().toISOString(),
                sourceMtimeMs
            };
            await Pe(k, source, G);
            return {
                status: "needs-config",
                manifest: b,
                extractedPath,
                contentHash,
                configSchema: b.user_config,
                existingConfig: R || {},
                validationErrors: _.valid ? [] : _.errors
            };
        }
        if (i) {
            await qrt(n, F, i, b.user_config ?? {}, m, d);
        }
        if (s) {
            s("Generating MCP server configuration...");
        }
        let He = await ge(b, extractedPath, A);
        let K = {
            source,
            contentHash,
            extractedPath,
            cachedAt: new Date().toISOString(),
            lastChecked: new Date().toISOString(),
            sourceMtimeMs
        };
        await Pe(k, source, K);
        return {
            manifest: b,
            mcpConfig: He,
            extractedPath,
            contentHash
        };
    }
    if (s) {
        s("Generating MCP server configuration...");
    }
    let U = await ge(b, extractedPath);
    let ue = {
        source,
        contentHash,
        extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs
    };
    await Pe(k, source, ue);
    t(`Successfully loaded MCPB: ${b.name} (extracted to ${extractedPath})`);
    return {
        manifest: b,
        mcpConfig: U,
        extractedPath,
        contentHash
    };
}
function rm(e) {
    return e.source;
}
function Krt(e, r) {
    return e.find((n)=>n.repository === r || n.source === r);
}
function Ox(e, r) {
    if (ZPt()) {
        return Promise.resolve({});
    }
    let { optionValues } = st();
    let s = optionValues.get(e);
    if (s !== undefined) {
        return s;
    }
    let i = At(e, r);
    optionValues.set(e, i);
    i.catch(()=>{
        if (optionValues.get(e) === i) {
            optionValues.delete(e);
        }
    });
    return i;
}
async function At(e, r) {
    let n = Fde(e).options ?? {};
    let s = (await Jn().readAsync(r))?.pluginSecrets;
    let i = [
        ...uR(e).toReversed(),
        e
    ].reduce((acc, item)=>({
            ...acc,
            ...s?.[item]
        }), {});
    return {
        ...n,
        ...i
    };
}
function Hye() {
    st().optionValues.clear();
}
async function ZTe(e, r, n, s, i) {
    let f = {};
    let m = {};
    for (let [y, T] of Object.entries(r)){
        if (n[y]?.sensitive === true) {
            m[y] = String(T);
        } else {
            f[y] = T;
        }
    }
    let d = new Set(Object.keys(m));
    let g = new Set(Object.keys(f));
    let h = await Jn().mutate((y)=>{
        let T = eIt(y.pluginSecrets, e);
        let H = T.replaced.length === 0 ? y.pluginSecrets?.[T.written] : [
            ...T.replaced.toReversed(),
            T.written
        ].reduce((acc, item)=>({
                ...acc,
                ...y.pluginSecrets?.[item]
            }), {});
        let C = H ? Av(H, (S, L)=>!g.has(L)) : undefined;
        let M = C && H && Object.keys(C).length !== Object.keys(H).length;
        if (Object.keys(m).length === 0 && !M && T.replaced.length === 0) {
            return y;
        }
        return {
            ...y,
            pluginSecrets: {
                ...Av(y.pluginSecrets ?? {}, (S, L)=>!T.replaced.includes(L)),
                [T.written]: {
                    ...C,
                    ...m
                }
            }
        };
    }, i);
    if (!h.success) {
        let y = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
        t(y.message, {
            level: "error"
        });
        throw y;
    }
    if (h.warning) {
        t(`Plugin secrets save warning: ${h.warning}`, {
            level: "warn"
        });
    }
    let k = fe("userSettings")?.pluginConfigs;
    let w = {};
    for (let y of Ioe(e)){
        let T = Object.keys(k?.[y]?.options ?? {}).filter((M)=>d.has(M));
        let H = Object.fromEntries(T.map((M)=>[
                M,
                undefined
            ]));
        let C = y === e ? f : {};
        if (Object.keys(C).length > 0 || T.length > 0) {
            w[y] = {
                options: {
                    ...C,
                    ...H
                }
            };
        }
    }
    if (Object.keys(w).length > 0) {
        let y = await Tn("userSettings", {
            pluginConfigs: Nt(k, e, w)
        }, undefined, s);
        if (y.error) {
            t(`Failed to save plugin options for ${e} to settings.json: ${l(y.error)}`, {
                level: "error"
            });
            throw Error(`Failed to save plugin options for ${e}: ${y.error.message}`);
        }
    }
    Hye();
}
async function Tis(e) {
    let unreadable = [];
    let n = new Set;
    Pr();
    let s = fe("userSettings");
    if (s === null || s === undefined) {
        let i = yn("userSettings");
        if (i !== undefined && await j1(i) !== "gone") {
            unreadable.push("settings_unreadable");
        }
    }
    for (let i of Object.keys(s?.pluginConfigs ?? {})){
        n.add(i);
    }
    try {
        let i = Jn();
        let f = i.readAsyncStrict ? await i.readAsyncStrict(e, {
            inaccessibleAs: "failure"
        }) : await i.readAsync(e);
        if (f === Zl) {
            unreadable.push("secrets_unreadable");
        } else {
            for (let m of Object.keys(f?.pluginSecrets ?? {})){
                let d = m.indexOf("/");
                n.add(d === -1 ? m : m.slice(0, d));
            }
        }
    } catch  {
        unreadable.push("secrets_unreadable");
    }
    return {
        ids: [
            ...n
        ],
        unreadable
    };
}
async function Ke(e) {
    Pr();
    let r = fe("userSettings");
    if (r !== null && r !== undefined) {
        return r;
    }
    let n = yn("userSettings");
    if (n === undefined || await j1(n) === "gone") {
        return;
    }
    t(`deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`, {
        level: "warn"
    });
    return "unreadable";
}
async function Ais(e, r, n, s) {
    let i = true;
    let f = await Ke(e);
    if (f === "unreadable") {
        i = false;
        s?.push("settings_unreadable");
    }
    let m = f === "unreadable" ? undefined : f;
    let d = Ioe(e).filter((k)=>m?.pluginConfigs?.[k] !== undefined);
    if (d.length > 0) {
        let pluginConfigs = Object.fromEntries(d.map((y)=>[
                y,
                undefined
            ]));
        let { error } = await Tn("userSettings", {
            pluginConfigs
        }, undefined, r);
        if (error) {
            t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${error.message}`, {
                level: "warn"
            });
            i = false;
            s?.push("settings_write_failed");
        } else {
            let y = await Ke(e);
            if (y === "unreadable") {
                i = false;
                s?.push("settings_unreadable");
            }
            let T = y === "unreadable" ? undefined : y?.pluginConfigs;
            if (d.some((H)=>T?.[H] !== undefined)) {
                t(`deletePluginOptions: settings.pluginConfigs[${e}] still reads back after a write that reported no error`, {
                    level: "warn"
                });
                i = false;
                s?.push("settings_remain");
            }
        }
    }
    let g = [
        e,
        ...uR(e)
    ];
    let h = (k)=>g.some((w)=>k === w || k.startsWith(`${w}/`));
    try {
        let k = Jn();
        if (!(await k.mutate((y)=>{
            if (!y.pluginSecrets) {
                return y;
            }
            let T = Object.entries(y.pluginSecrets).filter(([H])=>!h(H));
            if (T.length === Object.keys(y.pluginSecrets).length) {
                return y;
            }
            return {
                ...y,
                pluginSecrets: T.length > 0 ? Object.fromEntries(T) : undefined
            };
        }, n)).success) {
            t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
                level: "warn"
            });
            i = false;
            s?.push("secrets_write_failed");
        } else {
            let y = k.readAsyncStrict ? await k.readAsyncStrict(n, {
                inaccessibleAs: "failure"
            }) : await k.readAsync(n);
            if (y === Zl || Object.keys(y?.pluginSecrets ?? {}).some(h)) {
                t(`deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`, {
                    level: "warn"
                });
                i = false;
                s?.push(y === Zl ? "secrets_unreadable" : "secrets_remain");
            }
        }
    } catch (error) {
        t(`deletePluginOptions: storage lock unavailable for ${e}: ${l(error)}`, {
            level: "warn"
        });
        i = false;
        s?.push("secrets_write_failed");
    }
    Hye();
    return i;
}
async function Vno(e, r, n, s, i) {
    {
        let optionsCarried = true;
        let targetHadOwn = false;
        let { error } = await ta("userSettings", (M)=>{
            let S = M?.pluginConfigs?.[e];
            if (S === undefined) {
                return null;
            }
            if (M?.pluginConfigs?.[r] !== undefined) {
                targetHadOwn = true;
                return null;
            }
            return {
                pluginConfigs: {
                    [r]: S
                }
            };
        }, undefined, s);
        if (error) {
            optionsCarried = false;
            t(`copyPluginOptions: failed to copy settings.pluginConfigs[${e}]: ${error.message}`, {
                level: "warn"
            });
        }
        if (!optionsCarried) {
            t(`copyPluginOptions: the settings write failed, so the secrets of ${e} were not copied`, {
                level: "warn"
            });
            Hye();
            return {
                optionsCarried,
                secretsCarried: false,
                oldDataDirDisposable: false,
                dataDirCopied: false,
                targetHadOwn
            };
        }
        let secretsCarried = true;
        try {
            if (!(await Jn().mutate((S)=>{
                if (!S.pluginSecrets) {
                    return S;
                }
                let L = {};
                for (let [b, P] of Object.entries(S.pluginSecrets)){
                    let U = We(b, e, r);
                    if (U === undefined) {
                        continue;
                    }
                    if (S.pluginSecrets[U] === undefined) {
                        L[U] = P;
                    } else {
                        targetHadOwn = true;
                    }
                }
                if (Object.keys(L).length === 0) {
                    return S;
                }
                return {
                    ...S,
                    pluginSecrets: {
                        ...S.pluginSecrets,
                        ...L
                    }
                };
            }, i)).success) {
                secretsCarried = false;
                t(`copyPluginOptions: failed to copy pluginSecrets for ${e}`, {
                    level: "warn"
                });
            }
        } catch  {
            secretsCarried = false;
            t(`copyPluginOptions: secure storage unavailable for ${e}`, {
                level: "warn"
            });
        }
        if (!optionsCarried || !secretsCarried) {
            Hye();
            return {
                optionsCarried,
                secretsCarried,
                oldDataDirDisposable: false,
                dataDirCopied: false,
                targetHadOwn
            };
        }
        let h = wh(e);
        let k = wh(r);
        let w = `${k}.switching-${process.pid}`;
        let oldDataDirDisposable = false;
        let dataDirCopied = false;
        let dataDirKeptReason;
        let C;
        try {
            let M = await j1(h);
            if (M === "gone") {
                oldDataDirDisposable = true;
            } else if (M === "unreadable") {
                dataDirKeptReason = "copy-failed";
                t(`copyPluginOptions: the data directory of ${e} could not be examined; it is kept and was not copied`, {
                    level: "warn"
                });
            } else if (!(C = await lstat(h, {
                bigint: true
            })).isDirectory() || !await KF(dirname(h), basename(h))) {
                dataDirKeptReason = "copy-failed";
                t(`copyPluginOptions: the data directory of ${e} is not a real directory; it is kept and was not copied`, {
                    level: "warn"
                });
            } else {
                let S = await rmdir(k).then(()=>{}, (L)=>{
                    if (z(L)) {
                        return undefined;
                    }
                    return v(L);
                });
                if (S === undefined) {
                    await Aa(w);
                    let L = await KF(dirname(h), basename(h));
                    let b = await lstat(h, {
                        bigint: true
                    });
                    if (!L || !b.isDirectory() || b.dev !== C?.dev || b.ino !== C?.ino) {
                        throw Error("the old data directory is not the real directory first seen");
                    }
                    await n(h, w, h, w, h, true, new Set, undefined, false, true);
                    let P = await lstat(h, {
                        bigint: true
                    });
                    if (!P.isDirectory() || !await KF(dirname(h), basename(h)) || P.dev !== b.dev || P.ino !== b.ino) {
                        throw Error("the old data directory changed during the copy");
                    }
                    if (!(await lstat(w)).isDirectory() || !await KF(dirname(w), basename(w))) {
                        throw Error("the staging folder is not a real directory");
                    }
                    await ss(w, k);
                    if (!(await lstat(k)).isDirectory() || !await KF(dirname(k), basename(k))) {
                        await jw(k).catch(()=>{});
                        throw Error("what stands at the target after the move is not a real directory");
                    }
                    oldDataDirDisposable = true;
                    dataDirCopied = true;
                } else {
                    dataDirKeptReason = S === "ENOTEMPTY" || S === "EEXIST" || S === "ENOTDIR" ? "target-had-own" : "copy-failed";
                }
            }
        } catch (err) {
            dataDirKeptReason = "copy-failed";
            t(`copyPluginOptions: failed to copy the data directory of ${e}: ${l(err)}`, {
                level: "warn"
            });
            await Aa(w).catch(()=>{});
        }
        Hye();
        return {
            optionsCarried,
            secretsCarried,
            oldDataDirDisposable,
            dataDirCopied,
            dataDirKeptReason,
            targetHadOwn
        };
    }
    return {
        optionsCarried: false,
        secretsCarried: false,
        oldDataDirDisposable: false,
        dataDirCopied: false,
        targetHadOwn: false
    };
}
function We(e, r, n) {
    {
        let s = `${r}/`;
        if (e === r) {
            return n;
        }
        if (e.startsWith(s)) {
            return `${n}/${e.slice(s.length)}`;
        }
        return undefined;
    }
}
async function Cis(e, r) {
    {
        let n = fe("userSettings")?.pluginConfigs;
        if (n?.[e] !== undefined && n[r] !== undefined) {
            return true;
        }
        try {
            let s = (await Jn().readAsync())?.pluginSecrets ?? {};
            return Object.keys(s).some((i)=>{
                let f = We(i, e, r);
                return f !== undefined && s[f] !== undefined;
            });
        } catch  {
            t(`wouldTargetKeepOwnPluginOptions: secure storage could not be read (switch from ${e}), so the answer is 'unknown'`, {
                level: "warn"
            });
            return "unknown";
        }
    }
    return false;
}
async function eAe(e, r) {
    let userConfig = e.manifest.userConfig;
    if (!userConfig || Object.keys(userConfig).length === 0) {
        return {};
    }
    let s = await Ox(rm(e), r);
    let i = {};
    for (let [f, m] of Object.entries(userConfig)){
        let d = _s(s, f);
        if (d === undefined || d === "" || m.sensitive !== true && !n5({
            [f]: d
        }, {
            [f]: m
        }).valid) {
            i[f] = m;
        }
    }
    return i;
}
function qno(e, r) {
    let n = e?.options;
    return n !== undefined && !(typeof r === "string" && n.includes(r));
}
function Dqe(e, r) {
    let n = {};
    for (let [i, f] of Object.entries(r)){
        if (f.required && f.default === undefined) {
            continue;
        }
        n[i] = f.default ?? "";
    }
    let s = Av(e, (i, f)=>{
        let m = r[f]?.options;
        if (m === undefined || !qno(r[f], i)) {
            return true;
        }
        t(`plugin option ${f} holds a value that is not one of ${m.join(", ")}; it reads as unset`, {
            level: "warn"
        });
        return false;
    });
    return {
        ...n,
        ...s
    };
}
function lce(e, r) {
    let n = (i)=>i;
    let s = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, ()=>n(r.path));
    s = s.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, ()=>n(Kr() ?? cr()));
    if (r.source) {
        let i = r.source;
        s = s.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, ()=>n(uNe(i)));
    }
    return s;
}
function jTt(e, r, { missingKey = "throw" } = {}) {
    return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, i)=>{
        let f = _s(r, i);
        if (f === undefined) {
            if (missingKey === "literal") {
                return s;
            }
            throw Error(`Plugin option "${i}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${i}".`);
        }
        return String(f);
    });
}
function WTt(e, r) {
    try {
        return jTt(e, r) !== e;
    } catch  {
        return true;
    }
}
function epr(e, r, n, s) {
    return e.replace(/\$\{user_config\.([^}]+)\}/g, (i, f)=>{
        if (n[f]?.sensitive === true) {
            return `[sensitive option '${f}' not available in skill content]`;
        }
        let m = _s(r, f);
        if (m === undefined) {
            return i;
        }
        let d = String(m);
        if (s) {
            return s(d);
        }
        return d;
    });
}
function Nt(e, r, n) {
    let s = eIt(e, r);
    if (s.replaced.length === 0) {
        return n;
    }
    let i = [
        ...s.replaced.toReversed(),
        s.written
    ];
    let f = Av(n, (g, h)=>!s.replaced.includes(h));
    let options = {
        ...Av(i.reduce((acc, item)=>({
                ...acc,
                ...e?.[item]?.options,
                ...item === s.written ? undefined : n[item]?.options
            }), {}), (g)=>g !== undefined),
        ...f[s.written]?.options
    };
    let d = D(i.flatMap((g)=>Object.keys(e?.[g]?.mcpServers ?? {})));
    return {
        ...f,
        ...Object.fromEntries(s.replaced.map((g)=>[
                g,
                undefined
            ])),
        [s.written]: {
            options,
            ...d.length === 0 ? {} : {
                mcpServers: Object.fromEntries(d.map((g)=>[
                        g,
                        i.reduce((acc, item)=>({
                                ...acc,
                                ...e?.[item]?.mcpServers?.[g]
                            }), {})
                    ]))
            }
        }
    };
}
const FIn = ze(Ss(), (e)=>e.set(undefined));
const $ne = ze(Ss(), (e)=>e.set(undefined));
const zTt = ze(Ss(), (e)=>e.set(undefined));
function tpr(e) {
    let r = new Set(($ne.get() ?? []).map((s)=>resolve(s)));
    let n = new Set((zTt.get() ?? []).map((s)=>resolve(s)));
    return e.filter((s)=>r.has(resolve(s)) || !n.has(resolve(s)));
}
function w3t({ pluginName, pluginStorageId }) {
    if (pluginStorageId.startsWith(`${pluginName}@`)) {
        return pluginStorageId;
    }
    return `${pluginStorageId}+${pluginName}`;
}
const ipr = (e)=>w3t({
        pluginName: e.name,
        pluginStorageId: rm(e)
    });
const Ge = (e)=>{
    if (typeof e === "string") {
        return e;
    }
    return `${e.plugin}#${e.registration}`;
};
const S3t = (e)=>{
    if (typeof e === "string") {
        return e;
    }
    return e.plugin;
};
function se(e, name) {
    let n = new Set;
    for (let s of e ?? []){
        if (S3t(s) !== name) {
            continue;
        }
        if (typeof s === "string") {
            return "every";
        }
        n.add(s.registration);
    }
    return [
        ...n
    ].sort((s, i)=>s - i);
}
function Gt(e, name) {
    let n = e ?? [];
    let s = n.length - 1;
    return {
        caller: se(n.slice(s), name),
        above: se(n.slice(0, s), name)
    };
}
const BIn = po(()=>new WeakMap);
const spr = (e)=>(e ?? []).map(Ge).join(" > ");
function q(e, r, n) {
    if (!n || n.length === 0) {
        return e;
    }
    let s = BIn().get(n) ?? [];
    let i = Date.now();
    let f = (b)=>s[b]?.isLent !== true || s[b].isHeld === true;
    let { caller, above } = Gt(n.filter((b, P)=>f(P) || i < (s[P]?.until ?? 0)), e.name);
    let g = (b, P)=>b === "every" || b.includes(P);
    let h = se(n.slice(0, -1).filter((b, P)=>f(P)), e.name);
    let k = e.registrationsFor(r);
    let told = k.filter((b)=>g(above, b) && !g(caller, b) && e.hasCatch(b));
    let leftOut = k.filter((b)=>!told.includes(b) && (g(caller, b) || g(h, b)));
    if (leftOut.length === 0 && told.length === 0) {
        return e;
    }
    let T = `origin ${spr(n)}`;
    if (!e.hooks(r, leftOut)) {
        let b = caller === "every" || above === "every";
        t(`hooks module ${e.label} ${r} skipped: re-entry (` + (b ? `the plugin's own code raised it; ${T})` : `its own frame is being dispatched; ${T})`));
        return;
    }
    let H = told.length > 0;
    let C = leftOut.length > 0;
    t(`hooks module ${e.label} ${r}: ` + [
        ...C ? [
            `hooks ${leftOut.join(", ")} left out for re-entry`
        ] : [],
        ...H ? [
            `hooks ${told.join(", ")} not run for re-entry, .catch asked`
        ] : []
    ].join("; ") + ` (${T})`);
    let M = se(n.slice(0, -1).filter((b, P)=>s[P]?.isLent !== true), e.name);
    let S = told.filter((b)=>!g(M, b));
    let causes = Object.fromEntries(S.map((b)=>[
            b,
            "lent"
        ]));
    return {
        ...e,
        leftOut,
        ...H && {
            told
        },
        ...S.length > 0 && {
            causes
        },
        hooks: (b, P = [])=>e.hooks(b, [
                ...leftOut,
                ...P
            ]),
        catches: (b, P = [], U)=>e.catches(b, [
                ...leftOut,
                ...P
            ], U),
        matcherFor: (b, P = [])=>e.matcherFor(b, [
                ...leftOut,
                ...P
            ])
    };
}
function Dye(e, r, n) {
    let s = ZCe(e);
    return st().loadedModules.filter((i)=>{
        let f = i.hooks(e) ? q(i, e, n) : undefined;
        if (f === undefined) {
            return false;
        }
        return zFn(f.matcherFor(e), r, s);
    }).map((i)=>i.name);
}
const Fe = ze(new Map, (e)=>e.clear());
const Re = ze(new Set, (e)=>e.clear());
function J(e, r, n) {
    let s = `${e.name}#${e.environmentId} ${r}`;
    let i = Fe.get(s) ?? 0;
    if (i >= Lgo) {
        return;
    }
    Fe.set(s, i + 1);
    let f = i7t(e.matcherFor(r), n);
    if (f === undefined) {
        return;
    }
    let m = `${s} ${f.path}`;
    if (Re.has(m)) {
        return;
    }
    Re.add(m);
    Ll().log(Dgo(e.name, r, f), "warn");
}
function opr(e, r, n) {
    let s = e.matcherFor(r);
    let i = e.hopKey.kind === "worker";
    if (s === undefined) {
        return true;
    }
    let f = ZCe(r);
    let m = i ? WFn(s, n, f) : ult(s, n, f);
    if (!m) {
        J(e, r, n);
    }
    return m;
}
function xe(e, event, n) {
    let s = e.findIndex((f)=>opr(f, event, n));
    if (s === -1) {
        return [];
    }
    return e.slice(s);
}
function le(e, event, n) {
    let s = LT(n) ? Object.fromEntries((Aoe(event).pinnedKeys ?? []).filter((i)=>Object.hasOwn(n, i)).map((i)=>[
            i,
            n[i]
        ])) : {};
    return e.catches(event, undefined, (i)=>zFn(i, s, ZCe(event)));
}
function Y(e, event) {
    let n = [];
    for (let s of e){
        let i = s.status();
        if (i.kind !== "live") {
            let f = i.kind === "retiring" || i.kind === "unloaded" && i.retired;
            let m = i.kind === "unloaded";
            t(`hooks module ${f ? `${s.label}: its environment was retired by a reload during ${event}` : m ? `${s.label}: its environment was unloaded (during ${event})` : `${s.label}: ${i.reason} (during ${event})`}; passing on`);
            continue;
        }
        n.push(s);
    }
    return n;
}
const ke = (members, event, n)=>xe(Y(members, event), event, n);
function Kno() {
    return a.CLAUDE_CODE_PLUGIN_DIR_WATCH ?? !Ee();
}
function npr(e) {
    if (Kno()) {
        return tpr(e);
    }
    let r = new Set(($ne.get() ?? []).map((s)=>resolve(s)));
    if (a.CLAUDE_CODE_PLUGIN_DIR_WATCH === false) {
        return [];
    }
    return e.filter((s)=>r.has(resolve(s)));
}
const rpr = ()=>[
        ...nT(),
        ...aU()
    ];
const tAe = ()=>npr(rpr()).length > 0;
const UIn = 10000;
function O0e(e) {
    if (e.length <= UIn) {
        return e;
    }
    return `${ne(e, UIn)}\u2026`;
}
const Ze = 100;
function cce(e, r, n = "again") {
    let text = O0e(r);
    let i = st();
    t(`[${e}] $.ui.log: ${text}`);
    if (i.uiLogSink) {
        i.uiLogSink({
            plugin: e,
            text
        }, n);
        return;
    }
    if (i.pendingUiLog.length < Ze) {
        i.pendingUiLog = [
            ...i.pendingUiLog,
            {
                plugin: e,
                text
            }
        ];
    }
}
function D2(e, r, n = "again") {
    if (tAe()) {
        cce(e, ne(r, QA), n);
        return;
    }
    t(`${e}: ${r}`, {
        level: "error"
    });
}
const _e = (e, reason)=>e.filter((n)=>{
        let s = n.status();
        return s.kind === "dead" && s.reason === reason;
    });
const Yno = (e)=>Array.from(e).join(",") || "none";
const tNs = "the hooks worker was replaced; the plugin stays loaded for its .catch";
const GTt = (e)=>e.map((r)=>r.label).join(", ");
const Ris = (e)=>`next() result not cloneable: ${l(e)}`;
const xis = "the plugin is unloaded; /reload-plugins brings it back";
function Q({ members, event, e: e_1, hookOrigin, origin, raise, floors, cutAt, kind }) {
    let [h] = members;
    if (hookOrigin) {
        t(`hooks module ${GTt(members)}: ${event}${kind} nested in ${spr(hookOrigin)}`);
    }
    let k = members.flatMap((w)=>{
        let registrations = [
            ...w.leftOut ?? []
        ];
        let { environmentId, told, causes } = w;
        if (registrations.length > 0 || told !== undefined) {
            return [
                {
                    environmentId,
                    registrations,
                    ...told && {
                        told: [
                            ...told
                        ]
                    },
                    ...causes && {
                        causes: {
                            ...causes
                        }
                    }
                }
            ];
        }
        return [];
    });
    return {
        id: h ? h.hopKey.nextDispatchId() : 0,
        event,
        payload: e_1,
        environments: members.map((w)=>w.environmentId),
        leftOut: k.length === 0 ? undefined : k,
        origin,
        hookOrigin,
        raise,
        floors: floors.length === 0 ? undefined : floors,
        cutAt
    };
}
async function Je({ members, event, hookOrigin, signal }) {
    let i = members.find((f)=>f.status().kind === "dead")?.hopKey.replaced?.();
    if (i === undefined) {
        return members;
    }
    t(`hooks module ${members.map((f)=>f.label).join(", ")}: ${event} waits for the hooks worker's replacement`);
    await new Promise((resolvePromise)=>{
        signal.addEventListener("abort", ()=>resolvePromise(), {
            once: true
        });
        i.then(resolvePromise, resolvePromise);
    });
    return members.flatMap((f)=>{
        let m = st().loadedModules.find((h)=>h.name === f.name);
        if (!(f.status().kind !== "live" && m !== undefined && m.environmentId !== f.environmentId)) {
            return [
                f
            ];
        }
        let g = m.hooks(event) ? q(m, event, hookOrigin) : undefined;
        if (g === undefined) {
            return [];
        }
        return [
            g
        ];
    });
}
async function Ye({ hop, dispatchId, members, error, called, beneath }) {
    let { event, e: e_1, signal } = hop;
    let h = (H)=>H.filter((C)=>le(C, event, e_1));
    let reason = l(error);
    let w = _e(h(members), reason);
    let y = w[0]?.hopKey;
    let T = y?.kept;
    while(w.length > 0 && !signal.aborted){
        let H = h(Y(await Je({
            ...hop,
            members: w
        }), event));
        let C = H[0]?.hopKey;
        let M = H.find((S)=>S.name === T?.plugin);
        if (C === undefined || signal.aborted) {
            break;
        }
        t(`hooks module ${GTt(H)}: .catch asked in the replacement after the hooks worker ended during ${event}`);
        for (let S of H){
            S.enter();
        }
        try {
            let S = await C.dispatch({
                ...Q({
                    ...hop,
                    members: H,
                    kind: ""
                }),
                ended: {
                    reason,
                    called: called(),
                    ...M !== undefined && {
                        kept: M.environmentId
                    }
                }
            }, beneath, signal);
            let L = M !== undefined && T !== undefined && y?.isKeptVerdict?.(dispatchId, S.unmatched !== true) === true;
            for (let b of H){
                if (S.answered?.includes(b.environmentId) === true) {
                    D2(b.name, `the hooks worker was replaced during ${event}; ${b.name}'s .catch answered in place of its hook`);
                }
            }
            if (L) {
                C.unloadCrashed?.(M.environmentId, T);
            }
            return S;
        } catch (err) {
            reason = l(err);
            w = _e(H, reason);
            t(`hooks module ${GTt(H)}: .catch not heard after the hooks worker ended during ${event}: ${reason}` + (w.length > 0 ? "; asked again of whoever stands" : ""), {
                level: "error"
            });
        } finally{
            for (let S of H){
                S.leave();
            }
        }
    }
    if (w.length > 0) {
        t(`hooks module ${GTt(w)}: no .catch is asked after the hooks worker ended during ${event}: ` + (signal.aborted ? "its caller is gone" : "no replacement that may be waited for holds its hook"), {
            level: "error"
        });
    }
}
async function apr(hop) {
    let { event, e: e_1, call, signal, floors } = hop;
    let m = ke(hop.members, event, e_1);
    let d = m[0]?.hopKey;
    if (!d) {
        return call(e_1, undefined, floors);
    }
    let g;
    let h = (C, M, S)=>{
        g = call(C, M, S);
        return g;
    };
    let k = Q({
        ...hop,
        members: m,
        kind: ""
    });
    let w = performance.now();
    for (let C of m){
        C.enter();
    }
    let y;
    try {
        y = await d.dispatch({
            ...k,
            caughtBy: m.filter((C)=>le(C, event, e_1)).map((C)=>C.environmentId)
        }, h, signal);
    } catch (error) {
        let M = await Ye({
            hop,
            dispatchId: k.id,
            members: m,
            error,
            called: ()=>g !== undefined,
            beneath: (S, L, b)=>g ?? h(S, L, b)
        });
        if (M === undefined) {
            throw error;
        }
        y = M;
    } finally{
        for (let C of m){
            C.leave();
        }
    }
    let H = typeof e_1 === "object" && "requestId" in e_1 && typeof e_1.requestId === "string" ? ` key=${e_1.requestId}` : "";
    t(`hooks module ${GTt(m)} ${event} settled in ${(performance.now() - w).toFixed(1)}ms (${d.kind} hop, next() included)${H}`);
    return Qe(y.result);
}
function we(loaded, event, n) {
    loaded.leave();
    t(`hooks module ${loaded.label} ${event} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`);
}
function be({ loaded, event, origin }, s) {
    let i = Y([
        loaded
    ], event).length === 1 && opr(loaded, event, s);
    if (i && origin) {
        t(`hooks module ${loaded.label} (native): ${event} nested in ` + spr(origin));
    }
    return i;
}
function $o({ loaded, event, origin }) {
    if (loaded.link === undefined) {
        throw new Me(`${loaded.name}: ${event}: not a native module; it runs in a hop`);
    }
    let i = loaded.link({
        event,
        leftOut: loaded.leftOut,
        told: loaded.told,
        causes: loaded.causes,
        hookOrigin: origin
    });
    let i_catch = i.catch;
    async function m(h) {
        let k = performance.now();
        loaded.enter();
        try {
            return await h();
        } finally{
            we(loaded, event, k);
        }
    }
    async function d(h, k) {
        loaded.enter();
        try {
            return await i_catch?.(h, k);
        } finally{
            loaded.leave();
        }
    }
    let run = (h, k, w)=>{
        if (be({
            loaded,
            event,
            origin
        }, h)) {
            return m(()=>i.run(h, k, w));
        }
        return k(h);
    };
    return Do({
        ...i,
        run,
        ...i_catch !== undefined && {
            catch: d
        }
    });
}
function et(e) {
    let { event, e: e_1, open, signal, floors } = e;
    let m = ke(e.members, event, e_1);
    let d = m[0]?.hopKey;
    if (!d) {
        return open(e_1, undefined, floors);
    }
    let g = (w, y, T)=>KCe(open(w, y, T));
    let h = performance.now();
    for (let w of m){
        w.enter();
    }
    let k = d.dispatchStream(Q({
        ...e,
        members: m,
        kind: " stream"
    }), g, signal);
    return async function*() {
        try {
            let w = yield* KCe(k);
            return Qe(w);
        } finally{
            for (let w of m){
                w.leave();
            }
            t(`hooks module ${GTt(m)} ${event} stream settled in ${(performance.now() - h).toFixed(1)}ms (${d.kind} hop, next() included)`);
        }
    }();
}
function _o({ loaded, event, origin }) {
    if (loaded.streamLinks === undefined) {
        throw new Me(`${loaded.name}: ${event}: not a native module; it runs in a hop`);
    }
    function i(f) {
        let m = performance.now();
        loaded.enter();
        return async function*() {
            try {
                return yield* f;
            } finally{
                we(loaded, event, m);
            }
        }();
    }
    return loaded.streamLinks({
        event,
        leftOut: loaded.leftOut,
        told: loaded.told,
        causes: loaded.causes,
        hookOrigin: origin
    }).map((f)=>{
        let f_catch = f.catch;
        return {
            ...f,
            run: async (d, g, h)=>{
                if (be({
                    loaded,
                    event,
                    origin
                }, d)) {
                    return i(await f.run(d, g, h));
                }
                return g(d);
            },
            ...f_catch !== undefined && {
                catch: async (d, g, h)=>i(await f_catch(d, g, h))
            }
        };
    });
}
const Se = (members, r, event)=>members.map((s)=>{
        let i = r.get(s);
        if (i === undefined) {
            throw new Me(`${event}: a hop member is not one of these handlers`);
        }
        return i;
    });
const tt = ({ loaded, event, origin, raise, owners })=>({
        name: loaded.name,
        tier: loaded.tier,
        ...wgo(loaded.args.modulePath) && {
            answersForEngine: true
        },
        run: (f, m, { call, floors, cutAt })=>apr({
                members: [
                    loaded
                ],
                event,
                e: f,
                call,
                signal: m.signal,
                hookOrigin: origin,
                raise,
                origin: m.origin,
                floors,
                cutAt
            }),
        hop: {
            key: loaded.hopKey,
            run: (f)=>apr({
                    members: Se(f.members, owners, event),
                    event,
                    e: f.e,
                    call: f.call,
                    signal: f.signal,
                    hookOrigin: origin,
                    raise,
                    origin: f.origin,
                    floors: f.floors,
                    cutAt: f.cutAt
                })
        }
    });
function rt(e) {
    if (e.loaded.link !== undefined) {
        return $o(e);
    }
    return tt(e);
}
function Oe(e) {
    let { loadedModules, moduleSeats } = st();
    return loadedModules.find((s)=>s.name === e)?.tier ?? moduleSeats.get(e) ?? "user";
}
const jIn = (e)=>mws.some((r)=>r === Oe(e));
function Xno(e, r, n) {
    let s = e.matcherFor(r);
    if (s === undefined) {
        return true;
    }
    try {
        if (ult(s, n, ZCe(r))) {
            return true;
        }
    } catch (error) {
        t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(error)}); the hop decides`);
        return true;
    }
    J(e, r, n);
    return false;
}
function nt(e, r, { keys, e: e_1 }) {
    let i = e.matcherFor(r);
    if (i === undefined || !LT(e_1)) {
        return false;
    }
    try {
        let m = ZCe(r);
        let d = keys.some((g)=>Object.hasOwn(e_1, g) && !zFn(i, {
                [g]: e_1[g]
            }, m));
        if (d) {
            J(e, r, e_1);
        }
        return d;
    } catch (error) {
        t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(error)}); the hop decides`);
        return false;
    }
}
function M0e(e, r, { only, e: e_1, among, pinned } = {}) {
    let m = (among ?? st().loadedModules).flatMap((g)=>{
        if (!g.hooks(e) || g.name !== (only ?? g.name)) {
            return [];
        }
        let h = q(g, e, r);
        if (h === undefined || pinned !== undefined && nt(h, e, pinned)) {
            return [];
        }
        return [
            h
        ];
    });
    if (e_1 === undefined) {
        return m;
    }
    let d = m.findIndex((g)=>Xno(g, e, e_1));
    if (d === -1) {
        return [];
    }
    return m.slice(d);
}
function it({ event, e: e_1, origin, only }) {
    let i = xe(M0e(event, origin, {
        only
    }), event, e_1).filter((m)=>m.link === undefined && m.hopKey.isDeclared?.(m.name) !== false && le(m, event, e_1)).map((m)=>m.name);
    if (i.length === 0) {
        return undefined;
    }
    return new Me(`${event} refused: the hooks worker is being replaced, and a hook on it with a .catch (${i.join(", ")}) cannot be asked until the reload is in`);
}
const v3t = new AsyncLocalStorage;
function lpr(e, r) {
    let n = {
        isOver: false
    };
    let s = e.run(n, r);
    let i = ()=>{
        n.isOver = true;
    };
    s.then(i, i);
    return s;
}
const nNs = (e)=>lpr(v3t, e);
const Jno = ()=>v3t.getStore()?.isOver === false;
function WIn(e, r) {
    let n = [
        ...st().hooksRespawns
    ];
    let s = n.length > 0 && Jno();
    let i = s ? it(e) : undefined;
    if (i !== undefined) {
        t(i.message, {
            level: "error"
        });
        return Promise.reject(i);
    }
    if (n.length === 0 || s) {
        return;
    }
    let f = Promise.all(n).then(()=>{});
    return (r !== undefined ? qa(f, r, ()=>zSr(r)) : f).then(()=>WIn(e, r));
}
function E3t(e, r) {
    let n = st();
    if (n.hooksRespawns.size > 0 && n.loadedModules.some((i)=>i.link === undefined && i.hooks(e.event))) {
        return WIn(e, r);
    }
}
function Qno(e, r) {
    let s = e.event === "classic.SessionEnd" ? undefined : E3t(e, r);
    if (s !== undefined && r !== undefined) {
        return s.catch((f)=>Promise.reject(r.aborted ? Hde(r) : f));
    }
    return s;
}
function CM(e, r, n = {}) {
    let s = [];
    let owners = new Map;
    for (let f of M0e(e, r, n)){
        let m = rt({
            loaded: f,
            event: e,
            origin: r,
            raise: n.raise,
            owners
        });
        owners.set(m, f);
        s.push(m);
    }
    return s;
}
var Qe = (e)=>e;
var Do = (e)=>e;
const ft = (e)=>[
        ...e
    ];
function ZJ(e) {
    let r = e?.at(-1);
    if (r === undefined) {
        return y$e;
    }
    let n = S3t(r);
    return Object.freeze({
        plugin: n,
        tier: Oe(n)
    });
}
function Pis(e) {
    let { promise, resolve } = Promise.withResolvers();
    e.add(promise);
    return {
        respawn: promise,
        loaded: ()=>{
            e.delete(promise);
            resolve();
        }
    };
}
const ct = (e, r)=>({
        name: e.loaded.name,
        tier: e.loaded.tier,
        run: (n, s, { open, floors })=>et({
                members: [
                    e.loaded
                ],
                event: e.event,
                e: n,
                open,
                signal: s.signal,
                hookOrigin: e.origin,
                raise: e.raise,
                origin: s.origin,
                floors
            }),
        hop: {
            key: e.loaded.hopKey,
            run: ({ members, e: e_1, open, signal, origin, floors })=>et({
                    members: Se(members, r, e.event),
                    event: e.event,
                    e: e_1,
                    open,
                    signal,
                    hookOrigin: e.origin,
                    raise: e.raise,
                    origin,
                    floors
                })
        }
    });
function Iis(e, r, n = {}) {
    let s = new Map;
    return M0e(e, r, n).flatMap((i)=>{
        if (i.streamLinks !== undefined) {
            return ft(_o({
                loaded: i,
                event: e,
                origin: r
            }));
        }
        let f = ct({
            loaded: i,
            event: e,
            origin: r,
            raise: n.raise
        }, s);
        s.set(f, i);
        return [
            f
        ];
    });
}
const rNs = 3;
const Ois = (e)=>`${e}: the op was aborted: the plugin's environment was unloaded`;
export { $In, Oqe, Mqe, b3t, AM, kis, Mye, qrt, n5, Hqe, rm, Krt, Ox, Hye, ZTe, Tis, Ais, Vno, Cis, eAe, qno, Dqe, lce, jTt, WTt, epr, FIn, $ne, zTt, Kno, tpr, npr, rpr, tAe, UIn, O0e, cce, D2, opr, S3t, BIn, spr, Yno, tNs, GTt, w3t, Ris, ipr, xis, apr, jIn, Xno, M0e, v3t, lpr, nNs, Jno, WIn, E3t, Qno, CM, Dye, ZJ, Pis, Iis, rNs, Ois };
