import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { A0t } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { JOs, St, $P, _, ie, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { n2n, ipt, vCo, b8e, ECo } from "/$bunfs/root/chunk-etbngzss.js";
import { JDe } from "/$bunfs/root/chunk-e5fn12qk.js";
import { Uls } from "/$bunfs/root/chunk-53bavyda.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { dirname, join } from "path";
const a = po(()=>vCo(new Date));
function l() {
    return join(ipt.errors(), `${a()}.jsonl`);
}
function f(e) {
    return join(ipt.mcpLogs(e), `${a()}.jsonl`);
}
function d(e) {
    let r = JOs(e);
    return {
        write (o) {
            r.write(_(o) + `
`);
        },
        flush: r.flush,
        dispose: r.dispose
    };
}
function u() {}
class c {
    writers = new Map;
    pendingWrites = Oh();
    writerFor(e) {
        let r = this.writers.get(e);
        if (!r) {
            let o = dirname(e);
            let i = false;
            r = d({
                writeFn: (s)=>{
                    this.pendingWrites.run(e, async ()=>{
                        try {
                            await m(o, e, s);
                        } catch (error) {
                            if (!i) {
                                i = true;
                                t(`Dropping log batch for ${e}: ${error instanceof Error ? error.message : String(error)}`);
                            }
                        }
                    });
                },
                flushIntervalMs: 1000,
                maxBufferSize: 50
            });
            this.writers.set(e, r);
            St(async ()=>{
                r?.dispose();
                await this.pendingWrites.settle();
            });
            $P(this.flushBeforeExit);
        }
        return r;
    }
    async flush() {
        for (let e of this.writers.values()){
            e.flush();
        }
        await this.pendingWrites.settle();
    }
    flushBeforeExit = ()=>this.flush();
    async reset() {
        for (let e of this.writers.values()){
            e.dispose();
        }
        await this.pendingWrites.settle();
        this.writers.clear();
        this.pendingWrites.clearForTest();
    }
}
async function m(e, r, o) {
    let i = ie();
    try {
        await i.appendFile(r, o);
    } catch  {
        await i.mkdir(e).catch(u);
        await i.appendFile(r, o);
    }
}
function w(e, r, o) {}
function E(e) {
    if (typeof e === "string") {
        return e;
    }
    if (e && typeof e === "object") {
        let r = e;
        if (typeof r.message === "string") {
            return r.message;
        }
        if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string") {
            return r.error.message;
        }
    }
}
function v(e, r) {
    Uls(r);
    JDe(r);
    let o = A0t(r);
    let i = "";
    if (At.isAxiosError(r) && r.config?.url) {
        let s = [
            `url=${r.config.url}`
        ];
        if (r.response?.status !== undefined) {
            s.push(`status=${r.response.status}`);
        }
        let n = E(r.response?.data);
        if (n) {
            s.push(`body=${n}`);
        }
        i = `[${s.join(",")}] `;
    }
    t(`${r.name}: ${i}${o}`, {
        level: "error"
    });
    w(e, l(), {
        error: `${i}${o}`
    });
}
function h(e, r, o) {
    t(`MCP server "${r}" ${o}`, {
        level: "error"
    });
    let i = f(r);
    let s = o instanceof Error ? A0t(o) : String(o);
    let n = {
        error: ps(s),
        timestamp: new Date().toISOString(),
        sessionId: K(),
        cwd: n2n()
    };
    e.writerFor(i).write(n);
}
function S(e, r, o) {
    t(`MCP server "${r}": ${o}`);
    let i = f(r);
    let s = {
        debug: ps(o),
        timestamp: new Date().toISOString(),
        sessionId: K(),
        cwd: n2n()
    };
    e.writerFor(i).write(s);
}
function A$r() {
    ECo(y(new c));
    let b8e_droppedBeforeSink = b8e.droppedBeforeSink;
    t(b8e_droppedBeforeSink === 0 ? "Error log sink initialized" : `Error log sink initialized; ${b8e_droppedBeforeSink} events logged before it attached were dropped`);
}
function y(e) {
    return {
        logError: (r)=>v(e, r),
        logMCPError: (r, o)=>h(e, r, o),
        logMCPDebug: (r, o)=>S(e, r, o)
    };
}
export { A$r };
