import './App.css'

export function Botones (num){

  function alerta(numero){
    numero = num;
      alert("Clicked the button " + numero);
    
  }

  return (
    <>
      <button onClick={alerta}>Click me Button {num}</button>
    </>
  )
}


function App() {

  var boton1 = Botones(1);
  var boton2 = Botones(2);
  var boton3 = Botones(3);

  return (
    <>
      {boton1}
      {boton2}
      {boton3}
    </>
  )
}
  
  export default App
  