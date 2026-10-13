const Yf = 10000;
async function Wi(e, r, t) {
    let s = Math.max(1, Math.floor(t?.maxPages ?? 10000));
    let u;
    for(let a = 0; a < s; a++){
        if (t?.budget !== undefined) {
            if (t.budget.pagesLeft < 1) {
                return {
                    status: "capped"
                };
            }
            t.budget.pagesLeft--;
        }
        let n = await e(u);
        if (!n.ok) {
            return {
                status: "error",
                error: n.error
            };
        }
        await r(n.value.items);
        if (t?.until?.()) {
            return {
                status: "done"
            };
        }
        u = n.value.cursor;
        if (!u) {
            return {
                status: "done"
            };
        }
    }
    return {
        status: "capped"
    };
}
function kGn(pagesLeft = 10000) {
    return {
        pagesLeft,
        capped: 0
    };
}
function $Is(e, r) {
    if (e.status === "error") {
        return "error";
    }
    if (e.status === "capped") {
        r.capped++;
        if (r.capped === 1) {
            return "first-truncation";
        }
        return undefined;
    }
}
function FIs(e) {
    return Math.max(0, e.capped - 1);
}
export { Yf, Wi, kGn, $Is, FIs };
