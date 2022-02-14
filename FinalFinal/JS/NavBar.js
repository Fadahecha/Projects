const body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      modeToggle = document.querySelector('.dark-light'),
      searchToggle = document.querySelector('.searchToggle'),
      sidebarOpen = document.querySelector('.sidebarOpen'),
      sidebarClose = document.querySelector('.sidebarClose');

      let getMode = localStorage.getItem('mode');
          if(getMode && getMode === 'dark-mode'){
            body.classList.add('dark');
          }
      


//js para cambiar el modo noche o dia
      modeToggle.addEventListener('click', ()=>{
        modeToggle.classList.toggle('active');
        body.classList.toggle('dark');


        //js para mantener el modo incluso si se actualiza  o se abre nuevamente
        if(!body.classList.contains('dark')){
            localStorage.setItem('mode', 'light-mode');
        }else{
            localStorage.setItem('mode', 'dark-mode');
        }
      });

//js para cambiar el buscar
        searchToggle.addEventListener('click', ()=>{
            searchToggle.classList.toggle('active');
        
      }); 

//js para toggle la sidebar
sidebarOpen.addEventListener('click', ()=>{
    nav.classList.add('active');
});

body.addEventListener('click', e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')){
        nav.classList.remove('active');
    }

});
