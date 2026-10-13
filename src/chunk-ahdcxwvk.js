import { k, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function ID() {
    return k("tengu_lantern_prism", false) || a.CLAUDE_CODE_LANTERN_PRISM;
}
function rS() {
    return nro() || Gr("tengu_spicy_blossom", false) === true;
}
function nro() {
    return Gr("tengu_encapsulated_pebble", true) !== false;
}
function R3t() {
    return !k("tengu_sharded_snowflake", false);
}
function KIn() {
    if (R3t()) {
        return {
            enabled: true,
            text: "`claude plugin eval` is available in this session (generally available; no enablement setting is needed on any client, including Bedrock/Vertex/Foundry, LLM gateways, telemetry-disabled clients and CI runners)."
        };
    }
    return {
        enabled: false,
        text: '`claude plugin eval` is generally available but switched OFF for this session by a server-side kill switch: it exists but prints "currently unavailable" here. If the user asks about it, say that plainly rather than that it does not exist; there is no setting or variable that turns it back on, and `claude update` plus a fresh session picks the command up again once the switch is lifted.'
    };
}
export { ID, rS, nro, R3t, KIn };
