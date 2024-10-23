let examen1 = parseFloat(prompt("Dime el primer examen"));
let examen2 = parseFloat(prompt("Dime el segundo examen"));
let trabajo1 = parseFloat(prompt("Dime el primer trabajo"));
let trabajo2 = parseFloat(prompt("Dime el segundo trabajo"));

let mediaExamen = (examen1 + examen2)/2; 
let mediaTrabajos = (trabajo1 + trabajo2)/2;
let mediaTotal = ((mediaExamen*75)/100) + ((mediaTrabajos*25)/100);

if(mediaTotal > 5){
    document.write("Estas aprobado");
}
else if(examen1 == 4.5 && examen2 == 4.5 && trabajo1 == 4.5 && trabajo2 == 4.50){
    document.write("Estas aprobado");
}

else{
    document.write("No estas aprobado");
}