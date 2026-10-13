import { Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Y5e } from "/$bunfs/root/chunk-3yz9zdww.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { rt, hue } from "/$bunfs/root/chunk-xx1j2680.js";
const Ugo = 25000;
const Aws = ` To read it anyway, up to what still fits in your context, call ${rt} again with ${hue}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`;
const Bgo = ` Even with ${hue}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`;
const Cws = ` ${hue} is not available where this read runs; read it in parts with offset and limit.`;
const jgo = 128;
class $de extends Error {
    tokenCount;
    maxTokens;
    constructor(e, t, r = ""){
        super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
        this.tokenCount = e;
        this.maxTokens = t;
        this.name = "MaxFileReadTokenExceededError";
    }
}
const n = new WeakMap;
function Wgo(e, t) {
    n.set(e, t);
}
function XFn(e) {
    return n.get(e);
}
function i() {
    let a_CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS = a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
    if (a_CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS !== undefined && a_CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS > 0) {
        return a_CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
    }
}
function qW() {
    let e = wo();
    e.defaultFileReadingLimits ??= {
        maxSizeBytes: Y5e,
        maxTokens: i() ?? Ugo
    };
    return e.defaultFileReadingLimits;
}
function VYe() {
    return Gr("tengu_tab_read_sep", false);
}
export { Ugo, Aws, Bgo, Cws, jgo, $de, Wgo, XFn, qW, VYe };
