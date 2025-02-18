import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



export function DetalleDefensa() {

  const { id } = useParams();
  const [data, setData] = useState([]);


  const detailPokemon = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(Newdata => {
        setData([Newdata]);
      }) 
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
      if (id) {
        detailPokemon();
      }
  }, [id]);


  const mostrar = data.map((dato) =>(

    <div key={dato.id} className='card m-auto'>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title">{dato.title}</h5>
            <span>Completed: {dato.completed}</span>
            <span>User: {dato.userId}</span>
        </div>
    </div>
        
));
 

  return (
    <>
        
        {mostrar}

    </>
  )
}

