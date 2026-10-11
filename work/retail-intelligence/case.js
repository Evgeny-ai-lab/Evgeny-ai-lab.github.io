const copy={
  "ru": {
    "kicker": "RETAIL INTELLIGENCE / АНАЛИТИКА РОЗНИЧНЫХ ПРОДАЖ",
    "title": "Аналитика продаж и прогноз спроса",
    "intro": "Retail Intelligence объединяет данные торговой сети в одном интерфейсе: показывает динамику продаж, различия между магазинами и сезонность товарных категорий. Модель машинного обучения прогнозирует спрос, а качество прогноза проверяется на исторических данных.",
    "status": "Готовая демоверсия · Реальные исторические данные",
    "taskTitle": "Понимать спрос и планировать продажи",
    "task": "В большой торговой сети общие показатели скрывают различия между магазинами и товарными категориями. Для анализа требовалось объединить данные, выделить сезонные закономерности и сравнить динамику продаж в разных городах и магазинах.\n\nОтдельная задача — построить прогноз спроса и проверить, насколько он полезнее простых расчётов по прошлым продажам. Результаты должны быть доступны в понятном интерфейсе без ручной обработки многомиллионной таблицы.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Объединяет данные сети",
        "Обрабатывает более 3 млн записей по 54 магазинам и 33 товарным категориям. Проверяет пропуски и согласованность данных перед расчётами."
      ],
      [
        "Показывает динамику продаж",
        "Фильтры по периоду, региону, городу, магазину и категории помогают сравнивать объём продаж, изменения спроса и структуру предложения."
      ],
      [
        "Выявляет закономерности",
        "Сравнение магазинов и недельные профили категорий показывают различия в спросе и его связь с проведением акций."
      ],
      [
        "Строит и проверяет прогноз",
        "Модель рассчитывает спрос на 16 дней. Историческая проверка сопоставляет прогноз с фактическими продажами и двумя простыми базовыми моделями."
      ]
    ],
    "interactiveTitle": "От общей картины к отдельным категориям",
    "interactive": "Фильтры пересчитывают показатели и графики для выбранной части сети. Можно сравнить магазины одного кластера, изучить спрос по дням недели и посмотреть динамику конкретной категории.",
    "heroCaption": "Обзор сети: объём продаж, динамика спроса и структура категорий. Данные Favorita за 2013–2017 годы.",
    "explorerCaption": "Сравнение магазинов: динамика продаж и показатели магазинов одного кластера.",
    "filteredCaption": "Товарные категории: недельная сезонность и наблюдаемая связь продаж с акциями.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Подготовка большого набора",
        "Исходные CSV проверяются и преобразуются в локальную базу. Расчёты и интерфейс используют подготовленные данные без повторной загрузки всего набора."
      ],
      [
        "Корректные бизнес-показатели",
        "Объём продаж отделён от денежной выручки. Транзакции учитываются на уровне магазина, чтобы число чеков не умножалось при объединении категорий."
      ],
      [
        "Проверка без подглядывания в будущее",
        "Модель проверяется на последовательных временных окнах. Будущие продажи скрыты; выбор модели и итоговая оценка выполняются на разных периодах."
      ],
      [
        "Прогноз с понятной точкой сравнения",
        "Регуляризованная регрессия Ridge учитывает календарь, тренд и план акций. Её результат сравнивается с прошлой неделей и сезонным средним."
      ]
    ],
    "resultTitle": "Проверенный прогноз и единая картина продаж",
    "result": "Вместо разрозненных таблиц — приложение для анализа сети, магазинов и товарных категорий. Исторические данные, графики и результаты прогнозирования доступны в одном рабочем процессе.\n\nНа итоговом проверочном периоде ошибка Ridge по метрике RMSLE составила 0,467 против 0,531 у сезонного среднего — на 12,1% ниже. Это измеренный результат на выбранном историческом периоде.\n\nПодготовлен экспорт прогноза для 1 782 сочетаний «магазин × категория». Для просмотра аналитики и готового прогноза внешние API не требуются.",
    "dropsCaption": "Прогноз спроса: сопоставление модели с фактическими продажами и базовым прогнозом на скрытом периоде.",
    "proofTitle": "Проверка работоспособности",
    "proof": "34 автоматических теста проверяют данные, расчёты, API, прогноз и обработку некорректного ввода. Дополнительно пройдены 14 браузерных сценариев: разделы аналитики, фильтры, скачивание, сброс и мобильный экран.\n\nНа странице представлены реальные экраны работающего приложения. Прогноз построен на исторических данных; подключение к кассам или ERP действующей сети в этот проект не входит.",
    "stack": [
      [
        "Python · pandas",
        "Подготовка данных, контроль качества и аналитические расчёты."
      ],
      [
        "FastAPI · SQLite",
        "Серверное API и хранение подготовленных данных."
      ],
      [
        "Ridge · временная проверка",
        "Прогнозирование спроса и оценка качества на отложенных периодах."
      ],
      [
        "JavaScript · SVG",
        "Интерфейс, фильтры и графики."
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
    "kicker": "RETAIL INTELLIGENCE / RETAIL SALES ANALYTICS",
    "title": "Sales analytics and demand forecasting",
    "intro": "Retail Intelligence brings retail-chain data into one interface: sales trends, differences between stores and seasonal patterns across product categories. A machine-learning model forecasts demand, with performance evaluated on historical data.",
    "status": "Completed demo · Real historical data",
    "taskTitle": "Understand demand and plan sales",
    "task": "Network-wide totals can hide differences between stores and categories. The task was to consolidate data, identify seasonal patterns and compare sales trends across cities and stores.\n\nA separate goal was to build a demand forecast and measure its improvement over simple historical baselines. Results needed to be accessible without manually processing a multimillion-row spreadsheet.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Consolidates network data",
        "Processes more than 3 million records across 54 stores and 33 product categories. Checks missing values and consistency before calculating metrics."
      ],
      [
        "Explores sales trends",
        "Period, region, city, store and category filters support analysis of sales volume, demand changes and category mix."
      ],
      [
        "Reveals patterns",
        "Store comparisons and weekly category profiles show differences in demand and its association with promotions."
      ],
      [
        "Builds and evaluates forecasts",
        "The model predicts 16 days of demand. Historical evaluation compares predictions with actual sales and two simple baselines."
      ]
    ],
    "interactiveTitle": "From the network overview to individual categories",
    "interactive": "Filters recalculate metrics and charts for a selected part of the network. Users can compare stores in the same cluster, examine weekday demand and explore a specific category.",
    "heroCaption": "Network overview: sales volume, demand trends and category mix. Favorita data from 2013–2017; Russian interface.",
    "explorerCaption": "Store comparison: sales trends and performance within a store cluster; Russian interface.",
    "filteredCaption": "Product categories: weekly seasonality and observed association between sales and promotions; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Preparing a large dataset",
        "Source CSV files are validated and converted into a local database. Analytics use prepared data without reloading the entire dataset."
      ],
      [
        "Correct business metrics",
        "Sales volume is kept separate from monetary revenue. Transactions remain at store level to avoid multiplying receipt counts when joining categories."
      ],
      [
        "Evaluation without future leakage",
        "Validation follows sequential time windows. Future sales are hidden, and model selection is separate from the final evaluation period."
      ],
      [
        "A meaningful forecasting baseline",
        "Ridge regression incorporates calendar effects, trend and promotion schedules. Results are compared with the previous week and a seasonal average."
      ]
    ],
    "resultTitle": "An evaluated forecast and a unified view of sales",
    "result": "The application replaces disconnected spreadsheets with a single workflow for network, store and category analysis. Historical data, charts and forecasts are accessible together.\n\nOn the final evaluation period, Ridge achieved an RMSLE of 0.467 versus 0.531 for the seasonal-average baseline: a 12.1% lower error on that historical window.\n\nForecast export covers 1,782 store–category combinations. Viewing the prepared analytics and forecasts does not require external APIs.",
    "dropsCaption": "Demand forecasting: model predictions, actual sales and a baseline on a held-out period; Russian interface.",
    "proofTitle": "Functional verification",
    "proof": "34 automated tests cover data, calculations, API behavior, forecasting and invalid input. All 14 browser scenarios passed, including analytical sections, filters, downloads, reset and mobile layout.\n\nThe page shows actual screens of the running application. Forecasts use historical data; integration with a live retail chain’s point-of-sale or ERP system is outside this project.",
    "stack": [
      [
        "Python · pandas",
        "Data preparation, quality checks and analytical calculations."
      ],
      [
        "FastAPI · SQLite",
        "Server API and storage of prepared data."
      ],
      [
        "Ridge · temporal validation",
        "Demand forecasting and evaluation on held-out periods."
      ],
      [
        "JavaScript · SVG",
        "User interface, filters and charts."
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
