import { K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { fr } from "/$bunfs/root/chunk-se8vehhp.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Mg, eA } from "/$bunfs/root/chunk-2d9a83dh.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Ep, LW, lg } from "/$bunfs/root/chunk-y9c4grt0.js";
import { z5o, lEn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { KJ, Fur } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { lstat, mkdir, readFile } from "fs/promises";
import { basename, dirname, join, sep } from "path";
const k = 524288;
function c7e(e) {
    return {
        scoping: e.replace(/\.jsonl$/, ".forked-skill.json"),
        provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json")
    };
}
function f(e) {
    return c7e(lg(e));
}
function R(skillName) {
    return _({
        forkedSkill: true,
        ...skillName !== undefined && {
            skillName
        }
    });
}
function p(e) {
    let r = LW();
    if (dirname(r) !== Ep()) {
        return;
    }
    let projectKey = basename(r);
    let sessionId = K();
    let s = join(r, sessionId) + sep;
    let o = lg(e);
    if (!o.startsWith(s)) {
        return;
    }
    let a = o.slice(s.length).split(sep);
    let d = a.at(-1);
    if (d === undefined || !d.endsWith(".jsonl") || ![
        projectKey,
        sessionId,
        ...a
    ].every(fr)) {
        return;
    }
    let x = a.slice(0, -1);
    let g = (A)=>({
            namespace: "sidecar",
            projectKey,
            sessionId,
            relPath: [
                ...x,
                A
            ]
        });
    let m = g(d.replace(/\.jsonl$/, ".forked-skill.json"));
    let S = g(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
    if (Mg(m) === undefined && Mg(S) === undefined) {
        return {
            scoping: m,
            provenanceMarker: S
        };
    }
}
function D(e) {
    let r = eA(e.scoping);
    let n = eA(e.provenanceMarker);
    if (r && n) {
        return {
            scoping: r,
            provenanceMarker: n
        };
    }
}
async function b(e, r) {
    let n = await e.statMeta(r);
    if (!n.ok) {
        if (n.error.code === "NotFound") {
            return {
                kind: "absent"
            };
        }
        return {
            kind: "unusable",
            ...u(n.error)
        };
    }
    if (n.value.size > k) {
        return {
            kind: "unusable"
        };
    }
    let i = await e.read([
        r
    ]);
    if (!i.ok) {
        return {
            kind: "unusable",
            ...u(i.error)
        };
    }
    let s = i.value.items[0];
    if (s.found) {
        return {
            kind: "text",
            text: Buffer.from(s.value).toString("utf8")
        };
    }
    return {
        kind: "absent"
    };
}
async function N(e, provenanceMarker) {
    let n = await e.statMeta(provenanceMarker);
    if (n.ok) {
        return {
            present: true
        };
    }
    if (n.error.code === "NotFound") {
        return {
            present: false
        };
    }
    return {
        present: true,
        ...u(n.error)
    };
}
function c(e) {
    if (e === true) {
        return {
            transientRead: true
        };
    }
    return {};
}
function u(error) {
    return c(Fur(error));
}
async function M(e, r, n) {
    let i = await e.write(r, R(n), {
        mode: 438 & ~process.umask()
    });
    if (!i.ok) {
        t(`forked-skill provenance marker write: ${i.error.code}`);
        throw Error("forked-skill provenance marker write failed");
    }
}
function P() {
    if (Ce()) {
        throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
    }
}
async function HJn(e, r, n) {
    let i = j() && n ? eA(e) : undefined;
    if (n && i) {
        return M(n, i, r);
    }
    P();
    await En(e, R(r));
}
async function rqo(e, r, n) {
    let i = j() && n ? p(e) : undefined;
    if (n && i) {
        await M(n, i.provenanceMarker, r.skillName);
        let o = await n.write(i.scoping, _(r), {
            mode: 438 & ~process.umask()
        });
        if (!o.ok) {
            t(`forked-skill scoping write: ${o.error.code}`);
            throw Error("forked-skill scoping record write failed");
        }
        return;
    }
    P();
    let s = f(e);
    await mkdir(dirname(s.scoping), {
        recursive: true
    });
    await HJn(s.provenanceMarker, r.skillName);
    await En(s.scoping, _(r));
}
async function oqo(e, r) {
    let n = j() && r ? p(e) : undefined;
    if (r && n) {
        return E(r, n);
    }
    return lWt(f(e));
}
async function lWt(e, r) {
    let n = j() && r ? D(e) : undefined;
    if (r && n) {
        return E(r, n);
    }
    if (Ce()) {
        return {
            status: "diskless"
        };
    }
    let i;
    try {
        let s = await lstat(e.scoping);
        if (!s.isFile() || s.size > k) {
            return {
                status: "malformed"
            };
        }
        i = await readFile(e.scoping, "utf-8");
    } catch (error) {
        if (z(error)) {
            return await O(e.provenanceMarker);
        }
        return {
            status: "malformed",
            ...c(KJ(v(error)))
        };
    }
    return h(i);
}
function h(e) {
    let r;
    try {
        r = X(e);
    } catch  {
        return {
            status: "malformed"
        };
    }
    let n = lEn().safeParse(r);
    if (n.success) {
        return {
            status: "valid",
            scoping: n.data
        };
    }
    return {
        status: "malformed"
    };
}
async function E(e, r) {
    let n = await b(e, r.scoping);
    switch(n.kind){
        case "text":
            return h(n.text);
        case "unusable":
            return {
                status: "malformed",
                ...c(n.transientRead)
            };
        case "absent":
            {
                let i = await N(e, r.provenanceMarker);
                if (i.present) {
                    return {
                        status: "absent-but-marked",
                        ...c(i.transientRead)
                    };
                }
                return {
                    status: "absent"
                };
            }
    }
}
async function O(provenanceMarker) {
    try {
        await lstat(provenanceMarker);
        return {
            status: "absent-but-marked"
        };
    } catch (error) {
        if (z(error)) {
            return {
                status: "absent"
            };
        }
        return {
            status: "absent-but-marked",
            ...c(KJ(v(error)))
        };
    }
}
async function sqo(e, r) {
    let n;
    let i = j() && r ? p(e) : undefined;
    if (r && i) {
        let a = await b(r, i.provenanceMarker);
        if (a.kind !== "text") {
            return;
        }
        n = a.text;
    } else if (Ce()) {
        return;
    } else {
        let { provenanceMarker } = f(e);
        try {
            let d = await lstat(provenanceMarker);
            if (!d.isFile() || d.size > k) {
                return;
            }
            n = await readFile(provenanceMarker, "utf-8");
        } catch  {
            return;
        }
    }
    let s;
    try {
        s = X(n);
    } catch  {
        return;
    }
    let o = z5o().safeParse(s);
    if (o.success) {
        return o.data.skillName;
    }
}
export { c7e, HJn, rqo, oqo, lWt, sqo };
