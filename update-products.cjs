const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const productsCode = `
const productsData = [
  {
    id: 'orderly',
    name: 'Orderly',
    tag: 'Флагман',
    subtitle: 'A modern B2B client ordering system',
    shortDesc: 'Универсальная система заказов B2B для бизнеса и его клиентов.',
    desc: 'Избавьтесь от ручной обработки заказов, хаоса в WhatsApp и Excel. Orderly обеспечивает централизованное управление, структурированный каталог и быстрый интерфейс связи бизнеса со своими клиентами.',
    link: 'https://orderly-by-vantorix.vercel.app/',
    features: [
      { icon: <Users className="w-5 h-5 text-[#5B5EF7]" />, text: 'Приватный доступ клиентов (invite-система)' },
      { icon: <ShoppingBag className="w-5 h-5 text-[#5B5EF7]" />, text: 'Структурированный каталог товаров' },
      { icon: <Terminal className="w-5 h-5 text-[#5B5EF7]" />, text: 'Создание и трекинг заказов' },
      { icon: <LayoutDashboard className="w-5 h-5 text-[#5B5EF7]" />, text: 'Дашборд для владельца бизнеса' },
      { icon: <Users className="w-5 h-5 text-[#5B5EF7]" />, text: 'Многоклиентская среда управления' },
      { icon: <LinkIcon className="w-5 h-5 text-[#5B5EF7]" />, text: 'Интеграция с Bitrix24 (CRM)' }
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

function ProductCard({ product }: { product: typeof productsData[0] }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-white/50 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-sm relative overflow-hidden mb-8 transition-all duration-300">
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 radius-card bg-white flex items-center justify-center shadow-sm shrink-0 border border-[rgba(229,231,235,0.6)]">
            <span className="font-black text-3xl text-theme-primary">{product.name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-3">
              <span className="bg-[#1C1917] text-white px-3 py-1 rounded font-black tracking-widest uppercase text-xs">{product.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-theme-primary mb-2">
              {product.name}
            </h2>
            <p className="text-theme-secondary font-medium text-base md:text-lg max-w-xl">
              {product.shortDesc}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 mt-4 md:mt-0">
          <a 
            href={product.link} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#111827] text-white hover:bg-[#1a2333] px-6 py-3 radius-btn font-semibold transition-all shadow-theme-md w-full sm:w-auto justify-center"
          >
            Посмотреть <ExternalLink className="w-4 h-4" />
          </a>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 bg-white border border-[rgba(229,231,235,0.6)] hover:bg-stone-50 text-theme-primary px-6 py-3 radius-btn font-semibold transition-all shadow-sm w-full sm:w-auto justify-center"
          >
            {expanded ? 'Скрыть детали' : 'Подробнее'}
            <ChevronDown className={\`w-4 h-4 transition-transform \${expanded ? 'rotate-180' : ''}\`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-[rgba(229,231,235,0.6)]"
          >
            <div className="p-8 md:p-12 bg-white/30">
              <h3 className="text-[#5B5EF7] font-bold tracking-widest uppercase text-sm mb-6">{product.subtitle}</h3>
              <p className="text-lg text-theme-secondary leading-relaxed mb-12 max-w-3xl">
                {product.desc}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-theme-primary mb-6">Ключевые функции</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="shrink-0 mt-0.5">{feat.icon}</div>
                        <span className="text-theme-secondary text-sm">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-theme-primary mt-10 mb-6">Интеграция</h4>
                  <div className="bg-white/60 p-5 radius-card border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#F6F7FB] text-[#5B5EF7] radius-ui flex items-center justify-center">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-theme-primary">{product.integration.title}</h5>
                    </div>
                    <p className="text-theme-secondary text-sm leading-relaxed">
                      {product.integration.desc}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-theme-primary mb-6">Как это работает</h4>
                  <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-[#E5E7EB]" />
                    {product.howItWorks.map((step, i) => (
                      <div key={i} className="relative z-10 flex items-center gap-4">
                        <div className={\`w-10 h-10 radius-card flex items-center justify-center font-bold text-sm shrink-0 shadow-sm \${i === product.howItWorks.length - 1 ? 'bg-[#5B5EF7] text-white border-0' : 'bg-white border border-[rgba(229,231,235,0.6)] text-[#5B5EF7]'}\`}>
                          {i+1}
                        </div>
                        <p className="text-theme-secondary text-sm font-medium">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductsPage() { 
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative z-10 w-full min-h-screen">
      <div className="pt-20 pb-16 px-6 border-b border-[rgba(229,231,235,0.6)] relative bg-white/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A78BFA]/5 radius-btn blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto text-center relative z-10 mt-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md text-[#5B5EF7] font-bold text-xs uppercase tracking-widest radius-btn px-4 py-1.5 mb-6 border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
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

      <div className="py-24 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto relative z-10 gap-8 flex flex-col">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
`;

const oldProductsPageRegex = /function ProductsPage\(\) \{[\s\S]*?(?=\/\/ --- SHARED UI SUBCOMPONENTS ---)/;

if (!code.includes('ChevronDown')) {
  code = code.replace("import { ArrowRight, Globe, Layers, Repeat, CheckCircle2, Shield, Target, Menu, X, ArrowUpRight, Github, ExternalLink, Activity, Users, ShoppingBag, Terminal, LayoutDashboard, Link as LinkIcon, Workflow } from 'lucide-react';", 
    "import { ArrowRight, Globe, Layers, Repeat, CheckCircle2, Shield, Target, Menu, X, ArrowUpRight, Github, ExternalLink, Activity, Users, ShoppingBag, Terminal, LayoutDashboard, Link as LinkIcon, Workflow, ChevronDown } from 'lucide-react';");
}
if (!code.includes('AnimatePresence')) {
  code = code.replace("import { motion, useScroll, useTransform } from 'framer-motion';", 
    "import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';");
}

code = code.replace(oldProductsPageRegex, productsCode);

fs.writeFileSync('src/App.tsx', code);
