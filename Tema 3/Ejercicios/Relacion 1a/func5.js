/*
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors,length){
    let colores = [];
    colores.length = length;
    for(let i = 0;i < colores.length;i++){
        colores[i] = colors[Math.floor(Math.random() * (colors.length))];
    }
    return colores;
}
document.write(getRandomColorSequence(["red", "blue", "green"], 5));