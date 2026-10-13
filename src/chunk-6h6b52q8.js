function EFt(e) {
    return {
        name: e.name,
        working_dir: e.description?.working_dir ?? ""
    };
}
const TG = {
    held: false,
    reason: "not_held"
};
export { EFt, TG };
