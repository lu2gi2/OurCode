import { VTt } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { ae, nw } from "/$bunfs/root/chunk-223dyewd.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
const CFo = 30000;
const CU = "bridge-failed";
const yJe = "disabled after repeated failures · restart to retry";
const BLr = "Remote Control not started here";
function RFo(t, { crossSessionMessaging }, now = new Date) {
    let n = t.startedAt > 0 && t.startedAt <= now.getTime() ? ` (started ${nw(new Date(t.startedAt), {
        now
    })})` : "";
    return `${BLr} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${crossSessionMessaging ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xB7 run /remote-control to move it to this terminal`;
}
const jLr = 150;
function Mje() {
    let t = new Date;
    let e = String(t.getHours()).padStart(2, "0");
    let r = String(t.getMinutes()).padStart(2, "0");
    let n = String(t.getSeconds()).padStart(2, "0");
    return `${e}:${r}:${n}`;
}
function Iun(t, e) {
    return `${VTt(undefined, e)}/code?environment=${t}`;
}
function WLr(t, e) {
    let r = e + 20;
    return e + 10 - t % r;
}
function pgt(t, e) {
    let r = ae(t);
    let n = e - 1;
    let i = e + 1;
    if (n >= r || i < 0) {
        return {
            before: t,
            shimmer: "",
            after: ""
        };
    }
    let g = Math.max(0, n);
    let s = 0;
    let c = "";
    let shimmer = "";
    let after = "";
    for (let { segment } of ra().segment(t)){
        let u = ae(segment);
        if (s + u <= g) {
            c += segment;
        } else if (s > i) {
            after += segment;
        } else {
            shimmer += segment;
        }
        s += u;
    }
    return {
        before: c,
        shimmer,
        after
    };
}
const m = {
    label: "/rc failed",
    color: "error"
};
const d = {
    label: "/rc reconnecting",
    color: "warning"
};
const f = {
    label: "/rc active",
    color: "success"
};
const p = {
    label: "/rc connecting…",
    color: "warning"
};
function Hje({ error, connected, sessionActive, reconnecting }) {
    if (error) {
        return m;
    }
    if (reconnecting) {
        return d;
    }
    if (sessionActive || connected) {
        return f;
    }
    return p;
}
function CFt(t) {
    return `Code anywhere with the Claude mobile app or ${t}`;
}
const xFo = "Or ask Claude to work in this folder from your projects on claude.ai";
function RFt(t) {
    return `Continue coding in the Claude mobile app or ${t}`;
}
const zLr = "Run /remote-control to retry";
function PFo(t, e) {
    return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`;
}
export { CFo, CU, yJe, BLr, RFo, jLr, Mje, Iun, WLr, pgt, Hje, CFt, xFo, RFt, zLr, PFo };
