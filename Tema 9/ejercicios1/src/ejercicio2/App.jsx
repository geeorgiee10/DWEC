import './App.css'

function App() {

    function alerta (){
      alert("Clicked");
    }

    return (
      <>
        <button onClick={alerta}>Click me</button>
      </>
    )
  }
  
  export default App
  