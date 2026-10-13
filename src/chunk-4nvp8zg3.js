import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { cf, na } from "/$bunfs/root/chunk-55x53sfe.js";
import { T3e } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { readFile } from "fs/promises";
async function pme(url) {
    if (!cf()) {
        let r = T3e();
        if (r.HTTPS_PROXY && URL.parse(url)?.protocol === "https:") {
            let ca;
            if (r.SSL_CERT_FILE) {
                try {
                    ca = await readFile(r.SSL_CERT_FILE, "utf8");
                } catch (error) {
                    t(`MCP agent-proxy fallback: failed to read CA bundle: ${error instanceof Error ? error.message : String(error)}`, {
                        level: "warn"
                    });
                }
            }
            return na({
                url,
                fallbackProxy: {
                    url: r.HTTPS_PROXY,
                    noProxy: r.NO_PROXY,
                    ca
                }
            });
        }
    }
    return na({
        url
    });
}
export { pme };
