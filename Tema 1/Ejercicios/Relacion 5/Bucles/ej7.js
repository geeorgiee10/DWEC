let num1= parseInt(prompt("Dime un numero"));
let num2 = 0;

while(num2 != num1){
    num2 = parseInt(prompt("Intenta adivinarlo"));
    if (num2>num1){
        document.write("El numero es mas pequeño");
    }
    else if(num2<num1){
        document.write("El numero es más grande");
    }
}
document.write("Lo has acertado");