import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ej, LO } from "/$bunfs/root/chunk-bd805sh6.js";
import { Gy } from "/$bunfs/root/chunk-x47nahfr.js";
function Ldo(e) {
    if (e.loadedFrom === undefined) {
        return Boolean(e.isMcp);
    }
    switch(e.loadedFrom){
        case "skills":
        case "commands_DEPRECATED":
        case "plugin":
        case "managed":
        case "bundled":
            return false;
        case "syncedSkills":
        case "mcp":
        case "memoryStore":
        case "attachedFolder":
            return true;
    }
}
function F4e(e) {
    if (e.loadedFrom === "syncedSkills") {
        return !Cyr();
    }
    return Ldo(e);
}
function Cyr() {
    return Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || Gy();
}
function $Ln() {
    return {
        hooks: undefined,
        allowedTools: [],
        disallowedTools: [],
        executionContext: undefined,
        agent: undefined,
        background: undefined,
        model: undefined,
        effort: undefined,
        shell: undefined,
        paths: undefined,
        fallback: undefined,
        createdBy: undefined,
        displayName: undefined,
        metadata: undefined
    };
}
function $Xt(e) {
    return {
        description: K4(e.description),
        argumentHint: FLn(e.argumentHint),
        whenToUse: FLn(e.whenToUse),
        argumentNames: e.argumentNames.map(K4)
    };
}
function qgs(e) {
    return {
        ...$Xt(e),
        displayName: FLn(e.displayName),
        argumentHint: e.argumentHint === undefined ? undefined : i(e.argumentHint),
        fallback: undefined
    };
}
function FLn(e) {
    if (e === undefined) {
        return undefined;
    }
    return K4(e);
}
function K4(e) {
    return ej(i(e));
}
function i(e) {
    return LO(e, " ");
}
function ULn(e) {
    return ej(e.replace(/[\p{Cc}\p{Cs}]/gu, (n)=>{
        if (n === "\t" || n === `
` || n === "\r") {
            return n;
        }
        return "";
    }));
}
export { Ldo, F4e, Cyr, $Ln, $Xt, qgs, FLn, K4, ULn };
