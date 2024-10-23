
function lanzamiento(){
    n = Math.floor(Math.random() * (6-1+1))+ 1;
    return n;
}

function simulacion(){
    let numero1;
    let numero2;
    let suma;
    let veces = [0,0,0,0,0,0,0,0,0,0,0,0];
    let combinaciones = Array.from({ length: 7 }, () => new Array(7).fill(0));

    for(let i = 0; i < 36000; i++){
        numero1 = lanzamiento();
        numero2 = lanzamiento();
        suma = numero1 + numero2;
        veces[suma-1]++;
        combinaciones[numero1][numero2]++;
    }
    for(let j = 1;j < veces.length; j++){
        document.write("La suma "+ (j+1) + " ha salido: " + veces[j] + " veces <br>");
    }

    document.write("<br> <table border='1'>");
        document.write("<tr>");
            document.write("<th>Dado 1 &#x2193; || Dado 2 &rarr;</th>");
            for (let k = 1; k <= 6; k++) {
                document.write("<td>" + k + "</td>");
            }
        document.write("</tr>");

        for (let m = 1; m <= 6; m++) {
            document.write("<tr>");
                document.write("<td>" + m + "</td>");
                for (let n = 1; n <= 6; n++) {
                    document.write("<td>" + combinaciones[m][n] + "</td>");
                }
            document.write("</tr>");
    }

    document.write("</table>");
}

simulacion();