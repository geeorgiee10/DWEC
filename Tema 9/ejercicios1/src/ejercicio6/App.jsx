import './App.css';
import { List } from './List';

function App() {
    
  var animals = ['dog 🐶', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  const lista = List(animals);

    return (
      <>
        
        {lista}
        
      </>
    )
  }
  
  export default App
  