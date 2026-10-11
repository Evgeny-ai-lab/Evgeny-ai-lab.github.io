const copy={
  "ru": {
    "kicker": "ALL STOCK / АВТОМАТИЗАЦИЯ ПРОИЗВОДСТВА СТОКОВОГО КОНТЕНТА",
    "title": "От темы до 4K-изображений и метаданных для стоков",
    "intro": "All Stock объединяет подготовку промптов, генерацию изображений и оформление метаданных в одном приложении. Пользователь задаёт темы и выбирает режим работы; система создаёт задания и метаданные с учётом форматов стоков, генерирует изображения через API и сохраняет результат вместе с CSV для загрузки.",
    "status": "Работающее приложение · Реальные результаты генерации",
    "taskTitle": "Объединить разрозненные этапы производства",
    "task": "Подготовка изображений для фотостоков состоит из нескольких задач: придумать сюжеты, написать промпты, получить изображения, составить названия и ключевые слова, привести файлы к нужным именам и сформировать таблицы для разных площадок. При работе с большими подборками ручные переходы между инструментами замедляют процесс и приводят к несоответствию файлов и метаданных.\n\nЗадача — собрать эти этапы в управляемый процесс, сохранив выбор моделей, режимов и форматов. При этом генератор изображений и очистка файлов должны работать и отдельно, с материалами из других инструментов.",
    "solutionTitle": "Что делает приложение",
    "steps": [
      [
        "Принимает темы и контекст",
        "Темы можно ввести вручную, загрузить из TXT или CSV либо подготовить в Stock Insights. Вместе с темой можно передать контекст, который уточняет будущий сюжет."
      ],
      [
        "Создаёт промпты и метаданные",
        "Выбранная LLM формирует задания и данные для стоков. Режим определяет один кадр или несколько разных сюжетов; настройки задают пропорции изображений, расширения файлов в CSV и распределение по папкам."
      ],
      [
        "Автоматически генерирует изображения",
        "После подготовки промптов сервер запускает выбранную модель изображений через API с запросом 4K. Сохраняются PNG-мастера и JPEG-файлы; технические метаданные очищаются с сохранением цветового профиля."
      ],
      [
        "Формирует файлы для площадок",
        "Из сохранённых результатов готовятся отдельные CSV для Adobe Stock, 123RF, Dreamstime и Vecteezy, а также форматы MicrostockPlus. Имена изображений связываются с соответствующими строками метаданных."
      ]
    ],
    "interactiveTitle": "Полный процесс и отдельные инструменты",
    "interactive": "Основной сценарий запускает изображения после генерации промптов. Можно также загрузить CSV с готовыми промптами — написанными вручную или полученными в другой программе — и использовать только генератор изображений.\n\nОчистка доступна отдельной вкладкой для внешних файлов: удаляет технические EXIF/XMP/IPTC и суффиксы апскейлеров в названиях, сохраняя ICC-профиль. Сам апскейлер в этот процесс не входит.",
    "heroCaption": "Генератор промптов: режим, LLM, формат CSV, организация папок и сохранённая рабочая сессия.",
    "explorerCaption": "Генератор изображений: выбор модели, отдельный импорт CSV и статус сохранённой сессии — 100/100 изображений.",
    "filteredCaption": "Отдельная очистка метаданных: обработка внешних изображений и переименование файлов с сохранением ICC-профиля.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Согласование всех этапов",
        "Темы, промпты, метаданные и имена файлов связаны внутри сессии. Автоматический переход к изображениям и последующий экспорт снимают необходимость переносить данные между этапами вручную."
      ],
      [
        "Раздельные модели и режимы",
        "Текстовая LLM и модель изображений выбираются независимо. Настраиваемые инструкции управляют подготовкой одного кадра, серии или нескольких разных идей под одну тему."
      ],
      [
        "Устойчивость к ошибкам API",
        "Временные ошибки обрабатываются повторными попытками с паузами. Неудачные изображения откладываются на второй проход; критическая ошибка квоты останавливает работу вместо бесконечного повторения запросов."
      ],
      [
        "Метаданные под разные форматы",
        "Для площадок предусмотрены отдельные схемы CSV, категории и обработка ключевых слов. Экспорт сопоставляется с существующими изображениями, чтобы таблицы соответствовали подготовленным файлам."
      ],
      [
        "Сессии и серверное выполнение",
        "Профили сохраняют параметры и рабочие папки, сессии — промпты и результаты. Задача выполняется на сервере: вкладку браузера можно закрыть, пока сам сервер продолжает работать."
      ],
      [
        "Подготовка файлов без потери цвета",
        "PNG-мастер и JPEG сохраняются отдельно. ExifTool удаляет технические поля с исключением ICC-профиля; самостоятельная очистка учитывает переименование и коллизии имён."
      ]
    ],
    "resultTitle": "Из списка тем — подготовленная партия контента",
    "result": "All Stock связывает творческую подготовку и техническое оформление в один процесс: от темы и контекста до изображений, названий, ключевых слов и отдельных CSV для площадок. Для работы с готовыми промптами или внешними изображениями можно запускать только нужный этап.\n\nВ проверенной сохранённой сессии находятся 100 PNG-мастеров. Показанные примеры имеют размер 5504 × 3072 пикселя. Вместе с изображениями сохранены CSV для разных стоков; ниже — реальные результаты и фрагмент экспорта Adobe Stock.",
    "dropsCaption": "Четыре изображения из сохранённой сессии и строки реального Adobe Stock CSV. Это подборка файлов результата, а не экран приложения.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Повторно пройден 21 автоматический тест: работа с ключами и ошибками API, сценарии генерации, подготовка промптов и обработка ключевых слов.\n\nВ браузере проверены выбор профиля и сессии, настройки генерации, отдельный импорт CSV и экран очистки. Наличие результатов сверено с файлами сохранённой сессии; новая платная генерация для подготовки кейса не запускалась.\n\nНа странице представлены реальные экраны и ранее полученные изображения. Экспорт под формат площадки не означает автоматическую публикацию или принятие изображений модерацией.",
    "stack": [
      [
        "Python · FastAPI",
        "Сервер приложения, выполнение задач и управление сессиями."
      ],
      [
        "LLM · API моделей изображений",
        "Подготовка промптов и метаданных, прямая генерация изображений с запросом 4K."
      ],
      [
        "Pillow · ExifTool",
        "Сохранение PNG/JPEG, техническая очистка и работа с цветовыми профилями."
      ],
      [
        "CSV · JavaScript",
        "Импорт заданий, экспорт для площадок и интерфейс управления."
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
    "kicker": "ALL STOCK / STOCK CONTENT PRODUCTION AUTOMATION",
    "title": "From topics to 4K images and stock metadata",
    "intro": "All Stock combines prompt preparation, image generation and metadata formatting in one application. Users provide topics and select a workflow; the system creates briefs and stock metadata, generates images through APIs and saves results alongside upload CSV files.",
    "status": "Working application · Real generation results",
    "taskTitle": "Connect separate production stages",
    "task": "Preparing stock images involves choosing subjects, writing prompts, generating images, creating titles and keywords, naming files and building platform-specific spreadsheets. For larger batches, switching tools manually slows production and causes mismatches between images and metadata.\n\nThe task was to bring these stages into a manageable workflow while preserving model, mode and format choices. Image generation and file cleanup also needed to work independently with material from other tools.",
    "solutionTitle": "What the application does",
    "steps": [
      [
        "Accepts topics and context",
        "Topics can be entered manually, imported from TXT or CSV, or prepared in Stock Insights. Optional context helps define the intended subject."
      ],
      [
        "Creates prompts and metadata",
        "The selected LLM prepares briefs and stock metadata. Modes support a single image or multiple subjects; settings control aspect ratios, CSV filename extensions and folder organization."
      ],
      [
        "Generates images automatically",
        "After prompts are prepared, the server calls the selected image model with a 4K request. PNG masters and JPEG files are saved; technical metadata is cleared while preserving the color profile."
      ],
      [
        "Prepares platform files",
        "Saved results are exported to separate CSV files for Adobe Stock, 123RF, Dreamstime and Vecteezy, plus MicrostockPlus formats. Image filenames are matched to their metadata rows."
      ]
    ],
    "interactiveTitle": "A full workflow and standalone tools",
    "interactive": "The main workflow launches image generation after prompt preparation. Users can also import ready-made prompts from a CSV file, whether written manually or produced in another program, and use only the image generator.\n\nA separate cleanup tab handles external images: it removes technical EXIF/XMP/IPTC fields and upscaler filename suffixes while preserving ICC profiles. Upscaling itself is outside this workflow.",
    "heroCaption": "Prompt generator: workflow mode, LLM, CSV format, folder organization and a saved session; Russian interface.",
    "explorerCaption": "Image generator: model choice, standalone CSV import and a saved session showing 100/100 images; Russian interface.",
    "filteredCaption": "Standalone metadata cleanup: external image processing and renaming while preserving ICC profiles; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Coordinating production stages",
        "Topics, prompts, metadata and filenames remain linked within a session. Automatic image generation and subsequent export eliminate manual transfer between stages."
      ],
      [
        "Separate models and modes",
        "Text and image models are selected independently. Configurable instructions guide single-image, series and multiple-idea workflows."
      ],
      [
        "Handling API failures",
        "Temporary errors trigger delayed retries. Failed images are deferred to a second pass; critical quota errors stop processing rather than retrying indefinitely."
      ],
      [
        "Platform-specific metadata",
        "Platforms have separate CSV schemas, categories and keyword processing. Exports are matched against existing images so spreadsheets correspond to prepared files."
      ],
      [
        "Sessions and server-side execution",
        "Profiles retain settings and working folders; sessions retain prompts and results. Tasks run on the server, allowing the browser tab to close while the server remains running."
      ],
      [
        "File preparation with color preservation",
        "PNG masters and JPEGs are stored separately. ExifTool clears technical fields except ICC profiles; standalone cleanup handles renaming and filename collisions."
      ]
    ],
    "resultTitle": "From a topic list to a prepared content batch",
    "result": "All Stock connects creative preparation with technical packaging: topics and context become images, titles, keywords and platform-specific CSV files. Ready-made prompts and external images can be processed through individual stages.\n\nThe inspected saved session contains 100 PNG masters. The displayed examples are 5504 × 3072 pixels. Platform CSV files are stored alongside the images; below are actual results and an Adobe Stock export excerpt.",
    "dropsCaption": "Four images from a saved session and rows from an actual Adobe Stock CSV export. This is a presentation of output files, not an application screen.",
    "proofTitle": "Functional verification",
    "proof": "All 21 automated tests passed again, covering API keys and errors, generation workflows, prompt preparation and keyword handling.\n\nBrowser checks covered profile and session selection, generation settings, the standalone CSV import interface and the cleanup screen. Saved session files were inspected; no new paid generation was run for this case.\n\nThe page shows actual screens and previously generated images. Platform-format export does not imply automatic publication or moderation acceptance.",
    "stack": [
      [
        "Python · FastAPI",
        "Application server, task execution and session management."
      ],
      [
        "LLM · image model APIs",
        "Prompt and metadata preparation, direct image generation with a 4K request."
      ],
      [
        "Pillow · ExifTool",
        "PNG/JPEG saving, technical cleanup and color-profile handling."
      ],
      [
        "CSV · JavaScript",
        "Brief import, platform exports and workflow controls."
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
