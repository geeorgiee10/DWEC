let mes = prompt("Dia un mes");

switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        document.write("Tiene 31 días");
        break;
    case "Febrero":
        document.write("Tiene 28 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        document.write("Tiene 30 días");
        break;     
}
