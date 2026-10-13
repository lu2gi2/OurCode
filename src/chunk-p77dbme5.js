import { LUe, Pp, OP, H5e, ur, NCr } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Mt, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ho } from "/$bunfs/root/chunk-wew3321y.js";
import { Xot } from "/$bunfs/root/chunk-mxyshm9g.js";
import { ht, Xt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { u_ } from "/$bunfs/root/chunk-4r6b8efh.js";
import { lstat, readdir } from "fs/promises";
import { join } from "path";
const h = String.raw`(?:\[[^\]\n]{0,100}\]){0,4}["']?\]?[ \t]{0,20}(?:=>|[=:])[ \t]{0,20}[\["' ]{0,8}`;
const w = String.raw`iphone(?:os|simulator)[\d.]{0,12}\b`;
const b = new RegExp([
    String.raw`\bSDKROOT${h}${w}`,
    String.raw`\bTARGETED_DEVICE_FAMILY${h}(?:\d,){0,8}[12]\b`,
    String.raw`\bSUPPORTED_PLATFORMS${h}[^;\n]{0,200}?\b${w}`
].join("|"));
const L = /IPHONEOS_DEPLOYMENT_TARGET|TARGETED_DEVICE_FAMILY/;
const v = /\bimport UIKit\b|#import\s*<UIKit\/|\.iOS\(/;
const x = [
    ".swift",
    ".m",
    ".mm",
    ".h"
];
const D = /simctl|devicectl|iphone(?:os|simulator)|platform=iOS|-apple-ios|Simulator/i;
const y = String.raw`-sdk\s+\S*iphone(?:os|simulator)`;
const j = String.raw`(?:"[^"]*"|'[^']*'|[^\s"'])*`;
const N = new RegExp(`${String.raw`^(?:(?:\w+=${j}|sudo|time|env|nice|caffeinate|xcrun|timeout\s+\S+|arch\s+-\S+)\s+){0,20}` + String.raw`(?:\S*[\\/])?(?:` + [
    String.raw`(?:xcrun\s[\s\S]*?)?\b(?:simctl|devicectl)\b`,
    String.raw`xcrun\s[\s\S]*${y}`,
    String.raw`xcodebuild\s[\s\S]*(?:${y}|platform=iOS\b)`,
    String.raw`swift\s+(?:build|test|run)\s[\s\S]*(?:${y}|-triple\s+\S*-apple-ios)`,
    String.raw`open\s[\s\S]*-a\s+["']?Simulator\b`
].join("|")})`, "i");
const M = /\bsimctl\b|-sdk iphonesimulator|-sdk iphoneos|platform=iOS Simulator/;
const W = new Set([
    ht,
    Xt
]);
function H4o() {
    return {
        swiftFileEdited: false,
        evidence: null,
        conclusiveEvidence: null
    };
}
function Q2r(e) {
    if (e.swiftFileEdited && e.evidence !== null) {
        return e.evidence;
    }
    return e.conclusiveEvidence;
}
function F(e) {
    return Q2r(e) !== null;
}
function D4o(e, t) {
    for (let n of t){
        if (F(e)) {
            return;
        }
        let s = n.type === "progress" && (n.data.type === "agent_progress" || n.data.type === "skill_progress") ? n.data.message : n;
        if (s.type === "assistant") {
            if (!Array.isArray(s.message.content)) {
                continue;
            }
            for (let o of s.message.content){
                if (o.type !== "tool_use") {
                    continue;
                }
                let r = o.input;
                if (typeof r !== "object" || r === null) {
                    continue;
                }
                if (W.has(o.name)) {
                    let i = "file_path" in r && typeof r.file_path === "string" ? r.file_path.toLowerCase() : "";
                    if (i.endsWith(".swift")) {
                        e.swiftFileEdited = true;
                    }
                    let u = x.some((m)=>i.endsWith(m));
                    if ("content" in r) {
                        R(e, r.content, u);
                    }
                    if ("new_string" in r) {
                        R(e, r.new_string, u);
                    }
                } else if (u_.includes(o.name) && "command" in r && typeof r.command === "string") {
                    let i = U(r.command);
                    if (i || M.test(r.command)) {
                        g(e, "ios_command", i);
                    }
                }
            }
        } else if (s.type === "user") {
            if (!Array.isArray(s.message.content)) {
                continue;
            }
            for (let o of s.message.content){
                if (o.type === "tool_result") {
                    for (let r of G(o.content)){
                        A(e, r);
                    }
                }
            }
        }
    }
}
function g(e, t, n) {
    e.evidence ??= t;
    if (n) {
        e.conclusiveEvidence ??= t;
    }
}
function A(e, t) {
    if (b.test(t)) {
        g(e, "xcode_project", true);
    } else if (L.test(t)) {
        g(e, "xcode_project", false);
    }
}
function R(e, t, n) {
    if (typeof t !== "string") {
        return;
    }
    if (v.test(t)) {
        g(e, "uikit_import", n);
    }
    A(e, t);
}
function G(content) {
    if (typeof content === "string") {
        return [
            content
        ];
    }
    if (Array.isArray(content)) {
        return content.flatMap((t)=>{
            if (t.type === "text") {
                return [
                    t.text
                ];
            }
            return [];
        });
    }
    return [];
}
function U(command) {
    return D.test(command) && Xot(command).some((t)=>N.test(t));
}
const K = 65536;
const z = 20;
const B = [
    [
        "pnpm-lock.yaml",
        "pnpm"
    ],
    [
        "yarn.lock",
        "yarn"
    ],
    [
        "bun.lock",
        "bun"
    ],
    [
        "bun.lockb",
        "bun"
    ],
    [
        "package-lock.json",
        "npm"
    ],
    [
        "npm-shrinkwrap.json",
        "npm"
    ],
    [
        "deno.lock",
        "deno"
    ],
    [
        "poetry.lock",
        "poetry"
    ],
    [
        "uv.lock",
        "uv"
    ],
    [
        "Pipfile.lock",
        "pipenv"
    ],
    [
        "requirements.txt",
        "pip"
    ],
    [
        "Cargo.lock",
        "cargo"
    ],
    [
        "go.sum",
        "go"
    ],
    [
        "composer.lock",
        "composer"
    ],
    [
        "Gemfile.lock",
        "bundler"
    ],
    [
        "gradle.lockfile",
        "gradle"
    ],
    [
        "packages.lock.json",
        "nuget"
    ],
    [
        "Podfile.lock",
        "cocoapods"
    ],
    [
        "Package.resolved",
        "swift"
    ],
    [
        "mix.lock",
        "mix"
    ],
    [
        "pubspec.lock",
        "pub"
    ],
    [
        "conan.lock",
        "other"
    ]
];
const H = /(?:registry|index-url)\s*=\s*["']?(https?:\/\/[^\s"'`]+)/g;
const X = /\[\[tool\.(?:poetry\.source|uv\.index)\]\][^[]*?url\s*=\s*["'](https?:\/\/[^\s"'`]+)/g;
const Y = /npmRegistryServer\s*:\s*["']?(https?:\/\/[^\s"'`]+)/g;
const I = /(?:index|registry)\s*=\s*["']?(?:sparse\+)?(https?:\/\/[^\s"'`]+)/g;
const V = /\b(?:VAULT_ADDR|SOPS_[A-Z_]*|op read|aws secretsmanager|gcloud secrets)\b/;
const k = /\bcom\.android\.(?:application|library|test|dynamic-feature|tools\.build:gradle)\b/;
const J = /\b(?:enable_language\s*\(\s*CUDA|LANGUAGES\b[^)\n]{0,200}\bCUDA\b|find_package\s*\(\s*CUDA|cuda_add_(?:executable|library))/i;
const q = /^[^\S\n]*-[^\S\n]*(?:[a-z][\w.-]*::)?(?:cudatoolkit|cuda-toolkit|cudnn|pytorch-cuda)\b/m;
const Z = [
    "settings.gradle",
    "settings.gradle.kts",
    "build.gradle",
    "build.gradle.kts"
];
const Q = [
    "environment.yml",
    "environment.yaml"
];
const ee = [
    "ios",
    "iosapp",
    "macos",
    "apple"
];
const te = 5;
const ne = 1048576;
const oe = new Set([
    "registry.npmjs.org",
    "registry.yarnpkg.com",
    "pypi.org",
    "pypi.python.org",
    "files.pythonhosted.org",
    "crates.io",
    "index.crates.io",
    "static.crates.io",
    "proxy.golang.org",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "[::1]",
    "registry.npmmirror.com",
    "registry.npm.taobao.org",
    "pypi.tuna.tsinghua.edu.cn",
    "mirrors.aliyun.com"
]);
function re(e) {
    let t = e?.toLowerCase() ?? null;
    if (!t) {
        return "none";
    }
    if (t.includes("jfrog")) {
        return "jfrog";
    }
    if (t.includes("nexus") || t.includes("sonatype")) {
        return "nexus";
    }
    if (t.includes("github")) {
        return "github";
    }
    if (t.includes("gitlab")) {
        return "gitlab";
    }
    if (t === "pkgs.dev.azure.com" || t.endsWith(".visualstudio.com") || t.endsWith(".azure.com")) {
        return "azure";
    }
    if (t.endsWith(".amazonaws.com")) {
        return "aws";
    }
    if (t.endsWith(".pkg.dev") || t.endsWith(".googleapis.com")) {
        return "gcp";
    }
    return "other";
}
function ie(e) {
    try {
        let t = new URL(e).hostname.toLowerCase();
        if (t && /^[a-z0-9.[][a-z0-9.:\]-]*$/.test(t)) {
            return t;
        }
        return null;
    } catch  {
        return null;
    }
}
function ae(e) {
    try {
        let t = new URL(e);
        return ho(t.hostname) && /^\/rust-lang\/crates\.io-index(?:\.git)?\/?$/.test(t.pathname);
    } catch  {
        return false;
    }
}
function ce(e, t) {
    let n = [];
    let s = e.split(`
`).filter((r)=>!/^\s*[#;]/.test(r)).join(`
`);
    let o = new RegExp(t.source, t.flags);
    for (let r of s.matchAll(o)){
        if (r[1] === undefined || ae(r[1])) {
            continue;
        }
        let i = ie(r[1]);
        if (i !== null) {
            n.push(i);
        }
    }
    return n;
}
async function f(e, t) {
    try {
        let n = await OP(join(e, t), K, {
            noFollow: true
        });
        if (typeof n === "string") {
            return n;
        }
        return null;
    } catch  {
        return null;
    }
}
async function O(e) {
    try {
        return (await lstat(e)).isFile();
    } catch  {
        return false;
    }
}
async function le(e, t, n) {
    let s = [
        ...[
            ".npmrc",
            "pip.conf",
            "pyproject.toml",
            "bunfig.toml"
        ].filter((o)=>t.has(o)).map((o)=>[
                o,
                H
            ]),
        ...t.has("pyproject.toml") ? [
            [
                "pyproject.toml",
                X
            ]
        ] : [],
        ...t.has(".yarnrc.yml") ? [
            [
                ".yarnrc.yml",
                Y
            ]
        ] : [],
        ...n ? [
            [
                ".cargo/config.toml",
                I
            ],
            [
                ".cargo/config",
                I
            ]
        ] : []
    ];
    for (let [o, r] of s){
        if (o.startsWith(".cargo/") && !await O(join(e, o))) {
            continue;
        }
        let i = await f(e, o);
        if (i === null) {
            continue;
        }
        for (let u of ce(i, r)){
            if (!oe.has(u)) {
                return {
                    has_private_registry: true,
                    private_registry_host_class: re(u)
                };
            }
        }
    }
    return {
        has_private_registry: false,
        private_registry_host_class: "none"
    };
}
async function ue(e, t) {
    if (t.some((s)=>{
        let o = s.toLowerCase();
        return o === ".sops.yaml" || o === ".sops.yml";
    })) {
        return true;
    }
    let n = t.filter((s)=>{
        let o = s.toLowerCase();
        return o === ".envrc" || o.endsWith(".yml") || o.endsWith(".yaml") || o.endsWith(".toml") || o.endsWith(".sh");
    }).sort().slice(0, z);
    for (let s of n){
        let o = await f(e, s);
        if (o !== null && V.test(o)) {
            return true;
        }
    }
    return false;
}
async function de(e) {
    try {
        return (await lstat(e)).isDirectory();
    } catch  {
        return false;
    }
}
async function pe(e) {
    try {
        let t = join(e, ".github", "workflows");
        if (!await de(t)) {
            return false;
        }
        return (await readdir(t)).some((s)=>s.endsWith(".yml") || s.endsWith(".yaml"));
    } catch  {
        return false;
    }
}
function fe(e) {
    for (let [t, n] of B){
        if (e.has(t)) {
            return n;
        }
    }
    return "none";
}
async function me(dir, t, n) {
    for (let s of Z){
        if (!t.has(s)) {
            continue;
        }
        let o = await f(dir, s);
        if (o !== null && k.test(_(o))) {
            return true;
        }
    }
    if (n) {
        let s = join(dir, "gradle", "libs.versions.toml");
        if (await O(s)) {
            let o = await f(dir, "gradle/libs.versions.toml");
            if (o !== null && k.test(_(o))) {
                return true;
            }
        }
    }
    return false;
}
function _(e) {
    return e.replace(/^[^\S\n]*(?:#|\/\/).*$/gm, "");
}
async function ge(e, t) {
    if (t.has("CMakeLists.txt")) {
        let n = await f(e, "CMakeLists.txt");
        if (n !== null && J.test(_(n))) {
            return true;
        }
    }
    for (let n of Q){
        if (!t.has(n)) {
            continue;
        }
        let s = await f(e, n);
        if (s !== null && q.test(_(s))) {
            return true;
        }
    }
    return false;
}
function _e(fileNames, dirNames) {
    return [
        ...fileNames,
        ...dirNames
    ].some((n)=>{
        let s = n.toLowerCase();
        return s.endsWith(".xcodeproj") || s.endsWith(".xcworkspace");
    }) || fileNames.includes("Podfile");
}
async function E(e) {
    let t = await readdir(e, {
        withFileTypes: true
    }).catch((n)=>{
        if (H5e(n)) {
            return [];
        }
        return null;
    });
    if (t === null) {
        return null;
    }
    return {
        dir: e,
        fileNames: t.filter((n)=>n.isFile()).map((n)=>n.name),
        dirNames: t.filter((n)=>n.isDirectory()).map((n)=>n.name)
    };
}
async function he(e) {
    let t = e.fileNames.find((s)=>s.toLowerCase() === "project.pbxproj");
    if (t === undefined) {
        return false;
    }
    let n = await OP(join(e.dir, t), ne, {
        noFollow: true,
        fromTail: true
    });
    if (n === "unreadable") {
        return null;
    }
    return n !== null && b.test(n.content);
}
async function P(e) {
    if (e.fileNames.includes("AndroidManifest.xml")) {
        return true;
    }
    return me(e.dir, new Set(e.fileNames), e.dirNames.includes("gradle"));
}
async function ye(e, t, n) {
    if (await P({
        dir: e,
        fileNames: t,
        dirNames: n
    })) {
        return {
            hasAndroidProject: true,
            hasAndroidAppProject: true
        };
    }
    let s = n.find((r)=>r.toLowerCase() === "android");
    let o = s === undefined ? null : await E(join(e, s));
    return {
        hasAndroidProject: false,
        hasAndroidAppProject: o !== null && await P(o)
    };
}
async function be(e, t, n) {
    let s = ee.flatMap((c)=>{
        let l = n.find((d)=>d.toLowerCase() === c);
        if (l === undefined) {
            return [];
        }
        return [
            join(e, l)
        ];
    });
    let o = [
        ...await Promise.all(s.map(E)),
        {
            dir: e,
            fileNames: t,
            dirNames: n
        }
    ];
    let r = o.includes(null);
    let i = o.filter((c)=>c !== null);
    let hasXcodeProject = i.some((c)=>_e(c.fileNames, c.dirNames));
    let m = i.flatMap((c)=>c.dirNames.filter((l)=>l.toLowerCase().endsWith(".xcodeproj")).sort().map((l)=>join(c.dir, l))).slice(0, te);
    for (let c of m){
        let l = await E(c);
        let d = l === null ? null : await he(l);
        if (d === true) {
            return {
                hasXcodeProject,
                hasIosAppProject: true
            };
        }
        r ||= d === null;
    }
    return {
        hasXcodeProject,
        hasIosAppProject: r ? null : false
    };
}
async function Ee(e, t, n, hasXcodeProject, hasAndroidProject) {
    let r = t.map((i)=>i.toLowerCase());
    if (hasXcodeProject) {
        return "xcode";
    }
    if (hasAndroidProject) {
        return "android";
    }
    if (r.some((i)=>i.endsWith(".cu") || i.endsWith(".cuh")) || await ge(e, n)) {
        return "cuda";
    }
    if (r.some((i)=>i.endsWith(".sln") || i.endsWith(".csproj"))) {
        return "dotnet";
    }
    if (r.some((i)=>(i.endsWith(".bat") || i.endsWith(".cmd") || i.endsWith(".ps1")) && i !== "gradlew.bat" && i !== "gradlew.cmd" && i !== "mvnw.bat" && i !== "mvnw.cmd")) {
        return "windows_scripts";
    }
    return "none";
}
async function Se(e) {
    let t = await readdir(e, {
        withFileTypes: true
    });
    let n = t.filter((a)=>a.isFile()).map((a)=>a.name);
    let s = t.filter((a)=>a.isDirectory()).map((a)=>a.name);
    let o = new Set(n);
    let r = n.map((a)=>a.toLowerCase());
    let i = new Set(s.map((a)=>a.toLowerCase()));
    let [u, has_secrets_manager_refs, c, l, d] = await Promise.all([
        le(e, o, s.includes(".cargo")),
        ue(e, n),
        s.includes(".github") ? pe(e) : Promise.resolve(false),
        be(e, n, s),
        ye(e, n, s)
    ]);
    let os_locked_toolchain = await Ee(e, n, o, l.hasXcodeProject, d.hasAndroidProject);
    return {
        has_dockerfile: r.some((a)=>a === "dockerfile" || a.startsWith("dockerfile.") || a.endsWith(".dockerfile")),
        has_compose: r.some((a)=>/^(docker-)?compose(\..+)?\.ya?ml$/.test(a)),
        has_devcontainer: i.has(".devcontainer") || r.includes(".devcontainer.json"),
        has_nix: [
            "flake.nix",
            "default.nix",
            "shell.nix"
        ].some((a)=>o.has(a)),
        has_bazel: [
            "WORKSPACE",
            "WORKSPACE.bazel",
            "MODULE.bazel",
            "BUILD",
            "BUILD.bazel",
            ".bazelrc"
        ].some((a)=>o.has(a)),
        lockfile_family: fe(o),
        has_env_file: r.some((a)=>(a === ".env" || a.startsWith(".env.")) && !/\.(example|sample|template|dist)$/.test(a)),
        has_ci_config: c || i.has(".circleci") || i.has(".buildkite") || r.some((a)=>[
                ".gitlab-ci.yml",
                "jenkinsfile",
                "azure-pipelines.yml",
                ".travis.yml",
                "bitbucket-pipelines.yml"
            ].includes(a)),
        ...u,
        has_secrets_manager_refs,
        has_xcode_project: l.hasXcodeProject,
        has_ios_app_project: l.hasIosAppProject,
        has_android_project: d.hasAndroidProject,
        has_android_app_project: d.hasAndroidAppProject,
        os_locked_toolchain
    };
}
async function we(e) {
    try {
        return await Se(e);
    } catch  {
        return null;
    }
}
async function Kbn(e) {
    try {
        if (Mt()) {
            return null;
        }
        let t = ur(se());
        if (t === null) {
            return null;
        }
        if (await NCr(t)) {
            return null;
        }
        let n = Pp().markersByRoot;
        if (e?.fresh === true) {
            n.delete(t);
        }
        let s = LUe(n, t, we);
        let o = await s;
        if ((o === null || o.has_ios_app_project === null) && n.peek(t) === s) {
            n.delete(t);
        }
        return o;
    } catch  {
        return null;
    }
}
const L4o = 500;
export { H4o, Q2r, D4o, Kbn, L4o };
