/*
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */
function getRange(a,b,inclusive = true){
if (b < a) {
    [a, b] = [b, a];
  }

  const numeros = [];

  for (let i = a; i <= b; i++) {
    if (inclusive || i !== a && i !== b) {
        numeros.push(i);
    }
  }

  return numeros;
}

document.write(getRange(-5, -10, false));