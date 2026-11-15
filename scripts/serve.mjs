import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
import { watch } from 'node:fs';
import { spawnSync } from 'node:child_process';

const project = resolve(import.meta.dirname, '..');
const dist = join(project, 'dist');
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json' };
const isFile = async path => { try { return (await stat(path)).isFile(); } catch { return false; } };
export const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
    }
    const target = resolve(dist, '.' + pathname);
    if (target !== dist && !target.startsWith(dist + sep)) {
      response.writeHead(400); response.end('Invalid path'); return;
    }
    let file = pathname === '/' ? join(dist, 'index.html') : target;
    if (!(await isFile(file)) && !extname(file) && await isFile(file + '.html')) file += '.html';
    const found = await isFile(file);
    if (!found) file = join(dist, '404.html');
    const body = await readFile(file);
    response.writeHead(found ? 200 : 404, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Invalid request');
  }
});
server.listen(port, '127.0.0.1', () => console.log('Site ready: http://localhost:' + port));
if (process.argv.includes('--watch')) {
  let timeout;
  const rebuild = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: project, stdio: 'inherit' });
      if (result.status !== 0) console.error('Build failed; check the source before refreshing.');
    }, 180);
  };
  for (const path of ['src', 'public']) watch(join(project, path), { recursive: true }, rebuild);
}
