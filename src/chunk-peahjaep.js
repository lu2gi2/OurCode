import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Vr, FH, BPr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Gv } from "/$bunfs/root/chunk-craerjpn.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Brn, qCr, dGn, SAo, jrn, rDt } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
function Q6e(e) {
    return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}
const p = 4000;
function v(e, n = 5) {
    let names = [];
    let topFrame;
    for (let R of e.slice(0, p).split(`
`)){
        let i = R.trim();
        if (!i.startsWith("at ")) {
            continue;
        }
        let d = i.slice(3);
        let s = d.indexOf(" (");
        if (topFrame === undefined) {
            let f = s !== -1 ? d.slice(s + 2, -1) : d;
            if (/^(?:node|bun|internal):/.test(f)) {
                topFrame = f;
            } else {
                let E = f.match(/([^/\\]+:\d+:\d+)\)?$/);
                if (E) {
                    topFrame = E[1];
                }
            }
        }
        let u = s !== -1 ? d.slice(0, s) : d;
        u = u.replace(/^async\s+/, "").replace(/^new\s+/, "");
        if (u.includes("/") || u.includes("\\") || /:\d/.test(u)) {
            continue;
        }
        if (u) {
            names.push(u);
        }
        if (names.length >= n) {
            break;
        }
    }
    return {
        names,
        topFrame
    };
}
function N(e) {
    try {
        return String(e);
    } catch  {
        return "[unstringifiable]";
    }
}
function Zu(e) {
    try {
        let n = N(e instanceof Error ? e.message : e);
        let t = {
            error_message_hash: ln(Q6e(n))
        };
        let o = Vr(e);
        if (o !== undefined) {
            t.error_code = o;
        }
        if (!(e instanceof Error)) {
            return t;
        }
        let R = FH(e.constructor?.name);
        if (R !== undefined) {
            t.error_constructor = R;
        }
        let stack_1 = e.stack;
        if (typeof stack_1 !== "string") {
            return t;
        }
        let d = {
            name: e.name,
            message: e.message,
            stack: stack_1
        };
        let s = rDt(d);
        let u = s.length < stack_1.length && stack_1.endsWith(s);
        let { names, topFrame } = v(s);
        if (names.length > 0) {
            t.error_stack_hash = ln(names.join("|"));
        }
        let h = stack_1.length - s.length;
        let stack = stack_1.slice(0, h + p);
        let [l] = u ? jrn({
            ...d,
            stack
        }, 1) : [];
        if (l !== undefined) {
            let m = SAo(l) ? l.file : dGn(l) ? qCr(l.file) : undefined;
            let _ = BPr(m === undefined ? Brn : `${m}:${l.line}:${l.column}`);
            let b = m !== undefined && BPr(topFrame ?? "") !== _;
            if (_ !== undefined && !b) {
                t.error_top_frame = _;
            }
        }
        return t;
    } catch  {
        return {};
    }
}
const M = "tengu_ax_screen_reader";
function YTs(e) {
    return r().swapRemoteGateReader(e);
}
class S {
    #n;
    #a;
    #o;
    #u;
    #t = null;
    #i = null;
    #c = false;
    #e = [];
    #r = false;
    #s = 0;
    swapRemoteGateReader(e) {
        let n = this.#t;
        this.#t = e;
        return n;
    }
    isEnabled() {
        if (this.#n !== undefined) {
            return this.#n;
        }
        let e;
        let n;
        if (Gv("--ax-screen-reader")) {
            e = true;
            n = "flag";
        } else {
            let o = a.CLAUDE_AX_SCREEN_READER;
            if (o !== undefined) {
                e = o;
                n = "env";
            } else {
                e = ft().axScreenReader === true;
                n = "settings";
            }
        }
        if (!e) {
            return this.#n = false;
        }
        let t = this.#t?.(M, true) ?? true;
        this.#a = t ? n : undefined;
        return this.#n = t;
    }
    activationSource() {
        if (this.isEnabled()) {
            return this.#a;
        }
    }
    isArrowNavEnabled() {
        if (this.#o === undefined) {
            this.#o = this.#t?.(C, false) ?? false;
        }
        return this.#o;
    }
    isSuggestionNavEnabled() {
        {
            if (!this.isEnabled()) {
                return false;
            }
            let e = false;
            this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e;
            return this.#u;
        }
        return false;
    }
    markAnnouncementWritten(e) {
        if (this.#i === null) {
            this.#i = e;
        }
    }
    endStartupQuiet() {
        this.#c = true;
    }
    startupQuietOpenedAtMs() {
        if (this.#c) {
            return null;
        }
        return this.#i;
    }
    queueAnnouncement(e, n = false) {
        this.#e.push(e);
        if (n) {
            this.#r = true;
        }
        if (this.#e.length > A) {
            this.#e.splice(0, this.#e.length - A);
        }
    }
    drainAnnouncements() {
        return this.#e.splice(0);
    }
    takeHoldRequest() {
        let e = this.#r;
        this.#r = false;
        return e;
    }
    startHold(e) {
        this.#s = e;
    }
    endHold() {
        this.#s = 0;
        this.#r = false;
    }
    holdActive(e) {
        return e < this.#s;
    }
    reset() {
        this.#n = undefined;
        this.#a = undefined;
        this.#o = undefined;
        this.#u = undefined;
        this.#i = null;
        this.#c = false;
        this.#e.length = 0;
        this.#r = false;
        this.#s = 0;
    }
}
const x = new q(()=>new S);
function r() {
    return x.of(B().host);
}
var C = "tengu_ax_sr_arrow_nav";
function Act() {
    return r().isArrowNavEnabled();
}
function J1n() {
    return r().isSuggestionNavEnabled();
}
function mm() {
    return r().isEnabled();
}
function XTs() {
    {
        let e = r();
        if (e.isEnabled()) {
            let n = e.activationSource();
            if (n) {
                return `[Screen Reader Mode: on via ${n}]`;
            }
            return "[Screen Reader Mode: on]";
        }
    }
    return null;
}
const D = 3000;
const T = 600000;
function JTs() {
    r().markAnnouncementWritten(Date.now());
}
function skr() {
    r().endStartupQuiet();
}
function QTs() {
    {
        let e = r().startupQuietOpenedAtMs();
        if (e === null) {
            return 0;
        }
        let n = Math.min(a.CLAUDE_AX_STARTUP_QUIET_MS ?? D, T);
        let t = e + n - Date.now();
        if (t > 0) {
            return t;
        }
        return 0;
    }
    return 0;
}
const w = 0;
const X = 5000;
function ZTs() {
    return Math.min(a.CLAUDE_AX_PREPARK_MS ?? w, X);
}
function eAs() {
    return a.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? false;
}
function x8() {
    if (r().isEnabled()) {
        return {
            CLAUDE_AX_SCREEN_READER: "1"
        };
    }
    return {};
}
function tAs() {
    {
        let e = r();
        if (e.isEnabled()) {
            return {
                screenReaderMode: true,
                screenReaderActivationSource: pe(e.activationSource())
            };
        }
    }
    return {};
}
var A = 16;
function zV(e, n) {
    r().queueAnnouncement(e, n?.hold === true);
}
function nAs() {
    if (r().takeHoldRequest()) {
        return Math.min(a.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1000, 10000);
    }
    return 0;
}
function rAs(e) {
    r().startHold(Date.now() + e);
}
function Z6e() {
    r().endHold();
}
function oAs() {
    return r().holdActive(Date.now());
}
function sAs() {
    return r().drainAnnouncements();
}
export { Q6e, Zu, YTs, Act, J1n, mm, XTs, JTs, skr, QTs, ZTs, eAs, x8, tAs, zV, nAs, rAs, Z6e, oAs, sAs };
