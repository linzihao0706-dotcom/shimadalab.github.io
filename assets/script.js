(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if(toggle){ toggle.addEventListener('click', ()=> nav.classList.toggle('open')); }

  // active link by data-page
  const page = document.documentElement.getAttribute('data-page');
  if(page){
    const keyMap = {
      home:'home', news:'news', research:'research', policy:'policy',
      members:'members', publications:'publications', projects:'projects', access:'access'
    };
    const key = keyMap[page];
    document.querySelectorAll('.nav-link').forEach(a=>{
      if(a.dataset.key === key){ a.classList.add('active'); }
    });
  }
})();