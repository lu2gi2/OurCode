import "/$bunfs/root/chunk-9bbrket9.js";
import { jer, QYr } from "/$bunfs/root/chunk-jyzbw1dw.js";
const d = /<\/(?:body|html)[\t\n\f\r />]/i;
export function runtimeBlockInsertionIndex(n) {
    if (!d.test(n)) {
        return n.length;
    }
    let e = -1;
    let o = ()=>{
        e = -1;
    };
    let r = ()=>{};
    let { tokenizer, overBudget } = QYr({
        sourceCodeLocationInfo: true
    }, {
        onStartTag (t) {
            let i = jer.get(t.tagName);
            if (i !== undefined) {
                tokenizer.state = i;
                tokenizer.lastStartTagName = t.tagName;
            }
            if (t.tagName !== "html") {
                o();
            }
        },
        onEndTag (t) {
            if (t.tagName !== "body" && t.tagName !== "html") {
                o();
            } else if (e < 0 && t.location) {
                e = t.location.startOffset;
            }
        },
        onComment: r,
        onDoctype: r,
        onCharacter: o,
        onNullCharacter: o,
        onWhitespaceCharacter: r,
        onEof: r
    });
    tokenizer.write(n, true);
    if (overBudget()) {
        return;
    }
    if (e >= 0) {
        return e;
    }
    return n.length;
}
