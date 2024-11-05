window.onload = function(){

    const canvas = document.getElementById("canvas");

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        canvas.innerHTML = "Toque inicial";
    });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touch = e.touches[0];
        
        canvas.innerHTML = "Posición x: " + touch.clientX + ", Posición y: " + touch.clientY;
    });
      
    canvas.addEventListener('touchend', () => {
        canvas.innerHTML = "Toque inicial";
    });


}