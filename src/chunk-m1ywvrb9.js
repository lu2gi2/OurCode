import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { JIs } from "/$bunfs/root/chunk-z0brrd3r.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { bre, Qmr, Zmr, TLe } from "/$bunfs/root/chunk-wvhw7yw5.js";
import { _B, $ot } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { Qoe, Wen, Zoe, g3e, zen } from "/$bunfs/root/chunk-6g4165br.js";
import { xse } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function h(stderr) {
    let n = `Failed to create teammate pane: ${stderr}`;
    let a = stderr.toLowerCase();
    if (a.includes("no space") || a.includes("too small")) {
        return `${n} \u2014 no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.`;
    }
    return n;
}
function T(e) {
    return ({
        red: "red",
        blue: "blue",
        green: "green",
        yellow: "yellow",
        purple: "magenta",
        orange: "colour208",
        pink: "colour205",
        cyan: "cyan"
    })[e];
}
function d(e) {
    let n = Zmr();
    let a = n ? [
        "-S",
        n,
        ...e
    ] : e;
    return it(Zoe, a);
}
function l(e, n) {
    return it(Zoe, [
        "-L",
        zen(),
        ...e
    ], n);
}
async function Ver(e, n, a, r) {
    await it(Zoe, [
        ...e,
        "set-option",
        "-p",
        "-t",
        n,
        "remain-on-exit",
        "failed"
    ], r);
    let s = await it(Zoe, [
        ...e,
        "respawn-pane",
        "-k",
        "-t",
        n,
        "--",
        JIs("agent", a)
    ], r);
    if (s.code !== 0) {
        throw new _B(`Failed to send command to pane ${n}: ${s.stderr}`);
    }
}
class JDs {
    type = "tmux";
    displayName = "tmux";
    cachedLeaderWindowTarget = null;
    firstPaneUsedForExternal = false;
    paneCreationLock = xse();
    async isAvailable() {
        return TLe();
    }
    async isRunningInside() {
        return bre();
    }
    async createTeammatePaneInSwarmView(e, n) {
        let a = await this.paneCreationLock.acquire();
        try {
            if (await this.isRunningInside()) {
                return await this.createTeammatePaneWithLeader(e, n);
            }
            return await this.createTeammatePaneExternal(e, n);
        } finally{
            a();
        }
    }
    async sendCommandToPane(e, n, a = false) {
        try {
            $ot(n);
        } catch (error) {
            m("swarm_pane_spawn", "swarm_pane_command_control_chars");
            throw error;
        }
        let r = Zmr();
        let s = a ? [
            "-L",
            zen()
        ] : r ? [
            "-S",
            r
        ] : [];
        await Ver(s, e, n);
    }
    async setPaneBorderColor(e, n, a = false) {
        let r = T(n);
        let s = a ? l : d;
        await s([
            "set-option",
            "-p",
            "-t",
            e,
            "window-style",
            `bg=default,fg=${r}`
        ]);
        await s([
            "set-option",
            "-p",
            "-t",
            e,
            "pane-border-style",
            `fg=${r}`
        ]);
        await s([
            "set-option",
            "-p",
            "-t",
            e,
            "pane-active-border-style",
            `fg=${r}`
        ]);
    }
    async setPaneTitle(e, n, a, r = false) {
        let s = T(a);
        let o = r ? l : d;
        await o([
            "select-pane",
            "-t",
            e,
            "-T",
            n
        ]);
        await o([
            "set-option",
            "-p",
            "-t",
            e,
            "pane-border-format",
            `#[fg=${s},bold] #{pane_title} #[default]`
        ]);
    }
    async enablePaneBorderStatus(e, n = false) {
        let a = e || await this.getCurrentWindowTarget();
        if (!a) {
            return;
        }
        await (n ? l : d)([
            "set-option",
            "-w",
            "-t",
            a,
            "pane-border-status",
            "top"
        ]);
    }
    async killPane(e, n = false) {
        return (await (n ? l : d)([
            "kill-pane",
            "-t",
            e
        ])).code === 0;
    }
    async getCurrentPaneId() {
        let e = Qmr();
        if (e) {
            return e;
        }
        let n = await d([
            "display-message",
            "-p",
            "#{pane_id}"
        ]);
        if (n.code !== 0) {
            t(`[TmuxBackend] Failed to get current pane ID (exit ${n.code}): ${n.stderr}`);
            return null;
        }
        return n.stdout.trim();
    }
    async getCurrentWindowTarget() {
        if (this.cachedLeaderWindowTarget) {
            return this.cachedLeaderWindowTarget;
        }
        let e = Qmr();
        let n = [
            "display-message"
        ];
        if (e) {
            n.push("-t", e);
        }
        n.push("-p", "#{window_id}");
        let a = await d(n);
        if (a.code !== 0) {
            t(`[TmuxBackend] Failed to get current window target (exit ${a.code}): ${a.stderr}`);
            return null;
        }
        this.cachedLeaderWindowTarget = a.stdout.trim();
        return this.cachedLeaderWindowTarget;
    }
    async getCurrentWindowPaneCount(e, n = false) {
        let a = e || await this.getCurrentWindowTarget();
        if (!a) {
            return null;
        }
        let r = [
            "list-panes",
            "-t",
            a,
            "-F",
            "#{pane_id}"
        ];
        let s = n ? await l(r) : await d(r);
        if (s.code !== 0) {
            t(`[TmuxBackend] Failed to get pane count for ${a} (exit ${s.code}): ${s.stderr}`, {
                level: "error"
            });
            if (a === this.cachedLeaderWindowTarget) {
                this.cachedLeaderWindowTarget = null;
            }
            return null;
        }
        return F(s.stdout.trim().split(`
`), Boolean);
    }
    async hasSessionInSwarm(e) {
        return (await l([
            "has-session",
            "-t",
            e
        ])).code === 0;
    }
    async createExternalSwarmSession() {
        if (!await this.hasSessionInSwarm(Qoe)) {
            let o = await l([
                "new-session",
                "-d",
                "-s",
                Qoe,
                "-n",
                Wen,
                "-P",
                "-F",
                "#{pane_id}",
                "--",
                g3e
            ], {
                useCwd: true,
                toolCgroupClass: "agent"
            });
            if (o.code !== 0) {
                throw new _B(`Failed to create swarm session: ${o.stderr || "Unknown error"}`);
            }
            let i = o.stdout.trim();
            let u = `${Qoe}:${Wen}`;
            t(`[TmuxBackend] Created external swarm session with window ${u}, pane ${i}`);
            this.firstPaneUsedForExternal = false;
            return {
                windowTarget: u,
                paneId: i
            };
        }
        let a = (await l([
            "list-windows",
            "-t",
            Qoe,
            "-F",
            "#{window_name}"
        ])).stdout.trim().split(`
`).filter(Boolean);
        let r = `${Qoe}:${Wen}`;
        if (a.includes(Wen)) {
            let i = (await l([
                "list-panes",
                "-t",
                r,
                "-F",
                "#{pane_id}"
            ])).stdout.trim().split(`
`).filter(Boolean);
            return {
                windowTarget: r,
                paneId: i[0] || ""
            };
        }
        let s = await l([
            "new-window",
            "-t",
            Qoe,
            "-n",
            Wen,
            "-P",
            "-F",
            "#{pane_id}",
            "--",
            g3e
        ]);
        if (s.code !== 0) {
            throw new _B(`Failed to create swarm-view window: ${s.stderr || "Unknown error"}`);
        }
        this.firstPaneUsedForExternal = false;
        return {
            windowTarget: r,
            paneId: s.stdout.trim()
        };
    }
    async createTeammatePaneWithLeader(e, n) {
        let a = await this.getCurrentPaneId();
        let r = await this.getCurrentWindowTarget();
        if (!a || !r) {
            throw new _B("Could not determine current tmux pane/window");
        }
        let s = await this.getCurrentWindowPaneCount(r);
        if (s === null) {
            throw new _B("Could not determine pane count for current window");
        }
        let o = s === 1;
        let i;
        if (o) {
            i = await d([
                "split-window",
                "-d",
                "-t",
                a,
                "-h",
                "-l",
                "70%",
                "-P",
                "-F",
                "#{pane_id}",
                "--",
                g3e
            ]);
        } else {
            let c = (await d([
                "list-panes",
                "-t",
                r,
                "-F",
                "#{pane_id}"
            ])).stdout.trim().split(`
`).filter(Boolean).slice(1);
            let g = c.length;
            let P = g % 2 === 1;
            let w = Math.floor((g - 1) / 2);
            let x = c[w] || c.at(-1);
            i = await d([
                "split-window",
                "-d",
                "-t",
                x,
                P ? "-v" : "-h",
                "-P",
                "-F",
                "#{pane_id}",
                "--",
                g3e
            ]);
        }
        if (i.code !== 0) {
            throw new _B(h(i.stderr));
        }
        let u = i.stdout.trim();
        t(`[TmuxBackend] Created teammate pane for ${e}: ${u}`);
        await this.setPaneBorderColor(u, n);
        await this.setPaneTitle(u, e, n);
        await this.rebalancePanesWithLeader(r);
        return {
            paneId: u,
            isFirstTeammate: o
        };
    }
    async createTeammatePaneExternal(e, n) {
        let { windowTarget, paneId } = await this.createExternalSwarmSession();
        let s = await this.getCurrentWindowPaneCount(windowTarget, true);
        if (s === null) {
            throw new _B("Could not determine pane count for swarm window");
        }
        let o = !this.firstPaneUsedForExternal && s === 1;
        let i;
        if (o) {
            i = paneId;
            this.firstPaneUsedForExternal = true;
            t(`[TmuxBackend] Using initial pane for first teammate ${e}: ${i}`);
            await this.enablePaneBorderStatus(windowTarget, true);
        } else {
            let p = (await l([
                "list-panes",
                "-t",
                windowTarget,
                "-F",
                "#{pane_id}"
            ])).stdout.trim().split(`
`).filter(Boolean);
            let f = p.length;
            let c = f % 2 === 1;
            let g = Math.floor((f - 1) / 2);
            let P = p[g] || p.at(-1);
            let w = await l([
                "split-window",
                "-d",
                "-t",
                P,
                c ? "-v" : "-h",
                "-P",
                "-F",
                "#{pane_id}",
                "--",
                g3e
            ]);
            if (w.code !== 0) {
                throw new _B(h(w.stderr));
            }
            i = w.stdout.trim();
            t(`[TmuxBackend] Created teammate pane for ${e}: ${i}`);
        }
        await this.setPaneBorderColor(i, n, true);
        await this.setPaneTitle(i, e, n, true);
        await this.rebalancePanesTiled(windowTarget);
        return {
            paneId: i,
            isFirstTeammate: o
        };
    }
    async rebalancePanesWithLeader(e) {
        let a = (await d([
            "list-panes",
            "-t",
            e,
            "-F",
            "#{pane_id}"
        ])).stdout.trim().split(`
`).filter(Boolean);
        if (a.length <= 2) {
            return;
        }
        await d([
            "select-layout",
            "-t",
            e,
            "main-vertical"
        ]);
        let r = a[0];
        await d([
            "resize-pane",
            "-t",
            r,
            "-x",
            "30%"
        ]);
        t(`[TmuxBackend] Rebalanced ${a.length - 1} teammate panes with leader`);
    }
    async rebalancePanesTiled(e) {
        let a = (await l([
            "list-panes",
            "-t",
            e,
            "-F",
            "#{pane_id}"
        ])).stdout.trim().split(`
`).filter(Boolean);
        if (a.length <= 1) {
            return;
        }
        await l([
            "select-layout",
            "-t",
            e,
            "tiled"
        ]);
        t(`[TmuxBackend] Rebalanced ${a.length} teammate panes with tiled layout`);
    }
}
export { Ver, JDs };
