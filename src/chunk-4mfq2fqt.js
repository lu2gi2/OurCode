function TQe(i) {
    if (!Array.isArray(i)) {
        return;
    }
    let e = [];
    let o = 2;
    for (let r of i){
        if (e.length >= 50) {
            break;
        }
        if (typeof r !== "object" || r === null) {
            continue;
        }
        let n = r;
        if (n.type !== "resource_link" || typeof n.uri !== "string" || typeof n.name !== "string") {
            continue;
        }
        let t = {
            uri: n.uri,
            name: n.name
        };
        if (typeof n.title === "string") {
            t.title = n.title;
        }
        if (typeof n.description === "string") {
            t.description = n.description;
        }
        if (typeof n.mimeType === "string") {
            t.mimeType = n.mimeType;
        }
        if (typeof n.size === "number" && Number.isFinite(n.size)) {
            t.size = n.size;
        }
        if (typeof n.annotations === "object" && n.annotations !== null && !Array.isArray(n.annotations)) {
            t.annotations = n.annotations;
        }
        o += JSON.stringify(t).length + (e.length > 0 ? 1 : 0);
        if (o > 65536) {
            break;
        }
        e.push(t);
    }
    if (e.length > 0) {
        return e;
    }
}
function YN(i) {
    if (i === undefined) {
        return;
    }
    let e;
    for (let r of Object.keys(i)){
        if (r.startsWith("com.anthropic/")) {
            e ??= {
                ...i
            };
            delete e[r];
        }
    }
    let o = e ?? i;
    if (Object.keys(o).length > 0) {
        return o;
    }
}
export { TQe, YN };
