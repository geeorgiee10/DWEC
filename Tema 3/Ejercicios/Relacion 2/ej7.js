//7.a
let aCero = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0;
    }
    return arr;
}

let miArray = [5, 8, 2, 7, 1, 3, 6, 9, 4, 10];
document.write("Array normal: <br>")
document.write(miArray.join(" ") + "<br>");
document.write("Array a cero: <br>")
document.write(aCero(miArray).join(" ") + "<br>");

//7.b
let añadirUno = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 1; // o poner + "1"
    }
    return arr;
}

let miArray2 = [5, 8, 2, 7, 1, 3, 6, 9, 4, 10];
document.write("Array normal: <br>")
document.write(miArray2.join(" ") + "<br>");
document.write("Array añadiendo 1: <br>")
document.write(añadirUno(miArray2).join(" ") + "<br>");

//7.c
let miArray3 = [5, 8, 2, 7, 1, 3, 6, 9, 4, 10];
document.write("Array separado por espacios: <br>")
document.write(miArray3.join(" ") + "<br>");

