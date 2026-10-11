const copy={
  "ru": {
    "kicker": "MARKETLENS / АНАЛИТИКА РЫНКА ВАКАНСИЙ",
    "title": "Аналитика рынка труда по профессиям",
    "intro": "MarketLens помогает работодателю изучить рынок перед открытием вакансии: узнать, какие компании ищут аналогичных специалистов, какие зарплаты предлагают и какие требования предъявляют кандидатам.\n\nДля подготовки поиска используется языковая модель Gemini. Она подбирает альтернативные названия профессии, ключевые слова и исключения, помогая точнее находить подходящие объявления. Далее приложение собирает реальные вакансии с платформ HeadHunter и Работа России, а программные алгоритмы обрабатывают данные и формируют наглядную аналитику.",
    "status": "Работающая демоверсия · Проверенная функциональность",
    "heroCaption": "Геодезист, HeadHunter: сохранённое исследование от 10 октября 2026 года. При фильтре «Только вахта» — 30 подходящих вакансий от 26 компаний, из них 28 с указанной зарплатой.",
    "taskTitle": "Изучить рынок и определить конкурентные условия найма",
    "task": "Перед поиском сотрудника важно понимать, какие условия предлагают другие работодатели: уровень зарплат, формат работы, необходимые навыки, квалификацию и опыт.\n\nПри этом одна профессия может встречаться под разными названиями, а обычный поиск нередко включает неподходящие должности. Задача — объединить интеллектуальную подготовку запросов, точный отбор вакансий и анализ предложений в одном инструменте.\n\nРезультаты должны помогать работодателю определять конкурентную зарплату, формировать требования и обоснованно выбирать условия будущей вакансии.",
    "solutionTitle": "Как работает MarketLens",
    "steps": [
      [
        "Подготовка поискового профиля",
        "Gemini анализирует название профессии, подбирает поисковые формулировки и критерии отбора. Пользователь может изменить предложенные параметры."
      ],
      [
        "Сбор и фильтрация вакансий",
        "Программные алгоритмы собирают объявления, проверяют соответствие поисковому профилю, исключают повторы внутри источников и отделяют неподходящие вакансии."
      ],
      [
        "Анализ рынка",
        "Приложение рассчитывает показатели и формирует графики зарплат, работодателей, географии вакансий и профессиональных требований."
      ],
      [
        "Сохранение результатов",
        "Исследования сохраняются для дальнейшей работы. Доступны экспорт в Excel и CSV, формирование отчёта для PDF и повторный сбор по заданному расписанию при работающем сервере приложения."
      ]
    ],
    "chartsTitle": "Наглядная аналитика рынка",
    "charts": "Приложение преобразует собранные вакансии в интерактивные графики и сводные показатели. Можно изучить распределение зарплат, количество предложений, наиболее активных работодателей и географию вакансий.\n\nЗарплатные данные учитываются с разделением по валютам, периодам оплаты и налоговым условиям. Фильтры позволяют сравнивать отдельные компании и сегменты рынка без повторного сбора данных.\n\nПри расчётах учитываются особенности зарплатных предложений: суммы «от» и «до» анализируются отдельно, а среднее значение полной зарплатной вилки рассчитывается только при наличии обеих границ.",
    "salaryCaption": "Геодезист, HeadHunter: распределение нижних границ зарплат для группы «RUB · в месяц · на руки» и рейтинг работодателей. На графике представлены 22 предложения.",
    "geographyCaption": "География вакансий и доля предложений с указанной зарплатой. Регион размещения объявления может отличаться от фактического места работы.",
    "requirementsTitle": "Требования работодателей с проверкой источников",
    "requirements": "MarketLens выделяет встречающиеся в вакансиях требования к опыту, образованию, навыкам и документам, показывая их распространённость в исследуемой выборке.\n\nКаждый результат можно проверить: открыть исходное объявление, посмотреть основание отбора и при необходимости скорректировать решение. Это позволяет опираться не только на графики, но и на реальные формулировки работодателей.\n\nСтатистика учитывает явно выявленные требования. Если определённое условие не найдено в тексте вакансии, это не означает, что работодатель его не предъявляет.",
    "requirementsCaption": "Требования работодателей: количество вакансий с выявленными условиями к опыту, образованию, навыкам и документам.",
    "vacancyCaption": "Карточка реальной вакансии HeadHunter: зарплата, описание, требования и обоснование соответствия профессии. Предусмотрены ручная корректировка и переход к оригинальному объявлению.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Разделение задач между ИИ и алгоритмами",
        "Языковая модель используется для подготовки поисковых запросов, а не для обработки собранных вакансий. Поисковый профиль сохраняется и может применяться повторно без нового обращения к Gemini."
      ],
      [
        "Точный отбор по профессии и специализации",
        "Алгоритмы учитывают синонимы, словоформы, профессиональную роль, специализацию и исключения. Неоднозначные совпадения направляются на дополнительную проверку, а не включаются автоматически в основную статистику."
      ],
      [
        "Контроль полноты данных",
        "Система удаляет повторы внутри источников и учитывает ограничения при сборе. Если источник недоступен или данные получены частично, исследование не представляется как полное."
      ],
      [
        "Корректное сравнение зарплат",
        "Зарплатные предложения сохраняют исходную валюту, период оплаты и налоговые условия. Неполные зарплатные вилки и предложения с неизвестным периодом не смешиваются с сопоставимыми данными."
      ],
      [
        "Прозрачность результатов",
        "Решения об отборе и выявленные требования связаны с исходными формулировками вакансий. Ручные корректировки сохраняются, а сформированные отчёты фиксируют данные и параметры исследования."
      ],
      [
        "История исследований",
        "Приложение сохраняет результаты наблюдений и позволяет отслеживать изменения рынка. Для анализа динамики используются сопоставимые исследования с одинаковыми параметрами и результатами как минимум за два разных дня."
      ]
    ],
    "role": "Проект разработан по собственной инициативе: от постановки задачи и проектирования поисковой логики до реализации аналитических инструментов и проверки результатов. В процессе разработки также использовались инструменты ИИ.",
    "resultTitle": "Аналитика для обоснованных решений о найме",
    "result": "MarketLens объединяет поиск вакансий, анализ зарплат, сравнение работодателей и изучение требований в едином интерфейсе. Результаты помогают оценить конкурентную среду и подготовить условия найма с опорой на реальные предложения рынка.\n\nРаботоспособность подтверждена исследованиями на данных двух источников:\n\nHeadHunter: 30 подходящих вахтовых вакансий геодезиста от 26 компаний, из них 28 с указанной зарплатой.\nРабота России: 119 вахтовых вакансий машиниста бульдозера от 98 компаний.\n\nПоказатели отражают конкретные поисковые выборки, а не весь рынок труда.",
    "trudCaption": "Машинист бульдозера, Работа России: 119 подходящих вахтовых вакансий от 98 компаний. Период оплаты в этой выборке не указан, поэтому зарплаты не интерпретируются как месячные.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Успешно пройдены 114 автоматических тестов, охватывающих подготовку поиска, фильтрацию вакансий, расчёт зарплат, анализ требований, обработку ограничений источников, историю исследований и экспорт данных.\n\nДополнительно выполнено ручное тестирование интерфейса, графиков, переключения исследований и карточек вакансий. Проверена сборка интерфейса для публикации.\n\nНа странице представлены реальные экраны работающего приложения с сохранёнными результатами исследований.",
    "limits": "",
    "stackTitle": "Технологии и их назначение",
    "stack": [
      [
        "Python · FastAPI · httpx · BeautifulSoup",
        "Серверная логика приложения, программный сбор вакансий и обработка данных из доступных источников."
      ],
      [
        "Gemini API · LLM",
        "Интеллектуальная подготовка поисковых профилей: подбор альтернативных названий профессий, ключевых слов, признаков специализации и исключений."
      ],
      [
        "pymorphy3 · Программные алгоритмы",
        "Морфологический анализ текста, проверка соответствия профессии, фильтрация объявлений и извлечение требований работодателей."
      ],
      [
        "SQLite",
        "Хранение поисковых профилей, результатов исследований, истории наблюдений, отчётов и расписаний."
      ],
      [
        "React · TypeScript · ECharts",
        "Пользовательский интерфейс, интерактивные фильтры, аналитические графики и визуализация результатов."
      ],
      [
        "Excel · CSV · HTML",
        "Экспорт данных и формирование фиксированных отчётов с возможностью сохранения в PDF."
      ]
    ],
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "back": "← Все работы",
    "aiTitle": "Искусственный интеллект для точного поиска",
    "ai": "Пользователь указывает профессию, после чего языковая модель Gemini через API формирует поисковый профиль: подбирает синонимы, альтернативные названия должности, признаки специализации, ключевые слова и исключения.\n\nСформированный профиль можно проверить и скорректировать перед запуском поиска, уточнив критерии отбора и исключив нерелевантные направления.\n\nРоль ИИ ограничена подготовкой поиска. Дальнейший сбор, фильтрация, обработка вакансий и расчёт показателей выполняются программными алгоритмами. Собранные объявления не передаются языковой модели.",
    "profileCaption": "Поисковый профиль, подготовленный Gemini: альтернативные формулировки, признаки специализации и исключения. Все параметры доступны для редактирования.",
    "stepsTitle": "Этапы работы приложения"
  },
  "en": {
    "kicker": "MARKETLENS / JOB MARKET ANALYTICS",
    "title": "Labour market analytics by profession",
    "intro": "MarketLens helps a company assess the market for a chosen profession before recruiting: how many offers other employers publish, who is hiring, and which salaries and requirements they state.\n\nAn AI model turns the entered profession into a search profile: alternative queries, relevant job indicators and exclusions. The application uses this profile to collect real HeadHunter and Jobs in Russia listings; local scripts screen them and calculate statistics. The project was independently built as a demo for hiring planning.",
    "status": "Independent demo · Real data · Local application",
    "heroCaption": "Surveyor, HeadHunter: a saved limited sample from 10 October 2026. With “Rotation only” selected: 30 matching listings from 26 companies; 28 disclose salary information.",
    "taskTitle": "Understand the offers a new vacancy will compete with",
    "task": "Before recruiting, a company needs to review other employers’ offers for the same profession: listing counts, companies, locations, pay, experience and skills. These observations support discussions about the terms of a new vacancy.\n\nThe same profession may have different titles, while broad searches include unrelated roles. The task was to combine query expansion, explainable screening and analysis. The application researches employer offers; applicant interest and application counts are not measured.",
    "solutionTitle": "How MarketLens works",
    "steps": [
      [
        "AI prepares the profile",
        "Given the profession, Gemini suggests queries, synonyms, indicators and exclusions. Users review and, if needed, edit the profile."
      ],
      [
        "Scripts collect and screen listings",
        "The application searches HH and Jobs in Russia using the prepared queries. Local rules apply indicators and exclusions, remove within-source duplicates and classify results by relevance."
      ],
      [
        "Analyse the selected sample",
        "Filters update the listing set and statistics. Charts show salary distributions, employers, regions and explicitly stated requirements; listing details provide source text and screening evidence."
      ],
      [
        "Save the research",
        "Results can be exported to Excel/CSV and a fixed HTML report printable to PDF. Monitoring repeats a saved search while the application server is running."
      ]
    ],
    "chartsTitle": "What the charts show",
    "charts": "The salary histogram counts listings by their lower salary limits: the amounts employers offer “from”. The company ranking counts listings per employer in the current sample. These metrics describe offers, rather than actual earnings or future hires.\n\nCurrencies, pay periods and before/after-tax amounts are separated. Mean lower and upper limits may use different N and do not form one salary range; midpoints use complete ranges only. Company, source, category and text filters narrow the analysis without new collection.",
    "salaryCaption": "Surveyor, HH: lower-limit distribution for “RUB · monthly · after tax” and top employers. The histogram covers 22 offers; other payment terms form separate groups.",
    "geographyCaption": "Listing locations and salary-disclosure share in the selected sample. A listing’s region may differ from the workplace. “Non-rotation” means no affirmative mention of rotational work in the available text.",
    "requirementsTitle": "Requirements with traceable evidence",
    "requirements": "The requirements chart counts listings explicitly stating experience, education, skills, documents or other supported conditions. Users can open the listings behind a requirement.\n\nListing details show screening reasons and source quotes. Uncertain decisions can be corrected manually with an explanation. A requirement not extracted by the script may still be expected by an employer.",
    "requirementsCaption": "Employer requirements: listing counts for explicitly identified conditions and the sample size for comparison. The chart does not replace reviewing the original wording.",
    "vacancyCaption": "Actual HH listing: salary, evidence of role relevance, requirements and source description. Users can correct the decision manually and open the original.",
    "engineeringTitle": "Key development decisions",
    "engineering": [
      [
        "AI helps before data collection",
        "Gemini derives queries, role, context and exclusions from the user’s request. Its language capabilities help prepare searches, while real listing processing remains local. The profile is saved and reused without another model request."
      ],
      [
        "Separate role from specialisation",
        "The profile distinguishes professional roles, required context and exclusions. Word forms and synonyms support screening; incomplete or ambiguous matches remain for review rather than entering the main statistics automatically."
      ],
      [
        "Show limits on coverage",
        "Search queries are collected in rounds and duplicate IDs removed. Limits, loading errors or access restrictions mark a sample as partial. HH is read through public pages; blocked collection never becomes a false zero."
      ],
      [
        "Keep salary terms comparable",
        "Offers retain currency, pay period and tax status. One-sided limits do not become complete ranges, and unknown periods are not treated as monthly. Metrics show the size of their underlying sample."
      ],
      [
        "Traceable decisions and fixed reports",
        "Screening reasons and requirements link to source excerpts. Manual corrections are retained separately from initial decisions. Reports freeze data and filters so later collection does not change saved research."
      ],
      [
        "History from recorded observations",
        "Trends use complete comparable samples with the same parameters and processing version. Observations from at least two days are needed; missing days are not zeros, and a disappearing listing does not prove a hire."
      ]
    ],
    "role": "The author chose the hiring-planning problem, designed the search and analysis workflow, separated AI and script responsibilities, developed the application with AI assistance and checked the results. The work was self-initiated, with no client.",
    "resultTitle": "Evidence for discussing recruitment terms",
    "result": "MarketLens combines search, screening, offer comparison and evidence review. A company can examine employers and terms in a selected segment, then save the research for internal discussion.\n\nThe shown HH surveyor sample contains 30 matching rotational-work listings from 26 companies; 28 provide salary information. A separate completed Jobs in Russia bulldozer-operator collection from 8 October yields 119 matching rotational-work listings from 98 companies under the selected filter. These are results of specific searches and filters, rather than the entire market. Effects on hiring speed or time savings have not been measured.",
    "trudCaption": "Jobs in Russia, bulldozer operator: 119 matching rotational-work listings from 98 companies. The pay period is unspecified in this group, so amounts are not presented as monthly salaries.",
    "proofTitle": "Functional verification",
    "proof": "During case preparation, all 114 automated tests passed again and the production frontend build succeeded. Checks cover search profiles, role and specialisation screening, requirements, salaries, pagination, source limits, history and exports.\n\nScreenshots were captured from the working application using a copy of the saved database. Switching analyses, charts, requirements and listing details were checked. No new collection or Gemini requests were made for this case.",
    "limits": "The demo runs locally. Source availability and sample coverage constrain conclusions; potential cross-source duplicates are flagged rather than automatically merged. Screening accuracy has not been independently measured on a labelled dataset. The application interface is Russian; the case is available in Russian and English.",
    "stackTitle": "Technologies and their purpose",
    "stack": [
      [
        "Python · FastAPI · httpx · BeautifulSoup",
        "Application API, Jobs in Russia collection and public HH page reading."
      ],
      [
        "Gemini",
        "Alternative queries, equivalent titles, profession indicators and exclusions for an editable search profile."
      ],
      [
        "pymorphy3 · programmatic rules",
        "Word forms, role screening and explicit requirement extraction with evidence."
      ],
      [
        "SQLite",
        "Saved analyses, search profiles, reports and monitoring schedules."
      ],
      [
        "React · TypeScript · ECharts",
        "Interface, filters, salary distributions and market charts."
      ],
      [
        "Excel · CSV · HTML",
        "Selected listing exports and a fixed report printable to PDF."
      ]
    ],
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "stackLabel": "05 / TECHNOLOGIES",
    "back": "← All projects",
    "aiTitle": "AI turns a profession name into a search profile",
    "ai": "The user enters a profession and clicks “Prepare search”. Gemini interprets the name and suggests alternative queries, equivalent titles, the primary role, specialisation indicators and exclusion terms. This helps find the same profession under different titles and distinguish it from similar roles.\n\nFor “Sample collector”, for example, the assistant suggests titles equivalent to “sample taker”, “laboratory sample collector” and “sample collection specialist”. It separately lists sample collection and preparation indicators, along with other roles and contexts to exclude. All fields are visible and can be edited before collection.\n\nScripts handle the next stages: collect listings using the prepared queries, apply the profile and exclusions during screening, extract requirements and calculate metrics. The AI model receives only the profession search request; listing texts and collected market data are not sent to it.",
    "profileCaption": "Gemini-generated “Sample collector” search profile: queries, equivalent titles, role, specialisation and exclusions. Actual application screen showing a saved AI profile; all fields are editable.",
    "stepsTitle": "Application workflow"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
