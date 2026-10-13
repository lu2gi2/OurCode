import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { OPe, k2n, Exr, MBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, $r, W, v, Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { KE } from "/$bunfs/root/chunk-2d9a83dh.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { SC } from "/$bunfs/root/chunk-x47nahfr.js";
import { jL } from "/$bunfs/root/chunk-38fr02qr.js";
import { zS } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { fW } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { vVr, ESn } from "/$bunfs/root/chunk-zz6kvk8n.js";
import { hVr } from "/$bunfs/root/chunk-f3nx7zc0.js";
import { _as } from "/$bunfs/root/chunk-8yak0fbv.js";
import { $L } from "/$bunfs/root/chunk-gsr2devr.js";
import { Or } from "/$bunfs/root/chunk-b7w13qrv.js";
import { o, Vxe } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { open } from "fs/promises";
import { join } from "path";
const oft = 64;
const y = 262144;
const T = new Set([
    "ELOOP",
    "ENXIO"
]);
function sft(e) {
    return e.normalize("NFC");
}
function j0t() {
    return MBe() === null && SC() && jL(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND);
}
function W0t(e) {
    let t = OPe();
    return t.size > 0 && e.some(({ fileUuid, name })=>{
        let n = t.get(sft(name));
        return n !== undefined && n.fileUuid !== fileUuid.toLowerCase();
    });
}
function HIr(e) {
    return e.length > 0 && j0t() && (k2n() !== "done" || W0t(e));
}
function g() {
    return join($L(), ".placed-by-name.json");
}
async function Din() {
    if (k2n() !== "done") {
        J("warn", "turn_handoff_files_by_name_table", {
            state: "not_stored",
            error_code: b("table_unread")
        });
        return;
    }
    try {
        await En(g(), _([
            ...OPe()
        ]), 384);
    } catch (error) {
        J("warn", "turn_handoff_files_by_name_table", {
            state: "not_stored",
            error_code: Vr(error) ?? b("unknown")
        });
    }
}
function R(e) {
    if (!Array.isArray(e) || e.length !== 2) {
        return false;
    }
    let [t, s] = e;
    if (typeof t !== "string" || typeof s !== "object" || s === null) {
        return false;
    }
    let { path, fileUuid, dev, ino, mtimeMs, size, sha256, ambiguous } = s;
    return typeof path === "string" && typeof fileUuid === "string" && [
        dev,
        ino,
        mtimeMs,
        size
    ].every((d)=>typeof d === "number" && Number.isFinite(d)) && typeof sha256 === "string" && (ambiguous === undefined || ambiguous === true);
}
function Lin() {
    let e = k2n();
    if (e !== undefined) {
        if (e === "done") {
            return Promise.resolve();
        }
        return e;
    }
    let t = A().then((s)=>{
        Exr(s.state === "table_unread" ? undefined : "done");
        if (s.state !== "table_absent") {
            J("info", "turn_handoff_files_by_name_table", s);
        }
    });
    Exr(t);
    return t;
}
async function A() {
    let e;
    try {
        let r = await open(g(), oa | ai);
        try {
            let n = await r.stat();
            let l = n.isFile() && n.size <= y ? await KE(r, y, n.size) : undefined;
            e = l === undefined || l.overLimit ? undefined : X(l.bytes.toString("utf8"));
        } finally{
            await r.close();
        }
    } catch (error) {
        let n = v(error);
        return {
            state: n === "ENOENT" ? "table_absent" : n === undefined || T.has(n) ? "table_damaged" : "table_unread",
            rows: 0
        };
    }
    if (!Array.isArray(e) || e.length > oft || !e.every(R)) {
        return {
            state: "table_damaged",
            rows: 0
        };
    }
    let t = OPe();
    let s = [
        ...t
    ];
    t.clear();
    for (let [r, n] of e){
        let { path, fileUuid, dev, ino, mtimeMs, size, sha256, ambiguous } = n;
        t.set(r, {
            path,
            fileUuid: fileUuid.toLowerCase(),
            dev,
            ino,
            mtimeMs,
            size,
            sha256,
            ...ambiguous && {
                ambiguous
            },
            fromEarlierProcess: true
        });
    }
    for (let [r, n] of s){
        t.delete(r);
        t.set(r, n);
    }
    for (let r of [
        ...t.keys()
    ].slice(0, Math.max(0, t.size - oft))){
        t.delete(r);
    }
    return {
        state: "table_read",
        rows: e.length
    };
}
const DIr = {
    invalid_path: "sad",
    unsupported_name: "sad",
    symlink_in_path: "sad",
    path_not_canonical: "sad",
    read_rule: "sad",
    not_found: "sad",
    not_a_directory: "sad",
    os_permission_denied: "sad",
    workspace_moved: "bad",
    unexpected_error: "bad"
};
const E = "list denied: ";
function L0(e, t) {
    return new $r(`${E}${e}`, t, e);
}
function Nin(e) {
    if (!(e instanceof $r)) {
        return;
    }
    let e_errorClass = e.errorClass;
    if (e_errorClass !== undefined && O(e_errorClass) && e.message === `${E}${e_errorClass}`) {
        return e_errorClass;
    }
}
function O(e) {
    return Object.hasOwn(DIr, e);
}
const C = {
    supported: true,
    refusedInputFields: ESn,
    decidingInputFields: [
        "command",
        "run_in_background",
        "dangerouslyDisableSandbox"
    ]
};
function L() {
    return import.meta.require("/$bunfs/root/chunk-p5525etb.js").PowerShellTool;
}
function LIr(e, t) {
    let s = L();
    let r = vVr({
        edition: t?.powershell?.edition ?? null,
        buildTools: [],
        onWindows: true,
        backgroundRuns: false
    });
    let n = k(s.inputSchema, [
        "run_in_background"
    ]).extend({
        [Or]: o().optional().describe("Optional. Names the attached computer this runs on — the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.")
    });
    let l = Object.defineProperties({}, {
        ...Object.getOwnPropertyDescriptors(s),
        inputSchema: {
            value: n,
            enumerable: true
        },
        prompt: {
            value: async ()=>r,
            enumerable: true
        },
        isEnabled: {
            value: ()=>true,
            enumerable: true
        },
        remoteExecution: {
            value: C,
            enumerable: true
        },
        suppressesAllPermissionUpdates: {
            value: ()=>true,
            enumerable: true
        },
        call: {
            value: async ()=>{
                throw new x(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine");
            },
            enumerable: true
        }
    });
    return _as(l);
}
function OMo(e, t) {
    if (zS()) {
        return 0;
    }
    let s = D(t.filter((n)=>n.tool === Ct).map((n)=>n.host));
    if (s.length === 0) {
        return 0;
    }
    let r;
    try {
        r = s.map((machine)=>({
                tool: LIr(machine, undefined),
                machine
            }));
    } catch (error) {
        c(W(error));
        return 0;
    }
    e.presentUntilAnnounced(r, fW);
    return r.length;
}
function k(inputSchema, t) {
    if (!(inputSchema instanceof Vxe)) {
        throw TypeError("PowerShellTool no longer declares an object schema");
    }
    let s = t.filter((n)=>n in inputSchema.shape);
    let r = Object.fromEntries(s.map((n)=>[
            n,
            true
        ]));
    if (s.length === 0) {
        return inputSchema;
    }
    return inputSchema.omit(r);
}
const S = 8;
const NIr = 256;
function MMo(e = ()=>performance.now()) {
    let t = [];
    let s = [];
    let turnsAtHoldBefore = 0;
    let ordinal = 0;
    let l = false;
    let m = false;
    let f = false;
    let p = Oe();
    return {
        noteStagedRow (u) {
            if (u.mount_path !== hVr) {
                return false;
            }
            let u_content_sha256 = u.content_sha256;
            let etag = typeof u_content_sha256 === "string" && u_content_sha256.length > 0 && u_content_sha256.length <= NIr ? u_content_sha256 : null;
            if (etag === null) {
                if (!f) {
                    f = true;
                    J("warn", "home_seed_stage_without_usable_etag", {});
                }
                return false;
            }
            ordinal++;
            let h = {
                etag,
                beforeFirstCommand: !l && !m,
                ordinal
            };
            t = [
                ...t,
                h
            ].slice(-S);
            s = [
                ...s,
                {
                    etag,
                    ordinal,
                    heardAtMs: e(),
                    turnsAtHoldBefore
                }
            ].slice(-S);
            try {
                p.emit(h);
            } catch  {
                J("error", "home_seed_announcement_listener_threw", {});
            }
            return true;
        },
        noteStagedRowRead (u) {
            if (u.mount_path !== hVr) {
                return;
            }
            let i = s.find((d)=>d.etag === u.content_sha256);
            if (i === undefined) {
                return {
                    onRecord: false
                };
            }
            s = s.filter((d)=>d !== i);
            return {
                onRecord: true,
                ordinal: i.ordinal,
                behindMs: Math.round(e() - i.heardAtMs),
                turnsAtHoldBefore: i.turnsAtHoldBefore,
                turnAtHoldMeanwhile: turnsAtHoldBefore > i.turnsAtHoldBefore
            };
        },
        markTurnAtHold () {
            turnsAtHoldBefore++;
        },
        markUserFrameDelivered () {
            m = true;
        },
        markFirstCommandDequeued () {
            l = true;
        },
        firstCommandDequeued () {
            return l;
        },
        announcements () {
            return t;
        },
        announcementCount () {
            return ordinal;
        },
        announcementForEtag (u) {
            return t.findLast((i)=>i.etag === u);
        },
        announced: {
            subscribe: p.subscribe
        }
    };
}
export { oft, sft, j0t, W0t, HIr, Din, Lin, DIr, L0, Nin, LIr, OMo, NIr, MMo };
