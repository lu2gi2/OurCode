const wzt = "you are not signed in, or this machine is not authorized to write to the session";
const sYo = "without your deny and ask rules";
function iYo({ completion, status, description = u, afterFirstReply = r }) {
    let t;
    completion.then((outcome)=>{
        t = {
            outcome,
            atMs: Date.now()
        };
    });
    let i = afterFirstReply;
    let o;
    let readBack = new Promise((resolve)=>{
        o = resolve;
    });
    return {
        completion,
        status,
        description,
        outcome: ()=>t?.outcome,
        settledAtMs: ()=>t?.atMs,
        async afterFirstReply (e) {
            let d = i;
            i = null;
            if (d === null) {
                return r();
            }
            try {
                return await d(e, o);
            } finally{
                o(undefined);
            }
        },
        readBack
    };
}
function r() {
    return Promise.resolve("skipped");
}
function u() {
    return null;
}
export { wzt, sYo, iYo };
