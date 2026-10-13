import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _Pe, K1 } from "/$bunfs/root/chunk-x47nahfr.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Tn, TP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { yde } from "/$bunfs/root/chunk-gr4a0fky.js";
function LWt() {
    return TP("feedbackDrafts")[0] ?? "notify";
}
function kGr() {
    if (yde() !== null) {
        return false;
    }
    if (_Pe()) {
        return false;
    }
    if (K1()) {
        return false;
    }
    if (Ie() !== "firstParty") {
        return false;
    }
    let a_CLAUDE_CODE_SEND_FEEDBACK = a.CLAUDE_CODE_SEND_FEEDBACK;
    if (a_CLAUDE_CODE_SEND_FEEDBACK === false) {
        return false;
    }
    if (a_CLAUDE_CODE_SEND_FEEDBACK === true) {
        return k("tengu_juniper_relay", false);
    }
    return k("tengu_juniper_relay", false);
}
function zG() {
    return LWt() !== "off" && kGr();
}
function q_n(feedbackDrafts, { storageV5, via }) {
    let n = j() && storageV5 !== undefined ? Tn("userSettings", {
        feedbackDrafts
    }, undefined, storageV5) : Tn("userSettings", {
        feedbackDrafts
    });
    i("tengu_feedback_drafts_setting_changed", {
        value: d(feedbackDrafts),
        via: d(via)
    });
    return n;
}
export { LWt, kGr, zG, q_n };
