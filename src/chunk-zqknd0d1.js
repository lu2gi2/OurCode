import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { randomUUID } from "crypto";
const m = 256;
function Hbn(e = randomUUID(), t) {
    if (t !== undefined) {
        let o = ee().laneNoticeSlugs;
        o.set(e, t);
        r(o);
    }
    return e;
}
function k4o(e) {
    return ee().laneNoticeSlugs.get(e);
}
function T4o(e, slug, ownWordsOnly) {
    let n = ee();
    let i = Date.now();
    if (e !== undefined) {
        n.commentReads.set(e, {
            slug,
            ownWordsOnly
        });
        r(n.commentReads);
    }
    n.commentReadAtBySlug.delete(slug);
    n.commentReadAtBySlug.set(slug, i);
    if (r(n.commentReadAtBySlug) || !ownWordsOnly) {
        n.lastOthersCommentReadAt = i;
    }
}
function A4o(e) {
    return ee().commentReads.get(e);
}
function Dbn(e, t) {
    for (let [o, n] of ee().commentReadAtBySlug){
        if (o !== e && !(Number.isFinite(t) && n < t)) {
            return true;
        }
    }
    return false;
}
function Lbn() {
    return ee().lastOthersCommentReadAt;
}
function r(e) {
    if (e.size <= m) {
        return false;
    }
    let value = e.keys().next().value;
    if (value !== undefined) {
        e.delete(value);
    }
    return true;
}
export { Hbn, k4o, T4o, A4o, Dbn, Lbn };
