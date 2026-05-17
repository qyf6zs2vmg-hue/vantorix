const fs = require('fs');

function fixFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/rounded-\[4px\]/g, 'radius-ui');
  // If there are buttons or cards with specific rounding, update them.
  content = content.replace(/radius-ui bg-\[#131314\]/g, 'rounded-full bg-[#131314]'); // For logos/icons
  content = content.replace(/radius-ui/g, 'rounded-3xl'); // Change any leftover to a larger round corner where appropriate, actually let's stick to CSS variables:
  // Since CSS has
  // --radius-card: 2.5rem;
  // --radius-btn: 9999px;
  // --radius-ui: 1.5rem;
  
  // Make icons pill-shaped or very round
  content = content.replace(/rounded-3xl/g, 'radius-ui'); // restore
  
  fs.writeFileSync(path, content);
}

fixFile('src/App.tsx');
fixFile('src/VantorixOmsProductPage.tsx');
console.log('Fixed radii');
