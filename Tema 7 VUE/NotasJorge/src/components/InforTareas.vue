<script setup>

    import { ref, computed } from 'vue';

    const props = defineProps(['elementos'])
    const emit = defineEmits(['borrarCompletadas']);

    function borrar (){
        emit('borrarCompletadas');
    }

    const tareasCompletadas = computed(() =>{
        return props.elementos.filter((tarea) => !tarea.completada).length;   
    });

</script>

<template>

    <div class="tareasCompletadas--item">
        <span ><i class="fa-solid fa-chart-simple"></i> {{ tareasCompletadas }} tareas pendientes de un total de {{ elementos.length }}</span> | <a id="borrarCompletadas" v-on:click="borrar()"><i class="fa-solid fa-x"></i> Borrar tareas completadas</a>
    </div>

</template>

<style scoped>

.tareasCompletadas--item{
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 1.2rem;
  }

  .tareasCompletadas--item span{
    margin-right: 0.4rem;
  }

  #borrarCompletadas{
    color: darkgoldenrod;
    margin-left: 0.4rem;
    cursor: pointer;
  }
 
</style>
