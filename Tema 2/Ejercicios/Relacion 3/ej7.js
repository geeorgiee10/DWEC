function palidromo (cadena){
    cadena = prompt("Dime la cadena");
    if(cadena === cadena.split('').reverse().join('')){
        document.write("Es palidromo");
    }
    else{
        document.write("No es palidromo");
    }
    return cadena;
}

palidromo();