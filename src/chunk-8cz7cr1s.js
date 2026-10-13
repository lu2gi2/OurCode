import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { sMe, z6, WG, bQn, SQn } from "/$bunfs/root/chunk-5hp2pp9y.js";
const rMe = {
    accepted: "Allowed",
    declined: "Not allowed",
    unset: "Not asked yet"
};
const t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)";
const o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) — remove it there to re-enable";
function xWt() {
    if (bQn() === "user") {
        return o;
    }
    return t;
}
function j_n(e) {
    return z6() !== "unset" || SQn() || e;
}
function W_n() {
    return z6() === "accepted" || SQn();
}
async function z_n(e) {
    if (e === "accepted" && WG()) {
        return "forbidden";
    }
    let n = e === "accepted" ? "accepted" : z6() === "accepted" ? "revoked" : "declined";
    if (!await sMe(e)) {
        return "not_saved";
    }
    i("tengu_served_unattended_consent", {
        action: d(n),
        surface: b("cli")
    });
    return "saved";
}
export { rMe, xWt, j_n, W_n, z_n };
