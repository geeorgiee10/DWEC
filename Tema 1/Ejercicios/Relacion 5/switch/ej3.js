let num1 = parseInt(prompt("Dime el primer numero"));
let num2 = parseInt(prompt("Dime el segundo numero"));
let operacion = prompt("Dime una operacion");

let suma = num1+num2;
switch(operacion){
    case "+":
        document.write("El resultado es: " + suma);
        break;
    case "-":
        document.write("El resultado es: " + num1-num2);
        break;
    case "*":
        document.write("El resultado es: " + num1*num2);
        break;
    case "/":
        document.write("El resultado es: " + num1/num2);
        break;
}
