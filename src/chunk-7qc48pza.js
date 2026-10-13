function Ko() {
    return `claude-code/${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION}`;
}
function zy(e = process.env.CLAUDE_CODE_ENTRYPOINT) {
    switch(e){
        case "claude-vscode":
            return "claude_code_vscode";
        case "remote":
        case "remote_baku":
        case "remote_cowork":
        case "remote_desktop":
        case "remote_mobile":
        case "remote_projects":
            return "claude_code_remote";
        case "claude-in-teams":
            return "claude_code_remote";
        case "sdk-cli":
        case "sdk-ts":
        case "sdk-py":
            return "claude_code_sdk";
        case "mcp":
            return "claude_code_mcp";
        case "claude-code-github-action":
            return "claude_code_github_action";
        case "local-agent":
            return "claude_code_local_agent";
        case "claude_in_slack":
            return "claude_in_slack";
        case "claude-in-slack":
            return "claude-in-slack";
        case "cli":
        default:
            return "claude_code_cli";
    }
}
function WAo(e) {
    return `claude-code_${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION.replace(/\./g, "-")}_${e}`;
}
function NGn() {
    if (!process.env.AI_AGENT || process.env.AI_AGENT.startsWith("claude-code_") || process.env.AI_AGENT.startsWith("claude-code/")) {
        process.env.AI_AGENT = WAo("harness");
    }
}
export { Ko, zy, WAo, NGn };
