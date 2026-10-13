import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { AsyncLocalStorage } from "async_hooks";
class aSr {
    #e = false;
    #n = false;
    #t = false;
    #s = false;
    #r = false;
    #a = false;
    #i = false;
    #o;
    #d = false;
    get backgroundTasksDisabled() {
        return this.#e;
    }
    get backgroundAgentLaunchDisabled() {
        return this.#n;
    }
    get remoteAgentIsolationDisabled() {
        return this.#t;
    }
    get unsandboxedCommandsDisabled() {
        return this.#s;
    }
    get backgroundDeadlineDisabled() {
        return this.#r;
    }
    get backgroundCompletionNoticeDisabled() {
        return this.#a;
    }
    get messagingBeyondOwnAgentsDisabled() {
        return this.#i;
    }
    get backgroundLaunchRule() {
        return this.#o;
    }
    get foregroundAgentMovesAdmitted() {
        return this.#d;
    }
    disableBackgroundTasks() {
        this.#e = true;
    }
    disableBackgroundAgentLaunch() {
        this.#n = true;
    }
    disableRemoteAgentIsolation() {
        this.#t = true;
    }
    installBackgroundLaunchRule(e) {
        if (!this.#e) {
            throw Error("A background launch rule needs background tasks disabled first");
        }
        if (typeof e.parameterDescription !== "string") {
            throw Error("A background launch rule needs parameterDescription to be a string");
        }
        if (this.#o !== undefined) {
            throw Error("A background launch rule is already installed");
        }
        let o = e.admitsMoves === true;
        if (o && typeof e.admitMove !== "function") {
            throw Error("A background launch rule that admits moves needs admitMove to be a function");
        }
        this.#o = e;
        this.#d = o;
    }
    disableBackgroundDeadline() {
        this.#r = true;
    }
    disableBackgroundCompletionNotice() {
        this.#a = true;
    }
    disableUnsandboxedCommands() {
        this.#s = true;
    }
    disableMessagingBeyondOwnAgents() {
        this.#i = true;
    }
}
const s = new q(()=>new aSr);
function Qh() {
    return n.getStore() ?? s.of(B().host);
}
var n = new AsyncLocalStorage;
function CSs(e, o) {
    return n.run(e, o);
}
export { aSr, Qh, CSs };
