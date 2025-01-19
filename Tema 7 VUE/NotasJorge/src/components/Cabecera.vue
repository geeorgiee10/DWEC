<script setup>
 import { ref } from 'vue';

 import { useCurrentUser} from 'vuefire';

  const user = useCurrentUser();

  const emit = defineEmits(['introducirTexto']);

  const text =  ref('');

  function texto (){
    emit('introducirTexto', text);
  }

</script>

<template>

    <h1>Lista de Tareas de {{ user.displayName ? user.displayName : user.email }}</h1>
        <div class="input-container">
            <input type="text" id="groceryInput" placeholder="¿Qué Quieres Recordar?" v-model="text" v-on:keyup.enter="texto()">
            <button id="boton" v-on:click="texto()" >Añadir</button>
        </div>

</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 24px;
    color:  #E0E6ED;
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
    background-color: #1D74F5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1rem;
  }
  
  #boton:hover {
    background-color: #0056b3;
  }

  @media (max-width: 900px) {
      .input-container {
        flex-direction: column;
        gap: 1rem;
      }

      #groceryInput {
        width: 100%;
        padding: 10px;
      }

      #boton {
        width: 100%;
        margin-left: 0;
      }
  }
 
</style>
