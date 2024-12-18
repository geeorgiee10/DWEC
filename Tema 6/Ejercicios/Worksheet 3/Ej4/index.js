window.onload = function(){
    $("button:contains('Focus')").on("click", function() {
        $("input").focus();
    });

    $("button:contains('No Focus')").on("click", function() {
        $("input").blur();
    });
}