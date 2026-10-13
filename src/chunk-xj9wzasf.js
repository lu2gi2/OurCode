import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { xS } from "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { Al } from "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { spawn } from "child_process";
import { readFile } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
const G = join(homedir(), ".cache", "coder-audio", "port");
const X = join(homedir(), ".cache", "coder-audio", "token");
class A {
    audioNapi = null;
    audioNapiPromise = null;
    arecordProbe = null;
    linuxAlsaCardsProbe = null;
    activeRecorder = null;
    activeForwardedSocket = null;
    forwardedStartGeneration = 0;
    nativeRecordingActive = false;
}
const u = new q(()=>new A);
const p = {
    started: true
};
const k = {
    started: false,
    superseded: false,
    hint: null,
    expected: false
};
function f(e) {
    e.audioNapiPromise ??= (async ()=>{
        let o = Date.now();
        let r = await import("/$bunfs/root/chunk-9cej4ktq.js");
        r.isNativeAudioAvailable();
        e.audioNapi = r;
        t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`);
        return r;
    })();
    return e.audioNapiPromise;
}
const v = 16000;
const w = 1;
const D = "2.0";
const h = "3%";
async function c(e) {
    return (await it(e, [
        "--version"
    ], {
        timeout: 3000,
        useCwd: false
    })).code === 0;
}
function x(e) {
    e.arecordProbe ??= new Promise((resolve)=>{
        let r = spawn("arecord", [
            "-f",
            "S16_LE",
            "-r",
            String(v),
            "-c",
            String(w),
            "-t",
            "raw",
            "/dev/null"
        ], {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            windowsHide: true
        });
        let s = "";
        r.stderr?.on("data", (i)=>{
            s += i.toString();
        });
        let n = setTimeout((i, d)=>{
            i.kill("SIGTERM");
            d({
                ok: true,
                stderr: ""
            });
        }, 150, r, resolve);
        r.once("close", (i)=>{
            clearTimeout(n);
            resolve({
                ok: i === 0,
                stderr: s.trim()
            });
        });
        r.once("error", ()=>{
            clearTimeout(n);
            resolve({
                ok: false,
                stderr: "arecord: command not found"
            });
        });
    });
    return e.arecordProbe;
}
function g(e) {
    e.linuxAlsaCardsProbe ??= readFile("/proc/asound/cards", "utf8").then((o)=>{
        let r = o.trim();
        return r !== "" && !r.includes("no soundcards");
    }, ()=>false);
    return e.linuxAlsaCardsProbe;
}
async function E() {
    if (await c("apt-get")) {
        return {
            cmd: "sudo",
            args: [
                "apt-get",
                "install",
                "-y",
                "sox"
            ],
            displayCommand: "sudo apt-get install sox"
        };
    }
    if (await c("dnf")) {
        return {
            cmd: "sudo",
            args: [
                "dnf",
                "install",
                "-y",
                "sox"
            ],
            displayCommand: "sudo dnf install sox"
        };
    }
    if (await c("pacman")) {
        return {
            cmd: "sudo",
            args: [
                "pacman",
                "-S",
                "--noconfirm",
                "sox"
            ],
            displayCommand: "sudo pacman -S sox"
        };
    }
    return null;
}
export async function checkVoiceDependencies(e) {
    let o = u.of(e);
    if ((await f(o)).isNativeAudioAvailable() && await g(o)) {
        return {
            available: true,
            missing: [],
            installCommand: null
        };
    }
    if (await c("arecord")) {
        return {
            available: true,
            missing: [],
            installCommand: null
        };
    }
    let missing = [];
    if (!await c("sox")) {
        missing.push("sox (rec command)");
    }
    let n = missing.length > 0 ? await E() : null;
    return {
        available: missing.length === 0,
        missing,
        installCommand: n?.displayCommand ?? null
    };
}
export async function requestMicrophonePermission(e) {
    if (!(await f(u.of(e))).isNativeAudioAvailable()) {
        return true;
    }
    if ((await startRecording(e, (s)=>{}, ()=>{}, {
        silenceDetection: false
    })).started) {
        stopRecording(e);
        return true;
    }
    return false;
}
export async function checkRecordingAvailability(e, o = {}) {
    if (xS() || a.CLAUDE_CODE_REMOTE) {
        return {
            available: false,
            reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`
        };
    }
    let r = u.of(e);
    if ((await f(r)).isNativeAudioAvailable() && await g(r)) {
        return {
            available: true,
            reason: null
        };
    }
    let reason = `${`Voice mode could not find a working audio recorder in WSL.

` + `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

`}If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.`;
    if (await c("arecord")) {
        let d = await x(r);
        if (d.ok) {
            return {
                available: true,
                reason: null
            };
        }
        t(`[voice] arecord probe failed: ${d.stderr}`);
    }
    let i = await c("sox");
    if (i && await c("rec")) {
        return {
            available: true,
            reason: null
        };
    }
    if (O() === "wsl") {
        return {
            available: false,
            reason
        };
    }
    if (!i) {
        let d = await E();
        return {
            available: false,
            reason: d ? `Voice mode requires SoX for audio recording. Install it with: ${d.displayCommand}` : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`
        };
    }
    return {
        available: false,
        reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`
    };
}
export async function startRecording(e, o, r, s) {
    t("[voice] startRecording called, platform=linux");
    let n = u.of(e);
    let i = await f(n);
    let d = i.isNativeAudioAvailable() && await g(n);
    let l = s?.silenceDetection !== false;
    if (d) {
        if (n.nativeRecordingActive || i.isNativeRecordingActive()) {
            i.stopNativeRecording();
            n.nativeRecordingActive = false;
        }
        if (i.startNativeRecording((S)=>{
            o(S);
        }, ()=>{
            if (l) {
                n.nativeRecordingActive = false;
                r();
            }
        })) {
            n.nativeRecordingActive = true;
            return p;
        }
    }
    if (await c("arecord") && (await x(n)).ok) {
        if (T(n, o, r)) {
            return p;
        }
        return k;
    }
    if (C(n, o, r, s)) {
        return p;
    }
    return k;
}
function C(e, o, r, s) {
    let n = s?.silenceDetection !== false;
    let i = [
        "-q",
        "--buffer",
        "1024",
        "-t",
        "raw",
        "-r",
        String(v),
        "-e",
        "signed",
        "-b",
        "16",
        "-c",
        String(w),
        "-"
    ];
    if (n) {
        i.push("silence", "1", "0.1", h, "1", D, h);
    }
    let d = spawn("rec", i, {
        stdio: [
            "pipe",
            "pipe",
            "pipe"
        ],
        windowsHide: true,
        ...Al("helper")
    });
    e.activeRecorder = d;
    d.stdout?.on("data", (l)=>{
        o(l);
    });
    d.stderr?.on("data", ()=>{});
    d.on("close", ()=>{
        e.activeRecorder = null;
        r();
    });
    d.on("error", (l)=>{
        t(`[voice] SoX rec spawn failed: ${l instanceof Error ? l.message : String(l)}`, {
            level: "error"
        });
        e.activeRecorder = null;
        r();
    });
    return true;
}
function T(e, o, r) {
    let s = [
        "-f",
        "S16_LE",
        "-r",
        String(v),
        "-c",
        String(w),
        "-t",
        "raw",
        "-q",
        "-"
    ];
    let n = spawn("arecord", s, {
        stdio: [
            "pipe",
            "pipe",
            "pipe"
        ],
        windowsHide: true,
        ...Al("helper")
    });
    e.activeRecorder = n;
    n.stdout?.on("data", (i)=>{
        o(i);
    });
    n.stderr?.on("data", ()=>{});
    n.on("close", ()=>{
        e.activeRecorder = null;
        r();
    });
    n.on("error", (i)=>{
        t(`[voice] arecord recorder spawn error: ${i}`, {
            level: "error"
        });
        e.activeRecorder = null;
        r();
    });
    return true;
}
export function stopRecording(e) {
    let o = u.of(e);
    if (o.nativeRecordingActive && o.audioNapi) {
        o.audioNapi.stopNativeRecording();
        o.nativeRecordingActive = false;
        return;
    }
    if (o.activeRecorder) {
        o.activeRecorder.kill("SIGTERM");
        o.activeRecorder = null;
    }
}
