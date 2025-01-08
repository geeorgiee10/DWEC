<script setup>
 import { ref } from 'vue';

const emit = defineEmits(['introducirTexto']);

const text =  ref('');

function texto (){
    emit('introducirTexto', text);
}

</script>

<template>

    <h1>Lista de Tareas de Jorge</h1>
        <div class="input-container">
            <input type="text" id="groceryInput" placeholder="¿Qué Quieres Recordar?" v-model="text" v-on:keyup.enter="texto()">
            <button id="boton" v-on:click="texto()" >Añadir</button>
        </div>

</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  #groceryInput {
    width: 70%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  #boton {
    width: 29%;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1rem;
  }
  
  #boton:hover {
    background-color: #0056b3;
  }

 
</style>
