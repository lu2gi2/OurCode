import { we, BR, jR, gwe, Ssn, M0, HBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _o, Gm, su, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Mv, fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Prn, yZ, qHt } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { ep } from "/$bunfs/root/chunk-3yz9zdww.js";
import { _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { aO, Dm, i0, C_o, fFe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { mrn } from "/$bunfs/root/chunk-2321ytcf.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { n3t } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { TD, AD, OPn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Pa, C9t, KLe, Rre, U9t } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { DB } from "/$bunfs/root/chunk-tn496ms6.js";
import { ZX, i3, W9o, dwt, uwt, P_, DVt, G9o, q9o, Onr, vHe, AA, tkn, Q9o, VHe, sp, tnt, Yl, lYt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { cS, jc } from "/$bunfs/root/chunk-38fr02qr.js";
import { hXt } from "/$bunfs/root/chunk-ma873c97.js";
import { NM, Bc } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { vYt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { gte } from "/$bunfs/root/chunk-1xpcvyz3.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { homedir } from "os";
import { realpath, stat } from "fs/promises";
import { dirname, parse } from "path";
const b = "Cd";
function x(e, r) {
    let s = D([
        ..._o(e.requestedPath),
        e.canonicalPath
    ]);
    let n = D([
        e.canonicalPath,
        U9t(e.canonicalPath)
    ]);
    let l = (o, source, f)=>f.some((g)=>B(o, source, g));
    for (let rule of Bc(r)){
        if (rule.ruleValue.toolName !== b) {
            continue;
        }
        let m = rule.ruleValue.ruleContent;
        if (m === undefined || l(m, rule.source, s)) {
            return {
                result: "blockedByRule",
                rule
            };
        }
    }
    let u = NM(r).filter((o)=>o.ruleValue.toolName === b);
    if (u.length === 0) {
        return {
            result: "allowed"
        };
    }
    for (let o of u){
        let m = o.ruleValue.ruleContent;
        if (m === undefined || l(m, o.source, n)) {
            return {
                result: "allowed"
            };
        }
    }
    return {
        result: "outsideAllowedPatterns",
        allowedPatterns: u.map((o)=>o.ruleValue.ruleContent).filter((o)=>o !== undefined)
    };
}
function B(e, source, s) {
    let { relativePattern, root } = Rre(e, source);
    let u = KLe(root ?? se(), s);
    if (u === ".." || u.startsWith("../")) {
        return false;
    }
    let o = relativePattern.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
    return N(o).test(u);
}
function N(e) {
    let r = "^";
    for(let s = 0; s < e.length; s++){
        let n = e[s];
        if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") {
            r += "(?:.*/)?";
            s += 2;
        } else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") {
            r += "(/.*)?";
            s += 2;
        } else if (n === "*") {
            if (e[s + 1] === "*") {
                r += ".*";
                s++;
            } else {
                r += "[^/]+";
            }
        } else if ("\\^$.|?+()[]{}".includes(n)) {
            r += `\\${n}`;
        } else {
            r += n;
        }
    }
    return new RegExp(`${r}$`, "i");
}
async function Kfe(e, r) {
    if (await H(e)) {
        M0(true);
        HBe(true);
        return false;
    }
    return C_o(e, r);
}
async function H(e) {
    let r = async (s)=>{
        let n = s;
        try {
            n = await realpath(s);
        } catch  {}
        return ep(On(n));
    };
    return await r(e) === await r(homedir());
}
async function J6n(e, r) {
    let s = et(e);
    try {
        if (!(await stat(s)).isDirectory()) {
            return {
                result: "not_a_directory",
                path: s,
                parent: dirname(s)
            };
        }
    } catch (error) {
        if (!jt(error)) {
            c(Object.assign(Error("cd: unexpected stat errno"), {
                code: v(error)
            }));
        }
        return {
            result: "not_found",
            path: s
        };
    }
    let n = s;
    try {
        n = await realpath(s);
    } catch  {
        n = s;
    }
    let l = On(n);
    if (l === se() && l === we()) {
        return {
            result: "same",
            directory: n
        };
    }
    let check = x({
        requestedPath: s,
        canonicalPath: n
    }, r);
    if (check.result !== "allowed") {
        return {
            result: "blocked_by_rule",
            directory: n,
            check
        };
    }
    return {
        result: "ok",
        directory: n
    };
}
function Q6n(e, r, s = (l)=>l, n) {
    let l = n?.terminalAffordances !== false;
    let u = n?.display ?? ((o)=>o);
    e = u(e);
    if (r.result === "blockedByRule") {
        let o = u(_n(r.rule.ruleValue));
        let m = VHe(r.rule.source);
        if (r.rule.ruleValue.ruleContent === undefined) {
            if (l) {
                return `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.`;
            }
            return `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
        }
        if (l) {
            return `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.`;
        }
        return `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
    }
    if (l) {
        return `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map((o)=>s(u(o))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.`;
    }
    return `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map((o)=>s(u(o))).join(", ")}. Pick a matching directory.`;
}
async function U(e, r, storageV5) {
    if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) {
        return "";
    }
    let n = new Set;
    for (let y of (await P_(e, false, storageV5))){
        n.add(ep(y.path));
    }
    let l = [];
    let u = r;
    while(u !== parse(u).root){
        l.push(u);
        u = dirname(u);
    }
    let o = dwt(r);
    let { held, keep } = W9o(e);
    let g = [];
    for (let y of l.reverse()){
        g.push(...await Onr(y, r, n, {
            skipProject: uwt(y, o),
            held: y === r ? held?.within : held?.above(y)
        }));
    }
    keep();
    return q9o(g);
}
async function wgt(e, r, s, { storageV5, credentials, freshSession = false, confirmFresh, requestBuilt } = {}) {
    let f = se();
    let prevCwd = we();
    let y = D([
        prevCwd,
        f
    ]);
    let departedAdditionalDirectories = D([
        ...fe("projectSettings")?.permissions?.additionalDirectories ?? [],
        ...fe("localSettings")?.permissions?.additionalDirectories ?? []
    ].flatMap((p)=>{
        try {
            return y.map((P)=>et(p, P));
        } catch  {
            return [];
        }
    }));
    Gm(r);
    sp(r);
    jR(se());
    let transcriptRelocated = true;
    try {
        await tnt(storageV5);
    } catch (error) {
        transcriptRelocated = false;
        let P = false;
        try {
            Gm(f);
            P = true;
        } catch  {
            t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${error}`, {
                level: "error"
            });
        }
        if (P) {
            sp(f);
            jR(prevCwd);
            throw error;
        }
    }
    if (transcriptRelocated) {
        try {
            await n3t(se(), storageV5);
        } catch (error) {
            t(`directory move: bg session state rehome failed (continuing): ${error}`, {
                level: "error"
            });
        }
    }
    fFe();
    try {
        await Pa.rehome();
    } catch (error) {
        t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${error}`, {
            level: "error"
        });
    }
    try {
        DB();
        Pa.notifyChange("projectSettings", {
            prevCwd
        });
    } catch (error) {
        t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${error}`, {
            level: "error"
        });
    }
    try {
        await gte.rehome();
    } catch (error) {
        t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
            level: "error"
        });
    }
    let fresh_session = freshSession && (confirmFresh === undefined || confirmFresh());
    if (fresh_session) {
        gwe(se());
    } else {
        try {
            await lYt(await ZX("skills", se()));
        } catch (error) {
            t(`directory move: registering the new directory's skills failed (continuing without them): ${error}`, {
                level: "error"
            });
        }
    }
    yZ();
    qHt(e);
    Sc()?.refreshGitBranch?.();
    qe.refreshConfig();
    OPn();
    i("tengu_cd_command", {
        source: d(s),
        fresh_session
    });
    if (fresh_session) {
        try {
            i3();
            DVt(e, "session_start");
            G9o(e);
            Q9o(e);
            hXt.of(e).clear();
            tkn(e);
            Ssn(null);
            mrn();
            Prn();
            jc.cache.clear?.();
            cS(storageV5);
            aO().reset();
            vHe(e);
            AA(e, storageV5, credentials);
        } catch (error) {
            t(`directory move: re-deriving start-of-session state for the new directory failed (continuing): ${error}`, {
                level: "error"
            });
        }
        return {
            modelMessage: "",
            transcriptRelocated,
            projectGrantsGated: false,
            gatedNotice: "",
            departedAdditionalDirectories,
            freshSession: true
        };
    }
    let C = "";
    try {
        C = await U(e, r, storageV5);
    } catch (error) {
        t(`directory move: loading the new directory's memory context failed (continuing without it): ${error}`, {
            level: "error"
        });
    }
    let S = su(r);
    let A = s === "cd_command" ? "via /cd" : "by the user";
    let M = requestBuilt === undefined || requestBuilt() ? "The environment block at the start of this conversation still names the " + "previous directory — that information is stale. " : "";
    let F = Yl(`${`The session's working directory has changed to ${S} (${A}). ` + M + `All tool calls and relative paths now resolve from ${S}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${S}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's `}settings stay in effect for this process — they cannot be unset — and the new directory's settings env is applied on top of them.`);
    let projectGrantsGated = false;
    try {
        projectGrantsGated = !a.CLAUDE_CODE_SANDBOXED && !BR() && !Dm() && C9t();
    } catch (error) {
        t(`directory move: probing the gated project grants failed (continuing): ${error}`, {
            level: "error"
        });
    }
    let gatedNotice = projectGrantsGated ? Yl(`Note: ${S} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
    return {
        modelMessage: [
            F,
            gatedNotice,
            C
        ].filter(Boolean).join(`

`),
        transcriptRelocated,
        projectGrantsGated,
        gatedNotice,
        departedAdditionalDirectories,
        freshSession: false
    };
}
function Z6n() {
    fFe();
    DB();
    Pa.notifyChange("projectSettings", {
        trustFlip: true
    });
}
function e3n(e) {
    if (e.gatedNotice === "") {
        return e.modelMessage;
    }
    return e.modelMessage.replace(e.gatedNotice, Yl("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
function IHs(e, r) {
    if (vYt.test(e)) {
        return r;
    }
    return e;
}
async function HBs(e, r) {
    if (r.isBusy()) {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "busy",
                message: "A turn is in progress — the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry."
            }
        };
    }
    if (typeof e.path !== "string" || e.path.trim() === "") {
        return {
            kind: "invalid",
            message: "set_cwd: invalid request — path must be a non-empty string"
        };
    }
    let s = e.trust_accepted === true;
    if (s && typeof e.trusted_directory !== "string") {
        return {
            kind: "invalid",
            message: "set_cwd: invalid request — trust_accepted requires trusted_directory (echo the directory from the needs_trust response)"
        };
    }
    let n = false;
    try {
        n = TD(e.path, et(e.path), r.toolPermissionContext.trustedNetworkDirectories).ok;
    } catch  {
        n = false;
    }
    if (!n) {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "unsafe_path",
                message: "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
            }
        };
    }
    let l = await J6n(e.path.trim(), r.toolPermissionContext);
    let u = "directory" in l ? l.directory : l.path;
    if (vYt.test(u)) {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "unsafe_path",
                message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
            }
        };
    }
    if ("directory" in l && AD(l.directory, r.toolPermissionContext.trustedNetworkDirectories) !== undefined) {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "unsafe_path",
                message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
            }
        };
    }
    if (l.result === "not_found") {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "not_found",
                message: `Couldn't find a directory at ${l.path}.`
            }
        };
    }
    if (l.result === "not_a_directory") {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "not_a_directory",
                message: `${l.path} is not a directory.`
            }
        };
    }
    if (l.result === "blocked_by_rule") {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "blocked_by_rule",
                message: IHs(Q6n(l.directory, l.check, undefined, {
                    terminalAffordances: false
                }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here — check the Cd(...) entries in your settings.")
            }
        };
    }
    if (l.result === "same") {
        return {
            kind: "response",
            response: {
                status: "ok",
                cwd: l.directory,
                changed: false,
                transcript_relocated: true
            }
        };
    }
    let l_directory = l.directory;
    if (!i0(l_directory)) {
        let h = Mv(l_directory);
        let trust_root = h != null && h !== l_directory && !vYt.test(h) ? h : undefined;
        if (!s) {
            return {
                kind: "response",
                response: trust_root != null ? {
                    status: "needs_trust",
                    directory: l_directory,
                    trust_root
                } : {
                    status: "needs_trust",
                    directory: l_directory
                }
            };
        }
        if (e.trusted_directory !== l_directory) {
            return {
                kind: "response",
                response: trust_root != null ? {
                    status: "needs_trust",
                    directory: l_directory,
                    trust_root
                } : {
                    status: "needs_trust",
                    directory: l_directory
                }
            };
        }
        await Kfe(l_directory, r.storageV5);
    }
    if (r.isBusy()) {
        return {
            kind: "response",
            response: {
                status: "rejected",
                reason: "busy",
                message: "A turn started while the request was being validated. Retry when the session is idle."
            }
        };
    }
    let freshSession_1 = r.isFreshSession();
    let { modelMessage, transcriptRelocated, departedAdditionalDirectories, freshSession } = await wgt(r.session, l_directory, "set_cwd", {
        storageV5: r.storageV5,
        credentials: r.credentials,
        freshSession: freshSession_1,
        confirmFresh: ()=>!r.isBusy() && r.isFreshSession(),
        requestBuilt: r.requestBuilt
    });
    try {
        r.retireDepartedAdditionalDirectories?.(departedAdditionalDirectories);
    } catch (error) {
        t(`set_cwd: retiring the previous project's additional directories failed (continuing): ${error}`, {
            level: "error"
        });
    }
    try {
        if (modelMessage) {
            r.enqueueMoveNotice(modelMessage);
        }
    } catch (error) {
        t(`set_cwd: enqueueing the move notice failed (continuing): ${error}`, {
            level: "error"
        });
    }
    let w = se();
    return {
        kind: "response",
        response: {
            status: "ok",
            cwd: vYt.test(w) ? l_directory : w,
            changed: true,
            transcript_relocated: transcriptRelocated
        },
        freshSession
    };
}
export { Kfe, J6n, Q6n, wgt, Z6n, e3n, IHs, HBs };
