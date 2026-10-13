import { X, NCo, MZ, qy, Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ca, MDt, Ww, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { vHt, WY, Js, je } from "/$bunfs/root/chunk-r3z1chqx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { Fa, fn, NE, Ggo } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Lv } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { Nn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { o, u, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { Kc, Yz } from "/$bunfs/root/chunk-svqqgdca.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { resolve, basename, isAbsolute, join, relative, sep } from "path";
function CRt(e) {
    if (G0n()) {
        return `Claude Code won't load marketplace "${je(e)}": its name looks like the name of one of Anthropic's own marketplaces`;
    }
    return `Claude Code refuses the marketplace name "${je(e)}": it looks like one of Anthropic's own`;
}
function z0n(e, n) {
    return `Failed to load marketplace "${je(e)}": ${n}`;
}
function G0n() {
    return false;
}
const M = 64;
function y(e, n = "it") {
    let i = e.length <= M ? Fa("plugin marketplace remove", e) : null;
    if (i === null) {
        return `Remove ${n} in /plugin \u2192 Marketplaces`;
    }
    return `Remove ${n} with: ${i}`;
}
const E = "this also uninstalls its plugins and deletes their data, options and secrets";
const S = "if its maintainer renames it, update it instead";
const w = [
    "Removing it is the only fix. That also uninstalls its plugins and deletes what they saved:",
    "their data, options and secrets."
];
const B = "After removing it, you can add it again from the same source; if that is refused, its maintainer has to rename it first.";
const F = [
    "It was added from a settings file. To keep it, do these in order (if your organization's managed settings add it, an administrator does step 1):",
    "1. In each settings file that lists it under extraKnownMarketplaces, rename its entry (the key and its source.name) to a plain-ASCII name that doesn't look like one of Anthropic's."
];
const j = "(this also uninstalls its plugins and deletes their data, options and secrets).";
const G = "3. Start Claude Code again, in that project's folder if it is a project's settings file, then install its plugins from the renamed one.";
function v(e) {
    return [
        ...F,
        `2. ${y(e, "the old name")}`,
        j,
        G
    ];
}
function _(e) {
    return [
        ...w,
        B,
        y(e)
    ];
}
function V0n(e, n = {}) {
    if (n.declaredInSettings === true) {
        return `Reloading won't help. ${v(e).join(" ")}`;
    }
    if (G0n()) {
        return `Reloading won't help. ${_(e).join(" ")}`;
    }
    return `Reloading won't help. ${y(e)} (${E}; ${S})`;
}
function zco(e, n = {}) {
    let i = G0n();
    let s = i ? [
        `Claude Code won't load marketplace "${je(e)}":`,
        "its name looks like the name of one of Anthropic's own marketplaces. Reloading won't help."
    ] : [
        `Claude Code refuses the marketplace name "${je(e)}":`,
        "it looks like one of Anthropic's own. Reloading won't help."
    ];
    if (n.declaredInSettings === true) {
        return [
            ...s,
            ...v(e)
        ];
    }
    if (i) {
        return [
            ...s,
            ..._(e)
        ];
    }
    return [
        ...s,
        y(e),
        `(${E};`,
        `${S}).`
    ];
}
const Gco = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin → Marketplaces (deletes its plugins and their data, options and secrets).";
const H = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Rename it in its settings file, remove the old name in /plugin → Marketplaces (plugins and data go), then restart.";
function Vco(e) {
    if (e) {
        return H;
    }
    return Gco;
}
const h = (e, heldBy)=>`${e} only while "${je(heldBy)}" is disabled. Disable or uninstall the copy you don't need`;
const mNe = {
    "network-location": "re-add the marketplace (one added from a folder or file must be re-added from a copy on this computer), or, to trust a folder on a network drive, declare it under extraKnownMarketplaces in user or managed settings",
    source: "re-add the marketplace with a supported source",
    declaration: "re-add the marketplace from the source that entry lists, or change the entry"
};
const z = [
    "available",
    "required",
    "auto_install",
    "not_available"
];
const q0n = p(()=>U(z));
function Dhr(e) {
    return q0n().safeParse(e).data;
}
function qco(e, n, i, s, l = false) {
    {
        let d = je(e);
        let r = n && n.length > 0 ? `now lists it as ${n.map((f)=>je(f)).join(" or ")}` : s !== undefined ? `still lists it, but Claude Code cannot install it (${je(s)})` : i ? "now lists a different repository under that name" : l ? "does not list it (or your organization blocks it)" : "no longer lists it (removed, or blocked by your organization)";
        if (l) {
            return `Plugin "${d}" is not loaded: installed_plugins.json could not be read, so its install could not be checked, and the Anthropic Directory ${r}`;
        }
        return `Plugin "${d}" is not loaded: the Anthropic Directory ${r}`;
    }
    return "";
}
function RRt(e) {
    return e.type === "marketplace-load-failed" && e.reason === "cache-miss" && e.marketplace === fn && e.directoryBlockedBy === undefined;
}
const xRt = `Run /reload-plugins, or: claude plugin marketplace update ${fn}`;
function fXt(e) {
    if (e.type === "marketplace-not-found" && e.marketplace !== fn && NE(e.marketplace) && e.registrationHidden !== undefined) {
        let n = Ggo(e.marketplace);
        if (n === null) {
            return "Remove that entry from known_marketplaces.json, then uninstall this plugin if it is still listed";
        }
        return `Remove it: ${n}`;
    }
}
function Kco(e) {
    switch(e){
        case "managed_setting":
            return "Your administrator turned it off with disablePluginDirectory in managed settings.";
        case "allowlist":
            return "Your administrator's marketplace allowlist (strictKnownMarketplaces) does not include the Anthropic Directory.";
        case "blocklist":
            return "Your administrator listed it in blockedMarketplaces in managed settings.";
        case "policy_limit":
            return "Your organization's policy does not allow it.";
    }
    return "";
}
function Lhr(e) {
    if (e.directoryDisabledByOrganization) {
        return "managed_setting";
    }
    if (e.marketplace !== fn || e.sourceUnverifiable) {
        return null;
    }
    if (e.blockedByBlocklist) {
        return "blocklist";
    }
    return "allowlist";
}
function PRt(e, n) {
    {
        let i = Kco(n);
        let s = e === undefined ? "The Anthropic Directory is blocked by your organization" : `Plugin "${je(e)}" is not loaded: the Anthropic Directory is blocked by your organization`;
        if (i === "") {
            return s;
        }
        return `${s}. ${i}`;
    }
    return "";
}
const mXt = "(not recorded)";
const W = {
    "path-not-found": false,
    "path-traversal": false,
    "mcp-config-invalid": false,
    "lsp-config-invalid": false,
    "hook-load-failed": false,
    "component-load-failed": false,
    "mcpb-download-failed": false,
    "mcpb-extract-failed": false,
    "mcpb-invalid-manifest": false,
    "lsp-server-start-failed": false,
    "lsp-server-crashed": false,
    "lsp-request-timeout": false,
    "lsp-request-failed": false,
    "plugin-not-installed": false,
    "marketplace-blocked-by-policy": false,
    "autoupdate-blocked-by-pinner": false,
    "autoupdate-deferred-entry-helper": false,
    "autoupdate-disabled-by-policy": false,
    "plugin-cache-miss": true,
    "generic-error": true,
    "manifest-parse-error": true,
    "manifest-validation-error": true,
    "marketplace-not-found": true,
    "marketplace-load-failed": true,
    "plugin-not-found": true,
    "git-auth-failed": true,
    "git-timeout": true,
    "network-error": true,
    "dependency-unsatisfied": true,
    "dependency-version-unsatisfied": true
};
function uCe(e) {
    if (e.type === "path-not-found") {
        return e.plugin === undefined && e.errno !== undefined;
    }
    if (e.type === "plugin-not-installed") {
        return e.seedHasOtherVersion === true || e.registryReadFailed === true;
    }
    if (e.type === "generic-error") {
        return e.orphan !== true && e.refused !== true;
    }
    if (e.type === "marketplace-load-failed") {
        return e.untrustedReservedName !== true && e.nameRefused !== true && e.directoryBlockedBy === undefined;
    }
    if (e.type === "marketplace-not-found") {
        return e.registrationHidden === undefined || e.registrationHidden === "network-location";
    }
    if (e.type === "plugin-not-found") {
        return e.removedFromDirectory !== true || e.registryReadFailed === true;
    }
    return W[e.type];
}
function gNe(e) {
    return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}
function B_e(e) {
    if ("pluginId" in e && e.pluginId) {
        return e.pluginId;
    }
    if ("plugin" in e && e.plugin) {
        return e.plugin;
    }
    let n = e.source.lastIndexOf("@");
    if (n > 0) {
        return e.source.slice(0, n);
    }
}
function pCe(e) {
    return e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy";
}
function Yco(e) {
    return `"${je(e)}" is loaded from your claude.ai account but meets a marketplace dependency only for other claude.ai plugins`;
}
function dS(e) {
    return Nn(V(e));
}
function V(e) {
    switch(e.type){
        case "generic-error":
            return WY(e.error);
        case "path-not-found":
            return `Path not found: ${Js(e.path)} (${je(e.component)}${e.errno ? `, ${je(e.errno)}` : ""})`;
        case "path-traversal":
            return `Path escapes plugin directory: ${Js(e.path)} (${je(e.component)})${e.reason ? ` \u2014 ${Js(e.reason)}` : ""}`;
        case "git-auth-failed":
            return `Git authentication failed (${je(e.authType)}): ${Js(e.gitUrl)}`;
        case "git-timeout":
            return `Git ${je(e.operation)} timeout: ${Js(e.gitUrl)}`;
        case "network-error":
            return `Network error: ${Js(e.url)}${e.details ? ` - ${je(e.details)}` : ""}`;
        case "manifest-parse-error":
            return `Manifest parse error: ${je(e.parseError, 500)} (in ${Js(e.manifestPath)})`;
        case "manifest-validation-error":
            return `Manifest validation failed: ${je(e.validationErrors.join(", "), 1000)} (in ${Js(e.manifestPath)})`;
        case "plugin-not-found":
            if (e.removedFromDirectory) {
                return qco(e.pluginId, e.directoryRenamedTo, e.directoryIdentityChanged === true, e.directoryNotInstallableReason, e.registryReadFailed === true);
            }
            return `Plugin ${je(e.pluginId)} not found in marketplace ${je(e.marketplace)}`;
        case "marketplace-not-found":
            if (e.registrationHidden !== undefined) {
                let n = `Marketplace ${je(e.marketplace)} is added but ignored`;
                if (e.registrationHiddenReason === undefined) {
                    return `${n} (see the debug log)`;
                }
                return `${n}. ${Ca(vHt(e.registrationHiddenReason))}. ${Ca(mNe[e.registrationHidden])}.`;
            }
            return `Marketplace ${je(e.marketplace)} not found`;
        case "marketplace-load-failed":
            if (e.directoryBlockedBy !== undefined) {
                return PRt(B_e(e) ?? e.source, e.directoryBlockedBy);
            }
            if (RRt(e)) {
                return `Plugin "${je(B_e(e) ?? e.source)}" is not loaded: the Anthropic Directory's catalog is not on this machine yet.`;
            }
            if (e.nameRefused) {
                return CRt(e.marketplace);
            }
            return `Marketplace ${je(e.marketplace)} failed to load: ${je(e.reason)}`;
        case "mcp-config-invalid":
            return `MCP server ${je(e.serverName)} invalid: ${je(e.validationError)}`;
        case "hook-load-failed":
            return `Hook load failed: ${je(e.reason)}`;
        case "component-load-failed":
            return `${je(e.component)} load failed from ${Js(e.path)}: ${je(e.reason)}`;
        case "mcpb-download-failed":
            return `Failed to download MCPB from ${Js(e.url)}: ${je(e.reason)}`;
        case "mcpb-extract-failed":
            return `Failed to extract MCPB ${Js(e.mcpbPath)}: ${je(e.reason)}`;
        case "mcpb-invalid-manifest":
            return `MCPB manifest invalid at ${Js(e.mcpbPath)}: ${je(e.validationError)}`;
        case "lsp-config-invalid":
            return `Plugin "${je(e.plugin)}" has invalid LSP server config for "${je(e.serverName)}": ${je(e.validationError)}`;
        case "lsp-server-start-failed":
            return `Plugin "${je(e.plugin)}" failed to start LSP server "${je(e.serverName)}": ${je(e.reason)}`;
        case "lsp-server-crashed":
            if (e.signal) {
                return `Plugin "${je(e.plugin)}" LSP server "${je(e.serverName)}" crashed with signal ${e.signal}`;
            }
            return `Plugin "${je(e.plugin)}" LSP server "${je(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
        case "lsp-request-timeout":
            return `Plugin "${je(e.plugin)}" LSP server "${je(e.serverName)}" timed out on ${je(e.method)} request after ${e.timeoutMs}ms`;
        case "lsp-request-failed":
            return `Plugin "${je(e.plugin)}" LSP server "${je(e.serverName)}" ${je(e.method)} request failed: ${je(e.error)}`;
        case "marketplace-blocked-by-policy":
            {
                let n = Lhr(e);
                if (n !== null) {
                    return PRt(e.plugin, n);
                }
                if (e.blockedByBlocklist) {
                    return `Marketplace '${je(e.marketplace)}' is blocked by enterprise policy`;
                }
                return `Marketplace '${je(e.marketplace)}' is not in the allowed marketplace list`;
            }
        case "dependency-unsatisfied":
            {
                let n = Fa("plugin install", e.dependency);
                let i = e.reason === "not-enabled" ? "disabled — enable it or remove the dependency" : `not installed \u2014 ${e.sameNameSyncedPlugin === undefined ? "" : `${Yco(e.sameNameSyncedPlugin)}; `}${n ? `run \`${n}\`, or ` : ""}check that its marketplace is added`;
                return `Dependency "${je(e.dependency)}" is ${i}`;
            }
        case "dependency-version-unsatisfied":
            return `Requires "${je(e.dependency)}" ${je(e.required)}, installed ${je(e.installed ?? "version unknown")}`;
        case "plugin-cache-miss":
            if (e.registryReadFailed === true) {
                return `Plugin "${je(e.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked \u2014 fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${e.installedListHeldNote === undefined ? "" : `. ${e.installedListHeldNote}`}`;
            }
            return `Plugin "${je(e.plugin)}" not cached at ${Js(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote === undefined ? "" : `. ${e.installedListHeldNote}`}`;
        case "plugin-not-installed":
            {
                let n = Fa("plugin install", e.source, "--scope project");
                if (e.installedListHeldNote !== undefined) {
                    return `Plugin "${je(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
                }
                return `Plugin "${je(e.plugin)}" is enabled in project settings but isn't installed${n ? ` \u2014 run \`${n}\`` : " — install it at project scope (from /plugin or claude plugin install)"}`;
            }
        case "autoupdate-deferred-entry-helper":
        case "autoupdate-disabled-by-policy":
            return e.message;
        case "autoupdate-blocked-by-pinner":
            {
                let n = e.heldAt ? ` at ${Js(e.heldAt)}` : "";
                let i = je(e.blockedBy.join(", "));
                let s = e.disabledPinners.length > 0 ? ` (note: ${je(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)` : "";
                return `Autoupdate held "${je(e.plugin)}"${n} \u2014 version constraint from ${i}${s}`;
            }
    }
}
function DQ(e) {
    return Nn(q(e));
}
function q(e) {
    switch(e.type){
        case "folder-shadowed-by-manifest":
            {
                let n = R(e.manifestFields);
                return `Default ${je(e.component)}/ folder is ignored because the manifest sets ${n}`;
            }
        case "mcp-server-suppressed-duplicate":
            {
                let n = e.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${je(e.duplicateOf.split(":")[1] ?? "?")}"` : `already-configured "${je(e.duplicateOf)}"`;
                return `MCP server "${je(e.serverName)}" skipped \u2014 same command/URL as ${n}`;
            }
        case "mcpb-needs-config":
            return `Bundled MCP server "${je(e.serverName)}" was not started: it needs configuration`;
        case "plugin-renamed":
            if (e.renamedTo === null) {
                return `Removed from the "${je(e.marketplace)}" marketplace`;
            }
            return `Renamed to "${je(e.renamedTo)}" in the "${je(e.marketplace)}" marketplace`;
        case "lsp-extension-conflict":
            {
                let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : undefined;
                let i = n ? `plugin "${je(n)}"` : `"${je(e.activeServer)}"`;
                return `LSP server "${je(e.serverName)}" is not used for ${je(e.extension)} files \u2014 ${i} already registered a server for that extension`;
            }
        case "project-scope-suppressed-untrusted":
        case "project-scope-server-stripped":
            return vHt(e.warning);
        case "broken-wikilink":
            return `${je(e.raw)} in ${Js(e.filePath)}:${e.line} doesn't resolve to a skill`;
        case "synced-plugin-shadowed":
            return `"${je(e.source)}" from claude.ai not loaded \u2014 "${je(e.shadowedBy)}" on this machine has the same name and takes precedence`;
        case "hooks-left-out-by-name":
            return `Its hooks.json hooks do not run. "${je(e.heldBy)}" holds the same plugin name and comes first`;
        case "hooks-module-left-out-by-name":
            return `Its hooks module does not load. "${je(e.heldBy)}" holds the same plugin name and comes first`;
        case "managed-hooks-restricted":
            return `"${je(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
        case "managed-plugin-disabled-by-settings":
            return `"${je(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
        case "ineffective-disable":
            return `Disabled in ~/.claude/settings.json but still loads \u2014 ${Lv(e.overriddenBy)} settings enable it, which overrides your user setting`;
        case "dependencies-refused":
            return `The packages it lists were not installed, because ${je(Qe(e.reason, ";"))}`;
        case "dependencies-not-installed":
            {
                let n = Fa("plugin update", e.source);
                return `The packages it lists are not installed. ${n ? `Run \`${n}\` to install them` : "Update it from /plugin to install them"}`;
            }
    }
}
function Nhr(e) {
    return Nn(J(e));
}
function J(e) {
    switch(e.type){
        case "folder-shadowed-by-manifest":
            {
                let n = R(e.manifestFields);
                if (e.manifestFields.length === 1) {
                    return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${n} list if you want both`;
                }
                return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
            }
        case "project-scope-suppressed-untrusted":
            return "Accept the trust dialog for this workspace, then run /reload-plugins.";
        case "project-scope-server-stripped":
            return "Monitors from project @skills-dir plugins are not supported — install the plugin at user scope instead.";
        case "broken-wikilink":
            if (e.reason === "invalid") {
                return "Wikilink names may use letters, digits, dash, underscore — rename the link";
            }
            return `Create one of: ${e.tried.map((n)=>Js(n)).join(" or ")}, or fix the link spelling`;
        case "mcp-server-suppressed-duplicate":
            {
                if (e.duplicateOf.startsWith("plugin:")) {
                    let n = e.duplicateOf.split(":")[1] ?? "the other plugin";
                    return `Disable plugin "${je(n)}" if you want this plugin's version instead`;
                }
                return `Remove "${je(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
            }
        case "mcpb-needs-config":
            return `Open "${je(e.plugin)}" in the Installed tab and choose Configure`;
        case "lsp-extension-conflict":
            {
                let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] ?? "the other plugin" : e.activeServer;
                if (n === e.plugin) {
                    return `Plugin "${je(e.plugin)}" declares two LSP servers for ${je(e.extension)} \u2014 remove or reorder "${je(e.serverName)}" in its lspServers config`;
                }
                return `Disable plugin "${je(n)}" to use this plugin's LSP server for ${je(e.extension)} files, or disable "${je(e.plugin)}" to silence this warning`;
            }
        case "synced-plugin-shadowed":
            {
                let n = Fa("plugin enable", e.source);
                return `To use the claude.ai copy instead, ${n ? `run \`${n}\`` : "enable it from /plugin"}, then disable or remove "${je(e.shadowedBy)}"`;
            }
        case "hooks-left-out-by-name":
            return h("One plugin per name runs hooks.json hooks, so this copy's run", e.heldBy);
        case "hooks-module-left-out-by-name":
            return h("One plugin per name loads a hooks module, so this copy's loads", e.heldBy);
        case "managed-hooks-restricted":
            return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
        case "managed-plugin-disabled-by-settings":
            {
                let n = Fa("plugin enable", e.source);
                return `To run it, ${n ? `run \`${n}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
            }
        case "plugin-renamed":
            if (e.renamedTo === null) {
                return `Remove "${je(e.source)}" from enabledPlugins if you still see this on the next start`;
            }
            return `If you still see this on the next start, update enabledPlugins to use "${je(e.renamedTo)}@${je(e.marketplace)}" (managed settings are not rewritten automatically)`;
        case "dependencies-refused":
            return "If it needs those packages, parts of it may not work. Updating or reinstalling this version of the plugin will not install them while that is still true";
        case "dependencies-not-installed":
            return "If it needs those packages, parts of it may not work";
        case "ineffective-disable":
            switch(e.overriddenBy){
                case "projectSettings":
                    return `Set "enabledPlugins": {"${je(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
                case "localSettings":
                    return "Change it to false in .claude/settings.local.json — that file currently enables it";
                case "flagSettings":
                    return `Remove "${je(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
                case "policySettings":
                    return "Managed policy can't be overridden locally — contact your administrator";
                case "userSettings":
                    return "";
            }
    }
}
function R(manifestFields) {
    return manifestFields.map((n)=>`"${n}"`).join(" and ");
}
function K0n(e) {
    let n = resolve(e).normalize("NFC");
    if (O() === "windows") {
        return n.toLowerCase();
    }
    return n;
}
function $hr(e, n, i, s) {
    let l = new Map;
    if (Buffer.byteLength(n) > i) {
        t(`Ignoring ${e}: larger than the size cap`);
        return l;
    }
    let d;
    try {
        d = X(n);
    } catch  {
        t(`Ignoring ${e}: not valid JSON`);
        return l;
    }
    if (typeof d !== "object" || d === null || Array.isArray(d)) {
        t(`Ignoring ${e}: not a JSON object`);
        return l;
    }
    for (let [r, f] of Object.entries(d)){
        let m = s(f);
        if (m !== undefined) {
            l.set(K0n(r), m);
        }
    }
    return l;
}
const IRt = ".meta.json";
const hNe = "server_plugin_id";
const Y0n = "marketplace_name";
const X0n = "installation_preference";
const N = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${qy}]{1,128}$`, "u");
function Xco(e) {
    return N.test(e);
}
const Fhr = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function Yce(e) {
    return Fhr.test(e);
}
const Q = p(()=>u({
        [hNe]: o().regex(Fhr).optional().catch(undefined),
        [Y0n]: o().regex(N).optional().catch(undefined),
        [X0n]: q0n().optional().catch(undefined)
    }));
const Jco = 4096;
async function ee(e) {
    let n = e + IRt;
    let i = await Ba(n, Jco);
    if (i === null) {
        return {};
    }
    let s;
    try {
        s = X(i);
    } catch  {
        t(`Ignoring plugin attribution sidecar at ${n}: not valid JSON`);
        return {};
    }
    return A(s, `sidecar at ${n}`);
}
function A(e, n) {
    let i = Q().safeParse(e);
    if (!i.success) {
        t(`Ignoring plugin attribution ${n}: not a JSON object`);
        return {};
    }
    let s = {};
    let l = i.data[hNe];
    if (typeof l === "string" && Yce(l)) {
        s.serverPluginId = l;
    }
    let d = i.data[Y0n];
    if (typeof d === "string" && Xco(d)) {
        s.marketplaceName = d;
    }
    let r = Dhr(i.data[X0n]);
    if (r !== undefined) {
        s.installationPreference = r;
    }
    if (typeof e === "object" && e !== null) {
        for (let [f, m] of [
            [
                hNe,
                s.serverPluginId
            ],
            [
                Y0n,
                s.marketplaceName
            ],
            [
                X0n,
                s.installationPreference
            ]
        ]){
            if (f in e && m === undefined) {
                t(`Ignoring plugin attribution field (${n}): invalid ${f}`);
            }
        }
    }
    return s;
}
const te = 65536;
function ne(e) {
    let a_CLAUDE_CODE_PLUGIN_ATTRIBUTION = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
    if (a_CLAUDE_CODE_PLUGIN_ATTRIBUTION === undefined) {
        return;
    }
    return $hr("CLAUDE_CODE_PLUGIN_ATTRIBUTION", a_CLAUDE_CODE_PLUGIN_ATTRIBUTION, te, (i)=>A(i, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry")).get(K0n(e));
}
async function J0n(e) {
    return ne(e) ?? await ee(e);
}
const BM = "manifest.json";
const ORt = ".marketplaces.json";
const oe = /^[A-Za-z0-9_-]{1,128}$/;
function Xce(e) {
    return oe.test(e);
}
const k = ".marketplace-";
function Qco(e) {
    if (!Xce(e)) {
        throw Error("claude.ai marketplace id is not a tagged id");
    }
    return `${k}${e}.json`;
}
function ams(e) {
    return e.startsWith(k) && e.endsWith(".json") && Xce(e.slice(k.length, -5));
}
const lms = ".last-complete-round";
function Uhr(e, n = {
    pid: process.pid,
    procStart: undefined
}) {
    return `${n.pid}:${n.procStart ?? ""}/${e}`;
}
function dit(e) {
    let n = e.indexOf("/");
    if (n === -1) {
        return {
            name: e,
            ownerPid: undefined,
            ownerProcStart: undefined
        };
    }
    let i = e.slice(0, n);
    let s = i.indexOf(":");
    let l = s === -1 ? i : i.slice(0, s);
    let d = s === -1 ? "" : i.slice(s + 1);
    let r = Number(l);
    return {
        name: e.slice(n + 1),
        ownerPid: Number.isInteger(r) && r > 0 ? r : undefined,
        ownerProcStart: d || undefined
    };
}
class T4e extends Error {
    constructor(){
        super("synced item name is a legacy alias of a reserved path");
        this.name = "LegacyReservedSpellingError";
    }
}
const xB = "synced";
const Bhr = ".trash";
const I5 = ".staging";
const P = "unbound";
const ae = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
function MRt(e) {
    return ae.test(e);
}
function jhr(e, n) {
    return `${e.toLowerCase()}_${n?.toLowerCase() ?? P}`;
}
function b(e) {
    let [n, i, ...s] = e.split("_");
    if (s.length > 0 || n === undefined || i === undefined || !MRt(n) || !(i === P || MRt(i))) {
        return null;
    }
    return {
        org: n,
        account: i
    };
}
function yNe(e) {
    return b(e) !== null;
}
function A4e(e) {
    return b(e)?.org ?? null;
}
const le = ".bucket-";
function Whr(e, n) {
    return join(e, `${le}${n}`);
}
function cms(e) {
    let n = b(e);
    if (n === null) {
        return null;
    }
    if (n.account === P) {
        return "<org>_unbound";
    }
    return "<org>_<account>";
}
const D = /~g(?:[2-9]|[1-9]\d+)$/;
function HRt(e) {
    return e.replace(D, "");
}
function DRt(e) {
    return e.replace(/[. ]+$/, "");
}
function T(e) {
    let n = DRt(e.replace(/[<>:"|?*\\/]/g, "_"));
    if (!n) {
        throw Error("synced item name resolves to sync root");
    }
    return n;
}
function ue(e, n) {
    let i = join(n, e);
    let s = relative(n, i);
    if (!s || isAbsolute(s) || s === ".." || s.startsWith(`..${sep}`)) {
        throw Error("synced item name escapes the sync root");
    }
    return i;
}
function Im(e) {
    return e.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").replace(/\u1e9e/g, "ß").normalize("NFD").toUpperCase().toLowerCase();
}
const de = /^[!-~]+$/;
const ce = 32;
const Q0n = 512;
const maxSize = 16777216;
const I = Yz(new Kc({
    max: 8192,
    maxSize,
    sizeCalculation: (e, n)=>n.length + e.length
}));
function uS(e) {
    if (de.test(e)) {
        return e.toLowerCase();
    }
    if (e.length < ce || e.length > Q0n) {
        return C(e);
    }
    let n = I.get(e);
    if (n === undefined) {
        n = C(e);
        I.set(MDt(e), n);
    }
    return n;
}
function C(e) {
    return Im(NCo(MZ(Ww(e)).replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "").replace(/[\p{Pd}\u2212]/gu, "-").replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":")));
}
function B4(e) {
    return ul(e).startsWith(".");
}
function Zco(e) {
    return ul(e) === ".git";
}
function cV(e) {
    return Im(DRt(e)) === xB;
}
function j4(e, n) {
    let i = T(e);
    if (Rn(i) !== i) {
        throw Error("synced item name contains display-hazard characters");
    }
    if (B4(i)) {
        throw Error("synced item name resolves to reserved path");
    }
    if (Im(i).endsWith(IRt)) {
        throw Error("synced item name resolves to reserved path");
    }
    if (D.test(Im(i))) {
        throw Error("synced item name resolves to reserved path");
    }
    if (yNe(Im(i))) {
        throw Error("synced item name resolves to reserved path");
    }
    return C4e(e, n);
}
function edo(e, n, i) {
    let s = j4(e, i);
    if (n <= 1) {
        return s;
    }
    return join(i, `${basename(s)}~g${n}`);
}
function C4e(e, n) {
    let i = T(e);
    let s = Im(ul(i));
    if (s === BM || s === I5) {
        let l = i.toLowerCase();
        if (l === BM || l === I5) {
            throw Error("synced item name resolves to reserved path");
        }
        throw new T4e;
    }
    if (L(s)) {
        if (L(i.toLowerCase())) {
            throw Error("synced item name resolves to reserved path");
        }
        throw new T4e;
    }
    return ue(i, n);
}
function L(e) {
    let n = Qe(e, ".").replace(/ +$/, "");
    return /~\d/.test(e) || /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/.test(n);
}
function Z0n(e, n) {
    let i;
    try {
        i = JSON.parse(e);
    } catch  {
        return "claim-all";
    }
    if (!Array.isArray(i?.skills)) {
        return "claim-all";
    }
    if (i.staleDirs !== undefined && !Array.isArray(i.staleDirs)) {
        return "claim-all";
    }
    if (i.pendingClaims !== undefined && !Array.isArray(i.pendingClaims)) {
        return "claim-all";
    }
    let s = new Set;
    let l = i.skills.flatMap((r)=>{
        if (typeof r === "object" && r !== null && typeof r.name === "string") {
            return [
                r.name
            ];
        }
        return [];
    });
    let d = (i.pendingClaims ?? []).flatMap((r)=>{
        if (typeof r === "string") {
            return [
                dit(r).name
            ];
        }
        return [];
    });
    for (let r of [
        l,
        i.staleDirs,
        d
    ]){
        if (Array.isArray(r)) {
            for (let f of r){
                if (typeof f === "string") {
                    for (let m of ge(f, n)){
                        s.add(m);
                    }
                }
            }
        }
    }
    return s;
}
function ge(e, n) {
    let i = [
        LRt(e)
    ];
    try {
        i.push(LRt(basename(C4e(e, n))));
    } catch  {}
    return i;
}
function LRt(e) {
    return Im(ul(e));
}
const dV = join("skills", xB);
const R4e = join("skills", Bhr);
const eLn = join("skills", I5);
const dms = join(dV, I5);
const PB = join("plugins", xB);
const _Ne = join("plugins", Bhr);
const ums = join(PB, I5);
export { CRt, z0n, G0n, V0n, zco, Gco, Vco, mNe, q0n, Dhr, qco, RRt, xRt, fXt, Kco, Lhr, PRt, mXt, uCe, gNe, B_e, pCe, Yco, dS, DQ, Nhr, K0n, $hr, IRt, hNe, Y0n, X0n, Xco, Fhr, Yce, Jco, J0n, BM, ORt, Xce, Qco, ams, lms, Uhr, dit, T4e, xB, Bhr, I5, MRt, jhr, yNe, A4e, Whr, cms, HRt, DRt, Im, Q0n, uS, B4, Zco, cV, j4, edo, C4e, Z0n, LRt, dV, R4e, eLn, dms, PB, _Ne, ums };
