const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const pagesToFix = ['PrivacyPage', 'TermsPage', 'ProductsPage'];
pagesToFix.forEach(page => {
  const regex = new RegExp(`function ${page}\\([^{]*\\)\\s*\\{`, 'g');
  code = code.replace(regex, `$& \n  React.useEffect(() => { window.scrollTo(0, 0); }, []);\n`);
});

fs.writeFileSync('src/App.tsx', code);
