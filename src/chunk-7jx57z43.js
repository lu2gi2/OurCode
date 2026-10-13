import { aoe } from "/$bunfs/root/chunk-fjbdf210.js";
const t = /cloudflare/i;
function rPt(e) {
    let n = e("request-id");
    if (typeof n === "string" && aoe(n.trim())) {
        return "origin";
    }
    let r = e("cf-ray");
    let o = e("server");
    if (typeof r === "string" && r !== "" || typeof o === "string" && t.test(o)) {
        return "nonorigin_cf";
    }
    return "nonorigin_other";
}
function QNe(e) {
    return e === "nonorigin_cf" || e === "nonorigin_other";
}
function ubr(e) {
    switch(e){
        case "nonorigin_cf":
            return "a network edge refused the connection before it reached Anthropic's server (HTTP 403 — Anthropic's CDN enforcing a region or network policy, or a Cloudflare gateway on this network) rather than this session; this often follows a VPN or network change";
        case "nonorigin_other":
            return "the connection was refused before it reached Anthropic (HTTP 403) — usually a proxy, VPN or firewall on this network";
    }
}
export { rPt, QNe, ubr };
