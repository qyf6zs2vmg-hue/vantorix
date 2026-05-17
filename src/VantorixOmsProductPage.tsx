import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  LayoutDashboard, 
  RefreshCw, 
  Users, 
  Terminal,
  Workflow,
  CheckCircle2,
  ListTodo
} from 'lucide-react';

export default function VantorixOmsProductPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--text-primary)] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-transparent" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-transparent" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-transparent" />
      </div>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 relative border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} 
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--badge-bg)] text-[var(--badge-text)] font-bold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6 border border-[var(--badge-border)] ">
              Vantorix Orders System
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight mb-6 leading-[1.1]">
              Хватит управлять заказами в <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">Telegram и WhatsApp.</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Единая B2B система заказов для современных компаний. Автоматизируйте продажи, получайте заказы напрямую в CRM и избавьтесь от ручной работы.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://vantorix-oms.vercel.app/" target="_blank" rel="noreferrer"
                className="btn btn-lg btn-primary w-full sm:w-auto"
              >
                Перейти к платформе <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            {/* Animated comparison visual */}
            <div className="relative w-full aspect-[4/3] radius-ui border border-[var(--border)] bg-[var(--card)]  overflow-hidden flex flex-col">
              <div className="h-12 border-b border-[var(--border)] bg-[var(--bg-muted)] flex items-center px-4 gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-[var(--border-muted)]" />
                   <div className="w-3 h-3 rounded-full bg-[var(--border)]" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="flex-1 flex justify-center">
                   <div className="h-6 w-32 bg-[var(--bg-tag)] rounded-md border border-[var(--border)]" />
                 </div>
              </div>
              <div className="flex-1 flex bg-[var(--bg-muted)] relative overflow-hidden">
                {/* Left side: Chaos */}
                <div className="flex-1 p-4 flex flex-col gap-3 relative border-r border-[var(--border)]">
                  <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">Before</div>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                    className="self-start bg-[var(--border)] text-[var(--text-primary)] p-3 radius-ui rounded-tl-sm text-xs  max-w-[80%] mt-4"
                  >
                    Привет! Нам нужно 50 коробок артикул 1234.
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="self-end bg-[var(--btn-bg)] text-[var(--btn-text)] p-3 radius-ui rounded-tr-sm text-xs  max-w-[80%]"
                  >
                    Принято. Какая цена была в прошлый раз?
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                    className="self-start bg-[var(--border)] text-[var(--text-primary)] p-3 radius-ui rounded-tl-sm text-xs  max-w-[80%]"
                  >
                    Не помню, посмотрите в истории... а еще добавьте позицию 5678, но только 10 штук.
                  </motion.div>
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg-tag)] to-transparent flex items-end justify-center pb-2"
                  >
                    <span className="text-[var(--text-secondary)] text-[10px] font-bold">ОШИБКИ & ХАОС</span>
                  </motion.div>
                </div>
                {/* Right side: Vantorix OMS */}
                <div className="flex-1 p-4 flex flex-col gap-4 bg-[var(--card)] relative">
                  <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-[var(--accent-icon)] tracking-wider">After (Vantorix)</div>
                  
                  <div className="mt-6 flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                       <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.4 + 1 }}
                        className="bg-[var(--bg-muted)] border border-[var(--border)] p-3 radius-ui flex items-center justify-between"
                       >
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--border)] to-[var(--bg-tag)] flex items-center justify-center">
                             <ListTodo className="w-4 h-4 text-[var(--text-primary)]" />
                           </div>
                           <div>
                             <div className="text-[10px] font-bold text-[var(--text-primary)]">Заказ <span className="text-[var(--accent-number)]">ORD-{9230 + i}</span></div>
                             <div className="text-[9px] text-[var(--text-secondary)]">Синхронизировано в CRM</div>
                           </div>
                         </div>
                         <CheckCircle2 className="w-4 h-4 text-[var(--accent-icon)]" />
                       </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-40 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-16 h-16 bg-[var(--bg-muted)] border border-[var(--border)] radius-ui flex items-center justify-center mx-auto mb-6 text-[var(--text-secondary)]">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6">
              Ручное управление заказами создает хаос в растущем бизнесе.
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Потерянные сообщения, ошибки при вводе данных менеджером, путаница с актуальными ценами и остатками. Мессенджеры не предназначены для эффективного ведения оптовых продаж.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-40 px-6 relative bg-transparent border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-16 h-16 bg-[var(--bg-muted)] border border-[var(--border)] radius-ui flex items-center justify-center mx-auto mb-6 text-[var(--text-primary)]">
              <LayoutDashboard className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-8">
              Vantorix OMS централизует все B2B заказы в одной автоматизированной платформе.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Приватная invite-система", desc: "Только верифицированные клиенты получают доступ к платформе и вашему каталогу." },
              { title: "Каталог реального времени", desc: "Ваши клиенты всегда видят актуальные цены и реальные остатки товаров." },
              { title: "Автоматическая синхронизация", desc: "Ушли от создания заказа руками. Все заказы падают прямо в 1С/Bitrix24." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-full bg-[var(--bg-muted)] border border-[var(--border)] text-left"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-40 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-4">Как это работает</h2>
            <p className="text-lg text-[var(--text-secondary)]">Простой процесс внедрения и работы.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Подключение", desc: "Бизнес подключает систему к своей 1С или Bitrix24." },
              { step: 2, title: "Приглашения", desc: "Генерация инвайт-ссылок для оптовых клиентов." },
              { step: 3, title: "Заказы", desc: "Клиенты собирают корзину и делают заказы по ссылке." },
              { step: 4, title: "Синхронизация", desc: "Заказы автоматически падают в вашу ERP/CRM." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-[var(--card)] p-8 radius-card border border-[var(--border)] "
              >
                <div className="w-12 h-12 border border-[var(--badge-border)] bg-[var(--bg-tag)] text-[var(--accent-number)] radius-ui flex items-center justify-center font-bold text-xl mb-6 ">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-[52px] -right-3 w-6 h-px bg-[var(--border)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (CARDS GRID) */}
      <section className="py-40 px-6 relative bg-transparent border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <RefreshCw />, title: "Синхронизация каталога", desc: "Цены и остатки обновляются в реальном времени" },
              { icon: <Users />, title: "Invite-система", desc: "Контролируемый доступ только для ваших контрагентов" },
              { icon: <Terminal />, title: "Авто-обработка", desc: "Заказы формируются без участия менеджера" },
              { icon: <Workflow />, title: "Интеграция ERP", desc: "Нативная связь с 1С, МойСклад и Bitrix24" },
              { icon: <LayoutDashboard />, title: "B2B Клиенты", desc: "Управление профилями, балансами и историями заказов" },
              { icon: <CheckCircle2 />, title: "Градиент статусов", desc: "Трекинг статуса посылки/заказа клиентом онлайн" }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 radius-card bg-[var(--bg-muted)] border border-[var(--border)] hover:border-[var(--border-muted)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--card)] radius-card border border-[var(--border)] text-[var(--text-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feat.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-40 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6">
              Кому подходит это решение?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Создано для компаний, которые вырастают за рамки ручных сообщений и таблиц.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Оптовые поставщики', 'Дистрибьюторы', 'Производители', 'B2B поставщики', 'Крупный e-commerce'].map((role, i) => (
                <div key={i} className="bg-[var(--card)] border border-[var(--border)] px-6 py-3 rounded-full text-sm font-bold text-[var(--text-primary)] ">
                  {role}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-40 px-6 relative bg-transparent border-t border-[var(--border)]">

        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
              Обновите систему заказов <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">уже сегодня.</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10">
              Начните автоматизировать операции вашего бизнеса за считанные минуты.
            </p>
            
            <a 
              href="https://vantorix-oms.vercel.app/" target="_blank" rel="noreferrer"
              className="btn btn-lg btn-primary inline-flex animate-pulse  "
            >
              Перейти к платформе <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
