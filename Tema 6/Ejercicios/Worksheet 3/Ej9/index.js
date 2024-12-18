window.onload = function(){

    
    $("#start").on("click", function() {
        let div = $("<div></div>");

        $("body").append(div);

        div.animate({ left: "200px"}, 2000);
        div.css("background-color", "blue");
        div.animate({ top: "-100px"}, 2000);


        $("#stop").on("click", function() {
            if (div) {
                div.stop(true, true);
            }
        });
    });

    
}