import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { qo } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Lr } from "/$bunfs/root/chunk-223dyewd.js";
import { Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ef } from "/$bunfs/root/chunk-gr4a0fky.js";
import { huo } from "/$bunfs/root/chunk-tf8026s8.js";
import { Xd, QVt, ZVt, iv, Ewt } from "/$bunfs/root/chunk-kasbfbhj.js";
const g = {
    env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
    "unknown-model": "default for an unrecognized model",
    "model-default": "default for this model",
    settings: "from settings"
};
function w(mainLoopModel, autoCompactWindow) {
    let o = Xd(mainLoopModel);
    let { window, configured, source } = iv(o, autoCompactWindow);
    let r = configured > window ? ` \xB7 capped to ${Lr(window)} by model` : "";
    let d = source === "auto" ? "auto" : source === "experiment" || source === "clientdata" ? `auto (${Lr(configured)} tokens)${r}` : `${Lr(configured)} tokens (${g[source]})${r}`;
    let e = [
        `Auto-compact window for ${qo(o.settingsKey)}: ${d}`
    ];
    if (!ef()) {
        e.push("Auto-compact is currently disabled (see /config)");
    }
    e.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window.");
    e.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.");
    if (Ewt(source)) {
        e.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
    }
    return e.join(`
`);
}
async function kWt(a, n) {
    let o = Xd(n.options.mainLoopModel);
    if (iv(o, undefined).source === "env") {
        return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
    }
    let s = a.trim().toLowerCase();
    let autoCompactWindow = s === "reset" || s === "unset" || s === "default" ? "auto" : ZVt(s);
    if (autoCompactWindow === undefined) {
        return `Couldn't parse '${a}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
    }
    let r = autoCompactWindow === "auto" ? undefined : autoCompactWindow;
    let { error } = await Tn("userSettings", huo(o.model, {
        autoCompactWindow
    }, {
        autoCompactWindow: r
    }), undefined, n.storageV5);
    if (error) {
        return `Couldn't save setting: ${error.message}`;
    }
    let { window, configured, source } = iv(o, QVt());
    let p = (source === "settings" ? configured : undefined) !== r;
    n.onQueryEvent?.({
        type: "apply_flag_settings",
        settings: {
            autoCompactWindow: null
        }
    });
    i("tengu_autocompact_command", {
        action: b(autoCompactWindow === "auto" ? "auto" : "set"),
        ...r !== undefined && {
            tokens: r
        }
    });
    let m = `Auto-compact window for ${qo(o.settingsKey)}`;
    if (autoCompactWindow === "auto") {
        if (p) {
            return `${m} set to auto in settings, but a higher-priority override is active (${Lr(window)} tokens)`;
        }
        return `${m} set to auto`;
    }
    let c = "";
    if (p) {
        c = `, but a higher-priority override is active (${Lr(window)} tokens)`;
    } else if (window < autoCompactWindow) {
        c = ` (capped to model limit of ${Lr(window)})`;
    }
    return `${m} set to ${Lr(autoCompactWindow)} tokens${c}`;
}
const Cjs = async (a, n)=>{
    let o = a.trim();
    if (!o) {
        return {
            type: "text",
            value: w(n.options.mainLoopModel, n.options.autoCompactWindow)
        };
    }
    return {
        type: "text",
        value: await kWt(o, n)
    };
};
export { kWt, Cjs };
