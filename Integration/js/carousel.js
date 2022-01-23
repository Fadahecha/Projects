
let slider_index =0;

//funcion  que tendra un parametro'index' 
function show_slide(index){
//una variable local aue va a recuperar todas las clases en comun de los minicontenedores de imagenes  
    let slides = document.querySelectorAll('.slide');
//una variable para recupear los dots
    let dots = document.querySelectorAll('.dot-nav');  

 /////cuando el usuario esta clickeando y llega a la ultima posicion de imagenes, QUEREMOS regresar a la posicion[0]/////
    if(index>=slides.length)  slider_index=0;
    if(index<0) slider_index= slides.length-1;

    //creamos un 'for' para [i]
    for(let i=0; i<slides.length; i++){
    //y siempre que [i] haga un tour, afectara directamente a la clase '.slides' que esta en la variable 'slides'... Ocultandola con diplay = 'none' una clase CSS atacada desde JS 
      slides[i].style.display = 'none';
    //aqui el tour de la [i] afecta a la clase '.dots' con el metodo deseado  
      dots[i].classList.remove('active-dot');
    }
    
    //mientras el for ocurre, a slides le damos el valor de para que se muestre 
    slides[slider_index].style.display='block';
    //igual para dots
    dots[slider_index].classList.add('active-dot');

  /****En resumen, en el ciclo for removemos todo a las clases .slides y .dots-nav y por fuera le agregamos los valores al elemento que se este mostrando.****/  
}

show_slide(slider_index);

/////Ahora queremos que cuando se clickee en las flechas, la imagen cambie y para ello, creamos un LISTENER.
//el listener tendra un 1er parametro 'click' y de 2do parametro una funcion callcack () = >{}
document.querySelector('#arrow-prev').addEventListener('click', ()=>{
show_slide(--slider_index);
})

document.querySelector('#arrow-next').addEventListener('click', ()=>{
  show_slide(++slider_index);
})

//////////////////////////////////////////////////////////////////////
/*clickear en los dots y que se carguen las imagenes con ForEach*/

/*Selecciono todos los elementos que tengan'.dot-nav', le aplico un "listener"
a cada uno. y con el forEach con cada clickado se recupera el indice del
string con 'indexOf*/
document.querySelectorAll('.dot-nav').forEach( (element) =>{
  element.addEventListener('click', function(){
    let dots = Array.prototype.slice.call(this.parentElement.children);
    let dot_index = dots.indexOf(element);
    show_slide(slider_index = dot_index);
  })
})


////////////////////////////////////////////////////////////////////////
/*Ahora añadimos un setInterval, para que las imagenes roten en cierto tiempo*/

setInterval(() => {
  show_slide(++slider_index)
}, 4000);





/*
let slider_index = 0;

function show_slide(index) {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot-nav');

  if (index >= slides.length) slider_index = 0;
  if (index < 0) { slider_index = slides.length - 1 };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove('active-dot');
  }

  slides[slider_index].style.display = 'block';
  dots[slider_index].classList.add('active-dot');
}

show_slide(slider_index);

document.querySelector('#arrow-prev').addEventListener('click', () => {
  show_slide(--slider_index);
});


document.querySelector('#arrow-next').addEventListener('click', () => {
  show_slide(++slider_index);
});


document.querySelectorAll('.dot-nav').forEach((element) => {
  element.addEventListener('click', function () {
    var dots = Array.prototype.slice.call(this.parentElement.children),
      dot_index = dots.indexOf(element);
    show_slide(slider_index = dot_index);
  })
});


setInterval(() => {
  show_slide(++slider_index)
}, 4000);*/