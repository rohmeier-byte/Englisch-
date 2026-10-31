// Baut index.html (eigenständig, für das Repo) aus app.html.
// Aufruf: node build.js
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const app = fs.readFileSync(path.join(dir, 'app.html'), 'utf8');
const split = app.indexOf('</style>') + '</style>'.length;
const page = '<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + app.slice(0, split) + '\n</head>\n<body>' + app.slice(split) + '\n</body>\n</html>\n';
fs.writeFileSync(path.join(dir, 'index.html'), page);
console.log('built', page.length, 'bytes');
