import './App.css';
import { List } from './List';

function App() {
    
  var animals = ['dog 🐶', 'cat', 'chicken', 'cow', 'sheep', 'horse'];


    return (
      <>
        
        <List items={animals}></List>
        
      </>
    )
  }
  
  export default App
  