import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { zd, lLn, gLn } from "/$bunfs/root/chunk-4r6b8efh.js";
import { oD } from "/$bunfs/root/chunk-4p2j67rn.js";
import { cEe, eWr } from "/$bunfs/root/chunk-xvpf4sv2.js";
const RXn = new lt(()=>({
        toolState: new oD
    }));
function g2o(e, n) {
    RXn.of(e).toolState = n;
}
const S = 256;
function Zjr(e) {
    return e.tools.length === 0 && e.passthrough.length === 0 && e.plumbing.length === 0 && e.ignored.length === 0;
}
class rv {
    #e = new Map;
    #o = 0;
    #s = new Set;
    #h = false;
    #p = undefined;
    #i = new Set;
    #t = new Map;
    #n = new Map;
    #l = Oe();
    #c = Oe();
    #m = Oe();
    #r;
    constructor(e = Date.now){
        this.#r = e;
    }
    accept(e, { instanceId, now, transport }) {
        let name = e.host.name;
        let a = e.tools.filter((r)=>!eWr(r.name)).map((r)=>r.name);
        let ignoredTools = [
            ...e.ignored,
            ...a
        ];
        let removed = [
            ...this.#e.values()
        ].filter((r)=>r.instanceId === instanceId).map((r)=>r.name);
        if (Zjr(e)) {
            this.#e = y(this.#e, removed);
            let r = this.#e.get(name);
            let heldByAnother = r !== undefined && r.instanceId !== instanceId;
            for (let f of heldByAnother ? removed : [
                ...removed,
                name
            ]){
                if (this.#i.size < S) {
                    this.#i.add(f);
                }
                this.#u(f);
            }
            this.#o++;
            this.#g();
            return {
                status: "withdrawn",
                ignoredTools,
                removed,
                heldByAnother
            };
        }
        let u = this.#e.get(name);
        let m = e.tools.filter((r)=>eWr(r.name));
        let protocol = gLn((m[0] ?? e.tools[0])?.protocol_versions ?? [
            zd
        ]);
        let c = {
            name,
            instanceId,
            description: e.host,
            servedTools: new Set(m.map((r)=>r.name)),
            plumbing: e.plumbing,
            passthrough: new Map(e.passthrough.map((r)=>[
                    r.name,
                    r
                ])),
            protocol,
            status: "online",
            awayReason: undefined,
            asleepSince: undefined,
            takenOverAt: u === undefined ? undefined : u.instanceId !== instanceId ? now : u.takenOverAt,
            lastHeardAt: now,
            lastStillHereAt: undefined,
            transport
        };
        this.#e = new Map([
            ...y(this.#e, removed),
            [
                name,
                c
            ]
        ]);
        this.#i.delete(name);
        for (let r of removed){
            if (r !== name) {
                this.#u(r);
            }
        }
        this.#o++;
        this.#f(name);
        this.#g();
        return {
            status: "announced",
            served: c.servedTools.size,
            passthroughAdopted: c.passthrough.size,
            protocolVersion: protocol.kind === "compatible" ? protocol.version : null,
            ignoredTools,
            displaced: u !== undefined && u.instanceId !== instanceId ? u.instanceId : undefined
        };
    }
    hasAnnouncedThisLife() {
        return this.#h;
    }
    withdrawnThisLife(e) {
        return this.#i.has(e);
    }
    onNextAnnounce(e) {
        this.#s.add(e);
        return ()=>{
            this.#s.delete(e);
        };
    }
    announceWaitExpired() {
        return this.#p;
    }
    markAnnounceWaitExpired(e) {
        this.#p = e;
    }
    #g() {
        this.#h = true;
        let e = [
            ...this.#s
        ];
        this.#s.clear();
        for (let n of e){
            try {
                n();
            } catch  {}
        }
    }
    heard(e, lastHeardAt, epoch) {
        let s = this.#d(e, (i)=>({
                ...i,
                status: "online",
                awayReason: undefined,
                asleepSince: undefined,
                lastHeardAt,
                lastStillHereAt: undefined,
                description: epoch !== undefined && epoch !== i.description.epoch ? {
                    ...i.description,
                    epoch
                } : i.description
            }));
        if (s !== undefined) {
            this.#f(s);
        }
    }
    noteStillHere(e, n) {
        let o = this.entries().find((s)=>s.instanceId === e);
        if (o === undefined || o.awayReason === "asleep") {
            return false;
        }
        this.#d(e, (s)=>({
                ...s,
                lastStillHereAt: Math.max(s.lastStillHereAt ?? n, n)
            }));
        return true;
    }
    markAway(e, n) {
        let o = this.#d(e, (a)=>({
                ...a,
                status: "offline",
                awayReason: a.awayReason === "asleep" ? "asleep" : n
            }));
        if (o === undefined || this.#t.has(o)) {
            return;
        }
        let toldModel = this.#n.get(o)?.toldModel ?? false;
        this.#n.delete(o);
        let awaySince = this.#r();
        this.#t.set(o, {
            awaySince,
            lastHeardAt: this.#e.get(o)?.lastHeardAt ?? awaySince,
            toldModel
        });
        this.#a(()=>this.#l.emit({
                name: o,
                change: "away",
                toldModel
            }));
    }
    now() {
        return this.#r();
    }
    awayEpisode(e) {
        return this.#t.get(e);
    }
    noteModelToldAway(e) {
        let n = this.#t.get(e);
        if (n === undefined || n.toldModel) {
            return;
        }
        this.#t.set(e, {
            ...n,
            toldModel: true
        });
        this.#a(()=>this.#c.emit(e));
    }
    backNotePending(e) {
        return this.#n.get(e)?.toldModel === true;
    }
    takeBackNote(e) {
        let n = this.#n.get(e);
        this.#n.delete(e);
        return n;
    }
    onHostStatusChange(e) {
        return this.#l.subscribe(e);
    }
    onModelToldAway(e) {
        return this.#c.subscribe(e);
    }
    onAwayEpisodeDropped(e) {
        return this.#m.subscribe(e);
    }
    #u(e) {
        this.#n.delete(e);
        if (!this.#t.delete(e)) {
            return;
        }
        this.#a(()=>this.#m.emit(e));
    }
    #f(e) {
        let n = this.#t.get(e);
        if (n === undefined) {
            return;
        }
        this.#t.delete(e);
        let backAt = this.#r();
        let awayMs = Math.max(0, backAt - n.awaySince);
        let i = {
            backAt,
            awayMs,
            sinceHeardMs: Math.max(awayMs, backAt - n.lastHeardAt),
            toldModel: n.toldModel
        };
        this.#n.set(e, i);
        this.#a(()=>this.#l.emit({
                name: e,
                change: "back",
                ...i
            }));
    }
    #a(e) {
        try {
            e();
        } catch (error) {
            t(`[remote-tools] an away-episode listener threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
    clear() {
        this.#e = new Map;
        for (let e of [
            ...this.#t.keys()
        ]){
            this.#u(e);
        }
        this.#n.clear();
        this.#o++;
    }
    generation() {
        return this.#o;
    }
    entries() {
        return [
            ...this.#e.values()
        ];
    }
    markAsleep(e, asleepSince) {
        this.#d(e, (o)=>({
                ...o,
                awayReason: "asleep",
                asleepSince,
                lastStillHereAt: undefined
            }));
        this.markAway(e, "probe_missed");
    }
    handleFor(hostName) {
        let n = this.#e.get(hostName);
        if (n === undefined) {
            return;
        }
        let { instanceId } = n;
        return {
            instanceId,
            hostName,
            live: ()=>{
                let s = this.#e.get(hostName);
                if (s !== undefined && s.instanceId === instanceId) {
                    return {
                        status: s.status,
                        lastHeardAt: s.lastHeardAt,
                        ...s.asleepSince !== undefined && {
                            asleepSince: s.asleepSince
                        },
                        ...s.lastStillHereAt !== undefined && {
                            lastStillHereAt: s.lastStillHereAt
                        }
                    };
                }
            },
            epoch: ()=>{
                let s = this.#e.get(hostName);
                if (s !== undefined && s.instanceId === instanceId) {
                    return s.description.epoch;
                }
            },
            heard: (s, i)=>{
                let a = this.entries().find((h)=>h.instanceId === instanceId)?.asleepSince;
                if (a === undefined || s < a || s - a >= lLn) {
                    this.heard(instanceId, s, i);
                }
            },
            markAway: (s)=>this.markAway(instanceId, s)
        };
    }
    hostsForTable() {
        return this.entries().map((e)=>({
                kind: "remote",
                source: "session",
                name: e.name,
                status: e.status,
                enforcement: "self",
                description: e.description,
                servedTools: e.servedTools,
                ...e.plumbing.some((n)=>cEe.has(n)) && {
                    plumbingTools: new Set(e.plumbing.filter((n)=>cEe.has(n)))
                },
                ...e.passthrough.size > 0 && {
                    passthroughTools: new Map([
                        ...e.passthrough.values()
                    ].map((n)=>[
                            n.name,
                            {
                                localName: n.local_name
                            }
                        ]))
                },
                protocol: e.protocol,
                transport: e.transport,
                ...e.takenOverAt !== undefined && {
                    takenOverAt: e.takenOverAt
                },
                ...e.awayReason === "asleep" && {
                    asleep: true
                }
            }));
    }
    #d(e, n) {
        let o = this.entries().find((i)=>i.instanceId === e);
        if (o === undefined) {
            return;
        }
        let s = n(o);
        this.#e = new Map([
            ...this.#e,
            [
                o.name,
                s
            ]
        ]);
        if (s.status !== o.status || s.awayReason !== o.awayReason || s.description !== o.description) {
            this.#o++;
        }
        return o.name;
    }
}
function y(e, removed) {
    return new Map([
        ...e
    ].filter(([o])=>!removed.includes(o)));
}
export { RXn, g2o, Zjr, rv };
