import { Im, j4 } from "/$bunfs/root/chunk-9fvky64k.js";
import { Gu } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { tds } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { basename, sep } from "path";
function EYo(i) {
    let s = Gu();
    let { listedOwnerships } = s;
    listedOwnerships.clear();
    s.listedSkillsAnswer = "none_yet";
    for (let e of i){
        let l;
        try {
            l = Im(basename(j4(e.name, sep)));
        } catch  {
            continue;
        }
        if (!listedOwnerships.has(l)) {
            listedOwnerships.set(l, {
                listedName: e.name,
                ownership: tds(e),
                savedFromAChat: typeof e.backing_plugin_id === "string"
            });
        }
    }
    s.listedSkillsAnswer = "a_list";
}
function FVr(i) {
    return Gu().listedOwnerships.get(Im(i));
}
export { EYo, FVr };
