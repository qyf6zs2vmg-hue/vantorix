const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldTerms = `<h1 className="text-4xl md:text-5xl font-black text-theme-primary mb-4 tracking-tight">Условия оказания услуг Vantorix</h1>
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
          </div>`;

const newTerms = `<h1 className="text-4xl md:text-5xl font-black text-theme-primary mb-4 tracking-tight">Условия использования Vantorix</h1>
          <p className="text-theme-secondary mb-12">Дата вступления в силу: [03.05.2026]</p>

          <div className="prose prose-stone prose-lg max-w-none text-theme-secondary">
            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">1. Общие положения</h3>
            <p>Настоящие Условия регулируют использование цифровых продуктов и систем Vantorix. Используя наши продукты, вы полностью соглашаетесь с данными условиями.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">2. Описание сервиса</h3>
            <p>Vantorix является продуктовой компанией. Мы разрабатываем собственные цифровые продукты, веб-сервисы, приложения и бизнес-системы, и предоставляем пользователям доступ к ним. Мы не оказываем услуги по заказной разработке сайтов для третьих лиц.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">3. Аккаунт пользователя</h3>
            <p>При регистрации и использовании аккаунта пользователь обязуется:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>предоставлять достоверные данные;</li>
              <li>не передавать доступ к аккаунту третьим лицам;</li>
              <li>самостоятельно обеспечивать безопасность и сохранность своих учетных данных.</li>
            </ul>
            <p>Vantorix не несёт ответственности за действия, совершённые с использованием вашего аккаунта.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">4. Использование сервиса</h3>
            <p>При работе с нашими продуктами запрещается:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>использовать сервисы для любой незаконной деятельности;</li>
              <li>совершать попытки взлома, декомпиляции или обхода систем защиты;</li>
              <li>намеренно нарушать стабильную работу платформы и её инфраструктуры.</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">5. Доступ к продуктам</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Доступ к продуктам предоставляется через механизмы платформы (например, по пригласительным ссылкам).</li>
              <li>Владельцы бизнеса и администраторы самостоятельно управляют доступом своих сотрудников и клиентов.</li>
              <li>Vantorix выступает исключительно как поставщик программного обеспечения и не несёт ответственности за любые взаимоотношения или действия между бизнесом и клиентами.</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">6. Интеграции (1С, Bitrix24 и др.)</h3>
            <p>Наши продукты поддерживают интеграцию с внешними сервисами, такими как 1C и Bitrix24. Vantorix не несёт ответственности за доступность, корректность работы или изменения в сторонних сервисах, а также за поведение сторонних API.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">7. Ограничение ответственности</h3>
            <p>Наши продукты предоставляются по принципу "как есть" (as is). Vantorix не гарантирует:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>полное отсутствие программных ошибок;</li>
              <li>бесперебойную работу инфраструктуры;</li>
              <li>что продукты будут полностью соответствовать вашим индивидуальным ожиданиям.</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">8. Изменение сервиса</h3>
            <p>Развивая наши продукты, мы оставляем за собой право:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>изменять или улучшать функционал продуктов;</li>
              <li>добавлять новые или удалять возможности;</li>
              <li>обновлять продукты без предварительного уведомления пользователей.</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">9. Прекращение доступа</h3>
            <p>Мы можем ограничить доступ к вашему аккаунту в случае:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>нарушения настоящих Условий;</li>
              <li>выявления подозрительной или мошеннической активности.</li>
            </ul>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">10. Изменения условий</h3>
            <p>Настоящие Условия могут обновляться. Продолжение использования наших продуктов после внесения изменений означает ваше полное согласие с новыми условиями.</p>

            <h3 className="text-2xl font-bold text-theme-primary mt-8 mb-4">11. Контакты</h3>
            <p>Связь: telegram</p>
          </div>`;

code = code.replace(oldTerms, newTerms);

// Change "Условия оказания услуг" link to "Условия использования"
code = code.replace(/Условия оказания услуг/g, 'Условия использования');

fs.writeFileSync('src/App.tsx', code);
