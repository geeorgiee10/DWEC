let numColumnas = parseInt(prompt("Dime el numero de columnas"));
let altura = parseInt(prompt("Dime la altura de la tabla"));
let anchura = parseInt(prompt("Dime la anchura de la tabla"));

document.write("<table border = " + 1 +">");
document.write("<tr height="+altura+">");

for(let i = 1; i <= numColumnas; i++){
    if(i%2 == 0){
        document.write("<td width = " + anchura+" bgcolor="+"white"+">")
    }
    else if(i%2 != 0){
        document.write("<td width = " + anchura+" bgcolor="+"black"+">")
    }
}


document.write("</tr>");
document.write("</table>");