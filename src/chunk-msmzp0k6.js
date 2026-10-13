import { Mh, c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ms } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ys } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Po, Ig, Vt, wi, zk, dl, d3e, y_ } from "/$bunfs/root/chunk-k3tkc302.js";
import { Wl } from "/$bunfs/root/chunk-gs3dthpm.js";
import { jf } from "/$bunfs/root/chunk-0sswwkdg.js";
import { wZe } from "/$bunfs/root/chunk-sqysdndt.js";
import { vt, Q4e, wc, Om } from "/$bunfs/root/chunk-0vgmtssp.js";
import { Hwn } from "/$bunfs/root/chunk-krjtgnpw.js";
import { SV, K_e, xCe } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { op } from "/$bunfs/root/chunk-veat50k0.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { HU, F_t } from "/$bunfs/root/chunk-tkmyd255.js";
import { REe, lte, RX, Rze, xX } from "/$bunfs/root/chunk-zan77tdd.js";
import { HUt } from "/$bunfs/root/chunk-9y5n9bqe.js";
import { o_t, bWt } from "/$bunfs/root/chunk-f5ewd4s8.js";
import { cE } from "/$bunfs/root/chunk-37qzy58m.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { u } from "/$bunfs/root/chunk-smx21d0k.js";
const p = "README.md";
const eWe = "project/README.md";
const K = 12000;
const Y = 7000;
const q = 700;
const OUt = {
    interrupted: "interrupted before it could be read",
    timeout: "reading it took too long",
    failed: "the read failed unexpectedly"
};
function rme(e, t, n, o) {
    let r = ()=>{
        if (n.abortController.signal.aborted) {
            return "interrupted";
        }
        if (t.aborted) {
            return "timeout";
        }
        return "failed";
    };
    return new Promise((resolve)=>{
        let i = ()=>resolve(o(r()));
        if (t.aborted) {
            e.catch(()=>{});
            i();
            return;
        }
        t.addEventListener("abort", i, {
            once: true
        });
        e.then((d)=>{
            t.removeEventListener("abort", i);
            resolve(d);
        }, (d)=>{
            t.removeEventListener("abort", i);
            let a = r();
            if (a === "failed") {
                c(d);
            }
            resolve(o(a));
        });
    });
}
function Y1o(e, t) {
    let n = e.find((o)=>o.default !== undefined);
    if (n === undefined || n.default === undefined) {
        if (e.length === 0) {
            return {
                url: undefined,
                why: "the account lists no design systems — build without one unless the user names one",
                code: "default_none_listed"
            };
        }
        return {
            url: undefined,
            why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${J(e)}`,
            code: "default_unmarked"
        };
    }
    return {
        url: n.url,
        source: {
            default: n.default,
            title: n.title
        }
    };
}
function J(e) {
    let n = e.slice(0, 3).map((o)=>`${_(jf(zk(o.title, 40)) ?? "Untitled")} ${wi(o.url, "(unrecognized address)")}`);
    if (e.length > 3) {
        return `${n.join(", ")}, and ${e.length - 3} more`;
    }
    return n.join(", ");
}
async function mUr(e, signal, n, o, r, s) {
    let parsed = Vt(e);
    if (parsed === null || parsed.env !== Po()) {
        return {
            ok: false,
            why: "it is not an Artifact URL of this session's claude.ai",
            code: "not_a_link"
        };
    }
    let a = [
        ...REe() ? [
            "files"
        ] : [],
        ...o ? [
            "store"
        ] : []
    ];
    if (a.length === 0) {
        return {
            ok: false,
            ...M("off", "off")
        };
    }
    if (a.every((b)=>x(b, parsed, e, n, r))) {
        return {
            ok: false,
            why: z,
            code: "rule"
        };
    }
    let l = {
        signal,
        credentials: n.credentials
    };
    let m = await rme(op(parsed, {
        toolUseId: n.toolUseId,
        abortController: {
            signal
        },
        ...l
    }, s).then(()=>{}), signal, n, (b)=>b);
    if (m !== undefined) {
        return {
            ok: false,
            why: `${OUt[m]} \u2014 read it with its own call`,
            code: `probe_${m}`
        };
    }
    let w = vt(parsed.slug);
    if (Q4e(w)) {
        return {
            ok: false,
            why: "it is in another of the user's organizations, which this login cannot read — say so rather than guess its values",
            code: "other_org"
        };
    }
    let owned = wc(w);
    if (Om(parsed.slug) && !ys(n.agentContext)) {
        return {
            ok: false,
            why: X,
            code: "notice_pending"
        };
    }
    await rme(o_t(parsed, l), signal, n, ()=>{});
    let filesRuled = x("files", parsed, e, n, r);
    let storeRuled = x("store", parsed, e, n, r);
    return {
        ok: true,
        parsed,
        owned,
        filesRuled,
        storeRuled,
        filesOk: REe() && !filesRuled && U(parsed, owned, "files", n),
        storeOk: o && !storeRuled && U(parsed, owned, "store", n)
    };
}
function gUr(e, t, n, o) {
    return !(Om(e.slug) && !ys(n.agentContext)) && !x("files", e, t, n, o) && U(e, wc(vt(e.slug)), "files", n);
}
async function X1o(url, t, n, o, r, s) {
    let i = {
        default: t.default,
        title: t.title
    };
    let d = (unavailable, T)=>{
        f("artifact_design_system_guide", T);
        return {
            design_system: {
                url,
                ...i,
                unavailable
            }
        };
    };
    let a = await mUr(url, n, o, r, s, "design_system_guide");
    if (!a.ok) {
        return d(a.why, a.code);
    }
    let { parsed, owned, filesRuled, storeRuled, filesOk, storeOk } = a;
    let b = G(REe(), filesRuled, filesOk);
    let D = G(r, storeRuled, storeOk);
    if (!filesOk && !storeOk) {
        let R = M(b, D);
        return d(R.why, R.code);
    }
    let [E, V] = await Promise.all([
        storeOk ? se(parsed, n, o) : S,
        filesOk ? ne(parsed, n, o) : te
    ]);
    let C = oe(V);
    let project = C.doc?.path === eWe;
    let store = !project && E.doc !== undefined;
    let P = project ? C.doc : E.doc ?? C.doc;
    if (P === undefined) {
        let R = E.why ?? C.why;
        let T = E.moved === true && b === "off" ? Z : M(b, D);
        if (R === undefined) {
            return d(T.why, T.code);
        }
        return d(R, "nothing_read");
    }
    if (!owned) {
        j5n(parsed, store ? "read_db" : "read_file", o);
    }
    g("artifact_design_system_guide", {
        store,
        project,
        owned
    });
    let unavailable = store || project ? undefined : D === "ruled" ? `a permission rule governs reading its store, ${O}` : D === "unconsented" ? `its store needs approval to read here, ${O}` : E.unchecked === true ? `its store could not be checked, ${O}` : E.keptButUnread === true ? `its store's README is empty or could not be read here, ${O}` : undefined;
    return {
        design_system: {
            url,
            ...i,
            ...store && {
                store: true
            },
            docs: [
                P
            ],
            ...unavailable !== undefined && {
                unavailable
            }
        }
    };
}
const k = "read it with its own call, which may ask the user";
var z = "a permission rule governs reading it — read it with its own call and that rule decides";
var O = "so this is its published README, which may be older than the one in its store";
var Z = {
    why: "it moved to its own files, which this session does not serve",
    code: "nothing_read"
};
function x(e, t, n, o, pipelineRan) {
    if (e === "files") {
        return eOe(t, n, "read_file", o, {
            pipelineRan
        }) || eOe(t, n, "read_file", o, {
            pipelineRan,
            fields: {
                path: eWe
            }
        });
    }
    return eOe(t, n, "read_db", o, {
        pipelineRan
    }) || eOe(t, n, "read_db", o, {
        pipelineRan,
        fields: I
    });
}
function G(e, t, n) {
    if (!e) {
        return "off";
    }
    if (t) {
        return "ruled";
    }
    if (n) {
        return "read";
    }
    return "unconsented";
}
function M(e, t) {
    let n = [
        e,
        t
    ].filter((o)=>o !== "read" && o !== "off");
    if (e !== "read" && t !== "read" && n.length === 0) {
        return {
            why: "this session serves neither its files nor its store",
            code: "not_served"
        };
    }
    if (n.includes("unconsented")) {
        if (e === "read" || t === "read") {
            return {
                why: `its ${e === "unconsented" ? "files" : "store"} cannot be read here without the user's approval \u2014 ${k}`,
                code: "nothing_read"
            };
        }
        return {
            why: X,
            code: "not_consented"
        };
    }
    if (n.includes("ruled")) {
        return {
            why: z,
            code: "rule"
        };
    }
    if (e === "off") {
        return {
            why: "its store holds no README for it, and this session does not serve its files",
            code: "nothing_read"
        };
    }
    return {
        why: t === "off" ? "it has no README to read here (this session does not read stores)" : "it has no README to read",
        code: "nothing_read"
    };
}
var X = `reading it here first needs the user's approval, which this call does not ask for \u2014 ${k}`;
var I = {
    db_op: "get",
    collection: "ds",
    doc_id: "meta"
};
const Q = {
    read_file: {
        path: p
    },
    read_db: {
        db_op: "get",
        collection: "files",
        doc_id: p
    }
};
function eOe(e, t, action, o, r = {}) {
    let s = r.fields ?? (action === "list_files" ? {} : Q[action]);
    let i = de(o);
    return (action === "read_file" ? [
        {
            action,
            fields: s
        },
        {
            action: "read",
            fields: s
        }
    ] : action === "list_files" ? [
        {
            action,
            fields: s
        },
        {
            action: "list",
            fields: {
                ...s,
                scope: "files"
            }
        }
    ] : [
        {
            action,
            fields: s
        }
    ]).some((a)=>[
            "deny",
            "ask"
        ].some((l)=>cE(i, e, t, l, {
                action: a.action,
                fields: a.fields,
                wholeToolAskAnswered: r.pipelineRan === true
            }) !== null));
}
function U(e, t, n, o) {
    if (!HU(o)) {
        let r = xX(e, o, n === "store");
        return !r.ask || r.remember === "artifact" && K_e(r, e.slug, xCe(t, e));
    }
    if (n === "store") {
        return t || Rze(o, e.slug);
    }
    return lte(o, e, "files", "land");
}
function j5n(e, t, n) {
    if (!HU(n) && !SV("foreign_read", e.slug)) {
        let o = t === "read_db" ? Rze(n, e.slug) : RX(n, e.slug);
        F_t(t, e.slug, undefined, o || undefined);
    }
}
var S = {
    doc: undefined,
    why: undefined
};
async function W(parsed, t, n, o, r) {
    let s = await rme(wZe(parsed, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, (late)=>({
            err: OUt[late],
            late
        }));
    if (s.err === null) {
        if (s.html.trim() === "") {
            return S;
        }
        return {
            doc: N(s.html, t),
            why: undefined
        };
    }
    if (s.missingFile === true || n && s.status === 404 && s.errorCode === undefined) {
        return S;
    }
    let failed = s.late !== undefined ? OUt[s.late] : "the content host refused or failed";
    return {
        doc: undefined,
        why: ee(t, failed),
        failed
    };
}
var ee = (e, failed)=>`its ${e} could not be fetched (${failed}) \u2014 ${k}`;
var te = {
    root: S,
    project: S
};
async function ne(parsed, t, n) {
    let [root, project] = await Promise.all([
        W(parsed, p, false, t, n),
        W(parsed, eWe, true, t, n)
    ]);
    return {
        root,
        project
    };
}
function oe({ project, root }) {
    if (project.doc !== undefined || root.doc !== undefined) {
        if (project.doc !== undefined) {
            return project;
        }
        return root;
    }
    if (project.failed !== undefined && root.failed !== undefined) {
        return {
            doc: undefined,
            why: `its ${project.failed === root.failed ? `${eWe} and ${p} could not be fetched (${root.failed})` : `${eWe} (${project.failed}) and ${p} (${root.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
        };
    }
    if (project.why !== undefined) {
        return project;
    }
    return root;
}
const re = new Set([
    "store_unavailable",
    "busy",
    "quota_or_rate",
    "quota_exceeded",
    "upstream_auth"
]);
function B(parsed, collection, docId, o, r) {
    return rme(Hwn(r.session.host, {
        slug: parsed.slug,
        op: "get",
        collection,
        docId
    }, o, r.storageV5, r.credentials), o, r, (reason)=>({
            kind: "error",
            code: "store_unavailable",
            message: OUt[reason],
            reason
        }));
}
async function se(parsed, t, n) {
    let [o, r] = await Promise.all([
        B(parsed, I.collection, I.doc_id, t, n),
        B(parsed, "files", p, t, n)
    ]);
    if (o.kind !== "ok") {
        if (o.kind !== "error" || o.code === "not_declared") {
            return {
                doc: undefined,
                why: undefined
            };
        }
        return {
            doc: undefined,
            why: `its store could not be read (${o.message}) \u2014 ${k}`,
            ...re.has(o.code) && {
                unchecked: true
            }
        };
    }
    if (ie(o.docs[0]?.data)) {
        return {
            doc: undefined,
            why: undefined,
            moved: true
        };
    }
    let s = ae(r);
    return {
        ...s === undefined && r.kind !== "not_found" && {
            keptButUnread: true
        },
        doc: s === undefined ? undefined : N(s),
        why: r.kind === "error" ? `its store could not be read (${r.message}) \u2014 ${k}` : r.kind === "ok" && s === undefined ? typeof r.docs[0]?.data.data === "string" ? "its README.md in the store is empty" : "its README.md is a stored file rather than an inline document — read it from the system with its own call" : undefined
    };
}
function ie(e) {
    let t = L(e) ? e.movedTo : undefined;
    return L(t) && typeof t.path === "string" && typeof t.at === "string";
}
function ae(e) {
    if (e.kind !== "ok") {
        return;
    }
    let t = e.docs[0]?.data.data;
    if (typeof t === "string" && t.trim() !== "") {
        return t;
    }
}
function W5n(path, t, n) {
    let o = dl(t);
    let length = Array.from(o).length;
    if (length > n) {
        return {
            path,
            text: dl(Ms(o, n)),
            chars: length,
            clipped: true
        };
    }
    return {
        path,
        text: o,
        chars: length
    };
}
const le = [
    `
## Consuming this system (generated`,
    `
## Index (generated`
];
const H = "[…authored guide clipped here; its generated tail follows…]";
function N(e, path = p) {
    let n = K;
    let o = dl(e);
    let length = Array.from(o).length;
    if (length <= n) {
        return {
            path,
            text: o,
            chars: length
        };
    }
    let s = le.map((l)=>o.lastIndexOf(l)).find((l)=>l !== -1) ?? -1;
    if (s === -1) {
        return W5n(path, o, n);
    }
    let i = Ms(o.slice(s), Y);
    let d = n - Array.from(i).length - Array.from(H).length - 2;
    let a = Ms(o.slice(0, s), d);
    return {
        path,
        text: dl(`${a}
${H}
${i}`),
        chars: length,
        clipped: true
    };
}
function ue(e, t, n) {
    if (n) {
        return `Its other cards are not attached: read one when you need it with ${Wl('action "read_file"', ()=>'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
    }
    if (t) {
        return `Its other cards are not attached: read one when you need it with ${Wl('action "read_db" and `db_op`: "get"', ()=>`the ${Ig} tool, action "get"`)}, \`url\`: ${_(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.`;
    }
    return `Its other cards are not attached: read one when you need it with ${Wl('action "read_file"', ()=>'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}
function MUt(e, t) {
    let n = Array.from(e).length > t;
    return dl(Ms(e, t)).replace(y_, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " …" : "");
}
function z5n(e) {
    if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some((t)=>t !== null && typeof t === "object" && "text" in t && t.text !== "")) {
        return;
    }
    return {
        ...e,
        docs: e.docs.map((t)=>{
            if (t !== null && typeof t === "object") {
                return {
                    ...t,
                    text: ""
                };
            }
            return t;
        })
    };
}
function J1o(design_system) {
    let t = u(HUt()).safeParse({
        design_system
    });
    let n = t.success ? t.data.design_system : undefined;
    if (n === undefined) {
        return {
            text: "",
            attached: false
        };
    }
    let o = n.unavailable === undefined ? undefined : MUt(n.unavailable, q);
    if (typeof n.url !== "string") {
        return {
            text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
            attached: false
        };
    }
    let r = wi(n.url, "(unrecognized address)");
    let s = typeof n.title === "string" ? ` ${_(MUt(d3e(jf(zk(n.title, 200)) ?? ""), 200) || "Untitled")}` : "";
    let i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`;
    let d = (n.docs ?? []).find((h)=>(h.path === p || h.path === eWe) && h.text !== "");
    if (d === undefined) {
        return {
            text: `

[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
            attached: false
        };
    }
    let a = N(d.text);
    let l = a.clipped === true || d.clipped === true;
    let m = Math.max(a.chars, d.chars);
    let w = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.";
    let y = l ? `
[\u2026clipped at ${Array.from(a.text).length} of ${m} characters; read the whole file from the design system if you need the rest]` : "";
    return {
        text: `

${Mh}
Design system ${i}.${w} Its ${d.path} (${n.store === true ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${l ? " unless you need the clipped remainder" : ""}.${o !== undefined ? ` (${o}.)` : ""} ${ue(r, n.store === true, d.path === eWe)}

${d.path}:
${bWt(a.text + y)}`,
        attached: true
    };
}
export { eWe, OUt, rme, Y1o, mUr, gUr, X1o, eOe, j5n, W5n, MUt, z5n, J1o };
