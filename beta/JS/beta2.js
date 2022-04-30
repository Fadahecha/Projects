window.onload = function () {

    /* Variables globales (por estar declaradas sin var) */

    resultat = document.getElementById('resultat'); //Nodo donde vamos a mostrar los datos

    radioButTrat = document.getElementsByName("radio"); //Nodos radio buttons

    checkboxElements = new Array();

   

    var valeursInputs = document.getElementsByTagName('input'); //Elementos input

    var elementosSelect = document.getElementsByTagName('select');

    for(var i=0; i<valeursInputs.length;i++) {

    if (valeursInputs[i].type == 'radio') {valeursInputs[i].addEventListener("click", actualizarDatos);}

    else {valeursInputs[i].addEventListener("change", actualizarDatos);}

    if (valeursInputs[i].type == 'checkbox') {checkboxElements.push(valeursInputs[i]);}

    }

    for (var i=0; i<elementosSelect.length;i++) {elementosSelect[i].addEventListener("change", actualizarDatos);}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function actualizarDatos() {

    var rutaImagen = '';
    
    var radioButSelValue = '';
    
    for (var i=0; i<radioButTrat.length; i++) {if (radioButTrat[i].checked == true) { radioButSelValue= radioButTrat[i].value;} }
    
    if (radioButSelValue != ''){
    
                    if (radioButSelValue =='Sr.') {rutaImagen='caraHombre.jpg';} else {rutaImagen='caraMujer.jpg';}
    
                    document.getElementById('encuadraImagen').innerHTML = '';
    
                    document.getElementById('encuadraImagen').style.background='url("'+rutaImagen+'") no-repeat';
    
    }
    
    var checkBoxSel = new Array();
    
    for (var i=0; i<checkboxElements.length;i++) {
    
    if (checkboxElements[i].checked ==true) {checkBoxSel.push(checkboxElements[i].name);}
    
    }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var elementoCiudad = document.getElementById('ciudad');

casillaDatos.innerHTML='<h4> Datos introducidos: </h4><p>Tratamiento: '+(radioButSelValue||' --- ')+'</p>'+

'<p>Final: '+document.getElementById('nombre').value+" "+(document.getElementById('apellidos').value||' --- ')+" "+(document.getElementById('direccion1').value||' --- ')+" "+(elementoCiudad.options[elementoCiudad.selectedIndex].text||' --- ')+" "+(checkBoxSel||' --- ')+'</p>'


}

