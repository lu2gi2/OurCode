import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Bs } from "/$bunfs/root/chunk-223dyewd.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { uor } from "/$bunfs/root/chunk-kasbfbhj.js";
import { N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ugn, m1r, gOe } from "/$bunfs/root/chunk-6daq93ej.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Do } from "/$bunfs/root/chunk-8524cxt8.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { QR } from "/$bunfs/root/chunk-abvy54rm.js";
import { yp } from "/$bunfs/root/chunk-qcw8ncs1.js";
import { RC } from "/$bunfs/root/chunk-v5cd9p17.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { cw } from "/$bunfs/root/chunk-4p1f2ppy.js";
import { pgn } from "/$bunfs/root/chunk-q2exc16c.js";
import { wOe } from "/$bunfs/root/chunk-gttxxz09.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { ED } from "/$bunfs/root/chunk-dmmzcg0b.js";
import { o, T, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { MO } from "/$bunfs/root/chunk-svqqgdca.js";
N();
function we([Ge, Qe]) {
    return `${Ge}: ${Qe}`;
}
function Se([Ve]) {
    return ne(Ve);
}
const _ = 10000;
function E4n(t) {
    let i = t.at(-1);
    if (!i?.data) {
        return e(Fe, {
            height: 1,
            children: e(n, {
                dimColor: true,
                children: "Running…"
            })
        });
    }
    let { progress, total } = i.data;
    let f = yp(i.data.progressMessage);
    if (progress === undefined) {
        return e(Fe, {
            height: 1,
            children: e(n, {
                dimColor: true,
                children: "Running…"
            })
        });
    }
    if (total !== undefined && total > 0) {
        let ratio = Math.min(1, Math.max(0, progress / total));
        let m = Math.round(ratio * 100);
        return e(Fe, {
            children: r(s, {
                flexDirection: "column",
                children: [
                    f && e(n, {
                        dimColor: true,
                        children: f
                    }),
                    r(s, {
                        flexDirection: "row",
                        gap: 1,
                        children: [
                            e(RC, {
                                ratio,
                                width: 20
                            }),
                            r(n, {
                                dimColor: true,
                                children: [
                                    m,
                                    "%"
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
    return e(Fe, {
        height: 1,
        children: e(n, {
            dimColor: true,
            children: f ?? `Processing\u2026 ${progress}`
        })
    });
}
function Tcn(t, i, { verbose, input }) {
    let f = t;
    if (!verbose) {
        let c = A(f, input);
        if (c !== null) {
            return e(Fe, {
                height: 1,
                children: r(n, {
                    children: [
                        "Sent a message to",
                        " ",
                        e(Do, {
                            children: cw(c.url, c.channel)
                        })
                    ]
                })
            });
        }
    }
    return h(f, verbose);
}
function h(t, verbose) {
    let l = wOe(t);
    let f = l > _ ? `${te.warning} Large MCP response (~${Bs(l)} tokens), this can fill up context quickly` : null;
    let c;
    if (Array.isArray(t)) {
        let children = t.map((item, g)=>{
            if (item.type === "image") {
                return e(s, {
                    justifyContent: "space-between",
                    overflowX: "hidden",
                    width: "100%",
                    children: e(Fe, {
                        height: 1,
                        children: e(n, {
                            children: "[Image]"
                        })
                    })
                }, g);
            }
            return e(P, {
                item,
                verbose
            }, g);
        });
        c = e(s, {
            flexDirection: "column",
            width: "100%",
            children
        });
    } else if (!t) {
        c = e(s, {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: "100%",
            children: e(Fe, {
                height: 1,
                children: e(n, {
                    dimColor: true,
                    children: "(No content)"
                })
            })
        });
    } else {
        c = e(QR, {
            content: t,
            verbose
        });
    }
    if (f) {
        return r(s, {
            flexDirection: "column",
            children: [
                e(Fe, {
                    height: 1,
                    children: e(n, {
                        color: "warning",
                        children: f
                    })
                }),
                c
            ]
        });
    }
    return c;
}
function P(t) {
    let f = w(3);
    let { item, verbose } = t;
    let a = item.type === "text" && "text" in item && item.text !== null && item.text !== undefined ? String(item.text) : "";
    let c;
    if (f[0] !== a || f[1] !== verbose) {
        c = e(QR, {
            content: a,
            verbose
        });
        f[0] = a;
        f[1] = verbose;
        f[2] = c;
    } else {
        c = f[2];
    }
    return c;
}
function v(t, { maxChars, maxKeys }) {
    let a = t.trim();
    if (a.length === 0 || a.length > maxChars || a[0] !== "{") {
        return null;
    }
    let f;
    try {
        f = X(a);
    } catch  {
        return null;
    }
    if (f === null || typeof f !== "object" || Array.isArray(f)) {
        return null;
    }
    let c = Object.entries(f);
    if (c.length === 0 || c.length > maxKeys) {
        return null;
    }
    return c;
}
const O = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;
function A(t, input) {
    let l = t;
    if (Array.isArray(t)) {
        let x = t.find((R)=>R.type === "text");
        l = x && "text" in x ? x.text : undefined;
    }
    if (typeof l !== "string" || !l.includes('"message_link"')) {
        return null;
    }
    let url = v(l, {
        maxChars: 2000,
        maxKeys: 6
    })?.find(([x])=>x === "message_link")?.[1];
    if (typeof url !== "string") {
        return null;
    }
    let c = O.exec(url);
    if (!c) {
        return null;
    }
    let m = input;
    let d = m?.channel_id ?? m?.channel ?? c[1];
    let g = (typeof d === "string" ? pgn(d) : "") || "slack";
    return {
        channel: g.startsWith("#") ? g : `#${g}`,
        url
    };
}
function WNt(t, i) {
    let l = i?.columns;
    if (typeof t === "string") {
        return ED(t, l);
    }
    if (Array.isArray(t)) {
        return t.some((a)=>a.type === "text" && ED(a.text, l));
    }
    return false;
}
const D = 256;
function yee(t, i) {
    let l = uor(t);
    if (l) {
        return H.of(i)(t, l.serverName, l.toolName);
    }
}
const E = p(()=>Ue([
        m1r(),
        u({
            content: Ue([
                o(),
                T(u({
                    type: o()
                }).passthrough())
            ])
        }).transform((t)=>t.content)
    ]));
const sBs = {
    isResultTruncated (t, i) {
        let l = B(t);
        return WNt(l, i) || WNt(b(l), i);
    },
    renderToolResultMessage (t, i, { verbose }) {
        return h(b(t), verbose);
    }
};
var H = new q(()=>MO(j, (t)=>t, D));
function j(name, serverName, toolName) {
    let a = ()=>{
        throw Error("Display-only MCP tool invoked — it exists only for transcript rendering");
    };
    return {
        ...gOe,
        name,
        mcpInfo: {
            serverName,
            toolName
        },
        isEnabled: ()=>false,
        outputSchema: E(),
        uiTableKey: ugn,
        userFacingName: ()=>`${serverName} - ${toolName} (MCP)`,
        description: async ()=>a(),
        prompt: async ()=>a(),
        call: async ()=>a(),
        checkPermissions: async ()=>a()
    };
}
function B(t) {
    let i = typeof t === "object" && t !== null && !Array.isArray(t) && "content" in t ? t.content : t;
    if (typeof i === "string") {
        return i;
    }
    if (Array.isArray(i) && i.every((l)=>typeof l === "object" && l !== null)) {
        return i;
    }
}
var F = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g;
var U = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;
var I = /\\u001b/gi;
var L = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;
function M(t) {
    let i = "";
    let l = ()=>{
        if (i) {
            return ` <${i}>`;
        }
        return "";
    };
    return (t.replace(F, (f, c)=>{
        if (c === undefined) {
            return "";
        }
        let m = l();
        i = c;
        return m;
    }) + l()).replace(U, "").replace(I, "\\u241b").replace(L, "\\u2426");
}
function b(t) {
    if (typeof t === "string") {
        return M(t);
    }
    return t?.map((i)=>{
        if (i.type === "text" && "text" in i) {
            return {
                type: "text",
                text: M(String(i.text ?? ""))
            };
        }
        return i;
    });
}
export { E4n, Tcn, WNt, yee, sBs };
