import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { q0 } from "/$bunfs/root/chunk-8eystn8t.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { Rc } from "/$bunfs/root/chunk-rk838m7w.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, Co, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { a5, fB } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { us } from "/$bunfs/root/chunk-w72c4p0f.js";
import { bU, jH, bc } from "/$bunfs/root/chunk-p0ey0vwr.js";
import { por, Hqt, j3, FDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { rb } from "/$bunfs/root/chunk-tm3f4m0j.js";
import { gXe } from "/$bunfs/root/chunk-qaxbex4b.js";
import { fIe } from "/$bunfs/root/chunk-a71qyhcp.js";
import { hXe, Jf } from "/$bunfs/root/chunk-n9zrtj9n.js";
import { rk } from "/$bunfs/root/chunk-2kj77ctk.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { ED } from "/$bunfs/root/chunk-dmmzcg0b.js";
import { Cd } from "/$bunfs/root/chunk-ywnn3sze.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const g = "ctrl+b";
const _ = "ctrl+x ctrl+b";
const C = new Set([
    g,
    _
].map((i)=>fB(a5(i))));
function j(i) {
    for (let o of i){
        if (o.context !== "Task") {
            continue;
        }
        let u = fB(o.chord);
        if (o.action === "task:background") {
            if (!C.has(u)) {
                return true;
            }
        } else if (o.action === null && C.has(u)) {
            return true;
        }
    }
    return false;
}
function VNt({ handler, isActive }) {
    let cohesionFixes = rk();
    let resolvedShortcut = us("task:background", "Task", g);
    let d = Lc();
    let c = d?.bindings;
    let t = Z(()=>{
        if (c) {
            return j(c);
        }
        return false;
    }, [
        c
    ]);
    let p = Co(handler);
    let singleKey = !(cohesionFixes && !t);
    P(()=>{
        if (!d || !isActive) {
            return;
        }
        return d.registerHandler({
            action: "task:background",
            context: "Task",
            handler: ()=>p(),
            singleKey
        });
    }, [
        d,
        isActive,
        singleKey
    ]);
    let f = t ? resolvedShortcut : _;
    let gateOnShortcut = resolvedShortcut === "" ? "" : a.terminal === "tmux" ? f.split(" ").map((y)=>{
        if (y === g) {
            return `${g} ${g}`;
        }
        return y;
    }).join(" ") : f;
    return {
        cohesionFixes,
        gateOnShortcut,
        resolvedShortcut
    };
}
const h = {};
Mr(h, {
    PILL_INDENT_COLUMNS: ()=>paddingLeft,
    ToolProgressHint: ()=>S,
    default: ()=>h
});
var paddingLeft = 5;
function z(t) {
    if (t.props.hint === "") {
        return null;
    }
    return e(s, {
        paddingLeft,
        children: e(n, {
            dimColor: true,
            children: t.props.hint
        })
    });
}
var S = (i)=>{
    let l = w(4);
    let { toolUseId, hint } = i;
    let d;
    let c;
    if (l[0] !== hint || l[1] !== toolUseId) {
        d = ()=>({
                requestId: toolUseId,
                props: {
                    tool_use_id: toolUseId,
                    kind: "background_hint",
                    hint
                }
            });
        c = [
            toolUseId,
            hint
        ];
        l[0] = hint;
        l[1] = toolUseId;
        l[2] = d;
        l[3] = c;
    } else {
        d = l[2];
        c = l[3];
    }
    return bc.useRenderHook(bc.useRenderInput("ToolProgress", d, c), z);
};
const E = 2;
const T = 160;
function T4n(i) {
    let t = w(10);
    let { toolUseId, keyOnly, onBackground } = i;
    let d = keyOnly === undefined ? false : keyOnly;
    let c = rb();
    let p;
    if (t[0] !== onBackground || t[1] !== c) {
        p = ()=>{
            j3(c);
            onBackground?.();
        };
        t[0] = onBackground;
        t[1] = c;
        t[2] = p;
    } else {
        p = t[2];
    }
    let handler = p;
    let f;
    if (t[3] !== handler) {
        f = {
            handler,
            isActive: true
        };
        t[3] = handler;
        t[4] = f;
    } else {
        f = t[4];
    }
    let { cohesionFixes, gateOnShortcut } = VNt(f);
    let F = us("task:background", "Task", "ctrl+b");
    let chord = cohesionFixes ? gateOnShortcut : a.terminal === "tmux" && F === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : F;
    if (d) {
        return null;
    }
    if (Cd() || cohesionFixes && chord === "") {
        return null;
    }
    let D;
    if (t[5] !== chord) {
        D = q0({
            chord,
            action: "run in background",
            parens: true,
            format: {
                keyCase: "lower"
            }
        });
        t[5] = chord;
        t[6] = D;
    } else {
        D = t[6];
    }
    let hint = D;
    if (hint === "") {
        return null;
    }
    let A;
    if (t[7] !== hint || t[8] !== toolUseId) {
        A = e(h.ToolProgressHint, {
            toolUseId,
            hint
        });
        t[7] = hint;
        t[8] = toolUseId;
        t[9] = A;
    } else {
        A = t[9];
    }
    return A;
}
function iBs({ command }, { verbose, theme }) {
    if (!command) {
        return null;
    }
    let d = FDe(command);
    if (d) {
        if (verbose) {
            return d.filePath;
        }
        return os(d.filePath);
    }
    if (!verbose) {
        let c = command.split(`
`);
        if (Rc()) {
            let m = por(command);
            if (m) {
                if (m.length > T) {
                    return `${m.slice(0, T)}…`;
                }
                return m;
            }
        }
        let t = c.length > E;
        let p = command.length > T;
        if (t || p) {
            let m = command;
            if (t) {
                m = c.slice(0, E).join(`
`);
            }
            if (m.length > T) {
                m = m.slice(0, T);
            }
            return r(n, {
                children: [
                    m.trim(),
                    "…"
                ]
            });
        }
    }
    return command;
}
function aBs(i, { verbose, tools, terminalSize, inProgressToolCallCount }) {
    let c = i.at(-1);
    if (!c || !c.data) {
        return e(Fe, {
            height: 1,
            children: e(n, {
                dimColor: true,
                children: "Running…"
            })
        });
    }
    let c_data = c.data;
    return e(fIe, {
        fullOutput: c_data.fullOutput,
        output: c_data.output,
        elapsedTimeSeconds: c_data.elapsedTimeSeconds,
        totalLines: c_data.totalLines,
        totalBytes: c_data.totalBytes,
        timeoutMs: c_data.timeoutMs,
        taskId: c_data.taskId,
        verbose
    });
}
function lBs() {
    return e(Fe, {
        height: 1,
        children: e(n, {
            dimColor: true,
            children: "Waiting…"
        })
    });
}
function cBs(content, o, { verbose, theme, tools, style, input }) {
    let timeoutMs = o.at(-1)?.data?.timeoutMs;
    let command = typeof input === "object" && input !== null && "command" in input && typeof input.command === "string" ? input.command : undefined;
    return e(gXe, {
        content,
        verbose,
        timeoutMs,
        style,
        command
    });
}
function dBs(result, { verbose, progressMessagesForMessage, tools }) {
    return e(Jf, {
        result,
        verbose
    });
}
function uBs(i, { columns }) {
    if (i.isImage) {
        return false;
    }
    return ED(i.stdout, columns) || ED(typeof i.stderr === "string" ? hXe(i.stderr).trim().replace(Hqt, "") : i.stderr, columns);
}
export { VNt, T4n, iBs, aBs, lBs, cBs, dBs, uBs };
