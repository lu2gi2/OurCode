import { VPo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { St, _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { bd, iO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cl } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { JIe } from "/$bunfs/root/chunk-qt3j4tgz.js";
import { Ds } from "/$bunfs/root/chunk-kasbfbhj.js";
import { o, E, De } from "/$bunfs/root/chunk-smx21d0k.js";
import { rm } from "fs/promises";
import { join } from "path";
const s = ".pending-wakeup";
const m = 1024;
const u = p(()=>De({
        toolUseId: o().min(1).max(256),
        scheduledFor: E().int().positive(),
        chainStartedAt: E().int().nonnegative()
    }));
async function ENt(i, r) {
    let e = join(i, s);
    try {
        if (r === undefined) {
            if (await rm(e, {
                force: true
            }).then(()=>true, (d)=>{
                cl(d);
                return false;
            })) {
                return;
            }
        }
        await JIe(e, r === undefined ? "" : _(r));
    } catch (error) {
        if (!z(error)) {
            cl(error);
        }
    }
}
async function $0o(i) {
    let r = await Ba(join(i, s), m);
    if (!r) {
        return null;
    }
    try {
        let e = u().safeParse(X(r));
        if (e.success) {
            return e.data;
        }
        return null;
    } catch  {
        return null;
    }
}
class wHr {
    #o = Promise.resolve();
    #r = 0;
    #e;
    #i;
    constructor(){
        this.#i = VPo(this.#n);
    }
    #n = (i)=>{
        try {
            if (!bd()) {
                return;
            }
            let r = iO();
            if (r === undefined) {
                return;
            }
            if (i !== undefined && Ds()) {
                return;
            }
            this.#e ??= St(()=>this.#o);
            let e = ++this.#r;
            this.#o = this.#o.then(()=>{
                if (e === this.#r) {
                    return ENt(r, i);
                }
            });
        } catch (error) {
            c(error);
        }
    };
    flush() {
        return this.#o;
    }
    dispose() {
        this.#i();
        this.#o.then(()=>this.#e?.());
    }
}
export { ENt, $0o, wHr };
