const copy={
  "ru": {
    "kicker": "MARKETLENS / АНАЛИТИКА РЫНКА ВАКАНСИЙ",
    "title": "Исследование рынка вакансий перед наймом",
    "intro": "MarketLens помогает компании оценить рынок выбранной профессии перед поиском сотрудника: сколько предложений размещают другие работодатели, кто нанимает, какие зарплаты и требования указывает.\n\nПриложение собирает реальные вакансии HeadHunter и «Работы России», отделяет подходящие должности от смежных и показывает аналитику выбранного среза. Проект создан самостоятельно как демоверсия для сценария планирования найма.",
    "status": "Самостоятельная демоверсия · Реальные данные · Локальное приложение",
    "heroCaption": "Геодезист, HeadHunter: сохранённый ограниченный срез от 10 октября 2026 года. При фильтре «Только вахта» — 30 подходящих объявлений от 26 компаний; зарплата указана в 28.",
    "taskTitle": "Понять, с какими предложениями конкурирует новая вакансия",
    "task": "Перед наймом компании нужно изучить предложения других работодателей по той же профессии: количество вакансий, компании, географию, зарплаты, опыт и навыки. Эти данные помогают обсуждать условия будущей вакансии на основании наблюдаемых предложений.\n\nОдинаковая профессия может называться по-разному, а широкая выдача содержит другие должности. Поэтому требовалось объединить расширение поисковых формулировок, проверяемый отбор и анализ в одном процессе. Приложение исследует предложения работодателей; интерес соискателей и количество откликов не измеряются.",
    "solutionTitle": "Как работает MarketLens",
    "steps": [
      [
        "Готовит поиск по профессии",
        "Пользователь задаёт профессию, страну, регион, формат работы и источники. Gemini предлагает запросы, синонимы, роль и специализацию; профиль можно проверить и исправить перед сбором."
      ],
      [
        "Собирает и проверяет объявления",
        "HeadHunter покрывает Россию и Казахстан, «Работа России» — Россию. Скрипт удаляет повторы внутри источника и разделяет подходящие, смежные, спорные и исключённые должности."
      ],
      [
        "Показывает рынок выбранной выборки",
        "Фильтры меняют список и статистику. Графики показывают распределение зарплатных предложений, работодателей, регионы и явно указанные требования; карточки содержат исходный текст и основания отбора."
      ],
      [
        "Сохраняет исследование",
        "Результат можно выгрузить в Excel/CSV и фиксированный HTML-отчёт для печати в PDF. Мониторинг повторяет сохранённый поиск, пока работает сервер приложения."
      ]
    ],
    "chartsTitle": "Что показывают графики",
    "charts": "Зарплатная гистограмма считает объявления по диапазонам нижних границ: сколько работодатели предлагают «от». Рейтинг компаний показывает число объявлений каждого работодателя в текущем срезе. Эти показатели описывают предложения, а не фактические доходы или число будущих сотрудников.\n\nВалюты, периоды оплаты и суммы до/после налогов разделены. Средние нижние и верхние границы могут иметь разные N и не образуют единую вилку; середина рассчитывается только для полных вилок. Фильтры по компании, источнику, категории и тексту позволяют сузить исследование без нового сбора.",
    "salaryCaption": "Геодезист, HH: распределение нижних границ для группы «RUB · в месяц · на руки» и топ работодателей. На гистограмме 22 предложения; другие условия оплаты образуют отдельные группы.",
    "geographyCaption": "География объявлений и доля предложений с зарплатой в выбранном срезе. Регион объявления может отличаться от места работы. «Без вахты» означает отсутствие утвердительного указания на вахту в доступном тексте.",
    "requirementsTitle": "Требования с проверяемыми основаниями",
    "requirements": "График требований показывает, в скольких вакансиях явно указаны опыт, образование, навыки, документы или другие поддерживаемые условия. Из формулировки можно перейти к соответствующим объявлениям.\n\nКарточка показывает причину отбора и цитаты из источника. Спорное решение можно уточнить вручную с пояснением. Отсутствие извлечённого требования не означает, что работодатель его не предъявляет.",
    "requirementsCaption": "Требования работодателей: количество вакансий с явно найденными условиями и размер выборки для сравнения. Один график не заменяет проверку исходных формулировок.",
    "vacancyCaption": "Реальная карточка HH: зарплата, основание соответствия профессии, требования и описание из источника. Решение можно уточнить вручную и открыть оригинал.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "ИИ только для подготовки поиска",
        "Gemini получает название профессии и помогает составить профиль. Тексты вакансий не передаются модели: отбор, извлечение требований и расчёты выполняют скрипты. Сохранённый или вручную исправленный профиль позволяет работать без нового запроса к ИИ."
      ],
      [
        "Роль отдельно от специализации",
        "Профиль разделяет профессиональную роль, обязательный контекст и исключения. Словоформы и синонимы учитываются при отборе; неполное или неоднозначное совпадение остаётся для проверки вместо автоматического включения в основную статистику."
      ],
      [
        "Охват без ложной полноты",
        "Поисковые формулировки обходятся по кругу, повторы удаляются по ID. Лимит, ошибка загрузки или ограничение доступа обозначают частичный срез. HH читается через открытые страницы; при блокировке сбор не выдаёт ложный ноль."
      ],
      [
        "Сопоставимые зарплаты",
        "Каждое предложение сохраняет валюту, период и налоговый статус. Односторонние границы не становятся полными вилками, неизвестный период не считается месяцем. Для показателей виден размер использованной подвыборки."
      ],
      [
        "Проверяемые решения и фиксированные отчёты",
        "Причины отбора и требования связаны с фрагментами исходного объявления. Ручная поправка сохраняется отдельно от первоначального решения. Отчёт фиксирует данные и фильтры, чтобы последующий сбор не изменял сохранённое исследование."
      ],
      [
        "История из собственных наблюдений",
        "Динамика использует полные сопоставимые срезы с одинаковыми условиями и версией обработки. Нужны наблюдения минимум за два дня; пропуски не превращаются в нули, а исчезновение объявления не считается подтверждённым наймом."
      ]
    ],
    "role": "Вклад автора — выбор задачи планирования найма, проектирование поиска и аналитики, разграничение роли ИИ и скриптов, разработка с помощью ИИ и проверка результатов. Работа выполнена по собственной инициативе, без заказчика.",
    "resultTitle": "Данные для обсуждения условий найма",
    "result": "MarketLens объединяет поиск, отбор, сравнение предложений и проверку оснований. Компания может изучить работодателей и условия в выбранном сегменте, затем сохранить исследование для обсуждения вакансии внутри команды.\n\nВ показанном срезе HH по геодезисту — 30 подходящих вахтовых объявлений от 26 компаний; 28 объявлений содержат зарплатные данные. Для «Работы России» сохранён отдельный завершённый сбор машиниста бульдозера от 8 октября: при выбранном вахтовом формате — 119 подходящих объявлений от 98 компаний. Это результаты конкретных поисков и фильтров, а не весь рынок. Измерений влияния на скорость найма или экономию времени нет.",
    "trudCaption": "«Работа России», машинист бульдозера: 119 подходящих вахтовых объявлений от 98 компаний. Период оплаты в этой группе не указан — суммы не выдаются за месячную зарплату.",
    "proofTitle": "Проверка работоспособности",
    "proof": "При подготовке кейса повторно прошли 114 автоматических тестов и production-сборка интерфейса. Проверки охватывают поисковые профили, отбор ролей и специализаций, требования, зарплаты, пагинацию, ограничения источников, историю и экспорт.\n\nСкриншоты сделаны в работающем приложении на копии сохранённой базы. Проверены переключение анализов, графики, требования и карточка вакансии. Новый сбор и новые запросы к Gemini для кейса не выполнялись.",
    "limits": "Демоверсия работает локально. Доступность источников и полнота среза ограничивают выводы; возможные межплощадочные повторы отмечаются, но не объединяются автоматически. Точность отбора на независимо размеченном наборе не измерена. Интерфейс приложения русский; кейс подготовлен на RU/EN.",
    "stackTitle": "Технологии и их назначение",
    "stack": [
      [
        "Python · FastAPI · httpx · BeautifulSoup",
        "API приложения, сбор «Работы России» и чтение открытых страниц HH."
      ],
      [
        "Gemini",
        "Подготовка редактируемого поискового профиля профессии."
      ],
      [
        "pymorphy3 · программные правила",
        "Словоформы, отбор должностей и извлечение явных требований с основаниями."
      ],
      [
        "SQLite",
        "Сохранённые анализы, поисковые профили, отчёты и расписание наблюдений."
      ],
      [
        "React · TypeScript · ECharts",
        "Интерфейс, фильтры, зарплатные распределения и графики рынка."
      ],
      [
        "Excel · CSV · HTML",
        "Экспорт выбранных вакансий и фиксированный отчёт для печати в PDF."
      ]
    ],
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "back": "← Все работы"
  },
  "en": {
    "kicker": "MARKETLENS / JOB MARKET ANALYTICS",
    "title": "Research the job market before hiring",
    "intro": "MarketLens helps a company assess the market for a chosen profession before recruiting: how many offers other employers publish, who is hiring, and which salaries and requirements they state.\n\nThe application collects real HeadHunter and Jobs in Russia listings, separates matching roles from adjacent ones and analyses the selected sample. It was independently built as a demo for hiring planning.",
    "status": "Independent demo · Real data · Local application",
    "heroCaption": "Surveyor, HeadHunter: a saved limited sample from 10 October 2026. With “Rotation only” selected: 30 matching listings from 26 companies; 28 disclose salary information.",
    "taskTitle": "Understand the offers a new vacancy will compete with",
    "task": "Before recruiting, a company needs to review other employers’ offers for the same profession: listing counts, companies, locations, pay, experience and skills. These observations support discussions about the terms of a new vacancy.\n\nThe same profession may have different titles, while broad searches include unrelated roles. The task was to combine query expansion, explainable screening and analysis. The application researches employer offers; applicant interest and application counts are not measured.",
    "solutionTitle": "How MarketLens works",
    "steps": [
      [
        "Prepare a profession search",
        "Users specify a profession, country, region, work format and sources. Gemini suggests queries, synonyms, role and specialisation; the profile can be reviewed and edited before collection."
      ],
      [
        "Collect and screen listings",
        "HeadHunter covers Russia and Kazakhstan; Jobs in Russia covers Russia. Scripts remove duplicates within each source and separate matching, adjacent, uncertain and excluded roles."
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
        "AI prepares the search only",
        "Gemini receives the profession name and helps build a profile. Listing texts are not sent to the model: scripts perform screening, requirement extraction and calculations. Saved or manually edited profiles avoid another AI request."
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
        "Preparation of an editable profession search profile."
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
    "back": "← All projects"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
