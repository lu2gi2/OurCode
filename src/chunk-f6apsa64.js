import { v, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { we, Vl, u6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, dwe } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { QSe, et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Ok, a0n, Wd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { stat } from "fs/promises";
import { dirname, resolve } from "path";
async function cge(directoryPath, r) {
    if (!directoryPath) {
        return {
            resultType: "emptyPath"
        };
    }
    if (Vl() === null) {
        return {
            resultType: "invalidPath",
            directoryPath,
            containsNullByte: false
        };
    }
    let absolutePath;
    try {
        absolutePath = resolve(et(directoryPath));
    } catch (error) {
        let containsNullByte = error instanceof QSe;
        if (!containsNullByte) {
            c(Error("validateDirectoryForWorkspace: expandPath threw"));
        }
        return {
            resultType: "invalidPath",
            directoryPath,
            containsNullByte
        };
    }
    if (ks(directoryPath) || await dwe(absolutePath, u6())) {
        return {
            resultType: "networkPath",
            directoryPath,
            absolutePath
        };
    }
    try {
        if (!(await stat(absolutePath)).isDirectory()) {
            return {
                resultType: "notADirectory",
                directoryPath,
                absolutePath
            };
        }
    } catch (error) {
        if (!jt(error)) {
            c(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), {
                code: v(error)
            }));
        }
        return {
            resultType: "pathNotFound",
            directoryPath,
            absolutePath
        };
    }
    let n = r.blockReadsOutsideWorkingDirectories ? a0n(r) : Ok(r);
    let s = we();
    for (let workingDir of n){
        if (Wd(absolutePath, workingDir, {
            caseFold: false
        })) {
            return {
                resultType: "alreadyInWorkingDirectory",
                directoryPath,
                absolutePath,
                workingDir,
                isExactMatch: resolve(workingDir) === absolutePath,
                isOriginalCwd: workingDir === s
            };
        }
    }
    return {
        resultType: "success",
        absolutePath
    };
}
function dge(t) {
    switch(t.resultType){
        case "emptyPath":
            return "Please provide a directory path.";
        case "invalidPath":
            {
                let r = ge.bold(_(t.directoryPath));
                if (t.containsNullByte) {
                    return `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.`;
                }
                return `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
            }
        case "pathNotFound":
            return `Path ${ge.bold(t.absolutePath)} was not found.`;
        case "networkPath":
            return `${ge.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
        case "notADirectory":
            {
                let r = dirname(t.absolutePath);
                return `${ge.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${ge.bold(r)}?`;
            }
        case "alreadyInWorkingDirectory":
            {
                let r = ge.bold(t.directoryPath);
                if (t.isExactMatch) {
                    if (t.isOriginalCwd) {
                        return `${r} is already the current working directory.`;
                    }
                    return `${r} is already added as a working directory.`;
                }
                let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
                return `${r} is already accessible within ${e} ${ge.bold(t.workingDir)}.`;
            }
        case "success":
            return `Added ${ge.bold(t.absolutePath)} as a working directory.`;
    }
}
export { cge, dge };
