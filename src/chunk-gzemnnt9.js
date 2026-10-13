import { nc } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qCe } from "/$bunfs/root/chunk-30jbnw20.js";
const yFn = (o, r)=>o.catch((e)=>{
        if (qCe(e, r)) {
            return undefined;
        }
        return Promise.reject(e);
    });
const $Qt = (o, r)=>o instanceof nc || qCe(o, r);
export { $Qt, yFn };
