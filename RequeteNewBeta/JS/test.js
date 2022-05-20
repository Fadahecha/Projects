window.onload = function () {

    /* Variables globales (por estar declaradas sin var) */
    requete = document.getElementById('data'); //Nodo donde vamos a mostrar los datos
    radioBase = document.getElementsByName("base"); //Nodos radio buttons
    
    checkboxElements = new Array();

   
    let inputValeur = document.getElementsByTagName('input'); //Elementos input
    let selectValeur = document.getElementsByTagName('select');

    for(var i=0; i<inputValeur .length;i++) {
        if (inputValeur[i].type == 'radio') {
            inputValeur[i].addEventListener("click", actualiser);
        }else {inputValeur[i].addEventListener("change", actualiser);
    }

        if (inputValeur[i].type == 'checkbox') {
            checkboxElements.push(inputValeur[i]);
        }
    }

    for (var i=0; i<selectValeur.length;i++) {
        selectValeur[i].addEventListener("change", actualiser);
    }

}

function actualiser() {

    let radioBaseSelValue = '';

    for (i=0; i<radioBase.length; i++) {
        if (radioBase[i].checked == true) { 
            radioBaseSelValue= radioBase[i].value;
        } 
    }

    let checkBoxSel = new Array();

    for (i=0; i<checkboxElements.length;i++) {
        if (checkboxElements[i].checked ==true) {
            checkBoxSel.push(" "+checkboxElements[i].value);
        }

    }

    // let elementSelect = document.getElementById('select1');

     requete.innerHTML='<h4></h4><h3><p>'+document.getElementById('motcle').value+" "+(document.getElementById('subase1').value||'  ')+
    " "+(document.getElementById('subase2').value||'  ')+
    " "+(checkBoxSel||'  ')+'</p></h3>'
  
}



////////////////////3 checkbox limit////////////////////////////

$('.lim1').on('change', function(){
    var noChecked1 = 0;
    $.each($('.lim1'), function(){
        if($(this).is(':checked')){
            noChecked1++;    
        }
    });
    if(noChecked1 >= 3){
        $.each($('.lim1'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim1').removeAttr('disabled');    
    };
});



$('.lim2').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim2'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim2'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim2').removeAttr('disabled');    
    };
});


$('.lim3').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim3'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim3'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim3').removeAttr('disabled');    
    };
});


$('.lim4').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim4'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim4'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim4').removeAttr('disabled');    
    };
});


$('.lim5').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim5'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim5'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim5').removeAttr('disabled');    
    };
});


$('.lim6').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim6'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim6'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim6').removeAttr('disabled');    
    };
});


$('.lim7').on('change', function(){
    var noChecked2 = 0;
    $.each($('.lim7'), function(){
        if($(this).is(':checked')){
            noChecked2++;    
        }
    });
    if(noChecked2 >= 3){
        $.each($('.lim7'), function(){
            if($(this).not(':checked').length == 1){
                $(this).attr('disabled','disabled');    
            }
        });
    }else{
        $('.lim7').removeAttr('disabled');    
    };
});