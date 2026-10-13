import { lstat } from "fs/promises";
async function lk(i, e, t) {
    if (i.isDirectory()) {
        return "dir";
    }
    if (i.isSymbolicLink()) {
        return "symlink";
    }
    if (i.isFile()) {
        return "file";
    }
    if (i.isFIFO() || i.isSocket() || i.isBlockDevice() || i.isCharacterDevice()) {
        return "other";
    }
    try {
        let r = await lstat(e);
        if (r.isDirectory()) {
            return "dir";
        }
        if (r.isSymbolicLink()) {
            return "symlink";
        }
        if (r.isFile()) {
            return "file";
        }
        return "other";
    } catch  {
        return t;
    }
}
export { lk };
