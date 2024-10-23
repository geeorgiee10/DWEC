/*
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension (file){
    let posicion = file.indexOf(".");
    return file.substring(posicion + 1, file.length);
}

document.write(getFileExtension("imagen.jpg"));