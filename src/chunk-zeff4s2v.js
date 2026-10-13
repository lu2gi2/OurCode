import { eo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Mn, kr, Nt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ite } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { qwe, Vft, _fe } from "/$bunfs/root/chunk-5ghn2enc.js";
import { Qin, Zin } from "/$bunfs/root/chunk-tmrtnnjz.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { NQe, z1t, bme } from "/$bunfs/root/chunk-c3rtkdth.js";
import { o, u, Wr, A } from "/$bunfs/root/chunk-smx21d0k.js";
function a() {
    return o().regex(/^\P{Cc}*$/u);
}
const h = p(()=>Wr("mode", [
        u({
            mode: A("one_step")
        }),
        u({
            mode: A("confirm"),
            title: a().optional(),
            body: a().optional(),
            note: a().optional(),
            send: a().optional(),
            cancel: a().optional()
        })
    ]));
function ocn() {
    let i = k("tengu_tidy_lemon", null);
    if (i === null || i === undefined) {
        return null;
    }
    let r = h().safeParse(i);
    if (r.success) {
        return r.data;
    }
    return null;
}
async function Y9e(i, r) {
    let onDone = ite(i);
    if (z1t()) {
        return e(Zin, {
            onDone
        });
    }
    let t = await bme({
        openInBrowser: true
    }, r.credentials);
    if (t.type === "message") {
        onDone(t.value);
        return null;
    }
    if (t.type === "confirm-admin-request") {
        if (Nt()) {
            onDone(NQe);
            return null;
        }
        return e(Qin, {
            extraUsage: t.extraUsage,
            flag: ocn(),
            wouldTakeAnswer: ()=>true,
            onDone
        });
    }
    let l = kr();
    if (l === "team" || l === "enterprise") {
        onDone(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`);
        return null;
    }
    if (!t.opened) {
        onDone(`Visit ${t.url} to manage usage credits.`);
        return null;
    }
    let s = Mn();
    let previousAccount = s && {
        accountUuid: s.accountUuid,
        organizationUuid: s.organizationUuid
    };
    let previousGatewayAuth = eo();
    return e(_fe, {
        startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
        onDone: async (m, y, setAppState)=>{
            let f = await qwe(r, m, {
                setAppState,
                previousAccount,
                previousGatewayAuth
            });
            onDone(...Vft(r, m, f));
        }
    });
}
export { ocn, Y9e };
