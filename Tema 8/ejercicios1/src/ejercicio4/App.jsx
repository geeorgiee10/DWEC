import './App.css';
import { useState } from 'react';

function App() {
    const [times, setTime] = useState(0);
    function sumar(){

      setTime(times + 1)
      
    }

    return (
      <>
        <p>The button has been clicked { times } times</p>
        <button onClick={sumar}>Click me Button</button>
      </>
    )
  }
  
  export default App
  