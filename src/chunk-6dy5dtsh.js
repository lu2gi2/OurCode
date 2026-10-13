import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import { K, we, _Pr, fIo } from "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { U_ } from "/$bunfs/root/chunk-gc4z3rgw.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-hz24p3zh.js";
import "/$bunfs/root/chunk-kjg6txrm.js";
import "/$bunfs/root/chunk-wrn3nvp5.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-craerjpn.js";
import "/$bunfs/root/chunk-xb9cceab.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-6gk7mpsm.js";
import "/$bunfs/root/chunk-pp3y3t61.js";
import "/$bunfs/root/chunk-qbpgcqdd.js";
import "/$bunfs/root/chunk-gc7ea4xt.js";
import "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-wew3321y.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-qk3m4n8a.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-k7dkeqsc.js";
import "/$bunfs/root/chunk-r3z1chqx.js";
import "/$bunfs/root/chunk-6bjtvbt8.js";
import "/$bunfs/root/chunk-63xa24b4.js";
import "/$bunfs/root/chunk-9dn6gg6j.js";
import "/$bunfs/root/chunk-1692wahf.js";
import "/$bunfs/root/chunk-nj0630nv.js";
import "/$bunfs/root/chunk-03gkt7r5.js";
import "/$bunfs/root/chunk-n1fq1c8e.js";
import "/$bunfs/root/chunk-9fa34ggx.js";
import "/$bunfs/root/chunk-55x53sfe.js";
import "/$bunfs/root/chunk-xbsy70c7.js";
import { $ds, ML, r8t } from "/$bunfs/root/chunk-tsssve1m.js";
import { cLe, F_, $fr, Ffr, Lso } from "/$bunfs/root/chunk-2eh7h0gt.js";
import "/$bunfs/root/chunk-5xfyk3ds.js";
import { xF, ca } from "/$bunfs/root/chunk-6g4165br.js";
import "/$bunfs/root/chunk-77t63btp.js";
import "/$bunfs/root/chunk-yp41169e.js";
import "/$bunfs/root/chunk-2dp0fzyb.js";
import "/$bunfs/root/chunk-pj42g5eb.js";
import "/$bunfs/root/chunk-tfc1vf2h.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-m6z3m7rx.js";
import "/$bunfs/root/chunk-tybndaby.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { rename } from "fs/promises";
const l = "session";
function c(t) {
    return `${l}-${t.slice(0, 8)}`;
}
function p() {
    if (_Pr() === undefined) {
        let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
        delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME;
        fIo(t);
    }
    return _Pr() ?? null;
}
export async function initializeSessionTeam(t, n) {
    let i = t?.existingTeamName || p();
    let e = i ?? c(K());
    let a = xF(ca, e);
    let teamFilePath = cLe(e);
    if (!(i ? await F_(e, n) : null)) {
        let r = {
            name: e,
            createdAt: Date.now(),
            leadAgentId: a,
            leadSessionId: K(),
            members: [
                {
                    agentId: a,
                    name: ca,
                    agentType: ca,
                    joinedAt: Date.now(),
                    tmuxPaneId: "leader",
                    cwd: we(),
                    subscriptions: [],
                    backendType: "in-process"
                }
            ]
        };
        await Ffr(e, r, n).catch((T)=>$fr(e, T));
    }
    $ds(e);
    let o = K();
    if (e !== o) {
        await rename(ML(o), ML(e)).catch(()=>{});
    }
    await r8t(e, n);
    Lso(e);
    let color = U_[0];
    return {
        teamContext: {
            teamName: e,
            teamFilePath,
            leadAgentId: a,
            teammates: {
                [a]: {
                    name: ca,
                    agentType: ca,
                    color,
                    tmuxSessionName: "in-process",
                    tmuxPaneId: "leader",
                    cwd: we(),
                    spawnedAt: Date.now()
                }
            }
        },
        teammateColors: {
            assignments: new Map([
                [
                    a,
                    color
                ]
            ]),
            index: 1
        }
    };
}
