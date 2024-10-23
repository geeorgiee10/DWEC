/*
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
function removeWords (str, words){
    return str.split(' ').filter(word => !words.includes(word)).join(' ');     
}

document.write(removeWords("This is a really bad test", ["really", "bad"]));