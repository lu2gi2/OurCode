import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { mkdir, readFile } from "fs/promises";
import { dirname } from "path";
function Wne(e, f, { defaultValue, mode, ensureDir = false, indent, trailingNewline = false }) {
    function u() {
        if (S(defaultValue)) {
            return defaultValue();
        }
        return defaultValue;
    }
    async function read() {
        let n;
        try {
            n = await readFile(e, "utf8");
        } catch (error) {
            if (z(error)) {
                return u();
            }
            throw error;
        }
        let r;
        try {
            r = X(n);
        } catch (error) {
            t(`jsonStore: ${e} is not valid JSON: ${error}`, {
                level: "warn"
            });
            return u();
        }
        let o = f().safeParse(r);
        if (!o.success) {
            t(`jsonStore: ${e} failed schema validation: ${o.error.message}`, {
                level: "warn"
            });
            return u();
        }
        return o.data;
    }
    async function write(n) {
        if (ensureDir !== false) {
            await mkdir(dirname(e), {
                recursive: true,
                mode: ensureDir === true ? undefined : ensureDir.mode
            });
        }
        let r = _(n, null, indent) + (trailingNewline ? `
` : "");
        await En(e, r, mode);
    }
    let l = Promise.resolve();
    function update(n) {
        let r = l.then(async ()=>{
            let o = n(await read());
            await write(o);
            return o;
        });
        l = r.then(()=>{}, ()=>{});
        return r;
    }
    return {
        path () {
            return e;
        },
        read,
        write,
        update
    };
}
function S(defaultValue) {
    return typeof defaultValue === "function";
}
export { Wne };
