<script setup>
    import { ref, onMounted, watch  } from 'vue'

    import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
    import {
        signInWithPopup
    } from 'firebase/auth'

    import { useCurrentUser, useFirebaseAuth } from 'vuefire'

    import { useRouter } from 'vue-router';

    const router = useRouter();
    
    
    const auth = useFirebaseAuth();
    const googleAuthProvider = new GoogleAuthProvider()
    const user = useCurrentUser()

    const error = ref("");
    const correo = ref('')
    const contraseña = ref('')
    const estaIniciado = ref(true)

    async function iniciarSesion(){
        await signInWithPopup(auth, googleAuthProvider).then(() => {
            router.push("/recordatorios");
            console.log("Validación correcta");
        })
        .catch((reason) => {
            console.error("Failed sign", reason)
        });   
    }

    function redirigir(){
        router.push("/recordatorios");
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
    

    onMounted(() => {
        if(user){
            redirigir();
        }
    })

    watch(user, (newUser) => {
    if (newUser) {
        redirigir();
    }
});

</script>

<template>

    <div v-if="!user">
        <button @click="iniciarSesion">Iniciar Sesion con Github <img src="https://www.github.com\favicon.ico" alt="Google"></button>
        <button @click="iniciarSesion">Iniciar Sesion con Google <img src="https://www.google.com\favicon.ico" alt="Google"></button>
        
        <h2>{{ estaIniciado  ? 'Iniciar sesión' : 'Registrarse' }}</h2>
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

    label, h2{
        color: white;
    }

  
</style>
