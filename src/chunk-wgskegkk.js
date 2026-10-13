import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { qdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { LF, fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { YNe } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
function pQe() {
    if (a.NODE_EXTRA_CA_CERTS) {
        return;
    }
    let o = s();
    if (o) {
        process.env.NODE_EXTRA_CA_CERTS = o;
        t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`);
    }
}
function s() {
    try {
        if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !ou() && qdt("NODE_EXTRA_CA_CERTS")) {
            t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
            return;
        }
        if (LF() || ru()) {
            return;
        }
        let o = ce();
        let e = YNe(o?.env, "globalConfig");
        let i = cn("userSettings") ? fe("userSettings") : undefined;
        let n = YNe(i?.env, "userSettings");
        t(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`);
        let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
        if (r) {
            t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
        }
        return r;
    } catch (error) {
        t(`CA certs: Config fallback failed: ${error}`, {
            level: "error"
        });
        f("ca_certs_load", "config_read_failed");
        return;
    }
}
export { pQe };
