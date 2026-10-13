import { bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { hCr } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const y = C(function(v, I) {
    const k = Le("os");
    const f = Le("tty");
    const o = hCr();
    const { env } = process;
    let i;
    if (o("no-color") || o("no-colors") || o("color=false") || o("color=never")) {
        i = 0;
    } else if (o("color") || o("colors") || o("color=true") || o("color=always")) {
        i = 1;
    }
    if ("FORCE_COLOR" in env) {
        if (env.FORCE_COLOR === "true") {
            i = 1;
        } else if (env.FORCE_COLOR === "false") {
            i = 0;
        } else {
            i = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
        }
    }
    function E(level) {
        if (level === 0) {
            return false;
        }
        return {
            level,
            hasBasic: true,
            has256: level >= 2,
            has16m: level >= 3
        };
    }
    function T(r, n) {
        if (i === 0) {
            return 0;
        }
        if (o("color=16m") || o("color=full") || o("color=truecolor")) {
            return 3;
        }
        if (o("color=256")) {
            return 2;
        }
        if (r && !n && i === undefined) {
            return 0;
        }
        let e = i || 0;
        if (env.TERM === "dumb") {
            return e;
        }
        if ("CI" in env) {
            if ([
                "TRAVIS",
                "CIRCLECI",
                "APPVEYOR",
                "GITLAB_CI",
                "GITHUB_ACTIONS",
                "BUILDKITE"
            ].some((u)=>u in env) || env.CI_NAME === "codeship") {
                return 1;
            }
            return e;
        }
        if ("TEAMCITY_VERSION" in env) {
            if (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)) {
                return 1;
            }
            return 0;
        }
        if (env.COLORTERM === "truecolor") {
            return 3;
        }
        if ("TERM_PROGRAM" in env) {
            let u = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch(env.TERM_PROGRAM){
                case "iTerm.app":
                    if (u >= 3) {
                        return 3;
                    }
                    return 2;
                case "Apple_Terminal":
                    return 2;
            }
        }
        if (/-256(color)?$/i.test(env.TERM)) {
            return 2;
        }
        if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
            return 1;
        }
        if ("COLORTERM" in env) {
            return 1;
        }
        return e;
    }
    function supportsColor(r) {
        let n = T(r, r && r.isTTY);
        return E(n);
    }
    I.exports = {
        supportsColor,
        stdout: E(T(true, f.isatty(1))),
        stderr: E(T(true, f.isatty(2)))
    };
});
const L = C(function(H, h) {
    const _ = y();
    const c = hCr();
    function M(r) {
        if (/^\d{3,4}$/.test(r)) {
            let e = /(\d{1,2})(\d{2})/.exec(r) || [];
            return {
                major: 0,
                minor: parseInt(e[1], 10),
                patch: parseInt(e[2], 10)
            };
        }
        let n = (r || "").split(".").map((e)=>parseInt(e, 10));
        return {
            major: n[0],
            minor: n[1],
            patch: n[2]
        };
    }
    function supportsHyperlink(r) {
        let { CI, FORCE_HYPERLINK, NETLIFY, TEAMCITY_VERSION, TERM_PROGRAM, TERM_PROGRAM_VERSION, VTE_VERSION, TERM } = process.env;
        if (FORCE_HYPERLINK) {
            return !(FORCE_HYPERLINK.length > 0 && parseInt(FORCE_HYPERLINK, 10) === 0);
        }
        if (c("no-hyperlink") || c("no-hyperlinks") || c("hyperlink=false") || c("hyperlink=never")) {
            return false;
        }
        if (c("hyperlink=true") || c("hyperlink=always")) {
            return true;
        }
        if (NETLIFY) {
            return true;
        }
        if (!_.supportsColor(r)) {
            return false;
        }
        if (r && !r.isTTY) {
            return false;
        }
        if ("WT_SESSION" in process.env) {
            return true;
        }
        if (CI) {
            return false;
        }
        if (TEAMCITY_VERSION) {
            return false;
        }
        if (TERM_PROGRAM) {
            let s = M(TERM_PROGRAM_VERSION || "");
            switch(TERM_PROGRAM){
                case "iTerm.app":
                    if (s.major === 3) {
                        return s.minor >= 1;
                    }
                    return s.major > 3;
                case "WezTerm":
                    return s.major >= 20200620;
                case "vscode":
                    return s.major > 1 || s.major === 1 && s.minor >= 72;
                case "ghostty":
                    return true;
            }
        }
        if (VTE_VERSION) {
            if (VTE_VERSION === "0.50.0") {
                return false;
            }
            let s = M(VTE_VERSION);
            return s.major > 0 || s.minor >= 50;
        }
        switch(TERM){
            case "alacritty":
                return true;
        }
        return false;
    }
    h.exports = {
        supportsHyperlink,
        stdout: supportsHyperlink(process.stdout),
        stderr: supportsHyperlink(process.stderr)
    };
});
const O = Se(L(), 1);
const A = [
    "ghostty",
    "Hyper",
    "kitty",
    "alacritty",
    "iTerm.app",
    "iTerm2",
    "WarpTerminal"
];
function cOe(r) {
    let n = bu()?.hyperlinks;
    if (n !== undefined) {
        return n;
    }
    if ("FORCE_HYPERLINK" in (r?.env ?? process.env)) {
        return r?.stdoutSupported ?? O.default.supportsHyperlink(process.stdout);
    }
}
function dw(r) {
    let n = cOe(r);
    if (n !== undefined) {
        return n;
    }
    let e = r?.env ?? process.env;
    if (r?.stdoutSupported ?? O.default.supportsHyperlink(process.stdout)) {
        return true;
    }
    let e_TERM_PROGRAM = e.TERM_PROGRAM;
    if (e_TERM_PROGRAM && A.includes(e_TERM_PROGRAM)) {
        return true;
    }
    if (e.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
        return true;
    }
    if (e.WT_SESSION && e_TERM_PROGRAM !== "tmux" && !e.TMUX) {
        return true;
    }
    if (e_TERM_PROGRAM === "tmux") {
        let [a, R] = (e.TERM_PROGRAM_VERSION ?? "").split(".");
        let s = parseInt(a ?? "", 10);
        let S = parseInt(R ?? "", 10);
        if (s > 3 || s === 3 && S >= 4) {
            return true;
        }
    }
    let e_LC_TERMINAL = e.LC_TERMINAL;
    if (e_LC_TERMINAL && A.includes(e_LC_TERMINAL)) {
        return true;
    }
    if (e.TERM?.includes("kitty")) {
        return true;
    }
    return false;
}
export { cOe, dw };
