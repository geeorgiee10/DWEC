<script setup>

    import Nota from './Nota.vue';

    import { useFirestore } from 'vuefire'
    import { useCollection } from 'vuefire'
    import { doc, updateDoc, deleteDoc } from 'firebase/firestore';


    import {signOut,} from 'firebase/auth'
    import { useFirebaseAuth } from 'vuefire'

    import { useRouter } from 'vue-router';

    const router = useRouter();
    
    const auth = useFirebaseAuth();

    const props = defineProps(['elementos'])
    const emit = defineEmits(['borrarTareas', 'ordenar']);

    const db = useFirestore();

    function borrarTodo (){
        emit('borrarTareas');
    }

    function borrar(index){
        deleteDoc(doc(db, "recordatorios", props.elementos[index].id));
        //props.elementos.splice(index,1);
    }

    function completar(index){
        const completadaRef = doc(db, "recordatorios", props.elementos[index].id);

        updateDoc(completadaRef, {
            Completada: !props.elementos[index].Completada
        });
        //props.elementos[index].Completada = !props.elementos[index].Completada;
    }

    function cambiarPrioridad(index, num){
        const prioridadRef = doc(db, "recordatorios", props.elementos[index].id);

        updateDoc(prioridadRef, {
            Prioridad: num
        });

        //props.elementos[index].Prioridad = num;
    }

    function cerrarSesion(){
        signOut(auth).then(
            router.push("/"),
            ()=>console.log("Se ha cerrado la sesion")
        ).catch((reason) => {
            console.error("Failed sign out", reason)
        });
    }

</script>

<template>

    <!-- <ul > -->

    <TransitionGroup v-if="elementos.length > 0" id="lista" name="notas" tag="ul">
        <Nota class="notas" v-for="(elemento, index) in elementos" 
            :key="elemento.id"
            :elemento="elemento" 
            :index="index"
            v-on:completarTarea="completar"
            v-on:borrarTarea="borrar"
            v-on:CambiarPrioridad="cambiarPrioridad">
        </Nota>   
    </TransitionGroup>

    <!-- </ul> -->
    <button id="vaciar" v-on:click="borrarTodo()">Borrar tareas</button> 
    <button id="logout" @click="cerrarSesion">Cerrar sesión</button> 

</template>

<style scoped>

    #lista {
        list-style-type: none;
        background-color: #D9E2EC;
        margin-top: 1rem;
        padding: 0.5rem;
        padding-bottom: 0;
        border-radius: 5px;
        height: 50%;
        width: 90%;
        justify-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #vaciar, #logout {
        width: 100%;
        padding: 10px;
        border: none;
        color: #FF5C5C;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
    }
  
    #vaciar:hover, #logout:hover {
        background-color: #FF5C5C;
        color: white;
    }

    .notas-enter-active,
    .notas-leave-active {
        transition: all 1s ease;
    }

    .notas-enter-from {
        opacity: 0;
        transform: translateX(-30px);
    }

    .notas-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    
    
</style>
