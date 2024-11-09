window.onload = function () {
    let numeroTarjeta = document.getElementById("card-number");
    let propietario = document.getElementById("card-holder");
    let cvv = document.getElementById("cvv");
    let inputTarjeta = document.getElementById("numeroTarjeta");
    let inputPropietario = document.getElementById("propTarjeta");
    let inputCVV = document.getElementById("cvvTarjeta");
    let carta = document.getElementsByClassName("carta")[0];
    let mes = document.getElementById("expiry-month");
    let año = document.getElementById("expiry-year");
    let inputFecha = document.getElementById("fechaTarjeta");
    

    function numeros (string){
        if(string.match(/^\d{4}(?:\s\d{4}){3}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function titulares (string){
        if(string.match(/^[a-zA-Z]+\s+[a-zA-Z]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function codigos (string){
        if(string.match(/^[0-9]{3}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    numeroTarjeta.addEventListener("blur" , () =>{
        if(numeros(numeroTarjeta.value) !== true){
            numeroTarjeta.value = "";
            numeroTarjeta.placeholder = "El numero de tarjeta es invalido";
            inputTarjeta.value = "";
        }
    })

    propietario.addEventListener("blur" , () =>{
        if(titulares(propietario.value) !== true){
            propietario.value = "";
            propietario.placeholder = "El nombre de propietario es invalido";
            inputPropietario.value = "";
        }
    })

    cvv.addEventListener("blur" , () =>{
        if(codigos(cvv.value) !== true){
            cvv.value = "";
            cvv.placeholder = "CVV invalido";
            inputCVV.value = "";
        }
        
    })

    numeroTarjeta.addEventListener("input" , () =>{
        inputTarjeta.value = numeroTarjeta.value;
    })
    
    propietario.addEventListener("input" , () =>{
        inputPropietario.value = propietario.value;
    })

    cvv.addEventListener("input" , () =>{
        inputCVV.value = cvv.value;
    })

    mes.addEventListener("input" , () =>{
        año.addEventListener("input" , () =>{
            inputFecha.value = mes.value + "/" + año.value;
        })
    })

    cvv.addEventListener('focus', () => {
        carta.style.transform = 'rotateY(180deg)';
    });

    cvv.addEventListener('blur', () => {
        carta.style.transform = 'rotateY(0deg)';
    });
}