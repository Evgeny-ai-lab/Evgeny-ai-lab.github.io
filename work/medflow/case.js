const copy={
  "ru": {
    "kicker": "MEDFLOW / АВТОМАТИЗАЦИЯ ПОДГОТОВКИ ДОКУМЕНТОВ",
    "title": "Автоматическое оформление направлений на медосмотр",
    "intro": "Medflow — серверное приложение для автоматизации подготовки направлений на медицинский осмотр и психиатрическое освидетельствование.\n\nПриложение извлекает необходимые данные кандидата из PDF-анкеты. Пользователю остаётся выбрать бизнес-единицу, структурное подразделение и должность. На основании этих параметров система автоматически подставляет требования из Excel-справочника, заполняет шаблоны и формирует готовые документы в PDF, Excel или обоих форматах. При необходимости автоматически подобранные требования можно скорректировать вручную. Результаты сохраняются в личном архиве.",
    "status": "Работающая демоверсия · Проверено автоматическими тестами и вручную",
    "taskTitle": "Избавиться от сложных Excel-формул и ручного оформления",
    "task": "Раньше направления оформлялись через Excel-шаблоны со сложными взаимосвязанными формулами. Поддерживать такие таблицы было неудобно: формулы могли нарушаться, а любые изменения требовали дополнительной проверки.\n\nДанные кандидата приходилось переносить из анкеты вручную — отдельно фамилию, имя, отчество, дату рождения и другие сведения. После заполнения нужно было проверить документ, подготовить его к печати, вручную преобразовать Excel в PDF и только затем отправить кандидату.\n\nЗадача — объединить эти действия в одном приложении: исключить повторный ввод, автоматизировать подбор требований и формирование документов, сократить время оформления и вероятность ошибок.",
    "solutionTitle": "Как работает Medflow",
    "steps": [
      [
        "Получение данных кандидата",
        "Пользователь загружает текстовую PDF-анкету. Приложение автоматически извлекает только необходимые сведения: фамилию, имя, отчество, дату рождения, пол и номер полиса ОМС. При необходимости данные можно ввести или исправить вручную."
      ],
      [
        "Автоматический подбор требований",
        "Пользователь выбирает бизнес-единицу, структурное подразделение и должность. Приложение автоматически подбирает соответствующие вредные и опасные производственные факторы из Excel-справочника и определяет необходимость психиатрического освидетельствования. При необходимости пользователь может вручную изменить подобранные требования перед формированием документов."
      ],
      [
        "Формирование готовых документов",
        "Приложение автоматически заполняет утверждённые шаблоны и подготавливает документы к печати. Пользователь выбирает формат скачивания: PDF, Excel или оба сразу. Печать организации предусмотрена в шаблоне, а изображение личной подписи достаточно загрузить в профиль один раз — в дальнейшем оно подставляется автоматически."
      ],
      [
        "Сохранение в личном архиве",
        "Сформированные документы сохраняются на сервере в личном архиве пользователя. Их можно найти, просмотреть, отредактировать и скачать повторно без необходимости начинать оформление заново."
      ]
    ],
    "interactiveTitle": "Проверка и корректировка данных",
    "interactive": "Перед формированием документов пользователь может проверить и при необходимости скорректировать автоматически заполненные сведения: изменить перечень вредных и опасных производственных факторов, необходимость психиатрического освидетельствования и другие доступные параметры.\n\nВсе изменения применяются только к текущему направлению и не затрагивают исходный справочник.\n\nДля публичной демонстрации используется отдельный запуск приложения с вымышленной организацией, условными должностями и специально подготовленными шаблонами. Реальные персональные данные, подписи и печати на странице не используются.",
    "heroCaption": "Форма подготовки направления. Все персональные данные, названия и значения справочника в демонстрации вымышлены.",
    "explorerCaption": "Личный архив сформированных документов. Показаны демонстрационные данные.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Автоматическая обработка PDF-анкет",
        "Приложение извлекает из текстовых PDF только сведения, необходимые для оформления направлений. Предусмотрены проверка форматов, обработка ошибок и возможность ручной корректировки данных."
      ],
      [
        "Справочник и зависимый выбор параметров",
        "Excel-справочник содержит правила и требования для различных подразделений и должностей. Приложение использует их для автоматического заполнения формы. Пользователь может корректировать подобранные производственные факторы и другие параметры конкретного направления, не изменяя исходный справочник. Обновление самого справочника проходит проверку и подтверждение."
      ],
      [
        "Автоматическое создание PDF и Excel",
        "Документы формируются по подготовленным шаблонам с заданными областями печати. Приложение заполняет Excel, добавляет необходимые реквизиты и преобразует документ в PDF без ручного форматирования."
      ],
      [
        "Серверная архитектура и разграничение доступа",
        "Приложение работает на сервере и доступно нескольким пользователям через браузер. Учётные записи, права доступа и сведения о сформированных документах управляются централизованно. Каждый пользователь работает со своим архивом."
      ]
    ],
    "resultTitle": "От анкеты кандидата до готового направления",
    "result": "Полноценное работающее приложение заменяет многоэтапное оформление документов в Excel единым и понятным процессом.\n\nВместо ручного переноса данных, сложных формул, заполнения шаблонов и преобразования файлов пользователь загружает анкету, выбирает необходимые параметры, при необходимости корректирует автоматически подобранные требования и получает готовые направления в нужном формате.\n\nОсновной результат — сокращение ручных операций, упрощение оформления и снижение риска ошибок. Приложение развёрнуто на сервере, поддерживает многопользовательскую работу и сохраняет сформированные документы в личных архивах.",
    "dropsCaption": "Пример PDF-направления, сформированного приложением. Документ, подпись и печать созданы специально для демонстрации.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Работа приложения проверена автоматическими тестами и серией ручных функциональных проверок.\n\nПротестированы извлечение и корректировка данных, выбор параметров из справочника, формирование PDF и Excel, скачивание документов и работа личного архива. Содержимое созданных документов сверялось с исходными данными.\n\nОтдельно проверены регистрация по приглашениям, управление пользователями, разграничение прав и ограничения доступа к административным функциям.\n\nВсе основные операции выполняются программно по заданным правилам, без использования языковых моделей.",
    "stack": [
      [
        "Python · FastAPI",
        "Серверная логика, обработка данных, проверка заполнения и управление формированием документов."
      ],
      [
        "pdfplumber · openpyxl",
        "Извлечение информации из текстовых PDF-анкет, работа с Excel-справочниками и заполнение шаблонов."
      ],
      [
        "LibreOffice · SQLite",
        "Преобразование Excel в PDF, хранение учётных записей, сессий и метаданных документов."
      ],
      [
        "HTML · CSS · JavaScript",
        "Пользовательский интерфейс, интерактивные формы, выбор параметров, редактирование и скачивание документов."
      ]
    ],
    "back": "← Все работы",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение",
    "adminTitle": "Управление пользователями и доступом",
    "admin": "Приложение поддерживает многопользовательскую работу с разграничением прав доступа. Администратор создаёт приглашения, назначает роли и управляет учётными записями. Предусмотрены три роли: пользователь, редактор и администратор.\n\nОбычный пользователь работает с направлениями и собственным архивом. Редактор дополнительно может обновлять справочник, а администратор управляет пользователями и доступом.\n\nПроверка прав выполняется на сервере. Пароли хранятся в виде защищённых хэшей, операции изменения данных защищены CSRF-токенами, а при удалении учётной записи активные сеансы аннулируются.",
    "adminCaption": "Панель администратора: управление пользователями, ролями и приглашениями. Все данные демонстрационные.",
    "adaptTitle": "Варианты развёртывания и адаптации",
    "adaptIntro": "Текущая реализация Medflow — один из возможных вариантов использования. Приложение можно адаптировать под инфраструктуру конкретной организации, её внутренние процессы и требования к работе с данными.",
    "adaptOutro": "Таким образом, Medflow не ограничивается представленной серверной конфигурацией. Его можно использовать как самостоятельный инструмент, развивать в корпоративный сервис или интегрировать в существующие информационные системы. Конкретный вариант реализации определяется задачами и техническими требованиями организации.",
    "adaptItems": [
      [
        "Корпоративное развёртывание",
        "Приложение можно разместить на внутреннем сервере организации, подключить к корпоративным системам, базам данных и сервисам авторизации. Это позволит использовать существующую инфраструктуру предприятия, централизованно управлять доступом и организовать обмен данными с другими системами."
      ],
      [
        "Локальная версия",
        "Возможна переработка в самостоятельное приложение, устанавливаемое на компьютеры сотрудников без необходимости использования общего сервера. Каждый пользователь сможет работать со своими документами и локальными справочниками, а при изменении требований — обновлять используемые файлы."
      ],
      [
        "Адаптация справочников и шаблонов",
        "Логику приложения можно настроить под другие формы документов, структуру справочников и правила заполнения. При обновлении нормативных требований или внутренних регламентов предусмотрена возможность адаптации используемых Excel-справочников и шаблонов документов. В зависимости от характера изменений может потребоваться и корректировка программной логики."
      ]
    ]
  },
  "en": {
    "kicker": "MEDFLOW / DOCUMENT PREPARATION AUTOMATION",
    "title": "Automatic preparation of medical examination referrals",
    "intro": "Medflow is a server application for automating referrals for medical examinations and psychiatric assessments.\n\nThe application extracts the required candidate details from a PDF questionnaire. Users select a business unit, department and position. Based on these parameters, the system applies requirements from an Excel reference workbook, fills templates and generates PDF, Excel or both formats. Automatically selected requirements can be adjusted manually if needed. Results are retained in a personal archive.",
    "status": "Working demo · Verified through automated and manual tests",
    "taskTitle": "Replace complex Excel formulas and manual preparation",
    "task": "Referrals were previously prepared using Excel templates with complex interdependent formulas. These spreadsheets were difficult to maintain: formulas could break, and changes required additional checks.\n\nCandidate details had to be transferred manually from the questionnaire, including surname, first name, patronymic, date of birth and other information. The completed document then had to be checked, prepared for printing and manually converted from Excel to PDF before being sent to the candidate.\n\nThe task was to bring these steps into one application: eliminate repeated input, automate requirement selection and document generation, and reduce preparation time and the likelihood of errors.",
    "solutionTitle": "How Medflow works",
    "steps": [
      [
        "Obtaining candidate details",
        "Users upload a text-based PDF questionnaire. The application extracts only the required information: surname, first name, patronymic, date of birth, gender and insurance policy number. Details can also be entered or corrected manually."
      ],
      [
        "Selecting requirements automatically",
        "Users select a business unit, department and position. The application looks up the relevant harmful and hazardous workplace factors in an Excel reference workbook and determines whether a psychiatric assessment is required. Users can adjust the selected requirements before documents are generated."
      ],
      [
        "Generating completed documents",
        "The application fills approved templates and prepares documents for printing. Users choose PDF, Excel or both. The organization stamp is included in the template; a personal signature image is uploaded to the profile once and inserted automatically thereafter."
      ],
      [
        "Retaining documents in a personal archive",
        "Generated documents are stored on the server in the user’s personal archive. They can be found, viewed, edited and downloaded again without starting preparation from scratch."
      ]
    ],
    "interactiveTitle": "Reviewing and correcting data",
    "interactive": "Before generating documents, users can review and adjust automatically populated information, including the harmful and hazardous workplace factors, the need for a psychiatric assessment and other available parameters.\n\nChanges apply only to the current referral and do not affect the source reference workbook.\n\nThe public demonstration runs in a separate instance with a fictional organization, placeholder positions and specially prepared templates. No real personal records, signatures or stamps are used on this page.",
    "heroCaption": "Referral preparation form. All personal details, names and reference values in this demonstration are fictional; Russian interface.",
    "explorerCaption": "Personal archive of generated documents. Demonstration data; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Automatic PDF questionnaire processing",
        "The application extracts only the details needed to prepare referrals from text-based PDFs. It includes format validation, error handling and manual correction."
      ],
      [
        "Reference data and dependent parameter selection",
        "The Excel reference workbook contains rules and requirements for departments and positions. The application uses them to populate the form automatically. Users can adjust workplace factors and other parameters for an individual referral without altering the source workbook. Workbook updates require validation and confirmation."
      ],
      [
        "Automatic PDF and Excel generation",
        "Documents are generated from prepared templates with defined print areas. The application fills Excel, adds the required document elements and converts it to PDF without manual formatting."
      ],
      [
        "Server architecture and access permissions",
        "The application runs on a server and is available to multiple users through a browser. Accounts, access permissions and generated document records are managed centrally. Each user works with their own archive."
      ]
    ],
    "resultTitle": "From a candidate questionnaire to a completed referral",
    "result": "A fully working application replaces the multi-step Excel document process with a single, clear workflow.\n\nInstead of manually transferring data, maintaining complex formulas, filling templates and converting files, users upload a questionnaire, select parameters, adjust automatically selected requirements if needed and receive completed referrals in the required format.\n\nThe main result is fewer manual operations, simpler preparation and a lower risk of errors. The application is deployed on a server, supports multiple users and stores generated documents in personal archives.",
    "dropsCaption": "Example PDF referral generated by the application. The document, signature and stamp were created specifically for demonstration.",
    "proofTitle": "Functional verification",
    "proof": "Application behavior has been checked through automated tests and a series of manual functional checks.\n\nChecks covered data extraction and correction, reference-based parameter selection, PDF and Excel generation, document download and the personal archive. Generated document contents were compared with source data.\n\nInvitation-based registration, user management, role permissions and restricted administration access were checked separately.\n\nAll core operations follow programmed rules without language models.",
    "stack": [
      [
        "Python · FastAPI",
        "Server logic, data processing, input validation and document generation management."
      ],
      [
        "pdfplumber · openpyxl",
        "Extracting information from text-based PDF questionnaires, using Excel reference workbooks and filling templates."
      ],
      [
        "LibreOffice · SQLite",
        "Excel-to-PDF conversion and storage of accounts, sessions and document metadata."
      ],
      [
        "HTML · CSS · JavaScript",
        "User interface, interactive forms, parameter selection, editing and document downloads."
      ]
    ],
    "back": "← All projects",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose",
    "adminTitle": "User and access management",
    "admin": "The application supports multiple users with distinct access permissions. Administrators create invitations, assign roles and manage accounts. Three roles are available: user, editor and administrator.\n\nUsers work with referrals and their own archives. Editors can also update the reference workbook, while administrators manage users and access.\n\nPermissions are checked on the server. Passwords are stored as secure hashes, data-changing operations require CSRF tokens, and deleting an account invalidates its active sessions.",
    "adminCaption": "Administration panel: users, roles and invitations. All data is for demonstration; Russian interface.",
    "adaptTitle": "Deployment and adaptation options",
    "adaptIntro": "The current Medflow implementation represents one possible use. The application can be adapted to an organization’s infrastructure, internal processes and data handling requirements.",
    "adaptItems": [
      [
        "Corporate deployment",
        "The application could be hosted on an internal server and connected to corporate systems, databases and authentication services. This would allow it to use existing enterprise infrastructure, centralize access management and exchange data with other systems."
      ],
      [
        "Local version",
        "It could be reworked as a standalone application installed on staff computers without a shared server. Each user would work with local documents and reference files, updating those files as requirements change."
      ],
      [
        "Adapting reference data and templates",
        "Application logic can be configured for other document forms, reference structures and completion rules. Excel reference workbooks and document templates can be adapted when regulations or internal procedures change. Depending on the changes, program logic may also need to be updated."
      ]
    ],
    "adaptOutro": "Medflow is therefore not limited to the server configuration shown here. It can be used as a standalone tool, developed into a corporate service or integrated into existing information systems. The implementation depends on the organization’s tasks and technical requirements."
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack'],['adapt-grid','adaptItems']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
