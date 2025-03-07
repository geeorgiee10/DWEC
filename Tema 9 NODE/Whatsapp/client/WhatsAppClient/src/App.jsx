import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chat } from './components/chat';
import { Landing } from './components/landing';
import { Inicio } from './components/inicio';
import { Perfil } from './components/perfil';
import { RutasProtegidas } from './components/RutasProtegidas';
import { Error404 } from './components/Error404';

function App() {

  return (
    <>
      <BrowserRouter>
      
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route path="/chat" element={<Chat />} />

          <Route element={<RutasProtegidas />}>
            
          </Route>


          <Route element={<RutasProtegidas />}>
            <Route path="/profile" element={<Perfil />} />
          </Route>
          <Route path="/login" element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      
    </BrowserRouter>
    </>
  )
}

export default App
