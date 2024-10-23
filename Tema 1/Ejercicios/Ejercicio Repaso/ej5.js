let num = prompt("Introduce un numero");
let suma= 0;
let fin = false;

for(let i = 0; i<num.length && !fin;i++){
    if(isNaN(parseInt(num[i])) ){
        document.write("No es un numero");
        fin = true;
    }
    else
    suma = suma + num[i];
    
}
if(!fin)
    document.write(suma);



