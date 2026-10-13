import { Fu, ZF, eU, IN, Ipe, ow, ZE } from "/$bunfs/root/chunk-etbngzss.js";
const est = "next";
function y5(n, s, r) {
    let claimed = false;
    let task;
    s.update(n, (t)=>{
        task = t;
        if (t.notified) {
            return t;
        }
        claimed = true;
        if (r?.skipStampIfRunning && t.status === "running") {
            return t;
        }
        return {
            ...t,
            notified: true
        };
    });
    return {
        claimed,
        task
    };
}
function Fi({ taskId, toolUseId, taskType, outputFile, status, summary, body, trailing }) {
    let f = [
        [
            ZF,
            taskId
        ],
        [
            eU,
            toolUseId
        ],
        [
            IN,
            taskType
        ],
        [
            Ipe,
            outputFile
        ],
        [
            ow,
            status
        ],
        [
            ZE,
            summary
        ]
    ];
    let o = `<${Fu}>`;
    for (let [a, T] of f){
        if (T) {
            o += `
<${a}>${T}</${a}>`;
        }
    }
    return `${o}${body ?? ""}
</${Fu}>${trailing ?? ""}`;
}
export { est, y5, Fi };
