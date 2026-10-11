const copy={
  "ru": {
    "kicker": "MOTORSCOPE / МОНИТОРИНГ И АНАЛИТИКА АВТОРЫНКА",
    "title": "Мониторинг рынка автомобилей и мотоциклов",
    "intro": "MotorScope отслеживает объявления на av.by по выбранным пользователем параметрам. Приложение сохраняет историю цен, отмечает новые предложения и снижения стоимости, а интерактивные графики помогают сравнивать варианты по годам, пробегу и городу.",
    "heroCaption": "Обзор Ford Bronco Sport: предложение, цены и изменения по сохранённым наблюдениям. Реальный экран приложения, 11 октября 2026 года.",
    "status": "Рабочее приложение · Реальные данные av.by",
    "taskTitle": "Следить за нужными моделями, а не проверять выдачу заново",
    "task": "При поиске автомобиля или мотоцикла одного списка объявлений недостаточно. Важно понимать, какие варианты появились, где снизилась цена и как предложение меняется со временем. Задача — автоматизировать повторные проверки выбранных групп и собрать их историю в одном инструменте, чтобы не вести таблицы вручную и не сравнивать объявления по памяти.",
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
        "Показывает картину рынка",
        "Медиана цены, распределения и история помогают сравнивать предложения. Выбор года, города, бюджета или пробега пересчитывает показатели и список объявлений."
      ],
      [
        "Сохраняет нужные варианты",
        "Объявления можно добавить в избранное, открыть историю цены или выгрузить выборку в CSV. Локальные копии сохраняют описание, характеристики и фотографии."
      ]
    ],
    "interactiveTitle": "От общей статистики — к подходящим вариантам",
    "interactive": "Графики связаны с объявлениями: выбранные условия применяются вместе. Можно сравнить конкретный сегмент со всей группой и сразу перейти к его предложениям — без повторного сбора данных.",
    "explorerCaption": "Годы выпуска и города — одновременно аналитика и элементы выбора. Нажатия на графики меняют исследуемую выборку.",
    "filteredCaption": "Выбраны 2021–2023 годы и Минск: 46 из 143 текущих предложений, медианная цена $19 850. Показаны объявления и сохранённые условия выборки.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Точное соответствие исходным фильтрам",
        "Ссылка площадки сохраняется целиком. Проверяются марка, модель, поколение и числовые диапазоны; объём двигателя приводится к единым единицам. Это исключает подмешивание посторонних моделей в статистику."
      ],
      [
        "Быстрый сбор с браузерным резервом",
        "Изучены запросы, которыми сама площадка получает выдачу. Для поддерживаемых фильтров используется структурированный JSON; при неизвестных параметрах или сбое подключается Playwright. Число уникальных объявлений сверяется со счётчиком источника."
      ],
      [
        "Защита истории от неполных проверок",
        "Ошибка загрузки не означает, что объявления исчезли. Уход фиксируется только после повторного отсутствия в полных проверках с интервалом не менее шести часов. Снятие с выдачи используется как признак изменения предложения, а не доказательство сделки."
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
        "Аналитика связана с конкретными объявлениями",
        "Фильтры пересчитывают статистику, графики, историю и CSV одной выборки. Из показателя или точки графика можно перейти к объявлениям, а из снижения цены — к истории наблюдений. Пользователь видит, на каких предложениях основаны выводы."
      ]
    ],
    "resultTitle": "История рынка вместо повторного просмотра объявлений",
    "result": "MotorScope собирает изменения в одном месте: пользователь видит новые варианты и снижения цен, сравнивает подходящие предложения и возвращается к сохранённым объявлениям. На момент подготовки кейса четыре поиска содержали 461 активное объявление. В сравнительном прогоне одной группы из 26 мотоциклов сбор данных сократился с 47,6 до 4,4 секунды при совпадении карточек и их характеристик. Замер не включает скачивание фотографий.",
    "dropsCaption": "Сравнение снижений цены: было → стало, сумма и процент. От строки можно перейти к полной истории объявления.",
    "historyCaption": "История одного предложения: снижение с $23 000 до $21 000 и даты последующих наблюдений. Фрагмент экрана подробностей.",
    "proof": "В последнем зафиксированном прогоне пройдены 104 серверных теста. Ранее проверены 30 браузерных сценариев на изолированных тестовых данных. Для этого кейса дополнительно проверены работающий интерфейс, совместный выбор годов и города, переход к объявлениям и история цены. Скриншоты сняты с реальных данных приложения.",
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
    "intro": "MotorScope tracks av.by listings against user-defined search criteria. It records price history, new listings and price drops, while interactive charts help compare vehicles by year, mileage and location.",
    "heroCaption": "Ford Bronco Sport overview: supply, prices and changes from recorded observations. Actual application screen, October 11, 2026; Russian interface.",
    "status": "Working application · Real av.by data",
    "taskTitle": "Track the models that matter without checking every listing again",
    "task": "A list of current listings is only part of a vehicle search. Buyers also need to know what is new, where prices have fallen and how supply changes over time. The task was to automate repeated checks of selected groups and bring their history into one tool, replacing manual spreadsheets and comparisons from memory.",
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
        "Explore the market",
        "Median prices, distributions and history support comparisons. Selecting years, location, budget or mileage recalculates metrics and listings."
      ],
      [
        "Keep useful listings",
        "Users can save favourites, open price history or export a selection as CSV. Local copies retain descriptions, specifications and photographs."
      ]
    ],
    "interactiveTitle": "From market overview to relevant listings",
    "interactive": "Charts connect directly to listings, and selected criteria work together. Users can compare a segment with the full group and open its listings without collecting the data again.",
    "explorerCaption": "Year and location charts also act as selection controls. Clicking them changes the segment being analysed.",
    "filteredCaption": "Selected years 2021–2023 and Minsk: 46 of 143 current listings, with a median asking price of $19,850. Listings and selection criteria appear together.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Preserve the original search criteria",
        "The complete source URL is retained. Make, model, generation and numeric ranges are checked, with engine capacity normalised to common units. Unrelated models cannot silently enter the statistics."
      ],
      [
        "Fast collection with a browser fallback",
        "The requests used by the source website were investigated. Supported filters use structured JSON; unknown parameters or a failed request trigger Playwright. Unique listing counts are checked against the source count."
      ],
      [
        "Protect history from incomplete checks",
        "A loading error does not mean listings have disappeared. Removal requires repeated absence in complete checks at least six hours apart. Leaving the results indicates a supply change, not a confirmed sale."
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
        "Connect analysis to individual listings",
        "Filters recalculate metrics, charts, history and CSV for the same selection. Metrics and chart points lead to listings; price reductions lead to recorded price history. Users can inspect the offers behind the figures."
      ]
    ],
    "resultTitle": "Market history instead of repeatedly reviewing every listing",
    "result": "MotorScope brings changes into one place: users see new listings and price reductions, compare relevant offers and return to saved listings. At case preparation, four searches contained 461 active listings. In a comparison run on a group of 26 motorcycles, data collection decreased from 47.6 to 4.4 seconds, with matching listings and specifications. This measurement excludes photo downloads.",
    "dropsCaption": "Price reductions compared: before → after, amount and percentage. Each row opens the listing’s complete price history.",
    "historyCaption": "One listing’s history: a reduction from $23,000 to $21,000, followed by dated observations. A fragment of the detail screen.",
    "proof": "The latest recorded run passed 104 server tests. Earlier verification covered 30 browser scenarios using isolated test data. This case additionally checked the live interface, combined year and location selection, listing navigation and price history. Screenshots show actual application data.",
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
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t[e.dataset.t]);document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
