import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { oi } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { YYo } from "/$bunfs/root/chunk-6ym1026b.js";
import { Q_t } from "/$bunfs/root/chunk-26atsz88.js";
function i(t) {
    return {
        arm () {
            ee().templateLanes[t] = true;
        },
        take () {
            let templateLanes = ee().templateLanes;
            let a = templateLanes[t];
            templateLanes[t] = false;
            return a;
        },
        giveBack () {
            ee().templateLanes[t] = true;
        }
    };
}
const o = i("prototypeArmed");
function jjo() {
    o.arm();
    g("prototype_started", {});
}
function Wjo() {
    return o.take();
}
function vBt() {
    o.giveBack();
}
function p(t, e) {
    ee().templateLanes.boundSlugs.set(t, e);
}
function zjo(t) {
    return ee().templateLanes.boundSlugs.get(t);
}
function Gjo(t, is_first_publish) {
    p(t, "prototype");
    g("prototype_publish", {
        artifact_slug: Q_t(t),
        is_first_publish
    });
}
const s = "<!-- dataviz-callout -->";
let n = ()=>"";
let r;
function Ujo(t) {
    n = t;
}
async function wBt() {
    let { SKILL_MD } = await import("/$bunfs/root/chunk-tymbqjjx.js");
    r = YYo(oi(SKILL_MD).content.trimStart().replace(s, ()=>n()));
    return r;
}
function Bjo() {
    return r;
}
export { Ujo, wBt, Bjo, jjo, Wjo, vBt, zjo, Gjo };
