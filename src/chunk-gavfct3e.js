import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Zpe } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { homedir } from "os";
const bjr = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function IGo() {
    let r = await Fl(process.pid);
    if (r === undefined) {
        return {};
    }
    return {
        [bjr]: `${process.pid}:${r}`
    };
}
async function OGo() {
    let r = /^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
    if (!r) {
        return false;
    }
    let e = O() === "windows" ? process.ppid : process.pid;
    if (Number(r[1]) !== e) {
        return false;
    }
    if (!Zpe(we(), homedir())) {
        return false;
    }
    let t = await Fl(e, {
        skipCache: true
    });
    return t !== undefined && t === r[2];
}
export { bjr, IGo, OGo };
