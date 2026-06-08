const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\components\\\\marketing';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove glow overlays. They are self-closing divs with blur-[something px]
    // They can span multiple lines.
    content = content.replace(/\s*<div[^>]*blur-\[\d+px\][^>]*\/>/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// Also check app directory for glows
const appDir = 'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\app';
function processDir(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\s*<div[^>]*blur-\[\d+px\][^>]*\/>/g, '');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
}
processDir(appDir);

console.log('Done');
