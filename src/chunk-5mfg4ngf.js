import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
const ka = "claude-in-chrome";
const Gjn = "javascript_tool";
function zE(e) {
    return In(e) === ka;
}
const t = "--claude-in-chrome-mcp";
function swo(e) {
    if (e.type !== undefined && e.type !== "stdio") {
        return false;
    }
    return (e.command?.includes(t) ?? false) || (e.args?.some((o)=>o.includes(t)) ?? false);
}
const FCs = [
    "file_upload",
    "browser_batch"
];
const Vjn = [
    Gjn,
    "read_page",
    "find",
    "form_input",
    "computer",
    "browser_batch",
    "navigate",
    "resize_window",
    "gif_creator",
    "upload_image",
    "get_page_text",
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "read_console_messages",
    "read_network_requests",
    "shortcuts_list",
    "shortcuts_execute",
    "file_upload",
    "switch_browser",
    "list_connected_browsers",
    "select_browser"
];
const qjn = "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.";
function PSe() {
    return {
        type: "stdio",
        command: process.execPath,
        args: [
            t
        ],
        scope: "dynamic"
    };
}
export { ka, Gjn, zE, swo, FCs, Vjn, qjn, PSe };
