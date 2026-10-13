import { Yet } from "/$bunfs/root/chunk-kasbfbhj.js";
function C$r(s, r = []) {
    let content = s.message.content;
    if (!Array.isArray(content)) {
        return "";
    }
    let o = Yet();
    if (o.size === 0) {
        return "";
    }
    return content.flatMap((e)=>{
        if (e.type !== "tool_use") {
            return [];
        }
        if (!o.has(e.name)) {
            return r.filter((n)=>n.replCallId === e.id).map((n)=>n.text);
        }
        let i = e.input?.text;
        if (typeof i === "string") {
            return [
                i
            ];
        }
        return [];
    }).filter(Boolean).join(`
`);
}
const p = 8;
class R$r {
    #t = [];
    note(replCallId, { text }) {
        if (typeof text !== "string" || !text) {
            return;
        }
        this.#t.push({
            replCallId,
            text
        });
        if (this.#t.length > p) {
            this.#t.shift();
        }
    }
    take() {
        return this.#t.splice(0);
    }
    clear() {
        this.#t.length = 0;
    }
}
export { C$r, R$r };
