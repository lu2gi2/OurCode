import { cp } from "/$bunfs/root/chunk-xb9cceab.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
const R = "confirm_repository_trust";
const lgt = "request_computer_folder";
const kFt = "list_computer_folders";
function a(e, t) {
    return e === `mcp__${cp}__${t}`;
}
function $Ie(e) {
    return a(e, R);
}
function vun(e) {
    return a(e, lgt);
}
function uFo(e) {
    return a(e, kFt);
}
function Eun(e) {
    return {
        subtype: e.subtype,
        tool_name: e.tool_name,
        input: e.input,
        tool_use_id: e.tool_use_id,
        ...e.mcp_server !== undefined && {
            mcp_server: e.mcp_server
        },
        ...e.title !== undefined && {
            title: e.title
        },
        ...e.display_name !== undefined && {
            display_name: e.display_name
        },
        ...e.description !== undefined && {
            description: e.description
        },
        ...e.agent_id !== undefined && {
            agent_id: e.agent_id
        },
        suppress_always_allow_rule: true,
        default_to_no: true,
        requires_user_interaction: true
    };
}
const T = "config:repo-trusted";
const c = "config:no-git-repo";
const y = "config:repo-trust-declined";
function S(tags) {
    let t = new Set(Array.isArray(tags) ? tags.filter((r)=>typeof r === "string") : []);
    if (t.has(T)) {
        return "trusted";
    }
    if (t.has(c)) {
        return "no_repository";
    }
    if (t.has(y)) {
        return "declined";
    }
    return "not_marked";
}
function MLr(e) {
    return S(e.tags);
}
function pFo(e) {
    return e === "not_marked" || e === "declined";
}
function kun(e, t) {
    if (e === "not_marked" && !t) {
        return undefined;
    }
    return e;
}
function fFo(e) {
    return Ni[`repository_trust.state.${e}`];
}
const m = new RegExp(`^(?:<tool_use_error>)?\\s*${lgt}: \\[repository_trust_(required|declined|unavailable)\\]`);
function E(e) {
    return e === "required" || e === "declined" || e === "unavailable";
}
function mFo(e, t) {
    if (!vun(e)) {
        return;
    }
    let r = Array.isArray(t) ? t[0] : t;
    let o = typeof r === "string" ? r : typeof r === "object" && r !== null && "text" in r && typeof r.text === "string" ? r.text : "";
    let n = m.exec(o)?.[1];
    if (E(n)) {
        return n;
    }
}
const TFt = "served-calls-unattested";
const gFo = "served-calls-unattested-untrusted-repo";
const g = 30000;
function hFo({ read, initial, now = Date.now }) {
    let o;
    let n;
    let s;
    let u;
    let p = Oe();
    let _ = (i)=>{
        let d = i.then((l)=>{
            n = now();
            if (l !== o) {
                o = l;
                p.emit();
            }
        }, ()=>{
            n = now();
        }).catch(()=>{}).then(()=>{
            if (s === d) {
                s = undefined;
            }
            return o;
        });
        s = d;
        return d;
    };
    let f = ()=>_(Promise.resolve().then(read));
    if (initial !== undefined) {
        _(initial);
    }
    return {
        current: ()=>o,
        refresh: (i)=>{
            if (s !== undefined) {
                if (i?.force !== true) {
                    return s;
                }
                u ??= s.then(()=>{
                    u = undefined;
                    return f();
                });
                return u;
            }
            if (i?.force !== true && n !== undefined && now() - n < g) {
                return Promise.resolve(o);
            }
            return f();
        },
        onChanged: (i)=>p.subscribe(i)
    };
}
export { lgt, kFt, $Ie, vun, uFo, Eun, MLr, pFo, kun, fFo, mFo, TFt, gFo, hFo };
