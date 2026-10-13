import { Ns } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { l$ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { oo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { $Cs } from "/$bunfs/root/chunk-xb9cceab.js";
import { H1n } from "/$bunfs/root/chunk-6dwnw6av.js";
const t = "(value set by your organization)";
function Yje(r, e) {
    if (e !== "managed") {
        return r;
    }
    return {
        ...r,
        url: $Cs(r.url) ?? t,
        ...r.headers && {
            headers: oo(r.headers, ()=>t)
        }
    };
}
function HJe(r) {
    if (r === "cached") {
        return "pending";
    }
    return r;
}
function efn(r) {
    return r.map((e)=>{
        let config;
        if (e.config.type === "sse" || e.config.type === "http") {
            config = Yje({
                type: e.config.type,
                url: e.config.url,
                headers: e.config.headers
            }, e.config.scope);
        } else if (e.config.type === "claudeai-proxy") {
            config = {
                type: "claudeai-proxy",
                url: e.config.url,
                id: e.config.id
            };
        } else if (e.config.type === "stdio" || e.config.type === undefined) {
            config = {
                type: "stdio",
                command: e.config.command,
                args: e.config.args
            };
        }
        return {
            name: e.name,
            status: HJe(e.type),
            config,
            scope: e.config.scope,
            source: l$(e.name, e.config),
            serverInfo: Ns(e) ? e.serverInfo : undefined,
            error: e.type === "failed" ? e.error : undefined,
            error_code: H1n(e)
        };
    });
}
export { Yje, HJe, efn };
