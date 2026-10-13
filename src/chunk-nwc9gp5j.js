import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { MH } from "/$bunfs/root/chunk-qch5xj2a.js";
import { cR } from "/$bunfs/root/chunk-sfgejbsr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { YZt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { L8 } from "/$bunfs/root/chunk-ph7a449e.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { $T, Mn, UT, Gt, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, u, U } from "/$bunfs/root/chunk-smx21d0k.js";
class Vjr {
    #t;
    constructor(e){
        this.#t = e;
    }
    reveal() {
        return this.#t;
    }
    toString() {
        return "[REDACTED:gh-token]";
    }
    toJSON() {
        return "[REDACTED:gh-token]";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "[REDACTED:gh-token]";
    }
}
async function qjr(e, n) {
    let i;
    try {
        i = await Gt.post("/v1/code/github/import-token", {
            token: e.reveal()
        }, {
            headers: {
                "anthropic-beta": YZt.header
            },
            auth: "teleport-org",
            timeout: 15000,
            validateStatus: ()=>true,
            credentials: n
        });
    } catch (error) {
        if (dd(error)) {
            t(`import-token network error: ${error.code ?? "unknown"}`, {
                level: "error"
            });
            let sslHint = L8(error);
            return {
                ok: false,
                error: {
                    kind: "network",
                    ...sslHint && {
                        sslHint
                    }
                }
            };
        }
        return {
            ok: false,
            error: {
                kind: "not_signed_in"
            }
        };
    }
    if (!i.ok) {
        return {
            ok: false,
            error: {
                kind: "not_signed_in"
            }
        };
    }
    if (i.status === 200) {
        return {
            ok: true,
            result: i.data
        };
    }
    if (i.status === 400) {
        let message = MH(cR(i.data) ?? "");
        return {
            ok: false,
            error: {
                kind: "invalid_token",
                ...message && {
                    message
                }
            }
        };
    }
    if (i.status === 401) {
        return {
            ok: false,
            error: {
                kind: "not_signed_in"
            }
        };
    }
    t(`import-token returned ${i.status}`, {
        level: "error"
    });
    return {
        ok: false,
        error: {
            kind: "server",
            status: i.status
        }
    };
}
async function t2o(e) {
    try {
        await UT(e);
        return true;
    } catch  {
        return false;
    }
}
async function h(e, { timeout, isBackground }) {
    try {
        let r = await Gt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
            auth: "teleport-org",
            timeout,
            isBackground,
            validateStatus: ()=>true,
            credentials: e
        });
        if (!r.ok || r.status !== 200) {
            return null;
        }
        let s = r.data?.auth_source;
        return {
            isAuthenticated: r.data?.is_authenticated === true,
            authSource: s === "oauth" || s === "cli_import" ? s : null
        };
    } catch  {
        return null;
    }
}
async function Kjr(e) {
    let n = await h(e, {
        timeout: 10000,
        isBackground: false
    });
    if (n?.isAuthenticated) {
        return n.authSource;
    }
    return null;
}
async function l(e) {
    let n = await h(e, {
        timeout: 3000,
        isBackground: true
    });
    if (n === null) {
        f("api_github_connection_status", "request_failed");
        return "unknown";
    }
    g("api_github_connection_status");
    if (n.isAuthenticated) {
        return "connected";
    }
    return "not_connected";
}
function lEe() {
    return `${dn().CLAUDE_AI_ORIGIN}/code`;
}
class S {
    inFlight = undefined;
    status = undefined;
    generation = 0;
    async read(e, n) {
        this.seedFromPersisted();
        if (this.inFlight) {
            await this.inFlight;
        } else if (!d()) {
            await this.fetch(e, n);
        }
        return this.status ?? "unknown";
    }
    async readLive(e, n) {
        this.seedFromPersisted();
        if (!this.inFlight && d()) {
            return "unknown";
        }
        let generation = this.generation;
        let r = await (this.inFlight ?? this.fetch(e, n));
        if (generation === this.generation) {
            return r;
        }
        return "unknown";
    }
    peek(e, n) {
        this.seedFromPersisted();
        if (this.status === undefined && !this.inFlight && !d()) {
            this.fetch(e, n);
        }
        return this.status;
    }
    markConnected(e) {
        this.generation++;
        this.inFlight = undefined;
        this.status = "connected";
        m("connected", e);
    }
    clear() {
        this.generation++;
        this.inFlight = undefined;
        this.status = undefined;
    }
    seedFromPersisted() {
        if (this.status !== undefined || this.inFlight) {
            return;
        }
        let e = b();
        if (e) {
            this.status = C(ce(), e);
        }
    }
    fetch(e, n) {
        let generation = this.generation;
        let r = l(e).then((s)=>{
            this.settle(generation, s, n);
            return s;
        }, (s)=>{
            c(s);
            this.settle(generation, "unknown", n);
            return "unknown";
        });
        this.inFlight = r;
        return r;
    }
    settle(e, n, i) {
        if (e !== this.generation) {
            return;
        }
        this.inFlight = undefined;
        if (n === "unknown") {
            this.status ??= n;
            return;
        }
        this.status = n;
        m(n, i);
    }
}
const Aj = new q(()=>new S);
function d() {
    return k("tengu_cheerful_horizon", false);
}
var _ = p(()=>u({
        accountUuid: o(),
        orgUuid: o(),
        status: U([
            "connected",
            "not_connected"
        ])
    }));
function b() {
    let e = Mn();
    if (!e?.organizationUuid) {
        return;
    }
    let a_CLAUDE_CODE_ORGANIZATION_UUID = a.CLAUDE_CODE_ORGANIZATION_UUID;
    if (a_CLAUDE_CODE_ORGANIZATION_UUID && a_CLAUDE_CODE_ORGANIZATION_UUID !== e.organizationUuid) {
        return;
    }
    if ($T() !== "store") {
        return;
    }
    return {
        accountUuid: e.accountUuid,
        orgUuid: e.organizationUuid
    };
}
function C(e, n) {
    let i = _().safeParse(e.githubWebConnectionStatusCache);
    if (!i.success || i.data.accountUuid !== n.accountUuid || i.data.orgUuid !== n.orgUuid) {
        return;
    }
    return i.data.status;
}
function m(status, n) {
    let i = b();
    if (!i) {
        return;
    }
    Ae((r)=>{
        if (C(r, i) === status) {
            return r;
        }
        return {
            ...r,
            githubWebConnectionStatusCache: {
                ...i,
                status
            }
        };
    }, n);
}
export { Vjr, qjr, t2o, Kjr, lEe, Aj };
