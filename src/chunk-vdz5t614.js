import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ybt, JGt, QGt, ZGt } from "/$bunfs/root/chunk-gs3dthpm.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { nr, _C } from "/$bunfs/root/chunk-wew3321y.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { yV } from "/$bunfs/root/chunk-ghreee2m.js";
const p = /^\d{1,10}$/;
const w = /^\/([A-Za-z0-9-]{1,39})\/([A-Za-z0-9._-]{1,100})\/pull\/(\d{1,10})$/;
function d(n) {
    let e;
    try {
        e = new URL(n);
    } catch  {
        return null;
    }
    if (e.protocol !== "https:" || _C(e.hostname) !== nr || e.username !== "" || e.password !== "" || e.port !== "" || e.search !== "" || e.hash !== "") {
        return null;
    }
    let o = w.exec(e.pathname);
    if (o === null) {
        return null;
    }
    return {
        owner: o[1],
        repo: o[2],
        number: Number(o[3])
    };
}
const f = 8;
const m = [];
const nGo = yV("prReviewTargets", m);
function rGo(n, rawTarget) {
    let cwd = se();
    let sessionId = String(K());
    let s = {
        sessionId,
        rawTarget,
        cwd,
        pinned: h(g(rawTarget), cwd)
    };
    n.set((i)=>{
        let u = i.filter((t)=>!(t.sessionId === sessionId && t.rawTarget === rawTarget && t.cwd === cwd));
        return [
            s,
            ...u
        ].slice(0, f);
    });
}
function g(rawTarget) {
    if (rawTarget === "") {
        return [];
    }
    if (p.test(rawTarget) || d(rawTarget) !== null) {
        return [
            rawTarget
        ];
    }
    return null;
}
async function h(n, cwd) {
    if (n === null) {
        return null;
    }
    let { code, stdout } = await ct("gh", [
        "pr",
        "view",
        ...n,
        "--json",
        "number,url,headRefOid"
    ], {
        cwd
    });
    if (code !== 0) {
        return null;
    }
    let s;
    try {
        s = X(stdout);
    } catch  {
        return null;
    }
    if (typeof s !== "object" || s === null) {
        return null;
    }
    let { number, url, headRefOid } = s;
    if (typeof url !== "string" || typeof headRefOid !== "string") {
        return null;
    }
    let r = d(url);
    let l = headRefOid.toLowerCase();
    if (r === null || !Number.isSafeInteger(number) || number < 1 || !ZGt.test(l)) {
        return null;
    }
    if (r.number !== number || !JGt.test(r.owner) || !QGt.test(r.repo)) {
        return null;
    }
    return {
        owner: r.owner,
        repo: r.repo,
        number,
        headSha: l
    };
}
async function oGo(n, e, o = {}) {
    let a = n.get();
    if (!a.some((t)=>t.sessionId === String(K()))) {
        return {
            ok: false,
            reason: "no artifact-pr-review invocation is recorded in this session — composed review pages publish only from the skill flow (run /artifact-pr-review)"
        };
    }
    let s = String(K());
    let i = [];
    for (let t of a){
        if (t.sessionId !== s) {
            continue;
        }
        let r = await t.pinned;
        if (r === null) {
            continue;
        }
        if (r.owner !== e.owner || r.repo !== e.repo || r.number !== e.number) {
            i.push(r);
            continue;
        }
        let l = e.reviewed_head_sha.toLowerCase();
        if (o.acceptReviewedShaAsAnchor === true) {
            return {
                ok: true,
                identity: {
                    ...r,
                    headSha: l
                }
            };
        }
        let c = await h([
            Ybt(r.owner, r.repo, r.number)
        ], t.cwd);
        if (c === null) {
            return {
                ok: false,
                reason: `the recorded review target ${r.owner}/${r.repo}#${r.number} could not be re-resolved through gh at publish time \u2014 check gh auth and retry`
            };
        }
        if (c.headSha !== l) {
            return {
                ok: false,
                reason: `the PR moved since the review: the payload reviewed ${e.reviewed_head_sha.slice(0, 12)}\u2026 but ` + `${r.owner}/${r.repo}#${r.number} is now at ${c.headSha.slice(0, 12)}\u2026 \u2014 re-gather the PR (step 1) and re-author the payload against the current head`
            };
        }
        return {
            ok: true,
            identity: {
                ...r,
                headSha: c.headSha
            }
        };
    }
    let u = i.map((t)=>`${t.owner}/${t.repo}#${t.number}`).join(", ");
    return {
        ok: false,
        reason: `the payload names ${e.owner}/${e.repo}#${e.number}, ` + (u === "" ? "but no recorded review target resolved when the review was invoked — the target is fixed at invocation, so fixing anything now cannot revive this run. Check gh auth if resolution keeps failing, then re-run /artifact-pr-review to publish a fresh review." : `but this session's review invocation resolves to ${u} \u2014 the page's identity comes from the invocation, not the payload`)
    };
}
function sGo() {
    return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}
export { nGo, rGo, oGo, sGo };
