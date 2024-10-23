function ej5(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
     

    relojPantalla = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = relojPantalla


    
    
    setTimeout("ej5()",1000)
}

ej5();