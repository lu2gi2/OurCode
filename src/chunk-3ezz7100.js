import { Fse, OPe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { SC } from "/$bunfs/root/chunk-x47nahfr.js";
import { ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { Gx } from "/$bunfs/root/chunk-4r6b8efh.js";
import { WD, IQ, jL } from "/$bunfs/root/chunk-38fr02qr.js";
import { zX } from "/$bunfs/root/chunk-z085q3gs.js";
import { EZe } from "/$bunfs/root/chunk-5hvq3mzf.js";
import { Trt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Ypn, Hve, Dve, PJe } from "/$bunfs/root/chunk-wce3cykr.js";
import { Uin, g9e } from "/$bunfs/root/chunk-h3fs26bg.js";
import { oft, sft, Din, Lin } from "/$bunfs/root/chunk-3hp2mm66.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { constants } from "fs";
import { lstat, open, realpath, unlink } from "fs/promises";
import { posix } from "path";
const j = 3000;
const Fin = 134217728;
const z = new Set([
    "csv",
    "docx",
    "jsonl",
    "log",
    "md",
    "ndjson",
    "ods",
    "odt",
    "parquet",
    "pdf",
    "pptx",
    "rtf",
    "tsv",
    "txt",
    "xls",
    "xlsm",
    "xlsx",
    "zip"
]);
const k = new Set([
    "cmakecache.txt",
    "cmakelists.txt",
    "conanfile.txt",
    "constraints.txt",
    "requirements.txt"
]);
const X = /^test.*\.txt$/;
function DVn(e) {
    if (e.includes(posix.sep)) {
        return "has_directory";
    }
    if (Buffer.byteLength(e) > Ypn) {
        return "too_long";
    }
    if (!Yc(e)) {
        return "odd_spelling";
    }
    let l = Hve(e);
    if (l !== undefined) {
        return l;
    }
    let o = ul(e);
    let c = o.lastIndexOf(".");
    if (c <= 0) {
        return "no_suffix";
    }
    if (!z.has(o.slice(c + 1))) {
        return "not_data";
    }
    if (k.has(o) || X.test(o)) {
        return "project_file";
    }
}
async function K(e, { fileUuid, name }, c) {
    let r = await Dve(e, name);
    if (r !== undefined) {
        return {
            outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome,
            bytes: 0
        };
    }
    let t = EZe(fileUuid, undefined);
    if (t === undefined) {
        return {
            outcome: "source_missing",
            bytes: 0
        };
    }
    if (t.size > c) {
        return {
            outcome: "over_byte_budget",
            bytes: 0
        };
    }
    let s = await zX(t.path, t.size);
    if (s === null) {
        return {
            outcome: "source_unreadable",
            bytes: 0
        };
    }
    if (at(s) !== t.sha256) {
        return {
            outcome: "source_changed",
            bytes: 0
        };
    }
    let u = await LVn(e, name, s);
    if (u.outcome === "placed") {
        await $Vn(e, {
            fileUuid,
            name
        }, t);
    }
    if (u.outcome === "refused_name") {
        return {
            outcome: `refused_${u.refusal}`,
            bytes: 0
        };
    }
    return {
        outcome: u.outcome,
        bytes: u.outcome === "placed" ? s.length : 0
    };
}
async function LVn(e, l, o) {
    return await NVn(e, l, o, (c)=>PJe(c, e, l));
}
async function NVn(e, l, o, c) {
    let r = posix.join(e, `${Uin(l)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
    let t = await open(r, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | ai, 384);
    try {
        try {
            await t.writeFile(o);
        } finally{
            await t.close();
        }
        return await c(r);
    } finally{
        await unlink(r).catch(()=>{});
    }
}
async function $Vn(e, { fileUuid, name }, { size, sha256 }) {
    let t = OPe();
    let s = sft(name);
    let path = posix.join(e, name);
    let h = t.get(s);
    t.delete(s);
    let w = await lstat(path).catch(()=>{});
    if (w === undefined) {
        return;
    }
    let S = t.size >= oft && t.keys().next().value;
    if (typeof S === "string") {
        t.delete(S);
    }
    t.set(s, {
        path,
        fileUuid: fileUuid.toLowerCase(),
        dev: w.dev,
        ino: w.ino,
        mtimeMs: Math.floor(w.mtimeMs),
        size,
        sha256,
        ...h !== undefined && h.path !== path && {
            ambiguous: true
        }
    });
}
const N = {
    filesWait: "not_reached",
    filesWaitMs: 0,
    copiedBytes: 0,
    namedInCall: 0,
    namedInCallPlaced: 0,
    namedInCallAlreadyPresent: 0,
    counts: {}
};
async function AUs(e, l, o = j, c = Fin) {
    let { fileNames } = e;
    if (fileNames === undefined) {
        return;
    }
    let t = performance.now();
    let { outcome, filesWait, counts, lastErrorCode, ...rest } = fileNames === "malformed" ? {
        ...N,
        outcome: "malformed"
    } : await Y(fileNames, e, l, o, c).catch((y)=>({
            ...N,
            outcome: "failed",
            lastErrorCode: Vr(y) ?? b("unknown")
        }));
    let files_listed = fileNames === "malformed" ? 0 : fileNames.length;
    let F = {
        outcome: d(outcome),
        files_wait: d(filesWait),
        files_wait_ms: rest.filesWaitMs,
        duration_ms: Math.round(performance.now() - t),
        approx_copied_bytes: Number(rest.copiedBytes.toPrecision(2)),
        files_listed,
        files_named_in_call: rest.namedInCall,
        files_named_in_call_placed: rest.namedInCallPlaced,
        files_named_in_call_already_present: rest.namedInCallAlreadyPresent,
        ...Gx(counts, (y, E)=>`files_${E}`),
        ...lastErrorCode !== undefined && {
            last_error_code: lastErrorCode
        }
    };
    i("tengu_turn_handoff_files_by_name", F);
    J(lastErrorCode !== undefined || outcome === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
    let I = (counts.placed ?? 0) + (counts.already_present ?? 0) + (counts.present_under_another_name ?? 0);
    let T = Fse(Object.entries(counts), ([y, E])=>{
        if (y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied") {
            return E;
        }
        return 0;
    });
    if (outcome === "aborted") ;
    else if (outcome === "not_applicable") {
        f("ccr_turn_handoff_files_by_name", outcome);
    } else if (outcome !== "finished") {
        m("ccr_turn_handoff_files_by_name", outcome);
    } else if (T === files_listed) {
        f("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
    } else if (I + T === files_listed) {
        g("ccr_turn_handoff_files_by_name");
    } else if (I > 0) {
        f("ccr_turn_handoff_files_by_name", "some_files_absent");
    } else {
        m("ccr_turn_handoff_files_by_name", "all_files_absent");
    }
}
async function Y(fileNames, l, o, c, r) {
    let t = IQ();
    let [s, u] = await Promise.all([
        se(),
        t
    ].map((n)=>realpath(n).catch(()=>{})));
    if (!SC() || !jL(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND) || u === undefined || s !== u) {
        return {
            ...N,
            outcome: "not_applicable"
        };
    }
    let h = performance.now();
    let filesWait = await Trt(o);
    let filesWaitMs = Math.round(performance.now() - h);
    await g9e(t, WD);
    await Lin();
    let C = l.messages.at(-1);
    let F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n)=>{
        if (n.type === "tool_use" && l.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null) {
            return Object.values(n.input).flatMap((p)=>{
                if (typeof p === "string") {
                    return [
                        p,
                        p.replaceAll("\\", "")
                    ];
                }
                return [];
            });
        }
        return [];
    }) : [];
    let I = new Set(fileNames.filter(({ name })=>name !== "" && F.some((p)=>p.includes(name))));
    let T = new Map;
    for (let { name, fileUuid } of fileNames){
        T.set(name, (T.get(name) ?? new Set).add(fileUuid.toLowerCase()));
    }
    let counts = {};
    let E = new Set;
    let copiedBytes = 0;
    let namedInCallPlaced = 0;
    let namedInCallAlreadyPresent = 0;
    let lastErrorCode;
    let B = false;
    let D = performance.now() + c;
    for (let n of fileNames.toSorted((p, _)=>Number(I.has(_)) - Number(I.has(p)))){
        if (o.aborted) {
            B = true;
            break;
        }
        let p = DVn(n.name);
        let _;
        if (p !== undefined) {
            _ = `refused_${p}`;
        } else if (T.get(n.name)?.size !== 1) {
            _ = "repeated_name";
        } else if (E.has(n.fileUuid.toLowerCase())) {
            _ = "present_under_another_name";
        } else if (performance.now() > D) {
            _ = "over_time_budget";
        } else {
            try {
                let P = await K(t, n, r - copiedBytes);
                _ = P.outcome;
                copiedBytes += P.bytes;
            } catch (error) {
                lastErrorCode = Vr(error) ?? b("unknown");
                _ = "copy_failed";
            }
        }
        counts[_] = (counts[_] ?? 0) + 1;
        if (_ === "placed" || _ === "already_present") {
            E.add(n.fileUuid.toLowerCase());
        }
        if (I.has(n) && _ === "placed") {
            namedInCallPlaced++;
        } else if (I.has(n) && _ === "already_present") {
            namedInCallAlreadyPresent++;
        }
    }
    if ((counts.placed ?? 0) > 0) {
        await Din();
    }
    return {
        outcome: B ? "aborted" : "finished",
        filesWait,
        filesWaitMs,
        copiedBytes,
        namedInCall: I.size,
        namedInCallPlaced,
        namedInCallAlreadyPresent,
        counts,
        ...lastErrorCode !== undefined && {
            lastErrorCode
        }
    };
}
export { Fin, DVn, LVn, NVn, $Vn, AUs };
