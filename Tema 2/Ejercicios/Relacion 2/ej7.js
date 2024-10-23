let num = 10;

document.write("<table border = " + 1 +">");
for(let i = num; i <= 200;){
    document.write("<tr height="+50+">");
        document.write("<td width = " + 50+">" + i + "</td>");
        document.write("<td width = " + 50+">" + Math.sin(i) + "</td>");
    document.write("</tr>");
        i = i + 10;
}