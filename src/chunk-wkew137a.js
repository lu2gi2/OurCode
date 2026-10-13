import { P0, E9 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { m0t } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ob, Nt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { G6e, wn } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { x8 } from "/$bunfs/root/chunk-peahjaep.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { de, W_e } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { RM, Gye } from "/$bunfs/root/chunk-rhjwzamj.js";
import { oce, qJ, sce } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { N6, UQe, Tj, vme } from "/$bunfs/root/chunk-yd9715tx.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { COe } from "/$bunfs/root/chunk-w5h19esn.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function h() {
    return {
        provider: Ie(),
        awsRegion: G6e(),
        vertexRegion: m0t(),
        vertexProjectId: a.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
        accountDigest: ln([
            a.AWS_PROFILE,
            a.AWS_BEARER_TOKEN_BEDROCK,
            a.AWS_ACCESS_KEY_ID,
            a.GOOGLE_APPLICATION_CREDENTIALS
        ].map((o)=>o ?? "").join(`
`))
    };
}
function O(o, targetProvider) {
    let g = h();
    let d = o.provider === targetProvider && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
    t(`Provider-setup restart: ${d ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${targetProvider})`);
    return d;
}
const E = "Your settings were saved — restart Claude Code to apply them.";
async function b(context, targetProvider, g) {
    try {
        if (Nt()) {
            return `A background session can't restart itself. ${E}`;
        }
        if (Ob() !== null) {
            return `Claude can't restart itself from inside the agents view. ${E}`;
        }
        let d = L(context);
        if (d !== undefined) {
            return d;
        }
        if (wn()) {
            return;
        }
        await vme();
        await Tj(RM(context), context.storageV5);
        if (wn()) {
            return;
        }
        let m = L(context);
        if (m !== undefined) {
            return m;
        }
        let toolPermissionContext = de(context);
        let C = await N6(RM(context), "relaunch", {
            responseStreaming: Gye(context)
        }, context.storageV5);
        await UQe(C, {
            freshIfNoTranscript: true,
            extraArgs: [
                ...oce(toolPermissionContext, W_e(context), {
                    carryModel: O(g, targetProvider)
                }),
                ...sce(toolPermissionContext, E9())
            ],
            proactivity: {
                proactivityLevel: context.getProactivityLevel(),
                toolPermissionContext
            },
            env: x8()
        }, context.storageV5);
        return;
    } catch (error) {
        c(W(error));
        return `Couldn't restart Claude Code (${l(error)}). ${E}`;
    }
}
function L(context) {
    let p = qJ(de(context), P0());
    if (p.length > 0) {
        return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${E}`;
    }
    if (COe(context.taskRegistry.all())) {
        return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${E}`;
    }
}
function VLt(o) {
    let u = w(21);
    let { Wizard, cancelledEvent, targetProvider, onDone, context } = o;
    let [C, Z] = y(null);
    let [I] = y(h);
    let T = R(false);
    let [_, F] = y(false);
    let V;
    if (u[0] !== context || u[1] !== I || u[2] !== onDone || u[3] !== targetProvider) {
        V = ()=>{
            if (T.current) {
                return;
            }
            T.current = true;
            F(true);
            b(context, targetProvider, I).then((z)=>{
                if (z !== undefined) {
                    T.current = false;
                    F(false);
                    onDone(z, {
                        display: "system"
                    });
                }
            });
        };
        u[0] = context;
        u[1] = I;
        u[2] = onDone;
        u[3] = targetProvider;
        u[4] = V;
    } else {
        V = u[4];
    }
    const isActive = C !== null;
    let G;
    if (u[5] !== isActive) {
        G = {
            context: "Confirmation",
            isActive
        };
        u[5] = isActive;
        u[6] = G;
    } else {
        G = u[6];
    }
    Ze("confirm:yes", V, G);
    if (C !== null) {
        let P;
        if (u[7] !== C) {
            P = e(n, {
                color: "success",
                children: C
            });
            u[7] = C;
            u[8] = P;
        } else {
            P = u[8];
        }
        let f;
        if (u[9] !== _) {
            f = _ ? e(n, {
                dimColor: true,
                children: "Restarting Claude Code…"
            }) : r(n, {
                dimColor: true,
                children: [
                    "Press ",
                    e(n, {
                        bold: true,
                        children: "Enter"
                    }),
                    " to restart Claude Code."
                ]
            });
            u[9] = _;
            u[10] = f;
        } else {
            f = u[10];
        }
        let k;
        if (u[11] !== P || u[12] !== f) {
            k = r(s, {
                flexDirection: "column",
                gap: 1,
                marginTop: 1,
                children: [
                    P,
                    f
                ]
            });
            u[11] = P;
            u[12] = f;
            u[13] = k;
        } else {
            k = u[13];
        }
        return k;
    }
    let onComplete;
    if (u[14] === S) {
        onComplete = (ee)=>Z(ee);
        u[14] = onComplete;
    } else {
        onComplete = u[14];
    }
    let onCancel;
    if (u[15] !== cancelledEvent || u[16] !== onDone) {
        onCancel = ()=>{
            i(cancelledEvent, {});
            onDone();
        };
        u[15] = cancelledEvent;
        u[16] = onDone;
        u[17] = onCancel;
    } else {
        onCancel = u[17];
    }
    let k;
    if (u[18] !== Wizard || u[19] !== onCancel) {
        k = e(Wizard, {
            onComplete,
            onCancel
        });
        u[18] = Wizard;
        u[19] = onCancel;
        u[20] = k;
    } else {
        k = u[20];
    }
    return k;
}
export { VLt };
