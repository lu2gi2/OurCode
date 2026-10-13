function ygt(e) {
    return typeof e === "object" && !Array.isArray(e);
}
const c = /^\/?[\w:.-]+/;
function* a(e) {
    let e_length = e.length;
    let n = 0;
    while(n < e_length){
        if (e[n] !== "<") {
            let u = e.indexOf("<", n);
            if (u === -1) {
                u = e_length;
            }
            yield [
                "",
                undefined,
                undefined,
                e.slice(n, u)
            ];
            n = u;
            continue;
        }
        if (e.startsWith("<?", n)) {
            let u = e.indexOf("?>", n + 2);
            if (u === -1) {
                return;
            }
            n = u + 2;
            continue;
        }
        if (e.startsWith("<!--", n)) {
            let u = e.indexOf("-->", n + 4);
            if (u === -1) {
                return;
            }
            n = u + 3;
            continue;
        }
        let i = e.indexOf(">", n + 1);
        if (i === -1) {
            return;
        }
        if (e.startsWith("<!", n)) {
            n = i + 1;
            continue;
        }
        let r = e.slice(n + 1, i);
        let d = c.exec(r)?.[0];
        if (d === undefined) {
            return;
        }
        yield [
            e.slice(n, i + 1),
            d,
            r.endsWith("/") ? "/" : "",
            undefined
        ];
        n = i + 1;
    }
}
function Fun(e) {
    let t = a(e);
    let n = s(t);
    if (!n || n[1] !== "plist" || n[2] === "/") {
        return;
    }
    let i = s(t);
    if (!i) {
        return;
    }
    let r = o(t, i);
    if (s(t)?.[1] === "/plist") {
        return r;
    }
}
function s(e) {
    for(let t = e.next(); !t.done; t = e.next()){
        if (t.value[1] !== undefined) {
            return t.value;
        }
    }
}
function f(e, t) {
    if (t[2] === "/") {
        return "";
    }
    let n = "";
    for(let i = e.next(); !i.done; i = e.next()){
        let r = i.value;
        if (r[1] === `/${t[1]}`) {
            return g(n);
        }
        if (r[3] === undefined) {
            return;
        }
        n += r[3];
    }
}
function o(e, t) {
    let n = t[2] === "/";
    switch(t[1]){
        case "true":
        case "false":
            if (!n && f(e, t) === undefined) {
                return;
            }
            return t[1] === "true";
        case "string":
        case "data":
        case "date":
            return f(e, t);
        case "integer":
            {
                let i = f(e, t)?.trim();
                if (!i) {
                    return;
                }
                let r = Number(i);
                if (Number.isNaN(r)) {
                    return undefined;
                }
                return r;
            }
        case "real":
            {
                let i = f(e, t)?.trim();
                if (!i) {
                    return;
                }
                let r = /^([+-]?)(nan|inf|infinity)$/i.exec(i);
                if (r) {
                    if (r[2].toLowerCase() === "nan") {
                        return NaN;
                    }
                    if (r[1] === "-") {
                        return -Infinity;
                    }
                    return Infinity;
                }
                let d = Number(i);
                if (Number.isNaN(d)) {
                    return undefined;
                }
                return d;
            }
        case "array":
            if (n) {
                return [];
            }
            return l(e);
        case "dict":
            if (n) {
                return {};
            }
            return p(e);
        default:
            return;
    }
}
function l(e) {
    let t = [];
    while(true){
        let n = s(e);
        if (!n) {
            return;
        }
        if (n[1] === "/array") {
            return t;
        }
        let i = o(e, n);
        if (i === undefined) {
            return;
        }
        t.push(i);
    }
}
function p(e) {
    let t = Object.create(null);
    while(true){
        let n = s(e);
        if (!n) {
            return;
        }
        if (n[1] === "/dict") {
            return t;
        }
        if (n[1] !== "key") {
            return;
        }
        let i = f(e, n);
        let r = s(e);
        if (i === undefined || !r) {
            return;
        }
        let d = o(e, r);
        if (d === undefined) {
            return;
        }
        t[i] = d;
    }
}
function g(e) {
    if (!e.includes("&")) {
        return e;
    }
    return e.replace(/&(lt|gt|amp|quot|apos|#x[0-9a-fA-F]+|#\d+);/g, (t, n)=>{
        switch(n){
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "amp":
                return "&";
            case "quot":
                return '"';
            case "apos":
                return "'";
            default:
                {
                    let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
                    if (i <= 1114111) {
                        return String.fromCodePoint(i);
                    }
                    return t;
                }
        }
    });
}
export { ygt, Fun };
