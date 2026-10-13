import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
function WFo(e, i) {
    let manifests = new Map;
    let malformedServerNames = [];
    if (e === undefined || e === null) {
        return {
            manifests,
            malformedField: false,
            malformedServerNames
        };
    }
    if (!L(e)) {
        return {
            manifests,
            malformedField: true,
            malformedServerNames
        };
    }
    for (let r of i){
        if (!Object.hasOwn(e, r)) {
            continue;
        }
        let o = e[r];
        let initializeResult = L(o) ? o.initializeResult : undefined;
        let toolsListResult = L(o) && o.toolsListResult !== null ? o.toolsListResult : undefined;
        if (L(initializeResult) && (toolsListResult === undefined || L(toolsListResult))) {
            manifests.set(r, toolsListResult === undefined ? {
                initializeResult
            } : {
                initializeResult,
                toolsListResult
            });
        } else {
            malformedServerNames.push(r);
        }
    }
    return {
        manifests,
        malformedField: false,
        malformedServerNames
    };
}
const f = "notifications/tools/list_changed";
function Wun(e) {
    return L(e) && !("id" in e) && e.method === f;
}
function u(timeout) {
    if (typeof timeout === "number" && Number.isInteger(timeout) && timeout > 0) {
        return timeout;
    }
}
function xFt(e) {
    if (!L(e)) {
        return {
            settings: {},
            ignored: []
        };
    }
    let { timeout, disableAutoBackground } = e;
    let timeout_1 = u(timeout);
    let ignored = [];
    if (timeout !== undefined && timeout_1 === undefined) {
        ignored.push("timeout");
    }
    if (disableAutoBackground !== undefined && typeof disableAutoBackground !== "boolean") {
        ignored.push("disableAutoBackground");
    }
    return {
        settings: {
            ...timeout_1 !== undefined && {
                timeout: timeout_1
            },
            ...disableAutoBackground === true && {
                disableAutoBackground
            }
        },
        ignored
    };
}
export { WFo, Wun, xFt };
