import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { GL } from "/$bunfs/root/chunk-hj5wz6zd.js";
import { Yx } from "/$bunfs/root/chunk-4r70ar86.js";
import { Si } from "/$bunfs/root/chunk-6dwnw6av.js";
import { o } from "/$bunfs/root/chunk-smx21d0k.js";
const Or = "_host";
const Xyr = "_host_context";
const s = new WeakMap;
function dhs(e, t) {
    s.set(e, t);
    return e;
}
function kCe(e) {
    let t = s.get(e);
    if (t === undefined) {
        return {};
    }
    return {
        [Xyr]: t
    };
}
const TCe = "device";
const c = [
    "container",
    "this-machine"
];
const ONe = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/;
function Wre(e) {
    return !PE(e) && ONe.test(e);
}
function jW() {
    if (a.CLAUDE_CODE_REMOTE) {
        return "container";
    }
    return "this-machine";
}
function PE(e) {
    return c.some((t)=>t === e);
}
function _V() {
    if (Yx()) {
        return {
            [Or]: o().optional().describe("Optional. Name of an attached machine to run this tool call on; omit it to run in this session's own environment (the default). Use only a name this session listed as attached; the result says where it ran. Choose per call by which machine the command or file path concerns; the attached-machines note says what lives where and which are reachable now.")
        };
    }
    return {};
}
const d = 40;
function U5(input) {
    let { [Or]: t, ...rest } = input;
    if (typeof t !== "string") {
        return {
            requested: undefined,
            input
        };
    }
    let r = t.trim();
    return {
        requested: r === "" || PE(r) ? undefined : r,
        input: rest
    };
}
function Jyr(e) {
    let requested = U5(e).requested;
    return {
        requestedMachine: requested,
        runsOnMachine: Yx() && requested !== undefined && Wre(requested) ? requested : undefined
    };
}
function Dk(e) {
    return ne(GL(e), d);
}
function LB() {
    return `This call named a machine ("${Or}") but was not forwarded to it; omit the field to run here.`;
}
function aNn() {
    return `Running tool calls on an attached machine is not enabled in this session; omit "${Or}" to run here.`;
}
function mu(e) {
    return i(e) !== undefined;
}
function aJt(e) {
    let t = i(e);
    if (t === undefined) {
        return undefined;
    }
    return Dk(t) || undefined;
}
function i(e) {
    if (typeof e !== "object" || e === null || !(Or in e)) {
        return;
    }
    let t = e[Or];
    if (typeof t !== "string") {
        return;
    }
    let n = t.trim();
    if (n === "" || PE(n)) {
        return undefined;
    }
    return n;
}
function GM(e) {
    return (e.type === "user" || e.type === "assistant") && e.isVirtual === true;
}
function ade(e) {
    return e.type === "assistant" && e.isApiErrorMessage === true && e.message?.model === Si;
}
function UQ(e) {
    return e.type === "system" && e.subtype === "local_command";
}
function W_(e) {
    if (e.type === "api_system") {
        return false;
    }
    return e.type === "progress" || e.type === "system" && !UQ(e) || GM(e) || ade(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}
export { Or, Xyr, dhs, kCe, TCe, ONe, Wre, jW, PE, _V, U5, Jyr, Dk, LB, aNn, mu, aJt, GM, ade, UQ, W_ };
