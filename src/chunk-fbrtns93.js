import { fF, m6e, vl, cZt, qf, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { lt, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { pp, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { St, TS, _, i6, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { nh, S0, wse } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Ur, Ft } from "/$bunfs/root/chunk-04d4ftnx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ym } from "/$bunfs/root/chunk-zwxj12s4.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { q1 } from "/$bunfs/root/chunk-x47nahfr.js";
import { G8, RP } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Et, Js } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { ht, Xt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { bKe, Qp, Dot } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { kre, Ngr, Mst, QLe, sCe, BD, ZLe, l_ } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { _x, uT, n3r, sv, XU, wI, u$, cJ, AAn, Avt, A7o } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Qns, C$, ers } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { qh } from "/$bunfs/root/chunk-4521ay78.js";
import { iNe, Bc, Go } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { lWe } from "/$bunfs/root/chunk-9jpxkq0t.js";
import { Cu } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { J0e, pcs, fcs } from "/$bunfs/root/chunk-5ne6jp11.js";
import { Fg, g8n, aWe } from "/$bunfs/root/chunk-8rf5jf6d.js";
import { W8n } from "/$bunfs/root/chunk-18wvga5n.js";
import { $2 } from "/$bunfs/root/chunk-1c8pjf91.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { c0 } from "/$bunfs/root/chunk-v214ecah.js";
import { o, E, M, T, u, De, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Jk, at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se, Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { resolve, join, dirname, relative, basename, posix } from "path";
import { realpath, rm as rm_1, readdir, lstat, mkdir, mkdtemp, writeFile, open } from "fs/promises";
import { randomUUID } from "crypto";
const Rp = (e)=>{
    if (e.kind === "needs-manifest") {
        return e.draft;
    }
};
const uo = _x(dirname(join(Qp)));
function ho(e) {
    let r = e instanceof Error ? e.cause : undefined;
    return [
        l(e),
        typeof r === "string" ? r : ""
    ].filter(Boolean);
}
const Op = (e, details)=>({
        kind: e,
        details
    });
const d = (e, r = [])=>({
        kind: "refused",
        refusal: Op(e, r)
    });
const B = (e)=>e.catch((r)=>d("unreadable", ho(r)));
const Pp = 3;
const _p = 100;
async function ke(e, r = Pp) {
    let s = await rm_1(e, {
        recursive: true,
        force: true
    }).then(()=>{}, (i)=>i);
    if (s === undefined) {
        return;
    }
    if (r > 0) {
        await Q(_p);
        return ke(e, r - 1);
    }
    t(`A copy made to validate a plugin could not be removed: ${v(s) ?? "no code"}`, {
        level: "warn"
    });
}
const re = ()=>Error("The copy to validate was ended as the process ends");
const ze = (e, r)=>e.path.localeCompare(r.path, "en");
const Ue = 10000;
const wp = (e)=>e.isSymbolicLink() && "link" || e.isDirectory() && "folder" || e.isFile() && "file" || "special";
async function Ep(e) {
    let r = await lstat(e);
    return {
        path: e,
        kind: wp(r),
        bytes: r.size,
        mode: r.mode,
        links: r.nlink
    };
}
const He = 32;
const Ao = ".gitignore";
const vo = Se(kre(), 1);
const Tp = (e)=>e.split(/\r?\n/).map((line, s)=>({
            line,
            named: `line ${s + 1}: ${line}`
        })).find((r)=>Ngr(r.line) !== null)?.named;
const Ip = Object.freeze([
    "ENOENT",
    "ENOTDIR"
]);
const Po = (e)=>Ip.includes(v(e) ?? "");
const kp = (e)=>lstat(e).then(()=>Promise.reject(Error("A .gitignore here cannot be read")), (r)=>{
        if (Po(r)) {
            return "";
        }
        return Promise.reject(r);
    });
async function wo(base) {
    let r = join(base, Ao);
    let s = await u$(r) ?? await kp(r);
    let i = Tp(s);
    if (i !== undefined) {
        throw Error("A .gitignore line cannot be read", {
            cause: `${r} ${i}`
        });
    }
    let n = Mst(s);
    if (n.length > 0) {
        return [
            {
                base,
                rules: vo.default().add(n)
            }
        ];
    }
    return [];
}
async function Fp(path, r) {
    let cause = join(path, Ao);
    if (r.some((n)=>n.path === cause && n.kind === "file" && n.links > 1)) {
        throw Error("A .gitignore here cannot be read", {
            cause
        });
    }
    return wo(path);
}
const K = (e, r)=>_x(relative(e, r.path));
const Ke = (e)=>e.find((r)=>r !== false) || undefined;
const Eo = Object.freeze([
    ".mcp.json"
]);
const Up = (e, r)=>!Eo.includes(r) && (C$(`/${r}`) || C$(`/${basename(e)}/${r}`) || ers(`/${r}`));
const Hp = Object.freeze({
    file: "",
    folder: "/",
    link: "",
    special: ""
});
const Mo = (e, r)=>e.toReversed().map(({ base, rules })=>rules.test(K(base, r) + Hp[r.kind])).find((s)=>s.ignored || s.unignored)?.ignored ?? false;
function Bp(e, r, s) {
    let i = join(e, Qp);
    let n = dirname(i);
    return !(s.path === i || s.path === n) && (Mo(r.scope, s) || r.path === n && Mo(r.scope.filter((f)=>f.base !== n), {
        ...s,
        path: n,
        kind: "folder"
    }));
}
const Kp = [
    ...AAn,
    ".hg",
    ".svn",
    ".jj",
    ".sl",
    ".bzr"
];
function qp(e) {
    let r = [
        basename(e.path),
        ...Qns(basename(e.path))
    ];
    return e.kind === "folder" && r.some((s)=>s.endsWith(".git")) || r.some((s)=>Kp.includes(s));
}
const Xp = (e, r, s)=>Ke([
        s.kind === "link" && "link",
        s.kind === "special" && "special",
        s.kind === "file" && s.links > 1 && "hard-link",
        basename(s.path).includes("\\") && "backslash",
        qp(s) && "never",
        Avt(e, s.path) && "generated",
        Up(e, K(e, s)) && "secret",
        Bp(e, r, s) && "ignored"
    ]);
function Gp(e, r, s) {
    let why = Xp(e, r, s);
    if (why === undefined) {
        return [];
    }
    return [
        {
            path: K(e, s),
            why
        }
    ];
}
const Ho = 33188;
const Yp = 73;
const jo = 33261;
function Vp(e) {
    if ((e.mode & Yp) !== 0) {
        return jo;
    }
    return Ho;
}
const Zp = (e, r)=>({
        path: K(e, r),
        bytes: r.bytes,
        mode: Vp(r)
    });
function Jp(e, r, s) {
    let i = s.flatMap((m)=>Gp(e, r, m));
    let n = new Set(i.map((m)=>m.path));
    let f = s.filter((m)=>!n.has(K(e, m)));
    return {
        files: f.filter((m)=>m.kind === "file").map((m)=>Zp(e, m)),
        leftOut: i,
        folders: f.filter((m)=>m.kind === "folder").map((m)=>({
                path: m.path,
                scope: r.scope
            }))
    };
}
async function of(e, r) {
    let s = rl(He, (n)=>Ep(join(r.path, n)));
    let i = await Promise.all((await readdir(r.path)).toSorted().map(s));
    return Jp(e, {
        path: r.path,
        scope: r.scope.concat(await Fp(r.path, i))
    }, i);
}
function Xo(e) {
    let r = dirname(e);
    if (r === e) {
        return [
            e
        ];
    }
    return [
        e,
        ...Xo(r)
    ];
}
const af = (e)=>lstat(join(e, ".git")).then(()=>true, (r)=>{
        if (Po(r)) {
            return false;
        }
        return Promise.reject(r);
    });
async function pf(e) {
    let r = Xo(e);
    for (let [s, i] of r.entries()){
        if (await af(i)) {
            return r.slice(1, s + 1).toReversed();
        }
    }
    return [];
}
const ff = async (e)=>(await Promise.all((await pf(e)).map(wo))).flat();
async function Ge(e) {
    let r = [];
    let s = [];
    let i = [
        {
            path: e,
            scope: await ff(e)
        }
    ];
    for (let n of i){
        if (r.length > Ue) {
            break;
        }
        let m = await of(e, n);
        r.push(...m.files);
        s.push(...m.leftOut);
        i.push(...m.folders);
    }
    return {
        files: r.toSorted(ze),
        leftOut: s.toSorted(ze)
    };
}
const Jo = 448;
const mf = 384;
const lf = false;
const ot = 1n;
const tt = Object.freeze({
    bigint: true
});
async function cf(e, r, s) {
    let i = await realpath(r).catch(()=>e);
    let f = qh(e, i, lf) ? await lstat(i, tt).catch(()=>{}) : undefined;
    return f?.ino === s.ino && f.dev === s.dev && f.nlink === ot;
}
const hf = Object.freeze([
    "ENOENT",
    "ENOTDIR",
    "ELOOP",
    "EISDIR"
]);
const xf = (e)=>open(e, Cu()).catch((r)=>{
        if (hf.includes(v(r) ?? "")) {
            return undefined;
        }
        return Promise.reject(r);
    });
const Rf = async (e, r)=>await wI(e, dirname(r)) === "ok" && (await lstat(r).catch(()=>{}))?.isFile() === true;
async function Ze(e, r) {
    let s = join(e, r.path);
    let n = await Rf(e, s) ? await xf(s) : undefined;
    try {
        let f = await n?.stat(tt);
        let h = f?.isFile() === true && f.size === BigInt(r.bytes) && f.nlink === ot && await cf(e, s, f) ? await n?.readFile() : undefined;
        if (h?.length === r.bytes) {
            return h;
        }
        return undefined;
    } finally{
        await n?.close();
    }
}
async function _f(e, r, s) {
    let i = await Ze(e, s);
    if (i === undefined) {
        return;
    }
    await mkdir(dirname(join(r, s.path)), {
        recursive: true,
        mode: Jo
    }).then(()=>writeFile(join(r, s.path), i, {
            flag: "wx",
            mode: mf
        })).catch((n)=>Promise.reject(Error("A file could not be copied to be validated", {
            cause: `${v(n) ?? ""} ${s.path}`.trim()
        })));
    return at(i);
}
async function vf(e, r, s) {
    e.abort();
    await r;
    await s();
}
const wf = (files, r)=>Object.fromEntries(files.map((s, i)=>[
            s.path,
            r[i] ?? ""
        ]));
const Lf = (home, dir, hashes)=>({
        home,
        dir,
        hashes
    });
async function Mf(e, files) {
    if (TS()) {
        return Promise.reject(re());
    }
    let s = await mkdtemp(join(ym(), "claude-publish-")).catch((R)=>Promise.reject(Error("A folder to validate a copy in could not be made", {
            cause: v(R) ?? ""
        })));
    let i = c0(()=>ke(s));
    if (TS()) {
        await i();
        return Promise.reject(re());
    }
    let n = join(s, "copy", basename(e));
    let f = new AbortController;
    let m = Promise.resolve().then(()=>mkdir(n, {
            recursive: true,
            mode: Jo
        })).catch(()=>{}).then(()=>Promise.allSettled(files.map(rl(He, (R)=>{
            if (f.signal.aborted) {
                return Promise.resolve(undefined);
            }
            return _f(e, n, R).catch((O)=>{
                f.abort();
                return Promise.reject(O);
            });
        }))));
    using h = St(()=>vf(f, m, i));
    let g = await m;
    let b = g.find((R)=>R.status === "rejected");
    let y = files.find((R, O)=>g[O]?.status === "fulfilled" && !g[O].value);
    await (b === undefined && y === undefined && !f.signal.aborted ? undefined : i());
    if (b?.status === "rejected") {
        return Promise.reject(b.reason);
    }
    if (f.signal.aborted) {
        await i();
        return Promise.reject(re());
    }
    if (y !== undefined) {
        return {
            missed: y.path
        };
    }
    return Lf(s, n, wf(files, g.map((R)=>{
        if (R.status === "fulfilled") {
            return R.value;
        }
    })));
}
const Je = (e)=>d("changed", [
        `${e.missed} is not the file that was listed`
    ]);
function kf(e, r) {
    let s = new Set(e.listing.files.map((i)=>i.path));
    return [
        ...e.listing.files.filter((i)=>!Object.hasOwn(r.hashes, i.path)).map((i)=>`Among the files to send only since the folder was read: ${i.path}`),
        ...Object.keys(r.hashes).filter((i)=>!s.has(i)).map((i)=>`No longer among the files to send since the folder was read: ${i}`),
        ...e.listing.files.filter((i)=>Object.hasOwn(r.hashes, i.path) && e.hashes[i.path] !== r.hashes[i.path]).map((i)=>`${i.path} is not the file that was listed`)
    ].slice(0, 1);
}
function Df(e, r) {
    let s = e.kind === "ready" ? kf(e, r) : [];
    if (s.length === 0 && (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length)) {
        return e;
    }
    return d("changed", s);
}
const me = (e)=>e.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "") || "plugin";
function Ff(e) {
    let r = lWe(me(basename(e)));
    if (r?.severity === "error") {
        return [
            `${r.message} The name comes from the folder: rename it.`
        ];
    }
    return [];
}
const Ot = 300;
const zf = (e)=>e && Et(e, Ot);
const version = "0.1.0";
const Hf = (e, r)=>`${_({
        name: me(basename(e)),
        version,
        description: zf(r)
    }, null, 2)}
`;
const Wf = (e, r)=>({
        kind: "needs-manifest",
        root: e,
        draft: Hf(e, r)
    });
const jf = (e)=>e.flatMap((r)=>r.errors.map((s)=>`${r.filePath}: ${s.path}: ${ps(s.message)}`));
const Bf = (data)=>({
        name: data.name,
        version: data.version,
        description: data.description
    });
const Kf = p(()=>u({
        name: o(),
        version: o().optional(),
        description: o().optional()
    }));
async function Xf(dir) {
    let r = await cJ(join(dir, Qp));
    let s = Kf().safeParse(mt(r.kind === "ok" ? r.content : ""));
    if (r.kind === "absent") {
        return "absent";
    }
    if (s.success) {
        return Bf(s.data);
    }
    return "unreadable";
}
function Gf(e, r) {
    if (e !== undefined && r !== undefined) {
        return [
            [
                e.path,
                at(r)
            ]
        ];
    }
    return [];
}
async function Nt(files, r, s) {
    let i = await Promise.all(files.map(rl(He, r)));
    let n = files.find((m, h)=>i[h] === undefined);
    if (n === undefined) {
        return i.flatMap((m, h)=>s(files[h], m));
    }
    return {
        missed: n.path
    };
}
async function Qf(e, files) {
    let s = await Nt(files, (i)=>Ze(e, i), Gf);
    if ("missed" in s) {
        return s;
    }
    return {
        hashes: Object.fromEntries(s)
    };
}
const Ct = (e)=>e.files.map((r)=>r.path).filter((r)=>`/${r}`.endsWith(`/${_x(Qp)}`));
const tr = 52428800;
function Ut(e, r) {
    let s = Ct(e);
    if (s.length > 1) {
        return d("findings", [
            `More than one manifest: ${s.join(", ")}`
        ]);
    }
    if (e.files.length > Ue) {
        return d("too-many-files");
    }
    if (r > tr) {
        return d("too-large");
    }
}
async function Ht(e, manifest) {
    let listing = await Ge(e);
    let bytes = listing.files.reduce((acc, file)=>acc + file.bytes, 0);
    let n = Ut(listing, bytes);
    if (n !== undefined) {
        return n;
    }
    let f = await Qf(e, listing.files);
    if ("missed" in f) {
        return Je(f);
    }
    return {
        kind: "ready",
        root: e,
        manifest,
        listing,
        bytes,
        hashes: f.hashes
    };
}
const Yf = [
    " ",
    "\t",
    `
`,
    '"',
    "'",
    "("
];
const Vf = (e)=>e.slice(0, 1 + Math.max(...Yf.map((r)=>e.lastIndexOf(r))));
function Zf(acc, item, s) {
    let i = acc.split(item);
    return i.slice(0, -1).map((n)=>Vf(n) + s).concat(i.at(-1) ?? "").join("");
}
function nr(e, r, s) {
    let i = dirname(r.dir);
    let n = dirname(s).replace(/[\\/]$/, "");
    return [
        `${basename(r.home)}/copy`,
        `${basename(r.home)}\\copy`
    ].reduce((acc, item)=>Zf(acc, item, n), e.replaceAll(i, ()=>n).replaceAll(Fg(i, i.length), ()=>n));
}
const Jf = (e, r, s)=>e.map((i)=>({
            ...i,
            filePath: nr(i.filePath, r, s),
            errors: i.errors.map((n)=>({
                    ...n,
                    message: nr(n.message, r, s)
                }))
        }));
function em(e) {
    if (e.kind === "ready" && Ct(e.listing).length === 0) {
        return d("unreadable", [
            _x(Qp)
        ]);
    }
    return e;
}
async function rm(e, r, s) {
    let { manifest, contents } = await aWe(r.dir);
    let f = manifest?.errors.some((y)=>y.code === g8n) ?? true;
    let m = jf(Jf(f ? contents : [
        manifest ?? [],
        contents
    ].flat(), r, e)).concat(f ? Ff(e) : []);
    let h = f ? await Dot(r.dir) : manifest?.fileType === "plugin";
    let g = await Xf(r.dir);
    if (!h) {
        return d("not-a-plugin");
    }
    if (m.length > 0) {
        return d("findings", m);
    }
    if (g === "unreadable") {
        return d("unreadable", [
            _x(Qp)
        ]);
    }
    if (g === "absent") {
        return Wf(e, s);
    }
    return Df(em(await Ht(e, g)), r);
}
function om(e) {
    let r = _x(Qp);
    if (e.leftOut.some((i)=>i.path === r)) {
        return d("unreadable", [
            r
        ]);
    }
}
async function tm(e, description) {
    let s = await Ge(e);
    let i = om(s) ?? Ut(s, s.files.reduce((acc, file)=>acc + file.bytes, 0));
    if (i !== undefined) {
        return i;
    }
    let n = await Mf(e, s.files);
    if ("missed" in n) {
        return Je(n);
    }
    let f = c0(()=>ke(n.home));
    using m = St(f);
    if (TS()) {
        await f();
        return Promise.reject(re());
    }
    try {
        return await rm(e, n, description).catch((h)=>d("unreadable", ho(h).map((g)=>nr(g, n, e))));
    } finally{
        await f();
    }
}
async function os(folder, description) {
    let s = await realpath(resolve(se(), folder)).catch(()=>{});
    if (!(s !== undefined && await XU(s))) {
        return d("no-folder", [
            folder
        ]);
    }
    if (await wI(s, join(s, uo)) === "refused") {
        return d("unreadable", [
            uo
        ]);
    }
    return B(tm(s, description));
}
const am = (e)=>({
        path: _x(Qp),
        bytes: Buffer.byteLength(e.draft),
        mode: Ho
    });
function fm(e) {
    let r = G8().safeParse(mt(e.draft));
    return {
        name: r.data?.name ?? basename(e.root),
        version: r.data?.version,
        description: r.data?.description
    };
}
const mm = (listing, r)=>({
        files: listing.files.concat(r).toSorted(ze),
        leftOut: listing.leftOut
    });
const lm = (hashes, path, draft)=>({
        ...hashes,
        [path]: at(draft)
    });
const um = (e, r, s)=>({
        ...e,
        bytes: e.bytes + r.bytes,
        listing: mm(e.listing, r),
        hashes: lm(e.hashes, r.path, s.draft)
    });
async function dm(e) {
    let r = am(e);
    let s = await Ht(e.root, fm(e));
    if (s.kind === "ready") {
        return um(s, r, e);
    }
    return s;
}
async function cm(e) {
    if (e.kind === "needs-manifest") {
        return B(dm(e));
    }
    return e;
}
async function fr(wanted, r) {
    let s = await os(wanted.folder, wanted.description);
    let plan = await cm(s);
    if (plan.kind === "refused") {
        return plan;
    }
    if (plan.kind === "ready") {
        return {
            wanted,
            plan,
            organization: r,
            draft: Rp(s),
            withheld: false
        };
    }
    return d("unreadable");
}
const ur = ()=>q1() && m6e() && vl().source === "CLAUDE_CODE_OAUTH_TOKEN" && !jn();
const hm = ()=>bKe() || ur();
const gm = "allow_plugin_publish";
const ds = ()=>{
    if (a.CLAUDE_CODE_REMOTE) {
        return "cloud-session";
    }
    return "signed-out";
};
const cs = ()=>Ke([
        Ie() !== "firstParty" && "third-party",
        mr() && "bare",
        Tt() && "traffic-off",
        !sn(gm) && "policy",
        !hm() && ds()
    ]);
const hs = Object.freeze({
    nothing: "Nothing was sent.",
    uploading: "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.",
    shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.",
    submitting: "The upload had arrived, and its submission was on its way: it may have reached your organization."
});
function L(e, r, s) {
    if (e.signal.aborted) {
        return d("stopped", [
            hs[s]
        ]);
    }
    return r;
}
function gs(e) {
    if (e === "." || e === "..") {
        return e.replaceAll(".", "%252E");
    }
    return encodeURIComponent(e).replaceAll(".", "%2E");
}
const xm = (e)=>`/api/oauth/organizations/${gs(e.organization.id)}`;
const xr = (e, r)=>`${xm(e)}/${r.map(gs).join("/")}`;
const he = (e, r)=>({
        method: "get",
        path: xr(e, r),
        body: undefined,
        headers: {},
        bound: "clock",
        signal: e.signal
    });
const bm = 200;
const Rm = 300;
const k = (e)=>e.status >= bm && e.status < Rm;
const Am = 400;
const Sm = 405;
const Om = 404;
const Pm = 501;
const _m = 422;
const vm = Object.freeze([
    Am,
    Om,
    Sm,
    _m,
    Pm
]);
const wm = 20;
const Lm = 300;
const Em = Object.freeze([
    "scan",
    "other"
]);
const Tm = (e, r)=>[
        ...r.findings,
        ...[
            r.message ?? ""
        ].filter((s)=>s !== "" && Em.includes(e))
    ].slice(0, wm).map((s)=>ne(s, Lm));
const Im = p(()=>u({
        error: u({
            message: o().optional(),
            details: u({
                error_code: o().optional(),
                validation_errors: u({
                    message: o().optional(),
                    plugins: T(u({
                        name: o().optional(),
                        error: o().optional()
                    })).optional()
                }).optional()
            }).optional()
        }).optional()
    }));
function yr(e) {
    let r = Im().safeParse(e.data).data?.error;
    let s = r?.details?.validation_errors;
    return {
        code: r?.details?.error_code,
        message: r?.message,
        findings: [
            s?.message ?? "",
            ...(s?.plugins ?? []).map((i)=>[
                    i.name,
                    i.error
                ].filter(Boolean).join(": "))
        ].filter(Boolean)
    };
}
function xe(e, r) {
    let s = yr(e);
    let i = r.codes[s.code ?? ""] ?? r.statuses[e.status] ?? "other";
    return d(i, Tm(i, s));
}
const streamUpload = Object.freeze({});
const post = 120000;
const get = 15000;
const Nm = Object.freeze({
    get,
    post
});
function Fm(e) {
    if (e.bound === "progress") {
        return {
            streamUpload
        };
    }
    return {
        timeout: Nm[e.method]
    };
}
const zm = (e)=>({
        ...e.headers,
        "anthropic-beta": pp
    });
const maxContentLength = 4194304;
const Cs = (e)=>({
        auth: "teleport-org",
        headers: zm(e),
        ...Fm(e),
        signal: e.signal,
        maxBodyLength: Buffer.byteLength(e.body ?? ""),
        maxContentLength,
        maxRedirects: 0,
        validateStatus: ()=>true
    });
function Um(e) {
    if (e.method === "get") {
        return Gt.get(e.path, Cs(e));
    }
    return Gt.post(e.path, e.body, Cs(e));
}
const Ws = Object.freeze({
    status: 0,
    data: undefined
});
function Hm(e, r) {
    t(`plugin publish: ${e.method} ${e.path} got no answer: ` + l(r), {
        level: "error"
    });
    return Ws;
}
const Wm = Object.freeze({
    "data-residency": "third-party",
    "essential-traffic-only": "traffic-off",
    "no-auth": "signed-out"
});
async function ye(e) {
    let r = await Um(e).catch((i)=>Hm(e, i));
    if ("status" in r) {
        return {
            status: r.status,
            data: r.data
        };
    }
    return d(Wm[r.reason] ?? "other");
}
const jm = Object.freeze([
    "plugin_upload_conflict",
    "plugin_previous_save_scanning",
    "plugin_upload_busy",
    "plugin_content_scan_rate_limited",
    "org_library_submission_conflict",
    "org_library_submission_source_changed"
]);
const Bm = 429;
const Km = 503;
const qm = Object.freeze([
    Bm,
    Km
]);
const $m = (e, r)=>e.method === "get" && r.status === Ws.status || qm.includes(r.status) || jm.includes(yr(r).code ?? "");
const Xm = 3;
const Gm = 2000;
async function Y(e, r = Xm) {
    let s = await ye(e);
    if (!(r > 0 && !e.signal.aborted && "status" in s && $m(e, s))) {
        return s;
    }
    await Q(Gm, e.signal);
    return Y(e, r - 1);
}
const Vs = (data)=>[
        data,
        ...Object.values(Object(data))
    ].find(Array.isArray) ?? [];
const Zs = p(()=>u({
        uuid: o().optional(),
        plugin_id: o().nullish(),
        plugin_name: o().nullish(),
        status: o().optional(),
        publish_state: o().nullish(),
        updates_published_plugin_id: o().nullish(),
        denial_reason: o().nullish(),
        outcome: u({
            published_plugin_id: o().nullish(),
            published_marketplace_id: o().nullish(),
            failure_reason: o().nullish()
        }).nullish()
    }));
const Qm = (data)=>Vs(data).flatMap((r)=>[
            Zs().safeParse(r)
        ].flatMap((s)=>{
            if (s.success) {
                return [
                    s.data
                ];
            }
            return [];
        }));
const Ym = Object.freeze({
    plugin_version_scan_pending: "scan-pending",
    plugin_version_scan_failed: "scan",
    org_library_submission_already_pending: "already-pending",
    org_library_submission_nothing_to_publish: "nothing-new",
    org_library_submission_publish_in_progress: "in-progress",
    org_library_submission_update_needs_admin: "needs-admin",
    org_library_submission_update_needs_org_settings: "needs-org-settings",
    org_library_submission_name_taken: "name-conflict",
    org_library_submission_library_full: "library-full",
    org_library_submission_update_name_mismatch: "busy",
    org_library_submission_update_target_deleted: "busy",
    org_library_submission_install_preference_requires_review: "busy",
    org_library_submission_conflict: "busy",
    org_library_submission_source_changed: "busy",
    plugin_upload_busy: "busy",
    plugin_content_scan_rate_limited: "busy",
    legal_attestation_required: "legal"
});
const Vm = Object.freeze({
    0: "busy",
    401: "signed-out",
    404: "publishing-off",
    409: "already-pending",
    429: "busy",
    503: "busy"
});
const ti = Object.freeze({
    codes: Ym,
    statuses: Vm
});
async function si(e) {
    let r = await Y(he(e, [
        "library_submissions",
        "me"
    ]));
    if ("kind" in r) {
        return r;
    }
    if (vm.includes(r.status)) {
        return d("not-served");
    }
    if (k(r)) {
        return Qm(r.data);
    }
    return xe(r, ti);
}
const Pr = (e)=>`${dn().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);
const ii = (e, r)=>d(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${Pr(r.id)}`));
const Zm = Object.freeze({
    plugin_version_scan_pending: "scan-pending",
    plugin_version_scan_failed: "scan",
    org_library_submission_publish_not_started: "busy",
    org_library_submission_publish_timed_out: "busy",
    org_library_submission_publisher_unavailable: "busy"
});
const Jm = "claudeai-organization-library";
const el = p(()=>u({
        name: o().optional(),
        marketplace_name: o().optional()
    }));
function ol(e, r) {
    let data = el().safeParse(e).data;
    let i = n3r(data?.marketplace_name ?? "") ?? Jm;
    return `${data?.name ?? r}@${i}`;
}
async function tl(e, r, s) {
    let i = await ye(he(e, [
        "plugins",
        r
    ]));
    return ol("status" in i ? i.data : undefined, s);
}
const sl = 64;
const Ae = (e)=>me(me(e.name).slice(0, sl));
async function il(e, r, s) {
    let install = await tl(e, r, Ae(e.manifest));
    return {
        kind: "published",
        manifest: e.manifest,
        verdict: s.verdict,
        install,
        link: Pr(r)
    };
}
const nl = (e, r, s)=>({
        kind: r,
        manifest: e.manifest,
        verdict: s.verdict,
        id: s.id
    });
async function al(e, r, s) {
    let i = r.outcome?.published_plugin_id ?? undefined;
    let n = r.publish_state === "completed" && i !== undefined;
    let f = r.status === "approved" && r.publish_state === "failed";
    let m = r.status === "approved";
    if (f) {
        return d(Zm[r.outcome?.failure_reason ?? ""] ?? "other");
    }
    if (m && n) {
        return il(e, i, s);
    }
    return nl(e, m ? "publishing" : "in-review", s);
}
const hi = (e, r, s)=>e.find((i)=>i.plugin_id === r.id && i.status === s);
const pl = (e)=>{
    if (e === undefined) {
        return "available";
    }
};
const fl = (e)=>({
        kind: "plugin",
        id: e.id
    });
const ml = (e, r)=>({
        source: fl(e),
        proposed_install_preference: pl(hi(r, e, "approved")),
        predecessor_uuid: hi(r, e, "denied")?.uuid
    });
const headers = Object.freeze({
    "Content-Type": "application/json"
});
const Ai = (e, r, s)=>({
        method: "post",
        path: xr(e, r),
        body: _(s),
        headers,
        bound: "clock",
        signal: e.signal
    });
async function ul(e, r) {
    let s = await Y(Ai(e, [
        "library_submissions"
    ], r));
    if ("kind" in s) {
        return s;
    }
    if (k(s)) {
        return Zs().safeParse(s.data).data ?? d("other");
    }
    return xe(s, ti);
}
const dl = 40;
const Pi = (e)=>[
        e.verdict ?? ""
    ].filter(Boolean).map((r)=>`Security scan on claude.ai: ${Et(r, dl)}`);
function cl(e, r) {
    if (e.signal.aborted || r.scan === "failed") {
        return ii(L(e, d("scan", Pi(r)), "shelved"), r);
    }
    if (r.scan === "processing") {
        return {
            kind: "on-shelf",
            manifest: e.manifest,
            id: r.id
        };
    }
}
async function hl(e, r, s) {
    let i = cl(e, r);
    if (i !== undefined) {
        return i;
    }
    let n = await ul(e, ml(r, s));
    if ("kind" in n) {
        return ii(L(e, n, "submitting"), r);
    }
    return al(e, n, r);
}
const source = "manual";
const gl = Object.freeze({
    name: "My Uploads",
    source,
    source_url: ""
});
const xl = p(()=>u({
        id: o().min(1),
        source: o().optional()
    }));
const yl = (data)=>[
        data,
        ...Vs(data)
    ].map((r)=>xl().safeParse(r).data).find((r)=>r?.source === source)?.id;
const bl = Object.freeze({
    plugin_upload_already_exists: "exists",
    plugin_upload_validation_failed: "invalid",
    plugin_upload_limit_reached: "shelf-full",
    plugin_previous_save_failed_scan: "scan",
    plugin_upload_conflict: "busy",
    plugin_previous_save_scanning: "busy",
    plugin_upload_busy: "busy",
    plugin_content_scan_rate_limited: "busy",
    legal_attestation_required: "legal"
});
const Rl = Object.freeze({
    0: "busy",
    401: "signed-out",
    403: "creation-off",
    413: "too-large",
    429: "busy",
    503: "busy"
});
const ki = Object.freeze({
    codes: bl,
    statuses: Rl
});
async function Di(e, r) {
    let s = await Y(e);
    if ("kind" in s) {
        return s;
    }
    if (k(s)) {
        return yl(s.data) ?? r();
    }
    return xe(s, ki);
}
const Al = (e)=>Di(Ai(e, [
        "marketplaces",
        "create-account-marketplace"
    ], gl), async ()=>d("other"));
const left = 60;
const Ol = (e)=>({
        "Content-Type": `multipart/form-data; boundary=${e.boundary}`
    });
const Pl = (archive, plan, s)=>({
        ...s,
        archive,
        manifest: plan.manifest
    });
const _l = Object.freeze([
    "pass",
    "warn",
    "unknown"
]);
function wl(e, r, s) {
    let i = s ? e.content_scan === null : e.content_scan == null;
    let n = r === false && i;
    let f = Boolean(e.pending_version) && e.served !== true;
    let m = _l.includes(e.content_scan?.combined_assessment ?? "");
    return Ke([
        e.content_scan?.status === "errored" && "failed",
        !n && e.content_scan?.status !== "completed" && "processing",
        e.served === false && "processing",
        f && "processing",
        n && "none",
        !m && "failed"
    ]) ?? "passed";
}
const Ll = (id_1, r, s)=>({
        id: id_1,
        name: r.name,
        version: r.version,
        scan: wl(r, r.scan_requested ?? s?.isScanAsked, s !== undefined),
        isScanAsked: r.scan_requested ?? s?.isScanAsked,
        verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status
    });
const El = p(()=>u({
        id: o().min(1).optional(),
        name: o().optional(),
        version: o().optional(),
        marketplace_id: o().optional(),
        served: M().optional(),
        pending_version: o().nullish(),
        scan_requested: M().nullish(),
        content_scan: u({
            status: o().optional(),
            combined_assessment: o().nullish()
        }).nullish()
    }));
function Bi(data, r) {
    let s = El().safeParse(data).data ?? {};
    let i = r?.id ?? s.id;
    if (i !== undefined) {
        return Ll(i, s, r);
    }
}
const Tl = (e, r, s)=>`${xr(r, [
        "marketplaces",
        e,
        "plugins",
        "account-upload"
    ])}?overwrite=${String(s === "replace")}`;
function Il(boundary, manifest) {
    let s = Ae(manifest);
    if (s !== manifest.name) {
        return `\r
--${boundary}\r
Content-Disposition: form-data; name="new_name"\r
\r
` + s;
    }
    return "";
}
function kl(archive, manifest) {
    let boundary = `----PluginPublish${randomUUID()}`;
    let i = Ae(manifest);
    return {
        boundary,
        body: Buffer.concat([
            Buffer.from(`--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${i}.zip"\r
Content-Type: application/zip\r
\r
`),
            archive,
            Buffer.from(Il(boundary, manifest) + `\r
--${boundary}--\r
`)
        ])
    };
}
function Dl(e, r, s) {
    let i = kl(r.archive, r.manifest);
    return {
        method: "post",
        path: Tl(e, r, s),
        body: i.body,
        headers: Ol(i),
        bound: "progress",
        signal: r.signal
    };
}
async function Gi(e, r, s) {
    let i = await Y(Dl(e, r, s));
    if ("kind" in i) {
        return i;
    }
    if (yr(i).code === "plugin_upload_already_exists") {
        return "exists";
    }
    if (k(i)) {
        return Bi(i.data, undefined) ?? d("other");
    }
    return xe(i, ki);
}
async function Nl(e, r) {
    let s = await Gi(e, r, "replace");
    if (s === "exists") {
        return d("busy");
    }
    return s;
}
const Fl = 5000;
async function zl(e, r) {
    let s = await ye(he(e, [
        "plugins",
        r.id,
        "scan-status"
    ]));
    if ("status" in s && k(s)) {
        return Bi(s.data, r) ?? r;
    }
    return r;
}
const Cl = 300000;
async function Ji(e, r, s = {
    left,
    until: Date.now() + Cl
}) {
    if (!(r.scan === "processing" && !e.signal.aborted && s.left > 0 && Date.now() < s.until)) {
        return r;
    }
    await Q(Fl, e.signal);
    return Ji(e, await zl(e, r), {
        left: s.left - 1,
        until: s.until
    });
}
const Ul = (e)=>Di(he(e, [
        "marketplaces",
        "list-account-marketplaces"
    ]), ()=>Al(e));
async function Hl(e, r) {
    let s = await Gi(e, r, "new");
    if (s !== "exists") {
        return s;
    }
    if (r.mode === "replace") {
        return Nl(e, r);
    }
    return d("exists");
}
const Wl = p(()=>u({
        organization: u({
            uuid: o(),
            name: o().min(1)
        })
    }));
const jl = 5000;
async function Bl(e, r) {
    if (!cZt()) {
        return;
    }
    let s = await ye({
        method: "get",
        path: "/api/oauth/profile",
        body: undefined,
        headers: {},
        bound: "clock",
        signal: AbortSignal.any([
            r,
            AbortSignal.timeout(jl)
        ])
    });
    let data = Wl().safeParse("status" in s && k(s) ? s.data : undefined).data;
    if (data?.organization.uuid === e) {
        return data.organization.name;
    }
}
async function Kl(e, signal) {
    if (e.name !== undefined) {
        return e;
    }
    return {
        ...e,
        name: await Bl(e.id, signal)
    };
}
async function ql() {
    let id_1 = Jt(ur() ? a.CLAUDE_CODE_ORGANIZATION_UUID : await fF());
    let r = qf();
    let s = r?.organizationUuid === id_1;
    if (id_1 === null) {
        return;
    }
    return {
        id: id_1,
        name: s && r?.organizationName || undefined
    };
}
async function ln(e) {
    if (e !== undefined) {
        return undefined;
    }
    return ql();
}
const un = ()=>{
    if (ur()) {
        return "no-organization";
    }
    return ds();
};
async function $l(e, signal) {
    let s = await ln(e);
    if (s === undefined) {
        return d(e ?? un());
    }
    let i = {
        organization: s,
        signal
    };
    let n = await si(i);
    if (Array.isArray(n)) {
        return Kl(s, signal);
    }
    return L(i, n, "nothing");
}
const Pjo = (e)=>[
        e ?? []
    ].flat().flatMap((r)=>[
            `Writes this manifest first, to ${r.path}:`,
            ...r.text.trimEnd().split(`
`)
        ]);
function gn(e) {
    if (e.draft !== undefined) {
        return {
            path: _x(Qp),
            text: e.draft ?? ""
        };
    }
}
const Xl = (e)=>Pjo(gn(e));
const z = 4096;
const yn = (e)=>`${Js(e.path, z)} (${Qt(e.bytes)})`;
const xjo = (e)=>[
        e
    ].filter((r)=>r > 0).map((r)=>`${r} ${I(r, "entry stays", "entries stay")} on this machine (secrets, links, ignored files)`);
const Gl = (e)=>xjo(e.plan.listing.leftOut.length);
const Cr = (manifest)=>Et([
        manifest.name,
        manifest.version
    ].filter(Boolean).join(" "));
const Hr = (e)=>Et(e.organization.name ?? `organization ${e.organization.id}`);
const An = (e)=>[
        "First uploads it to your own shelf on claude.ai (My Uploads), where it is scanned",
        `Then submits it to ${Hr(e)} for an administrator's review; where the organization publishes without review, it is published at once`,
        ...[
            Ae(e.plan.manifest)
        ].filter((r)=>r !== e.plan.manifest.name).map((r)=>`Listed under the name ${r}`),
        ...[
            e.wanted.mode
        ].filter((r)=>r === "replace").map(()=>"Replaces the plugin of this name on your shelf, if any")
    ];
const Ql = (e)=>e.plan.listing.files.filter((r)=>Eo.includes(r.path)).map((r)=>`Sends ${r.path}: keys and tokens written in it go with it`);
const Yl = "Entries stay behind that are neither named nor counted here: this session's rules deny reading them.";
const Pn = (e)=>{
    if (e.withheld) {
        return [
            Yl
        ];
    }
    return [];
};
const _n = (e)=>[
        ...Ql(e),
        ...Pn(e)
    ];
const C = (e)=>({
        question: `Publish ${Cr(e.plan.manifest)} to ${Hr(e)}?`,
        lines: [
            `Folder: ${Js(e.plan.root)}`,
            `Sends ${e.plan.listing.files.length} ${I(e.plan.listing.files.length, "file")}, ` + Qt(e.plan.bytes),
            ..._n(e),
            ...Gl(e),
            ...An(e),
            ...Xl(e)
        ],
        values: e.plan.listing.files.map(yn)
    });
const Vl = 48;
const uBt = {};
Mr(uBt, {
    MAX_CARD_FILES: ()=>tBr,
    default: ()=>uBt
});
var tBr = 20;
function Zl(values, r) {
    let s = values.slice(0, tBr).filter((f, m)=>values.slice(0, m + 1).join(`
`).length + Vl <= r);
    let i = values.length - s.length;
    if (i === 0) {
        return s;
    }
    return s.concat(`and ${i} more ${I(i, "file")} not named here`);
}
const Ln = (e, r)=>[
        C(e).question,
        `Organization: ${Hr(e)}`,
        ...C(e).lines,
        ...r
    ];
const Jl = 1800;
function eu(e, r) {
    let s = Ln(e, r);
    return s.concat(Zl(C(e).values, Jl - s.join(`
`).length));
}
function In(e, r) {
    let s = r.withheld ? "Every file, and what stays behind that is named, is listed in" : "Every file, and what stays behind, is listed in";
    return [
        e ?? ""
    ].filter(Boolean).map((i)=>`${s} ${i}`);
}
const ru = (e)=>({
        type: "other",
        reason: e.join(`
`)
    });
const Rjo = (e)=>`${e.path} (${Qt(e.bytes)})`;
const ZUr = (e, r)=>[
        e
    ].filter((s)=>s > 0).map((s)=>`and ${s} more ${I(s, r)} not named here`);
const ou = 128;
const x = 2 * z + ou;
const d8n = (e)=>(/^ */.exec(e)?.[0] ?? "") + Et(e, x);
const tu = (e)=>`stays here: ${e.path} (${e.words})`;
const Ijo = (e)=>[
        ...e.files.map(Rjo),
        ...ZUr(e.unnamed?.files ?? 0, "file"),
        ...e.stays.map(tu),
        ...ZUr(e.unnamed?.stays ?? 0, "entry")
    ].map(d8n);
const W = 500;
const su = 100000;
function Hn(e) {
    let r = e.slice(0, W);
    return r.slice(0, F(r.reduce((acc, item)=>acc.concat((acc.at(-1) ?? 0) + item.path.length), []), (s)=>s <= su));
}
const iu = (listing)=>({
        files: Hn(listing.files),
        stays: Hn(listing.leftOut)
    });
const $r = (e)=>at(_([
        e.plan.root,
        e.wanted.destination,
        e.organization.id,
        Cr(e.plan.manifest),
        e.wanted.mode,
        e.plan.listing.files.map((r)=>[
                r.path,
                r.bytes,
                r.mode,
                e.plan.hashes[r.path]
            ])
    ]));
function nu(listing, r) {
    let files = listing.files.length - r.files.length;
    let stays = listing.leftOut.length - r.stays.length;
    if (files === 0 && stays === 0) {
        return undefined;
    }
    return {
        files,
        stays
    };
}
const qn = Object.freeze({
    link: "a link, not followed",
    "hard-link": "shares what it holds with another name on this disk",
    ignored: "ignored by .gitignore",
    secret: "may hold a secret",
    never: "never sent",
    generated: "made by Claude Code",
    special: "not a file",
    backslash: "a backslash in its name"
});
const au = (e)=>`stays here: ${Js(e.path, z)}${` (${qn[e.why]})`}`;
const Xn = (e)=>[
        ...e.plan.listing.files.map(yn),
        ...e.plan.listing.leftOut.map(au)
    ];
const pu = (e)=>[
        ...Xn(e),
        ...Pn(e)
    ];
const Qn = (e)=>`${pu(e).join(`
`)}
`;
const fu = (e, r, s)=>({
        digest: $r(e),
        title: C(e).question,
        organization: {
            id: Et(e.organization.id),
            name: e.organization.name && Et(e.organization.name)
        },
        plugin: {
            name: Et(e.plan.manifest.name),
            version: e.plan.manifest.version && Et(e.plan.manifest.version)
        },
        folder: Js(e.plan.root, z),
        mode: e.wanted.mode,
        steps: An(e),
        warnings: _n(e),
        writes: gn(e),
        sends: {
            files: e.plan.listing.files.length,
            bytes: e.plan.bytes
        },
        files: s.files.map((i)=>({
                path: Js(i.path, z),
                bytes: i.bytes,
                sha256: e.plan.hashes[i.path] ?? "",
                runs: i.mode === jo
            })),
        staying: e.plan.listing.leftOut.length,
        stays: s.stays.map((i)=>({
                path: Js(i.path, z),
                why: i.why,
                words: qn[i.why]
            })),
        list: {
            sha256: at(Qn(e)),
            path: r
        },
        unnamed: nu(e.plan.listing, s)
    });
const mu = (e, r)=>fu(e, r, iu(e.plan.listing));
function lu(e, r) {
    let question = mu(e, r);
    return {
        path: e.plan.root,
        destination: e.wanted.destination,
        description: e.wanted.description,
        replace: e.wanted.mode === "replace" || undefined,
        shown: [
            ...Ln(e, In(r, e)),
            ...Ijo(question)
        ],
        question
    };
}
function uu(e, r) {
    let s = eu(e, In(r, e));
    return {
        behavior: "ask",
        message: C(e).question,
        updatedInput: lu(e, r),
        suppressAlwaysAllowRule: true,
        localDisplayOnly: false,
        decisionReason: ru(s)
    };
}
const du = Object.freeze({
    "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.",
    "third-party": "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.",
    bare: "Publishing is off under --bare. Nothing was sent.",
    "traffic-off": "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.",
    policy: "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.",
    "cloud-session": "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.",
    "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.",
    "no-organization": "This session is signed in by the app that started it, which didn't say which organization that is. Publish from a terminal session signed in with /login, or from claude.ai. Nothing was sent.",
    "nobody-to-ask": "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.",
    "other-question": "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.",
    "network-path": "That path names a place on the network, which publishing does not open. Nothing was read or sent.",
    "read-denied": "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.",
    "write-denied": "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.",
    "no-folder": "No folder at that path. Nothing was sent.",
    "not-a-plugin": "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.",
    findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.",
    "too-many-files": `The plugin has more than ${Ue} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`,
    "too-large": `The plugin is larger than ${Qt(tr)}, the most publishing sends. Nothing was published.`,
    unreadable: "Part of the folder couldn't be read, so nothing was sent.",
    changed: "The folder changed while it was being published, so nothing was sent. Publish again.",
    unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.",
    stopped: "Publishing was stopped.",
    failed: "Publishing ran into an error and stopped.",
    "not-served": "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.",
    "publishing-off": "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.",
    "creation-off": "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.",
    exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.",
    invalid: "claude.ai didn't take the plugin: it failed validation.",
    "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.",
    scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.",
    "scan-pending": "The security scan of the plugin is still running. Publish again in a few minutes.",
    "already-pending": "A submission is already pending review.",
    "nothing-new": "This version is already in your organization's library.",
    "in-progress": "An earlier submission of this plugin is being published. Publish again once it is in the library.",
    "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.",
    "needs-org-settings": "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.",
    "name-conflict": "An item with this name is already in your organization's library. Rename yours and publish again.",
    "library-full": "Your organization's library is full. An administrator makes room on claude.ai.",
    legal: "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.",
    busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.",
    other: "claude.ai didn't take the plugin."
});
function cu(e) {
    if (e.kind === "published") {
        return [
            `Colleagues install it with /plugin install ${Et(e.install)}`,
            `See it at ${Et(e.link)}`
        ];
    }
    return [];
}
const hu = Object.freeze({
    published: "published to your organization's library.",
    "in-review": "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.",
    publishing: "uploaded to your shelf and approved. It is on its way into your organization's library.",
    "on-shelf": "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed."
});
const gu = (e)=>[
        hu[e.kind],
        ...[
            e
        ].flatMap((r)=>{
            if ("verdict" in r) {
                return [
                    r
                ];
            }
            return [];
        }).flatMap(Pi),
        ...cu(e),
        ...[
            e
        ].flatMap((r)=>{
            if ("id" in r) {
                return [
                    r.id
                ];
            }
            return [];
        }).map((r)=>`Follow it on claude.ai: ${Pr(r)}`)
    ];
const xu = " (the plugin's own version; the library numbers its copies itself)";
const yu = (manifest)=>Cr(manifest) + (manifest.version ? xu : "");
function Yr(e) {
    if (e.kind === "refused") {
        return [
            du[e.refusal.kind],
            ...e.refusal.details.map((s)=>Et(s))
        ];
    }
    return gu(e).map((s, i)=>(i === 0 ? `${yu(e.manifest)}: ` : "") + s);
}
const bu = (reason)=>({
        type: "other",
        reason
    });
const Ru = (message)=>({
        behavior: "deny",
        message,
        decisionReason: bu(message)
    });
const Vr = (e, r = [])=>Ru(Yr(d(e, r)).join(`
`));
function pa(e, r) {
    if (e.refusal.kind === "unreadable" && sCe(r.permissions())) {
        return {
            ...e,
            refusal: {
                ...e.refusal,
                details: []
            }
        };
    }
    return e;
}
function ee(e, r) {
    let s = pa(e, r);
    return Vr(s.refusal.kind, s.refusal.details);
}
const Au = (e, r, s)=>r.files.map((i)=>i.path).filter((i)=>BD(join(e[0] ?? "", i), s.permissions(), e.map((n)=>join(n, i))));
function ua(e, r, s) {
    if (Au(e, r, s).length === 0) {
        return undefined;
    }
    return d("read-denied");
}
const Su = (e, agentId)=>agentId !== undefined || e.shouldAvoidPermissionPrompts === true || e.servedCall === true || e.mode === "dontAsk";
const Ou = 384;
async function vu(toolUseId, r, s) {
    let i = nh(s.session);
    let n = $2(toolUseId);
    let f = join(i, `publish-${n}.txt`);
    return (n !== undefined && dirname(f) === i ? S0(i, undefined) : Promise.reject(Error("The tool use id is no plain token"))).then(()=>wse(f, Buffer.from(Qn(r)), Ou)).then(()=>f, ()=>{});
}
const wu = [
    "bare-deny",
    "path-deny"
];
const Lu = (e, r)=>wu.includes(ZLe([
        e
    ], r.permissions(), {
        refuseAutomounterShapes: true
    }).layer);
async function ya(e, r) {
    let s = resolve(se(), e.path);
    if (Lu(s, r)) {
        return d("read-denied");
    }
    if (!sCe(r.permissions())) {
        return;
    }
    let i = await realpath(s).catch(()=>s);
    let n = await B(Ge(i));
    if ("kind" in n) {
        return n;
    }
    return ua([
        s,
        i
    ], n, r);
}
const ba = (e, r, s)=>QLe(s.tool, {
        path: e
    }, s.permissions(), r) !== null;
function Mu(e, r) {
    if (ba(e.path, [
        e.path
    ], r)) {
        return "network-path";
    }
    let s = resolve(se(), e.path);
    let i = i6(s);
    if (ba(s, i.paths, r)) {
        return "network-path";
    }
    if (i.vetted) {
        return undefined;
    }
    return "unreadable";
}
const Sa = (e, r)=>{
    if (W8n()) {
        return Mu(e, r);
    }
    return "flag-off";
};
const Du = 16;
const eBr = new lt(()=>new Map);
function Nu(toolUseId, r, s) {
    let i = eBr.of(s.session);
    i.set(toolUseId, r);
    Array.from(i.keys()).slice(0, Math.max(0, i.size - Du)).forEach((n)=>i.delete(n));
}
const Fu = 4000;
const va = p(()=>u({
        digest: o().regex(Jk).describe("What a yes binds to: the publish is of this, or refused."),
        title: o().max(x),
        organization: u({
            id: o().max(x),
            name: o().max(x).optional()
        }),
        plugin: u({
            name: o().max(x),
            version: o().max(x).optional()
        }),
        folder: o().max(x),
        mode: U([
            "new",
            "replace"
        ]).describe("Whether a plugin of this name on the shelf is replaced."),
        steps: T(o().max(x)).max(W).describe("What a yes sets off, a sentence each, in order."),
        warnings: T(o().max(x)).max(W).describe("What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."),
        writes: u({
            path: o().max(x),
            text: o().max(Fu)
        }).optional().describe("The manifest a yes writes into the folder first, if any."),
        sends: u({
            files: E(),
            bytes: E()
        }).describe("The whole count and size of what is sent."),
        files: T(u({
            path: o().max(x),
            bytes: E(),
            sha256: o().regex(Jk),
            runs: M().describe("Whether it is sent as runnable.")
        })).max(W).describe("The files sent, in the order of their paths."),
        staying: E().describe("How many entries stay on the machine and are counted here."),
        stays: T(u({
            path: o().max(x),
            why: U([
                "link",
                "hard-link",
                "ignored",
                "secret",
                "never",
                "generated",
                "special",
                "backslash"
            ]),
            words: o().max(x)
        })).max(W).describe("The entries that stay and are named, each with why."),
        list: u({
            sha256: o().regex(Jk),
            path: o().max(x).optional()
        }).describe("The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."),
        unnamed: u({
            files: E(),
            stays: E()
        }).optional().describe("Present only when the lists are over the bound: how many files and entries they do not name. The list file names them.")
    }));
const so = (e)=>at(_(RP(e)));
const wa = (question)=>so(va().safeParse(question).data ?? question);
const zu = (e, updatedInput)=>({
        digest: $r(e),
        question: wa(updatedInput.question),
        lines: so(updatedInput.shown),
        drafts: e.draft !== undefined,
        card: C(e),
        everything: Xn(e)
    });
const no = (e)=>{
    if (e.signal.aborted) {
        return d("stopped", [
            hs.nothing
        ]);
    }
};
const Uu = (e, path, s)=>[
        path,
        join(path, "within")
    ].some((i)=>BD(join(e[0] ?? "", i), s.permissions(), e.map((n)=>join(n, i))));
const Hu = (e, r)=>({
        ...e,
        plan: {
            ...e.plan,
            listing: {
                ...e.plan.listing,
                leftOut: r
            }
        },
        withheld: r.length < e.plan.listing.leftOut.length
    });
function Wu(e, r, s) {
    let i = !sCe(s.permissions());
    return Hu(e, e.plan.listing.leftOut.filter((n)=>i || !Uu(r, n.path, s)));
}
const ka = (e)=>({
        folder: e.path,
        destination: e.destination ?? "organization",
        description: e.description,
        mode: e.replace === true ? "replace" : "new"
    });
const ju = (file_path, r)=>l_(sv, {
        file_path,
        content: ""
    }, r).behavior === "deny" || BD(file_path, r);
const Bu = Object.freeze([
    Xt,
    ht
].map((name)=>Object.freeze({
        name,
        mcpInfo: undefined,
        familyParentToolName: undefined,
        aliasSkillToolNames: undefined,
        packagingAliasSkillToolNames: undefined
    })));
function Fa(e, r) {
    let s = r.permissions();
    let i = Bc(s).filter((n)=>!iNe.includes(n.source));
    return Bu.some((n)=>Go(s, n, i) !== null) || D(e).some((n)=>ju(join(n, Qp), s));
}
function qu(e, r, s) {
    if (r.draft !== undefined && Fa(e, s)) {
        return d("write-denied");
    }
}
async function Xu(e, r, s) {
    let { toolUseId } = r;
    let n = Sa(e, s);
    let f = toolUseId === undefined || Su(s.permissions(), s.agentId);
    if (n !== undefined || f) {
        return Vr(n ?? "nobody-to-ask");
    }
    let m = no(r) ?? await $l(cs(), r.signal);
    if ("kind" in m) {
        return ee(m, s);
    }
    let h = await ya(e, s) ?? no(r);
    if (h !== undefined) {
        return ee(h, s);
    }
    let g = await B(fr(ka(e), m));
    if ("kind" in g) {
        return ee(g, s);
    }
    let b = [
        resolve(se(), e.path),
        g.plan.root
    ];
    let y = ua(b, g.plan.listing, s) ?? qu(b, g, s);
    if (y !== undefined) {
        return ee(y, s);
    }
    let j = Wu(g, b, s);
    let R = await vu(toolUseId, j, s);
    let O = no(r);
    if (O !== undefined) {
        return ee(O, s);
    }
    let mo = uu(j, R);
    Nu(toolUseId, zu(j, mo.updatedInput), s);
    return mo;
}
const Gu = 1024;
const Qu = x;
const Yu = 100;
const Vu = 2 * W + Yu;
const Ojo = p(()=>De({
        path: o().min(1).max(Gu).describe("The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."),
        destination: A("organization").optional().describe("Where to publish. The one destination is the library of the organization the session is signed in to."),
        description: o().max(Ot).optional().describe("What the plugin does, in a sentence: used only for a manifest written for a folder that has none."),
        replace: M().optional().describe("True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."),
        shown: T(o().max(Qu)).max(Vu).optional().describe("Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."),
        question: va().optional().describe("Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named.")
    }));
const maxResultSizeChars = 4000;
const Ju = (e)=>({
        state: e.kind,
        refusal: e.kind === "refused" ? e.refusal.kind : undefined,
        lines: Yr(e)
    });
const ed = p(()=>De({
        state: U([
            "published",
            "in-review",
            "publishing",
            "on-shelf",
            "refused"
        ]),
        refusal: o().optional(),
        lines: T(o())
    }));
function rd(e) {
    let s = typeof e === "object" && e !== null && "path" in e ? e.path : undefined;
    if (typeof s === "string") {
        return s;
    }
    return "";
}
const Ga = (e, r)=>"plan" in e && $r(e) === r.digest;
async function id(e) {
    let r = join(e.root, Qp);
    await mkdir(dirname(r), {
        recursive: true
    }).catch(()=>{});
    if (await XU(dirname(r))) {
        return writeFile(r, e.draft, {
            flag: "wx"
        }).then(()=>true, ()=>false);
    }
    return false;
}
const nd = 420;
async function pd(e, r) {
    let s = _x(Qp);
    try {
        await e.mkdirp(posix.dirname(s));
        await e.create(s, Buffer.from(r.draft), nd);
        return true;
    } catch  {
        return false;
    } finally{
        await e.close();
    }
}
async function fd(e) {
    let { openTreeAnchor } = await import("/$bunfs/root/chunk-yef5j2vs.js");
    let s = await openTreeAnchor(await A7o(), {
        gitRoot: e.root,
        realRoot: e.root
    }).catch(()=>{});
    if (s === undefined) {
        return false;
    }
    if (!("unavailable" in s)) {
        return pd(s, e);
    }
    return id(e);
}
async function md(e, r) {
    let s = await os(e.folder, e.description);
    let i = await fr(e, r.organization);
    let n = Ga(i, r) && s.kind === "needs-manifest";
    if (n && !r.drafts) {
        return d("changed");
    }
    let m = n && await fd(s);
    if (n && !m) {
        return d("unwritten");
    }
    let h = m ? await fr(e, r.organization) : i;
    if (Ga(h, r) || "kind" in h) {
        return h;
    }
    return d("changed");
}
async function ld(root, r, s) {
    let i = await Ze(root, r);
    if (i !== undefined && at(i) === s) {
        return i;
    }
}
const ud = 65535;
const dd = 16;
const os_1 = 3;
const hd = (mode)=>({
        os: os_1,
        attrs: (mode & ud) << dd
    });
function gd(e, r) {
    if (e !== undefined && r !== undefined) {
        return [
            [
                e.path,
                [
                    r,
                    hd(e.mode)
                ]
            ]
        ];
    }
    return [];
}
const level = 6;
const mtime = "1980-01-01T00:00:00";
async function bd(plan) {
    let { zipSync } = await import("/$bunfs/root/chunk-vbfs7rth.js");
    let s = await Nt(plan.listing.files, (n)=>ld(plan.root, n, plan.hashes[n.path]), gd);
    if ("missed" in s) {
        return s;
    }
    return zipSync(Object.fromEntries(s), {
        level,
        mtime
    });
}
async function Rd(e) {
    let r = await si(e);
    if (!Array.isArray(r)) {
        return L(e, r, "nothing");
    }
    let s = await Ul(e);
    if (typeof s !== "string") {
        return L(e, s, "nothing");
    }
    let i = await Hl(s, e);
    if ("kind" in i) {
        return L(e, i, "uploading");
    }
    return hl(e, await Ji(e, i), r);
}
async function Ad(plan, r) {
    let s = await B(bd(plan));
    if ("kind" in s) {
        return s;
    }
    if ("missed" in s) {
        return Je(s);
    }
    if (s.length > tr) {
        return d("too-large");
    }
    return Rd(Pl(s, plan, r)).catch((n)=>d("failed", [
            l(n)
        ]));
}
async function Sd(e, r, signal) {
    let i = await md(e, r);
    if ("kind" in i) {
        return i;
    }
    return Ad(i.plan, {
        organization: r.organization,
        mode: e.mode,
        signal
    });
}
async function Od(e, r) {
    let { refusal, organization, shown } = r;
    if (refusal !== undefined) {
        return d(refusal);
    }
    if (organization === undefined) {
        return d(un());
    }
    if (shown !== undefined) {
        return Sd(ka(e), {
            digest: shown,
            drafts: r.drafts,
            organization
        }, r.signal);
    }
    return d("nobody-to-ask");
}
function Pd(e, r) {
    let s = r.question !== undefined && wa(r.question) !== e?.question;
    let i = r.shown !== undefined && so(r.shown) !== e?.lines;
    if (e !== undefined && (s || i)) {
        return "other-question";
    }
}
function _d(e, r) {
    if (!(e.kind === "refused" && e.refusal.kind === "stopped")) {
        return;
    }
    t(`plugin publish: stopped: ${e.refusal.details.join(" ")}`);
    r.appendSystemMessage?.(uT(Yr(e).join(`
`), "warning"));
}
async function Ld(e, r, s) {
    let i = resolve(se(), e.path);
    if (r && Fa([
        i,
        await realpath(i).catch(()=>i)
    ], s)) {
        return "write-denied";
    }
}
async function Ed(e, r, s) {
    let i = eBr.of(s.session);
    let n = i.get(r.toolUseId ?? "");
    let shown = n?.digest;
    i.delete(r.toolUseId ?? "");
    let m = n?.drafts === true;
    let refusal = Sa(e, s) ?? cs() ?? Pd(n, e) ?? (await ya(e, s))?.refusal.kind ?? await Ld(e, m, s);
    let g = await ln(refusal);
    let b = await Od(e, {
        shown,
        drafts: m,
        organization: g,
        refusal,
        signal: r.signal
    });
    let y = b.kind === "refused" ? pa(b, s) : b;
    _d(y, s);
    await (y.kind === "refused" ? Ft("plugin_publish", y.refusal.kind) : Ur("plugin_publish"));
    return y;
}
var u8n = Kt({
    name: J0e,
    searchHint: "publish or share a plugin or mod with the team or organization library",
    shouldDefer: true,
    backgrounding: "never",
    maxResultSizeChars,
    async description () {
        return pcs;
    },
    async prompt () {
        return fcs;
    },
    get inputSchema () {
        return Ojo();
    },
    get outputSchema () {
        return ed();
    },
    userFacingName () {
        return "Publish plugin";
    },
    isEnabled () {
        return W8n();
    },
    isConcurrencySafe () {
        return false;
    },
    isReadOnly () {
        return false;
    },
    requiresUserInteraction () {
        return true;
    },
    toAutoClassifierInput (e) {
        return _(e);
    },
    getToolUseSummary () {
        return "Publish a plugin to your organization's library on claude.ai";
    },
    getPath (e) {
        return rd(e);
    },
    renderToolUseMessage (e) {
        return e.path ?? "";
    },
    create (e) {
        let r = {
            ...e,
            tool: u8n
        };
        return {
            permissionCheckFailureDecision () {
                return Vr("failed");
            },
            async checkPermissions (s, i) {
                return Xu(s, i, r);
            },
            async call (s, i) {
                return {
                    data: Ju(await Ed(s, i, r))
                };
            }
        };
    },
    mapToolResultToToolResultBlockParam (e, tool_use_id) {
        return {
            type: "tool_result",
            tool_use_id,
            ...e.state === "refused" && {
                is_error: true
            },
            content: _(e)
        };
    }
});
export { Rjo, ZUr, d8n, xjo, Pjo, Ijo, Ojo, eBr, tBr, uBt, u8n };
