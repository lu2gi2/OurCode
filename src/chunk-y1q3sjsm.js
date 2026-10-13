import { pi, Ol } from "/$bunfs/root/chunk-re1a1x17.js";
import "/$bunfs/root/chunk-z09tvyve.js";
const n = new Set([
    -32002,
    pi.InvalidParams
]);
export function getMcpErrorCode(o) {
    if (o instanceof Ol) {
        return o.code;
    }
}
export function isMcpMethodNotFoundError(o) {
    return o instanceof Ol && o.code === pi.MethodNotFound;
}
export function isMcpUnknownMethodError(o) {
    return o instanceof Ol && (o.code === pi.MethodNotFound || o.code === pi.InvalidParams);
}
export function isMcpResourceNotFoundError(o) {
    return o instanceof Ol && n.has(o.code);
}
export function isMcpNotADirectoryError(o) {
    return o instanceof Ol && o.code === pi.InvalidParams;
}
export function isUrlElicitationRequiredMcpError(o) {
    return o instanceof Ol && o.code === pi.UrlElicitationRequired;
}
