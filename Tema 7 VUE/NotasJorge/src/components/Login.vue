<script setup>

    import { GoogleAuthProvider } from 'firebase/auth'
    import {
        signInWithPopup,
        signOut,
    } from 'firebase/auth'
    import { useCurrentUser, useFirebaseAuth } from 'vuefire'
    
    const auth = useFirebaseAuth();
    const googleAuthProvider = new GoogleAuthProvider()
    const user = useCurrentUser()

    function iniciarSesion(){
        signInWithPopup(auth, googleAuthProvider).then(
            ()=>console.log("Validacion correcto")
        ).catch((reason) => {
            console.error("Failed sign", reason)
        });   
    }

    function cerrarSesion(){
        signOut(auth).then(
            ()=>console.log("Se ha cerrado la sesion")
        ).catch((reason) => {
            console.error("Failed sign out", reason)
        });
    }

    

</script>

<template>
    <div v-if="user">
        <h2>Hola {{ user.displayName }}</h2>
        <button @click="cerrarSesion">Cerrar Sesion</button>
    </div>

    <div v-else>
        
        <button @click="iniciarSesion">Iniciar Sesion</button>
        
    </div>

    

</template>

<style scoped>

  
</style>
