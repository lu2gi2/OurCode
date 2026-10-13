import { j, bMs } from "/$bunfs/root/chunk-fcerdfs3.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve, qZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function Fmo(e = pSr) {
    let a_CLAUDE_CODE_HOVER_REST = a.CLAUDE_CODE_HOVER_REST;
    if (a_CLAUDE_CODE_HOVER_REST === undefined) {
        return;
    }
    if (uSr(a_CLAUDE_CODE_HOVER_REST) !== "pinned") {
        return;
    }
    return {
        backend: j() ? e() : undefined,
        configHome: ve()
    };
}
function Umo(e) {
    let o = j() ? e.backend : undefined;
    if (o === undefined) {
        return;
    }
    if (!qZ(e.configHome)) {
        t(`CLAUDE_CONFIG_DIR now names ${ve()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`, {
            level: "warn"
        });
        return;
    }
    return o;
}
function uSr(e) {
    if (typeof e !== "boolean") {
        t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, {
            level: "warn"
        });
    }
    let o = bMs(e);
    if (o === "conflict") {
        t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, {
            level: "warn"
        });
    }
    return o;
}
function pSr() {
    if (!j()) {
        return;
    }
}
export { Fmo, Umo, uSr, pSr };
