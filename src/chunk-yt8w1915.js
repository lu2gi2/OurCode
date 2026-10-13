import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { Ode } from "/$bunfs/root/chunk-xn017ebj.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { goe, hoe, yoe, t7, DT, n7, _oe, KB, r7, aF, boe, Soe, woe, voe, Eoe, o7 } from "/$bunfs/root/chunk-67wg4vkc.js";
import "/$bunfs/root/chunk-2e6e7dc3.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Zx } from "/$bunfs/root/chunk-sw8e7v35.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qk, $R } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const P = Se(goe());
const We = Se(hoe());
const Oe = Se(yoe());
const v = Se(n7());
const Me = Se(Fk());
const h = Se(xb());
const He = Se(Zx());
const Fe = Se(_oe());
const Ne = Se(KB());
const D = Se(aF());
const Le = Se(Rd());
const z = Se(DT());
const x = Se(eP());
const httpAuthSchemeParametersProvider = async (e, t, o)=>({
        operation: x.getSmithyContext(t).operation,
        region: await x.normalizeProvider(e.region)() || (()=>{
            throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
function Ve(e) {
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
function K(e) {
    return {
        schemeId: "smithy.api#noAuth"
    };
}
const J = (e)=>{
    let t = [];
    switch(e.operation){
        case "AssumeRoleWithSAML":
            {
                t.push(K(e));
                break;
            }
        case "AssumeRoleWithWebIdentity":
            {
                t.push(K(e));
                break;
            }
        default:
            t.push(Ve(e));
    }
    return t;
};
const Be = (e)=>Object.assign(e, {
        stsClientCtor: STSClient
    });
const Q = (e)=>{
    let t = Be(e);
    let o = z.resolveAwsSdkSigV4Config(t);
    return Object.assign(o, {
        authSchemePreference: x.normalizeProvider(e.authSchemePreference ?? [])
    });
};
const V = (e)=>Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? false,
        useFipsEndpoint: e.useFipsEndpoint ?? false,
        useGlobalEndpoint: e.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
    });
const B = {
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
const Y = {
    name: "@aws-sdk/client-sts",
    description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
    version: "3.936.0",
    scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sts",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.936.0",
        "@aws-sdk/credential-provider-node": "3.936.0",
        "@aws-sdk/middleware-host-header": "3.936.0",
        "@aws-sdk/middleware-logger": "3.936.0",
        "@aws-sdk/middleware-recursion-detection": "3.936.0",
        "@aws-sdk/middleware-user-agent": "3.936.0",
        "@aws-sdk/region-config-resolver": "3.936.0",
        "@aws-sdk/types": "3.936.0",
        "@aws-sdk/util-endpoints": "3.936.0",
        "@aws-sdk/util-user-agent-browser": "3.936.0",
        "@aws-sdk/util-user-agent-node": "3.936.0",
        "@smithy/config-resolver": "^4.4.3",
        "@smithy/core": "^3.18.5",
        "@smithy/fetch-http-handler": "^5.3.6",
        "@smithy/hash-node": "^4.2.5",
        "@smithy/invalid-dependency": "^4.2.5",
        "@smithy/middleware-content-length": "^4.2.5",
        "@smithy/middleware-endpoint": "^4.3.12",
        "@smithy/middleware-retry": "^4.4.12",
        "@smithy/middleware-serde": "^4.2.6",
        "@smithy/middleware-stack": "^4.2.5",
        "@smithy/node-config-provider": "^4.3.5",
        "@smithy/node-http-handler": "^4.4.5",
        "@smithy/protocol-http": "^5.3.5",
        "@smithy/smithy-client": "^4.9.8",
        "@smithy/types": "^4.9.0",
        "@smithy/url-parser": "^4.2.5",
        "@smithy/util-base64": "^4.3.0",
        "@smithy/util-body-length-browser": "^4.2.0",
        "@smithy/util-body-length-node": "^4.2.1",
        "@smithy/util-defaults-mode-browser": "^4.3.11",
        "@smithy/util-defaults-mode-node": "^4.2.14",
        "@smithy/util-endpoints": "^3.2.5",
        "@smithy/util-middleware": "^4.2.5",
        "@smithy/util-retry": "^4.2.5",
        "@smithy/util-utf8": "^4.2.0",
        tslib: "^2.6.2"
    },
    devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
    },
    engines: {
        node: ">=18.0.0"
    },
    typesVersions: {
        "<4.0": {
            "dist-types/*": [
                "dist-types/ts3.4/*"
            ]
        }
    },
    files: [
        "dist-*/**"
    ],
    author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
    repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
    }
};
const _ = Se(DT());
const A = Se(boe());
const u = Se(Fk());
const ye = Se(xb());
const Te = Se(Soe());
const f = Se(aF());
const l = Se(nP());
const S = Se(kH());
const Re = Se(woe());
const Pe = Se(r7());
const Ee = Se(DT());
const xe = Se(voe());
const ge = Se(xb());
const Ie = Se(Rd());
const Ae = Se(GW());
const g = Se($R());
const I = Se(Qk());
const _e = Se(t7());
const m = Se(uY());
const X = {
    required: false,
    type: "string"
};
const U = {
    required: true,
    default: false,
    type: "boolean"
};
const url = {
    ref: "Endpoint"
};
const Z = {
    fn: "isSet",
    argv: [
        {
            ref: "Region"
        }
    ]
};
const n = {
    ref: "Region"
};
const ee = {
    fn: "aws.partition",
    argv: [
        n
    ],
    assign: "PartitionResult"
};
const ce = {
    ref: "UseFIPS"
};
const de = {
    ref: "UseDualStack"
};
const endpoint = {
    url: "https://sts.amazonaws.com",
    properties: {
        authSchemes: [
            {
                name: "sigv4",
                signingName: "sts",
                signingRegion: "us-east-1"
            }
        ]
    },
    headers: {}
};
const c = {};
const te = {
    conditions: [
        {
            fn: "stringEquals",
            argv: [
                n,
                "aws-global"
            ]
        }
    ],
    endpoint,
    type: "endpoint"
};
const pe = {
    fn: "booleanEquals",
    argv: [
        ce,
        true
    ]
};
const le = {
    fn: "booleanEquals",
    argv: [
        de,
        true
    ]
};
const oe = {
    fn: "getAttr",
    argv: [
        {
            ref: "PartitionResult"
        },
        "supportsFIPS"
    ]
};
const ue = {
    ref: "PartitionResult"
};
const ne = {
    fn: "booleanEquals",
    argv: [
        true,
        {
            fn: "getAttr",
            argv: [
                ue,
                "supportsDualStack"
            ]
        }
    ]
};
const se = [
    {
        fn: "isSet",
        argv: [
            url
        ]
    }
];
const re = [
    pe
];
const ie = [
    le
];
const Xe = {
    version: "1.0",
    parameters: {
        Region: X,
        UseDualStack: U,
        UseFIPS: U,
        Endpoint: X,
        UseGlobalEndpoint: U
    },
    rules: [
        {
            conditions: [
                {
                    fn: "booleanEquals",
                    argv: [
                        {
                            ref: "UseGlobalEndpoint"
                        },
                        true
                    ]
                },
                {
                    fn: "not",
                    argv: se
                },
                Z,
                ee,
                {
                    fn: "booleanEquals",
                    argv: [
                        ce,
                        false
                    ]
                },
                {
                    fn: "booleanEquals",
                    argv: [
                        de,
                        false
                    ]
                }
            ],
            rules: [
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "ap-northeast-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "ap-south-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "ap-southeast-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "ap-southeast-2"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                te,
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "ca-central-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "eu-central-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "eu-north-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "eu-west-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "eu-west-2"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "eu-west-3"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "sa-east-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "us-east-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "us-east-2"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "us-west-1"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    conditions: [
                        {
                            fn: "stringEquals",
                            argv: [
                                n,
                                "us-west-2"
                            ]
                        }
                    ],
                    endpoint,
                    type: "endpoint"
                },
                {
                    endpoint: {
                        url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                        properties: {
                            authSchemes: [
                                {
                                    name: "sigv4",
                                    signingName: "sts",
                                    signingRegion: "{Region}"
                                }
                            ]
                        },
                        headers: c
                    },
                    type: "endpoint"
                }
            ],
            type: "tree"
        },
        {
            conditions: se,
            rules: [
                {
                    conditions: re,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: "error"
                },
                {
                    conditions: ie,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: "error"
                },
                {
                    endpoint: {
                        url,
                        properties: c,
                        headers: c
                    },
                    type: "endpoint"
                }
            ],
            type: "tree"
        },
        {
            conditions: [
                Z
            ],
            rules: [
                {
                    conditions: [
                        ee
                    ],
                    rules: [
                        {
                            conditions: [
                                pe,
                                le
                            ],
                            rules: [
                                {
                                    conditions: [
                                        {
                                            fn: "booleanEquals",
                                            argv: [
                                                true,
                                                oe
                                            ]
                                        },
                                        ne
                                    ],
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: c,
                                                headers: c
                                            },
                                            type: "endpoint"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                    type: "error"
                                }
                            ],
                            type: "tree"
                        },
                        {
                            conditions: re,
                            rules: [
                                {
                                    conditions: [
                                        {
                                            fn: "booleanEquals",
                                            argv: [
                                                oe,
                                                true
                                            ]
                                        }
                                    ],
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "stringEquals",
                                                    argv: [
                                                        {
                                                            fn: "getAttr",
                                                            argv: [
                                                                ue,
                                                                "name"
                                                            ]
                                                        },
                                                        "aws-us-gov"
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://sts.{Region}.amazonaws.com",
                                                properties: c,
                                                headers: c
                                            },
                                            type: "endpoint"
                                        },
                                        {
                                            endpoint: {
                                                url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: c,
                                                headers: c
                                            },
                                            type: "endpoint"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    error: "FIPS is enabled but this partition does not support FIPS",
                                    type: "error"
                                }
                            ],
                            type: "tree"
                        },
                        {
                            conditions: ie,
                            rules: [
                                {
                                    conditions: [
                                        ne
                                    ],
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: c,
                                                headers: c
                                            },
                                            type: "endpoint"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    error: "DualStack is enabled but this partition does not support DualStack",
                                    type: "error"
                                }
                            ],
                            type: "tree"
                        },
                        te,
                        {
                            endpoint: {
                                url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                                properties: c,
                                headers: c
                            },
                            type: "endpoint"
                        }
                    ],
                    type: "tree"
                }
            ],
            type: "tree"
        },
        {
            error: "Invalid Configuration: Missing Region",
            type: "error"
        }
    ]
};
const me = Xe;
const Ze = new m.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS",
        "UseGlobalEndpoint"
    ]
});
const he = (endpointParams, t = {})=>Ze.get(endpointParams, ()=>m.resolveEndpoint(me, {
            endpointParams,
            logger: t.logger
        }));
m.customEndpointFunctions.aws = _e.awsEndpointFunctions;
const fe = (e)=>({
        apiVersion: "2011-06-15",
        base64Decoder: e?.base64Decoder ?? g.fromBase64,
        base64Encoder: e?.base64Encoder ?? g.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? false,
        endpointProvider: e?.endpointProvider ?? he,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? J,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4"),
                signer: new Ee.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (t)=>t.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new ge.NoAuthSigner
            }
        ],
        logger: e?.logger ?? new Ie.NoOpLogger,
        protocol: e?.protocol ?? new xe.AwsQueryProtocol({
            defaultNamespace: "com.amazonaws.sts",
            xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
            version: "2011-06-15"
        }),
        serviceId: e?.serviceId ?? "STS",
        urlParser: e?.urlParser ?? Ae.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? I.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? I.toUtf8
    });
const ve = Se(Rd());
const De = Se(Eoe());
const Ce = Se(Rd());
const Ge = (e)=>{
    Ce.emitWarningIfUnsupportedVersion(process.version);
    let defaultsMode = De.resolveDefaultsModeConfig(e);
    let o = ()=>defaultsMode().then(ve.loadConfigsForDefaultMode);
    let d = fe(e);
    _.emitWarningIfUnsupportedVersion(process.version);
    let i = {
        profile: e?.profile,
        logger: d.logger
    };
    return {
        ...d,
        ...e,
        runtime: "node",
        defaultsMode,
        authSchemePreference: e?.authSchemePreference ?? l.loadConfig(_.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
        bodyLengthChecker: e?.bodyLengthChecker ?? Re.calculateBodyLength,
        credentialDefaultProvider: e?.credentialDefaultProvider ?? Ode,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? A.createDefaultUserAgentProvider({
            serviceId: d.serviceId,
            clientVersion: Y.version
        }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (p)=>p.getIdentityProvider("aws.auth#sigv4") || (async (E)=>await Ode(E?.__config || {})()),
                signer: new _.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (p)=>p.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new ye.NoAuthSigner
            }
        ],
        maxAttempts: e?.maxAttempts ?? l.loadConfig(f.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? l.loadConfig(u.NODE_REGION_CONFIG_OPTIONS, {
            ...u.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...i
        }),
        requestHandler: S.NodeHttpHandler.create(e?.requestHandler ?? o),
        retryMode: e?.retryMode ?? l.loadConfig({
            ...f.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await o()).retryMode || Pe.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? Te.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? S.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? l.loadConfig(u.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
        useFipsEndpoint: e?.useFipsEndpoint ?? l.loadConfig(u.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
        userAgentAppId: e?.userAgentAppId ?? l.loadConfig(A.NODE_APP_ID_CONFIG_OPTIONS, i)
    };
};
const y = Se(o7());
const T = Se(jm());
const R = Se(Rd());
const be = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials })=>({
        setHttpAuthScheme (i) {
            let p = httpAuthSchemes.findIndex((E)=>E.schemeId === i.schemeId);
            if (p === -1) {
                httpAuthSchemes.push(i);
            } else {
                httpAuthSchemes.splice(p, 1, i);
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
const ke = (e)=>({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials()
    });
const we = (e, t)=>{
    let o = Object.assign(y.getAwsRegionExtensionConfiguration(e), R.getDefaultExtensionConfiguration(e), T.getHttpHandlerExtensionConfiguration(e), be(e));
    t.forEach((d)=>d.configure(o));
    return Object.assign(e, y.resolveAwsRegionExtensionConfiguration(o), R.resolveDefaultRuntimeConfig(o), T.resolveHttpHandlerRuntimeConfig(o), ke(o));
};
export class STSClient extends Le.Client {
    config;
    constructor(...[e]){
        let t = Ge(e || {});
        super(t);
        this.initConfig = t;
        let o = V(t);
        let d = v.resolveUserAgentConfig(o);
        let i = D.resolveRetryConfig(d);
        let p = Me.resolveRegionConfig(i);
        let E = P.resolveHostHeaderConfig(p);
        let qe = Ne.resolveEndpointConfig(E);
        let $e = Q(qe);
        let Je = we($e, e?.extensions || []);
        this.config = Je;
        this.middlewareStack.use(He.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(v.getUserAgentPlugin(this.config));
        this.middlewareStack.use(D.getRetryPlugin(this.config));
        this.middlewareStack.use(Fe.getContentLengthPlugin(this.config));
        this.middlewareStack.use(P.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(We.getLoggerPlugin(this.config));
        this.middlewareStack.use(Oe.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(h.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (Qe)=>new h.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": Qe.credentials
                })
        }));
        this.middlewareStack.use(h.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
const a = Se(Zx());
const je = Se(Rd());
class s extends je.ServiceException {
    constructor(e){
        super(e);
        Object.setPrototypeOf(this, s.prototype);
    }
}
class C extends s {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(e){
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, C.prototype);
    }
}
class G extends s {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(e){
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, G.prototype);
    }
}
class b extends s {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(e){
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, b.prototype);
    }
}
class k extends s {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(e){
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, k.prototype);
    }
}
class w extends s {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(e){
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, w.prototype);
    }
}
class W extends s {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(e){
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, W.prototype);
    }
}
class O extends s {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    constructor(e){
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, O.prototype);
    }
}
class M extends s {
    name = "InvalidAuthorizationMessageException";
    $fault = "client";
    constructor(e){
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, M.prototype);
    }
}
class H extends s {
    name = "ExpiredTradeInTokenException";
    $fault = "client";
    constructor(e){
        super({
            name: "ExpiredTradeInTokenException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, H.prototype);
    }
}
class F extends s {
    name = "JWTPayloadSizeExceededException";
    $fault = "client";
    constructor(e){
        super({
            name: "JWTPayloadSizeExceededException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, F.prototype);
    }
}
class N extends s {
    name = "OutboundWebIdentityFederationDisabledException";
    $fault = "client";
    constructor(e){
        super({
            name: "OutboundWebIdentityFederationDisabledException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, N.prototype);
    }
}
class L extends s {
    name = "SessionDurationEscalationException";
    $fault = "client";
    constructor(e){
        super({
            name: "SessionDurationEscalationException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, L.prototype);
    }
}
const et = [
    -3,
    "com.amazonaws.sts",
    "ExpiredTokenException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "ExpiredTokenException",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(et, C);
const tt = [
    -3,
    "com.amazonaws.sts",
    "ExpiredTradeInTokenException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "ExpiredTradeInTokenException",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(tt, H);
const ot = [
    3,
    "com.amazonaws.sts",
    "GetCallerIdentityRequest",
    0,
    [],
    []
];
const nt = [
    3,
    "com.amazonaws.sts",
    "GetCallerIdentityResponse",
    0,
    [
        "UserId",
        "Account",
        "Arn"
    ],
    [
        0,
        0,
        0
    ]
];
const st = [
    -3,
    "com.amazonaws.sts",
    "IDPCommunicationErrorException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "IDPCommunicationError",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(st, O);
const rt = [
    -3,
    "com.amazonaws.sts",
    "IDPRejectedClaimException",
    {
        error: "client",
        httpError: 403,
        awsQueryError: [
            "IDPRejectedClaim",
            403
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(rt, w);
const it = [
    -3,
    "com.amazonaws.sts",
    "InvalidAuthorizationMessageException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "InvalidAuthorizationMessageException",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(it, M);
const at = [
    -3,
    "com.amazonaws.sts",
    "InvalidIdentityTokenException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "InvalidIdentityToken",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(at, W);
const ct = [
    -3,
    "com.amazonaws.sts",
    "JWTPayloadSizeExceededException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "JWTPayloadSizeExceededException",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(ct, F);
const dt = [
    -3,
    "com.amazonaws.sts",
    "MalformedPolicyDocumentException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "MalformedPolicyDocument",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(dt, G);
const pt = [
    -3,
    "com.amazonaws.sts",
    "OutboundWebIdentityFederationDisabledException",
    {
        error: "client",
        httpError: 403,
        awsQueryError: [
            "OutboundWebIdentityFederationDisabledException",
            403
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(pt, N);
const lt = [
    -3,
    "com.amazonaws.sts",
    "PackedPolicyTooLargeException",
    {
        error: "client",
        httpError: 400,
        awsQueryError: [
            "PackedPolicyTooLarge",
            400
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(lt, b);
const ut = [
    -3,
    "com.amazonaws.sts",
    "RegionDisabledException",
    {
        error: "client",
        httpError: 403,
        awsQueryError: [
            "RegionDisabledException",
            403
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(ut, k);
const mt = [
    -3,
    "com.amazonaws.sts",
    "SessionDurationEscalationException",
    {
        error: "client",
        httpError: 403,
        awsQueryError: [
            "SessionDurationEscalationException",
            403
        ]
    },
    [
        "message"
    ],
    [
        0
    ]
];
a.TypeRegistry.for("com.amazonaws.sts").registerError(mt, L);
const _t = [
    -3,
    "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    "STSServiceException",
    0,
    [],
    []
];
a.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.sts").registerError(_t, s);
const Ue = [
    9,
    "com.amazonaws.sts",
    "GetCallerIdentity",
    0,
    ()=>ot,
    ()=>nt
];
const Ke = Se(KB());
const ze = Se(Rd());
export class GetCallerIdentityCommand extends ze.Command.classBuilder().ep(B).m(function(e, t, o, d) {
    return [
        Ke.getEndpointPlugin(o, e.getEndpointParameterInstructions())
    ];
}).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").sc(Ue).build() {
}
