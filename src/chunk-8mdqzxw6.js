import { r1t, o1t } from "/$bunfs/root/chunk-re1a1x17.js";
import { BP } from "/$bunfs/root/chunk-ctt36bn8.js";
import { No, re } from "/$bunfs/root/chunk-etbngzss.js";
import { Gj, fle, Qvt, Zvt, hM } from "/$bunfs/root/chunk-kasbfbhj.js";
import { NA } from "/$bunfs/root/chunk-xj62f004.js";
import { jht } from "/$bunfs/root/chunk-dxtxt6nb.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
function I1s(e) {
    let t = o1t.safeParse(e?.[r1t]);
    if (t.success) {
        return {
            taskId: t.data.taskId
        };
    }
    return null;
}
function O1s(e, t, requestDialog, transportErrorState) {
    if (NA({
        name: t
    }) !== undefined) {
        return;
    }
    let n = jht(e, {
        serverName: t,
        requestDialog,
        transportErrorState,
        runElicitationHooks: Fmn,
        runElicitationResultHooks: Umn
    });
    try {
        e.setRequestHandler("elicitation/create", (i, o)=>n.handle(i, {
                signal: o.mcpReq.signal
            }));
        e.setNotificationHandler("notifications/elicitation/complete", (i)=>{
            let { elicitationId } = i.params;
            re(t, `Received elicitation completion notification: ${elicitationId}`);
            hM(Gj(), {
                message: `MCP server "${t}" confirmed elicitation ${elicitationId} complete`,
                notificationType: "elicitation_complete"
            }).catch(fle);
            if (!n.complete(elicitationId)) {
                re(t, `Ignoring completion notification for unknown elicitation: ${elicitationId}`);
            }
        });
    } catch  {
        return;
    }
}
function u1r({ connected, params, signal, requestDialog, transportErrorState }) {
    return jht(hi(connected.client), {
        serverName: connected.name,
        requestDialog,
        transportErrorState: connected.transportErrorState,
        runElicitationHooks: Fmn,
        runElicitationResultHooks: Umn
    }).handle({
        params
    }, {
        signal,
        transportErrorState
    });
}
async function Fmn(e, t, c) {
    let r = Gj();
    if (r.project === null) {
        throw new BP;
    }
    try {
        let n = t.mode === "url" ? "url" : "form";
        let url = "url" in t ? t.url : undefined;
        let o = "elicitationId" in t ? t.elicitationId : undefined;
        let { elicitationResponse, blockingError } = await Qvt({
            session: r,
            serverName: e,
            message: t.message,
            requestedSchema: "requestedSchema" in t ? t.requestedSchema : undefined,
            signal: c,
            mode: n,
            url,
            elicitationId: o
        });
        if (blockingError) {
            return {
                action: "decline"
            };
        }
        if (elicitationResponse) {
            return {
                action: elicitationResponse.action,
                content: elicitationResponse.content
            };
        }
        return;
    } catch (error) {
        No(e, `Elicitation hook error: ${error}`);
        return;
    }
}
async function Umn(e, t, c, r, n) {
    let i = Gj();
    if (i.project === null) {
        throw new BP;
    }
    try {
        let { elicitationResultResponse, blockingError } = await Zvt({
            session: i,
            serverName: e,
            action: t.action,
            content: t.content,
            signal: c,
            mode: r,
            elicitationId: n
        });
        if (blockingError) {
            hM(i, {
                message: `Elicitation response for server "${e}": decline`,
                notificationType: "elicitation_response"
            }).catch(fle);
            return {
                action: "decline"
            };
        }
        let a = elicitationResultResponse ? {
            action: elicitationResultResponse.action,
            content: elicitationResultResponse.content ?? t.content
        } : t;
        hM(i, {
            message: `Elicitation response for server "${e}": ${a.action}`,
            notificationType: "elicitation_response"
        }).catch(fle);
        return a;
    } catch (error) {
        No(e, `ElicitationResult hook error: ${error}`);
        hM(i, {
            message: `Elicitation response for server "${e}": ${t.action}`,
            notificationType: "elicitation_response"
        }).catch(fle);
        return t;
    }
}
export { I1s, O1s, u1r, Fmn, Umn };
