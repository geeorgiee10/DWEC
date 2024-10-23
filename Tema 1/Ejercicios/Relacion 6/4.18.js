let numColumnas = parseInt(prompt("Dime el numero de columnas"));
let numFilas = parseInt(prompt("Dime el numero de filas"));
let altura = parseInt(prompt("Dime la altura de la tabla"));
let anchura = parseInt(prompt("Dime la anchura de la tabla"));

document.write("<table border = " + 1 +">");

for(let i = 1; i <= numFilas; i++){
    document.write("<tr height="+altura+">");
    for(let j = 1; j <= numColumnas; j++){
        document.write("<td width = " + anchura+">")
    }
    document.write("</tr>");
}



document.write("</table>");

