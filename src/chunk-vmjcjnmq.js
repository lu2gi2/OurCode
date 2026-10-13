class O extends Error {
    constructor(n, o){
        super(n);
        this.name = "ParseError";
        this.type = o.type;
        this.field = o.field;
        this.value = o.value;
        this.line = o.line;
    }
}
const I = 10;
const _ = 13;
const A = 32;
function y(n) {}
function rst(n) {
    if (typeof n === "function") {
        throw TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    }
    let { onEvent = y, onError = y, onRetry = y, onComment } = n;
    let a = [];
    let x = true;
    let id;
    let f = "";
    let s = 0;
    let event;
    function feed(t) {
        if (x) {
            x = false;
            if (t.charCodeAt(0) === 239 && t.charCodeAt(1) === 187 && t.charCodeAt(2) === 191) {
                t = t.slice(3);
            }
        }
        if (a.length === 0) {
            let d = m(t);
            if (d !== "") {
                a.push(d);
            }
            return;
        }
        if (t.indexOf(`
`) === -1 && t.indexOf("\r") === -1) {
            a.push(t);
            return;
        }
        a.push(t);
        let e = a.join("");
        a.length = 0;
        let i = m(e);
        if (i !== "") {
            a.push(i);
        }
    }
    function m(t) {
        let e = 0;
        if (t.indexOf("\r") === -1) {
            let i = t.indexOf(`
`, e);
            while(i !== -1){
                if (e === i) {
                    if (s > 0) {
                        onEvent({
                            id,
                            event,
                            data: f
                        });
                    }
                    id = undefined;
                    f = "";
                    s = 0;
                    event = undefined;
                    e = i + 1;
                    i = t.indexOf(`
`, e);
                    continue;
                }
                let d = t.charCodeAt(e);
                if (L(t, e, d)) {
                    let r = t.charCodeAt(e + 5) === A ? e + 6 : e + 5;
                    let C = t.slice(r, i);
                    if (s === 0 && t.charCodeAt(i + 1) === I) {
                        onEvent({
                            id,
                            event,
                            data: C
                        });
                        id = undefined;
                        f = "";
                        event = undefined;
                        e = i + 2;
                        i = t.indexOf(`
`, e);
                        continue;
                    }
                    f = s === 0 ? C : `${f}
${C}`;
                    s++;
                } else {
                    if (F(t, e, d)) {
                        event = t.slice(t.charCodeAt(e + 6) === A ? e + 7 : e + 6, i) || undefined;
                    } else {
                        g(t, e, i);
                    }
                }
                e = i + 1;
                i = t.indexOf(`
`, e);
            }
            return t.slice(e);
        }
        while(e < t.length){
            let i = t.indexOf("\r", e);
            let d = t.indexOf(`
`, e);
            let r = -1;
            if (i !== -1 && d !== -1) {
                r = i < d ? i : d;
            } else if (i !== -1) {
                if (i === t.length - 1) {
                    r = -1;
                } else {
                    r = i;
                }
            } else if (d !== -1) {
                r = d;
            }
            if (r === -1) {
                break;
            }
            g(t, e, r);
            e = r + 1;
            if (t.charCodeAt(e - 1) === _ && t.charCodeAt(e) === I) {
                e++;
            }
        }
        return t.slice(e);
    }
    function g(t, e, i) {
        if (e === i) {
            P();
            return;
        }
        let d = t.charCodeAt(e);
        if (L(t, e, d)) {
            let p = t.charCodeAt(e + 5) === A ? e + 6 : e + 5;
            let w = t.slice(p, i);
            f = s === 0 ? w : `${f}
${w}`;
            s++;
            return;
        }
        if (F(t, e, d)) {
            event = t.slice(t.charCodeAt(e + 6) === A ? e + 7 : e + 6, i) || undefined;
            return;
        }
        if (d === 105 && t.charCodeAt(e + 1) === 100 && t.charCodeAt(e + 2) === 58) {
            let p = t.slice(t.charCodeAt(e + 3) === A ? e + 4 : e + 3, i);
            id = p.includes("\x00") ? undefined : p;
            return;
        }
        if (d === 58) {
            if (onComment) {
                let p = t.slice(e, i);
                onComment(p.slice(t.charCodeAt(e + 1) === A ? 2 : 1));
            }
            return;
        }
        let r = t.slice(e, i);
        let C = r.indexOf(":");
        if (C === -1) {
            E(r, "", r);
            return;
        }
        let R = r.slice(0, C);
        let T = r.charCodeAt(C + 1) === A ? 2 : 1;
        let U = r.slice(C + T);
        E(R, U, r);
    }
    function E(field, e, line) {
        switch(field){
            case "event":
                event = e || undefined;
                break;
            case "data":
                f = s === 0 ? e : `${f}
${e}`;
                s++;
                break;
            case "id":
                id = e.includes("\x00") ? undefined : e;
                break;
            case "retry":
                if (/^\d+$/.test(e)) {
                    onRetry(parseInt(e, 10));
                } else {
                    onError(new O(`Invalid \`retry\` value: "${e}"`, {
                        type: "invalid-retry",
                        value: e,
                        line
                    }));
                }
                break;
            default:
                onError(new O(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value: e,
                    line
                }));
                break;
        }
    }
    function P() {
        if (s > 0) {
            onEvent({
                id,
                event,
                data: f
            });
        }
        id = undefined;
        f = "";
        s = 0;
        event = undefined;
    }
    function reset(t = {}) {
        if (t.consume && a.length > 0) {
            let e = a.join("");
            g(e, 0, e.length);
        }
        x = true;
        id = undefined;
        f = "";
        s = 0;
        event = undefined;
        a.length = 0;
    }
    return {
        feed,
        reset
    };
}
function L(n, o, v) {
    return v === 100 && n.charCodeAt(o + 1) === 97 && n.charCodeAt(o + 2) === 116 && n.charCodeAt(o + 3) === 97 && n.charCodeAt(o + 4) === 58;
}
function F(n, o, v) {
    return v === 101 && n.charCodeAt(o + 1) === 118 && n.charCodeAt(o + 2) === 101 && n.charCodeAt(o + 3) === 110 && n.charCodeAt(o + 4) === 116 && n.charCodeAt(o + 5) === 58;
}
export { rst };
