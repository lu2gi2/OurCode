const fst = 10;
function dao(e) {
    if (typeof e === "string") {
        return s(e, 9);
    }
    if (!Array.isArray(e)) {
        return false;
    }
    let t = 0;
    for (let r of e){
        t += 1;
        if (t > 10) {
            return true;
        }
        if (!y_e(r)) {
            continue;
        }
        let n = r.text;
        let o = 0;
        while(t <= 10){
            o = n.indexOf(`
`, o);
            if (o === -1) {
                break;
            }
            o++;
            t++;
        }
        if (t > 10) {
            return true;
        }
    }
    return false;
}
function y_e(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "text" && "text" in e && typeof e.text === "string";
}
function s(e, t) {
    let r = 0;
    for(let n = 0; n <= t; n++){
        r = e.indexOf(`
`, r);
        if (r === -1) {
            return false;
        }
        r++;
    }
    return true;
}
export { fst, dao, y_e };
