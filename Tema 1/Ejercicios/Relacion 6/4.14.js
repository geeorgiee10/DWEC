let numColumnas = parseInt(prompt("Dime el numero de columnas"));
let altura = parseInt(prompt("Dime la altura de la tabla"));
let anchura = parseInt(prompt("Dime la anchura de la tabla"));
let auxiliar = 1;

document.write("<table border = " + 1 +">");
document.write("<tr height="+altura+">");


while(auxiliar <= numColumnas){
    if(auxiliar%2 == 0){
        document.write("<td width = " + anchura+" bgcolor="+"white"+">")
    }
    else if(auxiliar%2 != 0){
        document.write("<td width = " + anchura+" bgcolor="+"black"+">")
    }
    auxiliar++;
}

document.write("</tr>");
document.write("</table>");