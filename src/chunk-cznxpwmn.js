import { PQt } from "/$bunfs/root/chunk-t16p0qst.js";
import { Da } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const d = C(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: true
    });
    s.getMachineId = undefined;
    const e = Le("process");
    const n = PQt();
    const c = Da();
    async function o() {
        let t = "%windir%\\System32\\REG.exe";
        if (e.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in e.env) {
            t = `%windir%\\sysnative\\cmd.exe /c ${t}`;
        }
        try {
            let i = (await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
            if (i.length === 2) {
                return i[1].trim();
            }
        } catch (error) {
            c.diag.debug(`error reading machine id: ${error}`);
        }
    }
    s.getMachineId = o;
});
export default d();
