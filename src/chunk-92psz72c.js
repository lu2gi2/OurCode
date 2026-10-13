import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { vl, Wp, wt, b6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { Lw, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { OF } from "/$bunfs/root/chunk-pp3y3t61.js";
import { ikr, Z1n } from "/$bunfs/root/chunk-k3tkc302.js";
import { Fat, coe, Y5, sn, doe, nf, Fp, fPt } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { wCt } from "/$bunfs/root/chunk-2ya7enrh.js";
import { Ofo } from "/$bunfs/root/chunk-k8dhpbv8.js";
const hce = {
    policy: "allow_remote_sessions"
};
const prefix = "Cloud sessions use your claude.ai login.";
const _ = {
    ANTHROPIC_API_KEY: {
        inUse: "ANTHROPIC_API_KEY",
        noun: "key",
        fetchedTheLoadedAnswer: ()=>Ofo()
    },
    ANTHROPIC_AUTH_TOKEN: {
        inUse: "ANTHROPIC_AUTH_TOKEN",
        noun: "token",
        fetchedTheLoadedAnswer: ()=>Fat() === true
    },
    apiKeyHelper: {
        inUse: "the key from apiKeyHelper",
        noun: "key",
        fetchedTheLoadedAnswer: ()=>Fat() === null
    }
};
function Uye() {
    let t = Ie();
    if (t !== "firstParty") {
        return `Cloud sessions aren't available with ${Lw[t]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
    }
    let { policy } = hce;
    let { featureLabel, verb } = Y5(policy);
    let i = nf(policy, featureLabel, verb);
    if (i === null) {
        return null;
    }
    let s = Fp(policy);
    if (s === "org_denied") {
        let u = doe() && OF().length === 0 ? d() : null;
        if (!u?.goesOutFirst) {
            return i;
        }
        let { inUse, noun, fetchedTheLoadedAnswer } = _[u.credential];
        if (!fetchedTheLoadedAnswer()) {
            return i;
        }
        return `${featureLabel} ${verb} ${Z1n([])}. This session is using ${inUse}, so Claude Code checked the policy for the organization that ${noun} belongs to. ${prefix}`;
    }
    let o = coe();
    if (s !== "cache_miss" || o === null || o.success || o.retrying || o.httpStatus === 404) {
        return i;
    }
    let c = ikr(featureLabel, verb, o);
    if (o.errorCode !== "auth_failed" || o.httpStatus === 403 || fPt(policy) || d() === null) {
        return c;
    }
    let p = wCt({
        prefix,
        suffix: "to use cloud sessions."
    });
    return `${c} ${p}`;
}
function aas() {
    return Fp(hce.policy) === "org_denied";
}
function d() {
    if (a.ANTHROPIC_UNIX_SOCKET || Ne(false) || !b6e() || wt()) {
        return null;
    }
    let { key, source } = Wp();
    if (source === "ANTHROPIC_API_KEY") {
        if (key === a.ANTHROPIC_API_KEY) {
            return {
                credential: "ANTHROPIC_API_KEY",
                goesOutFirst: true
            };
        }
        return null;
    }
    if (source === "apiKeyHelper") {
        return {
            credential: "apiKeyHelper",
            goesOutFirst: key !== null
        };
    }
    if (vl().source === "ANTHROPIC_AUTH_TOKEN") {
        return {
            credential: "ANTHROPIC_AUTH_TOKEN",
            goesOutFirst: key === null
        };
    }
    return null;
}
function pAe() {
    return !Tt() && sn("allow_remote_sessions") && sn("allow_quick_web_setup");
}
function yce() {
    return !ou() && pAe();
}
function aot() {
    return `${dn().CLAUDE_AI_ORIGIN}/connect-github`;
}
function Yqe(t = "this repository") {
    let e = aot();
    let n = yce() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
    return `GitHub isn't connected to your Claude account, so ${t} can't be cloned in the cloud. ${n}`;
}
const h = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up cloud sessions with your GitHub account",
    availability: [
        "claude-ai"
    ],
    isEnabled: pAe,
    policyGate: hce,
    get isHidden () {
        return !sn("allow_remote_sessions") || !sn("allow_quick_web_setup");
    }
};
const izs = h;
export { hce, Uye, aas, pAe, yce, aot, Yqe, izs };
