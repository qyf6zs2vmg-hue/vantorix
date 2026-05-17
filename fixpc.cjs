const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldProductCard = `function ProductCard({ product, onViewDetails }: { product: typeof productsData[0], onViewDetails: () => void }) {
  return (
    <div className="bg-theme-card radius-card border border-theme relative overflow-hidden mb-8 transition-all duration-300 group hover:border-[#3D3D3D]">
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-[4px] bg-[#131314] flex items-center justify-center  shrink-0 border border-theme relative overflow-hidden">
            <span className="font-bold text-2xl text-gradient whitespace-nowrap relative z-10">{product.name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-2">
               <span className="bg-[#1A1A1C] text-theme-primary px-2.5 py-0.5 rounded-full font-bold tracking-tight text-[11px] uppercase border border-[#2A2A2A] ">{product.tag}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-theme-primary mb-1">
              {product.name}
            </h2>
            <p className="text-theme-secondary font-medium text-sm md:text-base max-w-xl">
              {product.shortDesc}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
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
}`;

const newProductCard = `function ProductCard({ product, onViewDetails }: { product: typeof productsData[0], onViewDetails: () => void }) {
  return (
    <div className="bg-theme-card radius-card border border-theme relative overflow-hidden mb-8 transition-all duration-300 group hover:border-[#3D3D3D]">
      <div className="absolute inset-y-0 right-0 w-full md:w-1/3 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-theme-card via-theme-card/80 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="Process" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-[4px] bg-[#131314] flex items-center justify-center  shrink-0 border border-theme relative overflow-hidden">
            <span className="font-bold text-2xl text-gradient whitespace-nowrap relative z-10">{product.name.charAt(0)}</span>
          </div>
          <div>
            <div className="mb-2">
               <span className="bg-[#1A1A1C] text-theme-primary px-2.5 py-0.5 rounded-full font-bold tracking-tight text-[11px] uppercase border border-[#2A2A2A] ">{product.tag}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-theme-primary mb-1">
              {product.name}
            </h2>
            <p className="text-theme-secondary font-medium text-sm md:text-base max-w-xl">
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
}`;

if (app.includes(oldProductCard)) {
  app = app.replace(oldProductCard, newProductCard);
  fs.writeFileSync('src/App.tsx', app);
  console.log('Fixed product card');
} else {
  console.log('Target string not found in App.tsx');
}
