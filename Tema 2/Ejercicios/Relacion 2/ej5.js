let a = parseFloat(prompt("Dime el valor de a"));
let b = parseFloat(prompt("Dime el valor de b"));
let c = parseFloat(prompt("Dime el valor de c"));

let raiz = b*b - 4*a*c 
let solucion1 = (-b+Math.sqrt(raiz))/(2*a);
let solucion2 = (-b-Math.sqrt(raiz))/(2*a);


if(solucion1 < 0)
    document.write("No hay solucion");
else
    document.write(solucion1);

document.write("<br>");

if(solucion2 <0)
    document.write("No hay solucion");
else
    document.write(solucion2);





