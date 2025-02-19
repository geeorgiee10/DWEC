import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://127.0.0.1:3000");

export function Chat() {
    
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        socket.connect();
      
        socket.on("HolaDesdeElServidor", (jsonDatos) => {
            let datos = JSON.parse(jsonDatos);
            setMessages(prev => [...prev, datos]);
        });

        socket.on("Conectado", (nombre) => {
            setMessages(prev => [...prev, { nombre, texto: "se ha conectado", imagen: "" }]);
        });

        socket.on("Desconectado", (nombre) => {
            setMessages(prev => [...prev, { nombre, texto: "se ha desconectado", imagen: "" }]);
        });

        socket.on("lista", (lista) => {
            setUsers(lista);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        const mensaje = { nombre: user, texto: text};
        socket.emit("mensaje", JSON.stringify(mensaje));
        setText('');
    };

    const sendUserName = () => {
        if (socket && user.trim()) {
            socket.emit("nombre", user);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Tu nombre" 
                value={user} 
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={sendUserName} >Enviar Nombre</button>
            <input 
                type="text" 
                placeholder="Escribe un mensaje" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={sendMessage}>Enviar</button>

            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        {message.nombre} dice: {message.texto}
                        {message.imagen && <img src={message.imagen} alt=""/>}
                    </li>
                ))}
            </ul>

            <h2>Usuarios conectados</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}
