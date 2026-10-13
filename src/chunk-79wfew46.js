import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { readdir, readFile } from "fs/promises";
import { release } from "os";
function readProcVersionSync() {
    try {
        return ie().readFileSync("/proc/version", {
            encoding: "utf8"
        }).toLowerCase();
    } catch  {
        return;
    }
}
function FRr(e) {
    return e.includes("microsoft") || e.includes("wsl");
}
const aCo = [
    "macos",
    "wsl"
];
class f {
    sources;
    primedProcVersion;
    fallbackProcVersion;
    fallbackProcVersionRead = false;
    platform;
    wslVersion = null;
    macOSMajorVersion = null;
    linuxDistroInfo;
    constructor(e){
        this.sources = e;
    }
    kernelString() {
        if (this.primedProcVersion !== undefined) {
            return this.primedProcVersion;
        }
        if (!this.fallbackProcVersionRead) {
            this.fallbackProcVersion = this.sources.readProcVersionSync();
            this.fallbackProcVersionRead = true;
        }
        return this.fallbackProcVersion;
    }
    getPlatform() {
        if (this.platform !== undefined) {
            return this.platform;
        }
        try {
            if (this.sources.platform === "darwin") {
                this.platform = "macos";
            } else if (this.sources.platform === "win32") {
                this.platform = "windows";
            } else if (this.sources.platform === "linux") {
                if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) {
                    this.platform = "wsl";
                } else {
                    let e = this.kernelString();
                    this.platform = e !== undefined && FRr(e) ? "wsl" : "linux";
                }
            } else {
                this.platform = "unknown";
            }
        } catch (error) {
            c(error);
            this.platform = "unknown";
        }
        return this.platform;
    }
    getWslVersion() {
        if (this.wslVersion !== null) {
            return this.wslVersion;
        }
        if (this.sources.platform !== "linux") {
            this.wslVersion = undefined;
            return;
        }
        let e = this.kernelString();
        if (e === undefined) {
            this.wslVersion = undefined;
            return;
        }
        let r = e.match(/wsl(\d+)/);
        if (r && r[1]) {
            this.wslVersion = r[1];
        } else if (e.includes("microsoft")) {
            this.wslVersion = "1";
        } else {
            this.wslVersion = undefined;
        }
        return this.wslVersion;
    }
    getMacOSMajorVersion() {
        if (this.macOSMajorVersion !== null) {
            return this.macOSMajorVersion;
        }
        if (this.sources.platform !== "darwin") {
            this.macOSMajorVersion = undefined;
            return;
        }
        let e = this.sources.osRelease().match(/^(\d+)\./);
        this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : undefined;
        return this.macOSMajorVersion;
    }
    getLinuxDistroInfo() {
        return this.linuxDistroInfo ??= this.readLinuxDistroInfo();
    }
    async readLinuxDistroInfo() {
        if (this.sources.platform !== "linux") {
            return;
        }
        let e = {
            linuxKernel: this.sources.osRelease()
        };
        try {
            let r = await this.sources.readOsRelease();
            for (let o of r.split(`
`)){
                let n = o.match(/^(ID|VERSION_ID)=(.*)$/);
                if (n && n[1] && n[2]) {
                    let i = n[2].replace(/^"|"$/g, "");
                    if (n[1] === "ID") {
                        e.linuxDistroId = i;
                    } else {
                        e.linuxDistroVersion = i;
                    }
                }
            }
        } catch  {}
        return e;
    }
    async prime() {
        if (this.primedProcVersion !== undefined || this.sources.platform !== "linux") {
            return;
        }
        try {
            let e = await this.sources.readProcVersion();
            this.primedProcVersion = e.toLowerCase();
        } catch (error) {
            t(`Failed to read /proc/version for WSL detection: ${error}`, {
                level: "error"
            });
            return;
        }
        this.platform = undefined;
        this.wslVersion = null;
    }
}
let m;
function s() {
    return m ??= new f({
        platform: "linux",
        env: process.env,
        readProcVersionSync,
        readProcVersion: ()=>readFile("/proc/version", {
                encoding: "utf8"
            }),
        osRelease: release,
        readOsRelease: ()=>readFile("/etc/os-release", "utf8")
    });
}
function hOs() {
    return s().prime();
}
function O() {
    return s().getPlatform();
}
function wPe(e) {
    switch(e){
        case "darwin":
            return "macOS";
        case "win32":
            return "Windows";
        case "linux":
            return "Linux";
        default:
            return e;
    }
}
function sBe() {
    return s().getWslVersion();
}
function KGn() {
    return s().getLinuxDistroInfo();
}
function yOs() {
    return s().getMacOSMajorVersion();
}
const p = [
    [
        ".git",
        "git"
    ],
    [
        ".hg",
        "mercurial"
    ],
    [
        ".svn",
        "svn"
    ],
    [
        ".p4config",
        "perforce"
    ],
    [
        "$tf",
        "tfs"
    ],
    [
        ".tfvc",
        "tfs"
    ],
    [
        ".jj",
        "jujutsu"
    ],
    [
        ".sl",
        "sapling"
    ]
];
async function _Os(e) {
    let r = new Set;
    if (process.env.P4PORT) {
        r.add("perforce");
    }
    try {
        let o = e ?? ie().cwd();
        let n = new Set(await readdir(o));
        for (let [i, a] of p){
            if (n.has(i)) {
                r.add(a);
            }
        }
    } catch  {}
    return [
        ...r
    ];
}
export { readProcVersionSync as $Rr, FRr, aCo, hOs, O, wPe, sBe, KGn, yOs, _Os };
