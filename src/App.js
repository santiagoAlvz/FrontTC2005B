import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importación de Páginas
import Registro from './pages/Registro.js';
import DashboardSolicitante from './pages/DashboardSolicitante.js';
import ConfiguracionSolicitante from './pages/ConfiguracionSolicitante.js';
import CrearSolicitud from './pages/CrearSolicitud.js';
import PerfilProfesional from './pages/PerfilProfesional.js';
import Home from './pages/Home.js';
import DashboardReclutador from './pages/DashboardReclutador.js';
import ConfiguracionReclutador from './pages/ConfiguracionReclutador.js';
import CrearVacante from './pages/CrearVacante.js';

//Importación de barras de navegación
import LayoutSolicitante from './pages/LayoutSolicitante.js';
import LayoutReclutador from './pages/LayoutReclutador.js';

import UserContext from './contexts/UserContext.js'

import './App.css';

function App() {

  const [user, setUser] = useState({id: 0, name: "undefined"});

  return(
    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/solicitante" element={<LayoutSolicitante/>}>
          <Route index element={<DashboardSolicitante/>}/>
          <Route path="configuracion" element={<ConfiguracionSolicitante/>}/>
          <Route path="solicitud" element={<CrearSolicitud/>}/>
          <Route path="perfil" element={<PerfilProfesional/>}/>
        </Route>
        <Route path="/reclutador" element={<LayoutReclutador/>}>
          <Route index element={<DashboardReclutador/>}/>
          <Route path="configuracion" element={<ConfiguracionReclutador/>}/>
          <Route path="vacante" element={<CrearVacante/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
