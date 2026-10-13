import { PQt } from "/$bunfs/root/chunk-t16p0qst.js";
import { Da } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const u = C(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    n.getMachineId = undefined;
    const r = Le("fs");
    const i = PQt();
    const t = Da();
    async function c() {
        try {
            return (await r.promises.readFile("/etc/hostid", {
                encoding: "utf8"
            })).trim();
        } catch (error) {
            t.diag.debug(`error reading machine id: ${error}`);
        }
        try {
            return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
        } catch (error) {
            t.diag.debug(`error reading machine id: ${error}`);
        }
    }
    n.getMachineId = c;
});
export default u();
