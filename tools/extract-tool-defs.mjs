// usage: node extract-tool-defs.mjs <files dir> <tools-index.json> <out dir>
// For each "module@offset" tool site, finds the smallest ObjectExpression containing it that has an inputSchema property.
import { createRequire } from 'node:module'; import fs from 'node:fs';
const require = createRequire('/home/itzlvtime/rea/package.json'); const { parseSync } = require('oxc-parser');
const [dir, idxPath, out] = process.argv.slice(2); const idx = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
const asts = {};
for (const [name, r] of Object.entries(idx)) {
  const site = r.tool_def_sites[0]; if (!site) continue;
  const [mod, off] = site.split(' ')[0].split('@'); const offset = +off;
  const src = fs.readFileSync(`${dir}/${mod}`, 'utf8');
  asts[mod] ??= parseSync(mod, src, { sourceType: 'module' }).program;
  let best = null; const stack = [asts[mod]];
  while (stack.length) {
    const n = stack.pop(); if (!n || typeof n !== 'object') continue;
    if (Array.isArray(n)) { stack.push(...n); continue; }
    if (typeof n.start === 'number' && (n.start > offset || n.end < offset)) continue;
    if (n.type === 'ObjectExpression' && n.properties.some(p => p.key && (p.key.name === 'inputSchema' || p.key.name === 'prompt'))) best = n;
    for (const k in n) if (n[k] && typeof n[k] === 'object') stack.push(n[k]);
  }
  if (!best) { console.log('no object', name); continue; }
  fs.writeFileSync(`${out}/${name}.js`, `// ${name} tool definition — ${mod} [${best.start}, ${best.end})\nexport const ${name}Tool = ${src.slice(best.start, best.end)};\n`);
  console.log(name, mod, best.end - best.start);
}
