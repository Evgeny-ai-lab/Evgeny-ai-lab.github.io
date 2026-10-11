const copy={
  "ru": {
    "kicker": "STOCK INSIGHTS / ИССЛЕДОВАНИЕ ТЕМ ДЛЯ СТОКОВ",
    "title": "Поиск перспективных тем для стоковых изображений",
    "intro": "Stock Insights — приложение для поиска перспективных тем перед генерацией изображений на продажу в фотостоках. Система автоматически собирает и анализирует данные из открытых источников, выявляет актуальные тенденции и предлагает конкретные темы с описанием визуального контекста. Готовые задания можно экспортировать для дальнейшей генерации.",
    "status": "Работающее приложение · Проверено на реальных данных",
    "taskTitle": "Определить, какие изображения стоит создавать для фотостоков",
    "task": "Для успешной продажи изображений на фотостоках важно не только качество генерации, но и правильный выбор тем. Необходимо понимать, какие сюжеты набирают популярность, что привлекает внимание аудитории сейчас и какие направления могут стать актуальными в ближайшем будущем.\n\nРучное исследование поисковых трендов, стоковых площадок, новостей и сезонных событий требует значительного времени.\n\nЗадача — автоматизировать сбор и анализ данных из разных источников, чтобы находить перспективные темы и превращать результаты исследования в конкретные задания для генерации изображений.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Собирает данные из разных источников",
        "Анализирует публичные данные фотостоков, поисковые и визуальные тренды, новости и интерес к публикациям. Учитывает сезонность, предстоящие события и актуальность информации."
      ],
      [
        "Находит перспективные темы",
        "Из собранных материалов выделяет конкретные объекты и сюжеты, которые можно использовать для создания изображений. Формирует краткие названия тем на английском языке вместо общих направлений."
      ],
      [
        "Оценивает актуальность и расставляет приоритеты",
        "Сопоставляет динамику интереса, свежесть информации и подтверждения из независимых источников. Каждая тема получает рейтинг с возможностью изучить основания для оценки."
      ],
      [
        "Подготавливает задания для генерации",
        "Для каждой темы создаёт визуальный контекст — описание того, что и как должно быть изображено. Выбранные темы и описания экспортируются в CSV для последующей генерации. История экспорта помогает избегать повторов."
      ]
    ],
    "interactiveTitle": "Почему тема попала в подборку",
    "interactive": "Каждая рекомендация подкрепляется доступными данными: актуальными упоминаниями, динамикой интереса и подтверждениями из нескольких источников. В карточке темы можно изучить составляющие рейтинга, графики и исходные материалы.\n\nРейтинг отражает приоритетность темы для дальнейшей работы, а не гарантирует продажи. Публичный интерес и количество изображений на стоках рассматриваются как ориентиры, а не как прямые показатели покупательского спроса.",
    "heroCaption": "Темы для генерации: рейтинг перспективности, визуальный контекст и основания для выбора.",
    "explorerCaption": "Карточка темы: визуальный контекст, составляющие рейтинга и данные источников.",
    "filteredCaption": "Обзор исследования: динамика интереса, актуальные направления и основания для выбора.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Объединение нескольких источников",
        "Данные разных форматов приводятся к единой структуре. Сохраняются ссылки, даты и исходные материалы, позволяющие проверить результаты анализа."
      ],
      [
        "Анализ динамики интереса",
        "Система сравнивает изменения интереса за последовательные четырёхнедельные периоды, учитывая объём данных. Это помогает отличать устойчивые тенденции от случайных всплесков."
      ],
      [
        "Прозрачная система оценки",
        "Рейтинг формируется из нескольких показателей: актуальности, динамики интереса и независимых подтверждений. Повторяющиеся сигналы не учитываются как отдельные доказательства."
      ],
      [
        "Интеграция с генерацией изображений",
        "Локальная языковая обработка выделяет темы, а набор визуальных правил формирует контекст. Экспорт в формате CSV (Theme, Context) совместим с All_Stock."
      ]
    ],
    "resultTitle": "От анализа данных к готовым идеям для генерации",
    "result": "Разработано приложение, которое превращает разрозненные данные из открытых источников в структурированную подборку перспективных тем для стоковых изображений.\n\nДля каждой темы доступны рейтинг, обоснование выбора и готовый визуальный контекст. Можно отслеживать тенденции, учитывать предстоящие события и планировать создание контента заранее.\n\nЭкспорт в CSV позволяет передавать выбранные темы в генератор без ручной подготовки заданий. Само приложение отвечает за исследование и подбор тем; генерация изображений и оценка фактических продаж выполняются отдельно.",
    "dropsCaption": "Календарь событий и планирование подготовки стокового контента.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Приложение проверено на реальных данных. Проведены 33 автоматических теста, охватывающих обработку источников, расчёты, рейтинг, экспорт и обработку ошибок.\n\nДополнительно вручную проверены основные функции, пользовательские сценарии и отображение на мобильных устройствах. Совместимость CSV проверена с загрузчиком All_Stock с запуском генерации изображений.\n\nНа странице представлены реальные экраны работающего приложения.",
    "stack": [
      [
        "Python · FastAPI · SQLite",
        "Автоматизированный сбор и обработка данных, серверная логика, хранение результатов исследований и истории экспорта."
      ],
      [
        "HTTPX · Public Data",
        "Получение информации из открытых источников, поисковых показателей и временных рядов."
      ],
      [
        "spaCy · WordNet",
        "Локальная обработка текста, извлечение конкретных тем и сюжетов без использования внешних LLM."
      ],
      [
        "React · TypeScript · ECharts",
        "Интерактивный интерфейс, поиск и фильтрация тем, визуализация аналитики и графиков."
      ]
    ],
    "back": "← Все работы",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение"
  },
  "en": {
    "kicker": "STOCK INSIGHTS / STOCK CONTENT RESEARCH",
    "title": "Finding promising topics for stock images",
    "intro": "Stock Insights finds promising topics before generating images for sale on stock platforms. It automatically gathers and analyzes open-source data, identifies current trends and suggests concrete topics with visual context. Prepared briefs can be exported for subsequent generation.",
    "status": "Working application · Checked with real data",
    "taskTitle": "Determine which images to create for stock platforms",
    "task": "Successful stock image sales depend on both generation quality and topic selection. It is important to understand which subjects are gaining popularity, what attracts attention now and which directions may become relevant in the near future.\n\nManually researching search trends, stock platforms, news and seasonal events takes substantial time.\n\nThe task was to automate data collection and analysis across sources, identify promising topics and turn research into concrete image-generation briefs.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Collects data from multiple sources",
        "Analyzes public stock-platform data, search and visual trends, news and interest in publications. Considers seasonality, upcoming events and information freshness."
      ],
      [
        "Finds promising topics",
        "Extracts concrete objects and subjects suitable for image creation. Produces short English topic names rather than broad directions."
      ],
      [
        "Assesses relevance and prioritizes",
        "Compares interest trends, information freshness and independent supporting sources. Each topic receives a score whose supporting evidence can be inspected."
      ],
      [
        "Prepares generation briefs",
        "Creates visual context for each topic: a description of what should be depicted and how. Selected topics and descriptions are exported as CSV for subsequent generation. Export history helps avoid repetition."
      ]
    ],
    "interactiveTitle": "Why a topic was shortlisted",
    "interactive": "Each recommendation is supported by available data: current mentions, interest trends and evidence from multiple sources. Topic cards reveal scoring components, charts and source materials.\n\nThe rating expresses a topic’s priority for further work; it does not guarantee sales. Public interest and stock image counts are reference signals rather than direct measures of buyer demand.",
    "heroCaption": "Generation topics: priority rating, visual context and evidence supporting selection; Russian interface.",
    "explorerCaption": "Topic card: visual context, scoring components and source data; Russian interface.",
    "filteredCaption": "Research overview: interest trends, current directions and evidence supporting selection; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Combining multiple sources",
        "Data in different formats is normalized into a common structure. Links, dates and source materials are retained so analytical results can be verified."
      ],
      [
        "Analyzing interest trends",
        "The system compares changes in interest across consecutive four-week periods, accounting for data volume. This helps distinguish sustained trends from isolated spikes."
      ],
      [
        "Transparent scoring",
        "The rating combines relevance, interest trends and independent confirmation. Repeated signals are not counted as separate evidence."
      ],
      [
        "Integration with image generation",
        "Local language processing extracts topics, while visual rules create context. CSV export in Theme, Context format is compatible with All_Stock."
      ]
    ],
    "resultTitle": "From data analysis to ready-to-use generation ideas",
    "result": "The application turns scattered open-source data into a structured selection of promising topics for stock images.\n\nEach topic includes a rating, supporting evidence and a prepared visual brief. Users can track trends, consider upcoming events and plan content production in advance.\n\nCSV export transfers selected topics to the generator without manually preparing briefs. The application researches and selects topics; image generation and assessment of actual sales are handled separately.",
    "dropsCaption": "Event calendar and planning for stock content preparation; Russian interface.",
    "proofTitle": "Functional verification",
    "proof": "The application has been checked with real data. 33 automated tests cover source processing, calculations, scoring, export and error handling.\n\nCore functionality, user workflows and mobile display were also tested manually. CSV compatibility was checked with the All_Stock loader, including image generation.\n\nThe page shows actual screens of the running application.",
    "stack": [
      [
        "Python · FastAPI · SQLite",
        "Automated data collection and processing, server logic, research results and export history."
      ],
      [
        "HTTPX · Public Data",
        "Retrieving open-source information, search metrics and time series."
      ],
      [
        "spaCy · WordNet",
        "Local text processing and extraction of concrete topics without external LLMs."
      ],
      [
        "React · TypeScript · ECharts",
        "Interactive interface, topic search and filtering, analytical charts and visualization."
      ]
    ],
    "back": "← All projects",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
