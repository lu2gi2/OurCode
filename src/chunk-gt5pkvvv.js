import { we, u6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, hy, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Kpt } from "/$bunfs/root/chunk-xgw72tt1.js";
import { dwe } from "/$bunfs/root/chunk-bd805sh6.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Yt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Wd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { TD, AD } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { realpath, stat } from "fs/promises";
import { isAbsolute } from "path";
const MIr = {
    is_cwd: "sad",
    already_registered: "sad",
    outside_scope: "bad_reported",
    not_directory: "bad",
    expansion_failed: "bad",
    resolve_failed: "bad",
    stat_failed: "bad",
    screened_nt_namespace: "bad_reported",
    screened_untrusted_unc: "bad_reported",
    screened_untrusted_automount: "bad_reported",
    screened_suspicious_windows_spelling: "bad_reported",
    screened_unvettable_chain: "bad_reported"
};
function l(e) {
    return `screened_${e}`;
}
function _(errorClass) {
    return Object.hasOwn(MIr, errorClass);
}
function Min(e) {
    try {
        if (e instanceof x && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== undefined && _(e.errorClass)) {
            return e.errorClass;
        }
        return undefined;
    } catch  {
        return;
    }
}
function f(e, o, r, s) {
    let i = {
        caseFold: false,
        skipPrivateAlias: true,
        uncShapeParity: true
    };
    let n = isAbsolute(o) && Wd(e, o, i);
    if (n && Wd(o, e, i)) {
        return {
            allowed: false,
            code: "is_cwd",
            reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead"
        };
    }
    if (s.includes(e)) {
        return {
            allowed: false,
            code: "already_registered",
            reason: "is already a registered working directory"
        };
    }
    let a = r.some((d)=>e !== d && Wd(e, d, i));
    if (!n && !a) {
        return {
            allowed: false,
            code: "outside_scope",
            reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root"
        };
    }
    return {
        allowed: true
    };
}
async function g(additionalWorkingDirectories) {
    return Promise.all([
        ...additionalWorkingDirectories.values()
    ].map(async (o)=>{
        if (await dwe(o.path, u6())) {
            return {
                source: o.source,
                resolved: o.path
            };
        }
        let r = await realpath(o.path).catch(()=>o.path);
        return {
            source: o.source,
            resolved: Kpt(o.path, r, u6()) ? o.path : r
        };
    }));
}
async function h(e) {
    if ((await stat(e)).isDirectory()) {
        return {
            allowed: true
        };
    }
    return {
        allowed: false,
        code: "not_directory",
        reason: "is not a directory"
    };
}
const w = {
    nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access",
    untrusted_unc: "register_repo_root: UNC path rejected before filesystem access",
    untrusted_automount: "register_repo_root: automount path rejected before filesystem access",
    suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected",
    unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access"
};
async function Hin(e, o) {
    let r;
    let s;
    try {
        r = et(e);
    } catch  {
        throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed");
    }
    let i = TD(e, r, o().trustedNetworkDirectories);
    if (!i.ok) {
        throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", w[i.reason], l(i.reason));
    }
    try {
        s = await realpath(r);
    } catch (error) {
        throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", Nf(error) || hy(error) ? "resolve_failed" : undefined);
    }
    let n = AD(s, o().trustedNetworkDirectories);
    if (n !== undefined) {
        throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", l(n));
    }
    let a;
    try {
        a = await h(s);
    } catch (error) {
        throw new x("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", Nf(error) || hy(error) ? "stat_failed" : undefined);
    }
    if (!a.allowed) {
        throw new x(`register_repo_root: ${Yt(e)} ${a.reason}`, "register_repo_root: target is not a directory", a.code);
    }
    let d = await g(o().additionalWorkingDirectories);
    let c = f(s, we(), d.filter((t)=>t.source === "cliArg").map((t)=>t.resolved), d.map((t)=>t.resolved));
    if (!c.allowed) {
        throw new x(`register_repo_root: ${Yt(e)} ${c.reason}`, "register_repo_root: directory is outside the allowed registration scope", c.code);
    }
    return s;
}
export { MIr, Min, Hin };
