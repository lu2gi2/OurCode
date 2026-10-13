import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ml, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { pke, Bte, $K, mke, XEn, iwt, oJ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { IW, H9t, N9t, r0n, o0n, s0n, c4e, tRt } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { statSync } from "fs";
import { join } from "path";
const CVr = [
    "-verbose",
    "-debug"
];
const E = [
    "-erroraction",
    "-warningaction",
    "-informationaction",
    "-progressaction"
];
const b = [
    "-ea",
    "-wa",
    "-infa",
    "-proga"
];
const x = [
    "-errorvariable",
    "-warningvariable",
    "-informationvariable",
    "-outvariable",
    "-pipelinevariable"
];
const w = [
    "-ev",
    "-wv",
    "-iv",
    "-ov",
    "-pv"
];
const RVr = [
    ...E,
    ...x,
    "-outbuffer",
    ...b
];
const R = new Set([
    ...CVr,
    ...RVr
]);
function y(e) {
    if (e.length < 2) {
        return false;
    }
    return b.includes(e) || E.some((t)=>t.startsWith(e));
}
const De = new Set([
    ...E,
    ...b
]);
const T = new Set([
    "silentlycontinue",
    "0",
    "stop",
    "1",
    "continue",
    "2",
    "ignore",
    "4"
]);
function N(e) {
    if (e.length < 2) {
        return false;
    }
    return w.includes(e) || x.some((t)=>t.startsWith(e));
}
const D = new Set([
    "global",
    "script",
    "local",
    "private",
    "variable"
]);
const k = new Set([
    "psdefaultparametervalues",
    "confirmpreference",
    "debugpreference",
    "erroractionpreference",
    "errorview",
    "formatenumerationlimit",
    "informationpreference",
    "maximumhistorycount",
    "ofs",
    "outputencoding",
    "progresspreference",
    "psemailserver",
    "psmoduleautoloadingpreference",
    "psnativecommandargumentpassing",
    "psnativecommanduseerroractionpreference",
    "pssessionapplicationname",
    "pssessionconfigurationname",
    "pssessionoption",
    "psstyle",
    "transcript",
    "verbosepreference",
    "warningpreference",
    "whatifpreference",
    "logcommandhealthevent",
    "logcommandlifecycleevent",
    "logenginehealthevent",
    "logenginelifecycleevent",
    "logproviderhealthevent",
    "logproviderlifecycleevent",
    "maximumaliascount",
    "maximumdrivecount",
    "maximumerrorcount",
    "maximumfunctioncount",
    "maximumvariablecount"
]);
const W = [
    ...E,
    ...x,
    "-outbuffer",
    "-verbose",
    "-debug"
];
const te = W.filter((e)=>e !== "-progressaction");
function ne(e, t) {
    let n = null;
    for (let r of t){
        if (r.startsWith(e)) {
            if (n !== null) {
                return null;
            }
            n = r;
        }
    }
    return n;
}
function re(e, t) {
    if (e.length < 2) {
        return false;
    }
    for (let n of [
        W,
        te
    ]){
        let r = ne(e, n);
        if (r !== null && t.includes(r)) {
            return true;
        }
    }
    return false;
}
const ae = new Set([
    ...w,
    "-ea",
    "-wa",
    "-p"
]);
const oe = false;
function ie(e, t, n, r) {
    if (!r && ae.has(e)) {
        return false;
    }
    return t.includes(e) || re(e, n);
}
function M(e, t, n) {
    return ie(e, t, n, oe);
}
function H(e) {
    return M(e, w, x);
}
function B(e) {
    return M(e, b, E);
}
const SYo = new Set([
    "add",
    "clear",
    "close",
    "copy",
    "enter",
    "exit",
    "find",
    "format",
    "get",
    "hide",
    "join",
    "lock",
    "move",
    "new",
    "open",
    "optimize",
    "pop",
    "push",
    "redo",
    "remove",
    "rename",
    "reset",
    "resize",
    "resume",
    "search",
    "select",
    "set",
    "show",
    "skip",
    "split",
    "step",
    "switch",
    "undo",
    "unlock",
    "watch",
    "connect",
    "disconnect",
    "read",
    "receive",
    "send",
    "write",
    "backup",
    "checkpoint",
    "compare",
    "compress",
    "convert",
    "convertfrom",
    "convertto",
    "dismount",
    "edit",
    "expand",
    "export",
    "group",
    "import",
    "initialize",
    "limit",
    "merge",
    "mount",
    "out",
    "publish",
    "restore",
    "save",
    "sync",
    "unpublish",
    "update",
    "debug",
    "measure",
    "ping",
    "repair",
    "resolve",
    "test",
    "trace",
    "approve",
    "assert",
    "build",
    "complete",
    "confirm",
    "deny",
    "deploy",
    "disable",
    "enable",
    "install",
    "invoke",
    "register",
    "request",
    "restart",
    "start",
    "stop",
    "submit",
    "suspend",
    "uninstall",
    "unregister",
    "wait",
    "block",
    "grant",
    "protect",
    "revoke",
    "unblock",
    "unprotect",
    "use",
    "sort",
    "tee",
    "where",
    "foreach"
]);
const le = [
    "-variable",
    "-sessionvariable",
    "-responseheadersvariable",
    "-statuscodevariable"
];
function j(e) {
    if (e.length < 3) {
        return false;
    }
    return le.some((t)=>t.startsWith(e));
}
const LEe = /[\t\n\v\f\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/;
const F = new RegExp(`^${LEe.source}`);
const ce = new RegExp(`${`['"\u2018-\u201F]`}+`, "g");
function $X(e) {
    let t = e.replace(F, "");
    while(true){
        if (t.startsWith("<#")) {
            let n = t.indexOf("#>", 2);
            if (n < 0) {
                break;
            }
            t = t.slice(n + 2).replace(F, "");
        } else if (t.startsWith("#")) {
            let n = t.search(/[\r\n]/);
            if (n < 0) {
                break;
            }
            t = t.slice(n).replace(F, "");
        } else {
            break;
        }
    }
    return t;
}
function o$(e) {
    return e.replace(ce, "");
}
const ue = new RegExp(`^${`['"\u2018-\u201F]`}+|${`['"\u2018-\u201F]`}+$`, "g");
function J6(e) {
    return e.replace(ue, "");
}
function U(e) {
    if (e === "'" || e >= "‘" && e <= "‛") {
        return "single";
    }
    if (e === '"' || e >= "“" && e <= "„") {
        return "double";
    }
    return null;
}
function mte(e) {
    let t = "";
    let n = null;
    for(let r = 0; r < e.length; r++){
        let o = e[r];
        if (o === "`") {
            if (n === "single") {
                t += "``";
            } else if (r + 1 < e.length) {
                t += o + e[r + 1];
                r++;
            } else {
                t += o;
            }
            continue;
        }
        let s = U(o);
        if (n === null) {
            if (s !== null) {
                n = s;
                continue;
            }
            t += o;
        } else if (s === n) {
            if (r + 1 < e.length && U(e[r + 1]) === s) {
                t += e[r + 1];
                r++;
                continue;
            }
            n = null;
        } else {
            t += o;
        }
    }
    return t;
}
function vA(e) {
    return I(e, undefined);
}
const fe = {
    t: "\t",
    n: `
`,
    r: "\r",
    f: "\f",
    v: "\v"
};
function P(e) {
    return I(e, fe);
}
const ge = {
    0: "\x00"
};
function V(e) {
    return I(e, ge);
}
function I(e, t) {
    return e.replace(/`(?:(`)|[\r\n]+\s*|u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, r, o, s)=>{
        if (r !== undefined) {
            return "`";
        }
        if (o !== undefined) {
            let c = parseInt(o, 16);
            if (c <= 1114111) {
                return String.fromCodePoint(c);
            }
            return "\uFFFD";
        }
        if (s === undefined) {
            return "";
        }
        if (t && s in t) {
            return t[s];
        }
        return s;
    });
}
const kSn = /[\t\n\v\f\r ]+/;
const bYo = new RegExp(`^${kSn.source}`);
const pe = new Set([
    "--list-runtimes",
    "--list-sdks"
]);
function additionalCommandIsDangerousCallback(e, t) {
    let n = (t?.elementTypes ?? []).slice(1);
    let r = t?.args ?? [];
    let o = t?.children;
    for(let s = 0; s < n.length; s++){
        if (n[s] !== "StringConstant" && n[s] !== "Parameter") {
            if (!/[$(@{[]/.test(r[s] ?? "")) {
                continue;
            }
            return true;
        }
        if (n[s] === "Parameter") {
            let c = o?.[s];
            if (c) {
                if (c.some((i)=>i.type !== "StringConstant")) {
                    return true;
                }
            } else {
                let i = r[s] ?? "";
                let l = i.indexOf(":");
                if (l > 0 && /[$(@{[]/.test(i.slice(l + 1))) {
                    return true;
                }
            }
        }
    }
    return false;
}
const G = Object.assign(Object.create(null), {
    "get-childitem": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Filter",
            "-Include",
            "-Exclude",
            "-Recurse",
            "-Depth",
            "-Name",
            "-Force",
            "-Attributes",
            "-Directory",
            "-File",
            "-Hidden",
            "-ReadOnly",
            "-System"
        ]
    },
    "get-content": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-TotalCount",
            "-Head",
            "-Tail",
            "-Raw",
            "-Encoding",
            "-Delimiter",
            "-ReadCount"
        ]
    },
    "get-item": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Force",
            "-Stream"
        ]
    },
    "get-itemproperty": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Name"
        ]
    },
    "test-path": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-PathType",
            "-Filter",
            "-Include",
            "-Exclude",
            "-IsValid",
            "-NewerThan",
            "-OlderThan"
        ]
    },
    "resolve-path": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Relative"
        ]
    },
    "get-filehash": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Algorithm",
            "-InputStream"
        ]
    },
    "get-acl": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Audit",
            "-Filter",
            "-Include",
            "-Exclude"
        ]
    },
    "set-location": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-PassThru",
            "-StackName"
        ]
    },
    "push-location": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-PassThru",
            "-StackName"
        ]
    },
    "pop-location": {
        safeFlags: [
            "-PassThru",
            "-StackName"
        ]
    },
    "select-string": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Pattern",
            "-InputObject",
            "-SimpleMatch",
            "-CaseSensitive",
            "-Quiet",
            "-List",
            "-NotMatch",
            "-AllMatches",
            "-Encoding",
            "-Context",
            "-Raw",
            "-NoEmphasis"
        ]
    },
    "convertto-json": {
        safeFlags: [
            "-InputObject",
            "-Depth",
            "-Compress",
            "-EnumsAsStrings",
            "-AsArray"
        ]
    },
    "convertfrom-json": {
        safeFlags: [
            "-InputObject",
            "-Depth",
            "-AsHashtable",
            "-NoEnumerate"
        ]
    },
    "convertto-csv": {
        safeFlags: [
            "-InputObject",
            "-Delimiter",
            "-NoTypeInformation",
            "-NoHeader",
            "-UseQuotes"
        ]
    },
    "convertfrom-csv": {
        safeFlags: [
            "-InputObject",
            "-Delimiter",
            "-Header",
            "-UseCulture"
        ]
    },
    "convertto-xml": {
        safeFlags: [
            "-InputObject",
            "-Depth",
            "-As",
            "-NoTypeInformation"
        ]
    },
    "convertto-html": {
        safeFlags: [
            "-InputObject",
            "-Property",
            "-Head",
            "-Title",
            "-Body",
            "-Pre",
            "-Post",
            "-As",
            "-Fragment"
        ]
    },
    "format-hex": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-InputObject",
            "-Encoding",
            "-Count",
            "-Offset"
        ]
    },
    "get-member": {
        safeFlags: [
            "-InputObject",
            "-MemberType",
            "-Name",
            "-Static",
            "-View",
            "-Force"
        ]
    },
    "get-unique": {
        safeFlags: [
            "-InputObject",
            "-AsString",
            "-CaseInsensitive",
            "-OnType"
        ]
    },
    "compare-object": {
        safeFlags: [
            "-ReferenceObject",
            "-DifferenceObject",
            "-Property",
            "-SyncWindow",
            "-CaseSensitive",
            "-Culture",
            "-ExcludeDifferent",
            "-IncludeEqual",
            "-PassThru"
        ]
    },
    "join-string": {
        safeFlags: [
            "-InputObject",
            "-Property",
            "-Separator",
            "-SingleQuote",
            "-DoubleQuote",
            "-FormatString"
        ]
    },
    "get-random": {
        safeFlags: [
            "-InputObject",
            "-Minimum",
            "-Maximum",
            "-Count",
            "-SetSeed",
            "-Shuffle"
        ]
    },
    "convert-path": {
        safeFlags: [
            "-Path",
            "-LiteralPath"
        ]
    },
    "join-path": {
        safeFlags: [
            "-Path",
            "-ChildPath",
            "-AdditionalChildPath"
        ]
    },
    "split-path": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Qualifier",
            "-NoQualifier",
            "-Parent",
            "-Leaf",
            "-LeafBase",
            "-Extension",
            "-IsAbsolute"
        ]
    },
    "get-itempropertyvalue": {
        safeFlags: [
            "-Path",
            "-LiteralPath",
            "-Name"
        ]
    },
    "get-psprovider": {
        safeFlags: [
            "-PSProvider"
        ]
    },
    "get-computerinfo": {
        allowAllFlags: true
    },
    "get-host": {
        allowAllFlags: true
    },
    "get-date": {
        safeFlags: [
            "-Date",
            "-Format",
            "-UFormat",
            "-DisplayHint",
            "-AsUTC"
        ]
    },
    "get-location": {
        safeFlags: [
            "-PSProvider",
            "-PSDrive",
            "-Stack",
            "-StackName"
        ]
    },
    "get-psdrive": {
        safeFlags: [
            "-Name",
            "-PSProvider",
            "-Scope"
        ]
    },
    "get-module": {
        safeFlags: [
            "-Name",
            "-ListAvailable",
            "-All",
            "-FullyQualifiedName",
            "-PSEdition"
        ]
    },
    "get-alias": {
        safeFlags: [
            "-Name",
            "-Definition",
            "-Scope",
            "-Exclude"
        ]
    },
    "get-history": {
        safeFlags: [
            "-Id",
            "-Count"
        ]
    },
    "get-culture": {
        allowAllFlags: true
    },
    "get-uiculture": {
        allowAllFlags: true
    },
    "get-timezone": {
        safeFlags: [
            "-Name",
            "-Id",
            "-ListAvailable"
        ]
    },
    "get-uptime": {
        allowAllFlags: true
    },
    "write-output": {
        safeFlags: [
            "-InputObject",
            "-NoEnumerate"
        ],
        additionalCommandIsDangerousCallback
    },
    "write-host": {
        safeFlags: [
            "-Object",
            "-NoNewline",
            "-Separator",
            "-ForegroundColor",
            "-BackgroundColor"
        ],
        additionalCommandIsDangerousCallback
    },
    "start-sleep": {
        safeFlags: [
            "-Seconds",
            "-Milliseconds",
            "-Duration"
        ],
        additionalCommandIsDangerousCallback
    },
    "format-table": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "format-list": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "format-wide": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "format-custom": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "measure-object": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "select-object": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "sort-object": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "group-object": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "where-object": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "out-string": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "out-host": {
        allowAllFlags: true,
        additionalCommandIsDangerousCallback
    },
    "get-netadapter": {
        safeFlags: [
            "-Name",
            "-InterfaceDescription",
            "-InterfaceIndex",
            "-Physical"
        ]
    },
    "get-netipaddress": {
        safeFlags: [
            "-InterfaceIndex",
            "-InterfaceAlias",
            "-AddressFamily",
            "-Type"
        ]
    },
    "get-netroute": {
        safeFlags: [
            "-InterfaceIndex",
            "-InterfaceAlias",
            "-AddressFamily",
            "-DestinationPrefix"
        ]
    },
    "get-dnsclient": {
        safeFlags: [
            "-InterfaceIndex",
            "-InterfaceAlias"
        ]
    },
    "get-winevent": {
        safeFlags: [
            "-LogName",
            "-ListLog",
            "-ListProvider",
            "-ProviderName",
            "-Path",
            "-MaxEvents",
            "-FilterXPath",
            "-Force",
            "-Oldest"
        ]
    },
    git: {},
    gh: {},
    docker: {},
    ipconfig: {
        safeFlags: [
            "/all",
            "/allcompartments"
        ],
        additionalCommandIsDangerousCallback: (e, t)=>(t?.args ?? []).some((n)=>!n.startsWith("/") && !n.startsWith("-"))
    },
    netstat: {
        safeFlags: [
            "-a",
            "-b",
            "-e",
            "-f",
            "-n",
            "-o",
            "-p",
            "-q",
            "-r",
            "-s",
            "-t",
            "-x",
            "-y"
        ]
    },
    systeminfo: {
        safeFlags: [
            "/FO",
            "/NH"
        ]
    },
    tasklist: {
        safeFlags: [
            "/M",
            "/SVC",
            "/V",
            "/FI",
            "/FO",
            "/NH"
        ]
    },
    "where.exe": {
        allowAllFlags: true
    },
    hostname: {
        safeFlags: [
            "-a",
            "-d",
            "-f",
            "-i",
            "-I",
            "-s",
            "-y",
            "-A"
        ],
        additionalCommandIsDangerousCallback: (e, t)=>(t?.args ?? []).some((n)=>!n.startsWith("-"))
    },
    whoami: {
        safeFlags: [
            "/user",
            "/groups",
            "/claims",
            "/priv",
            "/logonid",
            "/all",
            "/fo",
            "/nh"
        ]
    },
    ver: {
        allowAllFlags: true
    },
    arp: {
        safeFlags: [
            "-a",
            "-g",
            "-v",
            "-n"
        ],
        additionalCommandIsDangerousCallback: (e, t)=>(t?.args ?? []).some((n)=>!n.startsWith("-"))
    },
    route: {
        safeFlags: [
            "print",
            "PRINT",
            "-4",
            "-6"
        ],
        additionalCommandIsDangerousCallback: (e, t)=>{
            if (!t) {
                return true;
            }
            return t.args.find((r)=>!r.startsWith("-"))?.toLowerCase() !== "print";
        }
    },
    getmac: {
        safeFlags: [
            "/FO",
            "/NH",
            "/V"
        ]
    },
    tree: {
        safeFlags: [
            "/F",
            "/A",
            "/Q",
            "/L"
        ]
    },
    findstr: {
        safeFlags: [
            "/B",
            "/E",
            "/L",
            "/R",
            "/S",
            "/I",
            "/X",
            "/V",
            "/N",
            "/M",
            "/O",
            "/P",
            "/C",
            "/G",
            "/D",
            "/A"
        ]
    },
    dotnet: {}
});
const he = new Set([
    "out-null"
]);
const Se = new Set([
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
    "measure-object",
    "select-object",
    "sort-object",
    "group-object",
    "where-object",
    "out-string",
    "out-host"
]);
const Ce = new Set([
    "where.exe"
]);
const Ee = new Set([
    "git",
    "gh",
    "docker",
    "dotnet"
]);
const Pe = [
    "",
    ".exe",
    ".bat",
    ".cmd",
    ".com",
    ".ps1",
    ".vbs",
    ".js",
    ".wsf",
    ".vbe",
    ".jse",
    ".wsh",
    ".msc",
    ".cpl"
];
class Y {
    listByPathext = new Map;
    regexByPathext = new Map;
    list() {
        let e = a.PATHEXT ?? "";
        let t = this.listByPathext.get(e);
        if (t === undefined) {
            let n = new Set(Pe);
            for (let r of e.split(";").slice(0, 64)){
                let o = r.trim().toLowerCase();
                if (o.startsWith(".") && o.length <= 16) {
                    n.add(o);
                }
            }
            t = [
                ...n
            ];
            this.listByPathext.set(e, t);
        }
        return t;
    }
    regex() {
        let e = a.PATHEXT ?? "";
        let t = this.regexByPathext.get(e);
        if (t === undefined) {
            let n = this.list().filter((r)=>r !== "").map((r)=>ml(r.slice(1)));
            t = new RegExp(`\\.(${n.join("|")})$`, "i");
            this.regexByPathext.set(e, t);
        }
        return t;
    }
}
const Z = new Y;
function Ae() {
    return Z.list();
}
function be() {
    return Z.regex();
}
function P7n(e) {
    let t = new Set(I7n(e).map((n)=>n.stem));
    t.delete("");
    return Array.from(t);
}
function I7n(e) {
    let t = be();
    let n = new Set;
    let r = [];
    for (let o of [
        (s)=>s,
        o$,
        J6,
        mte
    ]){
        let base = xe(e, o);
        if (n.has(base)) {
            continue;
        }
        n.add(base);
        r.push({
            base,
            stem: base.replace(t, "")
        });
    }
    return r;
}
function xe(e, t) {
    let r = t(e).replace(/^[A-Za-z]:(?![\\/])/, "");
    let o = [];
    for (let s of r.split(/[\\/]+/)){
        let c = IW(s.replace(/:.*$/, ""));
        if (c === "." || c === "") {
            continue;
        }
        if (c === "..") {
            if (o.length > 0 && o.at(-1) !== "..") {
                o.pop();
            } else {
                o.push("..");
            }
            continue;
        }
        o.push(c);
    }
    return (o.at(-1) ?? "").toLowerCase();
}
function we(name) {
    if (O() !== "windows") {
        return null;
    }
    let t = se();
    let n = new Set;
    for (let { base, stem } of I7n(name)){
        for (let s of base === stem ? [
            stem
        ] : [
            stem,
            base
        ]){
            if (s === "" || n.has(s)) {
                continue;
            }
            n.add(s);
            for (let c of Ae()){
                let i = join(t, s + c);
                try {
                    if (statSync(i).isFile()) {
                        return s + c;
                    }
                } catch  {}
            }
        }
    }
    return null;
}
const Fe = /\.(exe|cmd|bat|com)$/;
function cb(e) {
    let t = e.toLowerCase();
    if (!t.includes("\\") && !t.includes("/")) {
        t = t.replace(Fe, "");
    }
    let n = Bte[t];
    if (n) {
        return n.toLowerCase();
    }
    return t;
}
function TSn(e) {
    let t = e.toLowerCase();
    if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) {
        return true;
    }
    let n = cb(e);
    return n === "set-location" || n === "push-location" || n === "pop-location" || n === "new-psdrive" || O() === "windows" && (n === "ndr" || n === "mount");
}
function obt(e) {
    let t = cb(e);
    return he.has(t);
}
function xVr(e, t) {
    let n = cb(e.name);
    if (!Se.has(n)) {
        return false;
    }
    return G7e(e, t);
}
function PVr(e) {
    if (e.statementType !== "PipelineAst") {
        return false;
    }
    if (e.commands.length === 0) {
        return false;
    }
    for (let t of e.commands){
        if (t.elementType !== "CommandAst") {
            return false;
        }
    }
    return true;
}
function Ie(name) {
    let t = name.toLowerCase();
    let n = G[t];
    if (n) {
        return n;
    }
    let r = cb(t);
    if (r !== t) {
        return G[r];
    }
}
function wYo(e) {
    let t = e.trim();
    if (!t) {
        return false;
    }
    if (/\$\(/.test(t)) {
        return true;
    }
    if (/(?:^|[^\w.])@\w+/.test(t)) {
        return true;
    }
    if (/\.\w+\s*\(/.test(t)) {
        return true;
    }
    if (/\$\w+\s*[+\-*/]?=/.test(t)) {
        return true;
    }
    if (/--%/.test(t)) {
        return true;
    }
    if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) {
        return true;
    }
    if (/::/.test(t)) {
        return true;
    }
    return false;
}
function sbt(e, t) {
    if (!e.trim()) {
        return false;
    }
    if (!t) {
        return false;
    }
    if (!t.valid) {
        return false;
    }
    let r = oJ(t);
    if (r.hasScriptBlocks || r.hasSubExpressions || r.hasExpandableStrings || r.hasSplatting || r.hasMemberInvocations || r.hasAssignments || r.hasStopParsing) {
        return false;
    }
    let o = XEn(t);
    if (o.length === 0) {
        return false;
    }
    if (o.reduce((acc, item)=>acc + item.commands.length, 0) > 1) {
        if (o.some((i)=>i.commands.some((l)=>TSn(l.name)))) {
            return false;
        }
    }
    for (let c of o){
        if (!c || c.commands.length === 0) {
            return false;
        }
        if (c.redirections.length > 0) {
            if (c.redirections.some((u)=>!u.isMerging && !iwt(u.target))) {
                return false;
            }
        }
        let i = c.commands[0];
        if (!i) {
            return false;
        }
        if (!G7e(i, e)) {
            return false;
        }
        for(let l = 1; l < c.commands.length; l++){
            let command = c.commands[l];
            if (!command || command.nameType === "application") {
                return false;
            }
            if (obt(command.name) && command.args.length === 0) {
                continue;
            }
            if (!G7e(command, e)) {
                return false;
            }
        }
        if (c.nestedCommands && c.nestedCommands.length > 0) {
            return false;
        }
    }
    return true;
}
const A = (e, t = false)=>{
    if (t && e.length > 1 && e[1] === "-") {
        return e;
    }
    return e.replace(/(?!^)[-']/g, "");
};
function ibt(e, t, n = "full") {
    let r = n === "full" ? y : B;
    for(let o = 0; o < e.length; o++){
        let s = e[o];
        if (!$K.has(s[0])) {
            continue;
        }
        if (t !== undefined && t[o + 1] !== undefined && t[o + 1] !== "Parameter") {
            continue;
        }
        let c = s[0] === "-" ? s : `-${s.slice(1)}`;
        let i = c.indexOf(":");
        let l = (i > 0 ? c.slice(0, i) : c).toLowerCase();
        let u = null;
        if (!r(l) && !r(A(l, n === "exact"))) {
            let d = vA(l.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
            let S = d.indexOf(":", 1);
            let p = S > 0 ? d.slice(0, S) : d;
            if (!r(p) && !r(A(p, n === "exact")) && !/[^\x20-\x7e]/.test(d)) {
                continue;
            }
            if (S > 0) {
                let C = d.slice(S + 1);
                u = C.trim() !== "" ? C : e[o + 1] ?? "";
            }
        }
        let f = i > 0 ? c.slice(i + 1) : null;
        let m = (u ?? (f !== null && f.trim() !== "" ? f : e[o + 1] ?? "")).toLowerCase().replace(/^['"]|['"]$/g, "").trim();
        if (m.length > 0 && !T.has(m)) {
            return true;
        }
    }
    return false;
}
function abt(e, t, n = "full") {
    let r = n === "full" ? N : H;
    let o = (s)=>r(s) || n === "full" && (s.endsWith("variable") || j(s));
    for(let s = 0; s < e.length; s++){
        let c = e[s];
        if (!$K.has(c[0])) {
            continue;
        }
        if (t !== undefined && t[s + 1] !== undefined && t[s + 1] !== "Parameter") {
            continue;
        }
        let i = c[0] === "-" ? c : `-${c.slice(1)}`;
        let l = _(i);
        let u = (l !== null ? i.slice(0, l.colonIdx) : i).toLowerCase();
        if (!o(u) && !o(A(u, n === "exact"))) {
            let p = vA(u.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
            if (p !== u && (o(p) || o(A(p, n === "exact")))) {
                return true;
            }
            let C = p.indexOf(":", 1);
            if (C > 0 && o(A(p.slice(0, C), n === "exact"))) {
                return true;
            }
            if (/[^\x20-\x7e]/.test(p)) {
                return true;
            }
            continue;
        }
        let f;
        if (l !== null) {
            if (l.isHereString) {
                return true;
            }
            if (l.post.includes("$") || l.post.includes("`")) {
                return true;
            }
            f = l.postResolved !== "" ? l.postResolved : e[s + 1] ?? "";
        } else {
            f = e[s + 1] ?? "";
        }
        if (f.includes("$") || f.includes("`")) {
            return true;
        }
        let g = o$($X(f)).toLowerCase().trim();
        if (g.length === 0) {
            continue;
        }
        let m = g.startsWith("+") ? g.slice(1) : g;
        let d = m.lastIndexOf(":");
        let S = m;
        if (d >= 0) {
            let p = m.slice(0, d);
            if (!D.has(p) && !/^[0-9]+$/.test(p)) {
                return true;
            }
            S = m.slice(d + 1);
        }
        if (!/^[a-z0-9_]+$/.test(S)) {
            return true;
        }
        if (k.has(S)) {
            return true;
        }
    }
    return false;
}
function h(e) {
    return e.includes('"') || /[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1;
}
function _(e) {
    if (e.length === 0 || !($K.has(e[0]) || e[0] === "/")) {
        return null;
    }
    let colonIdx = e.indexOf(":", 1);
    if (colonIdx <= 0) {
        return null;
    }
    let post = $X(e.slice(colonIdx + 1));
    let postResolved = $X(post.replace(/`[\r\n]+\s*/g, ""));
    let isHereString = /^@['"\u2018-\u201F]/.test(post) || /^@['"\u2018-\u201F]/.test(postResolved);
    return {
        colonIdx,
        post,
        postResolved,
        isHereString
    };
}
function v(e, t = true) {
    let n = e.replace(/`[\r\n]+\s*/g, "");
    if (h(e) || h(P(n))) {
        return true;
    }
    if (t) {
        let r = _(e);
        if (r !== null) {
            let { post, postResolved } = r;
            if (r.isHereString) {
                return true;
            }
            let c = o$(postResolved);
            let i = o$(post);
            let l = J6(postResolved);
            let u = J6(post);
            let f = mte(postResolved);
            let g = mte(post);
            if (h(c) || h(i) || h(P(c)) || h(l) || h(u) || h(P(l)) || h(f) || h(g) || h(P(f))) {
                return true;
            }
        }
    }
    return false;
}
const _e = "tengu_hazy_peach";
function IVr() {
    return ld(_e, {
        safe: true
    });
}
function G7e(e, t) {
    if (e.nameType === "application") {
        let i = IVr() ? kSn : /\s/;
        let l = e.text.split(i, 1)[0]?.toLowerCase() ?? "";
        if (!Ce.has(l)) {
            return false;
        }
    }
    let n = Ie(e.name);
    if (!n) {
        return false;
    }
    if (n.regex && !n.regex.test(t)) {
        return false;
    }
    if (n.additionalCommandIsDangerousCallback?.(t, e)) {
        return false;
    }
    if (!e.elementTypes) {
        return false;
    }
    for(let i = 1; i < e.elementTypes.length; i++){
        let elementType = e.elementTypes[i];
        if (elementType !== "StringConstant" && elementType !== "Parameter") {
            if (!/[$(@{[]/.test(e.args[i - 1] ?? "")) {
                continue;
            }
            return false;
        }
        if (elementType === "Parameter") {
            let u = e.children?.[i - 1];
            if (u) {
                if (u.some((f)=>f.type !== "StringConstant")) {
                    return false;
                }
            } else {
                let f = e.args[i - 1] ?? "";
                let g = f.indexOf(":");
                if (g > 0 && /[$(@{[]/.test(f.slice(g + 1))) {
                    return false;
                }
            }
        }
    }
    let r = cb(e.name);
    let o = Ee.has(r);
    let s = r.includes("-");
    let c = e.nameType !== "cmdlet";
    if (O() === "windows") {
        if (c || o) {
            for (let i of e.args){
                if (v(i, !s || e.nameType === "application")) {
                    return false;
                }
            }
        }
        if (we(e.name) !== null) {
            return false;
        }
    }
    if (!s || e.nameType === "application") {
        for(let i = 1; i < e.elementTypes.length; i++){
            let elementType = e.elementTypes[i];
            if (elementType !== "StringConstant" && elementType !== "Parameter") {
                return false;
            }
            if (elementType === "Parameter" && !o && (e.args[i - 1] ?? "").includes(":")) {
                return false;
            }
        }
    }
    if (o) {
        let i = null;
        for(let l = 1; l < e.elementTypes.length; l++){
            let u = e.args[l - 1] ?? "";
            if (e.elementTypes[l] === "Parameter") {
                let f = _(u);
                if (f !== null) {
                    if (f.isHereString) {
                        return false;
                    }
                    i ??= e.args.slice(0, l - 1);
                    i.push(u.slice(0, f.colonIdx), vA(o$(f.postResolved)));
                    continue;
                }
            }
            i?.push(u);
        }
        if (i !== null && !Q(r, i)) {
            return false;
        }
        return Q(r, e.args);
    }
    if (s && ibt(e.args, e.elementTypes)) {
        return false;
    }
    if (s && abt(e.args, e.elementTypes)) {
        return false;
    }
    if (n.allowAllFlags) {
        return true;
    }
    if (!n.safeFlags || n.safeFlags.length === 0) {
        return !e.args.some((l, u)=>{
            if (s) {
                return mke(l, e.elementTypes?.[u + 1]);
            }
            return l.startsWith("-") || false;
        });
    }
    for(let i = 0; i < e.args.length; i++){
        let arg = e.args[i];
        if (s ? mke(arg, e.elementTypes?.[i + 1]) : arg.startsWith("-") || false) {
            let f = s ? `-${arg.slice(1)}` : arg;
            if (s || arg.startsWith("/")) {
                let d = f.indexOf(":");
                if (d > 0) {
                    f = f.substring(0, d);
                }
            }
            let g = f.toLowerCase();
            if (s && R.has(g)) {
                continue;
            }
            if (!(s ? n.safeFlags.some((d)=>d.toLowerCase() === g) : n.safeFlags.includes(f))) {
                return false;
            }
        }
    }
    return true;
}
function Q(e, t) {
    for (let n of t){
        if (n.length > 0 && n[0] !== "-" && $K.has(n[0])) {
            return false;
        }
    }
    switch(e){
        case "git":
            return Re(t);
        case "gh":
            return ye(t);
        case "docker":
            return Oe(t);
        case "dotnet":
            return Ne(t);
        default:
            return false;
    }
}
const ve = new Set([
    "-c",
    "-C",
    "--exec-path",
    "--config-env",
    "--git-dir",
    "--work-tree",
    "--bare",
    "--attr-source",
    "--help",
    "-h",
    "--shallow-file"
]);
const J = new Set([
    "-c",
    "-C",
    "--exec-path",
    "--config-env",
    "--git-dir",
    "--work-tree",
    "--namespace",
    "--super-prefix",
    "--shallow-file"
]);
const Le = [
    "-c",
    "-C"
];
function z(e) {
    return !e.includes("=") && J.has(e);
}
function ee(e, t) {
    for(let n = 0; n < e.length; n++){
        let r = e[n] ?? "";
        let o = t[n] ?? "";
        if (o.includes("\x00") || V(r).includes("\x00")) {
            return false;
        }
        if (c4e(o) !== c4e(r) || o === "--" !== (r === "--")) {
            return false;
        }
        if (c4e(r) && r !== o && z(r) !== z(o)) {
            return false;
        }
    }
    return true;
}
function L(e) {
    return e.map((t)=>pke(vA(t.replace(/`[\r\n]+\s*/g, ""))));
}
function Re(e) {
    let t = L(e);
    if (!ee(e, t)) {
        return false;
    }
    return X(e) && X(t);
}
function X(e) {
    if (e.length === 0) {
        return true;
    }
    if (O() === "windows") {
        for (let u of e){
            if (v(u)) {
                return false;
            }
        }
    }
    for (let u of e){
        if (u.includes("$")) {
            return false;
        }
    }
    let t = 0;
    while(t < e.length){
        let u = e[t];
        if (!u || !u.startsWith("-")) {
            break;
        }
        for (let m of Le){
            if (u.length > m.length && u.startsWith(m) && (m === "-C" || u[m.length] !== "-")) {
                return false;
            }
        }
        let f = u.includes("=");
        let g = f ? Qe(u, "=") : u;
        if (ve.has(g)) {
            return false;
        }
        if (!f && J.has(g)) {
            t += 2;
        } else {
            t++;
        }
    }
    if (t >= e.length) {
        return true;
    }
    let n = e[t]?.toLowerCase() || "";
    let r = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "";
    let o = `git ${n} ${r}`;
    let s = `git ${n}`;
    let c = H9t[o];
    let i = 2;
    if (!c) {
        c = H9t[s];
        i = 1;
    }
    if (!c) {
        return false;
    }
    let l = e.slice(t + i);
    if (n === "ls-remote") {
        let u = false;
        for (let f of l){
            if (!u && f === "--") {
                u = true;
                continue;
            }
            if (u || f === "-" || !f.startsWith("-")) {
                return false;
            }
        }
    }
    if (c.additionalCommandIsDangerousCallback && c.additionalCommandIsDangerousCallback("", l)) {
        return false;
    }
    return tRt(l, 0, c, {
        commandName: "git"
    });
}
function ye(e) {
    let t = L(e);
    if (!ee(e, t)) {
        return false;
    }
    return K(e) && K(t);
}
function K(e) {
    return false;
}
const q = new Set(r0n.filter((e)=>/^-[^-]$/.test(e)).map((e)=>e[1]));
const Te = [
    ...r0n.filter((e)=>e.startsWith("--")),
    "--tls"
];
function Oe(e) {
    if (e.length === 0) {
        return true;
    }
    let t = L(e);
    if (O() === "windows") {
        for (let s of e){
            if (v(s)) {
                return false;
            }
        }
    }
    for (let s of t){
        if (s.includes("$")) {
            return false;
        }
    }
    for (let s of t){
        if (s[0] === "-" && s[1] !== "-") {
            for(let i = 1; i < s.length; i++){
                let l = s[i];
                if (q.has(l)) {
                    return false;
                }
                if (l !== "h" && q.has(l.toLowerCase())) {
                    return false;
                }
            }
        }
        let c = s.toLowerCase();
        if (Te.some((i)=>c.startsWith(i))) {
            return false;
        }
    }
    let n = `docker ${t[0]?.toLowerCase()}`;
    if (s0n.includes(n)) {
        return true;
    }
    let r = o0n[n];
    if (!r) {
        return false;
    }
    let o = t.slice(1);
    if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback("", o)) {
        return false;
    }
    return tRt(o, 0, r);
}
function Ne(e) {
    if (e.length === 0) {
        return false;
    }
    for (let t of e){
        if (!pe.has(t.toLowerCase())) {
            return false;
        }
    }
    return true;
}
export { LEe, $X, o$, J6, mte, vA, kSn, bYo, CVr, RVr, SYo, additionalCommandIsDangerousCallback as LU, P7n, I7n, cb, TSn, obt, xVr, PVr, wYo, sbt, ibt, abt, IVr, G7e };
