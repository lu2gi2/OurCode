import { pgn, fgn } from "/$bunfs/root/chunk-q2exc16c.js";
const l = /^[CDG][A-Z0-9]{6,}$/;
function p1r(e) {
    let n = e.replace(/^#/, "");
    if (l.test(n)) {
        return `https://slack.com/app_redirect?channel=${n}`;
    }
    return null;
}
const t = new Set([
    "slack_send_message",
    "slack_post_message"
]);
const f1r = "mcp-slack-send";
function cgn(e) {
    return t.has(e);
}
function kzo(e) {
    let n = e.channel_id ?? e.channel;
    if (typeof n !== "string") {
        return null;
    }
    let r = pgn(n);
    if (!r) {
        return null;
    }
    return {
        label: `#${r.replace(/^#/, "")}`,
        url: p1r(n)
    };
}
function dgn() {
    return {
        uiTableKey: f1r,
        userFacingName () {
            return "Slacked";
        },
        renderToolUseMessage (e, n) {
            if (n.verbose) {
                return fgn(e, n);
            }
            return "";
        }
    };
}
export { p1r, f1r, cgn, kzo, dgn };
