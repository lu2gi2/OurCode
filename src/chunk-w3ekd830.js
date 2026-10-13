import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Ubo, He, Sz, wue } from "/$bunfs/root/chunk-k3tkc302.js";
import { bf, Cge, p2t } from "/$bunfs/root/chunk-gs3dthpm.js";
import { j3o, IK, cSt, QEe, xge } from "/$bunfs/root/chunk-adgp14at.js";
import { dT, hae, r3o } from "/$bunfs/root/chunk-sqysdndt.js";
import { UX } from "/$bunfs/root/chunk-zcvftbm8.js";
import { aGe, gae, HS } from "/$bunfs/root/chunk-krjtgnpw.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { mGt, gGt, yGt, vGt, dk, Sge } from "/$bunfs/root/chunk-vn24m8wp.js";
import { sL } from "/$bunfs/root/chunk-qaknrf10.js";
import { QSn, ZSn, ewn, LC, hte, pge } from "/$bunfs/root/chunk-b099rff3.js";
import { Sh } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { _p } from "/$bunfs/root/chunk-cyq0svt5.js";
import { x7e, Tbn, Mj } from "/$bunfs/root/chunk-37qzy58m.js";
import { JH, qJe } from "/$bunfs/root/chunk-k2808tqp.js";
import { kM } from "/$bunfs/root/chunk-1k3a7x55.js";
import { yqr } from "/$bunfs/root/chunk-fwkrfcax.js";
import { Ab } from "/$bunfs/root/chunk-0xz61zj0.js";
import { o, M, oe, T, De, ue, U } from "/$bunfs/root/chunk-smx21d0k.js";
const w = null;
const z = null;
const C = null;
function B(e, s = ", and ") {
    let t = e.join(s);
    if (t === "") {
        return "";
    }
    return ` ${t[0].toUpperCase()}${t.slice(1)}.`;
}
const F = " `preflight.js` at the artifact root is reserved: it runs against open pages when Claude publishes updates, and it must be a JavaScript module of at most 8 KiB whose default export is a function, or the publish is refused.";
function I(e) {
    let s = [
        "publish",
        "list",
        "read"
    ];
    if (e.liveEditOn) {
        s.push("sync");
    }
    if (e.readPageDataOpen) {
        s.push("read_page_data");
    }
    if (e.roomOn) {
        s.push("room_send");
    }
    if (e.deleteOn || e.assetsOn) {
        s.push("delete");
    }
    if (e.openOn) {
        s.push("open");
    }
    if (e.pinOn) {
        s.push("pin", "unpin");
    }
    if (e.handlersOn) {
        s.push("get_endpoints", "call_endpoint", "run_script");
    }
    if (e.quickstartOn) {
        s.push("quickstart");
    }
    if (e.shareOn) {
        s.push("share");
    }
    return s;
}
function H(e) {
    let s = [
        ...p2t,
        "types"
    ];
    if (e.multiFileOn) {
        s.push("files");
    }
    if (e.assetsOn) {
        s.push("assets");
    }
    return s;
}
function G(enabledSchemaNames) {
    return ` 'read_page_data' reads the declared data island from the published artifact at \`url\`, validates it against the interaction schema named by \`schema\` (available: ${enabledSchemaNames.map((s)=>`'${s}'`).join(", ")}), and returns only its validated typed entries, never page content. It refuses when the island does not match its contract.`;
}
function J(e) {
    return `One of ${I(e).map((t)=>`'${t}'`).join(", ")}. Omitting it means 'publish'. **Calls** in the description says what each one does and takes, except as noted here.${e.readPageDataOpen ? G(e.enabledSchemaNames) : ""}${e.handlersOn && C ? C.HANDLERS_CLAUSE : ""}${e.versionsOn ? vGt : ""}`;
}
function m(e, s) {
    let t = e.description ?? "";
    for (let [n, f] of s){
        t = t.replace(n, f);
    }
    return e.describe(t);
}
function Y(e, { shape }) {
    let n = (...f)=>Object.fromEntries(f.filter((h)=>h in shape).map((h)=>[
                h,
                shape[h]
            ]));
    return De({
        action: U(I(e)).optional().describe(J(e)),
        file_path: o().optional().describe(`publish: the local page Claude publishes (.html, or .md only when a skill says so).${e.typesOn ? " For an Artifact created from an Artifact type, it is one of that Artifact's data files." : ""}${e.assetsOn ? " With `asset: true`, it is the local file Claude uploads." : ""} A short, distinctive basename also serves as the title when nothing else gives one.`),
        ...e.assetsOn && {
            asset: M().optional().describe(e.copyOn ? "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page — or, with `from_url` and `asset_ids` in place of `file_path`, copies those assets of another artifact into it server side (see **Calls**)." : "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page (see **Calls**)."),
            ..."file_paths" in shape && {
                file_paths: m(shape.file_paths, [
                    [
                        "upload_asset:",
                        "publish with `asset: true` only:"
                    ]
                ])
            },
            ...e.copyOn && "from_url" in shape && {
                from_url: m(shape.from_url, [
                    [
                        "copy_from only:",
                        "publish with `asset: true`, in place of `file_path`:"
                    ],
                    [
                        "one you can open",
                        "one the person can open"
                    ]
                ]),
                asset_ids: m(shape.asset_ids, [
                    [
                        "copy_from only:",
                        "publish with `asset: true` and `from_url` only:"
                    ],
                    [
                        "(its list_assets or upload_asset results)",
                        '(from a `scope: "assets"` listing of it, or an upload result)'
                    ]
                ])
            }
        },
        ..."favicon" in shape && {
            favicon: shape.favicon.describe("Deprecated; Claude omits it and uses `icon`.")
        },
        ..."icon" in shape && {
            icon: shape.icon.describe(`One short generic word for the artifact's browser-tab icon, such as chart, calendar, recipe, code or map: a plain signifier, never a product or brand name. Claude includes it on every page's first publish and omits it on a redeploy so the artifact keeps its icon, passing a new one only when the person asks.${e.typesOn ? " Ignored on an Artifact created from an Artifact type." : ""}`)
        },
        ..."files" in shape && !e.copyOn && {
            files: shape.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + F + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
        },
        ..."files" in shape && e.copyOn && {
            files: shape.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | {artifact, path, ver?} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. An {artifact, path} source copies that Artifact's published file on the server: an Artifact the person can open, with its type carried over, never an HTML or XML document, and at most ${Cge} source Artifact versions per publish. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + F + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
        },
        ..."root" in shape && {
            root: shape.root.describe(`The base directory that relative \`files\` sources resolve against, like a bundler root. It never changes published paths. It is relative to the working directory, or absolute within it or within Claude's scratchpad directory.${e.typesOn ? " It requires `files`, except on an Artifact made from a type, where a data `file_path` under it is served at its path relative to it." : " It requires `files`."}`)
        },
        ..."live" in shape && w && {
            live: shape.live.describe(w.CORE_LIVE_FIELD_DESCRIBE)
        },
        ...n("pr_review"),
        ...e.pinOn && "pin" in shape && {
            pin: shape.pin.describe("publish only: true also pins the published artifact to the person's claude.ai sidebar once it is published. Claude passes it only when the person asked for that. A failed pin never fails the publish, and the result says so.")
        },
        limit: shape.limit.describe(`list only: the maximum number of artifacts to return (default ${wue}).`),
        scope: U(H(e)).optional().describe(`list: which listing to return. 'mine' is the default. The others are ${[
            "'shared'",
            "'all'",
            e.typeCatalogOn ? "'types'" : "",
            e.multiFileOn ? "'files' (with `url`)" : "",
            e.assetsOn ? "'assets' (with `url`, continued with `after`)" : ""
        ].filter(Boolean).reduce((acc, item, index, a)=>acc + (index === 0 ? "" : index === a.length - 1 ? " and " : ", ") + item, "")}. See **Calls**.`),
        ...e.typeCatalogOn && {
            type_query: o().max(200).optional().describe("list with scope 'types' only: limits the listing to the types whose title or description match this text best, ignoring case; a type that matches less well is left out, so a narrowed listing is not the whole catalog. Claude omits it when choosing a type for a request, unless a listing made without it says more types exist than it shows."),
            type: o().max(200).optional().describe("list only: the name of a published Artifact type, as a 'types' listing shows it (case does not matter). The listing then shows the Artifacts made from that type instead of the person's gallery. Claude passes this or `type_url`, not both.")
        },
        ...n("intent", "design_systems"),
        title: o().optional().describe(`publish: the fallback title for an HTML page whose file has no <title>. It is a name, not a summary, and Claude keeps it the same across redeploys.${e.typeCreateOn ? " On a `type_url` create, it is the new Artifact's name: what the person called it, or a short descriptive name. If it is left out, the Artifact is named after the type." : ""}`),
        description: o().max(1000).optional().describe("publish: one sentence for the subtitle on the gallery card."),
        ..."session_context" in shape && {
            session_context: shape.session_context.describe(`Context stored with the version so that a later session can pick up the work: ${r3o}. Required on an artifact's first publish. After that, Claude omits it unless things changed, since it replaces the stored text.`)
        },
        ..."label" in shape && {
            label: shape.label.describe(`A short name for this publish, at most ${Sz} characters (e.g. "Draft to legal"). Optional. It is a few words, not a description.`)
        },
        ...n("deadline"),
        ...n("overwrite_unread"),
        url: o().optional().describe('An existing artifact\'s claude.ai link (claude.ai/artifact/{id} or claude.ai/code/artifact/{uuid}); a chat, project or session link is not one, and `action: "list"` lists the person\'s artifacts. On a publish, it is the artifact to update in place, one the person owns or was given edit access to (a read of it says "writer"). Before publishing to an artifact this conversation has neither read nor published, Claude reads it (`action: "read"`) and builds on what comes back; a publish sent without that read is refused. A refusal that hands Claude the live version counts as that read: Claude merges its changes into that version and publishes the result, and never resends the refused content unchanged. Claude omits `url` for a new artifact or to redeploy a file this conversation already published. For read, delete and the other calls that take a URL, it is the artifact to act on.'),
        ...(e.typeCreateOn || e.typeCatalogOn) && {
            type_url: o().max(2048).optional().describe((e.typeCreateOn ? "publish: the Artifact type to create this new, private Artifact from (a link from a 'types' listing). Claude omits `url`. Any `file_path`/`files` passed become the new Artifact's own files beside the type's fixed ones." : "An Artifact type's link.") + (e.typeCatalogOn ? ` read (no \`url\`): the type to describe. list: the type whose Artifacts to list, or Claude names the type with \`type\` instead.${e.typeCreateOn ? "" : " Creating an Artifact from a type is not available in this session, so it is accepted only with those two actions."}` : ""))
        },
        ..."auto_open" in shape && {
            auto_open: shape.auto_open.describe('Only with `type_url` and no `file_path`: when the new Artifact opens for the person. Claude passes "after_first_write" when it will fill the Artifact right after creating it with a files publish to its url, so the person does not first see it empty. The Artifact then opens on that first write. Otherwise Claude omits it, and the Artifact opens when created; Claude always omits it for a type whose content it writes through a connector, such as a Claude Docs document, since no publish or store write follows to open it.')
        },
        prompt: o().optional().describe("read, for an artifact shared with the person: what Claude needs from it, which steers the isolated summary."),
        force: M().optional().describe("publish: a last-resort overwrite that **discards** the newer published version. On a conflict, Claude merges its changes onto the newer content that the rejection hands it and publishes again. Claude passes true only when the person explicitly said to discard that specific version, and the server may still refuse it over a version saved from inside the page."),
        ...(e.assetsOn || e.multiFileOn) && {
            out_dir: shape.out_dir.describe(`read with \`path\`: the directory to save into. The default is this artifact's folder in Claude's scratchpad directory, where saving needs no approval.${e.multiFileOn ? " A published file lands at <out_dir>/<published path>, and saving it outside that default folder asks the person first." : ""}${e.assetsOn ? " An asset's file is named by its id plus its type's extension; saving it outside the default folder is an ordinary file save the person may be asked to approve." : ""}`)
        },
        ...(e.assetsOn || e.multiFileOn || e.handlersOn) && {
            path: o().max(e.handlersOn && z ? z.MAX_HANDLER_TARGET_CHARS : dT).optional().describe([
                e.multiFileOn ? `read: the file's published path inside the artifact, exactly as a 'files' listing printed it ("index.html" is the page itself). The file is saved locally, the result says where, and a small text file's contents are included.` : "",
                e.assetsOn ? `${e.multiFileOn ? "It can instead be an" : "read: an"} uploaded asset's id (32 hex characters, from an 'assets' listing or an upload result), and that asset is saved to a local file. delete: the id of the one asset to remove.` : "",
                e.livePathsOn ? "sync: the live file to address." : "",
                e.handlersOn && C ? C.CALL_HANDLER_PATH_DESCRIBE : ""
            ].filter(Boolean).join(" "))
        },
        ..."paths" in shape && {
            paths: shape.paths.describe(`read: several published paths in place of \`path\`, up to ${hae} in one call. Each file is saved as a single \`path\` would be, and the result lists where each one landed, or why it could not be read, with small text files' contents included while they fit.`)
        },
        ...e.handlersOn && n("method", "body", "body_file", "mode", "script"),
        ...e.shareOn && n("mode", "people", "access"),
        ...e.versionsOn && n("version"),
        ...e.assetsOn && {
            after: o().regex(UX).optional().describe("list with scope 'assets' only: the `next` value from a previous listing, passed to continue it.")
        },
        ..."page" in shape && {
            page: shape.page.describe(`read only: true returns the rendered page in cases where a read otherwise returns something else.${B([
                e.liveEditOn && w ? w.CORE_PAGE_LIVE_CLAUSE : "",
                e.typeCatalogOn ? "a typed Artifact's read leaves out the type's own page" : ""
            ].filter(Boolean))}`)
        },
        ..."schema" in shape && {
            schema: shape.schema.describe(`The registered interaction schema to validate the page's data island against. Required for read_page_data (e.g. "workshop-decisions"), and meaningless for every other action.`)
        },
        ..."topic" in shape && {
            topic: shape.topic.describe('room_send only: the event topic, which the page listens to through its room capability. It is lowercase and starts with a letter, followed by letters, digits, "_", "-" or ".", at most 48 characters.')
        },
        ...e.roomOn && {
            data: ue(o(), oe()).optional().describe("room_send: the event payload, a JSON object of at most 4 KiB when serialized. Claude omits it for a bare signal.")
        },
        ..."capabilities" in shape && {
            capabilities: shape.capabilities.describe(`publish: the runtime capabilities this page declares, as {name: config}. Claude loads the \`${Ab}\` skill before passing it. On a redeploy Claude omits the field to keep what the page has, and {} clears it.`),
            contract: shape.contract.describe("publish: the artifact's runtime version. Leaving it out keeps the current version (the default), 'latest' upgrades, and an exact version pins or rolls back. It changes how the published page behaves, so Claude passes it only when the author explicitly intends that change.")
        }
    });
}
const x = p(()=>Y(hte(), LC()));
function K(e) {
    let action = e.shape.action;
    return Object.keys(IK).filter((t)=>pge(action, t));
}
function W() {
    return [
        ...Object.keys(QSn(true)),
        ...Object.keys(ewn()),
        ...Object.keys(ZSn()),
        "data",
        "out_dir"
    ];
}
function X(e, s, t) {
    let n = K(s);
    if (n.length === 0) {
        return t;
    }
    let s_shape = s.shape;
    let h = Object.fromEntries(W().filter((y)=>y in s_shape).map((y)=>[
            y,
            s_shape[y]
        ]));
    return De({
        ...h,
        ...t.shape,
        action: U([
            ...I(e),
            ...n
        ]).optional().describe(t.shape.action.description ?? "")
    });
}
const j = p(()=>X(hte(), LC(), x()));
function Z(e, { shape }) {
    let n = ewn();
    return De({
        action: U([
            "read",
            "reply",
            "resolve",
            "watch"
        ]).describe(`'read' reads the comment threads on the artifact at \`url\` (add \`thread_id\` for one thread, or \`cursor\` to continue a listing); 'reply' posts \`text\` into the thread \`thread_id\`; 'resolve' marks that thread resolved; 'watch' manages this session's artifact watches — with \`url\` it starts watching that artifact (\`on: false\` stops), with no \`url\` it lists this session's watches and rooms${e.watchRail === "live" ? ", and `replies: true` re-enables automatic comment replies that were stopped or paused for the artifact at `url` (only when the user explicitly asked; approved the way a publish is)." : "."}`),
        url: o().optional().describe("The artifact's claude.ai URL. Required for every action except a bare 'watch' listing."),
        thread_id: m(n.thread_id, [
            [
                "comments: read just",
                "read: read just"
            ],
            [
                'action "comments"',
                'action "read"'
            ]
        ]),
        text: n.text,
        cursor: m(n.cursor, [
            [
                "comments only:",
                "read only:"
            ]
        ]),
        acknowledge_duplicate: n.acknowledge_duplicate,
        on: M().optional().describe("watch only: false stops watching the artifact at `url`; omit (or true) to start."),
        ...e.watchRail === "live" && {
            replies: M().optional().describe("watch only: true re-enables automatic comment replies for the artifact at `url` after the user stopped or paused them — pass it ONLY when the user explicitly asked to resume.")
        },
        ...e.livePathsOn && "path" in shape && {
            path: shape.path.describe("watch only: the live file to listen to; required when the Artifact has more than one.")
        }
    });
}
function Q({ shape }) {
    let t = "old_str" in shape;
    let n = QSn(t);
    return De({
        action: U([
            ...aGe,
            ...gae,
            ...t ? [
                HS
            ] : [],
            dk,
            Sge
        ]).describe(`Reads: 'get' (one document: \`collection\` + \`doc_id\`), 'list' (a page of a collection: \`collection\`, with optional \`query.limit\`/\`query.cursor\`), 'query' (filtered: \`collection\` + \`query\`), 'profiles' (people's display names: \`ids\`, nothing else). Writes: 'set' (replace) or 'update' (merge) with \`collection\`, \`doc_id\`, and either \`data\` or \`file_path\`;${t ? " 'str_replace' with `collection`, `doc_id`, `field`, `old_str`, `new_str` — swaps one exact, unique piece of text inside a string field without resending the field (`replace_all`: every occurrence);" : ""} 'delete' with \`collection\` + \`doc_id\`; 'batch' with \`writes\`. Every action takes the artifact's \`url\`.`),
        url: o().optional().describe("The artifact's claude.ai URL. Required."),
        writes: m(n.writes, [
            [
                "write_db with db_op 'batch' only:",
                "action 'batch' only:"
            ],
            [
                "separate write_db calls",
                "separate calls"
            ]
        ]),
        collection: m(n.collection, [
            [
                "Required for read_db and write_db.",
                "Required for every action except 'batch' and 'profiles'."
            ]
        ]),
        ids: T(o()).min(1).max(qJe).optional().describe(`action 'profiles' only: the people to name, 1-${qJe} ids exactly as a document or live event showed them ("u_" plus 22 characters).`),
        doc_id: m(n.doc_id, [
            [
                "Required for db_op",
                "Required for action"
            ]
        ]),
        query: m(n.query, [
            [
                "Options for db_op",
                "Options for action"
            ]
        ]),
        ...n.field !== undefined && {
            field: m(n.field, [
                [
                    "write_db with db_op 'str_replace' only:",
                    "action 'str_replace' only:"
                ]
            ]),
            old_str: m(n.old_str, [
                [
                    "write_db with db_op 'str_replace' only:",
                    "action 'str_replace' only:"
                ]
            ]),
            new_str: m(n.new_str, [
                [
                    "write_db with db_op 'str_replace' only:",
                    "action 'str_replace' only:"
                ]
            ]),
            replace_all: m(n.replace_all, [
                [
                    "write_db with db_op 'str_replace' only:",
                    "action 'str_replace' only:"
                ]
            ]),
            if_version: m(n.if_version, [
                [
                    "write_db with db_op 'set', 'update', 'str_replace' or 'delete'",
                    "action 'set', 'update', 'str_replace' or 'delete'"
                ],
                [
                    "every read_db document",
                    "every document a get, list or query returns"
                ]
            ])
        },
        data: ue(o(), oe()).optional().describe('set and update: the document fields to write, as a JSON object — pass exactly one of `data` or `file_path`. In an update, a field given as `{"__delete__": true}` is removed instead.'),
        file_path: o().optional().describe("set and update: a local JSON file whose top-level object is sent as the document — an alternative to inline `data`, so a large document need not pass through the conversation."),
        ..."out_dir" in shape && {
            out_dir: shape.out_dir.describe("get, list and query: when given, each returned document is written as pretty-printed JSON to <out_dir>/<collection path>/<doc_id>.json (directories created as needed) and the result lists the files instead of the document contents — use it for large documents or many of them.")
        },
        as_level: m(n.as_level, [
            [
                "read_db and write_db only: act",
                "Act"
            ]
        ])
    });
}
function ee(e) {
    let s = ZSn();
    let t = e.previewOn && sL() === "emulator";
    let n = [];
    if (e.verifyOn) {
        n.push("verify");
    }
    if (e.previewOn) {
        n.push("preview");
    }
    return De({
        action: U(n.length > 0 ? n : [
            "verify"
        ]).describe(((e.verifyOn ? mGt : "") + (e.previewOn ? t ? yGt : gGt : "")).trim()),
        ...e.verifyOn && {
            url: o().optional().describe("verify: the artifact's claude.ai URL — omit to target this session's most recent publish.")
        },
        ...e.previewOn && {
            file_path: o().optional().describe(t ? "preview: the page's .html file to look at in the artifact viewer." : "preview: the local .html page to render.")
        },
        ...e.previewOn && !t && {
            widths: s.widths,
            themes: s.themes
        }
    });
}
const x1o = p(()=>Z(hte(), LC()));
const P1o = p(()=>Q(LC()));
const I1o = p(()=>ee(hte()));
function zFr(e, s, t) {
    let n = t !== undefined && typeof s === "object" && s !== null ? t(s, e) : s;
    return Mj(de(e), n, "ask");
}
function GFr(e, s, t, n, f, h, y = {
    deny: null,
    ask: ()=>null
}) {
    let a = de(f);
    let r = h !== undefined && typeof t === "object" && t !== null ? h(t, f) : t;
    let c = y.deny ?? Mj(a, r, "deny");
    if (c) {
        return {
            behavior: "deny",
            message: `Permission to use ${e} has been denied by your rule ${JH(c)}.`,
            decisionReason: {
                type: "rule",
                rule: c
            }
        };
    }
    let u = s();
    let l = u?.behavior === "deny" ? null : y.ask() ?? Mj(a, r, "ask");
    if (!l) {
        return u;
    }
    if (u?.behavior === "ask") {
        return {
            ...u,
            matchedAskRule: u.matchedAskRule ?? l
        };
    }
    return {
        behavior: "ask",
        message: `Your ask rule ${JH(l)} covers this call, and its full permission check could not complete \u2014 approving covers only this call.`,
        updatedInput: {
            ...n,
            [_p]: false
        },
        suppressAlwaysAllowRule: true,
        decisionReason: {
            type: "rule",
            rule: l
        }
    };
}
async function O1o(e, s, t) {
    if (s === null || e.behavior === "deny") {
        return e;
    }
    if (e.behavior === "ask") {
        return {
            ...e,
            matchedAskRule: e.matchedAskRule ?? s
        };
    }
    return {
        behavior: "ask",
        message: await t(),
        decisionReason: {
            type: "rule",
            rule: s
        },
        ..."updatedInput" in e && e.updatedInput !== undefined && {
            updatedInput: e.updatedInput
        }
    };
}
function E(e) {
    let s = e?.action;
    if (typeof s === "string") {
        return s;
    }
}
function _fn(e, s) {
    if (e === undefined || !("updatedInput" in e) || e.updatedInput === undefined) {
        return e;
    }
    return {
        ...e,
        updatedInput: s(e.updatedInput)
    };
}
const te = [
    [
        /action:? "upload_asset"|\bupload_asset\b/g,
        "publish with `asset: true`"
    ],
    [
        /action:? "read_file"|\bread_file\b/g,
        "read with a file `path`"
    ],
    [
        /action:? "read_asset"|\bread_asset\b/g,
        "read with an asset id as `path`"
    ],
    [
        /action:? "list_files"|\blist_files\b/g,
        'list with `scope: "files"`'
    ],
    [
        /action:? "list_assets"|\blist_assets\b/g,
        'list with `scope: "assets"`'
    ],
    [
        /action:? "list_types"|\blist_types\b/g,
        'list with `scope: "types"`'
    ],
    [
        /action:? "describe_type"|\bdescribe_type\b/g,
        "read with `type_url`"
    ],
    [
        /action:? "delete_asset"|\bdelete_asset\b/g,
        "delete with an asset id as `path`"
    ],
    [
        /action:? "copy_from"|\bcopy_from\b/g,
        "publish with `asset: true` and `from_url`"
    ],
    [
        /`asset_id`/g,
        "`path` (the asset id)"
    ],
    [
        /\basset_id\b/g,
        "path (the asset id)"
    ]
];
function L(message) {
    let s = Ubo.exec(message);
    let t = s === null ? message.length : s.index;
    let n = message.slice(0, t);
    for (let [f, h] of te){
        n = n.replace(f, h);
    }
    return n + message.slice(t);
}
function se(e) {
    if (typeof e !== "object" || e === null || !("action" in e)) {
        return e;
    }
    let { action, ...rest } = e;
    return rest;
}
function V(e) {
    if (e !== undefined && e.behavior === "deny") {
        return {
            ...e,
            message: L(e.message)
        };
    }
    return e;
}
const q = {
    delete: 'deleting a whole Artifact is not available in this session — `delete` here takes `path` (an uploaded asset\'s id, from a `scope: "assets"` listing) and removes that one asset',
    read_asset: "`path` looks like an uploaded asset's id, but this session cannot read an artifact's asset store — pass a file's published path",
    delete_asset: "`path` looks like an uploaded asset's id, but this session cannot change an artifact's asset store",
    read_file: "reading one published file by `path` is not available in this session — `path` here takes an uploaded asset's id; read the whole artifact with `url` alone",
    describe_type: "`type_url` here only starts a new Artifact from that type — reading a type's details is not available in this session",
    copy_from: "copying another artifact's assets (`from_url`) is not available in this session — `asset: true` here takes a local `file_path` to upload"
};
const ne = new Set([
    "body"
]);
function P(e) {
    let s = e ?? "publish";
    if (pge(LC().shape.action, s)) {
        return null;
    }
    if (Object.hasOwn(q, s)) {
        return q[s];
    }
    return `action "${s}" is not available in this session`;
}
function M1o(e, s = {}) {
    let t = bf;
    let n = e;
    let f = (a)=>(r, ...c)=>n[a].call(e, t() ? QEe(r) : r, ...c);
    let h = (a)=>{
        if (n[a] === undefined) {
            return {};
        }
        return {
            [a]: f(a)
        };
    };
    let y = {
        get inputSchema () {
            if (t()) {
                return j();
            }
            return n.inputSchema;
        },
        get inputJSONSchema () {
            if (t()) {
                return kM(x());
            }
            return n.inputJSONSchema;
        },
        streamedInputRepairExemptKeys () {
            let a = n.streamedInputRepairExemptKeys?.();
            if (t()) {
                return new Set([
                    ...a ?? [],
                    ...ne
                ]);
            }
            return a;
        },
        prompt (a, ...r) {
            if (t()) {
                return Promise.resolve(yqr(a?.tools));
            }
            return n.prompt.call(e, a, ...r);
        },
        isConcurrencySafe: f("isConcurrencySafe"),
        isReadOnly: f("isReadOnly"),
        ...h("isDestructive"),
        ...h("ignoresWholeToolAllowRule"),
        ...h("suppressesAlwaysAllowRule"),
        ...h("getPath"),
        toAutoClassifierInput: f("toAutoClassifierInput"),
        ...h("staleServerClassifierContext"),
        description: f("description"),
        ...h("getToolUseSummary"),
        ...n.permissionCheckFailureDecision !== undefined && {
            permissionCheckFailureDecision (a, ...r) {
                let c = r[0];
                let u = t();
                let l = u ? QEe(a) : a;
                let _ = de(c);
                let R = {
                    name: n.name,
                    ruleContentField: n.ruleContentField
                };
                return GFr(n.name, ()=>{
                    let O = n.permissionCheckFailureDecision.call(e, l, ...r);
                    if (u) {
                        return V(_fn(O, xge));
                    }
                    return O;
                }, l, a, c, s.ruleTargetInput, {
                    deny: Tbn(_, R, l, "deny"),
                    ask: ()=>Tbn(_, R, l, "ask")
                });
            }
        },
        async checkPermissions (a, ...r) {
            let c = r[0];
            let u = t();
            let l = u ? QEe(a) : a;
            if (u) {
                let g = P(E(l));
                if (g !== null) {
                    return {
                        behavior: "deny",
                        message: g,
                        decisionReason: {
                            type: "other",
                            reason: g
                        }
                    };
                }
            }
            let _ = u ? l : xge(a);
            let R = _ !== a;
            let O = u ? _ : se(_);
            let S = {
                name: n.name,
                ruleContentField: n.ruleContentField
            };
            let A = de(c);
            let k = (R ? Sh(A, S, O, "deny") : null) ?? Tbn(A, S, l, "deny");
            if (k) {
                return {
                    behavior: "deny",
                    message: `Permission to use ${S.name} has been denied by your rule ${JH(k)}.`,
                    decisionReason: {
                        type: "rule",
                        rule: k
                    }
                };
            }
            let N = await n.checkPermissions.call(e, l, ...r);
            let v = u ? V(_fn(N, xge)) : N;
            if (v.behavior !== "deny") {
                let g = (R ? Sh(A, S, O, "ask") : null) ?? Tbn(A, S, l, "ask") ?? zFr(c, l, s.ruleTargetInput);
                if (g) {
                    if (v.behavior === "ask") {
                        return {
                            ...v,
                            matchedAskRule: g
                        };
                    }
                    return {
                        behavior: "ask",
                        message: await n.description.call(e, l, ...r),
                        decisionReason: {
                            type: "rule",
                            rule: g
                        },
                        ..."updatedInput" in v && v.updatedInput !== undefined && {
                            updatedInput: v.updatedInput
                        }
                    };
                }
            }
            return v;
        },
        ...n.validateInput !== undefined && {
            async validateInput (a, ...r) {
                if (!t()) {
                    return n.validateInput.call(e, a, ...r);
                }
                let c = QEe(a);
                let u = E(c);
                let message = P(u);
                if (message !== null) {
                    return {
                        result: false,
                        message,
                        errorCode: 8
                    };
                }
                if (u !== undefined && cSt(u)) {
                    i("tengu_artifact_legacy_verb", {
                        verb: d(u),
                        disposition: b("served")
                    });
                }
                let _ = await n.validateInput.call(e, c, ...r);
                if (_.result) {
                    return _;
                }
                return {
                    ..._,
                    message: L(_.message)
                };
            }
        },
        async call (a, ...r) {
            if (!t()) {
                return n.call.call(e, a, ...r);
            }
            let c = QEe(a);
            let u = P(E(c));
            if (u !== null) {
                throw new He(u, "core_verb_unavailable");
            }
            try {
                return await n.call.call(e, c, ...r);
            } catch (error) {
                if (error instanceof He) {
                    error.message = L(error.message);
                }
                throw error;
            }
        },
        hookMatcherFamilyNames (a) {
            let r = x7e(n, a);
            if (r === undefined) {
                return [];
            }
            return [
                r.tool.name
            ];
        },
        coerceInput (a) {
            let r = E(a);
            if (t()) {
                if (r !== undefined && j3o.includes(r)) {
                    let c = xge(a);
                    if (c === a) {
                        return null;
                    }
                    return {
                        input: c,
                        shapeClass: `artifact_legacy_verb_${r}`
                    };
                }
            } else {
                let c = QEe(a);
                if (c !== a) {
                    return {
                        input: c,
                        shapeClass: `artifact_core_verb_${r ?? "publish"}`
                    };
                }
            }
            return n.coerceInput?.call(e, a) ?? null;
        }
    };
    return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(y));
}
export { x1o, P1o, I1o, zFr, GFr, O1o, _fn, M1o };
