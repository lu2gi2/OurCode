// Monitor tool definition — chunk-amw6mwbm.js [15027, 16051)
export const MonitorTool = {
  ...$e,
  backgrounding: "never",
  searchHint:
    "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
  async description() {
    return Woo() + (Ce() ? "" : zoo) + joo();
  },
  async prompt() {
    return Woo() + (Ce() ? "" : zoo) + joo();
  },
  get inputSchema() {
    return _e();
  },
  get inputJSONSchema() {
    return Ee();
  },
  toAutoClassifierInput(e) {
    return e.ws ? `websocket ${e.ws.url}${iVo(e.ws)}` : Me(e);
  },
  sandboxNetworkLists(e) {
    return Nae(e);
  },
  create(e) {
    return {
      permissionCheckFailureDecision(n, s) {
        let r = V(e, s);
        return $rr(Pl, r.shellPermission);
      },
      async validateInput(n) {
        if (n.command !== void 0) {
          let s = VSt(n, Ty({ command: n.command }));
          if (s !== void 0) return s;
        }
        return { result: !0 };
      },
      async checkPermissions(n, s) {
        let r = V(e, s);
        if (n.ws) {
          let d = NJo("Monitor websocket", r.shellPermission);
          if (d !== void 0) return d;
          return Pe(n.ws);
        }
        return Oe(n, r.shellPermission);
      },
      async call(n, s) {
        let r = V(e, s),
          { parentMessage: d } = s;
        Ae(r);
        let f = rre(),
          S = Ucs(n, f);
        if (n.ws) return Xjt({ ...n, ...S, bounded: f, ws: n.ws }, Gyt(r));
        return Le(n.command, { ...n, ...S }, f, r, d);
      },
    };
  },
};
