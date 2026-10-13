import { Ugt, QNr, ZNr, e$r, Epn, Bgt, t$r, kpn, U3n, n$r, KFt, Tpn, CJe, r$r, jje, Wje, YFt, o$r, s$r, Apn, i$r, a$r, l$r, XFt, JFt } from "/$bunfs/root/chunk-4m492zgj.js";
import { yI, Y3r, Vnr, ga } from "/$bunfs/root/chunk-kasbfbhj.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { fp, Bb, h8e } from "/$bunfs/root/chunk-etbngzss.js";
import { MFt } from "/$bunfs/root/chunk-d02mfs7m.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { isDeepStrictEqual } from "util";
const w = {};
Mr(w, {
    BLOCK_SCHEMA: ()=>r$r,
    BOUNDARY_SUFFIX: ()=>BOUNDARY_SUFFIX,
    COMMAND_ROW_TAGS: ()=>COMMAND_ROW_TAGS,
    DELIVERY_ATTACHMENT_TYPES: ()=>DELIVERY_ATTACHMENT_TYPES,
    HEAD_BLOCK_TYPES: ()=>o$r,
    REWRITABLE_BLOCK_TYPES: ()=>Tpn,
    SESSION_APPEND: ()=>Y3r,
    START_KEY: ()=>Apn,
    TEXT_BLOCK_SCHEMA: ()=>Ugt,
    TOOL_RESULT_ANSWER_SCHEMA: ()=>a$r,
    anchorKeysOf: ()=>CJe,
    answeredBlockOf: ()=>answeredBlockOf,
    answeredPickOf: ()=>i$r,
    answeredToolUseId: ()=>answeredToolUseId,
    appendContentOf: ()=>kpn,
    appendCoreOf: ()=>appendCoreOf,
    appendInputOf: ()=>appendInputOf,
    appendMessageOf: ()=>U3n,
    appendOriginOf: ()=>appendOriginOf,
    appendedRow: ()=>appendedRow,
    appendedTo: ()=>KFt,
    assistantContentOf: ()=>assistantContentOf,
    attachmentRenderingsOf: ()=>Epn,
    callAppended: ()=>callAppended,
    candidateBlocksOf: ()=>jje,
    default: ()=>w,
    doorOf: ()=>doorOf,
    filledRow: ()=>filledRow,
    isAppendable: ()=>isAppendable,
    isRewritableAttachment: ()=>n$r,
    lastTextOf: ()=>lastTextOf,
    mintedRowOf: ()=>ZNr,
    pickTextOf: ()=>pickTextOf,
    pickedTextsOf: ()=>Wje,
    pluginAppendInputOf: ()=>JFt,
    pluginAppended: ()=>pluginAppended,
    pluginNameOf: ()=>QNr,
    renderedRowOf: ()=>renderedRowOf,
    renderingOf: ()=>renderingOf,
    renderingTextsOf: ()=>Bgt,
    renderingWithTexts: ()=>renderingWithTexts,
    restoredPicks: ()=>XFt,
    rewritablePickOf: ()=>s$r,
    rowWithContent: ()=>rowWithContent,
    rowsAppendedTo: ()=>rowsAppendedTo,
    systemTextOf: ()=>t$r,
    toolNameOf: ()=>toolNameOf,
    toolResultContentOf: ()=>YFt,
    toolResultPickOf: ()=>l$r,
    unboundReasonOf: ()=>e$r,
    userContentOf: ()=>userContentOf,
    userDoorOf: ()=>userDoorOf
});
export var renderedRowOf = (e, o)=>({
        ...e,
        rendered: o,
        ...e.attachment.type === "queued_command" && {
            renderedInHumanTurn: o
        }
    });
export var assistantContentOf = (e, o)=>o.flatMap((r)=>{
        if (r.kind === "text") {
            return [
                {
                    type: "text",
                    text: r.text,
                    citations: null
                }
            ];
        }
        let n = e[r.index];
        if (n === undefined) {
            return [];
        }
        return [
            n
        ];
    });
export function renderingOf(e, o) {
    let [r] = e;
    return {
        content: o && e.length === 1 && r !== undefined ? r : e.map((text)=>({
                type: "text",
                text
            }))
    };
}
export function renderingWithTexts(e, o) {
    let r = e.map((s)=>Bgt(s).length);
    if (o.length !== r.reduce((acc, item)=>acc + item, 0)) {
        return [
            renderingOf(o, o.length === 1)
        ];
    }
    let p = 0;
    return e.map((s, i)=>{
        let a = r[i] ?? 0;
        let f = o.slice(p, p + a);
        p += a;
        return renderingOf(f, typeof s.content === "string");
    });
}
export function answeredBlockOf(e, o) {
    if (o.kind !== "tool-result" || e.type !== "tool_result") {
        return e;
    }
    let { is_error, ...rest } = e;
    let s = o.isError === (e.is_error === true);
    return {
        ...s ? e : rest,
        content: YFt(e.content, o.content),
        ...!s && o.isError && {
            is_error: true
        }
    };
}
export var pickTextOf = (e, o)=>{
    if (e?.kind === "text") {
        return e.text;
    }
    return o;
};
export function userContentOf(e, o) {
    let [r] = o;
    let n = o.length === 1 && r?.kind !== "tool-result";
    if (typeof e === "string") {
        if (n) {
            return pickTextOf(r, e);
        }
        return o.map((s)=>({
                type: "text",
                text: pickTextOf(s, e)
            }));
    }
    return o.flatMap((s)=>{
        if (s.kind === "text") {
            return [
                {
                    type: "text",
                    text: s.text
                }
            ];
        }
        let a = e[s.index];
        if (a === undefined) {
            return [];
        }
        return [
            answeredBlockOf(a, s)
        ];
    });
}
var k = (e, o)=>{
    if (isDeepStrictEqual(o, e.message.content)) {
        return e;
    }
    return {
        ...e,
        message: {
            ...e.message,
            content: o
        }
    };
};
export function rowWithContent(e, o) {
    let r = XFt(kpn(e), jje(o.content));
    switch(e.type){
        case "user":
            return k(e, userContentOf(e.message.content, r));
        case "assistant":
            return k(e, assistantContentOf(e.message.content, r));
        case "attachment":
            {
                let n = Epn(e);
                let p = Wje(n.flatMap(Bgt), r);
                let s = renderingWithTexts(n, p);
                if (!n$r(e.attachment.type, n) || p.length === 0 || isDeepStrictEqual(s, n)) {
                    return e;
                }
                return renderedRowOf(e, s);
            }
        case "system":
            {
                if (!("content" in e) || typeof e.content !== "string") {
                    return e;
                }
                let n = Wje([
                    e.content
                ], r).join(`
`);
                if (n === e.content) {
                    return e;
                }
                return {
                    ...e,
                    content: n
                };
            }
    }
}
export function filledRow(e, o) {
    let r = e.type === "assistant" && o.type === "assistant" || e.type === "user" && o.type === "user";
    if (e === o) {
        return e;
    }
    if (r && "message" in e && "message" in o) {
        e.message.content = o.message.content;
        return e;
    }
    return Object.assign(e, o);
}
export var appendCoreOf = (e, o, r)=>({
        name: "core",
        isCore: true,
        budgetMs: 0,
        run: async (n)=>{
            let p = rowWithContent(o, n.message);
            let i = e.fills || o.type === "assistant" ? filledRow(o, p) : p;
            let message = U3n(i);
            if (p === o && !isDeepStrictEqual(n.message.content, message.content)) {
                t(`session.append: a rewrite of row ${o.uuid} is not kept: what it changed is pinned, rendered per request or carries media`);
            }
            if (!e.fills) {
                e.keep([
                    i
                ]);
            }
            r(i);
            return {
                message,
                uuid: o.uuid
            };
        }
    });
export function answeredToolUseId(e) {
    let { content } = e.message;
    if (Array.isArray(content)) {
        let r = content.find((n)=>n.type === "tool_result");
        if (r?.type === "tool_result") {
            return r.tool_use_id;
        }
    }
    return e.sourceToolUseID;
}
export function appendOriginOf(e, o, r) {
    switch(e.type){
        case "assistant":
            return {
                kind: "model",
                model: e.message.model
            };
        case "attachment":
            {
                let { attachment } = e;
                if (attachment.type === "queued_command") {
                    return Vnr(attachment.origin);
                }
                return MFt(attachment);
            }
        case "system":
            return {
                kind: "engine"
            };
        case "user":
            break;
    }
    let p = o === "tool-result" || o === "tool-message" ? answeredToolUseId(e) : undefined;
    if (p !== undefined) {
        return {
            kind: "tool",
            tool: r.toolNameOf(p)
        };
    }
    if (r.isOpeningPrompt) {
        return {
            kind: "coordinator"
        };
    }
    let e_origin = e.origin;
    if (e_origin?.kind === "plugin" && o === "note") {
        return {
            kind: "plugin",
            name: e_origin.name
        };
    }
    if (o === "prompt" || o === "command") {
        return Vnr(e.origin);
    }
    return {
        kind: "engine"
    };
}
export var BOUNDARY_SUFFIX = "_boundary";
export var COMMAND_ROW_TAGS = [
    fp,
    Bb,
    ...h8e
].map((e)=>`<${e}>`);
export var DELIVERY_ATTACHMENT_TYPES = new Set([
    "queued_command",
    "poll_events",
    "teammate_mailbox"
]);
export function lastTextOf(e) {
    let { content } = e.message;
    if (typeof content === "string") {
        return content;
    }
    let r = content.findLast((n)=>n.type === "text");
    if (r?.type === "text") {
        return r.text;
    }
}
export function userDoorOf(e) {
    let { content } = e.message;
    if (Array.isArray(content) && content.some((i)=>i.type === "tool_result")) {
        return "tool-result";
    }
    if (e.isCompactSummary === true) {
        return "compaction";
    }
    if (e.sourceToolUseID !== undefined) {
        return "tool-message";
    }
    let n = lastTextOf(e);
    if (e.dispatchEcho === true || e.stackedExpansion === true || n !== undefined && COMMAND_ROW_TAGS.some((i)=>n.startsWith(i))) {
        return "command";
    }
    if (e.promptId !== undefined || e.promptSource !== undefined || e.origin !== undefined) {
        return "prompt";
    }
    return "note";
}
export function doorOf(e) {
    switch(e.type){
        case "user":
            return userDoorOf(e);
        case "assistant":
            return "response";
        case "attachment":
            {
                let o = e.attachment.type;
                if (DELIVERY_ATTACHMENT_TYPES.has(o)) {
                    return "delivery";
                }
                if (o.startsWith("hook_") || o === "async_hook_response") {
                    return "hook-context";
                }
                return "attachment";
            }
        case "system":
            if (e.subtype.endsWith(BOUNDARY_SUFFIX)) {
                return "compaction";
            }
            if (e.subtype === "local_command") {
                return "command";
            }
            return "notice";
    }
}
export function toolNameOf(e, o) {
    for (let r of o){
        for(let n = r.length - 1; n >= 0; n--){
            let p = r[n];
            if (p?.type !== "assistant") {
                continue;
            }
            let s = p.message.content.find((i)=>i.type === "tool_use" && i.id === e);
            if (s?.type === "tool_use") {
                return s.name;
            }
        }
    }
    return "unknown";
}
export function appendInputOf(e, { agentId, raising, lists }) {
    let door = raising.door ?? doorOf(e);
    return {
        message: U3n(e),
        door,
        origin: raising.origin ?? appendOriginOf(e, door, {
            toolNameOf: (i)=>toolNameOf(i, lists),
            isOpeningPrompt: raising.door === "prompt"
        }),
        uuid: e.uuid,
        ...agentId !== undefined && {
            agentId
        }
    };
}
export async function appendedRow(e, { row, listed }, raising) {
    let s = {
        keep: raising.keep ?? e.keep,
        fills: raising.fills === true
    };
    let i;
    let a = appendInputOf(row, {
        ...e.agentId !== undefined && {
            agentId: e.agentId
        },
        raising,
        lists: [
            listed,
            e.rows()
        ]
    });
    try {
        await ga("session.append", {
            origin: raising.hookOrigin,
            core: {
                "session.append": appendCoreOf(s, row, (f)=>{
                    i = f;
                })
            }
        })(a);
    } catch (error) {
        t(`session.append ${a.door}: the dispatch failed, the row is kept as made: ${l(error)}`, {
            level: "error"
        });
    }
    if (i === undefined && !s.fills) {
        s.keep([
            row
        ]);
    }
    return i ?? row;
}
export var callAppended = (e)=>KFt(e, yI()?.conversation?.(e.agentId));
export var isAppendable = (e)=>e.type !== "progress" && (e.type !== "user" || e.ephemeral !== true);
export var pluginAppended = (e, o)=>ga("session.append", {
        origin: o.origin,
        ...o.signal !== undefined && {
            signal: o.signal
        }
    })(JFt(e, o.plugin));
export async function rowsAppendedTo(e, o, r) {
    let listed = o.filter(isAppendable);
    let p = [];
    for (let row of o){
        if (isAppendable(row)) {
            p.push(await appendedRow(e, {
                row,
                listed
            }, r));
        } else {
            if (r.fills !== true) {
                (r.keep ?? e.keep)([
                    row
                ]);
            }
            p.push(row);
        }
    }
    return p;
}
export { r$r as BLOCK_SCHEMA, o$r as HEAD_BLOCK_TYPES, Tpn as REWRITABLE_BLOCK_TYPES, Y3r as SESSION_APPEND, Apn as START_KEY, Ugt as TEXT_BLOCK_SCHEMA, a$r as TOOL_RESULT_ANSWER_SCHEMA, CJe as anchorKeysOf, i$r as answeredPickOf, kpn as appendContentOf, U3n as appendMessageOf, KFt as appendedTo, Epn as attachmentRenderingsOf, jje as candidateBlocksOf, w as default, n$r as isRewritableAttachment, ZNr as mintedRowOf, Wje as pickedTextsOf, JFt as pluginAppendInputOf, QNr as pluginNameOf, Bgt as renderingTextsOf, XFt as restoredPicks, s$r as rewritablePickOf, t$r as systemTextOf, YFt as toolResultContentOf, l$r as toolResultPickOf, e$r as unboundReasonOf };
