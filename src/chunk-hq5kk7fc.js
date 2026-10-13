function gFn(e) {
    let n = e.indexOf("--handle-uri");
    if (n === -1 || !e[n + 1]) {
        return null;
    }
    if (e.length > n + 2) {
        return `${`claude: rejected deep-link invocation \u2014 unexpected arguments after the URI.
`}The OS protocol handler passes exactly \`--handle-uri <uri>\`; extra arguments indicate argument injection via the URL. If invoking --handle-uri manually, place other flags before it.`;
    }
    return null;
}
export { gFn };
