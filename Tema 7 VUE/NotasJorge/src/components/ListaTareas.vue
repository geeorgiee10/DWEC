<script setup>

    import Nota from './Nota.vue';

    import { useFirestore } from 'vuefire'
    import { useCollection } from 'vuefire'
    import { doc, updateDoc, deleteDoc } from 'firebase/firestore'

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

</script>

<template>

    <!-- <ul > -->

    <TransitionGroup id="lista" name="notas" tag="ul">
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

</template>

<style scoped>

    #lista {
        list-style-type: none;
        background-color: #ddd;
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

    #vaciar {
        width: 100%;
        padding: 10px;
        border: none;
        color: #dc3545;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
    }
  
    #vaciar:hover {
        background-color: #ff2b38;
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
