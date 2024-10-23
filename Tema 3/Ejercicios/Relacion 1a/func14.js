/*
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates (arr){
    let arrSinDupli = [];

    for(let i = 0; i < arr.length; i++){
        if(!arrSinDupli.includes(arr[i])){
            arrSinDupli.push(arr[i]);
        }
    }
    return arrSinDupli;
}

document.write(removeDuplicates([4, 5, 10, 4, 10, 2]));