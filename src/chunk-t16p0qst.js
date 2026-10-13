import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
export const PQt = C(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: true
    });
    s.execAsync = undefined;
    const e = Le("child_process");
    const r = Le("util");
    s.execAsync = r.promisify(e.exec);
});
