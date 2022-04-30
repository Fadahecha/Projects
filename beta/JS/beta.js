


//////////////////////////////////////////Concatenate/////////////////////////////////////////////////////////////////////////

function concatenate (form){    
    let result="";
   
    let inputs = form.elements;

    for( i=0; i<inputs.length; ++i){
        let input = inputs[i];
        result += input.value + " ";
    }
    
    let target = document.getElementById(form.dataset.target);
    target.textContent = result;
}



///////////////////////////////////////////Permute////////////////////////////////////////////////////////////////////////

function permute() {
    // Create an array with the values of all inputs
    const ar = [document.getElementById("motcle1").value,
      document.getElementById("motcle2").value,
      document.getElementById("motcle3").value];
    //   document.getElementById("myInput4").value];

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
    concatenate(e.target);
    permute();
});





//recuperar select
// Lo que hacemos para obtener el texto del control de formularios select es acceder a las etiquetas option las cuales son elementos HTML por si solas. Para ello instanciamos el select y posteriormente encontramos el nodo option seleccionado para obtener el atributo text desde javascript.
{/* <script type="text/javascript">
function ShowSelected()
{ */}
/* Para obtener el valor */
// var cod = document.getElementById("producto").value;
// alert(cod);
 
/* Para obtener el texto */
// var combo = document.getElementById("producto");
// var selected = combo.options[combo.selectedIndex].text;
// alert(selected);
// }
// </script>




//   document.getElementById('boton').addEventListener("click", function(e){
//     e.preventDefault();
//     permute();
// });
 



///////////////////////////////////////////////////////////////////////////////////


function displayRadioValue() {
    let ele = document.getElementsByName('radio');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("test").innerHTML
                = "radio: "+ele[i].value;
    }
}
