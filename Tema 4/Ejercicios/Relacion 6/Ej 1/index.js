window.onload = function () {
    
    let nombUsu = document.getElementById("usuario");
    let contenedor = document.getElementById("container");
    let validar = document.getElementById("validacion");
    let mensaje = document.getElementById("mensaje");
    let btnCrear = document.getElementById("crear");
    let btnBorrar = document.getElementById("borrar");

    if (document.cookie === "") {
        contenedor.style.display = "flex";

        function usuarios (string){
            if(string.match(/^[\wÀ-ÿÑñ\s]+$/)){
                return true;
            }
            else{
                return false;
            }
        }
        nombUsu.addEventListener("blur" , () =>{
            if(usuarios(nombUsu.value) !== true){
                validar.innerHTML = "El nombre de usuario tiene un formato incorrecto";
            }
            else{
                validar.innerHTML = "";
            }
            
        })

        btnCrear.addEventListener("click", () => {
            if(usuarios(nombUsu.value) == true){    
            
                let nombreUsuario = nombUsu.value;

                let caduca = new Date();
                caduca.setTime(caduca.getTime() + (5 * 60 * 1000));
                let expiracion = "expires=" + caduca.toUTCString();

                let newCookies = `nombreUsuario=${encodeURIComponent(nombreUsuario)}; ${expiracion}; path=/`;

                document.cookie = newCookies;
                
                contenedor.style.display = "none";

                let cookies = document.cookie.split("; ");
                let usuarioCookie = cookies.find(row => row.startsWith("nombreUsuario=")).split("=")[1];

                mensaje.innerHTML = `Buenas: ${decodeURIComponent(usuarioCookie)}`;
            }
        });

        btnBorrar.addEventListener("click", () =>{
            document.cookie = `nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            mensaje.innerHTML = "La cookie ha sido borrada.";
        })


    } 
    else {
        let cookies = document.cookie.split("; ");
        let usuarioCookie = cookies.find(row => row.startsWith("nombreUsuario=")).split("=")[1];

        mensaje.innerHTML = `Buenas: ${decodeURIComponent(usuarioCookie)}`;

        btnBorrar.addEventListener("click", () =>{
            document.cookie = `nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            mensaje.innerHTML = "La cookie ha sido borrada.";
        })
    }

}