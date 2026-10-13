import { gm } from "/$bunfs/root/chunk-k3tkc302.js";
function c(t) {
    if (typeof t === "object" && t !== null && !Array.isArray(t)) {
        return t;
    }
    return null;
}
function n(t, ...e) {
    let r = {
        ...t
    };
    for (let s of e){
        delete r[s];
    }
    return r;
}
function a(t) {
    return typeof t === "string";
}
function i(t) {
    return a(t.from_url) || Array.isArray(t.asset_ids);
}
const j3o = [
    "read_file",
    "read_asset",
    "describe_type",
    "list_files",
    "list_assets",
    "list_types",
    "upload_asset",
    "delete_asset",
    "copy_from"
];
const IK = {
    comments: "comments",
    reply: "comments",
    resolve: "comments",
    watch: "comments",
    unwatch: "comments",
    status: "comments",
    resume_replies: "comments",
    read_db: "data",
    write_db: "data",
    verify: "check",
    preview: "check"
};
function cSt(t) {
    return Object.hasOwn(IK, t);
}
const GYr = [
    "set",
    "update",
    "str_replace",
    "delete",
    "batch"
];
const u = new Set(GYr);
function QEe(t) {
    let e = c(t);
    if (e === null) {
        return t;
    }
    let e_action = e.action;
    if (e_action === undefined || e_action === "publish") {
        if (e.asset === true) {
            if (i(e)) {
                return {
                    ...n(e, "asset"),
                    action: "copy_from"
                };
            }
            return {
                ...n(e, "asset"),
                action: "upload_asset"
            };
        }
        if ("asset" in e) {
            return n(e, "asset");
        }
        return t;
    }
    if (e_action === "read") {
        if (a(e.type_url) && e.url === undefined) {
            return {
                ...e,
                action: "describe_type"
            };
        }
        if (a(e.path)) {
            if (gm.test(e.path)) {
                return {
                    ...n(e, "path"),
                    action: "read_asset",
                    asset_id: e.path
                };
            }
            return {
                ...e,
                action: "read_file"
            };
        }
        if (Array.isArray(e.paths)) {
            return {
                ...e,
                action: "read_file"
            };
        }
        return t;
    }
    if (e_action === "list") {
        if (e.scope === "types") {
            return {
                ...n(e, "scope"),
                action: "list_types"
            };
        }
        if (e.scope === "files") {
            return {
                ...n(e, "scope"),
                action: "list_files"
            };
        }
        if (e.scope === "assets") {
            return {
                ...n(e, "scope"),
                action: "list_assets"
            };
        }
        return t;
    }
    if (e_action === "delete" && a(e.path)) {
        return {
            ...n(e, "path"),
            action: "delete_asset",
            asset_id: e.path
        };
    }
    return t;
}
function xge(t) {
    let e = c(t);
    if (e === null) {
        return t;
    }
    switch(e.action){
        case "upload_asset":
            if (a(e.file_path) || Array.isArray(e.file_paths)) {
                return {
                    ...e,
                    action: "publish",
                    asset: true
                };
            }
            return t;
        case "copy_from":
            if (i(e)) {
                return {
                    ...e,
                    action: "publish",
                    asset: true
                };
            }
            return t;
        case "describe_type":
            if (a(e.type_url) && e.url === undefined) {
                return {
                    ...e,
                    action: "read"
                };
            }
            return t;
        case "read_file":
            if (a(e.path) || Array.isArray(e.paths)) {
                return {
                    ...e,
                    action: "read"
                };
            }
            return t;
        case "read_asset":
            if (a(e.asset_id)) {
                return {
                    ...n(e, "asset_id"),
                    action: "read",
                    path: e.asset_id
                };
            }
            return t;
        case "list_types":
            return {
                ...e,
                action: "list",
                scope: "types"
            };
        case "list_files":
            return {
                ...e,
                action: "list",
                scope: "files"
            };
        case "list_assets":
            return {
                ...e,
                action: "list",
                scope: "assets"
            };
        case "delete_asset":
            if (a(e.asset_id)) {
                return {
                    ...n(e, "asset_id"),
                    action: "delete",
                    path: e.asset_id
                };
            }
            return t;
        default:
            return t;
    }
}
function ZEe(t, e) {
    let r = c(e);
    if (r === null) {
        return e;
    }
    let r_action = r.action;
    if (t === "comments") {
        if (r_action === "read") {
            return {
                ...r,
                action: "comments"
            };
        }
        if (r_action === "watch") {
            let o = n(r, "on", "replies");
            if (r.replies === true) {
                return {
                    ...o,
                    action: "resume_replies"
                };
            }
            if (r.on === false) {
                return {
                    ...o,
                    action: "unwatch"
                };
            }
            if (r.url === undefined) {
                return {
                    ...o,
                    action: "status"
                };
            }
            return {
                ...o,
                action: "watch"
            };
        }
        return e;
    }
    if (t === "data") {
        if (r_action === "get" || r_action === "list" || r_action === "query" || r_action === "profiles") {
            return {
                ...r,
                action: "read_db",
                db_op: r_action
            };
        }
        if (u.has(r_action)) {
            return {
                ...r,
                action: "write_db",
                db_op: r_action
            };
        }
        return e;
    }
    return e;
}
function HZe(t, e) {
    let r = c(e);
    if (r === null) {
        return e;
    }
    let r_action = r.action;
    if (t === "comments") {
        switch(r_action){
            case "comments":
                return {
                    ...r,
                    action: "read"
                };
            case "watch":
                return {
                    ...r,
                    action: "watch"
                };
            case "unwatch":
                return {
                    ...r,
                    action: "watch",
                    on: false
                };
            case "status":
                return {
                    ...n(r, "url"),
                    action: "watch"
                };
            case "resume_replies":
                return {
                    ...r,
                    action: "watch",
                    replies: true
                };
            default:
                return e;
        }
    }
    if (t === "data") {
        if ((r_action === "read_db" || r_action === "write_db") && a(r.db_op)) {
            return {
                ...n(r, "db_op"),
                action: r.db_op
            };
        }
        return e;
    }
    return e;
}
export { j3o, IK, cSt, GYr, QEe, xge, ZEe, HZe };
