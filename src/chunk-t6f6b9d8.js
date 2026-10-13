function fPe(r) {
    try {
        if (!Bun.ant.setDumpable(false)) {
            r("prctl(PR_SET_DUMPABLE,0) returned nonzero");
        }
    } catch (error) {
        r(`prctl unavailable: ${error instanceof Error ? error.message : String(error)}`);
    }
}
export { fPe };
