<script setup>
  
</script>

<template>
    <div class="landing">
        <div class="principal">
            <h1 class="titulo">Tu futuro organizado comienza aquí</h1>
            <h2 class="subtitulo">¡Haz que cada recordatorio sea más fácil de gestionar y más efectivo!</h2>
        

            <span class="mensaje">Nunca más olvides lo importante, con nuestra herramienta siempre estarás al tanto de lo esencial.</span>

        </div>

        <div class="secundario">
            <h4 class="accion">¿Estás listo para tomar el control de tu vida y tus tareas?</h4>
            <RouterLink to="/loguearse"><button class="boton">Comienza ahora &rarr;</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .landing {
        width: 100%;
        height: 80vh;  
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3rem;  
        background: linear-gradient(135deg, rgba(4, 36, 69, 0.9), rgba(0, 204, 255, 0.1)); 
        padding: 2rem;
        
    }

    .principal {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .titulo {
        color: #a38ef5; 
        font-size: 2.5rem;
        font-weight: bold;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3), 0 0 25px #a38ef5, 0 0 5px darkviolet; 
    }

    .subtitulo {
        color: #b4cdde; 
        font-size: 1.6rem;
    }

    .mensaje {
        color: #b4cdde;
        font-size: 1.3rem;
        max-width: 700px;
    }

    .secundario {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .accion {
        color: #8e9aeb; 
        font-size: 1.6rem;
        margin-bottom: 2rem; 
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3), 0 0 25px #7b88e1, 0 0 5px #6A5ACD; 
    }

    .boton {
        width: 22rem;
        height: 4rem;
        border-radius: 25px;
        font-size: 1.8rem;
        background-color: #4C6EF5;  
        color: white;
        cursor: pointer;
        border: none;
        transition: all 1s ease;
        box-shadow: 0 4px 10px rgba(76, 110, 245, 0.5);
    }

    .boton:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 15px rgba(76, 110, 245, 0.7);
    }

    @media (max-width: 900px) {
        .landing {
            flex-direction: column;
        }

        .titulo {
            font-size: 1.5rem;
        }

        .subtitulo {
            font-size: 0.7rem;
        }

        .mensaje {
            font-size: 0.8rem;
            max-width: 700px;
        }

        .accion {
            font-size: 1.2rem; 
        }

        .boton {
            width: 10rem;
            height: 2rem;
            border-radius: 25px;
            font-size: 1rem;
        }
    }

</style>
