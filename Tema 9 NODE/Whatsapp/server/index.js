const express = require('express')
const path = require('path')
const port = 3000
const { Server } = require('socket.io');
const { createServer } = require('node:http');


const app = express()
const server = createServer(app);
const io = new Server(server);
var numeroUsuarios = 0;
var listaUsuarios = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

//app.use(express.static('server/public'))
app.use(express.static(path.join(__dirname, '/public')))

io.on('connection', (socket) => {
  numeroUsuarios++;
  console.log('Nuevo usuarios, hay ' + numeroUsuarios + ' usuarios conectados');

  socket.on("nombre", (nombre) =>{
      socket.nombre = nombre;
      socket.broadcast.emit("Conectado", nombre);
      console.log(listaUsuarios);
      listaUsuarios.push(nombre);
      io.emit("lista", listaUsuarios);

      socket.on('mensaje', (jsonDatos)=>{
        console.log("Soy el servidor y recibo mensaje " + jsonDatos);
        io.emit("HolaDesdeElServidor", jsonDatos);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
        numeroUsuarios--;
        listaUsuarios = listaUsuarios.filter(usuario => usuario !== socket.nombre);
        io.emit("lista", listaUsuarios);
        socket.broadcast.emit("Desconectado", socket.nombre);
        console.log('Ahora hay ' + numeroUsuarios + ' usuarios conectados');
      });
  });

  

  
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})