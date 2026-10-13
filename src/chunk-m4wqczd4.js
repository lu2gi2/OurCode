import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ns } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ye, Ke, x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, gf, FCo, kon, NO, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { No } from "/$bunfs/root/chunk-etbngzss.js";
import { Nkt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { e2, C5o, R5o, WU, x5o, P5o, pet, dnr, o9o, unr, LK, s9o, i9o, Ute, uD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { vT } from "/$bunfs/root/chunk-a5rabwn2.js";
import { dAe } from "/$bunfs/root/chunk-xj62f004.js";
import { N_ } from "/$bunfs/root/chunk-ba34fvgp.js";
import { vk, Jne, Qne } from "/$bunfs/root/chunk-40xcrb3y.js";
import { c4 as size, $Yt } from "/$bunfs/root/chunk-6xvcnbea.js";
import { gw } from "/$bunfs/root/chunk-y80rd7px.js";
import { c0 } from "/$bunfs/root/chunk-v214ecah.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const w = p(()=>u({
        server: o().optional().describe("Optional server name to filter resources by")
    }));
const U = p(()=>T(u({
        uri: o().describe("Resource URI"),
        name: o().describe("Resource name"),
        mimeType: o().optional().describe("MIME type of the resource"),
        description: o().optional().describe("Resource description"),
        server: o().describe("Server that provides this resource")
    })));
function stripForCreation(e) {
    let { hasMcpInboundDoor } = import.meta.require("/$bunfs/root/chunk-vzkvsbzt.js");
    if (!Array.isArray(e) || !hasMcpInboundDoor()) {
        return e;
    }
    return e.filter(L).map(({ uri, name, mimeType, description, server })=>({
            uri: b("", uri),
            name: b("", name),
            ...typeof mimeType === "string" && {
                mimeType
            },
            ...typeof description === "string" && {
                description
            },
            server: b("", server)
        }));
}
function b(e, r) {
    if (typeof r === "string") {
        return r;
    }
    return e;
}
const QH = Kt({
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return true;
    },
    toAutoClassifierInput (e) {
        return e.server ?? "";
    },
    shouldDefer: true,
    name: LK,
    aliases: [
        "ListMcpResources"
    ],
    searchHint: "list resources from connected MCP servers",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return s9o;
    },
    async prompt () {
        return i9o;
    },
    get inputSchema () {
        return w();
    },
    get outputSchema () {
        return U();
    },
    create (e) {
        return {
            async call (r, { signal }) {
                let a = e.turnMcpClients.filter((c)=>!o9o(c, e.agentId));
                let { server } = r;
                let h = server ? pet(a, server) : a;
                if (server && h.length === 0) {
                    throw new x(`Server "${server}" not found. Available servers: ${a.map((c)=>c.name).join(", ")}`, "MCP server not found");
                }
                let f = await Promise.all(h.map(async (c)=>{
                    if (!Ns(c) || !c.capabilities?.resources) {
                        return [];
                    }
                    let y = import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
                    let S = ()=>y.ensureConnectedClient(c, {
                            signal,
                            context: "MCP resource listing"
                        });
                    try {
                        let g = await S();
                        let i = await qa(y.fetchResourcesForClient(g), signal, ()=>new Ye);
                        if (c.config.type === "claudeai-proxy" && y.getDiscoveryFetchError(i) !== undefined) {
                            let d = await S();
                            if (d !== g) {
                                i = await qa(y.fetchResourcesForClient(d), signal, ()=>new Ye);
                            }
                        }
                        let m = i.filter((d)=>!Nkt(d));
                        if (m.length < i.length) {
                            t(`MCP server "${c.name}": ${i.length - m.length} MCP Apps UI resource(s) left out of ${LK}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${WU} can still read them by URI`);
                        }
                        return m;
                    } catch (error) {
                        if (!Ke(error)) {
                            No(c.name, l(error));
                        }
                        return [];
                    }
                }));
                if (signal.aborted) {
                    throw new Ye;
                }
                return {
                    data: f.flat()
                };
            }
        };
    },
    renderToolUseMessage (e) {
        if (e.server) {
            return `List MCP resources from server "${e.server}"`;
        }
        return "List all MCP resources";
    },
    userFacingName: ()=>"listMcpResources",
    stripForCreation,
    mapToolResultToToolResultBlockParam (e, r) {
        if (!e || e.length === 0) {
            return {
                tool_use_id: r,
                type: "tool_result",
                content: "No resources found. MCP servers may still provide tools even if they have no resources."
            };
        }
        return {
            tool_use_id: r,
            type: "tool_result",
            content: _(e)
        };
    }
});
const A = {
    size,
    textToSanitize: 1048576
};
const k = 16;
const B = 256;
const F = 16 * A.textToSanitize;
const H = 65536;
function M() {
    let e = {
        size: 0,
        sixteenthsToSanitize: 0,
        nonAsciiUnits: 0
    };
    return (r)=>{
        if (!R(e)) {
            return false;
        }
        e.size += B;
        return v(r, e, true);
    };
}
function Bht() {
    let e = M();
    let r = M();
    let s = false;
    return (a)=>{
        if (s || !e(a)) {
            return;
        }
        let n = NO(a);
        s = !r(n);
        if (s) {
            return undefined;
        }
        return n;
    };
}
function EWe(e, r, s) {
    return `Skipped the last ${r} of ${s} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function R(e) {
    return e.size <= A.size && e.sixteenthsToSanitize <= F;
}
function v(e, r, s = false, a = false) {
    r.size += k;
    if (typeof e === "string") {
        P(e, r, a);
    } else if (Array.isArray(e)) {
        for (let n of e){
            if (!v(n, r)) {
                return false;
            }
        }
    } else if (L(e)) {
        for(let n in e){
            P(n, r);
            if (!v(e[n], r, false, s && n === "name")) {
                return false;
            }
        }
    }
    return R(r);
}
function P(e, r, s = false) {
    r.size += e.length;
    if (!R(r) || FCo(e)) {
        return;
    }
    if (s) {
        r.sixteenthsToSanitize += 16 * e.length;
        return;
    }
    r.sixteenthsToSanitize += e.length;
    for(let a = 0; a < e.length && R(r); a++){
        let n = e.charCodeAt(a);
        if (n > 127 && (r.nonAsciiUnits++ < H || q()[n] === 1)) {
            r.sixteenthsToSanitize += 15;
        }
    }
}
var q = c0(()=>{
    let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
    return Uint8Array.from({
        length: 65536
    }, (r, s)=>{
        let a = String.fromCharCode(s);
        if (e.test(a) || kon(a) !== a) {
            return 1;
        }
        return 0;
    });
});
function z() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js");
}
function V() {
    return z().mcpSdkErrorClassificationModule();
}
function Y() {
    return z().mcpClientModule();
}
function D() {
    return z().mcpDirectoryReadModule();
}
const W = p(()=>u({
        server: o().describe("The MCP server name"),
        uri: o().describe("The directory resource URI to list")
    }));
const Z = p(()=>u({
        resources: T(u({
            uri: o().describe("Child resource URI"),
            name: o().describe("Child resource name"),
            mimeType: o().optional().describe("Child MIME type")
        })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${$Yt}".`),
        error: o().optional().describe("Human-readable error when the server could not list the directory")
    }));
const HG = Kt({
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return true;
    },
    toAutoClassifierInput (e) {
        return `${e.server} ${e.uri}`;
    },
    shouldDefer: true,
    name: e2,
    aliases: [
        "ReadMcpResourceDir"
    ],
    searchHint: "list the children of an MCP directory resource",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return C5o;
    },
    async prompt () {
        return R5o;
    },
    get inputSchema () {
        return W();
    },
    get outputSchema () {
        return Z();
    },
    create (e) {
        return {
            async call (r, { signal }) {
                let e_turnMcpClients = e.turnMcpClients;
                let { server, uri } = r;
                let f = dnr(e_turnMcpClients, server);
                unr(f, e.agentId);
                if (!gw()) {
                    return {
                        data: {
                            resources: [],
                            error: "Directory listing is not enabled in this build."
                        }
                    };
                }
                if (!D().serverDeclaresDirectoryRead(f.capabilities)) {
                    return {
                        data: {
                            resources: [],
                            error: `Server "${f.name}" does not support directory listing.`
                        }
                    };
                }
                if (f.config.pluginSource) {
                    vT(f.config.pluginSource);
                    uD(f.config.pluginSource, "mcp", {
                        kind: "mcp-server",
                        name: f.name
                    });
                }
                let c = await Y().ensureConnectedClient(f, {
                    signal,
                    context: "MCP resource directory read"
                });
                let y;
                try {
                    y = await D().readMcpDirectory(c, uri);
                } catch (error) {
                    let d = V();
                    if (d.isMcpNotADirectoryError(error)) {
                        No(f.name, `resources/directory/read returned ${d.getMcpErrorCode(error)} \u2014 not a directory`);
                        return {
                            data: {
                                resources: [],
                                error: `Not a directory resource: ${uri}. If it is a file resource, use ${WU} instead.`
                            }
                        };
                    }
                    throw error;
                }
                let S = M();
                let g = M();
                let resources = (await Ute(y, (m)=>{
                    if (!S([
                        m.uri,
                        m.name,
                        m.mimeType
                    ])) {
                        return [];
                    }
                    let d = {
                        uri: gf(m.uri),
                        name: NO(m.name),
                        mimeType: m.mimeType !== undefined ? NO(m.mimeType) : undefined
                    };
                    if (g([
                        d.uri,
                        d.name,
                        d.mimeType
                    ])) {
                        return [
                            d
                        ];
                    }
                    return [];
                })).flat();
                if (resources.length < y.length) {
                    No(f.name, EWe("directory entries", y.length, y.length));
                    return {
                        data: {
                            resources: [],
                            error: `The listing of ${uri} is too large to read.`
                        }
                    };
                }
                return {
                    data: {
                        resources
                    }
                };
            }
        };
    },
    renderToolUseMessage (e) {
        if (!e.uri || !e.server) {
            return null;
        }
        return `List directory resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName () {
        return "readMcpResourceDir";
    },
    mapToolResultToToolResultBlockParam (e, r) {
        if (e.error) {
            return {
                tool_use_id: r,
                type: "tool_result",
                content: e.error
            };
        }
        let s = e.resources.map((n)=>`${n.name}${n.mimeType === $Yt ? "/" : ""}`).join(`
`);
        let a = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${I(e.resources.length, "entry", "entries")}):
${s}` : "Directory is empty.";
        return {
            tool_use_id: r,
            type: "tool_result",
            content: `${a}

${_(e)}`
        };
    }
});
function E() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js");
}
function K() {
    return E().mcpSdkErrorClassificationModule();
}
function N() {
    return E().mcpClientModule();
}
function X() {
    return E().mcpDirectoryReadModule();
}
const G = p(()=>u({
        server: o().describe("The MCP server name"),
        uri: o().describe("The resource URI to read")
    }));
const J = p(()=>u({
        contents: T(u({
            uri: o().describe("Resource URI"),
            mimeType: o().optional().describe("MIME type of the content"),
            text: o().optional().describe("Text content of the resource"),
            blobSavedTo: o().optional().describe("Path where binary blob content was saved")
        })),
        error: o().optional().describe("Human-readable error when the server could not read the resource")
    }));
const ZH = Kt({
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return true;
    },
    toAutoClassifierInput (e) {
        return `${e.server} ${e.uri}`;
    },
    shouldDefer: true,
    name: WU,
    aliases: [
        "ReadMcpResource"
    ],
    searchHint: "read a specific MCP resource by URI",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return x5o;
    },
    async prompt () {
        return P5o;
    },
    get inputSchema () {
        return G();
    },
    get outputSchema () {
        return J();
    },
    create (e) {
        return {
            async call (r, { signal }) {
                let { turnMcpClients, storageV5 } = e;
                let { server, uri } = r;
                let c = dnr(turnMcpClients, server);
                unr(c, e.agentId);
                if (c.config.pluginSource) {
                    vT(c.config.pluginSource);
                    uD(c.config.pluginSource, "mcp", {
                        kind: "mcp-server",
                        name: c.name
                    });
                }
                let y = await N().ensureConnectedClient(c, {
                    signal,
                    context: "MCP resource read"
                });
                let S;
                try {
                    S = await dAe(y, uri);
                } catch (error) {
                    let m = K();
                    if (m.isMcpMethodNotFoundError(error)) {
                        No(c.name, "resources/read returned -32601 MethodNotFound — server advertises resources but does not implement reads");
                        return {
                            data: {
                                contents: [],
                                error: `Server "${c.name}" advertises resource support but does not implement resource reads.`
                            }
                        };
                    }
                    if (m.isMcpResourceNotFoundError(error)) {
                        No(c.name, `resources/read returned ${m.getMcpErrorCode(error)} \u2014 resource not found`);
                        N().invalidateMcpResourceListCaches(y);
                        let d = X().serverDeclaresDirectoryRead(y.capabilities) ? ` If the URI is a directory resource, use ${e2} instead.` : "";
                        return {
                            data: {
                                contents: [],
                                error: `Resource not found: ${uri} \u2014 it may have been deleted or the URI is stale. Re-run ${LK} to refresh.${d}`
                            }
                        };
                    }
                    throw error;
                }
                return {
                    data: {
                        contents: await Promise.all(S.contents.map(async (i, m)=>{
                            if ("text" in i) {
                                return {
                                    uri: i.uri,
                                    mimeType: i.mimeType,
                                    text: i.text
                                };
                            }
                            if (!("blob" in i) || typeof i.blob !== "string") {
                                return {
                                    uri: i.uri,
                                    mimeType: i.mimeType
                                };
                            }
                            let d = `mcp-resource-${Date.now()}-${m}-${Math.random().toString(36).slice(2, 8)}`;
                            let C = await vk(Buffer.from(i.blob, "base64"), i.mimeType, d, undefined, storageV5);
                            if ("error" in C) {
                                if (N_() !== undefined) {
                                    return {
                                        uri: i.uri,
                                        mimeType: i.mimeType,
                                        text: Qne(i.mimeType, Buffer.byteLength(i.blob, "base64"))
                                    };
                                }
                                return {
                                    uri: i.uri,
                                    mimeType: i.mimeType,
                                    text: `Binary content could not be saved to disk: ${C.error}`
                                };
                            }
                            return {
                                uri: i.uri,
                                mimeType: i.mimeType,
                                blobSavedTo: C.filepath,
                                text: Jne(C.filepath, i.mimeType, C.size, `[Resource from ${c.name} at ${i.uri}] `)
                            };
                        }))
                    }
                };
            }
        };
    },
    renderToolUseMessage (e) {
        if (!e.uri || !e.server) {
            return null;
        }
        return `Read resource "${e.uri}" from server "${e.server}"`;
    },
    userFacingName () {
        return "readMcpResource";
    },
    mapToolResultToToolResultBlockParam (e, r) {
        if (e.error) {
            return {
                tool_use_id: r,
                type: "tool_result",
                content: e.error
            };
        }
        return {
            tool_use_id: r,
            type: "tool_result",
            content: _(e)
        };
    }
});
export { QH, Bht, EWe, HG, ZH };
