import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Send,
  Menu,
  X,
  Code2,
  ExternalLink,
  Zap,
  CheckCircle2,
  Globe,
  Settings,
  Users,
  Link as LinkIcon,
  ShoppingBag,
  LayoutDashboard,
  Workflow,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'privacy' | 'terms'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
    <div className="min-h-screen flex flex-col font-sans text-stone-900 relative selection:bg-[#F3EBE6] selection:text-[#C25B3A] bg-[#F8F8F7]">
      
      {/* Dynamic Light Background Content */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: yBackground }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-[100%] bg-[#C25B3A]/5 blur-[150px]" 
        />
        <motion.div 
          style={{ y: yBackground }}
          className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-[100%] bg-stone-300/20 blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-stone-200/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div onClick={() => setCurrentView('home')} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-[#F3EBE6] flex items-center justify-center text-[#C25B3A] font-bold text-xl shadow-sm border border-[#E5DFDA] group-hover:bg-[#C25B3A] group-hover:text-white transition-all duration-300">
              V
            </div>
            <span className="font-bold text-2xl tracking-tight text-stone-900">Vantorix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-stone-900 transition-colors">О нас</a>
                <a href="#services" className="hover:text-stone-900 transition-colors">Услуги</a>
                <a href="#process" className="hover:text-stone-900 transition-colors">Процесс</a>
              </>
            )}
            <button 
              onClick={() => setCurrentView('products')} 
              className={`${currentView === 'products' ? 'text-[#C25B3A] font-bold' : 'hover:text-stone-900'} transition-all`}
            >
              Продукты
            </button>
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="bg-[#1C1917] hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
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
            className="fixed inset-x-0 top-[80px] z-40 bg-white border-b border-stone-200 p-6 md:hidden flex flex-col gap-4 text-center shadow-xl"
          >
            {currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#C25B3A] py-2 text-lg font-medium">О нас</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#C25B3A] py-2 text-lg font-medium">Услуги</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#C25B3A] py-2 text-lg font-medium">Процесс</a>
              </>
            )}
            <button onClick={() => setCurrentView('products')} className="text-stone-600 hover:text-[#C25B3A] py-2 text-lg font-medium">Продукты</button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#C25B3A] hover:bg-[#A84B2E] text-white px-6 py-3 rounded-xl mt-4 text-lg font-bold">Связаться</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage onViewProducts={() => setCurrentView('products')} />
            </motion.div>
          ) : currentView === 'products' ? (
             <motion.div
              key="products"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <ProductsPage />
            </motion.div>
          ) : currentView === 'privacy' ? (
             <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <PrivacyPage />
            </motion.div>
          ) : (
             <motion.div
              key="terms"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <TermsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* КАРТОЧКА КОНТАКТОВ & АНИМАЦИЯ */}
      <section id="contact" className="py-32 px-6 relative border-t border-stone-200 overflow-hidden bg-white">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#F3EBE6]/50 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 w-full"
            >
              <div className="w-20 h-20 bg-[#F3EBE6] border border-[#E5DFDA] text-[#C25B3A] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Send className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tight">Начать работу с технологиями</h2>
              <p className="text-stone-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Свяжитесь с нами напрямую для экспертной консультации и обсуждения процессов внедрения систем в ваш бизнес.
              </p>

              <div className="mt-8 flex justify-center">
                <a 
                  href="https://t.me/vantorix_os" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1C1917] hover:bg-stone-800 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-lg group"
                >
                  Связаться в Telegram <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* BRAND POWER ANIMATION CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[#F8F8F7] border border-stone-200 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-[#C25B3A]/5 rounded-full blur-[20px]"
                    style={{
                      width: Math.random() * 100 + 50,
                      height: Math.random() * 100 + 50,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-widest uppercase mb-4 leading-tight">
                  <span className="block text-[#C25B3A] mb-4 font-black text-2xl tracking-[0.3em]">VANTORIX</span>
                  POWERING BUSINESS<br />
                  <span className="text-stone-400 font-light">ENABLING GROWTH</span>
                </h3>
              </div>
            </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-stone-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 text-lg tracking-wider">VANTORIX</span>
          </div>
          <div className="text-sm text-stone-500 flex flex-wrap justify-center gap-6">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-stone-900 transition-colors text-left">Политика конфиденциальности</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-stone-900 transition-colors text-left">Условия оказания услуг</button>
          </div>
          <div className="text-sm text-stone-400 font-mono">
            &copy; {new Date().getFullYear()} Vantorix Labs.
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
      <section className="relative pt-10 pb-20 md:pt-32 md:pb-32 px-6 flex items-center justify-center min-h-[90vh] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#C25B3A]/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-medium mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C25B3A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C25B3A]"></span>
              </span>
              Цифровые решения премиум-класса
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-stone-900">
              Vantorix — Цифровые системы <br className="hidden lg:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C25B3A] to-[#D97757]">для роста бизнеса.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-stone-700 font-normal mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Разрабатываем сайты, системы и приложения, которые <span className="text-[#C25B3A] font-semibold">автоматизируют процессы</span> и <span className="text-stone-900 font-semibold">упрощают работу бизнеса.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button onClick={onViewProducts} className="w-full sm:w-auto bg-[#C25B3A] text-white hover:bg-[#A84B2E] px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-md shadow-[#C25B3A]/20">
              Наши продукты <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full sm:w-auto bg-white border border-stone-200 hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm">
              Услуги
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 relative border-y border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <h2 className="text-sm font-bold text-[#C25B3A] uppercase tracking-widest mb-6">О компании Vantorix</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 leading-tight">
              Мы создаем <span className="text-[#C25B3A]">реальные системы</span>, а не просто сайты. <br className="hidden lg:block"/>
              <span className="text-stone-600 font-normal mt-4 block text-2xl md:text-3xl lg:text-4xl">Погружаемся в бизнес-логику, фокусируемся на эффективности, помогаем компаниям оцифровывать операции и объединяем мощную инженерию с премиальным дизайном.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* СЕРВИСЫ - WHAT WE DO */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">Что мы делаем</h2>
              <p className="text-xl text-stone-700 leading-relaxed font-normal">
                Разрабатываем комплексные решения, которые повышают продуктивность, контролируют процессы и выводят бренды на новый уровень в интернете.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ServiceCard 
              icon={<Globe className="w-8 h-8 text-[#C25B3A]" />} 
              title="Разработка сайтов" 
              desc="Создаем кастомные сайты любой сложности для бизнеса."
            />
            <ServiceCard 
              icon={<Layers className="w-8 h-8 text-[#C25B3A]" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
            />
            <ServiceCard 
              icon={<Code2 className="w-8 h-8 text-[#C25B3A]" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
            />
            <ServiceCard 
              icon={<Cpu className="w-8 h-8 text-[#C25B3A]" />} 
              title="Автоматизация процессов" 
              desc="Интеграция сторонних API и оптимизация ежедневной рутины компаний."
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-[#C25B3A]" />} 
              title="Индивидуальные решения" 
              desc="Уникальная программная логика, разработанная строго под специфику бизнеса."
            />
          </motion.div>
        </div>
      </section>

      {/* САЙТЫ ДЛЯ БИЗНЕСА */}
      <section className="py-32 px-6 relative border-y border-stone-200 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#C25B3A]/5 blur-[120px] rounded-[100%] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-16 h-16 bg-[#F3EBE6] border border-[#E5DFDA] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm text-[#C25B3A]">
               <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-8 tracking-tight">Сайты для бизнеса</h2>
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-4xl mx-auto font-normal">
              Мы разрабатываем <span className="text-stone-900 font-bold">кастомные веб-сайты</span> для каждого бизнеса. <br className="hidden md:block"/>От посадочных страниц и корпоративных порталов <br className="hidden md:block"/>до интегрированных клиентских систем. Никаких шаблонов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ (Process) */}
      <section id="process" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">Как мы работаем</h2>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto font-normal">Инженерный, пошаговый подход для точного достижения целей бизнеса.</p>
          </div>

          <div className="space-y-6 relative flex flex-col gap-6">
            <ProcessStep number="01" title="Анализ бизнеса" desc="Погружаемся в специфику компании, изучаем процессы и аудиторию." />
            <ProcessStep number="02" title="Проектирование" desc="Создаем архитектуру проекта, базу данных и детальные прототипы UI/UX." />
            <ProcessStep number="03" title="Разработка" desc="Программирование логики и интерфейсов современными технологиями." />
            <ProcessStep number="04" title="Тестирование" desc="Проверка работоспособности сценариев, безопасности и нагрузок." />
            <ProcessStep number="05" title="Запуск" desc="Финальный релиз, настройка сервером и поддержка масштабирования." />
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ VANTORIX (Features) */}
      <section className="py-32 px-6 relative bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">Почему Vantorix?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C25B3A] to-transparent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             <FeatureItem title="Современные технологии" desc="Используем актуальный и надежный технологический стек рынка." />
             <FeatureItem title="Масштабируемость" desc="Наши платформы растут вместе с увеличением объема вашего бизнеса." />
             <FeatureItem title="Чистый UI/UX" desc="Исключительный, премиальный дизайн для максимального удобства пользователей." />
             <FeatureItem title="Реальные бизнес-решения" desc="Внедряем только то, что действительно решает ваши задачи." />
             <FeatureItem title="Фокус на эффективности" desc="Оптимизируем затраты и ускоряем бизнес-процессы через автоматизацию." />
          </div>
        </div>
      </section>
    </>
  );
}

// --- PRODUCTS PAGE COMPONENT ---
function ProductsPage() {
  return (
    <div className="relative z-10 w-full min-h-screen">
      
      {/* Intro Product Header */}
      <div className="pt-20 pb-16 px-6 border-b border-stone-200 relative bg-white overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C25B3A]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-5xl mx-auto text-center relative z-10 mt-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[#F3EBE6] text-[#C25B3A] font-bold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6 border border-[#E5DFDA]">
                Наши продукты
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tight mb-6">
                Готовые системы
              </h1>
              <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                Собственные разработки и платформы для интеграции в B2B-среду.
              </p>
           </motion.div>
        </div>
      </div>

      <div className="py-24 px-6 bg-[#F8F8F7]">
        <div className="max-w-7xl mx-auto">
          
          {/* THE MAIN PRODUCT: ORDERLY */}
          <div className="bg-white rounded-[2rem] border border-stone-200 shadow-md relative overflow-hidden mb-32 hover:shadow-lg transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
              
              {/* Text Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-200 bg-white">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                  <div className="mb-6">
                    <span className="bg-[#1C1917] text-white px-3 py-1 rounded break-words font-black tracking-widest uppercase text-xs">Флагман</span>
                  </div>
                  <h2 className="text-5xl font-black text-stone-900 mb-2">Orderly</h2>
                  <h3 className="text-[#C25B3A] font-bold tracking-widest uppercase text-sm mb-8">A modern B2B client ordering system</h3>
                  
                  <p className="text-lg text-stone-700 leading-relaxed mb-4">
                    Универсальная <strong>система заказов B2B для бизнеса и его клиентов</strong>.
                  </p>
                  <p className="text-stone-500 leading-relaxed mb-10">
                     Избавьтесь от ручной обработки заказов, хаоса в WhatsApp и Excel. Orderly обеспечивает централизованное управление, структурированный каталог и быстрый интерфейс связи бизнеса со своими клиентами.
                  </p>

                  <a 
                    href="https://orderly-by-vantorix.vercel.app/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#C25B3A] text-white hover:bg-[#A84B2E] px-8 py-4 rounded-xl font-bold transition-all shadow-md group w-full lg:w-auto justify-center"
                  >
                    Посмотреть Orderly <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </motion.div>
              </div>

              {/* Graphic Side: Features List & Flow */}
              <div className="p-10 md:p-16 bg-[#FAFAFA] flex flex-col">
                 <motion.div 
                   initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                 >
                    <h3 className="text-2xl font-bold text-stone-900 mb-8 border-b border-stone-200 pb-4">Ключевые функции</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      <div className="flex gap-3">
                        <Users className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Приватный доступ клиентов (invite-система)</span>
                      </div>
                      <div className="flex gap-3">
                        <ShoppingBag className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Структурированный каталог товаров</span>
                      </div>
                      <div className="flex gap-3">
                        <Terminal className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Создание и трекинг заказов</span>
                      </div>
                      <div className="flex gap-3">
                        <LayoutDashboard className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Дашборд для владельца бизнеса</span>
                      </div>
                      <div className="flex gap-3">
                        <Users className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Многоклиентская среда управления</span>
                      </div>
                      <div className="flex gap-3">
                        <LinkIcon className="w-5 h-5 text-[#C25B3A] shrink-0 mt-1" />
                        <span className="text-stone-600">Интеграция с Bitrix24 (CRM)</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-stone-900 mb-8 border-b border-stone-200 pb-4">Интеграция</h3>
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#F3EBE6] text-[#C25B3A] rounded-xl flex items-center justify-center">
                          <Workflow className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-stone-900">Синхронизация с Bitrix24</h4>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        Заказы и клиенты автоматически синхронизируются с CRM системами бизнеса для непрерывного сквозного контроля.
                      </p>
                    </div>

                 </motion.div>
              </div>

            </div>

            {/* How It Works Flow (Bottom part of card) */}
            <div className="border-t border-stone-200 bg-white p-10 md:p-16">
              <h3 className="text-3xl font-bold text-center text-stone-900 mb-16">Как это работает</h3>
              
              <div className="flex flex-col gap-4 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-[#E5DFDA] md:hidden" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {/* Horizontal connecting line */}
                  <div className="hidden md:block absolute top-[40px] left-10 right-10 h-0.5 bg-[#E5DFDA] z-0" />
                  
                  {[
                    "Владелец бизнеса создает рабочую среду",
                    "Генерирует приватную invite-ссылку",
                    "Отправляет клиенту для регистрации",
                    "Клиент видит товары и размещает заказ",
                    "Бизнес моментально получает заказ на обработку"
                  ].map((step, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      key={i} className="relative z-10 flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4 md:col-span-1"
                    >
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 shadow-sm ${i === 4 ? 'bg-[#C25B3A] text-white shadow-[#C25B3A]/20' : 'bg-white border border-[#E5DFDA] text-[#C25B3A]'}`}>
                        0{i+1}
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed font-medium">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                  <div className="hidden md:block col-span-4" /> 
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- SHARED UI SUBCOMPONENTS ---

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="bg-white border border-stone-200 hover:border-[#C25B3A]/30 p-8 rounded-[2rem] group flex flex-col items-start transition-all duration-300 shadow-sm hover:shadow-md cursor-default relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C25B3A]/0 via-transparent to-[#C25B3A]/0 group-hover:from-[#C25B3A]/5 group-hover:to-transparent transition-colors duration-500" />
      
      <div className="w-16 h-16 bg-[#F8F8F7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#C25B3A] border border-stone-200 relative z-10 group-hover:bg-[#F3EBE6] group-hover:border-[#E5DFDA]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-4 relative z-10">{title}</h3>
      <p className="text-stone-500 leading-relaxed text-base relative z-10">{desc}</p>
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
      className="bg-white p-8 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-8 border border-stone-200 w-full hover:border-[#C25B3A]/20 transition-colors shadow-sm cursor-default group"
    >
      <div className="w-20 h-20 bg-[#F8F8F7] border border-stone-200 rounded-3xl flex items-center justify-center font-black text-3xl text-stone-300 shrink-0 group-hover:text-[#C25B3A] group-hover:border-[#C25B3A]/30 group-hover:bg-[#F3EBE6] transition-all duration-500">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-stone-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-stone-500 text-lg leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l border-[#E5DFDA] pl-6 py-2 hover:border-[#C25B3A] transition-colors duration-300">
      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-500 leading-relaxed">{desc}</p>
    </div>
  );
}

// --- PRIVACY PAGE COMPONENT ---
function PrivacyPage() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-[#F8F8F7] py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C25B3A]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">Политика конфиденциальности</h1>
          <p className="text-stone-500 mb-12">Дата вступления в силу: [03.05.2026]</p>

          <div className="prose prose-stone prose-lg max-w-none text-stone-700">
            <p>Компания Vantorix уважает вашу конфиденциальность и стремится защищать персональные данные пользователей.</p>
            
            <hr className="my-8 border-stone-200" />
            
            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Какие данные мы собираем</h3>
            <p>Мы можем собирать следующие данные:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Данные аккаунта (логин, пароль в зашифрованном виде)</li>
              <li>Данные, связанные с использованием сервиса (заказы, действия в системе)</li>
              <li>Технические данные (IP-адрес, тип устройства, браузер)</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. Как мы используем данные</h3>
            <p>Мы используем данные для:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Предоставления доступа к системе</li>
              <li>Обработки заказов и работы сервиса</li>
              <li>Связи с пользователями</li>
              <li>Улучшения качества продукта</li>
              <li>Обеспечения безопасности</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. Передача данных третьим лицам</h3>
            <p>Мы не продаём персональные данные. Данные могут передаваться:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Сервисам, необходимым для работы платформы (например, хостинг, аналитика)</li>
              <li>CRM-системам (например, Bitrix24) при использовании интеграций</li>
              <li>В случаях, предусмотренных законодательством</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Хранение и защита данных</h3>
            <p>Мы принимаем технические и организационные меры для защиты данных от:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>несанкционированного доступа</li>
              <li>утраты</li>
              <li>изменения</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">5. Cookies и технологии</h3>
            <p>Мы можем использовать cookies и аналогичные технологии для:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>корректной работы сайта</li>
              <li>анализа использования</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">6. Права пользователя</h3>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>запросить доступ к своим данным</li>
              <li>запросить удаление данных</li>
              <li>отозвать согласие на обработку</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">7. Изменения политики</h3>
            <p>Мы можем обновлять данную политику. Актуальная версия всегда доступна на сайте.</p>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">8. Контакты</h3>
            <p>По вопросам конфиденциальности:<br/>telegram @vantorix_os</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- TERMS PAGE COMPONENT ---
function TermsPage() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-[#F8F8F7] py-24 px-6">
       <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-stone-300/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">Условия оказания услуг</h1>
          <p className="text-stone-500 mb-12">Дата вступления в силу: [03.05.2026]</p>

          <div className="prose prose-stone prose-lg max-w-none text-stone-700">
            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Общие положения</h3>
            <p>Настоящие Условия регулируют использование сервисов Vantorix. Используя сайт и сервисы, вы соглашаетесь с данными условиями.</p>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. Описание сервиса</h3>
            <p>Vantorix предоставляет:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>разработку сайтов</li>
              <li>создание систем (CRM, ERP, заказные системы)</li>
              <li>SaaS решения</li>
              <li>систему заказов для бизнеса (Orderly)</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. Аккаунт пользователя</h3>
            <p>Пользователь обязуется:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>предоставлять достоверные данные</li>
              <li>не передавать доступ третьим лицам</li>
              <li>обеспечивать безопасность аккаунта</li>
            </ul>
            <p>Компания не несёт ответственности за действия, совершённые через аккаунт пользователя.</p>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Использование сервиса</h3>
            <p>Запрещается:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>использовать сервис для незаконной деятельности</li>
              <li>пытаться взломать систему</li>
              <li>нарушать работу платформы</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">5. Доступ к системе заказов</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Доступ предоставляется по приглашению (invite)</li>
              <li>Бизнес самостоятельно управляет доступом клиентов</li>
              <li>Компания не несёт ответственности за действия пользователей внутри системы конкретного бизнеса</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">6. Интеграции</h3>
            <p>Сервис может интегрироваться с третьими системами (например, Bitrix24). Компания не несёт ответственности за работу сторонних сервисов.</p>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">7. Ограничение ответственности</h3>
            <p>Сервис предоставляется "как есть". Компания не гарантирует:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>отсутствие ошибок</li>
              <li>бесперебойную работу</li>
              <li>соответствие ожиданиям пользователя</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">8. Изменения сервиса</h3>
            <p>Компания может:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>изменять функционал</li>
              <li>добавлять или удалять функции</li>
              <li>обновлять систему без предварительного уведомления</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">9. Прекращение доступа</h3>
            <p>Компания может ограничить доступ в случае:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>нарушения условий</li>
              <li>подозрительной активности</li>
            </ul>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">10. Изменения условий</h3>
            <p>Условия могут обновляться. Продолжение использования означает согласие с изменениями.</p>

            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">11. Контакты</h3>
            <p>telegram 03.05.2026</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
