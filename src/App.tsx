import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  MonitorSmartphone, 
  Layers, 
  Cpu, 
  PenTool, 
  BarChart3,
  Terminal,
  Send,
  Menu,
  X,
  Code2,
  ExternalLink
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 relative">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-stone-50">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-[100%] bg-brand-200/40 blur-[150px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-[100%] bg-stone-200/50 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-brand-100 font-bold text-xl">
              V
            </div>
            <span className="font-bold text-xl tracking-tight text-stone-900">Vantorix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-brand-600 transition-colors">О нас</a>
                <a href="#services" className="hover:text-brand-600 transition-colors">Услуги</a>
                <a href="#process" className="hover:text-brand-600 transition-colors">Процесс</a>
              </>
            )}
            <button 
              onClick={() => setCurrentView('products')} 
              className={`${currentView === 'products' ? 'text-brand-600 font-semibold' : 'hover:text-brand-600'} transition-colors`}
            >
              Наши продукты
            </button>
          </div>
          
          <div className="hidden md:block">
            <a href="https://t.me/vantorix_os" target="_blank" rel="noreferrer" className="bg-stone-900 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
              Связаться
            </a>
          </div>

          <button className="md:hidden text-stone-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 glass border-b border-stone-200/50 p-6 md:hidden flex flex-col gap-4 text-center"
          >
            {currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-600 py-2">О нас</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-600 py-2">Услуги</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-600 py-2">Процесс</a>
              </>
            )}
            <button onClick={() => setCurrentView('products')} className="text-stone-600 hover:text-brand-600 py-2">Наши продукты</button>
            <a href="https://t.me/vantorix_os" target="_blank" rel="noreferrer" className="bg-stone-900 text-white px-5 py-3 rounded-xl mt-4">Связаться</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <HomePage onViewProducts={() => setCurrentView('products')} />
            </motion.div>
          ) : (
             <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProductsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Contact Section & Animation */}
      <section className="py-24 px-6 border-t border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16 w-full"
           >
             <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
               <Send className="w-8 h-8" />
             </div>
             <h2 className="text-4xl font-bold text-stone-900 mb-6 tracking-tight">Связаться с администратором</h2>
             <p className="text-stone-500 mb-10 max-w-lg mx-auto text-lg">
               Мы готовы обсудить ваш следующий проект и помочь с внедрением наших решений.
             </p>
             <a 
               href="https://t.me/vantorix_os" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-3 bg-stone-900 hover:bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-brand-600/30 hover:-translate-y-1 text-lg group"
             >
               Написать @vantorix_os <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full bg-gradient-to-br from-stone-900 to-stone-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
           >
             {/* Animation particles */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(10)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute bg-white/5 rounded-full"
                   style={{
                     width: Math.random() * 100 + 50,
                     height: Math.random() * 100 + 50,
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                   }}
                   animate={{
                     y: [0, -30, 0],
                     opacity: [0.2, 0.5, 0.2],
                   }}
                   transition={{
                     duration: Math.random() * 5 + 5,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                 />
               ))}
               <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(var(--color-brand-600)_0deg,transparent_120deg)] opacity-[0.03] animate-[spin_10s_linear_infinite]" />
             </div>

             <div className="relative z-10 flex flex-col items-center justify-center text-center">
               <h3 className="text-3xl md:text-5xl font-black text-white tracking-widest uppercase opacity-90 drop-shadow-md pb-2 leading-tight">
                 <span className="block text-brand-400 mb-4 opacity-80 font-bold text-2xl tracking-[0.2em]">Vantorix</span>
                 Powering Business<br />Enabling Growth
               </h3>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Footer links */}
      <footer className="py-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900">Vantorix</span>
          </div>
          <div className="text-sm text-stone-400 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-brand-600 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Условия использования</a>
          </div>
          <div className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Vantorix Labs. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HOME PAGE COMPONENT ---
function HomePage({ onViewProducts }: { onViewProducts: () => void }) {
  return (
    <>
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 flex items-center justify-center min-h-[75vh]">
          <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-stone-900">
                Цифровые решения,<br />
                <span className="text-gradient-brand">реальный результат.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-stone-500 font-medium tracking-tight mb-12 max-w-2xl mx-auto"
            >
              Мы создаем премиальные цифровые системы, масштабируемые платформы и веб-приложения для бизнеса.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={onViewProducts} className="w-full sm:w-auto bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-brand-600 flex items-center justify-center gap-2 group shadow-xl">
                Наши продукты <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="w-full sm:w-auto bg-white border border-stone-200 hover:border-brand-300 text-stone-900 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm">
                Наши услуги
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 relative bg-white border-y border-stone-200 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            >
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-6">О Vantorix</h2>
              <p className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
                Мы — технологический партнер, создающий мощные цифровые системы для автоматизации операций и масштабирования.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Наши услуги</h2>
              <p className="text-xl text-stone-500 max-w-2xl mx-auto">Комплексные цифровые решения, разработанные под нужды современного бизнеса.</p>
            </div>
            
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <ServiceCard 
                icon={<MonitorSmartphone className="w-6 h-6 text-brand-600" />} 
                title="Разработка сайтов" 
                desc="Имиджевые и корпоративные веб-сайты с премиальным дизайном."
              />
              <ServiceCard 
                icon={<Code2 className="w-6 h-6 text-brand-600" />} 
                title="Веб-приложения" 
                desc="Масштабируемые SPA и Full-stack приложения для ваших бизнес-задач."
              />
              <ServiceCard 
                icon={<Layers className="w-6 h-6 text-brand-600" />} 
                title="CRM / ERP Системы" 
                desc="Индивидуальные порталы для управления компанией."
              />
              <ServiceCard 
                icon={<Terminal className="w-6 h-6 text-brand-600" />} 
                title="Управление заказами" 
                desc="Интеллектуальный трекинг заказов и автоматизация статусов."
              />
              <ServiceCard 
                icon={<PenTool className="w-6 h-6 text-brand-600" />} 
                title="UI/UX Дизайн" 
                desc="Проектирование удобных интерфейсов с фокусом на конверсию."
              />
              <ServiceCard 
                icon={<Cpu className="w-6 h-6 text-brand-600" />} 
                title="Автоматизация бизнеса" 
                desc="Интеграция сторонних API и оптимизация рутинных процессов."
              />
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-32 px-6 bg-white border-t border-stone-200 relative">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Процесс работы</h2>
              <p className="text-xl text-stone-500 max-w-2xl mx-auto">Инженерный подход, обеспечивающий прозрачность и скорость.</p>
            </div>

            <div className="space-y-6 relative flex flex-col gap-4">
              <ProcessStep number="01" title="Анализ и стратегия" desc="Изучение требований, бизнес-целей и технических ограничений проекта." />
              <ProcessStep number="02" title="Дизайн и прототипы" desc="Создание вайрфреймов и финального дизайна интерфейсов с проработкой UX." />
              <ProcessStep number="03" title="Разработка" desc="Написание чистого и масштабируемого кода на современных веб-технологиях." />
              <ProcessStep number="04" title="Тестирование" desc="Проверка безопасности, производительности и стабильности бизнес-логики." />
              <ProcessStep number="05" title="Запуск и поддержка" desc="Развертывание на серверах и последующий мониторинг системы." />
            </div>
          </div>
        </section>
    </>
  );
}

// --- PRODUCTS PAGE COMPONENT ---
function ProductsPage() {
  return (
    <div className="pb-32 bg-stone-50 min-h-screen">
      <div className="bg-white border-b border-stone-200 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 font-bold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6 border border-brand-200">
                Решения Vantorix
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 tracking-tight mb-6">
                Наши продукты
              </h1>
              <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                Готовые и кастомные цифровые инструменты, разработанные для автоматизации и роста.
              </p>
           </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* Orderly Card */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
             className="glass-card overflow-hidden flex flex-col group h-full shadow-md hover:shadow-xl"
           >
              <div className="h-64 bg-stone-100 flex items-center justify-center relative overflow-hidden border-b border-stone-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-stone-100 opacity-80" />
                 <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                   <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-stone-200 flex items-center justify-center text-brand-600 mb-4 z-10 relative cursor-pointer">
                     <span className="font-black text-5xl tracking-tighter">V</span>
                   </div>
                 </motion.div>
              </div>
              <div className="p-10 flex flex-col flex-grow bg-white">
                 <div>
                   <h3 className="text-3xl font-bold text-stone-900 mb-1">Orderly by Vantorix</h3>
                   <div className="text-brand-600 font-bold text-sm tracking-wide mb-3">Build. Automate. Scale.</div>
                   <p className="text-stone-500 text-lg mb-8 leading-relaxed">
                     Централизованная система управления заказами и клиентами B2B/B2C сектора. Полный контроль процессов в простом интерфейсе.
                   </p>
                 </div>
                 <div className="mt-auto flex flex-col sm:flex-row gap-4">
                   <a 
                     href="https://orderly-by-vantorix.vercel.app/" target="_blank" rel="noreferrer"
                     className="flex-1 bg-stone-900 hover:bg-brand-600 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg text-center"
                   >
                     Подробнее <ExternalLink className="w-4 h-4 text-white/70" />
                   </a>
                 </div>
              </div>
           </motion.div>

           {/* In Development Card - CRM */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-card overflow-hidden flex flex-col opacity-80 hover:opacity-100 transition-opacity h-full bg-white"
           >
              <div className="h-64 bg-stone-50 flex items-center justify-center relative overflow-hidden border-b border-stone-200 border-dashed">
                 <div className="w-24 h-24 bg-white/50 rounded-3xl border border-stone-200 border-dashed flex items-center justify-center text-stone-400 mb-4 animate-[pulse_3s_ease-in-out_infinite]">
                   <Layers className="w-10 h-10" />
                 </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                 <div>
                   <div className="inline-block bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full mb-4">В разработке</div>
                   <h3 className="text-3xl font-bold text-stone-900 mb-3">Vantorix CRM</h3>
                   <p className="text-stone-500 text-lg mb-8 leading-relaxed">
                     Универсальная CRM-система для управления воронками продаж и взаимодействия с клиентами. Модульная архитектура.
                   </p>
                 </div>
                 <div className="mt-auto flex flex-col sm:flex-row gap-4">
                   <button disabled className="w-full bg-stone-50 border border-stone-200 text-stone-400 px-6 py-4 rounded-xl font-semibold cursor-not-allowed text-center">
                     Скоро релиз
                   </button>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="glass-card p-8 group flex flex-col items-start shadow-sm hover:shadow-md h-full">
      <div className="w-16 h-16 bg-brand-50 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-brand-600 shadow-sm border border-brand-100/50">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-500 leading-relaxed text-base">{desc}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 flex flex-col md:flex-row md:items-center gap-6 border border-stone-200 shadow-sm w-full bg-white hover:border-brand-200"
    >
      <div className="w-16 h-16 bg-stone-50 border border-stone-100 rounded-2xl flex items-center justify-center font-black text-2xl text-stone-400 shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-500 text-lg">{desc}</p>
      </div>
    </motion.div>
  );
}
