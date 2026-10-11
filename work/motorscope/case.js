const copy={
  "ru": {
    "kicker": "MOTORSCOPE / МОНИТОРИНГ И АНАЛИТИКА АВТОРЫНКА",
    "title": "Мониторинг рынка автомобилей и мотоциклов",
    "intro": "MotorScope помогает исследовать рынок выбранных автомобилей и мотоциклов на av.by. По заданным моделям и параметрам приложение отслеживает цены, появление и уход объявлений, сроки предложения и снижения стоимости. История наблюдений и интерактивные графики позволяют сравнивать рыночные сегменты и оценивать их востребованность.",
    "heroCaption": "Обзор Ford Bronco Sport: цены, объём предложения, новые объявления, сроки и снижения стоимости. Реальный экран работающего приложения.",
    "status": "Готовый проект · Протестирован заказчиком",
    "taskTitle": "Понимать, какие модели и характеристики востребованы на рынке",
    "task": "Требовался инструмент для постоянного наблюдения за рынком конкретных автомобилей и мотоциклов: с нужными годами выпуска, двигателями и другими параметрами. Важно видеть, сколько предложений появляется за выбранный период, как быстро они уходят, по каким ценам выставляются и насколько часто продавцы снижают стоимость. Сравнение по пробегу, году и городу должно помогать оценивать востребованность разных сегментов — без ежедневного ручного просмотра выдачи и ведения таблиц. Объявления необходимо сохранять, чтобы анализировать их и после исчезновения с площадки.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Сохраняет условия поиска",
        "Пользователь выбирает параметры на av.by и добавляет готовую ссылку. В одну группу можно объединить две выдачи без повторяющихся объявлений."
      ],
      [
        "Проверяет изменения",
        "Сбор запускается вручную или каждые 24 часа при работающем приложении. Новые объявления, цены и статусы сохраняются отдельно для каждого поиска."
      ],
      [
        "Анализирует выбранный сегмент",
        "Показывает цены, новые и снятые объявления, сроки предложения и снижения стоимости. Фильтры по году, пробегу, городу и бюджету пересчитывают аналитику."
      ],
      [
        "Автоматически сохраняет объявления",
        "Для собранных объявлений создаются локальные копии с описанием, характеристиками и фотографиями. Они остаются доступны после ухода с площадки — вместе с историей наблюдений и цен."
      ]
    ],
    "interactiveTitle": "Сравнение рыночных сегментов",
    "interactive": "Графики служат инструментами анализа: нажатие на год, город, ценовой диапазон или срок с публикации задаёт выборку и пересчитывает её показатели. Несколько условий можно применять вместе, чтобы сравнивать цены, сроки предложения и движение объявлений в конкретном сегменте с общей группой.",
    "explorerCaption": "Сравнение предложения по годам и городам. Выбор на графиках задаёт сегмент для дальнейшего анализа.",
    "filteredCaption": "Распределение цен и возраст предложения. Нажатие на столбец цены или диапазон дней пересчитывает статистику; можно выбрать несколько диапазонов одновременно.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Точное соответствие исходным фильтрам",
        "Ссылка площадки сохраняется целиком. Проверяются марка, модель, поколение и числовые диапазоны; объём двигателя приводится к единым единицам. Это исключает подмешивание посторонних моделей в статистику."
      ],
      [
        "Быстрый сбор с браузерным резервом",
        "Найден и реализован способ получать структурированные данные av.by напрямую, без загрузки страниц в браузере. Приложение использует запросы самой площадки и проверяет полноту полученной выдачи. Playwright сохранён как резерв для неподдерживаемых параметров и сбоев прямого сбора. Проверки на реальных поисках подтвердили соответствие объявлений и их характеристик данным площадки."
      ],
      [
        "Защита истории от неполных проверок",
        "Ошибка загрузки не означает, что объявления исчезли. Уход фиксируется только после повторного отсутствия в полных проверках с интервалом не менее шести часов. Число уникальных объявлений сверяется со счётчиком источника — неполная выдача не искажает историю движения рынка."
      ],
      [
        "Наблюдения вместо перезаписи данных",
        "Каждый проход сохраняет цены и характеристики на тот момент. Поиски имеют независимую историю, даже если в них попало одно объявление. Очередь и время следующей проверки хранятся в SQLite; после перезапуска выполняются просроченные проверки."
      ],
      [
        "Снижение цены отдельно от движения курса",
        "Долларовая цена сохраняется напрямую из данных площадки. Прошлые значения не пересчитываются текущим курсом, а валютные колебания не выдаются за скидку продавца. Для каждого снижения доступны прежняя цена, новая цена, сумма и процент."
      ],
      [
        "Единая выборка для всей аналитики",
        "Фильтры пересчитывают статистику, графики, историю и CSV одного сегмента. Параметры работают совместно: можно сравнивать конкретные годы, пробеги и города, затем изучать объявления, на которых основаны показатели."
      ]
    ],
    "resultTitle": "Данные для оценки рынка и планирования закупок",
    "result": "Заказчик получил инструмент для сравнения интересующих моделей и рыночных сегментов: по ценам, срокам предложения, интенсивности появления и ухода объявлений, частоте снижения стоимости. Накопленная история помогает оценивать оборачиваемость и выбирать направления для дальнейших закупок. Сбор данных, расчёты и сохранение объявлений выполняются автоматически — вместо постоянных проверок площадки и ручного ведения аналитики.",
    "dropsCaption": "Динамика медианной цены и объёма предложения выбранной модели. Каждый срез пополняет историю рынка.",
    "historyCaption": "Пробег и его связь с годом и ценой. Столбцы слева задают диапазоны для анализа; точки справа открывают отдельные объявления. Текущие и снятые предложения можно сравнивать на одном графике.",
    "proof": "104 автоматических теста проверяют серверную логику: сбор и обработку данных, фильтрацию, историю наблюдений, цены и обработку ошибок. Дополнительно проверены 30 браузерных сценариев.\n\nПроводилось ручное тестирование функциональности и пользовательских сценариев. Заказчик также протестировал приложение на реальных объявлениях и проверил работу мониторинга и аналитики.\n\nНа странице представлены реальные экраны работающего приложения.",
    "stack": [
      [
        "Python · FastAPI",
        "Сервер приложения, обработка данных и очередь проверок."
      ],
      [
        "SQLite",
        "История наблюдений, поиски, события и расписание."
      ],
      [
        "curl_cffi · Playwright",
        "Получение структурированных данных и браузерный резерв."
      ],
      [
        "JavaScript · SVG",
        "Интерактивные графики, фильтры и пользовательский интерфейс."
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
    "intro": "MotorScope helps analyse the market for selected cars and motorcycles on av.by. For specified models and criteria, it tracks prices, new and removed listings, time on the market and price reductions. Recorded observations and interactive charts support comparisons between market segments and their relative appeal.",
    "heroCaption": "Ford Bronco Sport overview: prices, supply, new listings, time on the market and price reductions. Actual working application screen; Russian interface.",
    "status": "Completed project · Client-tested",
    "taskTitle": "Understand which models and specifications are sought after",
    "task": "The task was to monitor the market for specific cars and motorcycles with selected production years, engines and other criteria. Users needed to see how many listings appear over a chosen period, how quickly they leave the market, their asking prices and how often sellers reduce them. Comparisons by mileage, year and location should support an assessment of different market segments without daily manual checks or spreadsheets. Listings also needed to remain available for analysis after disappearing from the source website.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Save search criteria",
        "Users select filters on av.by and paste the resulting URL. Two searches can be combined into one group without duplicate listings."
      ],
      [
        "Check for changes",
        "Collection runs manually or every 24 hours while the application is running. Each search keeps its own new listings, prices and statuses."
      ],
      [
        "Analyse a selected segment",
        "Shows prices, new and removed listings, time on the market and reductions. Year, mileage, location and budget filters recalculate the analysis."
      ],
      [
        "Archive listings automatically",
        "Collected listings receive local copies with descriptions, specifications and photographs. They remain accessible after leaving the source website, alongside observation and price history."
      ]
    ],
    "interactiveTitle": "Compare market segments",
    "interactive": "Charts act as analysis controls: clicking a year, location, price range or listing-age band defines a selection and recalculates its metrics. Criteria can be combined to compare prices, time on the market and listing activity within a segment against the full group.",
    "explorerCaption": "Supply compared by year and location. Chart selections define a segment for further analysis.",
    "filteredCaption": "Price distribution and listing age. Clicking a price column or day range recalculates statistics; multiple ranges can be selected together.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Preserve the original search criteria",
        "The complete source URL is retained. Make, model, generation and numeric ranges are checked, with engine capacity normalised to common units. Unrelated models cannot silently enter the statistics."
      ],
      [
        "Fast collection with a browser fallback",
        "A direct method for retrieving structured av.by data was identified and implemented, without loading pages in a browser. The application uses the source website’s own requests and checks the completeness of the results. Playwright remains a fallback for unsupported parameters and failed direct collection. Checks on real searches confirmed that listings and specifications matched the source data."
      ],
      [
        "Protect history from incomplete checks",
        "A loading error does not mean listings have disappeared. Removal requires repeated absence in complete checks at least six hours apart. Unique listing counts are checked against the source count, preventing incomplete results from distorting market history."
      ],
      [
        "Record observations instead of overwriting data",
        "Each collection stores the prices and specifications observed at that time. Searches retain independent histories even when they share a listing. SQLite stores the queue and next check time; overdue checks resume after restart."
      ],
      [
        "Separate price reductions from exchange-rate changes",
        "Dollar prices are stored directly from the source. Historical values are not recalculated using today’s exchange rate, and currency movements do not become seller discounts. Each reduction includes the old and new prices, amount and percentage."
      ],
      [
        "One selection across all analysis",
        "Filters recalculate statistics, charts, history and CSV for the same segment. Criteria work together to compare specific years, mileages and locations, with the underlying listings available for inspection."
      ]
    ],
    "resultTitle": "Data for market assessment and purchasing plans",
    "result": "The client received a tool for comparing selected models and market segments by prices, time on the market, listing arrivals and departures, and frequency of price reductions. Accumulated history supports an assessment of market turnover and future purchasing priorities. Data collection, calculations and listing archiving run automatically, replacing repeated source checks and manual analysis.",
    "dropsCaption": "Median asking price and supply over time for the selected model. Each collection adds a new market observation.",
    "historyCaption": "Mileage and its relationship to year and price. Columns on the left select analysis ranges; points on the right open individual listings. Current and removed listings can be compared in the same chart.",
    "proof": "104 automated tests cover server logic: collection and processing, filters, observation history, prices and error handling. Verification also covered 30 browser scenarios.\n\nFunctionality and user workflows were tested manually. The client additionally tested the application against real listings and checked its monitoring and analytics.\n\nThis page shows actual screens of the working application.",
    "stack": [
      [
        "Python · FastAPI",
        "Application server, data processing and scheduled checks."
      ],
      [
        "SQLite",
        "Observation history, searches, events and schedule."
      ],
      [
        "curl_cffi · Playwright",
        "Structured data collection and browser fallback."
      ],
      [
        "JavaScript · SVG",
        "Interactive charts, filters and user interface."
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
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(e.dataset.t==='proof'){e.replaceChildren(...t.proof.split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
