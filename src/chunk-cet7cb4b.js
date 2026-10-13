import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, UP, B } from "/$bunfs/root/chunk-ctt36bn8.js";
const r = new q(()=>Oe());
function i() {
    return r.of(B().host);
}
const P0e = UP(i);
function LIn(agentId) {
    return {
        setMode (mode) {
            P0e.emit({
                kind: "agent-mode",
                agentId,
                mode
            });
        },
        setRetryStatus (retryStatus) {
            P0e.emit({
                kind: "agent-retry-status",
                agentId,
                retryStatus
            });
        },
        setTurnEffort (turnEffort, turnModel = null) {
            P0e.emit({
                kind: "agent-turn-effort",
                agentId,
                turnEffort,
                turnModel
            });
        }
    };
}
const NIn = "Running SessionStart hooks…";
const I0e = {
    setSpinnerMessage (message) {
        P0e.emit({
            kind: "main-message",
            message
        });
    },
    setSpinnerColors (color, shimmerColor) {
        P0e.emit({
            kind: "main-colors",
            color,
            shimmerColor
        });
    }
};
export { P0e, LIn, NIn, I0e };
