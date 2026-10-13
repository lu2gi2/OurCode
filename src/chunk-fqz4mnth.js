import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
const e = Le("/$bunfs/root/design-6m4nsdef.md");
const t = Le("/$bunfs/root/designHowTo-p8zjfw0e.md");
const s = Le("/$bunfs/root/designTwoSteps-g0bev2xr.md");
const a = Le("/$bunfs/root/slides-zdpeg77q.md");
const i = Le("/$bunfs/root/slidesHowTo-09m4dbj2.md");
const r = Le("/$bunfs/root/slidesTwoSteps-1shjmnfb.md");
export const REPL_ROUTE_SECTION_BY_TYPE_KEY = new Map([
    [
        "design",
        e.trim()
    ],
    [
        "slides",
        a.trim()
    ]
]);
export const REPL_ROUTE_TWO_STEPS_BY_TYPE_KEY = new Map([
    [
        "design",
        s.trim()
    ],
    [
        "slides",
        r.trim()
    ]
]);
export const REPL_ROUTE_HOW_TO_URL_WORDS = "<the new Artifact's url>";
export const REPL_ROUTE_HOW_TO_TOKENS_WORDS = '"<the tokens.json path above>"';
export const REPL_ROUTE_HOW_TO_SYSTEM_ROW_END = "   // only with a design system";
export const REPL_ROUTE_HOW_TO_SYSTEM_SENTENCE = " With a design system, the colours, type and spacing are the ones in the files you printed.";
export const REPL_ROUTE_HOW_TO_BY_TYPE_KEY = new Map([
    [
        "design",
        {
            text: t.trim(),
            whole: "design",
            parts: "boards"
        }
    ],
    [
        "slides",
        {
            text: i.trim(),
            whole: "deck",
            parts: "slides"
        }
    ]
]);
