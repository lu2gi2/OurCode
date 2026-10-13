import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { createHash } from "crypto";
import { homedir, userInfo } from "os";
import { join } from "path";
const iWn = "-credentials";
function Dw() {
    let CLAUDE_SECURESTORAGE_CONFIG_DIR = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
    if (CLAUDE_SECURESTORAGE_CONFIG_DIR !== undefined) {
        return (CLAUDE_SECURESTORAGE_CONFIG_DIR || join(homedir(), ".claude")).normalize("NFC");
    }
    return ve();
}
function Lue(e = "") {
    let CLAUDE_SECURESTORAGE_CONFIG_DIR = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
    let t = CLAUDE_SECURESTORAGE_CONFIG_DIR !== undefined ? !CLAUDE_SECURESTORAGE_CONFIG_DIR : !process.env.CLAUDE_CONFIG_DIR;
    let r = CLAUDE_SECURESTORAGE_CONFIG_DIR !== undefined ? CLAUDE_SECURESTORAGE_CONFIG_DIR.normalize("NFC") : ve();
    let c = t ? "" : `-${createHash("sha256").update(r).digest("hex").substring(0, 8)}`;
    return `Claude Code${dn().OAUTH_FILE_SUFFIX}${e}${c}`;
}
const s = /^[a-zA-Z0-9._-]+$/;
function Tz() {
    let e;
    try {
        e = process.env.USER || userInfo().username;
    } catch  {
        e = "claude-code-user";
    }
    if (!s.test(e)) {
        return "claude-code-user";
    }
    return e;
}
const lRs = 30000;
class a {
    cache = {
        data: null,
        cachedAt: 0
    };
    generation = 0;
    readInFlight = null;
    lastReadFailure = null;
    keychainHoldsItem = false;
    lastKnown = null;
    legacyApiKeyPrefetch = null;
}
const d = new q(()=>new a);
function Cdt() {
    return d.of(B().host);
}
function cRs() {
    let e = Cdt();
    e.cache = {
        data: e.cache.data,
        cachedAt: 0
    };
    e.generation++;
    e.readInFlight = null;
    e.lastReadFailure = null;
}
function ZV() {
    let e = Cdt();
    e.cache = {
        data: null,
        cachedAt: 0
    };
    e.generation++;
    e.readInFlight = null;
    e.lastReadFailure = null;
}
function dRs(e, n, t = Cdt()) {
    if (t.cache.cachedAt !== 0 || t.generation !== n) {
        return;
    }
    let r = null;
    if (e) {
        try {
            r = JSON.parse(e);
        } catch  {
            return;
        }
    }
    t.cache = {
        data: r,
        cachedAt: Date.now()
    };
}
function uRs(e, n, t) {
    if (e.generation === t) {
        e.keychainHoldsItem = n;
    }
}
function pRs(e) {
    if (!e) {
        return "empty";
    }
    let n = e.toLowerCase();
    if (n.includes("errsecduplicateitem") || n.includes("already exists")) {
        return "duplicate_item";
    }
    if (n.includes("unable to open") || n.includes("could not open")) {
        return "keychain_unavailable";
    }
    if (n.includes("errsecnodefaultkeychain") || n.includes("default keychain") || n.includes("no keychain")) {
        return "no_keychain";
    }
    if (n.includes("errsecitemnotfound") || n.includes("item could not be found")) {
        return "item_not_found";
    }
    if (n.includes("errsecinteractionnotallowed") || n.includes("interaction is not allowed") || n.includes("no user interaction")) {
        return "interaction_not_allowed";
    }
    if (n.includes("errsecusercanceled") || n.includes("cancel")) {
        return "user_canceled";
    }
    if (n.includes("errsecauthfailed") || n.includes("authorization") || n.includes("authentication") || n.includes("name or passphrase")) {
        return "auth_failed";
    }
    if (n.includes("locked") || n.includes("unlock")) {
        return "keychain_locked";
    }
    return "other";
}
export { iWn, Dw, Lue, Tz, lRs, Cdt, cRs, ZV, dRs, uRs, pRs };
