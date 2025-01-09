<script setup>

    import Nota from './Nota.vue';

    const props = defineProps(['elementos'])
    const emit = defineEmits(['borrarTareas', 'ordenar']);

    function borrarTodo (){
        emit('borrarTareas');
    }

    function borrar(index){
        props.elementos.splice(index,1);
    }

    function completar(index){
        props.elementos[index].completada = !props.elementos[index].completada;
    }

    function cambiarPrioridad(index, num){
        props.elementos[index].prioridad = num;
    }

</script>

<template>

    <ul id="lista">
            
        <Nota class="notas" v-for="(elemento, index) in elementos" 
            :elemento="elemento" 
            :index="index"
            v-on:completarTarea="completar"
            v-on:borrarTarea="borrar"
            v-on:CambiarPrioridad="cambiarPrioridad">
        </Nota>    

    </ul>
    <button id="vaciar" v-on:click="borrarTodo()">Borrar tareas</button> 

</template>

<style scoped>

    ul {
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

    
 
</style>
