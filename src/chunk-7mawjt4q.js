import { we, Vl, WR, F8e, jO, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { AsyncLocalStorage } from "async_hooks";
const n = {
    ccr: {
        controlChannel: true,
        modelCatalog: true,
        setPermissionMode: true,
        sessionRecord: true,
        fanout: true,
        presence: true,
        catchupReplay: true,
        bashExec: true,
        fileRead: true
    },
    ssh: {
        controlChannel: true,
        modelCatalog: true,
        setPermissionMode: true,
        sessionRecord: false,
        fanout: false,
        presence: false,
        catchupReplay: false,
        bashExec: false,
        fileRead: true
    },
    direct: {
        controlChannel: false,
        modelCatalog: false,
        setPermissionMode: false,
        sessionRecord: false,
        fanout: false,
        presence: false,
        catchupReplay: false,
        bashExec: false,
        fileRead: false
    }
};
const yRr = {
    isRemoteMode: false
};
function vr() {
    return jO().remote;
}
const PGn = "Stopped waiting for the remote — the command may still complete there";
function Mt() {
    return jn() || vr() !== null;
}
function rwe(e, o) {
    if (Mt()) {
        return o;
    }
    return e;
}
function al() {
    let e = vr();
    return e?.caps?.controlChannel === true && !e.viewerOnly;
}
function IGn() {
    return false;
}
function rA(e) {
    return vr()?.caps?.[e] === true;
}
function _Rr(e, o) {
    return o && !(e.isRemoteMode && e.viewerOnly);
}
function a(kind) {
    return Promise.reject(Error(`sendControlRequest not yet wired for ${kind} transport`));
}
function bRr(kind, o, viewerOnly, sessionId) {
    if (!o.isRemoteMode) {
        return yRr;
    }
    return {
        kind,
        isRemoteMode: true,
        viewerOnly,
        caps: n[kind],
        sessionId,
        sendMessage: o.sendMessage,
        cancelRequest: o.cancelRequest,
        cancelHeldMessages: o.cancelHeldMessages ?? (()=>false),
        disconnect: o.disconnect,
        sendControlRequest: o.sendControlRequest ?? (()=>a(kind))
    };
}
const t = new AsyncLocalStorage;
function Wm(e, o) {
    return t.run({
        cwd: On(e)
    }, o);
}
function pPe(e, o) {
    return Wm(e ?? se(), o);
}
function CZ() {
    return t.getStore() !== undefined;
}
function lon(e) {
    let o = t.getStore();
    if (o) {
        o.cwd = On(e);
    } else {
        F8e(e);
    }
}
function con() {
    return t.getStore()?.cwd ?? WR();
}
function df() {
    if (t.getStore()?.cwd === undefined && Vl() === null) {
        return null;
    }
    return se();
}
function se() {
    try {
        return con();
    } catch  {
        return we();
    }
}
function SRr() {
    if (!CZ() && Mt()) {
        return undefined;
    }
    return se();
}
export { yRr, vr, PGn, Mt, rwe, al, IGn, rA, _Rr, bRr, Wm, pPe, CZ, lon, con, df, se, SRr };
