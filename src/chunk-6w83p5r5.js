import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { tj } from "/$bunfs/root/chunk-24agvrd9.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { cZt, Mn, Woe, Ib, Gt, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Zn } from "/$bunfs/root/chunk-kasbfbhj.js";
const f = 86400000;
const timeout = 3000;
var Jee = po(async (r)=>{
    try {
        return {
            success: true,
            data: (await Ib(async ()=>{
                let o = await Gt.get("/api/oauth/account/settings", {
                    timeout,
                    credentials: r
                });
                if (!o.ok) {
                    throw Error(`Failed to get Grove settings: ${o.reason}`);
                }
                return o;
            }, {
                credentials: r
            })).data
        };
    } catch (error) {
        if (!(error instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(error.message)) {
            t(`Failed to fetch Grove settings: ${error}`, {
                level: "error"
            });
        }
        Jee.cache.clear?.();
        return {
            success: false
        };
    }
}, ()=>"account");
async function fXn(r) {
    try {
        await Ib(async ()=>{
            let e = await Gt.post("/api/oauth/account/grove_notice_viewed", {}, {
                credentials: r
            });
            if (!e.ok) {
                throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
            }
            return e;
        }, {
            credentials: r
        });
        Jee.cache.clear?.();
        g("api_grove_notice_mark_viewed");
    } catch (error) {
        t(`Failed to mark Grove notice viewed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        m("api_grove_notice_mark_viewed", "request_failed");
    }
}
async function Eyt(grove_enabled, e) {
    try {
        await Ib(async ()=>{
            let o = await Gt.patch("/api/oauth/account/settings", {
                grove_enabled
            }, {
                credentials: e
            });
            if (!o.ok) {
                throw Error(`Failed to update Grove settings: ${o.reason}`);
            }
            return o;
        }, {
            credentials: e
        });
        Jee.cache.clear?.();
        g("api_grove_settings_update");
    } catch (error) {
        t(`updateGroveSettings failed: ${String(error)}`, {
            level: "error"
        });
        m("api_grove_settings_update", "request_failed");
    }
}
async function zQe(r, e) {
    if (!Woe()) {
        return false;
    }
    if (!cZt()) {
        return false;
    }
    let o = Mn()?.accountUuid;
    if (!o) {
        return false;
    }
    let n = ce().groveConfigCache?.[o];
    let d = Date.now();
    if (!n) {
        t("Grove: No cache, fetching config in background (dialog skipped this session)");
        l(o, r, e);
        return false;
    }
    if (d - n.timestamp > f) {
        t("Grove: Cache stale, returning cached data and refreshing in background");
        l(o, r, e);
        return n.grove_enabled;
    }
    t("Grove: Using fresh cached config");
    return n.grove_enabled;
}
async function l(r, e, o) {
    try {
        let a = await iEe(o);
        if (!a.success) {
            return;
        }
        let grove_enabled = a.data.grove_enabled;
        let d = ce().groveConfigCache?.[r];
        if (d?.grove_enabled === grove_enabled && Date.now() - d.timestamp <= f) {
            return;
        }
        await Ae((s)=>({
                ...s,
                groveConfigCache: {
                    ...s.groveConfigCache,
                    [r]: {
                        grove_enabled,
                        timestamp: Date.now()
                    }
                }
            }), e);
    } catch (error) {
        t(`Grove: Failed to fetch and store config: ${error}`);
    }
}
var iEe = po(async (r)=>{
    try {
        let e = await Ib(async ()=>{
            let s = await Gt.get("/api/claude_code_grove", {
                timeout,
                credentials: r
            });
            if (!s.ok) {
                throw Error(`Failed to fetch Grove notice config: ${s.reason}`);
            }
            return s;
        }, {
            credentials: r
        });
        let { grove_enabled, domain_excluded, notice_is_grace_period, notice_reminder_frequency } = e.data;
        return {
            success: true,
            data: {
                grove_enabled,
                domain_excluded: domain_excluded ?? false,
                notice_is_grace_period: notice_is_grace_period ?? true,
                notice_reminder_frequency
            }
        };
    } catch (error) {
        t(`Failed to fetch Grove notice config: ${error}`);
        return {
            success: false
        };
    }
}, ()=>"config");
function mXn(r, e, o) {
    if (!r.success || !e.success) {
        return false;
    }
    let r_data = r.data;
    let e_data = e.data;
    if (r_data.grove_enabled !== null) {
        return false;
    }
    if (o) {
        return true;
    }
    if (!e_data.notice_is_grace_period) {
        return true;
    }
    let n_notice_reminder_frequency = e_data.notice_reminder_frequency;
    if (n_notice_reminder_frequency !== null && r_data.grove_notice_viewed_at) {
        let u = new Date(r_data.grove_notice_viewed_at).getTime();
        if (isNaN(u)) {
            c(Error(`Invalid grove_notice_viewed_at from API: ${r_data.grove_notice_viewed_at}`));
            return true;
        }
        return Math.floor((Date.now() - u) / 86400000) >= n_notice_reminder_frequency;
    } else {
        let u = r_data.grove_notice_viewed_at;
        return u === null || u === undefined;
    }
}
async function XGo(r) {
    let [e, o] = await Promise.all([
        Jee(r),
        iEe(r)
    ]);
    if (mXn(e, o, false)) {
        let n = o.success ? o.data : null;
        i("tengu_grove_print_viewed", {
            dismissable: n?.notice_is_grace_period
        });
        if (n === null || n.notice_is_grace_period) {
            tj(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`);
            await fXn(r);
        } else {
            tj(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`);
            await Zn(1);
        }
    }
}
export { Jee, fXn, Eyt, zQe, iEe, mXn, XGo };
