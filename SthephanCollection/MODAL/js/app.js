// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay

let modalBtn = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector('.close-btn');




modalBtn.addEventListener("click", function(){

    modalOverlay.classList.add("open-modal")
});


closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal")
});












  //"modal-overlay"

 /* 
function openModal() {   
    //Añade una clase al elemento que tenga la class 'modal-overlay'
    document.getElementsByClassName("modal-overlay").classList.remove("visible");
  }

  document.getElementByClassName('btn modal-btn').onclick= function(){
	openModal();
}
*/


