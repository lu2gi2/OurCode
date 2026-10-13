import { pu } from "/$bunfs/root/chunk-7sgatswa.js";
import { pBr } from "/$bunfs/root/chunk-0fbzbyyq.js";
import { dg } from "/$bunfs/root/chunk-s7aawpq2.js";
import { Gs } from "/$bunfs/root/chunk-7q005g04.js";
import { qM as name } from "/$bunfs/root/chunk-0xz61zj0.js";
function E8n() {
    return [
        {
            type: "text",
            text: pBr()
        }
    ];
}
function n1s() {
    Gs({
        name,
        description: `Reference for writing a ${pu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
        menuDescription: "Load the reference for writing Workflow tool scripts",
        userInvocable: true,
        isEnabled: ()=>dg(),
        async getPromptForCommand () {
            return E8n();
        }
    });
}
export { E8n, n1s };
