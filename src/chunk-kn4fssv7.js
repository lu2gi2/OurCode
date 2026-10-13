const x = /[aeiou]/i;
const R = /[^aeiou][aeiou][bcdfghjklmnpqrstvz]$/i;
const o = {
    begin: "began",
    bind: "bound",
    bring: "brought",
    build: "built",
    buy: "bought",
    catch: "caught",
    choose: "chose",
    come: "came",
    cut: "cut",
    debug: "debugged",
    dig: "dug",
    do: "did",
    draw: "drew",
    feed: "fed",
    feel: "felt",
    fight: "fought",
    find: "found",
    fly: "flew",
    forget: "forgot",
    freeze: "froze",
    get: "got",
    give: "gave",
    go: "went",
    have: "had",
    hide: "hid",
    hit: "hit",
    hold: "held",
    input: "input",
    keep: "kept",
    know: "knew",
    lead: "led",
    leave: "left",
    let: "let",
    lose: "lost",
    make: "made",
    mean: "meant",
    meet: "met",
    override: "overrode",
    overwrite: "overwrote",
    pay: "paid",
    put: "put",
    quit: "quit",
    read: "read",
    rebuild: "rebuilt",
    redo: "redid",
    rerun: "reran",
    reset: "reset",
    rewrite: "rewrote",
    run: "ran",
    see: "saw",
    seek: "sought",
    send: "sent",
    set: "set",
    show: "showed",
    shut: "shut",
    sit: "sat",
    sleep: "slept",
    spend: "spent",
    spin: "spun",
    split: "split",
    spread: "spread",
    stand: "stood",
    sweep: "swept",
    sync: "synced",
    take: "took",
    teach: "taught",
    tear: "tore",
    tell: "told",
    think: "thought",
    throw: "threw",
    understand: "understood",
    undo: "undid",
    unset: "unset",
    win: "won",
    unwrap: "unwrapped",
    unzip: "unzipped",
    write: "wrote"
};
const a = {
    begin: "beginning",
    commit: "committing",
    control: "controlling",
    debug: "debugging",
    emit: "emitting",
    equip: "equipping",
    forget: "forgetting",
    format: "formatting",
    input: "inputting",
    occur: "occurring",
    omit: "omitting",
    output: "outputting",
    permit: "permitting",
    prefer: "preferring",
    quit: "quitting",
    refer: "referring",
    rerun: "rerunning",
    reset: "resetting",
    screenshot: "screenshotting",
    snapshot: "snapshotting",
    submit: "submitting",
    sync: "syncing",
    transfer: "transferring",
    unset: "unsetting",
    unwrap: "unwrapping",
    unzip: "unzipping"
};
const w = new Set([
    ...Object.entries(o).filter(([e, t])=>e !== t).map(([, e])=>e),
    "been",
    "broken",
    "chosen",
    "done",
    "drawn",
    "driven",
    "eaten",
    "fallen",
    "forgotten",
    "given",
    "gone",
    "grown",
    "hidden",
    "known",
    "ridden",
    "risen",
    "seen",
    "shown",
    "spoken",
    "taken",
    "thrown",
    "torn",
    "worn",
    "written"
]);
function C(e) {
    return (e.match(/[aeiou]/gi) ?? []).length;
}
function l(e) {
    let t = e.toLowerCase();
    if (Object.hasOwn(a, t)) {
        return a[t];
    }
    if (/ie$/i.test(e)) {
        return `${e.slice(0, -2)}ying`;
    }
    if (/[^eoy]e$/i.test(e)) {
        return `${e.slice(0, -1)}ing`;
    }
    if (R.test(e) && C(e) === 1) {
        return `${e + e.slice(-1)}ing`;
    }
    if (/c$/i.test(e)) {
        return `${e}king`;
    }
    return `${e}ing`;
}
function d(e) {
    let t = e.toLowerCase();
    if (Object.hasOwn(o, t)) {
        return o[t];
    }
    if (/e$/i.test(e)) {
        return `${e}d`;
    }
    if (/[^aeiou]y$/i.test(e)) {
        return `${e.slice(0, -1)}ied`;
    }
    if (R.test(e) && C(e) === 1) {
        return `${e + e.slice(-1)}ed`;
    }
    if (/c$/i.test(e)) {
        return `${e}ked`;
    }
    if (Object.hasOwn(a, t)) {
        return `${a[t].slice(0, -3)}ed`;
    }
    return `${e}ed`;
}
function h(e, t) {
    if (/^[A-Z]/.test(e)) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }
    return t;
}
function y(e) {
    if (e.length < 2 || e.length > 16) {
        return false;
    }
    if (!/^[A-Za-z]+$/.test(e)) {
        return false;
    }
    if (e === e.toUpperCase()) {
        return false;
    }
    let t = e.toLowerCase();
    if (w.has(t)) {
        return false;
    }
    if (Object.hasOwn(o, t)) {
        return true;
    }
    if (/ing$/i.test(e) && e.length > 4) {
        return false;
    }
    if (/ed$/i.test(e) && !/eed$/i.test(e) && e.length > 3) {
        return false;
    }
    if (/s$/i.test(e) && !/(ss|us)$/i.test(e) && e.length > 3) {
        return false;
    }
    return x.test(e) || /y/i.test(e);
}
const b = new Set([
    "output",
    "input",
    "lead",
    "feed",
    "spread",
    "set",
    "cut",
    "split",
    "hit",
    "let",
    "put",
    "quit",
    "shut",
    "read",
    "go",
    "make",
    "dig",
    "tear",
    "win",
    "fly",
    "spin",
    "control",
    "permit",
    "have",
    "hold",
    "keep",
    "mean",
    "feel",
    "do",
    "see",
    "know",
    "think",
    "understand"
]);
const O = new Set([
    ...Object.keys(o).filter((e)=>!b.has(e)),
    ...Object.keys(a).filter((e)=>!b.has(e)),
    "add",
    "analyze",
    "append",
    "apply",
    "archive",
    "assert",
    "attempt",
    "autofix",
    "await",
    "benchmark",
    "bisect",
    "call",
    "capture",
    "check",
    "clone",
    "collect",
    "compare",
    "compile",
    "compute",
    "confirm",
    "connect",
    "convert",
    "copy",
    "count",
    "create",
    "curl",
    "decode",
    "delete",
    "deploy",
    "detect",
    "discard",
    "dismiss",
    "display",
    "download",
    "dump",
    "edit",
    "emit",
    "enable",
    "encode",
    "ensure",
    "enumerate",
    "evaluate",
    "execute",
    "expand",
    "expect",
    "export",
    "extract",
    "fetch",
    "fill",
    "filter",
    "fix",
    "flush",
    "focus",
    "follow",
    "generate",
    "grep",
    "identify",
    "ignore",
    "import",
    "include",
    "inject",
    "insert",
    "inspect",
    "install",
    "invoke",
    "kill",
    "launch",
    "lint",
    "list",
    "load",
    "locate",
    "loop",
    "measure",
    "merge",
    "monitor",
    "move",
    "navigate",
    "normalize",
    "parse",
    "patch",
    "pick",
    "ping",
    "pipe",
    "poll",
    "post",
    "prepare",
    "preview",
    "print",
    "probe",
    "profile",
    "prune",
    "publish",
    "pull",
    "push",
    "queue",
    "rebase",
    "recheck",
    "record",
    "recover",
    "redirect",
    "reduce",
    "refresh",
    "regenerate",
    "reinstall",
    "relaunch",
    "reload",
    "remove",
    "rename",
    "render",
    "reopen",
    "repeat",
    "replay",
    "reply",
    "report",
    "request",
    "resolve",
    "restart",
    "restore",
    "retry",
    "revert",
    "save",
    "scan",
    "screenshot",
    "scroll",
    "search",
    "select",
    "serialize",
    "serve",
    "settle",
    "skip",
    "snapshot",
    "sort",
    "spawn",
    "squash",
    "stage",
    "start",
    "stash",
    "stop",
    "strip",
    "summarize",
    "switch",
    "sync",
    "tail",
    "tally",
    "test",
    "toggle",
    "touch",
    "trace",
    "track",
    "trigger",
    "trim",
    "truncate",
    "try",
    "typecheck",
    "unblock",
    "uninstall",
    "unlink",
    "unmount",
    "unpack",
    "update",
    "upgrade",
    "upload",
    "validate",
    "verify",
    "visit",
    "wait",
    "walk",
    "warn",
    "wipe"
]);
const S = /(?:(?<![\w-])((?:(?:[Aa]nd|[Tt]hen)\s+)+)|(,\s+(?:(?:and|then)\s+)*))([a-z]{2,16})(?=$|[\s,;!?]|\.(?:\s|$))/g;
const v = /^(?:\s+\w+){0,2}\s+(?:is|are|was|were|has|have|do|does|did|will|would|should|can|could|passes|passed|fails|failed|exists|works|worked|succeeds|succeeded|stays|remains|looks|runs|ran|not|if|when|unless|whether)(?:n['\u2019]t)?\b/;
function g(e, t) {
    return e.replace(S, (n, u, i, r, s)=>{
        if (O.has(r) && !v.test(e.slice(s + n.length))) {
            return (u ?? i ?? "") + t(r);
        }
        return n;
    });
}
const L = /^(re|un|de|pre|co|sub|over|out|mis|auto|post)-(.+)$/i;
function z3n(e) {
    let t = e.trimStart();
    let n = e.slice(0, e.length - t.length);
    let u = /^(\S+)([\s\S]*)$/.exec(t);
    if (!u) {
        return;
    }
    let i = u[1];
    let r = u[2] ?? "";
    let s = L.exec(i);
    if (s && s[2] !== undefined && y(s[2])) {
        let p = s[1];
        let c = s[2];
        let f = (p + c).toLowerCase();
        let E = c.toLowerCase();
        if (w.has(f) || w.has(E)) {
            return;
        }
        let m = (k, j)=>`${p}-${h(c, Object.hasOwn(k, f) ? k[f].slice(p.length) : j(c))}`;
        return {
            running: n + m(a, l) + g(r, l),
            done: n + m(o, d) + g(r, d),
            infinitive: n + i.toLowerCase() + r
        };
    }
    if (!y(i)) {
        return;
    }
    return {
        running: n + h(i, l(i)) + g(r, l),
        done: n + h(i, d(i)) + g(r, d),
        infinitive: n + i.charAt(0).toLowerCase() + i.slice(1) + r
    };
}
function hBo(e) {
    let t = /^\s*(\S+)/.exec(e)?.[1];
    if (t === undefined) {
        return;
    }
    let n = (L.exec(t)?.[2] ?? t).toLowerCase();
    if (O.has(n) || Object.hasOwn(o, n) || Object.hasOwn(a, n)) {
        return z3n(e);
    }
}
export { z3n, hBo };
