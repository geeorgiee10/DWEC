window.onload = function(){

    $("input").on("input", function(){
        $("form label").remove();
        let longitud = $("input").val().length;
    
        if($("input").val().length <5){

            label = $("<label>No segura</label>");
    
            $("form").append(label);
        }
    
        if(longitud >=5 && longitud <=8){

            label = $("<label>Medianamente segura</label>");
    
            $("form").append(label);
        }
        
        if(longitud >8){
            
            label = $("<label>segura</label>");
    
            $("form").append(label);
        }
    });
    
    
    
}