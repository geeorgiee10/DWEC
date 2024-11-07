window.onload = function(){

    const canvas = document.getElementById("canvas");

    document.addEventListener('touchstart', (e) => {
       e.preventDefault();
        canvas.innerHTML = "Toque inicial";
    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touch = e.touches[0];
        
        canvas.innerHTML = "Posición x: " + touch.clientX + ", Posición y: " + touch.clientY;
    });
      
    document.addEventListener('touchend', () => {
        canvas.innerHTML = "Toque finalizado";
    });


}