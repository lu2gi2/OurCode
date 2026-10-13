class tMe {
    #e = undefined;
    #n = false;
    provide(e) {
        this.#e = e;
    }
    canAsk() {
        return this.#e !== undefined;
    }
    askOnce({ workerEpoch, deadlineMs }) {
        if (this.#e === undefined || this.#n) {
            return false;
        }
        this.#n = true;
        this.#e({
            subtype: "remote_tools_reannounce",
            worker_epoch: workerEpoch,
            deadline_ms: deadlineMs
        }, AbortSignal.timeout(deadlineMs));
        return true;
    }
}
export { tMe };
