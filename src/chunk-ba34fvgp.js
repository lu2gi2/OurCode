import { lt, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
const r = new lt(()=>({
        store: undefined
    }));
const n = {
    maxBytes: 0,
    save: async ()=>null
};
function Coo(e) {
    return r.peek(e)?.store ?? (e.host.launchOptions.diskless() ? n : undefined);
}
function N_() {
    return Coo(B());
}
async function q0e(e, o) {
    try {
        return await e.save(o);
    } catch  {
        t("A result could not be saved where the model reads files", {
            level: "error"
        });
        return null;
    }
}
export { Coo, N_, q0e };
