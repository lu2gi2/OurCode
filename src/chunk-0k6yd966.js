import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Tze } from "/$bunfs/root/chunk-88awaqqw.js";
class a {
    #t = false;
    #o = false;
    get autoModeCheckRan() {
        return this.#t;
    }
    get isLaunchRun() {
        return !this.#o;
    }
    claimAutoModeCheck() {
        if (this.#t) {
            return false;
        }
        this.#t = true;
        return true;
    }
    rearmAutoModeCheck() {
        this.#t = false;
        this.#o = true;
    }
    reset() {
        this.#t = false;
        this.#o = false;
    }
}
const c = new q(()=>new a);
function qft(text) {
    return {
        key: "auto-mode-gate-notification",
        kind: "warning",
        text,
        color: "warning",
        priority: "high"
    };
}
async function Kft(t, u, f, l, n) {
    let s = c.of(t);
    if (!s.claimAutoModeCheck()) {
        return;
    }
    let { updateContext, notification } = await Tze(u, l, s.isLaunchRun);
    f((e)=>{
        let toolPermissionContext = updateContext(e.toolPermissionContext);
        let i = toolPermissionContext === e.toolPermissionContext ? e : {
            ...e,
            toolPermissionContext
        };
        if (!notification || n) {
            return i;
        }
        return {
            ...i,
            notifications: {
                ...i.notifications,
                queue: [
                    ...i.notifications.queue,
                    qft(notification)
                ]
            }
        };
    });
    if (notification && n) {
        n(qft(notification));
    }
}
function icn(t) {
    c.of(t).rearmAutoModeCheck();
}
export { qft, Kft, icn };
