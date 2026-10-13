# claude-code 2.1.296 — binary analysis (REA + manual carving)

Target: bin/claude.exe  sha256 24972e3bc859fab2b46ed4c1e51f7d6130f06d3bd550811a114640de3370d0de (257,068,216 B)

## Binary structure
- ELF64 x86-64 EXEC, not stripped, entry 0x192a800. Bun v1.4.3 single-file executable
  (toolchain: LLD 23.1.2, clang 23.1.2, GCC 13.1, rustc 1.100-nightly).
- .rodata 20.4 MB, .bun_builtins 2.6 MB (Bun's own JS builtins), .text 62.7 MB (Bun + JSC)
- .bun section @ file 0x54fe000, 168 MB = the app payload:
  [u64 len][payload][Offsets 32B][ "\n---- Bun! ----\n" ]
  Offsets: byte_count=0x0a01ccaf, modules={off 0x09ff6b3e, len 134628}, entry_point_id=6, exec_argv="", flags=0x1bff
  Module table: 2589 x 52-byte records = 6 StringPointers (name, contents, sourcemap, bytecode,
  module_info, bytecode_origin_path) + encoding/loader/format/side bytes.

## Embedded assets (extracted to bunfs/files, manifest.json)
- 2347 JS chunks ("// @bun @bytecode" — each ships source + precompiled JSC bytecode)
- entry: /$bunfs/root/cli (24 KB bootstrap)
- 138 .zst (zstd-compressed md/txt: skills, Claude API docs, artifact/HTML templates, managed-agents docs, claude-code.d.ts)
- 72 .md / 25 .txt plain (skills, agent templates, loop preambles, slides/design how-tos)
- native addons: clipboard-napi.node (1.0 MB), audio-capture.node (0.5 MB); mermaid.min.js; 2 woff2 fonts

## System prompt construction — chunk-kasbfbhj.js, fn G5t(tools, model, opts)
- Bare mode short-circuit: only "CWD / Date".
- Dynamic sections registered via Jp(name, fn) (memoized/cached per key), resolved by elt():
  communication, pronouns, action_caution, task_continuity, tool_param_json, session_guidance (cBo),
  memory, env_info (SBo), bg-session, context_management, brief, focus_mode, act_dont_rederive (gated by
  CLAUDE_CODE_ACT_DONT_REDERIVE / GrowthBook "tengu_cedar_lantern"), delivering_work_max, overcorrection,
  subagent_steer_delegation, opus5_reduced_delegation, autonomy_append, endconv_deferred_hint ...
- Static body: "lean" models -> single lean_body (pBo: identity + "# Harness" bullets);
  otherwise intro / system / doing_tasks / actions / tools / tone sections.
- Output = hIe("shared", static…) + hIe("session", dynamic… + total_tokens + user_pays):
  shared vs session scoping drives prompt-cache breakpoints (cache_control ephemeral, optional ttl).
- User context (userEmail, attachedProject, gitStatus, perforceMode) is NOT in the system prompt: vlt()
  renders it as a <system-reminder> "As you answer the user's questions…" prepended to messages; date via Tlt().
- Subagent prompts: FQo ("You are an agent for Claude Code…"), Explore: l1n (read-only file search specialist).
- Tools contribute their own text via `async prompt(...)` on each tool definition.

## Agent / tool execution loop — chunk-daj64yn4.js
- Ad(params, …): async generator, `while(true)` state machine over
  Q = {guards{turnCount, maxOutputTokensRecoveryCount, hasAttemptedReactiveCompact, malformedToolUseRetried,
  thinkingOnlyNudged, refusalRetrySpent, stopHookActive…}, messages, toolUseContext, compactTracking, transition}.
- Per iteration: memory recall/context injection -> fold queued commands/poll events -> autocompact ->
  I.callModel({messages, systemPrompt, thinkingConfig, tools, signal…}) streamed via Ta() ->
  tool_use blocks fed to StreamingToolExecutor as they stream in.
- Transitions (continue): next_turn, refusal_retry (model fallback), max_output_tokens_recovery,
  truncated_response_recovery, malformed_tool_use_retry, thinking_only_retry, reactive compact,
  stop_hook_blocking.
  Terminals: completed, max_turns, stop_hook_prevented, image_error, background_requested.
- End of turn: Za()/Ts() run Stop/SubagentStop hooks, prompt suggestion, memory extraction;
  PostToolBatch hooks via mkn(); attachments (queued commands, poll events) via gle().
- StreamingToolExecutor = class gs: tools queued by status (queued/executing/completed/yielded);
  canExecuteTool: run concurrently only if every executing tool isConcurrencySafe(input) — otherwise serial.
  Unknown tool -> synthetic "<tool_use_error>Error: No such tool available"; abort -> synthetic
  interrupted/cancelled tool_result; streaming fallback discards.
- Single tool run (kasbfbhj): Xj -> (MCP pending-tool wait / alias resolve) -> SWo:
  inputSchema.safeParse -> InputValidationError | tool.validateInput -> PreToolUse hooks ->
  canUseTool (permission rules/mode/classifier; PermissionDenied hooks) -> tool.call() ->
  mapToolResultToToolResultBlockParam (size limits) -> PostToolUse / PostToolUseFailure hooks -> tool_result message.

## REA notes
- `rea inspect-artifact`: treats claude.exe as one opaque ELF (no Bun container support); suggests open_binary.
- `rea inspect-binary-layout`: needs REA_PWNTOOLS_PYTHON (pwntools 4.15 / pyelftools 0.33 / unicorn 2.1.2) — not installed.
- No Ghidra/Hopper/IDA provider installed -> no native function-level analysis.
- `rea analyze-javascript-application` on extracted bunfs: 607/2351 files parsed, 60,502 findings, then
  "parent result capacity exhausted" (partial evidence in out/jsapp.json, 248 MB).
  `--source-path` rejected bare filenames (needs exact inventory path form).
