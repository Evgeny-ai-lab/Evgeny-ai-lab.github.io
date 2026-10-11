const copy={
  "ru": {
    "kicker": "STOCK INSIGHTS / ИССЛЕДОВАНИЕ ТЕМ ДЛЯ СТОКОВ",
    "title": "Поиск перспективных тем для стоковых изображений",
    "intro": "Stock Insights помогает выбирать темы для генерации изображений, предназначенных для продажи на стоках. Приложение собирает публичные сигналы интереса, оценивает актуальность сюжетов и показывает основания для выбора. Отобранные темы вместе с визуальными заданиями можно передать в генератор.",
    "status": "Работающее приложение · Проверено на реальных данных",
    "taskTitle": "Выбирать темы до начала генерации",
    "task": "Для производства стокового контента нужен не просто список идей, а обоснованный выбор: какие сюжеты актуальны сейчас, где растёт интерес и какие темы стоит подготовить к ближайшим событиям. Ручная проверка нескольких площадок занимает время, а отдельный популярный запрос ещё не даёт полной картины.\n\nЗадача — объединить доступные сигналы, расставить приоритеты и превратить исследование в конкретные задания для генерации. Цель такого отбора — направлять производство на перспективные темы для продажи на стоках.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Собирает основания для выбора",
        "Объединяет публичные материалы стоковых площадок, поисковые и визуальные тренды, новостные упоминания и просмотры статей. Сохраняет источник и дату каждого наблюдения."
      ],
      [
        "Выделяет конкретные сюжеты",
        "Из собранных материалов извлекает предметы и действия. Вместо общих направлений формирует короткие английские темы, пригодные для подготовки изображений."
      ],
      [
        "Расставляет приоритеты",
        "Учитывает свежесть, динамику интереса, независимые источники и визуальные сигналы. Карточка раскрывает составляющие рейтинга, графики и исходные материалы."
      ],
      [
        "Готовит задания для генератора",
        "Добавляет английский визуальный контекст и выгружает выбранные темы или партии в CSV. История экспорта помогает не повторять уже подготовленные задания."
      ]
    ],
    "interactiveTitle": "Почему тема попала в подборку",
    "interactive": "Выбор опирается на несколько оснований: актуальные упоминания, изменение интереса и подтверждение в независимых источниках. В карточке можно проверить вклад каждого сигнала и изучить динамику.\n\nРейтинг помогает выбрать темы для дальнейшей работы, но не является вероятностью продажи. Публичный интерес и количество результатов на стоках показываются отдельно от покупательского спроса.",
    "heroCaption": "Темы для генерации: конкретные сюжеты, приоритет исследования и основания из собранных материалов.",
    "explorerCaption": "Карточка solar panel: визуальный контекст, составляющие рейтинга и данные публичного стокового поиска.",
    "filteredCaption": "Обзор исследования: динамика доступных сигналов и темы с основаниями для выбора.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Несколько источников в одной системе",
        "Разные форматы приводятся к общей структуре. Исходные ответы сохраняются с адресом, временем и контрольной суммой, чтобы выводы можно было проверить."
      ],
      [
        "Динамика вместо случайного всплеска",
        "Новостное внимание сравнивается по завершённым четырёхнедельным окнам с учётом размера выборки. Неполная история или малая база не превращаются в уверенный показатель роста."
      ],
      [
        "Прозрачный рейтинг",
        "Отдельно учитываются свежесть, интерес и независимые источники. Повторный сигнал одной площадки не считается вторым подтверждением; словарный сюжет без актуальных оснований получает нулевой приоритет."
      ],
      [
        "Переход от анализа к производству",
        "Локальная языковая обработка выделяет темы, а визуальные правила формируют контекст. CSV Theme,Context совместим с All_Stock_GPT; партии сохраняются неизменно и учитываются при следующей выгрузке."
      ]
    ],
    "resultTitle": "Обоснованная подборка вместо генерации наугад",
    "result": "Исследование завершается конкретными темами и визуальными заданиями для производства контента. Можно отбирать сюжеты по имеющимся основаниям, проверять динамику и планировать подготовку изображений к событиям.\n\nЭкспорт связывает анализ с генератором: выбранная подборка переносится в CSV без ручного составления каждого задания. Само приложение исследует темы; генерация и результаты продаж находятся за пределами этого процесса.",
    "dropsCaption": "Календарь и план: ближайшие события на выбранных рынках и сроки подготовки контента.",
    "proofTitle": "Проверка работоспособности",
    "proof": "33 автоматических теста проверяют обработку источников, расчёты, рейтинг, экспорт и обработку ошибок. Production-сборка интерфейса успешно выполнена.\n\nВ браузере проверены каталог, поиск, карточка темы, обзор, календарь и мобильное отображение. Формат CSV ранее проверен загрузчиком All_Stock_GPT без запуска генерации. На странице представлены реальные экраны работающего приложения.",
    "stack": [
      [
        "Python · FastAPI · SQLite",
        "Сборщики, серверная логика, история наблюдений и партии экспорта."
      ],
      [
        "HTTPX · публичные данные",
        "Получение материалов, встроенного JSON, поисковых показателей и временных рядов."
      ],
      [
        "spaCy · WordNet",
        "Извлечение конкретных сюжетов и локальная языковая обработка без внешней LLM."
      ],
      [
        "React · TypeScript · ECharts",
        "Интерфейс исследования, фильтры, карточки и графики."
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
    "intro": "Stock Insights helps select topics for generating images intended for sale on stock platforms. It gathers public interest signals, assesses topic relevance and shows the evidence behind each choice. Selected topics and visual briefs can be exported to an image generator.",
    "status": "Working application · Checked with real data",
    "taskTitle": "Choose topics before generating images",
    "task": "Stock content production needs more than a list of ideas: it needs evidence of which subjects are relevant, where interest is growing and what to prepare for upcoming events. Checking multiple platforms manually takes time, while a single popular query does not reveal the full picture.\n\nThe task was to combine available signals, prioritize subjects and turn research into concrete generation briefs. The aim is to focus production on promising topics for stock sales.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Collects evidence",
        "Combines public stock-platform materials, search and visual trends, news mentions and article views. Retains the source and date of each observation."
      ],
      [
        "Extracts concrete subjects",
        "Identifies objects and activities in collected materials. Produces short English topics for image production rather than broad content categories."
      ],
      [
        "Prioritizes topics",
        "Considers freshness, interest trends, independent sources and visual signals. Topic cards reveal scoring components, charts and source materials."
      ],
      [
        "Prepares generation briefs",
        "Adds English visual context and exports selected topics or batches as CSV. Export history helps avoid repeating previously prepared briefs."
      ]
    ],
    "interactiveTitle": "Why a topic was shortlisted",
    "interactive": "Selection draws on current mentions, changes in interest and independent supporting sources. Each topic card shows how signals contribute to its score and provides access to the underlying trends.\n\nThe score prioritizes further research; it is not a probability of sale. Public interest and stock search-result counts remain separate from buyer demand.",
    "heroCaption": "Generation topics: concrete subjects, research priority and evidence from collected materials; Russian interface.",
    "explorerCaption": "Solar panel topic card: visual brief, scoring components and public stock-search data; Russian interface.",
    "filteredCaption": "Research overview: available signal trends and topics with supporting evidence; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Multiple sources in one system",
        "Different formats are normalized into a common structure. Raw responses retain URLs, timestamps and checksums so conclusions can be traced back to evidence."
      ],
      [
        "Trends rather than isolated spikes",
        "News attention is compared across complete four-week windows, accounting for sample size. Incomplete history or a small baseline is not presented as reliable growth."
      ],
      [
        "Transparent prioritization",
        "Freshness, interest and independent sources are scored separately. Duplicate platform signals do not count as independent confirmation; dictionary-only subjects without current evidence receive zero priority."
      ],
      [
        "From research to production",
        "Local language processing extracts topics, while visual rules provide context. Theme,Context CSV is compatible with All_Stock_GPT; immutable export batches inform subsequent selections."
      ]
    ],
    "resultTitle": "Evidence-based selection instead of guessing",
    "result": "Research produces concrete topics and visual briefs for content production. Users can select subjects based on available evidence, inspect trends and plan image preparation around upcoming events.\n\nCSV export connects research to the generator without manually writing every brief. The application researches topics; image generation and sales results are outside this workflow.",
    "dropsCaption": "Calendar and plan: upcoming events across selected markets and content preparation dates; Russian interface.",
    "proofTitle": "Functional verification",
    "proof": "33 automated tests cover source processing, calculations, scoring, export and error handling. The production frontend build completed successfully.\n\nBrowser checks covered the catalog, search, topic card, overview, calendar and mobile display. CSV compatibility was previously checked with the All_Stock_GPT loader without generating images. The page shows actual screens of the running application.",
    "stack": [
      [
        "Python · FastAPI · SQLite",
        "Collectors, server logic, observation history and export batches."
      ],
      [
        "HTTPX · public data",
        "Retrieving materials, embedded JSON, search metrics and time series."
      ],
      [
        "spaCy · WordNet",
        "Concrete subject extraction and local language processing without an external LLM."
      ],
      [
        "React · TypeScript · ECharts",
        "Research interface, filters, topic cards and charts."
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
