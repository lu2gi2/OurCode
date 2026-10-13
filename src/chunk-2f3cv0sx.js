import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { DQt } from "/$bunfs/root/chunk-5cc1hdyv.js";
import { goe, hoe, yoe, t7, DT, n7, _oe, KB, r7, aF, boe, Soe, woe, voe, Eoe, o7 } from "/$bunfs/root/chunk-67wg4vkc.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Zx } from "/$bunfs/root/chunk-sw8e7v35.js";
import { u$e } from "/$bunfs/root/chunk-5448kecb.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qk, $R } from "/$bunfs/root/chunk-dze6yaxw.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const ue = C(function(Ce) {
    Object.defineProperty(Ce, "__esModule", {
        value: true
    });
    Ce.resolveHttpAuthSchemeConfig = Ce.resolveStsAuthConfig = Ce.defaultSTSHttpAuthSchemeProvider = Ce.defaultSTSHttpAuthSchemeParametersProvider = undefined;
    const ve = DT();
    const k = eP();
    const ye = le();
    const _o = async (e, t, n)=>({
            operation: k.getSmithyContext(t).operation,
            region: await k.normalizeProvider(e.region)() || (()=>{
                throw Error("expected `region` to be configured for `aws.auth#sigv4`");
            })()
        });
    Ce.defaultSTSHttpAuthSchemeParametersProvider = _o;
    function fo(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sts",
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
    function So(e) {
        return {
            schemeId: "smithy.api#noAuth"
        };
    }
    const Po = (e)=>{
        let t = [];
        switch(e.operation){
            case "AssumeRoleWithWebIdentity":
                {
                    t.push(So(e));
                    break;
                }
            default:
                t.push(fo(e));
        }
        return t;
    };
    Ce.defaultSTSHttpAuthSchemeProvider = Po;
    const Eo = (e)=>Object.assign(e, {
            stsClientCtor: ye.STSClient
        });
    Ce.resolveStsAuthConfig = Eo;
    const vo = (e)=>{
        let t = Ce.resolveStsAuthConfig(e);
        let n = ve.resolveAwsSdkSigV4Config(t);
        return Object.assign(n, {
            authSchemePreference: k.normalizeProvider(e.authSchemePreference ?? [])
        });
    };
    Ce.resolveHttpAuthSchemeConfig = vo;
});
const de = C(function(Re) {
    Object.defineProperty(Re, "__esModule", {
        value: true
    });
    Re.commonParams = Re.resolveClientEndpointParameters = undefined;
    const Ao = (e)=>Object.assign(e, {
            useDualstackEndpoint: e.useDualstackEndpoint ?? false,
            useFipsEndpoint: e.useFipsEndpoint ?? false,
            useGlobalEndpoint: e.useGlobalEndpoint ?? false,
            defaultSigningName: "sts"
        });
    Re.resolveClientEndpointParameters = Ao;
    Re.commonParams = {
        UseGlobalEndpoint: {
            type: "builtInParams",
            name: "useGlobalEndpoint"
        },
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
});
const Je = C(function(Qe) {
    Object.defineProperty(Qe, "__esModule", {
        value: true
    });
    Qe.ruleSet = undefined;
    const Fe = "required";
    const o = "type";
    const i = "fn";
    const s = "argv";
    const E = "ref";
    const Te = false;
    const pe = true;
    const P = "booleanEquals";
    const d = "stringEquals";
    const name = "sigv4";
    const signingName = "sts";
    const signingRegion = "us-east-1";
    const a = "endpoint";
    const url = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    const f = "tree";
    const O = "error";
    const me = "getAttr";
    const be = {
        [Fe]: false,
        [o]: "string"
    };
    const ge = {
        [Fe]: true,
        default: false,
        [o]: "boolean"
    };
    const url_1 = {
        [E]: "Endpoint"
    };
    const we = {
        [i]: "isSet",
        [s]: [
            {
                [E]: "Region"
            }
        ]
    };
    const p = {
        [E]: "Region"
    };
    const qe = {
        [i]: "aws.partition",
        [s]: [
            p
        ],
        assign: "PartitionResult"
    };
    const Ke = {
        [E]: "UseFIPS"
    };
    const Ge = {
        [E]: "UseDualStack"
    };
    const endpoint = {
        url: "https://sts.amazonaws.com",
        properties: {
            authSchemes: [
                {
                    name,
                    signingName,
                    signingRegion
                }
            ]
        },
        headers: {}
    };
    const _ = {};
    const ke = {
        conditions: [
            {
                [i]: d,
                [s]: [
                    p,
                    "aws-global"
                ]
            }
        ],
        [a]: endpoint,
        [o]: a
    };
    const ze = {
        [i]: P,
        [s]: [
            Ke,
            true
        ]
    };
    const Ve = {
        [i]: P,
        [s]: [
            Ge,
            true
        ]
    };
    const Oe = {
        [i]: me,
        [s]: [
            {
                [E]: "PartitionResult"
            },
            "supportsFIPS"
        ]
    };
    const Be = {
        [E]: "PartitionResult"
    };
    const He = {
        [i]: P,
        [s]: [
            true,
            {
                [i]: me,
                [s]: [
                    Be,
                    "supportsDualStack"
                ]
            }
        ]
    };
    const Ne = [
        {
            [i]: "isSet",
            [s]: [
                url_1
            ]
        }
    ];
    const We = [
        ze
    ];
    const je = [
        Ve
    ];
    const Ro = {
        version: "1.0",
        parameters: {
            Region: be,
            UseDualStack: ge,
            UseFIPS: ge,
            Endpoint: be,
            UseGlobalEndpoint: ge
        },
        rules: [
            {
                conditions: [
                    {
                        [i]: P,
                        [s]: [
                            {
                                [E]: "UseGlobalEndpoint"
                            },
                            pe
                        ]
                    },
                    {
                        [i]: "not",
                        [s]: Ne
                    },
                    we,
                    qe,
                    {
                        [i]: P,
                        [s]: [
                            Ke,
                            Te
                        ]
                    },
                    {
                        [i]: P,
                        [s]: [
                            Ge,
                            Te
                        ]
                    }
                ],
                rules: [
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "ap-northeast-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "ap-south-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "ap-southeast-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "ap-southeast-2"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    ke,
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "ca-central-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "eu-central-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "eu-north-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "eu-west-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "eu-west-2"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "eu-west-3"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "sa-east-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    signingRegion
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "us-east-2"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "us-west-1"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        conditions: [
                            {
                                [i]: d,
                                [s]: [
                                    p,
                                    "us-west-2"
                                ]
                            }
                        ],
                        endpoint,
                        [o]: a
                    },
                    {
                        endpoint: {
                            url,
                            properties: {
                                authSchemes: [
                                    {
                                        name,
                                        signingName,
                                        signingRegion: "{Region}"
                                    }
                                ]
                            },
                            headers: _
                        },
                        [o]: a
                    }
                ],
                [o]: f
            },
            {
                conditions: Ne,
                rules: [
                    {
                        conditions: We,
                        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                        [o]: O
                    },
                    {
                        conditions: je,
                        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                        [o]: O
                    },
                    {
                        endpoint: {
                            url: url_1,
                            properties: _,
                            headers: _
                        },
                        [o]: a
                    }
                ],
                [o]: f
            },
            {
                conditions: [
                    we
                ],
                rules: [
                    {
                        conditions: [
                            qe
                        ],
                        rules: [
                            {
                                conditions: [
                                    ze,
                                    Ve
                                ],
                                rules: [
                                    {
                                        conditions: [
                                            {
                                                [i]: P,
                                                [s]: [
                                                    pe,
                                                    Oe
                                                ]
                                            },
                                            He
                                        ],
                                        rules: [
                                            {
                                                endpoint: {
                                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                    properties: _,
                                                    headers: _
                                                },
                                                [o]: a
                                            }
                                        ],
                                        [o]: f
                                    },
                                    {
                                        error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                        [o]: O
                                    }
                                ],
                                [o]: f
                            },
                            {
                                conditions: We,
                                rules: [
                                    {
                                        conditions: [
                                            {
                                                [i]: P,
                                                [s]: [
                                                    Oe,
                                                    pe
                                                ]
                                            }
                                        ],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [i]: d,
                                                        [s]: [
                                                            {
                                                                [i]: me,
                                                                [s]: [
                                                                    Be,
                                                                    "name"
                                                                ]
                                                            },
                                                            "aws-us-gov"
                                                        ]
                                                    }
                                                ],
                                                endpoint: {
                                                    url: "https://sts.{Region}.amazonaws.com",
                                                    properties: _,
                                                    headers: _
                                                },
                                                [o]: a
                                            },
                                            {
                                                endpoint: {
                                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                    properties: _,
                                                    headers: _
                                                },
                                                [o]: a
                                            }
                                        ],
                                        [o]: f
                                    },
                                    {
                                        error: "FIPS is enabled but this partition does not support FIPS",
                                        [o]: O
                                    }
                                ],
                                [o]: f
                            },
                            {
                                conditions: je,
                                rules: [
                                    {
                                        conditions: [
                                            He
                                        ],
                                        rules: [
                                            {
                                                endpoint: {
                                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                    properties: _,
                                                    headers: _
                                                },
                                                [o]: a
                                            }
                                        ],
                                        [o]: f
                                    },
                                    {
                                        error: "DualStack is enabled but this partition does not support DualStack",
                                        [o]: O
                                    }
                                ],
                                [o]: f
                            },
                            ke,
                            {
                                endpoint: {
                                    url,
                                    properties: _,
                                    headers: _
                                },
                                [o]: a
                            }
                        ],
                        [o]: f
                    }
                ],
                [o]: f
            },
            {
                error: "Invalid Configuration: Missing Region",
                [o]: O
            }
        ]
    };
    Qe.ruleSet = Ro;
});
const ot = C(function(et) {
    Object.defineProperty(et, "__esModule", {
        value: true
    });
    et.defaultEndpointResolver = undefined;
    const Xe = t7();
    const H = uY();
    const Ze = Je();
    const Io = new H.EndpointCache({
        size: 50,
        params: [
            "Endpoint",
            "Region",
            "UseDualStack",
            "UseFIPS",
            "UseGlobalEndpoint"
        ]
    });
    const To = (endpointParams, t = {})=>Io.get(endpointParams, ()=>H.resolveEndpoint(Ze.ruleSet, {
                endpointParams,
                logger: t.logger
            }));
    et.defaultEndpointResolver = To;
    H.customEndpointFunctions.aws = Xe.awsEndpointFunctions;
});
const pt = C(function(lt) {
    Object.defineProperty(lt, "__esModule", {
        value: true
    });
    lt.getRuntimeConfig = undefined;
    const nt = DT();
    const rt = voe();
    const it = xb();
    const st = Rd();
    const ct = GW();
    const M = $R();
    const K = Qk();
    const at = ue();
    const ut = ot();
    const Do = (e)=>({
            apiVersion: "2011-06-15",
            base64Decoder: e?.base64Decoder ?? M.fromBase64,
            base64Encoder: e?.base64Encoder ?? M.toBase64,
            disableHostPrefix: e?.disableHostPrefix ?? false,
            endpointProvider: e?.endpointProvider ?? ut.defaultEndpointResolver,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? at.defaultSTSHttpAuthSchemeProvider,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4"),
                    signer: new nt.AwsSdkSigV4Signer
                },
                {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (t)=>t.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                    signer: new it.NoAuthSigner
                }
            ],
            logger: e?.logger ?? new st.NoOpLogger,
            protocol: e?.protocol ?? new rt.AwsQueryProtocol({
                defaultNamespace: "com.amazonaws.sts",
                xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
                version: "2011-06-15"
            }),
            serviceId: e?.serviceId ?? "STS",
            urlParser: e?.urlParser ?? ct.parseUrl,
            utf8Decoder: e?.utf8Decoder ?? K.fromUtf8,
            utf8Encoder: e?.utf8Encoder ?? K.toUtf8
        });
    lt.getRuntimeConfig = Do;
});
const At = C(function(yt) {
    Object.defineProperty(yt, "__esModule", {
        value: true
    });
    yt.getRuntimeConfig = undefined;
    const gt = u$e();
    const bo = gt.__importDefault(DQt());
    const N = DT();
    const G = boe();
    const v = Fk();
    const mt = xb();
    const ht = Soe();
    const z = aF();
    const h = nP();
    const V = kH();
    const _t = woe();
    const ft = r7();
    const St = pt();
    const Pt = Rd();
    const Et = Eoe();
    const vt = Rd();
    const wo = (e)=>{
        vt.emitWarningIfUnsupportedVersion(process.version);
        let defaultsMode = Et.resolveDefaultsModeConfig(e);
        let n = ()=>defaultsMode().then(Pt.loadConfigsForDefaultMode);
        let u = St.getRuntimeConfig(e);
        N.emitWarningIfUnsupportedVersion(process.version);
        let r = {
            profile: e?.profile,
            logger: u.logger
        };
        return {
            ...u,
            ...e,
            runtime: "node",
            defaultsMode,
            authSchemePreference: e?.authSchemePreference ?? h.loadConfig(N.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, r),
            bodyLengthChecker: e?.bodyLengthChecker ?? _t.calculateBodyLength,
            defaultUserAgentProvider: e?.defaultUserAgentProvider ?? G.createDefaultUserAgentProvider({
                serviceId: u.serviceId,
                clientVersion: bo.default.version
            }),
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (g)=>g.getIdentityProvider("aws.auth#sigv4") || (async (l)=>await e.credentialDefaultProvider(l?.__config || {})()),
                    signer: new N.AwsSdkSigV4Signer
                },
                {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (g)=>g.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                    signer: new mt.NoAuthSigner
                }
            ],
            maxAttempts: e?.maxAttempts ?? h.loadConfig(z.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
            region: e?.region ?? h.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
                ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
                ...r
            }),
            requestHandler: V.NodeHttpHandler.create(e?.requestHandler ?? n),
            retryMode: e?.retryMode ?? h.loadConfig({
                ...z.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async ()=>(await n()).retryMode || ft.DEFAULT_RETRY_MODE
            }, e),
            sha256: e?.sha256 ?? ht.Hash.bind(null, "sha256"),
            streamCollector: e?.streamCollector ?? V.streamCollector,
            useDualstackEndpoint: e?.useDualstackEndpoint ?? h.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, r),
            useFipsEndpoint: e?.useFipsEndpoint ?? h.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, r),
            userAgentAppId: e?.userAgentAppId ?? h.loadConfig(G.NODE_APP_ID_CONFIG_OPTIONS, r)
        };
    };
    yt.getRuntimeConfig = wo;
});
const It = C(function(xt) {
    Object.defineProperty(xt, "__esModule", {
        value: true
    });
    xt.resolveHttpAuthRuntimeConfig = xt.getHttpAuthExtensionConfiguration = undefined;
    const qo = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials })=>({
            setHttpAuthScheme (r) {
                let g = httpAuthSchemes.findIndex((l)=>l.schemeId === r.schemeId);
                if (g === -1) {
                    httpAuthSchemes.push(r);
                } else {
                    httpAuthSchemes.splice(g, 1, r);
                }
            },
            httpAuthSchemes () {
                return httpAuthSchemes;
            },
            setHttpAuthSchemeProvider (r) {
                httpAuthSchemeProvider = r;
            },
            httpAuthSchemeProvider () {
                return httpAuthSchemeProvider;
            },
            setCredentials (r) {
                credentials = r;
            },
            credentials () {
                return credentials;
            }
        });
    xt.getHttpAuthExtensionConfiguration = qo;
    const ko = (e)=>({
            httpAuthSchemes: e.httpAuthSchemes(),
            httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
            credentials: e.credentials()
        });
    xt.resolveHttpAuthRuntimeConfig = ko;
});
const bt = C(function(Tt) {
    Object.defineProperty(Tt, "__esModule", {
        value: true
    });
    Tt.resolveRuntimeExtensions = undefined;
    const B = o7();
    const Q = jm();
    const Y = Rd();
    const J = It();
    const Ho = (e, t)=>{
        let n = Object.assign(B.getAwsRegionExtensionConfiguration(e), Y.getDefaultExtensionConfiguration(e), Q.getHttpHandlerExtensionConfiguration(e), J.getHttpAuthExtensionConfiguration(e));
        t.forEach((u)=>u.configure(n));
        return Object.assign(e, B.resolveAwsRegionExtensionConfiguration(n), Y.resolveDefaultRuntimeConfig(n), Q.resolveHttpHandlerRuntimeConfig(n), J.resolveHttpAuthRuntimeConfig(n));
    };
    Tt.resolveRuntimeExtensions = Ho;
});
var le = C(function(he) {
    Object.defineProperty(he, "__esModule", {
        value: true
    });
    he.STSClient = he.__Client = undefined;
    const X = goe();
    const wt = hoe();
    const qt = yoe();
    const Z = n7();
    const kt = Fk();
    const W = xb();
    const Ot = Zx();
    const Ht = _oe();
    const Nt = KB();
    const ee = aF();
    const oe = Rd();
    Object.defineProperty(he, "__Client", {
        enumerable: true,
        get: function() {
            return oe.Client;
        }
    });
    const te = ue();
    const Wt = de();
    const jt = At();
    const Ft = bt();
    class Ut extends oe.Client {
        config;
        constructor(...[e]){
            let t = jt.getRuntimeConfig(e || {});
            super(t);
            this.initConfig = t;
            let n = Wt.resolveClientEndpointParameters(t);
            let u = Z.resolveUserAgentConfig(n);
            let r = ee.resolveRetryConfig(u);
            let g = kt.resolveRegionConfig(r);
            let l = X.resolveHostHeaderConfig(g);
            let A = Nt.resolveEndpointConfig(l);
            let x = te.resolveHttpAuthSchemeConfig(A);
            let R = Ft.resolveRuntimeExtensions(x, e?.extensions || []);
            this.config = R;
            this.middlewareStack.use(Ot.getSchemaSerdePlugin(this.config));
            this.middlewareStack.use(Z.getUserAgentPlugin(this.config));
            this.middlewareStack.use(ee.getRetryPlugin(this.config));
            this.middlewareStack.use(Ht.getContentLengthPlugin(this.config));
            this.middlewareStack.use(X.getHostHeaderPlugin(this.config));
            this.middlewareStack.use(wt.getLoggerPlugin(this.config));
            this.middlewareStack.use(qt.getRecursionDetectionPlugin(this.config));
            this.middlewareStack.use(W.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: te.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (q)=>new W.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": q.credentials
                    })
            }));
            this.middlewareStack.use(W.getHttpSigningPlugin(this.config));
        }
        destroy() {
            super.destroy();
        }
    }
    he.STSClient = Ut;
});
export const Pmo = C(function(ne) {
    const F = le();
    const U = Rd();
    const Mt = KB();
    const $t = de();
    const y = Zx();
    const _e = tP();
    const No = o7();
    const S = class e extends U.ServiceException {
        constructor(t){
            super(t);
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Kt = class e extends S {
        name = "ExpiredTokenException";
        $fault = "client";
        constructor(t){
            super({
                name: "ExpiredTokenException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Gt = class e extends S {
        name = "MalformedPolicyDocumentException";
        $fault = "client";
        constructor(t){
            super({
                name: "MalformedPolicyDocumentException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const zt = class e extends S {
        name = "PackedPolicyTooLargeException";
        $fault = "client";
        constructor(t){
            super({
                name: "PackedPolicyTooLargeException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Vt = class e extends S {
        name = "RegionDisabledException";
        $fault = "client";
        constructor(t){
            super({
                name: "RegionDisabledException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Bt = class e extends S {
        name = "IDPRejectedClaimException";
        $fault = "client";
        constructor(t){
            super({
                name: "IDPRejectedClaimException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Qt = class e extends S {
        name = "InvalidIdentityTokenException";
        $fault = "client";
        constructor(t){
            super({
                name: "InvalidIdentityTokenException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Yt = class e extends S {
        name = "IDPCommunicationErrorException";
        $fault = "client";
        constructor(t){
            super({
                name: "IDPCommunicationErrorException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const Wo = "Arn";
    const jo = "AccessKeyId";
    const Fo = "AssumeRole";
    const Uo = "AssumedRoleId";
    const Lo = "AssumeRoleRequest";
    const Mo = "AssumeRoleResponse";
    const fe = "AssumedRoleUser";
    const $o = "AssumeRoleWithWebIdentity";
    const Ko = "AssumeRoleWithWebIdentityRequest";
    const Go = "AssumeRoleWithWebIdentityResponse";
    const zo = "Audience";
    const Se = "Credentials";
    const Vo = "ContextAssertion";
    const Jt = "DurationSeconds";
    const Bo = "Expiration";
    const Qo = "ExternalId";
    const Yo = "ExpiredTokenException";
    const Jo = "IDPCommunicationErrorException";
    const Xo = "IDPRejectedClaimException";
    const Zo = "InvalidIdentityTokenException";
    const en = "Key";
    const tn = "MalformedPolicyDocumentException";
    const Xt = "Policy";
    const Zt = "PolicyArns";
    const on = "ProviderArn";
    const nn = "ProvidedContexts";
    const rn = "ProvidedContextsListType";
    const sn = "ProvidedContext";
    const cn = "PolicyDescriptorType";
    const an = "ProviderId";
    const eo = "PackedPolicySize";
    const un = "PackedPolicyTooLargeException";
    const ln = "Provider";
    const to = "RoleArn";
    const dn = "RegionDisabledException";
    const oo = "RoleSessionName";
    const pn = "SecretAccessKey";
    const gn = "SubjectFromWebIdentityToken";
    const Pe = "SourceIdentity";
    const mn = "SerialNumber";
    const hn = "SessionToken";
    const _n = "Tags";
    const fn = "TokenCode";
    const Sn = "TransitiveTagKeys";
    const Pn = "Tag";
    const En = "Value";
    const vn = "WebIdentityToken";
    const yn = "arn";
    const Cn = "accessKeySecretType";
    const I = "awsQueryError";
    const T = "client";
    const An = "clientTokenType";
    const D = "error";
    const b = "httpError";
    const w = "message";
    const xn = "policyDescriptorListType";
    const no = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
    const Rn = "tagListType";
    const c = "com.amazonaws.sts";
    const In = [
        0,
        c,
        Cn,
        8,
        0
    ];
    const Tn = [
        0,
        c,
        An,
        8,
        0
    ];
    const ro = [
        3,
        c,
        fe,
        0,
        [
            Uo,
            Wo
        ],
        [
            0,
            0
        ]
    ];
    const Dn = [
        3,
        c,
        Lo,
        0,
        [
            to,
            oo,
            Zt,
            Xt,
            Jt,
            _n,
            Sn,
            Qo,
            mn,
            fn,
            Pe,
            nn
        ],
        [
            0,
            0,
            ()=>so,
            0,
            1,
            ()=>Gn,
            64,
            0,
            0,
            0,
            0,
            ()=>Kn
        ]
    ];
    const bn = [
        3,
        c,
        Mo,
        0,
        [
            Se,
            fe,
            eo,
            Pe
        ],
        [
            [
                ()=>io,
                0
            ],
            ()=>ro,
            1,
            0
        ]
    ];
    const wn = [
        3,
        c,
        Ko,
        0,
        [
            to,
            oo,
            vn,
            an,
            Zt,
            Xt,
            Jt
        ],
        [
            0,
            0,
            [
                ()=>Tn,
                0
            ],
            0,
            ()=>so,
            0,
            1
        ]
    ];
    const qn = [
        3,
        c,
        Go,
        0,
        [
            Se,
            gn,
            fe,
            eo,
            ln,
            zo,
            Pe
        ],
        [
            [
                ()=>io,
                0
            ],
            0,
            ()=>ro,
            1,
            0,
            0,
            0
        ]
    ];
    var io = [
        3,
        c,
        Se,
        0,
        [
            jo,
            pn,
            hn,
            Bo
        ],
        [
            0,
            [
                ()=>In,
                0
            ],
            0,
            4
        ]
    ];
    const kn = [
        -3,
        c,
        Yo,
        {
            [D]: T,
            [b]: 400,
            [I]: [
                "ExpiredTokenException",
                400
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(kn, Kt);
    const On = [
        -3,
        c,
        Jo,
        {
            [D]: T,
            [b]: 400,
            [I]: [
                "IDPCommunicationError",
                400
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(On, Yt);
    const Hn = [
        -3,
        c,
        Xo,
        {
            [D]: T,
            [b]: 403,
            [I]: [
                "IDPRejectedClaim",
                403
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(Hn, Bt);
    const Nn = [
        -3,
        c,
        Zo,
        {
            [D]: T,
            [b]: 400,
            [I]: [
                "InvalidIdentityToken",
                400
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(Nn, Qt);
    const Wn = [
        -3,
        c,
        tn,
        {
            [D]: T,
            [b]: 400,
            [I]: [
                "MalformedPolicyDocument",
                400
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(Wn, Gt);
    const jn = [
        -3,
        c,
        un,
        {
            [D]: T,
            [b]: 400,
            [I]: [
                "PackedPolicyTooLarge",
                400
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(jn, zt);
    const Fn = [
        3,
        c,
        cn,
        0,
        [
            yn
        ],
        [
            0
        ]
    ];
    const Un = [
        3,
        c,
        sn,
        0,
        [
            on,
            Vo
        ],
        [
            0,
            0
        ]
    ];
    const Ln = [
        -3,
        c,
        dn,
        {
            [D]: T,
            [b]: 403,
            [I]: [
                "RegionDisabledException",
                403
            ]
        },
        [
            w
        ],
        [
            0
        ]
    ];
    y.TypeRegistry.for(c).registerError(Ln, Vt);
    const Mn = [
        3,
        c,
        Pn,
        0,
        [
            en,
            En
        ],
        [
            0,
            0
        ]
    ];
    const $n = [
        -3,
        no,
        "STSServiceException",
        0,
        [],
        []
    ];
    y.TypeRegistry.for(no).registerError($n, S);
    var so = [
        1,
        c,
        xn,
        0,
        ()=>Fn
    ];
    var Kn = [
        1,
        c,
        rn,
        0,
        ()=>Un
    ];
    var Gn = [
        1,
        c,
        Rn,
        0,
        ()=>Mn
    ];
    const zn = [
        9,
        c,
        Fo,
        0,
        ()=>Dn,
        ()=>bn
    ];
    const Vn = [
        9,
        c,
        $o,
        0,
        ()=>wn,
        ()=>qn
    ];
    class re extends U.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
        return [
            Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())
        ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(zn).build() {
    }
    class ie extends U.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
        return [
            Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())
        ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(Vn).build() {
    }
    const Bn = {
        AssumeRoleCommand: re,
        AssumeRoleWithWebIdentityCommand: ie
    };
    class Ee extends F.STSClient {
    }
    U.createAggregatedClient(Bn, Ee);
    const co = (AssumedRoleUser)=>{
        if (typeof AssumedRoleUser?.Arn === "string") {
            let t = AssumedRoleUser.Arn.split(":");
            if (t.length > 4 && t[4] !== "") {
                return t[4];
            }
        }
    };
    const ao = async (region, t, credentialProviderLogger, u = {})=>{
        let r = typeof region === "function" ? await region() : region;
        let g = typeof t === "function" ? await t() : t;
        let l = await No.stsRegionDefaultResolver(u)();
        credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${r} (credential provider clientConfig)`, `${g} (contextual client)`, `${l} (STS default: AWS_REGION, profile region, or us-east-1)`);
        return r ?? g ?? l;
    };
    const Qn = (e, t)=>{
        let n;
        let u;
        return async (r, g)=>{
            u = r;
            if (!n) {
                let { logger = e?.parentClientConfig?.logger, profile = e?.parentClientConfig?.profile, region, requestHandler = e?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = e?.parentClientConfig?.userAgentAppId } = e;
                let mo = await ao(region, e?.parentClientConfig?.region, credentialProviderLogger, {
                    logger,
                    profile
                });
                let ho = !uo(requestHandler);
                n = new t({
                    ...e,
                    userAgentAppId,
                    profile,
                    credentialDefaultProvider: ()=>async ()=>u,
                    region: mo,
                    requestHandler: ho ? requestHandler : undefined,
                    logger
                });
            }
            let { Credentials, AssumedRoleUser } = await n.send(new re(g));
            if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
                throw Error(`Invalid response from STS.assumeRole call with role ${g.RoleArn}`);
            }
            let x = co(AssumedRoleUser);
            let R = {
                accessKeyId: Credentials.AccessKeyId,
                secretAccessKey: Credentials.SecretAccessKey,
                sessionToken: Credentials.SessionToken,
                expiration: Credentials.Expiration,
                ...Credentials.CredentialScope && {
                    credentialScope: Credentials.CredentialScope
                },
                ...x && {
                    accountId: x
                }
            };
            _e.setCredentialFeature(R, "CREDENTIALS_STS_ASSUME_ROLE", "i");
            return R;
        };
    };
    const Yn = (e, t)=>{
        let n;
        return async (u)=>{
            if (!n) {
                let { logger = e?.parentClientConfig?.logger, profile = e?.parentClientConfig?.profile, region, requestHandler = e?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = e?.parentClientConfig?.userAgentAppId } = e;
                let ce = await ao(region, e?.parentClientConfig?.region, credentialProviderLogger, {
                    logger,
                    profile
                });
                let ae = !uo(requestHandler);
                n = new t({
                    ...e,
                    userAgentAppId,
                    profile,
                    region: ce,
                    requestHandler: ae ? requestHandler : undefined,
                    logger
                });
            }
            let { Credentials, AssumedRoleUser } = await n.send(new ie(u));
            if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
                throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${u.RoleArn}`);
            }
            let l = co(AssumedRoleUser);
            let A = {
                accessKeyId: Credentials.AccessKeyId,
                secretAccessKey: Credentials.SecretAccessKey,
                sessionToken: Credentials.SessionToken,
                expiration: Credentials.Expiration,
                ...Credentials.CredentialScope && {
                    credentialScope: Credentials.CredentialScope
                },
                ...l && {
                    accountId: l
                }
            };
            if (l) {
                _e.setCredentialFeature(A, "RESOLVED_ACCOUNT_ID", "T");
            }
            _e.setCredentialFeature(A, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
            return A;
        };
    };
    var uo = (requestHandler)=>requestHandler?.metadata?.handlerProtocol === "h2";
    const lo = (STSClient, t)=>{
        if (!t) {
            return STSClient;
        } else {
            return class extends STSClient {
                constructor(u){
                    super(u);
                    for (let r of t){
                        this.middlewareStack.use(r);
                    }
                }
            };
        }
    };
    const po = (e = {}, t)=>Qn(e, lo(F.STSClient, t));
    const go = (e = {}, t)=>Yn(e, lo(F.STSClient, t));
    const Jn = (e)=>(t)=>e({
                roleAssumer: po(t),
                roleAssumerWithWebIdentity: go(t),
                ...t
            });
    Object.defineProperty(ne, "$Command", {
        enumerable: true,
        get: function() {
            return U.Command;
        }
    });
    ne.AssumeRoleCommand = re;
    ne.AssumeRoleWithWebIdentityCommand = ie;
    ne.ExpiredTokenException = Kt;
    ne.IDPCommunicationErrorException = Yt;
    ne.IDPRejectedClaimException = Bt;
    ne.InvalidIdentityTokenException = Qt;
    ne.MalformedPolicyDocumentException = Gt;
    ne.PackedPolicyTooLargeException = zt;
    ne.RegionDisabledException = Vt;
    ne.STS = Ee;
    ne.STSServiceException = S;
    ne.decorateDefaultCredentialProvider = Jn;
    ne.getDefaultRoleAssumer = po;
    ne.getDefaultRoleAssumerWithWebIdentity = go;
    Object.keys(F).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(ne, e)) {
            Object.defineProperty(ne, e, {
                enumerable: true,
                get: function() {
                    return F[e];
                }
            });
        }
    });
});
