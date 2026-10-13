import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { lo } from "/$bunfs/root/chunk-5vhepr4t.js";
import { xh } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { fX, XN, X1t, ROe, BQe, khn } from "/$bunfs/root/chunk-h2416w89.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function k(rows) {
    if (rows.length === 0) {
        return ge.dim("  (no skills loaded)");
    }
    let { cells, widths } = X1t(rows);
    let o = ge.dim(`  ${fX("skill", widths.name)}  ${fX("source", widths.source)}  ${XN("context", widths.context)}  ${XN("7d tokens", widths.week)}  ${XN("uses", widths.uses + 1)}  last used`);
    let a = rows.map((i, h)=>{
        let u = cells[h];
        let d = `  ${fX(i.name, widths.name)}  ${ge.dim(fX(i.source, widths.source))}  ${XN(u.context, widths.context)}  ${XN(u.week, widths.week)}  ${XN(String(i.usageCount), widths.uses)}\xD7  ${u.lastUsed}`;
        if (i.usageCount === 0) {
            return ge.yellow(d);
        }
        return d;
    }).join(`
`);
    return `${o}
${a}`;
}
async function y(r) {
    let { rows, unusedOwned, unusedSynced, unusedFromPlugins, unusedFromMcp, unusedMcpServers, disusedPlugins, weekTokensNote } = await khn(BQe(r));
    let s = [];
    s.push(ge.bold("Skills loaded this session"));
    s.push("");
    s.push(k(rows));
    if (rows.length > 0) {
        s.push("");
        s.push(ge.dim("  context = this skill's one-line listing in the system prompt, included every turn"));
        s.push(ge.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)"));
        s.push(ge.dim(weekTokensNote === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${weekTokensNote}`));
    }
    s.push("");
    if (unusedOwned.length > 0) {
        s.push(ge.yellow(`${unusedOwned.length} ${I(unusedOwned.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
    }
    if (unusedSynced.length > 0) {
        s.push(ge.yellow(`${unusedSynced.length} ${I(unusedSynced.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${unusedSynced.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
    }
    if (unusedFromPlugins.length > 0) {
        let n = D(unusedFromPlugins.map((p)=>p.source));
        s.push(ge.yellow(`${unusedFromPlugins.length} plugin ${I(unusedFromPlugins.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
    }
    if (unusedFromMcp.length > 0) {
        let n = unusedMcpServers.length > 0 ? `, from ${unusedMcpServers.join(", ")}` : "";
        let p = unusedMcpServers.length <= 1;
        s.push(ge.yellow(`${unusedFromMcp.length} MCP ${I(unusedFromMcp.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${p ? "that server" : "those servers"} off in /mcp also removes ${p ? "its" : "their"} tools.`));
    }
    if (rows.length > 0 && rows.every((n)=>n.usageCount > 0)) {
        s.push(ge.green("All loaded skills have been used at least once."));
    }
    if (disusedPlugins.length > 0) {
        s.push("");
        s.push(ge.bold("Plugins not used recently"));
        s.push("");
        for (let n of disusedPlugins){
            s.push(`  ${ge.yellow(xh(n.name))}  ${ge.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
        }
        s.push("");
        s.push(ge.dim("  Manage these in /plugin"));
    }
    if (rows.length === 0) {
        f("cli_skill_doctor", "no_user_skills");
    } else if (weekTokensNote !== null) {
        f("cli_skill_doctor", "scan_policy_denied");
    } else {
        g("cli_skill_doctor");
    }
    return s.join(`
`);
}
export const Sjr = async (r, t)=>{
    if (lo(t.session)) {
        return {
            type: "text",
            value: "Skill usage reports are not available on this connection."
        };
    }
    try {
        let value = await y(t);
        if (lo(t.session)) {
            return {
                type: "text",
                value: "Skill usage reports are not available on this connection."
            };
        }
        return {
            type: "text",
            value
        };
    } catch (error) {
        let o = error instanceof ROe ? error.cause : error;
        c(o);
        m("cli_skill_doctor", error instanceof ROe ? error.featureErrorCode : "render_failed");
        if (lo(t.session)) {
            return {
                type: "text",
                value: "Couldn't compute skill usage.",
                outcome: {
                    kind: "failed"
                }
            };
        }
        return {
            type: "text",
            value: `Couldn't compute skill usage. Run with --debug for details. (${l(o)})`,
            outcome: {
                kind: "failed"
            }
        };
    }
};
