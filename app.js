(() => {
'use strict';
const en = {
navAbout:"About",portfolioHeading:"Portfolio of solutions",portfolioLead:"AI services, data tools and automation \u2014 projects, interfaces and results.",aboutLabel:"02 / ABOUT",aboutTitle:"AI solution development <br>& intelligent automation",aboutLead:"I develop practical solutions using generative artificial intelligence (GenAI), large language models (LLMs) and modern software automation tools.",areasLabel:"Main areas",areaAiTitle:"AI agents & intelligent assistants",areaAiCopy:"LLM-based systems for automated tasks, information processing and interaction with external services.",areaProcessTitle:"Business process automation",areaProcessCopy:"Software solutions, API integrations, document workflows and automation of routine operations.",areaDataTitle:"Data collection & intelligent analytics",areaDataCopy:"Information processing and analysis, data visualization, interactive dashboards, charts and analytical reports using AI.",areaContentTitle:"Generative content",areaContentCopy:"Creation and processing of images, video, text and multimedia using GenAI.",technologiesLabel:"Technologies & competencies",

skip:'Skip to content',navDirections:'Expertise',navWork:'Work',navApproach:'Approach',eyebrow:'AI · DATA · AUTOMATION',heroLine1:'Understand the task.',heroLine2:'Build the solution.',intro:'I turn repetitive tasks and scattered data into practical tools. I use AI, scripts and a combination of both to fit the problem.',explore:'Explore my expertise',howWork:'How I work ↓',heroNote:'Evgeny Meleshkevich<br>Practical solutions for business',boardLabel:'SOLUTION FRAMEWORK',input:'The task',inputSub:'Data · documents · workflow',engine:'An approach that fits',scripts:'Scripts',ai:'AI',hybrid:'Combined',output:'A useful result',outputSub:'Tool · report · automation',boardFooter:'From understanding a workflow to checking the result',principle1:'The task determines the tool',principle2:'Results you can verify',principle3:'Development with AI',directionsEyebrow:'01 / EXPERTISE',directionsTitle:'Different tasks.<br>One systematic approach.',directionsIntro:'From focused utilities to applications. I choose the scope and implementation around the workflow, data and intended outcome.',workEyebrow:'01 / WORK',workTitle:'Projects',workIntro:'Open a project to learn more',emptyTitle:'Case studies are being prepared',emptyCopy:'Project stories, actual screenshots and results will appear here. Select an area above to explore the categories.',emptyLabel:'ADDED STEP BY STEP',formatTitle:'How the work will be presented',formatNote:'Presentation examples, not published projects',sampleLabel:'PRESENTATION MOCKUP',caseType:'DETAILED CASE STUDY',caseTitle:'Application or system',caseCopy:'The problem, workflow, screenshots, outcome and my contribution.',preview:'Explore the structure →',integrationType:'INTEGRATION',integrationTitle:'Data across services',integrationCopy:'The source, processing, output and access limitations.',utilityType:'PRACTICAL UTILITY',utilityTitle:'A focused task, a useful result',utilityCopy:'Input, execution, output. A concise, clear demonstration.',approachEyebrow:'03 / APPROACH',approachTitle:'The workflow first.<br>The technology second.',approachIntro:'My role is to understand what needs to change, define the requirements and deliver a useful result. AI supports development and becomes part of the product when appropriate.',methodNote:'For each project, I explain where AI is used and where conventional programming is sufficient.',step1Title:'Understand the problem',step1Copy:'Identify repeated actions, data gaps and the outcome the user needs.',step2Title:'Choose an approach',step2Copy:'A script, integration, AI tool or application — depending on the requirements.',step3Title:'Build and verify',step3Copy:'Develop with AI, check the output against the data and refine the solution.',step4Title:'Show the outcome',step4Copy:'A clear workflow, an output file or a tool, with its limitations explained.',contactEyebrow:'COLLABORATION',contactTitle:'Have a task? Let’s talk.',contactCopy:'Workflow automation, intelligent assistants, information collection and analysis, neural network services and visual content creation — technologies that can address a wide range of tasks.',contactClosing:'Open to interesting challenges, new ideas and collaboration.',contactEmail:'Email',githubProfile:'GitHub profile',footerLabel:'AI · Data · Automation',backTop:'Back to top ↑',dialogLabel:'FUTURE CASE STUDY STRUCTURE',dialogFootnote:'This is a structure example. It contains no invented clients, metrics or outcomes.'
};
const ru = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el=>[el.dataset.i18n,el.innerHTML]));
// Category icons: Lucide (ISC), https://lucide.dev
const categories = [
  {
    "id": "ai",
    "icon": "<path d=\"M12 8V4H8\"/><rect height=\"12\" rx=\"2\" width=\"16\" x=\"4\" y=\"8\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M15 13v2\"/><path d=\"M9 13v2\"/>",
    "ru": {
      "title": "AI-агенты и ассистенты",
      "short": "AI-агенты и ассистенты",
      "description": "Интеллектуальные системы для взаимодействия с пользователем, анализа информации и самостоятельного выполнения задач.",
      "tags": "Агенты · Ассистенты · Инструменты"
    },
    "en": {
      "title": "AI Agents & Assistants",
      "short": "AI Agents & Assistants",
      "description": "Intelligent systems for user interaction, information analysis and autonomous task execution.",
      "tags": "Agents · Assistants · Tools"
    }
  },
  {
    "id": "monitor",
    "icon": "<path d=\"M12 16v5\"/><path d=\"M16 14.639V21\"/><path d=\"M20 10.656V21\"/><path d=\"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15\"/><path d=\"M4 18.463V21\"/><path d=\"M8 14.656V21\"/>",
    "ru": {
      "title": "Данные и аналитика",
      "short": "Данные и аналитика",
      "description": "Сбор, обработка и анализ данных, мониторинг изменений, визуализация и прогнозирование.",
      "tags": "Данные · Мониторинг · Прогнозирование"
    },
    "en": {
      "title": "Data & Analytics",
      "short": "Data & Analytics",
      "description": "Data collection, processing and analysis, change monitoring, visualization and forecasting.",
      "tags": "Data · Monitoring · Forecasting"
    }
  },
  {
    "id": "process",
    "icon": "<rect height=\"8\" rx=\"2\" width=\"8\" x=\"3\" y=\"3\"/><path d=\"M7 11v4a2 2 0 0 0 2 2h4\"/><rect height=\"8\" rx=\"2\" width=\"8\" x=\"13\" y=\"13\"/>",
    "ru": {
      "title": "Автоматизация",
      "short": "Автоматизация",
      "description": "Программные решения для автоматизации рабочих процессов, документооборота и повторяющихся операций.",
      "tags": "Процессы · Документы · Интеграции"
    },
    "en": {
      "title": "Automation",
      "short": "Automation",
      "description": "Software solutions for automating workflows, document processing and repetitive operations.",
      "tags": "Workflows · Documents · Integrations"
    }
  },
  {
    "id": "services",
    "icon": "<path d=\"m10.852 14.772-.383.923\"/><path d=\"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923\"/><path d=\"m13.148 9.228.383-.923\"/><path d=\"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544\"/><path d=\"m14.772 10.852.923-.383\"/><path d=\"m14.772 13.148.923.383\"/><path d=\"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5\"/><path d=\"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5\"/><path d=\"M6 18h.01\"/><path d=\"M6 6h.01\"/><path d=\"m9.228 10.852-.923-.383\"/><path d=\"m9.228 13.148-.923.383\"/>",
    "ru": {
      "title": "AI-сервисы",
      "short": "AI-сервисы",
      "description": "Развёртывание нейросетевых моделей, облачные вычисления и создание сервисов на основе искусственного интеллекта.",
      "tags": "Модели · Облако · Сервисы"
    },
    "en": {
      "title": "AI Services",
      "short": "AI Services",
      "description": "Deployment of neural network models, cloud computing and development of AI-powered services.",
      "tags": "Models · Cloud · Services"
    }
  },
  {
    "id": "content",
    "icon": "<path d=\"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16\"/><path d=\"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2\"/><circle cx=\"13\" cy=\"7\" fill=\"currentColor\" r=\"1\"/><rect height=\"14\" rx=\"2\" width=\"14\" x=\"8\" y=\"2\"/>",
    "ru": {
      "title": "AI-контент",
      "short": "AI-контент",
      "description": "Генерация изображений, видео и визуальных материалов с использованием искусственного интеллекта.",
      "tags": "Изображения · Видео · Галерея"
    },
    "en": {
      "title": "AI Content",
      "short": "AI Content",
      "description": "Generation of images, video and visual materials using artificial intelligence.",
      "tags": "Images · Video · Gallery"
    }
  }
];
const allProjectsIcon="<rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"/><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"/><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"14\"/><rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"14\"/>";

const formatParts = {
ru:[['Задача','Кому нужен инструмент и какие ручные действия он заменяет.'],['Решение','Входные данные, этапы обработки и участие человека.'],['Результат','Конкретный выход: документ, данные, файлы или работающий инструмент.'],['Доказательства','Реальные экраны, пример результата и основания для показателей.'],['Моя роль','Постановка требований, выбор подхода, разработка с ИИ и проверка.'],['Технологии','Использованные инструменты и роль каждого в решении.'],['Статус и ограничения','Что проверено, где используется ИИ и что ещё требует доработки.']],
en:[['The problem','Who needs the tool and which manual steps it replaces.'],['The solution','Inputs, processing stages and human involvement.'],['The outcome','A specific output: a document, data, files or a working tool.'],['Evidence','Actual screenshots, an output sample and support for any metrics.'],['My contribution','Requirements, approach, development with AI and verification.'],['Technology','The tools used and their role in the solution.'],['Status & limitations','What has been checked, where AI is used and what needs more work.']]
};
let lang = 'ru', filter = 'all', activeFormat = 'case';
try {lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('portfolio-language') || 'ru';} catch {}
if(!['ru','en'].includes(lang))lang='ru';
const $ = id => document.getElementById(id);
function tr(key){return (lang==='en'?en:ru)[key] || key;}
function svg(paths){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;}
function renderCategories(){
if(!$('categories'))return;
$('categories').innerHTML = categories.map((c,i)=>`<button type="button" class="category-card" data-category="${c.id}"><div class="category-top"><span class="category-number">0${i+1}</span><span class="category-icon">${svg(c.icon)}</span></div><h3>${c[lang].title}</h3><p>${c[lang].description}</p><div class="category-bottom"><span>${c[lang].tags}</span><span aria-hidden="true">↗</span></div></button>`).join('')+`<div class="category-card category-note"><span class="category-number">${lang==='ru'?'ПРИНЦИП':'PRINCIPLE'}</span><h3>${lang==='ru'?'Инструмент выбирается<br>под задачу.':'The right tool<br>for the task.'}</h3><p>${lang==='ru'?'ИИ, программная логика или их сочетание. Главное — полезный результат.':'AI, conventional programming or a combination. What matters is a useful outcome.'}</p><div class="category-bottom">AI / CODE / HYBRID</div></div>`;
$('categories').querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{setFilter(b.dataset.category);$('work').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}));
}
function renderAreaDirections(){const grid=document.querySelector('.about-grid');grid.replaceChildren(...categories.map(c=>{const a=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p');h.innerHTML=svg(c.icon);const label=document.createElement('span');label.textContent=c[lang].title;h.append(label);p.textContent=c[lang].description;a.append(h,p);return a}))}
function renderFilters(){
$('filters').innerHTML=[{id:'all',label:lang==='ru'?'Все проекты':'All Projects',icon:allProjectsIcon},...categories.map(c=>({id:c.id,label:c[lang].short,icon:c.icon}))].map(c=>`<button type="button" class="filter" data-filter="${c.id}" aria-pressed="${filter===c.id}">${svg(c.icon)}<span>${c.label}</span></button>`).join('');
$('filters').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
$('filters').setAttribute('aria-label',lang==='ru'?'Фильтр работ':'Filter projects');
}
function renderProjects(){
const projects=(window.PORTFOLIO_PROJECTS||[]).filter(p=>filter==='all'||p.category===filter);
$('project-list').replaceChildren();
for(const p of projects){
const card=document.createElement('a');card.className='project-card';card.href=p.url+'?lang='+lang;
const preview=document.createElement('div');preview.className='project-preview';
if(p.image){const im=document.createElement('img');im.src=p.images?.[lang]||p.image;im.alt=p.alt?.[lang]||p.title[lang];im.loading='lazy';preview.append(im);}
if(['qwen-kaggle'].includes(p.id))preview.classList.add('interface-preview');
const badge=document.createElement('span');badge.className='project-badge';badge.textContent=p.type[lang];preview.append(badge);card.append(preview);
const content=document.createElement('div');content.className='project-card-content';
const title=document.createElement('h3');title.textContent=p.title[lang];
const summary=document.createElement('p');summary.textContent=p.summary[lang];
const bottom=document.createElement('div');bottom.className='project-bottom';
const arrow=document.createElement('span');arrow.className='project-open';arrow.setAttribute('aria-hidden','true');arrow.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';
bottom.append(arrow);content.append(title,summary,bottom);card.append(content);$('project-list').append(card);
}
$('empty-state').hidden=projects.length>0;
const c=categories.find(c=>c.id===filter);
$('empty-title').textContent=c?c[lang].title:tr('emptyTitle');
$('empty-copy').textContent=filter==='content'?(lang==='ru'?'Здесь появится галерея AI-изображений и видео. Пока работы готовятся, другие проекты доступны в разделе «Все проекты».':'A gallery of AI images and videos will appear here. While these works are being prepared, explore the existing projects under “All Projects”.'):c?(lang==='ru'?'Кейсы этого направления добавим позже. Выберите «Все проекты», чтобы посмотреть опубликованные работы.':'Case studies in this area will be added later. Select “All projects” to see the published work.'):tr('emptyCopy');
}
function setFilter(value){filter=value;renderFilters();renderProjects();}
function fillDialog(){
const titleKeys={case:'caseTitle',integration:'integrationTitle',utility:'utilityTitle'};
const copyKeys={case:'caseCopy',integration:'integrationCopy',utility:'utilityCopy'};
$('dialog-title').textContent=tr(titleKeys[activeFormat]);$('dialog-description').textContent=tr(copyKeys[activeFormat]);
$('dialog-steps').innerHTML=formatParts[lang].map(([t,d])=>`<li><div><strong>${t}</strong><p>${d}</p></div></li>`).join('');
}
function applyLanguage(){
document.documentElement.lang=lang;
document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=tr(el.dataset.i18n);});
document.title=lang==='ru'?'Евгений Мелешкевич — ИИ, данные и автоматизация':'Evgeny Meleshkevich — AI, Data & Automation';
document.querySelector('meta[name="description"]').content=lang==='ru'?'Евгений Мелешкевич. ИИ-инструменты, сбор данных, аналитика и автоматизация рабочих процессов.':'Evgeny Meleshkevich. AI tools, data collection, analytics and workflow automation.';
document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));

document.querySelector('.system-board')?.setAttribute('aria-label',lang==='ru'?'Схема: задача, подход, результат':'Diagram: task, approach, outcome');

$('close-dialog').setAttribute('aria-label',lang==='ru'?'Закрыть':'Close');
renderFilters();renderProjects();renderCategories();renderAreaDirections();fillDialog();
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('portfolio-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState({},'',url);applyLanguage();}));
document.querySelectorAll('[data-format]').forEach(b=>b.addEventListener('click',()=>{activeFormat=b.dataset.format;fillDialog();$('format-dialog').showModal();}));
$('close-dialog').addEventListener('click',()=>$('format-dialog').close());
$('format-dialog').addEventListener('click',event=>{if(event.target===$('format-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
applyLanguage();
})();
