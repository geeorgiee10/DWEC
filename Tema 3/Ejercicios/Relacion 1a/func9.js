/*
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x){
    if(x == 1){
        return 1;
    }
    else{
        return x * getFactorial(x-1);
    }
}
document.write(getFactorial(4));