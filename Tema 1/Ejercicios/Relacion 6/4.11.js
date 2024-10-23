let numColumnas = parseInt(prompt("Dime el numero de columnas"));
let altura = parseInt(prompt("Dime la altura de la tabla"));
let anchura = parseInt(prompt("Dime la anchura de la tabla"));

document.write("<table border = " + 1 +">");
document.write("<tr height="+altura+">");

for(let i = 1; i <= numColumnas; i++){
    document.write("<td width = " + anchura+">")
}


document.write("</tr>");
document.write("</table>");