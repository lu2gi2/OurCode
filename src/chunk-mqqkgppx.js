import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const Ryt = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function Uhn() {
    let { columns, rows } = process.stdout;
    if (!columns || !rows) {
        return {};
    }
    return {
        [Ryt]: `${columns}x${rows}`
    };
}
function n2o() {
    let a_CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE = a.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
    delete process.env[Ryt];
    if (a_CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE === undefined || !process.stdout.isTTY) {
        return;
    }
    let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(a_CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE);
    if (!e) {
        return;
    }
    process.stdout.columns ||= Number(e[1]);
    process.stdout.rows ||= Number(e[2]);
}
export { Ryt, Uhn, n2o };
