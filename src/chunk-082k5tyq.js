import { bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { q8 } from "/$bunfs/root/chunk-k7dkeqsc.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { Gj, hM } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ygt, Fun } from "/$bunfs/root/chunk-yvsg05m2.js";
const h = /^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/;
function _$t(e) {
    if (e == null) {
        return;
    }
    if (h.test(e)) {
        return kn(e);
    }
    return b("nonconforming");
}
const u = new Set([
    "Apple_Terminal",
    "contour",
    "foot",
    "ghostty",
    "iTerm.app",
    "iTerm2",
    "kitty",
    "Konsole",
    "libghostty",
    "libvterm",
    "mintty",
    "Rio",
    "ShellFish",
    "SwiftTerm",
    "Tabby",
    "terminology",
    "Termius",
    "tmux",
    "VTE",
    "Warp",
    "WezTerm",
    "xterm",
    "xterm-ghostty",
    "XTerm",
    "xterm.js",
    "Zap",
    "Zellij"
]);
const T = [
    /^(?:next-)?v?\d{1,8}(?:\.\d{1,8}){0,5}[a-z]?$/,
    /^\d{1,8}\.\d{1,8}\.\d{1,8}-?(?:alpha|beta|rc|pre|dev)\.?\d{0,8}$/,
    /^\d{8}[-_]\d{6}[-_][0-9a-f]{8}$/,
    /^v\d\.\d{4}(?:\.\d{2}){4}\.(?:stable|preview|beta|dev)_\d{2}$/
];
const N = /^\d{1,8}(?:\.\d{1,8}){1,3}/;
const S = /^([A-Za-z][A-Za-z0-9_.]*)(.*)$/;
const O = /^([A-Za-z][A-Za-z0-9_.-]*[A-Za-z0-9_.])(.*)$/;
const v = /[):]{1,4}$/;
function QLo(e) {
    if (e === undefined) {
        return b("no_reply");
    }
    let n = e.length <= 128 ? S.exec(e) : null;
    if (!n) {
        return b("other");
    }
    let o = O.exec(e);
    let [, r = "", s = ""] = o && u.has(o[1] ?? "") ? o : n;
    if (!u.has(r)) {
        return b("other");
    }
    if (s === "") {
        return kn(r);
    }
    let l = s[0];
    let c = s.slice(1).replace(v, "");
    if (c === "") {
        return kn(l === "(" ? `${r}()` : r);
    }
    let f = T.some((_)=>_.test(c)) ? c : N.exec(c)?.[0] ?? "other";
    switch(l){
        case "(":
            return kn(`${r}(${f})`);
        case " ":
        case "-":
            return kn(`${r}${l}${f}`);
        default:
            return kn(`${r} ${f}`);
    }
}
async function G0(e, n, o = {}) {
    await r0r(e, n, o);
}
async function r0r(e, n, { storageV5, credentials, hookOrigin } = {}) {
    let value = hs("preferredNotifChannel", "auto").value;
    await hM(Gj(), e, {
        storageV5,
        credentials,
        hookOrigin
    });
    let c = await A(value, e, n);
    if (c === "error") {
        m("notification_show", "send_failed");
    } else {
        g("notification_show");
    }
    i("tengu_notification_method_used", {
        configured_channel: d(q8.includes(value) ? value : "invalid"),
        notification_type: d(e.notificationType),
        method_used: d(c),
        term: _$t(a.terminal),
        attacher_term: _$t(bu()?.terminal)
    });
    return c;
}
const p = "Claude Code";
async function A(e, n, o) {
    if (e === "auto") {
        let s = await I();
        y(s, n, o);
        return s;
    }
    let r;
    switch(e){
        case "iterm2":
        case "iterm2_with_bell":
        case "kitty":
        case "ghostty":
        case "terminal_bell":
            r = e;
            break;
        case "notifications_disabled":
            r = "disabled";
            break;
        default:
            r = "none";
    }
    try {
        y(r, n, o);
        return r;
    } catch  {
        return "error";
    }
}
async function I() {
    switch(bu()?.terminal ?? a.terminal){
        case "Apple_Terminal":
            if (await w()) {
                return "terminal_bell";
            }
            return "no_method_available";
        case "iTerm.app":
            return "iterm2";
        case "kitty":
            return "kitty";
        case "ghostty":
            return "ghostty";
        default:
            return "no_method_available";
    }
}
function y(e, n, o) {
    switch(e){
        case "iterm2":
            o.notifyITerm2(n);
            return;
        case "iterm2_with_bell":
            o.notifyITerm2(n);
            o.notifyBell();
            return;
        case "kitty":
            o.notifyKitty({
                ...n,
                title: n.title || p,
                id: E()
            });
            return;
        case "ghostty":
            o.notifyGhostty({
                ...n,
                title: n.title || p
            });
            return;
        case "terminal_bell":
            o.notifyBell();
            return;
        case "disabled":
        case "none":
        case "no_method_available":
            return;
    }
}
function E() {
    return Math.floor(Math.random() * 10000);
}
async function w() {
    try {
        let n = (await it("osascript", [
            "-e",
            'tell application "Terminal" to name of current settings of front window'
        ])).stdout.trim();
        if (!n) {
            return false;
        }
        let o = await it("defaults", [
            "export",
            "com.apple.Terminal",
            "-"
        ]);
        if (o.code !== 0) {
            return false;
        }
        let r = Fun(o.stdout);
        if (!ygt(r)) {
            t("Failed to read Apple Terminal bell setting: defaults export is not a plist dict");
            return false;
        }
        let s = r["Window Settings"];
        let l = ygt(s) ? s[n] : undefined;
        if (!ygt(l)) {
            t("Failed to read Apple Terminal bell setting: no settings dict for the current profile");
            return false;
        }
        return l.Bell === false;
    } catch (error) {
        t(`Failed to read Apple Terminal bell setting: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return false;
    }
}
export { _$t, QLo, G0, r0r };
