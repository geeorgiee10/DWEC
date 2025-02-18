import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router";


export function Defensa() {

  const [data, setData] = useState([]);
  let [contador, setContador] = useState(0);


  const cargar = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())  
    .then(Newdata => {
        setData([Newdata]);
    })  
    .catch(error => console.error('Error:', error));  
  };

    useEffect(() => {
        cargar();
    }, []);


    const mostrar = data.map((dato) =>(
        dato.map((datoUnico) => (
            contador++,
            contador <= 10 && (
                <div key={datoUnico.id} className='card m-auto'>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <Link className="LinkRouter" to={`/defensa/${datoUnico.id}`}>
                            <h5 className="card-title">{datoUnico.title}</h5>
                        </Link>
                        <span>Completed: {datoUnico.completed}</span>
                        <span>User: {datoUnico.userId}</span>
                    </div>
                </div>
            )
            

        ))       
    ));


    return (
      <> 
            {mostrar}
      </>
    )
  }
  


