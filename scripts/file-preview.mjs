import { cp, readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, join, relative, extname } from 'node:path';
import { pathToFileURL } from 'node:url';
const root = resolve(import.meta.dirname, '..');
const destination = join(root, '.preview');
await cp(join(root, 'dist'), destination, { recursive: true });
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) { await walk(path); continue; }
    if (!path.endsWith('.html')) continue;
    const source = await readFile(path, 'utf8');
    const preview = source.replace(/(href|src)="(\/[^"#?]*)([^"]*)"/g, (match, attribute, target, suffix) => {
      const file = target === '/' ? 'index.html' : target.slice(1) + (extname(target) ? '' : '.html');
      return attribute + '="' + pathToFileURL(join(destination, file)).href + suffix + '"';
    });
    await writeFile(path, preview);
  }
}
await walk(destination);
console.log(pathToFileURL(join(destination, 'index.html')).href);
