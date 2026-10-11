const copy={
  "ru": {
    "kicker": "QWEN KAGGLE / ОБЛАЧНЫЙ СЕРВЕР ЯЗЫКОВОЙ МОДЕЛИ",
    "title": "Qwen Kaggle — собственный ИИ-сервер на облачной видеокарте",
    "intro": "Qwen Kaggle — проект по развёртыванию языковой модели в собственной управляемой облачной среде. Модель работает на видеокартах Kaggle, а взаимодействовать с ней можно через веб-чат или API с любого компьютера, независимо от его мощности.\n\nРешение позволяет самостоятельно управлять настройками модели, подключать её к другим приложениям и работать без коммерческих LLM API и дополнительных фильтров модерации со стороны публичных чат-сервисов.",
    "heroCaption": "Собственный веб-чат: модель преобразует заметки встречи в таблицу задач, ответственных и сроков. Реальный ответ Qwen на тестовых данных.",
    "taskTitle": "Создать независимую среду для работы с ИИ-моделями",
    "task": "Задача заключалась в создании собственной среды для запуска языковых моделей без необходимости иметь мощный компьютер или зависеть от коммерческих ИИ-сервисов.\n\nПринципиально важным было получить больше свободы в использовании ИИ: самостоятельно выбирать модель, управлять её поведением и настройками, не зависеть от дополнительных ограничений и фильтров модерации публичных чат-платформ.\n\nПри этом вычисления должны выполняться на удалённой видеокарте, а доступ к модели — предоставляться через обычный браузер и API. Это позволило бы пользоваться ИИ даже со слабого ноутбука, подключать его к другим компьютерам, приложениям и системам автоматизации.\n\nВ качестве модели для реализации проекта была выбрана Qwen, а вычислительной платформой стал облачный сервис Kaggle.",
    "solutionTitle": "Как работает система",
    "steps": [
      [
        "Запуск модели в облаке",
        "Менеджер запуска подготавливает окружение, выбирает конфигурацию и развёртывает языковую модель на GPU-сервере Kaggle. Все вычисления выполняются в облаке, без нагрузки на видеокарту пользователя."
      ],
      [
        "Доступ через собственный веб-чат",
        "Модель доступна через браузер с компьютеров и других устройств. Интерфейс поддерживает русский и английский языки, историю текущего диалога и настройку системных инструкций, температуры и длины ответа."
      ],
      [
        "Интеграция с другими приложениями",
        "Через API модель можно подключать к собственным программам, скриптам и системам автоматизации. Запросы поступают непосредственно на развёрнутый сервер модели, без использования коммерческого LLM API."
      ],
      [
        "Управление генерацией ответов",
        "Система позволяет самостоятельно задавать инструкции и параметры генерации. Ответы могут возвращаться целиком или передаваться постепенно, по мере формирования текста. Дополнительная модерация на уровне приложения не используется."
      ]
    ],
    "engineering": [
      [
        "Оптимизация модели под облачную видеокарту",
        "Для проверенной конфигурации выбрана Qwen2.5-7B-Instruct. Четырёхбитное квантование NF4 позволило снизить требования к видеопамяти. Работоспособность подтверждена на облачной сессии с двумя NVIDIA Tesla T4."
      ],
      [
        "Управление облачной сессией",
        "Разработан менеджер, который подготавливает запуск модели, получает адреса подключения и позволяет завершить GPU-сессию после работы. Пользователю не требуется вручную настраивать сервер при каждом запуске."
      ],
      [
        "Единая модель для веб-чата и API",
        "Веб-интерфейс на Gradio и сервер API на FastAPI работают с одной загруженной моделью. Это позволяет использовать её как для обычного общения, так и для программных интеграций без отдельного развёртывания."
      ],
      [
        "Потоковая генерация и защита доступа",
        "Реализована постепенная передача ответов через SSE. Веб-чат защищён паролем, API — индивидуальным ключом. Проверка входных параметров и управление одновременными запросами обеспечивают стабильную работу сервера."
      ]
    ],
    "resultTitle": "Собственный облачный ИИ-сервер с веб-чатом и API",
    "result": "Создана работающая среда для запуска языковой модели на удалённой видеокарте. Пользователь может взаимодействовать с ней через браузер, самостоятельно настраивать генерацию ответов и подключать модель к сторонним приложениям через API.\n\nСистема успешно проверена на реальной GPU-сессии Kaggle. Подтверждена работа веб-чата на русском и английском языках, обычной и потоковой генерации через API.\n\nГлавный результат — возможность использовать языковую модель как собственный управляемый сервис: без мощного локального оборудования, без коммерческих LLM API и без дополнительной модерации на уровне приложения. При этом собственные ограничения выбранной модели и правила облачной платформы сохраняются.",
    "secondCaption": "Тот же сценарий в английской версии веб-чата. Таблица сформирована моделью в ходе реальной генерации.",
    "proof": "Все четыре автоматических теста обработки данных успешно пройдены. В реальной GPU-сессии проверены генерация ответов, потоковая передача текста, корректное завершение запросов, защита API-ключом и обработка некорректных параметров.\n\nДополнительно проведено ручное тестирование веб-чата на русском и английском языках: проверены отправка запросов, получение ответов, настройки генерации и работа интерфейса.\n\nНа странице представлены реальные скриншоты работающего приложения и ответы модели. После завершения проверки облачная GPU-сессия была остановлена.",
    "stack": [
      [
        "Python · PyTorch · Transformers",
        "Загрузка языковой модели, обработка запросов и генерация ответов."
      ],
      [
        "BitsAndBytes · NF4",
        "Четырёхбитное квантование для снижения требований к видеопамяти."
      ],
      [
        "FastAPI · SSE",
        "Программный интерфейс для подключения внешних приложений и потоковой передачи ответов."
      ],
      [
        "Gradio",
        "Веб-чат с историей диалога, настройками генерации и поддержкой двух языков."
      ],
      [
        "Kaggle · NVIDIA Tesla T4",
        "Облачная инфраструктура для запуска модели и выполнения вычислений на GPU."
      ]
    ],
    "back": "← Все работы",
    "github": "Исходники на GitHub ↗",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "engineeringTitle": "Ключевые решения при разработке",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "proofTitle": "Проверка работоспособности",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение",
    "status": "Рабочий проект · Проверен на облачном GPU"
  },
  "en": {
    "kicker": "QWEN KAGGLE / CLOUD LANGUAGE-MODEL SERVER",
    "title": "Qwen Kaggle — a self-managed AI server on cloud GPUs",
    "intro": "Qwen Kaggle deploys a language model in a self-managed cloud environment. The model runs on Kaggle GPUs and is accessible through a web chat or API from any computer, regardless of its performance.\n\nThe solution provides control over model settings, connections to other applications, and operation without commercial LLM APIs or additional moderation filters from public chat services.",
    "heroCaption": "Custom web chat: Qwen transforms meeting notes into a table of tasks, owners and deadlines. Actual Qwen output on test data.",
    "taskTitle": "Create an independent environment for working with AI models",
    "task": "The task was to create a self-managed environment for running language models without powerful local hardware or dependence on commercial AI services.\n\nA key requirement was greater freedom in using AI: choosing the model, controlling its behaviour and settings, and avoiding additional restrictions and moderation filters imposed by public chat platforms.\n\nComputation needed to run on a remote GPU, with access through a standard browser and API. This would enable use from a modest laptop and connections to other computers, applications and automation systems.\n\nQwen was selected as the model and Kaggle as the cloud computing platform.",
    "solutionTitle": "How the system works",
    "steps": [
      [
        "Deploy the model in the cloud",
        "The deployment manager prepares the environment, selects configuration and deploys the language model on a Kaggle GPU server. All computation runs in the cloud without using the user’s GPU."
      ],
      [
        "Access through a custom web chat",
        "The model is accessible in a browser from computers and other devices. The interface supports Russian and English, current conversation history, system instructions, temperature and response-length controls."
      ],
      [
        "Integrate with other applications",
        "The API connects the model to custom programs, scripts and automation systems. Requests go directly to the deployed model server without using a commercial LLM API."
      ],
      [
        "Control response generation",
        "Users set instructions and generation parameters. Responses return in full or stream as text is generated. No additional application-level moderation is used."
      ]
    ],
    "engineering": [
      [
        "Optimise the model for cloud GPUs",
        "The verified configuration uses Qwen2.5-7B-Instruct. Four-bit NF4 quantization reduced GPU memory requirements. Operation was confirmed in a cloud session with two NVIDIA Tesla T4 GPUs."
      ],
      [
        "Manage the cloud session",
        "A manager prepares model deployment, retrieves connection addresses and supports stopping the GPU session. Users do not need to configure the server manually for every launch."
      ],
      [
        "One model for web chat and API",
        "The Gradio web interface and FastAPI server share one loaded model. It supports both conversation and programmatic integration without a separate deployment."
      ],
      [
        "Streaming generation and access protection",
        "SSE delivers answers progressively. The web chat requires a password, and the API requires an individual key. Input validation and concurrent-request management support stable server operation."
      ]
    ],
    "resultTitle": "A self-managed cloud AI server with web chat and API",
    "result": "A working environment was created for running a language model on a remote GPU. Users can interact through a browser, configure response generation and connect the model to other applications through the API.\n\nThe system was successfully verified in a real Kaggle GPU session. Russian and English web chat, regular API generation and streaming API generation were confirmed.\n\nThe main result is a language model available as a self-managed service, without powerful local hardware, commercial LLM APIs or additional application-level moderation. The selected model’s own restrictions and cloud-platform rules still apply.",
    "secondCaption": "The same workflow in the English web chat. The table was produced during actual model generation.",
    "proof": "All four automated data-processing tests passed. A real GPU session verified response generation, streaming text, request completion, API-key protection and invalid-parameter handling.\n\nThe Russian and English web chat was also tested manually: sending requests, receiving answers, generation controls and interface operation.\n\nThis page shows actual screenshots of the working application and model responses. The cloud GPU session was stopped after verification.",
    "stack": [
      [
        "Python · PyTorch · Transformers",
        "Language-model loading, request processing and response generation."
      ],
      [
        "BitsAndBytes · NF4",
        "Four-bit quantization to reduce GPU memory requirements."
      ],
      [
        "FastAPI · SSE",
        "Programmatic access for external applications and streaming responses."
      ],
      [
        "Gradio",
        "Web chat with conversation history, generation controls and two interface languages."
      ],
      [
        "Kaggle · NVIDIA Tesla T4",
        "Cloud infrastructure for model deployment and GPU computation."
      ]
    ],
    "back": "← All projects",
    "github": "Source on GitHub ↗",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "engineeringTitle": "Key development decisions",
    "resultLabel": "04 / THE RESULT",
    "proofTitle": "Functional verification",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose",
    "status": "Working project · Verified on cloud GPUs"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{const text=t[e.dataset.t];if(text.includes('\n\n')){e.replaceChildren(...text.split('\n\n').map(s=>{const p=document.createElement('p');p.textContent=s;return p}))}else e.textContent=text});document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.brand,.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');p.textContent=row[1];el.append(h,p);return el}));}const hero=document.getElementById('hero-image');if(hero)hero.src='assets/chat-'+lang+'.png';const run=document.getElementById('run-image');if(run)run.src='assets/cloud-run-'+lang+'.png';const output=document.getElementById('output-image');if(output)output.src='assets/result-'+lang+'.png';const range=document.getElementById('compare-range');if(range)range.setAttribute('aria-label',lang==='ru'?'Положение разделителя до и после':'Before and after divider position');}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});const range=document.getElementById('compare-range');if(range)range.oninput=()=>document.querySelector('.compare-frame').style.setProperty('--split',range.value+'%');apply();
