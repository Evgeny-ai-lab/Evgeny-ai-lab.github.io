function applyHomeLabels(){const en=document.documentElement.lang==='en';document.querySelector('[data-home-copy="work"]').textContent=en?'Explore projects':'Смотреть работы';document.querySelector('[data-home-copy="about"]').textContent=en?'About me':'Обо мне';}
new MutationObserver(applyHomeLabels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});applyHomeLabels();
