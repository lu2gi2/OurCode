const L0e = Object.freeze([
    [
        1564,
        1564
    ],
    [
        8234,
        8238
    ],
    [
        8294,
        8297
    ]
]);
const Epr = L0e.map(([e, n])=>`\\u{${e.toString(16)}}` + (n > e ? `-\\u{${n.toString(16)}}` : "")).join("");
const rot = new RegExp(`[${Epr}]`, "gu");
const nAt = 16384;
function eOn(substitute, screen) {
    if (typeof Bun === "undefined" || typeof Bun.ant?.CellSegmenter !== "function") {
        throw Error("This runtime has no Bun.ant.CellSegmenter. Run Claude Code on the @anthropic-ai/bun-internal version pinned in package.json.");
    }
    return new Bun.ant.CellSegmenter({
        ambiguousIsNarrow: true,
        substitute,
        screen
    });
}
export { L0e, Epr, rot, nAt, eOn };
