window.onload = function(){
    $("table tr:nth-child(-n2)").css("background-color", "red");

    //$("table tr:nth-child(3)").css("background-color", "white");

    $("table tr:nth-child(+n4)").css("background-color", "blue");
}