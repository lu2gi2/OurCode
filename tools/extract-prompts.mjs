// usage: node extract-prompts.mjs <bunfs/files dir> <out.jsonl>
import { createRequire } from 'node:module';
import fs from 'node:fs'; import path from 'node:path';
const require = createRequire('/home/itzlvtime/rea/package.json');
const { parseSync } = require('oxc-parser');
const [dir, out] = process.argv.slice(2);
const w = fs.createWriteStream(out); let total = 0, files = 0, fails = 0;
const prose = (s) => s.length >= 300 && (s.match(/ /g) || []).length > s.length / 12 && /[a-z]{3,} [a-z]{3,}/.test(s);
for (const f of fs.readdirSync(dir).filter(f => /\.(js|mjs)$/.test(f))) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8'); files++;
  let ast; try { ast = parseSync(f, src, { sourceType: 'module' }).program; } catch { fails++; continue; }
  const stack = [ast];
  while (stack.length) {
    const n = stack.pop(); if (!n || typeof n !== 'object') continue;
    if (Array.isArray(n)) { for (const c of n) stack.push(c); continue; }
    let text = null;
    if (n.type === 'Literal' && typeof n.value === 'string') text = n.value;
    else if (n.type === 'TemplateLiteral') text = n.quasis.map((q, i) => (q.value.cooked ?? q.value.raw) + (i < n.expressions.length ? `\${${src.slice(n.expressions[i].start, n.expressions[i].end).slice(0, 40)}}` : '')).join('');
    if (text && prose(text)) { w.write(JSON.stringify({ file: f, offset: n.start, len: text.length, text }) + '\n'); total++; if (n.type === 'TemplateLiteral') { for (const e of n.expressions) stack.push(e); continue; } }
    for (const k in n) if (k !== 'parent' && n[k] && typeof n[k] === 'object') stack.push(n[k]);
  }
}
w.end(); console.log({ files, fails, prompts: total });
