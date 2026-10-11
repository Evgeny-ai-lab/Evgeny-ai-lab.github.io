const copy={
  "ru": {
    "kicker": "JARVIS / МУЛЬТИМОДАЛЬНЫЙ ИИ-АССИСТЕНТ ДЛЯ MAC",
    "title": "Ассистент, который разговаривает и выполняет задачи",
    "intro": "JARVIS объединяет голосовой диалог, ИИ-агентов и управление приложениями macOS. Можно обсудить задачу, показать экран, поручить работу специалисту и продолжить разговор, пока исполнитель готовит результат. Память, повторяемые сценарии и расписание связывают отдельные действия в постоянный рабочий процесс.",
    "status": "Приложение для macOS · 128 автоматических тестов пройдены",
    "heroCaption": "Главное окно JARVIS: голосовой интерфейс, диалог и работа с проектом. Отдельный демонстрационный запуск без личной истории.",
    "taskLabel": "01 / ЗАДАЧА",
    "taskTitle": "Соединить разговор с реальными действиями на компьютере",
    "task": "Обычный диалог с нейросетью заканчивается ответом, после которого пользователь сам переключается между редактором, браузером и другими программами. Контекст проекта, повторяемые команды и результаты приходится собирать отдельно.\n\nЗадача JARVIS — создать персонального ассистента, который не только отвечает, но и помогает выполнять работу: получает контекст через голос, текст и изображения, передаёт задания исполнителям, взаимодействует с приложениями и сохраняет полезные знания для следующих обращений.",
    "solutionLabel": "02 / ВОЗМОЖНОСТИ",
    "solutionTitle": "От разговора до выполненной задачи",
    "features": [
      [
        "Голос и текст в одном диалоге",
        "Потоковое аудио, текстовые сообщения и транскрипции. Ответ можно перебить; разговор продолжается во время работы исполнителя. Пробуждение по голосовой фразе использует детектор речи и отдельную проверку команды активации."
      ],
      [
        "Четыре специализированных агента",
        "Разработчик работает с кодом и тестами, исследователь ищет и сопоставляет информацию, рецензент проверяет решения, технический писатель готовит документацию. У каждого — собственные инструкции и отдельная память."
      ],
      [
        "Параллельные задачи и очередь",
        "Брокер управляет исполнителями, приоритетами и ожидающими заданиями. Задачу можно отменить, запустить вне очереди или продолжить с уточнением. Результаты и созданные файлы доступны в интерфейсе."
      ],
      [
        "Экран, выделенная область и камера",
        "Для визуального вопроса передаётся свежий снимок экрана или выбранного окна. Произвольную область можно выделить поверх приложений. Камера поддерживает отдельные сценарии анализа документа, жеста или всего кадра."
      ],
      [
        "Управление Mac и браузерами",
        "Чтение доступных элементов окна, нажатия, ввод текста, сочетания клавиш и прокрутка. Поддерживаются Safari, Chrome и отдельный встроенный браузер с собственным профилем. Интернет-поиск также может выполняться без открытия браузера."
      ],
      [
        "Диктовка в другие приложения",
        "Текст можно подготовить для выбранного приложения, вставить, скопировать или использовать повторно из истории. Перед вставкой текст сохраняется в буфере обмена, чтобы переключение фокуса не приводило к его потере."
      ],
      [
        "Навыки и долговременная память",
        "Успешный сценарий сохраняется после подтверждения пользователя и затем вызывается по фразе. Навыки можно искать, создавать, запускать и удалять. Заметки, карточки проектов и память специалистов связаны с Markdown-хранилищем Obsidian."
      ],
      [
        "Расписание, расходы и компактный режим",
        "Напоминания и задания задаются через интервалы, время или Cron, в том числе русскоязычной фразой. Отдельная панель показывает расчёт расходов и дневной бюджет. Плавающая капсула сохраняет основные элементы управления поверх других окон."
      ]
    ],
    "agentsCaption": "Панель специализированных агентов: роли, состояние, постановка задач и доступ к индивидуальной памяти.",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "engineeringTitle": "Решения, которые связывают систему воедино",
    "engineering": [
      [
        "Голосовой контур отдельно от выполнения задач",
        "Аудио передаётся через WebSocket, а агентный исполнитель работает отдельным процессом с потоковыми событиями. Долгое задание не блокирует интерфейс и голосовую сессию; завершение возвращается в диалог. Брокер контролирует очередь, параллельность и отмену процессов."
      ],
      [
        "Свежий визуальный контекст вместо догадок",
        "Захват экрана сериализован, устаревшие кадры после остановки отбрасываются. Окно JARVIS исключено из общего снимка, чтобы избежать рекурсии. Анализ принимает результат после подтверждения чтения изображения; временные снимки удаляются по завершении запроса."
      ],
      [
        "Нативные действия вместо одних координат",
        "Accessibility позволяет находить элементы по их свойствам и выполнять действия через дерево интерфейса. Swift и C++ связывают macOS с Node.js; события клавиатуры учитывают раскладку. Координатные действия и снимки остаются дополнительными способами взаимодействия."
      ],
      [
        "Подтверждённые навыки и раздельная память",
        "Пользователь подтверждает полезность сценария перед сохранением. При повторном обращении готовая команда находится по триггеру. Это накопление исполняемых сценариев, а не переобучение LLM. Память специалистов разделена, заметки сохраняются в читаемом Markdown."
      ],
      [
        "Восстановление связи и контроль действий",
        "Пул резервных API-ключей обрабатывает ошибки подключения и квот, сохраняя историю диалога и фоновые задания. Распознанные рискованные действия требуют подтверждения; навыки проверяются на запрещённые команды. Интерфейс изолирован от Node.js через preload и IPC."
      ],
      [
        "Сборка, разрешения и состояние приложения",
        "Сборка подписывает внутренние модули и вспомогательные процессы перед основным macOS-бандлом. Отдельно обрабатываются системные разрешения, жизненный цикл аудио, захват экрана и переход между окном и капсулой. Это важная часть настольного приложения, а не только оболочка чата."
      ]
    ],
    "interfaceLabel": "04 / ИНТЕРФЕЙС",
    "interfaceTitle": "Инструменты для повседневной работы",
    "interfaceIntro": "Каждый раздел решает отдельную задачу, сохраняя общий контекст ассистента. На снимках — реальный интерфейс отдельного экземпляра приложения; заметки, навык и напоминание подготовлены для демонстрации.",
    "galleryCaptions": [
      "Библиотека навыков. Показанный сценарий сохранён и действительно выполнен: команда вернула «Demo workflow ready».",
      "Память и Obsidian: заметка проекта, теги и поиск. Демонстрационная запись сохранена через приложение.",
      "Планировщик: созданное демонстрационное напоминание, время запуска и управление расписанием.",
      "Диктовка: выбор приложения, подготовка текста, копирование и история вставок.",
      "Расчёт расходов и настройка дневного бюджета. В демонстрационном запуске облачные вызовы не выполнялись, поэтому расход равен нулю.",
      "Инструменты: браузер, камера, показ экрана и управление Mac. Доступ к устройствам и приложениям включается отдельно."
    ],
    "resultLabel": "05 / РЕЗУЛЬТАТ",
    "resultTitle": "Единое рабочее пространство для ИИ и автоматизации",
    "result": "JARVIS соединяет обсуждение задачи, выполнение, проверку и повторное использование результата. Вместо набора отдельных чатов и скриптов доступны общий интерфейс, специализированные исполнители, память проектов и библиотека сценариев.\n\nПриложение можно использовать в полном окне или свернуть в плавающую капсулу. Локальные инструменты и хранилище работают на Mac; голосовой диалог и агентные задания используют внешние ИИ-сервисы.",
    "capsuleCaption": "Компактная капсула: состояние ассистента, время сессии и быстрые действия без большого окна.",
    "proofTitle": "Проверка работоспособности",
    "proof": "При подготовке кейса пройдены все 128 автоматических тестов: голосовые состояния, очередь задач, резервные подключения, навыки, память, планировщик, бюджет, диктовка, браузерные и визуальные инструменты.\n\nВ отдельном экземпляре дополнительно проверены сохранение заметки и памяти специалиста, создание и успешный запуск безопасного навыка, создание напоминания и переключение в капсулу. Личная история, ключи и рабочие заметки не использовались.\n\nСкриншоты показывают интерфейс и локальные сценарии; они не изображают повторную проверку всех голосовых и визуальных функций через живые API. Политики подтверждения снижают риск нежелательных действий, но не являются системной изоляцией исполнителя.",
    "stackLabel": "06 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение",
    "stack": [
      [
        "Electron · Node.js",
        "Настольное приложение, окна, IPC, хранение состояния и управление процессами."
      ],
      [
        "Gemini Live · Antigravity",
        "Голосовой диалог и инструментальные задания специализированным исполнителям."
      ],
      [
        "WebSocket · Web Audio API",
        "Потоковое аудио, воспроизведение, детектор речи и обработка перебивания."
      ],
      [
        "Swift · C++ / Node-API",
        "Нативный мост macOS, Accessibility, события ввода и ScreenCaptureKit. Захват и транспорт адаптированы из компонентов PersonalJarvis (Apache 2.0)."
      ],
      [
        "AppleScript · Markdown · Obsidian",
        "Повторяемые сценарии, заметки, карты проектов и память специалистов."
      ],
      [
        "node:test · macOS codesigning",
        "Автоматические проверки, сборка и подпись приложения и нативных компонентов."
      ]
    ],
    "back": "← Все работы",
    "skillsCaption": "Библиотека навыков. Показанный сценарий сохранён и действительно выполнен: команда вернула «Demo workflow ready».",
    "memoryCaption": "Память и Obsidian: заметка проекта, теги и поиск. Демонстрационная запись сохранена через приложение.",
    "scheduleCaption": "Планировщик: созданное демонстрационное напоминание, время запуска и управление расписанием.",
    "dictationCaption": "Диктовка: выбор приложения, подготовка текста, копирование и история вставок.",
    "budgetCaption": "Расчёт расходов и настройка дневного бюджета. В демонстрационном запуске облачные вызовы не выполнялись, поэтому расход равен нулю.",
    "toolsCaption": "Инструменты: браузер, камера, показ экрана и управление Mac. Доступ к устройствам и приложениям включается отдельно."
  },
  "en": {
    "kicker": "JARVIS / MULTIMODAL AI ASSISTANT FOR MAC",
    "title": "An assistant that talks and gets things done",
    "intro": "JARVIS combines voice conversation, AI agents and macOS application control. Discuss a task, show your screen, assign work to a specialist and keep talking while the executor prepares the result. Memory, reusable workflows and scheduling connect individual actions into an ongoing working process.",
    "status": "macOS application · 128 automated tests passed",
    "heroCaption": "JARVIS main window: voice interface, conversation and project context. Separate demonstration instance without personal history.",
    "taskLabel": "01 / THE TASK",
    "taskTitle": "Connect conversation with actions on the computer",
    "task": "A typical AI conversation ends with an answer, leaving the user to switch between an editor, a browser and other applications. Project context, recurring commands and results are managed separately.\n\nJARVIS brings these steps together in a personal assistant: it receives context through voice, text and images, delegates work to executors, interacts with applications and retains useful knowledge for later requests.",
    "solutionLabel": "02 / CAPABILITIES",
    "solutionTitle": "From conversation to task execution",
    "features": [
      [
        "Voice and text in one conversation",
        "Streaming audio, text messages and transcripts. Responses can be interrupted, and conversation continues while an executor works. Voice activation combines speech detection with a separate activation phrase check."
      ],
      [
        "Four specialist agents",
        "A developer works with code and tests, a researcher compares information, a reviewer checks solutions and a technical writer prepares documentation. Each has its own instructions and memory."
      ],
      [
        "Parallel tasks and a queue",
        "A broker manages executors, priorities and waiting tasks. Jobs can be cancelled, moved ahead or continued with clarification. Results and generated files remain available in the interface."
      ],
      [
        "Screen, selected region and camera",
        "Visual requests use a fresh screenshot of the display or selected window. Users can select a region over applications. Camera analysis offers document, gesture and general frame modes."
      ],
      [
        "Mac and browser control",
        "Inspect accessible window elements, click, type, send shortcuts and scroll. Safari, Chrome and an embedded browser with its own profile are supported. Internet research can also run without opening a browser."
      ],
      [
        "Dictation into other applications",
        "Prepare text for a chosen application, insert or copy it, and reuse it from history. Text is stored in the clipboard before insertion so focus changes do not lose the result."
      ],
      [
        "Skills and long-term memory",
        "Useful workflows are retained after user confirmation and matched to trigger phrases. Skills can be searched, created, run and removed. Notes, project cards and specialist memory are connected to an Obsidian Markdown vault."
      ],
      [
        "Scheduling, spending and compact mode",
        "Reminders and tasks use delays, time or Cron, including natural Russian phrases. A separate panel shows estimated spending and a daily budget. A floating capsule retains essential controls over other windows."
      ]
    ],
    "agentsCaption": "Specialist panel: roles, status, task assignment and individual memory; Russian interface.",
    "engineeringLabel": "03 / ENGINEERING",
    "engineeringTitle": "Decisions that connect the system",
    "engineering": [
      [
        "Voice separated from task execution",
        "Audio uses WebSocket while agent execution runs in a separate process with streamed events. Long tasks do not block the interface or voice session; results return to the conversation. The broker controls queuing, concurrency and process cancellation."
      ],
      [
        "Fresh visual context instead of assumptions",
        "Screen capture is serialized and stale frames are discarded after capture stops. JARVIS is excluded from full-screen snapshots to prevent recursion. Analysis requires confirmed image reading; temporary captures are removed when the request ends."
      ],
      [
        "Native actions beyond coordinates",
        "Accessibility locates elements by their properties and interacts through the UI tree. Swift and C++ connect macOS to Node.js, with layout-aware input handling. Coordinate actions and screenshots provide additional interaction paths."
      ],
      [
        "Confirmed skills and separate memory",
        "Users confirm a workflow before it is retained. Later requests match a ready command through triggers. This is procedural workflow retention rather than LLM retraining. Specialist memories are separated and notes use readable Markdown."
      ],
      [
        "Connection recovery and action control",
        "A reserve API key pool handles connection and quota errors while retaining conversation history and background jobs. Recognized risky actions require confirmation; skills are checked for prohibited commands. Preload and IPC separate the renderer from Node.js."
      ],
      [
        "Packaging, permissions and lifecycle",
        "The build signs native modules and helper processes before the main macOS bundle. System permissions, audio lifecycle, screen capture and transitions between the window and capsule are handled explicitly. These are desktop application concerns beyond a chat interface."
      ]
    ],
    "interfaceLabel": "04 / THE INTERFACE",
    "interfaceTitle": "Tools for everyday work",
    "interfaceIntro": "Each section addresses a specific task while retaining the assistant’s shared context. These are actual screens from a separate application instance; the note, skill and reminder were prepared for demonstration. The application interface is in Russian.",
    "galleryCaptions": [
      "Skill library. This workflow was saved and actually executed: its command returned “Demo workflow ready”.",
      "Memory and Obsidian: project note, tags and search. The demonstration note was saved through the application.",
      "Scheduler: a created demonstration reminder, its trigger time and schedule controls.",
      "Dictation: application selection, text preparation, copying and insertion history.",
      "Estimated spending and daily budget settings. No cloud calls were made in this demonstration, so spending is zero.",
      "Tools: browser, camera, screen sharing and Mac control. Device and application access is enabled separately."
    ],
    "resultLabel": "05 / THE RESULT",
    "resultTitle": "A shared workspace for AI and automation",
    "result": "JARVIS connects task discussion, execution, checking and reuse. Instead of separate chats and scripts, it provides a shared interface, specialist executors, project memory and a workflow library.\n\nUse the full window or switch to the floating capsule. Local tools and storage run on the Mac; voice conversation and agent tasks use external AI services.",
    "capsuleCaption": "Compact capsule: assistant status, session time and quick actions without the main window.",
    "proofTitle": "Functional verification",
    "proof": "All 128 automated tests passed during portfolio preparation, covering voice states, task queues, reserve connections, skills, memory, scheduling, budget, dictation, browser and visual tools.\n\nA separate instance additionally verified note and specialist memory storage, creation and successful execution of a harmless skill, reminder creation and capsule mode. Personal history, keys and working notes were not used.\n\nScreenshots show the interface and local workflows; they do not represent a fresh live-API verification of every voice and visual feature. Confirmation policies reduce the risk of unwanted actions but do not provide system-level executor isolation.",
    "stackLabel": "06 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose",
    "stack": [
      [
        "Electron · Node.js",
        "Desktop application, windows, IPC, state storage and process management."
      ],
      [
        "Gemini Live · Antigravity",
        "Voice conversation and tool-based tasks for specialist executors."
      ],
      [
        "WebSocket · Web Audio API",
        "Streaming audio, playback, speech detection and interruption handling."
      ],
      [
        "Swift · C++ / Node-API",
        "Native macOS bridge, Accessibility, input events and ScreenCaptureKit. Capture and transport portions were adapted from PersonalJarvis components (Apache 2.0)."
      ],
      [
        "AppleScript · Markdown · Obsidian",
        "Reusable workflows, notes, project maps and specialist memory."
      ],
      [
        "node:test · macOS codesigning",
        "Automated checks, packaging and signing of the app and native components."
      ]
    ],
    "back": "← All projects",
    "skillsCaption": "Skill library. This workflow was saved and actually executed: its command returned “Demo workflow ready”.",
    "memoryCaption": "Memory and Obsidian: project note, tags and search. The demonstration note was saved through the application.",
    "scheduleCaption": "Scheduler: a created demonstration reminder, its trigger time and schedule controls.",
    "dictationCaption": "Dictation: application selection, text preparation, copying and insertion history.",
    "budgetCaption": "Estimated spending and daily budget settings. No cloud calls were made in this demonstration, so spending is zero.",
    "toolsCaption": "Tools: browser, camera, screen sharing and Mac control. Device and application access is enabled separately."
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{e.replaceChildren(...t[e.dataset.t].split('\n\n').map(text=>{if(!t[e.dataset.t].includes('\n\n'))return document.createTextNode(text);const p=document.createElement('p');p.textContent=text;return p}))});document.querySelectorAll('[data-alt]').forEach(e=>e.alt=t[e.dataset.alt]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const[id,key]of [['features','features'],['engineering-grid','engineering'],['stack-grid','stack']])document.getElementById(id).replaceChildren(...t[key].map(([title,body])=>{const a=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=title;p.textContent=body;a.append(h,p);return a}));}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});apply();
