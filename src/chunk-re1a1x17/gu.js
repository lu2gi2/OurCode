import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_gu_cache;
export function gu() {
    if (__wakaru_gu_cache) {
        return __wakaru_gu_cache;
    }
    const e = {};
    __wakaru_gu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = undefined;
    let t = te();
    let r = ne();
    function s(i, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
        if (keyword !== undefined && schema !== undefined) {
            throw Error('both "keyword" and "schema" passed, only one allowed');
        }
        if (keyword !== undefined) {
            let schema_1 = i.schema[keyword];
            if (schemaProp === undefined) {
                return {
                    schema: schema_1,
                    schemaPath: t._`${i.schemaPath}${t.getProperty(keyword)}`,
                    errSchemaPath: `${i.errSchemaPath}/${keyword}`
                };
            }
            return {
                schema: schema_1[schemaProp],
                schemaPath: t._`${i.schemaPath}${t.getProperty(keyword)}${t.getProperty(schemaProp)}`,
                errSchemaPath: `${i.errSchemaPath}/${keyword}/${r.escapeFragment(schemaProp)}`
            };
        }
        if (schema !== undefined) {
            if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
                throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
            }
            return {
                schema,
                schemaPath,
                topSchemaRef,
                errSchemaPath
            };
        }
        throw Error('either "keyword" or "schema" must be passed');
    }
    e.getSubschema = s;
    function a(i, l, { dataProp, dataPropType, data, dataTypes, propertyName }) {
        if (data !== undefined && dataProp !== undefined) {
            throw Error('both "data" and "dataProp" passed, only one allowed');
        }
        let { gen } = l;
        if (dataProp !== undefined) {
            let { errorPath, dataPathArr, opts } = l;
            y(gen.let("data", t._`${l.data}${t.getProperty(dataProp)}`, true));
            i.errorPath = t.str`${errorPath}${r.getErrorPath(dataProp, dataPropType, opts.jsPropertySyntax)}`;
            i.parentDataProperty = t._`${dataProp}`;
            i.dataPathArr = [
                ...dataPathArr,
                i.parentDataProperty
            ];
        }
        if (data !== undefined) {
            y(data instanceof t.Name ? data : gen.let("data", data, true));
            if (propertyName !== undefined) {
                i.propertyName = propertyName;
            }
        }
        if (dataTypes) {
            i.dataTypes = dataTypes;
        }
        function y(v) {
            i.data = v;
            i.dataLevel = l.dataLevel + 1;
            i.dataTypes = [];
            l.definedProperties = new Set;
            i.parentData = l.data;
            i.dataNames = [
                ...l.dataNames,
                v
            ];
        }
    }
    e.extendSubschemaData = a;
    function n(i, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
        if (compositeRule !== undefined) {
            i.compositeRule = compositeRule;
        }
        if (createErrors !== undefined) {
            i.createErrors = createErrors;
        }
        if (allErrors !== undefined) {
            i.allErrors = allErrors;
        }
        i.jtdDiscriminator = jtdDiscriminator;
        i.jtdMetadata = jtdMetadata;
    }
    e.extendSubschemaMode = n;
    return e;
}
