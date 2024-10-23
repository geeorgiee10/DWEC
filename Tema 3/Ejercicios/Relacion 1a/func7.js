/*
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length){
    string = [];
    opciones = ["rock","paper","scissor"];
    string.length = length;

    for(let i = 0; i< string.length; i++){
        string[i] = opciones[Math.floor(Math.random() * (opciones.length))]
    }
    return string;
}
document.write(getRockPaperScissorRandomSequence(4))