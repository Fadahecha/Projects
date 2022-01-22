let euro = document.getElementById('eur');
let dollar = document.getElementById('dol');
let yen = document.getElementById('yen');
let rouble = document.getElementById('rou');

//tuve problemas con lq etiaueda <button> en html y usé <input type="button">



btn.addEventListener("click", function(){

    function converter (coinValue, factor){
    let conver = coinValue*factor;
    console.log(conver)


    if(euro>=1){
        dollar.value= converter(euro.value, 1.13);
        yen.value= converter(euro.value,129.78);
        rouble.value= converter(euro.value,87.27);
    }

    return conver;
    }
    return converter;


})




/*
btn.addEventListener("click", function(){

    if(euro.value>=1){

        dollar.value=(euro.value*1.13) + '     Dollar';
        yen.value=(euro.value*129.78) + '     Yen';
        rouble.value=(euro.value*87.27) + '     Rouble';

    }else if(dollar.value>=1){

        euro.value=(dollar.value*0.88) + '     Euro';
        yen.value=(dollar.value*114.56) + '     Yen';
        rouble.value=(dollar.value*77.09) + '     Rouble';

    }else if(yen.value>=1){

        euro.value=(yen.value*0.0077) + '     Euro';
        dollar.value=(yen.value*0.0087) + '     Dollar';
        rouble.value=(yen.value*0.67) + '     Yen'

    }else if(rouble.value>=1){

        euro.value=(rouble.value*0.011) + '     Euro';
        dollar.value=(rouble.value*0.013) + '     Dollar';
        yen.value=(rouble.value*1.49) + '     Yen';
    }  
})
*/