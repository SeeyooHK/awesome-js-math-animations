#!/usr/bin/env node
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, parse, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
if (!args[0]) {
  console.error('Usage: node new-doodle.mjs REFERENCE_IMAGE [--output OUTPUT.html] [--title TITLE] [--seed INTEGER]');
  process.exit(1);
}
const value = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const reference = resolve(args[0]);
const source = parse(reference);
const output = resolve(value('--output', resolve(source.dir, `${source.name}.html`)));
const label = source.name.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const title = value('--title', `${label} — Three.js Doodle`);
const hash = [...source.name].reduce((n, c) => Math.imul(n ^ c.charCodeAt(0), 16777619), 2166136261) >>> 0;
const seed = Number(value('--seed', String(hash))) >>> 0;
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const template = await readFile(resolve(root, 'assets/doodle-template.html'), 'utf8');
const html = template.replaceAll('{{TITLE}}', title).replaceAll('{{SEED}}', String(seed));
await mkdir(dirname(output), { recursive: true });
await writeFile(output, html, 'utf8');
console.log(output);
