<script setup>

    import { onMounted} from 'vue';

    const props = defineProps(['elemento', 'index'])
    const emit = defineEmits(['completarTarea', 'borrarTarea', 'CambiarPrioridad']);


    function borrar (index){
        emit('borrarTarea', index);
    }
    
    function completar (index){
        emit('completarTarea', index);
    }

    function prioridad (index, num){
        emit('CambiarPrioridad', index, num);
    }

    function fecha(){
        let fechaAhora = new Date().getTime();
        let diferencia = Math.floor((fechaAhora - props.elemento.Fecha_Creacion) / 1000);
        if (diferencia < 3600) {
            let minutos = Math.floor(diferencia / 60);
            props.elemento.TiempoPasado = minutos;

            return props.elemento.TiempoPasado + " minutos";
        }
        else {
            let horas = Math.floor(diferencia / 3600);
            props.elemento.TiempoPasado = horas;

            return props.elemento.TiempoPasado + " horas";
        } 
    }

    onMounted(() => {
        setInterval(() => {
            fecha();
        }, 60000);
    })

</script>

<template>

      <Transition>            
            <li :id="index" class="tarea">
                <div id="tareaOpciones">

                    <input type="checkbox" class="radioCompletada" v-model="elemento.Completada" v-on:click="completar(index)">

                    <span v-bind:class="{ estaCompletada: elemento.Completada }">{{ elemento.Nombre }}</span>

                    <button v-on:click="borrar(index)" id="borrarTarea"><i class="fa-solid fa-x"></i> Borrar</button>

                </div>
                
                <div id="prioridad">

                    <span >Prioridad:</span>

                    <div id="botonesPrioridad">

                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.Prioridad == 0 }" v-on:click="prioridad(index,0)">Baja</button>
                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.Prioridad == 1 }" v-on:click="prioridad(index,1)">Media</button>
                        <button class="btnPrioridad" v-bind:class="{ btnPrioridadActivo: elemento.Prioridad == 2 }" v-on:click="prioridad(index,2)">Alta</button>

                    </div>

                    <span><i class="fa-solid fa-clock"></i> Añadido hace {{ fecha() }}</span>
                </div>

                
            </li>
      </Transition>

</template>

<style scoped>

   li {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0;
    border-bottom: 1px solid gray;
  } 

  .radioCompletada{
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    color: red;
    /*-webkit-appearance:none;*/
  }

  .radioCompletada:checked{
    color: green;
    background-color: lightgreen;
  }


  .estaCompletada{
    text-decoration: line-through;
    color: green;
  }

  #borrarTarea{
    width: auto;
    padding: 10px;
    border: none;
    background-color: #FF4D4D;
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
  
  
 
</style>
