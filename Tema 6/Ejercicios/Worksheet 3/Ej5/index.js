window.onload = function(){
    $("div p").on("click", function() {
        let colorAleatorio = "#" + Math.floor(Math.random()*11111111).toString(16)
        $("div p").css("color", colorAleatorio);
    });
}