import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { TBe, isn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w3e } from "/$bunfs/root/chunk-t0b6khh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Axe, FF, UF } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { qn, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { me, hn, bt, mH, hg, gH } from "/$bunfs/root/chunk-55p8dvkx.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { open } from "fs/promises";
import { isAbsolute } from "path";
const d = new Set(FF);
const D = new Set([
    ...UF,
    ...FF.filter((e)=>e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !e.startsWith("CLAUDE_CODE_ARTIFACT") && !Axe(e)),
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH"
]);
const T = p(()=>{
    let procStart = mH([
        hn(),
        me()
    ]).pipe(gH.number());
    return bt({
        env: hg(me()),
        expiresAt: procStart.nullable().default(null),
        pid: hn().int(),
        procStart
    });
});
const w = 2000;
let u = null;
let E = new Set;
let c = null;
function Skt() {
    return a.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function ATe() {
    let e = TBe();
    return !!e && (!(qn() && vi()) || e === u);
}
async function m() {
    let a_CLAUDE_CODE_HOST_CREDS_FILE = a.CLAUDE_CODE_HOST_CREDS_FILE;
    if (!a_CLAUDE_CODE_HOST_CREDS_FILE || !isAbsolute(a_CLAUDE_CODE_HOST_CREDS_FILE)) {
        return null;
    }
    let r;
    try {
        r = await open(a_CLAUDE_CODE_HOST_CREDS_FILE, "r");
        let n = await r.stat();
        if (n.size > 65536) {
            return null;
        }
        if (O() !== "windows") {
            if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.()) {
                t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", {
                    level: "warn"
                });
                return null;
            }
        }
        let o = await r.readFile({
            encoding: "utf8"
        });
        let s = T().safeParse(X(o));
        if (!s.success || !Number.isFinite(s.data.procStart)) {
            return null;
        }
        let i = s.data;
        if (!_a(i.pid)) {
            return null;
        }
        let f = await w3e(i.pid);
        if (f !== null && Math.abs(i.procStart - f) > w) {
            return null;
        }
        if (i.expiresAt !== null && i.expiresAt < Date.now()) {
            return null;
        }
        let env = {};
        for (let [h, R] of Object.entries(i.env)){
            if (D.has(h)) {
                env[h] = R;
            }
        }
        return {
            ...i,
            env
        };
    } catch (error) {
        if (!z(error)) {
            t(`readHostCredsFile failed: ${l(error)}`, {
                level: "warn"
            });
        }
        return null;
    } finally{
        await r?.close().catch(()=>{});
    }
}
async function bxn() {
    if (TBe()) {
        return;
    }
    if (!a.CLAUDE_CODE_HOST_CREDS_FILE || !Ne(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
        return;
    }
    let e = await m();
    if (e) {
        let r = new Map;
        let n = {};
        for (let [o, s] of Object.entries(e.env)){
            if (d.has(o)) {
                C(r, o, s);
            } else {
                n[o] = s;
            }
        }
        c = r;
        g(n);
    } else {
        t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${a.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, {
            level: "warn"
        });
    }
    u = async ()=>{
        let r = await m();
        if (!r) {
            throw Error("host-creds file re-read failed (missing/stale/expired)");
        }
        let n = {};
        for (let [s, i] of Object.entries(r.env)){
            if (!d.has(s)) {
                n[s] = i;
            } else if (c && c.get(s) !== i) {
                t(`host-creds refresh rejected: endpoint changed (${s})`, {
                    level: "warn"
                });
                throw Error("host-creds refresh rejected: endpoint changed");
            }
        }
        let o = Skt();
        if (E.has(o) && !n[o]) {
            throw Error("host-creds refresh dropped the bearer key");
        }
        if (!c) {
            let s = new Map;
            for (let [i, f] of Object.entries(r.env)){
                if (d.has(i)) {
                    C(s, i, f);
                }
            }
            c = s;
        }
        g(n);
        return {
            authToken: n[o] ?? null
        };
    };
    isn(u);
}
function C(e, r, n) {
    let o = process.env[r];
    if (o && o !== n) {
        t(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, {
            level: "warn"
        });
        e.set(r, o);
        return;
    }
    process.env[r] = n;
    e.set(r, n);
}
function g(e) {
    for (let r of E){
        if (!(r in e)) {
            delete process.env[r];
        }
    }
    Object.assign(process.env, e);
    E = new Set(Object.keys(e));
}
export { Skt, ATe, bxn };
