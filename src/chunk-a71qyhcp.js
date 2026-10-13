import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { DN } from "/$bunfs/root/chunk-bd805sh6.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Nu } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { pA, uie } from "/$bunfs/root/chunk-xr68kcbr.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
const x = 5;
const G = 5;
function fIe(b) {
    let t = w(27);
    let { output, fullOutput, elapsedTimeSeconds, totalLines, totalBytes, timeoutMs, verbose } = b;
    let { columns } = ke();
    let z;
    if (t[0] !== columns || t[1] !== output || t[2] !== verbose) {
        z = verbose ? null : v(output, columns);
        t[0] = columns;
        t[1] = output;
        t[2] = verbose;
        t[3] = z;
    } else {
        z = t[3];
    }
    let g = z;
    let A;
    if (t[4] !== fullOutput || t[5] !== g) {
        A = g ? g.text : DN(fullOutput.trim());
        t[4] = fullOutput;
        t[5] = g;
        t[6] = A;
    } else {
        A = t[6];
    }
    let M = A;
    if (!M) {
        let d;
        if (t[7] === S) {
            d = e(n, {
                dimColor: true,
                children: "Running… "
            });
            t[7] = d;
        } else {
            d = t[7];
        }
        let f;
        if (t[8] !== elapsedTimeSeconds || t[9] !== timeoutMs) {
            f = e(Fe, {
                children: r(pA, {
                    children: [
                        d,
                        e(uie, {
                            elapsedTimeSeconds,
                            timeoutMs
                        })
                    ]
                })
            });
            t[8] = elapsedTimeSeconds;
            t[9] = timeoutMs;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    let _ = g ? x : Lt(fullOutput, `
`) + 1;
    let E = (totalLines ? Math.max(0, totalLines - _) : 0) + (g?.dropped ?? 0);
    let L = "";
    if (totalBytes && totalLines) {
        L = `~${totalLines} lines`;
    } else if (E > 0) {
        L = `+${E} lines`;
    }
    let d;
    if (t[11] !== M) {
        d = e(n, {
            dimColor: true,
            children: M
        });
        t[11] = M;
        t[12] = d;
    } else {
        d = t[12];
    }
    let f;
    if (t[13] !== L) {
        f = L ? e(n, {
            dimColor: true,
            children: L
        }) : null;
        t[13] = L;
        t[14] = f;
    } else {
        f = t[14];
    }
    let B;
    if (t[15] !== elapsedTimeSeconds || t[16] !== timeoutMs) {
        B = e(uie, {
            elapsedTimeSeconds,
            timeoutMs
        });
        t[15] = elapsedTimeSeconds;
        t[16] = timeoutMs;
        t[17] = B;
    } else {
        B = t[17];
    }
    let O;
    if (t[18] !== totalBytes) {
        O = totalBytes ? e(n, {
            dimColor: true,
            children: Qt(totalBytes)
        }) : null;
        t[18] = totalBytes;
        t[19] = O;
    } else {
        O = t[19];
    }
    let R;
    if (t[20] !== f || t[21] !== B || t[22] !== O) {
        R = r(s, {
            flexDirection: "row",
            gap: 1,
            children: [
                f,
                B,
                O
            ]
        });
        t[20] = f;
        t[21] = B;
        t[22] = O;
        t[23] = R;
    } else {
        R = t[23];
    }
    let F;
    if (t[24] !== d || t[25] !== R) {
        F = e(Fe, {
            children: e(pA, {
                children: r(s, {
                    flexDirection: "column",
                    children: [
                        d,
                        R
                    ]
                })
            })
        });
        t[24] = d;
        t[25] = R;
        t[26] = F;
    } else {
        F = t[26];
    }
    return F;
}
function oDr({ output, fullOutput, totalLines }, i) {
    if (!fullOutput.trim()) {
        return false;
    }
    return (totalLines ?? 0) > x || v(output, i).clipped;
}
function v(output, m) {
    let p = Math.max(1, m - G);
    let i = DN(output.trim()).replace(/\r\n?/g, `
`).split(`
`).filter((a)=>a);
    let l = [];
    let u = 0;
    let i_length = i.length;
    while(i_length > 0 && u < x){
        let a = i[--i_length];
        let c = Nu(a, p, {
            hard: true,
            trim: false
        }).split(`
`);
        let t = x - u;
        if (c.length > t) {
            l.unshift(c.slice(-t).join("").replace(/^ /, ""));
            return {
                text: l.join(`
`),
                clipped: true,
                dropped: i_length
            };
        }
        l.unshift(a);
        u += c.length;
    }
    return {
        text: l.join(`
`),
        clipped: i_length > 0,
        dropped: i_length
    };
}
export { fIe, oDr };
