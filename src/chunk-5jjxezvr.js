import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ah, Zo } from "/$bunfs/root/chunk-v56yyhmh.js";
export const workflowPermissionDialog = Zo({
    kind: "permission_workflow",
    payload: p(()=>Ah((o)=>typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)),
    result: p(()=>Ah((o)=>typeof o === "object" && o !== null && "behavior" in o)),
    default: {
        behavior: "cancelled"
    }
});
