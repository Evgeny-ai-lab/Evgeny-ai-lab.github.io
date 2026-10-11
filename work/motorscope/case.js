const copy={
  "ru": {
    "kicker": "MOTORSCOPE / МОНИТОРИНГ И АНАЛИТИКА АВТОРЫНКА",
    "title": "Мониторинг рынка автомобилей и мотоциклов",
    "intro": "MotorScope — приложение для автоматического мониторинга и анализа рынка автомобилей и мотоциклов на av.by. По заданным моделям и параметрам система отслеживает новые и снятые объявления, изменения цен и продолжительность размещения. Накопленная история и интерактивные графики позволяют сравнивать рыночные сегменты, изучать динамику предложения и находить закономерности рынка.",
    "heroCaption": "Обзор Ford Bronco Sport: цены, количество объявлений, изменения предложения и сроки размещения. Реальный экран работающего приложения.",
    "status": "Готовый проект · Протестирован заказчиком",
    "taskTitle": "Понимать, как меняется рынок интересующих моделей",
    "task": "Заказчику требовался инструмент для постоянного наблюдения за рынком определённых моделей автомобилей и мотоциклов с учётом года выпуска, двигателя и других характеристик.\n\nВажно было отслеживать не только текущие цены, но и изменения рынка: сколько новых объявлений появляется, какие предложения исчезают с площадки, как долго они размещаются и насколько часто продавцы снижают стоимость.\n\nСравнение по пробегу, году выпуска и городу должно было помогать анализировать отдельные сегменты без ежедневного ручного поиска и ведения таблиц.\n\nОтдельное требование — сохранять объявления вместе с характеристиками и фотографиями даже после их исчезновения с av.by.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Сохраняет условия поиска",
        "Пользователь выбирает параметры на av.by и добавляет готовую ссылку. Две поисковые выдачи можно объединить в одну группу без дублирования объявлений."
      ],
      [
        "Отслеживает изменения",
        "Проверки запускаются вручную или автоматически каждые 24 часа при работающем приложении. Система фиксирует новые и снятые объявления, изменения цен и статусов."
      ],
      [
        "Анализирует рыночные сегменты",
        "Приложение показывает цены, сроки размещения, новые и снятые объявления, а также снижение стоимости. Интерактивные фильтры по году, пробегу, городу и бюджету позволяют сравнивать отдельные сегменты рынка."
      ],
      [
        "Архивирует объявления",
        "Система сохраняет локальные копии объявлений с описанием, характеристиками и фотографиями. Они остаются доступными после исчезновения с площадки вместе с историей цен и наблюдений."
      ]
    ],
    "interactiveTitle": "Сравнение рыночных сегментов",
    "interactive": "Интерактивные графики позволяют не только просматривать статистику, но и управлять аналитикой. Выбор года выпуска, города, ценового диапазона или срока размещения автоматически пересчитывает показатели.\n\nФильтры можно комбинировать, чтобы сравнивать стоимость, количество и движение объявлений в отдельных рыночных сегментах.",
    "explorerCaption": "Распределение предложений по годам выпуска и городам. Выбор на графике автоматически обновляет аналитику.",
    "filteredCaption": "Анализ цен и сроков размещения. Несколько диапазонов можно выбирать одновременно.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Точное соответствие исходным фильтрам",
        "Ссылка площадки сохраняется целиком. Система проверяет марку, модель, поколение и числовые диапазоны, а объём двигателя приводит к единым единицам измерения. Это исключает попадание посторонних моделей в статистику."
      ],
      [
        "Быстрый сбор с браузерным резервом",
        "Реализован прямой сбор структурированных данных av.by без открытия страниц в браузере. Система проверяет полноту полученной выдачи, а при неподдерживаемых параметрах или сбоях использует Playwright в качестве резерва. Сопоставление с реальными поисками подтвердило соответствие объявлений и характеристик данным площадки."
      ],
      [
        "Защита истории от неполных проверок",
        "Ошибки загрузки и неполные результаты не считаются исчезновением объявлений. Снятие фиксируется только после повторного отсутствия при полных проверках с интервалом не менее шести часов. Количество уникальных объявлений дополнительно сверяется с данными площадки, чтобы исключить искажение статистики."
      ],
      [
        "Наблюдения вместо перезаписи данных",
        "Каждая проверка сохраняет цены и характеристики объявлений на момент сбора. Поисковые запросы имеют независимую историю, даже если содержат одинаковые объявления. Очередь и время следующей проверки хранятся в SQLite, а после перезапуска приложения выполняются просроченные проверки."
      ],
      [
        "Снижение цены отдельно от движения курса",
        "Долларовая цена сохраняется напрямую из данных площадки. Исторические значения не пересчитываются по текущему курсу, поэтому валютные колебания не воспринимаются как снижение стоимости продавцом. Для каждого снижения фиксируются прежняя и новая цены, сумма и процент изменения."
      ],
      [
        "Единая выборка для всей аналитики",
        "Все фильтры работают совместно и применяются к статистике, графикам, истории и экспорту CSV. Пользователь может сравнивать конкретные годы выпуска, диапазоны пробега и города, а затем изучать объявления, на которых основаны рассчитанные показатели."
      ]
    ],
    "resultTitle": "Данные для оценки рынка и планирования закупок",
    "result": "Заказчик получил инструмент для регулярного анализа интересующих моделей автомобилей и мотоциклов. Приложение позволяет сравнивать цены, сроки размещения, появление и снятие объявлений, частоту снижения стоимости и различия между рыночными сегментами.\n\nНакопленная история показывает, как меняются цены и объём предложения, помогая принимать более обоснованные решения при планировании закупок.\n\nСбор данных, расчёты и архивирование объявлений выполняются автоматически, сокращая необходимость постоянных проверок площадки и ручного ведения таблиц.",
    "dropsCaption": "История медианной цены и количества объявлений. Данные обновляются при каждой проверке.",
    "historyCaption": "Анализ зависимости цены от пробега и года выпуска. Активные и снятые объявления представлены на одном графике.",
    "proof": "104 автоматических теста проверяют серверную логику: сбор и обработку данных, фильтрацию, историю наблюдений, изменения цен и обработку ошибок. Дополнительно проверены 30 браузерных сценариев.\n\nПроводилось ручное тестирование функциональности и пользовательских сценариев. Заказчик также протестировал приложение на реальных объявлениях av.by, проверив корректность мониторинга и аналитики.\n\nНа странице представлены реальные экраны работающего приложения.",
    "stack": [
      [
        "Python · FastAPI",
        "Сервер приложения, обработка данных и управление очередью проверок."
      ],
      [
        "SQLite",
        "Хранение поисковых запросов, истории наблюдений, событий и расписания проверок."
      ],
      [
        "curl_cffi · Playwright",
        "Получение структурированных данных площадки и резервный сбор через браузер."
      ],
      [
        "JavaScript · SVG",
        "Пользовательский интерфейс, интерактивные графики и фильтрация данных."
      ]
    ],
    "back": "← Все работы",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "proofTitle": "Проверка работоспособности",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение"
  },
  "en": {
    "kicker": "MOTORSCOPE / VEHICLE MARKET MONITORING & ANALYTICS",
    "title": "Car and motorcycle market monitoring",
    "intro": "MotorScope is an application for automated monitoring and analysis of the car and motorcycle market on av.by. For selected models and criteria, it tracks new and removed listings, price changes and listing duration. Recorded history and interactive charts support comparisons between market segments, supply analysis and identification of market patterns.",
    "heroCaption": "Ford Bronco Sport overview: prices, listing counts, supply changes and listing duration. Actual screen of the working application.",
    "status": "Completed project · Client-tested",
    "taskTitle": "Understand how the market for selected models changes",
    "task": "The client needed a tool to continuously monitor specific car and motorcycle models by production year, engine and other specifications.\n\nBeyond current prices, it was important to track market changes: new listings, offers leaving the source website, listing duration and how often sellers reduce prices.\n\nComparisons by mileage, production year and location needed to support segment analysis without daily manual searches or spreadsheets.\n\nA separate requirement was to retain listings, specifications and photographs after their removal from av.by.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Save search criteria",
        "Users select parameters on av.by and paste the resulting URL. Two search results can be combined into one group without duplicate listings."
      ],
      [
        "Track changes",
        "Checks run manually or automatically every 24 hours while the application is running. The system records new and removed listings, prices and status changes."
      ],
      [
        "Analyse market segments",
        "The application shows prices, listing duration, new and removed listings, and price reductions. Interactive year, mileage, location and budget filters support market-segment comparisons."
      ],
      [
        "Archive listings",
        "The system saves local copies with descriptions, specifications and photographs. These remain available after removal from the source website, alongside price and observation history."
      ]
    ],
    "interactiveTitle": "Compare market segments",
    "interactive": "Interactive charts provide both statistics and analysis controls. Selecting a production year, location, price range or listing duration automatically recalculates the metrics.\n\nFilters can be combined to compare prices, listing counts and activity across market segments.",
    "explorerCaption": "Supply by production year and location. Chart selections automatically update the analysis.",
    "filteredCaption": "Price and listing-duration analysis. Multiple ranges can be selected simultaneously.",
    "engineeringTitle": "Key development decisions",
    "engineering": [
      [
        "Preserve the original search criteria",
        "The complete source URL is retained. The system checks make, model, generation and numeric ranges, and normalises engine capacity to common units. This prevents unrelated models from entering the statistics."
      ],
      [
        "Fast collection with a browser fallback",
        "Direct collection of structured av.by data was implemented without opening pages in a browser. The system checks completeness and uses Playwright as a fallback for unsupported parameters or failures. Comparison with real searches confirmed that listings and specifications match the source data."
      ],
      [
        "Protect history from incomplete checks",
        "Loading errors and incomplete results do not count as disappearing listings. Removal is recorded only after repeated absence in complete checks at least six hours apart. Unique listing counts are also checked against the source to prevent distorted statistics."
      ],
      [
        "Record observations instead of overwriting data",
        "Each check stores prices and specifications at the time of collection. Searches have independent histories even when they contain the same listings. SQLite stores the queue and next check time; overdue checks run after an application restart."
      ],
      [
        "Separate price reductions from exchange-rate changes",
        "Dollar prices are stored directly from the source. Historical values are not recalculated using the current rate, so currency fluctuations do not become seller price reductions. Each reduction records the previous and new prices, amount and percentage."
      ],
      [
        "One selection across all analysis",
        "Filters work together across statistics, charts, history and CSV exports. Users can compare specific production years, mileage ranges and locations, then inspect the listings behind the calculated metrics."
      ]
    ],
    "resultTitle": "Data for market assessment and purchasing plans",
    "result": "The client received a tool for regular analysis of selected car and motorcycle models. The application compares prices, listing duration, arrivals and removals, frequency of price reductions and differences between market segments.\n\nAccumulated history shows changes in prices and supply, supporting more informed purchasing plans.\n\nData collection, calculations and listing archiving run automatically, reducing repeated source checks and manual spreadsheets.",
    "dropsCaption": "Median price and listing-count history. Data is updated with each check.",
    "historyCaption": "Price in relation to mileage and production year. Active and removed listings appear on the same chart.",
    "proof": "104 automated tests cover server logic: data collection and processing, filters, observation history, price changes and error handling. Verification also covered 30 browser scenarios.\n\nFunctionality and user workflows were tested manually. The client also tested the application using real av.by listings, checking the monitoring and analytics.\n\nThis page shows actual screens of the working application.",
    "stack": [
      [
        "Python · FastAPI",
        "Application server, data processing and check-queue management."
      ],
      [
        "SQLite",
        "Searches, observation history, events and check schedules."
      ],
      [
        "curl_cffi · Playwright",
        "Structured source data and fallback browser collection."
      ],
      [
        "JavaScript · SVG",
        "User interface, interactive charts and data filtering."
      ]
    ],
    "back": "← All projects",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "proofTitle": "Functional verification",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
