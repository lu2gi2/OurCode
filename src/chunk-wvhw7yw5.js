import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Zoe } from "/$bunfs/root/chunk-6g4165br.js";
const c = "it2";
class u {
    inITerm2 = null;
    it2Command = "it2";
    recordInITerm2(e) {
        this.inITerm2 = e;
    }
    recordIt2Command(e) {
        this.it2Command = e;
    }
}
function I() {
    return {
        cachedDetectionResult: null,
        backendsRegistered: false,
        inProcessFallbackActive: false,
        TmuxBackendClass: null,
        ITermBackendClass: null,
        tmuxBackend: null,
        itermBackend: null,
        terminalProbes: new u
    };
}
const g_e = I();
const { TMUX, TMUX_PANE } = a;
function HHn() {
    return !!TMUX;
}
async function bre() {
    return HHn();
}
function Qmr() {
    return TMUX_PANE || null;
}
function Zmr() {
    if (!TMUX) {
        return null;
    }
    return Qe(TMUX, ",") || null;
}
async function TLe() {
    return (await it(Zoe, [
        "-V"
    ])).code === 0;
}
function w5({ terminalProbes } = g_e) {
    if (terminalProbes.inITerm2 !== null) {
        return terminalProbes.inITerm2;
    }
    let a_TERM_PROGRAM = a.TERM_PROGRAM;
    let i = !!a.ITERM_SESSION_ID;
    let l = a.terminal === "iTerm.app";
    let n = a_TERM_PROGRAM === "iTerm.app" || i || l;
    terminalProbes.recordInITerm2(n);
    return n;
}
function Gio(e = g_e) {
    return e.terminalProbes.it2Command;
}
async function cCt(e = g_e) {
    let o = a.SHELL || "/bin/zsh";
    let s = await it(o, [
        "-lc",
        `command -v ${c}`
    ], {
        useCwd: false,
        timeout: 2000
    });
    let i = s.code === 0 ? s.stdout.split(`
`).map((m)=>m.trim()).filter(Boolean).at(-1) ?? "" : "";
    let l = async (m)=>it(m, [
            "session",
            "list"
        ]);
    let n = i || c;
    let r = await l(n);
    if (i && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) {
        n = c;
        r = await l(n);
    }
    if (r.code !== 0) {
        t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (i ? "it2 was found on PATH — check that the iTerm2 Python API is enabled " + "(Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH)."));
        return false;
    }
    e.terminalProbes.recordIt2Command(n);
    return true;
}
export { g_e, HHn, bre, Qmr, Zmr, TLe, w5, Gio, cCt };
