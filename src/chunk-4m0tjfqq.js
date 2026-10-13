import { fr as isKeySegment, PO, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Df } from "/$bunfs/root/chunk-3fj60qgx.js";
import { ff } from "/$bunfs/root/chunk-bd805sh6.js";
import { Mg } from "/$bunfs/root/chunk-2d9a83dh.js";
import { isAbsolute, sep, basename, dirname, join, relative } from "path";
function l(e) {
    let n = process.cwd();
    if (n.endsWith(sep)) {
        return n + e;
    }
    return n + sep + e;
}
function ykt(e) {
    return (n)=>e.hostFiles.realPath(ff.workspace(n === "" || isAbsolute(n) ? n : l(n)), {
            native: true
        });
}
function _T(e) {
    if (e === undefined) {
        return undefined;
    }
    return {
        hoverRestOn: j(),
        realPath: ykt(e)
    };
}
function Xp(e, n) {
    if (!j() || n === undefined) {
        return;
    }
    if (!e.endsWith(".jsonl")) {
        return;
    }
    let t = dirname(e);
    if (dirname(t) !== Df()) {
        return;
    }
    let r = basename(t);
    let o = basename(e, ".jsonl");
    if (e !== join(Df(), r, `${o}.jsonl`)) {
        return;
    }
    let i = $e.transcript(r, o);
    if (Mg(i) === undefined) {
        return {
            backend: n,
            key: i
        };
    }
}
function gns(e, n) {
    if (!j() || n === undefined) {
        return;
    }
    let t = relative(Df(), e);
    if (t === "" || t === ".." || t.startsWith(`..${sep}`) || isAbsolute(t)) {
        return;
    }
    let r = t.split(sep);
    if (e !== join(Df(), ...r)) {
        return;
    }
    let o = r.at(-1);
    if (r.length < 4 || r[2] !== "subagents" || o === undefined || !o.startsWith("agent-") || !o.endsWith(".jsonl")) {
        return;
    }
    let i = o.slice(6, -6);
    let d = r.slice(3, -1);
    if (!PO([
        r[0],
        r[1],
        i
    ]) || d.length > 0 && !PO(d)) {
        return;
    }
    let s = $e.transcript(r[0], r[1], i, d.length > 0 ? d : undefined);
    if (Mg(s) === undefined) {
        return {
            backend: n,
            key: s
        };
    }
}
function uW(e) {
    if (!j() || e === undefined) {
        return;
    }
    return {
        backend: e,
        transcriptKey: $e.transcript,
        isKeySegment,
        realWorkspacePath: ykt(e)
    };
}
function pv(source) {
    if (source === undefined) {
        return undefined;
    }
    return {
        source,
        hoverRestOn: j()
    };
}
export { ykt, _T, Xp, gns, uW, pv };
