import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Qi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ht, Xt, nkr } from "/$bunfs/root/chunk-6dwnw6av.js";
import { H4o, Q2r, D4o } from "/$bunfs/root/chunk-p77dbme5.js";
import { u_ } from "/$bunfs/root/chunk-4r6b8efh.js";
const I = /AndroidManifest\.xml|<manifest xmlns:android=/;
const v = /com\.android\.(application|library|tools\.build)/;
const y = /\bimport android\./;
const E = new RegExp(`${String.raw`(?:^|[;&|(]\s*)(?:(?:\w+=\S*|sudo|time|env)\s+)*(?:\S*[\\/])?(?:` + [
    String.raw`adb(?:\.exe)?\s`,
    String.raw`emulator(?:\.exe)?\s+(?:-|@)`,
    String.raw`(?:sdkmanager|avdmanager)\b`,
    String.raw`gradlew?(?:\.bat)?\s(?:\\\n|[^\n&|;])*\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b`,
    String.raw`(?:npx\s+)?react-native\s+run-android\b`
].join("|")})`, "m");
const b = [
    ".kt",
    ".kts",
    ".java"
];
const D = new Set([
    ht,
    Xt
]);
function u() {
    return {
        kotlinOrJavaFileEdited: false,
        evidence: null
    };
}
function l(e) {
    return e.kotlinOrJavaFileEdited && e.evidence !== null;
}
function f(e, r) {
    for (let t of r){
        if (l(e)) {
            return;
        }
        let i = t.type === "progress" && (t.data.type === "agent_progress" || t.data.type === "skill_progress") ? t.data.message : t;
        if (i.type === "assistant") {
            if (!Array.isArray(i.message.content)) {
                continue;
            }
            for (let o of i.message.content){
                if (o.type !== "tool_use") {
                    continue;
                }
                let n = o.input;
                if (typeof n !== "object" || n === null) {
                    continue;
                }
                if (D.has(o.name)) {
                    if ("file_path" in n && typeof n.file_path === "string" && S(n.file_path)) {
                        e.kotlinOrJavaFileEdited = true;
                    }
                    if (e.evidence === null) {
                        e.evidence = "content" in n && p(n.content) || "new_string" in n && p(n.new_string) || null;
                    }
                } else if (e.evidence === null && u_.includes(o.name) && "command" in n && typeof n.command === "string" && E.test(n.command)) {
                    e.evidence = "android_command";
                }
            }
        } else if (i.type === "user" && e.evidence === null) {
            if (!Array.isArray(i.message.content)) {
                continue;
            }
            for (let o of i.message.content){
                if (o.type !== "tool_result") {
                    continue;
                }
                let n = T(o.content);
                if (n !== null) {
                    e.evidence = n;
                    break;
                }
            }
        }
    }
}
function S(file_path) {
    let r = file_path.toLowerCase();
    return b.some((t)=>r.endsWith(t));
}
function p(e) {
    if (typeof e !== "string") {
        return null;
    }
    if (y.test(e)) {
        return "android_import";
    }
    return a(e);
}
function a(e) {
    if (I.test(e)) {
        return "android_manifest";
    }
    if (v.test(e)) {
        return "gradle_plugin";
    }
    return null;
}
function T(content) {
    if (typeof content === "string") {
        return a(content);
    }
    if (!Array.isArray(content)) {
        return null;
    }
    for (let r of content){
        let t = r.type === "text" ? a(r.text) : null;
        if (t !== null) {
            return t;
        }
    }
    return null;
}
const R = {
    ios_app: ()=>{
        let e = H4o();
        return {
            absorb: (r)=>D4o(e, r),
            trigger: ()=>Q2r(e)
        };
    },
    android_app: ()=>{
        let e = u();
        return {
            absorb: (r)=>f(e, r),
            trigger: ()=>{
                if (l(e)) {
                    return e.evidence;
                }
                return null;
            }
        };
    }
};
function A() {
    return new Map(nkr.map((e)=>[
            e,
            R[e]()
        ]));
}
class _ {
    #n = A();
    #e = new Set;
    #t = new Set;
    get intents() {
        return this.#e;
    }
    absorb(e) {
        let r = [];
        for (let [t, i] of this.#n){
            if (this.#e.has(t)) {
                continue;
            }
            let o = null;
            try {
                i.absorb(e);
                let trigger = i.trigger();
                if (trigger !== null) {
                    Qi({
                        type: "system",
                        subtype: "dev_intent",
                        kind: t,
                        trigger
                    });
                    this.#e.add(t);
                    o = trigger;
                }
            } catch (error) {
                c(ot(W(error), "dev intent fold"));
                if (!this.#t.has(t)) {
                    this.#t.add(t);
                    m("dev_intent_detect", "fold_threw");
                }
            }
            let n = o;
            if (n !== null) {
                r.push(t);
                g("dev_intent_detect", {
                    kind: d(t),
                    trigger: d(n)
                });
            }
        }
        return r;
    }
    reset() {
        this.#n = A();
        this.#e.clear();
        this.#t.clear();
    }
}
export const tge = new q(()=>new _);
