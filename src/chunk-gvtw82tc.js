import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { xTn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { $n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { Jwe } from "/$bunfs/root/chunk-cn15p5af.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
N();
function fDr({ configHome, storageV5, origin, onDone }) {
    let a = origin === "first_run";
    let o = Jwe(onDone, {
        selfOpened: a,
        onCancelled: (t)=>f("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
    });
    Ze("confirm:no", ()=>onChange("not_now"), {
        context: "Confirmation",
        isActive: a && !o.decided
    });
    P(()=>{
        i("tengu_home_settings_mode_prompt_shown", {
            origin: d(origin)
        });
    }, [
        origin
    ]);
    function onChange(t) {
        if (!o.take()) {
            return;
        }
        i("tengu_home_settings_mode_prompt", {
            choice: d(t),
            origin: d(origin)
        });
        if (t === "not_now") {
            f("ccr_home_seed_mode_prompt", "dismissed");
            o.handBack(t);
            return;
        }
        xTn(t, storageV5).then((u)=>{
            if (o.settled()) {
                return;
            }
            switch(u){
                case "refused":
                    m("ccr_home_seed_mode_prompt", "not_written");
                    o.handBack("not_saved");
                    return;
                case "not_stored":
                    m("ccr_home_seed_mode_prompt", "not_stored");
                    o.handBack("not_stored");
                    return;
                case "unconfirmed":
                    f("ccr_home_seed_mode_prompt", "unconfirmed");
                    break;
                case "written":
                    if (t === "forward") {
                        g("ccr_home_seed_mode_prompt");
                    } else {
                        f("ccr_home_seed_mode_prompt", "declined");
                    }
                    break;
            }
            o.handBack(t);
        }, (u)=>{
            c(u);
            if (o.settled()) {
                return;
            }
            m("ccr_home_seed_mode_prompt", "write_failed");
            o.handBack("not_saved");
        });
    }
    if (o.decided) {
        if (o.exitHintShowing) {
            return r(n, {
                dimColor: true,
                italic: true,
                children: [
                    "Press ",
                    o.exit.keyName,
                    " again to exit"
                ]
            });
        }
        return null;
    }
    return r(_e, {
        title: "Use this machine's settings in cloud sessions?",
        onCancel: ()=>onChange("not_now"),
        isCancelActive: !a,
        inputGuide: o.exit.pending ? r(n, {
            children: [
                "Press ",
                o.exit.keyName,
                " again to exit"
            ]
        }) : r(be, {
            children: [
                e(G, {
                    chord: "enter",
                    action: "confirm"
                }),
                e(ut, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "skip for now"
                })
            ]
        }),
        children: [
            r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    e(n, {
                        bold: true,
                        children: $n(configHome)
                    }),
                    e(n, {
                        children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent."
                    }),
                    e(n, {
                        dimColor: true,
                        children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
                    })
                ]
            }),
            e(Ve, {
                options: [
                    {
                        label: "Yes, send my settings",
                        value: "forward"
                    },
                    {
                        label: "No, keep them on this machine",
                        value: "keep_local"
                    },
                    {
                        label: "Not now",
                        value: "not_now"
                    }
                ],
                defaultFocusValue: "not_now",
                hideIndexes: a,
                disablePrintableKeybindings: a,
                isDisabled: o.choicesDisabled,
                refuseInput: o.refuseInput,
                onChange,
                onCancel: ()=>onChange("not_now")
            })
        ]
    });
}
export { fDr };
