const copy={
  "ru": {
    "kicker": "QWEN KAGGLE / ОБЛАЧНЫЙ СЕРВЕР ЯЗЫКОВОЙ МОДЕЛИ",
    "title": "Qwen — языковая модель на облачной видеокарте",
    "intro": "Qwen Kaggle — собственная среда для работы с большой языковой моделью (LLM). Модель запущена на видеокартах Kaggle, а пользователь обращается к ней через веб-чат или API. Вычисления выполняются на сервере: мощный компьютер не нужен, системные инструкции и параметры ответов можно задавать самостоятельно.",
    "heroCaption": "Собственный веб-чат: модель преобразует заметки встречи в таблицу задач, ответственных и сроков. Реальный ответ Qwen; данные примера вымышленные.",
    "taskTitle": "Запустить Qwen как самостоятельный облачный сервис",
    "task": "Требовалось развернуть языковую модель в собственной управляемой среде: с доступом через браузер и API, настройкой системных инструкций и параметров генерации. Обработка запросов должна выполняться на облачной видеокарте, независимо от мощности компьютера пользователя.\n\nГлавная задача — связать загрузку модели, сервер обработки запросов и удобный интерфейс. Это даёт возможность работать с Qwen с разных компьютеров и подключать её к другим приложениям без обращения к коммерческому LLM API.",
    "solutionTitle": "Что делает система",
    "steps": [
      [
        "Запускает модель в облаке",
        "Менеджер подготавливает конфигурацию и запускает сессию Kaggle с GPU. Веса Qwen и токенизатор загружаются на сервер."
      ],
      [
        "Даёт собственный интерфейс",
        "Веб-чат хранит историю текущего диалога и позволяет задавать системную инструкцию, температуру и длину ответа. Интерфейс доступен на русском и английском."
      ],
      [
        "Обрабатывает запросы на сервере",
        "Генерация выполняется на GPU Kaggle. Через API модель можно подключить к скриптам и приложениям; вычислительные ресурсы компьютера пользователя для этого не требуются."
      ],
      [
        "Передаёт ответы по мере генерации",
        "Текст появляется постепенно в чате или передаётся через потоковый API. Обычный API возвращает готовый ответ целиком."
      ]
    ],
    "engineering": [
      [
        "Модель под доступную видеопамять",
        "Для рабочего запуска выбрана Qwen2.5-7B-Instruct. Четырёхбитное квантование NF4 снижает объём весов, вычисления FP16 и автоматическое размещение согласуют модель с доступными ресурсами. Реальный запуск подтверждён на двух NVIDIA Tesla T4."
      ],
      [
        "Развёртывание как отдельного сервиса",
        "Менеджер подготавливает пакет запуска, получает адреса работающей сессии и позволяет завершить её после работы. Модель загружается на облачном сервере, а чат и API обращаются к ней удалённо."
      ],
      [
        "Один движок для чата и приложений",
        "Системные инструкции и история диалога приводятся к формату Qwen. Gradio отвечает за интерфейс, FastAPI — за программный доступ. Оба используют одну загруженную модель, поэтому не требуется отдельный запуск для каждого способа работы."
      ],
      [
        "Потоковая выдача и управление доступом",
        "Генерация выполняется в отдельном потоке; SSE передаёт фрагменты ответа и событие завершения. Чат защищён паролем, API — ключом. Проверка параметров и блокировка одновременной генерации предотвращают некорректные и конкурирующие запросы."
      ]
    ],
    "resultTitle": "Работающая Qwen с собственным чатом и API",
    "result": "Модель успешно запущена на облачных видеокартах и отвечает на запросы через оба интерфейса. В реальном диалоге Qwen преобразовала заметки встречи в таблицу задач; через API проверены обычный ответ на русском и потоковый ответ на английском.\n\nПолучена управляемая среда, в которой можно задавать инструкции и параметры генерации, использовать модель с разных компьютеров и интегрировать её в свои приложения. Обработка выполняется на сервере Kaggle без обращения к коммерческому LLM API.",
    "secondCaption": "Тот же сценарий в английском интерфейсе: таблица заново сформирована моделью. Реальный результат генерации.",
    "proof": "Все четыре автоматических теста разбора данных пройдены. В реальной GPU-сессии проверены обычная генерация, потоковая передача текста и корректное завершение ответа, отказ в доступе без ключа и отклонение некорректного параметра.\n\nДополнительно проведена ручная проверка веб-чата на русском и английском: отправка запросов, получение ответов и работа интерфейса. На странице представлены реальные экраны и ответы модели. После проверки выделенная GPU-сессия завершена.",
    "stack": [
      [
        "Python · PyTorch · Transformers",
        "Загрузка весов и токенизатора, выполнение генерации."
      ],
      [
        "BitsAndBytes · NF4",
        "Квантование модели для снижения требований к видеопамяти."
      ],
      [
        "FastAPI · SSE",
        "API для приложений и потоковая передача ответов."
      ],
      [
        "Gradio",
        "Собственный веб-чат с историей и настройками."
      ],
      [
        "Kaggle · NVIDIA Tesla T4",
        "Облачный запуск и вычисления на GPU."
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
    "title": "Qwen — a language model on cloud GPUs",
    "intro": "Qwen Kaggle is a self-managed environment for a large language model (LLM). Qwen runs on Kaggle GPUs, accessed through a web chat or API. Computation takes place on the server, so users do not need a powerful computer and can control system instructions and generation parameters.",
    "heroCaption": "Custom web chat: Qwen transforms meeting notes into a table of tasks, owners and deadlines. Actual model output; sample notes are fictional.",
    "taskTitle": "Deploy Qwen as a standalone cloud service",
    "task": "The task was to deploy a language model in a self-managed environment with browser and API access, configurable system instructions and generation settings. Requests needed to run on a cloud GPU, independently of the user’s computer performance.\n\nModel loading, a request server and a usable interface needed to work together. This enables access from different computers and integration with other applications without calling a commercial LLM API.",
    "solutionTitle": "What the system does",
    "steps": [
      [
        "Deploy the model in the cloud",
        "The manager prepares configuration and starts a Kaggle GPU session. Qwen weights and tokenizer load on the server."
      ],
      [
        "Provide a custom interface",
        "The web chat keeps the current conversation history and provides system instructions, temperature and response-length controls. The interface supports Russian and English."
      ],
      [
        "Process requests on the server",
        "Generation runs on Kaggle GPUs. The API connects the model to scripts and applications without requiring the user’s computer to perform model inference."
      ],
      [
        "Deliver answers as they are generated",
        "Text appears progressively in chat or through the streaming API. The regular API returns the complete answer."
      ]
    ],
    "engineering": [
      [
        "Fit the model to available GPU memory",
        "Qwen2.5-7B-Instruct was selected for the working deployment. Four-bit NF4 reduces weight size, while FP16 computation and automatic placement align the model with available resources. The actual deployment was verified on two NVIDIA Tesla T4 GPUs."
      ],
      [
        "Deploy as a separate service",
        "The manager prepares the deployment package, retrieves active session addresses and supports stopping the session. The model loads on the cloud server, accessed remotely through chat and API."
      ],
      [
        "One engine for chat and applications",
        "System instructions and conversation history use the Qwen format. Gradio provides the interface; FastAPI handles programmatic access. Both use one loaded model, avoiding a separate deployment for each interface."
      ],
      [
        "Streaming and access control",
        "Generation runs in a worker thread; SSE carries text fragments and a completion event. Chat requires a password, and the API requires a key. Parameter validation and a shared generation lock prevent invalid and competing requests."
      ]
    ],
    "resultTitle": "Working Qwen with a custom chat and API",
    "result": "The model was successfully deployed on cloud GPUs and responds through both interfaces. In a real conversation, Qwen transformed meeting notes into an action-item table. API checks confirmed a regular Russian answer and an English streaming response.\n\nThe resulting environment provides configurable instructions and generation settings, access from different computers and integration with applications. Requests run on Kaggle without calling a commercial LLM API.",
    "secondCaption": "The same workflow in the English interface, with a table freshly generated by the model. Actual generation output.",
    "proof": "All four automated parser tests passed. A live GPU session verified regular generation, streaming and response completion, rejection without an API key, and invalid-parameter handling.\n\nThe Russian and English web chat was also checked manually for sending requests, receiving responses and interface operation. This page shows actual application screens and model answers. The allocated GPU session was stopped after verification.",
    "stack": [
      [
        "Python · PyTorch · Transformers",
        "Load weights and tokenizer, and run generation."
      ],
      [
        "BitsAndBytes · NF4",
        "Model quantization to reduce GPU memory requirements."
      ],
      [
        "FastAPI · SSE",
        "Application API and streaming responses."
      ],
      [
        "Gradio",
        "Custom web chat with history and controls."
      ],
      [
        "Kaggle · NVIDIA Tesla T4",
        "Cloud deployment and GPU computation."
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
