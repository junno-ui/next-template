const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\components\\\\marketing';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the text gradients with text-primary
    content = content.replace(/bg-gradient-to-r from-orange-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent/g, 'text-primary');
    content = content.replace(/bg-gradient-to-r from-orange-200 via-cyan-200 to-orange-200 bg-clip-text text-transparent/g, 'text-primary');
    
    // Remove the bad looking top/bottom fade overlays
    content = content.replace(/.*<div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background\/80 to-transparent" \/>\r?\n/g, '');
    content = content.replace(/.*<div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background\/80 to-transparent" \/>\r?\n/g, '');
    
    // Remove the glow in hero section
    content = content.replace(/.*<div\s+className="absolute inset-x-0 bottom-3 h-6 rounded-full bg-gradient-to-r from-primary\/45 via-cyan-300\/25 to-primary\/45 blur-2xl sm:bottom-4 sm:h-8"\s*\/>\r?\n/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// Also remove from site-footer and site-header just in case
const layoutDir = 'c:\\\\Users\\\\JunZ\\\\Documents\\\\Template\\\\next-template\\\\components\\\\layout';
['site-footer.tsx', 'site-header.tsx'].forEach(file => {
    const filePath = path.join(layoutDir, file);
    if(fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/.*<div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background\/80 to-transparent" \/>\r?\n/g, '');
        content = content.replace(/.*<div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background\/80 to-transparent" \/>\r?\n/g, '');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Done');
