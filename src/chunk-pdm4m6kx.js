import { PQ } from "/$bunfs/root/chunk-38fr02qr.js";
import { PVe, qnt } from "/$bunfs/root/chunk-qwvy7ma3.js";
const VBt = /[\u202a-\u202e\u2066-\u2069]/;
function qBt(e) {
    return e !== "" && e !== "." && e !== ".." && e.length <= 255 && !/[/\\\p{Cc}]/u.test(e) && !VBt.test(e);
}
function uzo(e, r) {
    return qnt(e, r);
}
function o1r(e) {
    if (e instanceof PVe) {
        return "credential_name";
    }
    return "path_rejected";
}
function pzo(e, r, a) {
    let t = l9n(r) === undefined ? "Tell the user it was not attached." : "If the user wants it sent, ask them to attach it to the chat themselves.";
    return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${t} ${a}`;
}
function Imn(e, r, a) {
    let t = l9n(r);
    let o = t === undefined ? "Ask the user to share the file with this session, or to add its folder with /add-dir." : `Files the user attached to this chat are usually in ${t}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
    return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${o} ${a}`;
}
function l9n(e) {
    if (e.isRemoteMode !== true) {
        return;
    }
    try {
        return PQ();
    } catch  {
        return;
    }
}
const s1r = {
    too_large: true,
    hard_links: true,
    not_regular: true,
    moved: true,
    grew: true,
    open_failed: true,
    read_failed: true
};
function Omn(e) {
    return Object.hasOwn(s1r, e);
}
function Mmn(e, code, a, t) {
    switch(code){
        case "too_large":
            return {
                error: `Cannot attach "${e}": files over ${a / 1048576} MiB cannot be attached. ${t}`,
                code: "too_large"
            };
        case "hard_links":
            return {
                error: `Cannot attach "${e}": the file has more than one hard link, which can point at a file outside the folders this session may read. Copy the file and attach the copy. ${t}`,
                code: "hard_links"
            };
        case "not_regular":
            return {
                error: `Cannot attach "${e}": it is not a regular file. Attach files one at a time, not a folder. ${t}`,
                code: "not_regular"
            };
        case "moved":
        case "grew":
        case "open_failed":
        case "read_failed":
            return {
                error: `Could not read "${e}". ${t}`,
                code
            };
    }
}
export { VBt, qBt, uzo, o1r, pzo, Imn, l9n, s1r, Omn, Mmn };
