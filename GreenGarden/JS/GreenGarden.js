/*nav fixed avec le scroll*/

posicionarMenu();

$(window).scroll(function () {
  posicionarMenu();
});

function posicionarMenu() {
  var altura_del_header = $(".barra-logo").outerHeight(true);
  
  if ($(window).scrollTop() >= altura_del_header) {
    $(".barra").addClass("fixed"); 
    
  } else {
    $(".barra").removeClass("fixed");       
  }
}

/*****************************************************************************/
/*
let nom = document.getElementById('nom'); //Last Name
    let span1 = document.getElementById('sp1'); // Span Last name

    ///////////////////////////////////////////////////////////////

    let prenom = document.getElementById('prenom'); //name
    let span2 = document.getElementById('sp2'); // Span name

    //////////////////////////////////////////////////////////////

    let password = document.getElementById('password'); //password
    let confpassword = document.getElementById('confpassword'); //Confirm password
    let span3 = document.getElementById('sp3'); // span confirm

    //////////////////////////////////////////////////////////////

    const btn = document.getElementById('creerCompte');
    let contador = 0;


    function validation(element, valid){
      if(valid===true){
          element.classList.remove('error');
          contador++;
      }else{
          element.classList.add('error');
          
      }
  }


      ////////////////////////NOM///////////////////////////////////////

nom.addEventListener('change', ()=>{
  (nom.value.length) > 2 ? validation(span1, true) : validation(span1, false);

});



  /////////////////////////NAME//////////////////////////////////////

prenom.addEventListener('change', ()=>{
  (prenom.value.length) > 2 ? validation(span2, true) : validation(span2, false);
}) 


////////////////////////////PASSWORD////////////////////////////////////////////

confpassword.addEventListener('change', ()=>{
  (confpassword.value===password.value) ? validation(span3, true) : validation(span3, false);
})
*/

/*
btn.addEventListener('click', ()=>{
  (contador===3) ? alert('ok') : alert('warning');
})
*/

/*
btn.addEventListener('click', ()=>{

  if(contador===3){
      alert ('ok');
  }else{
      alert('warning');
  }
  
})*/


//const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const btn = document.getElementById('creerCompte');
 
btn.addEventListener('click', function(){
    let nom = document.getElementById('nom'); //Last Name
    let span1 = document.getElementById('sp1'); // Span Last name

    ///////////////////////////////////////////////////////////////

    let prenom = document.getElementById('prenom'); //name
    let span2 = document.getElementById('sp2'); // Span name

    //////////////////////////////////////////////////////////////

    let password = document.getElementById('password'); //password
    let confpassword = document.getElementById('confpassword'); //Confirm password
    let span3 = document.getElementById('sp3'); // span confirm


    //confirm Last Name
    if(nom.value.length<=2){        
            span1.classList.add('error');
            nom.value = ''; 
            alert('Verifier Nom');      
    }else{
        span1.classList.remove('error');
        console.log("ok prenom");
        
    }


    //confirm Name
    if(prenom.value.length<=2){
            span2.classList.add('error');
            prenom.value = '';
            alert('verifier Prenom');  
    }else{
        span2.classList.remove('error');
        console.log("ok nom");

    }

    //confirm Password

    if(password.value===confpassword.value){
        span3.classList.remove('error');
      
    }else{
        span3.classList.add('error'); //option 1
        span3.innerHTML='password incorrect'; // option 2
        password.value = '';
        confpassword.value = '';
        alert('Verifier Mot de Passe')
    }
})


///////////////////////////////////////////////////////////////////


var password = document.getElementById("password")
  , confirm_password = document.getElementById("confpassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;