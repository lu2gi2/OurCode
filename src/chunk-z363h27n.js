import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { QS, _Re } from "/$bunfs/root/chunk-0ycjphb5.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const o = Se(ty(), 1);
const u = new Set([
    "update",
    "install",
    "doctor"
]);
function l({ currentVersion, requiredMinimumVersion, requiredMaximumVersion, topLevelCommand }) {
    if (!requiredMinimumVersion && !requiredMaximumVersion) {
        return null;
    }
    if (topLevelCommand !== undefined && u.has(topLevelCommand)) {
        return null;
    }
    if (!o.parse(currentVersion)) {
        return null;
    }
    if (requiredMinimumVersion) {
        let i = o.parse(requiredMinimumVersion)?.version;
        if (!i) {
            t(`requiredMinimumVersion '${requiredMinimumVersion}' is not a valid semver version \u2014 ignoring`, {
                level: "error"
            });
        } else if (!QS(currentVersion, i)) {
            return `Claude Code ${currentVersion} is older than the minimum version required by your organization (${requiredMinimumVersion}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
        }
    }
    if (requiredMaximumVersion) {
        let i = o.parse(requiredMaximumVersion)?.version;
        if (!i) {
            t(`requiredMaximumVersion '${requiredMaximumVersion}' is not a valid semver version \u2014 ignoring`, {
                level: "error"
            });
        } else if (!_Re(currentVersion, i)) {
            return `Claude Code ${currentVersion} is newer than the maximum version allowed by your organization (${requiredMaximumVersion}).
Your organization requires version ${requiredMaximumVersion} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
        }
    }
    return null;
}
function cbs(e) {
    try {
        let r = e.parent ? e : null;
        while(r?.parent?.parent){
            r = r.parent;
        }
        let n = fe("policySettings");
        return l({
            currentVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            requiredMinimumVersion: n?.requiredMinimumVersion,
            requiredMaximumVersion: n?.requiredMaximumVersion,
            topLevelCommand: r?.name()
        });
    } catch (error) {
        c(error);
        return null;
    }
}
function dbs() {
    try {
        let e = fe("policySettings");
        return l({
            currentVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            requiredMinimumVersion: e?.requiredMinimumVersion,
            requiredMaximumVersion: e?.requiredMaximumVersion,
            topLevelCommand: undefined
        });
    } catch (error) {
        c(error);
        return null;
    }
}
export { cbs, dbs };
