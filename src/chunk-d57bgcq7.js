import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { w5, Gio, cCt } from "/$bunfs/root/chunk-wvhw7yw5.js";
import { _B, $ot } from "/$bunfs/root/chunk-2eh7h0gt.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import { xse } from "/$bunfs/root/chunk-1qq5kpcj.js";
import "/$bunfs/root/chunk-79wfew46.js";
function c(e) {
    return it(Gio(), e);
}
function p(stdout) {
    let s = stdout.match(/Created new pane:\s*(.+)/);
    if (s && s[1]) {
        return s[1].trim();
    }
    return "";
}
function I() {
    let a_ITERM_SESSION_ID = a.ITERM_SESSION_ID;
    if (!a_ITERM_SESSION_ID) {
        return null;
    }
    let s = a_ITERM_SESSION_ID.indexOf(":");
    if (s === -1) {
        return null;
    }
    return a_ITERM_SESSION_ID.slice(s + 1);
}
export class ITermBackend {
    type = "iterm2";
    displayName = "iTerm2";
    teammateSessionIds = [];
    firstPaneUsed = false;
    paneCreationLock = xse();
    async isAvailable() {
        let e = w5();
        t(`[ITermBackend] isAvailable check: inITerm2=${e}`);
        if (!e) {
            t("[ITermBackend] isAvailable: false (not in iTerm2)");
            return false;
        }
        let s = await cCt();
        t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`);
        return s;
    }
    async isRunningInside() {
        let e = w5();
        t(`[ITermBackend] isRunningInside: ${e}`);
        return e;
    }
    async createTeammatePaneInSwarmView(e, s) {
        t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
        let o = await this.paneCreationLock.acquire();
        try {
            while(true){
                let isFirstTeammate = !this.firstPaneUsed;
                t(`[ITermBackend] Creating pane: isFirstTeammate=${isFirstTeammate}, existingPanes=${this.teammateSessionIds.length}`);
                let r;
                let i;
                if (isFirstTeammate) {
                    let l = I();
                    if (l) {
                        r = [
                            "session",
                            "split",
                            "-v",
                            "-s",
                            l
                        ];
                        t(`[ITermBackend] First split from leader session: ${l}`);
                    } else {
                        r = [
                            "session",
                            "split",
                            "-v"
                        ];
                        t("[ITermBackend] First split from active session (no leader ID)");
                    }
                } else {
                    i = this.teammateSessionIds.at(-1);
                    if (i) {
                        r = [
                            "session",
                            "split",
                            "-s",
                            i
                        ];
                        t(`[ITermBackend] Subsequent split from teammate session: ${i}`);
                    } else {
                        r = [
                            "session",
                            "split"
                        ];
                        t("[ITermBackend] Subsequent split from active session (no teammate ID)");
                    }
                }
                let d = await c(r);
                if (d.code !== 0) {
                    if (i) {
                        let l = await c([
                            "session",
                            "list"
                        ]);
                        if (l.code === 0 && !l.stdout.includes(i)) {
                            t(`[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${d.stderr}`);
                            let f = this.teammateSessionIds.indexOf(i);
                            if (f !== -1) {
                                this.teammateSessionIds.splice(f, 1);
                            }
                            if (this.teammateSessionIds.length === 0) {
                                this.firstPaneUsed = false;
                            }
                            continue;
                        }
                    }
                    throw new _B(`Failed to create iTerm2 split pane: ${d.stderr}`);
                }
                let paneId = p(d.stdout);
                if (!paneId) {
                    throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
                }
                t(`[ITermBackend] Created teammate pane for ${e}: ${paneId}`);
                if (isFirstTeammate) {
                    this.firstPaneUsed = true;
                }
                this.teammateSessionIds.push(paneId);
                return {
                    paneId,
                    isFirstTeammate
                };
            }
        } finally{
            o();
        }
    }
    async sendCommandToPane(e, s, o) {
        try {
            $ot(s);
        } catch (error) {
            m("swarm_pane_spawn", "swarm_pane_command_control_chars");
            throw error;
        }
        let n = e ? [
            "-s",
            e
        ] : [];
        await c([
            "session",
            "send",
            ...n,
            "\x15"
        ]);
        let r = await c([
            "session",
            "run",
            ...n,
            s
        ]);
        if (r.code !== 0) {
            throw new _B(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
        }
    }
    async setPaneBorderColor(e, s, o) {}
    async setPaneTitle(e, s, o, n) {}
    async enablePaneBorderStatus(e, s) {}
    async killPane(e, s) {
        let o = await c([
            "session",
            "close",
            "-f",
            "-s",
            e
        ]);
        let n = this.teammateSessionIds.indexOf(e);
        if (n !== -1) {
            this.teammateSessionIds.splice(n, 1);
        }
        if (this.teammateSessionIds.length === 0) {
            this.firstPaneUsed = false;
        }
        return o.code === 0;
    }
}
