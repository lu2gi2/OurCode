import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { b, d, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { oo, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Sho, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Zk, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { St, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe, _c } from "/$bunfs/root/chunk-qch5xj2a.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { mse } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { o, Bm, T, u, Ue, ue, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { readFileSync } from "fs";
import { readFile, stat } from "fs/promises";
import { dirname, join } from "path";
const L = O();
const Ie = L === "windows" || L === "wsl";
const Me = Ie ? "alt+v" : "ctrl+v";
const Le = L !== "windows" || (Zk() ? Sho("1.4.3", ">=1.2.23") : Sho(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0"));
const le = Le ? "shift+tab" : "meta+m";
const pB = [
    {
        context: "Global",
        bindings: {
            "ctrl+c": "app:interrupt",
            "ctrl+d": "app:exit",
            "ctrl+t": "app:toggleTodos",
            "ctrl+o": "app:toggleTranscript",
            "ctrl+shift+b": "app:toggleBrief",
            "ctrl+r": "history:search",
            "ctrl+up": "app:diffFileListUp",
            "ctrl+down": "app:diffFileListDown",
            "meta+up": "app:diffFileListUp",
            "meta+down": "app:diffFileListDown",
            ...{},
            ...{
                "ctrl+]": "app:openArtifact"
            },
            ...{},
            ...{}
        }
    },
    {
        context: "DiffPanel",
        bindings: {
            "ctrl+x b": "app:cycleDiffBase"
        }
    },
    {
        context: "FeedbackSurvey",
        bindings: {
            "ctrl+x 1": "feedbackSurvey:bad",
            "ctrl+x 2": "feedbackSurvey:fine",
            "ctrl+x 3": "feedbackSurvey:good"
        }
    },
    {
        context: "Chat",
        bindings: {
            escape: "chat:cancel",
            "ctrl+l": "chat:clearInput",
            "cmd+k": "chat:clearScreen",
            "ctrl+x ctrl+k": "chat:killAgents",
            ...{
                [le]: "chat:cycleMode"
            },
            ...{},
            "meta+p": "chat:modelPicker",
            ...{},
            "meta+o": "chat:fastMode",
            "ctrl+y": "chat:defaultToNewerModel",
            "meta+t": "chat:thinkingToggle",
            "meta+w": "chat:workflowKeywordToggle",
            enter: "chat:submit",
            "ctrl+x enter": "chat:queueSubmit",
            "ctrl+x ctrl+s": "chat:sendNow",
            "ctrl+enter": "chat:sendNow",
            "ctrl+j": "chat:newline",
            up: "history:previous",
            down: "history:next",
            "ctrl+_": "chat:undo",
            "ctrl+-": "chat:undo",
            "ctrl+shift+-": "chat:undo",
            "ctrl+shift+_": "chat:undo",
            "ctrl+x ctrl+e": "chat:externalEditor",
            "ctrl+x ctrl+a": "abovePrompt:toggle",
            "ctrl+x tab": "abovePrompt:focus",
            "ctrl+g": "chat:externalEditor",
            "ctrl+s": "chat:stash",
            [Me]: "chat:imagePaste",
            ...L === "wsl" && {
                "ctrl+v": "chat:imagePaste"
            },
            space: "voice:pushToTalk"
        }
    },
    {
        context: "Autocomplete",
        bindings: {
            tab: "autocomplete:accept",
            escape: "autocomplete:dismiss",
            up: "autocomplete:previous",
            down: "autocomplete:next"
        }
    },
    {
        context: "Settings",
        bindings: {
            escape: "confirm:no",
            up: "select:previous",
            down: "select:next",
            k: "select:previous",
            j: "select:next",
            "ctrl+p": "select:previous",
            "ctrl+n": "select:next",
            home: "select:first",
            end: "select:last",
            pageup: "select:pageUp",
            pagedown: "select:pageDown",
            space: "select:accept",
            enter: "select:accept",
            "/": "settings:search",
            r: "settings:retry",
            d: "settings:periodDay",
            w: "settings:periodWeek",
            t: "settings:sortByTokens",
            "ctrl+u": "scroll:halfPageUp",
            "ctrl+d": "scroll:halfPageDown"
        }
    },
    {
        context: "Confirmation",
        bindings: {
            enter: "confirm:yes",
            escape: "confirm:no",
            up: "confirm:previous",
            down: "confirm:next",
            tab: "confirm:nextField",
            space: "confirm:toggle",
            [le]: "confirm:cycleMode"
        }
    },
    {
        context: "Tabs",
        bindings: {
            tab: "tabs:next",
            "shift+tab": "tabs:previous",
            right: "tabs:next",
            left: "tabs:previous"
        }
    },
    {
        context: "Transcript",
        bindings: {
            "ctrl+e": "transcript:toggleShowAll",
            "ctrl+c": "transcript:exit",
            escape: "transcript:exit",
            q: "transcript:exit",
            "ctrl+u": "scroll:halfPageUp",
            "ctrl+d": "scroll:halfPageDown",
            "ctrl+b": "scroll:fullPageUp",
            "ctrl+f": "scroll:fullPageDown",
            "ctrl+n": "scroll:lineDown",
            "ctrl+p": "scroll:lineUp",
            g: "scroll:top",
            "shift+g": "scroll:bottom",
            j: "scroll:lineDown",
            k: "scroll:lineUp",
            space: "scroll:fullPageDown",
            b: "scroll:fullPageUp",
            up: "scroll:lineUp",
            down: "scroll:lineDown",
            home: "scroll:top",
            end: "scroll:bottom"
        }
    },
    {
        context: "HistorySearch",
        bindings: {
            "ctrl+r": "historySearch:next",
            escape: "historySearch:accept",
            tab: "historySearch:accept",
            "ctrl+c": "historySearch:cancel",
            enter: "historySearch:execute",
            "ctrl+s": "historySearch:cycleScope"
        }
    },
    {
        context: "Task",
        bindings: {
            "ctrl+x ctrl+b": "task:background",
            "ctrl+b": "task:background"
        }
    },
    {
        context: "ThemePicker",
        bindings: {
            "ctrl+t": "theme:toggleSyntaxHighlighting",
            "ctrl+e": "theme:editCustom"
        }
    },
    {
        context: "Scroll",
        bindings: {
            pageup: "scroll:pageUp",
            pagedown: "scroll:pageDown",
            wheelup: "scroll:lineUp",
            wheeldown: "scroll:lineDown",
            "ctrl+home": "scroll:top",
            "ctrl+end": "scroll:bottom",
            "ctrl+shift+c": "selection:copy",
            "cmd+c": "selection:copy",
            "shift+left": "selection:extendLeft",
            "shift+right": "selection:extendRight",
            "shift+up": "selection:extendUp",
            "shift+down": "selection:extendDown",
            "shift+home": "selection:extendLineStart",
            "shift+end": "selection:extendLineEnd"
        }
    },
    {
        context: "Help",
        bindings: {
            escape: "help:dismiss"
        }
    },
    ...[],
    {
        context: "Attachments",
        bindings: {
            right: "attachments:next",
            left: "attachments:previous",
            backspace: "attachments:remove",
            delete: "attachments:remove",
            down: "attachments:exit",
            escape: "attachments:exit"
        }
    },
    {
        context: "Footer",
        bindings: {
            up: "footer:up",
            "ctrl+p": "footer:up",
            down: "footer:down",
            "ctrl+n": "footer:down",
            right: "footer:next",
            left: "footer:previous",
            enter: "footer:openSelected",
            escape: "footer:clearSelection",
            x: "footer:close",
            ...{}
        }
    },
    {
        context: "AbovePrompt",
        bindings: {
            tab: "abovePrompt:next",
            right: "abovePrompt:next",
            "shift+tab": "abovePrompt:previous",
            left: "abovePrompt:previous",
            enter: "abovePrompt:press",
            space: "abovePrompt:press",
            escape: "abovePrompt:leave",
            up: "pane:scrollUp",
            down: "pane:scrollDown",
            pageup: "pane:pageUp",
            pagedown: "pane:pageDown",
            home: "pane:top",
            end: "pane:bottom"
        }
    },
    {
        context: "AbovePromptInput",
        bindings: {
            tab: "abovePrompt:next",
            down: "abovePrompt:next",
            "shift+tab": "abovePrompt:previous",
            up: "abovePrompt:previous",
            enter: "abovePrompt:press",
            escape: "abovePrompt:leave"
        }
    },
    {
        context: "AbovePromptSelect",
        bindings: {
            tab: "abovePrompt:next",
            "shift+tab": "abovePrompt:previous",
            down: "abovePrompt:highlightNext",
            up: "abovePrompt:highlightPrevious",
            enter: "abovePrompt:press",
            escape: "abovePrompt:leave"
        }
    },
    {
        context: "Pane",
        bindings: {
            tab: "abovePrompt:next",
            "shift+tab": "abovePrompt:previous",
            enter: "abovePrompt:press",
            escape: "abovePrompt:leave",
            up: "pane:scrollUp",
            down: "pane:scrollDown",
            pageup: "pane:pageUp",
            pagedown: "pane:pageDown",
            home: "pane:top",
            end: "pane:bottom",
            "ctrl+x left": "pane:grow",
            "ctrl+x up": "pane:grow",
            "ctrl+x right": "pane:shrink",
            "ctrl+x down": "pane:shrink",
            "ctrl+x x": "pane:close"
        }
    },
    {
        context: "PaneField",
        bindings: {
            "ctrl+x x": "pane:close"
        }
    },
    {
        context: "DiffDialog",
        bindings: {
            escape: "diff:dismiss",
            left: "diff:previousSource",
            right: "diff:nextSource",
            up: "diff:previousFile",
            down: "diff:nextFile",
            j: "diff:nextFile",
            k: "diff:previousFile",
            pageup: "scroll:pageUp",
            pagedown: "scroll:pageDown",
            space: "scroll:fullPageDown",
            "shift+space": "scroll:fullPageUp",
            b: "scroll:fullPageUp",
            g: "scroll:top",
            "shift+g": "scroll:bottom",
            home: "scroll:top",
            end: "scroll:bottom"
        }
    },
    {
        context: "ModelPicker",
        bindings: {
            left: "modelPicker:decreaseEffort",
            right: "modelPicker:increaseEffort",
            s: "modelPicker:thisSessionOnly"
        }
    },
    {
        context: "EffortSlider",
        bindings: {
            left: "effortSlider:decreaseEffort",
            right: "effortSlider:increaseEffort",
            tab: "effortSlider:toggleUltracode",
            s: "effortSlider:thisSessionOnly"
        }
    },
    {
        context: "Select",
        bindings: {
            up: "select:previous",
            down: "select:next",
            j: "select:next",
            k: "select:previous",
            "ctrl+n": "select:next",
            "ctrl+p": "select:previous",
            pageup: "select:pageUp",
            pagedown: "select:pageDown",
            home: "select:first",
            end: "select:last",
            enter: "select:accept",
            escape: "select:cancel"
        }
    },
    {
        context: "Plugin",
        bindings: {
            space: "plugin:toggle",
            i: "plugin:install",
            f: "plugin:favorite",
            ...{
                "ctrl+s": "plugin:cycleMarketplace"
            }
        }
    },
    {
        context: "Agents",
        bindings: {
            "ctrl+s": "agents:switchView",
            "ctrl+t": "agents:togglePin",
            "ctrl+f": "agents:find",
            "ctrl+r": "agents:rename",
            "ctrl+up": "agents:previousGroup",
            "meta+up": "agents:previousGroup",
            "ctrl+down": "agents:nextGroup",
            "meta+down": "agents:nextGroup",
            ...{}
        }
    }
];
function iQ(e) {
    let r = e.split("+");
    let n = {
        key: "",
        ctrl: false,
        alt: false,
        shift: false,
        meta: false,
        super: false
    };
    for (let s of r){
        let c = s.toLowerCase();
        switch(c){
            case "ctrl":
            case "control":
                n.ctrl = true;
                break;
            case "alt":
            case "opt":
            case "option":
                n.alt = true;
                break;
            case "shift":
                n.shift = true;
                break;
            case "meta":
                n.meta = true;
                break;
            case "cmd":
            case "command":
            case "super":
            case "win":
                n.super = true;
                break;
            case "esc":
                n.key = "escape";
                break;
            case "return":
                n.key = "enter";
                break;
            case "del":
                n.key = "delete";
                break;
            case "space":
                n.key = " ";
                break;
            case "↑":
                n.key = "up";
                break;
            case "↓":
                n.key = "down";
                break;
            case "←":
                n.key = "left";
                break;
            case "→":
                n.key = "right";
                break;
            default:
                n.key = c;
                break;
        }
    }
    return n;
}
function a5(e) {
    if (e === " ") {
        return [
            iQ("space")
        ];
    }
    return e.trim().split(/\s+/).map(iQ);
}
function Fe(e) {
    let r = [];
    if (e.ctrl) {
        r.push("ctrl");
    }
    if (e.alt) {
        r.push("alt");
    }
    if (e.shift) {
        r.push("shift");
    }
    if (e.meta) {
        r.push("meta");
    }
    if (e.super) {
        r.push("cmd");
    }
    let n = de(e.key);
    r.push(n);
    return r.join("+");
}
function de(key) {
    switch(key){
        case "escape":
            return "Esc";
        case " ":
            return "space";
        case "tab":
            return "tab";
        case "enter":
            return "Enter";
        case "backspace":
            return "Backspace";
        case "delete":
            return "Delete";
        case "up":
            return "↑";
        case "down":
            return "↓";
        case "left":
            return "←";
        case "right":
            return "→";
        case "pageup":
            return "PageUp";
        case "pagedown":
            return "PageDown";
        case "home":
            return "Home";
        case "end":
            return "End";
        default:
            return key;
    }
}
function fB(e) {
    return e.map(Fe).join(" ");
}
function Gpr(e, r = "linux") {
    let n = [];
    if (e.ctrl) {
        n.push("ctrl");
    }
    if (e.alt || e.meta) {
        n.push(r === "macos" ? "opt" : "alt");
    }
    if (e.shift) {
        n.push("shift");
    }
    if (e.super) {
        n.push(r === "macos" ? "cmd" : "super");
    }
    let s = de(e.key);
    n.push(s);
    return n.join("+");
}
function bce(e, r = "linux") {
    return e.map((n)=>Gpr(n, r)).join(" ");
}
function Sce(e) {
    let r = [];
    for (let n of e){
        for (let [s, c] of Object.entries(n.bindings)){
            r.push({
                chord: a5(s),
                action: c,
                context: n.context
            });
        }
    }
    return r;
}
const Z = [
    "messageSelector:up",
    "messageSelector:down",
    "messageSelector:top",
    "messageSelector:bottom",
    "messageSelector:select",
    "diff:viewDetails"
];
const je = {
    "messageSelector:up": "select:previous",
    "messageSelector:down": "select:next",
    "messageSelector:top": "select:first",
    "messageSelector:bottom": "select:last",
    "messageSelector:select": "select:accept",
    "diff:viewDetails": "select:accept"
};
function Q(e) {
    return Z.some((r)=>r === e);
}
function ge(e) {
    return e.map((r)=>({
            context: r.context,
            bindings: oo(r.bindings, (n)=>{
                if (n !== null && Q(n)) {
                    return je[n];
                }
                return n;
            })
        }));
}
const l5t = [
    "Global",
    "Chat",
    "Autocomplete",
    "Confirmation",
    "Help",
    "ProactivityMenu",
    "Transcript",
    "HistorySearch",
    "Task",
    "ThemePicker",
    "Settings",
    "Tabs",
    "Attachments",
    "Footer",
    "AbovePrompt",
    "AbovePromptInput",
    "AbovePromptSelect",
    "Pane",
    "PaneField",
    "MessageSelector",
    "DiffDialog",
    "DiffPanel",
    "FeedbackSurvey",
    "ModelPicker",
    "EffortSlider",
    "Select",
    "Plugin",
    "Scroll",
    "Agents"
];
const We = new Set(l5t);
function Els(e) {
    return We.has(e);
}
const kls = {
    Global: "Active everywhere, regardless of focus",
    Chat: "When the chat input is focused",
    Autocomplete: "When autocomplete menu is visible",
    Confirmation: "When a confirmation/permission dialog is shown",
    Help: "When the help overlay is open",
    ProactivityMenu: "When the proactivity dialog is open",
    Transcript: "When viewing the transcript",
    HistorySearch: "When searching command history (ctrl+r)",
    Task: "When a task/agent is running in the foreground",
    ThemePicker: "When the theme picker is open",
    Settings: "When the settings menu is open",
    Tabs: "When tab navigation is active",
    Attachments: "When navigating image attachments in a select dialog",
    Footer: "When footer indicators are focused",
    AbovePrompt: "When a plugin's panel above the prompt, or a button in it, has keyboard focus",
    AbovePromptInput: "When a plugin's input field above the prompt has keyboard focus",
    AbovePromptSelect: "When a plugin's select above the prompt has keyboard focus",
    Pane: "When a plugin's pane has keyboard focus",
    PaneField: "When an input field or select in a plugin's pane has keyboard focus",
    MessageSelector: "When the message selector (rewind) is open",
    DiffDialog: "When the diff dialog is open",
    DiffPanel: "When the diff sidebar panel is open",
    FeedbackSurvey: "When the session feedback survey has been typed over",
    ModelPicker: "When the model picker is open",
    EffortSlider: "When the effort slider is open",
    Select: "When a select/list component is focused",
    Plugin: "When the plugin dialog is open",
    Scroll: "When a scrollable view is focused (fullscreen layout)",
    Agents: "When the agents view (`claude agents`) is open"
};
const z0e = [
    "app:interrupt",
    "app:exit",
    "app:toggleTodos",
    "app:toggleTranscript",
    "app:toggleBrief",
    "app:toggleReplTab",
    "app:toggleDiffNoiseFilter",
    "app:diffFileListUp",
    "app:diffFileListDown",
    "app:toggleDiffPreSession",
    "app:cycleDiffBase",
    "app:toggleTerminal",
    "app:redraw",
    "app:openArtifact",
    "strip:jump1",
    "strip:jump2",
    "strip:jump3",
    "strip:jump4",
    "strip:jump5",
    "strip:jump6",
    "strip:jump7",
    "strip:jump8",
    "strip:jump9",
    "strip:next",
    "strip:previous",
    "strip:tabNext",
    "strip:tabPrevious",
    "strip:viewAll",
    "strip:toggle",
    "strip:new",
    "history:search",
    "history:previous",
    "history:next",
    "chat:cancel",
    "chat:killAgents",
    "chat:cycleMode",
    "chat:cycleProactivity",
    "chat:attentionUp",
    "chat:attentionDown",
    "chat:modelPicker",
    "chat:increaseEffort",
    "chat:decreaseEffort",
    "chat:fastMode",
    "chat:defaultToNewerModel",
    "chat:thinkingToggle",
    "chat:workflowKeywordToggle",
    "chat:submit",
    "chat:queueSubmit",
    "chat:sendNow",
    "chat:newline",
    "chat:undo",
    "chat:externalEditor",
    "chat:stash",
    "chat:imagePaste",
    "chat:clearInput",
    "chat:clearScreen",
    "autocomplete:accept",
    "autocomplete:dismiss",
    "autocomplete:previous",
    "autocomplete:next",
    "confirm:yes",
    "confirm:no",
    "confirm:previous",
    "confirm:next",
    "confirm:nextField",
    "confirm:previousField",
    "confirm:cycleMode",
    "confirm:toggle",
    "tabs:next",
    "tabs:previous",
    "transcript:toggleShowAll",
    "transcript:exit",
    "historySearch:next",
    "historySearch:accept",
    "historySearch:cancel",
    "historySearch:execute",
    "historySearch:cycleScope",
    "task:background",
    "theme:toggleSyntaxHighlighting",
    "theme:editCustom",
    "help:dismiss",
    "proactivityMenu:previousMode",
    "proactivityMenu:nextMode",
    "attachments:next",
    "attachments:previous",
    "attachments:remove",
    "attachments:exit",
    "footer:up",
    "footer:down",
    "footer:next",
    "footer:previous",
    "footer:openSelected",
    "footer:clearSelection",
    "footer:close",
    "footer:dismiss",
    "abovePrompt:toggle",
    "abovePrompt:focus",
    "abovePrompt:next",
    "abovePrompt:previous",
    "abovePrompt:press",
    "abovePrompt:leave",
    "abovePrompt:highlightNext",
    "abovePrompt:highlightPrevious",
    "pane:scrollUp",
    "pane:scrollDown",
    "pane:pageUp",
    "pane:pageDown",
    "pane:top",
    "pane:bottom",
    "pane:grow",
    "pane:shrink",
    "pane:close",
    "pane:next",
    "pane:previous",
    "diff:dismiss",
    "diff:previousSource",
    "diff:nextSource",
    "diff:back",
    "diff:previousFile",
    "diff:nextFile",
    "feedbackSurvey:bad",
    "feedbackSurvey:fine",
    "feedbackSurvey:good",
    "modelPicker:decreaseEffort",
    "modelPicker:increaseEffort",
    "modelPicker:thisSessionOnly",
    "effortSlider:decreaseEffort",
    "effortSlider:increaseEffort",
    "effortSlider:toggleUltracode",
    "effortSlider:thisSessionOnly",
    "select:next",
    "select:previous",
    "select:pageUp",
    "select:pageDown",
    "select:first",
    "select:last",
    "select:accept",
    "select:cancel",
    "plugin:toggle",
    "plugin:install",
    "plugin:favorite",
    "plugin:cycleMarketplace",
    "permission:toggleDebug",
    "settings:search",
    "settings:retry",
    "settings:periodDay",
    "settings:periodWeek",
    "settings:sortByTokens",
    "voice:pushToTalk",
    "scroll:pageUp",
    "scroll:pageDown",
    "scroll:lineUp",
    "scroll:lineDown",
    "scroll:top",
    "scroll:bottom",
    "scroll:halfPageUp",
    "scroll:halfPageDown",
    "scroll:fullPageUp",
    "scroll:fullPageDown",
    "selection:copy",
    "selection:clear",
    "selection:extendLeft",
    "selection:extendRight",
    "selection:extendUp",
    "selection:extendDown",
    "selection:extendLineStart",
    "selection:extendLineEnd",
    "agents:switchView",
    "agents:togglePin",
    "agents:find",
    "agents:nextGroup",
    "agents:previousGroup",
    "agents:rename",
    "agents:setGroup"
];
const HOn = [
    "FeedbackSurvey"
];
const pe = new Set(z0e);
function Tls(e) {
    return pe.has(e);
}
function F(e) {
    return pe.has(e) || e.startsWith("command:");
}
const ze = p(()=>u({
        context: U(l5t).describe("UI context where these bindings apply. Global bindings work everywhere."),
        bindings: ue(o().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'), Ue([
            U([
                ...z0e,
                ...Z
            ]),
            o().regex(/^command:[a-zA-Z0-9:\-_]+$/).describe('Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.'),
            Bm().describe("Set to null to unbind a default shortcut")
        ]).describe("Action to trigger, command to invoke, or null to unbind")).describe("Map of keystroke patterns to actions")
    }).describe("A block of keybindings for a specific context"));
const Bn = p(()=>u({
        $schema: o().optional().describe("JSON Schema URL for editor validation"),
        $docs: o().optional().describe("Documentation URL"),
        bindings: T(ze()).describe("Array of keybinding blocks by context")
    }).describe("Claude Code keybindings configuration. Customize keyboard shortcuts by context."));
const W0e = [
    {
        key: "ctrl+c",
        reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
        severity: "error"
    },
    {
        key: "ctrl+d",
        reason: "Cannot be rebound - used for exit (hardcoded)",
        severity: "error"
    },
    {
        key: "ctrl+m",
        reason: "Cannot be rebound - identical to Enter in terminals (both send CR)",
        severity: "error"
    },
    {
        key: "ctrl+[",
        reason: "Cannot be rebound - identical to Escape in terminals",
        severity: "error"
    },
    {
        key: "ctrl+i",
        reason: "Cannot be rebound - identical to Tab in terminals",
        severity: "error"
    },
    {
        key: "ctrl+h",
        reason: "Cannot be rebound - identical to Backspace in terminals",
        severity: "error"
    },
    {
        key: "capslock",
        reason: "Caps Lock is not delivered to terminal applications",
        severity: "error"
    }
];
const loo = [
    {
        key: "ctrl+z",
        reason: "Unix process suspend (SIGTSTP)",
        severity: "warning"
    },
    {
        key: "ctrl+\\",
        reason: "Terminal quit signal (SIGQUIT)",
        severity: "error"
    }
];
const coo = [
    {
        key: "cmd+c",
        reason: "macOS system copy",
        severity: "error"
    },
    {
        key: "cmd+v",
        reason: "macOS system paste",
        severity: "error"
    },
    {
        key: "cmd+x",
        reason: "macOS system cut",
        severity: "error"
    },
    {
        key: "cmd+q",
        reason: "macOS quit application",
        severity: "error"
    },
    {
        key: "cmd+w",
        reason: "macOS close window/tab",
        severity: "error"
    },
    {
        key: "cmd+tab",
        reason: "macOS app switcher",
        severity: "error"
    },
    {
        key: "cmd+space",
        reason: "macOS Spotlight",
        severity: "error"
    }
];
function fe() {
    let e = O();
    let r = [
        ...W0e,
        ...loo
    ];
    if (e === "macos") {
        r.push(...coo);
    }
    return r;
}
function oKe(e) {
    if (e === " ") {
        return "space";
    }
    return e.trim().split(/\s+/).map(Ye).join(" ");
}
const Ge = {
    esc: "escape",
    return: "enter",
    del: "delete",
    "↑": "up",
    "↓": "down",
    "←": "left",
    "→": "right",
    caps: "capslock",
    "caps-lock": "capslock",
    caps_lock: "capslock"
};
function Ye(e) {
    let r = e.split("+");
    let n = [];
    let s = "";
    for (let c of r){
        let y = c.trim().toLowerCase();
        if ([
            "ctrl",
            "control",
            "alt",
            "opt",
            "option",
            "meta",
            "cmd",
            "command",
            "super",
            "win",
            "shift"
        ].includes(y)) {
            if (y === "control") {
                n.push("ctrl");
            } else if (y === "option" || y === "opt" || y === "meta") {
                n.push("alt");
            } else if (y === "command" || y === "cmd" || y === "super" || y === "win") {
                n.push("cmd");
            } else {
                n.push(y);
            }
        } else {
            s = Ge[y] ?? y;
        }
    }
    n.sort();
    return [
        ...n,
        s
    ].join("+");
}
let ee;
function vls(e) {
    if (!ee) {
        let r = new Set(W0e.map((s)=>oKe(s.key)));
        let n = new Set;
        for (let s of pB){
            for (let [c, y] of Object.entries(s.bindings)){
                if (y !== null && r.has(oKe(c))) {
                    n.add(y);
                }
            }
        }
        ee = n;
    }
    return ee.has(e);
}
const He = p(()=>u({
        context: o(),
        bindings: ue(o(), o().nullable())
    }));
function Ve(e) {
    return He().safeParse(e).success;
}
function C(e) {
    return Array.isArray(e) && e.every(Ve);
}
const he = l5t;
const me = [
    {
        name: "ctrl",
        aliases: [
            "control"
        ]
    },
    {
        name: "alt",
        aliases: [
            "opt",
            "option"
        ]
    },
    {
        name: "shift"
    },
    {
        name: "meta"
    },
    {
        name: "cmd",
        aliases: [
            "command",
            "super",
            "win"
        ]
    }
];
const ye = [
    "ctrl",
    "alt",
    "shift",
    "meta",
    "super"
];
const be = 3;
const N = 80;
function Xe(e) {
    return he.includes(e);
}
function qe(e, r) {
    let n = e.trim();
    let s = e === " " ? [] : n.split(/\s+/);
    let c = e !== " " && e.split("+").some((K)=>!K.trim());
    let y = /\s\+|\+\s/.test(n) && s.some((K)=>iQ(K).key === "");
    if (c || y) {
        let K = _c(e, N);
        return {
            type: "parse_error",
            severity: "error",
            message: c ? `Empty key part in "${K}"` : `A space next to "+" splits "${K}" into separate presses, and one of them has no key`,
            key: e,
            suggestion: c ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"'
        };
    }
    let h = [];
    let v = [];
    let w = true;
    for (let K of s){
        let se = K.split("+");
        let De = se.findLastIndex((q)=>iQ(q).key !== "");
        let ae = iQ(K);
        let V = [];
        for (let [q, M] of se.entries()){
            if (q === De || iQ(M).key === "") {
                V.push(M);
                continue;
            }
            h.push(M);
            let J = mse(M.toLowerCase(), me);
            if (J === undefined) {
                w = false;
                continue;
            }
            let ce = iQ(J);
            if (ye.some((B)=>ae[B] && ce[B])) {
                continue;
            }
            V.push(J);
            for (let B of ye){
                ae[B] ||= ce[B];
            }
        }
        v.push(V.join("+"));
    }
    if (h.length === 0) {
        return null;
    }
    let x = D(h);
    let S = x.length > be + 1 ? be : x.length;
    let _ = x.slice(0, S).map((K)=>`"${_c(K, N)}"`);
    if (x.length > S) {
        _.push(`${x.length - S} more`);
    }
    let P = new Intl.ListFormat("en", {
        type: "conjunction"
    }).format(_);
    let I = new Intl.ListFormat("en", {
        type: "disjunction"
    }).format(me.map((K)=>K.name));
    let Ce = x.length === 1 ? "is not a modifier" : "are not modifiers";
    let Te = r ? ` in ${r}` : "";
    let Be = _c(e, N);
    let Ne = _c(fB(a5(e)), N);
    let oe = v.join(" ");
    return {
        type: "parse_error",
        severity: "error",
        message: `${P} ${Ce}, so "${Be}"${Te} applies to "${Ne}" instead`,
        key: e,
        suggestion: w && oe.length <= N ? `Did you mean "${oe}"?` : `Use ${I} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"`
    };
}
function Je(e, r) {
    let n = [];
    if (typeof e !== "object" || e === null) {
        n.push({
            type: "parse_error",
            severity: "error",
            message: `Keybinding block ${r + 1} is not an object`
        });
        return n;
    }
    let s = e;
    let s_context = s.context;
    let y;
    if (typeof s_context !== "string") {
        n.push({
            type: "parse_error",
            severity: "error",
            message: `Keybinding block ${r + 1} missing "context" field`
        });
    } else if (!Xe(s_context)) {
        n.push({
            type: "invalid_context",
            severity: "error",
            message: `Unknown context "${s_context}"`,
            context: s_context,
            suggestion: `Valid contexts: ${he.join(", ")}`
        });
    } else {
        y = s_context;
    }
    if (typeof s.bindings !== "object" || s.bindings === null) {
        n.push({
            type: "parse_error",
            severity: "error",
            message: `Keybinding block ${r + 1} missing "bindings" field`
        });
        return n;
    }
    let s_bindings = s.bindings;
    for (let [v, w] of Object.entries(s_bindings)){
        let x = qe(v, y);
        if (x) {
            x.context = y;
            n.push(x);
        }
        if (w !== null && typeof w !== "string") {
            n.push({
                type: "invalid_action",
                severity: "error",
                message: `Invalid action for "${v}": must be a string or null`,
                key: v,
                context: y
            });
        } else if (typeof w === "string" && w.startsWith("command:")) {
            if (!/^command:[a-zA-Z0-9:\-_]+$/.test(w)) {
                n.push({
                    type: "invalid_action",
                    severity: "warning",
                    message: `Invalid command binding "${w}" for "${v}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
                    key: v,
                    context: y,
                    action: w
                });
            }
            if (y && y !== "Chat") {
                n.push({
                    type: "invalid_action",
                    severity: "warning",
                    message: `Command binding "${w}" must be in "Chat" context, not "${y}"`,
                    key: v,
                    context: y,
                    action: w,
                    suggestion: 'Move this binding to a block with "context": "Chat"'
                });
            }
        } else if (typeof w === "string" && !F(w) && !Q(w)) {
            n.push({
                type: "invalid_action",
                severity: "error",
                message: `Unknown action "${w}" for "${v}"${y ? ` in ${y}` : ""} \u2014 this binding is ignored`,
                key: v,
                context: y,
                action: w,
                suggestion: Ze(w)
            });
        } else if (w === "voice:pushToTalk") {
            let S = a5(v)[0];
            if (S && !S.ctrl && !S.alt && !S.shift && !S.meta && !S.super && /^[a-z]$/.test(S.key)) {
                n.push({
                    type: "invalid_action",
                    severity: "warning",
                    message: `Binding "${v}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
                    key: v,
                    context: y,
                    action: w
                });
            }
        }
    }
    return n;
}
function Ze(e) {
    let r;
    let n = Infinity;
    for (let h of z0e){
        let v = en(e.toLowerCase(), h.toLowerCase());
        if (v < n) {
            n = v;
            r = h;
        }
    }
    if (r && n <= 2) {
        return `Did you mean "${r}"?`;
    }
    let s = Qe(e, ":");
    let c = z0e.filter((h)=>h.startsWith(`${s}:`));
    if (c.length > 0) {
        return `Valid "${s}:" actions: ${c.join(", ")}`;
    }
    return `Valid action namespaces: ${D(z0e.map((h)=>Qe(h, ":"))).map((h)=>`${h}:`).join(", ")}`;
}
function en(e, r) {
    let n = Array.from({
        length: r.length + 1
    }, (s, c)=>c);
    for(let s = 1; s <= e.length; s++){
        let c = [
            s
        ];
        for(let y = 1; y <= r.length; y++){
            let h = e[s - 1] === r[y - 1] ? 0 : 1;
            c[y] = Math.min((n[y] ?? 0) + 1, (c[y - 1] ?? 0) + 1, (n[y - 1] ?? 0) + h);
        }
        n = c;
    }
    return n[r.length] ?? 0;
}
function R(e) {
    let r = [];
    let n = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    let s;
    while((s = n.exec(e)) !== null){
        let c = s[1];
        if (!c) {
            continue;
        }
        let v = e.slice(0, s.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown";
        let w = /"([^"]+)"\s*:/g;
        let x = new Map;
        let S;
        while((S = w.exec(c)) !== null){
            let _ = S[1];
            if (!_) {
                continue;
            }
            let P = (x.get(_) ?? 0) + 1;
            x.set(_, P);
            if (P === 2) {
                r.push({
                    type: "duplicate",
                    severity: "warning",
                    message: `Duplicate key "${_}" in ${v} bindings`,
                    key: _,
                    context: v,
                    suggestion: "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored."
                });
            }
        }
    }
    return r;
}
function nn(e) {
    let r = [];
    if (!Array.isArray(e)) {
        r.push({
            type: "parse_error",
            severity: "error",
            message: "keybindings.json must contain an array",
            suggestion: "Wrap your bindings in [ ]"
        });
        return r;
    }
    for(let n = 0; n < e.length; n++){
        r.push(...Je(e[n], n));
    }
    return r;
}
function tn(e) {
    let r = [];
    let n = new Map;
    for (let s of e){
        let c = n.get(s.context) ?? new Map;
        n.set(s.context, c);
        for (let [y, h] of Object.entries(s.bindings)){
            let v = oKe(y);
            let w = c.get(v);
            if (w && w !== h) {
                r.push({
                    type: "duplicate",
                    severity: "warning",
                    message: `Duplicate binding "${y}" in ${s.context} context`,
                    key: y,
                    context: s.context,
                    action: h ?? "null (unbind)",
                    suggestion: `Previously bound to "${w}". Only the last binding will be used.`
                });
            }
            c.set(v, h ?? "null");
        }
    }
    return r;
}
function rn(e) {
    let r = [];
    let n = fe();
    for (let s of e){
        let c = fB(s.chord);
        let y = oKe(c);
        for (let h of n){
            if (oKe(h.key) === y) {
                r.push({
                    type: "reserved",
                    severity: h.severity,
                    message: `"${c}" may not work: ${h.reason}`,
                    key: c,
                    context: s.context,
                    action: s.action ?? undefined
                });
            }
        }
    }
    return r;
}
function on(e) {
    let r = [];
    for (let n of e){
        for (let [s, c] of Object.entries(n.bindings)){
            let chord = s.split(" ").map((h)=>iQ(h));
            r.push({
                chord,
                action: c,
                context: n.context
            });
        }
    }
    return r;
}
function W(e, r) {
    let n = [];
    n.push(...nn(e));
    if (C(e)) {
        n.push(...tn(e));
        let c = on(e);
        n.push(...rn(c));
    }
    let s = new Set;
    return n.filter((c)=>{
        let y = `${c.type}:${c.key}:${c.context}`;
        if (s.has(y)) {
            return false;
        }
        s.add(y);
        return true;
    });
}
function l5() {
    return k("tengu_keybinding_customization_release", true);
}
const stabilityThreshold = 500;
const pollInterval = 200;
function pn() {
    let e = {
        bindings: null,
        warmedFromBackend: false,
        warmAttempted: false,
        warnings: [],
        watcher: null,
        initialized: false,
        disposed: false,
        lastCustomBindingsLogDate: null,
        loggedShortcutFallbacks: new Set,
        actionFiredLoggedAt: new Map,
        changed: Oe(),
        [Symbol.dispose] () {
            e.disposed = true;
            if (e.watcher) {
                e.watcher.close();
                e.watcher = null;
            }
            e.changed.clear();
        }
    };
    return e;
}
const ET = pn();
function ne(e, user_binding_count) {
    let n = new Date().toISOString().slice(0, 10);
    if (e.lastCustomBindingsLogDate === n) {
        return;
    }
    e.lastCustomBindingsLogDate = n;
    i("tengu_custom_keybindings_loaded", {
        user_binding_count
    });
}
function c5t() {
    return join(ve(), "keybindings.json");
}
const doo = $e.state("keybindings");
function G() {
    return Sce(pB);
}
function Y(e) {
    return Sce(ge(e)).filter((r)=>r.action === null || F(r.action));
}
function te(e) {
    for (let r of e){
        t(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`, {
            level: "warn"
        });
    }
}
function E(e, r) {
    if (e?.suppressFeatureEvents) {
        return;
    }
    if (r === "ok") {
        g("keybinding_load_user_config");
    } else {
        m("keybinding_load_user_config", r);
    }
}
function ie() {
    return !l5() || br("keybindings");
}
function Als(e) {
    let r = G();
    if (ie()) {
        return r;
    }
    if (j() && e !== undefined) {
        return r;
    }
    try {
        let n = readFileSync(c5t(), "utf-8");
        let s = X(n);
        let c = typeof s === "object" && s !== null && "bindings" in s ? s.bindings : undefined;
        if (C(c)) {
            return [
                ...r,
                ...Y(c)
            ];
        }
        return r;
    } catch  {
        return r;
    }
}
async function xe(e, r, n) {
    let s = G();
    if (!l5() || br("keybindings")) {
        return {
            bindings: s,
            warnings: []
        };
    }
    let c = c5t();
    if (r) {
        let y = await r.read([
            doo
        ]);
        if (!y.ok) {
            let v = y.error;
            let w = gt(v);
            t(`[keybindings] Error loading ${c}: ${w}`);
            if (n?.suppressFeatureEvents) {
                f("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
            }
            E(n, "keybinding_config_parse_error");
            return {
                bindings: s,
                warnings: [
                    {
                        type: "parse_error",
                        severity: "error",
                        message: `Failed to parse keybindings.json: ${w}`
                    }
                ]
            };
        }
        let h = y.value.items[0];
        if (!h.found) {
            E(n, "ok");
            return {
                bindings: s,
                warnings: []
            };
        }
        return un(Buffer.from(h.value).toString("utf-8"), e, s, c, n);
    }
    try {
        let y = await readFile(c, "utf-8");
        let h = X(y);
        let v;
        if (typeof h === "object" && h !== null && "bindings" in h) {
            v = h.bindings;
        } else {
            t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array');
            E(n, "keybinding_config_invalid_format");
            return {
                bindings: s,
                warnings: [
                    {
                        type: "parse_error",
                        severity: "error",
                        message: 'keybindings.json must have a "bindings" array',
                        suggestion: 'Use format: { "bindings": [ ... ] }'
                    }
                ]
            };
        }
        if (!C(v)) {
            let P = !Array.isArray(v) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure";
            let I = !Array.isArray(v) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
            t(`[keybindings] Invalid keybindings.json: ${P}`);
            E(n, "keybinding_config_invalid_structure");
            return {
                bindings: s,
                warnings: [
                    {
                        type: "parse_error",
                        severity: "error",
                        message: P,
                        suggestion: I
                    }
                ]
            };
        }
        let w = Y(v);
        t(`[keybindings] Loaded ${w.length} user bindings from ${c}`);
        let x = [
            ...s,
            ...w
        ];
        ne(e, w.length);
        let _ = [
            ...R(y),
            ...W(v, x)
        ];
        if (_.length > 0) {
            t(`[keybindings] Found ${_.length} validation issue(s)`);
            te(_);
        }
        E(n, "ok");
        return {
            bindings: x,
            warnings: _
        };
    } catch (error) {
        if (z(error)) {
            E(n, "ok");
            return {
                bindings: s,
                warnings: []
            };
        }
        t(`[keybindings] Error loading ${c}: ${l(error)}`);
        E(n, "keybinding_config_parse_error");
        return {
            bindings: s,
            warnings: [
                {
                    type: "parse_error",
                    severity: "error",
                    message: `Failed to parse keybindings.json: ${l(error)}`
                }
            ]
        };
    }
}
function un(e, r, n, s, c) {
    try {
        let y = X(e);
        let h;
        if (typeof y === "object" && y !== null && "bindings" in y) {
            h = y.bindings;
        } else {
            t('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array');
            E(c, "keybinding_config_invalid_format");
            return {
                bindings: n,
                warnings: [
                    {
                        type: "parse_error",
                        severity: "error",
                        message: 'keybindings.json must have a "bindings" array',
                        suggestion: 'Use format: { "bindings": [ ... ] }'
                    }
                ]
            };
        }
        if (!C(h)) {
            let _ = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure";
            let P = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
            t(`[keybindings] Invalid keybindings.json: ${_}`);
            E(c, "keybinding_config_invalid_structure");
            return {
                bindings: n,
                warnings: [
                    {
                        type: "parse_error",
                        severity: "error",
                        message: _,
                        suggestion: P
                    }
                ]
            };
        }
        let v = Y(h);
        t(`[keybindings] Loaded ${v.length} user bindings from ${s}`);
        let w = [
            ...n,
            ...v
        ];
        ne(r, v.length);
        let S = [
            ...R(e),
            ...W(h, w)
        ];
        if (S.length > 0) {
            t(`[keybindings] Found ${S.length} validation issue(s)`);
            te(S);
        }
        E(c, "ok");
        return {
            bindings: w,
            warnings: S
        };
    } catch (error) {
        t(`[keybindings] Error loading ${s}: ${l(error)}`);
        E(c, "keybinding_config_parse_error");
        return {
            bindings: n,
            warnings: [
                {
                    type: "parse_error",
                    severity: "error",
                    message: `Failed to parse keybindings.json: ${l(error)}`
                }
            ]
        };
    }
}
async function Cls(e, r) {
    if (e.bindings) {
        return e.bindings;
    }
    if (e.warmAttempted) {
        return;
    }
    if (Ee()) {
        return;
    }
    if (ie()) {
        return;
    }
    let n = await xe(e, r, {
        suppressFeatureEvents: true
    });
    e.warmAttempted = true;
    if (n.warnings.length > 0) {
        return n.bindings;
    }
    if (!e.bindings) {
        e.bindings = n.bindings;
        e.warnings = [];
        e.warmedFromBackend = true;
        g("keybinding_load_user_config");
    }
    return e.bindings;
}
function Se(e) {
    if (!e.warmedFromBackend) {
        return false;
    }
    if (ie()) {
        e.bindings = null;
        e.warnings = [];
        e.warmedFromBackend = false;
        return true;
    }
    e.warmedFromBackend = false;
    return false;
}
function DOn(e) {
    if (e.bindings && !Se(e)) {
        return e.bindings;
    }
    return _At(e).bindings;
}
function _At(e) {
    if (e.bindings && !Se(e)) {
        return {
            bindings: e.bindings,
            warnings: e.warnings
        };
    }
    e.warmedFromBackend = false;
    let r = G();
    if (!l5() || br("keybindings")) {
        e.bindings = r;
        e.warnings = [];
        return {
            bindings: e.bindings,
            warnings: e.warnings
        };
    }
    let n = c5t();
    try {
        let s = readFileSync(n, "utf-8");
        let c = X(s);
        let y;
        if (typeof c === "object" && c !== null && "bindings" in c) {
            y = c.bindings;
        } else {
            m("keybinding_load_user_config", "keybinding_config_invalid_format");
            e.bindings = r;
            e.warnings = [
                {
                    type: "parse_error",
                    severity: "error",
                    message: 'keybindings.json must have a "bindings" array',
                    suggestion: 'Use format: { "bindings": [ ... ] }'
                }
            ];
            return {
                bindings: e.bindings,
                warnings: e.warnings
            };
        }
        if (!C(y)) {
            let message = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure";
            let x = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
            m("keybinding_load_user_config", "keybinding_config_invalid_structure");
            e.bindings = r;
            e.warnings = [
                {
                    type: "parse_error",
                    severity: "error",
                    message,
                    suggestion: x
                }
            ];
            return {
                bindings: e.bindings,
                warnings: e.warnings
            };
        }
        let h = Y(y);
        t(`[keybindings] Loaded ${h.length} user bindings from ${n}`);
        e.bindings = [
            ...r,
            ...h
        ];
        ne(e, h.length);
        let v = R(s);
        e.warnings = [
            ...v,
            ...W(y, e.bindings)
        ];
        if (e.warnings.length > 0) {
            t(`[keybindings] Found ${e.warnings.length} validation issue(s)`);
            te(e.warnings);
        }
        g("keybinding_load_user_config");
        return {
            bindings: e.bindings,
            warnings: e.warnings
        };
    } catch (error) {
        if (z(error)) {
            g("keybinding_load_user_config");
            e.bindings = r;
            e.warnings = [];
            return {
                bindings: e.bindings,
                warnings: e.warnings
            };
        }
        t(`[keybindings] Error loading ${n}: ${l(error)}`);
        m("keybinding_load_user_config", "keybinding_config_parse_error");
        e.bindings = r;
        e.warnings = [
            {
                type: "parse_error",
                severity: "error",
                message: `Failed to parse keybindings.json: ${l(error)}`
            }
        ];
        return {
            bindings: e.bindings,
            warnings: e.warnings
        };
    }
}
async function Rls(e) {
    if (e.initialized || e.disposed) {
        return;
    }
    if (!l5() || br("keybindings")) {
        t("[keybindings] Skipping file watcher - user customization disabled");
        return;
    }
    let r = c5t();
    let n = dirname(r);
    try {
        if (!(await stat(n)).isDirectory()) {
            t(`[keybindings] Not watching: ${n} is not a directory`);
            f("keybinding_watcher_init", "watch_dir_inaccessible");
            return;
        }
    } catch  {
        t(`[keybindings] Not watching: ${n} does not exist`);
        f("keybinding_watcher_init", "watch_dir_inaccessible");
        return;
    }
    e.initialized = true;
    t(`[keybindings] Watching for changes to ${r}`);
    e.watcher = Sw.watch(r, {
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold,
            pollInterval
        },
        ignorePermissionErrors: true,
        usePolling: true,
        interval: 2000,
        atomic: true
    });
    e.watcher.on("add", (s)=>ke(e, s));
    e.watcher.on("change", (s)=>ke(e, s));
    e.watcher.on("unlink", (s)=>fn(e, s));
    e.watcher.on("error", (s)=>t(`[keybindings] watcher error: ${l(s)}`, {
            level: "warn"
        }));
    St(e);
    g("keybinding_watcher_init");
}
async function ke(e, r) {
    t(`[keybindings] Detected change to ${r}`);
    try {
        let n = await xe(e);
        e.bindings = n.bindings;
        e.warnings = n.warnings;
        e.warmedFromBackend = false;
        e.changed.emit(n);
        g("keybinding_hot_reload");
    } catch (error) {
        t(`[keybindings] Error reloading: ${l(error)}`);
        f("keybinding_hot_reload", "keybinding_reload_failed");
    }
}
function fn(e, r) {
    t(`[keybindings] Detected deletion of ${r}`);
    let n = G();
    e.bindings = n;
    e.warnings = [];
    e.warmedFromBackend = false;
    e.changed.emit({
        bindings: n,
        warnings: []
    });
}
const re = {
    "†": "t"
};
function _e(e) {
    return Object.hasOwn(re, e);
}
const Vpr = {
    π: "alt+p",
    ø: "alt+o"
};
function uoo(e) {
    return Object.hasOwn(Vpr, e);
}
function D$() {
    let e = O();
    if (e === "macos") {
        return e;
    }
    if (a.LC_TERMINAL === "iTerm2" || a.TERM_PROGRAM === "Apple_Terminal" || a.TERM_PROGRAM === "iTerm.app") {
        return "macos";
    }
    return e;
}
const mn = {
    escape: "escape",
    return: "enter",
    tab: "tab",
    backspace: "backspace",
    delete: "delete",
    up: "up",
    down: "down",
    left: "left",
    right: "right",
    pageup: "pageup",
    pagedown: "pagedown",
    wheelup: "wheelup",
    wheeldown: "wheeldown",
    home: "home",
    end: "end"
};
function d5t(e, r, n) {
    let s = false;
    let c;
    for(let y = 0; y < n.length; y++){
        let h = n[y];
        if (!h || h.context !== r || h.action !== e) {
            continue;
        }
        s = true;
        if (!Pe(n, y)) {
            c = h.chord;
        }
    }
    if (c) {
        return c;
    }
    if (s) {
        return null;
    }
}
function poo(e, r, n) {
    let s = [];
    n.forEach((c, y)=>{
        if (c.context === r && c.action === e && !Pe(n, y)) {
            s.push(c.chord);
        }
    });
    return s;
}
function LOn(e, r, n, s) {
    let c;
    let y = -1;
    for (let h of poo(e, r, n)){
        let v = s.some((P)=>P.context === r && P.action === e && H(P.chord, h));
        let w = h.length === 1 ? h[0] : undefined;
        let x = w !== undefined && !w.ctrl && !w.alt && !w.meta && !w.super;
        let S = 0;
        if (x && yn.has(w.key)) {
            S = 2;
        } else if (x && w.key.length === 1) {
            S = 1;
        }
        let _ = (v ? 0 : 3) + S;
        if (_ > y) {
            c = h;
            y = _;
        }
    }
    return c;
}
var yn = new Set([
    "up",
    "down",
    "left",
    "right",
    "enter",
    "escape",
    "tab",
    " ",
    "pageup",
    "pagedown",
    "home",
    "end",
    "backspace",
    "delete"
]);
function Pe(e, r) {
    let n = e[r];
    if (!n) {
        return false;
    }
    for(let s = r + 1; s < e.length; s++){
        let c = e[s];
        if (c && c.context === n.context && H(c.chord, n.chord)) {
            return true;
        }
    }
    return false;
}
function foo(e, r, n) {
    let s = null;
    for (let c of n){
        if (c.context !== r || c.chord.length !== 1) {
            continue;
        }
        let y = c.chord[0];
        if (y && G0e(y, e)) {
            s = c.action;
        }
    }
    return s;
}
function NOn(e, r, n) {
    let s;
    for (let c of n){
        if (c.chord.length !== 1 || !r.includes(c.context)) {
            continue;
        }
        let y = c.chord[0];
        if (y && G0e(y, e)) {
            s = c.action;
        }
    }
    return s;
}
function xls(e, r, n) {
    let s = new Set;
    for (let c of n){
        let y = c.chord[0];
        if (c.context !== e || c.chord.length !== 1 || c.action === null || !y) {
            continue;
        }
        let h = NOn(y, [
            e,
            "Global"
        ], n);
        let v = NOn(y, [
            r,
            "Global"
        ], n);
        if (h === c.action && v && v !== h) {
            s.add(v);
        }
    }
    return s;
}
function H(e, r) {
    if (e.length !== r.length) {
        return false;
    }
    for(let n = 0; n < e.length; n++){
        let s = e[n];
        let c = r[n];
        if (!s || !c || !G0e(s, c)) {
            return false;
        }
    }
    return true;
}
function sKe(e, r, n) {
    let s = d5t(e, r, n);
    if (s) {
        return bce(s, D$());
    }
    return s;
}
function Vye(e) {
    let r = e.name === "enter" ? `
` : e.key;
    let e_meta = e.meta;
    if (O() === "macos" && !e.meta && !e.ctrl && _e(r)) {
        r = re[r];
        e_meta = true;
    }
    let s = mn[e.name] ?? (r.length === 1 ? r.toLowerCase() : null);
    if (!s) {
        return null;
    }
    let shift = !(e.shift && r.length === 1 && e.name.length === 1 && r !== e.name && r.toLowerCase() === r.toUpperCase()) && (e.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
    return {
        key: s,
        ctrl: e.ctrl,
        alt: e_meta,
        shift,
        meta: e_meta,
        super: e.superKey
    };
}
function G0e(e, r) {
    return e.key === r.key && e.ctrl === r.ctrl && e.shift === r.shift && (e.alt || e.meta) === (r.alt || r.meta) && e.super === r.super;
}
function Ke(e, r) {
    if (e.length >= r.chord.length) {
        return false;
    }
    for(let n = 0; n < e.length; n++){
        let s = e[n];
        let c = r.chord[n];
        if (!s || !c) {
            return false;
        }
        if (!G0e(s, c)) {
            return false;
        }
    }
    return true;
}
function iKe(e, r, n, s) {
    if (e.name === "escape" && s !== null) {
        return {
            type: "chord_cancelled"
        };
    }
    let c = Vye(e);
    if (!c) {
        if (s !== null) {
            return {
                type: "chord_cancelled"
            };
        }
        return {
            type: "none"
        };
    }
    let y = s ? [
        ...s,
        c
    ] : [
        c
    ];
    let h = null;
    let v;
    for (let w of n){
        if (!r.includes(w.context)) {
            continue;
        }
        if (w.chord.length > y.length) {
            if (Ke(y, w)) {
                h ??= new Map;
                h.set(fB(w.chord), w.action);
            }
        } else if (H(y, w.chord)) {
            v = w;
        }
    }
    if (h !== null) {
        for (let w of h.values()){
            if (w !== null) {
                return {
                    type: "chord_started",
                    pending: y
                };
            }
        }
    }
    if (v) {
        if (v.action === null) {
            return {
                type: "unbound"
            };
        }
        return {
            type: "match",
            action: v.action
        };
    }
    if (s !== null) {
        return {
            type: "chord_cancelled"
        };
    }
    return {
        type: "none"
    };
}
function qpr(e, r, n, s) {
    if (e.name === "escape" && s !== null) {
        return {
            type: "chord_cancelled"
        };
    }
    let c = Vye(e);
    if (!c) {
        if (s !== null) {
            return {
                type: "chord_cancelled"
            };
        }
        return {
            type: "none"
        };
    }
    let y = s ? [
        ...s,
        c
    ] : [
        c
    ];
    let h = new Set(r);
    let v = new Map;
    let w = new Map;
    for (let x of n){
        if (!h.has(x.context)) {
            continue;
        }
        if (x.chord.length > y.length) {
            if (Ke(y, x)) {
                v.set(fB(x.chord), x.action);
            }
        } else if (H(y, x.chord)) {
            w.set(x.context, x);
        }
    }
    for (let x of v.values()){
        if (x !== null) {
            return {
                type: "chord_started",
                pending: y
            };
        }
    }
    for (let x of r){
        let S = w.get(x);
        if (S) {
            if (S.action === null) {
                return {
                    type: "unbound"
                };
            }
            return {
                type: "match",
                action: S.action
            };
        }
    }
    if (s !== null) {
        return {
            type: "chord_cancelled"
        };
    }
    return {
        type: "none"
    };
}
const bn = new Set(z0e);
function Ae(e) {
    if (e.startsWith("command:")) {
        return b("command:custom");
    }
    if (bn.has(e)) {
        return kn(e);
    }
    return b("unknown");
}
const hn = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function wn(e) {
    if (hn.test(e)) {
        return kn(e);
    }
    return b("invalid");
}
const vn = 1000;
function u5t(e) {
    let r = Date.now();
    let ET_actionFiredLoggedAt = ET.actionFiredLoggedAt;
    let s = ET_actionFiredLoggedAt.get(e);
    if (s !== undefined && r - s < vn) {
        return;
    }
    ET_actionFiredLoggedAt.set(e, r);
    i("tengu_keybinding_fired", {
        action_id: Ae(e)
    });
}
function got(e, r, n, s) {
    i("tengu_keybinding_fallback_used", {
        action: Ae(e),
        context: d(r),
        fallback: wn(n),
        reason: d(s)
    });
}
export { pB, W0e, loo, coo, oKe, vls, l5t, Els, kls, z0e, HOn, Tls, iQ, a5, fB, Gpr, bce, Sce, l5, ET, c5t, doo, Als, Cls, DOn, _At, Rls, Vpr, uoo, D$, d5t, poo, LOn, foo, NOn, xls, sKe, Vye, G0e, iKe, qpr, u5t, got };
