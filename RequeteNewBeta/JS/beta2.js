window.onload = function () {

    /* Variables globales (por estar declaradas sin var) */
    requete = document.getElementById('data'); //Nodo donde vamos a mostrar los datos
    radioBut = document.getElementsByName("but"); //Nodos radio buttons
    
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

    let radioButSelValue = '';

    for (i=0; i<radioBut.length; i++) {
        if (radioBut[i].checked == true) { 
            radioButSelValue= radioBut[i].value;
        } 
    }

    let checkBoxSel = new Array();

    for (i=0; i<checkboxElements.length;i++) {
        if (checkboxElements[i].checked ==true) {
            checkBoxSel.push(checkboxElements[i].name);
        }

    }

    let elementSelect = document.getElementById('select1');


    requete.innerHTML='<h4></h4><h3><p>'+(radioButSelValue||'  ')+
    ' '+document.getElementById('motcle1').value+" "+(document.getElementById('motcle2').value||'  ')+
    " "+(document.getElementById('motcle3').value||'  ')+" "+(elementSelect.options[elementSelect.selectedIndex].text||'  ')+
    " "+(checkBoxSel||'  ')+'</p></h3>'


}

function permute() {
    // Create an array with the values of all inputs
    const ar = [document.getElementById("motcle1").value,
      document.getElementById("motcle2").value,
      document.getElementById("motcle3").value,
      document.getElementById('select1').value];
      //document.getElementById("but1").value];
      //document.getElementById("but3").value];
    // Get array of permutations
    const permutations = perm(ar);

    // Convert array to string before printing it
    document.getElementById("permute").innerHTML = JSON.stringify(permutations);
  }

  function perm(ar) {
    let ret = [];

    for (let i = 0; i < ar.length; i = i + 1) {
      let rest = perm(ar.slice(0, i).concat(ar.slice(i + 1)));

      if(rest.length) {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([ar[i]].concat(rest[j]))
        }
      } else {
        ret.push([ar[i]]);
      }
    }
    return ret;
  }


  document.addEventListener("submit", function(e){
    e.preventDefault();   
    permute();
});