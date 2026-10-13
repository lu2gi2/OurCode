import "/$bunfs/root/chunk-j27d47mr.js";
import { fPe } from "/$bunfs/root/chunk-t6f6b9d8.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
export function guardRelayTokenDescriptor() {
    if ((process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== undefined || process.argv.includes("--session-tunnel")) && ru()) {
        fPe(()=>{});
    }
}
