const copy={
  "ru": {
    "kicker": "ALL STOCK / АВТОМАТИЗАЦИЯ ПРОИЗВОДСТВА СТОКОВОГО КОНТЕНТА",
    "title": "Автоматизированная генерация контента для фотостоков",
    "intro": "All Stock — приложение для автоматизированного создания изображений с целью их продажи на фотостоках. Система преобразует исходные темы и идеи в готовые промпты, генерирует изображения через API в высоком разрешении и подготавливает названия, описания и ключевые слова с учётом требований разных площадок.\n\nВ одном приложении объединены три последовательных этапа: генерация промптов и метаданных, создание изображений и техническая очистка файлов. Каждый этап имеет собственную вкладку и при необходимости может использоваться самостоятельно.",
    "status": "Работающее приложение · Реальные результаты генерации",
    "taskTitle": "Автоматизировать производство изображений для фотостоков",
    "task": "Создание больших партий изображений для продажи на фотостоках требует не только генерации самих картинок. Необходимо подготовить качественные промпты, составить метаданные, учесть требования каждой площадки, правильно организовать файлы и подготовить их к загрузке.\n\nПри ручной работе эти операции отнимают значительное время, особенно когда речь идёт о десятках и сотнях изображений.\n\nЗадача — объединить все этапы в единую систему, способную автоматизировать массовое создание стокового контента, сохранив гибкость настроек и возможность управлять каждым этапом отдельно.",
    "solutionTitle": "Полный цикл генерации в одном приложении",
    "interactiveTitle": "Единый процесс с возможностью раздельной работы",
    "interactive": "Приложение состоит из трёх встроенных модулей: генератора промптов, генератора изображений и инструмента очистки метаданных. В интерфейсе каждый расположен на отдельной вкладке.\n\nМодули рассчитаны на последовательную работу, но могут использоваться независимо. Например, можно загрузить собственный CSV с готовыми промптами и сразу приступить к генерации изображений либо обработать изображения, созданные в других программах.\n\nВстроенный модуль очистки удаляет лишние EXIF, XMP и IPTC, сохраняя необходимый цветовой профиль ICC. Также предусмотрено удаление служебных суффиксов из имён файлов.",
    "heroCaption": "Скриншот: генератор промптов с настройками моделей, форматов экспорта и сохранённой рабочей сессией.",
    "explorerCaption": "Скриншот: генератор изображений с выбором модели, импортом CSV и завершённой сессией на 100 изображений.",
    "filteredCaption": "Скриншот: встроенный модуль очистки метаданных и подготовки файлов.",
    "engineeringTitle": "Ключевые решения при разработке",
    "engineering": [
      [
        "Гибкая система API и моделей",
        "Подключения и модели можно добавлять, изменять и удалять через отдельную вкладку настроек. Приложение не привязано к одному поставщику и позволяет выбирать подходящие сервисы для генерации текстов и изображений."
      ],
      [
        "Метаданные под требования фотостоков",
        "Для разных площадок формируются CSV с необходимой структурой и количеством ключевых слов. Названия, описания и ключевые слова подготавливаются автоматически вместе с промптами."
      ],
      [
        "Модульная организация процесса",
        "Генерация промптов, создание изображений и очистка метаданных объединены в последовательный рабочий процесс, но доступны и по отдельности. Импорт готовых заданий, гибкие настройки и сохранение рабочих сессий позволяют эффективно обрабатывать большие партии изображений."
      ]
    ],
    "resultTitle": "От списка тем до готовой партии стокового контента",
    "result": "Создано полноценно работающее приложение, автоматизирующее подготовку промптов, генерацию изображений, создание метаданных и техническую обработку файлов.\n\nВ одной из сохранённых рабочих сессий успешно сгенерировано 100 PNG-изображений. Представленные примеры имеют разрешение 5504 × 3072 пикселя. Для изображений также сформированы метаданные и отдельные CSV-файлы под требования фотостоков.\n\nНа странице представлены реальные результаты генерации и фрагмент подготовленного CSV для Adobe Stock.",
    "dropsCaption": "Скриншот: реальные изображения из сохранённой сессии и соответствующие строки CSV для Adobe Stock.",
    "proofTitle": "Проверка работоспособности",
    "proof": "Работа приложения подтверждена 21 автоматическим тестом, охватывающим ключевые сценарии генерации, работу с API, подготовку промптов и обработку ключевых слов.\n\nДополнительно проведены неоднократные ручные проверки всех основных модулей, настроек и полного процесса создания изображений. Работоспособность подтверждена реальными сессиями генерации и сохранёнными результатами.",
    "stack": [
      [
        "API языковых моделей",
        "генерация промптов, названий, описаний и ключевых слов."
      ],
      [
        "API генерации изображений",
        "автоматическое создание изображений в высоком разрешении."
      ],
      [
        "CSV",
        "пакетная обработка заданий и экспорт метаданных для разных фотостоков."
      ],
      [
        "ExifTool, EXIF, XMP, IPTC, ICC",
        "очистка технических метаданных, обработка имён файлов и сохранение цветовых профилей."
      ],
      [
        "Автоматизированное тестирование",
        "проверка основных сценариев работы приложения."
      ]
    ],
    "back": "← Все работы",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение",
    "solution": "Работа начинается с исходных тем: их можно вводить вручную, загружать готовыми списками или дополнять визуальным контекстом для более точной генерации. Темы также могут поступать из отдельного приложения [Stock Insights](https://evgeny-meleshkevich.github.io/work/stock-insights/?lang=ru), предназначенного для исследования рынка и поиска перспективных направлений.\n\nНа основе полученных заданий языковая модель через API создаёт промпты и одновременно формирует названия, описания и ключевые слова с учётом требований выбранных фотостоков.\n\nЗатем генератор изображений обрабатывает подготовленные промпты через API и создаёт изображения в высоком разрешении. Завершающий этап — очистка лишних технических метаданных, подготовка имён файлов и формирование готового комплекта изображений и CSV для последующей загрузки на площадки."
  },
  "en": {
    "kicker": "ALL STOCK / STOCK CONTENT PRODUCTION AUTOMATION",
    "title": "Automated content generation for stock platforms",
    "intro": "All Stock automates image creation for sale on stock platforms. It turns topics and ideas into prompts, generates high-resolution images through APIs and prepares titles, descriptions and keywords for different platforms.\n\nThe application combines three sequential stages: prompt and metadata generation, image creation and technical file cleanup. Each stage has its own tab and can also be used independently.",
    "status": "Working application · Real generation results",
    "taskTitle": "Automate image production for stock platforms",
    "task": "Producing large batches of stock images involves more than generating pictures. It requires effective prompts, metadata, platform-specific formatting, file organization and preparation for upload.\n\nManual work takes substantial time, especially for dozens or hundreds of images.\n\nThe task was to combine these stages into one system for automated batch production, while preserving flexible settings and independent control over each stage.",
    "solutionTitle": "A complete generation workflow in one application",
    "interactiveTitle": "A connected workflow with independent modules",
    "interactive": "The application includes three modules: a prompt generator, an image generator and a metadata cleanup tool. Each occupies a separate interface tab.\n\nModules support a sequential workflow and independent use. Users can import a CSV of their own prompts and proceed directly to image generation, or process images created in other programs.\n\nThe cleanup module removes unnecessary EXIF, XMP and IPTC fields while preserving ICC color profiles. It also removes technical filename suffixes.",
    "heroCaption": "Screenshot: prompt generator with model settings, export formats and a saved session; Russian interface.",
    "explorerCaption": "Screenshot: image generator with model selection, CSV import and a completed 100-image session; Russian interface.",
    "filteredCaption": "Screenshot: integrated metadata cleanup and file preparation module; Russian interface.",
    "engineeringTitle": "Key engineering decisions",
    "engineering": [
      [
        "Flexible API and model configuration",
        "Connections and models can be added, edited and removed through a dedicated settings tab. The application is not tied to a single provider and supports selecting services for text and image generation."
      ],
      [
        "Metadata for stock platforms",
        "Platform-specific CSV files use the required structure and keyword counts. Titles, descriptions and keywords are prepared automatically alongside prompts."
      ],
      [
        "A modular production workflow",
        "Prompt generation, image creation and metadata cleanup form a sequential workflow and remain independently accessible. Imported briefs, flexible settings and saved sessions support large image batches."
      ]
    ],
    "resultTitle": "From a topic list to a prepared stock content batch",
    "result": "A working application automates prompt preparation, image generation, metadata creation and technical file processing.\n\nOne saved production session contains 100 successfully generated PNG images. The examples shown are 5504 × 3072 pixels. Metadata and separate platform-specific CSV files were also prepared.\n\nThe page shows actual generated images and an excerpt from the Adobe Stock CSV export.",
    "dropsCaption": "Actual images from a saved session and corresponding Adobe Stock CSV rows.",
    "proofTitle": "Functional verification",
    "proof": "Application behavior is supported by 21 automated tests covering key generation workflows, API handling, prompt preparation and keyword processing.\n\nRepeated manual checks covered the main modules, settings and complete image production workflow. Working generation sessions and saved results provide further evidence.",
    "stack": [
      [
        "Language model APIs",
        "Generation of prompts, titles, descriptions and keywords."
      ],
      [
        "Image generation APIs",
        "Automated creation of high-resolution images."
      ],
      [
        "CSV",
        "Batch brief processing and platform-specific metadata export."
      ],
      [
        "ExifTool, EXIF, XMP, IPTC, ICC",
        "Technical metadata cleanup, filename handling and color-profile preservation."
      ],
      [
        "Automated testing",
        "Verification of core application workflows."
      ]
    ],
    "back": "← All projects",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "resultLabel": "04 / THE RESULT",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose",
    "solution": "The workflow starts with topics, entered manually, imported as lists or supplemented with visual context. Topics can also come from [Stock Insights](https://evgeny-meleshkevich.github.io/work/stock-insights/?lang=en), a separate application for research and finding promising content directions.\n\nA language model accessed through an API creates prompts together with titles, descriptions and keywords formatted for the selected stock platforms.\n\nThe image generator then processes the prompts through an API and creates high-resolution images. The final stage clears unnecessary technical metadata, prepares filenames and assembles images and CSV files for subsequent upload."
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{if(t[e.dataset.t].includes('\n\n')){e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{const p=document.createElement('p');p.textContent=text;return p}))}else e.textContent=t[e.dataset.t]});document.querySelectorAll('[data-t=solution] p').forEach(p=>{const m=p.textContent.match(/\[Stock Insights\]\((https:\/\/evgeny-meleshkevich\.github\.io\/work\/stock-insights\/\?lang=(?:ru|en))\)/);if(m){const text=p.textContent;const a=document.createElement('a');a.textContent='Stock Insights';a.href=m[1];p.replaceChildren(document.createTextNode(text.slice(0,m.index)),a,document.createTextNode(text.slice(m.index+m[0].length)))}});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
