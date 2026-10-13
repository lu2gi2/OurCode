import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, Oi, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { AU } from "/$bunfs/root/chunk-0qnysq84.js";
import { _K } from "/$bunfs/root/chunk-5hp2pp9y.js";
import { o, T, u, Ue, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { hostname } from "os";
import { dirname, join } from "path";
const version = 1;
const g = "device-mcp-snapshot";
const sOr = 8;
const M = 128;
function iOr(e) {
    return e.added.length > 0 || e.changed.length > 0;
}
const O = p(()=>u({
        version: A(version),
        hostname: o(),
        servers: ue(o(), Ue([
            ue(o(), o()),
            A("declined")
        ])),
        withheld: ue(o(), u({
            added: T(o()),
            changed: T(o())
        }))
    }));
function b(e) {
    let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
    return at(Oi({
        name: e.name,
        description: e.description,
        inputSchema: e.inputSchema,
        searchHint: r[AU.searchHint]
    }));
}
function R(e) {
    return Object.fromEntries(e.map((r)=>[
            r.name,
            b(r)
        ]));
}
function E(e, r) {
    if (r === "declined") {
        return {
            added: [],
            changed: []
        };
    }
    let i = Object.keys(e).filter((s)=>!Object.hasOwn(r, s));
    let n = Object.keys(e).filter((s)=>Object.hasOwn(r, s) && r[s] !== e[s]);
    if (i.length === 0 && n.length === 0) {
        return;
    }
    return {
        added: m(i),
        changed: m(n)
    };
}
function m(e) {
    return e.slice(0, sOr).map((r)=>r.slice(0, M));
}
function aOr(e, r) {
    if (r === undefined) {
        return e;
    }
    return {
        servers: {
            ...r.servers,
            ...e.servers
        },
        withheld: e.withheld
    };
}
function UMo(e, r) {
    let i = new Map;
    let n = {
        ...r.servers
    };
    let s = false;
    for (let [a, y] of e){
        let h = R(y);
        let f = Object.hasOwn(r.servers, a) ? r.servers[a] : undefined;
        if (f === undefined) {
            n[a] = h;
            s = true;
            continue;
        }
        let S = E(h, f);
        if (S !== undefined) {
            i.set(a, S);
        }
    }
    let d = Object.fromEntries([
        ...i
    ].filter(([, a])=>iOr(a)));
    return {
        withheld: i,
        next: {
            servers: n,
            withheld: d
        },
        changed: s || Oi(d) !== Oi(r.withheld)
    };
}
function Gin(e, r, i) {
    let n = {
        ...e.servers
    };
    for (let s of r){
        if (i === "accepted") {
            delete n[s];
        } else {
            n[s] = "declined";
        }
    }
    return {
        servers: n,
        withheld: {}
    };
}
async function ife(e) {
    let r = {
        servers: {},
        withheld: {}
    };
    let i;
    try {
        i = await e.readText();
    } catch (error) {
        t(`device-mcp snapshot: store unreadable (${l(error)})`, {
            level: "warn"
        });
        return "unreadable";
    }
    if (i === undefined) {
        return r;
    }
    try {
        let n = O().safeParse(X(i));
        if (n.success && _K(n.data.hostname) === _K(e.hostname())) {
            return {
                servers: n.data.servers,
                withheld: n.data.withheld
            };
        }
        return r;
    } catch  {
        return r;
    }
}
async function _9e(e, r) {
    try {
        await r.writeText(_({
            version,
            hostname: _K(r.hostname()),
            servers: e.servers,
            withheld: e.withheld
        }, null, 2) + `
`);
        return true;
    } catch (error) {
        t(`device-mcp snapshot: not saved (${l(error)})`, {
            level: "warn"
        });
        return false;
    }
}
function c() {
    return join(ve(), "state", `${g}.json`);
}
function BMo() {
    return `delete ${Rs(c())} to reset every server's baseline`;
}
function afe(e) {
    let r = j() && e !== undefined ? e : undefined;
    let i = $e.state(g);
    return {
        readText: async ()=>{
            if (r) {
                let n = await r.readText([
                    i
                ]);
                if (!n.ok) {
                    throw Error("device-mcp snapshot read failed");
                }
                let s = n.value.items[0];
                if (s.found) {
                    return s.value;
                }
                return undefined;
            }
            try {
                return await mn().read(c());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeText: async (n)=>{
            if (r) {
                if (!(await r.write(i, n, {
                    mode: 384
                })).ok) {
                    throw Error("device-mcp snapshot write failed");
                }
                return;
            }
            let s = c();
            await mn().mkdir(dirname(s), 448);
            await mn().atomicWrite(s, n, 384);
        },
        hostname
    };
}
export { sOr, iOr, aOr, UMo, Gin, ife, _9e, BMo, afe };
