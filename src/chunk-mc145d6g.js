import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { d1n, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Njn, xCs, ZSo } from "/$bunfs/root/chunk-xb9cceab.js";
import { Vnt, vkt, ZDe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { VBt } from "/$bunfs/root/chunk-pdm4m6kx.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
const A = new Set([
    "x-upload-token",
    "content-type"
]);
const T = 4096;
const timeout = 120000;
const maxContentLength = 4096;
const w = p(()=>u({
        sha256: o(),
        size: E()
    }));
const F = {
    400: "put_hash_mismatch",
    403: "put_refused",
    409: "put_already_used",
    410: "put_expired",
    413: "put_size_mismatch",
    429: "put_busy",
    503: "put_busy"
};
const x = 2;
const C = 2000;
const D = 10000;
async function S(a, buf, m, uploadPathPrefix, signal) {
    let baseUrl = d1n(a.url);
    let e = baseUrl === undefined ? undefined : new URL(a.url);
    if (baseUrl === undefined || e === undefined || e.search !== "" || e.hash !== "" || !uploadPathPrefix.endsWith("/") || !e.pathname.startsWith(uploadPathPrefix) || !/^[A-Za-z0-9_-]{1,256}$/.test(e.pathname.slice(uploadPathPrefix.length))) {
        return "put_url_refused";
    }
    let headers = {
        "content-type": "application/octet-stream"
    };
    for (let [r, n] of Object.entries(a.headers)){
        if (!A.has(r.toLowerCase()) || n.length > T || /[^\x20-\x7e]/.test(n)) {
            return "put_header_refused";
        }
        headers[r.toLowerCase()] = n;
    }
    try {
        for(let r = 0;; r++){
            let n = await Gt.put(`/${e.pathname.slice(1)}`, buf, {
                auth: "none",
                baseUrl,
                headers,
                maxRedirects: 0,
                maxBodyLength: buf.length,
                maxContentLength,
                timeout,
                signal,
                validateStatus: ()=>true
            });
            if (!n.ok) {
                if (n.reason === "essential-traffic-only") {
                    return "essential_traffic";
                }
                return "egress_blocked";
            }
            if (n.status === 200) {
                let c = w().safeParse(n.data);
                if (c.success && c.data.sha256 === m && c.data.size === buf.length) {
                    return undefined;
                }
                return "put_bad_answer";
            }
            let g = F[n.status] ?? "put_failed";
            if (g !== "put_busy" || r === x) {
                return g;
            }
            let h = Number(n.response.headers["retry-after"]);
            await Q(Number.isFinite(h) && h >= 0 ? Math.min(h * 1000, D) : C, signal);
            if (signal.aborted) {
                return "canceled";
            }
        }
    } catch (error) {
        if (signal.aborted) {
            return "canceled";
        }
        t(`[file inputs] upload threw: ${l(error)}`, {
            level: "error"
        });
        if (v(error) === "ERR_BAD_RESPONSE") {
            return "put_bad_answer";
        }
        return "put_network";
    }
}
function Rmn({ screen, maxFileBytes, maxTotalBytes, uploadPathPrefix }) {
    return {
        async hash (d, s) {
            let e = [];
            let _ = 0;
            for (let r of d){
                if (s.aborted) {
                    return [
                        ...e,
                        {
                            path: r,
                            code: "canceled"
                        }
                    ];
                }
                let n = await y(r, screen, maxFileBytes);
                if ("code" in n) {
                    return [
                        ...e,
                        n
                    ];
                }
                _ += n.buf.length;
                if (_ > maxTotalBytes) {
                    return [
                        ...e,
                        {
                            path: r,
                            code: "too_large_total"
                        }
                    ];
                }
                e.push({
                    path: r,
                    name: n.name,
                    size: n.buf.length,
                    sha256: n.sha256
                });
            }
            return e;
        },
        async put (d, s) {
            let e = [];
            let _ = 0;
            for (let { path, sha256, url, headers } of d){
                if (s.aborted) {
                    return [
                        ...e,
                        {
                            path,
                            code: "canceled"
                        }
                    ];
                }
                let c = await y(path, screen, maxFileBytes);
                if ("code" in c) {
                    return [
                        ...e,
                        c
                    ];
                }
                _ += c.buf.length;
                if (_ > maxTotalBytes) {
                    return [
                        ...e,
                        {
                            path,
                            code: "too_large_total"
                        }
                    ];
                }
                if (c.sha256 !== sha256) {
                    return [
                        ...e,
                        {
                            path,
                            code: "changed"
                        }
                    ];
                }
                let code = await S({
                    url,
                    headers
                }, c.buf, sha256, uploadPathPrefix, s);
                if (code !== undefined) {
                    return [
                        ...e,
                        {
                            path,
                            code
                        }
                    ];
                }
                e.push({
                    path,
                    ok: true
                });
            }
            return e;
        }
    };
}
async function y(a, screen, maxFileBytes) {
    let i = await screen(a);
    if (i === undefined) {
        return {
            path: a,
            code: "path_rejected"
        };
    }
    if (i.requiredDigest === undefined && await Vnt(a, i.realPath)) {
        t("[file inputs] a path was rejected: a credential, or Claude's own");
        return {
            path: a,
            code: "path_rejected"
        };
    }
    let d = await vkt(i.realPath);
    if (VBt.test(d)) {
        return {
            path: a,
            code: "name_direction"
        };
    }
    let s = await ZDe(i.realPath, maxFileBytes);
    if (!("buf" in s)) {
        return {
            path: a,
            code: s.refusal
        };
    }
    let sha256 = at(s.buf);
    if (i.requiredDigest !== undefined && sha256 !== i.requiredDigest) {
        return {
            path: a,
            code: "path_rejected"
        };
    }
    return {
        buf: s.buf,
        name: d,
        sha256
    };
}
const fQe = 256;
const Iht = 20971520;
const zBt = 67108864;
const GBt = [
    {
        path: ZSo,
        serverId: Njn,
        policy: "allow_cobalt_plinth",
        uploadPathPrefix: `${ZSo}/upload/`,
        ccrEntryPath: xCs
    }
];
export { Rmn, fQe, Iht, zBt, GBt };
