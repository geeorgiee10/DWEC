//c
document.write("El numero de imagenes del documentos es: " + document.images.length);
document.write("<br>");

//d
const primeraImagen = document.getElementsByTagName('img')[0];
const idDeLaImagen = primeraImagen.id;
document.write("El id de la primera imagen del documentos es: " + idDeLaImagen);
document.write("<br>");
//e
document.write("El numero de enlaces del documentos es: " + document.links.length)
document.write("<br>");
//f
document.write("Titulo anterior: " + document.title + "<br>");
document.title = "nuevo titulo";
document.write("Titulo nuevo: " + document.title);

