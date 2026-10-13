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
const b = C(function(K) {
    Object.defineProperty(K, "__esModule", {
        value: true
    });
    K.resolveHttpAuthSchemeConfig = K.defaultSSOOIDCHttpAuthSchemeProvider = K.defaultSSOOIDCHttpAuthSchemeParametersProvider = undefined;
    const z = DT();
    const f = eP();
    const ct = async (e, t, n)=>({
            operation: f.getSmithyContext(t).operation,
            region: await f.normalizeProvider(e.region)() || (()=>{
                throw Error("expected `region` to be configured for `aws.auth#sigv4`");
            })()
        });
    K.defaultSSOOIDCHttpAuthSchemeParametersProvider = ct;
    function at(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sso-oauth",
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
    function pt(e) {
        return {
            schemeId: "smithy.api#noAuth"
        };
    }
    const dt = (e)=>{
        let t = [];
        switch(e.operation){
            case "CreateToken":
                {
                    t.push(pt(e));
                    break;
                }
            default:
                t.push(at(e));
        }
        return t;
    };
    K.defaultSSOOIDCHttpAuthSchemeProvider = dt;
    const ut = (e)=>{
        let t = z.resolveAwsSdkSigV4Config(e);
        return Object.assign(t, {
            authSchemePreference: f.normalizeProvider(e.authSchemePreference ?? [])
        });
    };
    K.resolveHttpAuthSchemeConfig = ut;
});
const ae = C(function(se) {
    Object.defineProperty(se, "__esModule", {
        value: true
    });
    se.ruleSet = undefined;
    const re = "required";
    const d = "fn";
    const u = "argv";
    const I = "ref";
    const V = true;
    const B = "isSet";
    const P = "booleanEquals";
    const x = "error";
    const m = "endpoint";
    const g = "tree";
    const assign = "PartitionResult";
    const N = "getAttr";
    const Y = {
        [re]: false,
        type: "string"
    };
    const W = {
        [re]: true,
        default: false,
        type: "boolean"
    };
    const url = {
        [I]: "Endpoint"
    };
    const oe = {
        [d]: P,
        [u]: [
            {
                [I]: "UseFIPS"
            },
            true
        ]
    };
    const ne = {
        [d]: P,
        [u]: [
            {
                [I]: "UseDualStack"
            },
            true
        ]
    };
    const p = {};
    const X = {
        [d]: N,
        [u]: [
            {
                [I]: assign
            },
            "supportsFIPS"
        ]
    };
    const ie = {
        [I]: assign
    };
    const Q = {
        [d]: P,
        [u]: [
            true,
            {
                [d]: N,
                [u]: [
                    ie,
                    "supportsDualStack"
                ]
            }
        ]
    };
    const Z = [
        oe
    ];
    const ee = [
        ne
    ];
    const te = [
        {
            [I]: "Region"
        }
    ];
    const _t = {
        version: "1.0",
        parameters: {
            Region: Y,
            UseDualStack: W,
            UseFIPS: W,
            Endpoint: Y
        },
        rules: [
            {
                conditions: [
                    {
                        [d]: B,
                        [u]: [
                            url
                        ]
                    }
                ],
                rules: [
                    {
                        conditions: Z,
                        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                        type: x
                    },
                    {
                        conditions: ee,
                        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                        type: x
                    },
                    {
                        endpoint: {
                            url,
                            properties: p,
                            headers: p
                        },
                        type: m
                    }
                ],
                type: g
            },
            {
                conditions: [
                    {
                        [d]: B,
                        [u]: te
                    }
                ],
                rules: [
                    {
                        conditions: [
                            {
                                [d]: "aws.partition",
                                [u]: te,
                                assign
                            }
                        ],
                        rules: [
                            {
                                conditions: [
                                    oe,
                                    ne
                                ],
                                rules: [
                                    {
                                        conditions: [
                                            {
                                                [d]: P,
                                                [u]: [
                                                    V,
                                                    X
                                                ]
                                            },
                                            Q
                                        ],
                                        rules: [
                                            {
                                                endpoint: {
                                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                    properties: p,
                                                    headers: p
                                                },
                                                type: m
                                            }
                                        ],
                                        type: g
                                    },
                                    {
                                        error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                        type: x
                                    }
                                ],
                                type: g
                            },
                            {
                                conditions: Z,
                                rules: [
                                    {
                                        conditions: [
                                            {
                                                [d]: P,
                                                [u]: [
                                                    X,
                                                    V
                                                ]
                                            }
                                        ],
                                        rules: [
                                            {
                                                conditions: [
                                                    {
                                                        [d]: "stringEquals",
                                                        [u]: [
                                                            {
                                                                [d]: N,
                                                                [u]: [
                                                                    ie,
                                                                    "name"
                                                                ]
                                                            },
                                                            "aws-us-gov"
                                                        ]
                                                    }
                                                ],
                                                endpoint: {
                                                    url: "https://oidc.{Region}.amazonaws.com",
                                                    properties: p,
                                                    headers: p
                                                },
                                                type: m
                                            },
                                            {
                                                endpoint: {
                                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                    properties: p,
                                                    headers: p
                                                },
                                                type: m
                                            }
                                        ],
                                        type: g
                                    },
                                    {
                                        error: "FIPS is enabled but this partition does not support FIPS",
                                        type: x
                                    }
                                ],
                                type: g
                            },
                            {
                                conditions: ee,
                                rules: [
                                    {
                                        conditions: [
                                            Q
                                        ],
                                        rules: [
                                            {
                                                endpoint: {
                                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                    properties: p,
                                                    headers: p
                                                },
                                                type: m
                                            }
                                        ],
                                        type: g
                                    },
                                    {
                                        error: "DualStack is enabled but this partition does not support DualStack",
                                        type: x
                                    }
                                ],
                                type: g
                            },
                            {
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: p,
                                    headers: p
                                },
                                type: m
                            }
                        ],
                        type: g
                    }
                ],
                type: g
            },
            {
                error: "Invalid Configuration: Missing Region",
                type: x
            }
        ]
    };
    se.ruleSet = _t;
});
const he = C(function(ue) {
    Object.defineProperty(ue, "__esModule", {
        value: true
    });
    ue.defaultEndpointResolver = undefined;
    const pe = t7();
    const y = uY();
    const de = ae();
    const Et = new y.EndpointCache({
        size: 50,
        params: [
            "Endpoint",
            "Region",
            "UseDualStack",
            "UseFIPS"
        ]
    });
    const gt = (endpointParams, t = {})=>Et.get(endpointParams, ()=>y.resolveEndpoint(de.ruleSet, {
                endpointParams,
                logger: t.logger
            }));
    ue.defaultEndpointResolver = gt;
    y.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});
const ye = C(function(me) {
    Object.defineProperty(me, "__esModule", {
        value: true
    });
    me.getRuntimeConfig = undefined;
    const _e = DT();
    const Ee = voe();
    const ge = xb();
    const Se = Rd();
    const ve = GW();
    const A = $R();
    const D = Qk();
    const fe = b();
    const xe = he();
    const St = (e)=>({
            apiVersion: "2019-06-10",
            base64Decoder: e?.base64Decoder ?? A.fromBase64,
            base64Encoder: e?.base64Encoder ?? A.toBase64,
            disableHostPrefix: e?.disableHostPrefix ?? false,
            endpointProvider: e?.endpointProvider ?? xe.defaultEndpointResolver,
            extensions: e?.extensions ?? [],
            httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? fe.defaultSSOOIDCHttpAuthSchemeProvider,
            httpAuthSchemes: e?.httpAuthSchemes ?? [
                {
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4"),
                    signer: new _e.AwsSdkSigV4Signer
                },
                {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (t)=>t.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                    signer: new ge.NoAuthSigner
                }
            ],
            logger: e?.logger ?? new Se.NoOpLogger,
            protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({
                defaultNamespace: "com.amazonaws.ssooidc"
            }),
            serviceId: e?.serviceId ?? "SSO OIDC",
            urlParser: e?.urlParser ?? ve.parseUrl,
            utf8Decoder: e?.utf8Decoder ?? D.fromUtf8,
            utf8Encoder: e?.utf8Encoder ?? D.toUtf8
        });
    me.getRuntimeConfig = St;
});
const be = C(function(qe) {
    Object.defineProperty(qe, "__esModule", {
        value: true
    });
    qe.getRuntimeConfig = undefined;
    const Ce = u$e();
    const vt = Ce.__importDefault(DQt());
    const R = DT();
    const T = boe();
    const S = Fk();
    const Pe = Soe();
    const w = aF();
    const s = nP();
    const q = kH();
    const Oe = woe();
    const Ae = r7();
    const De = ye();
    const Re = Rd();
    const Te = Eoe();
    const we = Rd();
    const ft = (e)=>{
        we.emitWarningIfUnsupportedVersion(process.version);
        let defaultsMode = Te.resolveDefaultsModeConfig(e);
        let n = ()=>defaultsMode().then(Re.loadConfigsForDefaultMode);
        let l = De.getRuntimeConfig(e);
        R.emitWarningIfUnsupportedVersion(process.version);
        let i = {
            profile: e?.profile,
            logger: l.logger
        };
        return {
            ...l,
            ...e,
            runtime: "node",
            defaultsMode,
            authSchemePreference: e?.authSchemePreference ?? s.loadConfig(R.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
            bodyLengthChecker: e?.bodyLengthChecker ?? Oe.calculateBodyLength,
            defaultUserAgentProvider: e?.defaultUserAgentProvider ?? T.createDefaultUserAgentProvider({
                serviceId: l.serviceId,
                clientVersion: vt.default.version
            }),
            maxAttempts: e?.maxAttempts ?? s.loadConfig(w.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
            region: e?.region ?? s.loadConfig(S.NODE_REGION_CONFIG_OPTIONS, {
                ...S.NODE_REGION_CONFIG_FILE_OPTIONS,
                ...i
            }),
            requestHandler: q.NodeHttpHandler.create(e?.requestHandler ?? n),
            retryMode: e?.retryMode ?? s.loadConfig({
                ...w.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async ()=>(await n()).retryMode || Ae.DEFAULT_RETRY_MODE
            }, e),
            sha256: e?.sha256 ?? Pe.Hash.bind(null, "sha256"),
            streamCollector: e?.streamCollector ?? q.streamCollector,
            useDualstackEndpoint: e?.useDualstackEndpoint ?? s.loadConfig(S.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
            useFipsEndpoint: e?.useFipsEndpoint ?? s.loadConfig(S.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
            userAgentAppId: e?.userAgentAppId ?? s.loadConfig(T.NODE_APP_ID_CONFIG_OPTIONS, i)
        };
    };
    qe.getRuntimeConfig = ft;
});
const Yr = C(function(j) {
    const Ue = goe();
    const xt = hoe();
    const mt = yoe();
    const Ne = n7();
    const It = Fk();
    const H = xb();
    const c = Zx();
    const yt = _oe();
    const Ge = KB();
    const He = aF();
    const v = Rd();
    const $e = b();
    const Ct = be();
    const Fe = o7();
    const Me = jm();
    const Pt = (e)=>Object.assign(e, {
            useDualstackEndpoint: e.useDualstackEndpoint ?? false,
            useFipsEndpoint: e.useFipsEndpoint ?? false,
            defaultSigningName: "sso-oauth"
        });
    const Ot = {
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
    const At = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials })=>({
            setHttpAuthScheme (i) {
                let O = httpAuthSchemes.findIndex((k)=>k.schemeId === i.schemeId);
                if (O === -1) {
                    httpAuthSchemes.push(i);
                } else {
                    httpAuthSchemes.splice(O, 1, i);
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
    const Dt = (e)=>({
            httpAuthSchemes: e.httpAuthSchemes(),
            httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
            credentials: e.credentials()
        });
    const Rt = (e, t)=>{
        let n = Object.assign(Fe.getAwsRegionExtensionConfiguration(e), v.getDefaultExtensionConfiguration(e), Me.getHttpHandlerExtensionConfiguration(e), At(e));
        t.forEach((l)=>l.configure(n));
        return Object.assign(e, Fe.resolveAwsRegionExtensionConfiguration(n), v.resolveDefaultRuntimeConfig(n), Me.resolveHttpHandlerRuntimeConfig(n), Dt(n));
    };
    class F extends v.Client {
        config;
        constructor(...[e]){
            let t = Ct.getRuntimeConfig(e || {});
            super(t);
            this.initConfig = t;
            let n = Pt(t);
            let l = Ne.resolveUserAgentConfig(n);
            let i = He.resolveRetryConfig(l);
            let O = It.resolveRegionConfig(i);
            let k = Ue.resolveHostHeaderConfig(O);
            let ot = Ge.resolveEndpointConfig(k);
            let nt = $e.resolveHttpAuthSchemeConfig(ot);
            let it = Rt(nt, e?.extensions || []);
            this.config = it;
            this.middlewareStack.use(c.getSchemaSerdePlugin(this.config));
            this.middlewareStack.use(Ne.getUserAgentPlugin(this.config));
            this.middlewareStack.use(He.getRetryPlugin(this.config));
            this.middlewareStack.use(yt.getContentLengthPlugin(this.config));
            this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config));
            this.middlewareStack.use(xt.getLoggerPlugin(this.config));
            this.middlewareStack.use(mt.getRecursionDetectionPlugin(this.config));
            this.middlewareStack.use(H.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
                httpAuthSchemeParametersProvider: $e.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (st)=>new H.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": st.credentials
                    })
            }));
            this.middlewareStack.use(H.getHttpSigningPlugin(this.config));
        }
        destroy() {
            super.destroy();
        }
    }
    const a = class e extends v.ServiceException {
        constructor(t){
            super(t);
            Object.setPrototypeOf(this, e.prototype);
        }
    };
    const je = class e extends a {
        name = "AccessDeniedException";
        $fault = "client";
        error;
        reason;
        error_description;
        constructor(t){
            super({
                name: "AccessDeniedException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.reason = t.reason;
            this.error_description = t.error_description;
        }
    };
    const ze = class e extends a {
        name = "AuthorizationPendingException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "AuthorizationPendingException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Ke = class e extends a {
        name = "ExpiredTokenException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "ExpiredTokenException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Le = class e extends a {
        name = "InternalServerException";
        $fault = "server";
        error;
        error_description;
        constructor(t){
            super({
                name: "InternalServerException",
                $fault: "server",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Ve = class e extends a {
        name = "InvalidClientException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "InvalidClientException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Be = class e extends a {
        name = "InvalidGrantException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "InvalidGrantException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Ye = class e extends a {
        name = "InvalidRequestException";
        $fault = "client";
        error;
        reason;
        error_description;
        constructor(t){
            super({
                name: "InvalidRequestException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.reason = t.reason;
            this.error_description = t.error_description;
        }
    };
    const We = class e extends a {
        name = "InvalidScopeException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "InvalidScopeException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Je = class e extends a {
        name = "SlowDownException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "SlowDownException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Xe = class e extends a {
        name = "UnauthorizedClientException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "UnauthorizedClientException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Qe = class e extends a {
        name = "UnsupportedGrantTypeException";
        $fault = "client";
        error;
        error_description;
        constructor(t){
            super({
                name: "UnsupportedGrantTypeException",
                $fault: "client",
                ...t
            });
            Object.setPrototypeOf(this, e.prototype);
            this.error = t.error;
            this.error_description = t.error_description;
        }
    };
    const Tt = "AccessDeniedException";
    const wt = "AuthorizationPendingException";
    const qt = "AccessToken";
    const kt = "ClientSecret";
    const bt = "CreateToken";
    const Ut = "CreateTokenRequest";
    const Nt = "CreateTokenResponse";
    const Ht = "CodeVerifier";
    const $t = "ExpiredTokenException";
    const Ft = "InvalidClientException";
    const Mt = "InvalidGrantException";
    const Gt = "InvalidRequestException";
    const jt = "InternalServerException";
    const zt = "InvalidScopeException";
    const Kt = "IdToken";
    const Lt = "RefreshToken";
    const Vt = "SlowDownException";
    const Bt = "UnauthorizedClientException";
    const Yt = "UnsupportedGrantTypeException";
    const Wt = "accessToken";
    const E = "client";
    const Jt = "clientId";
    const Xt = "clientSecret";
    const Qt = "codeVerifier";
    const Zt = "code";
    const er = "deviceCode";
    const o = "error";
    const tr = "expiresIn";
    const h = "error_description";
    const rr = "grantType";
    const or = "http";
    const _ = "httpError";
    const nr = "idToken";
    const Ze = "reason";
    const et = "refreshToken";
    const ir = "redirectUri";
    const sr = "scope";
    const cr = "server";
    const tt = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
    const ar = "tokenType";
    const r = "com.amazonaws.ssooidc";
    const pr = [
        0,
        r,
        qt,
        8,
        0
    ];
    const dr = [
        0,
        r,
        kt,
        8,
        0
    ];
    const ur = [
        0,
        r,
        Ht,
        8,
        0
    ];
    const lr = [
        0,
        r,
        Kt,
        8,
        0
    ];
    const rt = [
        0,
        r,
        Lt,
        8,
        0
    ];
    const hr = [
        -3,
        r,
        Tt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            Ze,
            h
        ],
        [
            0,
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(hr, je);
    const _r = [
        -3,
        r,
        wt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(_r, ze);
    const Er = [
        3,
        r,
        Ut,
        0,
        [
            Jt,
            Xt,
            rr,
            er,
            Zt,
            et,
            sr,
            ir,
            Qt
        ],
        [
            0,
            [
                ()=>dr,
                0
            ],
            0,
            0,
            0,
            [
                ()=>rt,
                0
            ],
            64,
            0,
            [
                ()=>ur,
                0
            ]
        ]
    ];
    const gr = [
        3,
        r,
        Nt,
        0,
        [
            Wt,
            ar,
            tr,
            et,
            nr
        ],
        [
            [
                ()=>pr,
                0
            ],
            0,
            1,
            [
                ()=>rt,
                0
            ],
            [
                ()=>lr,
                0
            ]
        ]
    ];
    const Sr = [
        -3,
        r,
        $t,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(Sr, Ke);
    const vr = [
        -3,
        r,
        jt,
        {
            [o]: cr,
            [_]: 500
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(vr, Le);
    const fr = [
        -3,
        r,
        Ft,
        {
            [o]: E,
            [_]: 401
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(fr, Ve);
    const xr = [
        -3,
        r,
        Mt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(xr, Be);
    const mr = [
        -3,
        r,
        Gt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            Ze,
            h
        ],
        [
            0,
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(mr, Ye);
    const Ir = [
        -3,
        r,
        zt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(Ir, We);
    const yr = [
        -3,
        r,
        Vt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(yr, Je);
    const Cr = [
        -3,
        r,
        Bt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(Cr, Xe);
    const Pr = [
        -3,
        r,
        Yt,
        {
            [o]: E,
            [_]: 400
        },
        [
            o,
            h
        ],
        [
            0,
            0
        ]
    ];
    c.TypeRegistry.for(r).registerError(Pr, Qe);
    const Or = [
        -3,
        tt,
        "SSOOIDCServiceException",
        0,
        [],
        []
    ];
    c.TypeRegistry.for(tt).registerError(Or, a);
    const Ar = [
        9,
        r,
        bt,
        {
            [or]: [
                "POST",
                "/token",
                200
            ]
        },
        ()=>Er,
        ()=>gr
    ];
    class M extends v.Command.classBuilder().ep(Ot).m(function(e, t, n, l) {
        return [
            Ge.getEndpointPlugin(n, e.getEndpointParameterInstructions())
        ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(Ar).build() {
    }
    const Dr = {
        CreateTokenCommand: M
    };
    class G extends F {
    }
    v.createAggregatedClient(Dr, G);
    const Rr = {
        KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
    };
    const Tr = {
        KMS_DISABLED_KEY: "KMS_DisabledException",
        KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
        KMS_INVALID_STATE: "KMS_InvalidStateException",
        KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
    };
    Object.defineProperty(j, "$Command", {
        enumerable: true,
        get: function() {
            return v.Command;
        }
    });
    Object.defineProperty(j, "__Client", {
        enumerable: true,
        get: function() {
            return v.Client;
        }
    });
    j.AccessDeniedException = je;
    j.AccessDeniedExceptionReason = Rr;
    j.AuthorizationPendingException = ze;
    j.CreateTokenCommand = M;
    j.ExpiredTokenException = Ke;
    j.InternalServerException = Le;
    j.InvalidClientException = Ve;
    j.InvalidGrantException = Be;
    j.InvalidRequestException = Ye;
    j.InvalidRequestExceptionReason = Tr;
    j.InvalidScopeException = We;
    j.SSOOIDC = G;
    j.SSOOIDCClient = F;
    j.SSOOIDCServiceException = a;
    j.SlowDownException = Je;
    j.UnauthorizedClientException = Xe;
    j.UnsupportedGrantTypeException = Qe;
});
export default Yr();
