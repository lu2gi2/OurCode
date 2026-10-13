const d = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function rke(t) {
    if (d.test(t)) {
        return Date.parse(t);
    }
    return Number.NaN;
}
export { rke };
