const copy={
  "ru": {
    "kicker": "ОБЛАЧНЫЙ GPU-АПСКЕЙЛ / ОБРАБОТКА ИЗОБРАЖЕНИЙ",
    "title": "Качественный ИИ-апскейл с обработкой в облаке",
    "intro": "Самостоятельный облачный сервис для увеличения разрешения изображений на базе нескольких высококачественных нейросетевых моделей. Пользователь выбирает модель и параметры обработки на своём компьютере, а все вычисления выполняются в облаке на NVIDIA L4.\n\nСистема поддерживает индивидуальную и пакетную обработку изображений, гибкую настройку качества и автоматическое сохранение готовых файлов.",
    "heroCaption": "Реальный результат облачного апскейла. Исходная графика создана ИИ для демонстрации.",
    "taskTitle": "Создать самостоятельный облачный сервис качественного ИИ-апскейла",
    "task": "Цель проекта — разработать независимую систему нейросетевого увеличения изображений, объединив возможности нескольких профессиональных моделей в одном облачном сервисе.\n\nДля этого требовалось адаптировать модели для самостоятельной работы, разобраться в особенностях их запуска, воспроизвести механизмы управления качеством и реализовать ручную и автоматическую настройку параметров.\n\nВсе вычисления должны выполняться на облачной видеокарте, а управление и получение результатов — оставаться доступными с обычного компьютера независимо от мощности его графической системы. Дополнительно требовалось автоматизировать обработку целых серий изображений.",
    "solutionTitle": "Как работает облачный апскейл",
    "steps": [
      [
        "Выбор модели и параметров",
        "Пользователь выбирает модель, масштаб увеличения 2× или 4×, настройки шумоподавления, резкости, сжатия и формат выходного изображения."
      ],
      [
        "Передача в облако",
        "Локальный клиент отправляет изображения и настройки облачному обработчику. Нейросетевые модели размещены непосредственно в облачной инфраструктуре."
      ],
      [
        "Нейросетевая обработка",
        "Облачная GPU увеличивает разрешение выбранной моделью. Крупные изображения обрабатываются по частям с последующим объединением результатов."
      ],
      [
        "Получение результата",
        "Готовые файлы автоматически передаются на компьютер пользователя. Поддерживается пакетная обработка целых папок с едиными настройками."
      ]
    ],
    "engineering": [
      [
        "Адаптация нескольких нейросетевых моделей",
        "В систему интегрированы пять вариантов моделей трёх семейств: CGI / Art, High Fidelity и Standard, с поддержкой масштабирования 2× и 4× в зависимости от выбранной модели.\n\nРазные модели позволяют подбирать алгоритм под особенности изображения. Для каждой реализованы собственные параметры запуска и взаимодействия с вычислительным движком."
      ],
      [
        "Воспроизведение механизмов управления моделями",
        "Одной из основных задач стала адаптация моделей для самостоятельной работы вне исходного приложения.\n\nБыли изучены и настроены структуры входных и выходных тензоров, формат FP16, параметры масштабирования, шумоподавления, резкости и сжатия. Это позволило не просто запускать модели, а полноценно управлять процессом обработки и качеством результата."
      ],
      [
        "Ручная настройка и автоматический подбор параметров",
        "Реализовано управление параметрами обработки с учётом особенностей каждой модели.\n\nДополнительно предусмотрен автоматический подбор настроек с использованием отдельных CoreML-моделей. При их наличии система может анализировать исходное изображение и рекомендовать значения шумоподавления, резкости и сжатия. Также доступны ручная настройка и значения по умолчанию."
      ],
      [
        "Обработка изображений высокого разрешения",
        "Крупные изображения обрабатываются перекрывающимися участками размером 128 или 192 пикселя, которые затем объединяются с плавным сглаживанием границ.\n\nТакой подход позволяет контролировать расход видеопамяти и получать цельное изображение без заметных стыков."
      ],
      [
        "Собственная облачная среда выполнения",
        "Вычислительная часть развёрнута на NVIDIA L4 с использованием CUDA и ONNX Runtime.\n\nМодели хранятся непосредственно в облаке. Пользователь передаёт только изображения и настройки, без необходимости загружать многогигабайтные файлы моделей при каждом запуске."
      ],
      [
        "Пакетная обработка и сохранение качества",
        "Разработан локальный клиент для автоматической обработки отдельных изображений и целых папок.\n\nПоддерживается сохранение PNG с глубиной цвета 8 или 16 бит на канал. Результаты записываются отдельно от исходных файлов, а корректность обработки проверяется программно."
      ]
    ],
    "resultTitle": "Качественный апскейл с увеличением разрешения в 4 раза",
    "result": "Работоспособность сервиса подтверждена серией реальных облачных запусков, автоматизированными тестами и ручной проверкой результатов обработки.\n\nВ одном из контрольных запусков исходное изображение размером 1536 × 640 пикселей обработано моделью CGI / Art 4× на NVIDIA L4. В результате получен 16-битный PNG с разрешением 6144 × 2560 пикселей — увеличение в четыре раза по каждой стороне.\n\nНиже можно сравнить одинаковые участки исходного изображения и результата нейросетевой обработки.",
    "before": "Исходник",
    "after": "После апскейла",
    "compareCaption": "Одинаковый участок до и после обработки. Перемещайте разделитель, чтобы сравнить детали.",
    "runCaption": "Протокол реального запуска: NVIDIA L4, CUDA и выбранная модель CGI / Art 4×.",
    "outputCaption": "Полученный PNG: 6144 × 2560 пикселей, RGB, 16 бит на канал.",
    "proof": "Сервис прошёл серию автоматизированных тестов и практических проверок с реальными облачными запусками. Проверялись передача данных, управление параметрами моделей, вычисления на GPU, формирование и сохранение готовых изображений.\n\nДополнительно проводилось ручное тестирование функциональности и качества обработки. Проверки подтвердили работоспособность полного цикла — от выбора модели до получения готового изображения.\n\nВ одном из контрольных запусков обработка 55 участков изображения заняла 6,25 секунды. Полное время облачного вызова составило 113,29 секунды, включая подготовку среды и передачу результата.\n\nПоказатели относятся к конкретному запуску и могут отличаться в зависимости от условий обработки.",
    "stack": [
      [
        "Python · Modal",
        "Локальный клиент, автоматизация обработки файлов и управление облачной инфраструктурой."
      ],
      [
        "ONNX Runtime · CUDA · NVIDIA L4",
        "Запуск нейросетевых моделей и выполнение вычислений на облачной GPU."
      ],
      [
        "ONNX · FP16 · CoreML",
        "Адаптация моделей, управление параметрами и автоматический подбор настроек обработки."
      ],
      [
        "NumPy · Tiling",
        "Подготовка изображений, обработка перекрывающихся участков и сборка результата."
      ],
      [
        "PNG · 8/16 бит",
        "Формирование и сохранение изображений с выбранной глубиной цвета."
      ]
    ],
    "back": "← Все работы",
    "github": "Исходники на GitHub ↗",
    "taskLabel": "01 / ЗАДАЧА",
    "solutionLabel": "02 / РЕШЕНИЕ",
    "engineeringLabel": "03 / ИНЖЕНЕРИЯ",
    "engineeringTitle": "Ключевые инженерные решения",
    "resultLabel": "04 / РЕЗУЛЬТАТ",
    "proofTitle": "Проверка работоспособности",
    "stackLabel": "05 / ТЕХНОЛОГИИ",
    "stackTitle": "Технологии и их назначение",
    "runTitle": "Подтверждение облачного запуска",
    "outputTitle": "Проверка выходного изображения"
  },
  "en": {
    "kicker": "CLOUD GPU UPSCALING / IMAGE PROCESSING",
    "title": "Quality AI upscaling with cloud processing",
    "intro": "A standalone cloud service for increasing image resolution with several high-quality neural models. Users select the model and processing parameters on their computer, while all computation runs in the cloud on an NVIDIA L4.\n\nThe system supports individual and batch image processing, configurable quality controls and automatic saving of output files.",
    "heroCaption": "Actual cloud upscaling output. The source graphic was AI-generated for demonstration.",
    "taskTitle": "Build a standalone cloud service for quality AI upscaling",
    "task": "The goal was to build an independent neural image-upscaling system combining several professional models in one cloud service.\n\nThis required adapting the models for standalone use, understanding their execution requirements, reproducing quality controls and implementing manual and automatic parameter adjustment.\n\nAll computation needed to run on a cloud GPU, with control and output retrieval accessible from an ordinary computer regardless of its graphics capability. Processing entire image series also needed to be automated.",
    "solutionTitle": "How cloud upscaling works",
    "steps": [
      [
        "Select the model and parameters",
        "Users choose a model, 2× or 4× scale, denoise, sharpening and compression settings, and output format."
      ],
      [
        "Transfer to the cloud",
        "The local client sends images and settings to the cloud processor. Neural models reside in the cloud infrastructure."
      ],
      [
        "Run neural processing",
        "The cloud GPU increases resolution using the selected model. Large images are processed in tiles and assembled into a complete result."
      ],
      [
        "Retrieve the result",
        "Output files are automatically transferred to the user’s computer. Entire folders can be processed with shared settings."
      ]
    ],
    "engineering": [
      [
        "Adapt multiple neural models",
        "The system integrates five model variants across three families: CGI / Art, High Fidelity and Standard, supporting 2× and 4× depending on the model.\n\nDifferent models suit different image characteristics. Each has its own execution parameters and integration with the inference engine."
      ],
      [
        "Reproduce model controls",
        "A major task was adapting models for standalone use outside the original application.\n\nInput and output tensor structures, FP16 format, scaling, denoise, sharpening and compression parameters were investigated and configured. This provides control over processing and output quality, beyond simply executing the models."
      ],
      [
        "Manual settings and automatic parameter selection",
        "Processing controls account for each model’s requirements.\n\nOptional automatic adjustment uses separate CoreML models. When available, these analyse the input and recommend denoise, sharpening and compression values. Manual settings and defaults remain available."
      ],
      [
        "Process high-resolution images",
        "Large images are processed as overlapping 128- or 192-pixel tiles, then assembled with smoothly blended boundaries.\n\nThis approach controls GPU memory use and produces a coherent image without noticeable seams."
      ],
      [
        "A dedicated cloud runtime",
        "The computation layer runs on an NVIDIA L4 using CUDA and ONNX Runtime.\n\nModels remain in the cloud. Users transfer images and settings without uploading multi-gigabyte model files for every run."
      ],
      [
        "Batch processing and quality preservation",
        "A local client automates processing of individual images and folders.\n\nPNG output supports 8 or 16 bits per channel. Results are saved separately from originals, with programmatic output checks."
      ]
    ],
    "resultTitle": "Quality upscaling with fourfold resolution on each side",
    "result": "The service was verified through real cloud runs, automated tests and manual inspection of processed images.\n\nIn one verification run, a 1536 × 640 image was processed with CGI / Art 4× on an NVIDIA L4. The output was a 16-bit PNG at 6144 × 2560 pixels: four times the size on each side.\n\nMatching regions of the source and neural output can be compared below.",
    "before": "Source",
    "after": "Upscaled",
    "compareCaption": "Matching crops before and after processing. Move the divider to compare details.",
    "runCaption": "Actual execution report: NVIDIA L4, CUDA and the selected CGI / Art 4× model.",
    "outputCaption": "Output PNG: 6144 × 2560 pixels, RGB, 16 bits per channel.",
    "proof": "The service passed automated tests and practical checks with real cloud runs. Verification covered data transfer, model controls, GPU computation, output creation and file saving.\n\nFunctionality and processing quality were also tested manually. Checks confirmed the complete workflow, from model selection to output retrieval.\n\nIn one verification run, processing 55 tiles took 6.25 seconds. The complete cloud call took 113.29 seconds, including environment preparation and result transfer.\n\nThese figures refer to a specific run and may vary with processing conditions.",
    "stack": [
      [
        "Python · Modal",
        "Local client, file-processing automation and cloud infrastructure management."
      ],
      [
        "ONNX Runtime · CUDA · NVIDIA L4",
        "Neural-model execution and cloud GPU computation."
      ],
      [
        "ONNX · FP16 · CoreML",
        "Model adaptation, parameter controls and automatic processing settings."
      ],
      [
        "NumPy · Tiling",
        "Image preparation, overlapping tile processing and output assembly."
      ],
      [
        "PNG · 8/16 bit",
        "Image creation and saving with the selected colour depth."
      ]
    ],
    "back": "← All projects",
    "github": "Source on GitHub ↗",
    "taskLabel": "01 / THE TASK",
    "solutionLabel": "02 / THE SOLUTION",
    "engineeringLabel": "03 / ENGINEERING",
    "engineeringTitle": "Key engineering decisions",
    "resultLabel": "04 / THE RESULT",
    "proofTitle": "Functional verification",
    "stackLabel": "05 / TECHNOLOGIES",
    "stackTitle": "Technologies and their purpose",
    "runTitle": "Cloud execution verification",
    "outputTitle": "Output image verification"
  }
};
let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'ru';
function apply(){const t=copy[lang];document.documentElement.lang=lang;document.title=t.title+' — Evgeny Meleshkevich';document.querySelector('meta[name="description"]').content=t.intro;document.querySelectorAll('[data-t]').forEach(e=>{const text=t[e.dataset.t];if(text.includes('\n\n')){e.replaceChildren(...text.split('\n\n').map(s=>{const p=document.createElement('p');p.textContent=s;return p}))}else e.textContent=text});document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.brand,.back,[data-home]').forEach(a=>a.href='../../?lang='+lang+'#work');for(const [id,key]of [['pipeline','steps'],['engineering-grid','engineering'],['stack-grid','stack']]){document.getElementById(id).replaceChildren(...t[key].map((row,i)=>{const el=document.createElement('article');if(key==='steps'){const n=document.createElement('small');n.textContent='0'+(i+1);el.append(n)}const h=document.createElement('h3');h.textContent=row[0];const p=document.createElement('p');row[1].split('\n\n').forEach((text,i)=>{if(i){const br=document.createElement('br');p.append(br,br.cloneNode())}p.append(document.createTextNode(text))});el.append(h,p);return el}));}const hero=document.getElementById('hero-image');if(hero)hero.src='assets/chat-'+lang+'.png';const run=document.getElementById('run-image');if(run)run.src='assets/cloud-run-'+lang+'.png';const output=document.getElementById('output-image');if(output)output.src='assets/result-'+lang+'.png';const range=document.getElementById('compare-range');if(range)range.setAttribute('aria-label',lang==='ru'?'Положение разделителя до и после':'Before and after divider position');}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState({},'',u);apply()});const range=document.getElementById('compare-range');if(range)range.oninput=()=>document.querySelector('.compare-frame').style.setProperty('--split',range.value+'%');apply();
