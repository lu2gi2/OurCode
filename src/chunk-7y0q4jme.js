import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ij } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X, hpt, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { cn, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { REo, $b } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { oe, T, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
import { open, realpath } from "fs/promises";
import { isAbsolute } from "path";
const kBr = "org-tip:";
const D8n = "custom-tip-";
const P = 500;
const k = 200;
const E = 262144;
const b = "Tip";
const B = /^[A-Za-z0-9._-]{1,64}$/;
const H = 40;
const N = [
    "policySettings",
    "flagSettings",
    "userSettings"
];
const K = [
    ...Cp
];
const Y = "org-tip:file:";
const J = new Set([
    "EAGAIN",
    "EBUSY",
    "EINTR",
    "EIO",
    "EMFILE",
    "ENFILE"
]);
const Z = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function L(e) {
    return hpt(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(Z, "").replace(/ {2,}/g, " ").trim();
}
function Q(e) {
    if (e === undefined) {
        return b;
    }
    let i = ne(L(e), H);
    if (i === "") {
        return b;
    }
    return i;
}
const V = p(()=>Ue([
        T(oe()),
        u({
            tips: T(oe())
        }).transform((e)=>e.tips)
    ]));
async function ee(e) {
    try {
        let i = O() === "windows" ? 0 : constants.O_NOFOLLOW | constants.O_NONBLOCK;
        let r = await open(await realpath(e), constants.O_RDONLY | i);
        let n;
        try {
            let f = await r.stat();
            if (!f.isFile()) {
                m("tips_org_tips_file_load", "not_regular_file");
                t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
                    level: "warn"
                });
                return {
                    entries: [],
                    transient: false
                };
            }
            if (f.size > E) {
                m("tips_org_tips_file_load", "too_large");
                t(`spinnerTipsOverride.tipsFile ${e} is larger than ${E} bytes; ignoring it`, {
                    level: "warn"
                });
                return {
                    entries: [],
                    transient: false
                };
            }
            let c = Buffer.alloc(E + 1);
            let { bytesRead } = await r.read(c, 0, c.length, 0);
            if (bytesRead > E) {
                m("tips_org_tips_file_load", "too_large");
                return {
                    entries: [],
                    transient: false
                };
            }
            n = Io(c.toString("utf8", 0, bytesRead));
        } finally{
            await r.close();
        }
        let l = V().safeParse(X(n));
        let entries = l.success ? REo().parse(l.data) : undefined;
        if (entries === undefined) {
            m("tips_org_tips_file_load", "wrong_shape");
            t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
                level: "warn"
            });
            return {
                entries: [],
                transient: false
            };
        }
        g("tips_org_tips_file_load");
        return {
            entries,
            transient: false
        };
    } catch (error) {
        let r = v(error);
        let n = z(error) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : error instanceof SyntaxError ? "parse_failed" : "read_failed";
        m("tips_org_tips_file_load", n);
        t(z(error) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${W(error).message}`, {
            level: "warn"
        });
        return {
            entries: [],
            transient: r !== undefined && J.has(r)
        };
    }
}
class A {
    #e = new Map;
    get size() {
        return this.#e.size;
    }
    read(e) {
        let i = this.#e.get(e);
        if (i) {
            return i;
        }
        let r = ee(e).then((n)=>{
            if (n.transient) {
                this.#e.delete(e);
            }
            return n;
        });
        this.#e.set(e, r);
        return r;
    }
}
const te = new q(()=>new A);
function ie() {
    if ($b()?.spinnerTipsOverride?.tipsFile) {
        t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", {
            level: "warn"
        });
        return true;
    }
    return false;
}
function re(e) {
    if (!e) {
        return;
    }
    if (!isAbsolute(e) && e !== "~" && !e.startsWith("~/")) {
        t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
            level: "warn"
        });
        return;
    }
    if (ij(e)) {
        t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
            level: "warn"
        });
        return;
    }
    try {
        let i = et(e);
        if (ij(i)) {
            return undefined;
        }
        return i;
    } catch (error) {
        t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${W(error).message}`, {
            level: "warn"
        });
        return;
    }
}
function I(e) {
    let i = [];
    for (let source of e){
        if (!cn(source)) {
            continue;
        }
        let override = fe(source)?.spinnerTipsOverride;
        if (override) {
            i.push({
                source,
                override
            });
        }
    }
    return i;
}
function C(e, i) {
    return e.find((r)=>r.override[i] !== undefined)?.override[i];
}
function Vve() {
    let e = I(N);
    if (C(e, "excludeDefault") !== true) {
        return false;
    }
    return e.some((i)=>!!i.override.tipsFile) || e.some((i)=>(i.override.tips?.length ?? 0) > 0);
}
async function fmn(e) {
    let i = I(N);
    let r = I(K);
    if (i.length === 0 && r.length === 0) {
        return {
            tips: [],
            trustedCount: 0
        };
    }
    let n = Q(C(i, "label"));
    let l = i.find((s)=>!!s.override.tipsFile);
    let d = l?.source;
    let f = re(d === "policySettings" && ie() ? undefined : l?.override.tipsFile);
    for (let { source, override } of r){
        if (override.tipsFile || override.label !== undefined) {
            t(`spinnerTipsOverride.tipsFile/label in ${source} are ignored; set them in user or managed settings`, {
                level: "warn"
            });
        }
    }
    let c = f ? (await te.of(e).read(f)).entries : [];
    let _ = new Set;
    let tips = [];
    let F = (id, o, cooldownSessions, priority, label)=>{
        if (tips.length >= k) {
            return;
        }
        let y = L(o);
        if (y === "") {
            t(`spinnerTipsOverride: tip "${id}" is empty after sanitizing; dropped`, {
                level: "warn"
            });
            return;
        }
        if (y.length > P) {
            t(`spinnerTipsOverride: tip "${id}" is longer than ${P} characters; dropped`, {
                level: "warn"
            });
            return;
        }
        if (_.has(id)) {
            t(`spinnerTipsOverride: duplicate tip id "${id}"; keeping the first`, {
                level: "warn"
            });
            return;
        }
        _.add(id);
        tips.push({
            id,
            label,
            content: async ()=>y,
            cooldownSessions,
            priority,
            isRelevant: async ()=>true,
            providerAgnostic: true
        });
    };
    let x = 0;
    for (let { source, override } of i){
        for (let a of override.tips ?? []){
            R(a, `${D8n}${x++}`, n, F);
        }
        if (source === d) {
            c.forEach((a, S)=>R(a, `${Y}${S}`, n, F));
        }
    }
    let h_length = tips.length;
    for (let { source, override } of r){
        for (let a of override.tips ?? []){
            let S = `${D8n}${x++}`;
            if (typeof a === "string") {
                R(a, S, b, F);
            } else {
                t(`spinnerTipsOverride: object tip entries in ${source} are ignored; only plain strings are read from project settings`, {
                    level: "warn"
                });
            }
        }
    }
    return {
        tips,
        trustedCount: h_length
    };
}
function R(e, i, r, n) {
    if (typeof e === "string") {
        n(i, e, 0, 0, r);
        return;
    }
    if (typeof e.text !== "string") {
        t('spinnerTipsOverride: tip object without a "text" string; dropped', {
            level: "warn"
        });
        return;
    }
    if (typeof e.id !== "string" || !B.test(e.id)) {
        t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
            level: "warn"
        });
        return;
    }
    let l = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1000) : 0;
    let d = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
    n(`${kBr}${e.id}`, e.text, l, d, r);
}
export { kBr, D8n, Vve, fmn };
