////////////keydown() keyup()///////////////

$(document).ready(()=>{

      //Change la couleur de fond du champ en bleu dès qu'une touche est pressée
    //et affiche le code de la dernière touche pressée
    $("#texte").keydown(function(event){
        $(this).css("background-color", "lightBlue");
        $("span").text(event.which);
    });

       //Change la couleur de fond du champ en jaune dès qu'une touche est pressée
       $("#texte").keyup(function(){
        $(this).css("background-color", "yellow");
    });
});


///////////keypress()//////////////////
//es similar, la diferencia esta en el orden de ocurrencia de eventos keydown()--->keypress()
// y keypress() solo funciona con algunas teclas (alt, ctrl, shift, etc.)


$(document).ready(function(){
    $("#texte").keypress(function(event){
        $("#span1").text(event.which);
    });

    $("#texte").keydown(function(event){
        $("#span2").text(event.which);
    });
});