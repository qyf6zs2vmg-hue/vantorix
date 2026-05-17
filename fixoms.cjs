const fs = require('fs');
let page = fs.readFileSync('src/VantorixOmsProductPage.tsx', 'utf8');

page = page.replace(/bg-\[#F8FAFC\]/g, 'bg-[#131314]');
page = page.replace(/bg-red-50/g, 'bg-[#131314]');
page = page.replace(/bg-blue-50/g, 'bg-[#131314]');
page = page.replace(/border-red-100/g, 'border-[#2A2A2A]');
page = page.replace(/border-blue-100/g, 'border-[#2A2A2A]');
page = page.replace(/bg-slate-50/g, 'bg-[#131314]');
page = page.replace(/bg-slate-100/g, 'bg-[#1A1A1C]');
page = page.replace(/bg-slate-200/g, 'bg-[#2A2A2A]');

fs.writeFileSync('src/VantorixOmsProductPage.tsx', page);
console.log('Fixed OMS page');
