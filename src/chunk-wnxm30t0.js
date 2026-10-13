let r = null;
function ozo(e) {
    r = e;
}
async function szo() {
    if (r === null) {
        return;
    }
    let e = await r();
    if (Array.isArray(e)) {
        return e.filter((n)=>typeof n?.tabId === "number" && typeof n?.url === "string");
    }
}
export { ozo, szo };
