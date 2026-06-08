const fs = require('fs');
const path = require('path');

const dirs = [
  'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\components\\\\marketing',
  'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\app'
];

function processDir(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove any self-closing div or span with a blur- class
      content = content.replace(/\s*<(div|span)[^>]*blur-[a-zA-Z0-9_\[\]]+[^>]*\/>/g, '');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
}

dirs.forEach(processDir);
console.log('Done');
