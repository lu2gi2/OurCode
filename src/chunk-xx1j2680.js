import o from "path";
const rt = "Read";
const hue = "allow_large";
const uen = new Set([
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp"
]);
function Tct(t) {
    let e = o.extname(t).toLowerCase().slice(1);
    return uen.has(e) || e === "pdf";
}
export { rt, hue, uen, Tct };
