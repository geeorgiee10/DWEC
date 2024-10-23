let fechaHoy = new Date();
let fecha85 = new Date(fechaHoy);
let fecha187 = new Date(fechaHoy);
fecha85.setDate(fechaHoy.getDate() + 85);
fecha187.setDate(fechaHoy.getDate() - 187);

document.write(fechaHoy + "<br>");
document.write(fecha85 + "<br>");
document.write(fecha187 + "<br>");

let fecha2anos85 = new Date(fecha85);
fecha2anos85.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha2anos85 + "<br>");

let fecha24horas187 = new Date(fecha187);
fecha24horas187.setHours(fecha187.getHours() - 24);
document.write(fecha24horas187 + "<br>" + "<br>"+ "<br>"+ "<br>");

let fechaRestoCuenta = fecha85 - fecha187;
let fechaResto = new Date(fechaRestoCuenta);
document.write(fechaResto);
