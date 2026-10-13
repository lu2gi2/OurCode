import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
const t = {
    notice: null,
    shownLoggedForDraftId: null,
    promptedCount: 0,
    sessionDraftCount: 0,
    seededFromDisk: false,
    seedStarted: false,
    toolCallCount: 0
};
class n {
    autoDenyPresence = Oe();
    mainLoopBusy = gs({
        busy: false
    });
    blockingToolProgress = gs({
        active: false
    });
    dialogHostUnmounted = gs({
        unmounted: false
    });
    onScreenBlockingDialog = gs({
        surfaceMounted: false,
        kind: null
    });
    pendingSurveyFeedbackSource = null;
    terminalFocus = "unknown";
    terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
    terminalFocusChanged = Oe();
    feedbackNotice = gs(t);
    clawdEntranceTaken = false;
    startupUpdateSummary = undefined;
    experimentEnrollmentsUnseen = undefined;
    orgMemoryWritesRowSeen = false;
    orgMemoryReadRowSeen = false;
    remoteHomeSettingsRowSeen = false;
    configRowsSeen = new Set;
    configRowNotices = new Map;
}
export const Sa = ze(new n, (e)=>{
    e.configRowsSeen.clear();
    e.configRowNotices.clear();
    e.mainLoopBusy.setState((o)=>{
        if (o.busy) {
            return {
                busy: false
            };
        }
        return o;
    });
});
