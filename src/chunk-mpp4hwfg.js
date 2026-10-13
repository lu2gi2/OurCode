import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { _h, g8t, _mr, kmr, eCt, mre, WAe, OKe, qe } from "/$bunfs/root/chunk-46dhek9m.js";
class d {
    inFlight = undefined;
    run(e) {
        this.inFlight ??= e().finally(()=>{
            this.inFlight = undefined;
        });
        return this.inFlight;
    }
}
const u = new q(()=>new d);
function Nln(e) {
    return u.of(e).run(c);
}
async function c() {
    try {
        let e = await _mr({
            sandboxUser: kmr,
            srtWin: eCt()
        });
        if (e.cancelled) {
            if (e.user.provisioned && e.user.credPresent) {
                if (WAe().source === "managed" && OKe()) {
                    qe.invalidateDependencyCache();
                    let s = await i(e.user);
                    await qe.checkDependenciesAsync();
                    if (s !== null) {
                        return s;
                    }
                    g("sandbox_windows_install");
                    return {
                        status: "ok",
                        message: `Install was cancelled at the elevation prompt, but the sandbox user is already provisioned — the sandbox TLS inspection CA is now set up and trusted for the sandbox user. Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt.${o()}`
                    };
                }
                f("sandbox_windows_install", "uac_cancelled_provisioned");
                qe.invalidateDependencyCache();
                await qe.checkDependenciesAsync();
                return {
                    status: "cancelled",
                    message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process — run /sandbox to check the current status; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt."
                };
            }
            f("sandbox_windows_install", "uac_cancelled");
            return {
                status: "cancelled",
                message: "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters."
            };
        }
        qe.invalidateDependencyCache();
        await qe.checkDependenciesAsync();
        if (e.user.provisioned && e.user.credPresent && (e.wfp.state === "installed" || e.wfp.state === "cannot-read")) {
            if (WAe().source === "managed" && OKe()) {
                let r = await i(e.user);
                if (r !== null) {
                    return r;
                }
            }
            g("sandbox_windows_install");
            let s = e.wfp.state === "installed" ? "Sandbox user and network filters installed" : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
            if (qe.isSandboxingEnabled()) {
                return {
                    status: "ok",
                    message: `${s} and active.${o()}`
                };
            }
            if (qe.isSandboxEnabledInSettings()) {
                return {
                    status: "ok",
                    message: `${s}. Run /sandbox to check the current status.${o()}`
                };
            }
            return {
                status: "ok",
                message: `${s}. Run /sandbox to choose a sandbox mode and turn it on.${o()}`
            };
        }
        let n = !e.user.provisioned ? "user_not_provisioned" : !e.user.credPresent ? "cred_not_readable" : "wfp_not_installed";
        f("sandbox_windows_install", n);
        return {
            status: "partial",
            message: `Install completed (sandbox user: ${({
                user_not_provisioned: "not provisioned",
                cred_not_readable: "provisioned, credential not readable",
                wfp_not_installed: "provisioned"
            })[n]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`
        };
    } catch (error) {
        qe.invalidateDependencyCache();
        let n = l(error);
        t(`/sandbox install failed: ${n}`, {
            level: "error"
        });
        let a = mre(n, {
            omitCcRemedy: true
        }).replace(/\.$/, "");
        if (error instanceof _h && error.code === "install_timeout") {
            f("sandbox_windows_install", "uac_timeout");
            return {
                status: "error",
                message: `The install timed out after 2 minutes: ${a}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine \u2014 run /sandbox to check sandbox status.`
            };
        }
        if (error instanceof _h && error.code === "install_config_conflict") {
            f("sandbox_windows_install", "config_conflict");
            return {
                status: "error",
                message: "A sandbox network-filter set is already installed with a different configuration (for example, under a different sandbox account name). Remove it by running npx @anthropic-ai/sandbox-runtime windows-uninstall from a trusted directory, then run /sandbox install again."
            };
        }
        if (/^srt-win (status|wfp|user)[ :]/.test(n)) {
            f("sandbox_windows_install", "status_probe_failed");
            return {
                status: "error",
                message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${a}. Run /sandbox to check the current status.`
            };
        }
        m("sandbox_windows_install", "install_threw");
        return {
            status: "error",
            message: `Couldn't install the sandbox user and network filters: ${a}. Run /sandbox install again to retry.`
        };
    }
}
async function i(status) {
    try {
        await g8t({
            status,
            srtWin: eCt()
        });
    } catch (error) {
        let a = l(error);
        t(`/sandbox install: managed sandbox CA step failed: ${a}`, {
            level: "error"
        });
        let s = mre(a, {
            omitCcRemedy: true
        }).replace(/\.$/, "");
        if (error instanceof _h && (error.code === "trust_ca_failed" || error.code === "spawn_failed" || error.code === "srt_win_timeout")) {
            f("sandbox_windows_install", "trust_ca_failed");
            return {
                status: "partial",
                message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${s}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
            };
        }
        f("sandbox_windows_install", "persistent_ca_failed");
        return {
            status: "partial",
            message: `The sandbox TLS inspection CA couldn't be created: ${s}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
        };
    }
    return null;
}
function o() {
    if (OKe() && qe.needsRestartForTlsTerminate()) {
        return " Restart Claude Code to enable TLS inspection for this session.";
    }
    return "";
}
export { Nln };
