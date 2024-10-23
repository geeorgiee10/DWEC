let numColumnas = parseInt(prompt("Dime el numero de columnas"));
let altura = parseInt(prompt("Dime la altura de la tabla"));
let anchura = parseInt(prompt("Dime la anchura de la tabla"));
let auxiliar = 0;

document.write("<table border = " + 1 +">");
document.write("<tr height="+altura+">");


while(auxiliar !=numColumnas){
    document.write("<td width = " + anchura+">");
    auxiliar++;
}


document.write("</tr>");
document.write("</table>");