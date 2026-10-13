import { aYr } from "/$bunfs/root/chunk-gs3dthpm.js";
import { sNn } from "/$bunfs/root/chunk-y9ay3abt.js";
import { nGo } from "/$bunfs/root/chunk-vdz5t614.js";
import { eGo } from "/$bunfs/root/chunk-fm11qdmj.js";
import { Ua } from "/$bunfs/root/chunk-k3tkc302.js";
import { Z4o } from "/$bunfs/root/chunk-26atsz88.js";
import { U_ } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { ice } from "/$bunfs/root/chunk-1k3a7x55.js";
import { yV } from "/$bunfs/root/chunk-ghreee2m.js";
function a(e, r) {
    return Object.entries(e.frameUrls ?? {}).find(([o, s])=>s?.url !== undefined && !ice(o) && Ua(s.url) === r)?.[0];
}
function l(e) {
    return Object.entries(e.frameUrls ?? {}).flatMap(([r, o])=>{
        if (o?.url === undefined || ice(r)) {
            return [];
        }
        if (o.dismissed === true) {
            return [];
        }
        let slug = Ua(o.url);
        let unasked = o.routineUnasked === true || o.commentUnasked === true;
        if (slug === null) {
            return [];
        }
        return [
            {
                path: r,
                slug,
                url: o.url,
                unasked
            }
        ];
    });
}
function d(e, r) {
    return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, s])=>s?.url !== undefined && Ua(s.url) === r && sNn(o));
}
const c = Object.freeze({});
const m = yV("artifactReadConsentSlugs", c);
const g = yV("artifactConsentEpoch", 0);
function D1r(e, r) {
    return {
        ownPublishes: aYr(e, r),
        workshopTelemetry: Z4o(e, r),
        whiteboardTelemetry: eGo(e, r),
        prReviewTargets: nGo(e, r),
        recordedPages: {
            isWorkshopPage: (o)=>d(e(), o),
            localSourcePath: (o)=>a(e(), o),
            heldSourcePages: ()=>l(e())
        },
        sharedReadConsent: m(e, r),
        consentEpoch: g(e, r)
    };
}
function RQe() {
    let e = {};
    return D1r(()=>e, (r)=>{
        e = r(e);
    });
}
const xQe = {
    assign: ()=>U_[0],
    get: ()=>{}
};
function HWe(e) {
    return {
        assign (r) {
            let o = e.get();
            let s = o.assignments.get(r);
            if (s) {
                return s;
            }
            let t = U_[o.index % U_.length];
            e.set((n)=>{
                if (n.assignments.has(r)) {
                    return n;
                }
                let assignments = new Map(n.assignments);
                assignments.set(r, t);
                return {
                    assignments,
                    index: n.index + 1
                };
            });
            return t;
        },
        get (r) {
            return e.get().assignments.get(r);
        }
    };
}
const Yee = Object.freeze({
    bridge: undefined,
    channel: undefined
});
class M9n {
    #e = undefined;
    #r = undefined;
    get bridge() {
        return this.#e;
    }
    get channel() {
        return this.#r;
    }
    connectBridge(e) {
        this.#e = e;
    }
    disconnectBridge() {
        this.#e = undefined;
    }
    setChannel(e) {
        this.#r = e;
    }
}
export { D1r, RQe, xQe, HWe, Yee, M9n };
