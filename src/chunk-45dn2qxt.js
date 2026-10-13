import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { DQt } from "/$bunfs/root/chunk-5cc1hdyv.js";
import { goe, hoe, yoe, t7, DT, n7, _oe, KB, r7, aF, boe, Soe, woe, voe, Eoe, o7 } from "/$bunfs/root/chunk-67wg4vkc.js";
import "/$bunfs/root/chunk-2e6e7dc3.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Zx } from "/$bunfs/root/chunk-sw8e7v35.js";
import { u$e } from "/$bunfs/root/chunk-5448kecb.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qk, $R } from "/$bunfs/root/chunk-dze6yaxw.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const U = C(function(Y) {
    Object.defineProperty(Y, "__esModule", {
        value: true
    });
    Y.resolveHttpAuthSchemeConfig = Y.defaultSigninHttpAuthSchemeProvider = Y.defaultSigninHttpAuthSchemeParametersProvider = undefined;
    const W = DT();
    const S = eP();
    const pt = async (e, t, r)=>({
            operation: S.getSmithyContext(t).operation,
            region: await S.normalizeProvider(e.region)() || (()=>{
                throw Error("expected `region` to be configured for `aws.auth#sigv4`");
            })()
        });
    Y.defaultSigninHttpAuthSchemeParametersProvider = pt;
    function lt(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "signin",
                region: e.region
            },
            propertiesExtractor: (config, context)=>({
                    signingProperties: {
                        config,
                        context
                    }
                })
        };
    }
    function ht(e) {
        return {
            schemeId: "smithy.api#noAuth"
        };
    }
    const gt = (e)=>{
        let t = [];
        switch(e.operation){
            case "CreateOAuth2Token":
                {
                    t.push(ht(e));
                    break;
                }
            default:
                t.push(lt(e));
        }
        return t;
    };
    Y.defaultSigninHttpAuthSchemeProvider = gt;
    const _t = (e)=>{
        let t = W.resolveAwsSdkSigV4Config(e);
        return Object.assign(t, {
            authSchemePreference: S.normalizeProvider(e.authSchemePreference ?? [])
        });
    };
    Y.resolveHttpAuthSchemeConfig = _t;
});
const de = C(function(ue) {
    Object.defineProperty(ue, "__esModule", {
        value: true
    });
    ue.ruleSet = undefined;
    const ae = "required";
    const o = "fn";
    const s = "argv";
    const l = "ref";
    const Z = true;
    const ee = "isSet";
    const E = "booleanEquals";
    const f = "error";
    const h = "endpoint";
    const p = "tree";
    const assign = "PartitionResult";
    const F = "stringEquals";
    const te = {
        [ae]: true,
        default: false,
        type: "boolean"
    };
    const re = {
        [ae]: false,
        type: "string"
    };
    const url = {
        [l]: "Endpoint"
    };
    const M = {
        [o]: E,
        [s]: [
            {
                [l]: "UseFIPS"
            },
            true
        ]
    };
    const j = {
        [o]: E,
        [s]: [
            {
                [l]: "UseDualStack"
            },
            true
        ]
    };
    const n = {};
    const V = {
        [o]: "getAttr",
        [s]: [
            {
                [l]: assign
            },
            "name"
        ]
    };
    const R = {
        [o]: E,
        [s]: [
            {
                [l]: "UseFIPS"
            },
            false
        ]
    };
    const I = {
        [o]: E,
        [s]: [
            {
                [l]: "UseDualStack"
            },
            false
        ]
    };
    const oe = {
        [o]: "getAttr",
        [s]: [
            {
                [l]: assign
            },
            "supportsFIPS"
        ]
    };
    const se = {
        [o]: E,
        [s]: [
            true,
            {
                [o]: "getAttr",
                [s]: [
                    {
                        [l]: assign
                    },
                    "supportsDualStack"
                ]
            }
        ]
    };
    const ie = [
        {
            [l]: "Region"
        }
    ];
    const St = {
        version: "1.0",
        parameters: {
            UseDualStack: te,
            UseFIPS: te,
            Endpoint: re,
            Region: re
        },
        rules: [
            {
                conditions: [
                    {
                        [o]: ee,
                        [s]: [
                            url
                        ]
                    }
                ],
                rules: [
                    {
                        conditions: [
                            M
                        ],
                        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                        type: f
                    },
                    {
                        rules: [
                            {
                                conditions: [
                                    j
                                ],
                                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                                type: f
                            },
                            {
                                endpoint: {
                                    url,
                                    properties: n,
                                    headers: n
                                },
                                type: h
                            }
                        ],
                        type: p
                    }
                ],
                type: p
            },
            {
                rules: [
                    {
                        conditions: [
                            {
                                [o]: ee,
                                [s]: ie
                            }
                        ],
                        rules: [
                            {
                                conditions: [
                                    {
                                        [o]: "aws.partition",
                                        [s]: ie,
                                        assign
                                    }
                                ],
                                rules: [
                                    {
                                        conditions: [
                                            {
                                                [o]: F,
                                                [s]: [
                                                    V,
                                                    "aws"
                                                ]
                                            },
                                            R,
                                            I
                                        ],
                                        endpoint: {
                                            url: "https://{Region}.signin.aws.amazon.com",
                                            properties: n,
                                            headers: n
                                        },
                                        type: h
                                    },
                                    {
                                        conditions: [
                                            {
                                                [o]: F,
                                                [s]: [
                                                    V,
                                                    "aws-cn"
                                                ]
                                            },
                                            R,
                                            I
                                        ],
                                        endpoint: {
                                            url: "https://{Region}.signin.amazonaws.cn",
                                            properties: n,
                                            headers: n
                                        },
                                        type: h
                                    },
                                    {
                                        conditions: [
                                            {
                                                [o]: F,
                                                [s]: [
                                                    V,
                                                    "aws-us-gov"
                                                ]
                                            },
                                            R,
                                            I
                                        ],
                                        endpoint: {
                                            url: "https://{Region}.signin.amazonaws-us-gov.com",
                                            properties: n,
                                            headers: n
                                        },
                                        type: h
                                    },
                                    {
                                        conditions: [
                                            M,
                                            j
                                        ],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [o]: E,
                                                        [s]: [
                                                            Z,
                                                            oe
                                                        ]
                                                    },
                                                    se
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                            properties: n,
                                                            headers: n
                                                        },
                                                        type: h
                                                    }
                                                ],
                                                type: p
                                            },
                                            {
                                                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                                type: f
                                            }
                                        ],
                                        type: p
                                    },
                                    {
                                        conditions: [
                                            M,
                                            I
                                        ],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [o]: E,
                                                        [s]: [
                                                            oe,
                                                            Z
                                                        ]
                                                    }
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                            properties: n,
                                                            headers: n
                                                        },
                                                        type: h
                                                    }
                                                ],
                                                type: p
                                            },
                                            {
                                                error: "FIPS is enabled but this partition does not support FIPS",
                                                type: f
                                            }
                                        ],
                                        type: p
                                    },
                                    {
                                        conditions: [
                                            R,
                                            j
                                        ],
                                        rules: [
                                            {
                                                conditions: [
                                                    se
                                                ],
                                                rules: [
                                                    {
                                                        endpoint: {
                                                            url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                            properties: n,
                                                            headers: n
                                                        },
                                                        type: h
                                                    }
                                                ],
                                                type: p
                                            },
                                            {
                                                error: "DualStack is enabled but this partition does not support DualStack",
                                                type: f
                                            }
                                        ],
                                        type: p
                                    },
                                    {
                                        endpoint: {
                                            url: "https://signin.{Region}.{PartitionResult#dnsSuffix}",
                                            properties: n,
                                            headers: n
                                        },
                                        type: h
                                    }
                                ],
                                type: p
                            }
                        ],
                        type: p
                    },
                    {
                        error: "Invalid Configuration: Missing Region",
                        type: f
                    }
                ],
                type: p
            }
        ]
    };
    ue.ruleSet = St;
});
const _e = C(function(he) {
    Object.defineProperty(he, "__esModule", {
        value: true
    });
    he.defaultEndpointResolver = undefined;
    const pe = t7();
    const v = uY();
    const le = de();
    const ft = new v.EndpointCache({
        size: 50,
        params: [
            "Endpoint",
            "Region",
            "UseDualStack",
            "UseFIPS"
        ]
    });
    const vt = (endpointParams, t = {})=>ft.get(endpointParams, ()=>v.resolveEndpoint(le.ruleSet, {
                endpointParams,
                logger: t.logger
            }));
    he.defaultEndpointResolver = vt;
    v.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});
const Re = C(function(ye) {
    Object.defineProperty(ye, "__esModule", {
        value: true
    });
    ye.getRuntimeConfig = undefined;
    const me = DT();
    const Ee = voe();
    const Se = xb();
    const fe = Rd();
    const ve = GW();
    const x = $R();
    const T = Qk();
    const Pe = U();
    const Ae = _e();
    const Pt = (e)=>({
            apiVersion: "2023-01-01",
            base64Decoder: e?.base64Decoder ?? x.fromBase64,
            base64Encoder: e?.base64Encoder ?? x.toBase64,
            disableHostPrefix: e?.disableHostPrefix ?? false,
            endpointProvider: e?.endpointProvider ?? Ae.defaultEndpointResolver,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Pe.defaultSigninHttpAuthSchemeProvider,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4"),
                    signer: new me.AwsSdkSigV4Signer
                },
                {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (t)=>t.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                    signer: new Se.NoAuthSigner
                }
            ],
            logger: e?.logger ?? new fe.NoOpLogger,
            protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({
                defaultNamespace: "com.amazonaws.signin"
            }),
            serviceId: e?.serviceId ?? "Signin",
            urlParser: e?.urlParser ?? ve.parseUrl,
            utf8Decoder: e?.utf8Decoder ?? T.fromUtf8,
            utf8Encoder: e?.utf8Encoder ?? T.toUtf8
        });
    ye.getRuntimeConfig = Pt;
});
const He = C(function(Ne) {
    Object.defineProperty(Ne, "__esModule", {
        value: true
    });
    Ne.getRuntimeConfig = undefined;
    const Ie = u$e();
    const At = Ie.__importDefault(DQt());
    const D = DT();
    const q = boe();
    const g = Fk();
    const Oe = Soe();
    const k = aF();
    const u = nP();
    const w = kH();
    const xe = woe();
    const Te = r7();
    const De = Re();
    const qe = Rd();
    const ke = Eoe();
    const we = Rd();
    const yt = (e)=>{
        we.emitWarningIfUnsupportedVersion(process.version);
        let defaultsMode = ke.resolveDefaultsModeConfig(e);
        let r = ()=>defaultsMode().then(qe.loadConfigsForDefaultMode);
        let d = De.getRuntimeConfig(e);
        D.emitWarningIfUnsupportedVersion(process.version);
        let i = {
            profile: e?.profile,
            logger: d.logger
        };
        return {
            ...d,
            ...e,
            runtime: "node",
            defaultsMode,
            authSchemePreference: e?.authSchemePreference ?? u.loadConfig(D.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
            bodyLengthChecker: e?.bodyLengthChecker ?? xe.calculateBodyLength,
            defaultUserAgentProvider: e?.defaultUserAgentProvider ?? q.createDefaultUserAgentProvider({
                serviceId: d.serviceId,
                clientVersion: At.default.version
            }),
            maxAttempts: e?.maxAttempts ?? u.loadConfig(k.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
            region: e?.region ?? u.loadConfig(g.NODE_REGION_CONFIG_OPTIONS, {
                ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
                ...i
            }),
            requestHandler: w.NodeHttpHandler.create(e?.requestHandler ?? r),
            retryMode: e?.retryMode ?? u.loadConfig({
                ...k.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async ()=>(await r()).retryMode || Te.DEFAULT_RETRY_MODE
            }, e),
            sha256: e?.sha256 ?? Oe.Hash.bind(null, "sha256"),
            streamCollector: e?.streamCollector ?? w.streamCollector,
            useDualstackEndpoint: e?.useDualstackEndpoint ?? u.loadConfig(g.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
            useFipsEndpoint: e?.useFipsEndpoint ?? u.loadConfig(g.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
            userAgentAppId: e?.userAgentAppId ?? u.loadConfig(q.NODE_APP_ID_CONFIG_OPTIONS, i)
        };
    };
    Ne.getRuntimeConfig = yt;
});
const Sr = C(function(Q) {
    const Ue = goe();
    const Ct = hoe();
    const Rt = yoe();
    const Fe = n7();
    const It = Fk();
    const L = xb();
    const P = Zx();
    const Ot = _oe();
    const et = KB();
    const Me = aF();
    const _ = Rd();
    const je = U();
    const xt = He();
    const Ve = o7();
    const Le = jm();
    const Tt = (e)=>Object.assign(e, {
            useDualstackEndpoint: e.useDualstackEndpoint ?? false,
            useFipsEndpoint: e.useFipsEndpoint ?? false,
            defaultSigningName: "signin"
        });
    const Dt = {
        UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
        },
        Endpoint: {
            type: "builtInParams",
            name: "endpoint"
        },
        Region: {
            type: "builtInParams",
            name: "region"
        },
        UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
        }
    };
    const qt = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials })=>({
            setHttpAuthScheme (i) {
                let y = httpAuthSchemes.findIndex((H)=>H.schemeId === i.schemeId);
                if (y === -1) {
                    httpAuthSchemes.push(i);
                } else {
                    httpAuthSchemes.splice(y, 1, i);
                }
            },
            httpAuthSchemes () {
                return httpAuthSchemes;
            },
            setHttpAuthSchemeProvider (i) {
                httpAuthSchemeProvider = i;
            },
            httpAuthSchemeProvider () {
                return httpAuthSchemeProvider;
            },
            setCredentials (i) {
                credentials = i;
            },
            credentials () {
                return credentials;
            }
        });
    const kt = (e)=>({
            httpAuthSchemes: e.httpAuthSchemes(),
            httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
            credentials: e.credentials()
        });
    const wt = (e, t)=>{
        let r = Object.assign(Ve.getAwsRegionExtensionConfiguration(e), _.getDefaultExtensionConfiguration(e), Le.getHttpHandlerExtensionConfiguration(e), qt(e));
        t.forEach((d)=>d.configure(r));
        return Object.assign(e, Ve.resolveAwsRegionExtensionConfiguration(r), _.resolveDefaultRuntimeConfig(r), Le.resolveHttpHandlerRuntimeConfig(r), kt(r));
    };
    class G extends _.Client {
        config;
        constructor(...[e]){
            let t = xt.getRuntimeConfig(e || {});
            super(t);
            this.initConfig = t;
            let r = Tt(t);
            let d = Fe.resolveUserAgentConfig(r);
            let i = Me.resolveRetryConfig(d);
            let y = It.resolveRegionConfig(i);
            let H = Ue.resolveHostHeaderConfig(y);
            let at = et.resolveEndpointConfig(H);
            let ut = je.resolveHttpAuthSchemeConfig(at);
            let ct = wt(ut, e?.extensions || []);
            this.config = ct;
            this.middlewareStack.use(P.getSchemaSerdePlugin(this.config));
            this.middlewareStack.use(Fe.getUserAgentPlugin(this.config));
            this.middlewareStack.use(Me.getRetryPlugin(this.config));
            this.middlewareStack.use(Ot.getContentLengthPlugin(this.config));
            this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config));
            this.middlewareStack.use(Ct.getLoggerPlugin(this.config));
            this.middlewareStack.use(Rt.getRecursionDetectionPlugin(this.config));
            this.middlewareStack.use(L.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: je.defaultSigninHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (dt)=>new L.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": dt.credentials
                    })
            }));
            this.middlewareStack.use(L.getHttpSigningPlugin(this.config));
        }
        destroy() {
            super.destroy();
        }
    }
    const A = class e extends _.ServiceException {
        constructor(t){
            super(t);
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const tt = class e extends A {
        name = "AccessDeniedException";
        $fault = "client";
        error;
        constructor(t){
            super({
                name: "AccessDeniedException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
        }
    };
    const rt = class e extends A {
        name = "InternalServerException";
        $fault = "server";
        error;
        constructor(t){
            super({
                name: "InternalServerException",
                $fault: "server",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
        }
    };
    const nt = class e extends A {
        name = "TooManyRequestsError";
        $fault = "client";
        error;
        constructor(t){
            super({
                name: "TooManyRequestsError",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
        }
    };
    const ot = class e extends A {
        name = "ValidationException";
        $fault = "client";
        error;
        constructor(t){
            super({
                name: "ValidationException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
        }
    };
    const Nt = "AccessDeniedException";
    const bt = "AccessToken";
    const Ht = "CreateOAuth2Token";
    const Ut = "CreateOAuth2TokenRequest";
    const Ft = "CreateOAuth2TokenRequestBody";
    const Mt = "CreateOAuth2TokenResponseBody";
    const jt = "CreateOAuth2TokenResponse";
    const Vt = "InternalServerException";
    const Lt = "RefreshToken";
    const $t = "TooManyRequestsError";
    const Gt = "ValidationException";
    const $e = "accessKeyId";
    const Ge = "accessToken";
    const B = "client";
    const Be = "clientId";
    const ze = "codeVerifier";
    const Bt = "code";
    const m = "error";
    const Ke = "expiresIn";
    const Xe = "grantType";
    const zt = "http";
    const z = "httpError";
    const Qe = "idToken";
    const c = "jsonName";
    const b = "message";
    const N = "refreshToken";
    const We = "redirectUri";
    const Kt = "server";
    const Ye = "secretAccessKey";
    const Je = "sessionToken";
    const st = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
    const Xt = "tokenInput";
    const Qt = "tokenOutput";
    const Ze = "tokenType";
    const a = "com.amazonaws.signin";
    const it = [
        0,
        a,
        Lt,
        8,
        0
    ];
    const Wt = [
        -3,
        a,
        Nt,
        {
            [m]: B
        },
        [
            m,
            b
        ],
        [
            0,
            0
        ]
    ];
    P.TypeRegistry.for(a).registerError(Wt, tt);
    const Yt = [
        3,
        a,
        bt,
        8,
        [
            $e,
            Ye,
            Je
        ],
        [
            [
                0,
                {
                    [c]: $e
                }
            ],
            [
                0,
                {
                    [c]: Ye
                }
            ],
            [
                0,
                {
                    [c]: Je
                }
            ]
        ]
    ];
    const Jt = [
        3,
        a,
        Ut,
        0,
        [
            Xt
        ],
        [
            [
                ()=>Zt,
                16
            ]
        ]
    ];
    var Zt = [
        3,
        a,
        Ft,
        0,
        [
            Be,
            Xe,
            Bt,
            We,
            ze,
            N
        ],
        [
            [
                0,
                {
                    [c]: Be
                }
            ],
            [
                0,
                {
                    [c]: Xe
                }
            ],
            0,
            [
                0,
                {
                    [c]: We
                }
            ],
            [
                0,
                {
                    [c]: ze
                }
            ],
            [
                ()=>it,
                {
                    [c]: N
                }
            ]
        ]
    ];
    const er = [
        3,
        a,
        jt,
        0,
        [
            Qt
        ],
        [
            [
                ()=>tr,
                16
            ]
        ]
    ];
    var tr = [
        3,
        a,
        Mt,
        0,
        [
            Ge,
            Ze,
            Ke,
            N,
            Qe
        ],
        [
            [
                ()=>Yt,
                {
                    [c]: Ge
                }
            ],
            [
                0,
                {
                    [c]: Ze
                }
            ],
            [
                1,
                {
                    [c]: Ke
                }
            ],
            [
                ()=>it,
                {
                    [c]: N
                }
            ],
            [
                0,
                {
                    [c]: Qe
                }
            ]
        ]
    ];
    const rr = [
        -3,
        a,
        Vt,
        {
            [m]: Kt,
            [z]: 500
        },
        [
            m,
            b
        ],
        [
            0,
            0
        ]
    ];
    P.TypeRegistry.for(a).registerError(rr, rt);
    const nr = [
        -3,
        a,
        $t,
        {
            [m]: B,
            [z]: 429
        },
        [
            m,
            b
        ],
        [
            0,
            0
        ]
    ];
    P.TypeRegistry.for(a).registerError(nr, nt);
    const or = [
        -3,
        a,
        Gt,
        {
            [m]: B,
            [z]: 400
        },
        [
            m,
            b
        ],
        [
            0,
            0
        ]
    ];
    P.TypeRegistry.for(a).registerError(or, ot);
    const sr = [
        -3,
        st,
        "SigninServiceException",
        0,
        [],
        []
    ];
    P.TypeRegistry.for(st).registerError(sr, A);
    const ir = [
        9,
        a,
        Ht,
        {
            [zt]: [
                "POST",
                "/v1/token",
                200
            ]
        },
        ()=>Jt,
        ()=>er
    ];
    class K extends _.Command.classBuilder().ep(Dt).m(function(e, t, r, d) {
        return [
            et.getEndpointPlugin(r, e.getEndpointParameterInstructions())
        ];
    }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(ir).build() {
    }
    const ar = {
        CreateOAuth2TokenCommand: K
    };
    class X extends G {
    }
    _.createAggregatedClient(ar, X);
    const ur = {
        AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
        INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
        INVALID_REQUEST: "INVALID_REQUEST",
        SERVER_ERROR: "server_error",
        TOKEN_EXPIRED: "TOKEN_EXPIRED",
        USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
    };
    Object.defineProperty(Q, "$Command", {
        enumerable: true,
        get: function() {
            return _.Command;
        }
    });
    Object.defineProperty(Q, "__Client", {
        enumerable: true,
        get: function() {
            return _.Client;
        }
    });
    Q.AccessDeniedException = tt;
    Q.CreateOAuth2TokenCommand = K;
    Q.InternalServerException = rt;
    Q.OAuth2ErrorCode = ur;
    Q.Signin = X;
    Q.SigninClient = G;
    Q.SigninServiceException = A;
    Q.TooManyRequestsError = nt;
    Q.ValidationException = ot;
});
export default Sr();
