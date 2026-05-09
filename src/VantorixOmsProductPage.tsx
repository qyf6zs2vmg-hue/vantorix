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
    <div className="min-h-screen bg-white font-sans text-[#1F2937] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">


      </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} 
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-slate-100 text-[#5B5EF7] font-bold text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-6 border border-[#5B5EF7]/20 shadow-sm">
              Vantorix Orders System
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1F2937] tracking-tight mb-6 leading-[1.1]">
              Хватит управлять заказами в <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">Telegram и WhatsApp.</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
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
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden flex flex-col">
              <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-amber-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="flex-1 flex justify-center">
                   <div className="h-6 w-32 bg-white rounded-md border border-slate-200" />
                 </div>
              </div>
              <div className="flex-1 flex bg-slate-50 relative overflow-hidden">
                {/* Left side: Chaos */}
                <div className="flex-1 p-4 flex flex-col gap-3 relative border-r border-slate-200">
                  <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Before</div>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                    className="self-start bg-slate-200 text-slate-700 p-3 rounded-2xl rounded-tl-sm text-xs shadow-sm max-w-[80%] mt-4"
                  >
                    Привет! Нам нужно 50 коробок артикул 1234.
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="self-end bg-[#5B5EF7] text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-sm max-w-[80%]"
                  >
                    Принято. Какая цена была в прошлый раз?
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                    className="self-start bg-slate-200 text-slate-700 p-3 rounded-2xl rounded-tl-sm text-xs shadow-sm max-w-[80%]"
                  >
                    Не помню, посмотрите в истории... а еще добавьте позицию 5678, но только 10 штук.
                  </motion.div>
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-red-500/10 to-transparent flex items-end justify-center pb-2"
                  >
                    <span className="text-red-500 text-[10px] font-bold">ОШИБКИ & ХАОС</span>
                  </motion.div>
                </div>
                {/* Right side: Vantorix OMS */}
                <div className="flex-1 p-4 flex flex-col gap-4 bg-white relative">
                  <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-[#5B5EF7] tracking-wider">After (Vantorix)</div>
                  
                  <div className="mt-6 flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                       <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.4 + 1 }}
                        className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between"
                       >
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded bg-gradient-to-br from-[#5B5EF7]/20 to-[#22D3EE]/20 flex items-center justify-center">
                             <ListTodo className="w-4 h-4 text-[#5B5EF7]" />
                           </div>
                           <div>
                             <div className="text-[10px] font-bold text-slate-700">Заказ ORD-{9230 + i}</div>
                             <div className="text-[9px] text-slate-400">Синхронизировано в CRM</div>
                           </div>
                         </div>
                         <CheckCircle2 className="w-4 h-4 text-green-500" />
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
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1F2937] mb-6">
              Ручное управление заказами создает хаос в растущем бизнесе.
            </h2>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              Потерянные сообщения, ошибки при вводе данных менеджером, путаница с актуальными ценами и остатками. Мессенджеры не предназначены для эффективного ведения оптовых продаж.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 px-6 relative bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#5B5EF7]">
              <LayoutDashboard className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1F2937] mb-8">
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
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left"
              >
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1F2937] mb-4">Как это работает</h2>
            <p className="text-lg text-[#4B5563]">Простой процесс внедрения и работы.</p>
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
                className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-[#5B5EF7]/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B5563]">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-[52px] -right-3 w-6 h-px bg-slate-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (CARDS GRID) */}
      <section className="py-24 px-6 relative bg-white border-y border-slate-200">
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
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#5B5EF7]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 text-[#5B5EF7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#4B5563]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-black text-[#1F2937] mb-6">
              Кому подходит это решение?
            </h2>
            <p className="text-xl text-[#4B5563] mb-12">
              Создано для компаний, которые вырастают за рамки ручных сообщений и таблиц.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Оптовые поставщики', 'Дистрибьюторы', 'Производители', 'B2B поставщики', 'Крупный e-commerce'].map((role, i) => (
                <div key={i} className="bg-white border border-slate-200 px-6 py-3 rounded-full text-sm font-bold text-[#1F2937] shadow-sm">
                  {role}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-t border-slate-200">

        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1F2937] tracking-tight mb-6 leading-tight">
              Обновите систему заказов <br className="hidden sm:block" /><span className="text-gradient whitespace-nowrap">уже сегодня.</span>
            </h2>
            <p className="text-xl text-[#4B5563] mb-10">
              Начните автоматизировать операции вашего бизнеса за считанные минуты.
            </p>
            
            <a 
              href="https://vantorix-oms.vercel.app/" target="_blank" rel="noreferrer"
              className="btn btn-lg btn-primary inline-flex animate-pulse shadow-xl shadow-[#5B5EF7]/20"
            >
              Перейти к платформе <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
