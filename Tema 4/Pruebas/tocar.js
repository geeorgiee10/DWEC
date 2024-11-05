window.onload = function(){

    const canvas = document.getElementById("canvas");

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log("Toque inicial");
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touch = e.touches[0];
        
        console.log("Posicion x: " + touch.clientX);
        console.log("Posicion y: " + touch.clientY);
    });
      
    canvas.addEventListener('touchend', () => {
        console.log("Toque inicial");
    });


}