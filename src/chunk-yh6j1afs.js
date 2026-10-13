import { hz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c5 } from "/$bunfs/root/chunk-tzz3htys.js";
import { A4 } from "/$bunfs/root/chunk-z8b8q76g.js";
import { Pl } from "/$bunfs/root/chunk-9t51q67t.js";
const zu = "CronCreate";
const $_ = "CronDelete";
const Z0e = "CronList";
const t = 300000;
const wAe = c5.recurringMaxAgeMs / 86400000;
function vE() {
    return !a.CLAUDE_CODE_DISABLE_CRON && hz("tengu_kairos_cron", true, t);
}
function Zye() {
    return hz("tengu_kairos_cron_durable", true, t);
}
function Hoo(e) {
    if (e) {
        return "Schedule a prompt to run at a future time — either recurring on a cron schedule, or once at a specific time. Pass durable: true to persist to .claude/scheduled_tasks.json; otherwise session-only.";
    }
    return "Schedule a prompt to run at a future time within this Claude session — either recurring on a cron schedule, or once at a specific time.";
}
function Doo(e) {
    if (e) {
        return "true = persist to .claude/scheduled_tasks.json and survive restarts. false (default) = in-memory only, dies when this Claude session ends. Use true only when the user asks the task to survive across sessions.";
    }
    return "Has no effect — durable persistence is not available. All jobs are session-only (in-memory, gone when this Claude session ends).";
}
function Loo(e) {
    let o = e ? `## Durability

By default (durable: false) the job lives only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits. Pass durable: true to write to .claude/scheduled_tasks.json so the job survives restarts. Only use durable: true when the user explicitly asks for the task to persist ("keep doing this every day", "set this up permanently"). Most "remind me in 5 minutes" / "check back in an hour" requests should stay session-only.` : `## Session-only

Jobs live only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits.`;
    let s = e ? "Durable jobs persist to .claude/scheduled_tasks.json and survive session restarts — on next launch they resume automatically. One-shot durable tasks that were missed while the REPL was closed are surfaced for catch-up. Session-only jobs die with the process. " : "";
    return `Schedule a prompt to be enqueued at a future time. Use for both recurring schedules and one-shot reminders.

Uses standard 5-field cron in the user's local timezone: minute hour day-of-month month day-of-week. "0 9 * * *" means 9am local \u2014 no timezone conversion needed.

## One-shot tasks (recurring: false)

For "remind me at X" or "at <time>, do Y" requests \u2014 fire once then auto-delete.
Pin minute/hour/day-of-month/month to specific values:
  "remind me at 2:30pm today to check the deploy" \u2192 cron: "30 14 <today_dom> <today_month> *", recurring: false
  "tomorrow morning, run the smoke test" \u2192 cron: "57 8 <tomorrow_dom> <tomorrow_month> *", recurring: false

## Recurring jobs (recurring: true, the default)

For "every N minutes" / "every hour" / "weekdays at 9am" requests:
  "*/5 * * * *" (every 5 min), "0 * * * *" (hourly), "0 9 * * 1-5" (weekdays at 9am local)

## Avoid the :00 and :30 minute marks when the task allows it

Every user who asks for "9am" gets \`0 9\`, and every user who asks for "hourly" gets \`0 *\` \u2014 which means requests from across the planet land on the API at the same instant. When the user's request is approximate, pick a minute that is NOT 0 or 30:
  "every morning around 9" \u2192 "57 8 * * *" or "3 9 * * *" (not "0 9 * * *")
  "hourly" \u2192 "7 * * * *" (not "0 * * * *")
  "in an hour or so, remind me to..." \u2192 pick whatever minute you land on, don't round

Only use minute 0 or 30 when the user names that exact time and clearly means it ("at 9:00 sharp", "at half past", coordinating with a meeting). When in doubt, nudge a few minutes early or late \u2014 the user will not notice, and the fleet will.

${o}
${A4() ? `
## Not for live watching

${zu} re-runs a prompt at fixed wall-clock intervals. To watch a log file, process, or command output and be notified the moment something changes, use the ${Pl} tool instead \u2014 ${Pl} streams events as they happen; cron polls on a schedule.
` : ""}
## Runtime behavior

Jobs only fire while the REPL is idle (not mid-query). ${s}The scheduler adds a small deterministic jitter on top of whatever you pick: recurring tasks fire up to 10% of their period late (max 15 min); one-shot tasks landing on :00 or :30 fire up to 90 s early. Picking an off-minute is still the bigger lever.

Recurring tasks auto-expire after ${wAe} days \u2014 they fire one final time, then are deleted. This bounds session lifetime. Tell the user about the ${wAe}-day limit when scheduling recurring jobs.

Returns a job ID you can pass to ${$_}.`;
}
const Noo = "Cancel a scheduled cron job by ID";
function $oo(e) {
    if (e) {
        return `Cancel a cron job previously scheduled with ${zu}. Removes it from .claude/scheduled_tasks.json (durable jobs) or the in-memory session store (session-only jobs).`;
    }
    return `Cancel a cron job previously scheduled with ${zu}. Removes it from the in-memory session store.`;
}
const Foo = "List scheduled cron jobs";
function Uoo(e) {
    if (e) {
        return `List all cron jobs scheduled via ${zu}, both durable (.claude/scheduled_tasks.json) and session-only.`;
    }
    return `List all cron jobs scheduled via ${zu} in this session.`;
}
export { zu, $_, Z0e, wAe, vE, Zye, Hoo, Doo, Loo, Noo, $oo, Foo, Uoo };
