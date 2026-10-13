import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
function C8t(t) {
    let r = t.match(/^([A-Z]):(.*)$/i);
    if (!r) {
        return null;
    }
    return `/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\", "/")}`;
}
class NKe {
    wslDistroName;
    constructor(t){
        this.wslDistroName = t;
    }
    async toLocalPath(t) {
        if (!t) {
            return t;
        }
        if (this.wslDistroName) {
            let o = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
            if (o && o[1] !== this.wslDistroName) {
                return t;
            }
        }
        let { stdout, code } = await it("wslpath", [
            "-u",
            t
        ], {
            useCwd: false
        });
        let n = stdout.trim();
        if (code === 0 && n) {
            return n;
        }
        return C8t(t) ?? t.replaceAll("\\", "/");
    }
    async toIDEPath(t) {
        if (!t) {
            return t;
        }
        let { stdout, code } = await it("wslpath", [
            "-w",
            t
        ], {
            useCwd: false
        });
        let n = stdout.trim();
        if (code === 0 && n) {
            return n;
        }
        return t;
    }
}
function Pus(t, r) {
    let e = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
    if (e) {
        return e[1] === r;
    }
    return true;
}
export { C8t, NKe, Pus };
