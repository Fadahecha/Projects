// Récupérer le sélecteur .about, tous les sélecteurs .tab-btn et .content
// Ecouter l'évènement 'click' sur .about

// Récupérer la valeur de l'id de l'élément courant avec e.target.dataset.id
// voir tuto https://codepen.io/dizakids/pen/WNNVLEz

  // si id
  
    // supprimer .active sur les autres boutons

    // le btn courant devient .active

    // supprimer .active sur les autres contenus

    // récupérer le contenu courant grâce à l'id

    // ajouter .active au contenu courant

   let about = document.querySelector('.about');
   let tabBtn = document.querySelectorAll('.tab-btn');
   let content = document.querySelectorAll('content');

   console.log(tabBtn);

   /*about.addEventListener("click",function(e){
      if (e.target.dataset.id != undefined){
        x = e.target.dataset.id;
        console.log(x);
      }

      //condition
*/


 // Ecouter l'évènement 'click' sur .about
about.addEventListener("click", function (e) {
  // Récupérer la valeur de l'id de l'élément courant avec 'e.target.dataset.id'
  // voir https://codepen.io/dizakids/pen/WNNVLEz
    const id = e.target.dataset.id;
   
    // si id
    if (id) {
      // supprimer .active sur les autres boutons
      tabBtn.forEach(function (btn) {
        btn.classList.remove("active");
      });
      // le btn courant devient .active
      e.target.classList.add("active");
      // supprimer .active sur les autres contenus
      content.forEach(function (content) {
        content.classList.remove("active");
      });
      // récupérer le contenu courant grâce à l'id
      const element = document.getElementById(id);
      // ajouter .active au contenu courant
      element.classList.add("active");
    }
  });

   

