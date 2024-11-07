window.onload = function () {

    let mayus = document.getElementById("mayus");
    let especial = document.getElementById("especiales");
    let email = document.getElementById("correo");
    let credit = document.getElementById("credito");
    let longitud = document.getElementById("longitud");
    let digito = document.getElementById("num");
    let result = document.getElementsByClassName("resultado");

    function mayuscula (string){
        if(string.match(/[A-Z]/)){
            return true;
        }
        else{
            return false;
        }
    }

    function especiales (string){
        if(string.match(/[!@#$%^&]+/)){
            return true;
        }
        else{
            return false;
        }
    }

    function correos (string){
        if(string.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function creditos (string){
        if(string.match(/^(?:\d{4}[- ]?){3}\d{4}|\d{15,19}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function longitudes (string){
        if(string.match(/^\S{8,}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function digitos (string){
        if(string.match(/\d+/)){
            return true;
        }
        else{
            return false;
        }
    }

    mayus.addEventListener("blur" , () =>{
        if(mayuscula(mayus.value) !== true){
            result[0].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[0].innerHTML = "";
        }
        
    })

    especial.addEventListener("blur" , () =>{
        if(especiales(especial.value) !== true){
            result[1].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[1].innerHTML = "";
        }
        
    })

    email.addEventListener("blur" , () =>{
        if(correos(email.value) !== true){
            result[2].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[2].innerHTML = "";
        }
        
    })

    credit.addEventListener("blur" , () =>{
        if(creditos(credit.value) !== true){
            result[3].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[3].innerHTML = "";
        }
        
    })

    longitud.addEventListener("blur" , () =>{
        if(longitudes(longitud.value) !== true){
            result[4].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[4].innerHTML = "";
        }
        
    })

    digito.addEventListener("blur" , () =>{
        if(digitos(digito.value) !== true){
            result[5].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[5].innerHTML = "";
        }
        
    })
    
    

}