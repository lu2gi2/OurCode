import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ob } from "/$bunfs/root/chunk-jsagwt7j.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { jr, Ir, P, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
N();
const I = new WeakMap;
function U(root) {
    let n = I.get(root);
    if (!n) {
        n = {
            root,
            screen: null,
            rendered: false,
            run: 0,
            keys: 0,
            jobWrites: Promise.resolve()
        };
        I.set(root, n);
    }
    return n;
}
function yXe(r, n, options = {}) {
    let o = U(r);
    let d = ++o.run;
    let f = options.marksJobBlocked === true && !!a.CLAUDE_JOB_DIR;
    return new Promise((resolve, reject)=>{
        let S = false;
        function k(s) {
            if (S || o.run !== d) {
                return;
            }
            S = true;
            reject(s);
        }
        function m(s) {
            let p = o.jobWrites.then(s).catch(()=>{});
            o.jobWrites = p;
            return p;
        }
        function A(s) {
            for(let p = s; p < n.length; p++){
                let y = false;
                let J = true;
                let j = false;
                let v;
                let V = false;
                let M = ()=>{
                    if (f && !v && !y && !V) {
                        v = m(()=>import("/$bunfs/root/chunk-jfecct98.js").then((c)=>c.markStartupDialogBlocked()));
                    }
                };
                let D = ()=>{
                    let c = v;
                    v = undefined;
                    V = true;
                    if (c) {
                        m(async ()=>{
                            let z = await c;
                            if (z) {
                                let F = await import("/$bunfs/root/chunk-jfecct98.js");
                                await F.clearStartupDialogBlocked(z);
                            }
                        });
                    }
                };
                let _ = (c)=>{
                    if (y || S || o.run !== d) {
                        return;
                    }
                    y = true;
                    j = c === "stop";
                    D();
                    if (!J) {
                        R(j ? "done" : A(p + 1));
                    }
                };
                let u;
                try {
                    u = n[p](_);
                } catch (error) {
                    k(error);
                    return "failed";
                } finally{
                    J = false;
                }
                if (y) {
                    if (j) {
                        return "done";
                    }
                    continue;
                }
                if (u instanceof Promise) {
                    u = u.catch((c)=>{
                        k(c);
                        return new Promise(()=>{});
                    });
                    u.then((c)=>{
                        if (c !== null && c !== undefined) {
                            M();
                        }
                    });
                } else if (u === null || u === undefined) {
                    y = true;
                    continue;
                } else {
                    M();
                }
                return {
                    key: ++o.keys,
                    dialog: u,
                    pass: ()=>_(),
                    tornDown: D,
                    replaced: D,
                    options
                };
            }
            return "done";
        }
        function R(s) {
            if (s === "failed" || o.run !== d) {
                return;
            }
            if (s === "done") {
                b(o, null);
                resolve();
                return;
            }
            if (!o.rendered && s.dialog instanceof Promise) {
                o.screen = s;
                s.dialog.then((p)=>{
                    if (o.screen !== s || o.run !== d) {
                        return;
                    }
                    if (p === null || p === undefined) {
                        s.pass();
                    } else {
                        R({
                            ...s,
                            dialog: p
                        });
                    }
                });
                return;
            }
            b(o, s);
        }
        R(A(0));
    });
}
function j0(r, n, options = {}) {
    let o = U(r);
    o.run++;
    let replaced_1 = ()=>{};
    let replaced = new Promise((resolve)=>{
        replaced_1 = resolve;
    });
    let l = {
        key: ++o.keys,
        dialog: n,
        pass: ()=>{},
        tornDown: ()=>{},
        replaced: replaced_1,
        options
    };
    b(o, l);
    return {
        update: (i)=>{
            if (o.screen?.key === l.key) {
                b(o, {
                    ...l,
                    dialog: i
                });
            }
        },
        replaced
    };
}
function b(tree, screen) {
    if (tree.screen && tree.screen.key !== screen?.key) {
        tree.screen.replaced();
    }
    tree.screen = screen;
    if (!tree.rendered && screen === null) {
        return;
    }
    tree.rendered = true;
    tree.root.render(e(q, {
        tree,
        screen
    }));
}
function q(r) {
    let o = w(8);
    let { tree, screen } = r;
    let d;
    let f;
    if (o[0] !== tree) {
        d = ()=>()=>{
                tree.rendered = false;
                tree.screen?.tornDown();
            };
        f = [
            tree
        ];
        o[0] = tree;
        o[1] = d;
        o[2] = f;
    } else {
        d = o[1];
        f = o[2];
    }
    P(d, f);
    if (screen === null) {
        return null;
    }
    let l;
    if (o[3] !== screen) {
        l = e(O, {
            screen
        });
        o[3] = screen;
        o[4] = l;
    } else {
        l = o[4];
    }
    let i;
    if (o[5] !== screen.key || o[6] !== l) {
        i = e(jr, {
            fallback: null,
            children: l
        }, screen.key);
        o[5] = screen.key;
        o[6] = l;
        o[7] = i;
    } else {
        i = o[7];
    }
    return i;
}
function O(r) {
    let d = w(12);
    let { screen } = r;
    let t = screen.dialog instanceof Promise ? Ir(screen.dialog) : screen.dialog;
    let o = t !== null && t !== undefined;
    let f;
    let l;
    if (d[0] !== screen || d[1] !== o) {
        f = ()=>{
            if (!o) {
                screen.pass();
            }
        };
        l = [
            screen,
            o
        ];
        d[0] = screen;
        d[1] = o;
        d[2] = f;
        d[3] = l;
    } else {
        f = d[2];
        l = d[3];
    }
    P(f, l);
    if (!o) {
        return null;
    }
    let { session, onChangeAppState, storageV5 } = screen.options;
    if (!session) {
        return t;
    }
    let onChangeAppState_1;
    if (d[4] !== onChangeAppState || d[5] !== session) {
        onChangeAppState_1 = onChangeAppState && ((A)=>onChangeAppState(A, session));
        d[4] = onChangeAppState;
        d[5] = session;
        d[6] = onChangeAppState_1;
    } else {
        onChangeAppState_1 = d[6];
    }
    let R;
    if (d[7] !== t || d[8] !== session || d[9] !== storageV5 || d[10] !== onChangeAppState_1) {
        R = e(ob, {
            session,
            storageV5,
            onChangeAppState: onChangeAppState_1,
            children: t
        });
        d[7] = t;
        d[8] = session;
        d[9] = storageV5;
        d[10] = onChangeAppState_1;
        d[11] = R;
    } else {
        R = d[11];
    }
    return R;
}
export { yXe, j0 };
