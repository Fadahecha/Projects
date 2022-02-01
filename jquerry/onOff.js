///////////on() off()//////////

$(document).ready(function(){
    //On enregistre un gestionnaire pour plusieurs événements pour un élément
    $("div").on("mouseenter mouseleave", function(){
        $(this).toggleClass("jaune");
    });

    //On enregistre plusieurs gestionnaires pour plusieurs événements pour un élément
    $("#p3").on({
        click: function(){$(this).text("Paragraphe cliqué");}, 
        mouseenter: function(){$(this).css("background-color", "lightBlue");}, 
        mouseleave: function(){$(this).css("background-color", "white");}
    });
});

////////trigger() triggerHandler()////////
///desencadenan eventos manualmente
/*--La méthode triggerHandler(), à la différence de trigger(), va exécuter le gestionnaire d’événement de l’événement déclenché mais ne va pas déclencher l’action par défaut de l’événement. Par exemple, triggerHandler("submit") n’enverra pas le formulaire ;
--trigger() fonctionnera sur tous les éléments possédant les caractéristiques ciblées tandis que triggerHandler() ne’affectera que le premier élément ciblé rencontré ;
--Les évenements déclenchés avec triggerHandler() ne bouillonneront pas ;
--triggerHanlder() ne retourne pas d’objet jQuery mais plutôt la valeur renvoyée par le dernier gestionnaire exécuté.*/

$(document).ready(function(){           
    //trigger() s'exécute si on clique sur le bouton trg
    $('#trg').click(function(){
        $('#fcs').trigger('focus');
    });
    
    //triggerHandler() s'exécute si on clique sur le bouton trgh
    $('#trgh').click(function(){
        $('#fcs').triggerHandler('focus');
    });
    
    //On attache un gestionnaire d'évènement focus à notre input
    $('#fcs').focus(function(){
        $('#msg').text('Evènement focus déclenché');
    })  
});

////////////////off()//////////////

$(document).ready(function(){           
    //Le span est caché par défaut
    $("#msg").hide();
                
    //Lorsqu"on clique sur b2, un gestionnaire d"évènement click est ajouté à b1
    $("#b2").click(function(){
        $("#b1").on("click", function(){
            $("#msg").show();
        });

        $("#b1").text("Vous pouvez me cliquer");
    });
    
    //Lorsqu"on clique sur b3, le gestionnaire d"évènement click de b1 est supprimé
    $("#b3").click(function(){
        $("#b1").off("click");
        $("#b1").text("Pas de clic possible");
        $("#msg").hide();
    });
});

///////////propiedad target y type /////////
///ya vimos pageX, pageY et which////// ??

$(document).ready(function(){     
    //On attache un gestonnaire d'événement click au div      
    $("div").click(function(event){
        //On récupère l'élément déclencheur de l'événement grâce à target
        //On affiche son nom en utilisant nodeName
        $("#res").html(event.target.nodeName);
    });

    //On attache plusieurs gestionnaires aux éléments p du div
    $("div p").on("click mouseover mouseout", function(event){
        //On récupère et on affiche le type d'événement délcenché
        $("#res2").text(event.type);
    })
});