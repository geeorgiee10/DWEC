
let num = parseInt(prompt("Introduce un numero"));

if(num > 100){
    descuento = (num * 15)/100;
    num = num - descuento;
    document.write(num);
}
else{
    document.write("No");
}