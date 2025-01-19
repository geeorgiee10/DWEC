<script setup>
    import { ref, onMounted, watch  } from 'vue'

    import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider  } from 'firebase/auth'
    import {
        signInWithPopup
    } from 'firebase/auth'

    import { useCurrentUser, useFirebaseAuth } from 'vuefire'

    import { useRouter } from 'vue-router';

    const router = useRouter();
    
    
    const auth = useFirebaseAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvide = new GithubAuthProvider();
    const user = useCurrentUser();

    const error = ref("");
    const correo = ref('')
    const contraseña = ref('')
    const estaIniciado = ref(true)

    async function iniciarSesionGoogle(){
        await signInWithPopup(auth, googleAuthProvider).then(() => {
            console.log("Validación correcta");
        })
        .catch((reason) => {
            console.error("Failed sign", reason)
        });   
    }

    async function iniciarSesionGithub(){
        await signInWithPopup(auth, githubAuthProvide).then(() => {
            console.log("Validación correcta");
        })
        .catch((reason) => {
            console.error("Failed sign", reason)
        });   
    }

    async function loginContraseña(){
        error.value = "";
        try{
            if(estaIniciado.value){
                await signInWithEmailAndPassword(auth, correo.value, contraseña.value)
            }
            else{
                await createUserWithEmailAndPassword(auth, correo.value, contraseña.value);
            }
        }
        catch(err){
            error.value = err.value;
        }
    }
    
</script>

<template>

    <div v-if="!user" class="formulario">
        <h2 class="tituloForm">{{ estaIniciado  ? 'Iniciar sesión' : 'Registrarse' }}</h2>

        <button @click="iniciarSesionGithub" class="btnGithub"><i class="fa-brands fa-github" id="logoGithub"></i> Inicia con Github</button>
        <button @click="iniciarSesionGoogle" class="btnGoogle"><img src="https://www.google.com\favicon.ico" alt="Google"> Inicia con Google</button>
        
        <hr class="separacion">
        
        <form class="{{ estaIniciado }} ? iniciarSesion : registrarse" @submit.prevent="loginContraseña">

            <label for="correo">Corrreo</label>
            <input type="text" name="correo" placeholder="nombre@dominio.com" id="correo" v-model="correo" required >

            <label for="contraseña">Contraseña</label>
            <input type="password" name="contraseña" id="contraseña" v-model="contraseña" placeholder="Introduce tu contraseña" required>

            <a href=""></a>

            <button type="submit">{{ estaIniciado  ? 'Iniciar sesión' : 'Registrarse' }}</button>
        </form>

        <p class="cambiarForm">
          {{ estaIniciado ? '¿No tienes ninguna cuenta?' : '¿Ya tienes una cuenta?' }}
          <span @click="estaIniciado = !estaIniciado">
            {{ estaIniciado ? 'Registrarse' : 'Iniciar sesión' }}
          </span>
        </p>

    </div>

    

</template>

<style scoped>

    .formulario{
        width: 40%;
        height: 40rem;
        align-self: center;
        justify-self: center;
        margin-top: 2rem;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 3rem;
    }

    .tituloForm{
        font-size: 2rem;
        font-weight: bold;
    }

    .btnGithub{
        width: 90%;
        height: 3rem;
        background-color: black;
        border: none;
        border: 1px solid white;
        color: white;
        border-radius: 10px;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: all 1s;
        cursor: pointer;
    }

    #logoGithub{
        font-size: 2rem;
    }

    .btnGoogle{
        width: 90%;
        height: 3rem;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: all 1s;
        cursor: pointer;
    }
    
    .btnGithub:hover,  .btnGoogle:hover{
        transform: scale(1.1);
    }

    .separacion{
        width: 100%;
        color: gray;
    }

    .iniciarSesion, .registrarse{
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 20rem;
        padding: 0.5rem;
    }

    .iniciarSesion label, .registrarse label{
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .iniciarSesion input, .registrarse input{
        width: 100%;
        height: 2rem;
        border: solid 1px #ddd;
        border-radius: 10px;
        padding: 1rem;
        color: black;
        transition: all 1s;
    }

    .iniciarSesion input:focus, .registrarse input:focus{
        transform: scale(1.1);
        box-shadow: 2px 4px 10px rgba(76, 110, 245, 0.5);
    }

    .iniciarSesion button, .registrarse button{
        width: 100%;
        height: 2.5rem;
        margin-top: 1.5rem;
        border: none;
        background-color: #4C6EF5;
        color: white;
        border-radius: 10px;
        font-size: 1rem;
        transition: all 1s;
    }

    .iniciarSesion button:hover, .registrarse button:hover{
        background-color: white;
        color: #4C6EF5;
        border: 1px solid #4C6EF5;
        transform: scale(1.1);
    }

    .cambiarForm span{
        color: #4C6EF5
    }

    .cambiarForm span:hover{
        text-decoration: underline;
    }


    @media (max-width: 1000px) {
        .formulario{
            width: 90%;
            padding: 2rem;
        }
    }
  
</style>
