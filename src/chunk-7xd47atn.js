import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
async function Oje(n, e) {
    return (await FLr(n, e))?.tags ?? null;
}
async function FLr(n, e) {
    try {
        let s = e.getAccessToken ? await e.getAccessToken() : undefined;
        let { getBridgeSessionOrStatus } = await import("/$bunfs/root/chunk-sg5zsxsf.js");
        let { session } = await getBridgeSessionOrStatus(n, {
            baseUrl: e.baseUrl,
            ...s && {
                getAccessToken: ()=>s
            },
            credentials: e.credentials,
            useV2: true
        });
        if (!session || !Array.isArray(session.tags)) {
            return null;
        }
        let a = typeof session.created_at === "string" ? Date.parse(session.created_at) : Number.NaN;
        return {
            tags: session.tags,
            createdAtMs: Number.isNaN(a) ? undefined : a
        };
    } catch (error) {
        t(`[bridge:session] session tag read failed: ${l(error)}`, {
            level: "warn"
        });
        return null;
    }
}
export { Oje, FLr };
