import { b0n } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Bte } from "/$bunfs/root/chunk-kasbfbhj.js";
const kVr = new Set([
    "invoke-command",
    "start-job",
    "start-threadjob",
    "register-scheduledjob"
]);
const TVr = new Set([
    "invoke-command",
    "invoke-expression",
    "start-job",
    "start-threadjob",
    "register-scheduledjob",
    "register-engineevent",
    "register-objectevent",
    "register-wmievent",
    "new-pssession",
    "enter-pssession"
]);
const AVr = new Set([
    "import-module",
    "ipmo",
    "install-module",
    "save-module",
    "update-module",
    "install-script",
    "save-script"
]);
const o = [
    "pwsh",
    "powershell",
    "cmd",
    "bash",
    "wsl",
    "sh",
    "start-process",
    "start",
    "add-type",
    "new-object"
];
function s(t) {
    return Object.entries(Bte).filter(([, e])=>t.has(e.toLowerCase())).map(([e])=>e);
}
const r = new Set([
    "invoke-webrequest",
    "invoke-restmethod"
]);
const n = new Set([
    "set-alias",
    "sal",
    "new-alias",
    "nal",
    "set-variable",
    "sv",
    "new-variable",
    "nv"
]);
const i = new Set([
    "invoke-wmimethod",
    "iwmi",
    "invoke-cimmethod",
    "icim",
    "wmic",
    "wmic.exe"
]);
const a = new Set([
    "select-object",
    "sort-object",
    "group-object",
    "where-object",
    "measure-object",
    "write-output",
    "write-host",
    "start-sleep",
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
    "out-string",
    "out-host",
    "ipconfig",
    "hostname",
    "route",
    "arp"
]);
const _Yo = (()=>{
    let t = new Set([
        ...o,
        ...kVr,
        ...TVr,
        ...AVr,
        ...r,
        ...n,
        ...i,
        ...a,
        "foreach-object",
        ...b0n.filter((e)=>!e.includes(" "))
    ]);
    return new Set([
        ...t,
        ...s(t)
    ]);
})();
export { kVr, TVr, AVr, _Yo };
