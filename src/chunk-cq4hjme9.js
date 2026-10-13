import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
function Cqo(t) {
    $t().policyColdStartWaiter = t;
}
async function fx() {
    let policyColdStartWaiter = $t().policyColdStartWaiter;
    if (policyColdStartWaiter) {
        await policyColdStartWaiter();
    }
}
export { Cqo, fx };
