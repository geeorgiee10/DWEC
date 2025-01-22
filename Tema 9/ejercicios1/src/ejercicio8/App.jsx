import JSON from './example.json';
import './App.css'

function App() {

  const archivoJSON = JSON.Examples.map((example, i) =>(
    <div className='div' key={i}>
      <h1 className='titulos'>{example.setup}</h1>
      <span className='texto'>{example.punchline}</span>
    </div>
  )) 

    return (
      <>
        
        {archivoJSON}
        
      </>
    )
  }
  
  export default App
  