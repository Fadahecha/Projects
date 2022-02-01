let lastName = document.getElementById('lastName'); //Last Name
    let span1 = document.getElementById('sp1'); // Span Last name

    ///////////////////////////////////////////////////////////////

    let newName = document.getElementById('name'); //name
    let span2 = document.getElementById('sp2'); // Span name

    //////////////////////////////////////////////////////////////

    let pw = document.getElementById('pw'); //password
    let cPw = document.getElementById('cpw'); //Confirm password
    let span3 = document.getElementById('sp3'); // span confirm

    //////////////////////////////////////////////////////////////

    const btn = document.getElementById('boton');
    let contador = 0;





    /////////////////////////VALIDATION/////////////////////////////////////

/**
 * @param  {} element
 * @param  {} valid
 * @param  {} {if(valid===true
 * @param  {} {element.classList.remove('error'
 * @param  {} ;}else{element.classList.add('error'
 */


function validation(element, valid){
    if(valid===true){
        element.classList.remove('error');
        contador++;
    }else{
        element.classList.add('error');
        
    }
}

    ////////////////////////LAST NAME///////////////////////////////////////
/**
 * @param  {} 'change'
 * @param  {} (
 * @param  {} =>{(lastName.value.length
 * @param  {} >2?validation(span1
 * @param  {} true
 * @param  {} false
 * @param  {} ;}
 */
lastName.addEventListener('change', ()=>{
    (lastName.value.length) > 2 ? validation(span1, true) : validation(span1, false);

});



    /////////////////////////NAME//////////////////////////////////////

newName.addEventListener('change', ()=>{
    (newName.value.length) > 2 ? validation(span2, true) : validation(span2, false);
}) 


////////////////////////////PASSWORD////////////////////////////////////////////

cPw.addEventListener('change', ()=>{
    (cPw.value===pw.value) ? validation(span3, true) : validation(span3, false);
})


btn.addEventListener('click', ()=>{
    (contador===3) ? alert('ok') : alert('warning');
})


/*
btn.addEventListener('click', ()=>{

    if(contador===3){
        alert ('ok');
    }else{
        alert('warning');
    }
    
})*/
