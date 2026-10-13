import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function s() {
    return "prod";
}
const f9 = [
    "",
    "-staging-oauth",
    "-local-oauth",
    "-custom-oauth"
];
function t6() {
    if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) {
        return "-custom-oauth";
    }
    switch(s()){
        case "local":
            return "-local-oauth";
        case "staging":
            return "-staging-oauth";
        case "prod":
            return "";
    }
}
function lCo() {
    return t6() === "-staging-oauth";
}
const PZ = 31536000;
const cCo = Math.round(PZ / 86400);
const wC = "user:inference";
const m9 = "user:profile";
const tpt = "user:plugins";
const YGn = "user:projects:read";
const XGn = "user:projects:write";
function JGn(t) {
    return Array.isArray(t) && t.includes(wC);
}
const c = "org:create_api_key";
const pp = "oauth-2025-04-20";
const r = [
    c,
    m9
];
const n = [
    m9,
    wC,
    "user:sessions:claude_code",
    "user:mcp_servers",
    "user:file_upload"
];
function npt() {
    let t = dn();
    let _ = [
        ...n
    ];
    if (t.PLUGINS_SCOPE_REGISTERED) {
        _.push(tpt);
    }
    return _;
}
function dCo() {
    return D([
        ...r,
        ...npt()
    ]);
}
const vPe = [
    "user:design:read",
    "user:design:write"
];
const u = [
    YGn,
    XGn
];
function URr(t) {
    if (!Array.isArray(t)) {
        return [];
    }
    let _ = u;
    return t.filter((o)=>_.includes(o));
}
function uCo(t) {
    return D([
        ...npt(),
        ...URr(t)
    ]);
}
const a = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude.ai",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704",
    OAUTH_FILE_SUFFIX: "",
    PLUGINS_SCOPE_REGISTERED: true,
    PROJECTS_SCOPES_REGISTERED: true,
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
};
const iBe = "https://claude.ai/oauth/claude-code-client-metadata";
let i;
function S() {
    let BASE_API_URL = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000";
    let CLAUDE_AI_ORIGIN = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000";
    let o = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
    return {
        BASE_API_URL,
        CONSOLE_AUTHORIZE_URL: `${o}/oauth/authorize`,
        CLAUDE_AI_AUTHORIZE_URL: `${CLAUDE_AI_ORIGIN}/oauth/authorize`,
        CLAUDE_AI_ORIGIN,
        TOKEN_URL: `${BASE_API_URL}/v1/oauth/token`,
        API_KEY_URL: `${BASE_API_URL}/api/oauth/claude_cli/create_api_key`,
        ROLES_URL: `${BASE_API_URL}/api/oauth/claude_cli/roles`,
        CONSOLE_SUCCESS_URL: `${o}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
        CLAUDEAI_SUCCESS_URL: `${o}/oauth/code/success?app=claude-code`,
        MANUAL_REDIRECT_URL: `${o}/oauth/code/callback`,
        CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
        DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000",
        OAUTH_FILE_SUFFIX: "-local-oauth",
        PLUGINS_SCOPE_REGISTERED: true,
        PROJECTS_SCOPES_REGISTERED: true,
        MCP_PROXY_URL: "http://localhost:8205",
        MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
    };
}
const aBe = [
    "https://beacon.claude-ai.staging.ant.dev",
    "https://claude.fedstart.com",
    "https://claude-staging.fedstart.com"
];
function BRr() {
    switch(s()){
        case "local":
            return S();
        case "staging":
            return i ?? a;
        case "prod":
            return a;
    }
}
function dn() {
    let t = BRr();
    let CLAUDE_CODE_CUSTOM_OAUTH_URL = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
    if (CLAUDE_CODE_CUSTOM_OAUTH_URL) {
        let e = CLAUDE_CODE_CUSTOM_OAUTH_URL.replace(/\/$/, "");
        if (!aBe.includes(e)) {
            throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
        }
        t = {
            ...t,
            BASE_API_URL: e,
            CONSOLE_AUTHORIZE_URL: `${e}/oauth/authorize`,
            CLAUDE_AI_AUTHORIZE_URL: `${e}/oauth/authorize`,
            CLAUDE_AI_ORIGIN: e,
            TOKEN_URL: `${e}/v1/oauth/token`,
            API_KEY_URL: `${e}/api/oauth/claude_cli/create_api_key`,
            ROLES_URL: `${e}/api/oauth/claude_cli/roles`,
            CONSOLE_SUCCESS_URL: `${e}/oauth/code/success?app=claude-code`,
            CLAUDEAI_SUCCESS_URL: `${e}/oauth/code/success?app=claude-code`,
            MANUAL_REDIRECT_URL: `${e}/oauth/code/callback`,
            OAUTH_FILE_SUFFIX: "-custom-oauth",
            PLUGINS_SCOPE_REGISTERED: false,
            PROJECTS_SCOPES_REGISTERED: false
        };
    }
    let CLAUDE_CODE_OAUTH_CLIENT_ID = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
    if (CLAUDE_CODE_OAUTH_CLIENT_ID) {
        t = {
            ...t,
            CLIENT_ID: CLAUDE_CODE_OAUTH_CLIENT_ID,
            PLUGINS_SCOPE_REGISTERED: false,
            PROJECTS_SCOPES_REGISTERED: false
        };
    }
    return t;
}
export { f9, t6, lCo, PZ, cCo, wC, m9, tpt, YGn, XGn, JGn, pp, npt, dCo, vPe, URr, uCo, iBe, aBe, BRr, dn };
