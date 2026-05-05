const fs = require('fs');
let appCode = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Navigation layout fix
appCode = appCode.replace(/className=\{\`fixed top-0 left-0 right-0 z-50 transition-all duration-500 \$\{isScrolled \? 'nav-blur shadow-theme-sm border-b border-theme' : 'bg-transparent h-\[64px\] flex items-center'\}\`\}/, 'className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[64px] flex items-center ${isScrolled ? "nav-blur shadow-theme-sm border-b border-theme" : "bg-transparent"}`}');
appCode = appCode.replace(/className="max-w-7xl mx-auto px-6 flex items-center justify-between"/, 'className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between"');

// And remove the disappearing links behavior, just always show them, but when clicked, if we are in 'products' we should ideally go home.
// I will just replace the mobile menu and desktop menu links.
appCode = appCode.replace(/\{currentView === 'home' && \(\s*<>\s*<a href="#about".*?<\/a>\s*<a href="#services".*?<\/a>\s*<a href="#process".*?<\/a>\s*<\/>\s*\)}/gs, 
  `<a href="#about" onClick={() => setCurrentView('home')} className="hover:text-theme-primary transition-colors">О нас</a>
                <a href="#services" onClick={() => setCurrentView('home')} className="hover:text-theme-primary transition-colors">Услуги</a>
                <a href="#process" onClick={() => setCurrentView('home')} className="hover:text-theme-primary transition-colors">Процесс</a>`
);

// We need a specific replace for the mobile menu due to the onClick changes
appCode = appCode.replace(/\{currentView === 'home' && \(\s*<>\s*<a href="#about" onClick=\{.*?О нас<\/a>\s*<a href="#services" onClick=\{.*?Услуги<\/a>\s*<a href="#process" onClick=\{.*?Процесс<\/a>\s*<\/>\s*\)}/gs, 
  `<a href="#about" onClick={() => { setMobileMenuOpen(false); setCurrentView('home'); }} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">О нас</a>
                <a href="#services" onClick={() => { setMobileMenuOpen(false); setCurrentView('home'); }} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Услуги</a>
                <a href="#process" onClick={() => { setMobileMenuOpen(false); setCurrentView('home'); }} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Процесс</a>`
);

// 2. Remove "Разработка сайтов"
appCode = appCode.replace(/Разрабатываем сайты, системы и приложения/, 'Разрабатываем системы и приложения');
appCode = appCode.replace(/<ServiceCard \s*icon=\{<Globe className="w-8 h-8 text-\[#5B5EF7\]" \/>\} \s*title="Разработка сайтов" \s*desc="Создаем кастомные сайты любой сложности для бизнеса\."\s*\/>/g, '');
appCode = appCode.replace(/<li>разработку сайтов<\/li>/g, '');

// Also remove the entire САЙТЫ ДЛЯ БИЗНЕСА section
appCode = appCode.replace(/\{\/\* САЙТЫ ДЛЯ БИЗНЕСА \*\/\}.*?\{\/\* КАК МЫ РАБОТАЕМ \(Process\) \*\/\}/s, '{/* КАК МЫ РАБОТАЕМ (Process) */}');

// 3. Grids
// "Что мы делаем": Change lg:grid-cols-3 to lg:grid-cols-2
appCode = appCode.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"/, 'className="grid grid-cols-1 md:grid-cols-2 gap-6"');

// "Почему Vantorix?": Change lg:grid-cols-3 to lg:grid-cols-2 and remove "Чистый UI/UX"
appCode = appCode.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"/, 'className="grid grid-cols-1 md:grid-cols-2 gap-10"');
appCode = appCode.replace(/<FeatureItem title="Чистый UI\/UX".*?\/>/, '');

// 4. Slogan
appCode = appCode.replace(/POWERING BUSINESS<br \/>\s*<span className="text-theme-secondary font-light">ENABLING GROWTH<\/span>/, 'MAKE IT <span className="text-theme-secondary font-light">POSSIBLE</span>');

fs.writeFileSync('src/App.tsx', appCode);

let cssCode = fs.readFileSync('src/index.css', 'utf8');
cssCode = cssCode.replace(/height: 64px;\n  display: flex;\n  align-items: center;\n/, '');
fs.writeFileSync('src/index.css', cssCode);

console.log('Fixed UI issues.');
