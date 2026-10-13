import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { vn, wl, KYe } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { lpe } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { o, oe, u, ue } from "/$bunfs/root/chunk-smx21d0k.js";
const l = p(()=>u({
        server_instructions: o().optional(),
        server_instructions_by_server: ue(o(), o()).optional(),
        tools: ue(o(), o()).optional(),
        search_hints: ue(o(), o()).optional(),
        param_descriptions: ue(o(), ue(o(), o())).optional(),
        prompts: ue(o(), o()).optional(),
        skills: ue(o(), o()).optional()
    }));
const g = p(()=>ue(o(), oe()));
function yme(e) {
    if (!e.pluginSource) {
        return;
    }
    let { name, marketplace } = vn(e.pluginSource);
    if (!wl(marketplace) && !KYe(name, marketplace)) {
        return;
    }
    let c = k("tengu_official_plugin_prompt_overrides", {});
    let i = g().safeParse(c);
    if (!i.success) {
        t("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", {
            level: "error"
        });
        return;
    }
    let f = i.data[name];
    if (f === undefined) {
        return;
    }
    let d = l().safeParse(f);
    if (!d.success) {
        t(`tengu_official_plugin_prompt_overrides: entry for '${name}' failed schema (${d.error.issues[0]?.message}); using baked-in text`, {
            level: "error"
        });
        return;
    }
    let d_data = d.data;
    if (Object.keys(d_data).length === 0) {
        return;
    }
    return {
        ...d_data,
        server_instructions_by_server: a(d_data.server_instructions_by_server),
        tools: a(d_data.tools),
        search_hints: a(d_data.search_hints),
        param_descriptions: a(d_data.param_descriptions),
        prompts: a(d_data.prompts),
        skills: a(d_data.skills)
    };
}
function a(e) {
    if (e === undefined) {
        return;
    }
    let r = Object.create(null);
    return Object.assign(r, e);
}
function Vgn(e, r) {
    if (!e) {
        return;
    }
    let e_server_instructions_by_server = e.server_instructions_by_server;
    if (e_server_instructions_by_server) {
        let c = lpe(r);
        let i = c && e_server_instructions_by_server[c.serverName];
        if (i !== undefined) {
            return i;
        }
    }
    return e.server_instructions;
}
function qgn(e, r) {
    if (!r || !e.properties) {
        return e;
    }
    let properties = {
        ...e.properties
    };
    let c = false;
    for (let [i, description] of Object.entries(r)){
        let d = properties[i];
        if (d !== null && typeof d === "object") {
            properties[i] = {
                ...d,
                description
            };
            c = true;
        }
    }
    if (!c) {
        return e;
    }
    return {
        ...e,
        properties
    };
}
export { yme, Vgn, qgn };
