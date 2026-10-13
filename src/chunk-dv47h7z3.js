const HSs = "--gh-standin";
const p$e = ".ghe.com";
const DSs = "--any-host";
const CV = "any";
function LSs() {
    let [s, t = "", n = "", ...e] = process.argv.slice(2);
    if (s !== "--gh-standin") {
        return;
    }
    process.argv = process.argv.slice(0, 3);
    let o = e[0] === "--any-host";
    let r = o || e[0]?.startsWith("--hosts=") ? e.shift() : undefined;
    let [i, ...ghArgs] = e;
    if (/^[1-9]\d{0,4}$/.test(t) && Number(t) <= 65535 && n !== "" && i === "--") {
        let ghesHosts = o ? "any" : r?.slice(8).split(",") ?? [];
        return {
            port: Number(t),
            caBundlePath: n,
            ghesHosts,
            ghArgs
        };
    }
    process.stderr.write(`gh: this command is run by the gh shim Claude Code writes for a session; it is not for direct use.
`);
    process.exitCode = 1;
    return "refused";
}
function NSs(s) {
    let [t, n] = s.ghesHosts === "any" ? [
        "--any-host",
        " or the GitHub Enterprise host a command names"
    ] : s.ghesHosts.length > 0 ? [
        `--hosts=${s.ghesHosts.join(",")}`,
        " and the hosts named below"
    ] : [
        undefined,
        ""
    ];
    let e = [
        ...s.command,
        "--gh-standin",
        String(s.port),
        s.caBundlePath,
        ...t === undefined ? [] : [
            t
        ]
    ].map((o)=>`'${o}'`);
    return `#!/bin/sh
# Claude Code gh stand-in shim (auto-generated; per-session).
# No GitHub CLI was found on this machine when this session started,
# so gh here is Claude Code's own implementation of \`gh api\`: REST
# requests to github.com${n} through the session's GitHub proxy. It reads
# no GitHub token from the environment and sends none.
exec ${e.join(" ")} -- "$@"
`;
}
export { HSs, p$e, DSs, CV, LSs, NSs };
