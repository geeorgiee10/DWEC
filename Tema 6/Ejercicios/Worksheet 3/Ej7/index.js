window.onload = function(){

    $("#animar").on("click", function() {
        $("#caja1").animate({ "rotate" : "+=180deg" }, "slow" );
    });

    $("#animar").on("click", function() {
        $("#caja2").animate({ "width" : "+=3rem" }, "slow" );
    });

    $("#animar").on("click", function() {
        $("#caja3").animate({ "height" : "+=3rem" }, "slow" );
    });

    $("#animar").on("click", function() {
        $("#caja4").animate({ "borderWidth" : "+=3px" }, "slow" );
    });


    $("#cortarAnimacion").on("click", function() {
        $("div").stop(true, true);
    });
}