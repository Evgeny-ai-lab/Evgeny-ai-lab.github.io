const copy={
  "ru": {
    "kicker": "SKILLSCOPE / АНАЛИТИКА НАВЫКОВ И ОБУЧЕНИЯ",
    "title": "От требований работодателей к программе обучения",
    "intro": "SkillScope собирает IT-вакансии, выделяет навыки и сопоставляет их с учебной программой. Приложение помогает увидеть, какие темы востребованы в выбранном срезе и где программе не хватает практики.\n\nПользователь может проверить основания в текстах вакансий, уточнить глубину обучения и сохранить отчёт для обсуждения изменений программы.",
    "status": "Рабочее локальное приложение · Реальные вакансии и учебный пример",
    "heroCaption": "Обзор сохранённого среза Arbeitnow и Remotive: 147 IT-объявлений, рейтинг навыков и структура направлений. Даты и ограничения источников видны рядом с фильтрами.",
    "taskTitle": "Связать содержание обучения с наблюдаемыми требованиями рынка",
    "task": "Для анализа учебной программы недостаточно списка популярных технологий. Нужно понимать, в каких вакансиях встречается навык, является ли он требованием или только упоминанием и есть ли в программе задания для его освоения.\n\nРучной просмотр объявлений и сопоставление с темами курса затрудняют повторную проверку: меняются вакансии, фильтры и сама программа.\n\nТребовалось объединить сбор, анализ навыков и аудит обучения в одном приложении, сохранив проверяемые основания и версии результата.",
    "solutionTitle": "Как работает SkillScope",
    "steps": [
      [
        "Собирает вакансии",
        "Приложение получает объявления Arbeitnow и Remotive, сохраняет исходные ответы и срезы. Есть ручное обновление, расписание и импорт JSON с отдельной отметкой происхождения."
      ],
      [
        "Выделяет навыки",
        "Словарь и контекстные правила находят навыки, отделяют требования от плюсов, упоминаний и тегов. Карточка вакансии показывает цитаты, на которых основана разметка."
      ],
      [
        "Сопоставляет с программой",
        "Пользователь вставляет текст учебной программы. Приложение находит темы, оценивает покрытие практикой и показывает пробелы; глубину можно исправить вручную."
      ],
      [
        "Сохраняет результат",
        "Версии программы можно сравнивать. Отчёт фиксирует выбранный срез и аудит, а статистика CSV и график SVG позволяют использовать результаты дальше."
      ]
    ],
    "interactiveTitle": "От общей статистики к проверяемым основаниям",
    "interactive": "Фильтры по источникам, направлению, грейду, формату работы, возрасту публикации и виду разметки задают выборку для анализа. Рейтинг и матрица показывают, как отличаются навыки между IT-направлениями.\n\nИз анализа можно перейти к вакансиям и проверить конкретные цитаты. Автоматическая разметка остаётся объяснимой: пользователь видит исходный фрагмент, а не только итоговый процент.",
    "skillsCaption": "Матрица «навык × направление» показывает долю объявлений с навыком в каждом сегменте. Результат относится к выбранным источникам и фильтрам.",
    "evidenceCaption": "Карточка реальной вакансии: найденные навыки, типы упоминаний и фрагменты-основания. Контакты скрываются приложением.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Происхождение данных сохраняется",
        "Сырые ответы источников, контрольные суммы, версии обработки и даты сборов сохраняются локально. Импорт обозначается отдельно; ошибки доступа не заменяются вымышленными вакансиями."
      ],
      [
        "Правила с цитатами вместо непрозрачной оценки",
        "Извлечение навыков выполняется словарём и контекстными правилами. Обязательное требование, преимущество, упоминание и тег источника учитываются раздельно; основание доступно в карточке."
      ],
      [
        "Единая выборка для анализа и экспорта",
        "Фильтры применяются к статистике, матрице, аудиту и отчёту. Навык считается один раз на вакансию; объявления без распознанных навыков остаются в знаменателе доли."
      ],
      [
        "Разные источники без вымышленной общей истории",
        "Последние доступные срезы объединяются с указанием отдельных дат и охвата. Совпадения между площадками могут повторяться. История строится при выборе одной площадки и только из собственных наблюдений."
      ],
      [
        "Практика отдельно от упоминания темы",
        "В аудите простое наличие темы не равно её освоению. Пользователь уточняет уровень: нет, упоминание, практика или практика с оценкой. Версии сохраняют эти решения и позволяют сравнивать изменения."
      ],
      [
        "Отчёт остаётся фиксированным",
        "Сохранённый отчёт содержит фильтры, основания и показатели одного среза. Новый сбор или изменение учебной программы не переписывают ранее сохранённый результат."
      ]
    ],
    "resultTitle": "Основания для доработки учебной программы",
    "result": "SkillScope позволяет пройти путь от реальных объявлений к списку навыков, пробелам программы и сохранённому отчёту. Пользователь видит, какие темы стоит проверить и где добавить практические задания.\n\nВ показанном срезе от 5 октября 2026 года объединены 136 IT-объявлений Arbeitnow и 11 Remotive. Навыки найдены в 124 из 147 объявлений; Python встречается в 64 объявлениях — 43,54% при выборе «Все упоминания». Это показатель конкретной выборки, а не всего рынка или только обязательных требований.\n\nУчебная программа на снимках — демонстрационный пример. Процент покрытия взвешен по частоте навыков в вакансиях и не измеряет качество курса или вероятность трудоустройства.",
    "courseCaption": "Аудит учебного примера: распознанные темы, покрытие практикой и предложения следующих модулей. Уровень каждого навыка можно уточнить вручную.",
    "reportCaption": "Самостоятельный HTML-отчёт с фиксированным срезом, фильтрами, рейтингом и аудитом программы. Его можно открыть отдельно и распечатать в PDF.",
    "proofTitle": "Проверка работоспособности",
    "proof": "При подготовке кейса повторно прошли 43 автоматических теста и production-сборка интерфейса. Тесты проверяют обработку данных, фильтры, контекстные правила, версии программы, экспорт и неизменность отчёта.\n\nСкриншоты сделаны в работающем приложении на копии сохранённой базы. Проверены обзор, матрица, карточка вакансии, разбор учебного примера и создание HTML-отчёта. Новый сетевой сбор для кейса не выполнялся.",
    "limits": "Данные ограничены срезами источников; доступ HH в предыдущей проверке возвращал 403 и здесь не заявляется как подтверждённый. Независимая оценка точности разметки не проведена. Интерфейс приложения пока русский; описание кейса подготовлено на RU/EN.",
    "role": "Вклад автора — постановка задачи, выбор сценария «рынок → навыки → обучение», требования к проверяемости и сохранению результатов, разработка с помощью ИИ и проверка приложения. Во время работы SkillScope внешняя ИИ-модель не используется.",
    "stack": [
      [
        "Python · FastAPI",
        "API приложения, сбор вакансий, обработка данных и расписание."
      ],
      [
        "SQLite",
        "Срезы, версии вакансий, учебные программы и фиксированные отчёты."
      ],
      [
        "Словарь · контекстные правила",
        "Классификация направлений и объяснимое извлечение навыков с цитатами."
      ],
      [
        "React · TypeScript · ECharts",
        "Интерфейс, фильтры, рейтинг, матрица и интерактивные графики."
      ],
      [
        "CSV · SVG · HTML",
        "Статистика, векторный график и самостоятельный отчёт для дальнейшей работы."
      ]
    ],
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "back": "← Все работы",
    "stackTitle": "Технологии и их назначение"
  },
  "en": {
    "kicker": "SKILLSCOPE / SKILLS & CURRICULUM ANALYTICS",
    "title": "From employer requirements to a learning programme",
    "intro": "SkillScope collects IT job listings, extracts skills and compares them with a learning programme. It helps identify topics mentioned in a selected market sample and gaps in practical assignments.\n\nUsers can inspect evidence in job descriptions, adjust the depth of coverage and save a report to discuss curriculum changes.",
    "status": "Working local application · Real job listings and a sample curriculum",
    "heroCaption": "Saved Arbeitnow and Remotive sample: 147 IT listings, skill rankings and role distribution. Source dates and limitations appear alongside the filters.",
    "taskTitle": "Connect learning content with observed employer requirements",
    "task": "A list of popular technologies is not enough to review a curriculum. Users need to know which listings mention a skill, whether it is a requirement or merely a mention, and whether the programme includes practice.\n\nManual review makes repeatable comparison difficult as listings, filters and curricula change.\n\nThe task was to bring collection, skill analysis and curriculum auditing into one application with traceable evidence and versioned results.",
    "solutionTitle": "How SkillScope works",
    "steps": [
      [
        "Collect listings",
        "The application retrieves Arbeitnow and Remotive listings and stores raw responses and snapshots. Manual updates, scheduling and JSON import with explicit provenance are supported."
      ],
      [
        "Extract skills",
        "A dictionary and context rules identify skills, separating requirements, advantages, mentions and source tags. Listing details show the supporting quotes."
      ],
      [
        "Compare the curriculum",
        "Users paste a programme description. The application finds topics, assesses practical coverage and identifies gaps; coverage levels can be corrected manually."
      ],
      [
        "Save the result",
        "Programme versions can be compared. Reports freeze the selected sample and audit; CSV statistics and SVG charts support further use."
      ]
    ],
    "interactiveTitle": "From aggregate statistics to traceable evidence",
    "interactive": "Source, role, seniority, work format, publication age and annotation filters define the sample. Rankings and the matrix reveal differences between IT roles.\n\nUsers can open listings and inspect supporting quotes. Automated annotations remain explainable through source excerpts rather than percentages alone.",
    "skillsCaption": "The skill-by-role matrix shows the share of listings mentioning each skill within each segment. Values refer to the selected sources and filters.",
    "evidenceCaption": "Actual listing details: extracted skills, mention types and supporting excerpts. The application hides contact details.",
    "engineeringTitle": "Key development decisions",
    "engineering": [
      [
        "Preserve data provenance",
        "Raw responses, checksums, processing versions and collection dates are stored locally. Imports are labelled separately; access errors are never replaced with invented listings."
      ],
      [
        "Context rules with supporting quotes",
        "A dictionary and context rules extract skills. Requirements, advantages, mentions and source tags are handled separately, with supporting excerpts available in listing details."
      ],
      [
        "One sample across analysis and export",
        "Filters apply to statistics, the matrix, audits and reports. A skill is counted once per listing; listings without recognised skills remain in the denominator."
      ],
      [
        "Multiple sources without an invented shared timeline",
        "Latest available source snapshots are combined with separate dates and scope. Cross-source duplicates may remain. Historical charts use one source and recorded observations only."
      ],
      [
        "Separate practice from a topic mention",
        "A topic appearing in the text is not treated as mastery. Users specify no coverage, a mention, practice or assessed practice. Versions retain these decisions for comparison."
      ],
      [
        "Keep reports fixed",
        "Saved reports contain the filters, evidence and metrics of one sample. New collection or curriculum edits do not rewrite previously saved results."
      ]
    ],
    "resultTitle": "Evidence for curriculum improvements",
    "result": "SkillScope connects real listings with skill rankings, curriculum gaps and a saved report. Users can identify topics to review and opportunities for practical assignments.\n\nThe displayed sample from 5 October 2026 combines 136 Arbeitnow IT listings and 11 Remotive listings. Skills were recognised in 124 of 147 listings; Python appears in 64, or 43.54%, with “All mentions” selected. This describes the specific sample, rather than the entire market or mandatory requirements alone.\n\nThe curriculum shown is a demonstration example. Coverage is weighted by skill frequency in listings and does not measure course quality or employment probability.",
    "courseCaption": "Sample curriculum audit: recognised topics, practical coverage and suggested modules. Coverage for every skill can be adjusted manually.",
    "reportCaption": "A standalone HTML report with a fixed sample, filters, ranking and curriculum audit. It can be opened separately and printed to PDF.",
    "proofTitle": "Functional verification",
    "proof": "During case preparation, all 43 automated tests passed again and the production frontend build succeeded. Tests cover data processing, filters, context rules, curriculum versions, exports and report immutability.\n\nScreenshots were captured from the working application using a copy of the saved database. The overview, matrix, listing details, sample curriculum analysis and HTML report creation were checked. No new network collection was performed for this case.",
    "limits": "Data covers limited source samples. HH returned 403 in the earlier verification; working HH access is not claimed here. Annotation accuracy has not been independently evaluated. The application interface is currently Russian; the case description is available in Russian and English.",
    "role": "The author defined the task, selected the “market → skills → learning” workflow, specified traceability and persistence requirements, developed the application with AI assistance and checked its behaviour. SkillScope does not call an external AI model during operation.",
    "stack": [
      [
        "Python · FastAPI",
        "Application API, job collection, processing and scheduling."
      ],
      [
        "SQLite",
        "Snapshots, listing versions, curricula and fixed reports."
      ],
      [
        "Dictionary · context rules",
        "Role classification and explainable skill extraction with supporting quotes."
      ],
      [
        "React · TypeScript · ECharts",
        "Interface, filters, rankings, matrix and interactive charts."
      ],
      [
        "CSV · SVG · HTML",
        "Statistics, vector charts and standalone reports for further use."
      ]
    ],
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "stackLabel": "05 / TECHNOLOGIES",
    "back": "← All projects",
    "stackTitle": "Technologies and their purpose"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
