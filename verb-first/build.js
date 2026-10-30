// Builds index.html (standalone, for the repo) from app.html + data.json.
// Usage: node build.js [artifactOutPath]
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(dir, 'data.json'), 'utf8'));
const app = fs.readFileSync(path.join(dir, 'app.html'), 'utf8')
  .replace('/*__DATA__*/null', () => JSON.stringify(data));
const page = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n' + app + '\n</body>\n</html>\n';
fs.writeFileSync(path.join(dir, 'index.html'), page);
if (process.argv[2]) fs.writeFileSync(process.argv[2], app);
console.log('built', page.length, 'bytes');
