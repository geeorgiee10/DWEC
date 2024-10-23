/*function inviertaCadena(cad_arg){
    return cad_arg.split('').reverse().join('');
}

document.write(inviertaCadena(prompt("Escribe cadena a invertir")) + "<br>");*/

/*function inviertePalabras(cad_arg2){
    let cadena_invertida = "";
    for(let i = cad_arg2.length -1;i >= 0;i--){
        cadena_invertida = cadena_invertida + cad_arg2[i];
        
    }
    
    return cadena_invertida.split(' ').reverse().join(' ');
}

document.write(inviertePalabras(prompt("Dime las palabras a invertir")) + "<br>");*/

/*function encuentraPalabraMasLarga(cad_arg3){
    const palabras = cad_arg3.split(" ");

    let palabraLarga = "";
    let longitudLarga = 0;

    for(let palabra of palabras){
        let longitud = palabra.length;
        if(longitud > longitudLarga){
            palabraLarga = palabra;
            longitudLarga = longitud;
        }
    }
    return palabraLarga;
}

document.write(encuentraPalabraMasLarga(prompt("Dime una cadena de palabras")) + "<br>");*/


function filtraPalabrasMasLargas(cad_arg4, i){
    const palabras = cad_arg4.split(" ");

    let numPalabrasLargas = 0;

    for(const palabra of palabras){
        const longitud = palabra.length;
        if(longitud > i){
            numPalabrasLargas++;
        }
    }
    return numPalabrasLargas;
}

document.write(filtraPalabrasMasLargas(prompt("Dime una cadena de palabras"),prompt("Di una longitud")) + "<br>");


/*function cadenaBienFormada(cad_arg5){
    return cad_arg5.charAt(0).toUpperCase() + cad_arg5.slice(1).toLowerCase();
}

document.write(cadenaBienFormada(prompt("Di la cadena a formatear")));*/