import { Ae } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Wcn } from "/$bunfs/root/chunk-r3xrfw81.js";
function Eee({ newState, oldState }, n, s, p) {
    Wcn({
        newState,
        oldState
    }, n, undefined, s, p);
    if (newState.expandedView !== oldState.expandedView) {
        let showExpandedTodos = newState.expandedView === "tasks";
        Ae((o)=>{
            if (o.showExpandedTodos === showExpandedTodos) {
                return o;
            }
            return {
                ...o,
                showExpandedTodos
            };
        }, s);
    }
}
export { Eee };
