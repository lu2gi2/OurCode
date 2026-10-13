import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import { Ee, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
const e = {
    type: "local-jsx",
    name: "goal",
    description: "Set a goal Claude checks before stopping",
    argumentHint: "[<condition> | clear]",
    immediate: true
};
export const goalNonInteractive = {
    type: "local",
    name: "goal",
    supportsNonInteractive: true,
    thinClientDispatch: "post-text",
    description: "Set a goal — keep working until the condition is met",
    get isHidden () {
        return !Ee();
    },
    isEnabled: ()=>Ee() || jn(),
    load: ()=>import("/$bunfs/root/chunk-5hdye6c3.js")
};
const n = e;
export { n as default };
