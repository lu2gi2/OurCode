import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
const xWn = "HKLM\\SOFTWARE\\Policies\\ClaudeCode";
const PWn = "HKCU\\SOFTWARE\\Policies\\ClaudeCode";
const Wtn = "Settings";
const GRs = 5000;
const Hvo = 2097152;
const VRs = "/mnt/c/Windows/System32/reg.exe";
const yH = "/mnt/c/Program Files/ClaudeCode";
function NMt() {
    if (process.env.WSL_DISTRO_NAME) {
        return true;
    }
    try {
        let e = Le("fs").readFileSync("/proc/version", "utf8").toLowerCase();
        return e.includes("microsoft") || e.includes("wsl");
    } catch  {
        return false;
    }
}
export { xWn, PWn, Wtn, GRs, Hvo, VRs, yH, NMt };
