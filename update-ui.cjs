const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/nav-blur py-4/g, 'nav-blur');
code = code.replace(/bg-transparent py-6/g, 'bg-transparent h-[64px] flex items-center');

fs.writeFileSync('src/App.tsx', code);
