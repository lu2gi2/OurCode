// usage: node extract-missing-tools.mjs <files dir> <tools-index.json> <out dir>
import { createRequire } from 'node:module'; import fs from 'node:fs';
const require = createRequire('/home/itzlvtime/rea/package.json'); const { parseSync } = require('oxc-parser');
const [dir, idxPath, out] = process.argv.slice(2); const idx = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
const want = new Map(); // var -> tool name
for (const [name, r] of Object.entries(idx)) if (!fs.existsSync(`${out}/${name}.js`)) for (const c of r.const_defs) want.set(c.split(':')[1], name);
const toolish = new Set(['inputSchema', 'call', 'checkPermissions', 'isReadOnly', 'isConcurrencySafe', 'prompt', 'description', 'mapToolResultToToolResultBlockParam']);
const found = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
  const src = fs.readFileSync(`${dir}/${f}`, 'utf8'); let ast;
  try { ast = parseSync(f, src, { sourceType: 'module' }).program; } catch { continue; }
  const stack = [ast];
  while (stack.length) {
    const n = stack.pop(); if (!n || typeof n !== 'object') continue;
    if (Array.isArray(n)) { stack.push(...n); continue; }
    if (n.type === 'ObjectExpression') {
      const keys = n.properties.map(p => p.key?.name).filter(Boolean);
      const np = n.properties.find(p => p.key?.name === 'name' && p.value?.type === 'Identifier' && want.has(p.value.name));
      const score = keys.filter(k => toolish.has(k)).length;
      if (np && score >= 3) { const t = want.get(np.value.name); if (!found[t] || found[t].len < n.end - n.start) found[t] = { f, start: n.start, end: n.end, len: n.end - n.start, text: src.slice(n.start, n.end) }; }
    }
    for (const k in n) if (n[k] && typeof n[k] === 'object') stack.push(n[k]);
  }
}
for (const [t, v] of Object.entries(found)) { fs.writeFileSync(`${out}/${t}.js`, `// ${t} tool definition — ${v.f} [${v.start}, ${v.end})\nexport const ${t}Tool = ${v.text};\n`); console.log(t, v.f, v.len); }
console.log('still missing:', [...new Set(want.values())].filter(t => !found[t]));
