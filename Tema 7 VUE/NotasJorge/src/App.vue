<script setup>

  import { ref, onMounted, watch } from 'vue';
  import Cabecera from './components/Cabecera.vue';
  import Pie from './components/Pie.vue';
  import InforTareas from './components/InforTareas.vue';
  import ListaTareas from './components/ListaTareas.vue';
  import Login from './components/Login.vue';

  import { useFirestore } from 'vuefire'
  import { useCollection } from 'vuefire'
  import { collection, addDoc, query, orderBy, doc, deleteDoc} from 'firebase/firestore'
  
  //const elementos= ref([]);
  const db = useFirestore()
  var elementos = useCollection(
    query(collection(db, 'recordatorios'),orderBy("Prioridad", "desc"))
  );

  function anadir(text){
    let nuevaNota = {
        Nombre: text.value,
        Completada: false,
        Prioridad: 0,
        Fecha_Creacion: new Date().getTime(),
        TiempoPasado: 0
    }
    //elementos.value.push(nuevaNota);
    // Add a new document with a generated id.
    const docRef = addDoc(collection(db, "recordatorios"), nuevaNota)
    .then( (docRef) => {
      console.log("Document");
      

    }).catch( (error) => {
       console.log("Error = " + error);
       
    });

    text.value = "";
  }

  function borrarCompletadas(){
    elementos.value.forEach(element => {
      if(element.Completada == true){
        deleteDoc(doc(db, "recordatorios", element.id));
      }
    });
    //elementos.value = elementos.value.filter(tarea => tarea.completada == false);
  }

  function vaciar(){
    elementos.value.forEach(element => {
        deleteDoc(doc(db, "recordatorios", element.id));
      
    });
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
 

  

</script>

<template>

  <div id="container">

      <Login></Login>

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
