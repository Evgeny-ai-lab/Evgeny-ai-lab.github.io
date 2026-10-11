const copy={
  "ru": {
    "kicker": "RETAIL INTELLIGENCE / АНАЛИТИКА РОЗНИЧНЫХ ПРОДАЖ",
    "title": "Аналитика продаж и прогнозирование спроса",
    "intro": "Retail Intelligence — приложение для анализа розничных продаж и прогнозирования спроса. Объединяет данные торговой сети, помогает отслеживать динамику продаж, сравнивать магазины и выявлять сезонные закономерности. Модель машинного обучения строит прогноз спроса, точность которого проверяется на реальных исторических данных.",
    "status": "Готовая демоверсия · Реальные исторические данные",
    "taskTitle": "Понимать спрос и принимать решения на основе данных",
    "task": "В крупной торговой сети общие показатели не всегда отражают реальную картину: продажи различаются между магазинами, регионами и товарными категориями. Задача заключалась в том, чтобы объединить исторические данные, выявить сезонные закономерности и сделать анализ продаж наглядным и доступным.\n\nДополнительная цель — разработать модель прогнозирования спроса и проверить её преимущество перед простыми методами расчёта. Всё это должно работать в удобном интерфейсе, без необходимости вручную обрабатывать миллионы записей.",
    "solutionTitle": "Что умеет приложение",
    "steps": [
      [
        "Объединяет и обрабатывает данные",
        "Работает с более чем 3 млн записей по 54 магазинам и 33 товарным категориям. Проверяет полноту и согласованность данных перед выполнением расчётов."
      ],
      [
        "Анализирует динамику продаж",
        "Позволяет изучать продажи по периодам, регионам, городам, магазинам и товарным категориям. Интерактивные фильтры помогают сравнивать показатели и отслеживать изменения спроса."
      ],
      [
        "Выявляет закономерности",
        "Показывает сезонные колебания, различия между магазинами и особенности спроса по дням недели. Помогает исследовать связь продаж с проведением рекламных акций."
      ],
      [
        "Прогнозирует спрос",
        "Модель машинного обучения рассчитывает спрос на 16 дней вперёд. Точность проверяется на исторических данных путём сравнения с фактическими продажами и двумя базовыми методами прогнозирования."
      ]
    ],
    "interactiveTitle": "От общей картины к отдельным категориям",
    "interactive": "Интерактивные фильтры позволяют переходить от показателей всей сети к отдельным магазинам и товарным категориям. Все графики и расчёты автоматически обновляются при изменении параметров, помогая детально исследовать динамику продаж и особенности спроса.",
    "heroCaption": "Обзор торговой сети: динамика продаж, структура товарных категорий и ключевые показатели. Данные Favorita за 2013–2017 годы.",
    "explorerCaption": "Сравнение магазинов: динамика продаж и ключевые показатели внутри одного кластера.",
    "filteredCaption": "Анализ товарных категорий: недельная сезонность и наблюдаемая связь спроса с рекламными акциями.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Обработка больших объёмов данных",
        "Исходные CSV-файлы проходят проверку и преобразуются в локальную базу данных. Предварительная подготовка позволяет быстро выполнять аналитические расчёты без повторной загрузки миллионов записей."
      ],
      [
        "Точность бизнес-показателей",
        "Объём продаж учитывается отдельно от денежной выручки. Данные о транзакциях обрабатываются на уровне магазинов, что исключает дублирование чеков при объединении товарных категорий."
      ],
      [
        "Объективная проверка прогноза",
        "Для оценки модели используются последовательные временные периоды без доступа к будущим продажам. Подбор модели и итоговая проверка выполняются на разных участках исторических данных."
      ],
      [
        "Прогнозирование с учётом ключевых факторов",
        "Модель Ridge учитывает календарные особенности, тренды продаж и запланированные акции. Качество прогнозирования сравнивается с двумя базовыми подходами: предыдущей неделей и сезонным средним."
      ]
    ],
    "resultTitle": "Единая аналитика продаж и проверенный прогноз спроса",
    "result": "Разработано приложение, объединяющее анализ торговой сети, отдельных магазинов и товарных категорий. Вместо разрозненных таблиц — наглядные показатели, интерактивные графики и прогнозирование спроса в едином интерфейсе.\n\nНа итоговом проверочном периоде модель Ridge показала ошибку RMSLE 0,467 против 0,531 у сезонного среднего. Ошибка прогнозирования оказалась на 12,1% ниже — результат подтверждён на выделенном историческом периоде.\n\nРеализован экспорт прогнозов для 1 782 сочетаний «магазин × категория». Аналитика и готовые прогнозы доступны без подключения к внешним API.",
    "dropsCaption": "Прогноз спроса: сравнение результатов модели с фактическими продажами и базовым прогнозом на проверочном периоде.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Проведены 34 автоматических теста, охватывающих обработку данных, расчёты, API, прогнозирование и обработку ошибок. Дополнительно успешно пройдены 14 браузерных сценариев, включая работу фильтров, навигацию, экспорт данных и отображение на мобильных устройствах.\n\nНа странице представлены реальные экраны работающего приложения. Проект использует исторические данные и не предполагает подключения к действующим кассовым или ERP-системам.",
    "stack": [
      [
        "Python · pandas",
        "Обработка больших массивов данных, проверка их качества и аналитические расчёты."
      ],
      [
        "FastAPI · SQLite",
        "Серверная логика, API и хранение подготовленных данных."
      ],
      [
        "Ridge Regression · Time Series Validation",
        "Прогнозирование спроса и проверка точности модели на исторических периодах."
      ],
      [
        "JavaScript · SVG",
        "Интерактивный интерфейс, динамические фильтры и визуализация данных."
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
    "intro": "Retail Intelligence is an application for retail sales analysis and demand forecasting. It consolidates retail-chain data, tracks sales trends, compares stores and reveals seasonal patterns. A machine-learning model forecasts demand, with accuracy evaluated on real historical data.",
    "status": "Completed demo · Real historical data",
    "taskTitle": "Understand demand and make data-informed decisions",
    "task": "In a large retail chain, aggregate metrics do not always reveal the full picture: sales differ between stores, regions and product categories. The task was to consolidate historical data, identify seasonal patterns and make sales analysis clear and accessible.\n\nAn additional goal was to develop a demand forecasting model and evaluate its advantage over simple calculation methods. All of this needed to work in a convenient interface without manually processing millions of records.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Consolidates and processes data",
        "Works with more than 3 million records across 54 stores and 33 product categories. Checks data completeness and consistency before performing calculations."
      ],
      [
        "Analyzes sales trends",
        "Supports exploration by period, region, city, store and product category. Interactive filters help compare metrics and track changes in demand."
      ],
      [
        "Reveals patterns",
        "Shows seasonal fluctuations, differences between stores and weekday demand patterns. Helps investigate the association between sales and promotional campaigns."
      ],
      [
        "Forecasts demand",
        "The machine-learning model forecasts 16 days ahead. Accuracy is evaluated on historical data by comparison with actual sales and two baseline forecasting methods."
      ]
    ],
    "interactiveTitle": "From the network overview to individual categories",
    "interactive": "Interactive filters let users move from network-wide metrics to individual stores and product categories. Charts and calculations update when parameters change, supporting detailed exploration of sales trends and demand patterns.",
    "heroCaption": "Retail-chain overview: sales trends, category mix and key metrics. Favorita data from 2013–2017; Russian interface.",
    "explorerCaption": "Store comparison: sales trends and key metrics within a cluster; Russian interface.",
    "filteredCaption": "Product category analysis: weekly seasonality and the observed association between demand and promotions; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Processing large datasets",
        "Source CSV files are validated and converted into a local database. Preparing data in advance enables fast analytical calculations without repeatedly loading millions of records."
      ],
      [
        "Accurate business metrics",
        "Sales volume is treated separately from monetary revenue. Transaction data is processed at store level to prevent duplicate receipt counts when joining product categories."
      ],
      [
        "Objective forecast evaluation",
        "The model is evaluated on sequential time periods without access to future sales. Model selection and final evaluation use different sections of historical data."
      ],
      [
        "Forecasting with key factors",
        "Ridge incorporates calendar patterns, sales trends and scheduled promotions. Forecast quality is compared with two baselines: the previous week and a seasonal average."
      ]
    ],
    "resultTitle": "Unified sales analytics and an evaluated demand forecast",
    "result": "The application combines analysis of the retail chain, individual stores and product categories. Instead of disconnected spreadsheets, it offers clear metrics, interactive charts and demand forecasting in one interface.\n\nOn the final evaluation period, Ridge achieved an RMSLE of 0.467 versus 0.531 for the seasonal average. Forecasting error was 12.1% lower, as measured on the held-out historical period.\n\nForecast export covers 1,782 store–category combinations. Analytics and prepared forecasts are available without external APIs.",
    "dropsCaption": "Demand forecasting: model results compared with actual sales and a baseline on the evaluation period; Russian interface.",
    "proofTitle": "Functional verification",
    "proof": "34 automated tests cover data processing, calculations, API behavior, forecasting and error handling. An additional 14 browser scenarios passed, including filters, navigation, data export and mobile display.\n\nThe page shows actual screens of the running application. The project uses historical data and does not involve connections to live point-of-sale or ERP systems.",
    "stack": [
      [
        "Python · pandas",
        "Large-scale data processing, quality checks and analytical calculations."
      ],
      [
        "FastAPI · SQLite",
        "Server logic, API and storage of prepared data."
      ],
      [
        "Ridge Regression · Time Series Validation",
        "Demand forecasting and accuracy evaluation on historical periods."
      ],
      [
        "JavaScript · SVG",
        "Interactive interface, dynamic filters and data visualization."
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
