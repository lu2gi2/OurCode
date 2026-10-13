import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, ot, W, l, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { sG } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { i, js } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f, Ur, Ft, za } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, OH, tT, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Non } from "/$bunfs/root/chunk-24agvrd9.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Et, Js, je, ec, Yk } from "/$bunfs/root/chunk-r3z1chqx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Zue, $Y, Nn, gc, hm } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { H5t, Jl } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { XB, Fa, fn, JM, NE, yr, Ude, ylt, Ooe, c7t, rf, yd, gu, ha, Pi, Up, hS, XW, vn, a7, p7t, Ki, lm, _r, wl, NT, rRe } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { zco, RRt, xRt, fXt, PRt, dS, DQ } from "/$bunfs/root/chunk-9fvky64k.js";
import { D0n, MQ, lXt, c_, WL, ait, cXt, Td } from "/$bunfs/root/chunk-4521ay78.js";
import { tt, DRe, Aks } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { gv, aAe } from "/$bunfs/root/chunk-a5rabwn2.js";
import { net, zGe, GGe, VGe, s3r, LSt, set, ake, fHe, iet, Uge, rJ, n2, AEn, Sx, CEn, Nte, Ivt, m$, dle, MAn, HAn, $9r, sc, dne, VC, rar, iEt, une, j2e, Nc, Dl, SCn, pne, z2e, IJ, cv, a4t, lar, car, ZZo, g2, qC, lEt, l4t, h2, t4, res, oes, I3, Cx, rB, Ytt, eS, Zn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { jr, Ir, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { n5, rm, Krt, Ox, ZTe, eAe } from "/$bunfs/root/chunk-7xekr000.js";
import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { iAe, Fqe, T3t } from "/$bunfs/root/chunk-yzy8cpa4.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Mm, an, Yu, nF, xo, Vo } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { x1e, dee, sNt, iNt, zMr, $ft } from "/$bunfs/root/chunk-6pj667f1.js";
import { vin, iIr, nee, aIr, rfe, $Oo, lIr, XBe, UOo, BOo, jOo, H0t, WOo, zOo, GOo, VOo, qOo, D0t, KOo, YOo, XOo } from "/$bunfs/root/chunk-66wzxkyc.js";
import { CC, R1e, SKn, wKn, Uln, eNt, Bln, jln, kKn, TKn, Bwe, tNt, nNt, Dft, rNt, oNt } from "/$bunfs/root/chunk-fbn208hs.js";
import { Mjo, Fg, nBr, aWe } from "/$bunfs/root/chunk-8rf5jf6d.js";
import { Dgt } from "/$bunfs/root/chunk-wqqh08z5.js";
import { qP, KP } from "/$bunfs/root/chunk-1kst8web.js";
import { O0t } from "/$bunfs/root/chunk-ge35f54y.js";
import { sIr } from "/$bunfs/root/chunk-x6mx5x2e.js";
import { hfe } from "/$bunfs/root/chunk-76vcfzrt.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Xee } from "/$bunfs/root/chunk-k7a6yern.js";
import { mze, PWt, IWt } from "/$bunfs/root/chunk-nye35vx4.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { Fde } from "/$bunfs/root/chunk-pjqd7qee.js";
import { Kd } from "/$bunfs/root/chunk-yp41169e.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { join, relative, resolve } from "path";
N();
const Ye = (s, o)=>{
    if (s === undefined) {
        return undefined;
    }
    return o?.manifest.version;
};
async function We(s, o, a) {
    if (o !== undefined) {
        if (o.readFromFolderAt === undefined) {
            return undefined;
        }
        return o.path;
    }
    let p = await sIr(s, a);
    if (p.kind === "folder") {
        return p.path;
    }
}
async function ze(s, o, a) {
    let p = await Promise.all(s.map((u)=>We(u, o.get(u), a)));
    return new Map(s.map((u, g)=>[
            u,
            p[g]
        ]));
}
function Ve(version, o, a) {
    return (a === undefined ? version : o?.manifest.version ?? version) || "unknown";
}
async function le(s) {
    await Yu(OH(_({
        ...s,
        nonce: $Oo()
    })) + `
`);
}
function SVn(s) {
    if (s instanceof dne) {
        return s.reason.kind;
    }
    return rar(s) ?? lIr(s);
}
function Xe(marketplace, declaredInSettings) {
    return zco(marketplace, {
        declaredInSettings
    }).map((a, p)=>`${p === 0 ? "    Error: " : "           "}${a}`);
}
async function ue(s, o, a) {
    if (o instanceof Jl) {
        await za(s, "command_source_refused");
    } else {
        await Ft(s, a);
    }
    await nF();
}
function Ze(attempted, policyRefused, failed, p = 0, u = []) {
    let g = attempted - policyRefused.length - failed.length;
    let m = [];
    if (policyRefused.length > 0) {
        m.push(cXt(policyRefused.length, policyRefused.map((h)=>CC(h))));
    }
    if (failed.length > 0) {
        m.push($9r(failed.length, failed.map((h)=>CC(h))));
    }
    if (p > 0) {
        m.push(`${p} ${I(p, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`);
    }
    if (u.length > 0) {
        m.push(`${yr} (built in) could not be refreshed and was skipped (see --debug)`);
    }
    return {
        messages: m,
        summary: Qe(g, policyRefused.length, failed.length)
    };
}
function Qe(updatedCount, policyRefusedCount, failedCount) {
    let p = HAn({
        failedCount,
        updatedCount,
        policyRefusedCount
    });
    let u = failedCount > 0 ? updatedCount > 0 ? `Updated ${updatedCount} ${I(updatedCount, "marketplace")}, but not all` : "No marketplaces were updated" : updatedCount > 0 ? `Successfully updated ${updatedCount} ${I(updatedCount, "marketplace")}` : policyRefusedCount > 0 ? "No marketplaces were updated" : "No marketplaces needed updating";
    if (p === null) {
        return u;
    }
    return `${p} ${u}`;
}
function Pwe(s, o) {
    if (s instanceof Jl) {
        t(`${o} refused: ${s.message}`);
        return an(gc(s.message));
    }
    t(`Failed to ${o}: ${l(s)}`, {
        level: "error"
    });
    an(gc(`${te.cross} Failed to ${o}: ${l(s)}`));
}
async function we(s, o, a, p = s) {
    if (a !== undefined) {
        await le({
            ...a,
            outcome: "failed",
            message: gc(l(s)),
            failureCode: SVn(p)
        });
    }
    return Pwe(s, o);
}
function Fe(error, o = 300) {
    if (error instanceof Jl) {
        return error;
    }
    return Et(l(error), o);
}
function be(s) {
    let o = [];
    if (s.errors.length > 0) {
        o.push(`${te.cross} Found ${s.errors.length} ${I(s.errors.length, "error")}:`, "");
        s.errors.forEach((a)=>{
            o.push(`  ${te.pointer} ${a.path}: ${a.message}`);
        });
        o.push("");
    }
    if (s.warnings.length > 0) {
        o.push(`${te.warning} Found ${s.warnings.length} ${I(s.warnings.length, "warning")}:`, "");
        s.warnings.forEach((a)=>{
            o.push(`  ${te.pointer} ${a.path}: ${a.message}`);
        });
        o.push("");
    }
    if (s.notes !== undefined) {
        s.notes.forEach((a)=>{
            o.push(`  ${te.pointer} ${a}`);
        });
        o.push("");
    }
    return o;
}
async function qFs(s, o, a) {
    if (a.cowork) {
        sG(true);
    }
    let p;
    try {
        p = await aWe(o);
    } catch (error) {
        if (jt(error)) {
            t(`Plugin validation failed for ${o}: ${l(error)}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        console.error(`${te.cross} Unexpected error during validation: ${Fg(l(error), 200)}`);
        await Ft("cli_plugin_validate", "cli_plugin_validate_exception");
        return xo(2);
    }
    let { manifest, contents } = p;
    let { allSuccess, noErrors, hasWarnings } = Mjo(manifest ? [
        manifest,
        ...contents
    ] : contents, a);
    let P = await oNt(o, manifest, contents);
    let v = ()=>{
        if (allSuccess) {
            return Ur("cli_plugin_validate");
        }
        return za("cli_plugin_validate", "cli_plugin_validate_failed");
    };
    if (a.json) {
        await Yu(se(mn(p, {
            success: allSuccess,
            strict: a.strict === true
        }, P)) + `
`);
        await v();
        return xo(allSuccess ? 0 : 1);
    }
    let y = manifest ? [
        `Validating ${manifest.fileType} manifest: ${manifest.filePath}`,
        "",
        ...be(manifest)
    ] : [
        `Validating components in: ${p.resolvedPath}`,
        ""
    ];
    for (let T of contents){
        y.push(`Validating ${T.fileType}: ${T.filePath}`, "");
        y.push(...be(T));
    }
    y.push(...rNt(P));
    if (allSuccess) {
        y.push(hasWarnings ? `${te.tick} Validation passed with warnings` : `${te.tick} Validation passed`);
    } else if (noErrors && hasWarnings) {
        y.push(`${te.cross} Validation failed (--strict treats warnings as errors)`);
    } else {
        y.push(`${te.cross} Validation failed`);
    }
    await KP(await s(), e(n, {
        children: ie(y)
    }));
    await v();
    return xo(allSuccess ? 0 : 1);
}
async function KFs(s, o, a) {
    let p = await tNt(o ?? ".", {
        force: a.force
    });
    let u = [];
    for (let y of p.warnings){
        u.push(`${te.warning} ${y}`);
    }
    if (!p.ok) {
        await Ft("cli_plugin_tag", "cli_plugin_tag_prepare_failed");
        u.push(`${te.cross} ${p.error}`);
        ae(s, u, 1);
        return;
    }
    let { plan } = p;
    u.push(`Plugin:  ${plan.pluginName}`, `Version: ${plan.version} (from ${plan.versionFrom})`);
    if (plan.marketplace) {
        u.push(`Marketplace entry: plugins[${plan.marketplace.entryIndex}] in ${plan.marketplace.path}` + (plan.marketplace.entryVersion ? ` (version: ${plan.marketplace.entryVersion})` : ""));
    }
    u.push(`Tag:     ${plan.tag}`, "");
    let remote = a.remote ?? "origin";
    let force = a.force ?? false;
    let R = Dft(plan, a.message);
    let P = `git -C ${plan.gitRoot} push ${force ? "--force " : ""}${remote} refs/tags/${plan.tag}`;
    if (a.dryRun) {
        await Ur("cli_plugin_tag");
        u.push(`${te.tick} Dry run \u2014 would create tag ${plan.tag} at HEAD in ${plan.gitRoot}`, `  git -C ${plan.gitRoot} tag ${force ? "-f " : ""}-a ${plan.tag} -m ${_(R)}`, `  ${P}`);
        ae(s, u, 0);
        return;
    }
    let v = await nNt(plan, {
        push: a.push ?? false,
        force,
        message: a.message,
        remote,
        allowGitTerminalPrompt: true
    });
    if (!v.ok) {
        await Ft("cli_plugin_tag", "cli_plugin_tag_create_failed");
        u.push(`${te.cross} ${v.error}`);
        ae(s, u, 1);
        return;
    }
    await Ur("cli_plugin_tag");
    u.push(`${te.tick} Created tag ${plan.tag}`);
    if (v.pushed) {
        u.push(`${te.tick} Pushed to ${remote}`);
    } else {
        u.push(`  Push with: ${P}`);
    }
    ae(s, u, 0);
}
function ae(s, o, a) {
    s.render(e(qP, {
        children: e(n, {
            children: ie(o)
        })
    }));
    s.waitUntilExit().then(()=>xo(a));
}
async function YFs(s, o, a, p) {
    let u = [];
    let g = KOo(o);
    if (g) {
        await Ft("cli_plugin_init", "invalid_name");
        u.push(`${te.cross} Invalid plugin name "${o}": ${g}`);
        ae(s, u, 1);
        return;
    }
    let m = [];
    for (let C of a.with ?? []){
        if (D0t.includes(C)) {
            m.push(C);
        } else {
            await Ft("cli_plugin_init", "invalid_component");
            u.push(`${te.cross} Unknown --with component "${C}". Valid: ${D0t.join(", ")}`);
            ae(s, u, 1);
            return;
        }
    }
    if (!MQ()) {
        await Ft("cli_plugin_init", "policy_blocked");
        u.push(`${te.cross} ${lXt(Rs(join(ve(), "skills")))}`);
        ae(s, u, 1);
        return;
    }
    let h = join(ve(), "skills");
    let R = join(h, o);
    if (relative(h, resolve(R)).startsWith("..")) {
        await Ft("cli_plugin_init", "invalid_name");
        u.push(`${te.cross} Plugin name "${o}" would write outside ${Rs(h)}`);
        ae(s, u, 1);
        return;
    }
    let P = a.author ?? await Aks();
    let email = a.authorEmail ?? await DRe();
    if (!P && a.authorEmail) {
        u.push(`${te.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`);
    }
    let author = P ? email ? {
        name: P,
        email
    } : {
        name: P
    } : undefined;
    let T = YOo({
        name: o,
        description: a.description,
        author,
        with: m
    });
    let H;
    try {
        let C = await XOo(R, T, {
            force: a.force
        });
        if (!C.ok) {
            await Ft("cli_plugin_init", "target_exists");
            u.push(`${te.cross} ${C.error}`);
            ae(s, u, 1);
            return;
        }
        H = C.skipped;
    } catch (error) {
        await Ft("cli_plugin_init", "write_failed");
        c(error);
        u.push(`${te.cross} Failed to write scaffold: ${l(error)}`);
        ae(s, u, 1);
        return;
    }
    for (let C of H){
        u.push(`  kept existing ${C} (use --force to overwrite)`);
    }
    let k = await nBr(R, {
        unrecordableNames: "warn"
    });
    if (!k.success || k.warnings.length > 0) {
        u.push(...be(k));
    }
    if (!k.success) {
        await Ft("cli_plugin_init", "self_validate_failed");
        ae(s, u, 1);
        return;
    }
    await Ur("cli_plugin_init");
    let F = `${o}@${gu}`;
    u.push(`${te.tick} Created plugin "${o}" at ${Rs(R)}`);
    let V = Qn().enabledPlugins ?? {};
    let A = Wu()?.has(o) ?? false;
    let O = await Dl(p);
    let E = Object.keys(V).find((C)=>{
        let M = vn(C);
        return M.name === o && M.marketplace !== undefined && M.marketplace !== Pi && !Up(M.marketplace) && O[M.marketplace] !== undefined;
    });
    let D = V[F] === false;
    if (A) {
        u.push(`  ${te.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${F} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`);
    } else if (E) {
        u.push(`  ${te.warning} The name "${o}" is already taken by ${E} \u2014 when that plugin loads, ${F} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`);
    } else if (D) {
        let C = Fa("plugin enable", F);
        u.push(`  ${te.warning} A disabled setting for ${F} exists, so it won't load until you re-enable it${C ? `: ${C}` : " in /plugin"}`);
    } else {
        u.push(`  It will auto-load next session as ${F}. Run /reload-plugins to load it now.`);
    }
    let U = Fa("plugin disable", F);
    u.push(`  ${U ? `Disable: ${U}. ` : "Disable: in /plugin. "}Remove: delete the directory.`);
    ae(s, u, 0);
}
async function XFs(s, o, a, p) {
    if (o.cowork) {
        sG(true);
    }
    O0t();
    i("tengu_plugin_list_command", {});
    let u = await h2(a);
    if (o.json && typeof o.dataSize === "string" && !(Object.hasOwn(u.plugins, o.dataSize) && (u.plugins[o.dataSize]?.length ?? 0) > 0)) {
        return Vo(`${te.cross} --data-size names a plugin that is not installed`);
    }
    let { getPluginEditableScopes, editableScopeOf } = await import("/$bunfs/root/chunk-jmzpcd8h.js");
    let h = getPluginEditableScopes();
    let R = Object.keys(u.plugins);
    await zGe();
    let { enabled, disabled, errors, warnings } = await eS(a, p);
    let H = [
        ...enabled,
        ...disabled
    ];
    let k = new Map(H.map((M)=>[
            M.source,
            M
        ]));
    let F = {
        plugins: H,
        errors,
        warnings
    };
    let V = [
        {
            header: "Session-only plugins (--plugin-dir / --plugin-url):",
            scopeOf: ()=>"session",
            standaloneErrorScope: "session",
            standaloneWarningScope: "session",
            pathOf: (M)=>M.path,
            showScope: false,
            ...$e(yd, F)
        },
        {
            header: `Synced from claude.ai${H5t() ? "" : " — sync is off in this shell; these load only in a synced session"}:`,
            scopeOf: ()=>"synced",
            standaloneErrorScope: "synced",
            standaloneWarningScope: "synced",
            pathOf: (M)=>M.path,
            showScope: false,
            ...$e(ha, F)
        },
        {
            header: "Skills-directory plugins (.claude/skills/*):",
            scopeOf: (M)=>M.scope ?? "user",
            standaloneErrorScope: "user",
            standaloneWarningScope: "project",
            pathOf: Ytt,
            showScope: true,
            ...$e(gu, F)
        }
    ];
    let A = await ze(R, k, a);
    if (o.json) {
        let installed = [];
        for (let id of R.sort()){
            let q = u.plugins[id];
            if (!q || q.length === 0) {
                continue;
            }
            let ne = k.get(id);
            let ee = ne?.name ?? vn(id).name;
            let L = errors.filter((re)=>Bwe(re, id, ee));
            let G = warnings.filter((re)=>Bwe(re, id, ee));
            let z = L.map(dS);
            let Z = G.map(DQ);
            let Q = L.map(de);
            let K = G.map(de);
            let projectEnabled = iNt(id);
            let dataDirSize;
            let dataDirUnreadable;
            if (o.dataSize === true || o.dataSize === id) {
                try {
                    dataDirSize = await D0n(id, {
                        throwIfUnreadable: true
                    }) ?? undefined;
                } catch  {
                    dataDirUnreadable = true;
                }
            }
            for (let re of q){
                let mcpServers;
                if (ne) {
                    let _e = ne.mcpServers || await net(ne, undefined, a, undefined, {
                        readOnlyListing: true
                    });
                    if (_e && Object.keys(_e).length > 0) {
                        mcpServers = _e;
                    }
                }
                installed.push({
                    id,
                    version: re.version || "unknown",
                    scope: re.scope,
                    enabled: editableScopeOf(h, id) !== undefined,
                    installPath: re.installPath,
                    readFromFolder: A.get(id),
                    folderVersion: Ye(A.get(id), ne),
                    installedAt: re.installedAt,
                    lastUpdated: re.lastUpdated,
                    projectPath: re.projectPath,
                    mcpServers,
                    errors: z.length > 0 ? z : undefined,
                    notes: Z.length > 0 ? Z : undefined,
                    errorDetails: Q.length > 0 ? Q : undefined,
                    noteDetails: K.length > 0 ? K : undefined,
                    projectEnabled,
                    dataDirSize,
                    dataDirUnreadable,
                    hasUserConfig: Je(ne)
                });
            }
        }
        for (let J of V){
            installed.push(...await hn(J, a));
        }
        let B;
        if (o.available) {
            let available = [];
            try {
                let [q, ne] = await Promise.all([
                    Nc(a),
                    iEt(a)
                ]);
                let { marketplaces } = await dle(q, a);
                let L = await qC() !== "unavailable" ? new Set(jln(eNt(marketplaces.flatMap(({ name, data })=>(data?.plugins ?? []).map((entry)=>{
                        let Q = m$(entry.name, name);
                        return {
                            entry,
                            marketplaceName: name,
                            pluginId: Q,
                            isInstalled: rB(Q)
                        };
                    })), q), q, await Bln(q, a)).map((G)=>G.pluginId)) : null;
                for (let { name, data } of marketplaces){
                    if (data) {
                        let Z = data.plugins.filter((Q)=>{
                            let K = m$(Q.name, name);
                            return !rB(K) && (L === null || L.has(K));
                        });
                        for (let Q of (await R1e(name, Z, q, a))){
                            let K = m$(Q.name, name);
                            available.push({
                                pluginId: K,
                                name: Q.name,
                                description: Q.description,
                                marketplaceName: name,
                                version: Q.version,
                                source: Q.source,
                                installCount: ne?.get(K)
                            });
                        }
                    }
                }
            } catch  {}
            B = se({
                installed,
                available
            });
        } else {
            B = se(installed);
        }
        await Yu(B + `
`);
        await Ur("cli_plugin_list");
        return;
    }
    let O = [];
    let E = await I3(a);
    if (E !== undefined) {
        O.push(`Note: ${t4(E)}`, "");
    } else if (R.length === 0 && !V.some(He)) {
        O.push("No plugins installed. Use `claude plugin install` to install a plugin.");
    }
    let D = await oes();
    if (D.length > 0) {
        if (O.length > 0 && O.at(-1) !== "") {
            O.push("");
        }
        O.push(`Note: install records under names that no version of Claude Code can use were removed from installed_plugins.json. Their copy is kept for a while in ${D.join(", ")}. Nothing needs doing about these copies.`, "");
    }
    let U = await res();
    if (U.length > 0) {
        if (O.length > 0 && O.at(-1) !== "") {
            O.push("");
        }
        O.push(`Note: installed_plugins.json could not be read and was rebuilt. What it held is kept for a while in ${U.join(", ")}. Plugins it listed may need installing again; look there for what was recorded.`, "");
    }
    if (R.length > 0) {
        O.push("Installed plugins:", "");
    }
    for (let M of R.sort()){
        let B = u.plugins[M];
        if (!B || B.length === 0) {
            continue;
        }
        let J = k.get(M)?.name ?? vn(M).name;
        let q = errors.filter((ee)=>Bwe(ee, M, J));
        let ne = warnings.filter((ee)=>Bwe(ee, M, J));
        for (let ee of B){
            let L = editableScopeOf(h, M) !== undefined;
            let G = q.length > 0 ? `${te.cross} failed to load` : L ? `${te.tick} enabled` : `${te.cross} disabled`;
            let z = A.get(M);
            let Z = Ve(ee.version, k.get(M), z);
            let Q = ee.scope;
            O.push(`  ${te.pointer} ${M}`);
            O.push(`    Version: ${Z}`);
            if (z !== undefined) {
                O.push(`    Read from: ${Js(z)}`);
            }
            O.push(`    Scope: ${Q}`);
            O.push(`    Status: ${G}`);
            for (let K of q){
                if (K.type === "marketplace-load-failed" && K.nameRefused) {
                    O.push(...Xe(K.marketplace, K.nameRefusedDeclaredInSettings === true));
                    continue;
                }
                O.push(`    Error: ${dS(K)}${RRt(K) ? ` ${xRt}` : ""}${fXt(K) !== undefined ? `. ${fXt(K)}` : ""}`);
            }
            for (let K of ne){
                O.push(`    Note: ${DQ(K)}`);
            }
            O.push("");
        }
    }
    for (let M of V){
        O.push(...gn(M));
    }
    let C = await s();
    await KP(C, e(n, {
        children: ie(O)
    }));
    await Ur("cli_plugin_list");
}
function Re(s) {
    let p = w(4);
    let { promise } = s;
    let a = Ir(promise);
    let u;
    if (p[0] !== a) {
        u = ie(a);
        p[0] = a;
        p[1] = u;
    } else {
        u = p[1];
    }
    let g;
    if (p[2] !== u) {
        g = e(qP, {
            children: e(n, {
                children: u
            })
        });
        p[2] = u;
        p[3] = g;
    } else {
        g = p[3];
    }
    return g;
}
const Sin = "Invalid marketplace source format. Try: owner/repo, https://..., or ./path";
async function JFs(s, o, a, p, u) {
    if (a.cowork) {
        sG(true);
    }
    if (a.resolveOnly === true && a.fromLink !== true) {
        return an(`${te.cross} --resolve-only needs --from-link`);
    }
    if (a.claudeai) {
        if (a.sparse !== undefined || a.scope !== undefined) {
            return an(`${te.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`);
        }
        if (a.fromLink === true) {
            return an(`${te.cross} --claudeai can't be combined with --from-link`);
        }
        await rn(s, o, p, u);
        return;
    }
    if (a.resolveOnly === true) {
        if (a.sparse !== undefined || a.scope !== undefined) {
            return an(`${te.cross} --resolve-only can't be combined with --sparse or --scope`);
        }
        await tn(o, p);
        return;
    }
    if (a.fromLink !== true && JM(o)) {
        {
            let k = await qC();
            if (k === "blocked") {
                T3t({
                    reason: "policy_blocked",
                    sourceKind: undefined,
                    surface: "cli"
                });
                let F = c_();
                if (F !== null) {
                    Fqe(F);
                }
                await Ft("cli_marketplace_add", "cli_marketplace_add_blocked_by_policy");
                return Vo(`${te.cross} ${yr} is blocked by your organization. ${WL()} It can't be turned on here.`);
            }
            if (k !== "unavailable") {
                if (a.sparse !== undefined || a.scope !== undefined) {
                    return an(`${te.cross} ${yr} is built in and not declared in any settings scope. Omit --sparse and --scope to turn it on.`);
                }
                if (k === "off") {
                    try {
                        await lEt(true);
                    } catch (error) {
                        iAe({
                            enabled: true,
                            surface: "cli",
                            failure: "settings_write_failed"
                        });
                        await Ft("cli_marketplace_add", "cli_marketplace_add_failed");
                        await nF();
                        return Pwe(Fe(error), "add marketplace");
                    }
                    iAe({
                        enabled: true,
                        surface: "cli"
                    });
                    sc(p, u);
                } else {
                    await l4t(true);
                }
                await Ur("cli_marketplace_add");
                await KP(s, r(n, {
                    children: [
                        te.tick,
                        " ",
                        k === "off" ? `${yr} is on. Its plugins are back in /plugin \u2192 Discover.` : `${yr} is already on`
                    ]
                }));
                await xo(0);
                return;
            }
            T3t({
                reason: "reserved_name",
                sourceKind: undefined,
                surface: "cli"
            });
            await Ft("cli_marketplace_add", "cli_marketplace_add_directory_unavailable");
            return Vo(`${te.cross} The ${yr} isn't available in this session.`);
        }
        await Ft("cli_marketplace_add", "cli_marketplace_add_reserved_name");
        return Vo(`${te.cross} ${Ude(o)}`);
    }
    let g;
    let settingSource;
    let h;
    let refuseNameCollision = a.fromLink === true;
    let P = a.json ? {
        command: "marketplace-add"
    } : undefined;
    let v = async (k, F = false)=>{
        if (P !== undefined) {
            await le({
                ...P,
                outcome: "failed",
                message: gc(k),
                ...!F && {
                    failureCode: "invalid_source"
                }
            });
        }
        return Vo(`${te.cross} ${k}`);
    };
    try {
        if (refuseNameCollision) {
            try {
                Dgt(o);
            } catch (error) {
                throw VC(error, "invalid_source");
            }
        }
        let k = await Zue(o);
        if (!k) {
            await Ft("cli_marketplace_add", "cli_marketplace_add_invalid_source");
            return v(Sin);
        }
        if ("error" in k) {
            await Ft("cli_marketplace_add", "cli_marketplace_add_parse_failed");
            return v(Kd(k.error), k.unreadable === true);
        }
        h = a.scope ?? "user";
        if (h !== "user" && h !== "project" && h !== "local") {
            return Vo(Kd(`${te.cross} Invalid scope '${h}'. Use: user, project, or local`));
        }
        settingSource = NT(h);
        g = k;
        if (a.sparse && a.sparse.length > 0) {
            if (g.source === "github" || g.source === "git") {
                g = {
                    ...g,
                    sparsePaths: a.sparse
                };
            } else {
                return Vo(`${te.cross} --sparse is only supported for github and git marketplace sources (got: ${g.source})`);
            }
        }
    } catch (error) {
        await ue("cli_marketplace_add", error, "cli_marketplace_add_failed");
        return we(error, "add marketplace", P);
    }
    let y;
    let T = "";
    let H = (async ()=>{
        try {
            let k = [];
            if (refuseNameCollision) {
                let J = await win(g, p);
                if (J !== undefined) {
                    y = {
                        name: J,
                        added: false
                    };
                    T = `Marketplace '${J}' is already added; nothing changed`;
                    await Ur("cli_marketplace_add");
                    return [];
                }
            }
            let { name, alreadyMaterialized, resolvedSource, replacedSource } = await pne(g, (J)=>{
                k.push(J);
            }, p, undefined, {
                refuseNameCollision
            });
            let { error } = await j2e(name, {
                source: resolvedSource
            }, settingSource, p);
            if (error) {
                throw error;
            }
            sc(p, u);
            await js("tengu_marketplace_added", {
                _PROTO_marketplace_name: name,
                source_type: d(g.source),
                repo_hash: g.source === "github" ? ln(g.repo) : undefined,
                is_official_marketplace: wl(name)
            });
            await Ur("cli_marketplace_add");
            let D = [];
            if (!refuseNameCollision) {
                try {
                    D = (await Xee((await eS(p, u)).errors, p)).installed;
                } catch (err) {
                    t(`marketplace add: dep auto-resolve skipped: ${l(err)}`, {
                        level: "warn"
                    });
                }
            }
            y = {
                name,
                added: true
            };
            let U = Nte(D);
            let C = alreadyMaterialized ? `Marketplace '${name}' already on disk \u2014 declared in ${h} settings${U}` : `Successfully added marketplace: ${name} (declared in ${h} settings)${U}`;
            let M = MAn({
                name,
                replacedSource,
                resolvedSource,
                settingSource
            });
            T = [
                ...k,
                C,
                ...M
            ].join(`
`);
            k.push(`${te.tick} ${C}`, ...M.map((J)=>`  ${J}`));
            let B = iIr(rRe(settingSource));
            if (B !== null) {
                k.push(`${te.warning} ${B}`);
            }
            return k;
        } catch (error) {
            if (refuseNameCollision && error instanceof dne) {
                await Yu(`${OH(_({
                    refused: error.reason
                }))}
`);
            }
            await ue("cli_marketplace_add", error, "cli_marketplace_add_failed");
            return we(error, "add marketplace", P);
        }
    })();
    H.catch(()=>{});
    if (refuseNameCollision) {
        await H;
        if (y === undefined) {
            return an(`${te.cross} Failed to add marketplace: the add finished without naming the marketplace it used`);
        }
        await Yu(`${OH(_(y))}
`);
    } else if (P !== undefined) {
        await H;
    }
    if (refuseNameCollision || P !== undefined) {
        if (P !== undefined) {
            await le({
                ...P,
                outcome: "ok",
                marketplace: y?.name,
                message: gc(T)
            });
        }
        await xo(0);
        return;
    }
    s.render(e(jr, {
        fallback: e(n, {
            children: "Adding marketplace…"
        }),
        children: e(Re, {
            promise: H
        })
    }));
    await s.waitUntilExit();
    await xo(0);
}
async function tn(s, o) {
    let a;
    try {
        Dgt(s);
        a = await Zue(s);
    } catch (error) {
        await Ft("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_refused_source");
        await nF();
        return Pwe(error, "look up the marketplace");
    }
    if (!a || "error" in a) {
        await Ft("cli_marketplace_link_lookup", a ? "cli_marketplace_link_lookup_parse_failed" : "cli_marketplace_link_lookup_invalid_source");
        return Vo(`${te.cross} ${a?.error ?? Sin}`);
    }
    let p;
    try {
        p = await win(a, o);
    } catch (error) {
        await Ft("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_read_failed");
        await nF();
        return Pwe(error, "read the added marketplaces");
    }
    await Ur("cli_marketplace_link_lookup");
    await Yu(`${OH(_({
        existing: p ?? null
    }))}
`);
    await xo(0);
}
async function win(s, o) {
    if (!Td(s)) {
        return;
    }
    return SCn(await Nc(o), s);
}
async function rn(s, o, a, credentials) {
    let u = (async ()=>{
        try {
            let configured = await Nc(a);
            let m = await GGe(credentials).catch(()=>null);
            if (m === null) {
                throw new Sx("claude.ai marketplaces are not available here — sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list", "tier_unavailable");
            }
            let h = s3r(m.hosted, o);
            if (h.kind === "ambiguous") {
                throw new Sx(`claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${h.localNames.join(", ")} (claude plugin marketplace list)`, "ambiguous_name");
            }
            if (h.kind === "none") {
                if (s3r(m.policyBlocked, o).kind !== "none") {
                    throw new Sx(`"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`, "policy_blocked");
                }
                throw new Sx(`claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`, "not_listed");
            }
            let R = h.row;
            let { name, marketplace, status } = await CEn(R, {
                configured,
                credentials
            });
            sc(a, credentials);
            await js("tengu_marketplace_added", {
                source_type: b("claudeai")
            });
            await Ur("cli_marketplace_add");
            let T = iet(status);
            let H = marketplace.plugins.length;
            return [
                `${te.tick} Successfully added marketplace: ${LSt(R)} \u2014 hosted on claude.ai, ${ake(R.scope)} \u2014 ${H} ${I(H, "plugin")}${T ? ` (${T})` : ""}`,
                `  Install its plugins with: claude plugin install <plugin>@${name}`
            ];
        } catch (error) {
            if (error instanceof Sx) {
                await Ft("cli_marketplace_add", `cli_marketplace_add_claudeai_${error.code}`);
                await nF();
            } else {
                await ue("cli_marketplace_add", error, "cli_marketplace_add_failed");
            }
            return Pwe(error, "add marketplace");
        }
    })();
    u.catch(()=>{});
    s.render(e(jr, {
        fallback: e(n, {
            children: "Adding marketplace…"
        }),
        children: e(Re, {
            promise: u
        })
    }));
    await s.waitUntilExit();
    await xo(0);
}
function ce(s) {
    if (/^[A-Za-z0-9._/\\:~-]{1,200}$/.test(s)) {
        return s;
    }
    return ec(Et(s, 4096), {
        head: 120,
        tail: 80
    }) || "“”";
}
function Ae(s) {
    if (s === tT || /^[A-Za-z0-9._/\\:~@%+=&?,*-]{1,200}$/.test(s)) {
        return s;
    }
    return ce(s);
}
async function QFs(s, o, a) {
    if (o.cowork) {
        sG(true);
    }
    let p;
    try {
        p = await Nc(a);
    } catch (error) {
        await Ft("cli_marketplace_list", "cli_marketplace_list_load_failed");
        await nF();
        return Pwe(error, "list marketplaces");
    }
    let u = Object.keys(p);
    let g = await GGe().catch(()=>null);
    let { available, hosted } = VGe(g, p);
    let R = g?.browseOnly ?? [];
    let P = await rJ();
    let v = new Map;
    for (let A of u){
        let O = p[A]?.source;
        if (n2(O)) {
            v.set(A, (await Uge(A, O, {
                mode: "cache-only",
                credentials: undefined
            })).status);
        }
    }
    let y = await qC();
    let T = y === "off" && !u.includes(fn);
    if (o.json) {
        let E = u.filter((D)=>{
            let U = p[D]?.source;
            return !(U && rf(U));
        }).map((D)=>{
            let U = p[D];
            let C = U?.source;
            let ref = C?.source === "github" || C?.source === "git" ? C.ref : undefined;
            return {
                name: D,
                source: C?.source,
                ...C?.source === "github" && {
                    repo: C.repo
                },
                ...C?.source === "git" && {
                    url: C.url
                },
                ...C?.source === "url" && {
                    url: C.url
                },
                ...C?.source === "directory" && {
                    path: C.path
                },
                ...C?.source === "file" && {
                    path: C.path
                },
                ...ref && {
                    ref
                },
                ...C?.source === "claudeai" ? {
                    marketplaceId: C.marketplaceId,
                    organizationUuid: C.organizationUuid,
                    ...P[D]?.scope !== undefined && {
                        scope: P[D]?.scope
                    },
                    status: v.get(D)?.kind
                } : {
                    installLocation: U?.installLocation
                }
            };
        }).sort((D, U)=>{
            if (D.name < U.name) {
                return -1;
            }
            if (D.name > U.name) {
                return 1;
            }
            return 0;
        });
        await Yu(se(E) + `
`);
        await Ur("cli_marketplace_list");
        return;
    }
    let H = false;
    let registryEntry = p[fn];
    if (y === "on" && registryEntry !== undefined && rf(registryEntry.source) && ait(undefined)) {
        let A = await cv(fn, a, {
            registryEntry
        });
        H = A !== null && (gv().catalogEntryNames?.size ?? 0) > A.plugins.length;
    }
    Ie(p);
    let F;
    if (u.length === 0 && !T && available.length === 0 && hosted.length === 0 && R.length === 0) {
        F = e(n, {
            children: "No marketplaces configured"
        });
    } else {
        let A = u.length > 0 || T ? [
            "Configured marketplaces:",
            ""
        ] : [
            "No marketplaces configured",
            ""
        ];
        if (T) {
            A.push(`  ${te.pointer} ${fn}`, `    Source: Built in (${yr}) \u2014 off`, `    Turn it back on: claude plugin marketplace add ${fn}`, "");
        }
        (registryEntry !== undefined && rf(registryEntry.source) ? [
            fn,
            ...u.filter((E)=>E !== fn)
        ] : u).forEach((E)=>{
            let D = p[E];
            let U = CC(E);
            A.push(`  ${te.pointer} ${U}`);
            if (U !== E) {
                let C = XB(E);
                if (C || $Y(E)) {
                    A.push(`    Shown in quotes: the name looks like one of Anthropic's own, and is not.${C ? ` In a command, type: ${E}` : ""}`);
                }
            }
            if (D?.source) {
                let C = D.source;
                if (C.source === "github") {
                    let M = C.ref ? `@${ce(C.ref)}` : "";
                    A.push(`    Source: GitHub (${ce(C.repo)}${M})`);
                } else if (C.source === "git") {
                    let M = C.ref ? `@${ce(C.ref)}` : "";
                    A.push(`    Source: Git (${Ae(Ivt(C.url))}${M})`);
                } else if (C.source === "url") {
                    A.push(`    Source: URL (${Ae(Ivt(C.url))})`);
                } else if (C.source === "directory") {
                    A.push(`    Source: ${y !== "unavailable" ? "Folder" : "Directory"} (${ce(C.path)})`);
                } else if (C.source === "file") {
                    A.push(`    Source: File (${ce(C.path)})`);
                } else if (C.source === "pluginDirectory") {
                    A.push(`    Source: Built in (${yr})${y === "blocked" ? " — blocked by your organization" : H ? " — some plugins hidden by your organization's policy" : ""}`);
                } else if (C.source === "claudeai") {
                    let M = v.get(E);
                    let B = M === undefined ? undefined : iet(M);
                    A.push(`    Source: ${AEn(P[E])}${B === undefined ? "" : ` \u2014 ${B}`}`);
                }
            }
            if (D !== undefined && IJ(E, D) && $Y(E)) {
                A.push(...zco(E, {
                    declaredInSettings: D.source.source === "settings"
                }).map((C)=>`    ${C}`));
            }
            A.push("");
        });
        if (available.length > 0 || hosted.length > 0 || R.length > 0) {
            A.push("From claude.ai:", "");
        }
        for (let E of available){
            A.push(`  ${te.pointer} ${E.name} (available from claude.ai${E.scope ? `, ${E.scope}` : ""} \u2014 not added)`);
            A.push(`    Source: ${E.source.source === "github" ? "GitHub" : "Git"} (${fHe(E.source)})`);
            A.push("");
        }
        for (let E of hosted){
            A.push(`  ${te.pointer} ${LSt(E)} \u2014 hosted on claude.ai, ${ake(E.scope)} \xB7 not added`);
            A.push(`    Add: claude plugin marketplace add --claudeai ${XB(E.name) ? E.name : "<name>"}`);
            A.push("");
        }
        for (let E of R){
            A.push(`  ${te.pointer} ${set(E)} (browse on claude.ai)`);
            A.push("");
        }
        F = e(n, {
            children: ie(A)
        });
    }
    let V = await s();
    await KP(V, F);
    await Ur("cli_marketplace_list");
}
async function ZFs(s, o, a, p) {
    if (a.cowork) {
        sG(true);
    }
    let u;
    if (a.scope !== undefined) {
        let y = a.scope;
        if (y !== "user" && y !== "project" && y !== "local") {
            return an(`${te.cross} Invalid scope '${y}'. Use: user, project, or local`);
        }
        u = NT(y);
    }
    let g = NE(o) ? await qC() : undefined;
    let m;
    try {
        if (g === "blocked" && JM(o) && !une(await Nc(p)).some(({ name })=>JM(name))) {
            await KP(s, e(Se, {}));
            await Ur("cli_marketplace_remove");
            return;
        }
        m = await z2e(o, u, p);
        sc(p);
        if (m.kind !== "plugin-directory-built-in") {
            i("tengu_marketplace_removed", {
                marketplace_name: aAe(o),
                _PROTO_marketplace_name: o,
                is_official_marketplace: wl(o)
            });
        }
    } catch (error) {
        await Ft("cli_marketplace_remove", "cli_marketplace_remove_failed");
        await nF();
        return we(Fe(error, 2000), "remove marketplace", a.json ? {
            command: "marketplace-remove",
            marketplace: o
        } : undefined, error);
    }
    await Ur("cli_marketplace_remove");
    if (m.kind === "ignored-plugin-directory-name-entry-removed") {
        let y = m.removedNames.map((H)=>`${te.tick} ${ylt(H, g !== undefined && g !== "unavailable")}`);
        let T = Ooe(m.disabledPluginIds, m.disabledReason);
        if (T !== null) {
            y.push(T);
        }
        await KP(s, e(n, {
            children: ie(y)
        }));
        return;
    }
    if (m.kind === "plugin-directory-built-in") {
        let y = await qC();
        if (y === "blocked") {
            await KP(s, e(Se, {}));
            return;
        }
        if (g === "on" && y === "off") {
            iAe({
                enabled: false,
                surface: "cli"
            });
        }
        await KP(s, r(n, {
            children: [
                te.tick,
                " ",
                yr,
                " is off. Plugins you installed from it stay installed and keep updating. Turn it back on: claude plugin marketplace add",
                " ",
                fn
            ]
        }));
        return;
    }
    let h = m.kind === "removed" ? m.removedPluginIds : [];
    let R = `Successfully removed marketplace: ${Nn(o)}${a.scope ? ` (from ${a.scope} settings)` : ""}`;
    let P = h.length > 0 ? [
        `Also uninstalled ${h.length} ${I(h.length, "plugin")} from this marketplace:`,
        ...h.map((y)=>`  ${y}`),
        "The removal also deletes their saved options, secrets and data where it can.",
        "To use a plugin again, add the marketplace back and reinstall the plugin."
    ] : [];
    if (a.json) {
        await le({
            command: "marketplace-remove",
            outcome: "ok",
            marketplace: o,
            message: gc([
                R,
                ...P
            ].join(`
`))
        });
        return;
    }
    let v = [
        `${te.tick} ${R}`,
        ...P
    ];
    await KP(s, e(n, {
        children: ie(v)
    }));
}
function Se() {
    let s = w(1);
    let o;
    if (s[0] === S) {
        o = e(n, {
            children: c7t(WL())
        });
        s[0] = o;
    } else {
        o = s[0];
    }
    return o;
}
function xe(s) {
    let u = w(11);
    let { promise } = s;
    let { messages, summary } = Ir(promise);
    let g;
    let m;
    let h;
    if (u[0] !== messages || u[1] !== summary) {
        let R = [
            ...messages,
            summary
        ];
        m = qP;
        g = n;
        h = ie(R);
        u[0] = messages;
        u[1] = summary;
        u[2] = g;
        u[3] = m;
        u[4] = h;
    } else {
        g = u[2];
        m = u[3];
        h = u[4];
    }
    let P;
    if (u[5] !== g || u[6] !== h) {
        P = e(g, {
            children: h
        });
        u[5] = g;
        u[6] = h;
        u[7] = P;
    } else {
        P = u[7];
    }
    let v;
    if (u[8] !== m || u[9] !== P) {
        v = e(m, {
            children: P
        });
        u[8] = m;
        u[9] = P;
        u[10] = v;
    } else {
        v = u[10];
    }
    return v;
}
async function eUs(s, marketplace, a, p) {
    if (a.json && !marketplace) {
        return an(`${te.cross} --json needs a marketplace name, for example: claude plugin marketplace update <name> --json`);
    }
    if (a.cowork) {
        sG(true);
    }
    let _PROTO_marketplace_name = marketplace !== undefined && JM(marketplace) ? fn : marketplace;
    let g;
    let m = 0;
    let h;
    if (_PROTO_marketplace_name) {
        g = `Updating marketplace: ${_PROTO_marketplace_name}...`;
        let R = [];
        let P = `Successfully updated marketplace: ${_PROTO_marketplace_name}`;
        h = g2(_PROTO_marketplace_name, p, (v)=>{
            R.push(v);
        }).then(async ()=>{
            sc(p);
            await js("tengu_marketplace_updated", {
                marketplace_name: aAe(_PROTO_marketplace_name),
                _PROTO_marketplace_name,
                is_official_marketplace: wl(_PROTO_marketplace_name)
            });
            await Ur("cli_marketplace_update");
            return {
                messages: R,
                summary: `${te.tick} ${P}`
            };
        }).catch(async (v)=>{
            await ue("cli_marketplace_update", v, "cli_marketplace_update_failed");
            return we(v, "update marketplace(s)", a.json ? {
                command: "marketplace-update",
                marketplace
            } : undefined);
        });
        if (a.json) {
            await h;
            await le({
                command: "marketplace-update",
                outcome: "ok",
                marketplace,
                message: gc([
                    ...R,
                    P
                ].join(`
`))
            });
            await xo(0);
            return;
        }
    } else {
        let R;
        try {
            R = await Nc(p);
        } catch (error) {
            await ue("cli_marketplace_update", error, "cli_marketplace_update_load_failed");
            return Pwe(error, "update marketplace(s)");
        }
        let P = Object.keys(R);
        if (P.length === 0) {
            await KP(s, e(n, {
                children: "No marketplaces configured"
            }));
            await Ur("cli_marketplace_update");
            return xo(0);
        }
        g = "Updating marketplaces...";
        h = ZZo(p).then(async ({ policyRefused, failed, attempted, builtInSkipped })=>{
            m = failed.length > 0 ? 1 : 0;
            sc(p);
            await js("tengu_marketplace_updated_all", {
                count: P.length,
                attempted,
                refreshed: attempted - policyRefused.length - failed.length,
                policy_refused: policyRefused.length,
                failed: failed.length,
                built_in_skipped: builtInSkipped.length
            });
            if (failed.length > 0) {
                await za("cli_marketplace_update", "marketplace_refresh_failed");
            } else if (policyRefused.length > 0) {
                await za("cli_marketplace_update", "command_source_refused");
            } else {
                await (builtInSkipped.length > 0 ? za("cli_marketplace_update", "built_in_directory_skipped") : Ur("cli_marketplace_update"));
            }
            return Ze(attempted, policyRefused, failed, P.length - attempted - builtInSkipped.length, builtInSkipped);
        }).catch(async (v)=>{
            await ue("cli_marketplace_update", v, "cli_marketplace_update_failed");
            return Pwe(v, "update marketplace(s)");
        });
    }
    s.render(e(jr, {
        fallback: e(n, {
            children: g
        }),
        children: e(xe, {
            promise: h
        })
    }));
    await s.waitUntilExit();
    await xo(m);
}
function Ue(s) {
    let p = w(4);
    let { promise } = s;
    let a = Ir(promise);
    let u;
    if (p[0] !== a) {
        u = gc(a);
        p[0] = a;
        p[1] = u;
    } else {
        u = p[1];
    }
    let g;
    if (p[2] !== u) {
        g = e(qP, {
            children: r(n, {
                children: [
                    te.tick,
                    " ",
                    u
                ]
            })
        });
        p[2] = u;
        p[3] = g;
    } else {
        g = p[3];
    }
    return g;
}
function Be(s) {
    return dee.some((o)=>o === s);
}
function M0t(s) {
    let o = s.scope || "user";
    if (s.cowork && o !== "user") {
        an("--cowork can only be used with user scope");
    }
    if (!Be(o)) {
        an(`Invalid scope: ${o}. Must be one of: ${dee.join(", ")}.`);
    }
    return o;
}
function Ge(s) {
    let o;
    if (s.scope) {
        if (!Be(s.scope)) {
            an(`Invalid scope "${s.scope}". Valid scopes: ${dee.join(", ")}`);
        }
        o = s.scope;
    }
    if (s.cowork && o !== undefined && o !== "user") {
        an("--cowork can only be used with user scope");
    }
    if (s.cowork && o === undefined) {
        o = "user";
    }
    return o;
}
function me(s, o, a) {
    let { name, marketplace } = a7(o);
    i(s, {
        _PROTO_plugin_name: name,
        ...marketplace && {
            _PROTO_marketplace_name: marketplace
        },
        ...a !== undefined && {
            scope: a
        }
    });
}
async function oIr(s, o, a, p) {
    if (a.cowork) {
        sG(true);
    }
    let u = M0t(a);
    me("tengu_plugin_install_command", o, d(u));
    if (!a.json) {
        Ie(await Dl(p));
    }
    let shownCommand;
    let onShown = (U)=>{
        shownCommand = U;
    };
    let h = async (failureCode, message)=>{
        if (a.json) {
            await rfe({
                command: "install",
                outcome: "failed",
                plugin: o,
                scope: u,
                message,
                failureCode,
                shownCommand: shownCommand && aIr(shownCommand)
            });
        }
    };
    let R;
    let resolvedMarketplace;
    let v = (U)=>{
        if (R) {
            x1e(R.outcome);
        }
        return XBe(U, "install", o, p, a.json ? {
            scope: u,
            shownCommand
        } : undefined);
    };
    if (a.replace && !vn(o).marketplace) {
        return v(new nee(zMr(), {
            failureCode: "replace_needs_full_id"
        }));
    }
    let y = await I3(p).catch(v) !== undefined;
    let T = y ? undefined : await BOo(o, {
        yes: a.yes,
        acceptCommand: a.acceptCommand,
        onShown,
        scope: u,
        onMarketplaceRefreshResult: (U)=>{
            R = U;
        },
        onResolvedMarketplace: (U)=>{
            resolvedMarketplace = U;
        }
    }, p).catch(v);
    if (T?.kind === "accepted") {
        shownCommand = undefined;
    }
    if (T?.kind === "declined") {
        if (R) {
            x1e(R.outcome);
        }
        f("cli_plugin_install", "command_source_declined");
        if (a.json) {
            await h("command_source_declined", "Aborted.");
        } else {
            await KP(await s(), e(n, {
                children: "Aborted."
            }));
        }
        await Zn(1);
        return;
    }
    let H = T?.grantKey;
    let k = y ? null : await UOo(o, {
        yes: a.yes,
        acceptCommand: a.acceptCommand,
        onShown,
        scope: u,
        resolvedMarketplace
    }, p).catch(v);
    if (k !== null && k !== "declined" && k !== "unconfirmed") {
        shownCommand = undefined;
    }
    if (k === "declined" || k === "unconfirmed") {
        f("cli_plugin_install", k === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed");
        if (R) {
            x1e(R.outcome);
        }
        if (a.json) {
            await h(k === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed", "Aborted — the command was not run.");
        } else {
            await KP(await s(), e(n, {
                children: "Aborted — the command was not run."
            }));
        }
        await Zn(1);
        return;
    }
    let { name, marketplace } = vn(o);
    let A = T?.kind === "accepted" || k !== null;
    let resolvedPlugin = a.acceptCommand !== undefined && A && marketplace === undefined && name && resolvedMarketplace !== undefined ? `${name}@${resolvedMarketplace}` : undefined;
    let E = jOo(o, u, a.config, H, y ? undefined : k, p, R, {
        json: a.json,
        shownCommand,
        resolvedPlugin,
        replaceInstalledCopy: a.replace,
        npmRegistry: a.registry
    }).then(async (U)=>{
        await Ur("cli_plugin_install");
        return U;
    });
    if (a.json) {
        await E;
        await Zn(0);
        return;
    }
    let D = await s();
    D.render(e(jr, {
        fallback: e(n, {
            children: Nn(`Installing plugin "${o}"...`)
        }),
        children: e(Ue, {
            promise: E
        })
    }));
    await D.waitUntilExit();
    await Zn(0);
}
async function tUs(s, o, a, p) {
    if (a.json && a.prune) {
        an("--json cannot be used with --prune");
    }
    if (a.cowork) {
        sG(true);
    }
    let u = M0t(a);
    me("tengu_plugin_uninstall_command", o, d(u));
    let g = await WOo(o, u, a.keepData, a.prune, a.yes, p, {
        json: a.json
    });
    if (!a.json) {
        await KP(await s(), e(n, {
            children: gc(a.prune ? g : `${te.tick} ${g}`)
        }));
    }
    await Ur("cli_plugin_uninstall");
    await xo(0);
}
async function nUs(s, o, a) {
    if (o.cowork) {
        sG(true);
    }
    let p = M0t(o);
    i("tengu_plugin_prune_command", {
        scope: d(p),
        dry_run: o.dryRun ?? false
    });
    let u = await zOo(p, {
        dryRun: o.dryRun,
        yes: o.yes
    }, a);
    await KP(s, e(n, {
        children: gc(u)
    }));
    await Ur("cli_plugin_prune");
    await xo(0);
}
async function rUs(s, o, a, p) {
    if (a.cowork) {
        sG(true);
    }
    let u = Ge(a);
    me("tengu_plugin_enable_command", o, d(u ?? "auto"));
    let g;
    let m = false;
    let h = o;
    try {
        await zGe();
        O0t();
        let P = await H0t(o, a.json, p, {
            unlessNamedInSettings: true
        });
        m = P.aliased;
        h = P.plugin;
        g = await $ft(P.plugin, u, p);
        if (!g.success) {
            throw new nee(g.message, g);
        }
    } catch (error) {
        return await XBe(error, "enable", o, p, a.json ? {
            scope: u
        } : undefined, m ? h : undefined);
    }
    let R = vin(g.message, g.scope ?? u);
    if (a.json) {
        await rfe({
            command: "enable",
            outcome: "ok",
            plugin: o,
            pluginId: g.pluginId,
            scope: g.scope ?? u,
            message: gc(R)
        });
    } else {
        await KP(await s(), r(n, {
            children: [
                te.tick,
                " ",
                gc(R)
            ]
        }));
    }
    await js("tengu_plugin_enabled_cli", {
        ...await hfe(g.pluginId || h, Wu(), p),
        scope: pe(g.scope),
        ...m ? {
            aliased_id: true
        } : {}
    });
    await Ur("cli_plugin_enable");
    await xo(0);
}
async function oUs(s, o, a, p) {
    if (a.all && o) {
        an("Cannot use --all with a specific plugin");
    }
    if (!a.all && !o) {
        an("Please specify a plugin name or use --all to disable all plugins");
    }
    if (a.cowork) {
        sG(true);
    }
    let u;
    if (a.all) {
        if (a.scope) {
            an("Cannot use --scope with --all");
        }
        i("tengu_plugin_disable_command", {});
        O0t();
        u = await VOo(p, {
            json: a.json
        });
    } else {
        let g = Ge(a);
        me("tengu_plugin_disable_command", o, d(g ?? "auto"));
        await zGe();
        O0t();
        u = await GOo(o, g, p, {
            json: a.json
        });
    }
    if (!a.json) {
        await KP(await s(), e(n, {
            children: gc(u)
        }));
    }
    await Ur("cli_plugin_disable");
    await xo(0);
}
async function sUs(s, o, a) {
    if (o.cowork) {
        sG(true);
    }
    let p = o.cowork ? "user" : undefined;
    if (o.scope) {
        if (!sNt.includes(o.scope)) {
            an(`Invalid scope "${o.scope}". Valid scopes: ${sNt.join(", ")}`);
        }
        p = o.scope;
    }
    if (o.cowork && p !== "user") {
        an("--cowork can only be used with user scope");
    }
    me("tengu_plugin_update_command", s);
    if (!o.json) {
        Ie(await Dl(a));
    }
    await qOo(s, p, {
        yes: o.yes,
        json: o.json,
        acceptCommand: o.acceptCommand
    }, a);
}
async function iUs(s, o, a, p, u) {
    if (a.cowork) {
        sG(true);
    }
    O0t();
    i("tengu_plugin_details_command", {});
    let { getPluginInventory, computePluginTokenCost, scaleCharsToTokens } = await import("/$bunfs/root/chunk-beb5yzvs.js");
    let { formatTokenEstimate } = await import("/$bunfs/root/chunk-947teh1x.js");
    await zGe();
    let { enabled, disabled } = await eS(j() ? p : undefined, u);
    let y = a7((await H0t(o, a.json, p)).plugin);
    let T = y.marketplace ? p7t(y.name, y.marketplace) : y.name;
    let H = Up(y.marketplace) ? (L)=>_r(L) === _r(T) : (L)=>lm(L, T);
    let k = [
        ...enabled,
        ...disabled
    ].find((L)=>H(y.marketplace ? L.source : L.name));
    if (!k) {
        let L = await qC() !== "unavailable" ? Object.entries((await h2(p)).plugins).find(([he, ke])=>{
            let fe = vn(he);
            return fe.marketplace === fn && lm(y.marketplace ? he : fe.name, T) && ke.some(Cx);
        })?.[0] : undefined;
        let G = c_();
        let z = L !== undefined && G !== null ? vn(L).name : undefined;
        let Z = L !== undefined && G === null && await a4t(vn(L).name, p) === null ? vn(L).name : undefined;
        let Q = z !== undefined ? "policy_blocked" : Z !== undefined ? "directory_catalog_missing" : "not_found";
        let K = z !== undefined && G !== null ? `${te.cross} ${PRt(z, G)}` : Z !== undefined ? `${te.cross} Details for "${je(Z)}" are not available: ${lar}. ${xRt}` : `Plugin "${je(o)}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
        return Me(s, a.json, K, Q);
    }
    let F = Ki(k.source) ?? yd;
    let V = a.models?.length ? a.models : [
        tt()
    ];
    let A;
    try {
        let L = await getPluginInventory(k, F);
        A = await computePluginTokenCost(L, V, k.name);
    } catch (error) {
        let G = error instanceof car;
        if (!G) {
            c(ot(W(error), "plugin details: inventory/token-cost failed"));
        }
        let z = G ? "directory_catalog_missing" : "inventory_failed";
        let Z = G ? `${te.cross} Details for "${je(k.name)}" are not available: ${lar}. ${xRt}` : `${te.cross} Could not load details for "${je(k.name)}": ${Yk(error)}`;
        return Me(s, a.json, Z, z);
    }
    let { tokens, inventory } = A;
    if (a.json) {
        let L = ({ path, ...rest })=>rest;
        await Yu(se({
            plugin: k.name,
            version: k.manifest.version,
            source: k.source,
            sha: k.sha ?? null,
            tokens,
            components: {
                ...inventory,
                commands: inventory.commands.map(L),
                agents: inventory.agents.map(L),
                skills: inventory.skills.map(L)
            }
        }) + `
`);
        await Ur("cli_plugin_details");
        return;
    }
    let D = [];
    let U = hm(k);
    let C = U === k.name ? k.name : `${U} (${k.name})`;
    D.push(`${C} ${k.manifest.version ?? ""}`.trimEnd());
    if (k.manifest.description) {
        let [L, ...G] = k.manifest.description.split(`
`);
        D.push(`  Description: ${L}`);
        for (let z of G){
            D.push(`      ${z}`);
        }
    }
    D.push(`  Source: ${k.source}`);
    D.push("");
    D.push("Component inventory");
    let M = [
        [
            "Skills",
            [
                ...inventory.skills,
                ...inventory.commands
            ].map((L)=>L.name).sort(),
            ""
        ],
        [
            "Agents",
            inventory.agents.map((L)=>L.name),
            ""
        ],
        [
            "Hooks",
            inventory.hooks,
            "  (harness-only — no model context cost)"
        ],
        [
            "MCP servers",
            inventory.mcpServers,
            "  (tool schemas resolved at runtime; not counted)"
        ],
        [
            "LSP servers",
            inventory.lspServers,
            "  (out-of-process tooling; no model context cost)"
        ]
    ];
    for (let [L, G, z] of M){
        D.push(`  ${L} (${G.length})${G.length > 0 ? `  ${G.join(", ")}` : ""}${G.length > 0 ? z : ""}`);
    }
    D.push("");
    let B = [
        ...inventory.skills,
        ...inventory.agents,
        ...inventory.commands
    ].filter((L)=>L.chars != null);
    let J = {
        always_on: B.reduce((acc, item)=>acc + item.chars.always_on, 0),
        on_invoke: B.reduce((acc, item)=>acc + item.chars.on_invoke, 0)
    };
    let q = tokens[V[0]];
    let ne = q?.always_on ?? scaleCharsToTokens(J.always_on, J.always_on, undefined);
    D.push("Projected token cost");
    D.push(`  Always-on:   ~${ne.toLocaleString()} tok   added to every session`);
    if (B.length > 0) {
        D.push("");
        D.push("Per-component (rounded)");
        let L = Math.max(...B.map((G)=>G.name.length), 9);
        D.push(`  ${"component".padEnd(L)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`);
        for (let G of B){
            let z = scaleCharsToTokens(G.chars.always_on, J.always_on, q?.always_on);
            let Z = scaleCharsToTokens(G.chars.on_invoke, J.on_invoke, q?.on_invoke);
            D.push(`  ${G.name.padEnd(L)}  ${formatTokenEstimate(z).padStart(9)}  ${formatTokenEstimate(Z).padStart(9)}`);
        }
        D.push("");
        D.push("  On-invoke cost is paid each time a skill or agent fires.");
        D.push("  Token counts are estimates and may differ from actual usage.");
    }
    let ee = await s();
    await KP(ee, e(n, {
        children: ie(D)
    }));
    if (q) {
        await Ur("cli_plugin_details");
    } else {
        await za("cli_plugin_details", "count_tokens_unreachable");
    }
}
async function Me(s, json, a, p) {
    let u = gc(a);
    if (json) {
        Mm(u);
    } else {
        await KP(await s(), e(n, {
            children: u
        }));
    }
    await Ft("cli_plugin_details", p);
    if (json) {
        return Vo();
    }
    return xo(1);
}
function ie(s) {
    return s.map(Nn).join(`
`);
}
function Ie(s) {
    for (let { message } of une(s)){
        console.error(`${te.warning} ${message}`);
    }
}
function se(s) {
    return OH(_(s, null, 2));
}
function $e(s, o) {
    let a = (m)=>hS(m.source) === s;
    let p = o.plugins.filter(a);
    let errors = o.errors.filter(a);
    let warnings = o.warnings.filter(a);
    return {
        plugins: p,
        errors,
        warnings,
        standaloneErrorRows: errors.filter((m)=>!p.some((h)=>kKn(m, h))),
        standaloneWarningRows: warnings.filter((m)=>!p.some((h)=>TKn(m, h)))
    };
}
function He(s) {
    return s.plugins.length > 0 || s.standaloneErrorRows.length > 0 || s.standaloneWarningRows.length > 0;
}
function gn(s) {
    if (!He(s)) {
        return [];
    }
    let { standaloneErrorRows, standaloneWarningRows } = s;
    let p = [
        s.header,
        ""
    ];
    for (let u of standaloneWarningRows){
        p.push(`  ${te.warning} ${DQ(u)}`, "");
    }
    for (let u of s.plugins){
        let g = s.errors.filter((P)=>kKn(P, u));
        let m = s.warnings.filter((P)=>TKn(P, u));
        let h = u.enabled !== false && XW(u.source, u.installationPreference) ? " · required by your org" : "";
        let R = (u.enabled === false ? `${te.cross} disabled` : g.length > 0 ? `${te.cross} loaded with errors` : `${te.tick} loaded`) + h;
        p.push(`  ${te.pointer} ${u.source}`);
        p.push(`    Version: ${u.manifest.version ?? "unknown"}`);
        if (s.showScope) {
            p.push(`    Scope: ${s.scopeOf(u)}`);
        }
        p.push(`    Path: ${s.pathOf(u)}`);
        p.push(`    Status: ${R}`);
        for (let P of g){
            p.push(`    Error: ${dS(P)}`);
        }
        for (let P of m){
            p.push(`    Note: ${DQ(P)}`);
        }
        p.push("");
    }
    for (let u of standaloneErrorRows){
        p.push(`  ${te.pointer} ${u.source}: ${te.cross} ${dS(u)}`, "");
    }
    return p;
}
function Le({ path, message }) {
    return {
        path,
        message,
        code: null
    };
}
function Ne(s) {
    return {
        file: s.filePath,
        type: s.fileType,
        errors: s.errors.map(Le),
        warnings: s.warnings.map(Le),
        notes: s.notes ?? [],
        gatingHooks: (s.gatingHooks ?? []).map((o)=>({
                module: o.module,
                pattern: o.pattern,
                hook: o.hook,
                hasCatch: o.hasCatch
            }))
    };
}
function mn(s, o, advice) {
    return {
        success: o.success,
        strict: o.strict,
        target: s.resolvedPath,
        manifest: s.manifest ? Ne(s.manifest) : null,
        contents: s.contents.map(Ne),
        advice
    };
}
function de(s) {
    let o = s;
    let a = (F)=>{
        let V = o[F];
        if (typeof V === "string") {
            return V;
        }
    };
    let p = {
        type: s.type
    };
    let u = a("plugin") ?? a("pluginId");
    if (u !== undefined) {
        p.plugin = u;
    }
    let g = a("marketplace");
    if (g !== undefined) {
        p.marketplace = g;
    }
    let m = a("dependency");
    if (m !== undefined) {
        p.dependency = m;
    }
    let h = a("serverName");
    if (h !== undefined) {
        p.serverName = h;
    }
    let R = a("component");
    if (R !== undefined) {
        p.component = R;
    }
    let P = a("manifestPath") ?? a("path") ?? a("folderPath") ?? a("hookPath") ?? a("mcpbPath") ?? a("installPath") ?? a("filePath") ?? a("heldAt");
    if (P !== undefined) {
        p.path = P;
    }
    let v = a("url") ?? a("gitUrl");
    if (v !== undefined) {
        p.url = v;
    }
    if (s.type === "marketplace-not-found" && s.registrationHidden !== undefined) {
        p.registrationHidden = s.registrationHidden;
    }
    let y = a("duplicateOf") ?? a("activeServer");
    let T = y?.startsWith("plugin:") ? y.split(":")[1] : undefined;
    let o_blockedBy = o.blockedBy;
    let k = a("shadowedBy") ?? a("renamedTo") ?? T ?? (Array.isArray(o_blockedBy) && o_blockedBy.every((F)=>typeof F === "string") ? o_blockedBy.join(", ") : undefined);
    if (k !== undefined) {
        p.related = k;
    }
    return p;
}
async function hn(s, o) {
    let a = [];
    for (let p of s.plugins){
        let u = p.mcpServers || await net(p, undefined, o, undefined, {
            readOnlyListing: true
        });
        let g = s.errors.filter((P)=>kKn(P, p));
        let m = s.warnings.filter((P)=>TKn(P, p));
        let h = g.map(dS);
        let R = m.map(DQ);
        a.push({
            id: p.source,
            version: p.manifest.version ?? "unknown",
            scope: s.scopeOf(p),
            enabled: p.enabled !== false,
            installPath: p.path,
            mcpServers: u && Object.keys(u).length > 0 ? u : undefined,
            errors: h.length > 0 ? h : undefined,
            notes: R.length > 0 ? R : undefined,
            errorDetails: g.length > 0 ? g.map(de) : undefined,
            noteDetails: m.length > 0 ? m.map(de) : undefined,
            hasUserConfig: Je(p)
        });
    }
    for (let p of s.standaloneErrorRows){
        a.push({
            id: p.source,
            version: "unknown",
            scope: s.standaloneErrorScope,
            enabled: false,
            installPath: ("path" in p ? p.path : undefined) ?? "",
            errors: [
                dS(p)
            ],
            errorDetails: [
                de(p)
            ]
        });
    }
    for (let p of s.standaloneWarningRows){
        a.push({
            id: p.source,
            version: "unknown",
            scope: s.standaloneWarningScope,
            enabled: p.type === "synced-plugin-shadowed",
            installPath: "",
            notes: [
                DQ(p)
            ],
            noteDetails: [
                de(p)
            ]
        });
    }
    return a;
}
function Je(s) {
    let o = s?.manifest.userConfig;
    if (o && Object.keys(o).length > 0) {
        return true;
    }
}
function ge(s, o) {
    return Nn(o?.title || s);
}
class oe extends x {
    option;
    constructor(s, o, a){
        super(s, o);
        this.option = a;
    }
}
function kn(s) {
    if (typeof s !== "object" || s === null || Array.isArray(s)) {
        return;
    }
    let o = Object.create(null);
    for (let [a, p] of Object.entries(s)){
        if (typeof p !== "string") {
            return;
        }
        o[a] = p;
    }
    return o;
}
const wn = 262144;
const _n = 65536;
async function yn() {
    process.stdin.setEncoding("utf8");
    let s = "";
    let o = 0;
    for await (let a of Non(process.stdin)){
        o += Buffer.byteLength(a, "utf8");
        if (o > wn) {
            return;
        }
        s += a;
    }
    return s;
}
async function $n(s, o, a, p) {
    let u = s.manifest.userConfig ?? {};
    let g = Object.keys(o).filter((v)=>!Object.hasOwn(u, v));
    if (g.length > 0) {
        let v = Object.keys(u).map(Nn);
        throw new oe(`This plugin has no ${I(g.length, "option")} ${g.map((y)=>`"${Nn(y)}"`).join(", ")}.` + (v.length > 0 ? ` Known options: ${v.join(", ")}.` : ""), "plugin configure: option not declared in userConfig");
    }
    let m = rm(s);
    let h = await Ox(m, p);
    for (let [v, y] of Object.entries(o)){
        if (Buffer.byteLength(y, "utf8") > _n) {
            throw new oe(`${ge(v, u[v])} is too long (over 64 KB).`, "plugin configure: option value over the size cap", v);
        }
        if (/[\r\n]/.test(y)) {
            throw new oe(`${ge(v, u[v])} must be a single line.`, "plugin configure: option value contains a line break", v);
        }
        let T = u[v];
        let H = y.trim();
        let k = _s(h, v);
        if (H === "" && T?.required === true && !(T.sensitive === true && k !== undefined && k !== "")) {
            throw new oe(`${ge(v, T)} is required but not provided`, "plugin configure: required option blank", v);
        }
        if (T?.type === "boolean" && H !== "" && mze(H) === undefined) {
            throw new oe(`${ge(v, T)} must be true or false (or 1/0, yes/no, on/off).`, "plugin configure: option value is not a boolean", v);
        }
        if (T?.type === "number" && H !== "" && IWt(H, T) === undefined) {
            throw new oe(`${ge(v, T)}: ${PWt(T)}`, "plugin configure: option value is not a number the field takes", v);
        }
    }
    let R = SKn(Object.keys(o), o, u, h);
    let P = Object.keys(R);
    if (P.length === 0) {
        return [];
    }
    for (let v of P){
        let y = n5({
            [v]: R[v]
        }, {
            [v]: u[v]
        });
        if (!y.valid) {
            throw new oe(Nn(y.errors.join("; ")), "plugin configure: value rejected by the userConfig schema", v);
        }
    }
    await ZTe(m, R, u, a, p);
    return P;
}
function Pe(s, o) {
    return s.reduce((acc, item)=>acc.split(item).join("…"), o);
}
async function aUs(s, o, a, p) {
    if (o.cowork) {
        sG(true);
    }
    O0t();
    i("tengu_plugin_configure_command", {});
    await zGe();
    let { enabled, disabled } = await eS(a, p);
    let m = Krt([
        ...enabled,
        ...disabled
    ], s);
    if (!m) {
        await Ft("cli_plugin_configure", "not_found");
        return Vo(gc(`No installed plugin has the id "${Nn(s)}". Use its full id (name@marketplace), as \`claude plugin list${o.cowork ? " --cowork" : ""}\` shows it.`));
    }
    let h = rm(m);
    let schema = m.manifest.userConfig ?? {};
    let displayName = hm(m);
    let v = "Example: claude plugin configure <plugin> --values-stdin < values.json";
    if (o.valuesStdin) {
        if (process.stdin.isTTY) {
            await Ft("cli_plugin_configure", "invalid_stdin");
            return Vo(gc(`No option values were piped in. ${v}`));
        }
        let O;
        let E = false;
        try {
            let B = await yn();
            E = B === undefined;
            O = B === undefined ? undefined : X(B);
        } catch  {
            O = undefined;
        }
        let D = kn(O);
        if (D === undefined) {
            await Ft("cli_plugin_configure", "invalid_stdin");
            return Vo(gc(E ? "The input on stdin is over the 256 KB limit." : `The input on stdin isn't a JSON object of strings. ${v}`));
        }
        let U = Object.entries(D).filter(([B])=>Object.hasOwn(schema, B) && schema[B]?.sensitive).flatMap(([, B])=>[
                B,
                B.trim()
            ]).filter((B)=>B !== "").sort((B, J)=>J.length - B.length);
        let saved;
        try {
            saved = await $n(m, D, a, p);
        } catch (error) {
            if (error instanceof oe) {
                await za("cli_plugin_configure", "value_refused");
            } else {
                await Ft("cli_plugin_configure", "save_failed");
            }
            if (o.json && error instanceof oe) {
                let J = {
                    pluginId: h,
                    displayName,
                    refused: {
                        option: error.option,
                        message: Pe(U, error.message)
                    }
                };
                await Yu(se(J) + `
`);
            }
            return Vo(gc(Pe(U, `Failed to save configuration: ${l(error)}`)));
        }
        let M;
        try {
            M = Object.keys(await eAe(m, p));
        } catch (error) {
            t(Pe(U, `plugin configure: saved, but the re-read of unset options failed: ${l(error)}`), {
                level: "error"
            });
        }
        await Ur("cli_plugin_configure");
        if (o.json) {
            let B = {
                pluginId: h,
                displayName,
                saved,
                ...M === undefined ? {} : {
                    unconfigured: M
                }
            };
            await Yu(se(B) + `
`);
        } else {
            await Yu((saved.length > 0 ? "Configuration saved. Restart Claude Code to apply it." : "No configuration changes.") + `
`);
        }
        await xo(0);
        return;
    }
    let y;
    let T;
    try {
        y = await Ox(h, p);
        T = Object.keys(await eAe(m, p));
    } catch (error) {
        await Ft("cli_plugin_configure", "saved_options_read_failed");
        return Vo(gc(`Could not read the saved options for "${h}": ${l(error)}`));
    }
    let H = Fde(h).options ?? {};
    let configured = [];
    let F = Object.create(null);
    for (let [O, E] of Object.entries(schema)){
        let D = _s(y, O);
        if (D === undefined || D === "") {
            continue;
        }
        configured.push(O);
        if (E.type === "boolean") {
            F[O] = D;
            continue;
        }
        let U = Object.hasOwn(H, O) ? H[O] : undefined;
        if (E.sensitive !== true && U !== undefined && U !== "") {
            F[O] = U;
        }
    }
    let choices = {};
    for (let [O, E] of Object.entries(schema)){
        let D = Uln(E);
        if (D !== undefined) {
            choices[O] = D;
        }
    }
    await Ur("cli_plugin_configure");
    if (o.json) {
        let O = {
            pluginId: h,
            displayName,
            schema,
            inputs: wKn(schema, F),
            choices,
            configured,
            unconfigured: T
        };
        await Yu(se(O) + `
`);
        await xo(0);
        return;
    }
    let A = [];
    if (Object.keys(schema).length === 0) {
        A.push(`${displayName} (${h}) has no options to set.`);
    } else {
        A.push(`Options for ${displayName} (${h}):`);
        for (let [O, E] of Object.entries(schema)){
            let D = [
                E.required ? "required" : "optional",
                E.sensitive ? "sensitive" : undefined,
                configured.includes(O) ? "set" : "not set"
            ].filter(Boolean);
            let U = E.title && E.title !== O ? ` \u2014 ${E.title}` : "";
            A.push(`  ${te.pointer} ${O}${U} (${D.join(", ")})`);
        }
        A.push("", "Set values with /plugin configure <plugin> in Claude Code, or pipe a JSON object to `claude plugin configure <plugin> --values-stdin`.");
    }
    await Yu(ie(A) + `
`);
    await xo(0);
}
export { SVn, Pwe, qFs, KFs, YFs, XFs, Sin, JFs, win, QFs, ZFs, eUs, M0t, oIr, tUs, nUs, rUs, oUs, sUs, iUs, aUs };
