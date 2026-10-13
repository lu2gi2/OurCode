# claude-code 2.1.296 — reverse-engineering workspace

Target: ~/.npm-global/lib/node_modules/@anthropic-ai/claude-code/bin/claude.exe
(sha256 24972e3b…70d0de, Bun v1.4.3 single-file executable). Personal analysis only; the
recovered code is Anthropic's proprietary software, so don't redistribute it.

| Path | Contents |
|---|---|
| ANALYSIS.md | Binary layout, .bun payload format, system-prompt builder (G5t) and agent loop (Ad) walkthrough |
| bunfs/ | Raw payload: `files/` (2589 modules, `.bytecode` = JSC bytecode, .zst decompressed alongside), `manifest.json` |
| src/ | REA/Wakaru-recovered, formatted code for ALL 2349 JS modules (75 MB); `chunk-re1a1x17/` = 96 split webpack modules (ajv/MCP SDK); `_raw-non-utf8/` = mermaid, chart.js, highlight.js (unrecoverable as UTF-8, copied raw) |
| src-views/ | symlink views: first-party (518 modules, ~28 MB), library (1634, ~14 MB), mixed (198) |
| tools-defs/ | 45 built-in tool definition objects (Bash, Read, Edit, Agent, WebFetch, Workflow, Skill, ToolSearch, …) sliced by AST + formatted; README.md index |
| native/ | REA pwntools ELF layout for clipboard-napi.node (Rust/arboard X11+Wayland) and audio-capture.node (Rust/cpal ALSA); readelf dumps, dynsym/symtab, 210k native strings, .bun_builtins section (Bun's own JS) |
| rea-graph/ | REA application-graph Evidence for all 516 first-party modules in 10 batches (+ heavy-*.json for chunk-gtj0ecsn/kasbfbhj); ~2.2 GB JSON |
| first-party-raw/ | minified first-party modules staged for REA application-graph analysis |
| recovered-*/ | REA evidence output (inputs, modules, emitted source maps, provenance) |
| prompts/ | 2238 prose strings parsed (oxc) from ALL chunks, categorized: agent identities, tool prompts, system-prompt sections, system reminders |
| catalog/ | rea-graph-summary.md (aggregated REA graph: 120,962 findings, env reads, child processes, endpoints), api-paths.txt (268 API path patterns), module-map.json (per-module kind/libs/imports), module-graph.dot (189,936 import edges), tools-index.json, tool-definitions.json, env vars, tengu_* flags/events, Anthropic URLs, model IDs, slash-command candidates, sdk-tools.d.ts + claude-code.d.ts (real typed interfaces) |
| assets/ | skills, docs, HTML/CSS templates, helper scripts, native .node addons, fonts |
| tools/ | bunextract.py (payload carver), extract-prompts.mjs, ctx.py, Wakaru 1.14.0 binary |

Key locations (src/):
- chunk-daj64yn4.js — agent query loop `Ad`, StreamingToolExecutor `gs`, stop hooks `Za`/`Ts`
- chunk-kasbfbhj.js — system prompt builder `G5t`, Harness `pBo`, tool runner `Xj`→`SWo`, user-context reminder `vlt`
- cli.js — bootstrap / argv fast paths

Limits: no sourcemaps shipped → original file names and most identifiers are unrecoverable;
names in src/ are minified or Wakaru-inferred. JSC `.bytecode` blobs have no public decompiler, but they are
redundant: every module also ships its JS source. claude.exe itself exceeds REA's 32 MiB layout limit
(readelf used instead); no Ghidra/IDA, so no native function decompilation of Bun/JSC.
