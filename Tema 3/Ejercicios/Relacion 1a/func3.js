/*
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers){
    let numeroGrande = 0;
    for(let i = 0; i< numbers.length;i++){
        if(numbers[i] > numeroGrande){
            numeroGrande = numbers[i];
        }
    }
    return numeroGrande
}

document.write(getBiggestNumber([3, 8, 2, 11, 10]));