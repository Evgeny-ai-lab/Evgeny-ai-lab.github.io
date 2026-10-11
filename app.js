(() => {
'use strict';
const en = {
navAbout:"About",portfolioHeading:"Portfolio of solutions",portfolioLead:"AI services, data tools and automation \u2014 projects, interfaces and results.",aboutLabel:"02 / ABOUT",aboutTitle:"AI solution development <br>& intelligent automation",aboutLead:"I develop practical solutions using generative artificial intelligence (GenAI), large language models (LLMs) and modern software automation tools.",areasLabel:"Main areas",areaAiTitle:"AI agents & intelligent assistants",areaAiCopy:"LLM-based systems for automated tasks, information processing and interaction with external services.",areaProcessTitle:"Business process automation",areaProcessCopy:"Software solutions, API integrations, document workflows and automation of routine operations.",areaDataTitle:"Data collection & intelligent analytics",areaDataCopy:"Information processing and analysis, data visualization, interactive dashboards, charts and analytical reports using AI.",areaContentTitle:"Generative content",areaContentCopy:"Creation and processing of images, video, text and multimedia using GenAI.",technologiesLabel:"Technologies & competencies",

skip:'Skip to content',navDirections:'Expertise',navWork:'Work',navApproach:'Approach',eyebrow:'AI · DATA · AUTOMATION',heroLine1:'Understand the task.',heroLine2:'Build the solution.',intro:'I turn repetitive tasks and scattered data into practical tools. I use AI, scripts and a combination of both to fit the problem.',explore:'Explore my expertise',howWork:'How I work ↓',heroNote:'Evgeny Meleshkevich<br>Practical solutions for business',boardLabel:'SOLUTION FRAMEWORK',input:'The task',inputSub:'Data · documents · workflow',engine:'An approach that fits',scripts:'Scripts',ai:'AI',hybrid:'Combined',output:'A useful result',outputSub:'Tool · report · automation',boardFooter:'From understanding a workflow to checking the result',principle1:'The task determines the tool',principle2:'Results you can verify',principle3:'Development with AI',directionsEyebrow:'01 / EXPERTISE',directionsTitle:'Different tasks.<br>One systematic approach.',directionsIntro:'From focused utilities to applications. I choose the scope and implementation around the workflow, data and intended outcome.',workEyebrow:'01 / WORK',workTitle:'Work and its outcomes',workIntro:'Open a project to explore how it works: actual screenshots, output examples and source code.',emptyTitle:'Case studies are being prepared',emptyCopy:'Project stories, actual screenshots and results will appear here. Select an area above to explore the categories.',emptyLabel:'ADDED STEP BY STEP',formatTitle:'How the work will be presented',formatNote:'Presentation examples, not published projects',sampleLabel:'PRESENTATION MOCKUP',caseType:'DETAILED CASE STUDY',caseTitle:'Application or system',caseCopy:'The problem, workflow, screenshots, outcome and my contribution.',preview:'Explore the structure →',integrationType:'INTEGRATION',integrationTitle:'Data across services',integrationCopy:'The source, processing, output and access limitations.',utilityType:'PRACTICAL UTILITY',utilityTitle:'A focused task, a useful result',utilityCopy:'Input, execution, output. A concise, clear demonstration.',approachEyebrow:'03 / APPROACH',approachTitle:'The workflow first.<br>The technology second.',approachIntro:'My role is to understand what needs to change, define the requirements and deliver a useful result. AI supports development and becomes part of the product when appropriate.',methodNote:'For each project, I explain where AI is used and where conventional programming is sufficient.',step1Title:'Understand the problem',step1Copy:'Identify repeated actions, data gaps and the outcome the user needs.',step2Title:'Choose an approach',step2Copy:'A script, integration, AI tool or application — depending on the requirements.',step3Title:'Build and verify',step3Copy:'Develop with AI, check the output against the data and refine the solution.',step4Title:'Show the outcome',step4Copy:'A clear workflow, an output file or a tool, with its limitations explained.',contactEyebrow:'WORK & COLLABORATION',contactTitle:'Have a task<br>you want to simplify?',contactCopy:'Open to employment and project collaboration in automation, AI and data.',githubProfile:'GitHub profile',footerLabel:'AI · Data · Automation',backTop:'Back to top ↑',dialogLabel:'FUTURE CASE STUDY STRUCTURE',dialogFootnote:'This is a structure example. It contains no invented clients, metrics or outcomes.'
};
const ru = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el=>[el.dataset.i18n,el.innerHTML]));
const categories = [
{id:'ai',icon:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/><path d="M20 3v4m-2-2h4"/>',ru:{title:'AI-агенты и интеллектуальные ассистенты',description:'Инструменты для работы с информацией и выполнения последовательности задач.',tags:'Помощники · Инструменты · Интеграции',short:'AI-агенты и ассистенты'},en:{title:'AI agents & assistants',description:'Tools for working with information and carrying out a sequence of tasks.',tags:'Assistants · Tools · Integrations',short:'AI agents & assistants'}},
{id:'data',icon:'<path d="M5 3h9l5 5v13H5Z"/><path d="M14 3v6h5M8 13h8M8 17h5"/>',ru:{title:'Сбор и обработка данных',description:'Данные из сайтов, документов и изображений — в удобном для работы виде.',tags:'Сайты · Документы · Изображения',short:'Сбор и обработка данных'},en:{title:'Data collection & extraction',description:'Information from websites, documents and images, structured for practical use.',tags:'Websites · Documents · Images',short:'Data collection & processing'}},
{id:'monitor',icon:'<path d="M4 4v16h16M8 16v-4M12 16V8M16 16V5"/>',ru:{title:'Мониторинг и аналитика',description:'Наблюдение за изменениями, история данных, статистика и понятные отчёты.',tags:'История · Статистика · Отчёты',short:'Мониторинг и аналитика'},en:{title:'Monitoring & analytics',description:'Track changes, retain data history and turn observations into statistics and reports.',tags:'History · Statistics · Reports',short:'Monitoring & analytics'}},
{id:'process',icon:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h9v9M15 12l3 3 3-3M6 9v9h9"/>',ru:{title:'Автоматизация процессов',description:'Документы, рабочие операции и обработка обращений с меньшим числом ручных шагов.',tags:'Документы · Операции · Сервисы',short:'Автоматизация процессов'},en:{title:'Process automation',description:'Documents, routine operations and request handling with fewer manual steps.',tags:'Documents · Workflows · Services',short:'Process automation'}},
{id:'content',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',ru:{title:'Генеративный контент',description:'Пакетная обработка, преобразование и подготовка файлов к следующему этапу.',tags:'Изображения · Конвертация · Пакеты',short:'Генеративный контент'},en:{title:'Generative content',description:'Batch processing, conversion and preparation of files for the next stage.',tags:'Images · Conversion · Batches',short:'Generative content'}}
];
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
$('categories').innerHTML = categories.map((c,i)=>`<button type="button" class="category-card" data-category="${c.id}"><div class="category-top"><span class="category-number">0${i+1}</span><span class="category-icon">${svg(c.icon)}</span></div><h3>${c[lang].title}</h3><p>${c[lang].description}</p><div class="category-bottom"><span>${c[lang].tags}</span><span aria-hidden="true">↗</span></div></button>`).join('')+`<div class="category-card category-note"><span class="category-number">${lang==='ru'?'ПРИНЦИП':'PRINCIPLE'}</span><h3>${lang==='ru'?'Инструмент выбирается<br>под задачу.':'The right tool<br>for the task.'}</h3><p>${lang==='ru'?'ИИ, программная логика или их сочетание. Главное — полезный результат.':'AI, conventional programming or a combination. What matters is a useful outcome.'}</p><div class="category-bottom">AI / CODE / HYBRID</div></div>`;
$('categories').querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{setFilter(b.dataset.category);$('work').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}));
}
function renderFilters(){
$('filters').innerHTML=[{id:'all',label:lang==='ru'?'Все проекты':'All projects'},...categories.map(c=>({id:c.id,label:c[lang].short}))].map(c=>`<button type="button" class="filter" data-filter="${c.id}" aria-pressed="${filter===c.id}">${c.label}</button>`).join('');
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
const tags=document.createElement('div');tags.className='project-tags';for(const t of p.tags?.[lang]||[]){const tag=document.createElement('span');tag.textContent=t;tags.append(tag);}
const bottom=document.createElement('div');bottom.className='project-bottom';
const arrow=document.createElement('span');arrow.className='project-open';arrow.setAttribute('aria-hidden','true');arrow.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';
bottom.append(tags,arrow);content.append(title,summary,bottom);card.append(content);$('project-list').append(card);
}
$('empty-state').hidden=projects.length>0;
const c=categories.find(c=>c.id===filter);
$('empty-title').textContent=c?c[lang].title:tr('emptyTitle');
$('empty-copy').textContent=c?(lang==='ru'?'Кейсы этого направления добавим позже. Выберите «Все проекты», чтобы посмотреть опубликованные работы.':'Case studies in this area will be added later. Select “All projects” to see the published work.'):tr('emptyCopy');
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
$('navigation').setAttribute('aria-label',lang==='ru'?'Главная навигация':'Main navigation');
document.querySelector('.system-board')?.setAttribute('aria-label',lang==='ru'?'Схема: задача, подход, результат':'Diagram: task, approach, outcome');
document.querySelector('.menu-button').setAttribute('aria-label',lang==='ru'?'Открыть меню':'Open menu');
$('close-dialog').setAttribute('aria-label',lang==='ru'?'Закрыть':'Close');
renderFilters();renderProjects();fillDialog();
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('portfolio-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState({},'',url);applyLanguage();}));
document.querySelectorAll('[data-format]').forEach(b=>b.addEventListener('click',()=>{activeFormat=b.dataset.format;fillDialog();$('format-dialog').showModal();}));
$('close-dialog').addEventListener('click',()=>$('format-dialog').close());
$('format-dialog').addEventListener('click',event=>{if(event.target===$('format-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
const menu=document.querySelector('.menu-button');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('navigation').classList.toggle('open',open);});
$('navigation').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');$('navigation').classList.remove('open');}));
applyLanguage();
})();
