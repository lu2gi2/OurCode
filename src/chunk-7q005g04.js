import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { oRt } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { tRe, JFn, QFn } from "/$bunfs/root/chunk-462ckztb.js";
import { xV, C$e, QW } from "/$bunfs/root/chunk-xv9n7kza.js";
import C, { join, posix, dirname } from "path";
import { constants } from "fs";
import { lstat, mkdir, open } from "fs/promises";
const h = constants.O_NOFOLLOW ?? 0;
const B = constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | h;
async function P(e, o, n = 384) {
    let r = await open(e, B, n);
    try {
        if (n !== 384) {
            await r.chmod(n);
        }
        await r.writeFile(o, "utf8");
    } finally{
        await r.close();
    }
}
function T(e, o, n = C) {
    let r = n.normalize(o);
    if (n.isAbsolute(r) || r.split(n.sep).includes("..") || r.split("/").includes("..")) {
        throw Error("bundled file path escapes its extraction dir");
    }
    return n.join(e, r);
}
async function Cgr(e, o, n) {
    let r = new Map;
    for (let [l, p] of Object.entries(o)){
        let a = T(e, l);
        let d = dirname(a);
        let u = [
            a,
            p,
            n?.mode?.(l) ?? 384
        ];
        let i = r.get(d);
        if (i) {
            i.push(u);
        } else {
            r.set(d, [
                u
            ]);
        }
    }
    await Promise.all([
        ...r
    ].map(async ([l, p])=>{
        await mkdir(l, {
            recursive: true,
            mode: 448
        });
        await Promise.all(p.map(([a, d, u])=>P(a, d, u).catch((i)=>{
                if (n?.tolerateExisting && v(i) === "EEXIST") {
                    if (n.tolerateExisting !== "verify-content") {
                        return lstat(a).then((s)=>{
                            if (!s.isFile()) {
                                throw i;
                            }
                        });
                    }
                    return open(a, constants.O_RDONLY | h | (constants.O_NONBLOCK ?? 0)).then((s)=>s.stat().then((k)=>{
                            if (!k.isFile()) {
                                throw i;
                            }
                            return s.readFile({
                                encoding: "utf8"
                            });
                        }).finally(()=>s.close())).then((s)=>{
                        if (s !== d) {
                            throw i;
                        }
                    });
                }
                throw i;
            })));
    }));
}
function Qao(e) {
    xr().bundledSkillSessionResetHooks.push(e);
}
function XKe() {
    for (let e of xr().bundledSkillSessionResetHooks){
        try {
            e();
        } catch (error) {
            t(`[skills] session-reset hook failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
}
function fNs(e) {
    let { files } = e;
    let n = typeof files === "function";
    if (!files || !n && Object.keys(files).length === 0) {
        return {
            skillRoot: undefined,
            getPromptForCommand: e.getPromptForCommand
        };
    }
    let r;
    let l;
    let e_getPromptForCommand = e.getPromptForCommand;
    let getPromptForCommand = async (d, u)=>{
        l ??= (async ()=>{
            let b = r ?? (n ? await files(u) : files);
            if (Object.keys(b).length > 0) {
                r = b;
            }
            return R(e.name, b);
        })();
        let i = l;
        let f;
        try {
            f = await i;
        } catch (error) {
            if (l === i) {
                l = undefined;
                r = undefined;
            }
            throw error;
        }
        if (l === i) {
            l = undefined;
        }
        let s = await e_getPromptForCommand(d, u, f);
        if (f === null) {
            return s;
        }
        let text = `Base directory for this skill: ${f}

`;
        if (s.length > 0 && s[0].type === "text") {
            return [
                {
                    type: "text",
                    text: text + s[0].text
                },
                ...s.slice(1)
            ];
        }
        return [
            {
                type: "text",
                text
            },
            ...s
        ];
    };
    return {
        skillRoot: JKe(e.name),
        getPromptForCommand
    };
}
function Gs(e) {
    let { skillRoot, getPromptForCommand } = fNs(e);
    let r = {
        type: "prompt",
        name: e.name,
        description: typeof e.description === "function" ? "" : e.description,
        menuDescription: typeof e.menuDescription === "function" ? undefined : e.menuDescription,
        aliases: e.aliases,
        subcommands: e.subcommands,
        subcommandsBareOnly: e.subcommandsBareOnly,
        hasUserSpecifiedDescription: true,
        allowedTools: e.allowedTools ?? [],
        getAllowedTools: e.getAllowedTools,
        disallowedTools: e.disallowedTools ?? [],
        argumentHint: typeof e.argumentHint === "function" ? undefined : e.argumentHint,
        whenToUse: typeof e.whenToUse === "function" ? undefined : e.whenToUse,
        model: e.model,
        disableModelInvocation: typeof e.disableModelInvocation === "function" ? true : e.disableModelInvocation ?? false,
        disableBridgeInvocation: e.disableBridgeInvocation,
        userInvocable: e.userInvocable ?? true,
        terminalOriented: e.terminalOriented,
        argsMayContainSlashCommands: e.argsMayContainSlashCommands,
        contentLength: 0,
        source: "bundled",
        loadedFrom: "bundled",
        hooks: e.hooks,
        skillRoot,
        context: e.context,
        getContext: e.getContext,
        agent: e.agent,
        background: e.background,
        formatForegroundForkResult: e.formatForegroundForkResult,
        isEnabled: e.isEnabled,
        policyGate: typeof e.policyGate === "function" ? undefined : e.policyGate,
        requires: e.requires,
        isHidden: !(e.userInvocable ?? true),
        progressMessage: e.progressMessage ?? "running",
        getPromptForCommand,
        getEffort: e.getEffort,
        getDefaultEffort: e.getDefaultEffort,
        onUserTypedArgs: e.onUserTypedArgs,
        getArgumentCompletions: e.getArgumentCompletions
    };
    tRe(r, "description", e.description);
    tRe(r, "menuDescription", e.menuDescription);
    tRe(r, "argumentHint", e.argumentHint);
    tRe(r, "whenToUse", e.whenToUse);
    JFn(r, "disableModelInvocation", e.disableModelInvocation);
    QFn(r, e.policyGate);
    let l = xr();
    if (e.survivesBundledKillSwitch) {
        l.bundledSkillKillSwitchSurvivors.add(r);
    }
    l.bundledSkills.push(r);
}
function k5() {
    let e = xr();
    if (xV()) {
        return e.bundledSkills.filter((o)=>e.bundledSkillKillSwitchSurvivors.has(o));
    }
    if (C$e()) {
        return e.bundledSkills.filter((o)=>e.bundledSkillKillSwitchSurvivors.has(o) || !QW(o.name));
    }
    return [
        ...e.bundledSkills
    ];
}
function kCt(e) {
    if (e.type !== "prompt" || e.source !== "bundled") {
        return false;
    }
    for (let o of xr().bundledSkillKillSwitchSurvivors){
        if (o === e || o.name === e.name) {
            return false;
        }
    }
    return QW(e.name);
}
function i9t() {
    return [
        ...xr().bundledSkills
    ];
}
function JKe(e) {
    let bundledSkillFilesElsewhere = xr().bundledSkillFilesElsewhere;
    if (bundledSkillFilesElsewhere) {
        return posix.join(bundledSkillFilesElsewhere.root, e);
    }
    return join(oRt(), e);
}
async function R(name, o) {
    if (Object.keys(o).length === 0) {
        return null;
    }
    let n = JKe(name);
    try {
        await S(n, o, "verify-content");
        g("skill_bundled_extract");
        return n;
    } catch (error) {
        t(`Failed to extract bundled skill '${name}' to ${n}: ${error instanceof Error ? error.message : String(error)}`);
        m("skill_bundled_extract", "skill_bundled_extract_write_failed");
        return null;
    }
}
async function Rgr(e, o) {
    if (Object.keys(o).length === 0) {
        return null;
    }
    let n = JKe(e);
    try {
        await S(n, o, true);
        return n;
    } catch (error) {
        t(`Failed to extract additional skill files for '${e}' to ${n}: ${error instanceof Error ? error.message : String(error)}`);
        return null;
    }
}
function S(e, o, tolerateExisting) {
    let bundledSkillFilesElsewhere = xr().bundledSkillFilesElsewhere;
    if (bundledSkillFilesElsewhere) {
        return bundledSkillFilesElsewhere.write(e, o);
    }
    return Cgr(e, o, {
        tolerateExisting
    });
}
export { Cgr, Qao, XKe, fNs, Gs, k5, kCt, i9t, JKe, Rgr };
