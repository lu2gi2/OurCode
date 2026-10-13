import { Xr, rC, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { mx } from "/$bunfs/root/chunk-e0mzmxta.js";
import { me, hn, Uo, ir, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
const c = p(()=>ir(bt({
        id: me(),
        title: me().optional(),
        text: me(),
        footer: me().optional(),
        priority: hn().default(0),
        maxImpressions: hn().default(3),
        accentBar: Uo().default(true),
        requiresModel: me().optional()
    })).default([]));
const i = [];
function u() {
    let n = rC("tengu_startup_announcements", i);
    let t = c().safeParse(n);
    if (t.success) {
        return t.data;
    }
    return i;
}
function s(n) {
    return n.requiresModel === undefined || Xr(n.requiresModel);
}
function Vwe(n) {
    let t = mx();
    if (t.startupAnnouncementPick !== undefined) {
        return t.startupAnnouncementPick;
    }
    let r = ce().announcementImpressions ?? {};
    let o = u().filter((e)=>(r[e.id] ?? 0) < e.maxImpressions && s(e)).sort((e, a)=>a.priority - e.priority)[0];
    if (n && o !== undefined) {
        t.startupAnnouncementPick = o;
    }
    return o;
}
function I0o() {
    let n = u().filter(s).sort((t, r)=>r.priority - t.priority)[0];
    if (n === undefined) {
        return false;
    }
    return JSON.stringify({
        id: n.id,
        title: n.title,
        text: n.text,
        footer: n.footer
    });
}
export { Vwe, I0o };
