import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { fe, ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { nIt, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { mW, m4 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { YW, ZFn } from "/$bunfs/root/chunk-pjqd7qee.js";
async function BWe() {
    let o = ft();
    let n = [];
    let r = m4();
    for (let [e, i] of Object.entries(r)){
        if (mW(e)) {
            continue;
        }
        if (e.includes("@") && i) {
            n.push(e);
        }
    }
    if (o.enabledPlugins) {
        for (let [e, i] of Object.entries(o.enabledPlugins)){
            if (!e.includes("@")) {
                continue;
            }
            let c = mW(e) ? ZFn(e) : i;
            let s = n.indexOf(e);
            if (c) {
                if (s === -1) {
                    n.push(e);
                }
            } else if (s !== -1) {
                n.splice(s, 1);
            }
        }
    }
    return n;
}
function cK() {
    let o = new Map;
    let n = m4();
    for (let [e, i] of Object.entries(n)){
        if (!e.includes("@")) {
            continue;
        }
        if (mW(e)) {
            continue;
        }
        if (i === true) {
            o.set(e, "flag");
        } else if (i === false) {
            o.delete(e);
        }
    }
    let r = [
        {
            scope: "managed",
            source: "policySettings"
        },
        {
            scope: "user",
            source: "userSettings"
        },
        {
            scope: "project",
            source: "projectSettings"
        },
        {
            scope: "local",
            source: "localSettings"
        },
        {
            scope: "flag",
            source: "flagSettings"
        }
    ];
    for (let { scope, source } of r){
        let c = fe(source);
        if (!c?.enabledPlugins) {
            continue;
        }
        for (let [s, u] of Object.entries(c.enabledPlugins)){
            if (!s.includes("@")) {
                continue;
            }
            if (s in n && n[s] !== u) {
                t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${source} (${u})`);
            }
            if (!YW.includes(source) && mW(s)) {
                continue;
            }
            if (u === true) {
                o.set(s, scope);
            } else if (u === false) {
                o.delete(s);
            }
        }
    }
    t(`Found ${o.size} enabled plugins with scopes: ${Array.from(o.entries()).map(([e, i])=>`${e}(${i})`).join(", ")}`);
    return o;
}
function J1t(o, n) {
    let r = o.get(n);
    if (r !== undefined || !nIt(n)) {
        return r;
    }
    let e = _r(n);
    for (let [i, c] of o){
        if (_r(i) === e) {
            return c;
        }
    }
}
export { BWe, cK, J1t };
