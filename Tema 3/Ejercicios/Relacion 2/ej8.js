function lanzamiento(){
    n = Math.floor(Math.random() * (6-1+1))+ 1;
    return n;
}

function simulacion(){
    let numero1;
    let numero2;
    let suma;
    let veces = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < 36000; i++){
        numero1 = lanzamiento();
        numero2 = lanzamiento();
        suma = numero1 + numero2;
        veces[suma-1]++;
    }
    for(let j = 1;j < veces.length; j++){
        document.write("La suma "+ (j+1) + " ha salido: " + veces[j] + " veces <br>");
    }
}

simulacion();