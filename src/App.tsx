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
    <div className="min-h-screen flex flex-col font-sans text-theme-primary relative selection:bg-[#5B5EF7]/20 selection:text-white bg-theme-bg">
      
      {/* Dynamic Light Background Content */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-gradient-to-b from-white to-[#F0F4F8]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <motion.div 
          style={{ y: yBackground }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#5B5EF7]/[0.06] blur-[100px] animate-blob mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBackground }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#22D3EE]/[0.06] blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBackground }}
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#A78BFA]/[0.06] blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" 
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[64px] flex items-center ${isScrolled ? "nav-blur shadow-theme-sm border-b border-theme" : "bg-transparent"}`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div onClick={() => setCurrentView('home')} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 radius-ui bg-[#5B5EF7]/10 flex items-center justify-center text-gradient font-bold text-xl shadow-theme-sm border border-theme group-hover:bg-[#5B5EF7] group-hover:text-white transition-all duration-300">
              V
            </div>
            <span className="font-bold text-2xl tracking-tight text-theme-primary">Vantorix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-secondary">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-theme-primary transition-colors">О нас</a>
                <a href="#services" className="hover:text-theme-primary transition-colors">Решения</a>
                <a href="#process" className="hover:text-theme-primary transition-colors">Процесс</a>
              </>
            )}
            <button 
              onClick={() => setCurrentView('products')} 
              className={`${currentView === 'products' ? 'text-[#5B5EF7] font-bold' : 'hover:text-theme-primary'} transition-all`}
            >
              Продукты
            </button>
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary px-6 py-2.5 text-sm font-medium shadow-theme-md">
              Связаться
            </a>
          </div>

          <button className="md:hidden text-theme-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="fixed inset-x-0 top-[80px] z-40 bg-theme-card border-b border-theme p-6 md:hidden flex flex-col gap-4 text-center shadow-xl"
          >
            {currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">О нас</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Решения</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Процесс</a>
              </>
            )}
            <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-theme-secondary hover:text-[#5B5EF7] py-2 text-lg font-medium">Продукты</button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#5B5EF7] hover:bg-[#A78BFA] text-white px-6 py-3 radius-ui mt-4 text-lg font-bold">Связаться</a>
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
      <section id="contact" className="py-32 px-6 relative border-t border-theme overflow-hidden bg-theme-card">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#F6F7FB]/50 radius-btn blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 w-full"
            >
              <div className="w-20 h-20 bg-[#F6F7FB] border border-theme text-[#5B5EF7] radius-card flex items-center justify-center mx-auto mb-8 shadow-theme-sm">
                <Send className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-theme-primary mb-6 tracking-tight">Начать работу с технологиями</h2>
              <p className="text-theme-secondary mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Свяжитесь с нами напрямую для экспертной консультации и обсуждения процессов внедрения систем в ваш бизнес.
              </p>

              <div className="mt-8 flex justify-center">
                <a 
                  href="https://t.me/vantorix_os" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1C1917] hover:bg-stone-800 text-white px-10 py-5 radius-card font-bold transition-all shadow-theme-md hover:shadow-theme-lg hover:-translate-y-1 text-lg group"
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
              className="w-full bg-theme-bg border border-theme rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-theme-sm"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-[#A78BFA]/10 radius-btn blur-[20px]"
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
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-theme-primary tracking-widest uppercase mb-4 leading-tight">
                  <span className="block text-[#5B5EF7] mb-4 font-black text-2xl tracking-[0.3em]">VANTORIX</span>
                  MAKE IT <span className="text-theme-secondary font-light">POSSIBLE</span>
                </h3>
              </div>
            </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-theme-card border-t border-theme relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-theme-primary text-lg tracking-wider">VANTORIX</span>
          </div>
          <div className="text-sm text-theme-secondary flex flex-wrap justify-center gap-6">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-theme-primary transition-colors text-left">Политика конфиденциальности</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-theme-primary transition-colors text-left">Условия оказания услуг</button>
          </div>
          <div className="text-sm text-theme-secondary font-mono">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#5B5EF7]/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.02)] px-4 py-2 flex items-center justify-center w-max mb-8 relative z-20">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] mr-2 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
              <span className="text-sm font-medium text-theme-secondary">Now in General Availability · v3.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-theme-primary">
              Vantorix — Цифровые системы <br className="hidden lg:block"/>
              <span className="text-gradient">для роста бизнеса.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-theme-secondary font-normal mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Разрабатываем системы и приложения, которые <span className="text-[#5B5EF7] font-semibold">автоматизируют процессы</span> и <span className="text-theme-primary font-semibold">упрощают работу бизнеса.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 mt-8 w-full max-w-sm mx-auto"
          >
            <button onClick={onViewProducts} className="w-full bg-[#111827] text-white hover:bg-[#1a2333] px-8 py-4 radius-btn font-semibold transition-all flex items-center justify-center gap-2 group shadow-theme-md border border-[rgba(255,255,255,0.1)]">
              Наши продукты <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 text-theme-primary px-8 py-4 radius-btn font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
              Решения
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-4 text-theme-secondary text-sm font-medium"
          >
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((letter, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border border-white/80 bg-white/60 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold shadow-sm z-[${4-i}]`} style={{ color: ['#5B5EF7', '#22D3EE', '#A78BFA', '#94A3B8'][i] }}>
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-[#64748B]">Trusted by 2,400+ enterprise teams</span>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 relative border-y border-theme bg-theme-card">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <h2 className="text-sm font-bold text-[#5B5EF7] uppercase tracking-widest mb-6">О компании Vantorix</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-theme-primary leading-tight">
              Мы создаем <span className="text-[#5B5EF7]">реальные системы</span>. <br className="hidden lg:block"/>
              <span className="text-theme-secondary font-normal mt-4 block text-2xl md:text-3xl lg:text-4xl">Погружаемся в бизнес-логику, фокусируемся на эффективности и помогаем компаниям оцифровывать операции.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* СЕРВИСЫ - WHAT WE DO */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-theme-primary mb-6 tracking-tight">Наши решения</h2>
              <p className="text-xl text-theme-secondary leading-relaxed font-normal">
                Разрабатываем комплексные решения, которые повышают продуктивность, контролируют процессы и выводят бренды на новый уровень в интернете.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            
            <ServiceCard 
              icon={<Layers className="w-8 h-8 text-[#5B5EF7]" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
            />
            <ServiceCard 
              icon={<Code2 className="w-8 h-8 text-[#5B5EF7]" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
            />
            <ServiceCard 
              icon={<Cpu className="w-8 h-8 text-[#5B5EF7]" />} 
              title="Автоматизация процессов" 
              desc="Интеграция сторонних API и оптимизация ежедневной рутины компаний."
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-[#5B5EF7]" />} 
              title="Индивидуальные решения" 
              desc="Уникальная программная логика, разработанная строго под специфику бизнеса."
            />
          </motion.div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ (Process) */}
      <section id="process" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-theme-primary mb-6 tracking-tight">Как мы работаем</h2>
            <p className="text-xl text-theme-secondary max-w-2xl mx-auto font-normal">Инженерный, пошаговый подход для точного достижения целей бизнеса.</p>
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
      <section className="py-32 px-6 relative bg-theme-card border-t border-theme">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-theme-primary mb-6 tracking-tight">Почему Vantorix?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5B5EF7] to-transparent mx-auto radius-btn" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <FeatureItem title="Современные технологии" desc="Используем актуальный и надежный технологический стек рынка." />
             <FeatureItem title="Масштабируемость" desc="Наши платформы растут вместе с увеличением объема вашего бизнеса." />
             
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
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen">
      
      {/* Intro Product Header */}
      <div className="pt-20 pb-16 px-6 border-b border-theme relative bg-theme-card overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A78BFA]/10 radius-btn blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-5xl mx-auto text-center relative z-10 mt-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[#F6F7FB] text-[#5B5EF7] font-bold text-xs uppercase tracking-widest radius-btn px-4 py-1.5 mb-6 border border-theme">
                Наши продукты
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-theme-primary tracking-tight mb-6">
                Готовые системы Vantorix
              </h1>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto leading-relaxed">
                Собственные разработки и платформы для интеграции в B2B-среду.
              </p>
           </motion.div>
        </div>
      </div>

      <div className="py-24 px-6 bg-theme-bg">
        <div className="max-w-7xl mx-auto">
          
          {/* THE MAIN PRODUCT: ORDERLY */}
          <div className="bg-theme-card rounded-[2rem] border border-theme shadow-theme-md relative overflow-hidden mb-32 hover:shadow-theme-lg transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
              
              {/* Text Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-theme bg-theme-card">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                  <div className="mb-6">
                    <span className="bg-[#1C1917] text-white px-3 py-1 rounded break-words font-black tracking-widest uppercase text-xs">Флагман</span>
                  </div>
                  <h2 className="text-5xl font-black text-theme-primary mb-2">Orderly</h2>
                  <h3 className="text-[#5B5EF7] font-bold tracking-widest uppercase text-sm mb-8">A modern B2B client ordering system</h3>
                  
                  <p className="text-lg text-theme-secondary leading-relaxed mb-4">
                    Универсальная <strong>система заказов B2B для бизнеса и его клиентов</strong>.
                  </p>
                  <p className="text-theme-secondary leading-relaxed mb-10">
                     Избавьтесь от ручной обработки заказов, хаоса в WhatsApp и Excel. Orderly обеспечивает централизованное управление, структурированный каталог и быстрый интерфейс связи бизнеса со своими клиентами.
                  </p>

                  <a 
                    href="https://orderly-by-vantorix.vercel.app/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#5B5EF7] text-white hover:bg-[#A84B2E] px-8 py-4 radius-ui font-bold transition-all shadow-theme-md group w-full lg:w-auto justify-center"
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
                    <h3 className="text-2xl font-bold text-theme-primary mb-8 border-b border-theme pb-4">Ключевые функции</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      <div className="flex gap-3">
                        <Users className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Приватный доступ клиентов (invite-система)</span>
                      </div>
                      <div className="flex gap-3">
                        <ShoppingBag className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Структурированный каталог товаров</span>
                      </div>
                      <div className="flex gap-3">
                        <Terminal className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Создание и трекинг заказов</span>
                      </div>
                      <div className="flex gap-3">
                        <LayoutDashboard className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Дашборд для владельца бизнеса</span>
                      </div>
                      <div className="flex gap-3">
                        <Users className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Многоклиентская среда управления</span>
                      </div>
                      <div className="flex gap-3">
                        <LinkIcon className="w-5 h-5 text-[#5B5EF7] shrink-0 mt-1" />
                        <span className="text-theme-secondary">Интеграция с Bitrix24 (CRM)</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-theme-primary mb-8 border-b border-theme pb-4">Интеграция</h3>
                    <div className="bg-theme-card p-6 radius-card border border-theme shadow-theme-sm relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#F6F7FB] text-[#5B5EF7] radius-ui flex items-center justify-center">
                          <Workflow className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-theme-primary">Синхронизация с Bitrix24</h4>
                      </div>
                      <p className="text-theme-secondary text-sm leading-relaxed">
                        Заказы и клиенты автоматически синхронизируются с CRM системами бизнеса для непрерывного сквозного контроля.
                      </p>
                    </div>

                 </motion.div>
              </div>

            </div>

            {/* How It Works Flow (Bottom part of card) */}
            <div className="border-t border-theme bg-theme-card p-10 md:p-16">
              <h3 className="text-3xl font-bold text-center text-theme-primary mb-16">Как это работает</h3>
              
              <div className="flex flex-col gap-4 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-[#E5E7EB] md:hidden" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {/* Horizontal connecting line */}
                  <div className="hidden md:block absolute top-[40px] left-10 right-10 h-0.5 bg-[#E5E7EB] z-0" />
                  
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
                      <div className={`w-20 h-20 radius-card flex items-center justify-center font-bold text-2xl shrink-0 shadow-theme-sm ${i === 4 ? 'bg-[#5B5EF7] text-white shadow-[#5B5EF7]/20' : 'bg-theme-card border border-theme text-[#5B5EF7]'}`}>
                        0{i+1}
                      </div>
                      <p className="text-theme-secondary text-sm leading-relaxed font-medium">
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
    <motion.div variants={fadeInUp} className="bg-theme-card border border-theme hover:border-[#5B5EF7]/30 p-8 rounded-[2rem] group flex flex-col items-start transition-all duration-300 shadow-theme-sm hover:shadow-theme-md cursor-default relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B5EF7]/0 via-transparent to-[#5B5EF7]/0 group-hover:from-[#5B5EF7]/5 group-hover:to-transparent transition-colors duration-500" />
      
      <div className="w-16 h-16 bg-theme-bg radius-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#5B5EF7] border border-theme relative z-10 group-hover:bg-[#F6F7FB] group-hover:border-theme">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-theme-primary mb-4 relative z-10">{title}</h3>
      <p className="text-theme-secondary leading-relaxed text-base relative z-10">{desc}</p>
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
      className="bg-theme-card p-8 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-8 border border-theme w-full hover:border-[#5B5EF7]/20 transition-colors shadow-theme-sm cursor-default group"
    >
      <div className="w-20 h-20 bg-theme-bg border border-theme radius-card flex items-center justify-center font-black text-3xl text-theme-secondary shrink-0 group-hover:text-[#5B5EF7] group-hover:border-[#5B5EF7]/30 group-hover:bg-[#F6F7FB] transition-all duration-500">
        {number}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-theme-primary mb-3 tracking-tight">{title}</h3>
        <p className="text-theme-secondary text-lg leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l border-theme pl-6 py-2 hover:border-[#5B5EF7] transition-colors duration-300 h-full flex flex-col justify-center">
      <h3 className="text-xl font-bold text-theme-primary mb-3">{title}</h3>
      <p className="text-theme-secondary leading-relaxed">{desc}</p>
    </div>
  );
}

// --- PRIVACY PAGE COMPONENT ---
function PrivacyPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen bg-theme-bg py-24 px-6">
      <div className="max-w-4xl mx-auto bg-theme-card p-10 md:p-16 radius-card border border-theme shadow-theme-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#A78BFA]/10 radius-btn blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-theme-primary mb-4 tracking-tight">Политика конфиденциальности Vantorix</h1>
          <p className="text-theme-secondary mb-12">Дата вступления в силу: [03.05.2026]</p>

          <div className="prose prose-stone prose-lg max-w-none text-theme-secondary">
            <p>Компания Vantorix уважает вашу конфиденциальность и стремится защищать персональные данные пользователей.</p>
            
            <hr className="my-8 border-theme" />
            
            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">1. Какие данные мы собираем</h3>
            <p>Мы можем собирать следующие данные:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Данные аккаунта (логин, пароль в зашифрованном виде)</li>
              <li>Данные, связанные с использованием сервиса (заказы, действия в системе)</li>
              <li>Технические данные (IP-адрес, тип устройства, браузер)</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">2. Как мы используем данные</h3>
            <p>Мы используем данные для:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Предоставления доступа к системе</li>
              <li>Обработки заказов и работы сервиса</li>
              <li>Связи с пользователями</li>
              <li>Улучшения качества продукта</li>
              <li>Обеспечения безопасности</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">3. Передача данных третьим лицам</h3>
            <p>Мы не продаём персональные данные. Данные могут передаваться:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Сервисам, необходимым для работы платформы (например, хостинг, аналитика)</li>
              <li>CRM-системам (например, Bitrix24) при использовании интеграций</li>
              <li>В случаях, предусмотренных законодательством</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">4. Хранение и защита данных</h3>
            <p>Мы принимаем технические и организационные меры для защиты данных от:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>несанкционированного доступа</li>
              <li>утраты</li>
              <li>изменения</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">5. Cookies и технологии</h3>
            <p>Мы можем использовать cookies и аналогичные технологии для:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>корректной работы сайта</li>
              <li>анализа использования</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">6. Права пользователя</h3>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>запросить доступ к своим данным</li>
              <li>запросить удаление данных</li>
              <li>отозвать согласие на обработку</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">7. Изменения политики</h3>
            <p>Мы можем обновлять данную политику. Актуальная версия всегда доступна на сайте.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">8. Контакты</h3>
            <p>По вопросам конфиденциальности:<br/>telegram @vantorix_os</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- TERMS PAGE COMPONENT ---
function TermsPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen bg-theme-bg py-24 px-6">
       <div className="max-w-4xl mx-auto bg-theme-card p-10 md:p-16 radius-card border border-theme shadow-theme-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#22D3EE]/10 radius-btn blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-theme-primary mb-4 tracking-tight">Условия оказания услуг Vantorix</h1>
          <p className="text-theme-secondary mb-12">Дата вступления в силу: [03.05.2026]</p>

          <div className="prose prose-stone prose-lg max-w-none text-theme-secondary">
            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">1. Общие положения</h3>
            <p>Настоящие Условия регулируют использование сервисов Vantorix. Используя сайт и сервисы, вы соглашаетесь с данными условиями.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">2. Описание сервиса</h3>
            <p>Vantorix предоставляет:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              
              <li>создание систем (CRM, ERP, заказные системы)</li>
              <li>SaaS решения</li>
              <li>систему заказов для бизнеса (Orderly)</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">3. Аккаунт пользователя</h3>
            <p>Пользователь обязуется:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>предоставлять достоверные данные</li>
              <li>не передавать доступ третьим лицам</li>
              <li>обеспечивать безопасность аккаунта</li>
            </ul>
            <p>Компания не несёт ответственности за действия, совершённые через аккаунт пользователя.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">4. Использование сервиса</h3>
            <p>Запрещается:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>использовать сервис для незаконной деятельности</li>
              <li>пытаться взломать систему</li>
              <li>нарушать работу платформы</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">5. Доступ к системе заказов</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Доступ предоставляется по приглашению (invite)</li>
              <li>Бизнес самостоятельно управляет доступом клиентов</li>
              <li>Компания не несёт ответственности за действия пользователей внутри системы конкретного бизнеса</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">6. Интеграции</h3>
            <p>Сервис может интегрироваться с третьими системами (например, Bitrix24). Компания не несёт ответственности за работу сторонних сервисов.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">7. Ограничение ответственности</h3>
            <p>Сервис предоставляется "как есть". Компания не гарантирует:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>отсутствие ошибок</li>
              <li>бесперебойную работу</li>
              <li>соответствие ожиданиям пользователя</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">8. Изменения сервиса</h3>
            <p>Компания может:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>изменять функционал</li>
              <li>добавлять или удалять функции</li>
              <li>обновлять систему без предварительного уведомления</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">9. Прекращение доступа</h3>
            <p>Компания может ограничить доступ в случае:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>нарушения условий</li>
              <li>подозрительной активности</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">10. Изменения условий</h3>
            <p>Условия могут обновляться. Продолжение использования означает согласие с изменениями.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">11. Контакты</h3>
            <p>telegram 03.05.2026</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
