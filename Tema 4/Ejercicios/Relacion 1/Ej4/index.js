function pintarTabla(){
    document.write('<table>');

    for(let i = 0; i < 25; i++){
        document.write('<tr height="100px" width="100px">');
        for(let j = 0; j < 60; j++){
            document.write('<td height="100px" width="100px"></td>');
        }
        document.write('</tr>');
    }
    document.write("</table>")
}
pintarTabla();



const td = document.getElementsByTagName("td");

for(let k = 0; k < td.length; k++){
    td[k].addEventListener("mouseover", (e) => {
        if(e.ctrlKey){
            e.currentTarget.style.backgroundColor = "red";
        }
        if(e.shiftKey){
            e.currentTarget.style.backgroundColor = "blue";
        }
        
    });
}