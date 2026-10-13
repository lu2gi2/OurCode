function Qt(r) {
    let e = r / 1024;
    if (e < 1) {
        return `${r} bytes`;
    }
    if (e < 1024) {
        return `${e.toFixed(1).replace(/\.0$/, "")}KB`;
    }
    let t = e / 1024;
    if (t < 1024) {
        return `${t.toFixed(1).replace(/\.0$/, "")}MB`;
    }
    return `${(t / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}
function SDt(r) {
    if (r < 1000) {
        return `${r} B`;
    }
    if (r < 999500) {
        return `${Math.round(r / 1000)} kB`;
    }
    return `${(r / 1000000).toFixed(1).replace(/\.0$/, "")} MB`;
}
export { Qt, SDt };
