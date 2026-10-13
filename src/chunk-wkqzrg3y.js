import { O } from "/$bunfs/root/chunk-79wfew46.js";
function bhn() {
    if (O() !== "windows" || !process.stdin.isTTY) {
        return;
    }
    try {
        process.stdin.setRawMode(true);
        process.stdin.setRawMode(false);
    } catch  {}
}
export { bhn };
