import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
function cls(t, r, o = {}) {
    e().host.telemetryHandles.installMeter(t, r, o);
}
function dls() {
    return e().host.telemetryHandles.sessionCounter();
}
function eoo() {
    return e().host.telemetryHandles.locCounter();
}
function Zqe() {
    return e().host.telemetryHandles.prCounter();
}
function too() {
    return e().host.telemetryHandles.commitCounter();
}
function uls() {
    return e().host.telemetryHandles.costCounter();
}
function TOn() {
    return e().host.telemetryHandles.tokenCounter();
}
function jpr() {
    return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function pls() {
    return e().host.telemetryHandles.activeTimeCounter();
}
function fls() {
    return e().host.telemetryHandles.meterProvider();
}
function noo(t) {
    e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
    return B();
}
export { cls, dls, eoo, Zqe, too, uls, TOn, jpr, pls, fls, noo };
