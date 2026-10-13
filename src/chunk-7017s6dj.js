import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Slt, x$e, P$e, gR, Obe, N7t, F7t, V$e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { yn, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ho } from "/$bunfs/root/chunk-nj0630nv.js";
import { yP, K_, mN, _P, A1n } from "/$bunfs/root/chunk-6dwnw6av.js";
import { MUe, HUe, J8 } from "/$bunfs/root/chunk-55x53sfe.js";
import { eoe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { jr, Ir, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ije, Bu, ud, z0, Rmt, tdn } from "/$bunfs/root/chunk-zbd17n62.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { pj } from "/$bunfs/root/chunk-twmcxkvh.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { px } from "/$bunfs/root/chunk-e2vrg5f2.js";
import { Hr } from "/$bunfs/root/chunk-wmf7fpt3.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { owe } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Se, S } from "/$bunfs/root/chunk-cj4xndke.js";
import { readFile } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
N();
const fields = [
    {
        type: "text",
        key: "accessKeyId",
        label: "Access key ID",
        placeholder: "AKIA…",
        required: true
    },
    {
        type: "text",
        key: "secretAccessKey",
        label: "Secret access key",
        mask: "*",
        required: true
    },
    {
        type: "text",
        key: "sessionToken",
        label: "Session token",
        mask: "*",
        hint: ()=>"Only needed for temporary credentials from STS. Leave empty for long-lived keys."
    }
];
function te() {
    let u = w(16);
    let { goBack, goNext, updateWizardData, wizardData, title } = Bu();
    const accessKeyId = wizardData.accessKeyId ?? "";
    const secretAccessKey = wizardData.secretAccessKey ?? "";
    const sessionToken = wizardData.sessionToken ?? "";
    let B;
    if (u[0] !== accessKeyId || u[1] !== secretAccessKey || u[2] !== sessionToken) {
        B = {
            accessKeyId,
            secretAccessKey,
            sessionToken
        };
        u[0] = accessKeyId;
        u[1] = secretAccessKey;
        u[2] = sessionToken;
        u[3] = B;
    } else {
        B = u[3];
    }
    let [p, A] = y(B);
    let E;
    if (u[4] !== goNext || u[5] !== updateWizardData || u[6] !== p.accessKeyId || u[7] !== p.secretAccessKey || u[8] !== p.sessionToken) {
        E = ()=>{
            updateWizardData({
                accessKeyId: p.accessKeyId.trim(),
                secretAccessKey: p.secretAccessKey.trim(),
                sessionToken: p.sessionToken.trim() || undefined
            });
            goNext();
        };
        u[4] = goNext;
        u[5] = updateWizardData;
        u[6] = p.accessKeyId;
        u[7] = p.secretAccessKey;
        u[8] = p.sessionToken;
        u[9] = E;
    } else {
        E = u[9];
    }
    let k = E;
    const title_1 = title ?? "Set up AWS Bedrock";
    let C;
    if (u[10] === S) {
        C = (v, T)=>A((_)=>({
                    ..._,
                    [v]: T
                }));
        u[10] = C;
    } else {
        C = u[10];
    }
    let D;
    if (u[11] !== goBack || u[12] !== k || u[13] !== title_1 || u[14] !== p) {
        D = e(pj, {
            title: title_1,
            subtitle: "AWS access keys",
            fields,
            values: p,
            onChange: C,
            onSubmit: k,
            onCancel: goBack,
            submitLabel: "Continue"
        });
        u[11] = goBack;
        u[12] = k;
        u[13] = title_1;
        u[14] = p;
        u[15] = D;
    } else {
        D = u[15];
    }
    return D;
}
const b = {
    AUTH_METHOD: 0,
    PROFILE: 1,
    BEARER: 2,
    ACCESS_KEY_ID: 3,
    REGION: 4,
    VERIFY: 5,
    PIN_MODELS: 6,
    CONFIRM: 7
};
function ie() {
    let l = w(9);
    let { goBack, goToStep, updateWizardData } = Bu();
    let t;
    if (l[0] === S) {
        t = [
            {
                label: "AWS profile (SSO or named profile)",
                value: "profile"
            },
            {
                label: "Bedrock API key (bearer token)",
                value: "bearer"
            },
            {
                label: "Access key + secret",
                value: "accessKey"
            },
            {
                label: "Use credentials already in my environment",
                value: "environment"
            }
        ];
        l[0] = t;
    } else {
        t = l[0];
    }
    let options = t;
    let g;
    if (l[1] === S) {
        g = {
            profile: b.PROFILE,
            bearer: b.BEARER,
            accessKey: b.ACCESS_KEY_ID,
            environment: b.REGION
        };
        l[1] = g;
    } else {
        g = l[1];
    }
    let h = g;
    let u;
    if (l[2] !== goToStep || l[3] !== updateWizardData) {
        u = (B)=>{
            let authMethod = B;
            updateWizardData({
                authMethod
            });
            goToStep(h[authMethod]);
        };
        l[2] = goToStep;
        l[3] = updateWizardData;
        l[4] = u;
    } else {
        u = l[4];
    }
    let A = u;
    let E;
    if (l[5] === S) {
        E = e(n, {
            dimColor: true,
            children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
        });
        l[5] = E;
    } else {
        E = l[5];
    }
    let k;
    if (l[6] !== goBack || l[7] !== A) {
        k = e(ud, {
            subtitle: "How do you authenticate to AWS?",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    E,
                    e(Ve, {
                        options,
                        onChange: A,
                        onCancel: goBack
                    })
                ]
            })
        });
        l[6] = goBack;
        l[7] = A;
        l[8] = k;
    } else {
        k = l[8];
    }
    return k;
}
N();
function se() {
    let p = w(17);
    let { goBack, goToStep, updateWizardData, wizardData } = Bu();
    let [t, m] = y(wizardData.bearerToken ?? "");
    let [g, h] = y(t.length);
    let [u, B] = y(null);
    let A;
    if (p[0] === S) {
        A = {
            context: "Settings"
        };
        p[0] = A;
    } else {
        A = p[0];
    }
    Ze("confirm:no", goBack, A);
    let E;
    if (p[1] !== goToStep || p[2] !== updateWizardData || p[3] !== t) {
        E = ()=>{
            let bearerToken = t.trim();
            if (!bearerToken) {
                B("API key is required");
                return;
            }
            B(null);
            updateWizardData({
                bearerToken
            });
            goToStep(b.REGION);
        };
        p[1] = goToStep;
        p[2] = updateWizardData;
        p[3] = t;
        p[4] = E;
    } else {
        E = p[4];
    }
    let f = E;
    let C;
    if (p[5] === S) {
        C = r(be, {
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
        p[5] = C;
    } else {
        C = p[5];
    }
    let v;
    let T;
    if (p[6] === S) {
        v = e(n, {
            children: "Paste your Bedrock API key."
        });
        T = e(n, {
            dimColor: true,
            children: "Generate one in the AWS console under Bedrock → API keys."
        });
        p[6] = v;
        p[7] = T;
    } else {
        v = p[6];
        T = p[7];
    }
    let _;
    if (p[8] !== g || p[9] !== f || p[10] !== t) {
        _ = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: t,
                onChange: m,
                onSubmit: f,
                placeholder: "bedrock-api-key-…",
                mask: "*",
                columns: 60,
                cursorOffset: g,
                onChangeCursorOffset: h,
                focus: true,
                showCursor: true
            })
        });
        p[8] = g;
        p[9] = f;
        p[10] = t;
        p[11] = _;
    } else {
        _ = p[11];
    }
    let D;
    if (p[12] !== u) {
        D = u && e(s, {
            marginTop: 1,
            children: e(es, {
                error: u
            })
        });
        p[12] = u;
        p[13] = D;
    } else {
        D = p[13];
    }
    let O;
    if (p[14] !== _ || p[15] !== D) {
        O = e(ud, {
            subtitle: "Bedrock API key",
            footerText: C,
            children: r(s, {
                flexDirection: "column",
                children: [
                    v,
                    T,
                    _,
                    D
                ]
            })
        });
        p[14] = _;
        p[15] = D;
        p[16] = O;
    } else {
        O = p[16];
    }
    return O;
}
N();
function eo(H) {
    return H[1] !== undefined;
}
function ro([V, U]) {
    return r(n, {
        children: [
            "  ",
            e(n, {
                color: "suggestion",
                children: V
            }),
            " =",
            " ",
            ze.has(V) ? e(n, {
                dimColor: true,
                children: "(hidden)"
            }) : U
        ]
    }, V);
}
function Ie(wizardData) {
    let d = {
        CLAUDE_CODE_USE_BEDROCK: "1",
        CLAUDE_CODE_USE_VERTEX: undefined,
        CLAUDE_CODE_USE_FOUNDRY: undefined,
        CLAUDE_CODE_USE_ANTHROPIC_AWS: undefined,
        CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: undefined,
        AWS_REGION: wizardData.region,
        AWS_PROFILE: undefined,
        AWS_BEARER_TOKEN_BEDROCK: undefined,
        AWS_ACCESS_KEY_ID: undefined,
        AWS_SECRET_ACCESS_KEY: undefined,
        AWS_SESSION_TOKEN: undefined,
        ANTHROPIC_DEFAULT_SONNET_MODEL: undefined,
        ANTHROPIC_DEFAULT_OPUS_MODEL: undefined,
        ANTHROPIC_DEFAULT_HAIKU_MODEL: undefined,
        ANTHROPIC_DEFAULT_FABLE_MODEL: undefined,
        ANTHROPIC_SMALL_FAST_MODEL: undefined
    };
    switch(wizardData.authMethod){
        case "profile":
            d.AWS_PROFILE = wizardData.awsProfile;
            break;
        case "bearer":
            d.AWS_BEARER_TOKEN_BEDROCK = wizardData.bearerToken;
            break;
        case "accessKey":
            d.AWS_ACCESS_KEY_ID = wizardData.accessKeyId;
            d.AWS_SECRET_ACCESS_KEY = wizardData.secretAccessKey;
            if (wizardData.sessionToken) {
                d.AWS_SESSION_TOKEN = wizardData.sessionToken;
            }
            break;
        case "environment":
        case undefined:
            break;
    }
    if (wizardData.pinSonnet) {
        d.ANTHROPIC_DEFAULT_SONNET_MODEL = wizardData.pinSonnet;
    }
    if (wizardData.pinOpus) {
        d.ANTHROPIC_DEFAULT_OPUS_MODEL = wizardData.pinOpus;
    }
    if (wizardData.pinFable) {
        d.ANTHROPIC_DEFAULT_FABLE_MODEL = wizardData.pinFable;
    }
    if (wizardData.pinHaiku) {
        d.ANTHROPIC_DEFAULT_HAIKU_MODEL = wizardData.pinHaiku;
    }
    return d;
}
var ze = new Set([
    "AWS_BEARER_TOKEN_BEDROCK",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_SESSION_TOKEN"
]);
function de(o) {
    let h = w(31);
    let { onComplete } = o;
    let { storageV5 } = Pe();
    let { goBack, wizardData } = Bu();
    let [m, g] = y(null);
    let u;
    if (h[0] === S) {
        u = Rs(yn("userSettings") ?? "~/.claude/settings.json");
        h[0] = u;
    } else {
        u = h[0];
    }
    let B = u;
    let p;
    if (h[1] !== wizardData) {
        p = Ie(wizardData);
        h[1] = wizardData;
        h[2] = p;
    } else {
        p = h[2];
    }
    let env = p;
    let E;
    if (h[3] !== env) {
        E = Object.entries(env).filter(eo);
        h[3] = env;
        h[4] = E;
    } else {
        E = h[4];
    }
    let k = E;
    let f = R(false);
    let C;
    if (h[5] !== env || h[6] !== onComplete || h[7] !== storageV5 || h[8] !== wizardData.authMethod || h[9] !== wizardData.awsProfile || h[10] !== wizardData.pinFable || h[11] !== wizardData.pinHaiku || h[12] !== wizardData.pinOpus || h[13] !== wizardData.pinSonnet || h[14] !== wizardData.verifiedIdentity) {
        C = async ()=>{
            if (f.current) {
                return;
            }
            f.current = true;
            let { error } = await Tn("userSettings", {
                env
            }, undefined, storageV5);
            if (error) {
                f.current = false;
                g(error.message);
                return;
            }
            i("tengu_bedrock_setup_complete", {
                auth_method: pe(wizardData.authMethod),
                pinned_models: Boolean(wizardData.pinSonnet || wizardData.pinOpus || wizardData.pinFable || wizardData.pinHaiku),
                verified: Boolean(wizardData.verifiedIdentity)
            });
            onComplete(`Bedrock configuration saved to ${B}.${wizardData.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${wizardData.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`);
        };
        h[5] = env;
        h[6] = onComplete;
        h[7] = storageV5;
        h[8] = wizardData.authMethod;
        h[9] = wizardData.awsProfile;
        h[10] = wizardData.pinFable;
        h[11] = wizardData.pinHaiku;
        h[12] = wizardData.pinOpus;
        h[13] = wizardData.pinSonnet;
        h[14] = wizardData.verifiedIdentity;
        h[15] = C;
    } else {
        C = h[15];
    }
    let onConfirm = C;
    let _;
    if (h[16] === S) {
        _ = r(n, {
            children: [
                "These will be written to ",
                B,
                " under env:"
            ]
        });
        h[16] = _;
    } else {
        _ = h[16];
    }
    let D;
    if (h[17] !== k) {
        D = e(s, {
            flexDirection: "column",
            children: k.map(ro)
        });
        h[17] = k;
        h[18] = D;
    } else {
        D = h[18];
    }
    let O;
    if (h[19] !== wizardData.verifiedIdentity) {
        O = wizardData.verifiedIdentity && r(n, {
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
        h[19] = wizardData.verifiedIdentity;
        h[20] = O;
    } else {
        O = h[20];
    }
    let j;
    if (h[21] !== m) {
        j = e(es, {
            error: m
        });
        h[21] = m;
        h[22] = j;
    } else {
        j = h[22];
    }
    let X;
    if (h[23] !== goBack || h[24] !== onConfirm) {
        X = e(or, {
            confirmLabel: "Save",
            cancelLabel: "Cancel",
            onConfirm,
            onCancel: goBack
        });
        h[23] = goBack;
        h[24] = onConfirm;
        h[25] = X;
    } else {
        X = h[25];
    }
    let _e;
    if (h[26] !== D || h[27] !== O || h[28] !== j || h[29] !== X) {
        _e = e(ud, {
            subtitle: "Confirm and save",
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    _,
                    D,
                    O,
                    j,
                    X
                ]
            })
        });
        h[26] = D;
        h[27] = O;
        h[28] = j;
        h[29] = X;
        h[30] = _e;
    } else {
        _e = h[30];
    }
    return _e;
}
const Ke = Se(owe(), 1);
const Q = "Bedrock setup verification timed out";
function le(region) {
    let d = P$e(region);
    let c = (l)=>{
        let bedrock = Ho[l].bedrock;
        if (bedrock === null) {
            throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null — Bedrock setup has no fallback id for that tier");
        }
        return {
            needle: Ho[l].firstParty,
            fallback: x$e(bedrock, d)
        };
    };
    return {
        sonnet: c(gR),
        opus: c(N7t),
        haiku: c(Obe),
        fable: c(F7t)
    };
}
async function ue(wizardData) {
    if (wizardData.authMethod === "bearer") {
        return io(wizardData);
    }
    let d = A1n();
    try {
        let credentials = await Le(wizardData);
        let t = {
            ...await HUe({
                url: `https://bedrock.${wizardData.region}.amazonaws.com`,
                region: wizardData.region,
                requestTimeoutMs: V$e
            }),
            region: wizardData.region,
            ...credentials && {
                credentials
            }
        };
        let { STSClient, GetCallerIdentityCommand } = await import("/$bunfs/root/chunk-yt8w1915.js");
        let h = await Ut(new STSClient(t).send(new GetCallerIdentityCommand({})), d, Q);
        let identity = h.Arn ?? h.UserId ?? "(unknown)";
        let { BedrockClient, ListInferenceProfilesCommand } = await import("/$bunfs/root/chunk-5hpydee3.js");
        let A = new BedrockClient(t);
        let profiles = [];
        let nextToken;
        do {
            let f = await Ut(A.send(new ListInferenceProfilesCommand({
                ...nextToken && {
                    nextToken
                },
                typeEquals: "SYSTEM_DEFINED"
            })), d, Q);
            for (let C of f.inferenceProfileSummaries ?? []){
                if (C.inferenceProfileId?.includes("anthropic")) {
                    profiles.push(C.inferenceProfileId);
                }
            }
            nextToken = f.nextToken;
        }while (nextToken)
        return {
            status: "ok",
            identity,
            profiles
        };
    } catch (error) {
        return {
            status: "error",
            ...no(error, wizardData, d)
        };
    }
}
async function fe(o, d) {
    return tdn(()=>oo(o), d, (c)=>{
        if (c instanceof Error && (c.message === Q || Ue(c))) {
            return "network";
        }
        return "auth";
    });
}
async function oo(o) {
    let [{ AnthropicBedrock }, { getProxyFetchOptions }] = await Promise.all([
        import("/$bunfs/root/chunk-qmzdd042.js"),
        import("/$bunfs/root/chunk-g1ar6avr.js")
    ]);
    let l = {
        awsRegion: o.region,
        maxRetries: 0,
        fetchOptions: getProxyFetchOptions({
            url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
        })
    };
    let t = await to(o);
    let m = eoe();
    let g = {
        authToken: null,
        defaultHeaders: {
            ...m,
            ...K_(),
            ...mN(),
            Authorization: null,
            ...!yP() && {
                "X-Api-Key": null
            }
        },
        ..._P
    };
    switch(t.kind){
        case "bearer":
            return new AnthropicBedrock({
                ...l,
                apiKey: t.token,
                defaultHeaders: {
                    ...m,
                    ...K_(),
                    ...mN(),
                    Authorization: `Bearer ${t.token}`,
                    ...!yP() && {
                        "X-Api-Key": null
                    }
                }
            });
        case "sigv4":
            return new AnthropicBedrock({
                ...l,
                ...g,
                awsAccessKey: t.accessKeyId,
                awsSecretKey: t.secretAccessKey,
                awsSessionToken: t.sessionToken
            });
        case "default":
            {
                let apiKey = a.AWS_BEARER_TOKEN_BEDROCK;
                if (apiKey) {
                    return new AnthropicBedrock({
                        ...l,
                        apiKey,
                        defaultHeaders: {
                            ...m,
                            ...K_(),
                            ...mN(),
                            Authorization: `Bearer ${apiKey}`,
                            ...!yP() && {
                                "X-Api-Key": null
                            }
                        }
                    });
                }
                return new AnthropicBedrock({
                    ...l,
                    ...g,
                    providerChainResolver: ()=>Fe(o, undefined)
                });
            }
    }
}
async function to(o) {
    if (o.authMethod === "bearer") {
        return {
            kind: "bearer",
            token: o.bearerToken
        };
    }
    let d = await Le(o);
    if (!d) {
        return {
            kind: "default"
        };
    }
    let c = await d();
    return {
        kind: "sigv4",
        accessKeyId: c.accessKeyId,
        secretAccessKey: c.secretAccessKey,
        sessionToken: c.sessionToken
    };
}
async function io(wizardData) {
    let fallback = le(wizardData.region).haiku.fallback;
    let c = await fe(wizardData, fallback);
    if (c.ok) {
        return {
            status: "ok",
            identity: "Bedrock API key",
            profiles: [],
            note: `Test request to ${fallback} succeeded.`
        };
    }
    switch(c.reason){
        case "auth":
            return {
                status: "error",
                error: "Invalid Bedrock API key. Check the key and try again."
            };
        case "permission":
            return {
                status: "error",
                error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
            };
        case "model":
            return {
                status: "ok",
                identity: "Bedrock API key",
                profiles: [],
                note: `The key works, but ${fallback} is not enabled in your account. Pin a model you have access to on the next step.`
            };
        case "network":
            return {
                status: "error",
                error: `Could not reach Bedrock in region "${wizardData.region}". Check the region name and your network.`
            };
        case "other":
            return {
                status: "error",
                error: "The test request failed. Check the key and region."
            };
    }
}
async function Le(o) {
    switch(o.authMethod){
        case "profile":
            return Fe(o, o.awsProfile);
        case "accessKey":
            return async ()=>({
                    accessKeyId: o.accessKeyId,
                    secretAccessKey: o.secretAccessKey,
                    ...o.sessionToken && {
                        sessionToken: o.sessionToken
                    }
                });
        case "environment":
            return;
        default:
            return;
    }
}
async function Fe(o, profile) {
    let [{ fromNodeProviderChain }, l] = await Promise.all([
        import("/$bunfs/root/chunk-8f79dj0j.js"),
        J8({
            url: MUe(String(o.region)),
            requestTimeoutMs: V$e
        })
    ]);
    let requestHandler = l ?? new Ke.FetchHttpHandler({
        requestTimeout: V$e
    });
    let m = fromNodeProviderChain({
        profile,
        ignoreCache: true,
        parentClientConfig: {
            region: o.region,
            requestHandler
        },
        clientConfig: {
            requestHandler
        }
    });
    return (g)=>Ut(m(g), A1n(), Q);
}
function Ue(o) {
    return o?.name === "TimeoutError" || o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:");
}
function no(error, wizardData, c) {
    let l = error;
    let t = l?.name ?? "Error";
    let m = l?.message ?? String(error);
    if (m === Q) {
        return {
            error: `Timed out after ${Math.ceil(c / 1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
        };
    }
    if (Ue(l)) {
        return {
            error: "A request to AWS timed out. Check your network and proxy settings, then try again."
        };
    }
    let command = wizardData.authMethod === "profile" ? `aws sso login --profile ${wizardData.awsProfile}` : undefined;
    switch(t){
        case "CredentialsProviderError":
            if (wizardData.authMethod === "profile") {
                return {
                    error: `Could not load credentials for profile "${wizardData.awsProfile}". If this is an SSO profile, run:`,
                    command
                };
            }
            return {
                error: `No AWS credentials found. ${m}`
            };
        case "ExpiredTokenException":
        case "TokenRefreshRequired":
            if (wizardData.authMethod === "profile") {
                return {
                    error: "SSO session expired. Run:",
                    command
                };
            }
            return {
                error: `Credentials expired. ${m}`
            };
        case "ForbiddenException":
            if (wizardData.authMethod === "profile") {
                return {
                    error: `SSO portal denied access to the role for profile "${wizardData.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
                };
            }
            return {
                error: `Forbidden. ${m}`
            };
        case "AccessDeniedException":
            return {
                error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${m}`
            };
        case "UnrecognizedClientException":
        case "InvalidSignatureException":
            return {
                error: `Invalid credentials. ${m}`
            };
        case "UnknownEndpoint":
        case "ENOTFOUND":
            return {
                error: `Cannot reach AWS in region "${wizardData.region}". Check the region name and your network.`
            };
        default:
            return {
                error: `${t}: ${m}`
            };
    }
}
function He(o, d) {
    return (o.discoveredProfiles ?? []).filter((c)=>c.toLowerCase().includes(d));
}
const provider = {
    reasonLabel: {
        auth: "auth failed",
        permission: "no InvokeModel permission",
        model: "not enabled in this account",
        network: "unreachable",
        other: "request failed"
    },
    intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it — Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
    resolveTierDefaults: (o)=>{
        let d = le(o.region);
        let c = P$e(o.region);
        return Object.fromEntries(z0.map((l)=>[
                l,
                {
                    auto: Slt(o.discoveredProfiles ?? [], d[l].needle, c) ?? undefined,
                    fallback: d[l].fallback
                }
            ]));
    },
    listTierCandidates: (o, d)=>He(d, o).sort().reverse(),
    pickerSubtitle: (o, d)=>{
        let length = He(d, o).length;
        if (length > 0) {
            return `${length} ${px[o]} ${I(length, "profile")} in your account \xB7 each tested with a one-token request.`;
        }
        return `No ${px[o]} profiles found in your account.`;
    },
    probe: (o, d)=>fe(o, d)
};
function me() {
    let d = w(2);
    let { updateWizardData } = Bu();
    let c;
    if (d[0] !== updateWizardData) {
        c = e(Rmt, {
            provider,
            onPins: updateWizardData
        });
        d[0] = updateWizardData;
        d[1] = c;
    } else {
        c = d[1];
    }
    return c;
}
N();
async function ge() {
    let o = new Set;
    let d = homedir();
    for (let { path, re } of [
        {
            path: join(d, ".aws", "config"),
            re: /^\[(?:profile\s+)?([^\]]+)\]/gm
        },
        {
            path: join(d, ".aws", "credentials"),
            re: /^\[([^\]]+)\]/gm
        }
    ]){
        try {
            for (let t of (await readFile(path, "utf8")).matchAll(re)){
                let m = t[1]?.trim();
                if (m && !m.startsWith("sso-session ")) {
                    o.add(m);
                }
            }
        } catch  {}
    }
    return [
        ...o
    ].sort();
}
function Do() {
    return [];
}
function Ao() {
    return ge().catch(Do);
}
function wo(Ko) {
    return Ko.toLowerCase().includes("bedrock");
}
function _o(hr) {
    return {
        label: hr,
        value: hr
    };
}
const ee = "__manual__";
const Ye = 12;
function Ee() {
    let d = w(3);
    let [o] = y(Ao);
    let fallback;
    if (d[0] === S) {
        fallback = e(ud, {
            subtitle: "AWS profile",
            children: e(Hr, {
                message: "Reading ~/.aws/config…"
            })
        });
        d[0] = fallback;
    } else {
        fallback = d[0];
    }
    let l;
    if (d[1] !== o) {
        l = e(jr, {
            fallback,
            children: e(Ce, {
                profilesPromise: o
            })
        });
        d[1] = o;
        d[2] = l;
    } else {
        l = d[2];
    }
    return l;
}
function Ce(o) {
    let u = w(52);
    let { profilesPromise } = o;
    let c = Ir(profilesPromise);
    let { goBack, goToStep, updateWizardData, wizardData } = Bu();
    let h = c.length > Ye;
    let B;
    if (u[0] !== c || u[1] !== wizardData.awsProfile) {
        B = wizardData.awsProfile && !c.includes(wizardData.awsProfile);
        u[0] = c;
        u[1] = wizardData.awsProfile;
        u[2] = B;
    } else {
        B = u[2];
    }
    let p = Boolean(B);
    let [A, E] = y(c.length === 0 || h || p);
    let k;
    if (u[3] !== c || u[4] !== h) {
        k = h ? c.find(wo) : undefined;
        u[3] = c;
        u[4] = h;
        u[5] = k;
    } else {
        k = u[5];
    }
    let f = k;
    let [C, v] = y(wizardData.awsProfile ?? f ?? "");
    let [T, _] = y(C.length);
    let [D, O] = y(null);
    let j;
    if (u[6] !== A) {
        j = {
            context: "Settings",
            isActive: A
        };
        u[6] = A;
        u[7] = j;
    } else {
        j = u[7];
    }
    Ze("confirm:no", goBack, j);
    let X;
    if (u[8] !== goToStep || u[9] !== updateWizardData) {
        X = (awsProfile)=>{
            updateWizardData({
                awsProfile
            });
            goToStep(b.REGION);
        };
        u[8] = goToStep;
        u[9] = updateWizardData;
        u[10] = X;
    } else {
        X = u[10];
    }
    let H = X;
    if (!A) {
        const V = c.length;
        let U;
        if (u[11] !== c.length) {
            U = I(c.length, "profile");
            u[11] = c.length;
            u[12] = U;
        } else {
            U = u[12];
        }
        let q;
        if (u[13] !== c.length || u[14] !== U) {
            q = r(n, {
                dimColor: true,
                children: [
                    "Found ",
                    V,
                    " ",
                    U,
                    " in ~/.aws/config and ~/.aws/credentials."
                ]
            });
            u[13] = c.length;
            u[14] = U;
            u[15] = q;
        } else {
            q = u[15];
        }
        let K;
        if (u[16] !== c) {
            let z;
            if (u[18] === S) {
                z = {
                    label: "Type a different name…",
                    value: ee
                };
                u[18] = z;
            } else {
                z = u[18];
            }
            K = [
                ...c.map(_o),
                z
            ];
            u[16] = c;
            u[17] = K;
        } else {
            K = u[17];
        }
        let defaultValue;
        if (u[19] !== c || u[20] !== wizardData.awsProfile) {
            defaultValue = wizardData.awsProfile && c.includes(wizardData.awsProfile) ? wizardData.awsProfile : undefined;
            u[19] = c;
            u[20] = wizardData.awsProfile;
            u[21] = defaultValue;
        } else {
            defaultValue = u[21];
        }
        let L;
        if (u[22] !== H) {
            L = (pr)=>{
                if (pr === ee) {
                    E(true);
                } else {
                    H(pr);
                }
            };
            u[22] = H;
            u[23] = L;
        } else {
            L = u[23];
        }
        let F;
        if (u[24] !== goBack || u[25] !== L || u[26] !== K || u[27] !== defaultValue) {
            F = e(Ve, {
                options: K,
                defaultValue,
                onChange: L,
                onCancel: goBack
            });
            u[24] = goBack;
            u[25] = L;
            u[26] = K;
            u[27] = defaultValue;
            u[28] = F;
        } else {
            F = u[28];
        }
        let J;
        if (u[29] !== F || u[30] !== q) {
            J = e(ud, {
                subtitle: "AWS profile",
                children: r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        q,
                        F
                    ]
                })
            });
            u[29] = F;
            u[30] = q;
            u[31] = J;
        } else {
            J = u[31];
        }
        return J;
    }
    let V;
    if (u[32] !== H || u[33] !== C) {
        V = ()=>{
            let gr = C.trim();
            if (!gr) {
                O("Profile name is required");
                return;
            }
            O(null);
            H(gr);
        };
        u[32] = H;
        u[33] = C;
        u[34] = V;
    } else {
        V = u[34];
    }
    let Te = V;
    let U;
    if (u[35] === S) {
        U = r(be, {
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
        u[35] = U;
    } else {
        U = u[35];
    }
    let q;
    if (u[36] === S) {
        q = e(n, {
            children: "The name from ~/.aws/config (after [profile …])."
        });
        u[36] = q;
    } else {
        q = u[36];
    }
    let K;
    if (u[37] !== f || u[38] !== c.length || u[39] !== h) {
        K = h && r(n, {
            dimColor: true,
            children: [
                "Found ",
                c.length,
                " profiles — too many to list.",
                f && ` Prepopulated with "${f}".`
            ]
        });
        u[37] = f;
        u[38] = c.length;
        u[39] = h;
        u[40] = K;
    } else {
        K = u[40];
    }
    let z;
    if (u[41] === S) {
        z = e(n, {
            dimColor: true,
            children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
        });
        u[41] = z;
    } else {
        z = u[41];
    }
    let L;
    if (u[42] !== T || u[43] !== Te || u[44] !== C) {
        L = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: C,
                onChange: v,
                onSubmit: Te,
                placeholder: "my-bedrock-profile",
                columns: 60,
                cursorOffset: T,
                onChangeCursorOffset: _,
                focus: true,
                showCursor: true
            })
        });
        u[42] = T;
        u[43] = Te;
        u[44] = C;
        u[45] = L;
    } else {
        L = u[45];
    }
    let F;
    if (u[46] !== D) {
        F = D && e(s, {
            marginTop: 1,
            children: e(es, {
                error: D
            })
        });
        u[46] = D;
        u[47] = F;
    } else {
        F = u[47];
    }
    let J;
    if (u[48] !== L || u[49] !== F || u[50] !== K) {
        J = e(ud, {
            subtitle: "AWS profile name",
            footerText: U,
            children: r(s, {
                flexDirection: "column",
                children: [
                    q,
                    K,
                    z,
                    L,
                    F
                ]
            })
        });
        u[48] = L;
        u[49] = F;
        u[50] = K;
        u[51] = J;
    } else {
        J = u[51];
    }
    return J;
}
N();
function De() {
    let p = w(17);
    let { goBack, goNext, updateWizardData, wizardData } = Bu();
    let [t, m] = y(wizardData.region ?? "us-east-1");
    let [g, h] = y(t.length);
    let [u, B] = y(null);
    let A;
    if (p[0] === S) {
        A = {
            context: "Settings"
        };
        p[0] = A;
    } else {
        A = p[0];
    }
    Ze("confirm:no", goBack, A);
    let E;
    if (p[1] !== goNext || p[2] !== updateWizardData || p[3] !== t) {
        E = ()=>{
            let region = t.trim();
            if (!region) {
                B("Region is required");
                return;
            }
            B(null);
            updateWizardData({
                region
            });
            goNext();
        };
        p[1] = goNext;
        p[2] = updateWizardData;
        p[3] = t;
        p[4] = E;
    } else {
        E = p[4];
    }
    let f = E;
    let C;
    if (p[5] === S) {
        C = r(be, {
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
        p[5] = C;
    } else {
        C = p[5];
    }
    let v;
    let T;
    if (p[6] === S) {
        v = e(n, {
            children: "Where your Bedrock models are enabled."
        });
        T = e(n, {
            dimColor: true,
            children: "Claude Code reads this from AWS_REGION, not ~/.aws/config — set it explicitly even if your profile has a region."
        });
        p[6] = v;
        p[7] = T;
    } else {
        v = p[6];
        T = p[7];
    }
    let _;
    if (p[8] !== g || p[9] !== f || p[10] !== t) {
        _ = e(s, {
            marginTop: 1,
            children: e(Sr, {
                value: t,
                onChange: m,
                onSubmit: f,
                placeholder: "us-east-1",
                columns: 40,
                cursorOffset: g,
                onChangeCursorOffset: h,
                focus: true,
                showCursor: true
            })
        });
        p[8] = g;
        p[9] = f;
        p[10] = t;
        p[11] = _;
    } else {
        _ = p[11];
    }
    let D;
    if (p[12] !== u) {
        D = u && e(s, {
            marginTop: 1,
            children: e(es, {
                error: u
            })
        });
        p[12] = u;
        p[13] = D;
    } else {
        D = p[13];
    }
    let O;
    if (p[14] !== _ || p[15] !== D) {
        O = e(ud, {
            subtitle: "AWS region",
            footerText: C,
            children: r(s, {
                flexDirection: "column",
                children: [
                    v,
                    T,
                    _,
                    D
                ]
            })
        });
        p[14] = _;
        p[15] = D;
        p[16] = O;
    } else {
        O = p[16];
    }
    return O;
}
N();
function we() {
    let t = w(39);
    let { goBack, goNext, updateWizardData, wizardData } = Bu();
    let m;
    if (t[0] === S) {
        m = {
            phase: "checking"
        };
        t[0] = m;
    } else {
        m = t[0];
    }
    let [g, h] = y(m);
    let u;
    if (t[1] !== updateWizardData || t[2] !== wizardData) {
        u = ()=>{
            let B = false;
            ue(wizardData).then((result_1)=>{
                if (B) {
                    return;
                }
                if (result_1.status === "ok") {
                    updateWizardData({
                        verifiedIdentity: result_1.identity,
                        discoveredProfiles: result_1.profiles
                    });
                } else {
                    updateWizardData({
                        verifiedIdentity: undefined,
                        discoveredProfiles: undefined
                    });
                }
                h({
                    phase: "done",
                    result: result_1
                });
            });
            return ()=>{
                B = true;
            };
        };
        t[1] = updateWizardData;
        t[2] = wizardData;
        t[3] = u;
    } else {
        u = t[3];
    }
    let A;
    if (t[4] === S) {
        A = [];
        t[4] = A;
    } else {
        A = t[4];
    }
    P(u, A);
    if (g.phase === "checking") {
        const message = wizardData.authMethod === "bearer" ? "Sending a test request to Bedrock…" : "Calling AWS STS and Bedrock…";
        let k;
        if (t[5] !== message) {
            k = e(ud, {
                subtitle: "Verifying credentials",
                children: e(Hr, {
                    message,
                    subtitle: "This may take a few seconds."
                })
            });
            t[5] = message;
            t[6] = k;
        } else {
            k = t[6];
        }
        return k;
    }
    let { result } = g;
    switch(result.status){
        case "ok":
            {
                let E;
                if (t[7] === S) {
                    E = e(dt, {
                        status: "success",
                        withSpace: true
                    });
                    t[7] = E;
                } else {
                    E = t[7];
                }
                let k;
                if (t[8] !== result.identity) {
                    k = r(n, {
                        children: [
                            E,
                            "Authenticated as ",
                            e(n, {
                                bold: true,
                                children: result.identity
                            })
                        ]
                    });
                    t[8] = result.identity;
                    t[9] = k;
                } else {
                    k = t[9];
                }
                let children;
                if (t[10] !== result.note || t[11] !== result.profiles) {
                    children = result.note ?? (result.profiles.length > 0 ? `Found ${result.profiles.length} Anthropic inference ${I(result.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed — model defaults will use the built-in IDs.");
                    t[10] = result.note;
                    t[11] = result.profiles;
                    t[12] = children;
                } else {
                    children = t[12];
                }
                let v;
                if (t[13] !== children) {
                    v = e(n, {
                        dimColor: true,
                        children
                    });
                    t[13] = children;
                    t[14] = v;
                } else {
                    v = t[14];
                }
                let T;
                if (t[15] === S) {
                    T = [
                        {
                            label: "Continue",
                            value: "continue"
                        }
                    ];
                    t[15] = T;
                } else {
                    T = t[15];
                }
                let _;
                if (t[16] !== goNext) {
                    _ = ()=>goNext();
                    t[16] = goNext;
                    t[17] = _;
                } else {
                    _ = t[17];
                }
                let D;
                if (t[18] !== goBack || t[19] !== _) {
                    D = e(Ve, {
                        options: T,
                        onChange: _,
                        onCancel: goBack
                    });
                    t[18] = goBack;
                    t[19] = _;
                    t[20] = D;
                } else {
                    D = t[20];
                }
                let O;
                if (t[21] !== k || t[22] !== v || t[23] !== D) {
                    O = e(ud, {
                        subtitle: "Verification",
                        children: r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                k,
                                v,
                                D
                            ]
                        })
                    });
                    t[21] = k;
                    t[22] = v;
                    t[23] = D;
                    t[24] = O;
                } else {
                    O = t[24];
                }
                return O;
            }
        case "error":
            {
                let E;
                if (t[25] === S) {
                    E = e(dt, {
                        status: "error",
                        withSpace: true
                    });
                    t[25] = E;
                } else {
                    E = t[25];
                }
                let k;
                if (t[26] !== result.error) {
                    k = r(n, {
                        children: [
                            E,
                            result.error
                        ]
                    });
                    t[26] = result.error;
                    t[27] = k;
                } else {
                    k = t[27];
                }
                let C;
                if (t[28] !== result.command) {
                    C = result.command && r(n, {
                        bold: true,
                        color: "suggestion",
                        children: [
                            "    ",
                            result.command
                        ]
                    });
                    t[28] = result.command;
                    t[29] = C;
                } else {
                    C = t[29];
                }
                let v;
                if (t[30] !== k || t[31] !== C) {
                    v = r(s, {
                        flexDirection: "column",
                        children: [
                            k,
                            C
                        ]
                    });
                    t[30] = k;
                    t[31] = C;
                    t[32] = v;
                } else {
                    v = t[32];
                }
                let T;
                if (t[33] !== goBack || t[34] !== goNext) {
                    T = e(or, {
                        hideIndexes: true,
                        cancelFirst: true,
                        focus: "cancel",
                        confirmLabel: "Save anyway (skip verification)",
                        cancelLabel: "Go back and fix",
                        onConfirm: goNext,
                        onCancel: goBack
                    });
                    t[33] = goBack;
                    t[34] = goNext;
                    t[35] = T;
                } else {
                    T = t[35];
                }
                let _;
                if (t[36] !== v || t[37] !== T) {
                    _ = e(ud, {
                        subtitle: "Verification failed",
                        color: "error",
                        children: r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                v,
                                T
                            ]
                        })
                    });
                    t[36] = v;
                    t[37] = T;
                    t[38] = _;
                } else {
                    _ = t[38];
                }
                return _;
            }
    }
}
function onComplete_1() {}
const steps = [
    ie,
    Ee,
    se,
    te,
    De,
    we,
    me,
    de
];
function Amt(o) {
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
    let h;
    if (t[3] !== exitOnCtrlCD || t[4] !== onCancel || t[5] !== stepProps) {
        h = e(ije, {
            steps,
            stepProps,
            initialData,
            onComplete: onComplete_1,
            onCancel,
            exitOnCtrlCD,
            title: "Set up Amazon Bedrock",
            showStepCounter: false
        });
        t[3] = exitOnCtrlCD;
        t[4] = onCancel;
        t[5] = stepProps;
        t[6] = h;
    } else {
        h = t[6];
    }
    return h;
}
export { Amt };
