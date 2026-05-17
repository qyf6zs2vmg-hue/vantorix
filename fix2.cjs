const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(/selection:bg-\[#5B5EF7\]\/20/g, '');
app = app.replace(/selection:text-white/g, '');
fs.writeFileSync('src/App.tsx', app);

let page = fs.readFileSync('src/VantorixOmsProductPage.tsx', 'utf8');
page = page.replace(/bg-red-50 border-red-100/g, 'bg-[#131314] border-[#2A2A2A]');
page = page.replace(/bg-blue-50 border-blue-100/g, 'bg-[#131314] border-[#2A2A2A]');
page = page.replace(/text-red-500/g, 'text-theme-secondary');
page = page.replace(/bg-\[#5B5EF7\] text-white/g, 'bg-[#EDEDED] text-[#0F0F10]');
page = page.replace(/bg-gradient text-white/g, 'bg-theme-primary text-[#0F0F10]');
page = page.replace(/from-red-500\/10/g, 'from-[#1A1A1C]');
page = page.replace(/rounded-full bg-red-400/g, 'rounded-full bg-[#3D3D3D]');
page = page.replace(/rounded-full bg-amber-400/g, 'rounded-full bg-[#2A2A2A]');
page = page.replace(/bg-slate-300/g, 'bg-[#2A2A2A]');
fs.writeFileSync('src/VantorixOmsProductPage.tsx', page);

console.log('Fixed');
