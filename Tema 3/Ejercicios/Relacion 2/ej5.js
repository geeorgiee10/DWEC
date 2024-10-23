function paresImpares (array){
    array = [];
    for(let i = 0; i < 100; i++){
        array[i] = Math.floor(Math.random() * (1001 - 1 + 1) + 1);
    }
    let pares = array.filter(num => num % 2 === 0);
    let impares = array.filter(num => num % 2 !== 0);

    document.write("<strong>Array Completo:</strong><br>");
    document.write(array.join(", ") + "<br><br>");

    document.write("<strong>Números Impares:</strong><br>");
    document.write(impares.join(", ") + "<br><br>");

    document.write("<strong>Números Pares:</strong><br>");
    document.write(pares.join(", "));
}

paresImpares();