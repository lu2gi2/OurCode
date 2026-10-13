import { ZRt, jdo, ede } from "/$bunfs/root/chunk-7y9jhgf9.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { GN } from "/$bunfs/root/chunk-x3w6yqn3.js";
import { LO } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ly, Gen, Ch } from "/$bunfs/root/chunk-6g4165br.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ka } from "/$bunfs/root/chunk-p0ey0vwr.js";
import { VP, _ee } from "/$bunfs/root/chunk-qd4xar8b.js";
import { X1e, zq, JR } from "/$bunfs/root/chunk-e6km67fv.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
const k = "</cross-session-message>";
const fallbackLabel = "peer";
function v(text) {
    let a = ede.find((d)=>text.startsWith(d));
    let l = (a ? text.slice(a.length) : text).match(/^<cross-session-message\b([^>]*)>/)?.[1] ?? "";
    let g = l.match(/\bfrom="([^"]+)"/)?.[1];
    let c = l.match(/\bfrom-name="([^"]+)"/)?.[1];
    return J(c, g);
}
function J(i, a) {
    return i && Ly(i) || a && Ly(ee(a)) || fallbackLabel;
}
function T(i, a) {
    let o = i;
    let l = ede.find((c)=>o.startsWith(c));
    if (l) {
        o = o.slice(l.length);
    }
    let g = o.lastIndexOf(k) + k.length;
    if (g > k.length - 1) {
        let c = o.slice(g);
        if (ZRt.includes(c) || a && jdo.includes(c)) {
            o = o.slice(0, g);
        }
    }
    return o.replace(/^<cross-session-message[^>]*>\n/, "").replace(/\n<\/cross-session-message>$/, "");
}
function mHr(i, a) {
    let o = T(i, a);
    let l = LO(o, " ", {
        keepEmojiJoiners: true
    }).replace(/\s+/g, " ").trim();
    return Gen(o) !== l;
}
function yHs(i) {
    let m = w(22);
    let { addMargin, param, hostInjected, verbose, isTranscriptMode, messageId, origin, followsSpeakerLabel } = i;
    let { text } = param;
    let followsSpeakerLabel_1 = followsSpeakerLabel === undefined ? false : followsSpeakerLabel;
    let expanded = GN(verbose, isTranscriptMode);
    let x;
    if (m[0] !== text) {
        x = v(text);
        m[0] = text;
        m[1] = x;
    } else {
        x = m[1];
    }
    let b = x;
    let W;
    if (m[2] !== origin) {
        W = origin?.kind === "peer" && origin.plugin !== undefined ? Ly(origin.plugin) : "";
        m[2] = origin;
        m[3] = W;
    } else {
        W = m[3];
    }
    let senderPlugin = W;
    const _ = hostInjected === true;
    let text_1;
    if (m[4] !== _ || m[5] !== text) {
        text_1 = T(text, _);
        m[4] = _;
        m[5] = text;
        m[6] = text_1;
    } else {
        text_1 = m[6];
    }
    const isExpanded = expanded || followsSpeakerLabel_1;
    let sender;
    if (m[7] !== b) {
        sender = {
            name: b
        };
        m[7] = b;
        m[8] = sender;
    } else {
        sender = m[8];
    }
    let draw;
    if (m[9] !== addMargin || m[10] !== b || m[11] !== expanded || m[12] !== followsSpeakerLabel_1 || m[13] !== senderPlugin) {
        draw = (body)=>e(R, {
                addMargin,
                displayName: b,
                senderPlugin,
                expanded,
                followsSpeakerLabel: followsSpeakerLabel_1,
                body
            });
        m[9] = addMargin;
        m[10] = b;
        m[11] = expanded;
        m[12] = followsSpeakerLabel_1;
        m[13] = senderPlugin;
        m[14] = draw;
    } else {
        draw = m[14];
    }
    let F;
    if (m[15] !== messageId || m[16] !== origin || m[17] !== text_1 || m[18] !== isExpanded || m[19] !== sender || m[20] !== draw) {
        F = {
            messageId,
            stored: origin,
            text: text_1,
            isExpanded,
            sender,
            draw
        };
        m[15] = messageId;
        m[16] = origin;
        m[17] = text_1;
        m[18] = isExpanded;
        m[19] = sender;
        m[20] = draw;
        m[21] = F;
    } else {
        F = m[21];
    }
    return zq.useUserMessageSite(F);
}
function R(i) {
    let t = w(19);
    let { addMargin, displayName, senderPlugin, expanded, followsSpeakerLabel, body } = i;
    if (followsSpeakerLabel) {
        let p;
        if (t[0] !== body) {
            p = e(JR, {
                text: body
            });
            t[0] = body;
            t[1] = p;
        } else {
            p = t[1];
        }
        return p;
    }
    if (!expanded) {
        let p;
        if (t[2] !== addMargin || t[3] !== body || t[4] !== displayName) {
            p = e(_ee, {
                displayName,
                addMargin,
                fallbackLabel,
                body
            });
            t[2] = addMargin;
            t[3] = body;
            t[4] = displayName;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    const marginTop = addMargin ? 1 : 0;
    let color;
    if (t[6] === S) {
        color = VP(undefined);
        t[6] = color;
    } else {
        color = t[6];
    }
    let u;
    if (t[7] !== senderPlugin) {
        u = senderPlugin ? r(n, {
            dimColor: true,
            children: [
                " <",
                senderPlugin,
                " plugin",
                ">"
            ]
        }) : null;
        t[7] = senderPlugin;
        t[8] = u;
    } else {
        u = t[8];
    }
    let y;
    if (t[9] === S) {
        y = e(n, {
            "aria-hidden": true,
            children: te.pointer
        });
        t[9] = y;
    } else {
        y = t[9];
    }
    let m;
    if (t[10] !== displayName || t[11] !== u) {
        m = r(n, {
            color,
            children: [
                "@ ",
                displayName,
                u,
                y
            ]
        });
        t[10] = displayName;
        t[11] = u;
        t[12] = m;
    } else {
        m = t[12];
    }
    let x;
    if (t[13] !== body) {
        x = e(s, {
            paddingLeft: 2,
            children: e(Ka, {
                stripPromptTags: false,
                children: body
            })
        });
        t[13] = body;
        t[14] = x;
    } else {
        x = t[14];
    }
    let b;
    if (t[15] !== marginTop || t[16] !== m || t[17] !== x) {
        b = r(s, {
            flexDirection: "column",
            marginTop,
            width: "100%",
            children: [
                m,
                x
            ]
        });
        t[15] = marginTop;
        t[16] = m;
        t[17] = x;
        t[18] = b;
    } else {
        b = t[18];
    }
    return b;
}
function ee(i) {
    let { scheme, target } = Ch(i);
    switch(scheme){
        case "uds":
            return target.slice(Math.max(target.lastIndexOf("/"), target.lastIndexOf("\\")) + 1).replace(/\.sock$/, "");
        case "bridge":
            return "(untitled)";
        case "did":
        case "other":
            return i;
    }
}
export { mHr, yHs };
