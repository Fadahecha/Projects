//const para mostrar/esconder el password, abrir/cerrar el ojo
const pwShow = document.querySelector('.show'),
createPw = document.querySelector('#createPw'),
confirmPw = document.querySelector('#confirmPw'),
//const para checkear la igualdad en los inputs
alertIcon = document.querySelector('.errorIcon'),
alertText = document.querySelector('.text'),
submitBtn = document.querySelector('#button');

pwShow.addEventListener('click', ()=>{
    //codigo js para esconder o mostrar el password al hacer click en el ojo
    if((createPw.type === 'password') && (confirmPw.type === 'password')){
        createPw.type = 'text';
        confirmPw.type = 'text';
        //cambia el icono del ojo cerrado por el icono del ojo abierto
        pwShow.classList.replace('fa-eye-slash', 'fa-eye')
    }else{
        createPw.type = 'password';
        confirmPw.type = 'password';
        //al invertir los parametros (clases iconos) cambia el icono del ojo abierto por el icono del ojo cerrado
        pwShow.classList.replace('fa-eye', 'fa-eye-slash');
    }
});


    //codigo js para checkear los campos de inputs

    createPw.addEventListener('input', ()=>{
        let inputValue = createPw.value.trim(); // La funcion 'trim' no cuenta mas de 1 espacio

        if(inputValue.length >= 8){
            confirmPw.removeAttribute('disabled');
            submitBtn.removeAttribute('disabled');
            submitBtn.classList.add('active');
        }else{
            confirmPw.setAttribute('disabled', true);
            submitBtn.setAttribute('disabled', true);
            submitBtn.classList.remove('active');
            confirmPw.value = '';
            alertText.innerText = 'Enter at least 8 characters';
            alertText.style.color = 'a6a6a6';
            alertIcon.style.display = 'none';
        }
    })


    submitBtn.addEventListener('click', ()=> {
        if(createPw.value === confirmPw.value){
            alertText.innerText ='Password matched';
            alertIcon.style.display ='none'
            alertText.style.color= '#4070f4';
        }else{
            alertText.innerText = "password didn't matched";
            alertText.style.color= '#d93025';
            alertIcon.style.display ='block';
        }
    })