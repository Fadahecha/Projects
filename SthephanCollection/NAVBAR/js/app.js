// Récupérer le sélecteur .nav-toggle ainsi que .links 

// Ecouter l'évènement 'click' sur .nav-toogle

  // si .links a pour class .show-links
    // la supprimer
  // sinon
    // l'ajouter

  // Vous pouvez arriver au même résultat avec classList.toggle


  ////variables
  let btnNavToggle = document.querySelector('.nav-toggle');
  let link = document.querySelector('.links');


//////////////////primera////////////////////////////////

/*
      
////función para desplegar/////
  function openMenuFuntion() {
    link.classList.toggle('show-links');

    //document.querySelector('.links').classList.toggle('show-links'); opcional
  }

////////////Botón///////////
  btnNavToggle.addEventListener('click', function(){
      openMenuFuntion();
  });
  */

//////////////////////segunda////////////////////////

btnNavToggle.addEventListener('click', function(){
//link.classList.toggle('show-links');   opcional

if(link.classList.contains ("show-links")){

  link.classList.remove('show-links');
}else{
  link.classList.add('show-links');
}


})