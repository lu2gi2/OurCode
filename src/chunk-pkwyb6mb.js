import { Qe, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { domainToASCII } from "url";
const n = new Set([
    "localhost",
    "localhost.localdomain",
    "localhost4",
    "localhost4.localdomain4",
    "localhost6",
    "localhost6.localdomain6",
    "ip6-localhost",
    "ip6-loopback",
    "ip6-localnet",
    "ip6-mcastprefix",
    "ip6-allnodes",
    "ip6-allrouters",
    "broadcasthost",
    "metadata.google.internal",
    "instance-data.ec2.internal",
    "host.docker.internal",
    "gateway.docker.internal",
    "kubernetes.docker.internal",
    "vm.docker.internal",
    "host.containers.internal",
    "gateway.containers.internal",
    "host.lima.internal",
    "host.orb.internal",
    "localtest.me",
    "lvh.me",
    "localho.st",
    "vcap.me",
    "traefik.me",
    "fuf.me",
    "lacolhost.com",
    "my.local-ip.co",
    "localdev.me",
    "local.gd",
    "localhost.direct",
    "ddev.site",
    "lndo.site",
    "lcl.host",
    "kubernetes.default",
    "kubernetes.default.svc"
]);
const r = new Set([
    "metadata",
    "instance-data",
    "kubernetes",
    "_gateway",
    "_outbound",
    "_localdnsstub",
    "_localdnsproxy"
]);
const S = new Set([
    "docker.for.mac.host.internal",
    "docker.for.win.host.internal",
    "host.minikube.internal",
    "host.rancher-desktop.internal",
    "host.k3d.internal",
    "host.internal",
    "gateway.internal",
    "orb.local",
    "kubernetes.default.svc.cluster.local",
    "crc.testing",
    "apps-crc.testing",
    "home.arpa"
]);
const h = [
    ".nip.io",
    ".sslip.io",
    ".localtest.me",
    ".lvh.me",
    ".vcap.me",
    ".localho.st",
    ".traefik.me",
    ".fuf.me",
    ".lacolhost.com",
    ".my.local-ip.co",
    ".localdev.me",
    ".local.gd",
    ".localhost.direct",
    ".ddev.site",
    ".lndo.site",
    ".lcl.host",
    ".ipv6-literal.net",
    ".orb.local"
];
const k = [
    ".localhost",
    ".localhost.localdomain",
    ...h,
    ".crc.testing",
    ".apps-crc.testing",
    ".mshome.net"
];
const u = [
    ".local",
    ".localdomain",
    ".home.arpa",
    ".internal",
    ".lan",
    ".home",
    ".fritz.box"
];
const p = [
    ".localhost",
    ".local",
    ".localdomain",
    ".home.arpa",
    ".internal",
    ...h,
    ".svc",
    ".svc.cluster.local",
    ".cluster.local"
];
function aae(e) {
    let t = c(e.toLowerCase()).replace(/\.+$/, "");
    return n.has(t) || r.has(t) || t === "home.arpa" || p.some((o)=>t.endsWith(o));
}
function wVr(e) {
    let t = e.toLowerCase().replace(/\.+$/, "");
    return n.has(t) || t.endsWith(".localhost");
}
function dYo(e) {
    let t = e.toLowerCase().replace(/\.+$/, "");
    return aae(t) || [
        ...n,
        ...r,
        "home.arpa",
        ...p
    ].some((o)=>o.endsWith(`.${t}`));
}
function uYo(e) {
    let t = c(e.trim().toLowerCase()).replace(/\.+$/, "");
    return n.has(t) || S.has(t) || r.has(t) || k.some((o)=>t.endsWith(o)) || n.has(Qe(t, ".")) || u.some((o)=>t.endsWith(o) && n.has(t.slice(0, -o.length))) || g(t);
}
function pYo(e, t) {
    let o = t.trim().toLowerCase().replace(/\.+$/, "");
    let a = !/[^\x00-\x7f]/.test(o) ? o : /[\u00df\u03c2\u200c\u200d]/.test(o) ? "" : domainToASCII(o).replace(/\.+$/, "");
    if (a === "") {
        return true;
    }
    let i = l(Qe(a, "."));
    if (i === "") {
        return true;
    }
    let d = l(Qe(e, "."));
    let m = [
        i,
        l(a)
    ];
    let f = m.includes(d) || m.includes(d.replace(/-\d+$/, ""));
    let s = e.slice(Qe(e, ".").length);
    return e === a || f && (s === "" || u.includes(s) || s.endsWith(".ts.net") && Lt(s, ".") >= 3);
}
function l(e) {
    return e.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function fYo(e, t = "address") {
    let o = c(e.trim().toLowerCase()).replace(/\.+$/, "");
    if (t === "address" ? aae(o) : wVr(o)) {
        return true;
    }
    return g(o);
}
function g(e) {
    return /^(?:(?:\d+|0x[0-9a-f]+)\.){1,3}(?:\d+|0x[0-9a-f]+)$/i.test(e) || /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(e) || /^0x[0-9a-f]+$/i.test(e) || /^\d{8,}$/.test(e) || /^0+$/.test(e) || /^[0-9a-f:.]+$/i.test(e) && e.includes(":") && (e.includes("::") || Lt(e, ":") >= 2);
}
function c(e) {
    if (e.startsWith("[") && e.endsWith("]")) {
        return e.slice(1, -1);
    }
    return e;
}
export { aae, wVr, dYo, uYo, pYo, fYo };
