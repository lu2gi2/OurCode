import { W, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { dp } from "/$bunfs/root/chunk-x47nahfr.js";
import { Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { eds, nds, MAe, Ifr, Ofr, Tce, jMn } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { Lfr, Sds } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { EYo } from "/$bunfs/root/chunk-4298waas.js";
import { writeFile } from "fs/promises";
const timeout = 30000;
const timeout_1 = 300000;
const MAe_1 = MAe;
const maxContentLength = 16777216;
const d = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
async function Pzt(o = {}) {
    let t = await p(o);
    if (!t.success && Tce(t)) {
        return p(o);
    }
    return t;
}
async function p(o) {
    let t = dp();
    let l = t ? `${d}&entrypoint=${encodeURIComponent(t)}` : d;
    try {
        let r = await Gt.get(l, {
            auth: "teleport-org",
            isBackground: o.isBackground,
            timeout,
            maxContentLength,
            credentials: o.credentials
        });
        if (!r.ok || !Array.isArray(r.data?.skills)) {
            return Ifr("skills", r);
        }
        let s = r.data.skills.filter(nds);
        let skills = s.map(eds);
        try {
            EYo(s);
        } catch (error) {
            J("warn", "skills_sync_ownerships_not_recorded");
            c(W(error));
        }
        try {
            Sds(s);
        } catch (error) {
            J("warn", "skills_sync_host_mount_kinds_not_recorded");
            c(W(error));
        }
        return {
            success: true,
            skills
        };
    } catch (error) {
        return Ofr(error);
    }
}
async function vYo(o, t, l, r = {}) {
    let s = dp();
    let n = [];
    if (s) {
        n.push(`entrypoint=${encodeURIComponent(s)}`);
    }
    if (l) {
        n.push(`version=${encodeURIComponent(l)}`);
    }
    let a = n.length > 0 ? `?${n.join("&")}` : "";
    try {
        let e = await Gt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(o)}/download${a}`, {
            auth: "teleport-org",
            isBackground: r.isBackground,
            timeout: timeout_1,
            responseType: "arraybuffer",
            maxContentLength: MAe_1,
            credentials: r.credentials
        });
        if (!e.ok || !e.data) {
            J("warn", "skills_sync_download_not_ok", {
                reason: e.ok ? "empty_body" : e.reason
            });
            return false;
        }
        let i = Buffer.from(e.data);
        if (!Lfr(i)) {
            J("warn", "skills_sync_download_not_zip", {
                serverError: jMn(i),
                bodyLen: i.length
            });
            return false;
        }
        await writeFile(t, i);
        return true;
    } catch (error) {
        let { kind } = ti(error);
        J("warn", "skills_sync_download_exception", {
            kind
        });
        return false;
    }
}
export { timeout_1 as $Vr, Pzt, vYo };
