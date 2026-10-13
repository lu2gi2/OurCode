import { Ke } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { di } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { AY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mue } from "/$bunfs/root/chunk-pp3y3t61.js";
import { wkt, Gnt, VYt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { q9t, ghr } from "/$bunfs/root/chunk-38fr02qr.js";
import { Ui, ag } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Go, lc } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Mie, pOe } from "/$bunfs/root/chunk-3259venz.js";
import { J8n, WBr, Q8n, zBr } from "/$bunfs/root/chunk-v22tbs3z.js";
import { o, u, De, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { normalize, sep } from "path";
const X = new Set([
    "canceled",
    "policy_pending",
    "egress_blocked",
    "essential_traffic",
    "unexpected",
    "credential_name",
    ...zBr
]);
const G = new Set([
    "not_uploaded_here",
    ...WBr
]);
const g = new lt(()=>({
        last: Promise.resolve(),
        uploaded: new Set
    }));
const O = p(()=>De({
        path: o().min(1).max(pOe)
    }));
const q = p(()=>Ue([
        u({
            ok: A(true),
            file_id: o(),
            name: o()
        }),
        u({
            ok: A(false),
            code: o().max(64)
        })
    ]));
async function cUs(e, i, t, r, n) {
    let { path } = O().parse(e);
    let l = g.of(t);
    let m = ()=>E(path, i, t, r, n);
    let f = l.last.then(m, m);
    l.last = f;
    let output = await f;
    if (output.ok) {
        l.uploaded.add(output.file_id);
    }
    return {
        summary: output.ok ? "uploaded" : `not uploaded: ${output.code}`,
        output
    };
}
const y = p(()=>De({
        file_id: o().min(1).max(256)
    }));
const J = p(()=>Ue([
        u({
            ok: A(true)
        }),
        u({
            ok: A(false),
            code: o().max(64)
        })
    ]));
async function dUs(e, i) {
    let { file_id } = y().parse(e);
    if (!g.of(i).uploaded.delete(file_id)) {
        return {
            summary: "not deleted: not_uploaded_here",
            output: {
                ok: false,
                code: "not_uploaded_here"
            }
        };
    }
    let r = await Q8n([
        file_id
    ]);
    if (r === undefined) {
        return {
            summary: "deleted",
            output: {
                ok: true
            }
        };
    }
    return {
        summary: `not deleted: ${r}`,
        output: {
            ok: false,
            code: r
        }
    };
}
async function E(path, i, t, r, n) {
    if (i.aborted) {
        return {
            ok: false,
            code: "canceled"
        };
    }
    let s = Mue() ? "policy_pending" : Mie();
    if (s !== undefined) {
        return {
            ok: false,
            code: s
        };
    }
    if (!AY()) {
        return {
            ok: false,
            code: "no_token"
        };
    }
    let l = normalize(path);
    let { realDirectory } = r;
    try {
        if (!_(l) && await Gnt(l, l, {
            realDirectory
        }) === "credential_name") {
            return {
                ok: false,
                code: "credential_name"
            };
        }
    } catch  {
        return {
            ok: false,
            code: "path_rejected"
        };
    }
    let f = await Zpt(path, t, r, n);
    if (f === undefined) {
        return {
            ok: false,
            code: "path_rejected"
        };
    }
    let d = await Gnt(l, f, {
        attached: _(l) && _(f),
        realDirectory
    });
    if (d !== undefined) {
        return {
            ok: false,
            code: d === "credential_name" ? d : "path_rejected"
        };
    }
    try {
        return await J8n(f, undefined, i);
    } catch (error) {
        if (Ke(error)) {
            return {
                ok: false,
                code: "canceled"
            };
        }
        c(error);
        return {
            ok: false,
            code: "unexpected"
        };
    }
}
function _(e) {
    return Boolean(a.CLAUDE_CODE_REMOTE) && T(e, q9t);
}
async function Zpt(e, i, t, r) {
    let n;
    try {
        n = await t.localFileAt(e);
    } catch  {
        return;
    }
    if (wkt(n) || h(e, n, r) || !await P(n, i, t)) {
        return undefined;
    }
    return n;
}
async function P(e, i, { realDirectory, home }) {
    if (await VYt(e, realDirectory)) {
        return false;
    }
    if (a.CLAUDE_CODE_REMOTE && ghr.some((l)=>T(e, l))) {
        return true;
    }
    let n = i.project?.originalCwd;
    if (n === undefined || n === "") {
        return false;
    }
    let s = await realDirectory(home);
    if (s === undefined) {
        return false;
    }
    return s !== n && !T(s, n) && T(e, n);
}
function h(e, i, t) {
    if (t === undefined) {
        return false;
    }
    if (Go(t, ag) || lc(t, ag)) {
        return true;
    }
    let r = [
        di(e),
        di(i)
    ];
    if (r.some((n)=>n.unresolved)) {
        return true;
    }
    return r.some((n)=>n.spellings.some((s)=>Ui(s, t, "read", "deny") !== null || Ui(s, t, "read", "ask") !== null));
}
function T(e, i) {
    return e.startsWith(i + sep);
}
export { cUs, dUs, Zpt };
