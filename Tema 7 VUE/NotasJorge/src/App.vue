<script setup>

  import { ref,  onMounted } from 'vue'

  const text =  ref('');
  const elementos= ref([]);

  function anadir(){
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
    almacenar();
  }

  function almacenar(){
    localStorage.setItem('elementos', JSON.stringify(elementos.value));
  }

  function vaciar(){
    elementos.value = [];
    almacenar();
  }

  function borrar(index){
    elementos.value.splice(index,1),
    almacenar();
  }

  function cargar(){
    const datosGuardados = localStorage.getItem('elementos');
    if (datosGuardados)
      elementos.value = JSON.parse(datosGuardados);
  }

  function completar(index){
    elementos.value[index].completada = !elementos.value[index].completada;
    almacenar();
  }

  function cambiarPrioridad(index, num){
    elementos.value[index].prioridad = num;
    ordenar();
    almacenar();
  }

  function ordenar(){
    elementos.value.sort((a,b) => b.prioridad - a.prioridad);
  }

  function tareasCompletadas(){
    return elementos.value.filter(tarea => tarea.completada == false).length;
  }

  function borrarCompletadas(){
    elementos.value = elementos.value.filter(tarea => tarea.completada == false);
    almacenar();
  }

  function fecha(){
    elementos.value.forEach(element => {
      let fechaAhora = new Date().getTime();
      let diferencia = Math.floor((fechaAhora - element.horaCreacion) / 1000);
      if (diferencia < 3600) {
        let minutos = Math.floor(diferencia / 60);
        element.tiempoPasado = minutos;
      }
    });
  }

  onMounted(() => {
    cargar();
    ordenar();
    setInterval(() => {
      fecha();
    }, 60000);
  })

</script>

<template>

<div id="container">
    <h1>Lista de Tareas de Jorge</h1>
        <div class="input-container">
            <input type="text" id="groceryInput" placeholder="¿Qué Quieres Recordar?" v-model="text" v-on:keyup.enter="anadir()">
            <button id="boton" v-on:click="anadir()" >Añadir</button>
        </div>

        <div class="tareasCompletadas--item">
            <span ><i class="fa-solid fa-chart-simple"></i> {{ tareasCompletadas() }} tareas pendientes de un total de {{ elementos.length }}</span> | <a id="borrarCompletadas" v-on:click="borrarCompletadas()"><i class="fa-solid fa-x"></i> Borrar tareas completadas</a>
        </div>
        <ul id="lista">
            
            <li v-for="(elemento,index) in elementos" :id="index" class="tarea">
                <div id="tareaOpciones">

                    <input type="checkbox" class="radioCompletada" v-model="elemento.completada" v-on:click="completar(index)">

                    <span v-bind:class="{ estaCompletada: elemento.completada }">{{ elemento.titulo }}</span>

                    <button v-on:click="borrar(index)" id="borrarTarea"><i class="fa-solid fa-delete-left"></i> Borrar</button>

                </div>
                
                <div id="prioridad">

                    <span >Prioridad:</span>

                    <div id="botonesPrioridad">

                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.prioridad == 0 }" v-on:click="cambiarPrioridad(index,0)">Baja</button>
                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.prioridad == 1 }" v-on:click="cambiarPrioridad(index,1)">Media</button>
                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.prioridad == 2 }" v-on:click="cambiarPrioridad(index,2)">Alta</button>

                    </div>

                    <span><i class="fa-solid fa-clock"></i> Añadido hace {{ elemento.tiempoPasado }} minutos</span>
                </div>

                
            </li>
        </ul>
        <button id="vaciar" v-on:click="vaciar()">Borrar tareas</button>
    </div>
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
  
  #boton {
    width: 29%;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  #boton:hover {
    background-color: #0056b3;
  }

  
  
  ul {
    list-style-type: none;
    background-color: #ddd;
    margin: 1.2rem;
    border-radius: 5px;
    height: 40%;
  }
  
  li {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding: 10px;
    border-radius: 5px;
    border-bottom: 1px solid gray;
  }

  .radioCompletada{
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    color: red;
    -webkit-appearance:none;
  }

  .radioCompletada:checked{
    color: green;
    background-color: lightgreen;
  }

  .radioCompletada:checked::after{
    content: "✓";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.2rem;
    font-size: 14px;
    font-weight: bold;
  }

  .estaCompletada{
    text-decoration: line-through;
    color: green;
  }

  #borrarTarea{
    width: auto;
    padding: 10px;
    border: none;
    background-color: #ff2b38;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    /* margin-top: 20px; */
  }

  #borrarTarea:hover {
    background-color: darkred;
  }

  #tareaOpciones{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 1.2rem;
  }

  #prioridad{
    width: 100%;
    display: flex;
    justify-content: left;
    flex-direction: row;
    gap: 1.2rem;
    margin: auto;
    align-items: center;
  }

  #botonesPrioridad{
    width: 10rem;
    font-size: 16px;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  .btnPrioridad{
    width: 5rem;
    height: 1.5rem;
    border: 1px solid gray;
  }

  .btnPrioridadActivo{
    width: 5rem;
    height: 1.5rem;
    border: 1px solid gray;
  }

  .btnPrioridadActivo:nth-child(1){
    background-color: lightgreen;
  }

  .btnPrioridadActivo:nth-child(2){
    background-color: lightskyblue;
  }

  .btnPrioridadActivo:nth-child(3){
    background-color: lightcoral;
  }

  .btnPrioridad:hover{
    background-color: gray;
    color: white;
  }
  
  
  li button {
    background: transparent;
    margin-left: auto;
    border: none;
    cursor: pointer;
  }
  
  li .editar, li .borrar {
    margin-left: 10px;
    color: #28a745;
  }
  
  li .editar:hover, li .borrar:hover {
    color: #dc3545;
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
