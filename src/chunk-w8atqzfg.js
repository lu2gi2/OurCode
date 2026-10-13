import { e6n } from "/$bunfs/root/chunk-vqyxznfw.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { P, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const entries = [];
class i {
    #n = Oe();
    #o = {
        entries,
        loading: false
    };
    #t = false;
    #i = 0;
    #e = 0;
    getSnapshot = ()=>this.#o;
    subscribe = (e)=>this.#n.subscribe(e);
    #r(e) {
        let t = this.#o;
        let r = {
            ...t,
            ...e
        };
        if (r.entries === t.entries && r.loading === t.loading) {
            return;
        }
        this.#o = r;
        this.#n.emit();
    }
    get pending() {
        return this.#e !== 0;
    }
    clear() {
        this.#t = false;
        this.#r({
            entries
        });
    }
    beginLoad() {
        this.#e = ++this.#i;
        if (!this.#t) {
            this.#r({
                loading: true
            });
        }
        return this.#e;
    }
    endLoad(e) {
        if (e !== this.#e) {
            return;
        }
        this.#e = 0;
        this.#r({
            loading: false
        });
    }
    setEntries(e) {
        this.#t = true;
        this.#r({
            entries: e.length === 0 ? entries : e
        });
    }
    get known() {
        return this.#t;
    }
}
function N9e() {
    return {
        roster: null,
        selection: null,
        view: null,
        attach: null,
        editor: null,
        deleteConfirm: null,
        earlier: new i,
        agentLastUsedMigrationDone: false,
        scope: null,
        resultSeen: {
            entryChannel: b("unknown"),
            openFinished: null,
            emitted: new Set
        },
        fleetNudgeStore: null,
        killRing: e6n()
    };
}
function LMr({ selection, view, attach, editor, deleteConfirm }, { clock, groupsEnabled }) {
    P(()=>{
        let d = selection.attachView({
            clock,
            onError: editor.setError
        });
        let p = view.attachView({
            groupsEnabled
        });
        let c = attach.attachView();
        let h = editor.attachView();
        let S = deleteConfirm.attachView();
        return ()=>{
            S();
            h();
            c();
            p();
            d();
        };
    }, [
        selection,
        view,
        attach,
        editor,
        deleteConfirm,
        clock
    ]);
}
export { N9e, LMr };
