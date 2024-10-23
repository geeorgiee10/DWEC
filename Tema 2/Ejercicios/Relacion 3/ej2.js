function comprobarCadena(cadena){

        if(cadena === cadena.toUpperCase()){
            document.write("Tiene solo mayusculas");
        }
        else if(cadena === cadena.toLowerCase()){
            document.write("Tiene solo minusculas");
        }
        else{
            document.write("Tiene mayusculas y minusculas");
        }
        return cadena;
    
}
cadena = prompt("Dame una cadena");
comprobarCadena(cadena);