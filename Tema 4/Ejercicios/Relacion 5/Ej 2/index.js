window.onload = function () {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellidos");
    let email = document.getElementById("email");
    let dni = document.getElementById("dni");
    let telefono = document.getElementById("telefono");
    let usuario = document.getElementById("usuario");
    let result = document.getElementsByClassName("validar");




    function correos (string){
        if(string.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function nombres (string){
        if(string.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function apellidos (string){
        if(string.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function dnis (string){
        if(string.match(/^[0-9]{8}[A-Za-z]$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function telefonos (string){
        if(string.match(/^\d{9}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function usuarios (string){
        if(string.match(/^(?=.*[0-9])(?=.*[!@#$%^&*.,:;_-])[A-Za-z0-9!@#$%^&*.,:;_-]{8,}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    nombre.addEventListener("blur" , () =>{
        if(nombres(nombre.value) !== true){
            result[0].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[0].innerHTML = "";
        }
        
    })

    apellido.addEventListener("blur" , () =>{
        if(apellidos(apellido.value) !== true){
            result[1].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[1].innerHTML = "";
        }
        
    })

    email.addEventListener("blur" , () =>{
        if(correos(email.value) !== true){
            result[4].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[4].innerHTML = "";
        }
        
    })

    dni.addEventListener("blur" , () =>{
        if(dnis(dni.value) !== true){
            result[2].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[2].innerHTML = "";
        }
        
    })

    telefono.addEventListener("blur" , () =>{
        if(telefonos(telefono.value) !== true){
            result[3].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[3].innerHTML = "";
        }
        
    })

    usuario.addEventListener("blur" , () =>{
        if(usuarios(usuario.value) !== true){
            result[5].innerHTML = "El texto no esta bien validado";
        }
        else{
            result[5].innerHTML = "";
        }
        
    })
}