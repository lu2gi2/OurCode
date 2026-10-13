import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
const Y3n = 30000;
class t {
    activeSocketPath = undefined;
    connectedClients = new Set;
    onEnqueue = null;
    onRename = null;
    onEnableRemoteControl = null;
    onPeerMessageStatus = null;
    processingChain = Promise.resolve();
    activeTokens = undefined;
    activeKeyFile = undefined;
    authRequired = false;
    authOkReported = false;
    authDropReported = false;
    firstLineDeadlineMs = Y3n;
    silentDropReported = false;
    lastStartFailureCause = undefined;
    lastStartDegradedCause = undefined;
    lastStartFailureDetail = undefined;
    startInFlight = false;
    peerDirOwnerUids = [];
    reset() {
        this.onEnqueue = null;
        this.onRename = null;
        this.onEnableRemoteControl = null;
        this.onPeerMessageStatus = null;
        this.activeSocketPath = undefined;
        this.connectedClients.clear();
        this.processingChain = Promise.resolve();
        this.activeTokens = undefined;
        this.activeKeyFile = undefined;
        this.authRequired = false;
        this.authOkReported = false;
        this.authDropReported = false;
        this.firstLineDeadlineMs = Y3n;
        this.silentDropReported = false;
        this.lastStartFailureCause = undefined;
        this.lastStartDegradedCause = undefined;
        this.lastStartFailureDetail = undefined;
        this.startInFlight = false;
        this.peerDirOwnerUids = [];
    }
}
function jpn(e) {
    if (e.startInFlight || e.activeSocketPath !== undefined) {
        return;
    }
    switch(e.lastStartFailureCause){
        case "socket_dir_refused":
            if (e.lastStartFailureDetail !== undefined) {
                return `its socket directory could not be set up: ${e.lastStartFailureDetail}`;
            }
            return "its socket directory could not be set up";
        case "path_refused":
            return "its socket path is not a usable local address";
        case "bind_failed":
            return "it could not be started";
        case "key_publish_failed":
            return "its peer key could not be published";
        case "post_bind_setup_failed":
            return "setting it up after bind failed";
        case undefined:
            return;
    }
}
const rUt = new q(()=>new t);
export { Y3n, jpn, rUt };
