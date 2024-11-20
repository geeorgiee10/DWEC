window.onload = () => {
    const svg = document.querySelector('svg'); 
    const numBolas = 100; 
    const bolas = []; 

    class Pelota {
        constructor() {
            for (let i = 0; i < numBolas; i++) {
                const bola = {
                    posX: Math.random() * 1000 + 50, 
                    posY: Math.random() * 1000 + 50, 
                    radio: 10,
                    velX: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 1), 
                    velY: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5 + 1), 
                    elemento: null 
                };
        
                const circulo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circulo.setAttribute('cx', bola.posX);
                circulo.setAttribute('cy', bola.posY);
                circulo.setAttribute('r', bola.radio);
                circulo.setAttribute('fill', `hsl(${Math.random() * 360}, 70%, 50%)`);
                svg.appendChild(circulo);
                bola.elemento = circulo;
        
                bolas.push(bola); 
            }
        }
    }
    
    const movimiento = new Pelota();

    function detectarColision() {
        for (let i = 0; i < bolas.length; i++) {
            for (let j = i + 1; j < bolas.length; j++) {
                const bolaA = bolas[i];
                const bolaB = bolas[j];
                
                const dx = bolaA.posX - bolaB.posX;
                const dy = bolaA.posY - bolaB.posY;
                const distancia = Math.sqrt(dx * dx + dy * dy);

                if (distancia <= bolaA.radio + bolaB.radio) {
                    svg.removeChild(bolaA.elemento);
                    svg.removeChild(bolaB.elemento);
                    
                    bolas.splice(j, 1); 
                    bolas.splice(i, 1); 
                    i--;
                    break;
                }
            }
        }
    }

    function moverBolas() {
        for (let bola of bolas) {
            bola.posX += bola.velX;
            bola.posY += bola.velY;

            if (bola.posX + bola.radio >= 1100 || bola.posX - bola.radio <= 0) {
                bola.velX *= -1;
            }
            if (bola.posY + bola.radio >= 1100 || bola.posY - bola.radio <= 0) {
                bola.velY *= -1;
            }

            bola.elemento.setAttribute('cx', bola.posX);
            bola.elemento.setAttribute('cy', bola.posY);
        }

        detectarColision();
    }

    setInterval(moverBolas, 1000 / 144);
};
