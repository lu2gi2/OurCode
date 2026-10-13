import { ost } from "/$bunfs/root/chunk-kw599e0m.js";
const D = "/$bunfs/root/mermaid.min.js";
const H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
export async function loadMermaidBundleJs() {
    return H + await ost(D, import.meta.dirname);
}
