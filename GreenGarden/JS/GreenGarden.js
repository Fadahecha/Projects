/* JQUERRY - nav fixed avec le scroll*/
  $(function(){
  posicionarMenu();

$(window).scroll(function () {
  posicionarMenu();
});

function posicionarMenu() {
  var altura_del_header = $(".barra-logo").outerHeight(true);
  console.log(altura_del_header);
  if ($(window).scrollTop() >= altura_del_header) {
    $(".barra").addClass("fixed"); 
    
  } else {
    $(".barra").removeClass("fixed");       
  }
}
});


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


//////////////////////////Final?////////////////////////////////

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

    //////////////////////////////////////////////////////////////
    let form = document.querySelector('#createForm');
    //let email = document.getElementById('email'); //email

    form.email.addEventListener('change', function(){
      validEmail(this)
  
  });

  const validEmail = function(inputEmail) {
    //regexp para validacion de mail
    let emailRegexp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  
    );
  
      let testEmail = emailRegexp.test(inputEmail.value)
      let small = inputEmail.nextElementSibling
  
      if (testEmail){
          small.innerHTML = "Adresse valide";
      }else{
        small.innerHTML = "adresse Non valide"
      }
  
  }; 


    ///////////////////////////////////////////////////////////// 


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


//////////////////////////////////////////////////////////

const logEmail = document.getElementById('logEmail');
const logPass = document.getElementById('logPass');
const form = document.querySelector('#loginForm'); //cuando recupero mi Form asi con un id, puedo recumerar todos sus inputs internos con sus 'name' por eso agregue 'name' a cada input

form.addEventListener('submit', (e)=> {
  e.preventDefault()
});

const validEmail = function(inputEmail) {
  //regexp para validacion de mail
  let emailRegexp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'

  );

    let testEmail = emailRegexp.test(inputEmail.value)
    let small = inputEmail.nextElementSibling

    if (testEmail){
        small.innerHTML = "Adresse valide";
    }else{
      small.innerHTML = "adresse Non valide"
    }

}; 



/*form.addEventListener('submit', ()=>

})
*/



















/*
console.log(form.email)
//escucharr la modificacion del email

form.addEventListener('submit', (e)=> {
  e.preventDefault()
});

form.email.addEventListener('change', function(){
    validEmail(this)

});

const validEmail = function(inputEmail) {
  //regexp para validacion de mail
  let emailRegexp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'

  );

    let testEmail = emailRegexp.test(inputEmail.value)
    let small = inputEmail.nextElementSibling

    if (testEmail){
        small.innerHTML = "Adresse valide";
    }else{
      small.innerHTML = "adresse Non valide"
    }

}; 

console.log(testEmail);*/