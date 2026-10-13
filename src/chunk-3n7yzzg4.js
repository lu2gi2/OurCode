import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { jY } from "/$bunfs/root/chunk-63xa24b4.js";
import { bn, yl, Yi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { $d } from "/$bunfs/root/chunk-4dqcjnmb.js";
const p = " — run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class i extends Error {
    status;
    constructor(t, e){
        super(e);
        this.name = "SelfHostedRunnerApiError";
        this.status = t;
    }
}
const rWe = 8080;
function c() {
    let { getAPIProvider } = import.meta.require("/$bunfs/root/chunk-e1sv3q48.js");
    if (getAPIProvider() !== "firstParty") {
        throw new i(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
    }
}
function oWe() {
    let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
    if (t) {
        return t;
    }
    return dn().BASE_API_URL;
}
function ijo() {
    return dn().CLAUDE_AI_ORIGIN;
}
async function m(credentials) {
    c();
    await Yi({
        credentials
    }).catch(()=>{});
    let e = j() && credentials !== undefined ? (await yl(credentials))?.accessToken : bn()?.accessToken;
    if (!e) {
        throw new i(401, "Not logged in. Environment-management endpoints require the operator OAuth session — run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)");
    }
    return e;
}
function sOe(ui) {
    return {
        ui
    };
}
async function iOe(method, e, data, signal, l) {
    c();
    let d = await m(l);
    let n = await At.request({
        method,
        url: `${oWe()}${e}`,
        data,
        headers: {
            Authorization: `Bearer ${d}`,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        },
        timeout: 20000,
        signal,
        validateStatus: (r)=>r < 500
    }).catch((r)=>{
        if (At.isAxiosError(r) && !At.isCancel(r) && r.response === undefined) {
            throw new i(0, `${method} ${e}: ${r.message}`);
        }
        throw r;
    });
    if (n.status >= 400) {
        let r = n.data?.error?.message ?? _(n.data);
        let u = `HTTP ${n.status} ${method} ${e}: ${r}`;
        if ([
            401,
            403,
            404,
            409,
            429
        ].includes(n.status)) {
            let f = n.status === 401 || n.status === 403 ? p : "";
            throw new i(n.status, u + f);
        }
        throw Error(u);
    }
    return n.data;
}
function H6(tool_use_id, e) {
    return {
        tool_use_id,
        type: "tool_result",
        content: $d(_(e))
    };
}
function PG(t) {
    let e = jY(t);
    if (e !== null) {
        return e;
    }
    return Object.entries(t).filter(([, o])=>o !== undefined).map(([o, s])=>`${o}=${typeof s === "string" ? s : _(s)}`).join(" ");
}
export { rWe, oWe, ijo, sOe, iOe, H6, PG };
