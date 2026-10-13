import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { fg, qf } from "/$bunfs/root/chunk-0ycjphb5.js";
function fqr({ storedAccountUuid, hostAccountUuid }) {
    if (!hostAccountUuid) {
        if (storedAccountUuid) {
            return {
                status: "resolved",
                accountUuid: storedAccountUuid,
                source: "stored"
            };
        }
        return {
            status: "missing"
        };
    }
    if (!storedAccountUuid) {
        return {
            status: "resolved",
            accountUuid: hostAccountUuid,
            source: "env"
        };
    }
    if (storedAccountUuid.trim().toLowerCase() === hostAccountUuid.toLowerCase()) {
        return {
            status: "resolved",
            accountUuid: storedAccountUuid,
            source: "env"
        };
    }
    return {
        status: "mismatch"
    };
}
async function mqr(t) {
    let e = Jt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
    if (e === undefined) {
        return;
    }
    try {
        let n = await fg(t);
        if (n === "env" || n === "fd") {
            return e;
        }
        return undefined;
    } catch  {
        return;
    }
}
async function lae(t) {
    let storedAccountUuid;
    try {
        storedAccountUuid = qf()?.accountUuid;
    } catch  {
        storedAccountUuid = undefined;
    }
    return fqr({
        storedAccountUuid,
        hostAccountUuid: await mqr(t)
    });
}
export { fqr, mqr, lae };
