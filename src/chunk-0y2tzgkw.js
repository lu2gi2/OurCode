import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { homedir } from "os";
import { dirname, join, resolve } from "path";
function s() {
    let e = a.SHELL || "";
    let i = homedir();
    let r = join(i, ".claude");
    if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
        let o = join(r, "completion.zsh");
        return {
            name: "zsh",
            rcFile: join(i, ".zshrc"),
            cacheFile: o,
            completionLine: `[[ -f "${o}" ]] && source "${o}"`,
            shellFlag: "zsh"
        };
    }
    if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
        let o = join(r, "completion.bash");
        return {
            name: "bash",
            rcFile: join(i, ".bashrc"),
            cacheFile: o,
            completionLine: `[ -f "${o}" ] && source "${o}"`,
            shellFlag: "bash"
        };
    }
    if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
        let o = a.XDG_CONFIG_HOME || join(i, ".config");
        let l = join(r, "completion.fish");
        return {
            name: "fish",
            rcFile: join(o, "fish", "config.fish"),
            cacheFile: l,
            completionLine: `[ -f "${l}" ] && source "${l}"`,
            shellFlag: "fish"
        };
    }
    return null;
}
async function A0r() {}
function m(e) {
    let { cmd, prefixArgs } = uu();
    return it(cmd, [
        ...prefixArgs,
        "completion",
        e.shellFlag,
        "--output",
        e.cacheFile
    ]);
}
export { A0r };
