const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf8');

// The file was mangled in the last edit, let's restore the end of footer and fix HomePage
const footerStr = `<button onClick={() => setCurrentView('terms')} className="hover:tex// --- HOME PAGE COMPONENT ---`;
app = app.replace(footerStr, `<button onClick={() => setCurrentView('terms')} className="hover:text-theme-primary transition-colors">Условия</button>
          </div>
          <div className="text-sm text-theme-secondary font-medium">
            &copy; {new Date().getFullYear()} Vantorix Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HOME PAGE COMPONENT ---`);

const badEnd = `</section>ducts} className="btn btn-lg btn-primary w-full sm:w-auto min-w-[200px] group">
              Наши продукты <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="btn btn-lg btn-secondary w-full sm:w-auto min-w-[200px]">
              Решения
            </a>
          </motion.div>
        </div>
      </section>`;

app = app.replace(badEnd, `</section>`);

fs.writeFileSync('src/App.tsx', app);
console.log('Fixed hero');
