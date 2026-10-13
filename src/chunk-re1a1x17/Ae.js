import { te } from "./te.js";
let __wakaru_Ae_cache;
export function Ae() {
    if (__wakaru_Ae_cache) {
        return __wakaru_Ae_cache;
    }
    const e = {};
    __wakaru_Ae_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = {
        data: new t.Name("data"),
        valCxt: new t.Name("valCxt"),
        instancePath: new t.Name("instancePath"),
        parentData: new t.Name("parentData"),
        parentDataProperty: new t.Name("parentDataProperty"),
        rootData: new t.Name("rootData"),
        dynamicAnchors: new t.Name("dynamicAnchors"),
        vErrors: new t.Name("vErrors"),
        errors: new t.Name("errors"),
        this: new t.Name("this"),
        self: new t.Name("self"),
        scope: new t.Name("scope"),
        json: new t.Name("json"),
        jsonPos: new t.Name("jsonPos"),
        jsonLen: new t.Name("jsonLen"),
        jsonPart: new t.Name("jsonPart")
    };
    e.default = r;
    return e;
}
