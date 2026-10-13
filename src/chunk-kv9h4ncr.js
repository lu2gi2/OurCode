import { kMs } from "/$bunfs/root/chunk-6kc68p18.js";
import { nDt } from "/$bunfs/root/chunk-h7cbghgp.js";
function LZe() {
    let { namespace, cluster } = kMs();
    return {
        ...namespace && {
            cooNamespace: nDt(namespace)
        },
        ...cluster && {
            cooCluster: nDt(cluster)
        }
    };
}
export { LZe };
