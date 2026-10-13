import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { freemem } from "os";
function bHr() {
    let e = k("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
    if (e <= 0) {
        return {
            lowMem: false,
            level: undefined
        };
    }
    if (O() !== "macos") {
        return {
            lowMem: freemem() < e,
            level: undefined
        };
    }
    let level = m();
    return {
        lowMem: level !== undefined && level >= r_critical,
        level
    };
}
function bfe() {
    return bHr().lowMem;
}
const r = {
    normal: 1,
    warning: 2,
    critical: 4
};
var r_critical = r.critical;
function m() {
    try {
        let e = Bun.ant.memoryPressureLevel();
        if (e === null) {
            return undefined;
        }
        return r[e];
    } catch (error) {
        t(`bg low-mem: memoryPressureLevel failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        return;
    }
}
function SHr() {
    return k("tengu_bg_attach_upgrade", true);
}
export { bHr, bfe, SHr };
