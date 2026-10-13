import { fi, Zs } from "/$bunfs/root/chunk-vw7x8ctj.js";
const o = new Set([
    -32002,
    fi.InvalidParams
]);
export function getMcpErrorCode(n) {
    if (n instanceof Zs) {
        return n.code;
    }
}
export function isMcpMethodNotFoundError(n) {
    return n instanceof Zs && n.code === fi.MethodNotFound;
}
export function isMcpUnknownMethodError(n) {
    return n instanceof Zs && (n.code === fi.MethodNotFound || n.code === fi.InvalidParams);
}
export function isMcpResourceNotFoundError(n) {
    return n instanceof Zs && o.has(n.code);
}
export function isMcpNotADirectoryError(n) {
    return n instanceof Zs && n.code === fi.InvalidParams;
}
export function isUrlElicitationRequiredMcpError(n) {
    return n instanceof Zs && n.code === fi.UrlElicitationRequired;
}
