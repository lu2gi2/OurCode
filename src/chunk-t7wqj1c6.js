import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { homedir } from "os";
import { join } from "path";
function gqr() {
    if (O() === "windows" && a.APPDATA) {
        return join(a.APPDATA, "gcloud");
    }
    return join(homedir(), ".config", "gcloud");
}
function KSn() {
    return a.CLOUDSDK_CONFIG || gqr();
}
export { gqr, KSn };
