import { msn, pPo, mPo, gPo, hPo, yPo, Kpe, Zxr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, v, z, H9 } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { YZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { _, yo, OZ, kq, KRr, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { an } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { FR, Gv } from "/$bunfs/root/chunk-craerjpn.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { wr } from "/$bunfs/root/chunk-2atph4yw.js";
import { tPe } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Pr, Ovo, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Mf, SH } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { l9, qF } from "/$bunfs/root/chunk-yngqe5v3.js";
const YJt = "apply-project-settings";
const ubs = "Review and accept settings changes for cloud sessions that use this computer";
function ebr(e = process.argv) {
    return e[2] === "apply-project-settings";
}
function k$n(e) {
    return _(e).replace(/[\u007f-\u009f]/g, (r)=>`\\u${r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`);
}
function yNs(e) {
    try {
        let r = e.trim();
        let i = r.startsWith("{") && r.endsWith("}");
        let a;
        if (i) {
            let n = mt(r);
            if (!n) {
                return an("Error: Invalid JSON provided to --settings");
            }
            let contentHash = k$n(n);
            a = tPe("claude-settings", ".json", {
                contentHash
            });
            mPo(contentHash);
        } else {
            let n = e;
            let s = e;
            let g;
            try {
                if (SH(e)) {
                    n = yo(ie(), e).resolvedPath;
                    s = n;
                } else {
                    let o = kq(ie(), e);
                    n = o.resolvedPath;
                    s = f(o.linksResolvedPath ?? o.resolvedPath);
                }
                g = qF(n, Mf);
            } catch (error) {
                if (KRr(error)) {
                    return an(`Error: Cannot use settings file ${e}: ${l(error)}`);
                }
                if (z(error)) {
                    return an(`Error: Settings file not found: ${n}`);
                }
                if (v(error) === "ERR_FILE_TOO_LARGE") {
                    return an(`Error: Settings file exceeds the ${Mf / 1048576}MiB limit: ${n}`);
                }
                if (l9(error) || H9(error)) {
                    return an(`Error: Cannot use settings file (${l(error)}): ${n}`);
                }
                throw error;
            }
            a = s;
            gPo(g);
        }
        pPo(a);
        Pr();
    } catch (error) {
        if (error instanceof Error) {
            t(`Error processing --settings: ${l(error)}`, {
                level: "error"
            });
        }
        return an(`Error processing settings: ${l(error)}`);
    }
}
function _Ns(e) {
    let r = mt(e.trim(), false);
    if (!r || typeof r !== "object" || Array.isArray(r)) {
        t("--managed-settings ignored: invalid JSON object", {
            level: "warn"
        });
        yPo(true);
        return;
    }
    hPo(r);
    Pr();
}
function c(e) {
    try {
        let r = Ovo(e);
        Zxr(r);
        Pr();
    } catch (error) {
        if (error instanceof Error) {
            t(`Invalid --setting-sources flag: ${l(error)}`, {
                level: "error"
            });
        }
        return an(`Error processing --setting-sources: ${l(error)}`);
    }
}
function lfo() {
    let e = performance.now();
    io("eagerLoadSettings_start");
    let r = FR("--settings");
    if (r) {
        yNs(r);
    }
    let i = FR("--managed-settings");
    if (i) {
        _Ns(i);
    }
    tbr();
    io("eagerLoadSettings_end");
    wr("settings_load_ms", performance.now() - e, e);
}
function tbr() {
    let e = FR("--setting-sources");
    if (e !== undefined) {
        c(e);
    }
    if (Gv("--restricted") || YZ()) {
        c("");
        msn(true);
    }
    if (ebr()) {
        Zxr(Kpe().filter((r)=>!Cp.has(r)));
        Pr();
    }
}
function f(e) {
    if (Za(e)) {
        return e;
    }
    try {
        let r = OZ(ie(), e);
        if (r.toLowerCase() === e.toLowerCase()) {
            return r;
        }
        return e;
    } catch  {
        return e;
    }
}
export { YJt, ubs, ebr, k$n, yNs, _Ns, lfo, tbr };
