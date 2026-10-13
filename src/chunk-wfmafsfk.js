import { Dd } from "/$bunfs/root/chunk-6kc68p18.js";
const a = 120000;
const i = 600000;
function tre({ BASH_DEFAULT_TIMEOUT_MS } = process.env) {
    if (BASH_DEFAULT_TIMEOUT_MS) {
        let t = Dd(BASH_DEFAULT_TIMEOUT_MS);
        if (!isNaN(t) && t > 0) {
            return t;
        }
    }
    return a;
}
function SAe(n = process.env) {
    let n_BASH_MAX_TIMEOUT_MS = n.BASH_MAX_TIMEOUT_MS;
    if (n_BASH_MAX_TIMEOUT_MS) {
        let t = Dd(n_BASH_MAX_TIMEOUT_MS);
        if (!isNaN(t) && t > 0) {
            return Math.max(t, tre(n));
        }
    }
    return Math.max(i, tre(n));
}
const s = 1800000;
function Ece() {
    return Math.min(Math.max(7200000, SAe()), 2147483647);
}
function xcs(n) {
    return Math.max(s, tre(n));
}
function ZOn(n, e) {
    if (n !== undefined && n > 0) {
        return e;
    }
}
const _ = 2000;
function eMn({ requestedTimeoutMs, isMainAgent, canAutoBackground, env = process.env }) {
    if (!isMainAgent || !canAutoBackground) {
        return requestedTimeoutMs;
    }
    let env_CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS = env.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
    if (!env_CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS) {
        return requestedTimeoutMs;
    }
    let r = Dd(env_CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS);
    if (isNaN(r) || r <= 0) {
        return requestedTimeoutMs;
    }
    return Math.min(requestedTimeoutMs, Math.max(r, _));
}
export { tre, SAe, Ece, xcs, ZOn, eMn };
