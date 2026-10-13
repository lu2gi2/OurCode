import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Wpt } from "/$bunfs/root/chunk-6kc68p18.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { gR, Obe, $7t, F7t } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { yn, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ho } from "/$bunfs/root/chunk-nj0630nv.js";
import { _P } from "/$bunfs/root/chunk-6dwnw6av.js";
import { eoe, Uxt, FCe, UCe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { jr, Ir, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ije, Bu, ud, z0, Rmt, tdn } from "/$bunfs/root/chunk-zbd17n62.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { px } from "/$bunfs/root/chunk-e2vrg5f2.js";
import { tn } from "/$bunfs/root/chunk-h8kxxbjq.js";
import { Hr } from "/$bunfs/root/chunk-wmf7fpt3.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { KSn } from "/$bunfs/root/chunk-t7wqj1c6.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { homedir } from "os";
const T = {
    AUTH_METHOD: 0,
    SERVICE_ACCOUNT: 1,
    PROJECT: 2,
    REGION: 3,
    VERIFY: 4,
    PIN_MODELS: 5,
    CONFIRM: 6
};
function te() {
    let t = w(10);
    let { goBack, goToStep, updateWizardData, wizardData } = Bu();
    let h;
    if (t[0] === S) {
        h = [
            {
                label: "Application Default Credentials (gcloud auth)",
                value: "adc"
            },
            {
                label: "Service account key file",
                value: "serviceAccount"
            },
            {
                label: "Use credentials already in my environment",
                value: "environment"
            }
        ];
        t[0] = h;
    } else {
        h = t[0];
    }
    let options = h;
    let f;
    if (t[1] === S) {
        f = {
            adc: T.PROJECT,
            serviceAccount: T.SERVICE_ACCOUNT,
            environment: T.PROJECT
        };
        t[1] = f;
    } else {
        f = t[1];
    }
    let u = f;
    let k;
    if (t[2] !== goToStep || t[3] !== updateWizardData) {
        k = (g)=>{
            let authMethod = g;
            updateWizardData({
                authMethod
            });
            goToStep(u[authMethod]);
        };
        t[2] = goToStep;
        t[3] = updateWizardData;
        t[4] = k;
    } else {
        k = t[4];
    }
    let A = k;
    let d;
    if (t[5] === S) {
        d = e(n, {
            dimColor: true,
            children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
        });
        t[5] = d;
    } else {
        d = t[5];
    }
    let D;
    if (t[6] !== goBack || t[7] !== A || t[8] !== wizardData.authMethod) {
        D = e(ud, {
            subtitle: "How do you authenticate to Google Cloud?",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    d,
                    e(Ve, {
                        options,
                        defaultValue: wizardData.authMethod,
                        onChange: A,
                        onCancel: goBack
                    })
                ]
            })
        });
        t[6] = goBack;
        t[7] = A;
        t[8] = wizardData.authMethod;
        t[9] = D;
    } else {
        D = t[9];
    }
    return D;
}
N();
function St(J) {
    return J[1] !== undefined;
}
function kt([z, U]) {
    return r(n, {
        children: [
            "  ",
            e(n, {
                color: "suggestion",
                children: z
            }),
            " = ",
            U
        ]
    }, z);
}
function ve(wizardData) {
    let l = {
        CLAUDE_CODE_USE_VERTEX: "1",
        CLAUDE_CODE_USE_BEDROCK: undefined,
        CLAUDE_CODE_USE_FOUNDRY: undefined,
        CLAUDE_CODE_USE_ANTHROPIC_AWS: undefined,
        CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: undefined,
        CLAUDE_CODE_USE_MANTLE: undefined,
        ANTHROPIC_VERTEX_PROJECT_ID: wizardData.projectId,
        CLOUD_ML_REGION: wizardData.region,
        GOOGLE_APPLICATION_CREDENTIALS: undefined,
        ANTHROPIC_DEFAULT_SONNET_MODEL: undefined,
        ANTHROPIC_DEFAULT_OPUS_MODEL: undefined,
        ANTHROPIC_DEFAULT_HAIKU_MODEL: undefined,
        ANTHROPIC_DEFAULT_FABLE_MODEL: undefined,
        ANTHROPIC_SMALL_FAST_MODEL: undefined
    };
    if (wizardData.authMethod === "serviceAccount") {
        l.GOOGLE_APPLICATION_CREDENTIALS = wizardData.keyFile;
    }
    if (wizardData.pinSonnet) {
        l.ANTHROPIC_DEFAULT_SONNET_MODEL = wizardData.pinSonnet;
    }
    if (wizardData.pinOpus) {
        l.ANTHROPIC_DEFAULT_OPUS_MODEL = wizardData.pinOpus;
    }
    if (wizardData.pinFable) {
        l.ANTHROPIC_DEFAULT_FABLE_MODEL = wizardData.pinFable;
    }
    if (wizardData.pinHaiku) {
        l.ANTHROPIC_DEFAULT_HAIKU_MODEL = wizardData.pinHaiku;
    }
    return l;
}
function oe(o) {
    let f = w(30);
    let { onComplete } = o;
    let { storageV5 } = Pe();
    let { goBack, wizardData } = Bu();
    let [h, p] = y(null);
    let u;
    if (f[0] === S) {
        u = Rs(yn("userSettings") ?? "~/.claude/settings.json");
        f[0] = u;
    } else {
        u = f[0];
    }
    let k = u;
    let g;
    if (f[1] !== wizardData) {
        g = ve(wizardData);
        f[1] = wizardData;
        f[2] = g;
    } else {
        g = f[2];
    }
    let env = g;
    let A;
    if (f[3] !== env) {
        A = Object.entries(env).filter(St);
        f[3] = env;
        f[4] = A;
    } else {
        A = f[4];
    }
    let d = A;
    let D = R(false);
    let x;
    if (f[5] !== env || f[6] !== onComplete || f[7] !== storageV5 || f[8] !== wizardData.authMethod || f[9] !== wizardData.pinFable || f[10] !== wizardData.pinHaiku || f[11] !== wizardData.pinOpus || f[12] !== wizardData.pinSonnet || f[13] !== wizardData.verifiedIdentity) {
        x = async ()=>{
            if (D.current) {
                return;
            }
            D.current = true;
            let { error } = await Tn("userSettings", {
                env
            }, undefined, storageV5);
            if (error) {
                D.current = false;
                p(error.message);
                return;
            }
            i("tengu_vertex_setup_complete", {
                auth_method: pe(wizardData.authMethod),
                pinned_models: Boolean(wizardData.pinSonnet || wizardData.pinOpus || wizardData.pinFable || wizardData.pinHaiku),
                verified: Boolean(wizardData.verifiedIdentity)
            });
            onComplete(`Vertex AI configuration saved to ${k}.${wizardData.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` — Claude Code picks up refreshed credentials automatically." : ""}`);
        };
        f[5] = env;
        f[6] = onComplete;
        f[7] = storageV5;
        f[8] = wizardData.authMethod;
        f[9] = wizardData.pinFable;
        f[10] = wizardData.pinHaiku;
        f[11] = wizardData.pinOpus;
        f[12] = wizardData.pinSonnet;
        f[13] = wizardData.verifiedIdentity;
        f[14] = x;
    } else {
        x = f[14];
    }
    let onConfirm = x;
    let E;
    if (f[15] === S) {
        E = r(n, {
            children: [
                "These will be written to ",
                k,
                " under env:"
            ]
        });
        f[15] = E;
    } else {
        E = f[15];
    }
    let v;
    if (f[16] !== d) {
        v = e(s, {
            flexDirection: "column",
            children: d.map(kt)
        });
        f[16] = d;
        f[17] = v;
    } else {
        v = f[17];
    }
    let b;
    if (f[18] !== wizardData.verifiedIdentity) {
        b = wizardData.verifiedIdentity && r(n, {
            dimColor: true,
            children: [
                e(dt, {
                    status: "success",
                    withSpace: true
                }),
                "Verified as ",
                wizardData.verifiedIdentity
            ]
        });
        f[18] = wizardData.verifiedIdentity;
        f[19] = b;
    } else {
        b = f[19];
    }
    let W;
    if (f[20] !== h) {
        W = e(es, {
            error: h
        });
        f[20] = h;
        f[21] = W;
    } else {
        W = f[21];
    }
    let Y;
    if (f[22] !== goBack || f[23] !== onConfirm) {
        Y = e(or, {
            confirmLabel: "Save",
            cancelLabel: "Cancel",
            onConfirm,
            onCancel: goBack
        });
        f[22] = goBack;
        f[23] = onConfirm;
        f[24] = Y;
    } else {
        Y = f[24];
    }
    let F;
    if (f[25] !== v || f[26] !== b || f[27] !== W || f[28] !== Y) {
        F = e(ud, {
            subtitle: "Confirm and save",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    E,
                    v,
                    b,
                    W,
                    Y
                ]
            })
        });
        f[25] = v;
        f[26] = b;
        f[27] = W;
        f[28] = Y;
        f[29] = F;
    } else {
        F = f[29];
    }
    return F;
}
function ne() {
    return {
        sonnet: Ho[gR].vertex,
        opus: Ho[$7t].vertex,
        haiku: Ho[Obe].vertex,
        fable: Ho[F7t].vertex
    };
}
function Se(o) {
    let l = new Set;
    for (let c of Object.values(Ho)){
        if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) {
            l.add(c.vertex);
        }
    }
    return [
        ...l
    ].sort().reverse();
}
function ke(o) {
    if (o.authMethod === "serviceAccount" && o.keyFile) {
        return {
            kind: "keyFile",
            path: o.keyFile
        };
    }
    return {
        kind: "default"
    };
}
const Pt = 12000;
async function ae(wizardData) {
    let identity;
    try {
        let t = await Uxt(ke(wizardData), wizardData.projectId);
        let h = (async ()=>{
            await (await t.getClient()).getAccessToken();
        })();
        await Ut(h, Pt, "Timed out waiting for GCP credentials");
        let p;
        try {
            p = (await t.getCredentials()).client_email;
        } catch  {
            p = undefined;
        }
        identity = p ?? (wizardData.authMethod === "serviceAccount" ? `service account (${wizardData.keyFile})` : "Application Default Credentials");
    } catch (error) {
        return {
            status: "error",
            ...bt(error, wizardData)
        };
    }
    let haiku = ne().haiku;
    let m = await se(wizardData, haiku);
    if (m.ok) {
        return {
            status: "ok",
            identity,
            note: `Test request to ${haiku} succeeded.`
        };
    }
    switch(m.reason){
        case "auth":
            return {
                status: "error",
                error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
            };
        case "permission":
            return {
                status: "error",
                error: `Permission denied calling Vertex AI in project "${wizardData.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
            };
        case "model":
            return {
                status: "ok",
                identity,
                note: `Credentials work, but ${haiku} returned not-found in ${wizardData.region}. Pin a model you have access to on the next step, or try the 'global' region.`
            };
        case "network":
            return {
                status: "error",
                error: `Could not reach Vertex AI in region "${wizardData.region}". Check the region name and your network.`
            };
        case "other":
            return {
                status: "ok",
                identity,
                note: `Credentials work, but the test request to ${haiku} failed. You can pin a different model on the next step.`
            };
    }
}
async function se(o, l) {
    return tdn(()=>Rt(o), l, ()=>"auth");
}
async function Rt(o) {
    let [{ AnthropicVertex }, { getProxyFetchOptions }] = await Promise.all([
        import("/$bunfs/root/chunk-nax4nkd4.js"),
        import("/$bunfs/root/chunk-g1ar6avr.js")
    ]);
    let googleAuth = await Uxt(ke(o), o.projectId);
    return FCe(new AnthropicVertex({
        region: o.region,
        projectId: o.projectId,
        googleAuth,
        maxRetries: 0,
        defaultHeaders: {
            ...eoe(),
            ...UCe()
        },
        ..._P,
        timeout: 15000,
        fetchOptions: getProxyFetchOptions({
            url: a.ANTHROPIC_VERTEX_BASE_URL || Wpt(o.region)
        })
    }));
}
const command = "gcloud auth application-default login";
function bt(o, wizardData) {
    let error = o?.message ?? String(o);
    if (/ENOENT|no such file/i.test(error)) {
        if (wizardData.authMethod === "serviceAccount" && wizardData.keyFile && error.includes(wizardData.keyFile)) {
            return {
                error: `Service account key file not found: ${wizardData.keyFile}`
            };
        }
        let m = a.GOOGLE_APPLICATION_CREDENTIALS ? [
            "GOOGLE_APPLICATION_CREDENTIALS",
            a.GOOGLE_APPLICATION_CREDENTIALS
        ] : a.google_application_credentials ? [
            "google_application_credentials",
            a.google_application_credentials
        ] : undefined;
        if (m && wizardData.authMethod !== "serviceAccount" && error.includes(`The file at ${m[1]} does not exist`)) {
            return {
                error: `Key file named by ${m[0]} not found: ${m[1]}`
            };
        }
    }
    if (/Could not load the default credentials/i.test(error)) {
        if (wizardData.authMethod === "adc") {
            return {
                error: "No Application Default Credentials found. Run:",
                command
            };
        }
        return {
            error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
        };
    }
    if (/invalid_grant|Token has been expired|reauth/i.test(error)) {
        if (wizardData.authMethod === "serviceAccount") {
            return {
                error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM → Service Accounts → Keys → Add Key)."
            };
        }
        if (wizardData.authMethod === "adc") {
            return {
                error: "GCP credentials expired. Run:",
                command
            };
        }
        return {
            error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
        };
    }
    if (/Unable to detect a Project Id/i.test(error)) {
        return {
            error: "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
        };
    }
    if (/Timed out waiting for GCP/i.test(error)) {
        return {
            error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
            ...wizardData.authMethod === "adc" && {
                command
            }
        };
    }
    return {
        error
    };
}
const provider = {
    reasonLabel: {
        auth: "auth failed",
        permission: "no aiplatform.endpoints.predict permission",
        model: "not enabled in this project",
        network: "unreachable",
        other: "request failed"
    },
    intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project — Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.",
    resolveTierDefaults: ()=>{
        let o = ne();
        return Object.fromEntries(z0.map((l)=>[
                l,
                {
                    fallback: o[l]
                }
            ]));
    },
    listTierCandidates: (o)=>Se(o),
    pickerSubtitle: (o)=>`Available ${px[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
    preferOnSettle: [
        "current",
        "fallback"
    ],
    probe: (o, l)=>se(o, l)
};
function ce() {
    let l = w(2);
    let { updateWizardData } = Bu();
    let c;
    if (l[0] !== updateWizardData) {
        c = e(Rmt, {
            provider,
            onPins: updateWizardData
        });
        l[0] = updateWizardData;
        l[1] = c;
    } else {
        c = l[1];
    }
    return c;
}
N();
async function de() {
    let o = new Set;
    let l = KSn();
    try {
        let c = join(l, "configurations");
        for (let m of (await readdir(c))){
            if (!m.startsWith("config_")) {
                continue;
            }
            try {
                let t = await readFile(join(c, m), "utf8");
                for (let h of t.matchAll(/^project\s*=\s*(\S+)/gm)){
                    let p = h[1]?.trim();
                    if (p) {
                        o.add(p);
                    }
                }
            } catch  {}
        }
    } catch  {}
    try {
        let c = X(await readFile(join(l, "application_default_credentials.json"), "utf8"));
        if (c.quota_project_id) {
            o.add(c.quota_project_id);
        }
    } catch  {}
    return [
        ...o
    ].sort();
}
function Jt() {
    return [];
}
function Yt() {
    return de().catch(Jt);
}
function Xt(label) {
    return e(tn.Item, {
        label
    }, label);
}
const Ne = "__manual__";
const ze = 12;
function fe() {
    let l = w(3);
    let [o] = y(Yt);
    let fallback;
    if (l[0] === S) {
        fallback = e(ud, {
            subtitle: "GCP project",
            children: e(Hr, {
                message: "Reading ~/.config/gcloud…"
            })
        });
        l[0] = fallback;
    } else {
        fallback = l[0];
    }
    let m;
    if (l[1] !== o) {
        m = e(jr, {
            fallback,
            children: e(me, {
                projectsPromise: o
            })
        });
        l[1] = o;
        l[2] = m;
    } else {
        m = l[2];
    }
    return m;
}
function me(o) {
    let u = w(48);
    let { projectsPromise } = o;
    let c = Ir(projectsPromise);
    let { goBack, goToStep, updateWizardData, wizardData } = Bu();
    let f = c.length > ze;
    let k;
    if (u[0] !== c || u[1] !== wizardData.projectId) {
        k = wizardData.projectId && !c.includes(wizardData.projectId);
        u[0] = c;
        u[1] = wizardData.projectId;
        u[2] = k;
    } else {
        k = u[2];
    }
    let g = Boolean(k);
    let [_, A] = y(c.length === 0 || f || g);
    let [d, D] = y(wizardData.projectId ?? "");
    let [x, O] = y(d.length);
    let [C, E] = y(null);
    const context = _ ? "Settings" : "Confirmation";
    let b;
    if (u[3] !== context) {
        b = {
            context
        };
        u[3] = context;
        u[4] = b;
    } else {
        b = u[4];
    }
    Ze("confirm:no", goBack, b);
    let W;
    if (u[5] !== goToStep || u[6] !== updateWizardData) {
        W = (projectId)=>{
            updateWizardData({
                projectId
            });
            goToStep(T.REGION);
        };
        u[5] = goToStep;
        u[6] = updateWizardData;
        u[7] = W;
    } else {
        W = u[7];
    }
    let F = W;
    if (!_) {
        const J = c.length;
        let z;
        if (u[8] !== c.length) {
            z = I(c.length, "project");
            u[8] = c.length;
            u[9] = z;
        } else {
            z = u[9];
        }
        let U;
        if (u[10] !== c.length || u[11] !== z) {
            U = r(n, {
                dimColor: true,
                children: [
                    "Found ",
                    J,
                    " ",
                    z,
                    " in your gcloud configurations."
                ]
            });
            u[10] = c.length;
            u[11] = z;
            u[12] = U;
        } else {
            U = u[12];
        }
        let H;
        if (u[13] !== c || u[14] !== wizardData.projectId) {
            H = c.indexOf(wizardData.projectId ?? "");
            u[13] = c;
            u[14] = wizardData.projectId;
            u[15] = H;
        } else {
            H = u[15];
        }
        const defaultFocusIndex = Math.max(0, H);
        let onSelect;
        if (u[16] !== c || u[17] !== F) {
            onSelect = (Er)=>{
                let nt = c[Er];
                if (nt === undefined) {
                    A(true);
                } else {
                    F(nt);
                }
            };
            u[16] = c;
            u[17] = F;
            u[18] = onSelect;
        } else {
            onSelect = u[18];
        }
        let M;
        if (u[19] !== c) {
            M = c.map(Xt);
            u[19] = c;
            u[20] = M;
        } else {
            M = u[20];
        }
        let Q;
        if (u[21] === S) {
            Q = e(tn.Item, {
                label: "Type a different project…"
            }, Ne);
            u[21] = Q;
        } else {
            Q = u[21];
        }
        let ee;
        if (u[22] !== onSelect || u[23] !== M || u[24] !== defaultFocusIndex) {
            ee = r(tn, {
                defaultFocusIndex,
                onSelect,
                children: [
                    M,
                    Q
                ]
            });
            u[22] = onSelect;
            u[23] = M;
            u[24] = defaultFocusIndex;
            u[25] = ee;
        } else {
            ee = u[25];
        }
        let at;
        if (u[26] !== ee || u[27] !== U) {
            at = e(ud, {
                subtitle: "GCP project",
                children: r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        U,
                        ee
                    ]
                })
            });
            u[26] = ee;
            u[27] = U;
            u[28] = at;
        } else {
            at = u[28];
        }
        return at;
    }
    let J;
    if (u[29] !== F || u[30] !== d) {
        J = ()=>{
            let st = d.trim();
            if (!st) {
                E("Project ID is required");
                return;
            }
            E(null);
            F(st);
        };
        u[29] = F;
        u[30] = d;
        u[31] = J;
    } else {
        J = u[31];
    }
    let Ae = J;
    let z;
    if (u[32] === S) {
        z = r(be, {
            children: [
                e(G, {
                    chord: "enter",
                    action: "continue"
                }),
                e(ut, {
                    action: "confirm:no",
                    context: "Settings",
                    fallback: "Esc",
                    description: "go back"
                })
            ]
        });
        u[32] = z;
    } else {
        z = u[32];
    }
    let U;
    if (u[33] === S) {
        U = e(n, {
            children: "The project where Vertex AI is enabled."
        });
        u[33] = U;
    } else {
        U = u[33];
    }
    let H;
    if (u[34] !== c.length || u[35] !== f) {
        H = f && r(n, {
            dimColor: true,
            children: [
                "Found ",
                c.length,
                " projects — too many to list."
            ]
        });
        u[34] = c.length;
        u[35] = f;
        u[36] = H;
    } else {
        H = u[36];
    }
    let K;
    if (u[37] === S) {
        K = e(n, {
            dimColor: true,
            children: "Find it with `gcloud config get-value project` or in the GCP console header."
        });
        u[37] = K;
    } else {
        K = u[37];
    }
    let j;
    if (u[38] !== x || u[39] !== Ae || u[40] !== d) {
        j = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: d,
                onChange: D,
                onSubmit: Ae,
                placeholder: "my-gcp-project",
                columns: 60,
                cursorOffset: x,
                onChangeCursorOffset: O,
                focus: true,
                showCursor: true
            })
        });
        u[38] = x;
        u[39] = Ae;
        u[40] = d;
        u[41] = j;
    } else {
        j = u[41];
    }
    let M;
    if (u[42] !== C) {
        M = C && e(s, {
            marginTop: 1,
            children: e(es, {
                error: C
            })
        });
        u[42] = C;
        u[43] = M;
    } else {
        M = u[43];
    }
    let Q;
    if (u[44] !== j || u[45] !== M || u[46] !== H) {
        Q = e(ud, {
            subtitle: "GCP project ID",
            footerText: z,
            children: r(s, {
                flexDirection: "column",
                children: [
                    U,
                    H,
                    K,
                    j,
                    M
                ]
            })
        });
        u[44] = j;
        u[45] = M;
        u[46] = H;
        u[47] = Q;
    } else {
        Q = u[47];
    }
    return Q;
}
N();
function he() {
    let g = w(17);
    let { goBack, goNext, updateWizardData, wizardData } = Bu();
    let [t, h] = y(wizardData.region ?? "global");
    let [p, f] = y(t.length);
    let [u, k] = y(null);
    let _;
    if (g[0] === S) {
        _ = {
            context: "Settings"
        };
        g[0] = _;
    } else {
        _ = g[0];
    }
    Ze("confirm:no", goBack, _);
    let A;
    if (g[1] !== goNext || g[2] !== updateWizardData || g[3] !== t) {
        A = ()=>{
            let region = t.trim();
            if (!region) {
                k("Region is required");
                return;
            }
            k(null);
            updateWizardData({
                region
            });
            goNext();
        };
        g[1] = goNext;
        g[2] = updateWizardData;
        g[3] = t;
        g[4] = A;
    } else {
        A = g[4];
    }
    let D = A;
    let x;
    if (g[5] === S) {
        x = r(be, {
            children: [
                e(G, {
                    chord: "enter",
                    action: "continue"
                }),
                e(ut, {
                    action: "confirm:no",
                    context: "Settings",
                    fallback: "Esc",
                    description: "go back"
                })
            ]
        });
        g[5] = x;
    } else {
        x = g[5];
    }
    let O;
    let C;
    if (g[6] === S) {
        O = e(n, {
            children: "Where Claude models are served from."
        });
        C = e(n, {
            dimColor: true,
            children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
        });
        g[6] = O;
        g[7] = C;
    } else {
        O = g[6];
        C = g[7];
    }
    let E;
    if (g[8] !== p || g[9] !== D || g[10] !== t) {
        E = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: t,
                onChange: h,
                onSubmit: D,
                placeholder: "global",
                columns: 40,
                cursorOffset: p,
                onChangeCursorOffset: f,
                focus: true,
                showCursor: true
            })
        });
        g[8] = p;
        g[9] = D;
        g[10] = t;
        g[11] = E;
    } else {
        E = g[11];
    }
    let v;
    if (g[12] !== u) {
        v = u && e(s, {
            marginTop: 1,
            children: e(es, {
                error: u
            })
        });
        g[12] = u;
        g[13] = v;
    } else {
        v = g[13];
    }
    let b;
    if (g[14] !== E || g[15] !== v) {
        b = e(ud, {
            subtitle: "Vertex AI region",
            footerText: x,
            children: r(s, {
                flexDirection: "column",
                children: [
                    O,
                    C,
                    E,
                    v
                ]
            })
        });
        g[14] = E;
        g[15] = v;
        g[16] = b;
    } else {
        b = g[16];
    }
    return b;
}
N();
function ye() {
    let g = w(17);
    let { goBack, goToStep, updateWizardData, wizardData } = Bu();
    let [t, h] = y(wizardData.keyFile ?? "");
    let [p, f] = y(t.length);
    let [u, k] = y(null);
    let _;
    if (g[0] === S) {
        _ = {
            context: "Settings"
        };
        g[0] = _;
    } else {
        _ = g[0];
    }
    Ze("confirm:no", goBack, _);
    let A;
    if (g[1] !== goToStep || g[2] !== updateWizardData || g[3] !== t) {
        A = ()=>{
            let d = t.trim();
            if (!d) {
                k("Path is required");
                return;
            }
            k(null);
            let keyFile = d === "~" || d.startsWith("~/") ? join(homedir(), d.slice(1)) : d;
            updateWizardData({
                keyFile
            });
            goToStep(T.PROJECT);
        };
        g[1] = goToStep;
        g[2] = updateWizardData;
        g[3] = t;
        g[4] = A;
    } else {
        A = g[4];
    }
    let x = A;
    let O;
    if (g[5] === S) {
        O = r(be, {
            children: [
                e(G, {
                    chord: "enter",
                    action: "continue"
                }),
                e(ut, {
                    action: "confirm:no",
                    context: "Settings",
                    fallback: "Esc",
                    description: "go back"
                })
            ]
        });
        g[5] = O;
    } else {
        O = g[5];
    }
    let C;
    let E;
    if (g[6] === S) {
        C = e(n, {
            children: "Path to the service account JSON key file."
        });
        E = e(n, {
            dimColor: true,
            children: "Download one from the GCP console under IAM → Service Accounts → Keys → Add key."
        });
        g[6] = C;
        g[7] = E;
    } else {
        C = g[6];
        E = g[7];
    }
    let v;
    if (g[8] !== p || g[9] !== x || g[10] !== t) {
        v = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: t,
                onChange: h,
                onSubmit: x,
                placeholder: "~/keys/my-project-vertex.json",
                columns: 60,
                cursorOffset: p,
                onChangeCursorOffset: f,
                focus: true,
                showCursor: true
            })
        });
        g[8] = p;
        g[9] = x;
        g[10] = t;
        g[11] = v;
    } else {
        v = g[11];
    }
    let b;
    if (g[12] !== u) {
        b = u && e(s, {
            marginTop: 1,
            children: e(es, {
                error: u
            })
        });
        g[12] = u;
        g[13] = b;
    } else {
        b = g[13];
    }
    let W;
    if (g[14] !== v || g[15] !== b) {
        W = e(ud, {
            subtitle: "Service account key",
            footerText: O,
            children: r(s, {
                flexDirection: "column",
                children: [
                    C,
                    E,
                    v,
                    b
                ]
            })
        });
        g[14] = v;
        g[15] = b;
        g[16] = W;
    } else {
        W = g[16];
    }
    return W;
}
N();
function xe() {
    let t = w(35);
    let { goBack, goNext, updateWizardData, wizardData } = Bu();
    let h;
    if (t[0] === S) {
        h = {
            phase: "checking"
        };
        t[0] = h;
    } else {
        h = t[0];
    }
    let [p, f] = y(h);
    let u;
    if (t[1] !== updateWizardData || t[2] !== wizardData) {
        u = ()=>{
            let k = false;
            ae(wizardData).then((result_1)=>{
                if (k) {
                    return;
                }
                if (result_1.status === "ok") {
                    updateWizardData({
                        verifiedIdentity: result_1.identity
                    });
                } else {
                    updateWizardData({
                        verifiedIdentity: undefined
                    });
                }
                f({
                    phase: "done",
                    result: result_1
                });
            });
            return ()=>{
                k = true;
            };
        };
        t[1] = updateWizardData;
        t[2] = wizardData;
        t[3] = u;
    } else {
        u = t[3];
    }
    let _;
    if (t[4] === S) {
        _ = [];
        t[4] = _;
    } else {
        _ = t[4];
    }
    P(u, _);
    if (p.phase === "checking") {
        let A;
        if (t[5] === S) {
            A = e(ud, {
                subtitle: "Verifying credentials",
                children: e(Hr, {
                    message: "Calling Google Cloud…",
                    subtitle: "This may take a few seconds."
                })
            });
            t[5] = A;
        } else {
            A = t[5];
        }
        return A;
    }
    let { result } = p;
    switch(result.status){
        case "ok":
            {
                let A;
                if (t[6] === S) {
                    A = e(dt, {
                        status: "success",
                        withSpace: true
                    });
                    t[6] = A;
                } else {
                    A = t[6];
                }
                let D;
                if (t[7] !== result.identity) {
                    D = r(n, {
                        children: [
                            A,
                            "Authenticated as ",
                            e(n, {
                                bold: true,
                                children: result.identity
                            })
                        ]
                    });
                    t[7] = result.identity;
                    t[8] = D;
                } else {
                    D = t[8];
                }
                let x;
                if (t[9] !== result.note) {
                    x = result.note && e(n, {
                        dimColor: true,
                        children: result.note
                    });
                    t[9] = result.note;
                    t[10] = x;
                } else {
                    x = t[10];
                }
                let options;
                if (t[11] === S) {
                    options = [
                        {
                            label: "Continue",
                            value: "continue"
                        }
                    ];
                    t[11] = options;
                } else {
                    options = t[11];
                }
                let C;
                if (t[12] !== goNext) {
                    C = ()=>goNext();
                    t[12] = goNext;
                    t[13] = C;
                } else {
                    C = t[13];
                }
                let E;
                if (t[14] !== goBack || t[15] !== C) {
                    E = e(Ve, {
                        options,
                        onChange: C,
                        onCancel: goBack
                    });
                    t[14] = goBack;
                    t[15] = C;
                    t[16] = E;
                } else {
                    E = t[16];
                }
                let v;
                if (t[17] !== D || t[18] !== x || t[19] !== E) {
                    v = e(ud, {
                        subtitle: "Verification",
                        children: r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                D,
                                x,
                                E
                            ]
                        })
                    });
                    t[17] = D;
                    t[18] = x;
                    t[19] = E;
                    t[20] = v;
                } else {
                    v = t[20];
                }
                return v;
            }
        case "error":
            {
                let A;
                if (t[21] === S) {
                    A = e(dt, {
                        status: "error",
                        withSpace: true
                    });
                    t[21] = A;
                } else {
                    A = t[21];
                }
                let D;
                if (t[22] !== result.error) {
                    D = r(n, {
                        children: [
                            A,
                            result.error
                        ]
                    });
                    t[22] = result.error;
                    t[23] = D;
                } else {
                    D = t[23];
                }
                let x;
                if (t[24] !== result.command) {
                    x = result.command && r(n, {
                        bold: true,
                        color: "suggestion",
                        children: [
                            "    ",
                            result.command
                        ]
                    });
                    t[24] = result.command;
                    t[25] = x;
                } else {
                    x = t[25];
                }
                let O;
                if (t[26] !== D || t[27] !== x) {
                    O = r(s, {
                        flexDirection: "column",
                        children: [
                            D,
                            x
                        ]
                    });
                    t[26] = D;
                    t[27] = x;
                    t[28] = O;
                } else {
                    O = t[28];
                }
                let C;
                if (t[29] !== goBack || t[30] !== goNext) {
                    C = e(or, {
                        hideIndexes: true,
                        cancelFirst: true,
                        focus: "cancel",
                        confirmLabel: "Save anyway (skip verification)",
                        cancelLabel: "Go back and fix",
                        onConfirm: goNext,
                        onCancel: goBack
                    });
                    t[29] = goBack;
                    t[30] = goNext;
                    t[31] = C;
                } else {
                    C = t[31];
                }
                let E;
                if (t[32] !== O || t[33] !== C) {
                    E = e(ud, {
                        subtitle: "Verification failed",
                        color: "error",
                        children: r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                O,
                                C
                            ]
                        })
                    });
                    t[32] = O;
                    t[33] = C;
                    t[34] = E;
                } else {
                    E = t[34];
                }
                return E;
            }
    }
}
function onComplete_1() {}
const steps = [
    te,
    ye,
    fe,
    he,
    xe,
    ce,
    oe
];
function Cmt(o) {
    let t = w(7);
    let { onComplete, onCancel, exitOnCtrlCD } = o;
    let stepProps;
    if (t[0] !== onComplete) {
        stepProps = {
            onComplete
        };
        t[0] = onComplete;
        t[1] = stepProps;
    } else {
        stepProps = t[1];
    }
    let initialData;
    if (t[2] === S) {
        initialData = {};
        t[2] = initialData;
    } else {
        initialData = t[2];
    }
    let f;
    if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) {
        f = e(ije, {
            steps,
            stepProps,
            initialData,
            onComplete: onComplete_1,
            onCancel,
            exitOnCtrlCD,
            title: "Set up Google Vertex AI",
            showStepCounter: false
        });
        t[3] = exitOnCtrlCD;
        t[4] = onCancel;
        t[5] = stepProps;
        t[6] = f;
    } else {
        f = t[6];
    }
    return f;
}
export { Cmt };
