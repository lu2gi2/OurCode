import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { homedir } from "os";
import { join } from "path";
function r(e) {
    return {
        env: e?.env ?? process.env,
        home: e?.homedir ?? a.HOME ?? homedir()
    };
}
function Mbs(e) {
    let { env, home } = r(e);
    return env.XDG_STATE_HOME ?? join(home, ".local", "state");
}
function Hbs(e) {
    let { env, home } = r(e);
    return env.XDG_CACHE_HOME ?? join(home, ".cache");
}
function XNe(e) {
    let { env, home } = r(e);
    return env.XDG_DATA_HOME ?? join(home, ".local", "share");
}
function QJt(e) {
    return join(XNe(e), "claude", "versions");
}
function aY(e) {
    let { home } = r(e);
    return join(home, ".local", "bin");
}
export { Mbs, Hbs, XNe, QJt, aY };
