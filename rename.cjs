const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/Vantorix/g, 'ASTHEA');
    content = content.replace(/vantorix/g, 'asthea');
    content = content.replace(/VANTORIX/g, 'ASTHEA');
    fs.writeFileSync(filePath, content);
}

replaceInFile('src/App.tsx');
replaceInFile('src/VantorixOmsProductPage.tsx');
replaceInFile('index.html');
replaceInFile('metadata.json');

if (fs.existsSync('src/VantorixOmsProductPage.tsx')) {
    fs.renameSync('src/VantorixOmsProductPage.tsx', 'src/AstheaOmsProductPage.tsx');
}
