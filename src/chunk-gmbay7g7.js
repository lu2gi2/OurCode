import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ae, lH, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
function u_t() {
    try {
        return false;
    } catch (error) {
        c(W(error));
        return false;
    }
}
const i = 20;
const u = i + 1;
const IKo = 10;
const _ = 1209600000;
const bGr = [
    {
        text: "Showing fewer prompt suggestions"
    },
    {
        text: " · use one to bring them back",
        dim: true
    }
];
function yQn() {
    let e = ce();
    if (r(e) < i) {
        return false;
    }
    if (a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true) {
        return false;
    }
    if (u_t()) {
        return false;
    }
    if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) {
        return false;
    }
    return true;
}
function MWt(e, o, n) {
    if (e) {
        if (n) {
            n.unusedInARow = 0;
        }
        m(o, false);
        return;
    }
    if (!n || r(ce()) >= i) {
        return;
    }
    n.unusedInARow++;
    if (n.unusedInARow >= i) {
        n.unusedInARow = 0;
        Ae(S, o);
    }
}
function OKo(e, o) {
    if (o) {
        o.unusedInARow = 0;
    }
    m(e, true);
}
function SGr(e) {
    if (!p(ce()) || !yQn()) {
        return false;
    }
    Ae((o)=>{
        if (p(o)) {
            return {
                ...o,
                promptSuggestionUnusedStreak: u
            };
        }
        return o;
    }, e);
    g("prompt_suggestion_back_off_notice");
    return true;
}
function m(e, via_config_toggle) {
    let n = r(ce());
    if (n === 0) {
        return;
    }
    if (!yQn()) {
        Ae(d, e);
        return;
    }
    let l = {
        was_notice_claimed: n === u,
        via_config_toggle
    };
    lH(d, e).then((s)=>{
        if (s) {
            g("prompt_suggestion_back_off_end", l);
        } else {
            f("prompt_suggestion_back_off_end", "reset_unconfirmed", l);
        }
    }).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`, {
            level: "error"
        }));
}
function d(e) {
    if (r(e) === 0) {
        return e;
    }
    return {
        ...e,
        promptSuggestionUnusedStreak: 0
    };
}
function S(e) {
    if (r(e) >= i) {
        return e;
    }
    return {
        ...e,
        promptSuggestionUnusedStreak: i
    };
}
function p(e) {
    let o = r(e);
    return o >= i && o !== u;
}
function r({ promptSuggestionUnusedStreak }) {
    if (typeof promptSuggestionUnusedStreak === "number" && Number.isFinite(promptSuggestionUnusedStreak)) {
        return promptSuggestionUnusedStreak;
    }
    return 0;
}
export { u_t, IKo, bGr, yQn, MWt, OKo, SGr };
