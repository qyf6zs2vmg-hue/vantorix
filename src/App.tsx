import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Send,
  Menu,
  X,
  Code2,
  Settings,
  Users,
  LayoutDashboard,
  Cpu,
  Layers,
  Terminal,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

type ThemeMode = 'light' | 'dark' | 'system';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'privacy' | 'terms'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-theme-primary relative selection:bg-accent selection:text-white bg-theme-bg overflow-x-hidden">
      
      {/* Background container */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-theme-bg transition-colors duration-300">
        <div className="absolute inset-0 bg-ambient-blur opacity-100" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center ${isScrolled ? "nav-blur" : "bg-transparent"}`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div onClick={() => setCurrentView('home')} className="flex items-center gap-2.5 cursor-pointer group">
            <img 
              src="https://drive.google.com/thumbnail?id=1Zzhxcg4wGu4HCBSmPptAhuTqb-s8yb3D&sz=w500" 
              alt="Vantorix Logo" 
              className="h-7 w-auto object-contain" 
            />
            <span className="font-semibold text-lg tracking-tight text-theme-primary">Vantorix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-secondary">
            {currentView === 'home' && (
              <>
                <a href="#about" className="hover:text-theme-primary transition-colors">О нас</a>
                <button onClick={() => setCurrentView('products')} className="hover:text-theme-primary transition-colors">Продукты</button>
                <a href="#services" className="hover:text-theme-primary transition-colors">Решения</a>
                <a href="#process" className="hover:text-theme-primary transition-colors">Процесс</a>
              </>
            )}
            {currentView !== 'home' && (
              <button onClick={() => setCurrentView('home')} className="hover:text-theme-primary transition-colors">Главная</button>
            )}
            {currentView !== 'products' && currentView !== 'home' && (
              <button 
                onClick={() => setCurrentView('products')} 
                className={`${currentView === 'products' ? 'text-accent' : 'hover:text-theme-primary'} transition-all`}
              >
                Продукты
              </button>
            )}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {currentView === 'home' ? (
              <a href="#contact" className="btn btn-sm btn-primary">
                Связаться
              </a>
            ) : (
              <a href="mailto:contact@vantorix.com" className="btn btn-sm btn-primary">
                Связаться
              </a>
            )}
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button className="text-theme-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-theme-card border-b border-theme p-6 md:hidden flex flex-col gap-4 text-center shadow-theme-lg"
          >
            {currentView === 'home' && (
              <>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">О нас</a>
                <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">Продукты</button>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">Решения</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">Процесс</a>
              </>
            )}
            {currentView !== 'home' && (
              <button onClick={() => { setMobileMenuOpen(false); setCurrentView('home'); }} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">Главная</button>
            )}
            {currentView !== 'products' && currentView !== 'home' && (
              <button onClick={() => { setMobileMenuOpen(false); setCurrentView('products'); }} className="text-theme-secondary hover:text-accent py-2 text-lg font-medium">Продукты</button>
            )}
            
            <a href={currentView === 'home' ? "#contact" : "mailto:contact@vantorix.com"} onClick={() => setMobileMenuOpen(false)} className="btn btn-md btn-primary mt-4 w-full flex justify-center">Связаться</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-[72px]">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage onViewProducts={() => setCurrentView('products')} />
            </motion.div>
          ) : currentView === 'products' ? (
             <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductsPage />
            </motion.div>
          ) : currentView === 'privacy' ? (
             <motion.div
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PrivacyPage />
            </motion.div>
          ) : (
             <motion.div
              key="terms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TermsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-theme relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="text-sm text-theme-secondary flex flex-wrap justify-center gap-6">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-theme-primary transition-colors">Конфиденциальность</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-theme-primary transition-colors">Условия</button>
          </div>
          <div className="text-sm text-theme-muted font-medium">
            &copy; {new Date().getFullYear()} Vantorix Labs. All rights reserved.
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
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-theme-primary">
              Vantorix — Платформы для <br className="hidden sm:block" /><span className="text-accent whitespace-nowrap">современного бизнеса.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-theme-secondary font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Разрабатываем системы и приложения, которые <span className="text-accent font-semibold">автоматизируют процессы</span> и <span className="text-theme-primary font-semibold">упрощают работу.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md mx-auto"
          >
            <button onClick={onViewProducts} className="btn btn-lg btn-primary w-full sm:w-auto min-w-[180px]">
              Наши продукты
            </button>
            <a href="#services" className="btn btn-lg btn-secondary w-full sm:w-auto min-w-[180px]">
              Решения
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 relative border-t border-theme">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          >
            <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">О компании Vantorix</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-theme-primary leading-tight">
              Мы создаем <span className="text-accent">реальные системы</span>. <br className="hidden lg:block"/>
              <span className="text-theme-secondary font-normal mt-6 block text-lg md:text-xl lg:text-2xl leading-relaxed">Погружаемся в бизнес-логику, фокусируемся на эффективности и помогаем компаниям оцифровывать операции. Без визуального шума, только функционал.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* СЕРВИСЫ - WHAT WE DO */}
      <section id="services" className="py-24 px-6 relative z-10 bg-theme-card border-y border-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-theme-primary mb-4 tracking-tight">Наши решения</h2>
              <p className="text-lg text-theme-secondary leading-relaxed font-normal">
                Разрабатываем комплексные ERP и CRM-решения, повышающие контроль над процессами.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <ServiceCard 
              icon={<Layers className="w-5 h-5 text-accent" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
            />
            <ServiceCard 
              icon={<Code2 className="w-5 h-5 text-accent" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
            />
            <ServiceCard 
              icon={<Cpu className="w-5 h-5 text-accent" />} 
              title="Автоматизация" 
              desc="Интеграция сторонних API и нишевая оптимизация рутины."
            />
            <ServiceCard 
              icon={<Settings className="w-5 h-5 text-accent" />} 
              title="Индивидуальные решения" 
              desc="Сложная программная логика под строгую специфику предприятия."
            />
          </motion.div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ (Process) */}
      <section id="process" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-theme-primary mb-4 tracking-tight">Как мы работаем</h2>
            <p className="text-lg text-theme-secondary max-w-2xl mx-auto font-normal">Инженерный подход, обеспечивающий предсказуемый результат.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProcessStep number="01" title="Анализ бизнес-модели" desc="Погружаемся в специфику компании, изучаем процессы и аудиторию." />
            <ProcessStep number="02" title="Проектирование архитектуры" desc="Создаем базу данных и логику связей. Формируем чистый UX." />
            <ProcessStep number="03" title="Разработка" desc="Программирование логики и интерфейсов современными технологиями." />
            <ProcessStep number="04" title="Деплой платформы" desc="Финальный релиз, настройка серверов и подготовка к нагрузкам." />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative border-t border-theme bg-theme-card">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 p-12 bg-theme-bg rounded-xl border border-theme shadow-theme-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-12 h-12 bg-theme-card border border-theme text-accent rounded-lg flex items-center justify-center mx-auto mb-6">
              <Send className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-theme-primary mb-4 tracking-tight leading-tight">Готовы к цифровой трансформации?</h2>
            <p className="text-theme-secondary mb-10 max-w-xl mx-auto text-base leading-relaxed">
              Свяжитесь с нами, чтобы обсудить ваши задачи и подобрать лучшее решение.
            </p>

            <div className="flex justify-center mt-4">
              <a 
                href="https://t.me/vantorix_os" target="_blank" rel="noreferrer"
                className="btn btn-lg btn-primary"
              >
                Связаться в Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// --- PRODUCTS PAGE COMPONENT ---

const productsData = [
  {
    id: 'oms',
    name: 'Vantorix OMS',
    tag: 'B2B ORDER SYSTEM',
    shortDesc: 'Универсальная система заказов B2B для бизнеса и его клиентов.',
    link: 'https://vantorix-oms.vercel.app/',
  }
];

function ProductCard({ product }: { product: typeof productsData[0] }) {
  return (
    <div className="bg-theme-card rounded-xl border border-theme shadow-theme-sm relative overflow-hidden transition-all duration-200">
      <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
          <div className="h-14 w-14 rounded-lg bg-theme-bg flex items-center justify-center shrink-0 border border-theme shadow-theme-sm">
             <span className="font-bold text-xl text-theme-primary">{product.name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-2">
               <span className="text-theme-muted text-[10px] uppercase font-bold tracking-wider">{product.tag}</span>
            </div>
            <h2 className="text-xl font-semibold text-theme-primary mb-1">
              {product.name}
            </h2>
            <p className="text-theme-secondary text-sm md:text-base max-w-xl">
              {product.shortDesc}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 md:ml-auto w-full md:w-auto shrink-0 flex">
            <a 
              href={product.link} target="_blank" rel="noreferrer"
              className="btn btn-md btn-secondary w-full md:w-auto"
            >
              Изучить <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div className="pt-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12 border-b border-theme pb-8 mt-10">
            <h1 className="text-3xl font-bold text-theme-primary tracking-tight mb-2">
              Платформы
            </h1>
            <p className="text-base text-theme-secondary max-w-2xl leading-relaxed">
              SaaS решения, готовые к интеграции в бизнес среду.
            </p>
        </div>

        <div className="gap-6 flex flex-col pb-24">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
// --- SHARED UI SUBCOMPONENTS ---

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="bg-theme-bg border border-theme p-8 rounded-xl flex flex-col items-start transition-all duration-200 hover:shadow-theme-md">
      <div className="w-10 h-10 bg-theme-card rounded flex items-center justify-center mb-5 text-theme-primary border border-theme shrink-0 shadow-theme-sm">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-theme-primary mb-2">{title}</h3>
      <p className="text-theme-secondary text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-theme-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 border border-theme w-full transition-all duration-200 hover:shadow-theme-md"
    >
      <div className="w-10 h-10 shrink-0 bg-theme-bg border border-theme rounded flex items-center justify-center font-bold text-sm text-theme-muted shadow-theme-sm">
        {number}
      </div>
      <div>
        <h3 className="text-base font-semibold text-theme-primary mb-2">{title}</h3>
        <p className="text-theme-secondary text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// --- PRIVACY PAGE COMPONENT ---
function PrivacyPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative w-full min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto bg-theme-card p-10 md:p-14 rounded-xl border border-theme shadow-theme-sm mt-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-3xl font-bold text-theme-primary mb-2 tracking-tight">Политика конфиденциальности</h1>
          <p className="text-theme-muted text-sm mb-10">Последнее обновление: 1 Май 2026</p>

          <div className="text-theme-secondary space-y-8 text-sm md:text-base leading-relaxed">
            <p>
              В Vantorix ("мы", "наш", "нас") мы серьезно относимся к вопросам конфиденциальности и защиты данных. 
              Настоящая Политика конфиденциальности описывает, как мы собираем, используем, раскрываем и защищаем вашу информацию, 
              когда вы посещаете наш веб-сайт, используете наши платформы, B2B системы (такие как Vantorix OMS) и другие продукты (в совокупности "Сервисы").
            </p>
            
            <div className="h-px bg-theme-border w-full opacity-50" />
            
            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">1. Информация, которую мы собираем</h3>
              <p className="mb-3">
                Мы собираем информацию различными способами, включая данные, которые вы предоставляете нам напрямую, и 
                информацию, собираемую автоматически при использовании Сервисов:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Учетные данные:</strong> При регистрации или доступе к naszym корпоративным системам мы можем собирать имя, адрес электронной почты, должность, название компании и номер телефона.</li>
                <li><strong>Транзакционные данные:</strong> Детали заказов, счетов и профили клиентов, обрабатываемые в рамках Vantorix OMS и других ERP систем.</li>
                <li><strong>Технические данные:</strong> IP-адреса, тип браузера, данные об устройствах, журналы активностей и информация о конфигурации сессий для устранения неполадок и аналитики безопасности.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">2. Использование данных</h3>
              <p className="mb-3">Собранная информация используется для:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Предоставления, поддержки и непрерывного улучшения функциональности наших систем.</li>
                <li>Аутентификации пользователей и обеспечения предотвращения несанкционированного доступа (в частности, в корпоративных сегментах).</li>
                <li>Анализа тенденций использования для оптимизации интерфейсов, сокращения задержек и добавления новых полезных функций.</li>
                <li>Отправки технических уведомлений, предупреждений о безопасности и административных сообщений (никакого спама или передачи данных третьим лицам для маркетинга).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">3. Безопасность и хранение</h3>
              <p>
                Мы реализуем надежные инфраструктурные меры, включая шифрование данных в состоянии покоя (at-rest) и при передаче (in-transit), контроль доступа на основе ролей и регулярные аудиты защищенности. Сервера баз данных изолированы от публичного доступа. Мы храним ваши персональные данные только до тех пор, пока они необходимы для выполнения целей, изложенных в настоящей Политике, или пока это требуется по закону.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">4. Контактная информация</h3>
              <p>
                Если у вас есть вопросы или опасения относительно нашей Политики конфиденциальности или того, как мы обрабатываем ваши данные, пожалуйста, свяжитесь с нашей службой поддержки по адресу или через корпоративный Telegram-канал <a href="https://t.me/vantorix_os" target="_blank" rel="noreferrer" className="text-accent hover:underline">@vantorix_os</a>.
              </p>
            </section>
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
    <div className="relative w-full min-h-screen py-24 px-6">
       <div className="max-w-4xl mx-auto bg-theme-card p-10 md:p-14 rounded-xl border border-theme shadow-theme-sm mt-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-3xl font-bold text-theme-primary mb-2 tracking-tight">Условия использования</h1>
          <p className="text-theme-muted text-sm mb-10">Последнее обновление: 1 Май 2026</p>

          <div className="text-theme-secondary space-y-8 text-sm md:text-base leading-relaxed">
            <p>
              Добро пожаловать в Vantorix. Данные Условия использования ("Условия") регулируют ваш доступ и 
              использование наших SaaS платформ, корпоративных ERP/CRM решений и связанных цифровых систем ("Сервисы"). 
              Используя наши Сервисы, вы автоматически соглашаетесь соблюдать эти Условия от имени вашей организации.
            </p>

            <div className="h-px bg-theme-border w-full opacity-50" />

            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">1. Продуктовая модель и доступ</h3>
              <p>
                Vantorix работает по модели B2B SaaS. Доступ к системам (таким как Vantorix OMS) предоставляется 
                на основе лицензий. Организации ("Клиент") несут ответственность за конфиденциальность учетных данных 
                администраторов и авторизованных пользователей.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">2. Обязанности Клиента</h3>
              <p className="mb-3">Как пользователь наших корпоративных Сервисов, вы соглашаетесь:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Предоставлять точную информацию при настройке учетных записей.</li>
                <li>Использовать Сервисы исключительно для законных бизнес-целей.</li>
                <li>Не осуществлять реверс-инжиниринг, не копировать и не пытаться извлечь исходный код наших платформ.</li>
                <li>Не использовать системы для рассылки спама, распространения вредоносного ПО или нарушения целостности инфраструктуры.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">3. Доступность сервиса (SLA)</h3>
              <p>
                Мы стремимся обеспечить 99.9% доступности наших облачных продуктов. Тем не менее, Сервисы могут быть 
                временно недоступны во время планового технического обслуживания, о котором мы уведомляем заранее, 
                или форс-мажорных обстоятельств. Vantorix непрерывно мониторит производительность, 
                чтобы минимизировать любые непредвиденные простои.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">4. Ограничение ответственности</h3>
              <p>
                Ни в коем случае Vantorix, ее директора, сотрудники или партнеры не несут ответственности 
                за любые косвенные, случайные, штрафные или логические убытки, включая, помимо прочего, 
                потерю прибыли, данных или других нематериальных потерь, возникающих в результате 
                перебоев в работе сети или несанкционированного доступа к вашим системам со стороны третьих лиц, 
                использующих скомпрометированные учетные данные Клиента.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
