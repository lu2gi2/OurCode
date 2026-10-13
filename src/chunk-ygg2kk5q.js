import { $w } from "/$bunfs/root/chunk-qk3m4n8a.js";
function lBo(e, n) {
    let a = $w().safeParse(n.dangerouslyDisableSandbox);
    if (a.success && a.data) {
        return {
            deniedFlag: "dangerouslyDisableSandbox",
            message: `unsandboxed execution (dangerouslyDisableSandbox) is not available to ${e}. If the command failed with a sandbox violation, the operation cannot be performed in this context \u2014 do not retry it.`
        };
    }
    let o = $w().safeParse(n.run_in_background);
    if (o.success && o.data) {
        return {
            deniedFlag: "run_in_background",
            message: `run_in_background is not available to ${e} \u2014 run the command in the foreground.`
        };
    }
    return {
        sanitizedInput: {
            ...n,
            dangerouslyDisableSandbox: false,
            run_in_background: false
        }
    };
}
export { lBo };
