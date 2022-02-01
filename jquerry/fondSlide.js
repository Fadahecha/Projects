//Un “fondu” est une disparition ou apparition progressive d’un élément.
/*La méthode fadeOut() ;
La méthode fadeIn() ;
La méthode fadeTo() ;
La méthode fadeToggle().
*/
$(document).ready(function(){
    //Disparition du titre en 400ms lors du clic sur #b1
    $("#b1").click(function(){
        $("h1").fadeOut();
    });
    
    //Apparition du titre en 2 secondes lors du clic sur #b2
    $("#b2").click(function(){
        $("h1").fadeIn(4000);
    });

    //Inversion de l'état de visibilité de h1 avec un effet de fondu
    //Apparition du titre en 2 secondes lors du clic sur #b3
    $("#b3").click(function(){
        $("h1").fadeToggle(2000);
    });

    //Fondu jusqu'à un certain niveau d'opacité (0.3 ici)
    $("#b4").click(function(){
        $("h1").fadeTo(2000, 0.3);
    });
});

//fadeOut(), fadeIn() et fadeToggle() aceptan 3 argumentos; la durée de la transition, la fonction d’accélération qui doit être utilisée pour réaliser la transition et une fonction de rappel qui va être exécuté une fois la transition terminée.
//fadeTo(), acepta 4 en ajoutant le niveau d’opacité en deuxième argument.

//slow coresponde a 600ms y fast a 200ms .. el default es 400ms
// con respecto a la funcion de aceleracion 'swing' es el valor por defecto y 'linear', una transicion regular

//////////////////////////////////////////////////////////////

//SLIDE
/*La méthode slideDown() ;
La méthode slideUp() ;
La méthode slideToggle().*/

$(document).ready(function(){
    //Replie le titre en 400ms lors du clic sur #b1
    $("#b1").click(function(){
        $("h1").slideUp();
    });
    
    //Déplie le titre en 2 secondes lors du clic sur #b2
    $("#b2").click(function(){
        $("h1").slideDown(2000);
    });

    //Déplie le titre s'il est plié ou le plie s'il est déplié
    $("#b3").click(function(){
        $("h1").slideToggle(2000);
    });
});