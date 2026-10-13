import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const Hm = C(function(h) {
    class s extends Error {
        name = "ProviderError";
        tryNextLink;
        constructor(r, t = true){
            let n;
            let e = true;
            if (typeof t === "boolean") {
                n = undefined;
                e = t;
            } else if (t != null && typeof t === "object") {
                n = t.logger;
                e = t.tryNextLink ?? true;
            }
            super(r);
            this.tryNextLink = e;
            Object.setPrototypeOf(this, s.prototype);
            n?.debug?.(`@smithy/property-provider ${e ? "->" : "(!)"} ${r}`);
        }
        static from(r, t = true) {
            return Object.assign(new this(r.message, t), r);
        }
    }
    class f extends s {
        name = "CredentialsProviderError";
        constructor(r, t = true){
            super(r, t);
            Object.setPrototypeOf(this, f.prototype);
        }
    }
    class l extends s {
        name = "TokenProviderError";
        constructor(r, t = true){
            super(r, t);
            Object.setPrototypeOf(this, l.prototype);
        }
    }
    const y = (...r)=>async ()=>{
            if (r.length === 0) {
                throw new s("No providers in chain");
            }
            let t;
            for (let n of r){
                try {
                    return await n();
                } catch (error) {
                    t = error;
                    if (error?.tryNextLink) {
                        continue;
                    }
                    throw error;
                }
            }
            throw t;
        };
    const p = (r)=>()=>Promise.resolve(r);
    const d = (r, t, n)=>{
        let e;
        let o;
        let i;
        let c = false;
        let a = async ()=>{
            if (!o) {
                o = r();
            }
            try {
                e = await o;
                i = true;
                c = false;
            } finally{
                o = undefined;
            }
            return e;
        };
        if (t === undefined) {
            return async (u)=>{
                if (!i || u?.forceRefresh) {
                    e = await a();
                }
                return e;
            };
        }
        return async (u)=>{
            if (!i || u?.forceRefresh) {
                e = await a();
            }
            if (c) {
                return e;
            }
            if (n && !n(e)) {
                c = true;
                return e;
            }
            if (t(e)) {
                await a();
                return e;
            }
            return e;
        };
    };
    h.CredentialsProviderError = f;
    h.ProviderError = s;
    h.TokenProviderError = l;
    h.chain = y;
    h.fromStatic = p;
    h.memoize = d;
});
