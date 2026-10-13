import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { uon } from "/$bunfs/root/chunk-craerjpn.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Npe } from "/$bunfs/root/chunk-24agvrd9.js";
import { Zu, mm } from "/$bunfs/root/chunk-peahjaep.js";
import { n2o } from "/$bunfs/root/chunk-mqqkgppx.js";
import { openSync } from "fs";
import { ReadStream } from "tty";
function p() {
    if (process.stdin.isTTY) {
        return {
            kind: "stdin"
        };
    }
    if (Ne(false)) {
        return {
            kind: "unavailable",
            reason: "ci"
        };
    }
    if (uon() === "mcp") {
        return {
            kind: "unavailable",
            reason: "mcp"
        };
    }
    try {
        let n = openSync("/dev/tty", "r");
        let stream = new ReadStream(n);
        Npe(stream);
        stream.on("error", (r)=>{
            i("tengu_tty_stream_error", Zu(r));
            t(`/dev/tty stream error: ${r}`, {
                level: "debug"
            });
        });
        stream.isTTY = true;
        return {
            kind: "override",
            stream
        };
    } catch (error) {
        t(`Could not open /dev/tty for stdin override: ${error}`, {
            level: "error"
        });
        return {
            kind: "unavailable",
            reason: "tty_unavailable"
        };
    }
}
class o {
    input = null;
    get() {
        return this.input ??= p();
    }
    reset() {
        this.input = null;
    }
}
const VQe = new o;
function dx(exitOnCtrlC = false) {
    n2o();
    let e = VQe.get();
    let r = {
        exitOnCtrlC
    };
    if (e.kind === "override") {
        r.stdin = e.stream;
    }
    r.isScreenReaderEnabled = mm();
    return r;
}
export { VQe, dx };
