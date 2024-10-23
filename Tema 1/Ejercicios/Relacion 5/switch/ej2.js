let num = parseInt(prompt("Dime un numero"));
let opcion;

if(num%2 ==0){
    opcion = 1;
} 
else if(num%3 == 0){
    opcion = 2
}
else if(num%5 == 0 ){
    opcion = 3;
}

switch(opcion){
    case 1:
        document.write("Es par");
        break;
    case 2:
        document.write("Es multiplo de 3");
        break;
    case 3:
        document.write("Es multiplo de 5");
        break;
}