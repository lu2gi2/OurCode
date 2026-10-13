import { ute } from "/$bunfs/root/chunk-f57bzzed.js";
import { OD } from "/$bunfs/root/chunk-fv3gxsmx.js";
import { fJ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
const a = {
    navigate: "navigate",
    read_page: "read the page",
    get_page_text: "extract page text",
    find: "find an element",
    form_input: "fill in a form field",
    javascript_tool: "run JavaScript",
    read_console_messages: "read console messages",
    read_network_requests: "read network requests",
    upload_image: "upload an image",
    file_upload: "upload a file",
    select_browser: "select a browser",
    gif_creator: "record a GIF of the page",
    shortcuts_execute: "run a saved browser shortcut",
    tabs_create_mcp: "open a new browser tab"
};
const i = {
    screenshot: "take a screenshot",
    left_click: "click",
    right_click: "right-click",
    middle_click: "middle-click",
    double_click: "double-click",
    triple_click: "triple-click",
    type: "type text",
    key: "press keys",
    hold_key: "hold a key",
    scroll: "scroll",
    scroll_to: "scroll to an element",
    left_click_drag: "drag",
    zoom: "zoom in",
    hover: "hover",
    mouse_move: "move the mouse",
    left_mouse_down: "press the mouse button",
    left_mouse_up: "release the mouse button",
    cursor_position: "read the cursor position",
    wait: "wait"
};
const c = 4;
function l(o) {
    let e = o.slice(0, c);
    let r = o.length - e.length;
    if (r > 0) {
        e.push(`${r} more`);
    }
    if (e.length === 1) {
        return e[0] ?? "";
    }
    if (e.length === 2) {
        return `${e[0]} and ${e[1]}`;
    }
    return `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
function u(o) {
    if (!Array.isArray(o.actions)) {
        return [];
    }
    let e = new Set;
    let r = [];
    for (let t of o.actions){
        if (!L(t) || typeof t.name !== "string") {
            continue;
        }
        let n = L(t.input) ? t.input : {};
        if (t.name === "browser_batch" || ute.has(t.name) && fJ(t.name, n)) {
            continue;
        }
        let s = $Bt(t.name, n);
        if (!e.has(s)) {
            e.add(s);
            r.push(s);
        }
    }
    return r;
}
function $Bt(o, e) {
    let r = o.startsWith(OD) ? o.slice(OD.length) : o;
    if (r === "computer") {
        let t = typeof e.action === "string" ? e.action : undefined;
        if (t && i[t]) {
            return i[t];
        }
        return "use the browser";
    }
    if (r === "browser_batch") {
        let t = u(e);
        if (t.length > 0) {
            return l(t);
        }
        return "use the browser";
    }
    if (r === "tabs_context_mcp") {
        if (e.createIfEmpty) {
            return "create a browser window and read your tabs";
        }
        return "read your browser tabs";
    }
    return a[r] ?? "use the browser";
}
export { $Bt };
