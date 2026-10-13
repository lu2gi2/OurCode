function fOe(e, s) {
    return {
        behavior: "deny",
        message: `Permission for ${e} requires the user to read a consent disclosure before approving, and ${s} cannot display it. The user can run this from an interactive Claude Code session, where the permission dialog renders the full disclosure.`,
        decisionReason: {
            type: "other",
            reason: `localDisplayOnly ask not forwarded: ${s} cannot render the consent disclosure the approval depends on`
        }
    };
}
function Nmn(e) {
    return e.startsWith("localDisplayOnly ask not forwarded:");
}
export { fOe, Nmn };
