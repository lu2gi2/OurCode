import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { xF } from "/$bunfs/root/chunk-6g4165br.js";
import { xe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { hVe } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { jve } from "/$bunfs/root/chunk-41gejmnj.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
function c8n(e, r, s) {
    if (s.get(e)?.status !== "running") {
        return;
    }
    s.updateTranscript(e, (a)=>({
            ...a,
            messages: hVe(a.messages, r)
        }));
}
function iBt(e, r, s, origin) {
    let n = s.get(e);
    if (!n || Ws(n.status)) {
        t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);
        return;
    }
    s.update(e, (m)=>({
            ...m,
            pendingUserMessages: [
                ...m.pendingUserMessages,
                {
                    text: r,
                    origin
                }
            ]
        }));
    s.updateTranscript(e, (m)=>({
            ...m,
            messages: hVe(m.messages, xe({
                content: r,
                origin
            }))
        }));
}
function QUr(e, r, s) {
    let a = jve(xF(r, s), e);
    if (a?.status === "running") {
        a.retryWake?.emit();
    }
}
export { c8n, iBt, QUr };
