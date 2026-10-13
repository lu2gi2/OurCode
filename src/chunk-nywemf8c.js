import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const uXn = "[3P telemetry] OTEL diag error:";
class Ljr {
    error(r, ...e) {
        if (a.CLAUDE_CODE_OTEL_DIAG_STDERR) {
            process.stderr.write(`${uXn} ${r}
`);
        }
        t(`${uXn} ${r}`, {
            level: "error"
        });
    }
    warn(r, ...e) {
        t(`[3P telemetry] OTEL diag warn: ${r}`, {
            level: "warn"
        });
    }
    info(r, ...e) {}
    debug(r, ...e) {}
    verbose(r, ...e) {}
}
export { uXn, Ljr };
