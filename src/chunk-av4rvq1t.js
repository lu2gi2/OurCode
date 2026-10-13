import { Da } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const i = C(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getMachineId = undefined;
    const e = Da();
    async function n() {
        e.diag.debug("could not read machine-id: unsupported platform");
    }
    t.getMachineId = n;
});
export default i();
