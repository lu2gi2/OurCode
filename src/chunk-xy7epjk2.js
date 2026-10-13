import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const a = C(function(u) {
    function c(t) {
        let r = {};
        t = t.replace(/^\?/, "");
        if (t) {
            for (let n of t.split("&")){
                let [e, s = null] = n.split("=");
                e = decodeURIComponent(e);
                if (s) {
                    s = decodeURIComponent(s);
                }
                if (!(e in r)) {
                    r[e] = s;
                } else if (Array.isArray(r[e])) {
                    r[e].push(s);
                } else {
                    r[e] = [
                        r[e],
                        s
                    ];
                }
            }
        }
        return r;
    }
    u.parseQueryString = c;
});
export const GW = C(function(y) {
    const l = a();
    const i = (t)=>{
        if (typeof t === "string") {
            return i(new URL(t));
        }
        let { hostname, pathname, port, protocol, search } = t;
        let query;
        if (search) {
            query = l.parseQueryString(search);
        }
        return {
            hostname,
            port: port ? parseInt(port) : undefined,
            protocol,
            path: pathname,
            query
        };
    };
    y.parseUrl = i;
});
