let celinput = document.querySelector('#celc > input');
let fahinput = document.querySelector('#far > input');

function roundno(num){
    return Math.round(num*100)/100;
}

celinput.addEventListener('input', function(){
    let ctemp= parseFloat(celinput.value);
    let ftemp= (ctemp*(1.8))+32;
    
    fahinput.value = roundno(ftemp);
})

fahinput.addEventListener('input', function(){
    let ftemp= parseFloat(fahinput.value);
    let ctemp= (ftemp-(32))/1.8;

    celinput.value = roundno(ctemp);
})
