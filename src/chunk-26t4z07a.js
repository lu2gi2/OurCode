import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ld } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g0 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { FA, eLe } from "/$bunfs/root/chunk-tzz3htys.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { pj } from "/$bunfs/root/chunk-twmcxkvh.js";
import { oJe, sJe, iJe, egt } from "/$bunfs/root/chunk-8q10swh6.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { basename, resolve } from "path";
N();
function Ao() {
    return "Sent to Claude on each fire. Slash commands work.";
}
function validate(mo) {
    if (mo.trim() === "") {
        return null;
    }
    return eLe(mo).error ?? null;
}
function jo(uo) {
    if (uo.trim() === "") {
        return;
    }
    let $e = eLe(uo);
    if ($e.error) {
        return undefined;
    }
    return `${$e.human} \xB7 ${$e.cron}`;
}
function Lo(co) {
    return {
        label: g0(co),
        value: co
    };
}
async function bDo(m) {
    return egt(undefined, m).catch((o)=>{
        c(o);
        return [];
    });
}
function cMr(m) {
    let i = w(76);
    let { task, onBack, onEdit, onDone, refresh, storageV5 } = m;
    let [g, U] = y(false);
    let [p, ee] = y(false);
    let b;
    if (i[0] !== g || i[1] !== onDone || i[2] !== refresh || i[3] !== storageV5 || i[4] !== task) {
        b = async function I() {
            if (g) {
                return;
            }
            U(true);
            ;
            try {
                await sJe(We({
                    ...task,
                    enabled: !task.enabled
                }), undefined, storageV5);
                await refresh();
                onDone(`${task.enabled ? "Disabled" : "Enabled"} scheduled task '${task.id}'.`, {
                    display: "system"
                });
            } catch (error) {
                let Be = error;
                c(Be);
                onDone(`Toggle failed: ${l(Be)}`, {
                    display: "system"
                });
            }
        };
        i[0] = g;
        i[1] = onDone;
        i[2] = refresh;
        i[3] = storageV5;
        i[4] = task;
        i[5] = b;
    } else {
        b = i[5];
    }
    let I = b;
    let Y;
    if (i[6] !== g || i[7] !== onDone || i[8] !== refresh || i[9] !== storageV5 || i[10] !== task.id) {
        Y = async function j() {
            if (g) {
                return;
            }
            U(true);
            ;
            try {
                await iJe(task.id, undefined, storageV5);
                await refresh();
                onDone(`Removed scheduled task '${task.id}'.`, {
                    display: "system"
                });
            } catch (error) {
                let oe = error;
                t(`Failed to remove scheduled task '${task.id}' from daemon.json: ${l(oe)}`, {
                    level: "error"
                });
                onDone(`Remove failed: ${l(oe)}`, {
                    display: "system"
                });
            }
        };
        i[6] = g;
        i[7] = onDone;
        i[8] = refresh;
        i[9] = storageV5;
        i[10] = task.id;
        i[11] = Y;
    } else {
        Y = i[11];
    }
    let j = Y;
    if (p) {
        const subtitle = `Delete '${task.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`;
        let x;
        if (i[12] === S) {
            x = ()=>ee(false);
            i[12] = x;
        } else {
            x = i[12];
        }
        let onConfirm;
        if (i[13] !== j) {
            onConfirm = ()=>void j();
            i[13] = j;
            i[14] = onConfirm;
        } else {
            onConfirm = i[14];
        }
        let E;
        if (i[15] === S) {
            E = ()=>ee(false);
            i[15] = E;
        } else {
            E = i[15];
        }
        let children;
        if (i[16] !== onConfirm) {
            children = e(or, {
                cancelFirst: true,
                focus: "cancel",
                confirmLabel: "Yes, remove",
                cancelLabel: "No, cancel",
                onConfirm,
                onCancel: E
            });
            i[16] = onConfirm;
            i[17] = children;
        } else {
            children = i[17];
        }
        let f;
        if (i[18] !== subtitle || i[19] !== children) {
            f = e(_e, {
                title: "Remove task?",
                subtitle,
                onCancel: x,
                color: "error",
                children
            });
            i[18] = subtitle;
            i[19] = children;
            i[20] = f;
        } else {
            f = i[20];
        }
        return f;
    }
    const label = task.enabled ? "Disable" : "Enable";
    let x;
    if (i[21] !== label) {
        x = {
            label,
            value: "toggle"
        };
        i[21] = label;
        i[22] = x;
    } else {
        x = i[22];
    }
    let C;
    let E;
    let M;
    if (i[23] === S) {
        C = {
            label: "Edit",
            value: "edit"
        };
        E = {
            label: "Remove",
            value: "remove"
        };
        M = {
            label: "Back",
            value: "back"
        };
        i[23] = C;
        i[24] = E;
        i[25] = M;
    } else {
        C = i[23];
        E = i[24];
        M = i[25];
    }
    let f;
    if (i[26] !== x) {
        f = [
            x,
            C,
            E,
            M
        ];
        i[26] = x;
        i[27] = f;
    } else {
        f = i[27];
    }
    let ce = f;
    const { id: title, cron } = task;
    let F;
    if (i[28] !== task.cron) {
        F = FA(task.cron);
        i[28] = task.cron;
        i[29] = F;
    } else {
        F = i[29];
    }
    let G;
    if (i[30] !== F || i[31] !== task.cron) {
        G = r(n, {
            dimColor: true,
            children: [
                "Cron ",
                cron,
                " (",
                F,
                ")"
            ]
        });
        i[30] = F;
        i[31] = task.cron;
        i[32] = G;
    } else {
        G = i[32];
    }
    let H;
    if (i[33] !== task.directory) {
        H = r(n, {
            dimColor: true,
            children: [
                "Directory ",
                task.directory
            ]
        });
        i[33] = task.directory;
        i[34] = H;
    } else {
        H = i[34];
    }
    let D;
    if (i[35] !== task.prompt) {
        D = r(n, {
            dimColor: true,
            children: [
                "Prompt ",
                task.prompt
            ]
        });
        i[35] = task.prompt;
        i[36] = D;
    } else {
        D = i[36];
    }
    const status = task.enabled ? "on" : "off";
    let Q;
    if (i[37] !== status) {
        Q = e(dt, {
            status,
            withSpace: true
        });
        i[37] = status;
        i[38] = Q;
    } else {
        Q = i[38];
    }
    const q = task.enabled ? "enabled" : "disabled";
    let P;
    if (i[39] !== Q || i[40] !== q) {
        P = r(n, {
            dimColor: true,
            children: [
                "Status ",
                Q,
                q
            ]
        });
        i[39] = Q;
        i[40] = q;
        i[41] = P;
    } else {
        P = i[41];
    }
    let K;
    if (i[42] !== task.permissionMode) {
        K = g0(task.permissionMode);
        i[42] = task.permissionMode;
        i[43] = K;
    } else {
        K = i[43];
    }
    let ie;
    if (i[44] !== K) {
        ie = r(n, {
            dimColor: true,
            children: [
                "Mode ",
                K
            ]
        });
        i[44] = K;
        i[45] = ie;
    } else {
        ie = i[45];
    }
    let T;
    if (i[46] !== task.model) {
        T = task.model && r(n, {
            dimColor: true,
            children: [
                "Model ",
                task.model
            ]
        });
        i[46] = task.model;
        i[47] = T;
    } else {
        T = i[47];
    }
    let W;
    if (i[48] !== task.runTimeoutMinutes) {
        W = r(n, {
            dimColor: true,
            children: [
                "Timeout ",
                task.runTimeoutMinutes,
                "m"
            ]
        });
        i[48] = task.runTimeoutMinutes;
        i[49] = W;
    } else {
        W = i[49];
    }
    let Z;
    if (i[50] !== task.maxQueued) {
        Z = r(n, {
            dimColor: true,
            children: [
                "Max queue ",
                task.maxQueued
            ]
        });
        i[50] = task.maxQueued;
        i[51] = Z;
    } else {
        Z = i[51];
    }
    let O;
    if (i[52] !== G || i[53] !== H || i[54] !== D || i[55] !== P || i[56] !== ie || i[57] !== T || i[58] !== W || i[59] !== Z) {
        O = r(s, {
            flexDirection: "column",
            marginBottom: 1,
            children: [
                G,
                H,
                D,
                P,
                ie,
                T,
                W,
                Z
            ]
        });
        i[52] = G;
        i[53] = H;
        i[54] = D;
        i[55] = P;
        i[56] = ie;
        i[57] = T;
        i[58] = W;
        i[59] = Z;
        i[60] = O;
    } else {
        O = i[60];
    }
    let A;
    if (i[61] !== onBack || i[62] !== onEdit || i[63] !== task || i[64] !== I) {
        A = (re)=>{
            if (re === "back") {
                return onBack();
            }
            if (re === "edit") {
                return onEdit(task);
            }
            if (re === "remove") {
                return ee(true);
            }
            if (re === "toggle") {
                return void I();
            }
        };
        i[61] = onBack;
        i[62] = onEdit;
        i[63] = task;
        i[64] = I;
        i[65] = A;
    } else {
        A = i[65];
    }
    let J;
    if (i[66] !== g || i[67] !== onBack || i[68] !== ce || i[69] !== A) {
        J = e(Ve, {
            options: ce,
            isDisabled: g,
            onChange: A,
            onCancel: onBack
        });
        i[66] = g;
        i[67] = onBack;
        i[68] = ce;
        i[69] = A;
        i[70] = J;
    } else {
        J = i[70];
    }
    let _;
    if (i[71] !== onBack || i[72] !== O || i[73] !== J || i[74] !== task.id) {
        _ = r(_e, {
            title,
            onCancel: onBack,
            children: [
                O,
                J
            ]
        });
        i[71] = onBack;
        i[72] = O;
        i[73] = J;
        i[74] = task.id;
        i[75] = _;
    } else {
        _ = i[75];
    }
    return _;
}
function dMr(m) {
    let p = w(59);
    let { defaultDir, existingIds, prefill, modelOptions, onCancel, onDone, onSaved, storageV5 } = m;
    let ee;
    if (p[0] !== modelOptions) {
        ee = modelOptions === undefined ? [
            {
                label: "default",
                value: ""
            }
        ] : modelOptions;
        p[0] = modelOptions;
        p[1] = ee;
    } else {
        ee = p[1];
    }
    let i = ee;
    let b = prefill !== undefined;
    let Y;
    if (p[2] !== existingIds || p[3] !== b || p[4] !== prefill) {
        Y = b ? existingIds.filter((Be)=>Be !== prefill.id) : existingIds;
        p[2] = existingIds;
        p[3] = b;
        p[4] = prefill;
        p[5] = Y;
    } else {
        Y = p[5];
    }
    let I = Y;
    const prompt = prefill?.prompt ?? "";
    const schedule = prefill?.cron ?? "";
    const dir = prefill?.directory ?? defaultDir;
    const x = prefill?.id ?? "";
    const permissionMode = prefill?.permissionMode ?? "dontAsk";
    const E = prefill?.model ?? "";
    let M;
    if (p[6] !== prompt || p[7] !== schedule || p[8] !== dir || p[9] !== x || p[10] !== permissionMode || p[11] !== E) {
        M = {
            prompt,
            schedule,
            dir,
            id: x,
            permissionMode,
            model: E
        };
        p[6] = prompt;
        p[7] = schedule;
        p[8] = dir;
        p[9] = x;
        p[10] = permissionMode;
        p[11] = E;
        p[12] = M;
    } else {
        M = p[12];
    }
    let [f, ce] = y(M);
    let [L, Ze] = y(b);
    let [F, G] = y(false);
    let H;
    if (p[13] !== defaultDir || p[14] !== L) {
        H = function P(D, te) {
            if (D === "id") {
                Ze(true);
            }
            ce((Q)=>{
                if (Q[D] === te) {
                    return Q;
                }
                let q = {
                    ...Q,
                    [D]: te
                };
                if (D !== "id" && !L && (D === "prompt" || D === "dir")) {
                    q.id = ue(resolve(Ld(q.dir?.trim() || defaultDir)), q.prompt ?? "");
                }
                return q;
            });
        };
        p[13] = defaultDir;
        p[14] = L;
        p[15] = H;
    } else {
        H = p[15];
    }
    let P = H;
    let K;
    if (p[16] !== i || p[17] !== prefill) {
        K = prefill?.model && !i.some((ie)=>ie.value === prefill.model) ? [
            ...i,
            {
                label: prefill.model,
                value: prefill.model
            }
        ] : i;
        p[16] = i;
        p[17] = prefill;
        p[18] = K;
    } else {
        K = p[18];
    }
    let T = K;
    let W;
    let Z;
    if (p[19] === S) {
        W = {
            type: "text",
            key: "prompt",
            label: "Prompt",
            placeholder: "/babysit-prs",
            required: true,
            hint: Ao
        };
        Z = {
            type: "text",
            key: "schedule",
            label: "Schedule",
            placeholder: "5m, 2h, 1d  or  */15 * * * *",
            required: true,
            validate,
            hint: jo
        };
        p[19] = W;
        p[20] = Z;
    } else {
        W = p[19];
        Z = p[20];
    }
    let O;
    if (p[21] !== defaultDir) {
        O = {
            type: "text",
            key: "dir",
            label: "Directory",
            placeholder: defaultDir
        };
        p[21] = defaultDir;
        p[22] = O;
    } else {
        O = p[22];
    }
    let validate_1;
    if (p[23] !== I) {
        validate_1 = (re)=>{
            let J = re.trim();
            if (J !== "" && I.includes(J)) {
                return `id '${J}' is already in use`;
            }
            return null;
        };
        p[23] = I;
        p[24] = validate_1;
    } else {
        validate_1 = p[24];
    }
    let _;
    if (p[25] !== L) {
        _ = ()=>{
            if (L) {
                return undefined;
            }
            return "Auto-generated from prompt and directory.";
        };
        p[25] = L;
        p[26] = _;
    } else {
        _ = p[26];
    }
    let pe;
    if (p[27] !== validate_1 || p[28] !== _) {
        pe = {
            type: "text",
            key: "id",
            label: "Id",
            validate: validate_1,
            hint: _
        };
        p[27] = validate_1;
        p[28] = _;
        p[29] = pe;
    } else {
        pe = p[29];
    }
    let eo;
    if (p[30] === S) {
        eo = {
            type: "select",
            key: "permissionMode",
            label: "Permission mode",
            options: oJe.map(Lo)
        };
        p[30] = eo;
    } else {
        eo = p[30];
    }
    let fe;
    if (p[31] !== T) {
        fe = (oo)=>T.find((Fo)=>Fo.value === oo)?.description ?? (oo === "" ? "Uses your configured default model." : undefined);
        p[31] = T;
        p[32] = fe;
    } else {
        fe = p[32];
    }
    let ke;
    if (p[33] !== T || p[34] !== fe) {
        ke = {
            type: "select",
            key: "model",
            label: "Model",
            options: T,
            hint: fe
        };
        p[33] = T;
        p[34] = fe;
        p[35] = ke;
    } else {
        ke = p[35];
    }
    let to;
    if (p[36] !== O || p[37] !== pe || p[38] !== ke) {
        to = [
            W,
            Z,
            O,
            pe,
            eo,
            ke
        ];
        p[36] = O;
        p[37] = pe;
        p[38] = ke;
        p[39] = to;
    } else {
        to = p[39];
    }
    let fields = to;
    let io;
    if (p[40] !== F || p[41] !== defaultDir || p[42] !== b || p[43] !== onDone || p[44] !== onSaved || p[45] !== prefill || p[46] !== storageV5 || p[47] !== f) {
        io = async function ve() {
            if (F) {
                return;
            }
            G(true);
            let directory = resolve(Ld(f.dir?.trim() || defaultDir));
            let no = eLe(f.schedule ?? "");
            if (no.cron === undefined) {
                G(false);
                return;
            }
            let Re = f.id?.trim() || ue(directory, f.prompt?.trim() ?? "");
            let permissionMode = f.permissionMode ?? "dontAsk";
            let so = f.model?.trim() || undefined;
            let No = {
                id: Re,
                cron: no.cron,
                prompt: f.prompt.trim(),
                directory,
                enabled: prefill?.enabled ?? true,
                permissionMode,
                runTimeoutMinutes: prefill?.runTimeoutMinutes ?? 30,
                maxQueued: prefill?.maxQueued ?? 1,
                ...so && {
                    model: so
                }
            };
            ;
            try {
                if (b && prefill.id !== Re) {
                    await iJe(prefill.id, undefined, storageV5);
                }
                await sJe(No, undefined, storageV5);
                await onSaved(Re, b);
            } catch (error) {
                let lo = error;
                c(lo);
                onDone(`Save failed: ${l(lo)}`, {
                    display: "system"
                });
            }
        };
        p[40] = F;
        p[41] = defaultDir;
        p[42] = b;
        p[43] = onDone;
        p[44] = onSaved;
        p[45] = prefill;
        p[46] = storageV5;
        p[47] = f;
        p[48] = io;
    } else {
        io = p[48];
    }
    let ve = io;
    const title = b ? `Edit '${prefill.id}'` : "New scheduled task";
    let onSubmit;
    if (p[49] !== ve) {
        onSubmit = ()=>void ve();
        p[49] = ve;
        p[50] = onSubmit;
    } else {
        onSubmit = p[50];
    }
    const submitLabel = b ? "Save changes" : "Create task";
    let ao;
    if (p[51] !== fields || p[52] !== onCancel || p[53] !== P || p[54] !== title || p[55] !== onSubmit || p[56] !== submitLabel || p[57] !== f) {
        ao = e(pj, {
            title,
            subtitle: "Fire a prompt on a recurring schedule",
            fields,
            values: f,
            onChange: P,
            onSubmit,
            onCancel,
            submitLabel
        });
        p[51] = fields;
        p[52] = onCancel;
        p[53] = P;
        p[54] = title;
        p[55] = onSubmit;
        p[56] = submitLabel;
        p[57] = f;
        p[58] = ao;
    } else {
        ao = p[58];
    }
    return ao;
}
function Xqn(m) {
    return m.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
}
function ue(m, o) {
    let k = Xqn(basename(m));
    let d = Xqn(o.split(/\s+/).slice(0, 4).join(" "));
    return [
        k,
        d
    ].filter(Boolean).join("-") || "task";
}
function We(m) {
    return {
        id: m.id,
        cron: m.cron,
        prompt: m.prompt,
        directory: m.directory,
        enabled: m.enabled,
        permissionMode: m.permissionMode,
        runTimeoutMinutes: m.runTimeoutMinutes,
        maxQueued: m.maxQueued,
        ...m.model && {
            model: m.model
        }
    };
}
export { bDo, cMr, dMr, Xqn };
