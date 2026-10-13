function t(r, inlinedByCreate, printed, readByKit = false, needsDesignSystem = false) {
    return {
        path: `artifact-type/reference/${r}`,
        inlinedByCreate,
        printed,
        readByKit,
        needsDesignSystem
    };
}
const NBr = new Map([
    [
        "design",
        [
            t("format.md", true, true, true),
            t("design-system-components.md", true, false, true, true),
            t("fonts.md", false, true),
            t("craft.md", false, true)
        ]
    ],
    [
        "migrated-design",
        [
            t("format.md", true, true),
            t("fonts.md", false, true),
            t("craft.md", false, true)
        ]
    ],
    [
        "slides",
        [
            t("format.md", true, true, true),
            t("fonts.md", true, true, true),
            t("craft.md", false, true),
            t("deck-files.md", false, false, true)
        ]
    ]
]);
const d = [
    t("format.md", false, true),
    t("fonts.md", false, true),
    t("craft.md", false, true)
];
function n(r) {
    return (r === undefined ? undefined : NBr.get(r)) ?? d;
}
function qWo(r) {
    return n(r).filter((e)=>e.inlinedByCreate).map((e)=>e.path);
}
function KWo(r) {
    return n(r).filter((e)=>e.inlinedByCreate && e.needsDesignSystem).map((e)=>e.path);
}
function Y8n(r) {
    return n(r).filter((e)=>e.printed).map((e)=>e.path);
}
function YWo(r) {
    return n(r).filter((e)=>e.readByKit).map((e)=>e.path);
}
export { NBr, qWo, KWo, Y8n, YWo };
