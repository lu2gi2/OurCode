import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { N3t, $3t } from "/$bunfs/root/chunk-fv3gxsmx.js";
import { me, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { appendFile, chmod, mkdir, readdir, rmdir, unlink } from "fs/promises";
import { createServer } from "net";
import { hostname, platform } from "os";
import { join } from "path";
const native_host_version = "1.0.0";
const w = 1048576;
const T = 64;
const timeout = 2000;
let k;
function s(e, ...t) {
    if (k) {
        let n = new Date().toISOString();
        let r = t.length > 0 ? ` ${_(t)}` : "";
        let i = `[${n}] [Claude Chrome Native Host] ${e}${r}
`;
        appendFile(k, i).catch(()=>{});
    }
    console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
let C;
async function L() {
    let e = C ??= z();
    try {
        let t = await e;
        if (t !== undefined) {
            return t;
        }
    } catch  {
        s("Computer name lookup failed");
    }
    if (C === e) {
        C = undefined;
    }
    try {
        return d(hostname());
    } catch  {
        return;
    }
}
function d(e) {
    let t = e.replace(/\p{Cc}/gu, "").trim().replace(/\.local$/i, "").trim();
    if (t) {
        return ne(t, T);
    }
}
async function z() {
    switch(platform()){
        case "darwin":
            {
                let { stdout, code } = await it("/usr/sbin/scutil", [
                    "--get",
                    "ComputerName"
                ], {
                    timeout,
                    useCwd: false,
                    stderr: "ignore"
                });
                if (code === 0) {
                    return d(stdout);
                }
                return undefined;
            }
        case "win32":
            return d(a.COMPUTERNAME ?? "");
        default:
            return d(hostname());
    }
}
function c(e) {
    let t = Buffer.from(e, "utf-8");
    let n = Buffer.alloc(4);
    n.writeUInt32LE(t.length, 0);
    process.stdout.write(n);
    process.stdout.write(t);
}
export async function runChromeNativeHost() {
    return Zr("chrome_native_host_run", async ()=>{
        s("Initializing...");
        let e = new S;
        let t = new R;
        await e.start();
        while(true){
            let n = await t.read();
            if (n === null) {
                break;
            }
            await e.handleMessage(n);
        }
        await e.stop();
    });
}
const D = p(()=>bt({
        type: me()
    }).passthrough());
class S {
    mcpClients = new Map;
    nextClientId = 1;
    server = null;
    running = false;
    socketPath = null;
    async start() {
        if (this.running) {
            return;
        }
        this.socketPath = $3t();
        if (platform() !== "win32") {
            let e = N3t();
            await unlink(e).catch(()=>{});
            await mkdir(e, {
                recursive: true,
                mode: 448
            });
            await chmod(e, 448).catch(()=>{});
            try {
                let t = await readdir(e);
                for (let n of t){
                    if (!n.endsWith(".sock")) {
                        continue;
                    }
                    let r = parseInt(n.replace(".sock", ""), 10);
                    if (isNaN(r)) {
                        continue;
                    }
                    try {
                        process.kill(r, 0);
                    } catch  {
                        await unlink(join(e, n)).catch(()=>{});
                        s(`Removed stale socket for PID ${r}`);
                    }
                }
            } catch  {}
        }
        s(`Creating socket listener: ${this.socketPath}`);
        this.server = createServer((e)=>this.handleMcpClient(e));
        await new Promise((resolve, reject)=>{
            this.server.listen(this.socketPath, ()=>{
                s("Socket server listening for connections");
                this.running = true;
                resolve();
            });
            this.server.on("error", (n)=>{
                s("Socket server error:", n);
                reject(n);
            });
        });
        if (platform() !== "win32") {
            try {
                await chmod(this.socketPath, 384);
                s("Socket permissions set to 0600");
            } catch (error) {
                s("Failed to set socket permissions:", error);
            }
        }
    }
    async stop() {
        if (!this.running) {
            return;
        }
        for (let [, e] of this.mcpClients){
            e.socket.destroy();
        }
        this.mcpClients.clear();
        if (this.server) {
            await new Promise((resolve)=>{
                this.server.close(()=>resolve());
            });
            this.server = null;
        }
        if (platform() !== "win32" && this.socketPath) {
            try {
                await unlink(this.socketPath);
                s("Cleaned up socket file");
            } catch  {}
            try {
                let e = N3t();
                if ((await readdir(e)).length === 0) {
                    await rmdir(e);
                    s("Removed empty socket directory");
                }
            } catch  {}
        }
        this.running = false;
    }
    async isRunning() {
        return this.running;
    }
    async handleMessage(e) {
        let t;
        try {
            t = X(e);
        } catch (error) {
            s("Invalid JSON from Chrome:", error.message);
            c(_({
                type: "error",
                error: "Invalid message format"
            }));
            return;
        }
        let n = D().safeParse(t);
        if (!n.success) {
            s("Invalid message from Chrome:", n.error.message);
            c(_({
                type: "error",
                error: "Invalid message format"
            }));
            return;
        }
        let n_data = n.data;
        s(`Handling Chrome message type: ${n_data.type}`);
        switch(n_data.type){
            case "ping":
                s("Responding to ping");
                c(_({
                    type: "pong",
                    timestamp: Date.now()
                }));
                break;
            case "get_status":
                L().then((computer_name)=>c(_({
                        type: "status_response",
                        native_host_version,
                        computer_name
                    }))).catch((i)=>s("Failed to send status_response:", i));
                break;
            case "tool_response":
                {
                    if (this.mcpClients.size > 0) {
                        s(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
                        let { type, ...rest } = n_data;
                        let o = Buffer.from(_(rest), "utf-8");
                        let f = Buffer.alloc(4);
                        f.writeUInt32LE(o.length, 0);
                        let h = Buffer.concat([
                            f,
                            o
                        ]);
                        for (let [m, g] of this.mcpClients){
                            try {
                                g.socket.write(h);
                            } catch (error) {
                                s(`Failed to send to MCP client ${m}:`, error);
                            }
                        }
                    }
                    break;
                }
            case "notification":
                {
                    if (this.mcpClients.size > 0) {
                        s(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
                        let { type, ...rest } = n_data;
                        let o = Buffer.from(_(rest), "utf-8");
                        let f = Buffer.alloc(4);
                        f.writeUInt32LE(o.length, 0);
                        let h = Buffer.concat([
                            f,
                            o
                        ]);
                        for (let [m, g] of this.mcpClients){
                            try {
                                g.socket.write(h);
                            } catch (error) {
                                s(`Failed to send notification to MCP client ${m}:`, error);
                            }
                        }
                    }
                    break;
                }
            default:
                s(`Unknown message type: ${n_data.type}`);
                c(_({
                    type: "error",
                    error: `Unknown message type: ${n_data.type}`
                }));
        }
    }
    handleMcpClient(socket) {
        let id = this.nextClientId++;
        let n = {
            id,
            socket,
            buffer: Buffer.alloc(0)
        };
        this.mcpClients.set(id, n);
        s(`MCP client ${id} connected. Total clients: ${this.mcpClients.size}`);
        c(_({
            type: "mcp_connected"
        }));
        socket.on("data", (r)=>{
            n.buffer = Buffer.concat([
                n.buffer,
                r
            ]);
            while(n.buffer.length >= 4){
                let i = n.buffer.readUInt32LE(0);
                if (i === 0 || i > w) {
                    s(`Invalid message length from MCP client ${id}: ${i}`);
                    socket.destroy();
                    return;
                }
                if (n.buffer.length < 4 + i) {
                    break;
                }
                let l = n.buffer.slice(4, 4 + i);
                n.buffer = n.buffer.slice(4 + i);
                try {
                    let o = X(l.toString("utf-8"));
                    s(`Forwarding tool request from MCP client ${id}: ${o.method}`);
                    c(_({
                        type: "tool_request",
                        method: o.method,
                        params: o.params
                    }));
                } catch (error) {
                    s(`Failed to parse tool request from MCP client ${id}:`, error);
                }
            }
        });
        socket.on("error", (r)=>{
            s(`MCP client ${id} error: ${r}`);
        });
        socket.on("close", ()=>{
            s(`MCP client ${id} disconnected. Remaining clients: ${this.mcpClients.size - 1}`);
            this.mcpClients.delete(id);
            c(_({
                type: "mcp_disconnected"
            }));
        });
    }
}
class R {
    buffer = Buffer.alloc(0);
    pendingResolve = null;
    closed = false;
    constructor(){
        process.stdin.on("data", (e)=>{
            this.buffer = Buffer.concat([
                this.buffer,
                e
            ]);
            this.tryProcessMessage();
        });
        process.stdin.on("end", ()=>{
            this.closed = true;
            if (this.pendingResolve) {
                this.pendingResolve(null);
                this.pendingResolve = null;
            }
        });
        process.stdin.on("error", ()=>{
            this.closed = true;
            if (this.pendingResolve) {
                this.pendingResolve(null);
                this.pendingResolve = null;
            }
        });
    }
    tryProcessMessage() {
        if (!this.pendingResolve) {
            return;
        }
        if (this.buffer.length < 4) {
            return;
        }
        let e = this.buffer.readUInt32LE(0);
        if (e === 0 || e > w) {
            s(`Invalid message length: ${e}`);
            this.pendingResolve(null);
            this.pendingResolve = null;
            return;
        }
        if (this.buffer.length < 4 + e) {
            return;
        }
        let t = this.buffer.subarray(4, 4 + e);
        this.buffer = this.buffer.subarray(4 + e);
        let n = t.toString("utf-8");
        this.pendingResolve(n);
        this.pendingResolve = null;
    }
    async read() {
        if (this.closed) {
            return null;
        }
        if (this.buffer.length >= 4) {
            let e = this.buffer.readUInt32LE(0);
            if (e > 0 && e <= w && this.buffer.length >= 4 + e) {
                let t = this.buffer.subarray(4, 4 + e);
                this.buffer = this.buffer.subarray(4 + e);
                return t.toString("utf-8");
            }
        }
        return new Promise((resolve)=>{
            this.pendingResolve = resolve;
            this.tryProcessMessage();
        });
    }
}
