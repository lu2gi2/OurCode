import { MTe } from "/$bunfs/root/chunk-qwvy7ma3.js";
function ov(e) {
    let s = e.trim();
    if (!s.startsWith("/")) {
        return null;
    }
    let { name, args } = MTe(s);
    if (!name) {
        return null;
    }
    let r = "(MCP)";
    if (args === r) {
        return {
            commandName: `${name} ${r}`,
            args: "",
            isMcp: true
        };
    }
    if (args.startsWith(r) && /\s/.test(args.charAt(r.length))) {
        return {
            commandName: `${name} ${r}`,
            args: args.slice(r.length).trimStart(),
            isMcp: true
        };
    }
    return {
        commandName: name,
        args,
        isMcp: false
    };
}
function gEe(e, s) {
    if (!e.subcommands) {
        return;
    }
    let t = s.trimStart();
    let n = t.search(/\s/);
    let consumedToken = n === -1 ? t : t.slice(0, n);
    let targetName = consumedToken ? e.subcommands[consumedToken.toLowerCase()] : undefined;
    if (targetName === undefined) {
        return;
    }
    let remainingArgs = n === -1 ? "" : t.slice(n + 1).trim();
    if (e.subcommandsBareOnly && remainingArgs !== "") {
        return;
    }
    return {
        targetName,
        consumedToken,
        remainingArgs
    };
}
export { ov, gEe };
