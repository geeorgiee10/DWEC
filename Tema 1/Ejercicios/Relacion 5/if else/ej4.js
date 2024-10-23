let numHermanos = parseInt(prompt("Dime el numero de hermanos"));
let cantidad = parseInt(prompt("Dime una cantidad"));

if(numHermanos > 3){
    let descuento = (cantidad * 15)/100;
    document.write(cantidad - descuento);
}
else if(numHermanos < 3){
    let descuento = (cantidad * 5)/100;
    document.write(cantidad - descuento);
}
else if(numHermanos = 0){
    document.write(cantidad);
}