import { MLr, hFo } from "/$bunfs/root/chunk-mm2yesqa.js";
import { mee } from "/$bunfs/root/chunk-dks9s2hv.js";
function ift({ sessionId, getAccessToken, fetchSession, initial }) {
    if (!mee()) {
        return;
    }
    return hFo({
        ...initial && {
            initial: initial.then(MLr)
        },
        read: ()=>fetchSession(sessionId, {
                accessToken: getAccessToken()
            }).then(MLr)
    });
}
export { ift };
