"use strict"

let imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
let cont = 0;



function carousel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if(tgt==atras){
            if(cont>0){
                img.src = imagenes[cont-1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length-1]
                cont = imagenes.length-1;
            }
        }else if(tgt==adelante){
            if(cont< imagenes.length-1){
                img.src = imagenes[cont +1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    let contenedor = document.querySelector('.contenedor');
    carousel(contenedor);
})



             //Ejemplo
/*document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});*/














