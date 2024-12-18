window.onload = function(){

    let dosVeces = 0;
    let tamaño = "2rem";

    $("div p").on("click", function() {

        dosVeces++;

        

        $("div p").css("font-size", tamaño);

        tamaño = "6rem";


        if(dosVeces >= 2){

            $("div p").on("click"); 
        }
    });
}