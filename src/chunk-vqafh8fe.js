import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Mis } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { q6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { QS } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const m = Se(ty(), 1);
const Y9n = "1.1.9669";
function h() {
    let e = [
        process.argv[1] || "",
        process.execPath || ""
    ].map((o)=>o.replaceAll("\\", "/"));
    let n = [
        "/build-ant/",
        "/build-ant-native/",
        "/build-external/",
        "/build-external-native/"
    ];
    return e.some((o)=>n.some((r)=>o.includes(r)));
}
function p(e, n, o = {}) {
    let r = new URL(`${e}://${n}`);
    for (let [a, s] of Object.entries(o)){
        r.searchParams.set(a, s);
    }
    return r.toString();
}
function g(e, scheme) {
    switch(e.kind){
        case "resume":
            return p(scheme, "resume", {
                session: e.sessionId
            });
        case "new-session":
            return `${p(scheme, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
    }
}
function A(version) {
    let n = m.coerce(version);
    return n !== null && QS(n.version, Y9n);
}
async function D(e) {
    {
        let { code, stdout } = await it("xdg-mime", [
            "query",
            "default",
            `x-scheme-handler/${e}`
        ]);
        return code === 0 && stdout.trim().length > 0;
    }
    return false;
}
async function l() {
    if (h()) {
        if (await D("claude-dev")) {
            return "claude-dev";
        }
    }
    if (await w()) {
        return "claude";
    }
    return null;
}
async function EGo() {
    return await l() !== null;
}
async function w() {
    return D("claude");
}
async function v() {
    return null;
}
async function cjr() {
    let scheme = await l();
    if (scheme === null) {
        return {
            status: "not-installed"
        };
    }
    if (scheme === "claude-dev") {
        return {
            status: "ready",
            version: "unknown",
            scheme
        };
    }
    let version;
    let macApp;
    try {
        version = await v();
    } catch  {
        return {
            status: "ready",
            version: "unknown",
            scheme
        };
    }
    if (!version) {
        return {
            status: "ready",
            version: "unknown",
            scheme,
            macApp
        };
    }
    if (!A(version)) {
        return {
            status: "version-too-old",
            version
        };
    }
    return {
        status: "ready",
        version,
        scheme,
        macApp
    };
}
const P = 200;
function y(e, { code, exitCode, stderr, error, timedOut, maxBufferExceeded }) {
    if (code === 0) {
        return {
            opened: true
        };
    }
    let i = stderr || error;
    t(`Deep link opener ${e} failed: code ${code}, exitCode ${exitCode ?? "undefined"}${i ? `: ${i}` : ""}`);
    if (timedOut) {
        return {
            opened: false,
            detail: `\`${e}\` timed out`
        };
    }
    if (maxBufferExceeded) {
        return {
            opened: false,
            detail: `\`${e}\` printed too much output`
        };
    }
    let d = exitCode === undefined ? `\`${e}\` failed` : `\`${e}\` exited ${exitCode}`;
    let f = Et(Tr(stderr.trim()) || (exitCode === undefined ? error : "") || "", P).replace(/\.+$/, "");
    return {
        opened: false,
        detail: f.length === 0 ? d : `${d}: ${f}`
    };
}
async function k(e, n) {
    t(`Opening deep link: ${e}`);
    return y("xdg-open", await it("xdg-open", [
        e
    ], {
        useCwd: true,
        useToolMemoryCgroup: false
    }));
    return {
        opened: false,
        detail: "no deep link opener for linux"
    };
}
function myt(e) {
    let CLAUDE_AI_ORIGIN = dn().CLAUDE_AI_ORIGIN;
    if (!q6t(e)) {
        t("[desktop-deep-link] invalid claude.ai path; origin only", {
            level: "warn"
        });
        return CLAUDE_AI_ORIGIN;
    }
    return `${CLAUDE_AI_ORIGIN}${e}`;
}
async function kGo({ webPath, desktopPath }) {
    if (!q6t(webPath) || !q6t(desktopPath)) {
        return "none";
    }
    if (dn().CLAUDE_AI_ORIGIN === Mis) {
        let o = await l();
        if (o !== null && (await k(p(o, `claude.ai${desktopPath}`))).opened) {
            return "desktop";
        }
    }
    if (await Fs(myt(webPath))) {
        return "browser";
    }
    return "none";
}
async function djr(e) {
    let n = await cjr();
    if (n.status === "not-installed") {
        return {
            success: false,
            reason: "not_installed",
            error: "Claude Desktop is not installed. Install it from https://claude.ai/download"
        };
    }
    if (n.status === "version-too-old") {
        return {
            success: false,
            reason: "outdated",
            error: `Claude Desktop ${n.version} is too old. Update to ${Y9n} or later.`
        };
    }
    let deepLinkUrl = g(e, n.scheme);
    let r = await k(deepLinkUrl, n.macApp);
    if (!r.opened) {
        return {
            success: false,
            reason: "open_failed",
            error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.`,
            deepLinkUrl
        };
    }
    return {
        success: true,
        deepLinkUrl
    };
}
async function TGo() {
    return djr({
        kind: "resume",
        sessionId: K()
    });
}
export { Y9n, EGo, cjr, myt, kGo, djr, TGo };
