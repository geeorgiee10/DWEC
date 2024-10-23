let anchura = parseInt(prompt("Dime la anchura de la tabla"));

document.write("<table border = " + 1 +">");

for(let i = 1; i <= 8; i++){
    document.write("<tr height="+anchura+">");
    for(let j = 1; j <= 8; j++){
        if(i%2==0){
            if(j%2 == 0){
                document.write("<td width = " + anchura+" bgcolor="+"white"+">")
            }
            else if(j%2 != 0){
                document.write("<td width = " + anchura+" bgcolor="+"black"+">")
            }
        }
        else if(i%2!=0){
            if(j%2 != 0){
                document.write("<td width = " + anchura+" bgcolor="+"white"+">")
            }
            else if(j%2 == 0){
                document.write("<td width = " + anchura+" bgcolor="+"black"+">")
            }
        }
    }
    document.write("</tr>");
}



document.write("</table>");