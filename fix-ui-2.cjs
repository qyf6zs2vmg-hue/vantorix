const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Fix "Цифровые решения премиум-класса"
code = code.replace(/<div className="inline-flex items-center gap-3 px-5 py-2 radius-btn bg-theme-card border border-theme text-theme-secondary text-sm font-medium mb-8 shadow-theme-sm">.*?<\/div>/s, '');

// Fix "с премиальным дизайном"
code = code.replace(/<span className="text-theme-secondary font-normal mt-4 block text-2xl md:text-3xl lg:text-4xl">Погружаемся в бизнес-логику, фокусируемся на эффективности, помогаем компаниям оцифровывать операции и объединяем мощную инженерию с премиальным дизайном\.<\/span>/, '<span className="text-theme-secondary font-normal mt-4 block text-2xl md:text-3xl lg:text-4xl">Погружаемся в бизнес-логику, фокусируемся на эффективности и помогаем компаниям оцифровывать операции.</span>');
code = code.replace(/Мы создаем <span className="text-\[#5B5EF7\]">реальные системы<\/span>, а не просто сайты\./, 'Мы создаем <span className="text-[#5B5EF7]">реальные системы</span>.');

// Fix mobile & desktop menu Links
code = code.replace(/<div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-secondary">.*?<button\s*onClick=\{\(\) => setCurrentView\('products'\)\}/s, 
  `<div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-secondary">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-theme-primary transition-colors">О нас</a>
                <a href="#services" className="hover:text-theme-primary transition-colors">Услуги</a>
                <a href="#process" className="hover:text-theme-primary transition-colors">Процесс</a>
              </>
            )}
            <button 
              onClick={() => setCurrentView('products')}`
);

code = code.replace(/<a href="#about" onClick=\{\(\) => setCurrentView\('home'\)\} className="hover:text-theme-primary transition-colors">О нас<\/a>\s*<a href="#services" onClick=\{\(\) => setCurrentView\('home'\)\} className="hover:text-theme-primary transition-colors">Услуги<\/a>\s*<a href="#process" onClick=\{\(\) => setCurrentView\('home'\)\} className="hover:text-theme-primary transition-colors">Процесс<\/a>\s*<button onClick=\{\(\) => setCurrentView\('products'\)\} className="text-theme-secondary hover:text-\[#5B5EF7\] py-2 text-lg font-medium">Продукты<\/button>/s, 
  `{currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">О нас</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Услуги</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Процесс</a>
              </>
            )}
            <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Продукты</button>`
);

// Fix FeatureCard & ServiceCard heights!
code = code.replace(/className="bg-theme-card border border-theme hover:border-\[#5B5EF7\]\/30 p-8 rounded-\[2rem\] group flex flex-col items-start transition-all duration-300 shadow-theme-sm hover:shadow-theme-md cursor-default relative overflow-hidden"/, 'className="bg-theme-card border border-theme hover:border-[#5B5EF7]/30 p-8 rounded-[2rem] group flex flex-col items-start transition-all duration-300 shadow-theme-sm hover:shadow-theme-md cursor-default relative overflow-hidden h-full"');
code = code.replace(/className="border-l border-theme pl-6 py-2 hover:border-\[#5B5EF7\] transition-colors duration-300"/, 'className="border-l border-theme pl-6 py-2 hover:border-[#5B5EF7] transition-colors duration-300 h-full flex flex-col justify-center"');

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx updated based on feedback!');
