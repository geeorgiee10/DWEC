import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [data, setData] = useState([]);


    useEffect(() => {
      fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then(response => response.json())  
        .then(data => setData(data))   
        .catch(error => console.error('Error:', error));  
    }, []);


    const mostrar = data.map((dato, i) =>(
      <div className='div' key={i}>
        <img src={dato.avatar} alt={dato.username} />
        <span className='texto'>{dato.username}</span>
      </div>
    )) 

    return (
      <>
        <div className='contenedor'>
          {mostrar}
        </div>
        
      </>
    )
  }
  
  export default App
  