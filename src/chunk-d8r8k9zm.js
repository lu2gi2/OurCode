import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
function ggn(e) {
    return "method" in e && "id" in e && e.id !== null;
}
const hQe = Object.freeze({});
const yQe = Object.freeze({
    name: "claude-code",
    title: "Claude Code",
    description: "Anthropic's agentic coding tool",
    websiteUrl: "https://claude.com/claude-code"
});
const n = Symbol("swallow");
class QBt {
    serverName;
    sendMcpMessage;
    isClosed = false;
    manifestInitializeResult;
    manifestToolsListResult;
    swallowNextInitializedNotification = false;
    outcome;
    onclose;
    onerror;
    onmessage;
    constructor(e, t, i){
        this.serverName = e;
        this.sendMcpMessage = t;
        this.manifestInitializeResult = i?.initializeResult;
        this.manifestToolsListResult = i?.toolsListResult;
        this.outcome = i === undefined ? "none" : "pending";
    }
    get manifestOutcome() {
        return this.outcome;
    }
    async start() {}
    async send(e) {
        if (this.isClosed) {
            throw Error("Transport is closed");
        }
        let t = this.answerFromManifest(e);
        if (t === n) {
            return;
        }
        if (t !== undefined) {
            queueMicrotask(()=>this.onmessage?.(t));
            return;
        }
        let i = await this.sendMcpMessage(this.serverName, e);
        if (this.onmessage) {
            this.onmessage(i);
        }
    }
    async close() {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        this.onclose?.();
    }
    answerFromManifest(e) {
        if (this.manifestInitializeResult === undefined && this.manifestToolsListResult === undefined && !this.swallowNextInitializedNotification) {
            return;
        }
        if (!("method" in e)) {
            this.dropManifest("unexpected_message");
            return;
        }
        switch(e.method){
            case "initialize":
                {
                    let t = this.manifestInitializeResult;
                    if (t === undefined || !("id" in e)) {
                        this.dropManifest("unexpected_message");
                        return;
                    }
                    this.manifestInitializeResult = undefined;
                    let i = e.params;
                    if (i === undefined || typeof i.protocolVersion !== "string" || i.protocolVersion !== t.protocolVersion) {
                        this.dropManifest("protocol_version_mismatch");
                        return;
                    }
                    if (!r(i.capabilities)) {
                        this.dropManifest("client_capabilities_declared");
                        return;
                    }
                    if (!o(t)) {
                        this.dropManifest("malformed_result");
                        return;
                    }
                    this.swallowNextInitializedNotification = true;
                    this.outcome = "replayed";
                    return {
                        jsonrpc: "2.0",
                        id: e.id,
                        result: t
                    };
                }
            case "notifications/initialized":
                {
                    if (!this.swallowNextInitializedNotification) {
                        this.dropManifest("unexpected_message");
                        return;
                    }
                    this.swallowNextInitializedNotification = false;
                    return n;
                }
            case "tools/list":
                {
                    let t = this.manifestToolsListResult;
                    if (t === undefined || !("id" in e) || this.swallowNextInitializedNotification || e.params !== undefined && e.params.cursor !== undefined) {
                        this.dropManifest("unexpected_message");
                        return;
                    }
                    this.manifestToolsListResult = undefined;
                    if (!o(t)) {
                        return;
                    }
                    return {
                        jsonrpc: "2.0",
                        id: e.id,
                        result: t
                    };
                }
            default:
                {
                    this.dropManifest("unexpected_message");
                    return;
                }
        }
    }
    dropManifest(e) {
        this.manifestInitializeResult = undefined;
        this.manifestToolsListResult = undefined;
        this.swallowNextInitializedNotification = false;
        if (this.outcome === "pending") {
            this.outcome = e;
        }
    }
}
function r(capabilities) {
    return L(capabilities) && Object.keys(capabilities).length === 0;
}
function o({ _meta }) {
    if (_meta === undefined) {
        return true;
    }
    if (!L(_meta)) {
        return false;
    }
    let { progressToken } = _meta;
    if (progressToken !== undefined && typeof progressToken !== "string" && typeof progressToken !== "number") {
        return false;
    }
    let s = _meta["io.modelcontextprotocol/related-task"];
    return s === undefined || L(s) && typeof s.taskId === "string";
}
class h1r {
    sendMcpMessage;
    isClosed = false;
    constructor(e){
        this.sendMcpMessage = e;
    }
    onclose;
    onerror;
    onmessage;
    async start() {}
    async send(e) {
        if (this.isClosed) {
            throw Error("Transport is closed");
        }
        this.sendMcpMessage(e);
    }
    async close() {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        this.onclose?.();
    }
}
export { ggn, hQe, yQe, QBt, h1r };
