import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { K, MRo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Xy, ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, Z1, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { gRr, YF, yC, ss, Kz } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { oDt, tRr, _g, _Gn, nRr, J5e, xN, nA } from "/$bunfs/root/chunk-3yz9zdww.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Fb } from "/$bunfs/root/chunk-2d9a83dh.js";
import { gse, Mf, SH } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { d8e } from "/$bunfs/root/chunk-x47nahfr.js";
import { By } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Pdt, Cz, yn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Pa, to, YLe, Yst, rRt, rco, Ik } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { mgs, ggs } from "/$bunfs/root/chunk-4r6b8efh.js";
import { G2 } from "/$bunfs/root/chunk-vmr48rzv.js";
import { m5t } from "/$bunfs/root/chunk-52fke4xs.js";
import { eoo } from "/$bunfs/root/chunk-3yn0xtkv.js";
import { o, oe, T, u, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { z1, E_ } from "/$bunfs/root/chunk-yngqe5v3.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomBytes } from "crypto";
import { constants } from "fs";
import { lstat, open, readdir, realpath, stat, unlink } from "fs/promises";
import { homedir } from "os";
import { basename, dirname, join } from "path";
function W3(e) {
    return (e.startsWith("\uFEFF") ? e.slice(1) : e).replaceAll(`\r
`, `
`);
}
const Nlr = 1;
const Ne = 64;
const We = 1048576;
const $lr = ".proposed-";
const Le = /^[0-9a-f]{8}$/;
const Be = 900000;
const Me = {
    userSettings: "user_settings",
    projectSettings: "project_settings",
    localSettings: "local_settings",
    flagSettings: "policy_settings",
    policySettings: "policy_settings"
};
const He = p(()=>u({
        id: o().min(1),
        path: o().min(1),
        resolvedPath: o().min(1),
        baseSha256: o().nullable(),
        proposedSha256: o(),
        proposedContent: o(),
        stagedAt: o(),
        by: u({
            tool: U([
                "Write",
                "Edit"
            ]),
            origin: U([
                "local",
                "served"
            ]),
            sessionId: o()
        })
    }));
const ze = p(()=>u({
        version: A(Nlr),
        entries: T(He())
    }));
function ne() {
    return join(homedir(), ".claude", "state", "settings-review.json");
}
const we = [
    "policySettings",
    "flagSettings",
    ...By
];
function M(e) {
    let n = to(e);
    return we.find((r)=>{
        let s = yn(r);
        return s !== undefined && to(s) === n;
    });
}
async function ye(e) {
    let n;
    try {
        n = await locate(e);
    } catch  {
        return M(e);
    }
    return Y(e, n);
}
async function Y(e, n) {
    let r = M(e);
    if (r !== undefined) {
        return r;
    }
    let s = to(n);
    for (let a of we){
        let h = yn(a);
        if (h === undefined) {
            continue;
        }
        try {
            if (to(await locate(h)) === s) {
                return a;
            }
        } catch  {}
    }
}
function pe(e) {
    let bom = e.content.startsWith("\uFEFF");
    return {
        text: bom ? e.content.slice(1) : e.content,
        encoding: e.encoding,
        bom,
        lineEndings: e.lineEndings
    };
}
function q(e) {
    return {
        readStore: async ()=>{
            try {
                return await mn().read(ne());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeStore: async (n)=>{
            let r = ne();
            await mn().mkdir(dirname(r), 448);
            await mn().atomicWrite(r, n, 384);
        },
        deleteStore: async ()=>{
            try {
                await mn().delete(ne());
            } catch (error) {
                if (!z(error)) {
                    throw error;
                }
            }
        },
        readTarget: async (n)=>{
            try {
                return pe(await E_(await Ce(n), Mf)).text;
            } catch (error) {
                if (z(error)) {
                    return null;
                }
                throw error;
            }
        },
        writeTarget: async ({ path, resolvedPath, baseSha256, content, blockedOnceWritten })=>{
            let f;
            try {
                f = await Fb(resolvedPath, [
                    resolvedPath
                ], {
                    createParents: true
                });
            } catch (error) {
                if (error instanceof _g) {
                    return "redirected";
                }
                throw error;
            }
            let S = basename(resolvedPath);
            let w = `${$lr}${randomBytes(4).toString("hex")}`;
            let stagingDir = join(dirname(resolvedPath), YF);
            let C = join(dirname(f.ioPath), `${S}${w}`);
            let P = false;
            try {
                C = tRr(stagingDir, f.ioPath, w, false);
                let b = dirname(C) !== dirname(f.ioPath);
                await je(dirname(C), S);
                let k = async ()=>{
                    let B;
                    try {
                        B = await f.readExisting(Mf);
                    } catch (error) {
                        if (z1(error)) {
                            return "changed";
                        }
                        throw error;
                    }
                    let te = B === null ? null : pe(B);
                    if ((te === null ? null : at(te.text)) === baseSha256) {
                        return te;
                    }
                    return "changed";
                };
                let I = await k();
                if (I === "changed") {
                    return "changed";
                }
                let encoding = I?.encoding ?? "utf8";
                let N = (I?.bom ? "\uFEFF" : "") + J5e(content, I?.lineEndings ?? "LF");
                let j = Buffer.from(N, encoding);
                await Kz(C, j, 384);
                P = true;
                let J = b ? C : join(dirname(resolvedPath), `${S}${w}`);
                if (await blockedOnceWritten(J)) {
                    return "blocked";
                }
                if (await k() === "changed") {
                    return "changed";
                }
                let E = await $e(C, J, j);
                if (E === null) {
                    return "tampered";
                }
                await f.recheckBeforeWrite();
                let W = await lstat(C).catch(()=>null);
                if (W === null || W.isSymbolicLink() || W.ino !== E.ino || W.dev !== E.dev) {
                    return "tampered";
                }
                if (b) {
                    oDt(stagingDir);
                }
                try {
                    await ss(C, f.ioPath);
                    P = false;
                } catch (error) {
                    if (!yC.has(v(error) ?? "")) {
                        throw error;
                    }
                    await nA(f.ioPath, N, {
                        encoding,
                        stagingDir,
                        refuseHardLinkedInPlace: true
                    });
                }
                let ce = await Y(path, resolvedPath);
                let de = ce === undefined ? undefined : yn(ce);
                if (de !== undefined) {
                    Pdt(de);
                }
                return "written";
            } catch (error) {
                if (error instanceof _Gn) {
                    return "hard_linked";
                }
                if (error instanceof _g) {
                    return "redirected";
                }
                if (error instanceof nRr) {
                    return "tampered";
                }
                throw error;
            } finally{
                if (P) {
                    await unlink(C).catch((b)=>{
                        t(`settings review store: could not remove the proposal sibling (${l(b)}); the next accept of this file sweeps it`, {
                            level: "warn"
                        });
                    });
                }
                await f.close();
            }
        },
        locate,
        isSettingsFile: async (n)=>YLe(n) || rRt(n) && Yst(n, await Z()),
        configChangeBlocked: async (n, r, s)=>{
            let a = await Y(n, r);
            if (a === undefined) {
                return false;
            }
            if (e?.configChangeHookGate === undefined) {
                c(Error("settings review store: ConfigChange hook gate not wired"));
                return true;
            }
            return e.configChangeHookGate(Me[a], s);
        },
        afterApplied: async (n, r)=>{
            let s = await Y(n, r);
            if (s !== undefined) {
                Pa.notifyChange(s);
            }
        },
        now: ()=>new Date
    };
}
async function $e(e, n, r) {
    try {
        let s = O() === "windows";
        if (s && (await lstat(e)).isSymbolicLink()) {
            return null;
        }
        let a = await open(e, constants.O_RDONLY | (s ? 0 : constants.O_NOFOLLOW));
        try {
            let h = await a.stat();
            if (!h.isFile() || h.nlink !== 1) {
                return null;
            }
            if (at(await a.readFile()) !== at(r)) {
                return null;
            }
            let f = await stat(n);
            if (f.dev === h.dev && f.ino === h.ino) {
                return {
                    dev: h.dev,
                    ino: h.ino
                };
            }
            return null;
        } finally{
            await a.close();
        }
    } catch  {
        return null;
    }
}
async function je(e, n) {
    let r;
    try {
        r = await readdir(e);
    } catch  {
        return;
    }
    let s = `${n}${$lr}`;
    let a = Date.now() - Be;
    for (let h of r){
        if (!h.startsWith(s) || !Le.test(h.slice(s.length))) {
            continue;
        }
        try {
            if ((await lstat(join(e, h))).mtimeMs < a) {
                await unlink(join(e, h));
            }
        } catch  {}
    }
}
async function Ce(e) {
    if (M(e) === "policySettings" || SH(e)) {
        return e;
    }
    let n = await Z1(ie(), e);
    return n.linksResolvedPath ?? n.resolvedPath;
}
async function locate(e) {
    return se(await Ce(e));
}
async function se(e) {
    try {
        return await realpath(e);
    } catch (error) {
        if (!z(error) || dirname(e) === e) {
            throw error;
        }
        return join(await se(dirname(e)), basename(e));
    }
}
async function Z() {
    return rco(se);
}
async function G(e) {
    let n = await e.readStore();
    if (n === undefined) {
        return [];
    }
    let r;
    try {
        r = X(n);
    } catch  {
        r = undefined;
    }
    let s = ze().safeParse(r);
    if (!s.success) {
        throw new be;
    }
    return s.data.entries;
}
class be extends Error {
    constructor(){
        super("settings review store: malformed or of an unknown version");
    }
}
async function Ge(e, n) {
    return await n.isSettingsFile(e.path) || await n.isSettingsFile(e.resolvedPath);
}
async function Q(entries, n) {
    if (entries.length === 0) {
        await n.deleteStore();
        return;
    }
    await n.writeStore(_({
        version: Nlr,
        entries
    }, null, 2) + `
`);
}
async function ve(e, n = q()) {
    let r = await G(n);
    let s = await n.readTarget(e.path);
    let proposedContent = W3(e.proposedContent);
    let h = {
        id: randomBytes(6).toString("hex"),
        path: e.path,
        resolvedPath: await n.locate(e.path),
        baseSha256: s === null ? null : at(s),
        proposedSha256: at(proposedContent),
        proposedContent,
        stagedAt: n.now().toISOString(),
        by: e.by
    };
    let f = to(h.path);
    let S = to(h.resolvedPath);
    let w = [
        ...r.filter((C)=>to(C.path) !== f && to(C.resolvedPath) !== S),
        h
    ];
    let y = 0;
    while(w.length > Ne || _(w).length > We){
        let C = w.findIndex((P)=>P !== h && P.by.sessionId === h.by.sessionId);
        if (C === -1) {
            throw Error("settings review store: no room, proposal not staged");
        }
        w.splice(C, 1);
        y++;
    }
    if (y > 0) {
        t(`settings review store: full, dropped the ${y} oldest pending proposal(s)`, {
            level: "warn"
        });
    }
    await Q(w, n);
    return h;
}
async function Rts(e, n = q()) {
    let s = (await G(n)).find((S)=>S.id === e.id);
    if (s === undefined || !await Ge(s, n)) {
        return "gone";
    }
    if (_(s) !== _(e) || at(s.proposedContent) !== s.proposedSha256) {
        return "stale";
    }
    if (await n.locate(s.path) !== s.resolvedPath) {
        return "redirected";
    }
    let a = await n.readTarget(s.resolvedPath);
    if ((a === null ? null : at(a)) !== s.baseSha256) {
        return "conflict";
    }
    let f;
    try {
        f = await n.writeTarget({
            path: s.path,
            resolvedPath: s.resolvedPath,
            baseSha256: s.baseSha256,
            content: s.proposedContent,
            blockedOnceWritten: (S)=>n.configChangeBlocked(s.path, s.resolvedPath, S)
        });
    } catch (error) {
        let w = v(error);
        if (w === "EACCES" || w === "EPERM" || w === "EROFS" || w === "EBUSY") {
            return "not_writable";
        }
        throw error;
    }
    switch(f){
        case "changed":
            return "conflict";
        case "redirected":
        case "hard_linked":
        case "blocked":
        case "tampered":
            return f;
        case "written":
            break;
    }
    await n.afterApplied(s.path, s.resolvedPath);
    try {
        let S = await G(n);
        await Q(S.filter((w)=>w.id !== s.id), n);
    } catch (error) {
        t(`settings review store: applied, but the store could not be updated (${l(error)})`, {
            level: "warn"
        });
    }
    return "applied";
}
async function xts(e, n = q()) {
    let r = await G(n);
    let s = r.filter((a)=>a.id !== e);
    if (s.length === r.length) {
        return false;
    }
    await Q(s, n);
    return true;
}
async function Pts(e, n = q()) {
    let r = await G(n);
    let s = n.now().getTime();
    let a = r.filter((h)=>{
        let f = Date.parse(h.stagedAt);
        return Number.isFinite(f) && f >= e.getTime() && f <= s;
    });
    if (a.length !== r.length || r.length === 0) {
        await Q(a, n);
    }
    return r.length - a.length;
}
function Flr(e, n) {
    let r = (f)=>{
        if (f === null) {
            return {};
        }
        try {
            let S = ue(o(), oe()).safeParse(X(W3(f)));
            if (S.success) {
                return S.data;
            }
            return undefined;
        } catch  {
            return;
        }
    };
    let s = r(e);
    let a = r(n);
    if (a === undefined) {
        return [
            "not valid JSON"
        ];
    }
    if (s === undefined) {
        return [
            "replaces a file that was not valid JSON"
        ];
    }
    let h = [];
    for (let f of new Set([
        ...Object.keys(s),
        ...Object.keys(a)
    ])){
        if (!(f in s)) {
            h.push(`adds ${f}`);
        } else if (!(f in a)) {
            h.push(`removes ${f}`);
        } else if (_(s[f]) !== _(a[f])) {
            h.push(`changes ${f}`);
        }
    }
    return h;
}
function Ke({ session, served }) {
    return !served && d8e() && mgs(session);
}
function Ulr({ session, served, cause }) {
    if (cause !== "unapproved") {
        return cause;
    }
    if (Ke({
        session,
        served
    })) {
        return "card";
    }
    return "review";
}
function Blr(e, n) {
    switch(n){
        case "card":
            return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
        case "linked":
            return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
        case "policy":
            return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
        case "review":
            return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
    }
}
class ae extends x {
    constructor(e){
        super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
    }
}
const IRn = "Staged for your review · not applied until you accept it in /settings-review";
async function jlr(e, n, r) {
    let served = e.remoteCall !== undefined;
    if (!gRr({
        served
    })) {
        return;
    }
    if (served) {
        let { settingsSpellings: settingsSpellings_1, unclassified: unclassified_1 } = await Pe(n);
        let [P] = settingsSpellings_1;
        if (P !== undefined) {
            return {
                path: P,
                cause: "unapproved"
            };
        }
        if (unclassified_1 !== undefined) {
            throw new ae(r.absolutePath);
        }
        return;
    }
    if (e.permissionSurface !== undefined) {
        return;
    }
    let { settingsSpellings, unclassified, dropIns } = await Pe(n);
    let [S] = settingsSpellings;
    if (S === undefined) {
        if (unclassified !== undefined) {
            throw new ae(r.absolutePath);
        }
        return;
    }
    if (!ggs(e.session, e.toolUseId, r)) {
        return {
            path: S,
            cause: "unapproved"
        };
    }
    let cause = await Ve(r.absolutePath, n, settingsSpellings, dropIns ?? await Z());
    if (cause === "covered") {
        return undefined;
    }
    return {
        path: S,
        cause
    };
}
async function Pe(e) {
    let dropIns = e.some(rRt) ? await Z() : undefined;
    return {
        settingsSpellings: e.filter((r)=>YLe(r) || dropIns !== undefined && Yst(r, dropIns)),
        unclassified: dropIns === undefined || dropIns.allResolved ? undefined : e.find(rRt),
        dropIns
    };
}
async function Ve(absolutePath, n, settingsSpellings, s) {
    if (!settingsSpellings.includes(absolutePath)) {
        return "linked";
    }
    let a = n.filter((f)=>f !== absolutePath);
    if (await Xe(n, s)) {
        if (a.length === 0) {
            return "policy";
        }
        return "linked";
    }
    if (a.length === 0) {
        return "covered";
    }
    let h = M(absolutePath);
    if (h === undefined) {
        return "linked";
    }
    for (let f of a){
        if (await ye(f) !== h) {
            return "linked";
        }
    }
    return "covered";
}
async function Xe(e, n) {
    if (!n.allResolved || !n.allLocated) {
        return true;
    }
    let r = new Set;
    for (let s of Je()){
        r.add(Ik(s));
        try {
            r.add(Ik(await locate(s)));
        } catch  {
            return true;
        }
    }
    for (let s of e){
        let a;
        try {
            a = await locate(s);
        } catch  {
            return true;
        }
        if (Yst(s, n) || Yst(a, n) || r.has(Ik(et(s))) || r.has(Ik(a))) {
            return true;
        }
    }
    return false;
}
function Je() {
    let e = yn("flagSettings");
    return [
        ...gse(Cz()).map((n)=>join(n, "managed-settings.json")),
        ...e === undefined ? [] : [
            e
        ]
    ];
}
async function Wlr(e) {
    let origin = e.writeCtx.remoteCall === undefined ? "local" : "served";
    let r;
    try {
        r = await ve({
            path: e.absolutePath,
            proposedContent: e.proposedContent,
            by: {
                tool: e.tool,
                origin,
                sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? K()
            }
        });
    } catch (error) {
        m("settings_quarantine", "stage_failed");
        throw new x(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${l(error)})`, "settings review store: stage failed");
    }
    i("tengu_settings_change_staged", {
        origin: d(origin),
        tool: d(e.tool),
        source_kind: d(M(e.absolutePath) ?? "other"),
        key_count: Flr(e.currentContent, e.proposedContent).length
    });
    g("settings_quarantine");
    return r;
}
const QEt = 3;
const zlr = 5000;
function ORn(e, n) {
    if (n === 0) {
        return e;
    }
    return e.map((r)=>({
            ...r,
            oldStart: r.oldStart + n,
            newStart: r.newStart + n
        }));
}
const Ee = "<<:AMPERSAND_TOKEN:>>";
const ke = "<<:DOLLAR_TOKEN:>>";
function V(e) {
    return e.replaceAll("&", Ee).replaceAll("$", ke);
}
function Te(e) {
    return e.replaceAll(Ee, "&").replaceAll(ke, "$");
}
function vnt(e, n, r, s) {
    let lines_added = 0;
    let lines_removed = 0;
    if (e.length === 0 && (r || s)) {
        lines_added = r ? Lt(r, `
`) + 1 : 0;
        lines_removed = s ? Lt(s, `
`) + 1 : 0;
    } else {
        lines_added = e.reduce((acc, item)=>acc + F(item.lines, (w)=>w.startsWith("+")), 0);
        lines_removed = e.reduce((acc, item)=>acc + F(item.lines, (w)=>w.startsWith("-")), 0);
    }
    MRo(lines_added, lines_removed);
    eoo()?.add(lines_added, {
        type: "added",
        model: m5t(n)
    });
    eoo()?.add(lines_removed, {
        type: "removed",
        model: m5t(n)
    });
    i("tengu_file_changed", {
        lines_added,
        lines_removed
    });
}
function Mle({ filePath, oldContent, newContent, ignoreWhitespace = false, singleHunk = false, convertTabs = false, rawText = false }) {
    let S = rawText ? (y)=>y : convertTabs ? (y)=>V(xN(y)) : V;
    let w = G2(filePath, filePath, S(oldContent), S(newContent), undefined, undefined, {
        ignoreWhitespace,
        context: singleHunk ? 100000 : QEt,
        timeout: zlr
    });
    if (!w) {
        return [];
    }
    if (rawText) {
        return w.hunks;
    }
    return w.hunks.map((y)=>({
            ...y,
            lines: y.lines.map(Te)
        }));
}
function a4({ filePath, fileContents, edits, ignoreWhitespace = false }) {
    let a = V(xN(fileContents));
    let h = G2(filePath, filePath, a, edits.reduce((acc, edit)=>{
        let { old_string, new_string } = edit;
        let C = "replace_all" in edit ? edit.replace_all : false;
        let P = V(xN(old_string));
        let b = V(xN(new_string));
        if (C) {
            return acc.replaceAll(P, ()=>b);
        } else {
            return acc.replace(P, ()=>b);
        }
    }, a), undefined, undefined, {
        context: QEt,
        ignoreWhitespace,
        timeout: zlr
    });
    if (!h) {
        return [];
    }
    return h.hunks.map((f)=>({
            ...f,
            lines: f.lines.map(Te)
        }));
}
const Ent = 8192;
const mVe = 10485760;
const ee = 10;
const qe = 13;
async function Its(e, n, r = 3) {
    let s = await yYt(e);
    if (s === null) {
        return null;
    }
    try {
        return await h7r(s, n, r);
    } finally{
        await s.close();
    }
}
async function yYt(e) {
    if (ks(e) || Xy(e)) {
        return null;
    }
    if (e.includes("\x00")) {
        return null;
    }
    try {
        return await open(e, "r");
    } catch (error) {
        if (z(error)) {
            return null;
        }
        throw error;
    }
}
async function h7r(e, n, r) {
    if (n === "") {
        return {
            content: "",
            lineOffset: 1,
            truncated: false
        };
    }
    let s = Buffer.from(n, "utf8");
    let a = 0;
    for(let P = 0; P < s.length; P++){
        if (s[P] === ee) {
            a++;
        }
    }
    let h;
    let f = s.length + a - 1;
    let S = Buffer.allocUnsafe(Ent + f);
    let w = 0;
    let y = 0;
    let C = 0;
    while(w < mVe){
        let { bytesRead } = await e.read(S, C, Ent, w);
        if (bytesRead === 0) {
            break;
        }
        let b = C + bytesRead;
        let k = xe(S, s, b);
        let I = s.length;
        if (k === -1 && a > 0) {
            h ??= Buffer.from(n.replaceAll(`
`, `\r
`), "utf8");
            k = xe(S, h, b);
            I = h.length;
        }
        if (k !== -1) {
            let N = w - C + k;
            return await Qe(e, S, N, I, r, y + le(S, 0, k));
        }
        w += bytesRead;
        let R = Math.min(f, b);
        y += le(S, 0, b - R);
        C = R;
        S.copyWithin(0, b - C, b);
    }
    return {
        content: "",
        lineOffset: 1,
        truncated: w >= mVe
    };
}
async function MRn(e) {
    let n = Buffer.allocUnsafe(Ent);
    let r = 0;
    while(true){
        if (r === n.length) {
            let a = Buffer.allocUnsafe(Math.min(n.length * 2, mVe + Ent));
            n.copy(a, 0, 0, r);
            n = a;
        }
        let { bytesRead } = await e.read(n, r, n.length - r, r);
        if (bytesRead === 0) {
            break;
        }
        r += bytesRead;
        if (r > mVe) {
            return null;
        }
    }
    return Re(n, r);
}
function xe(e, n, r) {
    let s = e.indexOf(n);
    if (s === -1 || s + n.length > r) {
        return -1;
    }
    return s;
}
function le(e, n, r) {
    let s = 0;
    for(let a = n; a < r; a++){
        if (e[a] === ee) {
            s++;
        }
    }
    return s;
}
function _e(e) {
    return (e & 192) === 128;
}
function Ze(e) {
    if (e >= 240) {
        return 4;
    }
    if (e >= 224) {
        return 3;
    }
    if (e >= 192) {
        return 2;
    }
    return 1;
}
function Re(e, n) {
    let r = e.toString("utf8", 0, n);
    if (r.includes("\r")) {
        return r.replaceAll(`\r
`, `
`);
    }
    return r;
}
async function Qe(e, n, r, s, a, h) {
    let f = Math.min(r, Ent);
    let { bytesRead } = await e.read(n, 0, f, r - f);
    let w = r;
    let y = 0;
    for(let E = bytesRead - 1; E >= 0 && y <= a; E--){
        if (n[E] === ee) {
            y++;
            if (y > a) {
                break;
            }
        }
        w--;
    }
    let C = r - bytesRead;
    for(let E = 0; E < 3 && w < r && _e(n[w - C]); E++){
        w++;
    }
    let P = r - w;
    let lineOffset = h - le(n, bytesRead - P, bytesRead) + 1;
    let k = r + s;
    let { bytesRead: bytesRead_1 } = await e.read(n, 0, Ent, k);
    let R = k;
    y = 0;
    for(let E = 0; E < bytesRead_1; E++){
        R++;
        if (n[E] === ee) {
            y++;
            if (y >= a + 1) {
                break;
            }
        }
    }
    for(let E = 0; E <= 3 && R - 1 - E >= k; E++){
        let W = n[R - 1 - E - k];
        if (_e(W)) {
            continue;
        }
        if (W >= 192 && Ze(W) > E + 1) {
            R -= E + 1;
        }
        break;
    }
    if (R > k && n[R - 1 - k] === qe) {
        R--;
    }
    let N = R - w;
    let j = N <= n.length ? n : Buffer.allocUnsafe(N);
    let { bytesRead: bytesRead_2 } = await e.read(j, 0, N, w);
    return {
        content: Re(j, bytesRead_2),
        lineOffset,
        truncated: false
    };
}
const knt = (e)=>`+ ${Math.max(e.oldStart + e.oldLines - 1, e.newStart + e.newLines - 1, 1)} `.length;
export { W3, Nlr, $lr, Rts, xts, Pts, Flr, Ulr, Blr, IRn, jlr, Wlr, QEt, zlr, ORn, vnt, Mle, a4, Ent, mVe, Its, yYt, h7r, MRn, knt };
