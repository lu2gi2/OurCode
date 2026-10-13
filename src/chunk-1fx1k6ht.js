import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { TI, ni } from "/$bunfs/root/chunk-kasbfbhj.js";
import { kmt } from "/$bunfs/root/chunk-90v2ekbp.js";
function _Dr(s, o = true) {
    let r = s.at(-1);
    let a = o && r?.type === "assistant" && r.message.stop_reason === null;
    return ni(a ? s.slice(0, -1) : [
        ...s
    ]);
}
async function Lcn({ question, history, parentController, onProgress, getLiveMessages, isTurnInProgress, buildFallbackParams }) {
    let turnInProgress = isTurnInProgress?.() ?? true;
    let n = TI();
    let cacheSafeParams = n ? {
        ...n,
        toolUseContext: {
            ...n.toolUseContext,
            abortController: lr()
        },
        ...getLiveMessages && {
            forkContextMessages: _Dr(getLiveMessages(), turnInProgress),
            advisorModel: n.toolUseContext.getAdvisorSetting()
        }
    } : buildFallbackParams ? await buildFallbackParams() : null;
    if (cacheSafeParams === null) {
        return {
            cancelled: false,
            response: {
                response: null,
                synthetic: false
            }
        };
    }
    onProgress({
        status: "started"
    });
    let t = await kmt({
        question,
        cacheSafeParams,
        parentController,
        onRetry: (e)=>onProgress({
                status: "api_retry",
                attempt: e.retryAttempt,
                max_retries: e.maxRetries,
                retry_delay_ms: e.retryInMs,
                error_status: e.status ?? null
            }),
        threadHistory: false,
        turnInProgress,
        ...history?.length && {
            history: history.map((e)=>({
                    question: e.question,
                    response: e.response,
                    ...e.fallback_notice && {
                        fallbackNotice: e.fallback_notice
                    }
                }))
        }
    });
    if (t.aborted || parentController.signal.aborted) {
        return {
            cancelled: true
        };
    }
    return {
        cancelled: false,
        response: {
            response: t.response,
            synthetic: t.synthetic,
            ...t.refusalFallback && {
                refusal_fallback: {
                    original_model: t.refusalFallback.originalModel,
                    fallback_model: t.refusalFallback.fallbackModel,
                    content: t.refusalFallback.content
                }
            }
        }
    };
}
export { _Dr, Lcn };
