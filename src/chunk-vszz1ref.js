import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { execFile } from "child_process";
import { constants } from "fs";
import { access, chmod, lstat, mkdir, readdir, readFile, readlink, writeFile } from "fs/promises";
import { delimiter, dirname, isAbsolute, join, resolve, sep } from "path";
import { promisify } from "util";
const w = promisify(execFile);
const oe = /^[a-zA-Z0-9_-]+$/;
const U = [
    2,
    34
];
function ain(e) {
    let n = /git version (\d+)\.(\d+)/.exec(e);
    if (!n) {
        return null;
    }
    return [
        Number(n[1]),
        Number(n[2])
    ];
}
function se(stdout) {
    let n = ain(stdout);
    if (n === null) {
        return null;
    }
    let [i, o] = n;
    let [t, s] = U;
    return i > t || i === t && o >= s;
}
async function $Fs(e) {
    let stdout = (await w("git", [
        "--version"
    ], {
        windowsHide: true
    })).stdout;
    let i = se(stdout);
    if (i === null) {
        e.onStatus(`[runner:git] --configure-git: could not parse git version from "${stdout.trim()}"; proceeding without version check`);
    } else if (!i) {
        let [d, u] = U;
        throw Error(`--configure-git requires git >= ${d}.${u} for SSH commit signing (found: ${stdout.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`);
    }
    let o = join(e.baseDir, ".runner");
    await mkdir(o, {
        recursive: true
    });
    let shimPath = join(o, "code-sign");
    let s = join(o, "commit_signing_key.pub");
    let r = L(e.execPath);
    await writeFile(shimPath, r, {
        mode: 493
    });
    await chmod(shimPath, 493);
    await writeFile(s, "");
    let g = [
        [
            "user.name",
            "Claude"
        ],
        [
            "user.email",
            "noreply@anthropic.com"
        ],
        [
            "gpg.format",
            "ssh"
        ],
        [
            "gpg.ssh.program",
            shimPath
        ],
        [
            "user.signingkey",
            s
        ],
        [
            "commit.gpgsign",
            "true"
        ],
        [
            "tag.gpgsign",
            "true"
        ],
        [
            "push.negotiate",
            "true"
        ]
    ];
    let h = e.gitConfigPath ? [
        "--file",
        e.gitConfigPath
    ] : [
        "--global"
    ];
    for (let [d, u] of g){
        await w("git", [
            "config",
            ...h,
            "--replace-all",
            d,
            u
        ], {
            windowsHide: true
        });
    }
    e.onStatus(`[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${shimPath}`);
    let f = await he(o, h, e.onStatus);
    if (f.installed) {
        return {
            shimPath
        };
    }
    return {
        shimPath,
        operatorHooksPath: f.existingHooksPath
    };
}
function L(e) {
    return `#!/bin/sh
BIN="$CLAUDE_RUNNER_CLAUDE_BIN"
[ -n "$BIN" ] || BIN='${q(e)}'
exec "$BIN" self-hosted-runner code-sign "$@"
`;
}
function FFs(e, n) {
    let i = join(e, ".runner");
    return [
        {
            path: join(i, "code-sign"),
            content: L(n),
            mode: 493
        },
        {
            path: join(i, "commit_signing_key.pub"),
            content: "",
            mode: 420
        }
    ];
}
function GPr(e) {
    return lin(join(e, ".runner"));
}
function lin(e) {
    return [
        [
            "user.name",
            "Claude"
        ],
        [
            "user.email",
            "noreply@anthropic.com"
        ],
        [
            "user.signingkey",
            join(e, "commit_signing_key.pub")
        ],
        [
            "gpg.format",
            "ssh"
        ],
        [
            "gpg.ssh.program",
            join(e, "code-sign")
        ],
        [
            "commit.gpgsign",
            "true"
        ],
        [
            "tag.gpgsign",
            "true"
        ],
        [
            "push.negotiate",
            "true"
        ],
        [
            "core.hooksPath",
            join(e, "git-hooks")
        ]
    ];
}
function pVn(e, n, i) {
    let o = join(n, ".runner") + sep;
    return e.map((t)=>{
        if (!t.path.startsWith(o)) {
            throw Error("relocateConfigureGitArtifacts: artifact path is not under {baseDir}/.runner/");
        }
        return {
            ...t,
            path: join(i, t.path.slice(o.length))
        };
    });
}
async function fVn() {
    try {
        let { stdout } = await w("git", [
            "--version"
        ], {
            windowsHide: true
        });
        return stdout;
    } catch  {
        return "";
    }
}
const xMs = `#!/bin/sh
test "$1" = get || exit 0
printf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"
`;
function PMs(e) {
    return join(e, ".runner", "git-proxy-cred");
}
function UFs(e) {
    let n = join(e, ".runner", "git-hooks");
    return [
        ...W.map((i)=>({
                path: join(n, i),
                content: Y
            })),
        ...[
            "commit-msg",
            "prepare-commit-msg"
        ].map((i)=>({
                path: join(n, i),
                content: J
            }))
    ];
}
async function BFs(e) {
    let n = e.apiBaseUrl.replace(/\/+$/, "");
    let i;
    try {
        i = new URL(n).host;
    } catch  {
        throw Error(`--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${n}`);
    }
    let o = join(e.baseDir, ".runner");
    await mkdir(o, {
        recursive: true
    });
    let t = PMs(e.baseDir);
    await writeFile(t, xMs, {
        mode: 448
    });
    await chmod(t, 448);
    let s = e.gitConfigPath ? [
        "--file",
        e.gitConfigPath
    ] : [
        "--global"
    ];
    let r = [
        [
            `credential.https://${i}.helper`,
            `!'${q(t)}'`
        ],
        [
            `credential.https://${i}.useHttpPath`,
            "false"
        ],
        [
            `credential.https://${i}.username`,
            "unused"
        ],
        [
            `http.https://${i}/.proactiveAuth`,
            "basic"
        ]
    ];
    for (let [g, h] of r){
        await w("git", [
            "config",
            ...s,
            "--replace-all",
            g,
            h
        ], {
            windowsHide: true
        });
    }
    e.onStatus(`[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${i} (${t})`);
    return n;
}
const timeout = 10000;
function M(e, n, i) {
    return w("git", [
        "config",
        ...e,
        "--includes",
        "--type=path",
        "--get",
        n
    ], {
        windowsHide: true,
        timeout,
        ...i && {
            env: i
        }
    }).then((o)=>o.stdout.trim(), ()=>"");
}
async function F(e, n) {
    let [i, o] = await Promise.all([
        ae([
            "--system"
        ], e, n),
        M([
            "--global"
        ], e, n)
    ]);
    return {
        ...i.value !== "" && {
            system: i.value
        },
        ...i.origin !== undefined && {
            systemOrigin: i.origin
        },
        ...o !== "" && {
            global: o
        }
    };
}
async function re(e, env) {
    let { system, global } = await F(e, env);
    return [
        ...system !== undefined ? [
            "system"
        ] : [],
        ...global !== undefined ? [
            "global"
        ] : []
    ];
}
async function ae(e, n, i) {
    let o = await w("git", [
        "config",
        ...e,
        "--includes",
        "--show-origin",
        "-z",
        "--type=path",
        "--get",
        n
    ], {
        cwd: "/",
        windowsHide: true,
        timeout,
        ...i && {
            env: i
        }
    }).then((s)=>s.stdout, ()=>"");
    let t = o.indexOf("\x00");
    if (t < 0) {
        return {
            value: o.trim()
        };
    }
    return {
        value: o.slice(t + 1).replace(/\0$/, "").trim(),
        origin: K(o.slice(0, t))
    };
}
var K = (e)=>{
    if (e.startsWith("file:")) {
        return e.slice(5);
    }
    return e;
};
const j = (e)=>{
    if (e.length > 1) {
        return e.replace(/[\\/]+$/, "");
    }
    return e;
};
const N = (e)=>isAbsolute(e) && resolve(e) === j(e);
async function ce(e) {
    let n;
    try {
        n = (await w("git", [
            "config",
            "--system",
            "--includes",
            "--show-origin",
            "-z",
            "--list"
        ], {
            cwd: "/",
            windowsHide: true,
            timeout,
            maxBuffer: 4194304,
            ...e && {
                env: e
            }
        })).stdout;
    } catch (error) {
        let s = error;
        let r = v(error) ?? (s !== null && typeof s === "object" ? typeof s.signal === "string" ? `killed by ${s.signal}${s.killed === true ? ", timed out" : ""}` : s.code !== undefined ? `exit ${String(s.code)}` : "error" : "error");
        return {
            files: [],
            unverifiable: `the system configuration could not be listed (${r})`
        };
    }
    let i = n.split("\x00");
    let files = [];
    for(let t = 0; t + 1 < i.length; t += 2){
        let s = K(i[t]);
        if (!i[t].startsWith("file:") || !N(s)) {
            return {
                files,
                unverifiable: `git reports a source that is not a plainly spelled absolute file path (${ZZ(s)}; write [include] paths absolute, without '.' or '..' components)`
            };
        }
        if (!files.includes(s)) {
            files.push(s);
        }
    }
    return {
        files
    };
}
async function B(e) {
    let n = e;
    while(true){
        try {
            await access(n, constants.W_OK);
            return true;
        } catch (error) {
            if (z(error)) {
                let t = dirname(n);
                if (t === n) {
                    return false;
                }
                n = t;
                continue;
            }
            let o = process.getuid?.();
            if (o !== undefined && o !== 0) {
                try {
                    if ((await lstat(n)).uid === o) {
                        return true;
                    }
                } catch  {}
            }
            return false;
        }
    }
}
const O = (e, n)=>n !== undefined && n !== "" && (resolve(e) === resolve(n) || resolve(e).startsWith(resolve(n) + sep));
async function jFs(e) {
    let n = e?.sessionReachable ?? B;
    let i = e?.env ? e.env.HOME : a.HOME;
    let o = e?.env ? e.env.PATH : a.PATH;
    let skipped = [];
    let s = (o ?? "").split(delimiter).filter((u)=>{
        if (u === "" || !isAbsolute(u)) {
            return false;
        }
        if (O(u, i) || O(u, e?.baseDir)) {
            skipped.push(u);
            return false;
        }
        return true;
    });
    let r = async (u)=>{
        for (let m of s){
            let l = join(m, u);
            try {
                await access(l, constants.X_OK);
            } catch  {
                continue;
            }
            if (await y(l, n) !== undefined || await y(m, n) !== undefined) {
                skipped.push(l);
                continue;
            }
            return l;
        }
    };
    let inert = "/nonexistent-gpg";
    for (let u of [
        "/bin/false",
        "/usr/bin/false"
    ]){
        try {
            await access(u, constants.X_OK);
        } catch  {
            continue;
        }
        if (await y(u, n) === undefined && await y(dirname(u), n) === undefined) {
            inert = u;
            break;
        }
    }
    let [h, f, d] = await Promise.all([
        r("gpg"),
        r("gpgsm"),
        r("ssh-keygen")
    ]);
    return {
        gpg: h ?? inert,
        gpgsm: f ?? inert,
        sshKeygen: d ?? inert,
        inert,
        skipped
    };
}
function V(e, n) {
    let i = (o)=>resolve(o).replace(/[\\/]+$/, "");
    return n !== undefined && i(e) === i(n) || i(e).endsWith(join(`${sep}.runner`, "git-hooks"));
}
async function WFs(e) {
    let n = e?.sessionReachable ?? B;
    let i = e?.systemConfigFiles ?? ce;
    let o = e?.env ? e.env.HOME : a.HOME;
    function t(l) {
        if (e?.lifecycleHooks) {
            return re(l, e.env);
        }
        return [];
    }
    let [{ system, systemOrigin, global }, h, f, d] = await Promise.all([
        F("core.hooksPath", e?.env),
        t("core.sshCommand"),
        t("core.askPass"),
        t("filter.lfs.clean")
    ]);
    let u = (l)=>l !== undefined && !V(l);
    let m = {
        ...u(global) && {
            ignoredGlobalHooksPath: global
        },
        ...h.length > 0 && {
            sshCommandScopes: h
        },
        ...f.length > 0 && {
            askPassScopes: f
        },
        ...d.length > 0 && {
            lfsFilterScopes: d
        }
    };
    if (u(system)) {
        let reason;
        if (systemOrigin === undefined || !N(systemOrigin)) {
            reason = `git does not report a plainly spelled absolute file path as its origin (${ZZ(systemOrigin ?? "")}) \u2014 cannot verify it is out of the sessions' reach`;
        } else {
            let S = await i(e?.env);
            if (S.unverifiable !== undefined) {
                reason = `${S.unverifiable} \u2014 cannot verify it is out of the sessions' reach`;
            } else if (!S.files.includes(systemOrigin)) {
                reason = `the system configuration changed while it was being read (${ZZ(systemOrigin)} is no longer among its files) \u2014 cannot verify it is out of the sessions' reach`;
            } else {
                for (let P of S.files){
                    let D = await lstat(P).then(()=>{}, (X)=>v(X) ?? "error");
                    let C = D !== undefined ? `is listed by git but cannot be found as reported (${D}) \u2014 cannot verify it is out of the sessions' reach` : await y(P, n);
                    if (C !== undefined) {
                        reason = P === systemOrigin ? `it comes from ${ZZ(P)}, which ${C}` : `one of the files the system configuration reads, ${ZZ(P)}, ${C}`;
                        break;
                    }
                }
            }
        }
        if (reason === undefined) {
            if (!isAbsolute(system)) {
                reason = "it is relative (git would resolve it inside each repository)";
            } else if (!N(system)) {
                reason = `it is not spelled as a plain absolute path (${ZZ(system)}) \u2014 write it without '.' or '..' components`;
            } else if (O(system, o) || O(system, e?.baseDir)) {
                reason = "it points under the runner HOME / --base-dir, which sessions can write";
            } else {
                let S = await y(system, n);
                reason = S !== undefined ? `its target directory ${S}` : await le(system, n);
            }
        }
        if (reason === undefined) {
            m.hooksPath = system;
        } else {
            m.ignoredSystemHooksPath = {
                value: system,
                reason
            };
        }
    }
    return m;
}
const hops = 32;
async function le(system, n) {
    let i;
    try {
        i = (await readdir(system)).sort();
    } catch (error) {
        if (z(error)) {
            return "its target directory does not exist";
        }
        return `its target directory cannot be listed (${v(error) ?? "error"})`;
    }
    for (let o of i){
        let t = await y(join(system, o), n);
        if (t !== undefined) {
            return `${ZZ(o)} in it ${t}`;
        }
    }
}
async function y(e, n, i = {
    hops
}) {
    let o = j(e);
    let t = o;
    while(true){
        if (await n(t)) {
            if (t === o) {
                return "is writable by (or belongs to) this runner's user";
            }
            return `resolves to ${ZZ(t)}, which this runner's user can write or owns`;
        }
        let s;
        try {
            s = (await lstat(t)).isSymbolicLink();
        } catch (error) {
            if (t === o) {
                if (z(error)) {
                    return;
                }
                return `cannot be examined (${v(error) ?? "error"})`;
            }
            return `is a link that does not resolve (${ZZ(t)})`;
        }
        if (!s) {
            return;
        }
        if (i.hops <= 0) {
            return "is a link with too many levels of indirection";
        }
        i.hops--;
        let r;
        try {
            r = await readlink(t);
        } catch (error) {
            return `is a link that cannot be read (${v(error) ?? "error"})`;
        }
        t = resolve(dirname(t), r);
        let g = await y(dirname(t), n, i);
        if (g !== undefined) {
            if (i.hops <= 0) {
                return `is a link with too many levels of indirection (through ${ZZ(dirname(t))})`;
            }
            return `resolves into ${ZZ(dirname(t))}, a directory that ${g} (the target could be replaced)`;
        }
    }
}
const ge = /^\p{Cf}$/u;
function ZZ(e) {
    let n = _(e);
    let i = "";
    for (let o of n){
        let t = o.codePointAt(0);
        if (t >= 127 && t <= 159 || t === 8232 || t === 8233 || ge.test(o)) {
            for(let s = 0; s < o.length; s++){
                i += `\\u${o.charCodeAt(s).toString(16).padStart(4, "0")}`;
            }
        } else {
            i += o;
        }
    }
    return i;
}
function zFs(e, { isRoot, operatorSshInEnv = false, askpassSource = "none", postSessionHook = false, envHooksPath = false }) {
    let r = [];
    if (e.ignoredSystemHooksPath !== undefined) {
        let g = e.ignoredSystemHooksPath;
        r.push(`[runner:warn] the system git config sets core.hooksPath=${ZZ(g.value)}, which is NOT applied inside lifecycle hooks because ${g.reason}. ` + (isRoot ? "This runner runs as root, so no configuration file is out of the sessions' reach: export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment instead — and run the runner as an unprivileged user." : "Use an absolute path outside the runner's HOME/--base-dir in a root-owned file, naming a directory whose hook files are root-owned too (or export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment)."));
    }
    if (e.ignoredGlobalHooksPath !== undefined) {
        r.push(`[runner:warn] the global git config sets core.hooksPath=${ZZ(e.ignoredGlobalHooksPath)}, which is NOT applied inside lifecycle hooks (checkout / post-session): every session this runner hosts can write that file. Git run by those hooks takes core.hooksPath only from the system git config (git config --system) or from a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair exported in the runner's own environment; move it there if your hooks need it. The session's own git is unaffected.`);
    }
    if (e.sshCommandScopes !== undefined && !operatorSshInEnv) {
        r.push(`${`[runner:warn] core.sshCommand is set in the ${e.sshCommandScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks uses plain ssh unless the runner's own environment sets GIT_SSH_COMMAND (or GIT_SSH). If your hooks reach git remotes over ssh and need that command (a deploy key, a jump host), copy its value into GIT_SSH_COMMAND in the runner's environment; if they do not, no action is needed. ` + (e.sshCommandScopes.includes("global") ? "Copy only a command you set yourself: every session this runner hosts can write the global file. " : "")}The session's own git is unaffected.`);
    }
    if (e.askPassScopes !== undefined && askpassSource !== "own") {
        r.push(`${`[runner:warn] core.askPass is set in the ${e.askPassScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks takes a credential-prompt program only from the runner's own environment, as GIT_ASKPASS (an SSH_ASKPASS there is handed on as GIT_ASKPASS) or as a core.askPass GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair. ` + (askpassSource === "handedOn" ? "Here hook git will use the SSH_ASKPASS program from the runner's environment in its place. " : "")}If your hooks get https credentials from the program core.askPass names, copy its path into GIT_ASKPASS in the runner's environment; if they do not, no action is needed. ${e.askPassScopes.includes("global") ? "Copy only a path you set yourself: every session this runner hosts can write the global file. " : ""}The session's own git is unaffected.`);
    }
    if (e.lfsFilterScopes !== undefined && postSessionHook && e.hooksPath === undefined && !envHooksPath) {
        r.push(`[runner:warn] git-lfs is set up in the ${e.lfsFilterScopes.join(" and ")} git config and this runner has a post-session hook. Git run inside the runner's lifecycle hooks runs no repository or global git hooks, so git-lfs's pre-push hook does not run there and a plain "git push" from the post-session hook sends LFS pointers WITHOUT their objects. The runner cannot see whether your hook already handles this: in it, run "git-lfs push <remote> <branch>" BEFORE "git push" (or "git-lfs push --all <remote> <branch>" after it), or point core.hooksPath, ${isRoot ? "as" : "in the system git config or as"} a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment, at a root-owned directory that holds git-lfs's pre-push hook. The session's own git is unaffected.`);
    }
    return r;
}
async function he(e, n, onStatus) {
    let o = join(e, "git-hooks");
    let existingHooksPath;
    if (n[0] === "--file") {
        existingHooksPath = await M(n, "core.hooksPath");
    } else {
        let s = await F("core.hooksPath");
        existingHooksPath = s.global ?? s.system ?? "";
    }
    if (existingHooksPath !== "" && !V(existingHooksPath, o)) {
        onStatus(`${`[runner:git] --configure-git: core.hooksPath already set (${ZZ(existingHooksPath)}); skipping Co-authored-by hook install so existing hooks keep running for the session's own git (lifecycle `}hooks follow the system config / runner environment only — see the lifecycle-hooks status line)`);
        return {
            installed: false,
            existingHooksPath
        };
    }
    await mkdir(o, {
        recursive: true
    });
    for (let s of W){
        let r = join(o, s);
        await writeFile(r, Y, {
            mode: 493
        });
        await chmod(r, 493);
    }
    for (let s of [
        "commit-msg",
        "prepare-commit-msg"
    ]){
        let r = join(o, s);
        await writeFile(r, J, {
            mode: 493
        });
        await chmod(r, 493);
    }
    await w("git", [
        "config",
        ...n,
        "--replace-all",
        "core.hooksPath",
        o
    ], {
        windowsHide: true
    });
    onStatus(`[runner:git] --configure-git: core.hooksPath=${o}`);
    return {
        installed: true
    };
}
var W = [
    "applypatch-msg",
    "pre-applypatch",
    "post-applypatch",
    "pre-commit",
    "pre-merge-commit",
    "post-commit",
    "pre-rebase",
    "post-checkout",
    "post-merge",
    "pre-push",
    "reference-transaction",
    "fsmonitor-watchman",
    "pre-auto-gc",
    "post-rewrite",
    "sendemail-validate",
    "post-index-change"
];
var Y = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
[ -x "$local_hook" ] && exec "$local_hook" "$@"
exit 0
`;
var J = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
if [ -x "$local_hook" ]; then
  "$local_hook" "$@" || exit $?
fi
email="$CCR_SESSION_ACCOUNT_EMAIL"
nl='
'
case "$email" in
  ''|*'<'*|*'>'*|*"$nl"*) email='' ;;
esac
if [ -n "$email" ] && printf %s "$email" | LC_ALL=C grep -q '[^ -~]'; then
  email=''
fi
if [ -n "$email" ]; then
  name="\${email%%@*}"
  git interpret-trailers --in-place \\
    --if-exists addIfDifferent \\
    --trailer "Co-authored-by: $name <$email>" "$1"
fi
exit 0
`;
function q(e) {
    return e.replace(/'/g, "'\\''");
}
function fe(e) {
    let n = false;
    let namespace;
    let keyFile;
    let t;
    for(let s = 0; s < e.length; s++){
        let r = e[s];
        if (r === "-Y" && e[s + 1] === "sign") {
            n = true;
            s++;
        } else if (r === "-n") {
            namespace = e[++s];
        } else if (r === "-f") {
            keyFile = e[++s];
        } else if (r.startsWith("-")) {
            if (e[s + 1] !== undefined && !e[s + 1].startsWith("-")) {
                s++;
            }
        } else if (t === undefined) {
            t = r;
        }
    }
    if (!n) {
        throw Error(`code-sign: only SSH-style signing (-Y sign) is supported; got: ${e.join(" ")}`);
    }
    if (!t) {
        throw Error("code-sign: no file specified to sign");
    }
    return {
        bufferFile: resolve(t),
        namespace,
        keyFile
    };
}
async function de(e, n) {
    let i = n.env.CLAUDE_CODE_REMOTE_SESSION_ID || n.env.CLAUDE_RUNNER_SESSION_ID?.replace(/^session_/, "cse_");
    let CLAUDE_CODE_SESSION_ACCESS_TOKEN = n.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    let t = (n.env.ANTHROPIC_BASE_URL || n.env.SESSION_INGRESS_URL || n.env.CLAUDE_RUNNER_API_BASE_URL || "").replace(/\/+$/, "");
    if (!i || !oe.test(i)) {
        throw Error("code-sign: CLAUDE_CODE_REMOTE_SESSION_ID (child) / CLAUDE_RUNNER_SESSION_ID (lifecycle hook) is unset or malformed — " + "is this process a descendant of a runner-spawned session or hook?");
    }
    if (!CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
        throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
    }
    if (!t) {
        throw Error("code-sign: ANTHROPIC_BASE_URL (child) / CLAUDE_RUNNER_API_BASE_URL (lifecycle hook) is unset");
    }
    let contents = await readFile(e.bufferFile, "utf8");
    let git_object_format = await me();
    let body = JSON.stringify({
        contents,
        source: {
            type: "git_repository"
        },
        git_object_format
    });
    let url = `${t}/v1/code/sessions/${i}/sign-commit`;
    let f = await n.fetchFn(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "anthropic-version": "2023-06-01",
            "x-environment-runner-version": `shr-${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION}`,
            authorization: `Bearer ${CLAUDE_CODE_SESSION_ACCESS_TOKEN}`
        },
        body,
        ...na({
            url
        }),
        signal: AbortSignal.timeout(30000)
    });
    if (!f.ok) {
        let m = await f.text().catch(()=>"");
        throw Error(`code-sign: sign-commit returned HTTP ${f.status}` + (m ? `: ${pe(m, 200)}` : ""));
    }
    let d = await f.json();
    if (!d.signature) {
        throw Error("code-sign: response missing signature");
    }
    let u = `${e.bufferFile}.sig`;
    await writeFile(u, d.signature);
    return u;
}
async function me() {
    let { stdout, code } = await it("git", [
        "rev-parse",
        "--show-object-format"
    ], {
        useCwd: false,
        stdin: "ignore",
        stderr: "ignore",
        maxBuffer: 1048576
    });
    if (code === 0 && stdout.trim() === "sha256") {
        return "sha256";
    }
    return "sha1";
}
function pe(e, n) {
    if (e.length > n) {
        return `${e.slice(0, n)}…`;
    }
    return e;
}
async function GFs(e) {
    try {
        let n = fe(e);
        await de(n, {
            env: process.env,
            fetchFn: fetch
        });
        process.exit(0);
    } catch (error) {
        process.stderr.write(`${error instanceof Error ? error.message : String(error)}
`);
        process.exit(1);
    }
}
export { ain, $Fs, FFs, GPr, lin, pVn, fVn, xMs, PMs, UFs, BFs, jFs, WFs, ZZ, zFs, GFs };
