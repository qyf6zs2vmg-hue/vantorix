const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldCards = `<ServiceCard 
              icon={<Layers className="w-8 h-8 text-theme-primary" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
            />
            <ServiceCard 
              icon={<Code2 className="w-8 h-8 text-theme-primary" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
            />
            <ServiceCard 
              icon={<Cpu className="w-8 h-8 text-theme-primary" />} 
              title="Автоматизация процессов" 
              desc="Интеграция сторонних API и оптимизация ежедневной рутины компаний."
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-theme-primary" />} 
              title="Индивидуальные решения" 
              desc="Уникальная программная логика, разработанная строго под специфику бизнеса."
            />`;

const newCards = `<ServiceCard 
              icon={<Layers className="w-8 h-8 text-theme-primary" />} 
              title="Системы (CRM, ERP)" 
              desc="Разработка надежных систем для контроля внутренних процессов."
              imgSrc="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Code2 className="w-8 h-8 text-theme-primary" />} 
              title="SaaS платформы" 
              desc="Проектирование и создание масштабируемых облачных сервисов."
              imgSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Cpu className="w-8 h-8 text-theme-primary" />} 
              title="Автоматизация процессов" 
              desc="Интеграция сторонних API и оптимизация ежедневной рутины компаний."
              imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-theme-primary" />} 
              title="Индивидуальные решения" 
              desc="Уникальная программная логика, разработанная строго под специфику бизнеса."
              imgSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            />`;

app = app.replace(oldCards, newCards);

const oldFunc = `function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="bg-theme-card border border-theme p-10 radius-card group flex flex-col items-start transition-all duration-300  hover:border-[#3D3D3D] cursor-default relative overflow-hidden h-full">`;

const newFunc = `function ServiceCard({ title, desc, icon, imgSrc }: { title: string, desc: string, icon: React.ReactNode, imgSrc?: string }) {
  return (
    <motion.div variants={fadeInUp} className="bg-theme-card border border-theme p-10 radius-card group flex flex-col items-start transition-all duration-300  hover:border-[#3D3D3D] cursor-default relative overflow-hidden h-full">
      {imgSrc && (
        <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700">
           <img src={imgSrc} alt="" className="w-full h-full object-cover grayscale" />
        </div>
      )}`;

app = app.replace(oldFunc, newFunc);

fs.writeFileSync('src/App.tsx', app);
console.log('Fixed cards');
