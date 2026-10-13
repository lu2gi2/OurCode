import { uks } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ec } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Sp, g3 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { vp } from "/$bunfs/root/chunk-2r3ctt5w.js";
function iht(e, n, t) {
    return ()=>{
        if (t?.aborted === true) {
            return;
        }
        let r = n();
        if (e.getCommandQueueSnapshot().some(s) || e.someSubmissionInFlight((i)=>o(i, r)) || (t === undefined ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand((i)=>o(i, r)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(s))) {
            return undefined;
        }
        return r;
    };
}
function o(e, n) {
    return s(e) && (e.uuid === undefined || n.findLast((t)=>t.uuid === e.uuid) === undefined);
}
function s(e) {
    if (!Sp(e)) {
        return false;
    }
    switch(e.mode){
        case "task-notification":
            return false;
        case "poll-event":
            {
                let n = e.pollEvent?.provenance?.authority;
                return n !== undefined && n !== "peer-agent" && n !== "world-event";
            }
        case "prompt":
        case "bash":
            return uks(e);
        case "orphaned-permission":
            return true;
    }
    return true;
}
function Ofn({ recipientName, leaderMode, leaderAutoPickedByLevel, proactivityLevel, tasks }) {
    let d = m(recipientName, tasks) ? leaderMode : g3(leaderMode, proactivityLevel, leaderAutoPickedByLevel);
    let a = Ec(d);
    if (a === "plan") {
        return "default";
    }
    return a;
}
function m(recipientName, tasks) {
    return Object.values(tasks).some((t)=>vp(t) && t.status === "running" && t.identity.agentName === recipientName && t.paneTeardown === undefined && t.identity.resumableAgentId !== undefined);
}
export { iht, Ofn };
