let __wakaru_Ki_cache;
export function Ki() {
    if (__wakaru_Ki_cache) {
        return __wakaru_Ki_cache;
    }
    const e = {};
    __wakaru_Ki_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.contentVocabulary = e.metadataVocabulary = undefined;
    e.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples"
    ];
    e.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema"
    ];
    return e;
}
