import { eo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { FS } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { un } from "/$bunfs/root/chunk-bd805sh6.js";
import { m0t } from "/$bunfs/root/chunk-6kc68p18.js";
import { ne, Nr, Cq, h2n } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { lw } from "/$bunfs/root/chunk-zfnrt9d9.js";
import { cRe, tH, _d, ol, UIt, rue, jlt, nZt, cz, Mn, xRe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { kT } from "/$bunfs/root/chunk-ytkshq2j.js";
import { _ct, pO, j_o } from "/$bunfs/root/chunk-6dwnw6av.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { Bs } from "/$bunfs/root/chunk-223dyewd.js";
import { Ivo, Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { LRs, fe, cvo, Dtn, hvo, kP, yvo, $tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Lw, Vtn, Ie, kxe } from "/$bunfs/root/chunk-nj0630nv.js";
import { fC, xUe, Wz } from "/$bunfs/root/chunk-55x53sfe.js";
import { DFe, rtn } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { pYe, c$n } from "/$bunfs/root/chunk-gr4a0fky.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { bh, ffs } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { qGe, V8o, IEn, OVt, MVt, cwt, ket, Aet, P_, LVt, NVt, yTn, Mhe, BXr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { tf, JD, GB } from "/$bunfs/root/chunk-9xenmz7v.js";
import { INn, ONn, Khs } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { BZe } from "/$bunfs/root/chunk-t98dpkx7.js";
import { PGe } from "/$bunfs/root/chunk-e6p3g23d.js";
import { ASn } from "/$bunfs/root/chunk-8v56bfnx.js";
import { ige } from "/$bunfs/root/chunk-62d2d3kv.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { EJe } from "/$bunfs/root/chunk-8ncns7p7.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { zKo } from "/$bunfs/root/chunk-6yj2dj9t.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function Mcn(i) {
    let t = [];
    for (let u of i){
        let o = typeof u.value === "string" ? u.value : Array.isArray(u.value) ? u.value.join(", ") : null;
        if (o === null || o === "" || o === "none") {
            continue;
        }
        t.push(u.label ? {
            label: u.label,
            value: o
        } : {
            value: o
        });
    }
    return t;
}
function J1e(i) {
    let t = i.map((u)=>u.filter((o)=>!o.antOnly));
    t.push(i.flatMap((u)=>u.filter((o)=>o.antOnly)));
    return t;
}
const sr = import.meta.require("/$bunfs/root/chunk-6cwz815e.js");
function kLo() {
    return [];
}
function TLo() {
    return [];
}
function ALo() {
    return [];
}
function CLo(i, t = null, u) {
    let o = i?.find((c)=>c.name === "ide");
    if (t) {
        let c = FS(t.ideType);
        let l = Mhe(t.ideType) ? "plugin" : "extension";
        if (t.error) {
            return [
                {
                    label: "IDE",
                    value: r(n, {
                        children: [
                            Wn("error", u)(te.cross),
                            " Error installing ",
                            c,
                            " ",
                            l,
                            ": ",
                            t.error,
                            `
`,
                            "Please restart your IDE and try again."
                        ]
                    })
                }
            ];
        }
        if (t.installed) {
            if (o && o.type === "connected") {
                if (t.installedVersion !== o.serverInfo?.version) {
                    return [
                        {
                            label: "IDE",
                            value: `Connected to ${c} ${l} version ${t.installedVersion} (server version: ${o.serverInfo?.version})`
                        }
                    ];
                } else {
                    return [
                        {
                            label: "IDE",
                            value: `Connected to ${c} ${l} version ${t.installedVersion}`
                        }
                    ];
                }
            } else {
                return [
                    {
                        label: "IDE",
                        value: `Installed ${c} ${l}`
                    }
                ];
            }
        }
    } else if (o) {
        let c = BXr(o) ?? "IDE";
        if (o.type === "connected") {
            return [
                {
                    label: "IDE",
                    value: `Connected to ${c} extension`
                }
            ];
        } else {
            return [
                {
                    label: "IDE",
                    value: `${Wn("error", u)(te.cross)} Not connected to ${c}`
                }
            ];
        }
    }
    return [];
}
function RLo(i = [], t) {
    let u = i.filter((l)=>l.name !== "ide");
    if (!u.length) {
        return [];
    }
    let o = {
        connected: 0,
        cached: 0,
        pending: 0,
        needsAuth: 0,
        disabled: 0,
        failed: 0
    };
    for (let l of u){
        switch(l.type){
            case "connected":
                o.connected++;
                break;
            case "cached":
                o.cached++;
                break;
            case "pending":
                o.pending++;
                break;
            case "needs-auth":
                o.needsAuth++;
                break;
            case "disabled":
                o.disabled++;
                break;
            case "failed":
                o.failed++;
                break;
            default:
        }
    }
    let c = [];
    if (o.connected) {
        c.push(Wn("success", t)(`${o.connected} connected`));
    }
    if (o.cached) {
        c.push(Wn("inactive", t)(`${o.cached} cached`));
    }
    if (o.needsAuth) {
        c.push(Wn("warning", t)(`${o.needsAuth} need auth`));
    }
    if (o.pending) {
        c.push(Wn("inactive", t)(`${o.pending} pending`));
    }
    if (o.disabled) {
        c.push(Wn("inactive", t)(`${o.disabled} disabled`));
    }
    if (o.failed) {
        c.push(Wn("error", t)(`${o.failed} failed`));
    }
    return [
        {
            label: "MCP servers",
            value: `${c.join(", ")} ${Wn("inactive", t)("· /mcp")}`
        }
    ];
}
async function xLo(i, t, u) {
    if (kT()) {
        return [];
    }
    let o = await P_(i, false, t, u);
    let c = LVt(o);
    let l = [];
    let d = NVt(o);
    if (d) {
        l.push(`Instruction files will impact performance: ${d.summary.fileCount} files, ${Bs(d.summary.totalChars)} chars in total > ${Bs(d.summary.totalLimitChars)}`);
    }
    let f = Aet();
    c.forEach((p)=>{
        let m = os(p.path);
        l.push(`Large ${m} will impact performance (${Bs(p.content.length)} chars > ${Bs(f)})`);
    });
    let g = cwt(ket(i));
    for (let { path, why } of g.shown){
        let v = OVt(why, os(path));
        l.push(r(s, {
            flexDirection: "column",
            flexShrink: 1,
            children: [
                e(n, {
                    children: v.lead
                }),
                r(s, {
                    flexDirection: "row",
                    children: [
                        e(s, {
                            flexShrink: 0,
                            marginRight: 1,
                            children: e(n, {
                                children: v.mark
                            })
                        }),
                        e(n, {
                            bold: true,
                            wrap: "truncate-start",
                            children: v.path
                        })
                    ]
                })
            ]
        }, path));
    }
    if (g.more > 0) {
        l.push(MVt(g));
    }
    return l;
}
function C(i = "remote") {
    let t = Dtn();
    if (!t) {
        return null;
    }
    return `Enterprise managed settings (${t.map((o)=>{
        if (o === "remote") {
            return i;
        }
        return b(o);
    }).join(" + ")}, merged)`;
}
function PLo() {
    let i = Lo();
    let t = cvo();
    let c = [
        {
            label: "Setting sources",
            value: i.filter((p)=>{
                if (p === "policySettings" && t.composes !== "none") {
                    return true;
                }
                let m = fe(p);
                return m !== null && Object.keys(m).length > 0;
            }).map((p)=>{
                if (p === "policySettings") {
                    if (t.composes !== "none") {
                        let v = t.composes === "remoteSlot";
                        let S = LRs() ? `${v ? "remote " : ""}default settings payload` : v ? "remote helper" : "helper";
                        let y = t.mergedOver ? `${S} merged over ${b(t.mergedOver)}` : S;
                        return (v ? C(y) : null) ?? `Enterprise managed settings (${y})`;
                    }
                    let m = kP();
                    if (m === null) {
                        return null;
                    }
                    return C() ?? A(m);
                }
                return Ivo(p);
            }).filter((p)=>p !== null)
        }
    ];
    let l = yvo();
    if (l.length > 0) {
        c.push({
            label: "Skipped sources",
            value: l.map(A)
        });
    }
    if (bh()) {
        let p = [
            ...ffs()
        ];
        c.push({
            label: "Permission rules",
            value: [
                "Managed settings only (allowManagedPermissionRulesOnly)",
                ...p.length > 0 ? [
                    `allowed-tools ignored this session: ${p.join(", ")}`
                ] : []
            ]
        });
    }
    let d = qGe();
    if (d && V8o(d)) {
        c.push({
            label: "Managed settings (remote)",
            value: IEn(d)
        });
    }
    let f = INn();
    if (Khs(f)) {
        c.push({
            label: "Organization policy",
            value: ONn(f)
        });
    }
    let g = zKo();
    if (g !== undefined) {
        c.push({
            label: "Client data",
            value: g
        });
    }
    return c;
}
function ILo(i) {
    return [
        {
            label: "Auto mode server",
            value: yTn(i) ? "Enabled" : "Disabled"
        }
    ];
}
function b(i) {
    switch(i){
        case "helper":
        case "remote":
        case "plist":
            return i;
        case "hklm":
            return "HKLM";
        case "file":
            {
                let { hasBase, hasDropIns } = hvo();
                if (hasBase && hasDropIns) {
                    return "file + drop-ins";
                }
                if (hasDropIns) {
                    return "drop-ins";
                }
                return "file";
            }
        case "parent":
            return "parent process";
        case "hkcu":
            return "HKCU";
    }
}
function A(i) {
    return `Enterprise managed settings (${b(i)})`;
}
async function OLo() {
    return (await PGe()).filter((t)=>t.type !== "error").map((t)=>t.message);
}
async function MLo(i) {
    let t = GB();
    let u = tf();
    if (!t && !u) {
        return [];
    }
    let o = [];
    if (u) {
        o.push(`${u} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`);
        return o;
    }
    let c = uu();
    o.push(`Self-exec: \`${[
        c.cmd,
        ...c.prefixArgs
    ].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`);
    if (!await JD()) {
        o.push(`The launcher \`${c.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`);
    }
    let l = await lw(1, i).catch(()=>null);
    if (!l) {
        return o;
    }
    let [{ controlRequest }, { BG_PROTO }] = await Promise.all([
        import("/$bunfs/root/chunk-djcwd5yz.js"),
        import("/$bunfs/root/chunk-syas54jj.js")
    ]);
    let g = await controlRequest({
        proto: BG_PROTO,
        op: "nudge"
    }).catch(()=>null);
    let p = g?.ok && g.op === "nudge" ? g.processWrapper ?? "" : l.processWrapper ?? "";
    let m = ne(Nr(un(p)), 200);
    if (l.origin === "service") {
        o.push(`The installed background service predates launcher support and runs outside \`${c.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`);
    }
    if (p !== t) {
        o.push(`The running background service launches sessions via \`${m || "(no launcher)"}\`, but this session resolves \`${t}\` \u2014 restart it (and your running claude sessions) to converge`);
    }
    return o;
}
async function HLo(storageV5) {
    let t = await BZe({
        storageV5
    });
    let u = [];
    let { statusNotices, invalidEntries } = EJe(ige().errors);
    if (invalidEntries.length > 0) {
        let d = D(invalidEntries.map((g)=>g.file)).join(", ");
        u.push(`Found invalid entries in: ${d}.`);
        let f = await ASn(storageV5);
        if (f === "settings_unknowable" || f === "settings_invalid_key_set") {
            u.push("Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).");
        }
    }
    for (let l of statusNotices){
        u.push(l.message);
    }
    for (let [l, d] of $tn()){
        u.push(`${l}
${d}`);
    }
    t.warnings.forEach((l)=>{
        u.push(l.issue);
    });
    if (t.hasUpdatePermissions === false) {
        u.push("No write permissions for auto-updates");
    }
    return u;
}
function Q1e(i) {
    if (!(j() && i !== undefined)) {
        return;
    }
    return (async ()=>({
            refreshKnownDead: ol() && await cz(i)
        }))().catch(()=>({
            refreshKnownDead: false
        }));
}
function Hcn(i) {
    let t = xRe();
    if (!t) {
        return [];
    }
    let u = [];
    if (i !== undefined && j() ? i.refreshKnownDead : ol() && nZt()) {
        u.push({
            label: "Login",
            value: "Expired — log in again"
        });
        let p = Mn();
        if (p?.organizationName && !a.IS_DEMO) {
            u.push({
                label: "Organization",
                value: p.organizationName
            });
        }
        if (p?.emailAddress && !a.IS_DEMO) {
            u.push({
                label: "Email",
                value: p.emailAddress
            });
        }
        return u;
    }
    if (t.subscription) {
        u.push({
            label: "Login method",
            value: `${t.subscription} account`
        });
    }
    let o = " · not in use";
    let c = t.apiKeySource ?? "none";
    let l = UIt(t.tokenSource ?? "none", c);
    if (t.tokenSource) {
        u.push({
            label: "Auth token",
            value: l.tokenSource === t.tokenSource ? t.tokenSource : `${t.tokenSource}${o}`
        });
    }
    if (t.apiKeySource) {
        u.push({
            label: "API key",
            value: l.apiKey ? t.apiKeySource : `${t.apiKeySource}${o}`
        });
    }
    let d = jlt();
    if (d && rue()) {
        u.push({
            label: "apiKeyHelper",
            value: a.IS_DEMO ? "Failing" : `Failing \u2014 last run ${Cq(d, h2n)}`
        });
    }
    let f = _d();
    let g = f && UIt("profile", c).tokenSource === "profile";
    if (f) {
        u.push({
            label: "Profile",
            value: `${rtn()}${g ? "" : o}`
        });
    }
    if (g) {
        let p = DFe();
        if (!a.IS_DEMO) {
            if (p?.organizationName || p?.organizationUuid) {
                u.push({
                    label: "Organization",
                    value: [
                        p.organizationName,
                        p.organizationUuid
                    ].filter(Boolean).join(" · ")
                });
            }
            if (p?.accountEmail) {
                u.push({
                    label: "Email",
                    value: p.accountEmail
                });
            }
        }
    }
    if (t.organization && !a.IS_DEMO) {
        u.push({
            label: "Organization",
            value: t.organization
        });
    }
    if (t.email && !a.IS_DEMO) {
        u.push({
            label: "Email",
            value: t.email
        });
    }
    return u;
}
function h(i) {
    let t;
    try {
        t = new URL(i);
    } catch  {
        t = undefined;
    }
    if (t?.host) {
        if (!t.username && !t.password) {
            return i;
        }
        let c = new URL(t.href);
        c.username = "***";
        c.password = "";
        return c.href;
    }
    let u = i.lastIndexOf("@");
    if (u < 0) {
        return i;
    }
    return `${/^[a-z][a-z0-9+.-]*:\/\//i.exec(i)?.[0] ?? ""}***${i.slice(u)}`;
}
function Dcn() {
    let i = Ie();
    let t = [];
    let u = cRe();
    if (u !== undefined) {
        t.push({
            label: "Allowed providers",
            value: u.length === 0 ? "none (managed allowedProviders is empty)" : `${u.map(Vtn).join(", ")} (managed allowedProviders)`
        });
    }
    if (i !== "firstParty") {
        let l = kxe();
        let value = l ? `${Lw[i]} + ${Lw[l]}` : Lw[i];
        t.push({
            label: "API provider",
            value
        });
    }
    if (i === "firstParty") {
        let l = a.ANTHROPIC_BASE_URL;
        if (l) {
            t.push({
                label: "Anthropic base URL",
                value: h(l)
            });
        }
    } else if (i === "bedrock") {
        let l = a.ANTHROPIC_BEDROCK_BASE_URL;
        if (l) {
            t.push({
                label: "Bedrock base URL",
                value: h(l)
            });
        }
        t.push({
            label: "AWS region",
            value: P()
        });
        let d = a.ANTHROPIC_BEDROCK_SERVICE_TIER;
        if (d) {
            t.push({
                label: "Bedrock service tier",
                value: d
            });
        }
        if (a.CLAUDE_CODE_SKIP_BEDROCK_AUTH) {
            t.push({
                value: "AWS auth skipped"
            });
        }
    } else if (i === "vertex") {
        let l = a.ANTHROPIC_VERTEX_BASE_URL;
        if (l) {
            t.push({
                label: "Vertex base URL",
                value: h(l)
            });
        }
        let d = a.ANTHROPIC_VERTEX_PROJECT_ID;
        if (d) {
            t.push({
                label: "GCP project",
                value: d
            });
        }
        t.push({
            label: "Default region",
            value: m0t()
        });
        if (a.CLAUDE_CODE_SKIP_VERTEX_AUTH) {
            t.push({
                value: "GCP auth skipped"
            });
        }
    } else if (i === "foundry") {
        let l = a.ANTHROPIC_FOUNDRY_BASE_URL;
        if (l) {
            t.push({
                label: "Microsoft Foundry base URL",
                value: h(l)
            });
        }
        let d = a.ANTHROPIC_FOUNDRY_RESOURCE;
        if (d) {
            t.push({
                label: "Microsoft Foundry resource",
                value: d
            });
        }
        if (a.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) {
            t.push({
                value: "Microsoft Foundry auth skipped"
            });
        }
    } else if (i === "anthropicAws") {
        let l = a.ANTHROPIC_AWS_BASE_URL;
        if (l) {
            t.push({
                label: "Claude Platform on AWS base URL",
                value: h(l)
            });
        }
        let d = a.ANTHROPIC_AWS_WORKSPACE_ID;
        if (d) {
            t.push({
                label: "Workspace ID",
                value: d
            });
        }
        t.push({
            label: "AWS region",
            value: _ct()
        });
        if (a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH) {
            t.push({
                value: "Claude Platform on AWS auth skipped"
            });
        }
    } else if (i === "anthropicGoogleCloud") {
        let l = a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
        if (l) {
            t.push({
                label: "Claude Platform on Google Cloud base URL",
                value: h(l)
            });
        }
        let d = a.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
        if (d) {
            t.push({
                label: "Workspace ID",
                value: d
            });
        }
        let f = a.ANTHROPIC_GOOGLE_CLOUD_PROJECT || a.GOOGLE_CLOUD_PROJECT;
        if (f) {
            t.push({
                label: "GCP project",
                value: f
            });
        }
        t.push({
            label: "GCP location",
            value: a.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global"
        });
        if (a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH) {
            t.push({
                value: "Claude Platform on Google Cloud auth skipped"
            });
        }
    } else if (i === "gateway") {
        let l = eo();
        if (l) {
            t.push({
                label: "Gateway URL",
                value: h(l.url)
            });
            if (l.email && !a.IS_DEMO) {
                t.push({
                    label: "Gateway account",
                    value: l.email
                });
            }
        }
    }
    if (i === "mantle" || kxe() === "mantle") {
        let l = a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
        if (l) {
            t.push({
                label: "Amazon Bedrock (Mantle) base URL",
                value: h(l)
            });
        }
        if (i === "mantle") {
            t.push({
                label: "AWS region",
                value: P()
            });
        }
        if (a.CLAUDE_CODE_SKIP_MANTLE_AUTH) {
            t.push({
                value: "Amazon Bedrock (Mantle) auth skipped"
            });
        }
    }
    let o = xUe();
    if (o) {
        t.push({
            label: "Proxy",
            value: Wz(o) ? h(o) : `${h(o).replace(/\p{Cc}/gu, "")} (invalid \u2014 ignored; fix or unset the proxy env var)`
        });
    }
    let c = fC();
    if (a.NODE_EXTRA_CA_CERTS) {
        t.push({
            label: "Additional CA cert(s)",
            value: a.NODE_EXTRA_CA_CERTS
        });
    }
    if (c) {
        if (c.cert && a.CLAUDE_CODE_CLIENT_CERT) {
            t.push({
                label: "mTLS client cert",
                value: a.CLAUDE_CODE_CLIENT_CERT
            });
        }
        if (c.key && a.CLAUDE_CODE_CLIENT_KEY) {
            t.push({
                label: "mTLS client key",
                value: a.CLAUDE_CODE_CLIENT_KEY
            });
        }
    }
    return t;
}
function P() {
    let { region, source } = j_o();
    switch(source){
        case "env":
            return region;
        case "shared-config":
            return `${region} (from AWS config)`;
        case "env-invalid":
        case "default":
            pO();
            if (source === "env-invalid") {
                return `${region} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)`;
            }
            return `${region} (default \u2014 set AWS_REGION or add a region to your AWS config)`;
    }
}
function DLo(i) {
    let t = tH(i);
    let u = pYe();
    if (u !== undefined) {
        return `${t} (${c$n(tH(u.previousModel))})`;
    }
    return t;
}
export { Mcn, J1e, kLo, TLo, ALo, CLo, RLo, xLo, PLo, ILo, OLo, MLo, HLo, Q1e, Hcn, Dcn, DLo };
