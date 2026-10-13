import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { $a } from "/$bunfs/root/chunk-k3pmdjj0.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
import { o, oe, T, u, _t, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import "/$bunfs/root/chunk-79wfew46.js";
const n = p(()=>u({
        skills: T(_t({
            frontmatter: ue(o(), oe()).nullish(),
            uri: o().nullish(),
            digest: o().nullish()
        }).catch({})),
        nextCursor: o().nullish()
    }));
const l = p(()=>u({
        skill: oe().optional(),
        resultType: oe().optional(),
        ttlMs: oe().optional(),
        cacheScope: oe().optional(),
        _meta: oe().optional()
    }));
export function listMcpSkillPage(e, cursor) {
    return hi(e.client).request({
        method: "skills/list",
        params: cursor === undefined ? {} : {
            cursor
        }
    }, n(), {
        timeout: $a()
    });
}
export function getMcpSkill(e, uri) {
    return hi(e.client).request({
        method: "skills/get",
        params: {
            uri
        }
    }, l(), {
        timeout: $a()
    });
}
