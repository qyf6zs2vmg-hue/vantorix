const fs = require('fs');
let file = fs.readFileSync('src/App.tsx', 'utf8');
file = file.replace(/text-\[#5B5EF7\]/g, 'text-theme-primary');
file = file.replace(/bg-slate-50/g, 'bg-[#131314]');
file = file.replace(/bg-slate-100/g, 'bg-[#1A1A1C]');
file = file.replace(/shadow-sm/g, ''); 
file = file.replace(/ shadow-md/g, ''); 
file = file.replace(/ shadow-lg/g, ''); 
file = file.replace(/shadow-xl/g, ''); 
file = file.replace(/ hover:shadow-lg/g, ''); 
file = file.replace(/ hover:shadow-md/g, ''); 
file = file.replace(/border-\[#5B5EF7\]\/30/g, 'border-[#3D3D3D]');
file = file.replace(/border-\[#5B5EF7\]\/40/g, 'border-[#3D3D3D]');
file = file.replace(/shadow-\[0_4px_16px_rgba\(0,0,0,0\.02\)\]/g, '');
file = file.replace(/border-\[#5B5EF7\]\/20/g, 'border-[#2A2A2A]');
file = file.replace(/from-\[#5B5EF7\] to-transparent/g, 'from-theme-primary to-transparent');
file = file.replace(/border-theme\/50/g, 'border-theme');
file = file.replace(/rounded-\[1\.5rem\]/g, 'rounded-[4px]');
file = file.replace(/rounded-\[2rem\]/g, 'rounded-[4px]');
file = file.replace(/rounded-xl/g, 'rounded-[4px]');
file = file.replace(/rounded-2xl/g, 'rounded-[4px]');

let page = fs.readFileSync('src/VantorixOmsProductPage.tsx', 'utf8');
page = page.replace(/bg-\[#5B5EF7\]\/\[0\.03\] blur-\[120px\]/g, 'bg-transparent');
page = page.replace(/bg-\[#22D3EE\]\/\[0\.03\] blur-\[120px\]/g, 'bg-transparent');
page = page.replace(/bg-\[#A78BFA\]\/\[0\.03\] blur-\[120px\]/g, 'bg-transparent');
page = page.replace(/text-\[#5B5EF7\]/g, 'text-theme-primary');
page = page.replace(/border-\[#5B5EF7\]\/30/g, 'border-[#3D3D3D]');
page = page.replace(/border-\[#5B5EF7\]\/40/g, 'border-[#3D3D3D]');
page = page.replace(/border-\[#5B5EF7\]\/20/g, 'border-[#2A2A2A]');
page = page.replace(/bg-[#5B5EF7]/g, 'bg-[#EDEDED]');

page = page.replace(/bg-slate-50/g, 'bg-[#131314]');
page = page.replace(/bg-slate-100/g, 'bg-[#1A1A1C]');
page = page.replace(/bg-slate-200/g, 'bg-[#2A2A2A]');
page = page.replace(/border-slate-100/g, 'border-[#2A2A2A]');
page = page.replace(/border-slate-200/g, 'border-[#2A2A2A]');
page = page.replace(/border-slate-300/g, 'border-[#3D3D3D]');
page = page.replace(/text-slate-400/g, 'text-theme-secondary');
page = page.replace(/text-slate-700/g, 'text-theme-primary');

// Additional adjustments for OMS page paddings to match App.tsx
page = page.replace(/py-24/g, 'py-32');
page = page.replace(/py-32/g, 'py-40');
page = page.replace(/pt-32/g, 'pt-40');
page = page.replace(/pb-32/g, 'pb-40');
page = page.replace(/pb-16/g, 'pb-24');
page = page.replace(/pt-20/g, 'pt-32');

// remove shadows
page = page.replace(/shadow-sm/g, ''); 
page = page.replace(/ shadow-md/g, ''); 
page = page.replace(/ shadow-lg/g, ''); 
page = page.replace(/shadow-xl/g, ''); 
page = page.replace(/ hover:shadow-lg/g, ''); 
page = page.replace(/ hover:shadow-md/g, ''); 
page = page.replace(/shadow-\[#5B5EF7\]\/20/g, '');

page = page.replace(/rounded-\[1\.5rem\]/g, 'rounded-[4px]');
page = page.replace(/rounded-\[2rem\]/g, 'rounded-[4px]');
page = page.replace(/rounded-xl/g, 'rounded-[4px]');
page = page.replace(/rounded-2xl/g, 'rounded-[4px]');

fs.writeFileSync('src/App.tsx', file);
fs.writeFileSync('src/VantorixOmsProductPage.tsx', page);
console.log('Update Complete');
