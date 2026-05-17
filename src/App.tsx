import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import ASTHEAOmsProductPage from './ASTHEAOmsProductPage';
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
  Terminal,
  ChevronDown
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
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'privacy' | 'terms' | 'product-oms'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkTimeTheme = () => {
      const hour = new Date().getHours();
      // 07:00 to 19:00 is light theme
      if (hour >= 7 && hour < 19) {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    };
    
    checkTimeTheme();
    const interval = setInterval(checkTimeTheme, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen flex flex-col font-sans text-[var(--text-primary)] relative   bg-[var(--bg)] overflow-x-hidden">
      
      {/* Background elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center ${isScrolled ? "nav-blur  border-b border-[var(--border)]" : "bg-transparent"}`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div onClick={() => setCurrentView('home')} className="flex items-center gap-2.5 cursor-pointer group">
            <img 
              src="https://drive.google.com/thumbnail?id=1Zzhxcg4wGu4HCBSmPptAhuTqb-s8yb3D&sz=w500" 
              alt="ASTHEA Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-bold text-xl tracking-tight text-[var(--text-primary)]">ASTHEA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--text-secondary)]">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-[var(--accent-number)] transition-colors py-1">О нас</a>
                <button onClick={() => setCurrentView('products')} className="hover:text-[var(--accent-number)] transition-colors py-1">Продукты</button>
                <a href="#services" className="hover:text-[var(--accent-number)] transition-colors py-1">Решения</a>
                <a href="#process" className="hover:text-[var(--accent-number)] transition-colors py-1">Процесс</a>
              </>
            )}
            {currentView !== 'home' && (
              <button onClick={() => setCurrentView('home')} className={currentView === 'home' ? "text-[var(--accent-number)] border-b border-[var(--border-active)] py-1 transition-colors" : "hover:text-[var(--accent-number)] transition-colors py-1"}>Главная</button>
            )}
            {currentView !== 'products' && currentView !== 'home' && (
              <button 
                onClick={() => setCurrentView('products')} 
                className={`${currentView === 'products' ? 'text-[var(--accent-number)] border-b border-[var(--border-active)]' : 'hover:text-[var(--accent-number)]'} transition-all py-1`}
              >
                Продукты
              </button>
            )}
          </div>
          
          <div className="hidden md:block">
            {currentView === 'home' ? (
              <a href="#contact" className="bg-transparent border border-[var(--border)] hover:border-[var(--border-active)] px-4 py-2 rounded-full text-sm font-semibold transition-colors text-[var(--text-primary)] hover:text-[var(--accent-number)]">
                Связаться
              </a>
            ) : (
              <a href="mailto:contact@asthea.com" className="bg-transparent border border-[var(--border)] hover:border-[var(--border-active)] px-4 py-2 rounded-full text-sm font-semibold transition-colors text-[var(--text-primary)] hover:text-[var(--accent-number)]">
                Связаться
              </a>
            )}
          </div>

          <button className="md:hidden text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="fixed inset-x-0 top-[80px] z-40 bg-[var(--card)] border-b border-[var(--border)] p-6 md:hidden flex flex-col gap-4 text-center "
          >
            {currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">О нас</a>
                <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">Продукты</button>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">Решения</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">Процесс</a>
              </>
            )}
            {currentView !== 'home' && (
              <button onClick={() => { setMobileMenuOpen(false); setCurrentView('home'); }} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">Главная</button>
            )}
            {currentView !== 'products' && currentView !== 'home' && (
              <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 text-lg font-medium">Продукты</button>
            )}
            
            {currentView === 'home' ? (
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-md btn-primary mt-4 w-full">Связаться</a>
            ) : (
              <a href="mailto:contact@asthea.com" onClick={() => setMobileMenuOpen(false)} className="btn btn-md btn-primary mt-4 w-full">Связаться</a>
            )}
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
              <ProductsPage onViewProduct={(id) => {
                if (id === 'oms') {
                  setCurrentView('product-oms');
                }
              }} />
            </motion.div>
          ) : currentView === 'product-oms' ? (
             <motion.div
              key="product-oms"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <ASTHEAOmsProductPage />
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
      <section id="contact" className="py-40 px-6 relative border-t border-[var(--border)] overflow-hidden">

        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 w-full"
            >
              <div className="w-16 h-16 bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--text-primary)] radius-ui flex items-center justify-center mx-auto mb-6 ">
                <Send className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tight leading-tight">Готовы к <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">цифровой трансформации?</span></h2>
              <p className="text-[var(--text-secondary)] mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Свяжитесь с нами, чтобы обсудить ваши бизнес-задачи и подобрать оптимальное решение из нашей экосистемы.
              </p>

              <div className="flex justify-center mt-4">
                <a 
                  href="https://t.me/asthea_os" target="_blank" rel="noreferrer"
                  className="btn btn-lg btn-primary"
                >
                  Связаться в Telegram <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* BRAND POWER ANIMATION CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[var(--bg-muted)] border border-[var(--border)] radius-ui p-10 md:p-16 relative overflow-hidden "
            >
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight mb-2">
                  MAKE IT <br className="hidden sm:block" /><span className="text-[var(--accent-icon)] whitespace-nowrap">POSSIBLE</span>
                </h3>
              </div>
            </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-[var(--bg)] border-t border-[var(--border)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://drive.google.com/thumbnail?id=1Zzhxcg4wGu4HCBSmPptAhuTqb-s8yb3D&sz=w500" 
              alt="ASTHEA Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="font-bold text-[var(--text-primary)] text-xl tracking-tight">ASTHEA</span>
          </div>
          <div className="text-sm text-[var(--text-secondary)] flex flex-wrap justify-center gap-8">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-[var(--text-primary)] transition-colors">Конфиденциальность</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-[var(--text-primary)] transition-colors">Условия</button>
          </div>
          <div className="text-sm text-[var(--text-secondary)] font-medium">
            &copy; {new Date().getFullYear()} Asthea Labs. All rights reserved.
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
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
        
        {/* Background Image with Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] from-40% via-[var(--bg)]/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Architecture" 
            className="absolute right-0 top-0 w-full md:w-2/3 h-full object-cover opacity-[var(--img-opacity)] grayscale mix-blend-[var(--img-blend)]"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-[var(--text-primary)]">
                ASTHEA — Цифровые системы <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">для роста бизнеса.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-3xl text-[var(--text-secondary)] font-normal mb-12 leading-relaxed"
            >
              Разрабатываем системы и приложения, которые <span className="text-[var(--text-primary)] font-semibold">автоматизируют процессы</span> и <span className="text-[var(--text-primary)] font-semibold">упрощают работу бизнеса.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-10 w-full max-w-md"
            >
              <button onClick={onViewProducts} className="btn btn-lg btn-primary w-full sm:w-auto min-w-[200px] group">
                Наши продукты <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 text-[var(--text-primary)] font-medium hover:text-[var(--accent-number)] transition-colors py-3">
                Решения <ArrowRight className="w-4 h-4 text-[var(--accent-icon)]" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 md:py-40 px-6 relative border-y border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <h2 className="text-sm font-bold text-[var(--accent-icon)] uppercase tracking-widest mb-6">О компании ASTHEA</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--text-primary)] leading-tight">
              Мы создаем <span className="text-[var(--text-primary)]">реальные системы</span>. <br className="hidden lg:block"/>
              <span className="text-[var(--text-secondary)] font-normal mt-4 block text-2xl md:text-3xl lg:text-4xl">Погружаемся в бизнес-логику, фокусируемся на эффективности и помогаем компаниям оцифровывать операции.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* СЕРВИСЫ - WHAT WE DO */}
      <section id="services" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight">Наши решения</h2>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
                Разрабатываем комплексные решения, которые повышают продуктивность, контролируют процессы и выводят бренды на новый уровень в интернете.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            
            <ServiceCard 
              icon={<Layers className="w-8 h-8 text-[var(--text-primary)]" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
              imgSrc="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Code2 className="w-8 h-8 text-[var(--text-primary)]" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
              imgSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Cpu className="w-8 h-8 text-[var(--text-primary)]" />} 
              title="Автоматизация процессов" 
              desc="Интеграция сторонних API и оптимизация ежедневной рутины компаний."
              imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-[var(--text-primary)]" />} 
              title="Индивидуальные решения" 
              desc="Уникальная программная логика, разработанная строго под специфику бизнеса."
              imgSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            />
          </motion.div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ (Process) */}
      <section id="process" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight">Как мы работаем</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-normal">Инженерный, пошаговый подход для точного достижения целей бизнеса.</p>
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

      {/* ПОЧЕМУ ASTHEA (Features) */}
      <section className="py-40 px-6 relative bg-[var(--card)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight">Почему Asthea?</h2>
            <div className="w-24 h-1 bg-[var(--border-active)] mx-auto rounded-full" />
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

const productsData = [
  {
    id: 'oms',
    name: 'ASTHEA OMS',
    tag: 'Флагман',
    subtitle: 'A modern B2B client ordering system',
    shortDesc: 'Универсальная система заказов B2B для бизнеса и его клиентов.',
    desc: 'Избавьтесь от ручной обработки заказов, хаоса в WhatsApp и Excel. ASTHEA OMS обеспечивает централизованное управление, структурированный каталог и быстрый интерфейс связи бизнеса со своими клиентами.',
    link: 'https://asthea-oms.vercel.app/',
    features: [
      { icon: <Users className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Приватный доступ клиентов (invite-система)' },
      { icon: <ShoppingBag className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Структурированный каталог товаров' },
      { icon: <Terminal className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Создание и трекинг заказов' },
      { icon: <LayoutDashboard className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Дашборд для владельца бизнеса' },
      { icon: <Users className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Многоклиентская среда управления' },
      { icon: <LinkIcon className="w-5 h-5 text-[var(--accent-icon)]" />, text: 'Интеграция с Bitrix24 (CRM)' }
    ],
    integration: {
      title: 'Синхронизация с Bitrix24',
      desc: 'Заказы и клиенты автоматически синхронизируются с CRM системами бизнеса для непрерывного сквозного контроля.'
    },
    howItWorks: [
      'Владелец бизнеса создает рабочую среду',
      'Генерирует приватную invite-ссылку',
      'Отправляет клиенту для регистрации',
      'Клиент видит товары и размещает заказ',
      'Бизнес моментально получает заказ на обработку'
    ]
  }
];

function ProductCard({ product, onViewDetails }: { product: typeof productsData[0], onViewDetails: () => void, key?: React.Key }) {
  return (
    <div className="bg-[var(--card)] radius-card border border-[var(--border)] relative overflow-hidden mb-8 transition-all duration-300 group hover:border-[var(--border-muted)]">
      <div className="absolute inset-y-0 right-0 w-full md:w-1/3 opacity-[var(--img-opacity)] transition-opacity mix-blend-[var(--img-blend)] duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-theme-card via-theme-card/80 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="Process" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[var(--bg-muted)] flex items-center justify-center  shrink-0 border border-[var(--border)] relative overflow-hidden">
            <span className="font-bold text-2xl text-gradient whitespace-nowrap relative z-10">{product.name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-2">
               <span className="bg-[var(--badge-bg)] text-[var(--badge-text)] px-2.5 py-0.5 rounded-full font-bold tracking-tight text-[11px] uppercase border border-[var(--badge-border)] ">{product.tag}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-1">
              {product.name}
            </h2>
            <p className="text-[var(--text-secondary)] font-medium text-sm md:text-base max-w-xl">
              {product.shortDesc}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0 relative z-20">
          <a 
            href={product.link} target="_blank" rel="noreferrer"
            className="btn btn-md btn-primary w-full sm:w-auto"
          >
            Перейти <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductsPage({ onViewProduct }: { onViewProduct: (id: string) => void }) { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen">
      <div className="pt-32 pb-24 px-6 border-b border-[var(--border)] relative bg-[var(--bg)] overflow-hidden">

        <div className="max-w-5xl mx-auto text-center relative z-10 mt-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[var(--badge-bg)] backdrop-blur-md text-[var(--badge-text)] font-bold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6 border border-[var(--badge-border)] ">
                Наши продукты
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight mb-6">
                Готовые системы ASTHEA
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Собственные разработки и платформы для интеграции в B2B-среду.
              </p>
           </motion.div>
        </div>
      </div>

      <div className="py-24 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto relative z-10 gap-8 flex flex-col">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={() => onViewProduct(product.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
// --- SHARED UI SUBCOMPONENTS ---

function ServiceCard({ title, desc, icon, imgSrc }: { title: string, desc: string, icon: React.ReactNode, imgSrc?: string }) {
  return (
    <motion.div variants={fadeInUp} className="bg-[var(--card)] border border-[var(--border)] p-10 radius-card group flex flex-col items-start transition-all duration-300  hover:border-[var(--border-muted)] cursor-default relative overflow-hidden h-full">
      {imgSrc && (
        <div className="absolute inset-0 pointer-events-none opacity-[var(--img-opacity)] mix-blend-[var(--img-blend)] scale-105 group-hover:scale-100 transition-transform duration-700">
           <img src={imgSrc} alt="" className="w-full h-full object-cover grayscale" />
        </div>
      )}
      <div className="w-14 h-14 bg-[var(--bg-muted)] radius-ui flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[var(--text-primary)] border border-[var(--border)] relative z-10 shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 relative z-10">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed text-sm relative z-10">{desc}</p>
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
      className="bg-[var(--card)] p-8 radius-card flex flex-col md:flex-row md:items-center gap-8 border border-[var(--border)] w-full transition-all duration-300  hover:border-[var(--border-muted)] cursor-default group"
    >
      <div className="w-16 h-16 bg-[var(--bg-muted)] border border-[var(--border)] radius-ui flex items-center justify-center font-bold text-2xl text-[var(--accent-number)] shrink-0 group-hover:border-[var(--border-active)] transition-all duration-500">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">{title}</h3>
        <p className="text-[var(--text-secondary)] text-base leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l border-[var(--border)] pl-6 py-2 hover:border-[var(--text-primary)] transition-colors duration-300 h-full flex flex-col justify-center">
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
}

// --- PRIVACY PAGE COMPONENT ---
function PrivacyPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen bg-transparent py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[var(--card)] p-10 md:p-16 radius-card border border-[var(--border)]  relative overflow-hidden">

        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 tracking-tight">Политика конфиденциальности</h1>
          <p className="text-[var(--text-secondary)] mb-12 font-medium">Обновлено: 03.05.2026</p>

          <div className="prose prose-slate max-w-none text-[var(--text-secondary)]">
            <p className="text-lg">Компания ASTHEA ценит ваше доверие и применяет современные стандарты защиты персональных данных.</p>
            
            <div className="my-10 h-px bg-[var(--bg-tag)]" />
            
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">1. Сбор информации</h3>
            <p>Мы собираем только те данные, которые необходимы для предоставления доступа к продуктам и обеспечения их стабильной работы (email, имя, технические параметры устройства).</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">2. Использование данных</h3>
            <p>Ваши данные используются исключительно для аутентификации, поддержки пользователей и улучшения функциональности сервисов ASTHEA.</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">3. Безопасность</h3>
            <p>Все персональные данные хранятся в зашифрованном виде с использованием протоколов безопасности корпоративного уровня.</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">4. Обратная связь</h3>
            <p>По любым вопросам защиты данных вы можете написать нашему офицеру по безопасности в Telegram: <a href="https://t.me/asthea_os" className="text-[var(--text-primary)] font-semibold">@asthea_os</a></p>
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
    <div className="relative z-10 w-full min-h-screen bg-transparent py-20 px-6">
       <div className="max-w-4xl mx-auto bg-[var(--card)] p-10 md:p-16 radius-card border border-[var(--border)]  relative overflow-hidden">

        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 tracking-tight">Условия использования</h1>
          <p className="text-[var(--text-secondary)] mb-12 font-medium">Обновлено: 03.05.2026</p>

          <div className="prose prose-slate max-w-none text-[var(--text-secondary)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">1. Продуктовая модель</h3>
            <p>ASTHEA является продуктовой компанией. Мы разрабатываем и предоставляем доступ к собственным цифровым системам. Мы не занимаемся заказной разработкой веб-сайтов или приложений для сторонних клиентов.</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">2. Доступ к сервисам</h3>
            <p>Доступ к продуктам ASTHEA предоставляется на условиях подписки или приглашения. Владельцы бизнеса несут полную ответственность за управление доступом своих сотрудников и клиентов.</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">3. Интеллектуальная собственность</h3>
            <p>Все права на программный код, интерфейсы и логику работы продуктов принадлежат ASTHEA Labs.</p>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">4. Ограничение ответственности</h3>
            <p>Сервисы предоставляются по принципу "как есть". Мы гарантируем техническую поддержку и исправление критических ошибок, но не несем ответственности за косвенные убытки от использования ПО.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
