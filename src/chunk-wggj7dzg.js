const xzt = "ListConnectors";
const LVr = "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.";
const NVr = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector is authenticated but toggled off for this chat \u2014 tell the user to enable it in this chat's connector settings. To recommend connectors the user does NOT have yet, use SearchMcpRegistry \u2192 SuggestConnectors instead; this tool does not itself connect anything.`;
export { xzt, LVr, NVr };
