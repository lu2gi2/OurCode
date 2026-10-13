import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { iWn, Lue, Tz, Cdt, dRs, uRs } from "/$bunfs/root/chunk-vpp1psvz.js";
import { execFile } from "child_process";
const timeout = 10000;
const Ewo = 250;
const o = null;
let u;
function D2s() {
    return u === true;
}
function L2s() {
    return Cdt().lastKnown;
}
function N2s(n) {
    Cdt().lastKnown = n;
}
function s(n) {
    return new Promise((resolve)=>{
        try {
            execFile("security", [
                "find-generic-password",
                "-a",
                Tz(),
                "-w",
                "-s",
                n
            ], {
                encoding: "utf-8",
                timeout,
                windowsHide: true
            }, (t, i)=>{
                let a = Boolean(t && "killed" in t && t.killed);
                resolve(a ? null : {
                    stdout: t ? null : i?.trim() || null
                });
            });
        } catch  {
            resolve(null);
        }
    });
}
function kwo() {
    let n = mr();
    if (o || n) {
        return;
    }
    let e = Cdt();
    let e_generation = e.generation;
}
async function Etn(n) {
    if (!o) {
        return;
    }
    await (n === undefined ? o : Ge(o, n));
}
function wTr() {
    Cdt().legacyApiKeyPrefetch = null;
}
export { Ewo, D2s, L2s, N2s, kwo, Etn, wTr };
