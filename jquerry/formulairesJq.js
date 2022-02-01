//////////focus() focusin()/////////////focus ne bouillonne pas à la différence de focusin.
$(document).ready(function(){
    //Change la couleur de fond du champ en bleu dès qu'il a les focus
    $("input").focus(function(){
        $(this).css("background-color", "lightBlue");
    });

    //Change la couleur de fond des label en jaune dès qu'un élément dans 
    //le formulaire a le focus
    $("form").focusin(function(){
        $("label").css("background-color", "yellow");
    });
});

///////////blur()  focusout()//////////////////
//cuando se pierde el focus, se desencadena un evento

$(document).ready(()=>{

       //Change la couleur de fond du champ en bleu dès qu'il a les focus
       $("input").focus(function(){
        $(this).css("background-color", "lightBlue");
    });

    //Change la couleur de fond du champ en blanc dès qu'il perd les focus
    $("input").blur(function(){
        $(this).css("background-color", "white");
    });

});

////////////change()///////////////////////
//se dipara cuando el valor de un elemento cambia
//solo ocurre con input, textarea, y select

$(document).ready(()=>{
    //Dès qu'une option différente est choisie, récupère et affiche sa valeur
    $('select').change(function(){
        $('span').text($(this).val());

    });
});

/////////////submit()////////////////

$(document).ready(function(){
    //Affiche un message lors de l'envoi du formulaire
    $("form").submit(function(){
        alert("Formulaire bien envoyé");
    });
});