import { PQt } from "/$bunfs/root/chunk-t16p0qst.js";
import { Da } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const o = C(function(c) {
    Object.defineProperty(c, "__esModule", {
        value: true
    });
    c.getMachineId = undefined;
    const i = PQt();
    const n = Da();
    async function u() {
        try {
            let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((d)=>d.includes("IOPlatformUUID"));
            if (!t) {
                return;
            }
            let r = t.split('" = "');
            if (r.length === 2) {
                return r[1].slice(0, -1);
            }
        } catch (error) {
            n.diag.debug(`error reading machine id: ${error}`);
        }
    }
    c.getMachineId = u;
});
export default o();
