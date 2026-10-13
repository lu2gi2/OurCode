import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { mon } from "/$bunfs/root/chunk-x47nahfr.js";
import { bbe } from "/$bunfs/root/chunk-nbx3tg29.js";
function Pie() {
    let e = xr();
    if (e.builtinPluginsInitialized) {
        return;
    }
    e.builtinPluginsInitialized = true;
    bbe("cc-plugin-sec-default", ()=>import.meta.require("/$bunfs/root/chunk-fwky7et1.js"));
    bbe("cc-plugin-agents-md", ()=>import.meta.require("/$bunfs/root/chunk-4rd3ga1v.js"));
    bbe("cc-plugin-telemetry", ()=>import.meta.require("/$bunfs/root/chunk-vz9v3zkd.js"));
    if (a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
        bbe("cc-plugin-plugin-authoring", ()=>import.meta.require("/$bunfs/root/chunk-z6zfpf95.js"));
        bbe("cc-plugin-mods-guide", ()=>import.meta.require("/$bunfs/root/chunk-aj9sr5dx.js"));
        if (!mon()) {
            bbe("cc-plugin-tips", ()=>import.meta.require("/$bunfs/root/chunk-7aqd4awb.js"));
            bbe("cc-plugin-mermaid", ()=>import.meta.require("/$bunfs/root/chunk-hpx30gfs.js"));
        }
    }
    let i = a.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !mon();
    if (i) {
        bbe("cc-plugin-responsive-mode", ()=>import.meta.require("/$bunfs/root/chunk-gehnxrvp.js"));
        bbe("cc-plugin-diff", ()=>import.meta.require("/$bunfs/root/chunk-mxnkgnv8.js"));
    }
    if (a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
        bbe("cc-plugin-you-should-know", ()=>import.meta.require("/$bunfs/root/chunk-zs6f451y.js"));
    }
    if (i) {
        bbe("cc-plugin-claude-test", ()=>import.meta.require("/$bunfs/root/chunk-js82q14r.js"));
    }
}
export { Pie };
