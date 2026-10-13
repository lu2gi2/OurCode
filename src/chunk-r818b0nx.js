function eVr() {
    return {
        view: undefined,
        logs: [],
        unreadErrors: 0,
        unreadWarnings: 0,
        cleanupRegistered: false
    };
}
function tVr(n) {
    return (o)=>n((e)=>{
            let r = {
                webBrowser: e.webBrowser,
                bagelActive: e.bagelActive,
                bagelUrl: e.bagelUrl,
                bagelPanelVisible: e.bagelPanelVisible
            };
            let t = o(r);
            if (t === r) {
                return e;
            }
            return {
                ...e,
                ...t
            };
        });
}
export { eVr, tVr };
