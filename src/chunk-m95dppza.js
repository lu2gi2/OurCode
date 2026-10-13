import { ALt, P9e } from "/$bunfs/root/chunk-kd05vdd0.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
function CMo(e) {
    return {
        steps: [
            {
                id: "check",
                status: "running",
                startedAt: e
            },
            {
                id: "create",
                status: "pending"
            }
        ],
        rerouted: false,
        folder: false,
        bundle: null,
        fallback: null,
        requestSent: false
    };
}
function RMo(e, a, r) {
    switch(a.kind){
        case "checking":
            if (a.folder === true && !e.folder) {
                return {
                    ...e,
                    folder: true
                };
            }
            return e;
        case "bundling":
            {
                if (e.fallback !== null || e.steps.some((n)=>n.id === "bundle") || !e.steps.some((n)=>n.id === "create" && n.status === "pending")) {
                    return e;
                }
                let t = s(e, "check", "completed", r);
                return {
                    ...t,
                    steps: t.steps.flatMap((n)=>{
                        if (n.id === "create") {
                            return [
                                {
                                    id: "bundle",
                                    status: "running",
                                    startedAt: r
                                },
                                ...a.uploadedBySync === true ? [] : [
                                    {
                                        id: "upload",
                                        status: "pending"
                                    }
                                ],
                                n
                            ];
                        }
                        return [
                            n
                        ];
                    }),
                    rerouted: a.rerouted,
                    folder: a.folder === true
                };
            }
        case "bundled":
            {
                let t = s(e, "bundle", "completed", r);
                if (t === e) {
                    return e;
                }
                return {
                    ...d(t, "upload", r),
                    bundle: {
                        sizeBytes: a.sizeBytes,
                        scope: a.scope
                    }
                };
            }
        case "bundle_failed":
            {
                let t = e.steps.find((l)=>l.status === "running" && (l.id === "bundle" || l.id === "upload"));
                if (t === undefined && e.fallback !== null) {
                    return e;
                }
                let n = t === undefined ? e : s(e, t.id, "failed", r);
                return {
                    ...n,
                    steps: n.steps.filter((l)=>!(l.id === "upload" && l.status === "pending")),
                    fallback: a.fallback
                };
            }
        case "creating":
            return d(s(s(e, "check", "completed", r), "upload", "completed", r), "create", r);
        case "request_sent":
            if (e.requestSent) {
                return e;
            }
            return {
                ...e,
                requestSent: true
            };
        case "session_exists":
            return e;
        case "created":
            return s(e, "create", "completed", r);
    }
}
function s(e, a, status, completedAt) {
    if (e.steps.some((n)=>n.id === a && n.status === "running")) {
        return {
            ...e,
            steps: e.steps.map((n)=>{
                if (n.id === a && n.status === "running") {
                    return {
                        ...n,
                        status,
                        completedAt
                    };
                }
                return n;
            })
        };
    }
    return e;
}
function d(e, a, r) {
    if (e.steps.some((t)=>t.id === a && t.status === "pending")) {
        return {
            ...e,
            steps: e.steps.map((t)=>{
                if (t.id === a && t.status === "pending") {
                    return {
                        ...t,
                        status: "running",
                        startedAt: r
                    };
                }
                return t;
            })
        };
    }
    return e;
}
function f9e(e) {
    let a = e.steps.findLast((r)=>r.status !== "pending");
    switch(a?.id){
        case undefined:
        case "check":
            return "checking";
        case "bundle":
            return "bundling";
        case "upload":
            return "uploading";
        case "create":
            if (a.status === "completed") {
                return "created";
            }
            return "creating";
    }
}
const u = {
    all: "with history",
    current_branch: "current branch only",
    head: "current history only",
    squashed: "snapshot without history"
};
function RIr(e, a, r) {
    return {
        label: o(e, a),
        annotation: `${c(e, a)}${P9e(e, r)}`,
        detail: i(e, a)
    };
}
function i(e, a) {}
function o(e, { rerouted, folder }) {
    let t = e.status === "completed";
    switch(e.id){
        case "check":
            if (folder) {
                if (t) {
                    return "Checked this folder";
                }
                return "Checking this folder";
            }
            if (t) {
                return "Checked this checkout";
            }
            return "Checking this checkout";
        case "bundle":
            if (folder) {
                if (t) {
                    return "Packaged this folder";
                }
                return "Packaging this folder";
            }
            if (rerouted) {
                if (t) {
                    return "Packaged local changes";
                }
                return "Packaging local changes";
            }
            if (t) {
                return "Packaged this repository";
            }
            return "Packaging this repository";
        case "upload":
            if (rerouted) {
                if (t) {
                    return "Uploaded your working tree";
                }
                return "Uploading your working tree";
            }
            if (t) {
                return "Uploaded this repository";
            }
            return "Uploading this repository";
        case "create":
            if (t) {
                return "Created cloud session";
            }
            return "Creating cloud session";
    }
}
function c(e, { bundle, folder }) {
    if (bundle === null || e.status !== "running" && e.status !== "completed") {
        return "";
    }
    let t = Qt(bundle.sizeBytes);
    switch(e.id){
        case "bundle":
            if (e.status === "completed") {
                if (folder) {
                    return ` \xB7 ${t}`;
                }
                return ` \xB7 ${t}, ${u[bundle.scope]}`;
            }
            return "";
        case "upload":
            if (e.status === "completed") {
                return ` \xB7 ${t}`;
            }
            return ` ${t}`;
        case "check":
        case "create":
            return "";
    }
}
function xIr(e) {
    let a = ALt("new");
    if (f9e(e) === "created") {
        return a.replace(/^Setting up/, "Set up");
    }
    return `${a}\u2026`;
}
function xMo(e) {
    if (e !== null && e.requestSent) {
        return "Cancelled after the create request was sent, so a cloud session may still have been created";
    }
    return "Cancelled before a cloud session was created";
}
export { CMo, RMo, f9e, RIr, xIr, xMo };
