import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, Ym, Zse, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv, Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne, Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { dp, ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { kUn, eFe, Jlt, qks, Nt, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { $m } from "/$bunfs/root/chunk-ph7a449e.js";
import { yO } from "/$bunfs/root/chunk-1ej05ybf.js";
import { fZ } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { ZRe, gn, Dy, He, rr, AF, CF, qbo, GV, vFe, Id, Skr, $ct, hO, yN, Gk, hSe, dl, RF } from "/$bunfs/root/chunk-k3tkc302.js";
import { Oc } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { D8 } from "/$bunfs/root/chunk-fnj5y75n.js";
import { Z$, ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { G4e, Qdo, Uyr, Zdo, eNn, Byr, ths, sde, G_e, rhs, Oit, jyr, N5, tNn, Wyr, euo, ohs, nNn, ide, PNe, rNn, shs, ihs, eJt, V_e, Y4, GD, tuo, $5, ixt, Gyr, nJt, ahs, rJt, suo } from "/$bunfs/root/chunk-y9ay3abt.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { Der, EGe, r3, Evn, WYr, kvn, $C, md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { kae } from "/$bunfs/root/chunk-440b8y7g.js";
import { nat, Jg, tys, nYe, Lk, VQ as path, Juo, Quo, Rf, jNn, rYe, vV, WNn, nys, Zuo, rys, oys, epo, tpo, npo, sys, iys, BB, rat, GNn, VNn, oYe, Rxt, opo, sYe, T_r, eY, dys, EV, KL, uys, aR, YL, spo, fys, Ixt, QI, Cg, IJt } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { tst, jf, Bd, f_e, ELe, SB, PHn } from "/$bunfs/root/chunk-0sswwkdg.js";
import { UW } from "/$bunfs/root/chunk-80q4zjq4.js";
import { HZe } from "/$bunfs/root/chunk-adgp14at.js";
import { iSt, Mer } from "/$bunfs/root/chunk-y7rvsk4t.js";
import { AGe, o3 } from "/$bunfs/root/chunk-482qq3zf.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { Sl } from "/$bunfs/root/chunk-qbxhbxwh.js";
import { yV, ehs } from "/$bunfs/root/chunk-ghreee2m.js";
import { me, nd, ir, bt, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, M, oe, T, u, _t, Ue, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { TGn } from "/$bunfs/root/chunk-yngqe5v3.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { F, LP, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import Ge, { extname } from "path";
import { randomUUID } from "crypto";
import { lstat, mkdir, realpath, rm, unlink, writeFile } from "fs/promises";
const oa = 8;
const pE = /^[A-Za-z0-9._-]{1,64}$/;
const Yr = {
    ownVers: {},
    inFlight: {}
};
const aYr = yV("ownPublishes", Yr);
function fWs() {
    return ehs(Yr);
}
function Jbt(e, n, r, s = {}) {
    if (!pE.test(r)) {
        return;
    }
    e.set((h)=>{
        let b = h.ownVers[n] ?? [];
        let y = h.mergedVers?.[n] ?? [];
        let v = b.includes(r);
        let w = y.includes(r);
        if (v && (s.merged !== true || w)) {
            return h;
        }
        let S = v ? b : [
            ...b,
            r
        ].slice(-oa);
        let P = (s.merged === true && !w ? [
            ...y,
            r
        ] : y).filter((R)=>S.includes(R));
        return {
            ...h,
            ownVers: {
                ...h.ownVers,
                [n]: S
            },
            ...(h.mergedVers?.[n] !== undefined || P.length > 0) && {
                mergedVers: {
                    ...h.mergedVers,
                    [n]: P
                }
            }
        };
    });
}
function n2t(e, n, r) {
    return e.get().ownVers[n]?.includes(r) ?? false;
}
function bae(e, n, r) {
    let s = e.get();
    return (s.ownVers[n]?.includes(r) ?? false) && !(s.mergedVers?.[n]?.includes(r) ?? false);
}
function lYr(e, n) {
    return (e.get().ownVers[n]?.length ?? 0) > 0;
}
function cYr(e, n, r) {
    if (bae(e, n, r)) {
        return "self-session";
    }
    return "unverified";
}
async function her(e, n, r) {
    yer(e, n);
    try {
        return await r();
    } finally{
        _er(e, n);
    }
}
function yer(e, n) {
    e.set((r)=>({
            ...r,
            inFlight: {
                ...r.inFlight,
                [n]: (r.inFlight[n] ?? 0) + 1
            }
        }));
}
function _er(e, n) {
    e.set((r)=>{
        let s = r.inFlight[n] ?? 0;
        if (s === 0) {
            return r;
        }
        if (s === 1) {
            let { [n]: h, ...rest } = r.inFlight;
            return {
                ...r,
                inFlight: rest
            };
        }
        return {
            ...r,
            inFlight: {
                ...r.inFlight,
                [n]: s - 1
            }
        };
    });
}
function SGe(e, n) {
    return (e.get().inFlight[n] ?? 0) > 0;
}
function cL(e, n) {
    let r = /^(\d{1,15})-/.exec(e)?.[1];
    let s = /^(\d{1,15})-/.exec(n)?.[1];
    if (r === undefined || s === undefined) {
        return null;
    }
    return Number(r) - Number(s);
}
const qbt = /^\d{1,15}-[0-9a-f]{1,32}$/;
const kge = " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";
function qGt(e) {
    let n = e.trimEnd();
    if (!n.startsWith("<!--") || !n.endsWith("-->") || n.length < 7) {
        return false;
    }
    let r = n.slice(4, -3);
    return !r.startsWith(">") && !r.startsWith("->") && !r.includes("-->") && !r.includes("--!>") && !r.includes("<!--") && !r.endsWith("<!-");
}
function KGt() {
    let a_CLAUDE_CODE_ACCOUNT_UUID = a.CLAUDE_CODE_ACCOUNT_UUID;
    let a_CLAUDE_CODE_ORGANIZATION_UUID = a.CLAUDE_CODE_ORGANIZATION_UUID;
    if (a_CLAUDE_CODE_ACCOUNT_UUID && a_CLAUDE_CODE_ORGANIZATION_UUID) {
        return {
            accountUuid: a_CLAUDE_CODE_ACCOUNT_UUID.toLowerCase(),
            organizationUuid: a_CLAUDE_CODE_ORGANIZATION_UUID.toLowerCase()
        };
    }
    let r = nat();
    if (!r?.accountUuid) {
        return;
    }
    return {
        accountUuid: r.accountUuid.toLowerCase(),
        organizationUuid: r.organizationUuid?.toLowerCase() ?? null
    };
}
const qr = p(()=>u({
        accountUuid: o(),
        organizationUuid: o().nullable(),
        version: o(),
        capabilities: T(o()),
        fetchedAt: E()
    }));
const la = p(()=>u({
        accountUuid: o(),
        organizationUuid: o().nullable(),
        status: E(),
        deniedAt: E(),
        tokenExpiresAt: E()
    }));
function Kr(e) {
    let n = KGt();
    if (n === undefined || !e.success || e.data.accountUuid !== n.accountUuid || e.data.organizationUuid !== n.organizationUuid) {
        return;
    }
    return e.data;
}
function nYr() {
    return Kr(qr().safeParse(ce().cachedArtifactRoster));
}
function k3o() {
    return Kr(la().safeParse(ce().artifactRosterDenied));
}
function per() {
    let roster = ee().roster;
    if (roster !== undefined) {
        return {
            roster,
            source: "session"
        };
    }
    let n = a.CLAUDE_CODE_REMOTE ? undefined : nYr();
    if (n === undefined) {
        return undefined;
    }
    return {
        roster: n,
        source: "disk"
    };
}
const ca = 3600000;
function Tge({ session, epoch, roster, storageV5 }) {
    if (ee() !== session || session.accountEpoch !== epoch) {
        return {
            adopted: false,
            persisted: Promise.resolve()
        };
    }
    session.roster = roster;
    if (roster.capabilities.includes("assets")) {
        session.assetsOnRoster = true;
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return {
            adopted: true,
            persisted: Promise.resolve()
        };
    }
    return {
        adopted: true,
        persisted: rYr(session, epoch, storageV5, (y, v)=>{
            let w = qr().safeParse(v.cachedArtifactRoster);
            let S = w.success ? w.data : undefined;
            let fetchedAt = Date.now();
            if (v.artifactRosterDenied === undefined && S !== undefined && S.accountUuid === y.accountUuid && S.organizationUuid === y.organizationUuid && S.version === roster.version && LP(S.capabilities, roster.capabilities) && S.fetchedAt <= fetchedAt && fetchedAt - S.fetchedAt < ca) {
                return;
            }
            return {
                cachedArtifactRoster: {
                    ...y,
                    version: roster.version,
                    capabilities: [
                        ...roster.capabilities
                    ],
                    fetchedAt
                },
                artifactRosterDenied: undefined
            };
        }).catch((y)=>{
            t(`Could not save the artifact capability roster to config; it will be fetched again next start: ${l(y)}`);
        })
    };
}
async function rYr(e, n, r, s) {
    let h = KGt();
    if (h === undefined || e.accountEpoch !== n) {
        return;
    }
    await Ae((b)=>{
        if (e.accountEpoch !== n || KGt()?.accountUuid !== h.accountUuid) {
            return b;
        }
        let y = s(h, b);
        if (y === undefined) {
            return b;
        }
        return {
            ...b,
            ...y
        };
    }, r);
}
function Jr() {
    return !k("tengu_pewter_canteen", false);
}
const da = "data-chart-runtime";
function Zr(e) {
    return e.includes(da);
}
function ua(e) {
    return Oit(e);
}
function Qr(e) {
    return eJt(e) >= 0;
}
function ei(e) {
    let n = [];
    let r = e.indexOf(eNn);
    let s = -1;
    while(r >= 0){
        let h = r + eNn.length;
        if (s < h) {
            s = e.indexOf(Byr, h);
            if (s < 0) {
                break;
            }
        }
        let b = e.indexOf(eNn, h);
        if ((b < 0 || b > s) && Qr(e.slice(h, s))) {
            n.push([
                r,
                s + Byr.length
            ]);
        }
        r = b;
    }
    return tNn(e, n);
}
const Xr = `(function () {
  if (typeof Chart === 'undefined') return;
  var specEl = document.querySelector('script[type="application/json"][data-chart-runtime]');
  var el = document.getElementById('primary-chart');
  if (!specEl || !el) return;
  var spec;
  try { spec = JSON.parse(specEl.textContent); } catch (e) { return; }
  var series = (spec.series || []).filter(function (s) { return Array.isArray(s.points) && s.points.length; });
  if (!series.length) return; /* keep the fallback's No-data state */

  var chart = null;
  /* Rebuilds the whole config on every call: resolved colors are baked into
     the config at creation, so a theme flip must re-read the custom
     properties (getComputedStyle re-called) and recreate the chart.
     Deterministic: same data, same pixels PER THEME. */
  function render() {
  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name, fb) {
    var v = rootStyle.getPropertyValue(name).trim();
    return v || fb;
  }
  function resolveColor(c, fb) {
    c = (c || fb || '').trim();
    var m = /^var\\((--[^,)]+)(?:,([^)]*))?\\)$/.exec(c);
    if (m) return cssVar(m[1], (m[2] || '').trim() || '#2563eb');
    return c || '#2563eb';
  }
  var accent = cssVar('--accent', '#2563eb');
  var inkMuted = cssVar('--ink-muted', '#64748b');
  var gridLine = cssVar('--line', '#e2e8f0');
  var slicePalette = [accent, cssVar('--good', '#059669'), '#d97706', '#7c3aed', inkMuted, '#0ea5e9', '#db2777'];

  var type = spec.type === 'bar' ? 'bar' : spec.type === 'donut' ? 'doughnut' : 'line';
  /* Category scale aligns data by index, so a tick array shorter or longer
     than the point list would drop or misplace points \u2014 the fallback plots
     by x value and tolerates that; same data must render the same chart on
     both paths. Use the tick labels only when they align one-per-point. */
  var ticks = (spec.x && spec.x.ticks) || [];
  var labels = ticks.length === series[0].points.length
    ? ticks
    : series[0].points.map(function (p) { return String(p[0]); });

  var allYs = [];
  series.forEach(function (s) { s.points.forEach(function (p) { allYs.push(p[1]); }); });
  var yMin = spec.y && spec.y.min != null ? spec.y.min : Math.min(0, Math.min.apply(null, allYs));
  var yMax = spec.y && spec.y.max != null ? spec.y.max : Math.max.apply(null, allYs) * 1.05;
  /* Same tick-label precision rule as the fallback renderer, so both paths
     label identically: sub-1 steps get distinguishing decimals; explicit
     domains render the step exactly (<=2 decimals). */
  var step = (yMax - yMin) / 4;
  var dec = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step)) + 1) : 0;
  if (spec.y && spec.y.min != null && spec.y.max != null) {
    for (dec = 0; dec < 2 && step * Math.pow(10, dec) !== Math.round(step * Math.pow(10, dec)); dec++);
  }

  var data, options;
  var base = { responsive: true, maintainAspectRatio: false, animation: false };
  if (type === 'doughnut') {
    data = {
      labels: labels,
      datasets: [{
        data: series[0].points.map(function (p) { return p[1]; }),
        backgroundColor: (series[0].colors || []).map(function (c, i) { return resolveColor(c, slicePalette[i % slicePalette.length]); })
          .concat(slicePalette.slice((series[0].colors || []).length)).slice(0, series[0].points.length),
        borderWidth: 1
      }]
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: true, position: 'right', labels: { color: inkMuted } } },
      cutout: '62%'
    });
  } else {
    data = {
      labels: labels,
      datasets: series.map(function (s) {
        var c = resolveColor(s.color, 'var(--accent)');
        return {
          label: s.name || '',
          data: s.points.map(function (p) { return p[1]; }),
          borderColor: c,
          backgroundColor: c,
          borderWidth: 2,
          pointRadius: type === 'line' ? 0 : undefined,
          tension: 0
        };
      })
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: series.length > 1, labels: { color: inkMuted, boxWidth: 10 } } },
      scales: {
        x: {
          title: spec.x && spec.x.label ? { display: true, text: spec.x.label, color: inkMuted } : undefined,
          grid: { display: false },
          ticks: { color: inkMuted }
        },
        y: {
          min: yMin,
          max: yMax,
          title: spec.y && spec.y.label ? { display: true, text: spec.y.label, color: inkMuted } : undefined,
          grid: { color: gridLine },
          ticks: { color: inkMuted, count: 5, format: { maximumFractionDigits: dec, minimumFractionDigits: 0 } }
        }
      }
    });
  }

  if (chart) { chart.destroy(); chart = null; }
  while (el.firstChild) el.removeChild(el.firstChild);
  var canvas = document.createElement('canvas');
  el.appendChild(canvas);
  chart = new Chart(canvas, { type: type, data: data, options: options });
  }

  render();
  /* Keep the canvas in step with live theme flips, like the SVG fallback's
     native var() behavior and the mermaid precedent. Destroy+recreate is
     idempotent under rapid flips (render() always tears down first). */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq && mq.addEventListener) mq.addEventListener('change', render);
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();`;
async function zn() {
    let e;
    try {
        let { loadChartBundleJs } = await import("/$bunfs/root/chunk-qdxa8xzx.js");
        e = await loadChartBundleJs();
    } catch  {
        f("artifact_publish", "chart_bundle_unreadable");
        return null;
    }
    if (ua(e) !== null) {
        f("artifact_publish", "chart_bundle_unsafe");
        return null;
    }
    if (Oit(Xr) !== null) {
        f("artifact_publish", "chart_init_unsafe");
        return null;
    }
    let n = `
<script>` + e + `</script>
<script>` + Xr + `</script>
`;
    if (!Qr(n)) {
        f("artifact_publish", "chart_block_unstrippable");
        return null;
    }
    return eNn + n + Byr;
}
function fa(e) {
    return Oit(e);
}
const pa = 8;
function ha(e) {
    return `${Uyr}${e}-->`;
}
const maxSpan_1 = 4194304;
function ni(e, n = 0) {
    return e[0] === `
` && rNn(e, 1) > 0 && e.endsWith(`</script>
`) && !e.includes(Uyr) && eJt(e) === n;
}
const ga = 2;
const ri = {
    beginPrefix: Uyr,
    end: Zdo,
    lenDigitsMax: pa,
    maxSpan: maxSpan_1,
    openTags: ga,
    validate: ni
};
const ma = 50000;
const ba = 250000;
const _a = 4096;
function ii(e) {
    let n = e.toLowerCase();
    let r = 0;
    while(true){
        r = n.indexOf("<code", r);
        if (r < 0) {
            return false;
        }
        let s = n[r + 5];
        if (s === undefined) {
            return false;
        }
        if (!jyr.has(s)) {
            r += 5;
            continue;
        }
        let h = Math.min(r + _a, n.length);
        let b = h;
        for(let v = r + 5; v < h; v++){
            if (n[v] === ">") {
                b = v;
                break;
            }
        }
        let y = n.slice(r + 5, b);
        for (let v of y.matchAll(/language-([\w.+#-]+)/g)){
            let w = v[1];
            if (Object.prototype.hasOwnProperty.call(eFe, w) || Object.prototype.hasOwnProperty.call(Jlt, w)) {
                return true;
            }
        }
        r = b;
    }
}
function ya() {
    return `(function(){
if(typeof hljs==='undefined')return;
var budget=${ba};
var codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));
for(var i=0;i<codes.length;i++){
var el=codes[i];
if(el.hasAttribute('data-claude-hljs-claimed'))continue;
var m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');
if(!m||!hljs.getLanguage(m[1]))continue;
if(el.children.length)continue;
var src=(el.textContent||'').replace(/\\n$/,'');
if(src.length>${ma}||src.length>budget)continue;
budget-=src.length;
el.setAttribute('data-claude-hljs-claimed','1');
try{
var res=hljs.highlight(src,{language:m[1],ignoreIllegals:true});
el.innerHTML=res.value;
el.classList.add('hljs');
}catch(e){}
}
})();`;
}
async function Un() {
    let e;
    try {
        let { loadHljsBundleJs } = await import("/$bunfs/root/chunk-mkmj7a03.js");
        e = await loadHljsBundleJs();
    } catch (error) {
        c(error);
        f("artifact_publish", "hljs_bundle_unreadable");
        return null;
    }
    let bundleEmbedVerdicts = ee().bundleEmbedVerdicts;
    if (bundleEmbedVerdicts.hljs === undefined) {
        bundleEmbedVerdicts.hljs = fa(e);
    }
    if (bundleEmbedVerdicts.hljs !== null) {
        f("artifact_publish", "hljs_bundle_unsafe");
        return null;
    }
    let r = ya();
    if (Oit(r) !== null) {
        f("artifact_publish", "hljs_init_unsafe");
        return null;
    }
    let s = `
<script>` + e + `</script>
<script>` + r + `</script>
`;
    if (s.length >= maxSpan_1) {
        f("artifact_publish", "hljs_bundle_overspan");
        return null;
    }
    let blockStripVerdicts = ee().blockStripVerdicts;
    if (blockStripVerdicts.hljs === undefined) {
        blockStripVerdicts.hljs = ni(s);
    }
    if (!blockStripVerdicts.hljs) {
        f("artifact_publish", "hljs_block_unstrippable");
        return null;
    }
    return `
` + ha(s.length) + s + Zdo + `
`;
}
const palettes = {
    light: {
        surface: "#f4efe4",
        text: "#42392e",
        line: "#8a7f6d",
        border: "#7a6c52",
        bg: "#fffdf8"
    },
    dark: {
        surface: "#262b34",
        text: "#f2f3f5",
        line: "#a8adb8",
        border: "#9aa4b8",
        bg: "#1f232b"
    }
};
const wa = "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";
function Sa() {
    return `(function(){
var CFG=` + _({
        palettes
    }) + `;
if(typeof mermaid==='undefined')return;
var pres=Array.prototype.slice.call(document.querySelectorAll('pre.mermaid')).filter(function(p){if(p.hasAttribute('data-claude-mermaid-claimed'))return false;p.setAttribute('data-claude-mermaid-claimed','1');return true;});
if(!pres.length)return;
var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
var root=document.documentElement;
var items=pres.map(function(pre){
var mount=document.createElement('div');mount.className='mermaid-diagram';
return {pre:pre,mount:mount,src:pre.textContent||''};
});
var seq=0;
var renderGen=0;
var lastKey='';
function pageBg(fallback){
var els=[document.body,document.documentElement];
for(var i=0;i<els.length;i++){
var c=els[i]&&getComputedStyle(els[i]).backgroundColor;
if(c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)')return c;
}
return fallback;
}
function render(){
var theme=root.getAttribute('data-theme');
var dark=theme==='dark'||(!!(mq&&mq.matches)&&theme!=='light');
var pal=dark?CFG.palettes.dark:CFG.palettes.light;
var bg=pageBg(pal.bg);
var key=(dark?'d':'l')+'|'+bg;
if(key===lastKey)return;
lastKey=key;
var gen=++renderGen;
var font=getComputedStyle(document.body).fontFamily||'sans-serif';
var nat={useMaxWidth:false};
mermaid.initialize({
startOnLoad:false,securityLevel:'strict',theme:'base',
flowchart:nat,sequence:nat,er:nat,state:nat,class:nat,pie:nat,
gantt:nat,journey:nat,timeline:nat,gitGraph:nat,mindmap:nat,xyChart:nat,
quadrantChart:nat,sankey:nat,c4:nat,requirement:nat,block:nat,
packet:nat,kanban:nat,architecture:nat,radar:nat,
themeVariables:{background:bg,mainBkg:pal.surface,primaryColor:pal.surface,
primaryTextColor:pal.text,lineColor:pal.line,primaryBorderColor:pal.border,
nodeBorder:pal.border,clusterBorder:pal.border,edgeLabelBackground:bg,
clusterBkg:'rgba(127,127,127,0.07)',titleColor:pal.text,
darkMode:dark,rowOdd:bg,rowEven:'rgba(127,127,127,0.07)',
attributeBackgroundColorOdd:bg,attributeBackgroundColorEven:'rgba(127,127,127,0.07)',
fontSize:'16px',fontFamily:font},
themeCSS:'.node rect, .node circle, .node polygon, .node path, .cluster rect { stroke-width: 2px; }'
});
items.forEach(function(it){
var id='claude-mermaid-'+seq++;
mermaid.render(id,it.src).then(function(r){
if(gen!==renderGen)return;
var prev=it.pre.previousElementSibling;
if(prev&&prev.className==='mermaid-diagram'&&prev!==it.mount)return;
it.mount.innerHTML=r.svg;
if(!it.mount.parentNode)it.pre.parentNode.insertBefore(it.mount,it.pre);
it.pre.style.display='none';
},function(){
var scratch=document.getElementById(id);
if(scratch)scratch.parentNode.removeChild(scratch);
scratch=document.getElementById('d'+id);
if(scratch)scratch.parentNode.removeChild(scratch);
if(gen!==renderGen)return;
if(it.mount.parentNode)it.mount.parentNode.removeChild(it.mount);
it.pre.style.display='';
});
});
}
render();
if(mq&&mq.addEventListener)mq.addEventListener('change',render);
if(typeof MutationObserver!=='undefined')new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();`;
}
const xa = 8;
function Ea(e) {
    return `${G4e}${e}-->`;
}
const maxSpan = 8388608;
function si(e, n = 0) {
    let r = e[0] === `
` ? shs(e, 1) : 0;
    if (!r || !e.endsWith(`</script>
`) || e.includes(G4e)) {
        return false;
    }
    let s = 1 + r;
    let h = ohs(e.slice(s));
    if (h === null || e.indexOf("<", s) !== s + h.data) {
        return false;
    }
    let b = r > 7 ? 1 : 0;
    let y = N5(e.slice(s + h.after));
    let v = ihs(y, 0);
    if (v !== null) {
        if (!y.startsWith("</script>", v.len)) {
            return false;
        }
        b += v.annotated ? 1 : 0;
        y = y.slice(v.len + 9);
    }
    let w = eJt(y);
    return w >= 0 && w + b === n;
}
const Ra = 3;
const ai = {
    beginPrefix: G4e,
    end: Qdo,
    lenDigitsMax: xa,
    maxSpan,
    openTags: Ra,
    validate: si
};
const ka = 4096;
function oi(e) {
    let n = e.toLowerCase();
    let r = 0;
    while(true){
        r = n.indexOf("<pre", r);
        if (r < 0) {
            return false;
        }
        let s = n[r + 4];
        if (s === undefined) {
            return false;
        }
        if (!jyr.has(s)) {
            r += 4;
            continue;
        }
        let h = Math.min(r + ka, n.length);
        let b = h;
        let y = false;
        for(let v = r + 4; v < h; v++){
            if (n[v] === ">") {
                b = v;
                y = true;
                break;
            }
        }
        if (Ta(n.slice(r + 4, b))) {
            return true;
        }
        r = y ? b + 1 : b;
    }
}
function Ta(e) {
    let e_length = e.length;
    let r = 0;
    while(r < e_length){
        let s = e.indexOf("class", r);
        if (s < 0) {
            return false;
        }
        let h = e[s - 1];
        if (!(h === " " || h === "\t" || h === `
` || h === "\f" || h === "\r")) {
            r = s + 5;
            continue;
        }
        let b = s + 5;
        while(b < e_length && /\s/.test(e[b])){
            b++;
        }
        if (e[b] !== "=") {
            r = s + 5;
            continue;
        }
        b++;
        while(b < e_length && /\s/.test(e[b])){
            b++;
        }
        let y = e[b];
        let v;
        if (y === '"' || y === "'") {
            let w = e.indexOf(y, b + 1);
            if (w < 0) {
                return false;
            }
            v = e.slice(b + 1, w);
        } else {
            let w = b;
            while(w < e_length && !/[\s>]/.test(e[w])){
                w++;
            }
            v = e.slice(b, w);
        }
        for (let w of v.split(/\s+/)){
            if (w === "mermaid") {
                return true;
            }
        }
        r = s + 5;
    }
    return false;
}
function nvn() {
    let e = Sa();
    if (Oit(e) !== null) {
        f("artifact_publish", "mermaid_init_unsafe");
        return null;
    }
    let n = `
` + wa + `
` + ths + `</script>
<script>` + e + `</script>
`;
    let blockStripVerdicts = ee().blockStripVerdicts;
    if (blockStripVerdicts.mermaid === undefined) {
        blockStripVerdicts.mermaid = si(n);
    }
    if (!blockStripVerdicts.mermaid) {
        f("artifact_publish", "mermaid_block_unstrippable");
        return null;
    }
    return `
` + Ea(n.length) + n + Qdo + `
`;
}
function hn(body) {
    return {
        chart: Zr(body),
        mermaid: oi(body),
        highlight: ii(body)
    };
}
const mn = "// DOC:anchors:begin";
const Pa = /^(P|H1|H2|H3|H4|H5|H6|LI|UL|OL|BLOCKQUOTE|ASIDE|SECTION|DIV|TABLE|TR|TD|TH|DL|DT|DD|FIGURE|FIGCAPTION|CAPTION|PRE|HEADER|FOOTER|NAV|SUMMARY|DETAILS|ADDRESS|HGROUP|HR)$/;
function Ca(e) {
    let n = 2166136261;
    for(let r = 0; r < e.length; r++){
        n = Math.imul(n ^ e.charCodeAt(r), 16777619);
    }
    return (n >>> 0).toString(36);
}
function $a(e, n, r, s) {
    let h = `b-${Ca(e + `
` + n)}`;
    if (!r.has(h)) {
        return h;
    }
    let b = s.get(h) || 2;
    while(r.has(`${h}-${b}`)){
        b++;
    }
    s.set(h, b + 1);
    return `${h}-${b}`;
}
const li = /^b-[0-9a-z]{1,7}(-[0-9]+)?$/;
const ci = "<!doctype html>";
const Oa = 33554432;
function Na(e, n) {
    if (n === undefined) {
        return;
    }
    let r = /([^\t\n\f\r /=>]+)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:"[^"]*"|'[^']*'|[^\t\n\f\r >]*))?/y;
    r.lastIndex = n.startOffset;
    let s = r.exec(e);
    if (s === null || s[1].toLowerCase() !== "id") {
        return;
    }
    let end = n.startOffset + s[0].length;
    if (end < n.endOffset) {
        return undefined;
    }
    return {
        start: n.startOffset,
        end
    };
}
const Vn = (e)=>e.attrs?.find((n)=>n.name === "id")?.value;
const Ia = new Set([
    "",
    "text/javascript",
    "application/javascript",
    "module"
]);
const Wn = (e, n)=>e.attrs?.some((r)=>r.name === n) ?? false;
const ui = (e)=>N5(e.attrs?.find((n)=>n.name === "type")?.value ?? "").toLowerCase();
const Fa = (e)=>ui(e) === "module";
const Ma = (e)=>e.tagName === "script" && e.namespaceURI === AGe && !Wn(e, "src") && !Wn(e, "nomodule") && Ia.has(ui(e)) && (e.childNodes ?? []).some((n)=>n.nodeName === "#text" && (n.value ?? "").includes(mn));
const La = (e, n)=>(e.attrs?.find((r)=>r.name === "class")?.value ?? "").split(/[\t\n\f\r ]+/).includes(n);
const Da = (e, page)=>{
    for(let r = e.parentNode; r; r = r.parentNode){
        if (r === page) {
            return true;
        }
    }
    return false;
};
function di(e) {
    let n = [];
    let r = [
        ...e.childNodes ?? []
    ].reverse();
    while(r.length > 0){
        let s = r.pop();
        if (s.tagName === undefined) {
            continue;
        }
        n.push(s);
        let h = s.childNodes ?? [];
        for(let b = h.length - 1; b >= 0; b--){
            r.push(h[b]);
        }
    }
    return n;
}
function Ba(node) {
    let n = new Map;
    let r = [
        {
            node,
            exit: false
        }
    ];
    while(r.length > 0){
        let s = r.pop();
        let h = s.node.childNodes ?? [];
        if (!s.exit) {
            r.push({
                node: s.node,
                exit: true
            });
            for(let y = h.length - 1; y >= 0; y--){
                if (h[y].tagName !== undefined) {
                    r.push({
                        node: h[y],
                        exit: false
                    });
                }
            }
            continue;
        }
        let b = "";
        for (let y of h){
            if (y.nodeName === "#text") {
                b += y.value ?? "";
            } else if (y.tagName !== undefined) {
                b += n.get(y) ?? "";
            }
        }
        n.set(s.node, b);
    }
    return n;
}
function ja(e) {
    let n = (v)=>v.sourceCodeLocation?.startOffset ?? Infinity;
    let r = e.filter((v)=>La(v, "page"));
    let s = Infinity;
    for (let v of r){
        s = Math.min(s, n(v));
    }
    let h = r.some((v)=>n(v) === Infinity);
    let b = e.filter(Ma).sort((v, w)=>n(v) - n(w));
    let y = false;
    for (let v of b){
        if (!v.sourceCodeLocation?.endTag) {
            continue;
        }
        if (Fa(v)) {
            if (Wn(v, "async")) {
                f("artifact_publish", "block_ids_load_point_unsure");
                return;
            }
            y = true;
            continue;
        }
        let w = n(v);
        if (!(s < w)) {
            if (h) {
                f("artifact_publish", "block_ids_load_point_unsure");
                return;
            }
            continue;
        }
        let S = r.findIndex((B)=>n(B) < w);
        let page = r[S];
        if (r.slice(0, S).some((B)=>n(B) === Infinity) || Da(v, page)) {
            f("artifact_publish", "block_ids_load_point_unsure");
            return;
        }
        return {
            page,
            seen: v.sourceCodeLocation.endOffset
        };
    }
    if (y && r[0] !== undefined) {
        return {
            page: r[0],
            seen: Infinity
        };
    }
}
function Ha(e, n) {
    let r = di(n);
    let s = ja(r);
    if (s === undefined) {
        return [];
    }
    let { page, seen } = s;
    let y = di(page);
    let v = new Map;
    for (let K of y){
        let N = Vn(K);
        if (N !== undefined && !v.has(N)) {
            v.set(N, K);
        }
    }
    let w = new Set;
    let S = [];
    for (let K of r){
        let N = Vn(K);
        if (N === undefined) {
            continue;
        }
        let J = K.sourceCodeLocation?.attrs?.id?.startOffset;
        if (J === undefined ? seen === Infinity : J < seen) {
            w.add(N);
        } else if (J === undefined) {
            S.push(N);
        }
    }
    if (S.some((K)=>!w.has(K) && li.test(K))) {
        f("artifact_publish", "block_ids_unplaced_id");
        return [];
    }
    let P = Ba(page);
    let R = new Map;
    let B = [];
    let V = 0;
    for (let K of y){
        let N = K.tagName.toUpperCase();
        let J = K.namespaceURI === AGe && !/[^a-z0-9]/.test(K.tagName) && Pa.test(N);
        let C = Vn(K);
        let W = C !== undefined && v.get(C) === K;
        if (!J || W && C !== "") {
            continue;
        }
        let Z = P.get(K) ?? "";
        V += Z.length;
        if (V > Oa) {
            return null;
        }
        let O = $a(N, Z, w, R);
        w.add(O);
        let fe = K.sourceCodeLocation;
        if (!fe?.startTag || !li.test(O)) {
            continue;
        }
        let he = Na(e, fe.attrs?.id);
        if (C !== undefined && he !== undefined) {
            B.push({
                start: he.start,
                end: he.end,
                text: `id="${O}"`
            });
        } else if (C === undefined) {
            let ae = fe.startTag.startOffset + 1 + K.tagName.length;
            B.push({
                start: ae,
                end: ae,
                text: ` id="${O}"`
            });
        }
    }
    return B;
}
function za(e, n) {
    if (n.length === 0) {
        return e;
    }
    n.sort((h, b)=>h.start - b.start);
    let r = "";
    let s = 0;
    for (let h of n){
        if (h.start < s) {
            continue;
        }
        r += e.slice(s, h.start) + h.text;
        s = h.end;
    }
    return r + e.slice(s);
}
async function fi(e) {
    if (!e.includes(mn)) {
        return e;
    }
    try {
        let { nestingBudgetExceeded } = await import("/$bunfs/root/chunk-7zvwgyh2.js");
        if (nestingBudgetExceeded(e)) {
            f("artifact_publish", "block_ids_nesting_budget");
            return e;
        }
        let { parse } = await import("/$bunfs/root/chunk-zczx3aa8.js");
        let s = ci + e;
        let h = o3(parse(s, {
            sourceCodeLocationInfo: true
        }));
        let b = Ha(s, h);
        if (b === null) {
            f("artifact_publish", "block_ids_text_budget");
            t("[artifact] doc block ids skipped: too much text to hash");
            return e;
        }
        return za(s, b).slice(ci.length);
    } catch (error) {
        f("artifact_publish", "block_ids_parse_failed");
        t(`[artifact] doc block ids skipped: ${String(error)}`);
        return e;
    }
}
function Ua(e, n) {
    let r = e.length > n ? ne(e, n) : e;
    return {
        escaped: rvn(r).replace(/[\\"\n\t]/g, (b)=>{
            switch(b){
                case "\\":
                    return "\\\\";
                case '"':
                    return "\\\"";
                case `
`:
                    return "\\n";
                case "\t":
                    return "\\t";
                default:
                    return b;
            }
        }),
        elided: e.length - r.length
    };
}
function T3o(e, n) {
    let { escaped, elided } = Ua(e, n);
    let h = `"${rvn(Gk(escaped, escaped.length))}"`;
    if (elided > 0) {
        return `${h} \u2026(+${elided} chars)`;
    }
    return h;
}
function rvn(e) {
    return e.replace(hO, "'").replace(yN, "'");
}
const Va = 10;
const Wa = 120;
const pi = "Artifact publishing is rate-limited right now, so nothing was published.";
const hi = " Nothing is wrong with the call: a publishing rate limit refused it, and this tool already waited and sent it once more.";
const gi = " Send the same call again";
const bn = ' with url: "';
const Yn = '"';
const Gn = " after about ";
const Ya = (e)=>` seconds \u2014 publishing limits are shared, so the wait can be longer while others publish; change nothing${e ? " else" : ""} about the call to get past this.`;
const Ga = " That artifact was reserved for this publish and nothing has been published to it; targeting it avoids reserving another.";
const qn = " The refused step was ";
const qa = /^(?:the upload preflight that copying \d{1,4} files? from another artifact needs|staging this publish's \d{1,4} copied files? \((?:"(?:[^"\\\n]|\\.){0,1100}" from artifact [A-Za-z0-9-]{22,36}(?:, (?=")|))+(?:, and \d{1,4} more)?\)); nothing was staged\.$/;
function mi(e) {
    let n = e.slice(0, 3).map((s)=>`${_(s.path)} from artifact ${s.fromSlug}`);
    let r = e.length > 3 ? `, and ${e.length - 3} more` : "";
    return `staging this publish's ${e.length} copied ${I(e.length, "file")} (${n.join(", ")}${r}); nothing was staged`;
}
function bi(e) {
    return `the upload preflight that copying ${e} ${I(e, "file")} from another artifact needs; nothing was staged`;
}
const Ka = "Not published: artifact publishing is rate-limited right now. Claude can try again shortly.";
const Xa = /^https?:\/\/[A-Za-z0-9.-]{1,100}(?::\d{1,5})?(?:\/[A-Za-z0-9._-]{1,40}){0,4}\/[A-Za-z0-9-]{22,36}$/;
function _i(e) {
    let n = Math.ceil((e ?? 0) / 1000);
    return Math.min(Math.max(n, Va), Wa);
}
function Kn(e, n, r) {
    let s = n !== undefined;
    return pi + hi + gi + (s ? `${bn}${n}${Yn}` : "") + `${Gn}${e}${Ya(s)}` + (s ? Ga : "") + (r !== undefined ? `${qn}${r}.` : "");
}
function A3o(e) {
    let n = pi + hi + gi;
    if (!e.startsWith(n)) {
        return;
    }
    let n_length = n.length;
    let s;
    if (e.startsWith(bn, n_length)) {
        let v = e.indexOf(Yn, n_length + bn.length);
        if (v === -1) {
            return;
        }
        s = e.slice(n_length + bn.length, v);
        if (!Xa.test(s)) {
            return;
        }
        n_length = v + Yn.length;
    }
    if (!e.startsWith(Gn, n_length)) {
        return;
    }
    let h = /^\d{1,3}/.exec(e.slice(n_length + Gn.length))?.[0];
    if (h === undefined) {
        return;
    }
    let b = e.indexOf(qn, n_length);
    let y = b === -1 ? e : e.slice(0, b);
    if (b !== -1 && !qa.test(e.slice(b + qn.length))) {
        return;
    }
    if (y === Kn(Number(h), s)) {
        return Ka;
    }
}
const Xn = "Nothing was published and nothing is wrong with the call: this tool chose that contract because it is the server's newest, and it has not reached every server yet. Send the same call again in about a minute; do not pin an older contract to get past this.";
const Ja = "Not published: the artifact service is mid-update. Claude can try again in about a minute.";
const Za = /^deploy 422: contract ([0-9A-Za-z.+-]{1,32}) is newer than the preferred ([0-9A-Za-z.+-]{1,32})\. /;
function Qa(e, n) {
    return `deploy 422: contract ${e} is newer than the preferred ${n}. ${Xn}`;
}
function C3o(e) {
    let n = Za.exec(e);
    if (n === null) {
        return;
    }
    if (e === Qa(n[1], n[2])) {
        return Ja;
    }
}
function Kbt() {
    let prReviewTemplate = ee().prReviewTemplate;
    prReviewTemplate.chrome ??= import("/$bunfs/root/chunk-kea8svte.js").then((n)=>eo(n.SKILL_FILES["template.html"] ?? ""));
    return prReviewTemplate.chrome;
}
function fer(e, n) {
    let r = e.indexOf(n);
    if (r === -1) {
        return "";
    }
    let s = /<div\b|<\/div>/g;
    s.lastIndex = r;
    let h = 0;
    for(let b = s.exec(e); b !== null; b = s.exec(e)){
        h += b[0] === "</div>" ? -1 : 1;
        if (h === 0) {
            return e.slice(r, b.index + 6);
        }
    }
    return "";
}
function eo(e) {
    return {
        pinnedMarkup: [
            {
                label: "stylesheet",
                bytes: e.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "",
                terminal: "</style>"
            },
            {
                label: "stale-banner",
                bytes: fer(e, '<div class="stale-banner"'),
                terminal: "</div>"
            },
            {
                label: "stamp-control",
                bytes: fer(e, '<div class="stamp"'),
                terminal: "</div>"
            }
        ],
        inlineStyleAllowlist: D([
            ...e.matchAll(/\bstyle\s*=\s*"([^"]*)"/g)
        ].map((r)=>r[1])),
        linkPlaceholders: D([
            ...e.matchAll(/(?:src|href)\s*=\s*"([^"]*)"/gi)
        ].map((r)=>r[1]).filter((r)=>!/^[a-z][a-z0-9+.-]*:|^\/\//i.test(r)))
    };
}
const vi = /\bstale-banner\b|\bstamp(-[a-z]+)?\b/i;
const oYr = "80cb1876b48d73daa3ee6df8dd1124eaa6d07e79d223bd7efec01e98714c4cec";
function Ybt(e, n, r) {
    return `https://github.com/${e}/${n}/pull/${r}`;
}
const YGt = "prr-anchor";
function mer(e) {
    let n = V_e(e, 7);
    let r = n - 1 - nNn;
    if (n > 0 && r > 0 && PNe(e, r) !== 0) {
        return e.slice(0, r) + e.slice(n - 1);
    }
    return e;
}
function XGt(e) {
    let n = [];
    let r = /<script/gi;
    let s = /<\/script/gi;
    let h = 0;
    while(true){
        r.lastIndex = h;
        let b = r.exec(e);
        if (b === null) {
            break;
        }
        let y = b.index;
        let v = e[y + 7];
        if (v !== undefined && !/[\t\n\f\r />]/.test(v)) {
            h = y + 1;
            continue;
        }
        let w = y + 7;
        let S = -1;
        while(true){
            s.lastIndex = w;
            let P = s.exec(e);
            if (P === null) {
                break;
            }
            let R = e[P.index + 8];
            if (R === ">") {
                S = P.index + 9;
                break;
            }
            if (R !== undefined && /[\t\n\f\r /]/.test(R)) {
                let B = e.indexOf(">", P.index + 8);
                if (B === -1) {
                    break;
                }
                S = B + 1;
                break;
            }
            w = P.index + 8;
        }
        if (S === -1) {
            break;
        }
        n.push(e.slice(y, S));
        h = S;
    }
    return n;
}
const JGt = /^[A-Za-z0-9-]{1,39}$/;
const QGt = /^(?!\.\.?$)[A-Za-z0-9._-]{1,100}$/;
const ZGt = /^[0-9a-f]{40}$/;
const sYr = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
const e2t = /^[A-Za-z0-9_.-]{1,64}$/;
const _Ge = /^[A-Za-z0-9_]{1,48}$/;
const ovn = /^[A-Za-z0-9_.-]{1,64}$/;
const CZe = /^method$/i;
const nn = {
    owner: "owner",
    repo: "repo",
    number: 1,
    headSha: "0".repeat(40),
    publishedAt: "1970-01-01T00:00:00Z"
};
function wi(e) {
    return e.owner === nn.owner && e.repo === nn.repo && e.number === nn.number && e.headSha === nn.headSha && e.publishedAt === nn.publishedAt;
}
const to = new Set([
    "kind",
    "owner",
    "repo",
    "number",
    "headSha",
    "publishedAt"
]);
const no = new Set([
    "tool",
    "input",
    "shaPath"
]);
function ro(anchor) {
    if (!L(anchor)) {
        return "anchor is missing";
    }
    for (let n of Object.keys(anchor)){
        if (!to.has(n)) {
            return "anchor carries an unexpected key";
        }
    }
    if (anchor.kind !== "pr") {
        return 'anchor.kind is not "pr"';
    }
    if (typeof anchor.owner !== "string" || !JGt.test(anchor.owner)) {
        return "anchor.owner is not a valid owner";
    }
    if (typeof anchor.repo !== "string" || !QGt.test(anchor.repo)) {
        return "anchor.repo is not a valid repository name";
    }
    if (!Number.isSafeInteger(anchor.number) || anchor.number < 1) {
        return "anchor.number is not a positive integer";
    }
    if (typeof anchor.headSha !== "string" || !ZGt.test(anchor.headSha)) {
        return "anchor.headSha is not 40 lowercase hex";
    }
    if (typeof anchor.publishedAt !== "string" || !sYr.test(anchor.publishedAt)) {
        return "anchor.publishedAt is not a UTC ISO-8601 timestamp";
    }
    return null;
}
function io(e) {
    if (e === null) {
        return null;
    }
    if (!L(e)) {
        return "live is neither null nor an object";
    }
    for (let s of Object.keys(e)){
        if (!no.has(s)) {
            return "live carries an unexpected key";
        }
    }
    if (typeof e.tool !== "string" || !e2t.test(e.tool)) {
        return "live.tool is not a tool identifier";
    }
    if (!L(e.input)) {
        return "live.input is not an object";
    }
    let n = Object.keys(e.input);
    if (n.length > 8) {
        return "live.input has too many keys";
    }
    for (let s of n){
        if (!_Ge.test(s)) {
            return "live.input has a non-identifier key";
        }
        let h = e.input[s];
        if (CZe.test(s) && typeof h !== "string") {
            return "live.input carries a non-string value under the method key — an operation selector is a word";
        }
        if (typeof h === "string") {
            if (!ovn.test(h)) {
                return "live.input carries a non-identifier string value";
            }
        } else if (typeof h === "number") {
            if (!Number.isSafeInteger(h)) {
                return "live.input carries a non-integer number";
            }
        } else {
            return "live.input carries a value that is not a string or integer";
        }
    }
    let e_shaPath = e.shaPath;
    if (!Array.isArray(e_shaPath) || e_shaPath.length === 0 || e_shaPath.length > 6) {
        return "live.shaPath is not a 1-6 element array";
    }
    for (let s of e_shaPath){
        if (typeof s !== "string" || !_Ge.test(s)) {
            return "live.shaPath carries a non-identifier segment";
        }
    }
    return null;
}
function so(e) {
    if (Object.keys(e).filter((s)=>s !== "anchor" && s !== "live").length > 0) {
        return "the prr-anchor island carries unexpected keys";
    }
    let r = ro(e.anchor);
    if (r) {
        return r;
    }
    return io(e.live === undefined ? null : e.live);
}
function R3o(e) {
    let n = e.match(/<script type="application\/json" id="prr-anchor">([^<]{2,65536})<\/script>/);
    if (!n) {
        return null;
    }
    let r;
    try {
        r = JSON.parse(n[1]);
    } catch  {
        return null;
    }
    if (!L(r) || !L(r.live)) {
        return null;
    }
    let tool = r.live.tool;
    if (typeof tool === "string" && e2t.test(tool)) {
        return tool;
    }
    return null;
}
const ger = "prr-decisions";
const iYr = "e99de2efe38c7297e10d0adb543ef448d719f1a5c5ed05e9563729cf1f0c1eea";
const svn = /^[a-z0-9-]{1,24}$/;
const yi = new Set([
    "id",
    "opts",
    "state",
    "choice"
]);
const ao = new Set([
    "open",
    "resolved",
    "acted"
]);
function oo(e) {
    if (Object.keys(e).length !== 1 || !Array.isArray(e.items)) {
        return "the decisions island is not {items: [...]}";
    }
    let e_items = e.items;
    if (e_items.length > 20) {
        return "the decisions island carries more than 20 items";
    }
    let s = new Set;
    for (let h of e_items){
        if (!L(h)) {
            return "a decisions item is not an object";
        }
        let b = Object.keys(h);
        if (b.length !== yi.size || b.some((v)=>!yi.has(v))) {
            return "a decisions item carries an unexpected or missing key";
        }
        if (typeof h.id !== "string" || !svn.test(h.id)) {
            return "a decisions item id is not a valid token";
        }
        if (s.has(h.id)) {
            return "decisions item ids are not unique";
        }
        s.add(h.id);
        if (typeof h.state !== "string" || !ao.has(h.state)) {
            return "a decisions item state is not open, resolved, or acted";
        }
        let y = h.opts;
        if (!Array.isArray(y) || y.length < 1 || y.length > 8) {
            return "a decisions item opts is not an array of 1 to 8 tokens";
        }
        for (let v of y){
            if (typeof v !== "string" || !svn.test(v)) {
                return "a decisions option is not a valid token";
            }
        }
        if (h.choice !== null) {
            if (typeof h.choice !== "string" || !svn.test(h.choice)) {
                return "a decisions choice is not null or a valid token";
            }
            if (!y.includes(h.choice)) {
                return "a decisions choice is not among its opts";
            }
        }
    }
    return null;
}
const Xbt = "prr-stamp";
const ivn = "a8b6abcc8650343e067901dc560ace5e9095b4ffd106118e718d7566566dfd22";
const lo = new Set([
    "tool",
    "input",
    "statePath"
]);
function co(stamp) {
    if (stamp === null) {
        return null;
    }
    if (!L(stamp)) {
        return "stamp is neither null nor an object";
    }
    for (let s of Object.keys(stamp)){
        if (!lo.has(s)) {
            return "stamp carries an unexpected key";
        }
    }
    if (typeof stamp.tool !== "string" || !e2t.test(stamp.tool)) {
        return "stamp.tool is not a tool identifier";
    }
    if (!L(stamp.input)) {
        return "stamp.input is not an object";
    }
    let n = Object.keys(stamp.input);
    if (n.length > 8) {
        return "stamp.input has too many keys";
    }
    for (let s of n){
        if (!_Ge.test(s)) {
            return "stamp.input has a non-identifier key";
        }
        let h = stamp.input[s];
        if (typeof h === "string") {
            if (!ovn.test(h)) {
                return "stamp.input carries a non-identifier string value";
            }
        } else if (typeof h === "number") {
            if (!Number.isSafeInteger(h)) {
                return "stamp.input carries a non-integer number";
            }
        } else {
            return "stamp.input carries a value that is not a string or integer";
        }
    }
    let e_statePath = stamp.statePath;
    if (!Array.isArray(e_statePath) || e_statePath.length === 0 || e_statePath.length > 6) {
        return "stamp.statePath is not a 1-6 element array";
    }
    for (let s of e_statePath){
        if (typeof s !== "string" || !_Ge.test(s)) {
            return "stamp.statePath carries a non-identifier segment";
        }
    }
    return null;
}
function uo(e) {
    if (Object.keys(e).length !== 1 || !("stamp" in e)) {
        return "the prr-stamp island is not {stamp: ...}";
    }
    return co(e.stamp);
}
const bGe = [
    {
        id: YGt,
        validate: so
    },
    {
        id: ger,
        validate: oo
    },
    {
        id: Xbt,
        validate: uo
    }
];
const t2t = [
    {
        label: "staleness",
        sha256: oYr
    },
    {
        label: "decisions",
        sha256: iYr
    },
    {
        label: "approve",
        sha256: ivn
    }
];
function fo(e) {
    return new RegExp(`<script type="application/json" id="${e}">([^<]*)</script>`, "g");
}
function po(e) {
    return new RegExp(`<script type="application/json" id="${e}"${ide}>`);
}
function Jn(e) {
    return new RegExp(`(?<!-)\\bid\\s*=\\s*["']?${e}`, "i");
}
function ho(e) {
    return new RegExp(`id\\s*=\\s*["']?${e}`, "i");
}
function go(e) {
    return e.replace(/&#(?:x0*([0-9a-f]{1,6})|0*(\d{1,7}));?/gi, (n, r, s)=>{
        let h = Number.parseInt(r ?? s, r !== undefined ? 16 : 10);
        if (h > 0 && h <= 1114111) {
            return String.fromCodePoint(h);
        }
        return n;
    });
}
function mo(e) {
    let n = yn;
    let r = new RegExp(`(?<!-)\\bid[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"([^"]{0,${n}})"|'([^']{0,${n}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${n}})(?=[\\t\\n\\f\\r >]|$)|([\\s\\S]))`, "gi");
    for(let s = r.exec(e); s !== null; s = r.exec(e)){
        if (s[4] !== undefined) {
            if (s[4] === ">") {
                continue;
            }
            return true;
        }
        let h = s[1] ?? s[2] ?? s[3] ?? "";
        if (!h.includes("&#")) {
            continue;
        }
        let b = go(h).toLowerCase();
        if (bGe.some((y)=>b.startsWith(y.id))) {
            return true;
        }
    }
    return false;
}
function _n(e, n, r, s) {
    let h = new RegExp(`(${n}[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*)(?:"([^"]{0,${yn}})"|'([^']{0,${yn}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${yn}})(?=[\\t\\n\\f\\r >]|$))?`, "gi");
    for(let b = h.exec(e); b !== null; b = h.exec(e)){
        let y = b[2] ?? b[3] ?? b[4];
        if (y === undefined) {
            let w = b.index + b[1].length;
            if (e[w] === ">") {
                h.lastIndex = w;
                continue;
            }
            return s;
        }
        let v = r(y);
        if (v !== null) {
            return v;
        }
        h.lastIndex = b.index + b[1].length;
    }
    return null;
}
function bo(e, inlineStyleAllowlist, r, s) {
    if (/<\/?script/i.test(e)) {
        return "a stray or unclosed <script fragment remains outside the registered blocks";
    }
    if (/\bon[a-z0-9_]+\s*=(?!>)/i.test(e)) {
        return "the body carries an on*= attribute pattern";
    }
    if (/javascript:/i.test(e.replace(/[\t\n\r]/g, ""))) {
        return "the body carries a javascript: URL";
    }
    if (/<(iframe|frame|frameset|embed|object|base|link|img|image|feimage|input|form|meta|video|audio|source|track|use|animate\w*|set|discard|applet|dialog|label)\b/i.test(e)) {
        return "the body carries an element that can reach the network, navigate, or execute";
    }
    if (/\bsrcdoc\s*=(?!>)/i.test(e)) {
        return "the body carries a srcdoc attribute";
    }
    if (/\bhttp-equiv\s*=(?!>)/i.test(e)) {
        return "the body carries an http-equiv attribute";
    }
    if (/\battributename\s*=\s*["']?on/i.test(e)) {
        return "the body carries an SMIL attributeName targeting an event handler";
    }
    if (/[\s/"'](?:srcset|poster|ping|formaction|background)\s*=(?!>)/i.test(e)) {
        return "the body carries a fetch-capable attribute";
    }
    if (/[\s/"']for\s*=(?!>)/i.test(e)) {
        return "the body carries a click-forwarding for attribute";
    }
    if (/[\s/"'](?:transform|pointer-events|overflow)\s*=(?!>)/i.test(e)) {
        return "the body carries an overlay-capable presentation attribute";
    }
    if (/<(template|textarea|noscript|xmp|plaintext|noembed|noframes|select|optgroup|option|math)\b/i.test(e)) {
        return "the body carries a content-inerting container";
    }
    let h = [
        ...e.matchAll(/<title(?=[\t\n\f\r >/]|$)|<\/title(?=[\t\n\f\r >/]|$)/gi)
    ].map((R)=>R[0][1] !== "/");
    if (h.length > 2 || h.length % 2 !== 0 || h.some((R, B)=>R !== (B % 2 === 0))) {
        return "the body carries a missing, extra, stray, or unclosed title element";
    }
    if (/[\s/"'](?:popover(?:target(?:action)?)?|commandfor|interest(?:for|target))\s*=(?!>)/i.test(e)) {
        return "the body carries a popover-family or invoker attribute";
    }
    let b = new Map;
    let y = /data-decision-id[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]{0,256})"|'([^']{0,256})'|([^\t\n\f\r >]{1,256}))/gi;
    for(let R = y.exec(e); R !== null; R = y.exec(e)){
        let B = R[1] ?? R[2] ?? R[3];
        b.set(B, (b.get(B) ?? 0) + 1);
        if (b.get(B) > 1) {
            return "a data-decision-id appears on more than one element";
        }
        y.lastIndex = R.index + 1;
    }
    if (e.includes("<![CDATA[")) {
        return "the body carries a CDATA section";
    }
    for(let R = e.indexOf("<!--"); R !== -1;){
        let B = e.slice(R + 4, R + 6);
        let V;
        if (B.startsWith(">")) {
            V = R + 5;
        } else if (B === "->") {
            V = R + 6;
        } else {
            let K = e.indexOf("-->", R + 4);
            let N = e.indexOf("--!>", R + 4);
            if (K === -1 && N === -1) {
                return "the body carries an unclosed comment";
            }
            V = K === -1 ? N + 4 : N === -1 ? K + 3 : Math.min(K + 3, N + 4);
        }
        R = e.indexOf("<!--", V);
    }
    if (/@import|url\(|image-set\(/i.test(e)) {
        return "the body carries a CSS network-reaching function";
    }
    if (/<style/i.test(e)) {
        return "a stylesheet other than the pinned template stylesheet";
    }
    let v = _n(e, "\\bclass", (R)=>{
        if (vi.test(R)) {
            return "a counterfeit element carries a script-addressed class";
        }
        return null;
    }, "a class attribute has no capturable value");
    if (v !== null) {
        return v;
    }
    let w = _n(e, "\\bstyle", (R)=>{
        if (inlineStyleAllowlist.includes(R)) {
            return null;
        }
        return "an inline style outside the template allowlist";
    }, "a style attribute has no capturable value");
    if (w !== null) {
        return w;
    }
    if (/[^\s"'<>=/]{257,}\s*=/.test(e)) {
        return "an attribute name exceeds the scan bound";
    }
    let S = _n(e, `(?<=[\\s"'</=]|^)[^\\s"'<>=/]{1,256}`, (R)=>{
        if (/\\|&(?!(?:amp|lt|gt|quot|#39);)[#a-zA-Z]/.test(R)) {
            return "an attribute value carries an escape or character reference outside the mandated set";
        }
        return null;
    }, "an attribute has no capturable value");
    if (S !== null) {
        return S;
    }
    let P = _n(e, "(?:src|href)", (R)=>{
        if (r.has(R) || s !== null && s.test(R)) {
            return null;
        }
        return "the body carries a src or href that is not the PR link";
    }, "a src or href attribute has no capturable value");
    if (P !== null) {
        return P;
    }
    return null;
}
const Si = 524288;
var yn = 2048;
function XEe(e, { parsedAsMarkup } = {
    parsedAsMarkup: true
}) {
    if (bGe.some((h)=>Jn(h.id).test(e)) || parsedAsMarkup && mo(e)) {
        return true;
    }
    if (e.length > Si) {
        return false;
    }
    let s = new Set(t2t.map((h)=>h.sha256));
    return XGt(e).some((h)=>s.has(at(mer(h))));
}
function xi(body, n, r = {}) {
    let s = r.crUrlRe ?? null;
    if (!XEe(body)) {
        return {
            applies: false
        };
    }
    if (body.length > Si) {
        return {
            applies: true,
            ok: false,
            reason: "the page is too large for a review page"
        };
    }
    let h = XGt(body);
    let b = new Map(t2t.map((O)=>[
            O.sha256,
            O
        ]));
    let y = (reason)=>({
            applies: true,
            ok: false,
            reason
        });
    let v = !Jn(Xbt).test(body);
    let w = !h.some((O)=>at(O) === ivn);
    let S = n.pinnedMarkup.find((O)=>O.label === "stamp-control");
    let P = S !== undefined && S.bytes !== "" && !body.includes(S.bytes);
    if (v && w && P) {
        return y("the page predates the approve control this CLI requires — it was published by a different version of this CLI, and a republish cannot reproduce it. Re-run /artifact-pr-review to publish a fresh review (decisions recorded on the old page stay visible there; the fresh page starts with its decisions open).");
    }
    let R = new Set;
    let B = null;
    let V = null;
    let K = null;
    for (let O of bGe){
        let fe = [
            ...body.matchAll(fo(O.id))
        ];
        if (Jn(O.id).test(body) && fe.length === 0) {
            if (po(O.id).test(body)) {
                return y(`the ${O.id} island carries the server's element id \u2014 this is the published page read back, not your local copy; republish from the HTML (or payload) you authored, never from bytes you read`);
            }
            return y(`the ${O.id} island is malformed or not a JSON script element`);
        }
        if (fe.length !== 1) {
            return y(`the page must carry exactly one ${O.id} island`);
        }
        let he = fe[0][1] ?? "";
        if (/[<>&'\\]/.test(he)) {
            return y(`the ${O.id} island carries a disallowed character`);
        }
        let ae;
        try {
            ae = X(he);
        } catch  {
            return y(`the ${O.id} island is not valid JSON`);
        }
        if (!L(ae)) {
            return y(`the ${O.id} island is not a JSON object`);
        }
        let Se = O.validate(ae);
        if (Se) {
            return y(Se);
        }
        if (_(ae) !== he) {
            return y(`the ${O.id} island is not in canonical JSON form`);
        }
        if (O.id === YGt) {
            B = ae.anchor;
            V = ae.live === undefined ? null : ae.live;
        }
        if (O.id === Xbt) {
            K = ae.stamp === undefined ? null : ae.stamp;
        }
        R.add(fe[0][0]);
    }
    if (K !== null && r.allowStampBinding !== true) {
        return y('approve-enabled review pages publish only through the composed lane — set the prr-stamp island to {"stamp":null}, or publish via /artifact-pr-review with a pr_review payload');
    }
    let N = new Map;
    for (let O of h){
        if (R.has(O)) {
            continue;
        }
        let fe = b.get(at(O));
        if (fe === undefined) {
            return y("a script block matches neither a registered island nor a pinned template script — the page must carry the template blocks byte-for-byte");
        }
        N.set(fe.label, (N.get(fe.label) ?? 0) + 1);
    }
    for (let O of t2t){
        if ((N.get(O.label) ?? 0) !== 1) {
            return y(`the page must carry exactly one pinned ${O.label} script`);
        }
    }
    for (let O of n.pinnedMarkup){
        if (O.bytes === "") {
            return y(`the ${O.label} template block could not be derived`);
        }
        let fe = body.indexOf(O.bytes);
        if (fe === -1 || body.indexOf(O.bytes, fe + O.bytes.length) !== -1) {
            return y(`the page must carry the template ${O.label} byte-for-byte exactly once`);
        }
    }
    let J = body;
    for (let O of [
        ...R,
        ...h.filter((fe)=>!R.has(fe)),
        ...n.pinnedMarkup.map((fe)=>fe.bytes)
    ]){
        J = J.replace(O, "");
    }
    for (let O of bGe){
        if (ho(O.id).test(J)) {
            return y(`an element other than the registered island carries the ${O.id} id`);
        }
    }
    let C = new Set(n.linkPlaceholders);
    if (B !== null) {
        C.add(Ybt(B.owner, B.repo, B.number));
    }
    let W = bo(J, n.inlineStyleAllowlist, C, B !== null && wi(B) && V === null && K === null ? s : null);
    if (W) {
        return y(W);
    }
    let Z = hn(body);
    if (r.allowMermaidFence === true) {
        Z.mermaid = false;
    }
    if (Object.values(Z).some(Boolean)) {
        return y(`the body would trigger a runtime script injection after validation (mermaid fence, language-tagged code, or chart marker)${Z.mermaid ? " — composed review pages with a diagram must republish through the composed lane, not as raw HTML" : ""}`);
    }
    return {
        applies: true,
        ok: true
    };
}
function Ei(e) {
    if (TGn(e.subarray(0, 4)) === "utf16le") {
        return "utf-16le";
    }
    return "utf-8";
}
function vn(e, n) {
    let r = e.slice(0, n);
    let s = 1;
    for(let y = r.indexOf(`
`); y !== -1; y = r.indexOf(`
`, y + 1)){
        s++;
    }
    let h = 1;
    for (let y of r.slice(r.lastIndexOf(`
`) + 1)){
        h++;
    }
    let b = 0;
    for(let y = e.indexOf("\uFFFD", n + 1); y !== -1; y = e.indexOf("\uFFFD", y + 1)){
        b++;
    }
    return `line ${s}, column ${h}${b > 0 ? ` (+${b} more)` : ""}`;
}
function _o(e, n, encoding) {
    let s = encoding === "utf-8";
    let h = s ? n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0 : 2;
    for(let b = 0; b < e.length;){
        let y = e.codePointAt(b) ?? 0;
        if (y === 65533) {
            if (!(s ? n[h] === 239 && n[h + 1] === 191 && n[h + 2] === 189 : n[h] === 253 && n[h + 1] === 255)) {
                return b;
            }
        }
        let v = y > 65535 ? 2 : 1;
        h += s ? y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4 : v * 2;
        b += v;
    }
    return -1;
}
function x3o(e) {
    return new TextDecoder(Ei(e)).decode(e);
}
function avn(e) {
    let encoding = Ei(e);
    try {
        let text = new TextDecoder(encoding, {
            fatal: true
        }).decode(e);
        let s = text.indexOf("\uFFFD");
        if (s === -1) {
            return {
                text
            };
        }
        return {
            problem: {
                kind: "replacement_char",
                encoding,
                where: vn(text, s)
            }
        };
    } catch  {
        let r = new TextDecoder(encoding).decode(e);
        let s = _o(r, e, encoding);
        return {
            problem: {
                kind: "undecodable",
                encoding,
                where: vn(r, s === -1 ? r.indexOf("\uFFFD") : s)
            }
        };
    }
}
async function ki(e, n, r) {
    let redeploy = r.slug !== undefined;
    let h = r.slug ?? randomUUID();
    if (!rr.test(h)) {
        return {
            url: null,
            slug: null,
            version: null,
            err: `not an artifact slug: ${h}`
        };
    }
    let url = `${vFe}${h}`;
    let y = Ge.join(e, h);
    let v = Ge.dirname(e);
    let w = await lstat(v).catch(()=>null);
    if (w === null || !w.isDirectory() || await realpath(v).catch(()=>null) !== v) {
        return {
            url: null,
            slug: null,
            version: null,
            err: "the stub publish directory is not inside a real directory"
        };
    }
    await Zn(e);
    await Zn(y);
    await Qbt(Ge.join(y, "index.html"), n);
    for (let [W, Z] of [
        [
            "thumbnail.img",
            r.thumbnail
        ],
        [
            "thumbnail_dark.img",
            r.thumbnailDark
        ]
    ]){
        if (Z !== undefined) {
            await Qbt(Ge.join(y, W), Z);
        } else {
            await rm(Ge.join(y, W), {
                recursive: true,
                force: true
            });
        }
    }
    let S = Ge.join(y, "files");
    await Zn(S);
    let P = await realpath(S);
    let notMaterialized = [];
    let B = (W)=>W === P || W.startsWith(P + Ge.sep);
    let V = async (path_1)=>{
        let Z = Ge.resolve(S, path_1);
        if (!Z.startsWith(S + Ge.sep)) {
            return null;
        }
        if (D8(Z, S + Ge.sep, UW)) {
            notMaterialized.push({
                path: path_1,
                reason: "names a git, IDE/toolchain, or shell configuration component"
            });
            return null;
        }
        for(let O = Ge.dirname(Z);; O = Ge.dirname(O)){
            try {
                if (B(await realpath(O))) {
                    return Z;
                }
                return null;
            } catch (error) {
                if (!z(error) || O === S) {
                    throw error;
                }
            }
        }
    };
    let K = async (W)=>{
        try {
            return B(await realpath(Ge.dirname(W)));
        } catch (error) {
            if (z(error)) {
                return "absent";
            }
            throw error;
        }
    };
    let removed = [];
    for (let W of r.removeFiles ?? []){
        try {
            let Z = await V(W);
            if (Z === null) {
                continue;
            }
            let O = await K(Z);
            if (O === false) {
                continue;
            }
            if (O === "absent") {
                removed.push(W);
                continue;
            }
            await unlink(Z).catch((fe)=>{
                if (!z(fe)) {
                    throw fe;
                }
            });
            removed.push(W);
        } catch (error) {
            t(`artifact stub: skipping removal of ${W}: ${error}`, {
                level: "warn"
            });
        }
    }
    let J = [];
    for (let W of r.files ?? []){
        try {
            let Z = await V(W.path);
            if (Z === null) {
                continue;
            }
            await mkdir(Ge.dirname(Z), {
                recursive: true
            });
            if (await K(Z) !== true) {
                continue;
            }
            await Qbt(Z, W.content);
        } catch (error) {
            t(`artifact stub: skipping supporting file ${W.path}: ${error}`, {
                level: "warn"
            });
            continue;
        }
        J.push({
            path: W.path,
            contentType: W.contentType,
            bytes: Buffer.byteLength(W.content)
        });
    }
    for (let W of notMaterialized){
        t(`artifact stub: not materializing ${W.path}: ${W.reason}`, {
            level: "warn"
        });
    }
    let C = {
        slug: h,
        url,
        redeploy,
        title: r.title,
        favicon: r.favicon,
        ...r.icon !== undefined && {
            icon: r.icon
        },
        ...r.label !== undefined && {
            label: r.label
        },
        ...r.note !== undefined && {
            note: r.note
        },
        ...r.description !== undefined && {
            description: r.description
        },
        files: J,
        ...removed.length > 0 && {
            removed
        },
        ...notMaterialized.length > 0 && {
            notMaterialized
        },
        ...(r.copiedFiles?.length ?? 0) > 0 && {
            copied: r.copiedFiles
        },
        ...r.capabilities !== undefined && {
            capabilities: r.capabilities
        },
        ...r.contract !== undefined && {
            contract: r.contract
        },
        ...r.thumbnail !== undefined && {
            thumbnail: {
                bytes: r.thumbnail.length
            }
        },
        ...r.thumbnailDark !== undefined && {
            thumbnailDark: {
                bytes: r.thumbnailDark.length
            }
        },
        publishedAtMs: Date.now()
    };
    await Qbt(Ge.join(y, "manifest.json"), _(C, null, 2));
    return {
        url,
        slug: h,
        version: "1",
        err: null
    };
}
async function Zn(e) {
    try {
        if (!(await lstat(e)).isDirectory()) {
            await rm(e, {
                force: true
            });
        }
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    await mkdir(e, {
        recursive: true
    });
}
async function Qbt(e, n) {
    await rm(e, {
        recursive: true,
        force: true
    });
    await writeFile(e, n, {
        flag: "wx"
    });
}
const Ti = 4096;
const P3o = /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u;
const rn = /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u;
const Pi = p(()=>T(u({
        path: o().regex(rn),
        doc: o().max(64).optional().catch(undefined),
        headSeq: E().int().nonnegative().optional().catch(undefined)
    })).max(Ti));
function ber(e) {
    if (e.docs !== undefined) {
        if (Pi().safeParse(e.docs).success) {
            return lvn(e);
        }
        return undefined;
    }
    if (e.files !== undefined) {
        return lvn(e);
    }
}
function lvn(e) {
    let n = e.docs === undefined ? undefined : Pi().safeParse(e.docs);
    if (n?.success && n.data.length > 0) {
        return n.data;
    }
    if (e.artifactKind !== Lk) {
        return [];
    }
    if (e.files !== undefined && !So(e)) {
        return [];
    }
    return [
        {
            path,
            ...typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0 && {
                headSeq: e.headSeq
            }
        }
    ];
}
function So(e) {
    return typeof e.headSubscriptionToken === "string" && e.headSubscriptionToken !== "" || typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0;
}
const xo = p(()=>T(u({
        path: o().regex(rn),
        sha256: o().regex(/^[0-9a-f]{64}$/).optional().catch(undefined),
        contentType: o().max(255).optional().catch(undefined),
        doc: o().max(64).optional().catch(undefined)
    })).max(Ti));
function I3o(e) {
    if (e.files === undefined) {
        return;
    }
    let n = xo().safeParse(e.files);
    if (!n.success) {
        return;
    }
    let r = new Set(lvn(e).map((h)=>h.path));
    let s = new Map;
    for (let h of n.data){
        s.set(h.path, {
            ...h.sha256 !== undefined && {
                sha256: h.sha256
            },
            ...h.contentType !== undefined && {
                contentType: h.contentType
            },
            live: h.doc !== undefined && h.doc !== "" || r.has(h.path)
        });
    }
    return s;
}
function bf() {
    let e = ee();
    if (e.toolsetLatch === null) {
        e.toolsetLatch = a.CLAUDE_CODE_ARTIFACT_TOOLSET ?? k("tengu_cobalt_plinth_damson", false) === true;
        i("tengu_artifact_toolset", {
            on: e.toolsetLatch
        });
    }
    return e.toolsetLatch;
}
function O3o() {
    if (bf()) {
        return Dy;
    }
    return gn;
}
function r2t() {
    if (bf()) {
        return `the ${Dy} tool (load it with ${Sl}, query \`select:${Dy}\`, if it is not loaded)`;
    }
    return `the ${gn} tool`;
}
function QG(e) {
    return `${Dy} tool, action "${e === "comments" ? "read" : e}"`;
}
function Wl(e, n) {
    if (bf()) {
        return n();
    }
    return e;
}
function M3o(name, input) {
    if (bf()) {
        return {
            name: Dy,
            input: HZe("comments", input)
        };
    }
    return {
        name,
        input
    };
}
const dYr = [
    "editor",
    "commenter",
    "reader",
    "viewer"
];
function cvn(e) {
    switch(e){
        case "editor":
            return "can edit";
        case "commenter":
            return "can comment";
        default:
            return "can view";
    }
}
const Eo = 1048576;
const Ao = 50;
const Ci = 5000;
const Ro = p(()=>bt({
        frames: ir(nd()).nullable()
    }));
const ko = p(()=>bt({
        slug: me().regex(rr),
        title: me().max(4000).optional(),
        role: Vc(dYr).optional().catch(undefined)
    }));
async function Ser(e) {
    let n = (v, status)=>{
        if (!e.signal?.aborted) {
            f("artifact_list_external", v, {
                ...status !== undefined && {
                    status
                }
            });
        }
        return {
            listed: false
        };
    };
    let r = zs(e.signal, {
        timeoutMs: Ci
    });
    let s;
    try {
        s = await md.getRelayBound("/api/frame/frames/external", {
            refreshOAuth: true,
            credentials: e.credentials,
            headers: Bd(),
            timeout: Ci,
            maxContentLength: Eo,
            signal: r.signal
        });
    } catch  {
        return n("request_error");
    } finally{
        r.cleanup();
    }
    if (!s.ok) {
        return n(s.reason === "relay-unavailable" || s.reason === "relay-not-served" ? "unsent" : "not_ok", "status" in s ? s.status : undefined);
    }
    if (!s.fromFrame) {
        return n("relay_error", s.status);
    }
    if (s.status < 200 || s.status >= 300) {
        return n("refused", s.status);
    }
    let h = Ro().safeParse(s.data);
    if (!h.success) {
        return n("malformed_body");
    }
    let b = [];
    let y = h.data.frames ?? [];
    for (let v of y){
        let w = ko().safeParse(v);
        if (!w.success) {
            continue;
        }
        b.push({
            slug: w.data.slug,
            ...w.data.title !== undefined && {
                title: w.data.title
            },
            ...w.data.role !== undefined && {
                role: w.data.role
            }
        });
    }
    g("artifact_list_external", {
        rows: b.length
    });
    return {
        listed: true,
        rows: b,
        mayHaveMore: y.length >= Ao || b.length < y.length
    };
}
function GX(e, n) {
    let err_code = Zse($m(e)?.code) ?? Ym(e);
    return {
        transport: fZ(e),
        ...err_code !== undefined && {
            err_code
        },
        elapsed_ms: Math.round(performance.now() - n)
    };
}
const $i = null;
const Sf = 16777216;
const relayProbe = "/api/frame/contract/latest";
function UU() {
    return k("tengu_cobalt_plinth_fern", true);
}
function RZe() {
    return k("tengu_cobalt_plinth_moss", true);
}
const $o = 2000;
function uYr() {
    return $o;
}
function $Me() {
    let e = k("tengu_cobalt_plinth_sill", null);
    if (typeof e === "number" && Number.isFinite(e) && e >= 0) {
        return Math.min(Math.floor(e), GV);
    }
    return qbo;
}
function iM() {
    return a.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? k("tengu_cobalt_plinth_bracken", false);
}
function FMe() {
    return k("tengu_cobalt_plinth_samphire", false);
}
function pYr() {
    return k("tengu_tidy_widget", true);
}
function fYr() {
    return k("tengu_cobalt_plinth_tansy", false);
}
function mYr() {
    return k("tengu_cobalt_plinth_mallow", false);
}
function Sae() {
    return k("tengu_slate_lantern", false);
}
function wae() {
    return k("tengu_slate_lantern_ember", false);
}
function Zbt() {
    return a.CLAUDE_CODE_ARTIFACT_HOT ?? k("tengu_copper_hinge_wren", false);
}
function Oo() {
    return ee().frozenHotUpdate ?? Zbt();
}
function t3() {
    return k("tengu_cobalt_plinth_campion", false) === true;
}
const No = p(()=>u({
        version: o().regex(eY),
        capabilities: T(o().regex(EV)).max(256),
        claude: M().optional().catch(undefined),
        core: T(o().regex(EV)).max(256).optional().catch(undefined),
        features: ue(o().regex(EV), ue(o().regex(EV), Ue([
            ue(o(), oe()),
            A(true).transform(()=>({}))
        ]))).optional().catch(undefined)
    }));
const Io = "/api/frame/contract/latest";
const Fo = 262144;
const Mo = 65536;
const timeoutMs = 5000;
const Do = "x-contract-missing-caps";
const Bo = 16384;
async function Er(e, n, r) {
    let s;
    try {
        s = await md.get(e, {
            refreshOAuth: true,
            ...n.recoverOAuth401 && {
                recoverOAuth401: true,
                storageV5: n.storageV5
            },
            headers: Bd(),
            maxContentLength: Bo,
            ...r,
            ...n.timeoutMs !== undefined && {
                timeout: n.timeoutMs
            },
            ...n.signal && {
                signal: n.signal
            },
            credentials: n.credentials
        });
    } catch (error) {
        return {
            err: l(error),
            cause: "transport"
        };
    }
    if (!s.ok) {
        return {
            err: `unavailable: ${s.reason}`,
            cause: s.reason === "no-auth" ? "no_auth" : "client_policy"
        };
    }
    if (!s.fromFrame) {
        return {
            err: `relay HTTP ${s.status}`,
            cause: "relay",
            status: s.status
        };
    }
    if (s.status < 200 || s.status >= 300) {
        return {
            err: `HTTP ${s.status}`,
            cause: s.status === 404 ? "http_404" : s.status >= 500 ? "http_5xx" : "http_4xx",
            status: s.status
        };
    }
    let missingCapsHeader = s.response?.headers?.[Do];
    return {
        body: s.data,
        ...typeof missingCapsHeader === "string" && {
            missingCapsHeader
        }
    };
}
async function Ete(e) {
    if (e.version !== undefined && !eY.test(e.version)) {
        return {
            err: "invalid contract version",
            cause: "malformed"
        };
    }
    let n = await Er(e.version !== undefined ? `/api/frame/contract/${e.version}` : Io, e);
    if ("err" in n) {
        return n;
    }
    let r = No().safeParse(n.body);
    if (!r.success) {
        return {
            err: "malformed contract response",
            cause: "malformed"
        };
    }
    return r.data;
}
async function gYr(e, n, r) {
    if (!eY.test(e) || !EV.test(n)) {
        return {
            err: "invalid contract version or capability name",
            cause: "malformed"
        };
    }
    let s = await Er(`/api/frame/contract/${e}/${n}.d.ts`, r, {
        responseType: "text",
        maxContentLength: Fo
    });
    if ("err" in s) {
        return s;
    }
    if (typeof s.body !== "string" || s.body.trim() === "") {
        return {
            err: "empty or non-text defs body",
            cause: "malformed"
        };
    }
    return {
        dts: s.body
    };
}
async function hYr(e, n) {
    if (!eY.test(e)) {
        return {
            err: "invalid contract version",
            cause: "malformed"
        };
    }
    let r = await Er(`/api/frame/contract/${e}/prompt`, n, {
        responseType: "text",
        maxContentLength: Mo
    });
    if ("err" in r) {
        return r;
    }
    if (typeof r.body !== "string" || r.body.trim() === "") {
        return {
            err: "empty or non-text prompt body",
            cause: "malformed"
        };
    }
    let missingCaps = r.missingCapsHeader === undefined ? [] : r.missingCapsHeader.slice(0, 4096).split(",").map((h)=>h.trim()).filter((h)=>EV.test(h));
    return {
        promptMd: r.body,
        missingCaps
    };
}
function vae(e) {
    let n = dp();
    let hasInteractiveUI = !e.isNonInteractiveSession || n === "claude-vscode" || ou();
    let publishContext = e.agentType === "teammate" || Oc() ? "teammate" : e.agentId !== undefined ? "subagent" : Nt() ? "bg_session" : n === "sdk-ts" || n === "sdk-py" ? "sdk" : hasInteractiveUI ? "interactive" : "print";
    return {
        hasInteractiveUI,
        publishContext
    };
}
function Age(e) {
    return (n)=>{
        let r = e();
        return {
            ver: r.artifactReadVersions?.[n],
            observers: r.artifactReadObservers?.[n]
        };
    };
}
function BU(e, n, r) {
    return `${e ?? "main"}
${n ?? ""}` + (r === undefined ? "" : `
${r}`);
}
const Oi = {
    page_data: 0,
    summary: 1,
    source: 2
};
function o2t(e, n, r, s) {
    let h = ee().readDeliveries.get(Z$(e, n));
    if (h !== undefined && s !== undefined && s !== "" && h.ver === r && h.batch === s && h.kind !== "source") {
        return h.kind;
    }
}
function Eae(e, n, r) {
    let s = ee().readDeliveries.get(Z$(e, n));
    return s !== undefined && s.ver === r && !s.sourced;
}
const Xi = "\x00own-mint";
function UMe(e) {
    return `${e ?? "main"}
${Xi}`;
}
function s2t(e, n) {
    return e.ver === n && e.observers !== undefined && Object.values(e.observers).includes("");
}
function VX(e, n) {
    return Ji({
        ver: e.artifactReadVersions?.[n],
        observers: e.artifactReadObservers?.[n]
    });
}
function Ji(e) {
    if (tst(e.observers)) {
        return e.ver;
    }
}
function yYr(e, n) {
    return ()=>Ji(e(n));
}
function _Yr(e) {
    return (n, ver_1, s)=>{
        if (ver_1 !== undefined && !AF.test(ver_1)) {
            return;
        }
        let h = s?.indexOf(`
`) ?? -1;
        let b = s === undefined ? undefined : s.slice(0, h);
        let y = s === undefined ? "" : s.slice(h + 1);
        let v = y.indexOf(`
`);
        let w = v < 0 ? y : y.slice(0, v);
        let S = y.slice(v + 1);
        let P = v < 0 ? undefined : S === "summary" || S === "page_data" ? S : undefined;
        let R = w === Xi;
        let batch = R ? "" : w;
        if (b !== undefined) {
            let V = ee().readDeliveries;
            let K = Z$(b, n);
            let N = V.get(K);
            let kind = P ?? "source";
            let sourced = kind === "source" || N !== undefined && N.ver === ver_1 && N.sourced;
            if (ver_1 === undefined) {
                V.delete(K);
            } else if (N === undefined || N.ver !== ver_1 || N.batch !== batch || Oi[kind] > Oi[N.kind]) {
                V.set(K, {
                    ver: ver_1,
                    batch,
                    kind,
                    sourced
                });
            }
        }
        if (b !== undefined && !R) {
            let V = ee().refusedPublishBodies.get(Z$(b, n));
            if (V !== undefined && V.observedFrom === undefined && (batch === "" || batch !== V.batch)) {
                V.observedFrom = batch;
            }
            if (V?.sourceless !== undefined && !P && ver_1 !== undefined && (V.live === undefined || ver_1 === V.live || (cL(ver_1, V.live) ?? -1) > 0)) {
                delete V.sourceless;
                V.live ??= ver_1;
            }
        }
        if (b !== undefined && ver_1 !== undefined) {
            let V = ee().refusedPublishBodies.get(Z$(b, n));
            if (V?.withheld) {
                delete V.withheld;
            }
        }
        e((V)=>{
            let K = V.artifactReadVersions?.[n];
            let N = V.artifactReadObservers?.[n];
            let J = ver_1 === undefined || b === undefined ? undefined : ver_1 === K ? N === undefined || Object.hasOwn(N, b) ? N : {
                ...N,
                [b]: batch
            } : {
                [b]: batch
            };
            if (K === ver_1 && N === J) {
                return V;
            }
            let { [n]: C, ...rest } = V.artifactReadVersions ?? {};
            let { [n]: Z, ...rest_1 } = V.artifactReadObservers ?? {};
            return {
                ...V,
                artifactReadVersions: ver_1 === undefined ? rest : {
                    ...rest,
                    [n]: ver_1
                },
                artifactReadObservers: J === undefined ? rest_1 : {
                    ...rest_1,
                    [n]: J
                }
            };
        });
    };
}
function dvn(e, n, r, s) {
    let h = e?.[n];
    if (h === undefined) {
        return {
            observed: true,
            siblingInFlight: false
        };
    }
    let b = r ?? "main";
    let y = Object.hasOwn(h, b) ? h[b] : undefined;
    let siblingInFlight = y !== undefined && y !== "" && y === s;
    return {
        observed: y !== undefined && !siblingInFlight,
        siblingInFlight
    };
}
function bYr(e) {
    return (n, r, s)=>e((h)=>{
            let b = KL(r);
            let y = h.artifactRefs ?? [];
            let v = y.find((S)=>S.slug === n);
            let pin = b ?? v?.pin;
            if (s?.cachePinOnly) {
                if (v !== undefined) {
                    if (v.pin === pin) {
                        return h;
                    }
                    return {
                        ...h,
                        artifactRefs: y.map((S)=>{
                            if (S.slug === n) {
                                return {
                                    slug: n,
                                    ...pin !== undefined && {
                                        pin
                                    }
                                };
                            }
                            return S;
                        })
                    };
                }
                if (pin === undefined) {
                    return h;
                }
                if (y.length === 0) {
                    return h;
                }
                return {
                    ...h,
                    artifactRefs: [
                        ...y,
                        {
                            slug: n,
                            pin
                        }
                    ]
                };
            }
            if (y[0]?.slug === n && y[0].pin === pin) {
                return h;
            }
            return {
                ...h,
                artifactRefs: [
                    {
                        slug: n,
                        ...pin !== undefined && {
                            pin
                        }
                    },
                    ...y.filter((S)=>S.slug !== n)
                ]
            };
        });
}
function SYr(e) {
    return ()=>{
        let n = e().artifactRefs ?? [];
        let r = {};
        for (let s of n){
            if (s.pin !== undefined) {
                r[s.slug] = s.pin;
            }
        }
        return {
            targetSlug: n[0]?.slug,
            pins: r
        };
    };
}
const Zi = "body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>";
const jo = `<style>:root{color-scheme:light}${Zi}`;
const Ho = `<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}${Zi}`;
const i2t = 256;
const zo = p(()=>u({
        contract: o().max(64),
        capabilities: ue(o().max(64), oe()).nullish(),
        type: oe().optional()
    }));
const Uo = p(()=>_t({
        slug: o().regex(rr),
        target: o().max(64).nullish(),
        current: o().max(64),
        latest: oe().optional(),
        blocked: oe().optional()
    }));
const Vo = p(()=>o().min(1).max(64));
const Wo = p(()=>_t({
        to: o().min(1).max(64).optional().catch(undefined),
        reason: o().max(64).catch(""),
        conflict_count: E().int().min(0).max(1000000).optional().catch(undefined),
        paths: T(o().max(eSt)).max(a2t).optional().catch(undefined)
    }));
var eSt = 1024;
var a2t = 4096;
const Qi = p(()=>_t({
        manifest: ue(o().max(eSt), _t({
            src: _t({}).nullish(),
            doc: o().max(64).nullish().catch(undefined)
        })).refine((e)=>Object.keys(e).length <= a2t)
    }));
function tSt(e) {
    let n = Qi().safeParse(e);
    if (!n.success) {
        return;
    }
    let r = [];
    let s = [];
    for (let [h, b] of Object.entries(n.data.manifest)){
        (b.src != null ? s : r).push(h);
    }
    return {
        own: r.sort(),
        type: s.sort()
    };
}
function xZe(e) {
    if (e == null) {
        return;
    }
    let n = Uo().safeParse(e);
    if (!n.success) {
        return;
    }
    let r = Vo().safeParse(n.data.latest);
    let blocked = n.data.blocked;
    let h = Wo().safeParse(blocked);
    return {
        slug: n.data.slug,
        target: n.data.target ?? null,
        current: n.data.current,
        ...r.success && {
            latest: r.data
        },
        ...h.success ? {
            blocked: {
                ...h.data.to !== undefined && {
                    to: h.data.to
                },
                reason: h.data.reason,
                ...h.data.conflict_count !== undefined && {
                    conflictCount: h.data.conflict_count
                },
                ...h.data.paths !== undefined && {
                    paths: h.data.paths
                }
            }
        } : blocked != null && {
            blocked: {
                reason: ""
            }
        }
    };
}
function xn(e) {
    if (e.status !== undefined) {
        return {
            readback_status: e.status
        };
    }
    if (e.relayStatus !== undefined) {
        return {
            readback_relay_status: e.relayStatus
        };
    }
    if (e.unsent) {
        return {
            readback_unsent: true
        };
    }
    return e.request;
}
function ar(e) {
    return e.request?.transport === true || e.status !== undefined && e.status >= 500 || e.relayStatus !== undefined && e.relayStatus >= 500;
}
const or = 500;
function Yo(capabilities) {
    let n = capabilities?.mcp?.servers;
    return Array.isArray(n) && n.some((r)=>typeof r?.server === "string" && oYe(r.server) !== undefined);
}
function es(e) {
    return {
        ...e.slug && {
            slug: e.slug
        },
        title: e.title,
        ...e.favicon && {
            favicon: e.favicon
        },
        ...e.icon && {
            icon: e.icon
        },
        ...e.label && {
            label: e.label
        },
        ...e.note && {
            note: e.note
        },
        ...e.description && {
            description: e.description
        },
        ...e.publishContext && {
            publish_context: e.publishContext
        },
        ...false,
        ...e.template && {
            template: e.template
        },
        ...e.autoEditAttribution && {
            auto_edit_attribution: {
                thread_id: e.autoEditAttribution.threadId,
                comment_id: e.autoEditAttribution.commentId
            }
        },
        ...t3() && e.thumbnail && {
            thumbnail: e.thumbnail.toString("base64")
        },
        ...t3() && e.thumbnailDark && {
            thumbnail_dark: e.thumbnailDark.toString("base64")
        },
        ...Ar(e) && {
            deadline: e.deadline
        },
        ...f_e(e.requestId)
    };
}
function Ar(e) {
    return Oo() && e.deadline !== undefined && e.slug !== undefined;
}
async function Go(e) {
    let { capabilities, echoPin, explicitPin, upgrade, pageBytes, credentials } = e;
    let v = (caps, R, B)=>{
        let V = uys(caps, R);
        if (V.length === 0) {
            return null;
        }
        m("artifact_publish", "unknown_capability", {
            page_bytes: pageBytes,
            unknown_count: V.length
        });
        let K = QI(V, 8, Cg).join(", ");
        let N = R.capabilities.join(", ");
        let J = B === null ? undefined : per()?.roster;
        let C = B !== null && J !== undefined && dys(J.version, R.version) && V.every((W)=>J.capabilities.includes(W)) ? ` ${K} ${V.length === 1 ? "exists" : "exist"} in contract ${J.version}; this publish is pinned to ${R.version} by ` + (B === "passed" ? "the `contract` you passed." : "the artifact's stored contract.") : "";
        return `unknown ${I(V.length, "capability", "capabilities")}: ${K} \u2014 contract ${R.version} supports: ${N || "(none)"}.${C} Fix or drop the declaration; the control plane would reject it anyway.`;
    };
    let w = (capabilities, R, contract, V)=>{
        let K = fys(capabilities, R);
        if ("errMsg" in K) {
            m("artifact_publish", "dual_spelling_ambiguous", {
                page_bytes: pageBytes
            });
            return K;
        }
        let errMsg = v(K.caps, R, V);
        if (errMsg !== null) {
            return {
                errMsg
            };
        }
        return {
            fields: {
                contract,
                capabilities: K.caps
            }
        };
    };
    let S = async (P)=>{
        let R = ee();
        let R_accountEpoch = R.accountEpoch;
        let V = await Ete({
            credentials
        });
        if ("err" in V) {
            m("artifact_publish", "contract_fetch_failed", {
                page_bytes: pageBytes,
                cause: d(V.cause)
            });
            return {
                errMsg: `couldn't fetch the capability contract (${V.err}) \u2014 ${P}`
            };
        }
        Tge({
            session: R,
            epoch: R_accountEpoch,
            roster: V,
            storageV5: undefined
        });
        return V;
    };
    if (explicitPin !== null) {
        if (capabilities !== undefined) {
            let P = await Ete({
                version: explicitPin,
                credentials
            });
            if (!("err" in P)) {
                return w(capabilities, P, explicitPin, "passed");
            }
        }
        return {
            fields: {
                contract: explicitPin,
                ...capabilities !== undefined && {
                    capabilities: spo(capabilities)
                }
            }
        };
    }
    if (capabilities !== undefined && echoPin !== null) {
        let P = await Ete({
            version: echoPin,
            credentials
        });
        if ("err" in P) {
            return {
                fields: {
                    contract: echoPin,
                    capabilities: spo(capabilities)
                }
            };
        }
        return w(capabilities, P, echoPin, "stored");
    }
    if (capabilities !== undefined) {
        let P = e.latestFetchRemedy ?? (Object.keys(capabilities).length === 0 ? "clearing a stored declaration also needs the current " + "contract. Retry when the contract service is reachable — " + "until the clear lands, the stored grants stay live." : "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged).");
        let R = await S(P);
        if ("errMsg" in R) {
            return R;
        }
        return w(capabilities, R, R.version, null);
    }
    if (echoPin !== null) {
        return {
            fields: {
                contract: echoPin
            }
        };
    }
    if (upgrade) {
        let P = await S("an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.");
        if ("errMsg" in P) {
            return P;
        }
        return {
            fields: {
                contract: P.version
            }
        };
    }
    return {
        fields: {}
    };
}
const l2t = 8192;
const BMe = 300000;
const Ni = 'window.__FRAME_PREAMBLE={"v":1';
function wer(e) {
    return e.startsWith(Ni) && ",}".includes(e[Ni.length] ?? " ");
}
const qo = new RegExp(`^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${ide})?[\\t\\n\\f\\r ]*\\/?>`);
const Ko = new RegExp(`<base\\s+href="\\/_f\\/[^">]*"(?:${ide})?\\s*\\/?>\\n?`, "gi");
function Ii(e) {
    let n = N5(e);
    let r = n.match(qo);
    if (r) {
        n = N5(n.slice(r[0].length));
    } else if (!n.length) {
        return false;
    }
    let s = r !== null;
    while(n.length){
        if (!/^<script(?=[\t\n\f\r />])/.test(n)) {
            return false;
        }
        let h = V_e(n, 7);
        if (h < 0) {
            return false;
        }
        let b = n.slice(h);
        if (!s && (rNn(n, 0) !== h || !wer(b))) {
            return false;
        }
        s = true;
        let y = euo(b);
        if (y < 0) {
            return false;
        }
        n = N5(b.slice(y));
    }
    return true;
}
function ts(e) {
    let n = N5(e);
    if (n.startsWith("<head>") && n.endsWith("</head>")) {
        return Ii(n.slice(6, -7));
    }
    return Ii(n);
}
function c2t(e, n = ()=>true) {
    let r = 4;
    let s = e.indexOf(sde);
    while(s >= 0 && s < l2t && r > 0){
        let h = s + sde.length;
        let b = e.subarray(0, s + BMe + G_e.length).indexOf(G_e, h);
        if (b >= 0 && ts(e.toString("utf8", h, b))) {
            let y = Buffer.concat([
                e.subarray(0, s),
                e.subarray(b + G_e.length)
            ]);
            if (n(y)) {
                return y;
            }
            r--;
        }
        s = e.indexOf(sde, h);
    }
}
const Xo = /^<body(?=[\t\n\f\r />])/i;
const Fi = /^<base(?=[\t\n\f\r />])/i;
const Jo = /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;
function ln(e, n, r) {
    let s = /[\t\n\f\r />]/g;
    let h = r;
    while(true){
        h = e.indexOf("<", h);
        if (h < 0) {
            return -1;
        }
        if (e.startsWith("<!--", h)) {
            let y = -1;
            if (e.startsWith(">", h + 4)) {
                y = h + 5;
            } else if (e.startsWith("->", h + 4)) {
                y = h + 6;
            } else {
                for(let v = e.indexOf("--", h + 4); v >= 0;){
                    if (e.startsWith(">", v + 2)) {
                        y = v + 3;
                    } else if (e.startsWith("!>", v + 2)) {
                        y = v + 4;
                    } else {
                        v = e.indexOf("--", v + 1);
                        continue;
                    }
                    break;
                }
            }
            if (y < 0) {
                return -1;
            }
            h = y;
            continue;
        }
        let b = Jo.exec(e.slice(h, h + 11));
        if (b) {
            let y = b[1].toLowerCase();
            let v = y === "plaintext" ? -1 : V_e(e, h + 1 + y.length);
            let w = new RegExp(`</${y}(?=[\\t\\n\\f\\r />])`, "gi");
            w.lastIndex = Math.max(v, 0);
            let S = v < 0 ? null : w.exec(e);
            let P = S === null ? -1 : V_e(e, S.index + S[0].length);
            if (P < 0 || y === "script" && Wyr(e.slice(v, S.index))) {
                return -1;
            }
            h = P;
        } else if (n.test(e.slice(h, h + 8))) {
            return h;
        } else if (/^<\/?[a-zA-Z]/.test(e.slice(h, h + 3))) {
            s.lastIndex = h + 2;
            let y = s.exec(e);
            h = y === null ? -1 : V_e(e, y.index);
            if (h < 0) {
                return -1;
            }
        } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(h, h + 3))) {
            h = e.indexOf(">", h + 2);
            if (h < 0) {
                return -1;
            }
            h++;
        } else {
            h++;
        }
    }
}
function d2t(e) {
    return as(e, os, is(Zo, "blocks"));
}
var Zo = 64;
const Qo = 96;
const ns = 64;
function is(cap, exhausted) {
    return {
        spent: 0,
        cap,
        exhausted
    };
}
function ss(e) {
    if (e.spent === e.cap) {
        throw new kte(e.exhausted, e.spent);
    }
    e.spent++;
}
class kte extends He {
    passes;
    constructor(e = "blocks", n){
        super(tl[e], el[e]);
        this.passes = n;
    }
}
var el = {
    blocks: "strip_unsettled",
    author: "strip_unsettled",
    levels: "nested_repair_depth_cap"
};
var tl = {
    blocks: "This page carries `<!-- frame-runtime -->` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another — nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
    author: 'This page carries runtime-marker comment blocks (`<!-- frame-runtime -->…<!-- /frame-runtime -->`, `<!-- chart-runtime -->…<!-- /chart-runtime -->`, `<!--claude-mermaid-runtime-begin…`, `<!--claude-hljs-runtime-begin…`), `data-frame-runtime` attributes, `<base href="/_f/…">` tags, or repeated artifact skeletons (`<!doctype html><html><head>…` wrapped around the page again and again) nested so that removing one keeps exposing another — nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
    levels: `This page is a published artifact page wrapped inside more than ${ns} nested copies of the artifact skeleton (\`<!doctype html><html><head><!-- frame-runtime -->\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`
};
function as(e, n, r) {
    while(true){
        ss(r);
        let s = n(e);
        if (s === e) {
            return s;
        }
        e = s;
    }
}
function os(e) {
    let n = [];
    let r = 0;
    let s = ln(e, Xo, 0);
    let h = s < 0 ? Infinity : s;
    let b = e.indexOf(sde);
    let y = -1;
    while(b >= 0 && b < h && b - r < l2t){
        let v = b + sde.length;
        if (y < v) {
            y = e.indexOf(G_e, v);
            if (y < 0) {
                break;
            }
        }
        let w = e.indexOf(sde, v);
        if ((w < 0 || w > y) && y - b < BMe && ts(e.slice(v, y))) {
            let S = y + G_e.length;
            if (e[S] === `
`) {
                S++;
            }
            n.push([
                b,
                S
            ]);
            r += S - b;
        }
        b = w;
    }
    e = nl(tNn(e, n));
    e = rl(e);
    return e.replace(Ko, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "");
}
function wGe(e) {
    return ls(e).body;
}
function ls(e) {
    let n = (v)=>ei(os(v));
    let r = is(Qo, "author");
    let s = (v)=>as(v, n, r);
    let h = s(e);
    let b = ys(h);
    if (b === null) {
        return {
            body: h,
            unwrapped: false,
            passes: r.spent
        };
    }
    let y = Fl(b.body, b.lang, b.cover, s, r);
    return {
        body: y.body,
        passes: r.spent,
        lang: y.lang,
        cover: y.cover,
        unwrapped: true,
        ...y.outcome && {
            repair: y.outcome
        },
        ...b.hoistedCommentsDropped && {
            hoistedCommentsDropped: true
        }
    };
}
function wYr(e) {
    let n;
    try {
        n = d2t(e);
    } catch (error) {
        if (error instanceof kte) {
            return false;
        }
        throw error;
    }
    let r = ys(n);
    return r !== null && vs(r.body);
}
const cs = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
function Rr(e) {
    return e.length <= 35 && cs.test(e);
}
async function uvn(e) {
    if (!e.includes(mn) || Buffer.byteLength(e, "utf8") > Sf || XEe(e)) {
        return e;
    }
    return fi(e);
}
async function pvn(e, { injectDiagramRuntime, injectHighlightRuntime, composedPrReview, previewOnly, expectRoundTrippedPage, docBlockIds } = {}) {
    let w = ls(e);
    let { body, lang, cover } = w;
    let unnested;
    switch(w.repair){
        case "repaired":
        case "partial":
            unnested = w.repair;
            break;
        case "miss":
            f("artifact_publish", "nested_repair_miss");
            break;
        case undefined:
            break;
    }
    if (!w.unwrapped && expectRoundTrippedPage === true) {
        f("artifact_publish", "round_trip_unwrap_miss");
    }
    if (rhs(body)) {
        f("artifact_publish", "runtime_sentinel_residual");
    }
    let blockIdBytes = 0;
    if (docBlockIds !== false) {
        let ae = await uvn(body);
        if (ae !== body) {
            blockIdBytes = Math.max(0, Buffer.byteLength(ae, "utf8") - Buffer.byteLength(body, "utf8"));
            body = ae;
        }
    }
    let crUrlRe = null;
    let N = xi(body, await Kbt(), {
        crUrlRe,
        allowMermaidFence: composedPrReview === true || previewOnly === true,
        allowStampBinding: composedPrReview === true || previewOnly === true
    });
    if (N.applies && !N.ok) {
        if (previewOnly !== true) {
            m("artifact_publish", "pr_review_template_mismatch");
        }
        throw new He(`This page carries the artifact-pr-review machinery but failed publish-time validation: ${N.reason}. Carry the template blocks byte-for-byte and keep the rest of the page within the skill's contract \u2014 no script fragments or event handlers, no elements or attributes that fetch or navigate, no CSS network functions, and no src/href other than the PR's canonical GitHub URL \u2014 then retry.`, "pr_review_template_mismatch");
    }
    let J = hn(body);
    let C = J.chart && Jr();
    let W = injectDiagramRuntime === true && J.mermaid;
    let Z = injectHighlightRuntime === true && J.highlight;
    let O = "";
    if (C) {
        let ae = await zn();
        if (ae !== null) {
            O += ae;
        }
    }
    let mermaidInjected = false;
    if (W) {
        let ae = nvn();
        if (ae !== null) {
            O += ae;
            mermaidInjected = true;
        }
    }
    let hljsInjected = false;
    if (Z) {
        let ae = await Un();
        if (ae !== null) {
            O += ae;
            hljsInjected = true;
        }
    }
    if (O !== "") {
        let { runtimeBlockInsertionIndex } = await import("/$bunfs/root/chunk-h8nrfb0c.js");
        let Se = runtimeBlockInsertionIndex(body);
        if (Se === undefined) {
            f("artifact_publish", "runtime_blocks_over_budget");
            mermaidInjected = false;
            hljsInjected = false;
        } else {
            body = body.slice(0, Se) + O + body.slice(Se);
        }
    }
    return {
        body,
        mermaidInjected,
        hljsInjected,
        roundTripLang: lang,
        ...cover !== undefined && {
            roundTripCover: cover
        },
        unnested,
        blockIdBytes,
        ...w.hoistedCommentsDropped && {
            hoistedCommentsDropped: true
        }
    };
}
function nl(e) {
    return ds(e, ai);
}
function rl(e) {
    return ds(e, ri);
}
function ds(e, n) {
    let r = [];
    let s = e.indexOf(n.beginPrefix);
    while(s >= 0){
        let h = s + n.beginPrefix.length;
        let b = e.indexOf(n.beginPrefix, h);
        let y = h;
        let v = h + n.lenDigitsMax;
        while(y < v){
            let w = e.charCodeAt(y);
            if (w < 48 || w > 57) {
                break;
            }
            y++;
        }
        if (y > h && e.startsWith("-->", y)) {
            let w = Number(e.slice(h, y));
            let S = y + 3;
            let P = 0;
            let R = S + w;
            while(P <= n.openTags && !e.startsWith(n.end, R)){
                P++;
                R += nNn;
            }
            if (w < n.maxSpan && P <= n.openTags && (b < 0 || b > R) && n.validate(e.slice(S, R), P)) {
                let B = R + n.end.length;
                if (e[B] === `
`) {
                    B++;
                }
                let V = s > 0 && e[s - 1] === `
` ? s - 1 : s;
                r.push([
                    V,
                    B
                ]);
            }
        }
        s = b;
    }
    return tNn(e, r);
}
const us = 2097152;
function ver(e) {
    let n = zo().safeParse(e);
    if (!n.success) {
        t(`[artifact] malformed read-back body: ${n.error.message}`);
        return;
    }
    let { contract, capabilities } = n.data;
    let h = xZe(n.data.type);
    return {
        contract,
        ...capabilities != null && {
            capabilities
        },
        ...h !== undefined && {
            typeLock: h
        }
    };
}
async function yx(e, signal, r) {
    let s = performance.now();
    try {
        let h = await md.get(`/api/frame/read/${encodeURIComponent(e)}`, {
            refreshOAuth: true,
            headers: Bd(),
            timeout: 15000,
            maxContentLength: us,
            ...signal && {
                signal
            },
            credentials: r
        });
        if (!h.ok) {
            return {
                err: `read-back unavailable: ${h.reason}`,
                unsent: true
            };
        }
        if (!h.fromFrame) {
            return {
                err: `read-back relay HTTP ${h.status}`,
                relayStatus: h.status
            };
        }
        if (h.status === 404) {
            return null;
        }
        if (h.status < 200 || h.status >= 300) {
            t(`[artifact] read-back ${h.status}: ${fE(h.data)}`);
            return {
                err: `read-back HTTP ${h.status}`,
                status: h.status
            };
        }
        let b = ver(h.data);
        if (b === undefined) {
            return {
                err: "malformed read-back body",
                status: h.status
            };
        }
        return b;
    } catch (error) {
        return {
            err: error instanceof Error ? error.message : String(error),
            request: GX(error, s)
        };
    }
}
async function fs(e, n, credentials, signal) {
    let h = await e;
    if (h.err !== null || n === undefined || h.readBackEchoed) {
        return h;
    }
    let b = await yx(n, signal, credentials);
    if (b === null || "err" in b) {
        if (b !== null) {
            t(`[artifact] read-back skipped: ${b.err}`);
        }
        return h;
    }
    let { typeLock, ...rest } = b;
    let w = typeLock !== undefined ? {
        ...h,
        typeLock
    } : h;
    if (h.stored?.capabilities !== undefined || !BB(rest.capabilities ?? undefined) && KL(rest.contract) === null) {
        return w;
    }
    return {
        ...w,
        stored: {
            ...rest,
            ...BB(rest.capabilities ?? undefined) && {
                carried: true
            }
        }
    };
}
function il(body) {
    let n = /[\t\n\f\r ]/;
    let r = ln(body, Fi, 0);
    while(r >= 0){
        let s = V_e(body, r + 5);
        if (s < 0) {
            return;
        }
        let h = r + 5;
        while(h < s - 1){
            let b = body[h];
            if (n.test(b) || b === "/") {
                h++;
                continue;
            }
            let y = h++;
            while(h < s - 1 && !n.test(body[h]) && !"/=".includes(body[h])){
                h++;
            }
            let v = body.slice(y, h).toLowerCase();
            while(h < s - 1 && n.test(body[h])){
                h++;
            }
            if (body[h] !== "=") {
                continue;
            }
            h++;
            while(h < s - 1 && n.test(body[h])){
                h++;
            }
            let w = h;
            let S;
            let P = body[h];
            if (P === '"' || P === "'") {
                let R = body.indexOf(P, h + 1);
                h = R < 0 ? s : R + 1;
                S = body.slice(w + 1, h - 1);
            } else {
                while(h < s - 1 && !n.test(body[h])){
                    h++;
                }
                S = body.slice(w, h);
            }
            if (v === "href") {
                if (!S.startsWith("/_f/")) {
                    return S;
                }
                break;
            }
        }
        r = ln(body, Fi, s);
    }
}
const sl = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;
function al(body) {
    let n = il(body);
    if (n === undefined) {
        return false;
    }
    let r = n.replace(/[\t\n\r]/g, "");
    return r.includes("&") || sl.test(r);
}
const ol = "This page's <base href> points outside the artifact — at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it — remove the tag and publish those files alongside the page (`files`), referenced by relative path.";
const ll = "This page's <base href> points outside the artifact — at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it — remove the tag and make those references work without it (inline what the page needs).";
function cl(content) {
    let n = typeof content === "string" ? content.slice(0, 16384) : content.subarray(0, 16384).toString("utf8");
    let r = n.startsWith("\uFEFF") ? 1 : 0;
    while(true){
        while(r < n.length && /\s/.test(n[r])){
            r++;
        }
        if (!n.startsWith("<!--", r)) {
            break;
        }
        let s = n.indexOf("-->", r + 4);
        if (s === -1) {
            return false;
        }
        r = s + 3;
    }
    return /^<!doctype html[\s>]/i.test(n.slice(r, r + 16));
}
function ul(e, n) {
    if (e.err !== null) {
        return e;
    }
    let r = fl(n).filter((s)=>!(e.livePaths ?? []).includes(s));
    if (r.length === 0) {
        return e;
    }
    f("artifact_publish", "files_html_no_doctype", {
        raw_html_pages: r.length
    });
    return {
        ...e,
        warnings: [
            ...e.warnings ?? [],
            pl(r)
        ]
    };
}
function fl(e) {
    return e.filter((n)=>GD(n.contentType) === "text/html" && n.live !== true && n.reseed !== true && !cl(n.content)).map((n)=>n.path);
}
function pl(e) {
    let n = e.slice(0, 3).map((b)=>_(b));
    let r = e.length - n.length;
    let s = n.join(", ") + (r > 0 ? ` and ${r} more` : "");
    let h = e.length === 1;
    return `files: ${s} ${h ? "has" : "have"} no <!doctype html> \u2014 supporting HTML pages are served exactly as written (only the page itself is wrapped in the skeleton), so if ${h ? "it is a page" : "they are pages"} people open, start ${h ? "it" : "each"} with a doctype, charset and viewport meta and its base styles and publish again (a fragment the page fetches and inserts can stay as written); as published ${h ? "it renders" : "they render"} in quirks mode.`;
}
async function hl(e, n) {
    let r = await e;
    if (r.err === null && n.length > 0) {
        return {
            ...r,
            warnings: [
                ...r.warnings ?? [],
                ...n
            ]
        };
    }
    return r;
}
const Cn = 8;
const gl = 0.7;
const ml = Math.floor(CF * gl / (Cn * 2));
function lr(data) {
    let n = data !== null && typeof data === "object" ? data.warnings : undefined;
    if (!Array.isArray(n)) {
        return [];
    }
    let r = [];
    for (let s of n){
        if (r.length >= Cn) {
            break;
        }
        if (typeof s !== "string") {
            continue;
        }
        let h = IJt(s, ml);
        if (h !== undefined) {
            r.push(bl(h) ?? h);
        }
    }
    return r;
}
function bl(e) {
    if (/^live_over_budget:(.{1,1024})$/.exec(e)) {
        return e;
    }
    if (/^render_unavailable:(.{1,1024})$/.exec(e)) {
        return e;
    }
    if (e === "render_over_budget") {
        return e;
    }
}
function ps(data) {
    let n = data !== null && typeof data === "object" && "docs" in data ? ber(data) : undefined;
    if (n !== undefined) {
        return n.map((s)=>({
                path: s.path,
                ...s.doc !== undefined && {
                    doc: s.doc
                }
            })).sort((s, h)=>{
            if (s.path < h.path) {
                return -1;
            }
            if (s.path > h.path) {
                return 1;
            }
            return 0;
        });
    }
    let r = Qi().safeParse(data);
    if (!r.success) {
        return;
    }
    return Object.entries(r.data.manifest).flatMap(([s, h])=>{
        if (rn.test(s) && h.src == null && typeof h.doc === "string" && h.doc !== "") {
            return [
                {
                    path: s,
                    doc: h.doc
                }
            ];
        }
        return [];
    }).sort((s, h)=>{
        if (s.path < h.path) {
            return -1;
        }
        if (s.path > h.path) {
            return 1;
        }
        return 0;
    });
}
function hs(e) {
    return e.flatMap((n)=>[]);
}
function _l() {
    return [];
}
function yl(reseeded) {
    return reseeded.flatMap((n)=>[]);
}
function vl(e, n) {
    return [];
}
function wl(e) {
    return e.flatMap((n)=>[]);
}
function gs(e, n) {
    return (e ?? []).filter((r)=>!n.has(r)).flatMap((r)=>[]);
}
const xl = 32;
const El = 16;
const Al = 200;
const Rl = /^[\w./-]{1,64}$/;
const kl = p(()=>u({
        pins: T(oe()).optional().catch(undefined),
        warnings: T(oe()).optional().catch(undefined)
    }));
const Tl = p(()=>u({
        uuid: o().regex(rr),
        path: o().regex(Rl),
        module: M().optional().catch(undefined),
        files: E().int().min(0).max(1000000).optional().catch(undefined)
    }));
const Pl = p(()=>u({
        src: o().optional().catch(undefined),
        reason: o().regex(nYe),
        count: E().int().min(1).max(100000).optional().catch(undefined)
    }));
function cr(data) {
    if (data === null || typeof data !== "object" || !("embeds" in data) || data.embeds === null || data.embeds === undefined) {
        return;
    }
    let n = kl().safeParse(data.embeds);
    if (!n.success) {
        return {
            pins: [],
            warnings: []
        };
    }
    let r = [];
    for (let h of n.data.pins ?? []){
        if (r.length >= xl) {
            break;
        }
        let b = Tl().safeParse(h);
        if (!b.success) {
            continue;
        }
        let { uuid, path, module, files } = b.data;
        r.push({
            uuid,
            path,
            module: module === true,
            ...files !== undefined && {
                files
            }
        });
    }
    let s = [];
    for (let h of n.data.warnings ?? []){
        if (s.length >= El) {
            break;
        }
        let b = Pl().safeParse(h);
        if (!b.success) {
            continue;
        }
        let { reason, count } = b.data;
        let src = b.data.src === undefined ? undefined : IJt(b.data.src, Al);
        s.push({
            reason,
            ...src !== undefined && {
                src
            },
            ...count !== undefined && {
                count
            }
        });
    }
    return {
        pins: r,
        warnings: s
    };
}
async function $n() {
    let e = ee();
    let n = e.workshopBlessedHashes ?? (async ()=>{
        let [{ extractInlineScriptHashes }, s] = await Promise.all([
            import("/$bunfs/root/chunk-4djdmfny.js"),
            import("/$bunfs/root/chunk-tdsd44mt.js")
        ]);
        let hashes = extractInlineScriptHashes(s.WORKSHOP_PAGE_TEMPLATE);
        for (let y of extractInlineScriptHashes(s.WORKSHOP_TEMPLATE)){
            hashes.add(y);
        }
        let complete = true;
        for (let y of [
            await zn(),
            nvn(),
            await Un()
        ]){
            if (y !== null) {
                for (let v of extractInlineScriptHashes(y)){
                    hashes.add(v);
                }
            } else {
                complete = false;
            }
        }
        return {
            hashes,
            complete
        };
    })();
    e.workshopBlessedHashes = n;
    try {
        let { hashes, complete } = await n;
        if (!complete) {
            e.workshopBlessedHashes = undefined;
            t("workshopBlessedScriptHashes: a runtime leg degraded — returning an incomplete (stricter) allowlist for this call only");
        }
        return hashes;
    } catch (error) {
        e.workshopBlessedHashes = undefined;
        throw error;
    }
}
const Mt = "<!doctype html>";
const kr = "<html";
const Rn = Mt + kr;
const Cl = new RegExp(`^${Mt}`, "i");
const ms = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">';
const bs = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">';
const Mi = /^<(?:meta|wbr)(?=[\t\n\f\r />])/i;
const er = /<meta(?=[\t\n\f\r /])/gi;
const $l = 1024;
const Ol = /([^\t\n\f\r =,]+)[^=,]*[\t\n\f\r =]*([^\t\n\f\r =,]*)/g;
function En(e) {
    let n = "";
    for (let [, r = "", s = ""] of e.matchAll(Ol)){
        if (r.toLowerCase() === "viewport-fit") {
            n = s.toLowerCase();
        }
    }
    return n === "cover";
}
function dr(e, n, r) {
    let s = new Map;
    let h = r - 1;
    let b = n;
    while(true){
        while(b < h && /[\t\n\f\r /]/.test(e[b])){
            b++;
        }
        if (b >= h) {
            return s;
        }
        let y = "";
        do {
            y += e[b].toLowerCase();
            b++;
        }while (b < h && !/[\t\n\f\r /=>]/.test(e[b]))
        while(b < h && /[\t\n\f\r ]/.test(e[b])){
            b++;
        }
        let v = "";
        if (b < h && e[b] === "=") {
            b++;
            while(b < h && /[\t\n\f\r ]/.test(e[b])){
                b++;
            }
            let w = e[b];
            if (b < h && (w === '"' || w === "'")) {
                let S = e.indexOf(w, b + 1);
                if (S < 0 || S >= h) {
                    return s;
                }
                v = e.slice(b + 1, S);
                b = S + 1;
            } else {
                let S = b;
                while(b < h && !/[\t\n\f\r >]/.test(e[b])){
                    b++;
                }
                v = e.slice(S, b);
            }
        }
        if (!s.has(y)) {
            s.set(y, v);
        }
    }
}
function Nl(e, n = true) {
    if (!/<meta[\t\n\f\r />]/i.test(e)) {
        return n;
    }
    let r;
    let s = `${e}<wbr>`;
    let h = 0;
    let b = ln(s, Mi, 0);
    while(b >= 0 && b < e.length){
        let y = s[b + 1] === "m" || s[b + 1] === "M" ? 5 : 4;
        let v = V_e(s, b + y);
        if (v < 0 || v > e.length) {
            b = -1;
            break;
        }
        if (y === 5) {
            let w = dr(s, b + y, v);
            if (w.get("name")?.toLowerCase() === "viewport") {
                r = w.get("content") ?? "";
            }
        }
        h = v;
        b = ln(s, Mi, v);
    }
    if (b < 0 && !(r !== undefined && En(r))) {
        er.lastIndex = h;
        for(let y = er.exec(e); y !== null; y = er.exec(e)){
            let v = e.slice(y.index, y.index + $l);
            let w = v.includes(">") ? V_e(v, 5) : -1;
            if (w < 0) {
                continue;
            }
            let S = dr(v, 5, w);
            if (S.get("name")?.toLowerCase() === "viewport") {
                r = S.get("content") ?? "";
                if (En(r)) {
                    return true;
                }
            }
        }
    }
    if (r === undefined) {
        return n;
    }
    return En(r);
}
const _s = `</head><body>
`;
const An = `
</body></html>`;
const vYr = new RegExp(`^(?:${Mt}|${Mt.replace("doctype", "DOCTYPE")})?${kr}(?: lang="(?=[^"]{1,35}")${cs.source.slice(1, -1)}")?(?:${ide})?><head(?:${ide})?>$`);
function fvn(e, n, r) {
    let s = n !== undefined && Rr(n) ? ` lang="${n}"` : "";
    let h = Nl(e, r) ? ms + Ho : bs + jo;
    return `${Rn}${s}><head>${h}${_s}${e}${An}`;
}
function tr(e, n, r) {
    return V_e(e, n) === r;
}
function u2t(e) {
    return Cl.test(e) && e.startsWith(kr, Mt.length);
}
function ys(e) {
    if (!u2t(e)) {
        return null;
    }
    if (!e.startsWith(Mt)) {
        e = Mt + e.slice(Mt.length);
    }
    let n = e.match(/^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/);
    if (!n) {
        return null;
    }
    let r = Rn.length + n[1].length + 1;
    if (!tr(e, Rn.length, r) || !tr(e, r + 5, n[0].length)) {
        return null;
    }
    let s = e.indexOf("</head><body", n[0].length);
    if (s === -1) {
        return null;
    }
    let b = e.slice(n[0].length, s).match(/^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*>(<meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*>)<style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/);
    if (!b || /<\/style/i.test(b[2])) {
        return null;
    }
    {
        let K = n[0].length;
        for (let N of [
            "<meta",
            "<meta",
            "<style"
        ]){
            let J = e.indexOf(">", K + N.length) + 1;
            if (!e.startsWith(N, K) || !tr(e, K + N.length, J)) {
                return null;
            }
            K = J;
        }
    }
    let y = s + 12;
    let v = V_e(e, y);
    if (v < 0) {
        return null;
    }
    let w = e.slice(y, v - 1);
    if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(w)) {
        return null;
    }
    let S = v;
    if (e[S] === `
`) {
        S++;
    }
    let P = Il(e, S);
    if (!P) {
        return null;
    }
    let P_bodyEnd = P.bodyEnd;
    if (P_bodyEnd > S && e[P_bodyEnd - 1] === `
`) {
        P_bodyEnd--;
    }
    let B = n[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1];
    let V = dr(b[1], 5, b[1].length);
    return {
        body: e.slice(S, P_bodyEnd),
        ...B !== undefined && Rr(B) && {
            lang: B
        },
        cover: En(V.get("content") ?? ""),
        ...P.commentsDropped && {
            hoistedCommentsDropped: true
        }
    };
}
function Il(e, n) {
    let commentsDropped = false;
    let e_length = e.length;
    let h = false;
    while(true){
        while(e_length > n && `	
\f\r `.includes(e[e_length - 1])){
            e_length--;
        }
        if (e.endsWith("-->", e_length)) {
            let b = e.lastIndexOf("<!--", e_length - 7);
            if (b < n || !qGt(e.slice(b, e_length))) {
                return null;
            }
            commentsDropped = true;
            e_length = b;
        } else if (!h && e_length - n >= 7 && e.endsWith("</html>", e_length)) {
            h = true;
            e_length -= 7;
        } else if (h && e_length - n >= 7 && e.endsWith("</body>", e_length)) {
            let bodyEnd = e_length - 7;
            if (commentsDropped) {
                let y = e.lastIndexOf("<!--", bodyEnd);
                if (y >= n && e.lastIndexOf("-->", bodyEnd) < y + 4) {
                    return null;
                }
            }
            return {
                bodyEnd,
                commentsDropped
            };
        } else {
            return null;
        }
    }
}
function Fl(e, n, r, s, h) {
    let b = 0;
    let y = false;
    while(true){
        ss(h);
        let w = Ml(e);
        if (w !== null) {
            if (b === ns) {
                throw new kte("levels", h.spent);
            }
            e = w.body;
            n = w.lang ?? n;
            r = w.cover;
            b++;
            y = false;
            continue;
        }
        y ||= vs(e);
        let S = s(e);
        if (S === e) {
            break;
        }
        e = S;
    }
    let outcome = y ? b > 0 ? "partial" : "miss" : b > 0 ? "repaired" : undefined;
    return {
        body: e,
        lang: n,
        cover: r,
        outcome
    };
}
function vs(e) {
    if (!u2t(e)) {
        return false;
    }
    let n = e.indexOf(sde);
    return n !== -1 && n < l2t;
}
function Ml(e) {
    if (!u2t(e)) {
        return null;
    }
    let Rn_length = Rn.length;
    let r = (w)=>{
        if (!e.startsWith(w, Rn_length)) {
            return false;
        }
        Rn_length += w.length;
        return true;
    };
    let s;
    if (r(' lang="')) {
        let w = e.indexOf('"', Rn_length);
        if (w === -1 || !Rr(e.slice(Rn_length, w))) {
            return null;
        }
        s = e.slice(Rn_length, w);
        Rn_length = w + 1;
    }
    if (!r(`><head>${sde}`)) {
        return null;
    }
    let h = Rn_length + BMe;
    let b = 0;
    while(b < 2 && r("<script>")){
        let w = e.indexOf("</script>", Rn_length);
        if (w === -1 || w > h) {
            return null;
        }
        let S = e.slice(Rn_length, w);
        if (S === "" || S.includes("<!--") || /<\/script/i.test(S)) {
            return null;
        }
        Rn_length = w + 9;
        b++;
    }
    if (b === 0 || !r(G_e)) {
        return null;
    }
    let y = r(ms);
    if (!y && !r(bs)) {
        return null;
    }
    if (!r("<style>")) {
        return null;
    }
    let v = e.indexOf("</style>", Rn_length);
    if (v === -1 || e.slice(Rn_length, v).includes("<")) {
        return null;
    }
    Rn_length = v + 8;
    if (!r(_s)) {
        return null;
    }
    if (e.length - Rn_length < An.length || !e.endsWith(An)) {
        return null;
    }
    return {
        body: e.slice(Rn_length, e.length - An.length),
        lang: s,
        cover: y
    };
}
function EYr(e) {
    let n = Object.freeze({
        slug: e
    });
    ee().mintedRoundTripPublishSignals.add(n);
    return n;
}
function kYr(e) {
    return typeof e === "object" && e !== null && ee().mintedRoundTripPublishSignals.has(e);
}
function Tr(e, n = "supporting file") {
    for (let r of e){
        if (!Tn.has(r.contentType)) {
            m("artifact_publish", "file_not_servable", Aer(r.path, r.contentType));
            let h = GD(r.contentType);
            let b = Tn.has(h) ? h : undefined;
            return H(suo(n, r.path, r.contentType, b));
        }
        if (Rge.has(r.contentType)) {
            if (typeof r.content === "string" ? r.content.includes("\x1B") : r.content.includes(27)) {
                m("artifact_publish", "file_esc_byte");
                return H(`${`${n} "${r.path}" carries an ESC byte \u2014 publish `}text content without escape sequences (nothing was published)`);
            }
            if (typeof r.content === "string" ? r.content.includes("\x00") : r.content.includes(0)) {
                m("artifact_publish", "file_nul_byte");
                return H(`${`${n} "${r.path}" carries NUL bytes \u2014 publish `}text content as UTF-8 without embedded NULs (nothing was published)`);
            }
        }
        if (ec.has(r.contentType)) {
            let h = typeof r.content === "string" ? r.content : r.content.toString("utf8");
            if (/<!(?:DOCTYPE|ENTITY)/i.test(h)) {
                m("artifact_publish", "file_dtd");
                return H(`${`${n} "${r.path}" carries a DOCTYPE or ENTITY `}declaration — XML supporting files must not use DTD machinery (nothing was published)`);
            }
            let b = h.startsWith("\uFEFF") ? h.slice(1) : h;
            let y = b.indexOf("<?");
            if (y !== -1) {
                if (!(y === 0 && /^<\?xml[\s?]/i.test(b)) || b.indexOf("<?", 2) !== -1) {
                    m("artifact_publish", "file_pi");
                    return H(`${`${n} "${r.path}" carries a processing `}instruction — XML supporting files may carry only a leading XML declaration (nothing was published)`);
                }
            }
        }
        if (typeof r.content !== "string" && Rge.has(r.contentType) && r.content.length >= 2 && (r.content[0] === 255 && r.content[1] === 254 || r.content[0] === 254 && r.content[1] === 255)) {
            m("artifact_publish", "file_utf16_bom");
            return H(`${`${n} "${r.path}" is UTF-16 encoded \u2014 publish `}supporting text files as UTF-8 (nothing was published)`);
        }
        let s = typeof r.content === "string" ? r.content : Rge.has(r.contentType) ? r.content.toString("utf8") : null;
        if (s !== null && XEe(s, {
            parsedAsMarkup: ixt.has(GD(r.contentType))
        })) {
            m("artifact_publish", "file_review_machinery");
            return H(`${n} "${r.path}" carries the artifact-pr-review machinery; review pages publish as a single file through the publish-time guard (nothing was published)`);
        }
    }
    return null;
}
async function TYr(e, n) {
    let r = Id();
    if (r !== null) {
        let y = Buffer.byteLength(e, "utf8");
        if (y > Sf) {
            return H(`too large: page is ${Math.ceil(y / 1024 / 1024)}MB (max ${Sf / 1024 / 1024}MB)`);
        }
        let v = await uvn(e);
        let w = Buffer.byteLength(v, "utf8") > Sf ? e : v;
        if (n.verifyWorkshopHtml !== undefined) {
            let { verifyWorkshopHtml } = await import("/$bunfs/root/chunk-4djdmfny.js");
            let V = verifyWorkshopHtml(w, await $n(), n.verifyWorkshopHtml);
            if (!V.ok) {
                return H(`workshop page refused by the structural verifier \u2014 fix and republish:
` + V.violations.slice(0, 12).map((K)=>`- [${K.rule}] ${K.where} \u2014 ${K.hint}`).join(`
`));
            }
        }
        let S = n.files ?? [];
        let P = n.removeFiles ?? [];
        if (S.length > 0 || P.length > 0) {
            let B = On(w, S, P);
            if (B !== null) {
                return H(B.msg);
            }
        }
        let R = Nr(w, S, n.copiedFiles ?? [], P);
        if (R !== null) {
            return H(R);
        }
        return ki(r, w, n);
    }
    let n_slug = n.slug;
    let h = n.relayOnly === true ? {
        count: 0
    } : undefined;
    let b;
    try {
        b = !n_slug ? await Li(e, n, h) : await her(n.ownPublishes, n_slug, ()=>Li(e, n, h));
    } catch (error) {
        if (h?.count === 0 && error instanceof Error) {
            Object.defineProperty(error, ws, {
                value: true
            });
        }
        throw error;
    }
    if (h !== undefined && b.err !== null && b.notCarried !== true && b.refusedShape !== true && h.count === 0) {
        return {
            ...b,
            refusedBeforeSend: true
        };
    }
    return b;
}
var ws = Symbol("refusedBeforeSend");
function AYr(e) {
    return e instanceof Error && Reflect.get(e, ws) === true;
}
async function Li(e, n, relayOnly) {
    let t0 = performance.now();
    let h = relayOnly !== undefined ? Xl(n) : undefined;
    if (h !== undefined) {
        m("artifact_publish", "relay_only_not_fresh_page");
        return {
            ...H(`Nothing was published: a publish made without asking may only create a new artifact, naming no url and setting no capabilities, contract, force, file removals or live files, but this one ${h}. Every publish in this session now goes through the usual permission check, which may need a person's approval.`),
            refusedShape: true
        };
    }
    let { slug, title, favicon, icon, label, note, description, capabilities, session, hostServers, readBack, publishContext, originMetadata } = n;
    let W = n.copiedFiles ?? [];
    if (n.createPath !== undefined && (slug !== undefined || n.force === true || n.baseVersion !== undefined || W.length > 0 || n.removeFiles !== undefined && n.removeFiles.length > 0 || n.liveFiles !== undefined)) {
        m("artifact_publish", "create_bad_combo");
        return H("invalid publish options");
    }
    let isRedeploy = !!slug;
    let hasCaps = capabilities !== undefined;
    let fe = UU();
    let he = n.force === true;
    let ae = (n.files?.length ?? 0) > 0 || W.length > 0 || (n.removeFiles?.length ?? 0) > 0 || n.liveFiles !== undefined;
    let Se = n.composedPrReview === true || n.autoEditAttribution !== undefined || ae ? n.baseVersion : fe ? n.baseVersion : undefined;
    let we = {
        slug,
        title,
        favicon,
        ...icon && {
            icon
        },
        label,
        note,
        ...slug !== undefined && n.deadline !== undefined && {
            deadline: n.deadline
        },
        ...n.requestId !== undefined && {
            requestId: n.requestId
        },
        description,
        publishContext,
        originMetadata,
        ...n.autoEditAttribution && {
            autoEditAttribution: n.autoEditAttribution
        },
        ...n.createPath === undefined && n.thumbnail && {
            thumbnail: n.thumbnail
        },
        ...n.createPath === undefined && n.thumbnailDark && {
            thumbnailDark: n.thumbnailDark
        }
    };
    if (n.files !== undefined && n.files.length > 0 || W.length > 0) {
        if (XEe(e)) {
            m("artifact_publish", "review_single_file");
            return H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
        }
        let j = Tr(n.files ?? []);
        if (j !== null) {
            return j;
        }
    }
    let it = {
        injectDiagramRuntime: n.injectDiagramRuntime,
        injectHighlightRuntime: n.injectHighlightRuntime,
        composedPrReview: n.composedPrReview,
        expectRoundTrippedPage: n.expectRoundTrippedPage
    };
    let Ie = await pvn(e, it);
    let De = fvn(Ie.body, Ie.roundTripLang, Ie.roundTripCover);
    let _e = Buffer.byteLength(De, "utf8");
    if (_e > Sf && Ie.blockIdBytes > 0 && _e - Ie.blockIdBytes <= Sf) {
        f("artifact_publish", "block_ids_over_cap");
        Ie = await pvn(e, {
            ...it,
            docBlockIds: false,
            expectRoundTrippedPage: false
        });
        De = fvn(Ie.body, Ie.roundTripLang, Ie.roundTripCover);
        _e = Buffer.byteLength(De, "utf8");
    }
    let { body, mermaidInjected, hljsInjected, unnested, hoistedCommentsDropped } = Ie;
    let We = al(body) ? [
        iM() ? ol : ll
    ] : [];
    if (_e > Sf) {
        m("artifact_publish", "too_large", {
            page_bytes: _e,
            mermaid_injected: mermaidInjected,
            hljs_injected: hljsInjected,
            block_id_bytes: Ie.blockIdBytes
        });
        return H(`too large: rendered page is ${Math.ceil(_e / 1024 / 1024)}MB (max ${Sf / 1024 / 1024}MB)` + (hljsInjected ? " — includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code" : ""));
    }
    let workshopSurface = false;
    let count = 0;
    let workshopInfo;
    let Ze = [];
    if (n.files !== undefined && n.files.length > 0) {
        Ze = n.files.filter((j)=>tuo(j.contentType)).map((j)=>`${j.path} (${j.contentType})`);
    }
    if (n.verifyWorkshopHtml !== undefined) {
        let { verifyWorkshopHtml } = await import("/$bunfs/root/chunk-4djdmfny.js");
        let de = await $n();
        let q = verifyWorkshopHtml(De, de, n.verifyWorkshopHtml);
        if (!q.ok) {
            f("workshop_html_publish", "verifier_refused");
            m("artifact_publish", "workshop_verifier_refused", {
                page_bytes: _e
            });
            let Oe = q.violations.slice(0, 12).map((Ve)=>`- [${Ve.rule}] ${Ve.where} \u2014 ${Ve.hint}`);
            let jt = q.violations.length > 12 ? `
(and ${q.violations.length - 12} more)` : "";
            return {
                url: null,
                slug: null,
                version: null,
                err: `workshop page refused by the structural verifier \u2014 fix and republish:
` + Oe.join(`
`) + jt
            };
        }
        workshopSurface = q.workshopSurface;
        count = q.decisionCount ?? 0;
        if (q.workshopSurface) {
            workshopInfo = {
                state: q.workshopState ?? "in-progress",
                deliverables: q.deliverables ?? {
                    n: 0,
                    pr: 0,
                    artifact: 0,
                    other: 0
                }
            };
        }
        if (workshopSurface) {
            let Oe = fc(n.slug, n.refusedSidecarHistory?.());
            if (Oe !== null) {
                if (Oe.kind === "priors") {
                    f("workshop_html_publish", "sidecar_refused");
                    m("artifact_publish", "workshop_sidecar_refused", {
                        page_bytes: _e
                    });
                } else {
                    f("workshop_html_publish", "sidecar_contract");
                    m("artifact_publish", "workshop_sidecar_contract", {
                        page_bytes: _e
                    });
                }
                return H(Oe.err);
            }
        }
        if (n.files !== undefined && n.files.length > 0) {
            if (workshopSurface) {
                if (Ze.length > 0) {
                    f("workshop_html_publish", "sidecar_refused");
                    m("artifact_publish", "workshop_sidecar_refused", {
                        page_bytes: _e
                    });
                    return {
                        url: null,
                        slug: null,
                        version: null,
                        err: `workshop pages cannot ship renderable or executable sidecar files — each is a URL that bypasses the publish-time verifier: ${$5(Ze.join(", "))}`
                    };
                }
            } else {
                let Oe = await $r(n.files, de, _e);
                if (Oe !== null) {
                    return Oe;
                }
            }
        }
        if (workshopSurface) {
            g("workshop_html_publish", {
                count
            });
        }
    }
    let template = workshopSurface && (n.template === undefined || n.template === "plain") ? "workshop" : n.template ?? "plain";
    we.template = template;
    let capabilities_1 = capabilities;
    let Ke = [];
    let st = [];
    if (capabilities !== undefined && session !== undefined) {
        let { connectorNames, serverNames } = session;
        let q = tpo(capabilities, connectorNames, serverNames, {
            hostServers
        });
        if (q.ok && hostServers === undefined && q.servers.some((Ee)=>oYe(Ee) !== undefined)) {
            let Ee = ee();
            let epoch = Ee.accountEpoch;
            let ct = await Ete({
                timeoutMs,
                ...n.signal && {
                    signal: n.signal
                },
                credentials: n.credentials
            });
            if (!("err" in ct)) {
                Tge({
                    session: Ee,
                    epoch,
                    roster: ct,
                    storageV5: undefined
                });
                let et = VNn(ct, "mcp", GNn);
                n.noteHostServers?.(et);
                if (!et) {
                    q = tpo(capabilities, connectorNames, serverNames, {
                        hostServers: false
                    });
                }
            } else {
                f("artifact_publish", "host_roster_fetch_failed", {
                    cause: d(ct.cause)
                });
            }
        }
        if (!q.ok) {
            let host_unavailable_count = F(q.malformed, (Te)=>Te.kind === "host_unavailable");
            let unknown_tools_count = F(q.malformed, (Te)=>Te.kind === "unknown_tools");
            let opaque_id_count = F(q.malformed, (Te)=>Te.kind === "opaque_id" || Te.kind === "known_id" || Te.kind === "tool_name" || Te.kind === "connector_as_host" || Te.kind === "undeclarable_name");
            let et = F(q.malformed, (Te)=>Te.kind === "local_server_as_first_party");
            m("artifact_publish", host_unavailable_count > 0 ? "host_server_unavailable" : q.internal.length > 0 ? "internal_host_server_name" : et > 0 ? "first_party_server_collision" : q.unresolved.length > 0 ? "unresolved_mcp_server" : opaque_id_count > 0 ? "opaque_mcp_server_id" : unknown_tools_count > 0 ? "unknown_mcp_tool" : q.malformed.length > 0 ? "malformed_mcp_manifest" : "mcp_manifest_over_caps", {
                page_bytes: _e,
                unresolved_count: q.unresolved.length,
                internal_count: q.internal.length,
                malformed_count: q.malformed.length - opaque_id_count - host_unavailable_count - unknown_tools_count,
                opaque_id_count,
                host_unavailable_count,
                unknown_tools_count,
                oversized_count: q.oversized.length,
                ...q.serverCount !== null && {
                    server_count: q.serverCount
                }
            });
            let pt = hc(q.malformed);
            if (q.unresolved.length > 0) {
                let Te = QI(q.unresolved, 8, (Xe)=>`"${Rf(Xe)}"`);
                let Ht = connectorNames.filter(rYe);
                let en = QI(D(Ht.map((Xe)=>Xe.server)), 8, (Xe)=>`"${Rf(Xe)}"`);
                let fn = en.length === 0 ? "" : ` (connectors this session: ${en.join(", ")})`;
                let tn = Ht.some((Xe)=>Jt(Xe.toolPrefix) !== null);
                pt.push(`unknown ${I(q.unresolved.length, "connector")}: ${Te.join(", ")} \u2014 ` + (tn ? "set `server` to the connector's exact display name" : "set `server` to the segment between `mcp__` and the next `__` of a tool name from this session (for `mcp__claude_ai_Slack_beta__search`, use `claude_ai_Slack_beta`, copied exactly), or to the connector's exact display name") + `${fn}. The control plane would accept this manifest, but the page would break at view time`);
            }
            if (q.internal.length > 0) {
                let Te = QI(D(q.internal), 8, (Ht)=>`"${Rf(Ht)}"`);
                pt.push(`${`built-in ${I(q.internal.length, "server")} ${Te.join(", ")} `}— the Claude app's own servers, which it never exposes to pages as host servers; declare only servers from the MCP configuration (host:<name> for the \`mcp__<name>__<tool>\` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time`);
            }
            for (let Te of q.oversized){
                pt.push(`${`${Rxt(Te.server)} "${Rf(Te.server)}" declares ${Te.toolCount} tools, counted after any same-name entries merge (max ${Juo}) \u2014 trim the tools `}list; the control plane would reject it anyway`);
            }
            if (q.serverCount !== null) {
                pt.push(`${`manifest declares ${q.serverCount} servers (max ${Quo}) \u2014 declare only the servers `}the page actually calls; the control plane would reject it anyway`);
            }
            return H(`mcp manifest rejected: ${pt.join("; ")}.`);
        }
        capabilities_1 = q.caps;
        Ke = q.warnings;
        st = q.servers;
        let Oe = [
            e,
            ...(n.files ?? []).flatMap((Ee)=>{
                if (Rge.has(Ee.contentType)) {
                    return [
                        hr(Ee.content)
                    ];
                }
                return [];
            })
        ];
        let jt = q.servers.length > 0 ? npo(Oe, q.servers, 64) : [];
        let Ve = sys(Oe, q.renamed).filter(([Ee])=>!jt.includes(Ee));
        if (Ve.length > 0) {
            Ke = [
                ...Ke,
                `the page source still holds ${I(Ve.length, "a server name", "server names")} this publish rewrote in the manifest, as ${I(Ve.length, "a quoted string", "quoted strings")} \u2014 ${QI(Ve, 8, ([Ee, ft])=>`"${Rf(Ee)}" (viewers resolve only "${Rf(ft)}")`).join(", ")} \u2014 so if the page passes ${Ve.length === 1 ? "it" : "them"} to callTool(\u2026) / watchTool(\u2026), those calls fail for every viewer; use the display ${I(Ve.length, "name")} there.`
            ];
        }
    } else if (capabilities !== undefined) {
        let slug_count = iys(capabilities).length;
        if (slug_count > 0) {
            f("artifact_publish", "slug_without_pairs", {
                page_bytes: _e,
                slug_count
            });
        }
    }
    let Qe = Object.keys(capabilities_1 ?? {});
    let sentCapabilities;
    let hostGrant = sYe(a.CLAUDE_ARTIFACT_HOST_GRANT);
    if (capabilities_1 !== undefined) {
        let j = T_r(capabilities_1, hostGrant);
        if (!j.ok) {
            m("artifact_publish", "host_grant_unreadable", {
                page_bytes: _e,
                host_server_count: j.refused.length
            });
            let de = QI(j.refused, 8, (q)=>`"${Rf(q)}"`);
            return H(`mcp manifest rejected: this computer's local-server grant (${opo}, set by the app that launched this session; not something to fix from here) could not be read, so ` + `no host: server can be declared from this session \u2014 ${de.join(", ")}; declare only claude.ai connectors (set "server" to the connector's display name), or to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration).`);
        }
        if (j.dropped.length > 0) {
            f("artifact_publish", "host_grant_narrowed", {
                page_bytes: _e,
                dropped_count: j.dropped.length
            });
            capabilities_1 = j.caps;
            st = st.filter((q)=>j.servers.includes(q));
            let de = j.dropped.length === 1 ? "it" : "them";
            sentCapabilities = j.caps;
            Ke = [
                ...Ke,
                `${`this computer did not grant the page these local tools, so they were left out of the manifest: ${Ys(j.dropped)} \u2014 the page's ` + `calls to ${de} fail for every viewer; tell the user which local tools were left out` + (j.servers.length === 0 ? ', and that the page now has no connector access at all (no declared server remained, so this publish carries no "mcp" and any stored "mcp" declaration is replaced)' : "")}.`
            ];
        }
    }
    if (session !== undefined && st.length > 0) {
        let j = [
            e,
            ...(n.files ?? []).flatMap((q)=>{
                if (Rge.has(q.contentType)) {
                    return [
                        hr(q.content)
                    ];
                }
                return [];
            })
        ];
        let de = npo(j, st, 64);
        if (de.length > 0) {
            Ke = [
                ...Ke,
                `the page calls callTool/watchTool with ${I(de.length, "a server name", "server names")} not in this manifest \u2014 ${QI(de, 8, (q)=>`"${Rf(q)}"`).join(", ")} \u2014 and ${Ixt((sentCapabilities ?? capabilities_1)?.mcp) ? "under this dynamic declaration each viewer is asked to approve them at first use (a name the viewer has no connector for is refused)" : "those calls fail for every viewer"}; the manifest declares ${QI(st, 8, (q)=>`"${Rf(q)}"`).join(", ")}.`
            ];
        }
    }
    if (n.contract !== undefined && n.contract !== "latest" && (!eY.test(n.contract) || n.contract === rat)) {
        m("artifact_publish", "invalid_contract", {
            page_bytes: _e
        });
        return H(`${`invalid contract ${_(n.contract)} \u2014 pass 'latest' `}or a published version like 0.1.0.`);
    }
    let upgrade = n.contract === "latest";
    let explicitPin = n.contract !== undefined && n.contract !== "latest" ? n.contract : null;
    let ke = n.contract !== undefined;
    let lt = slug && !ke ? n.storedPin : null;
    let ze;
    if (slug && !ke && lt === undefined) {
        let j = await yx(slug, undefined, n.credentials);
        if (j !== null && "err" in j && n.onPinReadError !== "assume_none" && ar(j)) {
            let de = xn(j);
            await Q(or, n.signal);
            if (!n.signal?.aborted) {
                j = await yx(slug, n.signal, n.credentials);
                f("artifact_publish", "pin_readback_retried", {
                    page_bytes: _e,
                    ...de,
                    recovered: !(j !== null && "err" in j)
                });
            }
        }
        if (j !== null && "err" in j) {
            if (n.onPinReadError === "assume_none") {
                f("artifact_publish", "pin_readback_assumed_none", {
                    page_bytes: _e
                });
                lt = null;
            } else {
                m("artifact_publish", "pin_readback_failed", {
                    page_bytes: _e,
                    ...xn(j)
                });
                return H(`${`couldn't read the artifact's stored contract pin (${j.err}) \u2014 `}a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics).`);
            }
        } else {
            lt = j === null ? null : KL(j.contract);
            ze = j?.capabilities ?? {};
        }
    }
    let Ye = KL(lt);
    if (slug && ze === undefined && Object.keys(capabilities ?? {}).length > 0 && n.composedPrReview !== true) {
        let j = await yx(slug, undefined, n.credentials);
        if (j !== null && "err" in j && n.contract === undefined && ar(j)) {
            await Q(or, n.signal);
            if (!n.signal?.aborted) {
                j = await yx(slug, undefined, n.credentials);
            }
        }
        if (j !== null && "err" in j) {
            if (n.contract === undefined) {
                m("artifact_publish", "capability_readback_failed", {
                    page_bytes: _e,
                    ...xn(j)
                });
                return H(`${`couldn't read the artifact's stored capability declaration (${j.err}) \u2014 `}a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones).`);
            }
            f("artifact_publish", "retrofit_guard_skipped");
        } else {
            ze = j?.capabilities ?? {};
        }
    }
    if (capabilities === undefined && slug && n.composedPrReview !== true) {
        let j = await un({
            slug,
            hostGrant,
            storedCaps: ze,
            signal: n.signal,
            credentials: n.credentials,
            pageBytes: _e,
            lane: "page"
        });
        if (!j.ok) {
            return H(j.err);
        }
        ze = j.storedCaps;
    }
    let Tt = (j)=>{
        if (j === YL) {
            return aR;
        }
        return j;
    };
    let Wt = Object.keys(ze ?? {}).map(Tt);
    let Qt = Qe.map(Tt);
    let ot = Object.entries(ze ?? {}).filter(([j])=>!Qt.includes(Tt(j)));
    let Pt = WNn(ze?.db) ?? [];
    let yt = capabilities_1?.db;
    let $e = Pt.length > 0 && (yt === true || vV(yt) && !Object.hasOwn(yt, "rules"));
    let Dt = epo(Pt);
    let ut = nys(ze?.user) ?? [];
    let Bt = capabilities_1?.user;
    let Ct = ut.length > 0 && (Bt === true || vV(Bt) && !Object.hasOwn(Bt, "scopes"));
    let ye = Zuo(ut);
    let vt = ()=>{
        let j = _(ut);
        let de = Cg(j, {
            max: 200
        });
        if (ye && de === j) {
            return de;
        }
        return "";
    };
    if (n.createPath === undefined && n.composedPrReview !== true && ot.length > 0 && Qt.some((j)=>!Wt.includes(j))) {
        m("artifact_publish", "capability_retrofit_refused");
        let j = QI(ot, 8, ([Ee])=>Cg(Ee));
        let de = _({
            ...Object.fromEntries(ot),
            ...capabilities_1,
            ...$e && {
                db: ze?.db
            },
            ...Ct && {
                user: ze?.user
            }
        });
        let q = Cg(de, {
            max: 600
        });
        let Oe = $e || ot.some(([Ee])=>Ee === "db");
        let jt = Ct || ot.some(([Ee])=>Ee === "user");
        let Ve = q === de && !/[<>]/.test(yO(de)) && dl(de) === de && (!Oe || oys(ze?.db)) && (!jt || rys(ze?.user)) ? q : "";
        return H(`your capabilities declaration omits the stored ${I(ot.length, "capability", "capabilities")} ${j.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${ot.length === 1 ? "it" : "them"}. To keep ${ot.length === 1 ? "it" : "them"}, republish declaring the union${Ve !== "" ? `: ${Ve}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`);
    }
    if (n.createPath === undefined && n.composedPrReview !== true && $e) {
        m("artifact_publish", "db_rules_reset_refused");
        let j = _(Pt);
        let de = Cg(j, {
            max: 600
        });
        let q = Dt && de === j ? de : "";
        let Oe = Ct ? ` The sent user block likewise omits its stored scopes${vt() !== "" ? ` (${vt()})` : ""}: resend user with them as well, or user: {"scopes": []} to drop them.` : "";
        return H(`your capabilities declaration re-sends db without its rules while the artifact stores ${Pt.length} ${I(Pt.length, "access rule")}${q !== "" ? `: ${q}` : ' (not listed here; read the artifact with action "read" to see them)'} \u2014 ` + `a sent db block replaces the stored one, rules included, so this publish would have reset them to the defaults (anyone who can open the artifact can read its shared data, and anyone with more than view-only access can write it). To keep them, ${q !== "" ? "resend db with those rules" : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend db with its rules"}; to reset them on purpose, send db: {"rules": []}.` + Oe);
    }
    if (n.createPath === undefined && n.composedPrReview !== true && Ct) {
        m("artifact_publish", "user_scopes_reset_refused");
        let j = vt();
        return H(`your capabilities declaration re-sends user without its scopes while the artifact stores ${ut.length} ${I(ut.length, "scope")}${j !== "" ? `: ${j}` : ""} \u2014 ` + `a sent user block replaces the stored one, scopes included, so this publish would have dropped ${ut.length === 1 ? "it" : "them"} (for profile, the page would no longer receive the viewer's name and avatar). To keep ${ut.length === 1 ? "it" : "them"}, ${j !== "" ? `resend user with scopes: ${j}` : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend user with its scopes"}; to drop ${ut.length === 1 ? "it" : "them"} on purpose, send user: {"scopes": []}.`);
    }
    let $t = await Go({
        capabilities: capabilities_1,
        echoPin: Ye,
        explicitPin,
        upgrade,
        pageBytes: _e,
        ...n.createPath !== undefined && {
            latestFetchRemedy: "nothing was created; retry."
        },
        credentials: n.credentials
    });
    if ("errMsg" in $t) {
        return H($t.errMsg);
    }
    let $t_fields = $t.fields;
    let sent = {
        capNames: Object.keys(capabilities_1 ?? {}).map(Tt),
        hostDecl: Yo(capabilities_1),
        latestContract: "contract" in $t_fields && explicitPin === null && Ye === null
    };
    let Le;
    let x = (j)=>hl(fs(j, readBack ? slug : undefined, n.credentials, n.signal), [
            ...Ke,
            ...We
        ]).then((de)=>{
            if (de.err === null && unnested !== undefined) {
                f("artifact_publish", unnested === "repaired" ? "nested_page_repaired" : "nested_repair_partial");
            }
            if (de.err === null && hoistedCommentsDropped) {
                f("artifact_publish", "hoisted_comment_dropped");
            }
            let q = de.err === null ? [
                ...Ze,
                ...de.refusedClassSidecarTypes ?? []
            ] : [];
            if (de.err !== null) {
                if (Le !== undefined && de.strandedSlug === undefined && !de.conflict && !de.gone && template !== "pr_review") {
                    return {
                        ...de,
                        reservedSlug: Le
                    };
                }
                return de;
            }
            return {
                ...ul(de, n.files ?? []),
                ...q.length > 0 && {
                    refusedClassSidecarTypes: q
                },
                ...sentCapabilities !== undefined && {
                    sentCapabilities
                }
            };
        });
    if (n.createPath !== undefined && XEe(body)) {
        m("artifact_publish", "review_single_file");
        return H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
    }
    let re = n.files ?? [];
    let Y = n.removeFiles ?? [];
    if (re.length > 0 || W.length > 0 || Y.length > 0 || n.liveFiles !== undefined) {
        if (XEe(body)) {
            m("artifact_publish", "review_single_file");
            return H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
        }
        if (!iM()) {
            m("artifact_publish", "multifile_flag_off", {
                n_files: re.length + W.length,
                n_removed: Y.length
            });
            return H(Y.length > 0 ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file." : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`.");
        }
        if (W.length > 0 && !FMe()) {
            m("artifact_publish", "copy_from_flag_off", {
                n_copied: W.length
            });
            return H(Or);
        }
        if (n.createPath !== undefined) {
            return x(nr(we, (j)=>ji(De, j, $t_fields, undefined, false, {
                    t0,
                    pageBytes: _e,
                    lane: "inline",
                    isRedeploy,
                    hasCaps,
                    template,
                    ...workshopInfo && {
                        workshopInfo
                    },
                    forced: false,
                    ...Ye !== null && {
                        echoedPin: Ye
                    },
                    ...n.liveFilesGate === true && {
                        liveFilesOn: true
                    },
                    sent
                }, n.ownPublishes, n.credentials, workshopSurface, n.createPath, n.onRetry, n.signal, re)));
        }
        return x(nr(we, (j, de)=>Ir(De, re, W, Y, j, $t_fields, {
                workshopSurface,
                baseVersion: de ?? Se,
                force: he,
                ...n.liveFiles !== undefined && {
                    liveFiles: n.liveFiles
                },
                ...n.copiedCrossOrgOk === true && {
                    copiedCrossOrgOk: true
                },
                ...Le !== undefined && {
                    reservedSlug: Le
                },
                ownPublishes: n.ownPublishes,
                tele: {
                    t0,
                    pageBytes: _e,
                    lane: "inline",
                    isRedeploy,
                    hasCaps,
                    template,
                    ...workshopInfo && {
                        workshopInfo
                    },
                    forced: he,
                    ...Ye !== null && {
                        echoedPin: Ye
                    },
                    ...n.liveFilesGate === true && {
                        liveFilesOn: true
                    },
                    sent
                },
                onRetry: n.onRetry,
                onReserved: (q)=>{
                    Le = q;
                },
                signal: n.signal,
                credentials: n.credentials,
                relayOnly
            })));
    }
    let xe = slug === undefined && n.createPath === undefined && iM() ? await Ll(n.credentials, n.signal, t0, relayOnly) : undefined;
    Le = xe;
    if (n.signal?.aborted) {
        return H("publish cancelled — nothing was published.");
    }
    return x(nr(we, (j)=>ji(De, j, $t_fields, Se, he, {
            t0,
            pageBytes: _e,
            lane: "inline",
            isRedeploy,
            hasCaps,
            template,
            ...workshopInfo && {
                workshopInfo
            },
            forced: he,
            ...Ye !== null && {
                echoedPin: Ye
            },
            ...n.liveFilesGate === true && {
                liveFilesOn: true
            },
            sent
        }, n.ownPublishes, n.credentials, workshopSurface, n.createPath, n.onRetry, n.signal, undefined, xe, relayOnly)));
}
async function Ll(credentials, signal, r, relayOnly) {
    if (signal?.aborted) {
        return;
    }
    try {
        let h = {
            refreshOAuth: true,
            headers: Bd(),
            timeout: 30000,
            credentials,
            relayOnCredentialRefusal: true
        };
        let b;
        try {
            b = relayOnly !== undefined ? await Cr("/api/frame/deploy/prepare", iSt(), h, relayOnly, signal) : await md.post("/api/frame/deploy/prepare", iSt(), h);
        } catch (error) {
            if (error instanceof rt) {
                return;
            }
            throw error;
        }
        if (b.ok && b.status === 200 && typeof b.data?.slug === "string" && rr.test(b.data.slug)) {
            return b.data.slug;
        }
        if (!b.ok || b.status !== 403 && b.status !== 404) {
            f("artifact_publish", "reserve_unavailable", {
                reserve_status: b.ok ? b.status : 0
            });
        }
    } catch (error) {
        f("artifact_publish", "reserve_unavailable", {
            reserve_status: 0,
            ...GX(error, r)
        });
    }
}
async function nr(e, n) {
    let r = await n(e);
    if (r.err === null || r.thumbnailRejected === undefined || r.strandedSlug !== undefined || r.liveVersion !== undefined) {
        return r;
    }
    if (e.thumbnail === undefined && e.thumbnailDark === undefined) {
        m("artifact_publish", "thumbnail_rejected");
        return r;
    }
    f("artifact_publish", "thumbnail_rejected");
    let { thumbnail, thumbnailDark, ...rest } = e;
    let y = r.created === undefined ? await n(rest) : await n({
        ...rest,
        slug: r.created.slug
    }, r.created.version);
    if (y.err === null) {
        return {
            ...y,
            warnings: [
                ...y.warnings ?? [],
                `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.`
            ]
        };
    }
    return y;
}
function CYr() {
    if (dp() === "claude-vscode") {
        return "epitaxy_pane";
    }
    if (ou()) {
        return "desktop_pane";
    }
    return "terminal_link";
}
async function Eer(event_name, n) {
    try {
        let r = await md.post("/api/frame/track", {
            event_name,
            ...n.slug && {
                slug: n.slug
            },
            ...n.via && {
                via: n.via
            },
            ...n.mode && {
                mode: n.mode
            }
        }, {
            refreshOAuth: true,
            headers: Bd(),
            timeout: 5000,
            credentials: n.credentials
        });
        if (!r.ok) {
            t(`[artifact] /track skipped: ${r.reason}`);
        } else if (r.status !== 204) {
            t(`[artifact] /track ${r.status}: ${fE(r.data)}`);
        }
    } catch (error) {
        t(`[artifact] /track failed: ${error instanceof Error ? error.message : String(error)}`);
    }
}
const Dl = [
    "frame_daily_publish_cap_reached",
    "frame_daily_push_cap_reached"
];
const Bl = {
    frame_daily_publish_cap_reached: "daily_new",
    frame_daily_push_cap_reached: "daily_pushes"
};
const jl = p(()=>u({
        error: U(Dl),
        message: o().catch("")
    }));
const Hl = {
    daily_new: "daily new-artifact limit for your plan reached — resets at UTC midnight",
    daily_pushes: "daily publish limit for your plan reached — resets at UTC midnight"
};
const ker = "publish 429: ";
const Ss = "x-frame-push-remaining";
function xs(e) {
    let n = typeof e === "string" ? e.trim() : "";
    if (/^\d{1,9}$/.test(n)) {
        return Number(n);
    }
}
function nSt(e = Date.now()) {
    let n = new Date(e);
    return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1) / 1000;
}
function Es(e) {
    let n = typeof e === "string" ? Date.parse(e) : Number.NaN;
    return nSt(Number.isFinite(n) ? n : Date.now());
}
function Xt(e) {
    let n = jl().safeParse(e);
    if (!n.success) {
        return;
    }
    let capType = Bl[n.data.error];
    let s = RF(n.data.message, 200);
    let h = s !== "" ? s : Hl[capType];
    return {
        capType,
        message: `${ker}${h}`
    };
}
const maxAttempts = 3;
const baseMs = 5000;
const Pr = 20000;
const Ul = 30000;
function As(e) {
    let n = Rg(e) ?? 2000;
    if (n <= Ul) {
        return n;
    }
}
function Rs(e) {
    return Math.min(Rg(e) ?? Gl, Pr);
}
function ks(e, n) {
    let r = Math.round(Zv({
        attempt: e - 1,
        baseMs,
        jitter: {
            kind: "proportional",
            ratio: 0.25
        }
    }));
    let s = Rg(n) ?? 0;
    return Math.min(Math.max(s, r), Pr);
}
class cn extends Error {
    startedAtMs;
    constructor(e, n, r){
        super(e, r);
        this.startedAtMs = n;
    }
}
class Vt extends cn {
}
class Ut extends cn {
    seen;
    resent;
    constructor(e, n, r, s, h){
        super(e, n, r);
        this.seen = s;
        this.resent = h;
    }
}
function Vl(error) {
    return error.seen !== undefined && qks(error.seen);
}
function Ts(e) {
    let n = 0;
    let r = 0;
    return (s)=>{
        n += s.json_bytes;
        r += s.wire_bytes;
        e.json_bytes = n;
        e.wire_bytes = r;
        e.body_gzip = e.body_gzip === true || s.body_gzip;
        if (s.gzip_skip !== undefined) {
            e.gzip_skip = d(s.gzip_skip);
        }
        if (s.gzip_fallback_status !== undefined) {
            e.gzip_fallback_status ??= s.gzip_fallback_status;
        }
    };
}
function Ps(e) {
    if (e.attemptId === undefined) {
        return "/api/frame/deploy/direct";
    }
    return `/api/frame/deploy/direct?attempt_id=${e.attemptId}${e.resend ? "&resend=1" : ""}`;
}
async function Yl(e, error, r) {
    let s = {
        ...GX(error.cause, error.startedAtMs),
        ...error.seen
    };
    t(`[artifact] publish request died before its whole body left this machine (socket took ${s.bytes_flushed} of ${s.body_bytes} bytes) \u2014 re-sending once on a fresh connection`);
    let h = 0;
    try {
        let b = await e();
        h = b.ok ? b.status : 0;
        return b;
    } finally{
        f("artifact_publish", "deploy_resent", {
            ...r,
            ...s,
            deploy_final_status: h
        });
    }
}
const Cs = 2;
var Gl = 2000;
function $s(e) {
    return e.ok && e.fromFrame && e.status === 409 && gt(e.data) === "publish_settling";
}
function ql(data) {
    return typeof data === "object" && data !== null && "replayed" in data && data.replayed === true;
}
async function Kl(e, error, r, s) {
    let h = {
        ...GX(error.cause, error.startedAtMs),
        ...error instanceof Ut && error.seen,
        leg: d(error instanceof Vt ? "relay" : "direct")
    };
    t("[artifact] publish request ended without an answer — re-sending it once, marked, so a publish that already landed is answered rather than repeated");
    let b = 0;
    let resend_route;
    let settle_resends = 0;
    let replayed = false;
    let S = false;
    try {
        let P = await e();
        resend_route = d(P.route);
        while($s(P) && settle_resends < Cs){
            let R = Rs(P.response?.headers?.["retry-after"]);
            t(`[artifact] the first attempt landed and its content is still being stored \u2014 re-sending in ${R}ms`);
            await Q(R, s);
            if (s?.aborted) {
                break;
            }
            settle_resends += 1;
            P = await e();
            resend_route = d(P.route);
        }
        b = P.ok ? P.status : 0;
        if (P.route === "direct" && Evn(P) && error instanceof Vt) {
            S = true;
            throw error;
        }
        replayed = P.ok && P.status >= 200 && P.status < 300 && ql(P.data);
        return P;
    } finally{
        f("artifact_publish", "deploy_resent", {
            ...r,
            ...h,
            deploy_final_status: b,
            ...resend_route !== undefined && {
                resend_route
            },
            settle_resends,
            replayed,
            ...S && {
                resend_refused: true
            },
            ...s?.aborted && {
                cancelled: true
            }
        });
    }
}
class Os extends cn {
}
async function Sn(e) {
    let n = performance.now();
    try {
        return await e();
    } catch (error) {
        if (error instanceof rt) {
            throw error;
        }
        throw new Os(error instanceof Error ? error.message : String(error), n, {
            cause: error
        });
    }
}
function ur(error, n) {
    if (error instanceof cn) {
        return {
            ...GX(error.cause, error.startedAtMs),
            ...error instanceof Ut && error.resent && {
                resent: true
            }
        };
    }
    return GX(error, n);
}
async function fr(e, n, credentials, s, onEncoding, b = {}, y = undefined, signal) {
    let w = {
        refreshOAuth: true,
        headers: Bd(),
        streamUpload: {
            tailFloorMs,
            onSettled: (P)=>{
                b.seen = P;
                s(P);
            }
        },
        gzipBody: {
            tailFloorMs: tailFloorMs(undefined),
            onEncoding
        },
        ...b.freshConnection && {
            freshConnection: true
        },
        relayOnCredentialRefusal: true,
        maxBodyLength: 2 * Sf,
        maxContentLength: us,
        relayProbe,
        credentials
    };
    let S = y !== undefined ? await Cr(e, n, w, y, signal) : await md.post(e, n, w);
    s(undefined);
    return S;
}
function Xl(e) {
    if (e.slug !== undefined || e.baseVersion !== undefined) {
        return "names an existing artifact";
    }
    if (e.force === true) {
        return "sets force";
    }
    if (e.capabilities !== undefined) {
        return "declares capabilities";
    }
    if (e.contract !== undefined) {
        return "sets a contract";
    }
    if ((e.removeFiles?.length ?? 0) > 0) {
        return "removes files";
    }
    if (e.createPath !== undefined || e.liveFiles !== undefined || (e.files ?? []).some((n)=>n.live !== undefined || n.reseed === true)) {
        return "makes or changes a live file";
    }
}
function Jl(e) {
    return rs() && (kvn("POST", e, "only") !== "relay" || !kUn());
}
function Ns(e) {
    m("artifact_publish", "relay_only_unsent", e);
    return {
        ...H("Nothing was published: a publish made without asking must go through the cloud session's gateway, which could not carry it. Publishing it again now goes through the usual permission check, which may need a person's approval."),
        notCarried: true
    };
}
function Is() {
    return H("publish cancelled — nothing was published.");
}
function Fs(error) {
    return error instanceof Error && error.cause instanceof ht;
}
class rt extends Error {
    constructor(e = "this request never reached the artifact server: the session gateway did not carry it"){
        super(e);
        this.name = "RelayOnlyUnsentError";
    }
}
class ht extends rt {
    constructor(){
        super("this request was not sent again: the publish was cancelled while the session gateway was busy");
        this.name = "RelayOnlyCancelledError";
    }
}
const Ter = 5000;
async function Cr(e, n, r, s, h) {
    for(let b = false;; b = true){
        if (Jl(e)) {
            throw new rt;
        }
        s.count += 1;
        let y = await md.postRelayOnly(e, n, r);
        if (EGe(y)) {
            throw new rt;
        }
        if (!y.ok || y.gatewayRetryAfterMs === undefined) {
            return y;
        }
        s.count -= 1;
        if (h?.aborted) {
            throw new ht;
        }
        if (b) {
            f("artifact_publish", "relay_only_busy");
            throw new rt;
        }
        await Q(Math.min(y.gatewayRetryAfterMs, Ter), h);
        if (h?.aborted) {
            throw new ht;
        }
    }
}
function tailFloorMs(e) {
    return (Der(e) + 30) * 1000;
}
async function Ms(e, onRetry, signal, s, h = false, b = false, y = false) {
    let attemptId = randomUUID();
    let w = false;
    let S = async (freshConnection = false)=>{
        let W = {
            attemptId,
            ...freshConnection && {
                freshConnection
            },
            ...w && {
                resend: true
            }
        };
        let Z = performance.now();
        try {
            return await e(W);
        } catch (error) {
            if (error instanceof rt) {
                if (deploy_attempts === 1 && y) {
                    throw error;
                }
                throw new Ut(Et(error instanceof ht ? "the publish was cancelled before a later send of it went out" : "a later send of this publish could not go through the cloud session's gateway"), Z, {
                    cause: error
                }, W.seen, freshConnection);
            }
            let fe = fE(error instanceof Error ? error.message : String(error));
            throw $C(error) ? new Vt(Et(`relay request failed: ${fe}`), Z, {
                cause: error
            }) : new Ut(Et(`deploy request failed: ${fe}`), Z, {
                cause: error
            }, W.seen, freshConnection);
        }
    };
    let deploy_attempts = 1;
    let R;
    try {
        R = await S();
    } catch (error) {
        if (signal?.aborted) {
            throw error;
        }
        if (b && (error instanceof Vt || error instanceof Ut && fZ(error.cause))) {
            deploy_attempts += 1;
            w = true;
            R = await Kl(()=>S(true), error, s, signal);
        } else if (error instanceof Ut && fZ(error.cause) && Vl(error)) {
            deploy_attempts += 1;
            R = await Yl(()=>S(true), error, s);
        } else {
            throw error;
        }
    }
    let B = false;
    let V;
    let K = (C)=>{
        V ??= C.status === 429 ? 429 : 503;
        t(`[artifact] /deploy/direct ${C.status} \u2014 retrying in ${C.delayMs}ms (attempt ${C.attempt} of ${C.maxAttempts})`);
        onRetry?.(C);
    };
    let N = async (C)=>{
        await Q(C, signal);
        if (signal?.aborted) {
            t("[artifact] /deploy/direct retry cancelled by user");
            return false;
        }
        deploy_attempts += 1;
        B = true;
        R = await S();
        B = false;
        return true;
    };
    let J = R.ok && R.fromFrame && R.status === 503 && gt(R.data) === "render_busy";
    try {
        if (R.ok && R.fromFrame && R.status === 429) {
            if (Xt(R.data) !== undefined) {
                t("[artifact] /deploy/direct 429 is a plan cap — not retrying");
                return R;
            }
            let O = As(R.response?.headers?.["retry-after"]);
            if (O === undefined) {
                return R;
            }
            K({
                status: 429,
                attempt: 2,
                maxAttempts: 2,
                delayMs: O
            });
            await N(O);
            return R;
        }
        if (J && R.ok) {
            let O = Math.min(Rg(R.response?.headers?.["retry-after"]) ?? 1000, Pr);
            K({
                status: 503,
                attempt: 2,
                maxAttempts: 2,
                delayMs: O
            });
            await N(O);
            return R;
        }
        let attempt = 2;
        let W = false;
        while(R.ok && R.fromFrame && R.status === 503 && !(h && Pn(R.status, R.data)) && attempt <= maxAttempts){
            let O = ks(attempt, R.response?.headers?.["retry-after"]);
            K({
                status: 503,
                attempt,
                maxAttempts,
                delayMs: O
            });
            if (b && !w && !Pn(R.status, R.data)) {
                w = true;
                W = true;
            }
            if (!await N(O)) {
                break;
            }
            attempt += 1;
        }
        let Z = 0;
        while(W && $s(R) && Z < Cs){
            let O = Rs(R.response?.headers?.["retry-after"]);
            t(`[artifact] an earlier attempt landed and its content is still being stored \u2014 re-sending in ${O}ms`);
            if (!await N(O)) {
                break;
            }
            Z += 1;
        }
        return R;
    } finally{
        if (V !== undefined) {
            f("artifact_publish", V === 503 ? "deploy_503_retried" : "deploy_429_retried", {
                ...s,
                deploy_attempts,
                deploy_final_status: B || !R.ok ? 0 : R.status,
                ...signal?.aborted && {
                    cancelled: true
                },
                ...J && {
                    render_busy: true
                }
            });
            onRetry?.({
                settled: true
            });
        }
    }
}
function kn(e, n) {
    if (!(n.ok && n.fromFrame && n.status === 400)) {
        return;
    }
    let r = SB(n.data);
    let s = ELe.test(r);
    if (Ar(e) && s && /["']deadline["']/.test(r)) {
        return "deadline";
    }
    if (f_e(e.requestId).request_id !== undefined && s && /["']request_id["']/.test(r)) {
        return "request_id";
    }
    if (e.icon && (s && /["']icon["']/.test(r) || /^icon (?:must be|and tint can only)\b/.test(r.trimStart()))) {
        return "icon";
    }
}
function Ls(e, n) {
    switch(n){
        case "deadline":
            return {
                ...e,
                deadline: undefined
            };
        case "icon":
            return {
                ...e,
                icon: undefined
            };
        case "request_id":
            return {
                ...e,
                requestId: undefined
            };
    }
}
function pr() {
    return Et("the server answered for a different artifact than the one targeted, so its answer was not adopted");
}
function an() {
    return Et("deploy returned an incomplete or malformed response");
}
async function ji(e, n, r, s, h, b, ownPublishes, credentials, workshopSurface, createPath, onRetry, signal, B, V, K = undefined) {
    let N = {
        page_bytes: b.pageBytes,
        lane: d(b.lane),
        forced: b.forced,
        is_redeploy: b.isRedeploy,
        has_base_version: s !== undefined,
        ...V !== undefined && {
            reserved: true
        },
        template: d(b.template),
        ...Ds(n),
        ...B !== undefined && B.length > 0 && {
            n_files: B.length
        }
    };
    let J;
    if (createPath !== undefined && B !== undefined && B.length > 0) {
        let he = On(e, B, []);
        if (he !== null) {
            m("artifact_publish", he.kind, N);
            return H(he.msg);
        }
        let ae = Object.create(null);
        ae["index.html"] = {
            content: e,
            contentType: "text/html",
            live: true
        };
        let Se = gr - Ft(e);
        for (let we of B){
            let it = on(we);
            Se -= Ft(it);
            if (Se < 0) {
                m("artifact_publish", "too_large", N);
                return H("file too large");
            }
            ae[we.path] = {
                content: it,
                contentType: we.contentType,
                ...we.live === true && {
                    live: true
                }
            };
        }
        J = ae;
    }
    let C = null;
    let W = "none";
    let fresh_publish = !n.slug;
    let O;
    let fe = Ts(N);
    try {
        let he = h;
        let baseVersion = s;
        let Se = false;
        let we = V !== undefined ? {
            ...n,
            slug: V
        } : n;
        t(`[artifact] publish \u2192 ${createPath ?? "/api/frame/deploy/direct"}${J !== undefined ? ` (files: ${Object.keys(J).length})` : ""}`);
        let it = true;
        let Ie = ()=>{
            let pe = it;
            it = false;
            return Ms((ke)=>fr(createPath ?? Ps(ke), {
                    ...es(we),
                    ...iSt(),
                    ...Mer(),
                    ...r,
                    ...createPath === undefined && he && {
                        force: true
                    },
                    ...createPath === undefined && baseVersion && {
                        baseVersion
                    },
                    ...createPath === undefined && Se && !baseVersion && we.slug && {
                        expectUnpublished: true
                    },
                    ...J !== undefined ? {
                        files: J
                    } : {
                        content: e
                    }
                }, credentials, (lt)=>O = lt, fe, ke, K, signal), onRetry, signal, N, true, createPath === undefined && we.slug !== undefined, pe);
        };
        let De = {
            deadline: false,
            icon: false,
            request_id: false
        };
        let _e = async ()=>{
            let pe = await Ie();
            for(let ke = kn(we, pe); ke !== undefined; ke = kn(we, pe)){
                f("artifact_publish", `${ke}_rejected`, N);
                t(`[artifact] ${ke} refused upstream \u2014 retrying without it`);
                we = Ls(we, ke);
                De[ke] = true;
                pe = await Ie();
            }
            return pe;
        };
        let te = await _e();
        if (he && te.ok && te.fromFrame && te.status === 400) {
            let pe = SB(te.data);
            if (ELe.test(pe) && (/\bforce\b/.test(pe) || baseVersion !== undefined && /\bbaseVersion\b/.test(pe))) {
                f("artifact_publish", "force_field_rejected", N);
                t("[artifact] CP rejected force/baseVersion as unknown — retrying without them");
                he = false;
                baseVersion = undefined;
                te = await _e();
            }
        }
        if (he && baseVersion && te.ok && te.fromFrame && te.status === 400 && /force and baseVersion are mutually exclusive/.test(SB(te.data))) {
            f("artifact_publish", "exclusivity_retry", N);
            t("[artifact] pre-relaxation CP rejected force+baseVersion — retrying without the precondition");
            baseVersion = undefined;
            te = await _e();
        }
        let At = (pe)=>{
            if (pe.reason === "no-auth") {
                return Jg(pe.detail);
            }
            return `publish unavailable: ${pe.reason}`;
        };
        if (!te.ok) {
            m("artifact_publish", te.reason, N);
            return H(At(te));
        }
        C = te.fromFrame ? Pn(te.status, te.data) : null;
        if (C && !fresh_publish && C.slug !== n.slug) {
            m("artifact_publish", "deploy_slug_mismatch", N);
            return H(pr());
        }
        if (C && C.kind === undefined && createPath === undefined && !signal?.aborted) {
            let pe = ks(2, te.response?.headers?.["retry-after"]);
            t(`[artifact] /deploy/direct 503 after commit (${C.slug}) \u2014 retrying against it in ${pe}ms`);
            onRetry?.({
                status: 503,
                attempt: 2,
                maxAttempts: 2,
                delayMs: pe
            });
            try {
                await Q(pe, signal);
                if (!signal?.aborted) {
                    if (fresh_publish) {
                        we = {
                            ...we,
                            slug: C.slug
                        };
                        Se = C.live === undefined;
                        he = false;
                    }
                    if (C.live !== undefined) {
                        baseVersion = C.live;
                    }
                    W = "unknown";
                    it = true;
                    try {
                        te = await _e();
                    } catch (error) {
                        if (!(error instanceof rt)) {
                            throw error;
                        }
                        W = error instanceof ht ? "cancelled" : "unsent";
                        return xt(H(W === "cancelled" ? "publish cancelled" : "The publish failed with a server error (503)"), C, fresh_publish, W);
                    }
                    W = "answered";
                }
            } finally{
                f("artifact_publish", "deploy_stranded_retried", {
                    ...N,
                    fresh_publish,
                    deploy_final_status: W === "answered" && te.ok ? te.status : 0,
                    ...signal?.aborted && {
                        cancelled: true
                    }
                });
                onRetry?.({
                    settled: true
                });
            }
            if (!te.ok) {
                m("artifact_publish", te.reason, N);
                return xt(H(At(te)), C, fresh_publish, W);
            }
        }
        if (!te.fromFrame) {
            m("artifact_publish", "relay_error", {
                ...N,
                deploy_status: te.status
            });
            return xt(H(yr(te.status)), C, fresh_publish, W);
        }
        if (((baseVersion ?? s) || Se || UU()) && te.status === 409) {
            let pe = Gs(te.data);
            if (pe) {
                m("artifact_publish", "conflict", N);
                return xt({
                    ...H(Ws(pe)),
                    conflict: true,
                    conflictDetail: pe
                }, C, fresh_publish, W);
            }
        }
        if (createPath !== undefined && te.status === 404) {
            m("artifact_publish", "create_not_enabled", {
                ...N,
                deploy_status: 404
            });
            return H("create endpoint not available (404) — nothing was created");
        }
        if (te.status === 400 && xr(SB(te.data), {
            ldx: false
        })) {
            m("artifact_publish", "ldx_unsupported", N);
            return xt(H(Sr(SB(te.data))), C, fresh_publish, W);
        }
        if (te.status < 200 || te.status >= 300) {
            let pe = wr(te.status, te.data, b.isRedeploy, b.echoedPin !== undefined ? {
                pin: b.echoedPin,
                declaredCaps: b.hasCaps
            } : undefined, b.liveFilesOn === true, b.sent, {
                retryAfter: te.response?.headers?.["retry-after"],
                ...b.template !== "pr_review" && {
                    reservedSlug: V
                },
                created: fresh_publish && C !== null
            });
            if (pe.code !== "thumbnail_rejected") {
                m("artifact_publish", pe.code ?? "deploy_failed", {
                    ...N,
                    deploy_status: te.status,
                    ...pe.extra
                });
            }
            let ke = pe.code === "path_is_live" ? ta(te.data) : undefined;
            return xt({
                ..._r(pe, `deploy ${te.status}: ${fE(te.data)}`),
                ...ke !== undefined && {
                    refusedLivePath: ke
                }
            }, C, fresh_publish, W);
        }
        let Je = mr().safeParse(te.data);
        if (!Je.success) {
            m("artifact_publish", "deploy_incomplete", N);
            return xt(H(an()), C, fresh_publish, W);
        }
        let { slug, version, read, shared, kind } = Je.data;
        if (we.slug && slug !== we.slug) {
            m("artifact_publish", "deploy_slug_mismatch", N);
            return xt(H(pr()), C, fresh_publish, W);
        }
        if (createPath !== undefined && ($i == null || kind !== $i.LIVE_DOC_KIND)) {
            m("artifact_publish", "deploy_incomplete", N);
            return H(an());
        }
        let Be = ps(te.data);
        let Ze = Be?.map((pe)=>pe.path);
        let je = createPath === undefined ? new Set : new Set([
            "index.html",
            ...Object.entries(J ?? {}).filter(([, pe])=>pe.live === true).map(([pe])=>pe)
        ]);
        let Ne = (Ze ?? []).filter((pe)=>je.has(pe));
        let Ke = [
            ...lr(te.data),
            ...hs(Ne),
            ...gs(Ze, new Set([
                "index.html",
                ...Object.keys(J ?? {})
            ]))
        ].slice(0, Cn);
        let st = cr(te.data);
        let Qe = xs(te.response?.headers?.[Ss]);
        let mt = Es(te.response?.headers?.date);
        let kt = Bs(Je.data, he ? undefined : baseVersion, new Set([
            "index.html",
            ...Object.keys(J ?? {}),
            ...Ze ?? []
        ]));
        Jbt(ownPublishes, slug, version, {
            merged: br(te.data)
        });
        let Lt = Vs(Je.data);
        g("artifact_publish", {
            ...N,
            e2e_ms: Math.round(performance.now() - b.t0),
            is_redeploy: b.isRedeploy,
            has_caps: b.hasCaps,
            push_remaining_seen: Qe !== undefined,
            ...js(kt.mergedOver),
            read_back_echoed: Lt.readBackEchoed === true
        });
        return {
            url: Sm(slug),
            slug,
            version,
            err: null,
            ...Qe !== undefined && {
                pushRemaining: Qe,
                pushResetAt: mt
            },
            ...workshopSurface && {
                workshopSurface: true
            },
            ...b.workshopInfo && {
                workshop: b.workshopInfo
            },
            ...read !== undefined && {
                read
            },
            ...shared !== undefined && {
                shared
            },
            ...Hs(Je.data, Ar(we)),
            ...kt,
            ...De.deadline && {
                deadlineDropped: true
            },
            ...De.icon && {
                iconDropped: true
            },
            ...Us(Je.data, r, createPath !== undefined),
            ...Lt,
            ...kind !== undefined && {
                kind
            },
            ...Ke.length > 0 && {
                warnings: Ke
            },
            ...st !== undefined && {
                embeds: st
            },
            ...Ze !== undefined && {
                livePaths: Ze
            },
            ...Be !== undefined && {
                liveDocs: Be
            },
            ...Ne.length > 0 && {
                bornLive: Ne
            }
        };
    } catch (error) {
        if (error instanceof rt) {
            if (error instanceof ht) {
                return Is();
            }
            return Ns(N);
        }
        if (!Fs(error)) {
            m("artifact_publish", error instanceof Vt ? "relay_request_error" : "request_error", {
                ...N,
                ...ur(error, b.t0),
                ...O
            });
        }
        return xt(H(error instanceof Error ? error.message : String(error)), C, fresh_publish, W);
    }
}
const Cge = 4;
function hr(content) {
    if (typeof content === "string") {
        return content;
    }
    return content.toString("utf8");
}
async function $r(e, n, page_bytes, s = "sidecar file") {
    let h = e.filter((y)=>ixt.has(GD(y.contentType)));
    if (h.length === 0) {
        return null;
    }
    let { verifyWorkshopHtml } = await import("/$bunfs/root/chunk-4djdmfny.js");
    for (let y of h){
        let v = verifyWorkshopHtml(hr(y.content), n, "probe");
        if (v.ok) {
            continue;
        }
        f("workshop_html_publish", "verifier_refused");
        m("artifact_publish", "workshop_verifier_refused", {
            page_bytes,
            sidecar_bytes: Buffer.byteLength(y.content, "utf8")
        });
        let w = v.violations.slice(0, 6).map((P)=>`- [${P.rule}] ${P.where} \u2014 ${P.hint}`);
        let S = v.violations.length > 6 ? `
(and ${v.violations.length - 6} more)` : "";
        return H(`${s} ${$5(y.path)} refused by the workshop structural verifier:
` + w.join(`
`) + S);
    }
    return null;
}
var Rge = new Set([
    "text/html",
    ...[],
    "text/css",
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/javascript",
    "application/javascript",
    "application/json",
    "application/manifest+json",
    "application/xml",
    "text/xml",
    "image/svg+xml"
]);
var Tn = new Set([
    ...Rge,
    "application/wasm",
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "font/woff",
    "font/woff2",
    "font/ttf",
    "font/otf",
    "application/font-woff",
    "application/font-woff2",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "video/ogg",
    "application/pdf"
]);
const Zl = [
    "py",
    "ipynb",
    "yaml",
    "yml",
    "toml",
    "ini",
    "cfg",
    "conf",
    "env",
    "lock",
    "sh",
    "bash",
    "ps1",
    "bat",
    "ts",
    "tsx",
    "jsx",
    "vue",
    "scss",
    "less",
    "rs",
    "go",
    "java",
    "kt",
    "c",
    "h",
    "cpp",
    "cs",
    "rb",
    "php",
    "r",
    "swift",
    "lua",
    "sql",
    "db",
    "sqlite",
    "parquet",
    "jsonl",
    "ndjson",
    "log",
    "tex",
    "rtf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "odt",
    "ods",
    "epub",
    "key",
    "pages",
    "numbers",
    "zip",
    "tar",
    "gz",
    "tgz",
    "7z",
    "rar",
    "mov",
    "avi",
    "m4a",
    "aac",
    "flac",
    "heic",
    "bmp",
    "tif",
    "tiff",
    "psd",
    "fig",
    "eot",
    "xhtml",
    "htm",
    "bin",
    "exe",
    "dmg",
    "tsv",
    "pkl",
    "npy",
    "npz",
    "pt",
    "onnx",
    "safetensors",
    "h5",
    "svelte",
    "mdx",
    "jsonc"
];
const Ql = [
    "text/x-python",
    "text/x-python-script",
    "application/x-python-code",
    "application/x-ipynb+json",
    "application/x-yaml",
    "application/yaml",
    "text/yaml",
    "text/x-yaml",
    "application/toml",
    "text/x-toml",
    "text/x-sh",
    "text/x-shellscript",
    "application/x-sh",
    "application/typescript",
    "text/typescript",
    "text/x-typescript",
    "text/jsx",
    "text/x-scss",
    "text/x-sql",
    "application/sql",
    "application/x-sqlite3",
    "application/vnd.apache.parquet",
    "application/x-ndjson",
    "application/jsonl",
    "application/ld+json",
    "application/geo+json",
    "application/octet-stream",
    "text/x-log",
    "text/rtf",
    "application/rtf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.oasis.opendocument.text",
    "application/epub+zip",
    "application/zip",
    "application/x-zip-compressed",
    "application/gzip",
    "application/x-tar",
    "application/x-7z-compressed",
    "video/quicktime",
    "video/x-msvideo",
    "audio/mp4",
    "audio/x-m4a",
    "audio/aac",
    "audio/flac",
    "image/heic",
    "image/bmp",
    "image/tiff",
    "image/vnd.adobe.photoshop",
    "application/x-figma",
    "application/vnd.ms-fontobject",
    "application/xhtml+xml",
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "image/jpg",
    "text/json",
    "text/x-markdown",
    "application/x-javascript",
    "text/x-java-source",
    "text/x-c"
];
function Aer(e, n) {
    let r = extname(e).toLowerCase().slice(1);
    let s = Zl.find((w)=>w === r);
    let refused_ext = r === "" ? d("none") : Y4(e) !== undefined ? d("served") : s !== undefined ? d(s) : d("other");
    if (n === undefined) {
        return {
            refused_ext
        };
    }
    let b = GD(n);
    let y = Ql.find((w)=>w === b);
    let refused_type = Tn.has(b) ? d("served_variant") : y !== undefined ? d(y) : d("other");
    return {
        refused_ext,
        refused_type
    };
}
var ec = new Set([
    "image/svg+xml",
    "text/xml",
    "application/xml"
]);
const n3 = 67108864;
const rSt = 268435456;
const Cer = 15728640;
var gr = 12582912;
const tc = 1048576;
const sr = 20971520;
const Zt = 256;
const mvn = 512;
const Hi = /\b(manifest|mode)\b/;
function on(e) {
    if (Rge.has(e.contentType)) {
        if (typeof e.content === "string") {
            return e.content;
        }
        return e.content.toString("utf8");
    }
    return (typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content).toString("base64");
}
function Ds(e) {
    let thumbnails = (e.thumbnail !== undefined ? 1 : 0) + (e.thumbnailDark !== undefined ? 1 : 0);
    if (thumbnails > 0 && t3()) {
        return {
            thumbnails
        };
    }
    return {};
}
function zi(e) {
    if (e !== undefined && t3()) {
        return Math.ceil(e.length / 3) * 4;
    }
    return 0;
}
function nc(e) {
    if (typeof e.content === "string") {
        return Buffer.byteLength(e.content, "utf8");
    }
    return e.content.length;
}
function Ft(e) {
    return Buffer.byteLength(_(e), "utf8") - 2;
}
function rc(e, preconditions) {
    let r = Object.create(null);
    let s = Object.keys(e);
    if (s.length === 0) {
        return;
    }
    for (let h of s){
        let b = e[h];
        let ifMatch = preconditions.get(h);
        if (ifMatch === undefined || b === undefined) {
            return;
        }
        if (b === null) {
            if (ifMatch === null) {
                return;
            }
            r[h] = {
                delete: true,
                ifMatch
            };
            continue;
        }
        if (!("contentType" in b) || b.live !== undefined || b.reseed !== undefined) {
            return;
        }
        r[h] = {
            ...b,
            ifMatch
        };
    }
    return r;
}
const ic = /unknown field "(live|reseed)"/;
const sc = /manifest must not be empty/;
function On(e, n, r) {
    let s = (w)=>({
            kind: "files_invalid",
            msg: w
        });
    let h = (w)=>({
            kind: "too_large",
            msg: w
        });
    if (n.length + r.length + (e === null ? 0 : 1) > Zt) {
        return s(`This publish lists ${n.length} ${I(n.length, "file")}${r.length > 0 ? ` and ${r.length} ${I(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${mvn} in all.`);
    }
    let y = new Set([
        "index.html"
    ]);
    for (let w of r){
        if (!w || w === "index.html") {
            return s(w ? `"index.html" is the page itself and can't be removed. Drop that entry.` : "A removal in `files` has an empty path. Name the published path to remove.");
        }
        if (y.has(w)) {
            return s(`${_(w)} is listed more than once in \`files\`. List each path once.`);
        }
        y.add(w);
    }
    let v = e === null ? 0 : Buffer.byteLength(e, "utf8");
    for (let w of n){
        if (!w.path || w.path === "index.html") {
            return s(w.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" — the page argument is the index' : "every file needs a non-empty path");
        }
        if (y.has(w.path)) {
            return s(`${_(w.path)} is listed more than once in \`files\`. List each path once.`);
        }
        y.add(w.path);
        if (typeof w.content === "string" && !Rge.has(w.contentType)) {
            return s(`${`file ${_(w.path)}: contentType ${_(w.contentType)} `}is binary — pass its content as a Buffer (raw bytes), not a string`);
        }
        let S = Rge.has(w.contentType);
        let P = nc(w);
        let R = S ? Sf : Cer;
        if (P > R) {
            return h(`file ${_(w.path)} is ${Math.ceil(P / 1024 / 1024)}MB (per-file max ${R / 1024 / 1024}MB${S ? "" : " for binary files, which must fit an upload request base64-encoded"})`);
        }
        if (S) {
            let B = typeof w.content === "string" ? w.content : w.content.toString("utf8");
            if (typeof w.content !== "string" && !Buffer.from(B, "utf8").equals(w.content)) {
                return s(`${`file ${_(w.path)}: contentType ${_(w.contentType)} `}is a text type but the Buffer is not valid UTF-8 — fix the encoding, or use a binary contentType`);
            }
            let V = B.indexOf("\uFFFD");
            if (V !== -1 || !Yc(B)) {
                return s(`${`file ${_(w.path)} ` + (V !== -1 ? `has the replacement character U+FFFD at ${vn(B, V)}` : "holds an unpaired surrogate (half of a split character)")} — replace it with the intended text${w.contentType === "text/html" ? " (in HTML, write an intended U+FFFD as &#xFFFD;)" : ""}`);
            }
        }
        if (S && P > sr / 6) {
            let B = Ft(on(w));
            if (B > sr) {
                return h(`${`file ${_(w.path)} is ${Math.ceil(B / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${sr / 1024 / 1024}MB) \u2014 `}heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file`);
            }
        }
        v += P;
    }
    if (v > n3) {
        return h(`total content is ${Math.ceil(v / 1024 / 1024)}MB \u2014 one publish may send at most ${n3 / 1024 / 1024}MB. Nothing was published: send part of the files now and the rest with another publish to the same url (files left out of a later publish are kept; a version may total ${rSt / 1024 / 1024}MB).`);
    }
    return null;
}
var Or = "copying files from another artifact is not enabled for this account — nothing was published; publish with local files instead";
function Nr(e, n, r, s) {
    if (r.length === 0) {
        return null;
    }
    if (n.length + r.length + s.length + (e === null ? 0 : 1) > Zt) {
        return `This publish lists ${n.length + r.length} ${I(n.length + r.length, "file")} (copies included)${s.length > 0 ? ` and ${s.length} ${I(s.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${mvn} in all.`;
    }
    let b = new Set([
        "index.html",
        ...n.map((v)=>v.path),
        ...s
    ]);
    let y = new Set;
    for (let v of r){
        if (!v.path || v.path === "index.html") {
            if (v.path) {
                if (e === null) {
                    return `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here`;
                }
                return 'files must not contain "index.html" — the page argument is the index';
            }
            return "every file needs a non-empty path";
        }
        if (b.has(v.path)) {
            return `${_(v.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
        }
        b.add(v.path);
        if (!rr.test(v.from.slug) || !v.from.path) {
            return `file ${_(v.path)}: its source must name an artifact and a published path`;
        }
        if (v.from.path === "index.html") {
            return `file ${_(v.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
        }
        for (let w of [
            v.path,
            v.from.path
        ]){
            let S = Y4(w);
            if (S !== undefined && nJt.has(GD(S))) {
                return `file ${_(v.path)}: an HTML or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
            }
        }
        y.add(`${v.from.slug}@${v.from.ver ?? ""}`);
    }
    if (y.size > Cge) {
        return `files copy from ${y.size} source artifact versions; at most ${Cge} per publish`;
    }
    return null;
}
async function RYr(e, n, r) {
    let s = Tr(e, "file");
    if (s !== null) {
        return s.err;
    }
    if (n.length > 0 && !FMe()) {
        m("artifact_publish", "copy_from_flag_off", {
            n_copied: n.length
        });
        return Or;
    }
    let h = On(null, e, [])?.msg ?? Nr(null, e, n, []);
    if (h !== null || r === undefined) {
        return h;
    }
    return (await $r(e, await $n(), 0, "file"))?.err ?? null;
}
async function xYr(e, n) {
    if (Id() !== null) {
        return H("publishing to an Artifact created from an Artifact type is not available in eval stub mode");
    }
    let r = n.copiedFiles ?? [];
    if (!(ee().frozenArtifactTypes?.typesOn ?? iM())) {
        let v = n.removeFiles ?? [];
        m("artifact_publish", "multifile_flag_off", {
            n_files: e.length + r.length,
            n_removed: v.length
        });
        return H(`This artifact was created from an artifact type, so it takes supporting files only, and ${v.length > 0 ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged." : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged."}`);
    }
    if (r.length > 0 && !FMe()) {
        m("artifact_publish", "copy_from_flag_off", {
            n_copied: r.length
        });
        return H(Or);
    }
    let h = Tr(e, "file");
    if (h !== null) {
        return h;
    }
    if (n.verifyWorkshopHtml !== undefined) {
        let v = await $r(e, await $n(), 0, "file");
        if (v !== null) {
            return v;
        }
    }
    let b = await un({
        slug: n.slug,
        hostGrant: sYe(a.CLAUDE_ARTIFACT_HOST_GRANT),
        storedCaps: undefined,
        signal: n.signal,
        credentials: n.credentials,
        lane: "files"
    });
    if (!b.ok) {
        return H(b.err);
    }
    let y = {
        slug: n.slug,
        title: n.title,
        favicon: n.favicon,
        ...n.label !== undefined && {
            label: n.label
        },
        ...n.note !== undefined && {
            note: n.note
        },
        ...n.deadline !== undefined && {
            deadline: n.deadline
        },
        ...n.requestId !== undefined && {
            requestId: n.requestId
        },
        ...n.description !== undefined && {
            description: n.description
        },
        ...n.publishContext !== undefined && {
            publishContext: n.publishContext
        },
        ...n.originMetadata !== undefined && {
            originMetadata: n.originMetadata
        },
        ...n.autoEditAttribution && {
            autoEditAttribution: n.autoEditAttribution
        }
    };
    return her(n.ownPublishes, n.slug, ()=>fs(Ir(null, e, r, n.removeFiles ?? [], y, {}, {
            baseVersion: n.baseVersion,
            force: n.force,
            ownPublishes: n.ownPublishes,
            tele: {
                t0: performance.now(),
                pageBytes: 0,
                lane: "inline",
                isRedeploy: true,
                hasCaps: false,
                template: "plain",
                forced: n.force,
                ...n.baseRebase !== undefined && {
                    baseRebase: n.baseRebase
                }
            },
            ...n.copiedCrossOrgOk === true && {
                copiedCrossOrgOk: true
            },
            ...n.preconditions !== undefined && {
                preconditions: n.preconditions
            },
            onRetry: n.onRetry,
            signal: n.signal,
            credentials: n.credentials
        }), n.slug, n.credentials, n.signal));
}
async function PYr(e) {
    if (Id() !== null) {
        return H("invalid publish options");
    }
    if (!iM()) {
        m("artifact_publish", "multifile_flag_off", {
            n_files: 0,
            n_removed: 0
        });
        return H("invalid publish options");
    }
    if (![
        ...e.base.values()
    ].some((s)=>s.live === true)) {
        return H("invalid publish options");
    }
    let n = await un({
        slug: e.slug,
        hostGrant: sYe(a.CLAUDE_ARTIFACT_HOST_GRANT),
        storedCaps: undefined,
        signal: e.signal,
        credentials: e.credentials,
        lane: "page"
    });
    if (!n.ok) {
        return H(n.err);
    }
    let r = {
        slug: e.slug,
        title: e.title,
        favicon: e.favicon,
        ...e.label !== undefined && {
            label: e.label
        },
        ...e.deadline !== undefined && {
            deadline: e.deadline
        },
        ...e.requestId !== undefined && {
            requestId: e.requestId
        },
        ...e.publishContext !== undefined && {
            publishContext: e.publishContext
        }
    };
    return her(e.ownPublishes, e.slug, ()=>Ir(null, [], [], [], r, {}, {
            baseVersion: e.baseVersion,
            force: false,
            ownPublishes: e.ownPublishes,
            tele: {
                t0: performance.now(),
                pageBytes: 0,
                lane: "inline",
                isRedeploy: true,
                hasCaps: false,
                template: "plain",
                forced: false,
                liveFilesOn: true
            },
            liveFiles: {
                detach: [],
                base: e.base
            },
            onRetry: e.onRetry,
            signal: e.signal,
            credentials: e.credentials
        }));
}
async function Ir(e, n, r, s, h, b, y) {
    let { baseVersion, force, tele, onRetry, signal, credentials } = y;
    let y_relayOnly = y.relayOnly;
    let K = y.copiedCrossOrgOk === true;
    let y_liveFiles = y.liveFiles;
    let J = y_liveFiles?.detach ?? [];
    let C = {
        page_bytes: tele.pageBytes,
        lane: d(tele.lane),
        n_files: n.length + r.length,
        n_copied: r.length,
        n_removed: s.length,
        forced: tele.forced,
        template: d(tele.template),
        is_redeploy: tele.isRedeploy,
        has_base_version: baseVersion !== undefined,
        reserved: false,
        ...Ds(h),
        ...tele.baseRebase !== undefined && {
            base_rebase: d(tele.baseRebase)
        }
    };
    let W = (x)=>{
        m("artifact_publish", "files_invalid", C);
        return H(x);
    };
    let Z = (x)=>{
        m("artifact_publish", "too_large", C);
        return H(x);
    };
    let mode = e === null || h.slug !== undefined && baseVersion !== undefined ? "patch" : "replace";
    if (s.length > 0 && mode === "replace") {
        return W(h.slug === undefined ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries." : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries.");
    }
    if (y_liveFiles !== undefined && h.slug !== undefined && mode === "replace") {
        return W("invalid publish options");
    }
    if (y_liveFiles?.page?.reseed === true && y_liveFiles.page.live !== undefined) {
        return W("invalid publish options");
    }
    let fe = J.length > 0 || y_liveFiles?.page?.reseed === true || y_liveFiles?.page?.live === false || n.some((x)=>x.reseed === true || x.live === false);
    if (fe && mode === "replace") {
        return W("invalid publish options");
    }
    for (let x of n){
        if (x.reseed === true && x.live !== undefined) {
            return W("invalid publish options");
        }
        if ((x.live === true || x.reseed === true) && !ahs.has(GD(x.contentType))) {
            return W("invalid publish options");
        }
        let re = y_liveFiles?.base?.get(x.path);
        if (y_liveFiles?.base !== undefined && re?.live !== true && (x.reseed === true || x.live === false)) {
            return W("invalid publish options");
        }
    }
    for (let x of J){
        if (y_liveFiles?.base !== undefined && y_liveFiles.base.get(x)?.live !== true) {
            return W("invalid publish options");
        }
    }
    if (y_liveFiles?.base !== undefined && y_liveFiles.base.get("index.html")?.live !== true && (y_liveFiles.page?.reseed === true || y_liveFiles.page?.live === false)) {
        return W("invalid publish options");
    }
    for (let x of s){
        if (y_liveFiles?.base?.get(x)?.live === true) {
            return W("invalid publish options");
        }
    }
    let he = On(e, n, [
        ...s,
        ...J
    ]);
    if (he !== null) {
        if (he.kind === "too_large") {
            return Z(he.msg);
        }
        return W(he.msg);
    }
    let ae = Nr(e, n, r, [
        ...s,
        ...J
    ]);
    if (ae !== null) {
        return W(ae);
    }
    for (let x of r){
        if (y_liveFiles?.base?.get(x.path)?.live === true) {
            return W("invalid publish options");
        }
    }
    let Se = (x, re)=>mode === "patch" && y_liveFiles?.base?.get(x)?.live === true && re.reseed !== true && re.live !== false;
    let we = fe || y_liveFiles?.page?.live === true || n.some((x)=>x.live === true) || [
        ...y_liveFiles?.base?.values() ?? []
    ].some((x)=>x.live);
    let Ie = mode === "patch" && !force && y.preconditions === undefined && (e !== null || we);
    let De = (x, re, Y)=>{
        let xe = Ie ? y_liveFiles?.base?.get(x) : undefined;
        return xe !== undefined && !xe.live && xe.sha256 !== undefined && xe.contentType === Y && xe.sha256 === at(re);
    };
    let _e = [];
    let te = y_liveFiles?.page ?? {};
    let At = e !== null && te.live === false;
    let Je = At ? [
        "index.html",
        ...J
    ] : J;
    let Fe;
    if (Se("index.html", te)) {
        _e.push("index.html");
    } else if (e !== null && !At && !(we && te.live === undefined && te.reseed !== true && De("index.html", e, "text/html"))) {
        Fe = {
            content: e,
            contentType: "text/html",
            ...te.live !== undefined && {
                live: te.live
            },
            ...te.reseed === true && {
                reseed: true
            }
        };
    }
    let Me = Object.create(null);
    if (Fe !== undefined) {
        Me["index.html"] = Fe;
    }
    let We = [];
    let qe = Fe?.content !== undefined ? Ft(Fe.content) : 0;
    let Rt = zi(h.thumbnail) + zi(h.thumbnailDark);
    let Be = gr - qe - Rt;
    let Ze = (x)=>!Se(x.path, x) && (x.live === true || x.reseed === true || x.live === false);
    let je = Object.create(null);
    for (let x of n.filter(Ze)){
        let re = on(x);
        let Y = Ft(re);
        if (Y > Be) {
            let xe = gr - qe - Be;
            return Z("file too large");
        }
        Be -= Y;
        je[x.path] = {
            content: re,
            contentType: x.contentType,
            ...x.live !== undefined && {
                live: x.live
            },
            ...x.reseed === true && {
                reseed: true
            }
        };
        Me[x.path] = je[x.path];
    }
    let Ne = [];
    let files_omitted = 0;
    for (let x of n){
        if (Ze(x)) {
            continue;
        }
        if (Se(x.path, x)) {
            _e.push(x.path);
            continue;
        }
        if (x.live === undefined && De(x.path, x.content, x.contentType)) {
            files_omitted += 1;
            continue;
        }
        Ne.push(x);
    }
    let st = 0;
    for (let x of Ne){
        let re = on(x);
        let Y = Ft(re);
        if (Y <= Be) {
            Be -= Y;
            st += Y;
            Me[x.path] = {
                content: re,
                contentType: x.contentType
            };
        } else {
            let xe = at(x.content);
            We.push({
                f: x,
                sha: xe,
                wire: re
            });
            Me[x.path] = {
                sha256: xe,
                contentType: x.contentType
            };
        }
    }
    for (let x of s){
        Me[x] = null;
    }
    for (let x of Je){
        Me[x] = {
            live: false
        };
    }
    let Qe = {
        liveKey: Je.length > 0 || Object.keys(je).length > 0 || Fe?.live !== undefined || Fe?.reseed === true,
        emptyPatch: we && Object.keys(Me).length === 0 && r.length === 0,
        ldx: false
    };
    let mt;
    let kt = (x)=>mt = x;
    let Lt = Ts(C);
    let pe = false;
    let ke = (x)=>Ms((re)=>fr(Ps(re), x, credentials, kt, Lt, re, y_relayOnly, signal).then((Y)=>{
                pe = true;
                return Y;
            }, (Y)=>{
                if (!(Y instanceof rt)) {
                    pe = true;
                }
                throw Y;
            }), onRetry, signal, C, false, typeof x.slug === "string", y_relayOnly !== undefined && h.slug === undefined && !pe);
    let if_match_sent = false;
    let ze = (x)=>{
        let re = mode === "patch" && !force && y.preconditions !== undefined ? rc(x, y.preconditions) : undefined;
        if_match_sent = re !== undefined;
        return re ?? x;
    };
    let Ye = {
        ...es(h),
        ...iSt(),
        ...Mer(),
        ...b
    };
    let Tt = {
        deadline: false,
        icon: false,
        request_id: false
    };
    let Wt = async (x)=>{
        let re = await ke(x);
        for(let Y = kn(h, re); Y !== undefined && x[Y] !== undefined; Y = kn(h, re)){
            f("artifact_publish", `${Y}_rejected`, C);
            t(`[artifact] ${Y} refused upstream \u2014 retrying without it`);
            delete Ye[Y];
            h = Ls(h, Y);
            Tt[Y] = true;
            let { [Y]: xe, ...rest } = x;
            x = rest;
            re = await ke(x);
        }
        return re;
    };
    let Qt = 15728640;
    let ot = [];
    {
        let x = [];
        let re = 0;
        for (let Y of We){
            let xe = Ft(Y.wire);
            if (x.length > 0 && re + xe > Qt) {
                ot.push(x);
                x = [];
                re = 0;
            }
            x.push(Y);
            re += xe;
        }
        if (x.length > 0) {
            ot.push(x);
        }
    }
    let Pt = async (x)=>{
        let re = As(x);
        if (re === undefined) {
            return false;
        }
        await Q(re, signal);
        if (signal?.aborted) {
            t("[artifact] 429 retry cancelled by user");
            return false;
        }
        return true;
    };
    let yt = (x)=>{
        let re = x.fromFrame && x.status === 429 ? Xt(x.data) : undefined;
        if (re) {
            m("artifact_publish", "publish_cap_reached", {
                ...C,
                cap_type: d(re.capType)
            });
        }
        return re;
    };
    let $e = r.map((c_1)=>({
            c: c_1
        }));
    let Dt = [];
    let ut = (x)=>{
        if ("c" in x) {
            return {
                path: x.c.path,
                from: {
                    slug: x.c.from.slug,
                    path: x.c.from.path,
                    ...x.c.from.ver !== undefined && {
                        ver: x.c.from.ver
                    }
                }
            };
        }
        return {
            path: x.f.path,
            content: x.wire,
            contentType: x.f.contentType
        };
    };
    let Bt = async (x, re)=>{
        let Y = K && re.some((de)=>"c" in de);
        let xe = ()=>fr("/api/frame/upload", {
                slug: x,
                ...Y && {
                    cross_org_ok: true
                },
                files: re.map(ut)
            }, credentials, kt, Lt, {}, y_relayOnly, signal);
        let j = await Sn(xe);
        if (j.ok && j.fromFrame && j.status === 429 && Xt(j.data) === undefined && await Pt(j.response?.headers?.["retry-after"])) {
            j = await Sn(xe);
        }
        return j;
    };
    let Ct = (x, re, Y)=>{
        if (re) {
            t(`[artifact] manifest publish refused (HTTP ${x}): ${fE(re)}`);
        }
        let xe = Y?.maybeGone ? ", or the artifact no longer exists or isn't yours to update" : "";
        if (s.length > 0) {
            return H(`The server didn't accept this update's file changes (HTTP ${x})${xe}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${Y?.debris ?? ""}`);
        }
        let j = Y?.debris ? " This publish didn't finish." : h.slug !== undefined ? " Nothing was published; the artifact is unchanged." : " Nothing was published.";
        return H(`The server didn't accept this publish's supporting files (HTTP ${x})${xe}.${j} Publish the page as a single file instead: inline what it needs and omit \`files\`.${Y?.debris ?? ""}`);
    };
    let debris = "";
    let vt;
    let $t = (x)=>{
        vt = x;
        C.reserved = true;
        debris = ` (A slug was reserved for it: publish again to slug ${x} rather than publishing fresh.)`;
        y.onReserved?.(x);
    };
    if (h.slug === undefined && y.reservedSlug !== undefined) {
        $t(y.reservedSlug);
    }
    let wt = (x)=>x.fromFrame && Qs(x.status, x.data);
    let Ot = (x, refusedStep)=>{
        m("artifact_publish", "rate_limited", {
            ...C,
            refused_status: x.status,
            ...Ks(x.data)
        });
        return {
            ...H(Zs({
                retryAfter: x.response?.headers?.["retry-after"],
                reservedSlug: vt,
                ...refusedStep !== undefined && {
                    refusedStep
                }
            })),
            transient: "rate_limited"
        };
    };
    let Le = ()=>H(`publish cancelled \u2014 nothing more was sent.${debris}`);
    try {
        let x = h.slug ?? y.reservedSlug;
        let re;
        let Y;
        let xe = baseVersion;
        let j = async (G, shas)=>{
            let Pe = {
                ...G !== undefined && {
                    slug: G
                },
                ...shas.length > 0 && {
                    shas
                },
                ...G === undefined && iSt()
            };
            let ge = {
                refreshOAuth: true,
                headers: Bd(),
                timeout: 30000,
                credentials,
                relayOnCredentialRefusal: true
            };
            let be = async ()=>{
                if (y_relayOnly === undefined) {
                    return md.post("/api/frame/deploy/prepare", Pe, ge);
                }
                return Cr("/api/frame/deploy/prepare", Pe, ge, y_relayOnly, signal);
            };
            let Ce = await Sn(be);
            if (Ce.ok && Ce.fromFrame && Ce.status === 429 && Xt(Ce.data) === undefined && await Pt(Ce.response?.headers?.["retry-after"])) {
                Ce = await Sn(be);
            }
            return Ce;
        };
        let de = (data)=>{
            if (typeof data?.slug === "string" && rr.test(data.slug)) {
                return data.slug;
            }
        };
        let q = false;
        let Oe = false;
        let jt = h.slug !== undefined && !(Ie && y_liveFiles?.base !== undefined);
        let Ve = We.length > 0 || $e.length > 0 || jt && st > tc;
        if (Ve) {
            let G = Ne.map((ge)=>({
                    f: ge,
                    sha: at(ge.content),
                    wire: on(ge)
                }));
            let ie;
            let Pe = "";
            for(let ge = 0; ge < 2; ge++){
                if (signal?.aborted) {
                    return Le();
                }
                let be = await j(x, G.map((se)=>se.sha));
                if (signal?.aborted) {
                    let se = debris === "" && x === undefined && be.ok && be.status === 200 ? de(be.data) : undefined;
                    if (se !== undefined) {
                        $t(se);
                    }
                    return Le();
                }
                if (!be.ok) {
                    ie = {
                        status: 0,
                        why: be.reason === "no-auth" ? Jg(be.detail) : `preflight unavailable: ${be.reason}`
                    };
                    break;
                }
                if (be.status === 404) {
                    if (r3(be.data)) {
                        m("artifact_publish", "prepare_not_found", C);
                        return {
                            ...H("the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published."),
                            ...h.slug !== undefined && {
                                gone: true
                            }
                        };
                    }
                    ie = {
                        status: 404,
                        why: "the preflight route answered 404"
                    };
                    break;
                }
                let Ce = yt(be);
                if (Ce) {
                    return H(debris ? `${Ce.message} \u2014 this publish didn't finish; try again after the reset.${debris}` : `${Ce.message} \u2014 nothing was published; try again after the reset.`);
                }
                if (wt(be)) {
                    if ($e.length > 0 || We.length > 0 || Oe) {
                        return Ot(be, $e.length > 0 ? bi($e.length) : undefined);
                    }
                    t("[artifact] preflight rate-limited — sending the one inline deploy instead");
                    ie = {
                        status: 429,
                        why: "the preflight was rate-limited"
                    };
                    break;
                }
                if (be.status !== 200) {
                    ie = {
                        status: be.status,
                        why: be.fromFrame ? `preflight ${be.status}: ${fE(be.data)}` : `preflight relay HTTP ${be.status}`
                    };
                    break;
                }
                let Mn = de(be.data);
                let Ln = be.data?.missing;
                if (Mn === undefined || !Array.isArray(Ln) || !Ln.every((se)=>typeof se === "string" && /^[0-9a-f]{64}$/.test(se))) {
                    ie = {
                        status: 200,
                        why: "a malformed preflight answer"
                    };
                    break;
                }
                if (x !== undefined && Mn !== x) {
                    m("artifact_publish", "prepare_slug_mismatch", C);
                    return H("the server answered the upload preflight for a different " + "artifact — not publishing.");
                }
                Oe = true;
                x = Mn;
                if (h.slug === undefined) {
                    $t(x);
                }
                let ia = new Set(Ln);
                let sa = G.filter((se)=>ia.has(se.sha));
                let Dn = [];
                {
                    let se = [];
                    let Re = 0;
                    for (let St of sa){
                        let Yt = Ft(St.wire);
                        if (se.length > 0 && Re + Yt > Qt) {
                            Dn.push(se);
                            se = [];
                            Re = 0;
                        }
                        se.push(St);
                        Re += Yt;
                    }
                    if (se.length > 0) {
                        Dn.push(se);
                    }
                }
                for (let se of Dn){
                    if (signal?.aborted) {
                        return Le();
                    }
                    let Re = await Bt(x, se);
                    if (!Re.ok) {
                        m("artifact_publish", Re.reason, C);
                        return H(Re.reason === "no-auth" ? Jg(Re.detail) + debris : `upload unavailable: ${Re.reason}. The publish was NOT completed; retry publishing to slug ${x}.`);
                    }
                    if (Re.status !== 200) {
                        let St = yt(Re);
                        if (St) {
                            return H(`${St.message} \u2014 this publish didn't finish. ` + `Publish again to slug ${x} after the reset.`);
                        }
                        if (wt(Re)) {
                            return Ot(Re);
                        }
                        m("artifact_publish", Re.fromFrame ? "prepare_upload_failed" : "prepare_upload_relay_error", {
                            ...C,
                            upload_status: Re.status
                        });
                        return H((Re.fromFrame ? `file upload ${Re.status} after the preflight: ${fE(Re.data)}` : `file upload failed after the preflight (relay HTTP ${Re.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${x}.`);
                    }
                }
                if ($e.length > 0) {
                    if (signal?.aborted) {
                        return Le();
                    }
                    let se = await Bt(x, $e);
                    if (!se.ok) {
                        m("artifact_publish", se.reason, C);
                        return H(se.reason === "no-auth" ? Jg(se.detail) + debris : `copying files from another artifact unavailable: ${se.reason}. The publish was NOT completed; retry publishing to slug ${x}.`);
                    }
                    if (se.status !== 200) {
                        let ve = yt(se);
                        if (ve) {
                            return H(`${ve.message} \u2014 this publish didn't finish. Publish again to slug ${x} after the reset.`);
                        }
                        if (wt(se)) {
                            return Ot(se, mi($e.map(({ c })=>({
                                    path: c.path,
                                    fromSlug: c.from.slug
                                }))));
                        }
                        let It = K && se.fromFrame && se.status === 400 && PHn(se.data, "cross_org_ok");
                        m("artifact_publish", It ? "copy_predates_cross_org" : se.fromFrame ? "copy_upload_failed" : "copy_upload_relay_error", {
                            ...C,
                            upload_status: se.status
                        });
                        let nt = fE(se.data);
                        let qt = /^files\[(\d+)\]: (.*)$/.exec(nt);
                        let dt = qt !== null ? $e[Number(qt[1])]?.c : undefined;
                        let Vr = qt !== null ? qt[2] : nt;
                        let copySourceNotFound = se.fromFrame && dt !== undefined && /not found/.test(Vr) ? dt : undefined;
                        let aa = " — the source artifact doesn't exist, this account can't open it, or it can't be copied from (all three get the same answer)";
                        if (It) {
                            return H("copying files from another organization's artifact isn't available on this server yet, so nothing was published. Don't retry the copy. Publish without the copied file instead, or tell the user cross-organization copies aren't supported yet.");
                        }
                        return {
                            ...H((se.fromFrame ? dt !== undefined ? `copying ${_(dt.path)} from artifact ${dt.from.slug} (${_(dt.from.path)}) was refused (${se.status}: ${Vr})${copySourceNotFound !== undefined ? aa : ""}` : se.status === 404 ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)" : `staging the copied files was refused (${se.status}: ${nt})` : `staging the copied files failed (relay HTTP ${se.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${x} once the cause is fixed.`),
                            ...copySourceNotFound !== undefined && {
                                copySourceNotFound
                            }
                        };
                    }
                    let Re = ()=>H(`the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${x}.${debris}`);
                    let St = se.data?.files;
                    if (!Array.isArray(St) || St.length !== $e.length) {
                        m("artifact_publish", "copy_echo_malformed", C);
                        return Re();
                    }
                    for (let [ve, It] of $e.entries()){
                        let nt = St[ve];
                        if (typeof nt?.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(nt.sha256) || typeof nt.contentType !== "string" || !Tn.has(nt.contentType)) {
                            m("artifact_publish", "copy_echo_malformed", C);
                            return Re();
                        }
                        It.sha = nt.sha256;
                        It.contentType = nt.contentType;
                    }
                    Dt = $e.filter((ve)=>tuo(ve.contentType ?? "")).map((ve)=>`${ve.c.path} (${ve.contentType})`);
                    if (y.workshopSurface && Dt.length > 0) {
                        m("artifact_publish", "copy_refused_sidecar", C);
                        return H(`workshop pages cannot ship renderable or executable sidecar files \u2014 each is a URL that bypasses the publish-time verifier: ${$5(Dt.join(", "))} (copied). Nothing was published.${debris}`);
                    }
                    let Yt = $e.filter((ve)=>nJt.has(GD(ve.contentType ?? "")));
                    if (Yt.length > 0) {
                        m("artifact_publish", "copy_refused_document", C);
                        return H(`copied file ${_(Yt[0].c.path)} is ${Yt[0].contentType}: a page or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
                    }
                    let pn = (path)=>Y4(path) === Gyr;
                    let zr = (contentType)=>GD(contentType ?? "") === Gyr;
                    let Gt = $e.filter((ve)=>!zr(ve.contentType) && (pn(ve.c.path) || pn(ve.c.from.path)));
                    if (Gt.length > 0) {
                        m("artifact_publish", "copy_refused_svg_mismatch", C);
                        let ve = Gt.slice(0, 20).map((dt)=>`${_(dt.c.path)} (${dt.contentType})`);
                        let It = Gt.length - ve.length;
                        let nt = Gt.length === 1;
                        let qt = Gt.every((dt)=>!pn(dt.c.from.path)) ? `copy ${nt ? "it" : "each"} to a path that does not end .svg, or ` : "";
                        return H(`copied ${I(Gt.length, "file")} ${ve.join(", ")}${It > 0 ? ` and ${It} more` : ""}: a file copied to or from a name ending .svg must be stored as an SVG image \u2014 ${qt}read ${nt ? "it" : "each"} with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
                    }
                    let Bn = $e.find((ve)=>zr(ve.contentType) && !pn(ve.c.path));
                    if (Bn !== undefined) {
                        m("artifact_publish", "copy_refused_svg_mismatch", C);
                        return H(`copied file ${_(Bn.c.path)} is ${Bn.contentType}: an SVG image is copied only to a name ending .svg \u2014 copy it to a path ending .svg, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
                    }
                    let Ur = (path)=>rJt.has(GD(Y4(path) ?? ""));
                    let jn = e === null ? $e.find((ve)=>rJt.has(GD(ve.contentType ?? "")) && !Ur(ve.c.path) && !Ur(ve.c.from.path)) : undefined;
                    if (jn !== undefined) {
                        m("artifact_publish", "copy_refused_script", C);
                        return H(`copied file ${_(jn.c.path)} is ${jn.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${debris}`);
                    }
                }
                if (signal?.aborted) {
                    return Le();
                }
                let zt = Object.create(null);
                if (Fe !== undefined) {
                    zt["index.html"] = Fe;
                }
                for (let [se, Re] of Object.entries(je)){
                    zt[se] = Re;
                }
                for (let se of G){
                    zt[se.f.path] = {
                        sha256: se.sha,
                        contentType: se.f.contentType
                    };
                }
                for (let se of $e){
                    zt[se.c.path] = {
                        sha256: se.sha,
                        contentType: se.contentType
                    };
                }
                for (let se of s){
                    zt[se] = null;
                }
                for (let se of Je){
                    zt[se] = {
                        live: false
                    };
                }
                let tt = await Wt({
                    ...Ye,
                    slug: x,
                    ...force && {
                        force: true
                    },
                    ...baseVersion && {
                        baseVersion
                    },
                    manifest: ze(zt),
                    mode
                });
                let Hr = tt.ok ? gt(tt.data) : undefined;
                if (tt.ok && tt.fromFrame && tt.status === 422 && ge === 0 && (Hr === "content_pending" || Hr === undefined && !vr(tt.data) && !Js.test(Kt(tt.data, 300)) && !(Qe.liveKey && typeof tt.data === "string"))) {
                    Pe = fE(tt.data);
                    continue;
                }
                if (tt.ok && tt.status === 200 && !tt.data?.version) {
                    m("artifact_publish", "prepare_no_version", C);
                    return H(an() + debris);
                }
                Y = tt;
                q = true;
                break;
            }
            if ($e.length > 0 && !q && !Oe) {
                m("artifact_publish", "copy_no_preflight", {
                    ...C,
                    prepare_status: ie?.status ?? 0
                });
                return H(`copying files from another artifact needs the upload preflight, which was unavailable here (${ie?.why ?? "no answer"}) \u2014 nothing was published.${debris}`);
            }
            if (Oe && !q) {
                m("artifact_publish", "prepare_rerun_failed", {
                    ...C,
                    prepare_status: ie?.status ?? 0
                });
                return H(`the deploy was refused (422: ${Pe}), and re-checking with the server before re-sending failed (${ie?.why ?? "no answer"}) \u2014 the publish was NOT ` + `completed. Retry publishing to slug ${x}.`);
            }
        } else if (x === undefined) {
            if (signal?.aborted) {
                return Le();
            }
            let G;
            let ie = "no answer";
            let Pe;
            let ge = false;
            try {
                G = await j(undefined, []);
            } catch (error) {
                if (error instanceof ht) {
                    throw error;
                }
                ge = error instanceof rt;
                ie = fE(error instanceof Error ? error.message : String(error));
                Pe = ur(error, tele.t0);
            }
            let be = G?.ok && G.status === 200 ? de(G.data) : undefined;
            if (be !== undefined) {
                x = be;
                $t(be);
            }
            if (signal?.aborted) {
                return Le();
            }
            if (be === undefined) {
                let Ce = G?.ok ? yt(G) : undefined;
                if (Ce) {
                    return H(`${Ce.message} \u2014 nothing was published; try again after the reset.`);
                }
                if (!ge && (!G?.ok || G.status !== 403 && G.status !== 404)) {
                    f("artifact_publish", "reserve_unavailable", {
                        ...C,
                        reserve_status: G?.ok ? G.status : 0,
                        ...Pe
                    });
                }
                t(`[artifact] could not reserve a slug before publishing (${G === undefined ? ie : G.ok ? `HTTP ${G.status}` : G.reason}); publishing without one \u2014 the server assigns it`);
            }
        }
        let Ee;
        let ft = [];
        let ct = {};
        if (!q && We.length > 0 && !x) {
            let G = Object.create(null);
            for (let [ge, be] of Object.entries(Me)){
                if (be !== null && "content" in be && be.content !== undefined) {
                    G[ge] = be;
                }
            }
            if (signal?.aborted) {
                return Le();
            }
            let ie = await Wt({
                ...Ye,
                ...force && {
                    force: true
                },
                manifest: G,
                mode: "replace"
            });
            if (!ie.ok) {
                m("artifact_publish", ie.reason, C);
                return H(`publish unavailable: ${ie.reason}`);
            }
            if (!ie.fromFrame) {
                m("artifact_publish", "relay_error", {
                    ...C,
                    deploy_status: ie.status
                });
                return H(yr(ie.status));
            }
            if (ie.status === 400 || ie.status === 404) {
                let ge = SB(ie.data);
                if (ie.status === 400 && Ki(ge, Qe)) {
                    m("artifact_publish", "live_files_unsupported", C);
                    return H(qi(ge, Qe.emptyPatch));
                }
                if (ie.status === 400 && xr(ge, Qe)) {
                    m("artifact_publish", "ldx_unsupported", C);
                    return H(Sr(ge));
                }
                if (ie.status === 404 || ELe.test(ge) && Hi.test(ge)) {
                    m("artifact_publish", "multifile_unsupported", C);
                    return Ct(ie.status, ge);
                }
            }
            if (ie.status !== 200) {
                let ge = wr(ie.status, ie.data, tele.isRedeploy, tele.echoedPin !== undefined ? {
                    pin: tele.echoedPin,
                    declaredCaps: tele.hasCaps
                } : undefined, tele.liveFilesOn === true, tele.sent, {
                    retryAfter: ie.response?.headers?.["retry-after"]
                });
                if (ge.code !== "thumbnail_rejected") {
                    m("artifact_publish", ge.code ?? "deploy_failed", {
                        ...C,
                        deploy_status: ie.status,
                        ...ge.extra
                    });
                }
                return _r(ge, `deploy ${ie.status}: ${fE(ie.data)}`);
            }
            let Pe = mr().safeParse(ie.data);
            if (!Pe.success) {
                m("artifact_publish", "deploy_incomplete", C);
                return H(an());
            }
            x = Pe.data.slug;
            re = Pe.data.version;
            Ee = cr(ie.data);
            ft = lr(ie.data);
            ct = {
                contract: Pe.data.contract,
                preferredContract: Pe.data.preferredContract,
                capabilities: Pe.data.capabilities
            };
            Jbt(y.ownPublishes, x, re, {
                merged: br(ie.data)
            });
            debris = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${x}.)`;
        }
        if (!q && We.length > 0) {
            if (x === undefined) {
                m("artifact_publish", "deploy_incomplete", C);
                return H("internal: no slug available for staged upload");
            }
            let G = new Set;
            for (let Pe of ot){
                if (signal?.aborted) {
                    return Le();
                }
                let ge = await Bt(x, Pe);
                if (!ge.ok) {
                    m("artifact_publish", ge.reason, C);
                    return H(`upload unavailable: ${ge.reason}.${debris}`);
                }
                if (ge.status === 404) {
                    m("artifact_publish", "multifile_unsupported", C);
                    return Ct(404, "", {
                        maybeGone: h.slug !== undefined,
                        debris
                    });
                }
                if (ge.status !== 200) {
                    let be = yt(ge);
                    if (be) {
                        return H(`${be.message} \u2014 try again after the reset.${debris}`);
                    }
                    if (wt(ge) && re === undefined) {
                        return Ot(ge);
                    }
                    m("artifact_publish", ge.fromFrame ? "upload_failed" : "upload_relay_error", {
                        ...C,
                        upload_status: ge.status
                    });
                    return H(ge.fromFrame ? `file upload ${ge.status}: ${fE(ge.data)}.${debris}` : `file upload failed (relay HTTP ${ge.status}).${debris}`);
                }
                for (let be of ge.data?.files ?? []){
                    if (be.sha256) {
                        G.add(be.sha256);
                    }
                }
            }
            let ie = We.filter((Pe)=>!G.has(Pe.sha));
            if (ie.length > 0) {
                m("artifact_publish", "upload_hash_mismatch", C);
                return H(`${`file upload did not stage ${ie.length} file(s) under the `}expected content hash — not publishing a manifest that would ${`reference unstaged content.${debris}`}`);
            }
        }
        if (!q && We.length > 0 && re !== undefined) {
            let G = Object.create(null);
            for (let ie of We){
                let Pe = {
                    sha256: ie.sha,
                    contentType: ie.f.contentType
                };
                Me[ie.f.path] = Pe;
                G[ie.f.path] = Pe;
            }
            if (signal?.aborted) {
                return Le();
            }
            xe = re;
            Y = await Wt({
                ...Ye,
                slug: x,
                manifest: G,
                mode: "patch",
                baseVersion: re
            });
        } else if (!q) {
            if (signal?.aborted) {
                return Le();
            }
            Y = await Wt({
                ...Ye,
                ...x && {
                    slug: x
                },
                ...force && {
                    force: true
                },
                ...baseVersion && {
                    baseVersion
                },
                manifest: ze(Me),
                mode
            });
        }
        if (Y === undefined) {
            m("artifact_publish", "deploy_incomplete", C);
            return H("internal: publish flow completed without a deploy");
        }
        if (!Y.ok) {
            m("artifact_publish", Y.reason, C);
            return H((Y.reason === "no-auth" ? Jg(Y.detail) : `publish unavailable: ${Y.reason}`) + debris);
        }
        if (!Y.fromFrame) {
            m("artifact_publish", "relay_error", {
                ...C,
                deploy_status: Y.status
            });
            return H(yr(Y.status) + debris);
        }
        if (Y.status === 400 || Y.status === 404) {
            let G = SB(Y.data);
            if (Y.status === 400 && Ki(G, Qe)) {
                m("artifact_publish", "live_files_unsupported", C);
                return H(qi(G, Qe.emptyPatch) + debris);
            }
            if (Y.status === 400 && xr(G, Qe)) {
                m("artifact_publish", "ldx_unsupported", C);
                return H(Sr(G) + debris);
            }
            let ie = Y.status === 404 && tele.isRedeploy && r3(Y.data);
            if (Y.status === 404 && !ie || ELe.test(G) && Hi.test(G)) {
                m("artifact_publish", "multifile_unsupported", C);
                return Ct(Y.status, G, {
                    maybeGone: Y.status === 404 && h.slug !== undefined,
                    debris
                });
            }
        }
        if ((baseVersion !== undefined || re !== undefined || UU()) && Y.status === 409) {
            let G = Gs(Y.data) ?? (if_match_sent ? gc(Y.data, new Set([
                ...Object.keys(Me),
                ...r.map((ie)=>ie.path)
            ])) : null);
            if (G) {
                m("artifact_publish", "conflict", {
                    ...C,
                    ...tele.baseRebase !== undefined && {
                        if_match_sent
                    },
                    ...G.paths !== undefined && {
                        conflict_reason: d("precondition_failed"),
                        conflict_paths: G.paths.length
                    }
                });
                return {
                    url: null,
                    slug: null,
                    version: null,
                    err: (G.paths !== undefined ? pc(G, G.paths) : Ws(G)) + debris,
                    conflict: true,
                    conflictDetail: G
                };
            }
        }
        if (Y.status !== 200) {
            let G = wr(Y.status, Y.data, tele.isRedeploy, tele.echoedPin !== undefined ? {
                pin: tele.echoedPin,
                declaredCaps: tele.hasCaps
            } : undefined, tele.liveFilesOn === true, tele.sent, {
                retryAfter: Y.response?.headers?.["retry-after"],
                reservedSlug: vt,
                created: vt === undefined && debris !== ""
            });
            if (G.code !== "thumbnail_rejected") {
                m("artifact_publish", G.code ?? "deploy_failed", {
                    ...C,
                    deploy_status: Y.status,
                    ...G.extra
                });
            }
            let ie = G.code === "path_is_live" ? ta(Y.data) : undefined;
            return {
                ..._r(G, `deploy ${Y.status}: ${fE(Y.data)}`, G.code === "rate_limited" && vt !== undefined ? "" : debris),
                ...ie !== undefined && {
                    refusedLivePath: ie
                },
                ...h.slug === undefined && x !== undefined && re !== undefined && {
                    created: {
                        slug: x,
                        version: re
                    }
                }
            };
        }
        let et = mr().safeParse(Y.data);
        if (!et.success) {
            m("artifact_publish", "deploy_incomplete", C);
            return H(an() + debris);
        }
        let { slug, version, read, shared, kind } = et.data;
        if (x && slug !== x) {
            m("artifact_publish", "deploy_slug_mismatch", C);
            return H(pr() + debris);
        }
        let tn = ps(Y.data);
        let Xe = tn?.map((G)=>G.path);
        let Nn = (Xe ?? []).filter((G)=>(G === "index.html" ? Fe : je[G])?.live === true);
        let reseeded = (Xe ?? []).filter((G)=>(G === "index.html" ? Fe : je[G])?.reseed === true);
        let Mr = D([
            ...ft,
            ...lr(Y.data),
            ...hs(Nn),
            ...yl(reseeded),
            ...wl(_e.filter((G)=>G !== "index.html")),
            ...At ? _l() : [],
            ...vl(J, Object.keys(je).filter((G)=>je[G]?.live === false)),
            ...gs(Xe?.filter((G)=>!_e.includes(G)), new Set([
                ...Object.keys(Me),
                ...r.map((G)=>G.path)
            ]))
        ]).slice(0, Cn);
        let na = _e.includes("index.html");
        let Lr = cr(Y.data) ?? Ee;
        let Fn = xs(Y.response?.headers?.[Ss]);
        let ra = Es(Y.response?.headers?.date);
        let Dr = Bs(et.data, force ? undefined : xe, new Set([
            ...Object.keys(Me),
            ...r.map((G)=>G.path),
            ...Xe ?? []
        ]));
        Jbt(y.ownPublishes, slug, version, {
            merged: br(Y.data)
        });
        let Br = Vs(et.data);
        g("artifact_publish", {
            ...C,
            e2e_ms: Math.round(performance.now() - tele.t0),
            is_redeploy: tele.isRedeploy,
            has_caps: tele.hasCaps,
            push_remaining_seen: Fn !== undefined,
            read_back_echoed: Br.readBackEchoed === true,
            staged_files: We.length,
            files_omitted,
            publish_path: d(q ? "preflight" : Ve ? "legacy" : "inline"),
            ...tele.baseRebase !== undefined && {
                if_match_sent
            },
            ...js(Dr.mergedOver)
        });
        let manifestPaths = e === null ? tSt(Y.data) : undefined;
        return {
            url: Sm(slug),
            slug,
            version,
            err: null,
            ...Fn !== undefined && {
                pushRemaining: Fn,
                pushResetAt: ra
            },
            ...y.workshopSurface && {
                workshopSurface: true
            },
            ...y.tele.workshopInfo && {
                workshop: y.tele.workshopInfo
            },
            ...Dt.length > 0 && {
                refusedClassSidecarTypes: Dt
            },
            ...read !== undefined && {
                read
            },
            ...shared !== undefined && {
                shared
            },
            ...Hs(et.data, Ye.deadline !== undefined),
            ...Dr,
            ...Tt.deadline && {
                deadlineDropped: true
            },
            ...Tt.icon && {
                iconDropped: true
            },
            ...Us(et.data.contract !== undefined ? et.data : {
                ...et.data,
                ...ct
            }, b),
            ...Br,
            ...kind !== undefined && {
                kind
            },
            ...Mr.length > 0 && {
                warnings: Mr
            },
            ...Lr !== undefined && {
                embeds: Lr
            },
            ...manifestPaths !== undefined && {
                manifestPaths
            },
            ...Xe !== undefined && {
                livePaths: Xe
            },
            ...tn !== undefined && {
                liveDocs: tn
            },
            ...Nn.length > 0 && {
                bornLive: Nn
            },
            ...reseeded.length > 0 && {
                reseeded
            },
            ...na && {
                pageCarriedLive: true
            }
        };
    } catch (error) {
        if (error instanceof rt) {
            if (!pe && h.slug === undefined) {
                if (error instanceof ht) {
                    return Is();
                }
                return Ns(C);
            }
            if (error instanceof ht) {
                return H(Et("the publish was cancelled before a later request of it went out") + debris);
            }
            m("artifact_publish", "relay_only_unsent_after_deploy", C);
            return H(Et("a later request could not go through the cloud session's gateway") + debris);
        }
        if (!Fs(error)) {
            m("artifact_publish", error instanceof Vt ? "relay_request_error" : "request_error", {
                ...C,
                ...ur(error, tele.t0),
                ...mt
            });
        }
        return H((error instanceof Error ? error.message : String(error)) + debris);
    }
}
function Sm(e) {
    return new URL(Skr(e), ZRe() ?? dn().CLAUDE_AI_ORIGIN).toString();
}
const PZe = [
    "mine",
    "shared"
];
function gvn(e) {
    return PZe.includes(e);
}
const p2t = [
    "mine",
    "shared",
    "all"
];
const ac = p(()=>u({
        frames: T(oe()).nullable(),
        starsEnabled: M().optional().catch(undefined)
    }));
const oc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function Rer(e, n) {
    let r = e === "" || typeof e === "string" && nYe.test(e) ? e : undefined;
    let shared = n === "" || typeof n === "string" && pE.test(n) ? n : undefined;
    return {
        read: n === undefined || shared !== undefined ? r : undefined,
        shared
    };
}
var mr = p(()=>u({
        slug: o().regex(rr),
        version: o().regex(pE),
        read: oe().optional(),
        shared: oe().optional(),
        kind: o().regex(nYe).optional().catch(undefined),
        contract: o().regex(eY).optional().catch(undefined),
        preferredContract: o().regex(eY).optional().catch(undefined),
        capabilities: ue(o().max(64), oe()).optional().catch(undefined),
        typeInstance: M().optional().catch(undefined),
        type: oe().optional(),
        ...lc(),
        ...cc()
    }).transform(({ read, shared, ...rest })=>({
            ...rest,
            ...Rer(read, shared)
        })));
function lc() {
    return {
        seq: E().int().nonnegative().optional().catch(undefined),
        deadline: u({
            until: E().int().positive().max(oSt)
        }).optional().catch(undefined),
        unchanged: A(true).optional().catch(undefined),
        replayed: A(true).optional().catch(undefined)
    };
}
function cc() {
    return {
        appliedOver: o().regex(pE).optional().catch(undefined),
        mergedFrom: o().regex(pE).optional().catch(undefined),
        changed: T(u({
            path: o().min(1).max(eSt),
            sha256: o().regex(/^[0-9a-f]{64}$/).nullable()
        })).max(2 * a2t).optional().catch(undefined)
    };
}
function br(data) {
    if (typeof data !== "object" || data === null || !("mergedFrom" in data)) {
        return false;
    }
    let { mergedFrom } = data;
    if (typeof mergedFrom === "string") {
        return mergedFrom !== "";
    }
    return mergedFrom != null;
}
function Bs(data, n, r) {
    let e_mergedFrom = data.mergedFrom;
    if (e_mergedFrom === undefined || e_mergedFrom !== n || e_mergedFrom === data.version || e_mergedFrom === data.appliedOver) {
        return {};
    }
    let changed = data.changed?.filter((b)=>!r.has(b.path));
    return {
        mergedOver: {
            base: e_mergedFrom,
            ...data.appliedOver !== undefined && {
                live: data.appliedOver
            },
            ...changed !== undefined && {
                changed
            }
        }
    };
}
function js(mergedOver) {
    if (mergedOver === undefined) {
        return {};
    }
    return {
        merged_over: true,
        ...mergedOver.changed !== undefined && {
            merged_changed: mergedOver.changed.length
        }
    };
}
var oSt = 253402300799999;
function Hs(data, n) {
    return {
        ...data.seq !== undefined && {
            seq: data.seq
        },
        ...n && data.deadline !== undefined && {
            deadline: {
                until: data.deadline.until
            }
        },
        ...data.unchanged && !data.replayed && {
            unchanged: true
        }
    };
}
function Us(e, n, r = false) {
    let s = "contract" in n ? n.contract : undefined;
    let contract = e.contract ?? s;
    let e_capabilities = e.capabilities;
    let y = BB(e_capabilities);
    let v = !("capabilities" in n) && y;
    let stored = e.contract !== undefined && (y || KL(e.contract) !== null) ? {
        contract: e.contract,
        ...e_capabilities !== undefined && {
            capabilities: e_capabilities,
            ...v && (r ? {
                declaredByRoute: true
            } : {
                carried: true
            })
        }
    } : undefined;
    return {
        ...contract !== undefined && {
            contract
        },
        ...e.preferredContract !== undefined && {
            preferredContract: e.preferredContract
        },
        ...stored !== undefined && {
            stored
        }
    };
}
function Vs(data) {
    let n = data.typeInstance === true ? xZe(data.type) : undefined;
    if (data.typeInstance === false || n !== undefined && (n.latest === undefined || n.latest === n.current)) {
        return {
            ...n !== undefined && {
                typeLock: n
            },
            readBackEchoed: true
        };
    }
    return {};
}
const dc = p(()=>u({
        slug: o().regex(rr),
        title: o().max(4000).optional(),
        favicon: oe().optional(),
        rel: o(),
        updatedAt: o().regex(oc).optional().catch(undefined),
        softDeleted: M().optional(),
        starred: M().optional().catch(undefined)
    }));
const hSe_1 = hSe;
const uc = 4194304;
async function IYr(e, { scope = "mine", pins = false, signal, credentials }) {
    let y = scope === "mine" ? undefined : Ser({
        credentials,
        ...signal && {
            signal
        }
    });
    let v;
    for(let O = 0;; O++){
        try {
            v = await md.get(`/api/frame/frames?limit=${hSe_1}`, {
                refreshOAuth: true,
                headers: Bd(),
                timeout: 15000,
                maxContentLength: uc,
                ...signal && {
                    signal
                },
                credentials
            });
        } catch (error) {
            if (O === 0 && !signal?.aborted) {
                await Q(300 + Math.random() * 500);
                continue;
            }
            if (!signal?.aborted) {
                m("artifact_list", "request_error");
            }
            return {
                err: `artifact listing failed: ${l(error)}`,
                reason: "request_error"
            };
        }
        if (v.ok && v.status >= 500 && O === 0 && !signal?.aborted) {
            await Q(300 + Math.random() * 500);
            continue;
        }
        break;
    }
    if (!v.ok) {
        m("artifact_list", "not_ok");
        return {
            err: v.reason === "no-auth" ? Jg(v.detail) : `artifact listing unavailable: ${v.reason}`,
            reason: "not_ok"
        };
    }
    if (!v.fromFrame) {
        m("artifact_list", "relay_error");
        return {
            err: `artifact listing failed (relay HTTP ${v.status})`,
            reason: "relay_error"
        };
    }
    if (v.status < 200 || v.status >= 300) {
        let reason = v.status >= 500 ? "http_5xx" : "http_4xx";
        m("artifact_list", reason);
        return {
            err: `artifact listing failed (HTTP ${v.status})`,
            reason
        };
    }
    let w = ac().safeParse(v.data);
    if (!w.success) {
        m("artifact_list", "malformed_body");
        return {
            err: "artifact listing failed: malformed response",
            reason: "malformed_body"
        };
    }
    let S = w.data.frames ?? [];
    let pinsEnabled = w.data.starsEnabled === true;
    let R = [];
    let B = new Set;
    let total = 0;
    let K = 0;
    let N = false;
    let J = false;
    for (let O of S){
        let fe = dc().safeParse(O);
        if (!fe.success) {
            K++;
            continue;
        }
        let { slug, title, rel, updatedAt, softDeleted, starred } = fe.data;
        if (gvn(rel)) {
            if (rel !== "mine") {
                N = true;
            } else if (N) {
                J = true;
            }
        }
        let favicon = $ct(fe.data.favicon);
        if (softDeleted === true || !gvn(rel)) {
            continue;
        }
        if (scope !== "all" && rel !== scope) {
            continue;
        }
        B.add(slug);
        total++;
        if (R.length >= e) {
            continue;
        }
        let title_1 = jf(title ?? "") ?? "Untitled";
        R.push({
            title: title_1,
            url: Sm(slug),
            ...favicon !== undefined && rel === "mine" && {
                favicon
            },
            ...updatedAt !== undefined && {
                updatedAt
            },
            ...scope !== "mine" && {
                rel
            },
            ...pins && pinsEnabled && starred === true && {
                pinned: true
            }
        });
    }
    if (S.length > 0 && R.length === 0 && K === S.length) {
        m("artifact_list", "all_rows_dropped");
        return {
            err: "artifact listing failed: response rows were unreadable",
            reason: "all_rows_dropped"
        };
    }
    let C = await y;
    for (let O of C?.listed ? C.rows : []){
        if (B.has(O.slug)) {
            continue;
        }
        B.add(O.slug);
        total++;
        if (R.length >= e) {
            continue;
        }
        R.push({
            title: jf(O.title ?? "") ?? "Untitled",
            url: Sm(O.slug),
            rel: "shared",
            external: true,
            ...O.role !== undefined && {
                role: O.role
            }
        });
    }
    g("artifact_list");
    if (scope !== "mine") {
        g(scope === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
    }
    let W = N && !J;
    let totalAtLeast = S.length >= hSe_1 && !(scope === "mine" && W) || K > 0 || scope !== "mine" && C?.listed === true && C.mayHaveMore;
    return {
        err: null,
        rows: R,
        total,
        totalAtLeast,
        truncated: R.length < total || totalAtLeast,
        ...pins && {
            pinsEnabled
        },
        ...C?.listed === true && {
            externalListed: true
        }
    };
}
function OYr(e, n) {
    if (n.err !== null || n.refusedClassSidecarTypes === undefined || n.refusedClassSidecarTypes.length === 0) {
        return null;
    }
    return {
        ...e ?? {},
        [n.slug]: n.refusedClassSidecarTypes
    };
}
function MYr(e, n) {
    return e?.[n] ?? [];
}
function fc(slug, n) {
    if (slug !== undefined && n === undefined) {
        return {
            kind: "contract",
            err: "workshop publish contract violation: redeploys must pass refusedSidecarHistory (the AppState sidecar record for the target slug; [] when none) — refusing rather than skipping the sidecar-ordering gate"
        };
    }
    if (n !== undefined && n.length > 0) {
        return {
            kind: "priors",
            err: `${`this artifact was previously published with renderable or executable sidecar files (${$5(n.join(", "))}) \u2014 those URLs would remain addressable beside the workshop page. `}Publish the workshop to a new artifact, or republish this one without workshop surface.`
        };
    }
    return null;
}
function HYr(e, n) {
    if (n.err !== null || n.workshopSurface !== true) {
        return null;
    }
    if ((e ?? []).includes(n.slug)) {
        return null;
    }
    return [
        ...e ?? [],
        n.slug
    ];
}
const f2t = "conflict: nothing was published — ";
function Ws(e) {
    let { readRemedy, forceAdvisory, contentReadsBlocked } = kae();
    return `${f2t}${sSt(e)} is live and this publish was not built on it. ` + (contentReadsBlocked ?? `Re-read it (${readRemedy}), merge your edits on top, then publish again.`) + (e.forceRefused ? kge : forceAdvisory);
}
function pc(e, paths) {
    if (paths.length === 0) {
        return `${f2t}${sSt(e)} changed some of the files this publish writes or removes, but its answer named none of them. List the artifact's files, read each file you are changing that changed, re-apply your change to what it holds now, and publish again.`;
    }
    let r = paths.slice(0, 20).map((h)=>_(h.path));
    let s = paths.length - r.length;
    return `${f2t}${sSt(e)} changed ${I(paths.length, "a file", "files")} this publish writes or removes: ${r.join(", ")}${s > 0 ? ` and ${s} more` : ""}. Read ${paths.length === 1 ? "it" : "each one"} again, re-apply your change to what it holds now, and publish again.`;
}
function sSt(e) {
    return `a newer version (${e.live})` + (e.liveEntry === "page" || e.liveEntry === "editor" ? " saved from inside the page (someone's edits or input on it)" : e.liveEntry === "publish" ? " published by another session or agent" : " published elsewhere (by another session, or by someone saving from the page itself)") + (e.createdAt ? ` at ${e.createdAt}` : "");
}
async function un(e) {
    let { hostGrant } = e;
    let e_storedCaps = e.storedCaps;
    if (hostGrant.kind === "absent") {
        return {
            ok: true,
            storedCaps: e_storedCaps
        };
    }
    let s = e.pageBytes !== undefined && {
        page_bytes: e.pageBytes
    };
    if (e_storedCaps === undefined) {
        let h = await yx(e.slug, undefined, e.credentials);
        if (h !== null && "err" in h && ar(h)) {
            await Q(or, e.signal);
            if (!e.signal?.aborted) {
                h = await yx(e.slug, undefined, e.credentials);
            }
        }
        if (h !== null && "err" in h) {
            m("artifact_publish", "host_grant_readback_failed", {
                ...s,
                ...xn(h)
            });
            return {
                ok: false,
                err: `${`couldn't read the artifact's stored capability declaration (${h.err}) \u2014 `}this computer's local-server grant bounds what a publish carries forward, so this publish cannot proceed without it. This is usually transient: retry.${e.lane === "page" ? " If the read keeps failing, publish the page declaring the capabilities you intend (capabilities: {} clears the stored declaration) together with contract: 'latest', which needs no read." : ""}`
            };
        }
        e_storedCaps = h?.capabilities ?? {};
    }
    return xer(e_storedCaps, hostGrant, e.lane, s);
}
function xer(e, n, r, s = false) {
    if (n.kind === "absent") {
        return {
            ok: true,
            storedCaps: e
        };
    }
    let h = T_r(e, n);
    if (!h.ok) {
        m("artifact_publish", "host_grant_carry_unreadable", {
            ...s,
            host_server_count: h.refused.length
        });
        let b = QI(h.refused, 8, (v)=>`"${Rf(v)}"`);
        let y = T_r(e, {
            kind: "granted",
            tools: new Map
        });
        return {
            ok: false,
            err: `${`this computer's local-server grant (${opo}) could not be read. It is set by the app that launched this session and is not something to fix from here. The artifact's stored declaration names ` + `local servers \u2014 ${b.join(", ")} \u2014 that a publish declaring nothing `}would carry forward, so this publish cannot proceed${r === "page" ? `. Declare what to send instead: publish the page with capabilities ${Wi(y.ok ? y.caps : {}, "its local servers")}, or with capabilities: {} to clear the stored declaration.` : Vi(r)}`
        };
    }
    if (h.dropped.length === 0) {
        return {
            ok: true,
            storedCaps: e
        };
    }
    m("artifact_publish", "host_grant_carry_refused", {
        ...s,
        dropped_count: h.dropped.length
    });
    return {
        ok: false,
        err: `the artifact's stored declaration carries local tools this computer ${`did not grant \u2014 ${Ys(h.dropped)} \u2014 and a publish `}that declares nothing would carry them forward, so this publish cannot proceed${r === "page" ? `. Declare what to send instead: publish the page with capabilities ${Wi(h.caps, "them")}, or with capabilities: {} to clear the stored declaration.` : Vi(r)}`
    };
}
function Vi(e) {
    if (e === "files") {
        return " from this session: this artifact's declaration comes from its type and cannot be changed from here.";
    }
    return " from this session: an Artifact made from this type carries its declaration, and that cannot be changed from here.";
}
function Wi(e, n) {
    let r = Cg(_(e), {
        max: 600
    });
    if (r.length < 600) {
        return `set to the stored declaration without ${n}: ${r}`;
    }
    return `set to the stored declaration without ${n} (it is too long to print here)`;
}
async function DYr(e) {
    return un({
        slug: e.slug,
        hostGrant: sYe(a.CLAUDE_ARTIFACT_HOST_GRANT),
        storedCaps: undefined,
        signal: e.signal,
        credentials: e.credentials,
        lane: "files"
    });
}
async function LYr(e) {
    return un({
        slug: e.slug,
        hostGrant: sYe(a.CLAUDE_ARTIFACT_HOST_GRANT),
        storedCaps: undefined,
        signal: e.signal,
        credentials: e.credentials,
        lane: "page"
    });
}
function Ys(dropped) {
    return QI(dropped, 8, (n)=>{
        if (n.tool === null) {
            return `all of "${Rf(n.server)}"`;
        }
        return `tool "${Rf(n.tool, {
            max: 128
        })}" on "${Rf(n.server)}"`;
    }).join("; ");
}
function H(err) {
    return {
        url: null,
        slug: null,
        version: null,
        err
    };
}
function Pn(e, n) {
    if (e !== 503 || !n || typeof n !== "object" || !("slug" in n) || typeof n.slug !== "string" || !rr.test(n.slug)) {
        return null;
    }
    return {
        slug: n.slug,
        ..."live" in n && typeof n.live === "string" && pE.test(n.live) && {
            live: n.live
        },
        ..."kind" in n && typeof n.kind === "string" && nYe.test(n.kind) && {
            kind: n.kind
        }
    };
}
function xt(e, n, fresh_publish, s) {
    if (!n) {
        return e;
    }
    let h = s === "answered" ? ", and the automatic retry did not repair it" : s === "unknown" ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it" : s === "unsent" ? "; the automatic retry could not go through the cloud session's gateway, so it was not sent" : s === "cancelled" ? "; the publish was cancelled before the automatic retry was sent" : "";
    if (!fresh_publish) {
        if (e.conflict) {
            return e;
        }
        return {
            ...e,
            err: `${e.err} \u2014 the new version was recorded but its content was not stored${h}.`,
            ...n.live !== undefined && {
                liveVersion: e.liveVersion ?? n.live
            }
        };
    }
    let b = Sm(n.slug);
    if (n.kind !== undefined) {
        return {
            ...e,
            err: `${e.err} \u2014 the server created ${b} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`
        };
    }
    return {
        ...e,
        err: e.conflict ? `${e.err} \u2014 ${b} is the artifact this publish's first attempt created without storing its content.` : `${e.err} \u2014 the server created ${b} but could not store its content${h}.`,
        strandedSlug: n.slug,
        ...!e.conflict && (e.liveVersion ?? n.live) !== undefined && {
            liveVersion: e.liveVersion ?? n.live
        }
    };
}
function hc(malformed) {
    return QI(malformed, 8, (s)=>{
        switch(s.kind){
            case "not_object":
                return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
            case "no_servers":
                return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is refused`;
            case "dynamic_not_boolean":
                return 'capabilities.mcp "dynamic" must be the JSON boolean true (or left out) — no other value is accepted, a string or a number included; with "dynamic": true the page may call connectors the declaration does not list, and "servers" may then be empty';
            case "entry_shape":
                return `servers[${s.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` + (s.wrongKey === null ? "" : ` (the key is "server", not "${Rf(s.wrongKey)}")`);
            case "tools_shape":
                return `${Rxt(s.server)} "${Rf(s.server)}": "tools" must be an array of tool-name strings`;
            case "no_tools":
                {
                    let h = Rf(s.display ?? s.server);
                    let b = s.display === null ? "" : ` (declared as "${Rf(s.server)}")`;
                    let y = s.available.length === 0 ? "" : ` (available this session: ${QI([
                        ...s.available
                    ], 12, (v)=>`"${Rf(v)}"`).join(", ")})`;
                    return `${Rxt(s.server)} "${h}"${b} lists no tools \u2014 set "tools" to the upstream names of the "${h}" tools the page calls${y}; an empty or omitted "tools" list is refused and never means "all tools"`;
                }
            case "unknown_tools":
                {
                    let h = Rf(s.display ?? s.server);
                    let b = s.display === null ? "" : ` (declared as "${Rf(s.server)}")`;
                    let y = QI([
                        ...s.unknown
                    ], 8, (w)=>`"${Rf(w)}"`);
                    let v = s.available.length === 0 ? " (none it lists this session fits the manifest grammar)" : `, here: ${QI([
                        ...s.available
                    ], 12, (w)=>`"${Rf(w)}"`).join(", ")}`;
                    return `${Rxt(s.server)} "${h}"${b} has no ${I(s.unknown.length, "tool")} named ${y.join(", ")} in this session \u2014 "tools" takes that connector's own top-level tool names${v}; if this connector fronts other tools through its own search/execute tools (an MCP gateway), declare those and have the page reach the inner ones through them. The control plane would accept this manifest, but the page's calls would fail for viewers of this connector`;
                }
            case "opaque_id":
                return `"${Rf(s.server, {
                    max: 70
                })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;
            case "known_id":
                {
                    let h = Rf(s.display);
                    return `"${Rf(s.server)}" is the id of connector "${h}" \u2014 set "server" to "${h}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
                }
            case "tool_name":
                return `${`"${Rf(s.server, {
                    max: 70
                })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` + (s.display === null ? "" : `, here "${Rf(s.display)}"`)}, and "tools" takes the bare upstream tool names`;
            case "connector_as_host":
                {
                    let h = Rf(s.display);
                    return `"${Rf(s.server, {
                        max: 70
                    })}" names the claude.ai connector "${h}", not a local server \u2014 declare it as {"server": "${h}", "tools": [...]} and call it by that name in the page`;
                }
            case "local_server_as_first_party":
                {
                    let h = Rf(s.local);
                    return `"${Rf(s.server, {
                        max: 70
                    })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${h}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${h}" (or drop the declaration) and publish again`;
                }
            case "undeclarable_name":
                return `connector "${jNn(s.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;
            case "host_unavailable":
                return `"${Rf(s.server, {
                    max: 70
                })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
        }
    });
}
function _r(e, n, r = "") {
    return {
        ...H((e.msg ?? n) + r),
        ...e.code === "slug_gone" && {
            gone: true
        },
        ...e.code === "thumbnail_rejected" && {
            thumbnailRejected: e.msg ?? n
        },
        ...(e.code === "rate_limited" || e.code === "contract_rollout") && {
            transient: e.code
        }
    };
}
function Gs(data) {
    if (gt(data) === undefined) {
        return qs(data);
    }
    return null;
}
function gc(data, n) {
    if (gt(data) !== "precondition_failed") {
        return null;
    }
    let r = qs(data);
    if (r === null) {
        return null;
    }
    let s = typeof data === "object" && data !== null && "paths" in data ? data.paths : undefined;
    let paths = [];
    for (let b of Array.isArray(s) ? s : []){
        let y = mc().safeParse(b);
        if (y.success && n.has(y.data.path)) {
            paths.push(y.data);
        }
    }
    return {
        ...r,
        paths
    };
}
var mc = p(()=>u({
        path: o(),
        expected: o().regex(/^[0-9a-f]{64}$/).nullable(),
        actual: o().regex(/^[0-9a-f]{64}$/).nullable()
    }));
function qs(data) {
    if (!data || typeof data !== "object" || !("conflict" in data) || data.conflict !== true || !("live" in data) || typeof data.live !== "string" || !AF.test(data.live)) {
        return null;
    }
    let n = data;
    return {
        live: data.live,
        ...typeof n.createdAt === "string" && /^[\w:.+ -]{1,40}$/.test(n.createdAt) && {
            createdAt: n.createdAt
        },
        ...(n.liveEntry === "editor" || n.liveEntry === "page" || n.liveEntry === "publish") && {
            liveEntry: n.liveEntry
        },
        ...n.forceRefused === true && {
            forceRefused: true
        }
    };
}
function Tte(e) {
    if (e && typeof e === "object" && "error" in e && typeof e.error === "string" && "reason" in e && typeof e.reason === "string") {
        return {
            error: e.error,
            reason: e.reason
        };
    }
    return null;
}
const m2t = "publish denied: ";
const bc = [
    "compliance_restricted",
    "org_mismatch",
    "org_toggle_disabled",
    "summon_foreign_sender",
    "user_entitlement_denied",
    "write_gate_disabled"
];
const _c = [
    "acl_unsupported",
    "artifact_limit_reached",
    "audience_conflict",
    "auto_edit_refused",
    "bad_json",
    "capability_refused",
    "cas_link_refused",
    "cmek_key_disabled",
    "content_pending",
    "content_refused",
    "content_too_large",
    "contract_refused",
    "credential_required",
    "database_org_cap",
    "database_too_large",
    "embeds_too_large",
    "external_sharing_disabled",
    "group_grant_forbidden",
    "instance_dup_unavailable",
    "instance_locked",
    "invalid_request",
    "invalid_slug",
    "live_doc",
    "live_over_budget",
    "live_path_cap",
    "live_path_delete",
    "live_refused",
    "multi_file_unavailable",
    "never_published",
    "not_found",
    "not_owner",
    "one_live_path",
    "origin_required",
    "owner_mode_only",
    "patch_no_base",
    "path_is_live",
    "pin_unsupported",
    "provision_conflict",
    "public_mode_disabled",
    "publish_settling",
    "rate_limited",
    "read_mode_refused",
    "read_timeout",
    "render_busy",
    "render_embeds_container",
    "render_over_budget",
    "render_unavailable",
    "soft_deleted",
    "soft_deleted_swept",
    "source_refused",
    "title_invalid",
    "too_many_concurrent",
    "type_cap_unavailable",
    "type_cross_org",
    "type_instances_off",
    "type_is_instance",
    "type_no_release",
    "type_single_file",
    "unknown_version",
    "write_conflict"
];
function Ks(data) {
    let n = gt(data);
    let r = _c.find((s)=>s === n);
    if (r) {
        return {
            refusal_reason: d(r)
        };
    }
    return {};
}
function Kt(e, n) {
    let r = typeof e === "string" ? e.trimEnd().replace(Fr, "") : Tte(e)?.error ?? SB(e);
    return RF(r, n);
}
const Xs = /^capabilities\.([a-z][a-z0-9_]*)(?=[:. ])/;
function Yi(e) {
    return /^contract[ :]/.test(e);
}
const yc = / is newer than the preferred /;
var Js = /the artifact's type|built from an artifact type/;
const vc = {
    capNames: [],
    hostDecl: false
};
function Zs(e) {
    return Kn(_i(Rg(e.retryAfter)), e.reservedSlug !== undefined ? Sm(e.reservedSlug) : undefined, e.refusedStep);
}
function Qs(e, n) {
    let r = gt(n);
    return e === 429 && Xt(n) === undefined && (r === "rate_limited" || r === "too_many_concurrent");
}
function sn(e, n) {
    if (/[.!?]$/.test(e)) {
        return `${e} ${n}`;
    }
    return `${e}. ${n}`;
}
function Gi(e, n) {
    let r = Xs.exec(e)?.[1];
    if (r === undefined) {
        return "Nothing was published; correct the declaration as described and publish again.";
    }
    if (/: unavailable$/.test(e)) {
        if (!n.capNames.includes(r)) {
            return `Nothing was published; an earlier version declares capabilities.${r}, it is not available to this account now, and a declaration that drops it cannot be stored \u2014 publish without a capabilities block to keep the stored set, or tell the user.`;
        }
        if (r === "mcp" && n.hostDecl) {
            return "Nothing was published; the connectors declaration names locally-configured (host:) MCP servers, which this session cannot publish — declare only claude.ai connectors, or publish a version that does not call them.";
        }
        return `Nothing was published; capabilities.${r} is not available to this account here \u2014 publish a version that does not use it instead of retrying the same declaration.`;
    }
    if (e.includes("part of the runtime")) {
        return `Nothing was published; drop capabilities.${r} \u2014 the runtime provides it without a declaration.`;
    }
    return `Nothing was published; correct capabilities.${r} as described and publish again.`;
}
const wc = "Nothing was published. Only the artifact's owner can change who it is shared with (in its share settings on claude.ai), not this session — if the page can do without what the message names, publish a version without it; otherwise tell the user.";
const vGe = "the artifact you're updating was deleted, or you no longer have write access to it";
function yr(status) {
    return Et(`relay HTTP ${status}`);
}
const Per = "publish outcome unknown (";
function Et(e) {
    return `${Per}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}
const g2t = "this file belongs to the artifact's type and can't be changed here";
function vr(e) {
    return SB(e).includes(g2t);
}
const Sc = " — this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.";
const ea = "Nothing was published and the Artifact is unchanged; retrying cannot help, so tell the user it can't be changed from this session";
const xc = ` \u2014 this Artifact was created from an Artifact type and nothing can be published to it from this session: its page (index.html) and the type's other files can't be changed on it, and publishing its own files is not available. ${ea}.`;
const NYr = `this file can't be published: the Artifact being updated was created from an Artifact type, and no file or page can be published to it from this session. ${ea}`;
const $Yr = "If the Artifact being updated was created from an Artifact type, that will be refused too, because nothing can be published to it from this session; in that case tell the user so.";
function wr(status, data, isRedeploy, s, h = false, b = vc, y = {}) {
    let v = Ec(status, data, isRedeploy, s, h, b, y);
    let w = Ks(data);
    if (w.refusal_reason === undefined) {
        return v;
    }
    return {
        ...v,
        extra: {
            ...v.extra,
            ...w
        }
    };
}
function Ec(status, data, isRedeploy, s, h, b, y) {
    let v = Rc(status, data, h);
    if (v !== undefined) {
        return v;
    }
    let w = gt(data);
    if (status === 400) {
        let P = SB(data);
        if (/^thumbnail/i.test(P.trimStart()) || ELe.test(P) && /["']thumbnail(?:_dark)?["']/.test(P)) {
            return {
                code: "thumbnail_rejected",
                msg: `deploy 400: ${fE(data)}`
            };
        }
    }
    if (Pn(status, data)) {
        return {
            code: "publish_stranded"
        };
    }
    if (status === 409 && w === "publish_settling") {
        return {
            code: "publish_settling",
            msg: Et("the first attempt reached claude.ai and its content is still being stored")
        };
    }
    if (status === 422 && gt(data) === "deadline_invalid") {
        return {
            code: "deadline_invalid"
        };
    }
    let S = status === 422 ? Kt(data, 300) : "";
    if (status === 422 && (w === "instance_locked" || vr(data) || Js.test(S))) {
        let P = vr(data) || S.includes("publish its files with a manifest");
        let R = ee().frozenArtifactTypes?.typesOn;
        return {
            code: "type_locked",
            msg: `deploy 422: ${S}${!P || R === undefined ? "" : R ? Sc : xc}`
        };
    }
    if (status === 422 && w === "audience_conflict") {
        return {
            code: "audience_conflict",
            msg: `deploy 422: ${sn(S, wc)}`
        };
    }
    if (status === 422 && w === "capability_refused") {
        let P = Kt(data, 1500).split(/; (?=capabilities[.: ]|\d+ more\b)/).filter(Boolean);
        let R = P.length > 1 && /^\d+ more\b/.test(P.at(-1)) ? P.pop() : undefined;
        if (P.length <= 1 && R === undefined) {
            return {
                code: "capability_refused",
                msg: `deploy 422: ${sn(S, Gi(S, b))}`
            };
        }
        let B = "";
        let V = 0;
        for (let J of P){
            let C = B === "" ? J : `${B}; ${J}`;
            if (C.length > 600 && V > 0) {
                break;
            }
            B = C;
            V++;
        }
        let K = [
            P.length > V ? `${P.length - V} more not shown` : "",
            R ?? ""
        ].filter(Boolean);
        let N = D(P.filter((J)=>/: unavailable$/.test(J) && !b.capNames.includes(Xs.exec(J)?.[1] ?? "") || J.startsWith("capabilities.mcp: unavailable") && b.hostDecl).map((J)=>Gi(J, b).replace(/^Nothing was published; /, "")));
        return {
            code: "capability_refused",
            msg: `deploy 422: ${sn([
                B,
                ...K
            ].join("; "), [
                "Nothing was published; fix each capabilities entry named — drop the unavailable ones, correct the others as described — and publish again.",
                ...N
            ].join(" Also: "))}`
        };
    }
    if (status === 422 && s === undefined && b.latestContract === true && (w === "contract_refused" || w === undefined && Yi(S)) && yc.test(S)) {
        return {
            code: "contract_rollout",
            msg: `deploy 422: ${sn(S, Xn)}`
        };
    }
    if (status === 422 && s !== undefined && (w === "contract_refused" || w === undefined && Yi(S))) {
        return {
            code: "contract_echo_rejected",
            extra: {
                echo_declared_caps: s.declaredCaps
            },
            msg: `deploy ${status}: ${Kt(data, 200)} \u2014 this republish echoed the artifact's stored ` + `contract pin (${s.pin}) and nothing was published. If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics); otherwise tell the user what the service said.`
        };
    }
    if (status === 403 && w === "not_owner") {
        return {
            code: "publish_denied",
            msg: `${m2t}this account can open the artifact but is not allowed to publish to it \u2014 nothing was published; ask its owner for edit access, or publish it as a new artifact (omit \`url\`).`
        };
    }
    if (status === 403 && WYr(SB(data))) {
        return {
            code: "ccr_credential_refused"
        };
    }
    if (status === 403 && w !== "credential_required") {
        let P = Tte(data);
        if (P) {
            let R = bc.find((V)=>V === P.reason);
            let deny_reason = R ? d(R) : undefined;
            return {
                code: "publish_denied",
                ...deny_reason && {
                    extra: {
                        deny_reason
                    }
                },
                msg: m2t + RF(P.error, 300)
            };
        }
    }
    if (status === 404 && isRedeploy && r3(data)) {
        return {
            code: "slug_gone",
            msg: vGe
        };
    }
    if (status === 429) {
        let P = Xt(data);
        if (P) {
            return {
                code: "publish_cap_reached",
                extra: {
                    cap_type: d(P.capType)
                },
                msg: `${P.message} \u2014 try again after the reset.`
            };
        }
        if (Qs(status, data) && y.created !== true) {
            return {
                code: "rate_limited",
                msg: Zs(y)
            };
        }
    }
    if (status === 408 && w === "read_timeout") {
        return {
            msg: `deploy 408: ${sn(Kt(data, 200), "Nothing was published; the server stopped waiting for the upload — retry once.")}`
        };
    }
    return {};
}
function gt(e) {
    if (typeof e === "string") {
        return Fr.exec(e.trimEnd())?.[1];
    }
    if (e === null || typeof e !== "object" || !("reason" in e)) {
        return;
    }
    let e_reason = e.reason;
    if (typeof e_reason === "string" && nYe.test(e_reason)) {
        return e_reason;
    }
}
var Fr = new RegExp(` \\[(${tys})\\]$`);
function ta(data) {
    if (data === null || typeof data !== "object" || !("path" in data)) {
        return;
    }
    let e_path = data.path;
    if (typeof e_path === "string" && rn.test(e_path)) {
        return e_path;
    }
}
function Ac(e) {
    if (e === null || typeof e !== "object" || !("max" in e)) {
        return;
    }
    let e_max = e.max;
    if (typeof e_max === "number" && Number.isSafeInteger(e_max) && e_max > 0) {
        return e_max;
    }
}
function Rc(e, n, r) {
    let s = gt(n);
    if (e === 409 && s === "path_is_live") {
        return {
            code: "path_is_live",
            msg: `deploy 409: ${fE(n)}`
        };
    }
    if (e === 422 && s === "one_live_path") {
        return {
            code: "one_live_path",
            msg: `deploy 422: ${fE(n)}`
        };
    }
    if (e === 422 && s === "live_path_cap") {
        let h = Ac(n);
        return {
            code: "live_path_cap",
            msg: `deploy 422: ${fE(n)}`
        };
    }
    if (e === 422 && s === "live_path_delete") {
        return {
            code: "live_path_delete",
            msg: `deploy 422: ${fE(n)}`
        };
    }
    if (e === 422 && s === "render_over_budget") {
        return {
            code: "live_over_budget",
            msg: `deploy 422: ${fE(n)}`
        };
    }
    if (e === 422 && s === "render_unavailable") {
        return {
            code: "render_unavailable",
            msg: `deploy 422: ${fE(n)}`
        };
    }
    if (e === 422 && s === "live_over_budget") {
        return {
            code: "live_over_budget",
            msg: typeof n === "string" ? `deploy 422: ${RF(n.trimEnd().replace(Fr, ""), 500)}` : `deploy 422: ${Kt(n, 500)}`
        };
    }
    if (e === 422 && typeof n === "string" && kc.test(n)) {
        return {
            code: "live_over_budget",
            msg: `deploy 422: ${RF(n, 500)}`
        };
    }
    if (e === 503 && s === "render_busy") {
        return {
            code: "render_busy",
            msg: `deploy 503: ${fE(n)}`
        };
    }
}
var kc = /exceeds the live-editing budget/;
function qi(e, n) {
    return `deploy 400: ${RF(e, 200)}`;
}
function Sr(e) {
    return `deploy 400: ${RF(e, 200)}`;
}
function xr(e, n) {
    return false;
}
function Ki(e, n) {
    return n.liveKey && ic.test(e) || n.emptyPatch && sc.test(e);
}
function fE(e) {
    return RF(SB(e), 200);
}
export { cL, qbt, kge, qGt, KGt, nYr, k3o, per, Tge, rYr, nvn, T3o, rvn, A3o, C3o, Kbt, fer, oYr, Ybt, YGt, mer, XGt, JGt, QGt, ZGt, sYr, e2t, _Ge, ovn, CZe, R3o, ger, iYr, svn, Xbt, ivn, bGe, t2t, XEe, x3o, avn, pE, aYr, fWs, Jbt, n2t, bae, lYr, cYr, her, yer, _er, SGe, Qbt, P3o, ber, lvn, I3o, bf, O3o, r2t, QG, Wl, M3o, dYr, cvn, Ser, GX, Sf, UU, RZe, uYr, $Me, iM, FMe, pYr, fYr, mYr, Sae, wae, Zbt, t3, Ete, gYr, hYr, vae, Age, BU, o2t, Eae, UMe, s2t, VX, yYr, _Yr, dvn, bYr, SYr, i2t, eSt, a2t, tSt, xZe, l2t, BMe, wer, c2t, d2t, kte, wGe, wYr, uvn, pvn, ver, yx, vYr, fvn, u2t, EYr, kYr, TYr, AYr, CYr, Eer, ker, nSt, Ter, Cge, Rge, Aer, n3, rSt, Cer, mvn, RYr, xYr, PYr, Sm, PZe, gvn, p2t, Rer, oSt, IYr, OYr, MYr, HYr, f2t, sSt, xer, DYr, LYr, Tte, m2t, vGe, Per, g2t, NYr, $Yr, fE };
