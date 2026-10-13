import { Ae, a0 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
function OVn(N) {
    let o = w(17);
    let { customApiKeyTruncated, onDone } = N;
    let { storageV5 } = Pe();
    let g;
    if (o[0] !== customApiKeyTruncated || o[1] !== onDone || o[2] !== storageV5) {
        g = function t(x) {
            M: switch(x){
                case "yes":
                    {
                        Ae((v)=>{
                            let { approved, rejected } = a0(v);
                            return {
                                ...v,
                                customApiKeyResponses: {
                                    approved: [
                                        ...approved,
                                        customApiKeyTruncated
                                    ],
                                    rejected
                                }
                            };
                        }, storageV5);
                        onDone(true);
                        break M;
                    }
                case "no":
                    {
                        Ae((A)=>{
                            let { approved, rejected } = a0(A);
                            return {
                                ...A,
                                customApiKeyResponses: {
                                    approved,
                                    rejected: [
                                        ...rejected,
                                        customApiKeyTruncated
                                    ]
                                }
                            };
                        }, storageV5);
                        onDone(false);
                    }
            }
        };
        o[0] = customApiKeyTruncated;
        o[1] = onDone;
        o[2] = storageV5;
        o[3] = g;
    } else {
        g = o[3];
    }
    let t = g;
    let onCancel;
    if (o[4] !== t) {
        onCancel = ()=>t("no");
        o[4] = t;
        o[5] = onCancel;
    } else {
        onCancel = o[5];
    }
    let C;
    if (o[6] === S) {
        C = e(n, {
            bold: true,
            children: "ANTHROPIC_API_KEY"
        });
        o[6] = C;
    } else {
        C = o[6];
    }
    let i;
    if (o[7] !== customApiKeyTruncated) {
        i = r(n, {
            children: [
                C,
                r(n, {
                    children: [
                        ": sk-ant-...",
                        customApiKeyTruncated
                    ]
                })
            ]
        });
        o[7] = customApiKeyTruncated;
        o[8] = i;
    } else {
        i = o[8];
    }
    let b;
    if (o[9] === S) {
        b = e(n, {
            children: "Do you want to use this API key?"
        });
        o[9] = b;
    } else {
        b = o[9];
    }
    let cancelLabel;
    if (o[10] === S) {
        cancelLabel = r(n, {
            children: [
                "No (",
                e(n, {
                    bold: true,
                    children: "recommended"
                }),
                ")"
            ]
        });
        o[10] = cancelLabel;
    } else {
        cancelLabel = o[10];
    }
    let u;
    if (o[11] !== t) {
        u = e(or, {
            hideIndexes: true,
            focus: "cancel",
            cancelLabel,
            onConfirm: ()=>t("yes"),
            onCancel: ()=>t("no")
        });
        o[11] = t;
        o[12] = u;
    } else {
        u = o[12];
    }
    let P;
    if (o[13] !== onCancel || o[14] !== i || o[15] !== u) {
        P = r(_e, {
            title: "Detected a custom API key in your environment",
            color: "warning",
            onCancel,
            exitOnCtrlCD: true,
            children: [
                i,
                b,
                u
            ]
        });
        o[13] = onCancel;
        o[14] = i;
        o[15] = u;
        o[16] = P;
    } else {
        P = o[16];
    }
    return P;
}
export { OVn };
