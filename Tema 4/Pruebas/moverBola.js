
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {


    document.getElementById("bola").innerHTML = "adios";
    const alpha = event.alpha; 
    const beta = event.beta;  
    const gamma = event.gamma; 
  
    let output = `Alpha: ${alpha} Beta: ${beta} Gamma: ${gamma} `;
    document.getElementById('bola').textContent  = output;
}