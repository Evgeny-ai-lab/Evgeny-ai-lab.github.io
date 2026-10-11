const copy={
  "ru": {
    "kicker": "MEDFLOW / АВТОМАТИЗАЦИЯ ПОДГОТОВКИ ДОКУМЕНТОВ",
    "title": "Подготовка направлений без ручного заполнения Excel",
    "intro": "Medflow автоматизирует оформление направлений на медицинский осмотр и психиатрическое освидетельствование. Приложение извлекает данные из текстовой PDF-анкеты; также пользователь может ввести их в форму самостоятельно. Требования подставляются из справочника, а документы формируются в PDF и Excel. Готовые файлы сохраняются в личном архиве.",
    "status": "Личный проект · Автоматические и неоднократные ручные проверки",
    "taskTitle": "Сократить повторный ввод и ручные операции",
    "task": "Раньше подготовка комплекта требовала переносить данные человека в Excel, выбирать требования, проверять нужные страницы и вручную сохранять результат в нескольких форматах. Отдельно добавлялись подпись и печать. Повторные исправления увеличивали количество действий.\n\nЗадача личного проекта — заменить этот процесс последовательным сценарием: получить данные, выбрать условия, проверить заполнение и скачать готовые документы. При этом разовое исправление направления не должно менять общий справочник.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Получает данные кандидата",
        "Извлекает имя, дату рождения, пол и номер полиса из текстовой PDF-анкеты. Данные можно ввести или исправить вручную перед формированием документа."
      ],
      [
        "Подставляет требования",
        "По выбранным параметрам подбирает значения из Excel-справочника. Показывает необходимость второго направления и позволяет проверить условия до создания файлов."
      ],
      [
        "Создаёт комплект документов",
        "Заполняет шаблоны и формирует PDF и Excel с нужной областью печати. В рабочем сценарии поддерживаются подпись из профиля и печать шаблона."
      ],
      [
        "Сохраняет результат",
        "Помещает файлы в личный архив. Сформированные документы можно найти и скачать повторно без заполнения формы заново."
      ]
    ],
    "interactiveTitle": "Проверка данных перед формированием",
    "interactive": "Поля и выбранные требования остаются доступными для проверки. Пользователь может уточнить данные конкретного направления; исходный справочник при этом сохраняется.\n\nДля публичного показа подготовлен отдельный запуск с вымышленной организацией, условными позициями и демонстрационными шаблонами. Реальные данные, подписи и печати на странице не используются.",
    "heroCaption": "Форма подготовки направления. Все данные, названия и значения справочника вымышлены.",
    "explorerCaption": "Личный архив с документами, сформированными в отдельном демонстрационном запуске.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Извлечение и проверка данных",
        "Разбор текстовой PDF-анкеты сокращает повторный ввод. Проверка форматов и ручное исправление позволяют уточнить данные до создания документов."
      ],
      [
        "Справочник отдельно от формы",
        "Excel остаётся источником требований. Изменения отдельного направления не затрагивают общий справочник; обновление справочника проходит отдельную проверку и подтверждение."
      ],
      [
        "Один процесс для PDF и Excel",
        "Шаблоны заполняются программно, области печати фиксируются, а PDF создаётся из подготовленного Excel. Пользователь выбирает нужный формат или комплект файлов."
      ],
      [
        "Разделение прав и личный архив",
        "Роли пользователя, редактора и администратора ограничивают доступ на сервере. Документы связаны с учётной записью и сохраняются в личном архиве вместе с условиями формирования."
      ]
    ],
    "resultTitle": "Готовые документы вместо цепочки ручных действий",
    "result": "Подготовка направления сведена к одной форме: данные человека, условия, проверка и скачивание. Перенос значений между файлами, заполнение шаблона и создание PDF выполняются автоматически.\n\nПроект создан по собственной инициативе и неоднократно проверен вручную. При подготовке кейса в изолированном запуске подтверждены создание Excel и одностраничного PDF, скачивание комплекта и сохранение записи в архиве.",
    "dropsCaption": "PDF, сформированный в демонстрационном запуске. Данные, шаблон, синяя печать и подпись подготовлены специально для публичного показа.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Работа приложения проверена автоматическими тестами и неоднократными ручными проверками автора.\n\nДля портфолио дополнительно проверены заполнение формы, подбор значений из вымышленного справочника, формирование PDF и Excel, скачивание и личный архив. Данные созданного PDF сверены с введёнными значениями. Дополнительно проверены регистрация по приглашению, отзыв приглашения, удаление аккаунта и запрет доступа к админке для пользователя и редактора.\n\nЭто личный проект автоматизации, а не работа по заказу. Приложение выполняет операции программно и не использует языковую модель во время работы.",
    "stack": [
      [
        "Python · FastAPI",
        "Сервер, проверка данных и сценарий подготовки документов."
      ],
      [
        "pdfplumber · openpyxl",
        "Извлечение данных из текстовых PDF и заполнение Excel-шаблонов."
      ],
      [
        "LibreOffice · SQLite",
        "Преобразование документов в PDF, учётные записи и архив."
      ],
      [
        "HTML · CSS · JavaScript",
        "Форма, выбор требований, проверка и скачивание результатов."
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
    "admin": "В админке можно приглашать пользователей, назначать роль при регистрации и удалять учётные записи. Приглашение можно отозвать до его использования.\n\nПрава проверяются на сервере: управление аккаунтами доступно только администратору, а редактирование справочника — редактору и администратору. После удаления аккаунта его сеансы аннулируются. Пароли хранятся в виде хэшей; запросы на изменение данных защищены проверкой CSRF-токена.",
    "adminCaption": "Админка с вымышленными пользователями: роли, приглашения и удаление аккаунтов."
  },
  "en": {
    "kicker": "MEDFLOW / DOCUMENT PREPARATION AUTOMATION",
    "title": "Preparing referrals without manually filling Excel",
    "intro": "Medflow automates medical examination and psychiatric assessment referrals. The application extracts data from a text-based PDF questionnaire; users can also enter it directly into the form. Requirements are applied from a reference workbook, and documents are generated in PDF and Excel. Completed files are retained in a personal archive.",
    "status": "Personal project · Automated and repeated manual checks",
    "taskTitle": "Reduce repeated input and manual operations",
    "task": "Preparing a document bundle previously required transferring personal details into Excel, selecting requirements, checking print pages and saving multiple formats manually. Signatures and stamps were added separately, with corrections requiring further work.\n\nThis personal project replaces those steps with a single workflow: obtain data, select conditions, review the form and download completed documents. One-off edits must not change the shared reference workbook.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Obtains candidate data",
        "Extracts name, date of birth, gender and insurance number from a text-based PDF questionnaire. Data can be entered or corrected manually before document generation."
      ],
      [
        "Applies requirements",
        "Looks up reference workbook values for the selected parameters. Shows whether a second referral is needed and allows conditions to be reviewed before files are created."
      ],
      [
        "Creates documents",
        "Fills templates and generates PDF and Excel with defined print areas. The working workflow supports a profile signature and a template stamp."
      ],
      [
        "Retains results",
        "Stores files in the personal archive. Generated documents can be found and downloaded again without refilling the form."
      ]
    ],
    "interactiveTitle": "Review before document generation",
    "interactive": "Fields and selected requirements remain available for review. Users can adjust an individual referral while leaving the source reference workbook unchanged.\n\nThe public demonstration uses an isolated instance with a fictional organization, placeholder positions and newly prepared templates. No real records, signatures or stamps appear on this page.",
    "heroCaption": "Referral preparation form. All personal details, names and reference values are fictional; Russian interface.",
    "explorerCaption": "Personal archive of documents created in the isolated demonstration; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Data extraction and validation",
        "Parsing a text-based PDF reduces repeated input. Format validation and manual correction allow details to be reviewed before files are generated."
      ],
      [
        "Reference data separate from the form",
        "Excel remains the source of requirements. Individual referral edits do not affect shared data; workbook updates require separate validation and confirmation."
      ],
      [
        "A shared PDF and Excel workflow",
        "Templates are filled programmatically with fixed print areas. PDF is created from the prepared workbook; users choose a format or a document bundle."
      ],
      [
        "Role permissions and personal archives",
        "User, editor and administrator permissions are enforced on the server. Documents are linked to an account and retained in its personal archive together with their generation settings."
      ]
    ],
    "resultTitle": "Completed documents instead of a sequence of manual steps",
    "result": "Preparation is reduced to a single form: personal details, conditions, review and download. Data transfer, template filling and PDF creation are automated.\n\nThe project was developed independently and repeatedly tested manually. Portfolio preparation verified Excel and single-page PDF creation, bundle download and archive storage in an isolated instance.",
    "dropsCaption": "PDF generated by the demonstration instance. The data, template, blue stamp and signature were prepared specifically for public presentation.",
    "proofTitle": "Functional verification",
    "proof": "Application behavior has been checked through automated tests and repeated manual verification by its author.\n\nPortfolio checks additionally covered form completion, synthetic reference lookups, PDF and Excel generation, download and the personal archive. Generated PDF data was compared with the entered values. Additional checks covered invitation-based registration, invitation revocation, account removal and denied administration access for users and editors.\n\nThis is an independently initiated automation project, not commissioned client work. Runtime operations are implemented in code without a language model.",
    "stack": [
      [
        "Python · FastAPI",
        "Server, input validation and document preparation workflow."
      ],
      [
        "pdfplumber · openpyxl",
        "Extracting text-based PDF data and filling Excel templates."
      ],
      [
        "LibreOffice · SQLite",
        "PDF conversion, accounts and archive storage."
      ],
      [
        "HTML · CSS · JavaScript",
        "Form, requirement selection, review and downloads."
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
    "admin": "Administrators invite users, assign a role at registration and remove accounts. Invitations can be revoked before they are used.\n\nPermissions are enforced on the server: only administrators can manage accounts, while editors and administrators can update the reference workbook. Removing an account invalidates its sessions. Passwords are stored as hashes, and data-changing requests require CSRF token validation.",
    "adminCaption": "Administration with fictional users: roles, invitations and account removal; Russian interface."
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
