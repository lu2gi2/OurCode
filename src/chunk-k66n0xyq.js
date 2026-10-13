import { Da } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const d = C(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: true
    });
    i.getMachineId = undefined;
    const t = Le("fs");
    const r = Da();
    async function s() {
        let c = [
            "/etc/machine-id",
            "/var/lib/dbus/machine-id"
        ];
        for (let a of c){
            try {
                return (await t.promises.readFile(a, {
                    encoding: "utf8"
                })).trim();
            } catch (error) {
                r.diag.debug(`error reading machine id: ${error}`);
            }
        }
    }
    i.getMachineId = s;
});
export default d();
