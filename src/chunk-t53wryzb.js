import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Ls, _ye } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Mtt, Bvt, H2e, _L, xe, Wh } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Mo, kd } from "/$bunfs/root/chunk-rhjwzamj.js";
import { S4, o5 } from "/$bunfs/root/chunk-a5rabwn2.js";
import { ov, gEe } from "/$bunfs/root/chunk-ak4pcpg3.js";
function SBs({ inputString, context, uuid, origin, verifiedSlackHumanTurn }) {
    let a = f(inputString, context.options.commands);
    if (a === undefined) {
        return {
            kind: "none"
        };
    }
    let { folded, effectiveCmd } = a;
    let c = Bvt(effectiveCmd, {
        origin,
        relayAuthored: verifiedSlackHumanTurn === true
    });
    if (Mtt(effectiveCmd) && c) {
        return {
            kind: "updated",
            effectiveSkipSlash: false,
            effectiveInput: inputString,
            effectiveContext: context
        };
    }
    let u = H2e(effectiveCmd);
    if (u && kd(effectiveCmd)) {
        return {
            kind: "updated",
            effectiveSkipSlash: false,
            effectiveInput: folded ? `/${u.name}${folded.args ? ` ${folded.args}` : ""}` : inputString.replace(/^\/\S+/, `/${u.name}`),
            effectiveContext: {
                ...context,
                options: {
                    ...context.options,
                    commands: [
                        {
                            ...u,
                            isEnabled: ()=>kd(effectiveCmd)
                        },
                        ...context.options.commands
                    ]
                }
            }
        };
    }
    return {
        kind: "blocked",
        result: g({
            target: a,
            inputString,
            uuid,
            origin,
            surface: "bridge"
        })
    };
}
function wBs({ inputString, context, uuid, origin }) {
    let s = f(inputString, context.options.commands);
    if (s === undefined || Bvt(s.effectiveCmd, {
        origin,
        relayAuthored: true
    })) {
        return {
            kind: "none"
        };
    }
    return {
        kind: "blocked",
        result: g({
            target: s,
            inputString,
            uuid,
            origin,
            surface: "relay"
        })
    };
}
function g({ target: { parsed, cmd, folded, effectiveCmd }, inputString, uuid, origin, surface }) {
    let { sanitizedName, skillNameHash } = S4({
        rawName: cmd.name,
        canonicalName: cmd.name,
        isMcp: cmd.loadedFrom === "mcp",
        isBuiltIn: _L().has(cmd.name),
        isBundled: cmd.type === "prompt" && cmd.source === "bundled",
        isOfficial: cmd.type === "prompt" && o5(cmd)
    });
    i("tengu_slash_command_unavailable", {
        command_name: sanitizedName,
        ...skillNameHash,
        surface: surface === "bridge" ? b("bridge") : b("relay"),
        reason: b("unavailable_over_remote_control")
    });
    m("cmd_dispatch", "cmd_unavailable_bridge");
    let resultText = folded ? `/${Mo(cmd)} ${folded.consumedToken} isn't available over Remote Control.` : `/${Mo(effectiveCmd)} isn't available over Remote Control.`;
    let content = _ye(cmd, parsed.args) || _ye(effectiveCmd, folded ? folded.args : parsed.args) ? `/${parsed.commandName} ***` : inputString;
    return {
        messages: [
            xe({
                content,
                uuid,
                origin
            }),
            Wh(`<local-command-stdout>${resultText}</local-command-stdout>`)
        ],
        shouldQuery: false,
        resultText
    };
}
function f(o, e) {
    let parsed = ov(o);
    if (parsed === null) {
        return;
    }
    let cmd = Ls(parsed.commandName, e);
    if (!cmd) {
        return;
    }
    let r = gEe(cmd, parsed.args);
    let command = r ? Ls(r.targetName, e) : undefined;
    let folded = r && command && kd(command) ? {
        command,
        consumedToken: r.consumedToken,
        args: r.remainingArgs
    } : undefined;
    return {
        parsed,
        cmd,
        folded,
        effectiveCmd: folded ? folded.command : cmd
    };
}
function QDr(o, e) {
    let n = f(o, e);
    if (n === undefined) {
        return true;
    }
    let { effectiveCmd } = n;
    return effectiveCmd.type === "prompt" && Mtt(effectiveCmd);
}
export { SBs, wBs, QDr };
