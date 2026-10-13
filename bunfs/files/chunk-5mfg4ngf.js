// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{In}from"/$bunfs/root/chunk-xwkmkvm4.js";var ka="claude-in-chrome",Gjn="javascript_tool";function zE(e){return In(e)===ka}var t="--claude-in-chrome-mcp";function swo(e){if(e.type!==void 0&&e.type!=="stdio")return!1;return(e.command?.includes(t)??!1)||(e.args?.some((o)=>o.includes(t))??!1)}var FCs=["file_upload","browser_batch"],Vjn=[Gjn,"read_page","find","form_input","computer","browser_batch","navigate","resize_window","gif_creator","upload_image","get_page_text","tabs_context_mcp","tabs_create_mcp","tabs_close_mcp","read_console_messages","read_network_requests","shortcuts_list","shortcuts_execute","file_upload","switch_browser","list_connected_browsers","select_browser"],qjn="file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.";function PSe(){return{type:"stdio",command:process.execPath,args:[t],scope:"dynamic"}}
export{ka,Gjn,zE,swo,FCs,Vjn,qjn,PSe};
