import { er } from "/$bunfs/root/chunk-30jbnw20.js";
import { ne, jl, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { BUe } from "/$bunfs/root/chunk-223dyewd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Ka, bU, jH } from "/$bunfs/root/chunk-p0ey0vwr.js";
import { $oe, G7t, $It, o1 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Vnr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Imt } from "/$bunfs/root/chunk-k31bs98s.js";
import { BH } from "/$bunfs/root/chunk-g6g5y4jx.js";
import { Il } from "/$bunfs/root/chunk-qy8kbd4m.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { gze, hQn, d_t, PKo } from "/$bunfs/root/chunk-z40pfjme.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { lpe } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { nPe, L1 } from "/$bunfs/root/chunk-98pm569t.js";
import { Mr, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
function E(d) {
    switch(d.kind){
        case "plugin":
            return d.name;
        case "channel":
            return lpe(d.server)?.pluginName;
        default:
            return;
    }
}
function X1e({ messageId, stored, text, isExpanded, task, sender, draw }) {
    let g = er(task);
    let l = er(sender);
    let p = jH("UserMessage", ()=>({
            requestId: messageId,
            props: {
                text,
                origin: Vnr(stored),
                isExpanded,
                ...task !== undefined && {
                    task
                },
                ...sender !== undefined && {
                    from: sender
                }
            }
        }), [
        messageId,
        text,
        stored,
        isExpanded,
        g,
        l
    ]);
    return bU(p, (c)=>draw(c.props.text), E(p.props.origin));
}
const zq = {};
Mr(zq, {
    default: ()=>zq,
    deliveredBy: ()=>E,
    useUserMessageSite: ()=>X1e
});
function mXe(d, t = new Date) {
    let o = new Date(d);
    if (Number.isNaN(o.getTime())) {
        return "";
    }
    let a = gze();
    let i = d_t();
    let { timeZone } = i;
    let u = G(t, timeZone) - G(o, timeZone);
    let g = Math.round(u / 86400000);
    let l = "older";
    if (g === 0) {
        l = "today";
    } else if (g > 0 && g < 7) {
        l = "week";
    }
    if (i.kind === "preset") {
        return hQn(i, ae[l], a, o);
    }
    let p = PKo(i.pattern, timeZone, o);
    if (l === "today") {
        return p;
    }
    let c = L1(a, nPe(le[l], timeZone)).format(o);
    if (l === "week") {
        return `${c} ${p}`;
    }
    return `${c}, ${p}`;
}
var ae = {
    today: {
        hour: "numeric",
        minute: "2-digit"
    },
    week: {
        weekday: "long",
        hour: "numeric",
        minute: "2-digit"
    },
    older: {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }
};
var le = {
    week: {
        weekday: "long"
    },
    older: {
        weekday: "long",
        month: "short",
        day: "numeric"
    }
};
function G(d, timeZone) {
    if (!timeZone) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    }
    let o = L1("en-US", nPe(ce, timeZone)).formatToParts(d);
    let a = {};
    for (let i of o){
        a[i.type] = i.value;
    }
    return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
}
var ce = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
};
const me = 10000;
const ue = 2500;
const pe = 2500;
function zNt(d) {
    if (d.length <= me) {
        return d;
    }
    let head = ne(d, ue);
    let tail = jl(d, pe);
    let hiddenLines = Lt(d, `
`, head.length) - Lt(tail, `
`);
    let hiddenChars = d.length - head.length - tail.length;
    return {
        head,
        hiddenLines,
        hiddenChars,
        tail
    };
}
const J = 4000;
function GNt(d) {
    let f = w(33);
    let { text, useBriefLayout, timestamp, bodyOnly, awaitingModel } = d;
    let u = bodyOnly === undefined ? false : bodyOnly;
    let g = awaitingModel === undefined ? false : awaitingModel;
    let l = Imt();
    let p = l?.isQueued ?? false;
    let c = typeof text === "object";
    let re;
    if (f[0] !== text || f[1] !== c) {
        re = !c && text.length <= J && !($oe() && G7t(text));
        f[0] = text;
        f[1] = c;
        f[2] = re;
    } else {
        re = f[2];
    }
    let R = re;
    let y = l?.selectionHighlight === "on";
    let monochrome = p || g;
    if (useBriefLayout || u) {
        let D;
        if (f[3] !== timestamp) {
            D = timestamp ? mXe(timestamp) : "";
            f[3] = timestamp;
            f[4] = D;
        } else {
            D = f[4];
        }
        let U = D;
        let _ = y ? "suggestion" : monochrome ? "subtle" : "text";
        const paddingLeft = u ? 0 : 2;
        let L;
        if (f[5] !== u || f[6] !== y || f[7] !== U || f[8] !== monochrome) {
            L = u ? null : r(s, {
                flexDirection: "row",
                children: [
                    y ? r(n, {
                        "aria-label": "selected:",
                        color: "suggestion",
                        children: [
                            te.pointer,
                            " "
                        ]
                    }) : null,
                    e(n, {
                        color: y ? "suggestion" : monochrome ? "subtle" : "briefLabelYou",
                        children: "You"
                    }),
                    U ? r(n, {
                        dimColor: true,
                        children: [
                            " ",
                            U
                        ]
                    }) : null
                ]
            });
            f[5] = u;
            f[6] = y;
            f[7] = U;
            f[8] = monochrome;
            f[9] = L;
        } else {
            L = f[9];
        }
        let q;
        if (f[10] !== u || f[11] !== R || f[12] !== text || f[13] !== _ || f[14] !== c || f[15] !== monochrome) {
            q = c ? r(Y, {
                children: [
                    e(n, {
                        color: _,
                        children: text.head
                    }),
                    e(b, {
                        hiddenLines: text.hiddenLines,
                        indent: u ? 0 : 2
                    }),
                    e(n, {
                        color: _,
                        children: text.tail
                    })
                ]
            }) : R ? e(Ka, {
                promptMode: true,
                color: _,
                monochrome,
                children: text
            }) : e(n, {
                color: _,
                children: text
            });
            f[10] = u;
            f[11] = R;
            f[12] = text;
            f[13] = _;
            f[14] = c;
            f[15] = monochrome;
            f[16] = q;
        } else {
            q = f[16];
        }
        let ie;
        if (f[17] !== paddingLeft || f[18] !== L || f[19] !== q) {
            ie = r(s, {
                flexDirection: "column",
                paddingLeft,
                children: [
                    L,
                    q
                ]
            });
            f[17] = paddingLeft;
            f[18] = L;
            f[19] = q;
            f[20] = ie;
        } else {
            ie = f[20];
        }
        return ie;
    }
    let S = y ? "suggestion" : monochrome ? "inactive" : "text";
    let D;
    if (f[21] !== l?.selectionHighlight || f[22] !== y) {
        D = e(s, {
            flexShrink: 0,
            children: l?.selectionHighlight === "off" ? e(n, {
                children: "  "
            }) : r(n, {
                "aria-label": y ? "selected:" : "you:",
                color: y ? "suggestion" : "inactive",
                children: [
                    te.pointer,
                    " "
                ]
            })
        });
        f[21] = l?.selectionHighlight;
        f[22] = y;
        f[23] = D;
    } else {
        D = f[23];
    }
    let C;
    if (f[24] !== R || f[25] !== text || f[26] !== S || f[27] !== c || f[28] !== monochrome) {
        C = c ? r(s, {
            flexDirection: "column",
            children: [
                e(P, {
                    text: text.head,
                    color: S
                }),
                e(b, {
                    hiddenLines: text.hiddenLines,
                    indent: 3
                }),
                e(P, {
                    text: text.tail,
                    color: S
                })
            ]
        }) : R ? e(Ka, {
            promptMode: true,
            color: S,
            monochrome,
            children: text
        }) : e(P, {
            text,
            color: S
        });
        f[24] = R;
        f[25] = text;
        f[26] = S;
        f[27] = c;
        f[28] = monochrome;
        f[29] = C;
    } else {
        C = f[29];
    }
    let L;
    if (f[30] !== D || f[31] !== C) {
        L = r(s, {
            flexDirection: "row",
            children: [
                D,
                C
            ]
        });
        f[30] = D;
        f[31] = C;
        f[32] = L;
    } else {
        L = f[32];
    }
    return L;
}
function b(d) {
    let m = w(7);
    let { hiddenLines, hiddenChars, indent } = d;
    let i = `${hiddenLines} ${hiddenLines === 1 ? "line" : "lines"}`;
    let u;
    if (m[0] !== hiddenChars || m[1] !== hiddenLines || m[2] !== i) {
        u = hiddenChars === undefined ? `(${i} hidden)` : hiddenLines === 0 ? `(~${BUe(hiddenChars)} KB hidden)` : `(${i}, ~${BUe(hiddenChars)} KB hidden)`;
        m[0] = hiddenChars;
        m[1] = hiddenLines;
        m[2] = i;
        m[3] = u;
    } else {
        u = m[3];
    }
    let title = u;
    let l;
    if (m[4] !== indent || m[5] !== title) {
        l = e(Il, {
            title,
            titleAlign: "start",
            color: "subtle",
            padding: indent
        });
        m[4] = indent;
        m[5] = title;
        m[6] = l;
    } else {
        l = m[6];
    }
    return l;
}
function P(d) {
    let a = w(4);
    let { text, color } = d;
    let i;
    let m;
    if (a[0] !== color || a[1] !== text) {
        m = Sn;
        g: {
            let u = $oe() ? $It(text) : [];
            if (u.length === 0) {
                m = e(n, {
                    color,
                    children: text
                });
                break g;
            }
            let l = [];
            let p = 0;
            for (const c of u){
                if (c.start > p) {
                    l.push(e(n, {
                        color,
                        children: text.slice(p, c.start)
                    }, `plain-${p}`));
                }
                for(let f = c.start; f < c.end; f++){
                    l.push(e(n, {
                        color: o1(f - c.start),
                        children: text[f]
                    }, `rb-${f}`));
                }
                p = c.end;
            }
            if (p < text.length) {
                l.push(e(n, {
                    color,
                    children: text.slice(p)
                }, `plain-${p}`));
            }
            i = e(n, {
                children: l
            });
        }
        a[0] = color;
        a[1] = text;
        a[2] = i;
        a[3] = m;
    } else {
        i = a[2];
        m = a[3];
    }
    if (m !== Sn) {
        return m;
    }
    return i;
}
function JR(d) {
    let o = w(19);
    let { text } = d;
    let a;
    let i;
    let wrap;
    let u;
    let flexDirection;
    let l;
    let p;
    let c;
    if (o[0] !== text) {
        c = Sn;
        re: {
            let f = zNt(text);
            if (typeof f === "string") {
                c = e(n, {
                    wrap: "wrap",
                    children: BH(f)
                });
                break re;
            }
            i = s;
            flexDirection = "column";
            l = e(n, {
                wrap: "wrap",
                children: BH(f.head)
            });
            p = e(b, {
                hiddenLines: f.hiddenLines,
                hiddenChars: f.hiddenChars,
                indent: 0
            });
            a = n;
            wrap = "wrap";
            u = BH(f.tail);
        }
        o[0] = text;
        o[1] = a;
        o[2] = i;
        o[3] = wrap;
        o[4] = u;
        o[5] = flexDirection;
        o[6] = l;
        o[7] = p;
        o[8] = c;
    } else {
        a = o[1];
        i = o[2];
        wrap = o[3];
        u = o[4];
        flexDirection = o[5];
        l = o[6];
        p = o[7];
        c = o[8];
    }
    if (c !== Sn) {
        return c;
    }
    let R;
    if (o[9] !== a || o[10] !== wrap || o[11] !== u) {
        R = e(a, {
            wrap,
            children: u
        });
        o[9] = a;
        o[10] = wrap;
        o[11] = u;
        o[12] = R;
    } else {
        R = o[12];
    }
    let y;
    if (o[13] !== i || o[14] !== flexDirection || o[15] !== l || o[16] !== p || o[17] !== R) {
        y = r(i, {
            flexDirection,
            children: [
                l,
                p,
                R
            ]
        });
        o[13] = i;
        o[14] = flexDirection;
        o[15] = l;
        o[16] = p;
        o[17] = R;
        o[18] = y;
    } else {
        y = o[18];
    }
    return y;
}
export { mXe, X1e, zq, zNt, GNt, JR };
