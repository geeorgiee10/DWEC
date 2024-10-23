let edad = parseInt(prompt("Dime la edad"));

if(edad <=5){
    document.write("Jardin de la infanacia");
}
else if(edad >= 6 && edad<=11){
    document.write("Primaria");
}
else if(edad >= 12 && edad<=16){
    document.write("ESO");
}
else if(edad >= 17 && edad<=21){
    document.write("Bachillerato o Ciclos");
}
else if(edad > 21){
    document.write("Universidad");
}
