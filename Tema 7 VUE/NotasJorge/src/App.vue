<script setup>

  import { ref, onMounted, watch } from 'vue';
  import Cabecera from './components/Cabecera.vue';
  import Pie from './components/Pie.vue';
  import InforTareas from './components/InforTareas.vue';
  import ListaTareas from './components/ListaTareas.vue';
  
  const elementos= ref([]);

  function anadir(text){
    let nuevaNota = {
        id: "",
        titulo: text.value,
        completada: false,
        prioridad: 0,
        horaCreacion: new Date().getTime(),
        tiempoPasado: 0
    }
    elementos.value.push(nuevaNota);
    text.value = "";
  }

  function borrarCompletadas(){
    elementos.value = elementos.value.filter(tarea => tarea.completada == false);
  }

  function vaciar(){
    elementos.value = [];
  }

  function cargar(){
    const datosGuardados = localStorage.getItem('elementos');
    if (datosGuardados)
      elementos.value = JSON.parse(datosGuardados);
  }
  

  function ordenar(){
    elementos.value.sort((a,b) => b.prioridad - a.prioridad);
  }

  /*function fecha(){
    elementos.value.forEach(element => {
      let fechaAhora = new Date().getTime();
      let diferencia = Math.floor((fechaAhora - element.horaCreacion) / 1000);
      if (diferencia < 3600) {
        let minutos = Math.floor(diferencia / 60);
        element.tiempoPasado = minutos;
      }
    });
  }*/
 
  onMounted(() => {
    cargar();
    ordenar();
  })

  watch(
    () => elementos,
    (newValue, oldValue) => {
      localStorage.setItem('elementos', JSON.stringify(elementos.value));
      ordenar();
    },
    { deep: true }
  )

</script>

<template>

  <div id="container">

      <Cabecera v-on:introducirTexto="anadir"></Cabecera>

      <InforTareas :elementos="elementos" v-on:borrarCompletadas="borrarCompletadas()"></InforTareas>
        
      <ListaTareas v-on:borrarTareas="vaciar" :elementos="elementos"></ListaTareas>  

  </div>
  <Pie></Pie>
</template>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f4f8;
    /* height: 100vh; */
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 50%;
    margin-top: 3rem;
    justify-self: center;
    /* height: auto; */
  }

  @media (max-width: 825) {

  }
  
</style>
