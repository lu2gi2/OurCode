import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { Ode } from "/$bunfs/root/chunk-xn017ebj.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { uFn, pFn } from "/$bunfs/root/chunk-4p0wkc4p.js";
import "/$bunfs/root/chunk-4p8pf317.js";
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
const D = Se(goe());
const xe = Se(hoe());
const Ee = Se(yoe());
const S = Se(n7());
const ye = Se(Fk());
const m = Se(xb());
const De = Se(Zx());
const Ie = Se(_oe());
const Ge = Se(KB());
const I = Se(aF());
const he = Se(Rd());
const W = Se(DT());
const d = Se(xb());
const C = Se(eP());
const httpAuthSchemeParametersProvider = async (e, o, t)=>({
        operation: C.getSmithyContext(o).operation,
        region: await C.normalizeProvider(e.region)() || (()=>{
            throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
function we(e) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "bedrock",
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
function Oe(e) {
    return {
        schemeId: "smithy.api#httpBearerAuth",
        propertiesExtractor: ({ profile, filepath, configFilepath, ignoreCache }, n)=>({
                identityProperties: {
                    profile,
                    filepath,
                    configFilepath,
                    ignoreCache
                }
            })
    };
}
const w = (e)=>{
    let o = [];
    switch(e.operation){
        default:
            o.push(we(e));
            o.push(Oe(e));
    }
    return o;
};
const O = (e)=>{
    let token = d.memoizeIdentityProvider(e.token, d.isIdentityExpired, d.doesIdentityRequireRefresh);
    let t = W.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, {
        authSchemePreference: C.normalizeProvider(e.authSchemePreference ?? []),
        token
    });
};
const j = (e)=>Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? false,
        useFipsEndpoint: e.useFipsEndpoint ?? false,
        defaultSigningName: "bedrock"
    });
const M = {
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
const Q = {
    name: "@aws-sdk/client-bedrock",
    description: "AWS SDK for JavaScript Bedrock Client for Node.js, Browser and React Native",
    version: "3.936.0",
    scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-bedrock",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock"
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
        "@aws-sdk/token-providers": "3.936.0",
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock",
    repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-bedrock"
    }
};
const R = Se(DT());
const v = Se(boe());
const l = Se(Fk());
const pe = Se(xb());
const Re = Se(Soe());
const T = Se(aF());
const c = Se(nP());
const f = Se(kH());
const me = Se(woe());
const Ce = Se(r7());
const ie = Se(DT());
const _e = Se(voe());
const ce = Se(xb());
const le = Se(Rd());
const ue = Se(GW());
const g = Se($R());
const P = Se(Qk());
const re = Se(t7());
const p = Se(uY());
const K = {
    required: false,
    type: "string"
};
const H = {
    required: true,
    default: false,
    type: "boolean"
};
const url = {
    ref: "Endpoint"
};
const te = {
    fn: "booleanEquals",
    argv: [
        {
            ref: "UseFIPS"
        },
        true
    ]
};
const ne = {
    fn: "booleanEquals",
    argv: [
        {
            ref: "UseDualStack"
        },
        true
    ]
};
const _ = {};
const Y = {
    fn: "getAttr",
    argv: [
        {
            ref: "PartitionResult"
        },
        "supportsFIPS"
    ]
};
const X = {
    fn: "booleanEquals",
    argv: [
        true,
        {
            fn: "getAttr",
            argv: [
                {
                    ref: "PartitionResult"
                },
                "supportsDualStack"
            ]
        }
    ]
};
const Z = [
    te
];
const ee = [
    ne
];
const argv = [
    {
        ref: "Region"
    }
];
const Qe = {
    version: "1.0",
    parameters: {
        Region: K,
        UseDualStack: H,
        UseFIPS: H,
        Endpoint: K
    },
    rules: [
        {
            conditions: [
                {
                    fn: "isSet",
                    argv: [
                        url
                    ]
                }
            ],
            rules: [
                {
                    conditions: Z,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: "error"
                },
                {
                    rules: [
                        {
                            conditions: ee,
                            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                            type: "error"
                        },
                        {
                            endpoint: {
                                url,
                                properties: _,
                                headers: _
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
            rules: [
                {
                    conditions: [
                        {
                            fn: "isSet",
                            argv
                        }
                    ],
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "aws.partition",
                                    argv,
                                    assign: "PartitionResult"
                                }
                            ],
                            rules: [
                                {
                                    conditions: [
                                        te,
                                        ne
                                    ],
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "booleanEquals",
                                                    argv: [
                                                        true,
                                                        Y
                                                    ]
                                                },
                                                X
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                                properties: _,
                                                                headers: _
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
                                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    conditions: Z,
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "booleanEquals",
                                                    argv: [
                                                        Y,
                                                        true
                                                    ]
                                                }
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                                properties: _,
                                                                headers: _
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
                                            error: "FIPS is enabled but this partition does not support FIPS",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    conditions: ee,
                                    rules: [
                                        {
                                            conditions: [
                                                X
                                            ],
                                            rules: [
                                                {
                                                    rules: [
                                                        {
                                                            endpoint: {
                                                                url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                                properties: _,
                                                                headers: _
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
                                            error: "DualStack is enabled but this partition does not support DualStack",
                                            type: "error"
                                        }
                                    ],
                                    type: "tree"
                                },
                                {
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: _,
                                                headers: _
                                            },
                                            type: "endpoint"
                                        }
                                    ],
                                    type: "tree"
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
            ],
            type: "tree"
        }
    ]
};
const se = Qe;
const Ke = new p.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
const ae = (endpointParams, o = {})=>Ke.get(endpointParams, ()=>p.resolveEndpoint(se, {
            endpointParams,
            logger: o.logger
        }));
p.customEndpointFunctions.aws = re.awsEndpointFunctions;
const de = (e)=>({
        apiVersion: "2023-04-20",
        base64Decoder: e?.base64Decoder ?? g.fromBase64,
        base64Encoder: e?.base64Encoder ?? g.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? false,
        endpointProvider: e?.endpointProvider ?? ae,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? w,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (o)=>o.getIdentityProvider("aws.auth#sigv4"),
                signer: new ie.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#httpBearerAuth",
                identityProvider: (o)=>o.getIdentityProvider("smithy.api#httpBearerAuth"),
                signer: new ce.HttpBearerAuthSigner
            }
        ],
        logger: e?.logger ?? new le.NoOpLogger,
        protocol: e?.protocol ?? new _e.AwsRestJsonProtocol({
            defaultNamespace: "com.amazonaws.bedrock"
        }),
        serviceId: e?.serviceId ?? "Bedrock",
        urlParser: e?.urlParser ?? ue.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? P.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? P.toUtf8
    });
const Ae = Se(Rd());
const Me = Se(Eoe());
const ge = Se(Rd());
const Pe = (e)=>{
    ge.emitWarningIfUnsupportedVersion(process.version);
    let defaultsMode = Me.resolveDefaultsModeConfig(e);
    let t = ()=>defaultsMode().then(Ae.loadConfigsForDefaultMode);
    let r = de(e);
    R.emitWarningIfUnsupportedVersion(process.version);
    let a = {
        profile: e?.profile,
        logger: r.logger,
        signingName: "bedrock"
    };
    return {
        ...r,
        ...e,
        runtime: "node",
        defaultsMode,
        authSchemePreference: e?.authSchemePreference ?? c.loadConfig(R.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, a),
        bodyLengthChecker: e?.bodyLengthChecker ?? me.calculateBodyLength,
        credentialDefaultProvider: e?.credentialDefaultProvider ?? Ode,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? v.createDefaultUserAgentProvider({
            serviceId: r.serviceId,
            clientVersion: Q.version
        }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (n)=>n.getIdentityProvider("aws.auth#sigv4"),
                signer: new R.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#httpBearerAuth",
                identityProvider: (n)=>n.getIdentityProvider("smithy.api#httpBearerAuth") || (async (u)=>{
                        try {
                            return await uFn({
                                signingName: "bedrock"
                            })();
                        } catch (A) {
                            return await pFn(u)(u);
                        }
                    }),
                signer: new pe.HttpBearerAuthSigner
            }
        ],
        maxAttempts: e?.maxAttempts ?? c.loadConfig(T.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? c.loadConfig(l.NODE_REGION_CONFIG_OPTIONS, {
            ...l.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...a
        }),
        requestHandler: f.NodeHttpHandler.create(e?.requestHandler ?? t),
        retryMode: e?.retryMode ?? c.loadConfig({
            ...T.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await t()).retryMode || Ce.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? Re.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? f.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? c.loadConfig(l.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, a),
        useFipsEndpoint: e?.useFipsEndpoint ?? c.loadConfig(l.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, a),
        userAgentAppId: e?.userAgentAppId ?? c.loadConfig(v.NODE_APP_ID_CONFIG_OPTIONS, a)
    };
};
const x = Se(o7());
const E = Se(jm());
const y = Se(Rd());
const ve = ({ httpAuthSchemes, httpAuthSchemeProvider, credentials, token })=>({
        setHttpAuthScheme (n) {
            let u = httpAuthSchemes.findIndex((A)=>A.schemeId === n.schemeId);
            if (u === -1) {
                httpAuthSchemes.push(n);
            } else {
                httpAuthSchemes.splice(u, 1, n);
            }
        },
        httpAuthSchemes () {
            return httpAuthSchemes;
        },
        setHttpAuthSchemeProvider (n) {
            httpAuthSchemeProvider = n;
        },
        httpAuthSchemeProvider () {
            return httpAuthSchemeProvider;
        },
        setCredentials (n) {
            credentials = n;
        },
        credentials () {
            return credentials;
        },
        setToken (n) {
            token = n;
        },
        token () {
            return token;
        }
    });
const Te = (e)=>({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
        token: e.token()
    });
const fe = (e, o)=>{
    let t = Object.assign(x.getAwsRegionExtensionConfiguration(e), y.getDefaultExtensionConfiguration(e), E.getHttpHandlerExtensionConfiguration(e), ve(e));
    o.forEach((r)=>r.configure(t));
    return Object.assign(e, x.resolveAwsRegionExtensionConfiguration(t), y.resolveDefaultRuntimeConfig(t), E.resolveHttpHandlerRuntimeConfig(t), Te(t));
};
export class BedrockClient extends he.Client {
    config;
    constructor(...[e]){
        let o = Pe(e || {});
        super(o);
        this.initConfig = o;
        let t = j(o);
        let r = S.resolveUserAgentConfig(t);
        let a = I.resolveRetryConfig(r);
        let n = ye.resolveRegionConfig(a);
        let u = D.resolveHostHeaderConfig(n);
        let A = Ge.resolveEndpointConfig(u);
        let We = O(A);
        let Ue = fe(We, e?.extensions || []);
        this.config = Ue;
        this.middlewareStack.use(De.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(S.getUserAgentPlugin(this.config));
        this.middlewareStack.use(I.getRetryPlugin(this.config));
        this.middlewareStack.use(Ie.getContentLengthPlugin(this.config));
        this.middlewareStack.use(D.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(xe.getLoggerPlugin(this.config));
        this.middlewareStack.use(Ee.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(m.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (q)=>new m.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": q.credentials,
                    "smithy.api#httpBearerAuth": q.token
                })
        }));
        this.middlewareStack.use(m.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
const i = Se(Zx());
const Le = Se(Rd());
class s extends Le.ServiceException {
    constructor(e){
        super(e);
        Object.setPrototypeOf(this, s.prototype);
    }
}
class G extends s {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(e){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, G.prototype);
    }
}
class h extends s {
    name = "InternalServerException";
    $fault = "server";
    constructor(e){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...e
        });
        Object.setPrototypeOf(this, h.prototype);
    }
}
class L extends s {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e){
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, L.prototype);
    }
}
class b extends s {
    name = "ThrottlingException";
    $fault = "client";
    constructor(e){
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, b.prototype);
    }
}
class k extends s {
    name = "ValidationException";
    $fault = "client";
    constructor(e){
        super({
            name: "ValidationException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, k.prototype);
    }
}
class F extends s {
    name = "ConflictException";
    $fault = "client";
    constructor(e){
        super({
            name: "ConflictException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, F.prototype);
    }
}
class B extends s {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(e){
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, B.prototype);
    }
}
class J extends s {
    name = "TooManyTagsException";
    $fault = "client";
    resourceName;
    constructor(e){
        super({
            name: "TooManyTagsException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, J.prototype);
        this.resourceName = e.resourceName;
    }
}
class N extends s {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(e){
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...e
        });
        Object.setPrototypeOf(this, N.prototype);
    }
}
class V extends s {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(e){
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...e
        });
        Object.setPrototypeOf(this, V.prototype);
    }
}
const be = [
    0,
    "com.amazonaws.bedrock",
    "InferenceProfileDescription",
    8,
    0
];
const ze = [
    -3,
    "com.amazonaws.bedrock",
    "AccessDeniedException",
    {
        error: "client",
        httpError: 403
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ze, G);
const $e = [
    -3,
    "com.amazonaws.bedrock",
    "ConflictException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError($e, F);
const Ye = [
    3,
    "com.amazonaws.bedrock",
    "GetInferenceProfileRequest",
    0,
    [
        "inferenceProfileIdentifier"
    ],
    [
        [
            0,
            1
        ]
    ]
];
const Xe = [
    3,
    "com.amazonaws.bedrock",
    "GetInferenceProfileResponse",
    0,
    [
        "inferenceProfileName",
        "description",
        "createdAt",
        "updatedAt",
        "inferenceProfileArn",
        "models",
        "inferenceProfileId",
        "status",
        "type"
    ],
    [
        0,
        [
            ()=>be,
            0
        ],
        5,
        5,
        0,
        ()=>ke,
        0,
        0,
        0
    ]
];
const Ze = [
    3,
    "com.amazonaws.bedrock",
    "InferenceProfileModel",
    0,
    [
        "modelArn"
    ],
    [
        0
    ]
];
const eo = [
    3,
    "com.amazonaws.bedrock",
    "InferenceProfileSummary",
    0,
    [
        "inferenceProfileName",
        "description",
        "createdAt",
        "updatedAt",
        "inferenceProfileArn",
        "models",
        "inferenceProfileId",
        "status",
        "type"
    ],
    [
        0,
        [
            ()=>be,
            0
        ],
        5,
        5,
        0,
        ()=>ke,
        0,
        0,
        0
    ]
];
const oo = [
    -3,
    "com.amazonaws.bedrock",
    "InternalServerException",
    {
        error: "server",
        httpError: 500
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(oo, h);
const to = [
    3,
    "com.amazonaws.bedrock",
    "ListInferenceProfilesRequest",
    0,
    [
        "maxResults",
        "nextToken",
        "typeEquals"
    ],
    [
        [
            1,
            {
                httpQuery: "maxResults"
            }
        ],
        [
            0,
            {
                httpQuery: "nextToken"
            }
        ],
        [
            0,
            {
                httpQuery: "type"
            }
        ]
    ]
];
const no = [
    3,
    "com.amazonaws.bedrock",
    "ListInferenceProfilesResponse",
    0,
    [
        "inferenceProfileSummaries",
        "nextToken"
    ],
    [
        [
            ()=>po,
            0
        ],
        0
    ]
];
const so = [
    -3,
    "com.amazonaws.bedrock",
    "ResourceInUseException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(so, N);
const ro = [
    -3,
    "com.amazonaws.bedrock",
    "ResourceNotFoundException",
    {
        error: "client",
        httpError: 404
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ro, L);
const ao = [
    -3,
    "com.amazonaws.bedrock",
    "ServiceQuotaExceededException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ao, B);
const io = [
    -3,
    "com.amazonaws.bedrock",
    "ServiceUnavailableException",
    {
        error: "server",
        httpError: 503
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(io, V);
const _o = [
    -3,
    "com.amazonaws.bedrock",
    "ThrottlingException",
    {
        error: "client",
        httpError: 429
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(_o, b);
const co = [
    -3,
    "com.amazonaws.bedrock",
    "TooManyTagsException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message",
        "resourceName"
    ],
    [
        0,
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(co, J);
const lo = [
    -3,
    "com.amazonaws.bedrock",
    "ValidationException",
    {
        error: "client",
        httpError: 400
    },
    [
        "message"
    ],
    [
        0
    ]
];
i.TypeRegistry.for("com.amazonaws.bedrock").registerError(lo, k);
const uo = [
    -3,
    "smithy.ts.sdk.synthetic.com.amazonaws.bedrock",
    "BedrockServiceException",
    0,
    [],
    []
];
i.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrock").registerError(uo, s);
var ke = [
    1,
    "com.amazonaws.bedrock",
    "InferenceProfileModels",
    0,
    ()=>Ze
];
var po = [
    1,
    "com.amazonaws.bedrock",
    "InferenceProfileSummaries",
    0,
    [
        ()=>eo,
        0
    ]
];
const Fe = [
    9,
    "com.amazonaws.bedrock",
    "GetInferenceProfile",
    {
        http: [
            "GET",
            "/inference-profiles/{inferenceProfileIdentifier}",
            200
        ]
    },
    ()=>Ye,
    ()=>Xe
];
const Be = [
    9,
    "com.amazonaws.bedrock",
    "ListInferenceProfiles",
    {
        http: [
            "GET",
            "/inference-profiles",
            200
        ]
    },
    ()=>to,
    ()=>no
];
const Je = Se(KB());
const Ne = Se(Rd());
export class GetInferenceProfileCommand extends Ne.Command.classBuilder().ep(M).m(function(e, o, t, r) {
    return [
        Je.getEndpointPlugin(t, e.getEndpointParameterInstructions())
    ];
}).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(Fe).build() {
}
const Ve = Se(KB());
const qe = Se(Rd());
export class ListInferenceProfilesCommand extends qe.Command.classBuilder().ep(M).m(function(e, o, t, r) {
    return [
        Ve.getEndpointPlugin(t, e.getEndpointParameterInstructions())
    ];
}).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").sc(Be).build() {
}
