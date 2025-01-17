<script setup>

  import { ref, onMounted, watch } from 'vue';
  import Cabecera from './Cabecera.vue';
  import Pie from './Pie.vue';
  import InforTareas from './InforTareas.vue';
  import ListaTareas from './ListaTareas.vue';

  import { useFirestore } from 'vuefire'
  import { useCollection } from 'vuefire'
  import { collection, addDoc, query, orderBy, doc, deleteDoc, where} from 'firebase/firestore'

  import { useCurrentUser} from 'vuefire';

  const user = useCurrentUser();
  //const elementos= ref([]);
  const db = useFirestore();
  var elementos;
  if(user.value.email == "jorgearcoyalopez@gmail.com"){
    elementos = useCollection(
      query(collection(db, 'recordatorios'),orderBy("Prioridad", "desc"))
    );
  }
  else{
    elementos = useCollection(
      query(collection(db, 'recordatorios'),where("idUsuario", "==", user.value.uid),orderBy("Prioridad", "desc"))
    );
  }

  function anadir(text){
    let nuevaNota = {
        Nombre: text.value,
        Completada: false,
        Prioridad: 0,
        Fecha_Creacion: new Date().getTime(),
        TiempoPasado: 0,
        idUsuario: user.value.uid
    }
    //elementos.value.push(nuevaNota);
    // Add a new document with a generated id.
    const docRef = addDoc(collection(db, "recordatorios"), nuevaNota)
    .then( (docRef) => {
      console.log("Nota creada");
      

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


      <Cabecera v-on:introducirTexto="anadir"></Cabecera>

      <InforTareas :elementos="elementos" v-on:borrarCompletadas="borrarCompletadas()"></InforTareas>
        
      <ListaTareas v-on:borrarTareas="vaciar" :elementos="elementos"></ListaTareas>  

  </div>
  <Pie></Pie>
</template>

<style scoped>

  
  #container {
    background-color: #064A73;
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
