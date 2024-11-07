window.onload = function () {
    let input = document.getElementById("usuario");
    let requisitos = document.getElementsByClassName("val");
    let boton = document.getElementById("boton");


    function longitudes (string){
        if(string.match(/^\S{6,}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function minusculas (string){
        if(string.match(/^(?=.*[a-z]).*$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function mayusculas (string){
        if(string.match(/^(?=.*[A-Z]).*$/)){
            return true;
        }
        else{
            return false;
        }
    }

    input.addEventListener("input", () =>{
        if(longitudes(input.value) === true){
            requisitos[2].style.textDecoration = "line-through";
        }
        else{
            requisitos[2].style.textDecoration = "none";
        }
    

    
        if(minusculas(input.value) === true){
            requisitos[0].style.textDecoration = "line-through";
        }
        else{
            requisitos[0].style.textDecoration = "none";
        }
    

    
        if(mayusculas(input.value) === true){
            requisitos[1].style.textDecoration = "line-through";
        }
        else{
            requisitos[1].style.textDecoration = "none";
        }
    


    

   
    let tachado = true;
    
    for (let i = 0; i < requisitos.length; i++) {
        if (requisitos[i].style.textDecoration !== "line-through") {
            tachado = false;
            break;
        }
    }

    if (tachado) {
        boton.disabled = false; 
        boton.style.opacity = "1";
    } 
    else {
        boton.disabled = true;  
        boton.style.opacity = "0.5"; 
    }

    })
}