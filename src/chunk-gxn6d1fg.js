import { createHash } from "crypto";
const Jk = /^[0-9a-f]{64}$/;
function at(e) {
    if (typeof e !== "string" && !ArrayBuffer.isView(e)) {
        throw Object.assign(TypeError("sha256Hex: the data is neither text nor bytes"), {
            code: "ERR_INVALID_ARG_TYPE"
        });
    }
    return createHash("sha256").update(e).digest("hex");
}
export { Jk, at };
