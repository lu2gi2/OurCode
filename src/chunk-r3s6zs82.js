import { tt, pg, wY, El } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ti } from "/$bunfs/root/chunk-gr4a0fky.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { i2, AA, BC, $Qo } from "/$bunfs/root/chunk-kasbfbhj.js";
import { RTe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { xAe } from "/$bunfs/root/chunk-7aeb6f08.js";
import { Eg } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { PQe } from "/$bunfs/root/chunk-tayw9wy3.js";
import { HWe, Yee } from "/$bunfs/root/chunk-q0azyh3r.js";
import { CQe } from "/$bunfs/root/chunk-bwcgyj8r.js";
import { z_e } from "/$bunfs/root/chunk-ghreee2m.js";
async function P9n({ session, tools, mainLoopModel, customSystemPrompt, excludeDynamicSections, cacheBreakerPhrase, analysisOnly, storageV5, credentials }) {
    let [defaultSystemPrompt, d, e, o] = await Promise.all([
        customSystemPrompt !== undefined ? Promise.resolve([]) : BC(tools, mainLoopModel, {
            excludeDynamicSections,
            analysisOnly
        }),
        AA(session, storageV5, credentials),
        customSystemPrompt !== undefined ? Promise.resolve({}) : i2(session, cacheBreakerPhrase),
        excludeDynamicSections && customSystemPrompt === undefined ? $Qo(mainLoopModel, {
            analysisOnly
        }) : Promise.resolve({})
    ]);
    if (excludeDynamicSections) {
        return {
            defaultSystemPrompt,
            userContext: {
                ...e,
                ...d,
                ...o
            },
            systemContext: {}
        };
    }
    return {
        defaultSystemPrompt,
        userContext: d,
        systemContext: e
    };
}
async function H1r({ session, messageQueue, tools, toolCatalog, commands, mcpClients, messages, turnInProgress, readFileState, toolState, sessionHooks, getAppState, setAppState, customSystemPrompt, appendSystemPrompt, excludeDynamicSections, thinkingConfig, agents, storageV5, credentials, runQuery }) {
    let i = getAppState();
    let mainLoopModel = pg({
        permissionMode: i.toolPermissionContext.mode,
        mainLoopModel: tt()
    });
    let { defaultSystemPrompt, userContext, systemContext } = await P9n({
        session,
        tools,
        mainLoopModel,
        customSystemPrompt,
        excludeDynamicSections,
        cacheBreakerPhrase: i.cacheBreakerPhrase,
        analysisOnly: true,
        storageV5,
        credentials
    });
    let systemPrompt = Ti([
        ...typeof customSystemPrompt === "string" ? RTe(customSystemPrompt) : Array.isArray(customSystemPrompt) ? customSystemPrompt : defaultSystemPrompt,
        ...appendSystemPrompt ? [
            xAe(appendSystemPrompt)
        ] : []
    ]);
    let k = messages.at(-1);
    let h = turnInProgress && k?.type === "assistant" && k.message.stop_reason === null ? messages.slice(0, -1) : messages;
    let toolUseContext = {
        messageQueue,
        session,
        storageV5,
        credentials,
        agentContext: El(),
        options: {
            commands,
            debug: false,
            mainLoopModel,
            tools,
            toolCatalog,
            verbose: false,
            thinkingConfig: thinkingConfig ?? (wY() !== false ? {
                type: "adaptive"
            } : {
                type: "disabled"
            }),
            mcpClients,
            mcpResources: {},
            isNonInteractiveSession: true,
            runQuery,
            agentDefinitions: {
                activeAgents: agents,
                allAgents: []
            },
            customSystemPrompt,
            ...customSystemPrompt !== undefined && {
                omitGitStatus: true
            },
            appendSystemPrompt,
            autoCompactWindow: i.autoCompactWindow,
            fastMode: i.fastMode,
            cacheBreakerPhrase: i.cacheBreakerPhrase
        },
        abortController: lr(),
        readFileState,
        toolState,
        toolDecisions: new Map,
        permissionRelays: Yee,
        getAppState,
        setAppState,
        ...CQe(getAppState, setAppState),
        queuedNotificationsRegistry: PQe(getAppState, setAppState, session),
        taskRegistry: Eg(getAppState, setAppState),
        sessionHooksRegistry: sessionHooks,
        teammateColors: HWe(z_e(getAppState, setAppState, "teammateColors")),
        rootToolSurface: {
            tools,
            mainLoopModel
        },
        messages: h,
        turnStartIndex: 0,
        getFileHistoryState: ()=>{},
        applyFileHistoryOp: ()=>{},
        applyAttributionOp: ()=>{}
    };
    return {
        systemPrompt,
        userContext,
        systemContext,
        toolUseContext,
        forkContextMessages: h,
        advisorModel: i.advisorModel
    };
}
export { P9n, H1r };
